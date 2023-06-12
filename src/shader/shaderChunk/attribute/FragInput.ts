import { wgslParseDefines } from "../../WgslPreprocessor";

export function FragInput(defines) {
	return wgslParseDefines`
    struct FragInput {
      @builtin(front_facing) frontFacing: bool,
      @location(0) worldPos:vec3<f32>,
      @location(1) normal:vec3<f32>,
      #if ${defines.HAS_UV}
          @location(2) uv:vec2<f32>
      #endif
  } 
  `;
}
