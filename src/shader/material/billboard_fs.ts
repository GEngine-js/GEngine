export function billboard_fs(defines) {
	return `
  struct SelfUniform {
    modelMatrix: mat4x4<f32>,
    color:vec3<f32>,
    rotation:f32,
    center:vec2<f32>,
    opacity:f32,
  }
  @binding(${defines.billboardBinding}) @group(0) var<uniform> selfUniform : SelfUniform;
  #if${defines.USE_COLORTEXTURE}
    @group(0) @binding(${defines.baseColorSamplerBinding}) var baseColorSampler: sampler;
    @group(0) @binding(${defines.baseColorTextureBinding}) var baseColorTexture: texture_2d<f32>;
  #endif
  @fragment
  fn main(input:VertexOutput) -> @location(0) vec4<f32> {
    #if${defines.USE_COLORTEXTURE}
      return textureSample(baseColorTexture, baseColorSampler, input.uv);
    #else
      return vec4<f32>(selfUniform.color,selfUniform.opacity);
    #endif
  }
  `;
}
