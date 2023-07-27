fn getNormalByNormalTexture(input:FragInput)->vec3<f32>{
    var n:vec3<f32> = textureSample(normalTexture,normalSampler, input.uv).rgb;
    let tbn:mat3x3<f32> =getTBN(input);
    n = normalize(tbn * (2.0 * n - vec3(1.0)));
    n=n*(f32(input.frontFacing) * 2.0 - 1.0);
    return n;
}