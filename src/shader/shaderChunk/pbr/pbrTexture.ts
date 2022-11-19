export default function pbrTexture(defines) {
     return `
            @group(0) @binding(2) var baseSampler: sampler;
            #if ${defines.USE_NORMALMAP}
                @group(0) @binding(${defines.normalMapBinding}) var normalMap: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOATMAP}
                //uniform sampler2D clearcoatMap;
                @group(0) @binding(${defines.clearcoatMapBinding}) var clearcoatMap: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOAT_ROUGHNESSMAP}
                // uniform sampler2D clearcoatRoughnessMap;
                @group(0) @binding(${defines.clearcoatRoughnessMapBinding}) var clearcoatRoughnessMap: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOAT_NORMALMAP}
                @group(0) @binding(${defines.clearcoatNormalMapBinding}) var clearcoatNormalMap: texture_2d<f32>;
                // uniform sampler2D clearcoatNormalMap;
            #endif
            
            #if ${defines.USE_IRIDESCENCEMAP}
                //uniform sampler2D iridescenceMap;
                @group(0) @binding(${defines.iridescenceMapBinding}) var iridescenceMap: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_IRIDESCENCE_THICKNESSMAP}
                //uniform sampler2D iridescenceThicknessMap;
                @group(0) @binding(${defines.iridescenceThicknessMapBinding}) var iridescenceThicknessMap: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_ROUGHNESSMAP}
                //uniform sampler2D roughnessMap;
                @group(0) @binding(${defines.roughnessMapBinding}) var roughnessMap: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_METALNESSMAP}
                //uniform sampler2D metalnessMap;
                @group(0) @binding(${defines.metalnessMapBinding}) var metalnessMap: texture_2d<f32>;
            #endif

            #if ${defines.SPECULAR}
                #if ${defines.USE_SPECULARINTENSITYMAP}
                    //uniform sampler2D specularIntensityMap;
                    @group(0) @binding(${defines.specularIntensityMapBinding}) var specularIntensityMap: texture_2d<f32>;
                #endif
                #if ${defines.USE_SPECULARCOLORMAP}
                    @group(0) @binding(${defines.specularColorMapBinding}) var specularColorMap: texture_2d<f32>;
                    //uniform sampler2D specularColorMap;
                #endif
            #endif

            #if ${defines.USE_SHEEN}
                #if ${defines.USE_SHEENCOLORMAP}
                    // uniform sampler2D sheenColorMap;
                    @group(0) @binding(${defines.sheenColorMapBinding}) var sheenColorMap: texture_2d<f32>;
                #endif
                #if ${defines.USE_SHEENROUGHNESSMAP}
                    //uniform sampler2D sheenRoughnessMap;
                    @group(0) @binding(${defines.sheenRoughnessMapBinding}) var sheenRoughnessMap: texture_2d<f32>;
                #endif
            #endif

            #if ${defines.USE_MAP}
                @group(0) @binding(${defines.baseTextureBinding}) var baseTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_ALPHAMAP}
                @group(0) @binding(${defines.alphaMapBinding}) var alphaMap: texture_2d<f32>;
            #endif

            #if ${defines.USE_AOMAP}
                @group(0) @binding(${defines.aoMapBinding}) var aoMap: texture_2d<f32>;
                
            #endif
            #if ${defines.USE_LIGHTMAP}
                @group(0) @binding(${defines.lightMapBinding}) var lightMap: texture_2d<f32>;
                uniform float lightMapIntensity;
            #endif

            #if ${defines.USE_EMISSIVEMAP}
                @group(0) @binding(${defines.emissiveMapBinding}) var emissiveMap: texture_2d<f32>;
            #endif
     `
}