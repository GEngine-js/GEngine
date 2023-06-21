import { wgslParseDefines } from "../../WgslPreprocessor";

export function TextureAndSamplerDefine(defines) {
	return wgslParseDefines`
    #if ${defines.USE_IBL}
      @group(0) @binding(${defines.specularEnvTextureBinding}) var specularEnvTexture: texture_cube<f32>;
      @group(0) @binding(${defines.specularEnvSamplerBinding}) var specularEnvSampler: sampler;
    #endif
    #if ${defines.USE_TEXTURE}
      @group(0) @binding(${defines.baseColorTextureBinding}) var baseColorTexture: texture_2d<f32>;
      @group(0) @binding(${defines.baseColorSamplerBinding}) var baseColorSampler: sampler;
    #endif
    // normal map
    #if ${defines.USE_NORMALTEXTURE}
      @group(0) @binding(${defines.normalTextureBinding}) var normalTexture: texture_2d<f32>;
      @group(0) @binding(${defines.normalSamplerBinding}) var normalSampler: sampler;
    #endif
    // emmisve map
    #if ${defines.USE_EMISSIVETEXTURE}
      @group(0) @binding(${defines.emissiveTextureBinding}) var emissiveTexture: texture_2d<f32>;
      @group(0) @binding(${defines.emissiveSamplerBinding}) var emissiveSampler: sampler;
    #endif

    // metal roughness
    #if ${defines.USE_METALNESSTEXTURE}
      @group(0) @binding(${defines.metalnessRoughnessTextureBinding}) var metalnessRoughnessTexture: texture_2d<f32>;
      @group(0) @binding(${defines.metalnessRoughnessSamplerBinding}) var metalnessRoughnessSampler: sampler;
    #endif
    // occlusion texture
    #if ${defines.USE_AOTEXTURE}
      @group(0) @binding(${defines.aoTextureBinding}) var aoTexture: texture_2d<f32>;
      @group(0) @binding(${defines.aoSamplerBinding}) var aoSampler: sampler;
    #endif
    #if ${defines.USE_NORMALTEXTURE}
      #include <getTBN>
      #include <getNormalByNormalTexture>
    #else
      #include <getNormal>
    #endif
  `;
}
