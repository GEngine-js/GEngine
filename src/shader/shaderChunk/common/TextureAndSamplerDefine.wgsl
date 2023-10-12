#if USE_IBL
  @group(0) @binding(specularEnvTextureBinding) var specularEnvTexture : texture_cube <f32>;
  @group(0) @binding(specularEnvSamplerBinding) var specularEnvSampler : sampler;
#endif
#if USE_BASECOLORTEXTURE
  @group(0) @binding(baseColorTextureBinding) var baseColorTexture : texture_2d<f32>;
  @group(0) @binding(baseColorSamplerBinding) var baseColorSampler : sampler;
#endif
    //normal map
#if USE_NORMALTEXTURE
  @group(0) @binding(normalTextureBinding) var normalTexture : texture_2d<f32>;
  @group(0) @binding(normalSamplerBinding) var normalSampler : sampler;
#endif
    //emmisve map
#if USE_EMISSIVETEXTURE
  @group(0) @binding(emissiveTextureBinding) var emissiveTexture : texture_2d<f32>;
  @group(0) @binding(emissiveSamplerBinding) var emissiveSampler : sampler;
#endif

    //metal roughness
#if USE_METALNESSROUGHNESSTEXTURE
  @group(0) @binding(metalnessRoughnessTextureBinding) var metalnessRoughnessTexture : texture_2d<f32>;
  @group(0) @binding(metalnessRoughnessSamplerBinding) var metalnessRoughnessSampler : sampler;
#endif
    //occlusion texture
#if USE_AOTEXTURE
  @group(0) @binding(aoTextureBinding) var aoTexture : texture_2d<f32>;
  @group(0) @binding(aoSamplerBinding) var aoSampler : sampler;
#endif
#if USE_NORMALTEXTURE
  #include <getTBN>
  #include <getNormalByNormalTexture>
#else
  #include <getNormal>
#endif
