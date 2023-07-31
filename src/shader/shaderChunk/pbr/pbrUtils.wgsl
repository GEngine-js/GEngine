const pi : f32 = 3.141592653589793;

const reciprocal_pi : f32 = 0.3183098861837907;
fn pow2(x : f32) -> f32 {
    return x * x;
}
fn pow2Vector(x : vec3 <f32>) -> vec3 <f32> {
    return x * x;
}
fn pow3(x : f32) -> f32 {
    return x * x*x;
}
fn pow4(x : f32) -> f32 {
    let x2 : f32 = x * x;
    return x2 * x2;
}
fn max3(v : vec3 <f32>) -> f32 {
    return max(max(v.x, v.y), v.z);
}
fn average(v : vec3 <f32>) -> f32 {
    return dot(v, vec3 <f32> (0.3333333) );
}
fn rand(uv : vec2 <f32>) -> f32 {
    let a : f32 = 12.9898;
    let b : f32 = 78.233;
    let c : f32 = 43758.5453;
    let dt : f32 = dot(uv.xy, vec2 <f32> (a, b) );
    let sn : f32 = dt % pi;
    return fract(sin(sn) * c);
}
fn transformDirection(dir : vec3 <f32>, matrix : mat4x4 <f32>) -> vec3 <f32> {
    return normalize((matrix * vec4 <f32> (dir, 0.0) ).xyz);
}

fn transposeMat3(m : mat3x3 <f32>) -> mat3x3 <f32> {
    var tmp : mat3x3 <f32>;
    tmp[ 0 ] = vec3 <f32> (m[ 0 ].x, m[ 1 ].x, m[ 2 ].x);
    tmp[ 1 ] = vec3 <f32> (m[ 0 ].y, m[ 1 ].y, m[ 2 ].y);
    tmp[ 2 ] = vec3 <f32> (m[ 0 ].z, m[ 1 ].z, m[ 2 ].z);
    return tmp;
}
fn luminance(rgb : vec3 <f32>) -> f32 {
    let weights : vec3 <f32> = vec3 <f32> (0.2126729, 0.7151522, 0.0721750);
    return dot(weights, rgb);
}
fn LinearToneMapping(color : vec3 <f32>, toneMappingExposure : f32) -> vec3 <f32> {
    return toneMappingExposure * color;
}

fn ReinhardToneMapping(color : vec3 <f32>, toneMappingExposure : f32) -> vec3 <f32> {
    var tempColor : vec3 <f32>;
    tempColor = color;
    tempColor *= toneMappingExposure;
    return saturate(tempColor / (vec3 <f32> (1.0) + tempColor) );
}
fn CustomToneMapping(color : vec3 <f32>) -> vec3 <f32> {
    return color;
}
fn toneMapping(color : vec3 <f32>, toneMappingExposure : f32) -> vec3 <f32> {
    return ReinhardToneMapping(color, toneMappingExposure);
}

fn LinearToLinear(value : vec4 <f32>) -> vec4 <f32> {
    return value;
}
fn lessThanEqual(a : vec3 <f32>, b : vec3 <f32>) -> vec3 <f32>{
    let xValue : f32 = select(b.x, a.x, a.x <= b.x);
    let yValue : f32 = select(b.y, a.y, a.y <= b.y);
    let zValue : f32 = select(b.z, a.z, a.z <= b.z);
    return vec3 <f32> (xValue, yValue, zValue);
}
fn LinearTosRGB(value : vec4 <f32>) -> vec4 <f32> {
    return vec4 <f32> (mix(pow(value.rgb, vec3 <f32> (0.41666) ) * 1.055 - vec3 <f32> (0.055), value.rgb * 12.92, vec3 <f32> (lessThanEqual(value.rgb, vec3 <f32> (0.0031308) )) ), value.a);
}
fn linearToOutputTexel(value : vec4 <f32>) -> vec4 <f32> {
    return LinearTosRGB(value);
}
