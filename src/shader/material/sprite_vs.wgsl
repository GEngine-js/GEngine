
#include <VertexInput>
#include <VertexOutput>
#include <SystemUniform>
struct SelfUniform {
  modelMatrix : mat4x4 <f32>,
  color : vec3 <f32>,
  rotation : f32,
  center : vec2 <f32>,
  opacity : f32,
}
@binding(spriteBinding) @group(0) var<uniform> selfUniform : SelfUniform;
@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;
@vertex
fn main(input : VertexInput) -> VertexOutput {
  var output : VertexOutput;
  var mvPosition : vec4 <f32>= systemUniform.viewMatrix * selfUniform.modelMatrix * vec4 <f32> (0.0, 0.0, 0.0, 1.0);
  #if HAS_UV
    output.uv = input.uv;
  #endif
  var scale : vec2 <f32>;
  scale.x = length(vec3 <f32> (selfUniform.modelMatrix[0].x, selfUniform.modelMatrix[0].y, selfUniform.modelMatrix[0].z));
  scale.y = length(vec3 <f32> (selfUniform.modelMatrix[1].x, selfUniform.modelMatrix[1].y, selfUniform.modelMatrix[1].z));
      //scale *= - mvPosition.z;
  var alignedPosition : vec2 <f32> =(input.position.xy - (selfUniform.center - vec2 <f32> (0.5, 0.5))) * scale;
  let rotatedPositionX = cos(selfUniform.rotation) * alignedPosition.x - sin(selfUniform.rotation) * alignedPosition.y;
  let rotatedPositionY = sin(selfUniform.rotation) * alignedPosition.x + cos(selfUniform.rotation) * alignedPosition.y;
  var rotatedPosition = vec2 <f32> (rotatedPositionX, rotatedPositionY);
  let newPoint = mvPosition.xy + rotatedPosition;
  output.position = systemUniform.projectionMatrix * vec4 <f32> (newPoint.x, newPoint.y, mvPosition.z, mvPosition.w);
  return output;
}
