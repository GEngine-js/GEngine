fn getTBN(input:FragInput)->mat3x3<f32>{
    #if HAS_TANGENT
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