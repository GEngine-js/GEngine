export default function pbrFrag(defines){
    return  `
            #define FRAG_COLOR_LOCATION 0

        // reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl

        precision highp float;
        precision highp int;

        // IBL
        uniform samplerCube u_DiffuseEnvSampler;
        uniform samplerCube u_SpecularEnvSampler;
        uniform sampler2D u_brdfLUT;

        // Metallic-roughness material

        // base color
        uniform vec4 u_baseColorFactor;
        #ifdef HAS_BASECOLORMAP
        uniform sampler2D u_baseColorTexture;
        #endif

        // normal map
        #ifdef HAS_NORMALMAP
        uniform sampler2D u_normalTexture;
        uniform float u_normalTextureScale;
        #endif

        // emmisve map
        #ifdef HAS_EMISSIVEMAP
        uniform sampler2D u_emissiveTexture;
        uniform vec3 u_emissiveFactor;
        #endif

        // metal roughness
        #ifdef HAS_METALROUGHNESSMAP
        uniform sampler2D u_metallicRoughnessTexture;
        #endif
        uniform float u_metallicFactor;
        uniform float u_roughnessFactor;

        // occlusion texture
        #ifdef HAS_OCCLUSIONMAP
        uniform sampler2D u_occlusionTexture;
        uniform float u_occlusionStrength;
        #endif

        in vec3 v_position;
        in vec3 v_normal;
        in vec2 v_uv;

        layout(location = FRAG_COLOR_LOCATION) out vec4 frag_color;

        struct PBRInfo
        {
            float NdotL;                  // cos angle between normal and light direction
            float NdotV;                  // cos angle between normal and view direction
            float NdotH;                  // cos angle between normal and half vector
            float LdotH;                  // cos angle between light direction and half vector
            float VdotH;                  // cos angle between view direction and half vector
            float perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)
            float metalness;              // metallic value at the surface
            vec3 reflectance0;            // full reflectance color (normal incidence angle)
            vec3 reflectance90;           // reflectance color at grazing angle
            float alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])
            vec3 diffuseColor;            // color contribution from diffuse lighting
            vec3 specularColor;           // color contribution from specular lighting
        };


        // vec3 applyNormalMap(vec3 geomnor, vec3 normap) {
        //     normap = normap * 2.0 - 1.0;
        //     vec3 up = normalize(vec3(0.01, 1, 0.01));
        //     vec3 surftan = normalize(cross(geomnor, up));
        //     vec3 surfbinor = cross(geomnor, surftan);
        //     return normap.y * surftan * u_normalTextureScale + normap.x * surfbinor * u_normalTextureScale + normap.z * geomnor;
        // }

        const float M_PI = 3.141592653589793;
        const float c_MinRoughness = 0.04;


        // vec3 getNormal()
        // {

        // #ifdef HAS_NORMALMAP
        // #ifdef HAS_TANGENTS
        //     vec3 n = texture(u_normalTexture, v_uv).rgb;
        //     n = normalize(v_TBN * (2.0 * n - 1.0) - vec3(u_normalTextureScale, u_normalTextureScale, 1.0));
        // #else
        //     vec3 n = applyNormalMap( v_normal, texture(u_normalTexture, v_uv).rgb );
        // #endif
        // #else
        //     vec3 n = v_normal;
        // #endif
        //     return n;

        // #endif
        // }

        // Find the normal for this fragment, pulling either from a predefined normal map
        // or from the interpolated mesh normal and tangent attributes.
        vec3 getNormal()
        {

        // #ifdef HAS_NORMALMAP
        //     vec3 n = applyNormalMap( v_normal, texture(u_normalTexture, v_uv).rgb );
        // #else
        //     vec3 n = v_normal;
        // #endif
        //     return n;


            // Retrieve the tangent space matrix
        // #ifndef HAS_TANGENTS
            vec3 pos_dx = dFdx(v_position);
            vec3 pos_dy = dFdy(v_position);
            vec3 tex_dx = dFdx(vec3(v_uv, 0.0));
            vec3 tex_dy = dFdy(vec3(v_uv, 0.0));
            vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

            vec3 ng = v_normal;
        // #ifdef HAS_NORMALS
        //     vec3 ng = normalize(v_normal);
        // #else
        //     vec3 ng = cross(pos_dx, pos_dy);
        // #endif

            t = normalize(t - ng * dot(ng, t));
            vec3 b = normalize(cross(ng, t));
            mat3 tbn = mat3(t, b, ng);
        // #else // HAS_TANGENTS
            // mat3 tbn = v_TBN;
        // #endif

        // TODO: TANGENTS

        #ifdef HAS_NORMALMAP
            vec3 n = texture(u_normalTexture, v_uv).rgb;
            n = normalize(tbn * ((2.0 * n - 1.0) * vec3(u_normalTextureScale, u_normalTextureScale, 1.0)));
        #else
            vec3 n = tbn[2].xyz;
        #endif

            return n;
        }

        vec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)
        {
            // float mipCount = 9.0; // resolution of 512x512
            // float mipCount = 10.0; // resolution of 1024x1024
            float mipCount = 10.0; // resolution of 256x256
            float lod = (pbrInputs.perceptualRoughness * mipCount);
            // retrieve a scale and bias to F0. See [1], Figure 3
            vec3 brdf = texture(u_brdfLUT, vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness)).rgb;
            vec3 diffuseLight = texture(u_DiffuseEnvSampler, n).rgb;

        // #ifdef USE_TEX_LOD
            vec3 specularLight = texture(u_SpecularEnvSampler, reflection, lod).rgb;
        // #else
            // vec3 specularLight = texture(u_SpecularEnvSampler, reflection).rgb;
        // #endif

            vec3 diffuse = diffuseLight * pbrInputs.diffuseColor;
            vec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);

            // // For presentation, this allows us to disable IBL terms
            // diffuse *= u_ScaleIBLAmbient.x;
            // specular *= u_ScaleIBLAmbient.y;

            return diffuse + specular;
        }

        // Basic Lambertian diffuse
        // Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
        // See also [1], Equation 1
        vec3 diffuse(PBRInfo pbrInputs)
        {
            return pbrInputs.diffuseColor / M_PI;
        }


        // The following equation models the Fresnel reflectance term of the spec equation (aka F())
        // Implementation of fresnel from [4], Equation 15
        vec3 specularReflection(PBRInfo pbrInputs)
        {
            return pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);
        }


        // This calculates the specular geometric attenuation (aka G()),
        // where rougher material will reflect less light back to the viewer.
        // This implementation is based on [1] Equation 4, and we adopt their modifications to
        // alphaRoughness as input as originally proposed in [2].
        float geometricOcclusion(PBRInfo pbrInputs)
        {
            float NdotL = pbrInputs.NdotL;
            float NdotV = pbrInputs.NdotV;
            float r = pbrInputs.alphaRoughness;

            float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
            float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
            return attenuationL * attenuationV;
        }


        // The following equation(s) model the distribution of microfacet normals across the area being drawn (aka D())
        // Implementation from "Average Irregularity Representation of a Roughened Surface for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
        // Follows the distribution function recommended in the SIGGRAPH 2013 course notes from EPIC Games [1], Equation 3.
        float microfacetDistribution(PBRInfo pbrInputs)
        {
            float roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;
            float f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;
            return roughnessSq / (M_PI * f * f);
        }






        void main()
        {
            float perceptualRoughness = u_roughnessFactor;
            float metallic = u_metallicFactor;

        #ifdef HAS_METALROUGHNESSMAP
            // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
            // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
            vec4 mrSample = texture(u_metallicRoughnessTexture, v_uv);
            perceptualRoughness = mrSample.g * perceptualRoughness;
            metallic = mrSample.b * metallic;
        #endif
            perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
            metallic = clamp(metallic, 0.0, 1.0);
            // Roughness is authored as perceptual roughness; as is convention,
            // convert to material roughness by squaring the perceptual roughness [2].
            float alphaRoughness = perceptualRoughness * perceptualRoughness;


            // The albedo may be defined from a base texture or a flat color
        #ifdef HAS_BASECOLORMAP
            vec4 baseColor = texture(u_baseColorTexture, v_uv) * u_baseColorFactor;
        #else
            vec4 baseColor = u_baseColorFactor;
        #endif



            vec3 f0 = vec3(0.04);
            vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);
            diffuseColor *= 1.0 - metallic;
            vec3 specularColor = mix(f0, baseColor.rgb, metallic);

            // Compute reflectance.
            float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);


            // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.
            // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.
            float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
            vec3 specularEnvironmentR0 = specularColor.rgb;
            vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;


            vec3 n = getNormal();                             // normal at surface point
            // vec3 v = vec3( 0.0, 0.0, 1.0 );        // Vector from surface point to camera
            vec3 v = normalize(-v_position);                       // Vector from surface point to camera
            // vec3 l = normalize(u_LightDirection);             // Vector from surface point to light
            vec3 l = normalize(vec3( 1.0, 1.0, 1.0 ));             // Vector from surface point to light
            // vec3 l = vec3( 0.0, 0.0, 1.0 );             // Vector from surface point to light
            vec3 h = normalize(l+v);                          // Half vector between both l and v
            vec3 reflection = -normalize(reflect(v, n));

            float NdotL = clamp(dot(n, l), 0.001, 1.0);
            float NdotV = abs(dot(n, v)) + 0.001;
            float NdotH = clamp(dot(n, h), 0.0, 1.0);
            float LdotH = clamp(dot(l, h), 0.0, 1.0);
            float VdotH = clamp(dot(v, h), 0.0, 1.0);

            PBRInfo pbrInputs = PBRInfo(
                NdotL,
                NdotV,
                NdotH,
                LdotH,
                VdotH,
                perceptualRoughness,
                metallic,
                specularEnvironmentR0,
                specularEnvironmentR90,
                alphaRoughness,
                diffuseColor,
                specularColor
            );

            // Calculate the shading terms for the microfacet specular shading model
            vec3 F = specularReflection(pbrInputs);
            float G = geometricOcclusion(pbrInputs);
            float D = microfacetDistribution(pbrInputs);

            // Calculation of analytical lighting contribution
            vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);
            vec3 specContrib = max(vec3(0.0), F * G * D / (4.0 * NdotL * NdotV));
            // vec3 color = NdotL * u_LightColor * (diffuseContrib + specContrib);
            vec3 color = NdotL * (diffuseContrib + specContrib);    // assume light color vec3(1, 1, 1)

            // Calculate lighting contribution from image based lighting source (IBL)
        // #ifdef USE_IBL
            color += getIBLContribution(pbrInputs, n, reflection);
        // #endif


            // Apply optional PBR terms for additional (optional) shading
        #ifdef HAS_OCCLUSIONMAP
            float ao = texture(u_occlusionTexture, v_uv).r;
            color = mix(color, color * ao, u_occlusionStrength);
        #endif

        #ifdef HAS_EMISSIVEMAP
            vec3 emissive = texture(u_emissiveTexture, v_uv).rgb * u_emissiveFactor;
            color += emissive;
        #endif

            // // This section uses mix to override final color for reference app visualization
            // // of various parameters in the lighting equation.
            // color = mix(color, F, u_ScaleFGDSpec.x);
            // color = mix(color, vec3(G), u_ScaleFGDSpec.y);
            // color = mix(color, vec3(D), u_ScaleFGDSpec.z);
            // color = mix(color, specContrib, u_ScaleFGDSpec.w);

            // color = mix(color, diffuseContrib, u_ScaleDiffBaseMR.x);
            // color = mix(color, baseColor.rgb, u_ScaleDiffBaseMR.y);
            // color = mix(color, vec3(metallic), u_ScaleDiffBaseMR.z);
            // color = mix(color, vec3(perceptualRoughness), u_ScaleDiffBaseMR.w);

            frag_color = vec4(color, baseColor.a);
        }
    `
}