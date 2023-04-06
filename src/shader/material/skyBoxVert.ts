export default function skyBoxVert(defines) {
	return `
   struct SystemUniform {
       projectionMatrix: mat4x4<f32>,
       viewMatrix: mat4x4<f32>,
       inverseViewMatrix: mat4x4<f32>,
       cameraPosition: vec3<f32>,
   }; 
   struct MaterialUniform {
    modelMatrix: mat4x4<f32>,
 }
   @binding(${defines.skyboxBinding}) @group(0) var<uniform> selfUniform : MaterialUniform;
   @binding(${defines.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
     struct VertexInput {
       @location(${defines.positionLocation}) position : vec3<f32>,
     };
     struct VertexOutput {
       @builtin(position) position : vec4<f32>,
       @location(0) texCoord : vec3<f32>,
     };
     @vertex
     fn main(input : VertexInput) -> VertexOutput {
       var output : VertexOutput;
       output.texCoord = input.position.xyz;
       var modelView = systemUniform.viewMatrix;
       // Drop the translation portion of the modelView matrix
       modelView[3] = vec4(0.0, 0.0, 0.0, modelView[3].w);
       output.position = systemUniform.projectionMatrix * modelView * vec4<f32>(input.position,1.0);
       output.position = output.position.xyww;
       return output;
     }
   `;
}
