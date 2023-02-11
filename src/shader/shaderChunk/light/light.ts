import { wgslParseDefines } from "../../WgslPreprocessor";
export default function light(defines) {
	return wgslParseDefines`   
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
        fn getSpotLightInfo(spotLight: SpotLight, geometry: GeometricContext) -> IncidentLight {
            var light:IncidentLight;
            let lVector = spotLight.position - geometry.position;
    
            light.direction = normalize(lVector);
    
            let angleCos = dot(light.direction, spotLight.direction);
    
            let spotAttenuation = getSpotAttenuation(spotLight.coneCos, spotLight.penumbraCos, angleCos);
    
            if (spotAttenuation > 0.0) {
    
                let lightDistance = length(lVector);
    
                light.color = spotLight.color * spotAttenuation;
                light.color *= getDistanceAttenuation(lightDistance, spotLight.distance, spotLight.decay);
                light.visible = (length(light.color)>0);
            } else {
    
                light.color = vec3(0.0);
                light.visible = false;
            }
            return light;
        }
    #endif 

    #if ${defines.pointLightsCount > 0}
        struct PointLight {
            position: vec3<f32>,
            distance: f32,
            color: vec3<f32>,
            decay: f32,
        };
        fn getPointLightInfo(pointLight: PointLight, geometry: GeometricContext) -> IncidentLight {
            var light:IncidentLight;
            let lVector:vec3<f32> = pointLight.position - geometry.position;
            light.direction = normalize(lVector);
            let lightDistance = length(lVector); 
            light.color = pointLight.color;
            light.color *= getDistanceAttenuation(lightDistance, pointLight.distance, pointLight.decay);
            light.visible =(length(light.color)>0);
            return light;
        }
    #endif
    #if ${defines.dirtectLightsCount > 0}
        struct DirtectLight {
            direction: vec3<f32>,
            color: vec3<f32>,
        };
        fn getDirtectLightInfo(directionalLight: DirtectLight, geometry: GeometricContext) -> IncidentLight {
            var light:IncidentLight;
            light.color = directionalLight.color;
            light.direction = directionalLight.direction;
            light.visible = true;
            return light;
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
   
    #if ${defines.materialPhong}
        fn parseLights(geometry:GeometricContext,material:BlinnPhongMaterial)->ReflectedLight{
    #elif ${defines.materialPbr}
        fn parseLights(geometry:GeometricContext,material:PhysicalMaterial)->ReflectedLight{
    #endif

        var  incidentLight:IncidentLight;
        var reflectedLight:ReflectedLight;
        #if ${defines.dirtectLightsCount > 0}
            //处理方向光
            var dirtectLight:DirtectLight;
            for (var i : u32 = 0u; i <${defines.dirtectLightsCount}; i = i + 1u) {
                dirtectLight = lightUniforms.dirtectLights[i];
                incidentLight=getDirtectLightInfo(dirtectLight, geometry);
                #if ${defines.materialPhong}
                    let dirReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let dirReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
                #endif
                
                reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.pointLightsCount > 0}
            //处理点光源
            var pointLight:PointLight;
            for (var i : u32 = 0u; i < ${defines.pointLightsCount};i = i + 1u) {
                pointLight = lightUniforms.pointLights[i];
                incidentLight =getPointLightInfo( pointLight, geometry);
                #if ${defines.materialPhong}
                    let poiReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let poiReflectedLight=RE_Direct_Physical(incidentLight, geometry, material);
                #endif
                reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.spotLightsCount > 0}
            //处理聚光灯
            var spotLight:SpotLight;
            for (var i : u32 = 0u; i < ${defines.spotLightsCount}; i = i + 1u) {
                spotLight = lightUniforms.spotLights[i];
                incidentLight =getSpotLightInfo( spotLight, geometry);
                #if ${defines.materialPhong}
                    let spReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let spReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
                #endif
                reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=spReflectedLight.directSpecular;
            }
        #endif
        return reflectedLight;
    }`;
}
