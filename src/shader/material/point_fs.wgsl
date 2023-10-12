
#include <PointFragInput>
struct SelfUniform {
  modelMatrix : mat4x4 <f32>,
  color : vec3 <f32>,
  size : f32,
}
@binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;
#if USE_BASECOLORTEXTURE
  @group(0) @binding(baseColorSamplerBinding) var baseColorSampler : sampler;
  @group(0) @binding(baseColorTextureBinding) var baseColorTexture : texture_2d<f32>;
#endif
@fragment
fn main(input : PointFragInput) -> @location(0) vec4 <f32> {
  var color : vec4 <f32>= vec4 <f32> (selfUniform.color, 1.0);
  #if USE_BASECOLORTEXTURE
    color = textureSample(baseColorTexture, baseColorSampler, input.uv);
  #endif
  #if VERTEX_COLOR
    color = vec4 <f32> (input.color, 1.0);
  #endif
  return color;
}
