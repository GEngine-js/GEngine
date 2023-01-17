export default function quadVert(defines) {
  return `
    struct VertexInput {
         @location(0) position: vec2<f32>,       
    }
    struct VertexOutput {
         @builtin(position) position: vec4<f32>,
         @location(0) uv: vec2<f32>,
     };
    struct SelfUniform {
          modelMatrix: mat4x4<f32>,
          color: vec3<f32>,
          opacity:f32,
          normalMatrix: mat3x3<f32>,
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
     output.uv = input.position * 0.5 + 0.5;
     output.position = vec4<f32>(input.position, 0.0, 1.0);;
     return output;
    }
    `;
}
