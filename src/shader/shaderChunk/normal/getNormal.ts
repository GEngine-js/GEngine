import { wgslParseDefines } from "../../WgslPreprocessor";

export default function getNormal(defines) {
	return wgslParseDefines`
  fn getNormal(input:FragInput
    #if ${defines.USE_NORMALTEXTURE}
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
        #if ${defines.USE_NORMALTEXTURE}
            var n:vec3<f32> = textureSample(normalTexture,defaultSampler, input.uv).rgb;
            n = normalize(tbn * ((2.0 * n - 1.0) * vec3<f32>(materialUniform.normalTextureScale, 1.0)));
        #else
            var n:vec3<f32> = tbn[2].xyz;
        #endif
        return n;
    }
  `;
}
