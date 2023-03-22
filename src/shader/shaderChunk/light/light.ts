import { wgslParseDefines } from "../../WgslPreprocessor";
export default function light(defines) {
	return wgslParseDefines` 
    struct ReflectedLight {
        ambient: vec3<f32>,
        directDiffuse:vec3<f32>,
        directSpecular:vec3<f32>,
        indirectDiffuse:vec3<f32>,
        indirectSpecular:vec3<f32>,
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
        dotNV:f32,
        #if ${defines.USE_CLEARCOAT}
            vec3 clearcoatNormal;
        #endif
    };

    #if ${defines.spotLightsCount > 0}
        struct SpotLight {
            position: vec3<f32>,
            distance: f32,
            direction: vec3<f32>,
            coneCos: f32,
            color: vec3<f32>,
            penumbraCos: f32,
            decay: f32,
        };
        fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->ReflectedLight{
                var direction:vec3<f32> = spotLight.position - worldPos;
                var lightColor:ReflectedLight;
                let lightDistance:f32 = length(direction);
                direction = normalize(direction);
                let angleCos:f32 = dot( direction, spotLight.direction );
                let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, spotLight.decay), 0.0, 1.0);
                let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
                let decayTotal:f32 = decay * spotEffect;
                let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;
                lightColor.directDiffuse= spotLight.color * d;
                let halfDir:vec3<f32> = normalize( V + direction );
                let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;
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

    #if ${defines.pointLightsCount > 0}
        struct PointLight {
            position: vec3<f32>,
            distance: f32,
            color: vec3<f32>,
            decay: f32,
        };
        fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->ReflectedLight{
            var lightColor:ReflectedLight;
            var direction:vec3<f32> = worldPos - pointLight.position;
            let dist:f32 = length( direction );
            direction = normalize(direction);
            let decay = clamp(1.0 - pow(dist / pointLight.distance, pointLight.decay), 0.0, 1.0);
    
            let d =  max( dot( N, -direction ), 0.0 ) * decay;
            lightColor.directDiffuse = pointLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;
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
    #if ${defines.dirtectLightsCount > 0}
        struct DirectionalLight {
            direction: vec3<f32>,
            color: vec3<f32>,
        };
        fn getDirtectLightInfo(directionalLight:DirectionalLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->ReflectedLight{
            var lightColor:ReflectedLight;
            let d:f32 = max(dot(N, -directionalLight.direction), 0.0);
            lightColor.directDiffuse += directionalLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - directionalLight.direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );
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

    #if ${defines.openShadow} 
        struct LightInfo {
            direction: vec3<f32>,
        };
        fn getShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, shadowPos:vec3<f32>, geometry:Geometry, lightInfo:LightInfo, index:u32)->f32 {
            var visibility = 0.0;
            var d:f32 = dot(geometry.normal, -lightInfo.direction);
            var bias = max(0.015 * (1.0 - d), 0.001);
            let oneOverShadowDepthTextureSize = 1.0 / 1024.0;
            for (var y = -1; y <= 1; y++) {
                for (var x = -1; x <= 1; x++) {
                    let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;
                
                    visibility += textureSampleCompare(
                        shadowMapArray, shadowSampler,
                        shadowPos.xy + offset, index, shadowPos.z - bias);
                }
            }
            visibility /= 9.0;
            var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;
            if (!inFrustum && shadowPos.z > 1.0) {
                visibility = 1.0;
            }
            return visibility;
        }
    #endif

    #if ${
		defines.ambientLightCount || defines.spotLightsCount || defines.pointLightsCount || defines.dirtectLightsCount
	}
        struct LightUniforms{
            #if ${defines.ambientLightCount}
                ambient:vec4<f32>,
            #endif
            #if ${defines.spotLightsCount}
                spotLights:array<SpotLight,${defines.spotLightsCount}>,
            #endif
            #if ${defines.pointLightsCount}
                pointLights:array<PointLight,${defines.pointLightsCount}>,
            #endif
            #if ${defines.dirtectLightsCount}
                dirtectLights:array<DirectionalLight,${defines.dirtectLightsCount}>,
            #endif
            #if ${defines.openShadow}
                #if ${defines.spotLightShadowMapsCount}
                    spotLightVPMatrixArray: array<mat4x4<f32>>,
                #endif
                #if ${defines.pointLightShadowMapsCount}
                    pointLightVPMatrixArray: array<mat4x4<f32>>,
                #endif
                #if ${defines.directLightShadowMapsCount}
                    directLightVPMatrixArray: array<mat4x4<f32>>,
                #endif
            #endif
            
        }
        @group(2) @binding(${defines.lightBinding}) var<storage, read> lightUniforms: LightUniforms;

        #if ${defines.openShadow}
            #if ${defines.spotLightShadowMapTextureArrayBinding}
                @group(2) @binding(${
					defines.spotLightShadowMapTextureArrayBinding
				}) var spotLightShadowMapTextureArray: texture_depth_2d_array;
            #endif
            #if ${defines.pointLightShadowMapTextureArrayBinding}
                @group(2) @binding(${
					defines.pointLightShadowMapTextureArrayBinding
				}) var pointLightShadowMapTextureArray: texture_depth_2d_array;
            #endif
            #if ${defines.directLightShadowMapTextureArrayBinding}
                @group(2) @binding(${
					defines.directLightShadowMapTextureArrayBinding
				}) var directLightShadowMapTextureArray: texture_depth_2d_array;
            #endif
            @group(2) @binding(${defines.shadowSamplerBinding}) var shadowSampler: sampler_comparison;
        #endif

    #endif
    #if ${defines.materialPhong}
        fn parseLights(geometry:Geometry,shininess:f32)->ReflectedLight {
    #elif ${defines.materialPbr}
        fn parseLights(geometry:Geometry,material:PhysicalMaterial)->ReflectedLight{
    #endif
        var reflectedLight:ReflectedLight;
        var shadowValue:f32 = 1.0;
        #if ${defines.ambientLightCount > 0}
            //处理环境光
            var ambientColor:vec3<f32> = lightUniforms.ambient.xyz * lightUniforms.ambient.w;
            reflectedLight.ambient += ambientColor;
        #endif

        #if ${defines.spotLightsCount > 0}
            //处理聚光灯
            var spotLight:SpotLight;
            for (var k = 0u; k < ${defines.spotLightsCount}; k = k + 1u) {
                spotLight= lightUniforms.spotLights[k];
                #if ${defines.materialPhong && defines.openShadow && defines.spotLightShadowMapsCount}
                    var lightPos: vec4<f32> = lightUniforms.spotLightVPMatrixArray[k] * vec4<f32>(geometry.position,1.0);
                    var shadowPos: vec3<f32> = vec3(lightPos.xy * vec2(0.5, -0.5) + vec2(0.5), lightPos.z);
                    var lightInfo:LightInfo;
                    lightInfo.direction = normalize(geometry.position - spotLight.position);
                    
                    if k < textureNumLayers(spotLightShadowMapTextureArray) {
                        shadowValue = getShadowValue(spotLightShadowMapTextureArray, shadowSampler, shadowPos, geometry, lightInfo, k);
                    }
                    spotLight.color *= shadowValue;
                #endif
                #if ${defines.materialPhong}
                    let spReflectedLight=getSpotLightInfo(spotLight,geometry.position,shininess,geometry.normal,geometry.viewDir);
                #elif ${defines.materialPbr}
                    let incidentLight=getSpotLightIncidentLight(spotLight,geometry);
                    let spReflectedLight=direct_Physical(incidentLight, geometry, material);
                #endif

                reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=spReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.pointLightsCount > 0}
            //处理点光源
            var pointLight:PointLight;
            for (var j= 0u; j < ${defines.pointLightsCount};j = j + 1u) {
                pointLight = lightUniforms.pointLights[j];
                #if ${defines.materialPhong && defines.openShadow && defines.pointLightShadowMapsCount}
                    var lightPos: vec4<f32> = lightUniforms.pointLightVPMatrixArray[j] * vec4<f32>(geometry.position,1.0);
                    var shadowPos: vec3<f32> = vec3(lightPos.xy * vec2(0.5, -0.5) + vec2(0.5), lightPos.z);
                    var lightInfo:LightInfo;
                    lightInfo.direction = normalize(geometry.position - pointLight.position);

                    if j < textureNumLayers(pointLightShadowMapTextureArray) {
                        shadowValue = getShadowValue(pointLightShadowMapTextureArray, shadowSampler, shadowPos, geometry, lightInfo, j);
                    }
                    pointLight.color *= shadowValue;
                #endif
                #if ${defines.materialPhong}
                    let poiReflectedLight=getPointLightInfo(pointLight,geometry.position,shininess,geometry.normal,geometry.viewDir);
                #elif ${defines.materialPbr}
                   let incidentLight=getPointLightIncidentLight(pointLight,geometry);
                   let poiReflectedLight=direct_Physical(incidentLight, geometry, material);
                #endif

                reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.dirtectLightsCount > 0}
            //处理方向光
            var directionalLight:DirectionalLight;
            for (var i= 0u; i <${defines.dirtectLightsCount}; i = i + 1u) {
                directionalLight = lightUniforms.dirtectLights[i];
                #if ${defines.materialPhong && defines.openShadow && defines.directLightShadowMapsCount}
                    var lightPos: vec4<f32> = lightUniforms.directLightVPMatrixArray[i] * vec4<f32>(geometry.position,1.0);
                    var shadowPos: vec3<f32> = vec3(lightPos.xy * vec2(0.5, -0.5) + vec2(0.5), lightPos.z);
                    var lightInfo:LightInfo;
                    lightInfo.direction = directionalLight.direction;
                    
                    if i < textureNumLayers(directLightShadowMapTextureArray) {
                        shadowValue = getShadowValue(directLightShadowMapTextureArray, shadowSampler, shadowPos, geometry, lightInfo, i);
                    }
                    directionalLight.color *= shadowValue;
                #endif
            
                #if ${defines.materialPhong}
                    let dirReflectedLight=getDirtectLightInfo(directionalLight,shininess,geometry.normal,geometry.viewDir);
                #elif ${defines.materialPbr}
                    let incidentLight=getDirectionalDirectLightIncidentLight(directionalLight,geometry);
                    let dirReflectedLight=direct_Physical(incidentLight, geometry, material);
                #endif

                reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
            }
        #endif
        return reflectedLight;
    }`;
}
