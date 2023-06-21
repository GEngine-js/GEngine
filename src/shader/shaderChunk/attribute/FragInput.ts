import { wgslParseDefines } from "../../WgslPreprocessor";

export function FragInput(defines) {
	return wgslParseDefines`
    struct FragInput {
      @builtin(front_facing) frontFacing: bool,
      @location(0) worldPos:vec3<f32>,
      @location(1) normal:vec3<f32>,
      @location(2) uv:vec2<f32>,
      @location(3) view: vec3<f32>, // Vector from vertex to camera.
      @location(4) color: vec4<f32>,
      @location(5) viewPosition: vec3<f32>,
  } 
  `;
}
