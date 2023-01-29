import { wgslParseDefines } from "../WgslPreprocessor";
export default function pbr_fs(defines){
   return   wgslParseDefines`
        // reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl
        struct MaterialUniform {
            modelMatrix: mat4x4<f32>,
            color: vec3<f32>,
            opacity:f32,
            normalMatrix: mat3x3<f32>,
            emissive:vec3<f32>,
            metallic:f32,
            roughness:f32,
            #if ${defines.HAS_NORMALMAP}
                normalTextureScale:f32,
            #endif
            #if ${defines.HAS_OCCLUSIONMAP}
                occlusionStrength:f32,
            #endif
         }
        struct VertInput {
            @location(0) worldPos:vec3<f32>,
            @location(1) normal:vec3<f32>,
            @location(2) uv:vec2<f32>
        }    
        struct PBRInfo
        {
            NdotL:f32,                 // cos angle between normal and light direction
            NdotV:f32,                  // cos angle between normal and view direction
            NdotH:f32,                  // cos angle between normal and half vector
            LdotH:f32,                  // cos angle between light direction and half vector
            VdotH:f32,                  // cos angle between view direction and half vector
            perceptualRoughness:f32,    // roughness value, as authored by the model creator (input to shader)
            metalness:f32,              // metallic value at the surface
            reflectance0:vec3<f32>,           // full reflectance color (normal incidence angle)
            reflectance90:vec3<f32>,           // reflectance color at grazing angle
            alphaRoughness:f32,         // roughness mapped to a more linear change in the roughness (proposed by [2])
            diffuseColor:vec3<f32>,            // color contribution from diffuse lighting
            specularColor:vec3<f32>,           // color contribution from specular lighting
        };
        const M_PI:f32 = 3.141592653589793;
        const c_MinRoughness:f32 = 0.04;
        @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
        // IBL
        @group(0) @binding(${defines.diffuseEnvTextureBinding}) var diffuseEnvSampler: texture_cube<f32>;
        @group(0) @binding(${defines.specularEnvTextureBinding}) var specularEnvSampler: texture_cube<f32>;
        @group(0) @binding(${defines.brdfTextureBinding}) var brdfLUT: texture_2d<f32>;
        #if ${defines.USE_TEXTURE}
           @group(0) @binding(${defines.baseTextureBinding}) var baseColorTexture: texture_2d<f32>;
           @group(0) @binding(${defines.baseSamplerBinding}) var defaultSampler: sampler;
        #endif
        // normal map
        #if ${defines.HAS_NORMALMAP}
          @group(0) @binding(${defines.normalTextureBinding}) var normalTexture: texture_2d<f32>;
        #endif

        // emmisve map
        #if ${defines.USE_EMISSIVETEXTURE}
            @group(0) @binding(${defines.emissiveTextureBinding}) var u_emissiveTexture: texture_2d<f32>;
        #endif

        // metal roughness
        #if ${defines.USE_METALNESSTEXTURE}
        metalnessTexture
             @group(0) @binding(${defines.metalnessRoughnessTextureBinding}) var metalnessRoughnessTexture: texture_2d<f32>;
        #endif
        // occlusion texture
        #if ${defines.USE_AOTEXTURE}
             @group(0) @binding(${defines.aoTextureBinding}) var aoTexture: texture_2d<f32>;
        #endif

        // Find the normal for this fragment, pulling either from a predefined normal map
        // or from the interpolated mesh normal and tangent attributes.
        fn getNormal(input:VertInput
            #if ${defines.HAS_NORMALMAP}
            ,normalTexture:texture_2d<f32>,defaultSampler:sampler
            #endif
            )->vec3<f32>
        {
            // Retrieve the tangent space matrix
            let pos_dx:vec3<f32> = dpdx(input.worldPos);
            let pos_dy:vec3<f32> = dpdy(input.worldPos);
            let tex_dx:vec3<f32> = dpdx(vec3<f32>(input.uv, 0.0));
            let tex_dy:vec3<f32> = dpdy(vec3<f32>(input.uv, 0.0));
            var t:vec3<f32> = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);
            let ng = input.normal;
            t = normalize(t - ng * dot(ng, t));
            let b:vec3<f32> = normalize(cross(ng, t));
            let tbn:mat3x3<f32> = mat3x3<f32>(t, b, ng);
        // TODO: TANGENTS
            #if ${defines.HAS_NORMALMAP}
                var n:vec3<f32> = textureSample(normalTexture,defaultSampler, input.uv).rgb;
                n = normalize(tbn * ((2.0 * n - 1.0) * vec3<f32>(materialUniform.normalTextureScale, materialUniform.normalTextureScale, 1.0)));
            #else
                var n:vec3<f32> = tbn[2].xyz;
            #endif
            return n;
        }

        fn getIBLContribution( pbrInputs:PBRInfo, n:vec3<f32>, reflection:vec3<f32>,brdfLUT:texture_2d<f32>,specularEnvSampler:texture_cube<f32>,diffuseEnvSampler:texture_cube<f32>,defaultSampler:sampler)->vec3<f32>
        {
            let mipCount:f32 = 10.0; // resolution of 256x256
            let lod:f32 = (pbrInputs.perceptualRoughness * mipCount);
            // retrieve a scale and bias to F0. See [1], Figure 3
            let brdf:vec3<f32> = textureSample(brdfLUT, defaultSampler,vec2<f32>(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness)).rgb;
            let diffuseLight:vec3<f32> = textureSample(diffuseEnvSampler,defaultSampler, n).rgb;
            let specularLight:vec3<f32> = textureSampleLevel(specularEnvSampler,defaultSampler, reflection, lod).rgb;
            let diffuse:vec3<f32> = diffuseLight * pbrInputs.diffuseColor;
            let specular:vec3<f32> = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);

            return diffuse + specular;
        }

        // Basic Lambertian diffuse
        // Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
        // See also [1], Equation 1
        fn diffuse(pbrInputs:PBRInfo)->vec3<f32>
        {
            return pbrInputs.diffuseColor / M_PI;
        }


        // The following equation models the Fresnel reflectance term of the spec equation (aka F())
        // Implementation of fresnel from [4], Equation 15
        fn specularReflection(pbrInputs:PBRInfo)->vec3<f32>
        {
            return pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);
        }


        // This calculates the specular geometric attenuation (aka G()),
        // where rougher material will reflect less light back to the viewer.
        // This implementation is based on [1] Equation 4, and we adopt their modifications to
        // alphaRoughness as input as originally proposed in [2].
        fn geometricOcclusion( pbrInputs:PBRInfo)->f32
        {
            let NdotL:f32 = pbrInputs.NdotL;
            let NdotV:f32 = pbrInputs.NdotV;
            let r:f32 = pbrInputs.alphaRoughness;

            let attenuationL:f32 = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
            let attenuationV :f32= 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
            return attenuationL * attenuationV;
        }


        // The following equation(s) model the distribution of microfacet normals across the area being drawn (aka D())
        // Implementation from "Average Irregularity Representation of a Roughened Surface for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
        // Follows the distribution function recommended in the SIGGRAPH 2013 course notes from EPIC Games [1], Equation 3.
        fn microfacetDistribution( pbrInputs:PBRInfo)->f32
        {
            let roughnessSq:f32 = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;
            let f:f32 = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;
            return roughnessSq / (M_PI * f * f);
        }
        @fragment
        fn main(input:VertInput) -> @location(0) vec4<f32> 
        {
            var perceptualRoughness:f32 = materialUniform.roughness;
            var metallic:f32 = materialUniform.metallic;

        #if ${defines.HAS_METALROUGHNESSMAP}
            // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
            // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
            let mrSample:vec4<f32> = textureSample(metalnessRoughnessTexture,defaultSampler, input.uv);
            perceptualRoughness = mrSample.g * perceptualRoughness;
            metallic = mrSample.b * metallic;
        #endif
            perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
            metallic = clamp(metallic, 0.0, 1.0);
            // Roughness is authored as perceptual roughness; as is convention,
            // convert to material roughness by squaring the perceptual roughness [2].
            let alphaRoughness:f32 = perceptualRoughness * perceptualRoughness;


            // The albedo may be defined from a base texture or a flat color
        // #if ${defines.USE_TEXTURE}
        //     let baseColor:vec4<f32> = textureSample(baseColorTexture,defaultSampler, input.uv) *vec4<f32>(materialUniform.color,1.0);
        // #else
        //     let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);
        // #endif
        let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);
            let f0:vec3<f32> = vec3<f32>(0.04);
            var diffuseColor:vec3<f32> = baseColor.rgb * (vec3<f32>(1.0) - f0);
            diffuseColor *= 1.0 - metallic;
            let specularColor:vec3<f32> = mix(f0, baseColor.rgb, metallic);

            // Compute reflectance.
            let reflectance:f32 = max(max(specularColor.r, specularColor.g), specularColor.b);


            // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.
            // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.
            let reflectance90:f32 = clamp(reflectance * 25.0, 0.0, 1.0);
            let specularEnvironmentR0:vec3<f32> = specularColor.rgb;
            let specularEnvironmentR90:vec3<f32> = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
     
                #if ${defines.HAS_NORMALMAP}
                let n:vec3<f32> = getNormal(input,normalTexture,defaultSampler);  
                #else
                let n:vec3<f32> = getNormal(input);
                #endif

            //let n:vec3<f32> = getNormal(input,normalTexture,defaultSampler);                             // normal at surface point
            // vec3 v = vec3( 0.0, 0.0, 1.0 );        // Vector from surface point to camera
            let v:vec3<f32> = normalize(-input.worldPos);                       // Vector from surface point to camera
            // vec3 l = normalize(u_LightDirection);             // Vector from surface point to light
            let l:vec3<f32> =normalize(vec3( 1.0, 1.0, 1.0 )); 
                      // Vector from surface point to light
            // vec3 l = vec3( 0.0, 0.0, 1.0 );             // Vector from surface point to light
            let h:vec3<f32> = normalize(l+v);                          // Half vector between both l and v
            let reflection:vec3<f32> = -normalize(reflect(v, n));

            let NdotL:f32 = clamp(dot(n, l), 0.001, 1.0);
            let NdotV:f32 = abs(dot(n, v)) + 0.001;
            let NdotH:f32 = clamp(dot(n, h), 0.0, 1.0);
            let LdotH:f32 = clamp(dot(l, h), 0.0, 1.0);
            let VdotH:f32 = clamp(dot(v, h), 0.0, 1.0);

            var pbrInputs:PBRInfo;
            pbrInputs.NdotL=NdotL;
            pbrInputs.NdotV=NdotV;
            pbrInputs.NdotH=NdotH;
            pbrInputs.LdotH=LdotH;
            pbrInputs.VdotH=VdotH;
            pbrInputs.perceptualRoughness=perceptualRoughness;
            pbrInputs.perceptualRoughness=perceptualRoughness;
            pbrInputs.metalness=metallic;
            pbrInputs.reflectance0=specularEnvironmentR0;
            pbrInputs.reflectance90=specularEnvironmentR90;
            pbrInputs.alphaRoughness=alphaRoughness;
            pbrInputs.diffuseColor=diffuseColor;
            pbrInputs.specularColor=specularColor;

            // Calculate the shading terms for the microfacet specular shading model
            let F:vec3<f32> = specularReflection(pbrInputs);
            let G:f32 = geometricOcclusion(pbrInputs);
            let D:f32 = microfacetDistribution(pbrInputs);

            // Calculation of analytical lighting contribution
            let diffuseContrib:vec3<f32> = (1.0 - F) * diffuse(pbrInputs);
            let specContrib:vec3<f32> = max(vec3<f32>(0.0), F * G * D / (4.0 * NdotL * NdotV));
            // vec3 color = NdotL * u_LightColor * (diffuseContrib + specContrib);
            var color = NdotL * (diffuseContrib + specContrib);    // assume light color vec3(1, 1, 1)

            // Calculate lighting contribution from image based lighting source (IBL)
        // USE_IBL
            color += getIBLContribution(pbrInputs, n, reflection,brdfLUT,specularEnvSampler,diffuseEnvSampler,defaultSampler);


        // Apply optional PBR terms for additional (optional) shading
        #if ${defines.HAS_OCCLUSIONMAP}
            let ao:f32 = textureSample(aoTexture,defaultSampler, input.uv).r;
            color = mix(color, color * ao, materialUniform.occlusionStrength);
        #endif

        #if ${defines.HAS_EMISSIVEMAP}
            let emissive:vec3<f32> = textureSample(u_emissiveTexture, defaultSampler,input.uv).rgb * materialUniform.emissive;
            color += emissive;
        #endif
       return vec4<f32>(color.xyz,1.0);
    }
   `
}