
#include <PointVertOutput>
#include <SystemUniform>
#include <PointVertInput>
struct SelfUniform {
    modelMatrix : mat4x4 <f32>,
    color : vec3 <f32>,
    size : f32,
    opacity : f32,
}
@binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;
@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;
@vertex
fn main(input : PointVertInput) -> PointVertOutput {
    var output : PointVertOutput;
    let v1=vec4<f32>(1.0,0.0,0.0,0.0);
    let v2=vec4<f32>(0.0,1.0,0.0,0.0);
    let v3=vec4<f32>(0.0,0.0,1.0,0.0);
    let v4=vec4<f32>(input.position.x,input.position.y,input.position.z,1.0);
    let matrix=mat4x4<f32>(v1,,v2,v3,v4);
    let mvPosition : vec4 <f32>= ystemUniform.viewMatrix *matrix*selfUniform.modelMatrix * vec4 <f32> (0.0, 0.0, 0.0, 1.0);
    #if HAS_UV
        output.uv = input.uv;
    #endif
    #if HAS_COLOR
        output.color = input.color;
    #endif
    #if HAS_SIZE
        output.size = input.size;
    #endif
    vec2 alignedPosition = input.inner_positionLocation.xy * selfUniform.size;
    mvPosition.xy += alignedPosition;
    output.position = systemUniform.projectionMatrix * mvPosition;
    return output;
}
