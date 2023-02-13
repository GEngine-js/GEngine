import { wgslParseDefines } from "../../WgslPreprocessor";
export default function light(defines) {
	return wgslParseDefines`  
    struct LightColor{
        color:vec3<f32>,
    } 
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
        fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->LightColor{
                var direction:vec3<f32> = spotLight.position - worldPos;
                var lightColor:LightColor;
                let lightDistance:f32 = length(direction);
                direction = normalize(direction);
                let angleCos:f32 = dot( direction, -spotLight.direction );
                let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);
                let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
                let decayTotal:f32 = decay * spotEffect;
                let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;
                lightColor.color= spotLight.color * d;
                let halfDir:vec3<f32> = normalize( V + direction );
                let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;
                lightColor.color= spotLight.color * s;
                return lightColor;
           }
    #endif 

    #if ${defines.pointLightsCount > 0}
        struct PointLight {
            position: vec3<f32>,
            distance: f32,
            color: vec3<f32>,
            decay: f32,
        };
        fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->LightColor{
            var lightColor:LightColor;
            var direction:vec3<f32> = worldPos - pointLight.position;
            let dist:f32 = length( direction );
            direction = normalize(direction);
            let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);
    
            let d =  max( dot( N, -direction ), 0.0 ) * decay;
            lightColor.color += pointLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;
            lightColor.color += pointLight.color * s;
            return lightColor;
           }
    #endif
    #if ${defines.dirtectLightsCount > 0}
        struct DirtectLight {
            direction: vec3<f32>,
            color: vec3<f32>,
        };
        fn getDirtectLightInfo(directionalLight:DirtectLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->LightColor{
            var lightColor:LightColor;
            let d:f32 = max(dot(N, -directionalLight.direction), 0.0);
            lightColor.color += directionalLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - directionalLight.direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );
            lightColor.color += directionalLight.color * s;
            return lightColor;
        }
    #endif
    #if ${
		defines.ambientLightCount || defines.spotLightsCount || defines.pointLightsCount || defines.dirtectLightsCount
	}
    struct LightUniforms{
        #if ${defines.ambientLightCount}
            ambient:vec3<f32>,
        #endif
        #if ${defines.spotLightsCount}
            spotLights:array<SpotLight,${defines.spotLightsCount}>,
        #endif
        #if ${defines.pointLightsCount}
            pointLights:array<PointLight,${defines.pointLightsCount}>,
        #endif
        #if ${defines.dirtectLightsCount}
            dirtectLights:array<DirtectLight,${defines.dirtectLightsCount}>,
        #endif
        
    }
    @group(2) @binding(0) var<storage, read> lightUniforms: LightUniforms;
    #endif
    // #include <blinn_phong>
    #if ${defines.materialPhong}
    //worldPos:vec3<f32,shininess:f32,N:f32,V:f32
        //fn parseLights(geometry:GeometricContext,material:BlinnPhongMaterial)->ReflectedLight{
        fn parseLights(worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32> {
    #elif ${defines.materialPbr}
        fn parseLights(geometry:GeometricContext,material:PhysicalMaterial)->ReflectedLight{
    #endif

        // var  incidentLight:IncidentLight;
        // var reflectedLight:ReflectedLight;
        var lightColor = vec3<f32>( 0.0, 0.0, 0.0 );
        #if ${defines.spotLightsCount > 0}
            //处理聚光灯
            // var spotLight:SpotLight;
            for (var k = 0u; k < ${defines.spotLightsCount}; k = k + 1u) {
                var spotLight:SpotLight = lightUniforms.spotLights[k];
               // incidentLight =getSpotLightInfo( spotLight, geometry);
                #if ${defines.materialPhong}
                    //let spReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                    lightColor=lightColor+getSpotLightInfo(spotLight,worldPos,shininess,N,V).color;
                #elif ${defines.materialPbr}
                    let spReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
                #endif
                // reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
                // reflectedLight.directSpecular+=spReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.pointLightsCount > 0}
            //处理点光源
            var pointLight:PointLight;
            for (var j= 0u; j < ${defines.pointLightsCount};j = j + 1u) {
                pointLight = lightUniforms.pointLights[j];
                // incidentLight =getPointLightInfo( pointLight, geometry);
                #if ${defines.materialPhong}
                lightColor=lightColor+getPointLightInfo(pointLight,worldPos,shininess,N,V).color;
                    //let poiReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let poiReflectedLight=RE_Direct_Physical(incidentLight, geometry, material);
                #endif
                // reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
                // reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.dirtectLightsCount > 0}
        //处理方向光
        var dirtectLight:DirtectLight;
        for (var i= 0u; i <${defines.dirtectLightsCount}; i = i + 1u) {
            dirtectLight = lightUniforms.dirtectLights[i];
            //incidentLight=getDirtectLightInfo(dirtectLight, geometry);
            #if ${defines.materialPhong}
                //let dirReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                lightColor=lightColor+getDirtectLightInfo(dirtectLight,shininess,N,V).color;
            #elif ${defines.materialPbr}
                let dirReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
            #endif
            
            // reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
            // reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
        }
    #endif
        return lightColor;
        // return reflectedLight;
    }`;
}
