import { wgslParseDefines } from "../../WgslPreprocessor";

export function getNormal(defines) {
	return wgslParseDefines`
  fn getNormal(input:VertInput
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
    // TODO: TANGENTS
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
export function getNormalByNormalTexture(defines) {
	return `
      fn getNormalByNormalTexture(input:VertInput)->vec3<f32>{
        var n:vec3<f32> = textureSample(normalTexture,defaultSampler, input.uv).rgb;
        n = normalize(tbn * ((2.0 * n - 1.0) * vec3<f32>(materialUniform.normalTextureScale, 1.0)));
      }
    `;
}
export function getTBN(defines) {
	return `
        fn getTBN(frontFacing:bool,input:VertInput){
        #if ${defines.HAS_TANGENT}
            let tbn:mat3x3<f32> = input.tbn;
        #else
            let  normal:vec3<f32> = getNormal();
            let uv:vec2<f32> = select(-input.uv,input.uv,frontFacing);

              // ref: http://www.thetenthplanet.de/archives/1180
              // get edge vectors of the pixel triangle
              let dp1:vec3<f32> = dpdx(input.worldPos);
              let dp2:vec3<f32> = dpdy(input.worldPos);
              let duv1:vec2<f32> = dpdx(uv);
              let duv2:vec2<f32> = dpdy(uv);

              // solve the linear system
              let dp2perp:vec3<f32> = cross(dp2, normal);
              let dp1perp:vec3<f32> = cross(normal, dp1);
              let tangent:vec3<f32> = dp2perp * duv1.x + dp1perp * duv2.x;
              let binormal:vec3<f32> = dp2perp * duv1.y + dp1perp * duv2.y;

              // construct a scale-invariant frame 
              let invmax:f32 = inversesqrt(max(dot(tangent, tangent), dot(binormal, binormal)));
              let tbn:mat3x3<f32> = mat3x3<f32>(tangent * invmax, binormal * invmax, normal);
        #endif
        return tbn;
      }
  `;
}
