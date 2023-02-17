export default function ibl(defines) {
	return `
  fn getLightProbeRadiance( viewDir:vec3<f32>,baseSampler:sampler,normal:vec3<f32>, roughness:f32 ){
    vec3 reflectVec = reflect( -viewDir, normal );
   // reflectVec.x = -reflectVec.x; // TextureCube is left-hand,so x need inverse
    let mipCount:f32 = 10.0; // resolution of 256x256
    let lod:f32 = roughness * mipCount;
    let specularLight:vec3<f32> = textureSampleLevel(specularEnvSampler,baseSampler, reflectVec, lod).rgb;
  }
  //间接光照
  fn indirectDiffuse_Physical( irradiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial )->ReflectedLight {
      var reflectedLight:ReflectedLight;
      reflectedLight.indirectDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );
      return reflectedLight;
  }
  //间接高光
  fn indirectSpecular_Physical( radiance:vec3<f32>, irradiance:vec3<f32>, clearcoatRadiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial)->ReflectedLight {
      var reflectedLight:ReflectedLight;
  }
  `;
}
