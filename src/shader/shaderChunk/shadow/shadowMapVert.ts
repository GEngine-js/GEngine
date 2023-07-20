export default `
   struct VertexInput {
      @location(positionLocation) position: vec3<f32>,       
   };
   struct VertexOutput {
      @builtin(position) position: vec4<f32>,
    };
   struct SelfUniform {
      modelMatrix: mat4x4<f32>,
   };
   struct SystemUniform {
      projectionMatrix: mat4x4<f32>,
      viewMatrix: mat4x4<f32>,
      inverseViewMatrix: mat4x4<f32>,
      cameraPosition: vec3<f32>,
   };

   #if IS_POINTLIGHT_SHADOWMAP
      struct PointLightUniform {
         vpMatrix: mat4x4<f32>,
         // vpMatrixArray: array<mat4x4<f32>, 6>,
      };
      @group(1) @binding(pointLightShadowCameraBinding) var<storage, read> pointLightUniform: PointLightUniform;
   #endif

   @group(0) @binding(selfBinding) var<uniform> selfUniform : SelfUniform;
   @group(1) @binding(cameraBinding) var<uniform> systemUniform : SystemUniform;

   @vertex
   fn main(input: VertexInput) -> VertexOutput {
      var output:VertexOutput;
      #if IS_POINTLIGHT_SHADOWMAP
         output.position = pointLightUniform.vpMatrix * selfUniform.modelMatrix * vec4<f32>(input.position,1.0);
      #else
         output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * selfUniform.modelMatrix * vec4<f32>(input.position,1.0);
      #endif
      return output;
   }
   `;
