import { wgslParseDefines } from "../../WgslPreprocessor";
export default function ibl(defines) {
	return wgslParseDefines`
  fn getLightProbeRadiance( viewDir:vec3<f32>,normal:vec3<f32>, roughness:f32 )->vec3<f32>{
    var reflectVec:vec3<f32> = reflect( -viewDir, normal );
    reflectVec.x = -reflectVec.x; // TextureCube is left-hand,so x need inverse
    let mipCount:f32 = 10.0; // resolution of 256x256
    let lod:f32 = roughness * mipCount;
    let specularLight:vec3<f32> = textureSampleLevel(specularEnvTexture,specularEnvSampler, reflectVec, lod).rgb;
    return specularLight;
  }
  fn getLightProbeIrradiance( lightProbe:array<vec3<f32>,9>, normal:vec3<f32>)->vec3<f32> {
    var worldNormal:vec3<f32> = normal;
    worldNormal.x = -normal.x;
    var irradiance:vec3<f32> = lightProbe[0];
    irradiance+=lightProbe[1] * (normal.y);
    irradiance+=lightProbe[2] * (normal.z) ;
    irradiance+=lightProbe[3] * (normal.x) ;

    irradiance+=lightProbe[4] * (normal.y * normal.x) ;
    irradiance+=lightProbe[5] * (normal.y * normal.z) ;
    irradiance+=lightProbe[6] * (3.0 * normal.z * normal.z - 1.0);
    irradiance+=lightProbe[7] * (normal.z * normal.x) ;
    irradiance+=lightProbe[8] * (normal.x * normal.x - normal.y * normal.y);

    return max(irradiance, vec3<f32>(0.0,0.0,0.0));
  }
  fn DFGApprox( specularColor:vec3<f32>, roughness:f32,dotNV:f32 )->vec3<f32> {
    const c0:vec4<f32> = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );
    let c1:vec4<f32> = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );
    let r:vec4<f32> = roughness * c0 + c1;
    let a004:f32 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
    let fab:vec2<f32> = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;
    return specularColor * fab.x + fab.y;
  }
  //间接光照
  fn indirectDiffuse_Physical(geometry:Geometry, material:PhysicalMaterial )->ReflectedLight {
      var reflectedLight:ReflectedLight;
      var irradiance:vec3<f32> = lightUniforms.ambient.xyz*lightUniforms.ambient.w;
      irradiance *= PI;
      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
      return reflectedLight;
  }
  //间接高光
  fn indirectSpecular_Physical(geometry:Geometry, material:PhysicalMaterial)->ReflectedLight {
      var reflectedLight:ReflectedLight;
      // IBL specular
      //let radiance:vec3<f32> = getLightProbeRadiance(geometry.viewDir, geometry.normal, material.roughness,  u_envMapLight.specularIntensity);
      let radiance:vec3<f32> = getLightProbeRadiance(geometry.viewDir, geometry.normal, material.roughness);
      let radianceAttenuation:f32 = 1.0;
      reflectedLight.indirectSpecular += radianceAttenuation * radiance * DFGApprox(material.specularColor, material.roughness, geometry.dotNV );
      return reflectedLight;
    }
  `;
}
