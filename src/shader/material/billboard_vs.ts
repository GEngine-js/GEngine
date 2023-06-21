import { wgslParseDefines } from "../WgslPreprocessor";
export function billboard_vs(defines) {
	return wgslParseDefines`

  #include <VertexInput>
  #include <VertexOutput>
  #include <SystemUniform>
  struct SelfUniform {
    modelMatrix: mat4x4<f32>,
    color:vec3<f32>,
    rotation:f32,
    center:vec2<f32>,
    opacity:f32,
  }
  @binding(${defines.billboardBinding}) @group(0) var<uniform> selfUniform : SelfUniform;
  @binding(${defines.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
  @vertex
    fn main(input: VertexInput) -> VertexOutput {
    var output:VertexOutput;
    let mvPosition:vec4<f32>= ystemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(0.0,0.0,0.0, 1.0 );
    #if ${defines.HAS_UV}
       output.uv=input.uv;
    #endif
    var scale:vec2<f32>;
    scale.x = length( vec3<f32>( selfUniform.modelMatrix[ 0 ].x, selfUniform.modelMatrix[ 0 ].y, selfUniform.modelMatrix[ 0 ].z ) );
    scale.y = length( vec3<f32>( selfUniform.modelMatrix[ 1 ].x, selfUniform.modelMatrix[ 1 ].y, selfUniform.modelMatrix[ 1 ].z ) );

    vec2 alignedPosition = ( input.position.xy - ( selfUniform.center - vec2<f32>( 0.5 ) ) ) * scale;
    vec2 rotatedPosition;
    rotatedPosition.x = cos( selfUniform.rotation ) * alignedPosition.x - sin( selfUniform.rotation ) * alignedPosition.y;
    rotatedPosition.y = sin( selfUniform.rotation ) * alignedPosition.x + cos( selfUniform.rotation ) * alignedPosition.y;
    mvPosition.xy += rotatedPosition;
    output.position = systemUniform.projectionMatrix * mvPosition;
    return output;
    }
  `;
}
