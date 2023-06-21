import { wgslParseDefines } from "../../WgslPreprocessor";
export function getNormal(defines) {
	return wgslParseDefines`
      fn getNormal(input:FragInput)->vec3<f32>{
        var normal:vec3<f32>;
        #if ${defines.HAS_NORMAL}
            normal= input.normal;
        #else
          let pos_dx = dpdx(input.worldPos);
          let pos_dy = dpdy(input.worldPos);
          normal = normalize( cross(pos_dy, pos_dx) );
        #endif
        return normal*(f32(input.frontFacing) * 2.0 - 1.0);
      }
    `;
}
export function getNormalByNormalTexture(defines) {
	return wgslParseDefines`
      fn getNormalByNormalTexture(input:FragInput)->vec3<f32>{
        var n:vec3<f32> = textureSample(normalTexture,normalSampler, input.uv).rgb;
        let tbn:mat3x3<f32> =getTBN(input);
        n = normalize(tbn * (2.0 * n - vec3(1.0)));
        n=n*(f32(input.frontFacing) * 2.0 - 1.0);
        return n;
      }
    `;
}
export function getTBN(defines) {
	return wgslParseDefines`
        fn getTBN(input:FragInput)->mat3x3<f32>{
        #if ${defines.HAS_TANGENT}
            let tbn:mat3x3<f32> = input.tbn;
        #else
            let normal:vec3<f32> =normalize(input.normal);
            let uv:vec2<f32> = select(-input.uv,input.uv,input.frontFacing);
              // ref: http://www.thetenthplanet.de/archives/1180
              // get edge vectors of the pixel triangle
              let dp1:vec3<f32> =  vec3<f32>(dpdx(input.worldPos.x), dpdx(input.worldPos.y), dpdx(input.worldPos.z));
              let dp2:vec3<f32> =  vec3<f32>(dpdy(input.worldPos.x), dpdy(input.worldPos.y), dpdy(input.worldPos.z));
              let duv1:vec2<f32> = dpdx(uv);
              let duv2:vec2<f32> = dpdy(uv);

              // solve the linear system
              let dp2perp:vec3<f32> = cross(dp2, normal);
              let dp1perp:vec3<f32> = cross(normal, dp1);
              let tangent:vec3<f32> = dp2perp * duv1.x + dp1perp * duv2.x;
              let binormal:vec3<f32> = dp2perp * duv1.y + dp1perp * duv2.y;
              // construct a scale-invariant frame 
              let result:f32=max(dot(tangent, tangent), dot(binormal, binormal));
              let invmax:f32 = 1.0/sqrt(result);
              let tbn:mat3x3<f32> = mat3x3<f32>(tangent * invmax, binormal * invmax, normal);
        #endif
        return tbn;
      }
  `;
}
