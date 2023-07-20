export const instanceVertHeader = `
   #if USE_INSTANCE
      struct InstancesUniform {
         instanceMatrixs:  array<mat4x4<f32>, instanceCount>,
      };
      @group(0) @binding(instanceMatrixsBufferBinding) var<storage, read> instancesUniform: InstancesUniform;
    #endif
   `;

export const instanceVertMain = `
      #if USE_INSTANCE
         modelMatrix=instancesUniform.instanceMatrixs[input.instanceIdx];
      #endif
   `;
