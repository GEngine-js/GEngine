import { wgslParseDefines } from "../WgslPreprocessor";

export function point_vs(defines) {
	return wgslParseDefines`
    #include <PointVertOutput>
    #include <SystemUniform>
    #include <PointVertInput>
    struct SelfUniform {
      modelMatrix: mat4x4<f32>,
      color:vec3<f32>,
      size:f32,
      opacity:f32,
    }
    @binding(${defines.pointBinding}) @group(0) var<uniform> selfUniform : SelfUniform;
    @binding(${defines.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
      fn main(input: PointVertInput) -> PointVertOutput {
      var output:PointVertOutput;
      let mvPosition:vec4<f32>= ystemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(0.0,0.0,0.0, 1.0 );
      #if ${defines.HAS_UV}
          output.uv=input.uv;
      #endif
      #if ${defines.HAS_COLOR}
          output.color=input.color;
      #endif
      #if ${defines.HAS_SIZE}
          output.size=input.size;
      #endif
      vec2 alignedPosition = input.position.xy* selfUniform.size;
      mvPosition.xy += alignedPosition;
      output.position = systemUniform.projectionMatrix * mvPosition;
      return output;
      }
   `;
}
