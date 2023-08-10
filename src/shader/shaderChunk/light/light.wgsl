struct ReflectedLight {
    ambient: vec3<f32>,
    directDiffuse:vec3<f32>,
    directSpecular:vec3<f32>,
    indirectDiffuse:vec3<f32>,
    indirectSpecular:vec3<f32>,
    testColor: vec3<f32>,
    }; 
struct IncidentLight {
    color: vec3<f32>,
    direction: vec3<f32>,
    visible: bool,
};
struct Geometry {
    position: vec3<f32>,
    normal: vec3<f32>,
    viewDir: vec3<f32>,
    viewPosition:vec3<f32>,
    dotNV:f32,
    #if USE_CLEARCOAT
        vec3 clearcoatNormal;
    #endif
};

#if USE_SPOTLIGHT
    struct SpotLight {
        position: vec3<f32>,
        distance: f32,
        direction: vec3<f32>,
        coneCos: f32,
        color: vec3<f32>,
        penumbraCos: f32,
        decay: f32,
    };
    fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{
        var direction:vec3<f32> = spotLight.position - worldPos;
        var lightColor:ReflectedLight;
        let lightDistance:f32 = length(direction);
        direction = normalize(direction);
        let angleCos:f32 = dot( direction, spotLight.direction );
        let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, spotLight.decay), 0.0, 1.0);
        let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
        let decayTotal:f32 = decay * spotEffect;
        let d:f32 = max( dot( n, direction ), 0.0 )  * decayTotal;
        lightColor.directDiffuse= spotLight.color * d;
        let halfDir:vec3<f32> = normalize( v + direction );
        let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;
        lightColor.directSpecular= spotLight.color * s;
        return lightColor;
    }
    fn getSpotLightIncidentLight(spotLight:SpotLight, geometry:Geometry)->IncidentLight {
        var incidentLight:IncidentLight;
        let lVector:vec3<f32> = spotLight.position - geometry.position;
        incidentLight.direction = normalize( lVector );

        let lightDistance:f32 = length( lVector );
        let angleCos:f32 = dot( incidentLight.direction, spotLight.direction );

        let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
        let decayEffect:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);

        incidentLight.color=spotLight.color*spotEffect * decayEffect; 
        return  incidentLight;
    }

#endif 

#if USE_POINTLIGHT
    struct PointLight {
        position: vec3<f32>,
        distance: f32,
        color: vec3<f32>,
        decay: f32,
    };
    fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{
        var lightColor:ReflectedLight;
        var direction:vec3<f32> = worldPos - pointLight.position;
        let dist:f32 = length( direction );
        direction = normalize(direction);
        let decay = clamp(1.0 - pow(dist / pointLight.distance, pointLight.decay), 0.0, 1.0);

        let d =  max( dot( n, -direction ), 0.0 ) * decay;
        lightColor.directDiffuse = pointLight.color * d;

        let halfDir:vec3<f32> = normalize( v - direction );
        let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess )  * decay;
        lightColor.directSpecular = pointLight.color * s;
        return lightColor;
    }
    fn getPointLightIncidentLight(pointLight:PointLight, geometry:Geometry)->IncidentLight {
        var incidentLight:IncidentLight;
        let lVector:vec3<f32> = pointLight.position-geometry.position;
        incidentLight.direction= normalize( lVector );
        let lightDistance:f32 = length( lVector );
        // let weight:f32=1.0 - pow(lightDistance/pointLight.distance, 4.0);
        incidentLight.color=pointLight.color*clamp(1.0 - pow(lightDistance/pointLight.distance, 4.0), 0.0, 1.0);
        return incidentLight;
    }
#endif
#if USE_DIRTECTLIGHT
    struct DirectionalLight {
        direction: vec3<f32>,
        isOpenShadow: f32, // 0 or 1
        color: vec3<f32>,
        isCascadedShadow: f32 // 0 or 1
    };
    fn getDirectLightInfo(directionalLight:DirectionalLight,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{
        var lightColor:ReflectedLight;
        let d:f32 = max(dot(n, -directionalLight.direction), 0.0);
        lightColor.directDiffuse += directionalLight.color * d;

        let halfDir:vec3<f32> = normalize( v - directionalLight.direction );
        let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess );
        lightColor.directSpecular += directionalLight.color * s;
        return lightColor;
    }
    fn getDirectionalDirectLightIncidentLight(directionalLight:DirectionalLight,geometry:Geometry)->IncidentLight {
        var incidentLight:IncidentLight;
        incidentLight.color = directionalLight.color;
        incidentLight.direction = normalize(directionalLight.direction);
        return incidentLight;         
    }
#endif

#if OPEN_SHADOW 
    struct LightInfo {
        direction: vec3<f32>,
        viewport: vec4<f32>,
    };
    
    fn linearizeDepth(depth: f32, near: f32, far: f32)->f32 {
        return 2 * (near * far) / (far + near - depth * (far - near));
    }

    fn getCubeFace(v : vec3<f32>) -> i32{
        let vAbs = abs(v);
    
        if (vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {
            if (v.z < 0.0) {
            return 3;
            }
            return 2;
        }
    
        if (vAbs.y >= vAbs.x) {
            if (v.y < 0.0) {
            return 5;
            }
            return 4;
        }
    
        if (v.x < 0.0) {
            return 1;
        }
        return 0;
    }

    fn getCascadedIndex(z: f32, cascadedBreakVSArray: array<f32, 4>) -> i32 {
        if (z >= cascadedBreakVSArray[2] && z <= cascadedBreakVSArray[3]) {
            return 3;
        }
        if (z >= cascadedBreakVSArray[1] && z < cascadedBreakVSArray[2]) {
            return 2;
        }
        if (z >= cascadedBreakVSArray[0] && z < cascadedBreakVSArray[1]) {
            return 1;
        }

        if (z >= 0 && z < cascadedBreakVSArray[0]) {
            return 0;
        }
        return -1;
    }

    fn getShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, lightPos:vec4<f32>, geometry:Geometry, lightInfo:LightInfo, index:u32, isPointLight: bool, near: f32, far: f32)->f32 {
        var visibility = 0.0;
        var projectPos: vec3<f32> = lightPos.xyz / lightPos.w;
        var shadowPos: vec3<f32> = vec3(projectPos.xy * vec2(0.5, -0.5) + vec2(0.5), projectPos.z);
        var d:f32 = dot(geometry.normal, -lightInfo.direction);
        var bias = max(0.012 * (1.0 - d), 0.001) / lightPos.w;
        let oneOverShadowDepthTextureSize = 1.0 / 1024.0;
        // var depth = select(shadowPos.z, (linearizeDepth(shadowPos.z, near, far) - near) / (far- near), isPerspectiveCamera);
        var depth = shadowPos.z;

        if (isPointLight) {
            shadowPos.x = shadowPos.x * lightInfo.viewport.z;
            shadowPos.y = shadowPos.y * lightInfo.viewport.w;
            var viewportX = lightInfo.viewport.x * lightInfo.viewport.z;
            var viewportY = lightInfo.viewport.y * lightInfo.viewport.w;
            var uvOffset = 1.5 / 1024.0;
            shadowPos.x = clamp(shadowPos.x + viewportX, viewportX + uvOffset, viewportX + lightInfo.viewport.z - uvOffset);
            shadowPos.y = clamp(shadowPos.y + viewportY, viewportY + uvOffset, viewportY + lightInfo.viewport.w - uvOffset);
        }

        for (var y = -1; y <= 1; y++) {
            for (var x = -1; x <= 1; x++) {
                let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;
            
                visibility += textureSampleCompare(
                    shadowMapArray, shadowSampler,
                    shadowPos.xy + offset, index, depth - bias);
            }
        }
        visibility /= 9.0;
        var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;
        if (!inFrustum || depth > 1.0) {
            visibility = 1.0;
        }
        return visibility;
    }

    fn getCascadedShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, lightPos:vec4<f32>, geometry:Geometry, lightInfo:LightInfo, index:i32)->f32 {
        var visibility = 0.0;
        var projectPos: vec3<f32> = lightPos.xyz / lightPos.w;
        var shadowPos: vec3<f32> = vec3(projectPos.xy * vec2(0.5, -0.5) + vec2(0.5), projectPos.z);
        var d:f32 = dot(geometry.normal, -lightInfo.direction);
        var bias = max(0.012 * (1.0 - d), 0.001) / lightPos.w;
        let oneOverShadowDepthTextureSize = vec2(1 / (1024.0 * 4), 1 / 1024.0);
        // var depth = select(shadowPos.z, (linearizeDepth(shadowPos.z, near, far) - near) / (far- near), isPerspectiveCamera);
        var depth = shadowPos.z;

        shadowPos.x = shadowPos.x * lightInfo.viewport.z;
        shadowPos.y = shadowPos.y * lightInfo.viewport.w;
        var viewportX = lightInfo.viewport.x * lightInfo.viewport.z;
        var viewportY = lightInfo.viewport.y * lightInfo.viewport.w;
        var uvOffsetX = 1.5 / (1024.0 * 4);
        var uvOffsetY = 1.5 / 1024.0;
        shadowPos.x = clamp(shadowPos.x + viewportX, viewportX + uvOffsetX, viewportX + lightInfo.viewport.z - uvOffsetX);
        shadowPos.y = clamp(shadowPos.y + viewportY, viewportY + uvOffsetY, viewportY + lightInfo.viewport.w - uvOffsetY);


        for (var y = -1; y <= 1; y++) {
            for (var x = -1; x <= 1; x++) {
                let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;
            
                visibility += textureSampleCompare(
                    shadowMapArray, shadowSampler,
                    shadowPos.xy + offset, index, depth - bias);
            }
        }
        visibility /= 9.0;
        var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;
        if (!inFrustum || depth > 1.0) {
            visibility = 1.0;
        }
        return visibility;
    }
#endif

#if USE_AMBIENTLIGHT||USE_SPOTLIGHT||USE_POINTLIGHT||USE_DIRTECTLIGHT
    struct LightUniforms{
        #if USE_AMBIENTLIGHT
            ambient:vec4<f32>,
        #endif
        #if USE_SPOTLIGHT
            spotLights:array<SpotLight,spotLightsCount>,
        #endif
        #if USE_POINTLIGHT
            pointLights:array<PointLight,pointLightsCount>,
        #endif
        #if USE_DIRTECTLIGHT
            dirtectLights:array<DirectionalLight,dirtectLightsCount>,
        #endif
    }
    @group(2) @binding(lightBinding) var<storage, read> lightUniforms: LightUniforms;

    #if OPEN_SHADOW
        #if USE_SPOTLIGHT_SHADOWMAP
            struct SpotLightShadow {
                shadowCameraVPMatrix: mat4x4<f32>,
                shadowCameraNear: f32,
                shadowCameraFar: f32
            }
        #endif
        #if USE_POINTLIGHT_SHADOWMAP
            struct PointLightShadow {
                shadowCameraVPMatrixArray: array<mat4x4<f32>, 6>,
                shadowCameraViewportArray: array<vec4<f32>, 6>,
                shadowCameraNear: f32,
                shadowCameraFar: f32,
                // shadowCameraVPMatrix: mat4x4<f32>,
                // shadowCameraVPMatrixArray: array<mat4x4<f32>, 6>,
                // shadowCameraViewportArray: array<vec4<f32>, 6>,
            }
        #endif
        #if USE_DIRECTLIGHT_SHADOWMAP
            struct DirectLightShadow {
                shadowCameraVPMatrix: mat4x4<f32>,
            }
        #endif
        #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP
            struct DirectLightCascadedShadow {
                shadowCameraVPMatrixArray: array<mat4x4<f32>, 4>,
                shadowCameraViewportArray: array<vec4<f32>, 4>,
                cascadedBreakVSArray: array<f32, 4>
            }
        #endif
        struct ShadowUniforms{
            #if USE_SPOTLIGHT_SHADOWMAP
                spotLightShadows:array<SpotLightShadow,spotLightShadowMapsCount>,
            #endif
            #if USE_POINTLIGHT_SHADOWMAP
                pointLightShadows:array<PointLightShadow,pointLightShadowMapsCount>,
            #endif
            #if USE_DIRECTLIGHT_SHADOWMAP
                directLightShadows:array<DirectLightShadow,directLightShadowMapsCount>,
            #endif
            #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP
                directLightCascadedShadows:array<DirectLightCascadedShadow,directLightCascadedShadowMapsCount>
            #endif
        }
        @group(2) @binding(shadowBinding) var<storage, read> shadowUniforms: ShadowUniforms;

        #if SPOTLIGHT_SHADOWMAP_TEXTUREARRAY
            @group(2) @binding(spotLightShadowMapTextureArrayBinding) var spotLightShadowMapTextureArray: texture_depth_2d_array;
        #endif
        #if POINTLIGHT_SHADOWMAP_TEXTUREARRAY
            @group(2) @binding(pointLightShadowMapTextureArrayBinding) var pointLightShadowMapTextureArray: texture_depth_2d_array;
        #endif
        #if DIRECTLIGHT_SHADOWMAP_TEXTUREARRAY
            @group(2) @binding(directLightShadowMapTextureArrayBinding) var directLightShadowMapTextureArray: texture_depth_2d_array;
        #endif
        #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP
            @group(2) @binding(directLightCascadedShadowMapTextureArrayBinding) var directLightCascadedShadowMapTextureArray: texture_depth_2d_array;
        #endif
        
        @group(2) @binding(shadowSamplerBinding) var shadowSampler: sampler_comparison;
    #endif

#endif
#if MATERIAL_PHONG
    fn parseLights(geometry:Geometry,shininess:f32)->ReflectedLight {
#elif MATERIAL_PBR
    fn parseLights(geometry:Geometry,material:PhysicalMaterial)->ReflectedLight{
#endif
    var reflectedLight:ReflectedLight;
    var shadowValue:f32 = 1.0;
    #if USE_AMBIENTLIGHT
        //处理环境光
        var ambientColor:vec3<f32> = lightUniforms.ambient.xyz * lightUniforms.ambient.w;
        reflectedLight.ambient += ambientColor;
    #endif

    #if USE_SPOTLIGHT
        //处理聚光灯
        var spotLight:SpotLight;
        for (var k = 0u; k < spotLightsCount; k = k + 1u) {
            spotLight= lightUniforms.spotLights[k];
            #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_SPOTLIGHT_SHADOWMAP
                if k < textureNumLayers(spotLightShadowMapTextureArray) {
                    var spotLightShadow:SpotLightShadow = shadowUniforms.spotLightShadows[k];
                    var lightPos: vec4<f32> = spotLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);
                    var lightInfo:LightInfo;
                    lightInfo.direction = normalize(geometry.position - spotLight.position);

                    shadowValue = getShadowValue(spotLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, k, false,
                        spotLightShadow.shadowCameraNear, spotLightShadow.shadowCameraFar);
                }
                spotLight.color *= shadowValue;
            #endif
            #if MATERIAL_PHONG
                let spReflectedLight=getSpotLightInfo(spotLight,geometry.position,shininess,geometry.normal,geometry.viewDir);
            #elif MATERIAL_PBR
                let incidentLight=getSpotLightIncidentLight(spotLight,geometry);
                let spReflectedLight=direct_Physical(incidentLight, geometry, material);
            #endif

            reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
            reflectedLight.directSpecular+=spReflectedLight.directSpecular;
        }
    #endif
    #if USE_POINTLIGHT
        //处理点光源
        var pointLight:PointLight;
        for (var j = 0u; j < pointLightsCount;j = j + 1u) {
            pointLight = lightUniforms.pointLights[j];
            #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_POINTLIGHT_SHADOWMAP
                if j < textureNumLayers(pointLightShadowMapTextureArray) {
                    var pointLightShadow:PointLightShadow = shadowUniforms.pointLightShadows[j];
                    var lightInfo:LightInfo;
                    lightInfo.direction = normalize(geometry.position - pointLight.position);
                    var cubeFace = getCubeFace(lightInfo.direction);
                    var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrixArray[cubeFace] * vec4<f32>(geometry.position,1.0);
                    lightInfo.viewport = pointLightShadow.shadowCameraViewportArray[cubeFace];

                    // var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);

                    shadowValue = getShadowValue(pointLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, j, true,
                        pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar);
                    
                    // reflectedLight.testColor = vec3(pointLightShadow.shadowCameraFar / 1000, 
                    //     pointLightShadow.shadowCameraVPMatrixArray[5][3][2] / 255, pointLightShadow.shadowCameraVPMatrixArray[5][3][3] / 255);
                    // reflectedLight.testColor = vec3(pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraNear);
                }
                pointLight.color *= shadowValue;
            #endif
            #if MATERIAL_PHONG
                let poiReflectedLight=getPointLightInfo(pointLight,geometry.position,shininess,geometry.normal,geometry.viewDir);
            #elif MATERIAL_PBR
                let incidentLight=getPointLightIncidentLight(pointLight,geometry);
                let poiReflectedLight=direct_Physical(incidentLight, geometry, material);
            #endif

            reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
            reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
        }
    #endif
    #if USE_DIRTECTLIGHT
        //处理方向光
        var directionalLight:DirectionalLight;
        for (var i= 0u; i <dirtectLightsCount; i = i + 1u) {
            directionalLight = lightUniforms.dirtectLights[i];
            #if MATERIAL_PHONG&&OPEN_SHADOW
                var shadowMapIndex:u32 = 0;
                var cascadedShadowMapIndex = 0;
                #if USE_DIRECTLIGHT_SHADOWMAP
                    if directionalLight.isOpenShadow == 1.0 && directionalLight.isCascadedShadow == 0.0 {
                        var directLightShadow:DirectLightShadow = shadowUniforms.directLightShadows[shadowMapIndex];
                        var lightPos: vec4<f32> = directLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);
                        var lightInfo:LightInfo;
                        lightInfo.direction = directionalLight.direction;
                            
                        shadowValue = getShadowValue(directLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, shadowMapIndex, false, 0, 0);
                        directionalLight.color *= shadowValue;
                        shadowMapIndex++;
                    }
                #endif

                #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP
                    if directionalLight.isOpenShadow == 1.0 && directionalLight.isCascadedShadow == 1.0 {
                        var directLightCascadedShadow:DirectLightCascadedShadow = shadowUniforms.directLightCascadedShadows[cascadedShadowMapIndex];
                        var cascadedIndex = getCascadedIndex(geometry.viewPosition.z, directLightCascadedShadow.cascadedBreakVSArray);
                        if (cascadedIndex == -1) {
                            discard;
                        }
                        var lightPos: vec4<f32> = directLightCascadedShadow.shadowCameraVPMatrixArray[cascadedIndex] * vec4<f32>(geometry.position,1.0);
                        var lightInfo:LightInfo;
                        lightInfo.direction = directionalLight.direction;
                        lightInfo.viewport = directLightCascadedShadow.shadowCameraViewportArray[cascadedIndex];

                        shadowValue = getCascadedShadowValue(directLightCascadedShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, cascadedShadowMapIndex);
                        directionalLight.color *= shadowValue;
                        cascadedShadowMapIndex++;
                        // if (geometry.ndcPosition.z * 0.5 + 0.5) < 0.8 {
                        //     reflectedLight.testColor = vec3(0.0, geometry.viewPosition.z / 3000.0, 0.0);
                        // } else {
                        //     reflectedLight.testColor = vec3(f32(cascadedIndex), 0.0, 0.0);
                        // }
                        // reflectedLight.testColor = vec3(f32(cascadedIndex * 85) / 255, (geometry.viewPosition.z) / 1500, 0.0);
                    }
                #endif
                
            #endif
        
            #if MATERIAL_PHONG
                let dirReflectedLight=getDirectLightInfo(directionalLight,shininess,geometry.normal,geometry.viewDir);
            #elif MATERIAL_PBR
                let incidentLight=getDirectionalDirectLightIncidentLight(directionalLight,geometry);
                let dirReflectedLight=direct_Physical(incidentLight, geometry, material);
            #endif

            reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
            reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
        }
    #endif
    return reflectedLight;
}