export default function colorVert(defines){
   return   `
   struct VertexInput {
        @location(0) position: vec3<f32>,       
        @location(1) color: vec4<f32>,
   }
   struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) color: vec4<f32>,
    };
    struct SelfUniform {
       modelMatrix: mat4x4<f32>,
    }
   struct SystemUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    inverseViewMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
   }; 
   @binding(0) @group(0) var<uniform> selfUniform : SelfUniform;
   @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
   @vertex
   fn main(input: VertexInput) -> VertexOutput {
    var output:VertexOutput;
    output.color=input.color;
    output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(input.position,1.0);
    return output;
   }
   `
}