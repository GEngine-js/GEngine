import { wgslParseDefines } from "../../WgslPreprocessor";

export function PointVertInput(defines) {
	return wgslParseDefines`
  struct PointVertInput {
    @location(${defines.positionLocation}) position: vec3<f32>,       
    @location(${defines.uvLocation}) uv: vec2<f32>,
    #if${defines.HAS_COLOR} 
        @location(${defines.colorLocation}) color: vec3<f32>,
    #endif
    #if ${defines.HAS_SIZE}
        @location(${defines.sizeLocation}) size: f32,
    #endif
    #if ${defines.USE_INSTANCE}
        @builtin(instance_index) instanceIdx : u32
    #endif
  }
  `;
}
