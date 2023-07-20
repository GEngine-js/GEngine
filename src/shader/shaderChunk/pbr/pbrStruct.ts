export default `
        struct MaterialUniform{

            modelMatrix: mat4x4<f32>,
    
            diffuse:vec3<f32>,
    
            opacity:f32,
    
            normalMatrix: mat3x3<f32>,
    
            emissive:vec3<f32>,
    
            roughness:f32,
    
            metalness:f32,
    
            #if TONE_MAPPING
                toneMappingExposure:f32,
            #endif
           
            #if SPECULAR
    
                 specularColor:vec3<f32>,
    
                 specularIntensity:f32,
            #endif
            
            #if USE_SHEEN
    
                sheenColor:vec3<f32>,
    
                sheenRoughness:f32,
            #endif

            #if USE_TRANSMISSION
    
                attenuationColor:vec3<f32>,
    
                transmission:f32,
    
                transmissionSamplerSize:vec2<f32>,
    
                thickness:f32,
    
                attenuationDistance:f32,
                
            #endif

            #if USE_SKINNING
    
                bindMatrix:mat4x4<f32>,
    
                bindMatrixInverse:mat4x4<f32>,
    
                boneTextureSize:u32,
            #endif

            #if USE_NORMALTEXTURE
                 normalScale:vec2<f32>,
            #endif
    
            #if IOR
                ior:f32,
            #endif
    
            #if USE_CLEARCOAT
    
                #if USE_CLEARCOAT_NORMALTEXTURE
                    clearcoatNormalScale:vec2<f32>,
                #endif
    
                 clearcoat:f32,
    
                 clearcoatRoughness:f32,
            #endif
    
            #if USE_IRIDESCENCE
                iridescence:f32,
    
                iridescenceIOR:f32,
    
                iridescenceThicknessMinimum:f32,
    
                iridescenceThicknessMaximum:f32,
    
            #endif

            #if USE_AOTEXTURE
                 aoTextureIntensity:f32,
            #endif

            #if USE_LIGHTTEXTURE
                 lightTextureIntensity:f32,
            #endif
    
            #if USE_ENVTEXTURE
                envTextureIntensity:f32,
    
                flipEnvTexture:f32,
            #endif

            #if USE_BUMPTEXTURE
                bumpScale:f32;
            #endif

            #if USE_DISPLACEMENTTEXTURE
    
                displacementScale:f32,
    
                displacementBias:f32,
            #endif
            
            #if USE_MORPHTARGETS
    
                morphTargetBaseInfluence:f32,
    
                #if MORPHTARGETS_TEXTURE
    
                    morphTargetsTextureSize:vec2<u32>,
    
                    MORPHTARGETS_COUNT:u32,
    
                #endif
    
                morphTargetInfluences:array<f32>,
                    
            #endif
        }

   `;
