import { wgslParseDefines } from "../../WgslPreprocessor";

export default function pbrTexture(defines) {
     return wgslParseDefines`
            @group(0) @binding(${defines.baseSamplerBinding}) var baseSampler: sampler;
            #if ${defines.USE_BUMPTEXTURE}
                // uniform sampler2D bumpMap;
                @group(0) @binding(${defines.bumpTextureBinding}) var bumpTexture: texture_2d<f32>;
            #endif
            #if ${defines.USE_TRANSMISSION}
                #if ${defines.USE_TRANSMISSIONTEXTURE}
                   // uniform sampler2D transmissionTexture;
                    @group(0) @binding(${defines.transmissionTextureBinding}) var transmissionTexture: texture_2d<f32>;
                #endif
                #if ${defines.USE_THICKNESSTEXTURE}
                    //uniform sampler2D thicknessTexture;
                    @group(0) @binding(${defines.thicknessTextureBinding}) var thicknessTexture: texture_2d<f32>;
                #endif
                //uniform sampler2D transmissionSamplerTexture;
                @group(0) @binding(${defines.transmissionSamplerTextureBinding}) var transmissionSamplerTexture: texture_2d<f32>;
            #endif
            #if ${defines.USE_ENVTEXTURE}
                #if ${defines.ENVTEXTURE_TYPE_CUBE}
                // uniform samplerCube envTexture;
                    //texture_cube
                    @group(0) @binding(${defines.envTextureBinding}) var envTexture: texture_cube<f32>;
                #else
                    //uniform sampler2D envTexture;
                    @group(0) @binding(${defines.envTextureBinding}) var envTexture: texture_2d<f32>;
                #endif
            
            #endif
            #if ${defines.USE_NORMALTEXTURE}
                @group(0) @binding(${defines.normalTextureBinding}) var normalTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOATTEXTURE}
                //uniform sampler2D clearcoatTexture;
                @group(0) @binding(${defines.clearcoatTextureBinding}) var clearcoatTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                // uniform sampler2D clearcoatRoughnessTexture;
                @group(0) @binding(${defines.clearcoatRclearcoatRoughnessTextureBinding}) var clearcoatRoughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOAT_NORMALTEXTURE}
                @group(0) @binding(${defines.clearcoatNormalTextureBinding}) var clearcoatNormalTexture: texture_2d<f32>;
                // uniform sampler2D clearcoatNormalTexture;
            #endif
            
            #if ${defines.USE_IRIDESCENCETEXTURE}
                //uniform sampler2D iridescenceTexture;
                @group(0) @binding(${defines.iridescenceTextureBinding}) var iridescenceTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_IRIDESCENCE_THICKNESSTEXTURE}
                //uniform sampler2D iridescenceThicknessTexture;
                @group(0) @binding(${defines.iridescenceThicknessTextureBinding}) var iridescenceThicknessTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_ROUGHNESSTEXTURE}
                //uniform sampler2D roughnessTexture;
                @group(0) @binding(${defines.roughnessTextureBinding}) var roughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_METALNESSTEXTURE}
                //uniform sampler2D metalnessTexture;
                @group(0) @binding(${defines.metalnessTextureBinding}) var metalnessTexture: texture_2d<f32>;
            #endif

            #if ${defines.SPECULAR}
                #if ${defines.USE_SPECULARINTENSITYTEXTURE}
                    //uniform sampler2D specularIntensityTexture;
                    @group(0) @binding(${defines.specularIntensityTextureBinding}) var specularIntensityTexture: texture_2d<f32>;
                #endif
                #if ${defines.USE_SPECULARCOLORTEXTURE}
                    @group(0) @binding(${defines.specularColorTextureBinding}) var specularColorTexture: texture_2d<f32>;
                    //uniform sampler2D specularColorTexture;
                #endif
            #endif

            #if ${defines.USE_SHEEN}
                #if ${defines.USE_SHEENCOLORTEXTURE}
                    // uniform sampler2D sheenColorTexture;
                    @group(0) @binding(${defines.sheenColorTextureBinding}) var sheenColorTexture: texture_2d<f32>;
                #endif
                #if ${defines.USE_SHEENROUGHNESSTEXTURE}
                    //uniform sampler2D sheenRoughnessTexture;
                    @group(0) @binding(${defines.sheenRoughnessTextureBinding}) var sheenRoughnessTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${defines.USE_TEXTURE}
                @group(0) @binding(${defines.baseTextureBinding}) var baseTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_ALPHATEXTURE}
                @group(0) @binding(${defines.alphaTextureBinding}) var alphaTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_AOTEXTURE}
                @group(0) @binding(${defines.aoTextureBinding}) var aoTexture: texture_2d<f32>;
                
            #endif
            #if ${defines.USE_LIGHTTEXTURE}
                @group(0) @binding(${defines.lightTextureBinding}) var lightTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_EMISSIVETEXTURE}
                @group(0) @binding(${defines.emissiveTextureBinding}) var emissiveTexture: texture_2d<f32>;
            #endif
     `
}