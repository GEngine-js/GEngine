fn getNormal(input:FragInput)->vec3<f32>{
    var normal:vec3<f32>;
    #if HAS_NORMAL
        normal= input.normal;
    #else
        let pos_dx = dpdx(input.worldPos);
        let pos_dy = dpdy(input.worldPos);
        normal = normalize( cross(pos_dy, pos_dx) );
    #endif
    return normal*(f32(input.frontFacing) * 2.0 - 1.0);
}