
#include <PointVertOutput>
#include <SystemUniform>
#include <PointVertInput>
struct SelfUniform {
    modelMatrix : mat4x4 <f32>,
    color : vec3 <f32>,
    size : f32,
}
@binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;
@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;
@vertex
fn main(input : PointVertInput) -> PointVertOutput {
    var output : PointVertOutput;
    let v1=vec4<f32>(1.0,0.0,0.0,0.0);
    let v2=vec4<f32>(0.0,1.0,0.0,0.0);
    let v3=vec4<f32>(0.0,0.0,1.0,0.0);
    let rotatePoint=selfUniform.modelMatrix*vec4<f32>(input.position.x,input.position.y,input.position.z,1.0);
    let v4=vec4<f32>(rotatePoint.x,rotatePoint.y,rotatePoint.z,1.0);

    let matrix=mat4x4<f32>(v1,v2,v3,v4);
    var mvPosition : vec4 <f32>= systemUniform.viewMatrix *matrix* vec4 <f32> (0.0, 0.0, 0.0, 1.0);
    #if VERTEX_COLOR
        output.color = input.color;
    #endif
    #if VERTEX_SIZE
        let alignedPosition = input.vertexPoint.xy * input.size;
    #else
        let alignedPosition = input.vertexPoint.xy * selfUniform.size;
    #endif
    let newPoint = mvPosition.xy + alignedPosition;
    output.position = systemUniform.projectionMatrix * vec4 <f32> (newPoint.x, newPoint.y, mvPosition.z, mvPosition.w);
    return output;
}
