import { wgslParseDefines } from "../WgslPreprocessor";

export function point_fs(defines) {
	return wgslParseDefines`
  #include <PointFragInput>
  struct SelfUniform {
    modelMatrix: mat4x4<f32>,
    color:vec3<f32>,
    size:f32,
    opacity:f32,
  }
  @binding(${defines.pointBinding}) @group(0) var<uniform> selfUniform : SelfUniform;
  #if${defines.USE_COLORTEXTURE}
    @group(0) @binding(${defines.baseColorSamplerBinding}) var baseColorSampler: sampler;
    @group(0) @binding(${defines.baseColorTextureBinding}) var baseColorTexture: texture_2d<f32>;
  #endif
  @fragment
  fn main(input:PointFragInput) -> @location(0) vec4<f32> {
    var color:vec4<f32>=vec4<f32>(selfUniform.color,selfUniform.opacity);
    #if${defines.USE_COLORTEXTURE}
      color=textureSample(baseColorTexture, baseColorSampler, input.uv);
    #endif
    #if${defines.HAS_COLOR}
      color=vec4<f32>(input.color,selfUniform.opacity);
    #endif
    return color;
  }
  `;
}
