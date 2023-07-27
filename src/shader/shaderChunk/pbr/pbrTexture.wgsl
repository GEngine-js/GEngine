#if USE_BUMPTEXTURE
    @group(0) @binding(bumpTextureBinding) var bumpTexture : texture_2d<f32>;
#endif
#if USE_TRANSMISSION
    #if USE_TRANSMISSIONTEXTURE
        @group(0) @binding(transmissionTextureBinding) var transmissionTexture : texture_2d<f32>;
    #endif
    #if USE_THICKNESSTEXTURE
        @group(0) @binding(thicknessTextureBinding) var thicknessTexture : texture_2d<f32>;
    #endif
    @group(0) @binding(transmissionSamplerTextureBinding) var transmissionSamplerTexture : texture_2d<f32>;
#endif
#if USE_ENVTEXTURE
    @group(0) @binding(envTextureBinding) var envTexture : texture_cube <f32>;
#endif
#if USE_NORMALTEXTURE
    @group(0) @binding(normalTextureBinding) var normalTexture : texture_2d<f32>;
#endif

#if USE_CLEARCOATTEXTURE
    @group(0) @binding(clearcoatTextureBinding) var clearcoatTexture : texture_2d<f32>;
#endif

#if USE_CLEARCOAT_ROUGHNESSTEXTURE
    @group(0) @binding(clearcoatRclearcoatRoughnessTextureBinding) var clearcoatRoughnessTexture : texture_2d<f32>;
#endif

#if USE_CLEARCOAT_NORMALTEXTURE
    @group(0) @binding(clearcoatNormalTextureBinding) var clearcoatNormalTexture : texture_2d<f32>;
#endif

#if USE_IRIDESCENCETEXTURE
    @group(0) @binding(iridescenceTextureBinding) var iridescenceTexture : texture_2d<f32>;
#endif

#if USE_IRIDESCENCE_THICKNESSTEXTURE
    @group(0) @binding(iridescenceThicknessTextureBinding) var iridescenceThicknessTexture : texture_2d<f32>;
#endif

#if USE_ROUGHNESSTEXTURE
    @group(0) @binding(roughnessTextureBinding) var roughnessTexture : texture_2d<f32>;
#endif

#if USE_METALNESSTEXTURE
    @group(0) @binding(metalnessTextureBinding) var metalnessTexture : texture_2d<f32>;
#endif

#if SPECULAR
    #if USE_SPECULARINTENSITYTEXTURE
        @group(0) @binding(specularIntensityTextureBinding) var specularIntensityTexture : texture_2d<f32>;
    #endif

    #if USE_SPECULARCOLORTEXTURE
        @group(0) @binding(specularColorTextureBinding) var specularColorTexture : texture_2d<f32>;
    #endif
#endif

#if USE_SHEEN
    #if USE_SHEENCOLORTEXTURE
        @group(0) @binding(sheenColorTextureBinding) var sheenColorTexture : texture_2d<f32>;
    #endif
    #if USE_SHEENROUGHNESSTEXTURE
        @group(0) @binding(sheenRoughnessTextureBinding) var sheenRoughnessTexture : texture_2d<f32>;
    #endif
#endif

#if USE_TEXTURE
    @group(0) @binding(baseSamplerBinding) var baseSampler : sampler;
    @group(0) @binding(baseTextureBinding) var baseTexture : texture_2d<f32>;
#endif

#if USE_ALPHATEXTURE
    @group(0) @binding(alphaTextureBinding) var alphaTexture : texture_2d<f32>;
#endif

#if USE_AOTEXTURE
    @group(0) @binding(aoTextureBinding) var aoTexture : texture_2d<f32>;

#endif
#if USE_LIGHTTEXTURE
    @group(0) @binding(lightTextureBinding) var lightTexture : texture_2d<f32>;
#endif

#if USE_EMISSIVETEXTURE
    @group(0) @binding(emissiveTextureBinding) var emissiveTexture : texture_2d<f32>;
#endif
