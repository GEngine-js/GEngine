@group(0) @binding(1) var baseSampler : sampler;
@group(0) @binding(0) var colorTexture : texture_2d<f32>;
struct VertexOutput {
  @builtin(position) position : vec4 <f32>,
  @location(0) uv : vec2 <f32>,
};
@fragment
fn main(input : VertexOutput) -> @location(0) vec4 <f32> {
  return textureSample(colorTexture, baseSampler, vec2 <f32> (input.uv.x, 1.0 - input.uv.y));
}
