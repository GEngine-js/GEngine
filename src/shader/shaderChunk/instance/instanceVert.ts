export function instanceVert(defines) {
	return `
   #if ${defines.USE_INSTANCE}
   struct InstancesUniform {
      instanceMatrix: mat4x4<f32>,
   };
      @group(0) @binding(${defines.instanceMatrixsBufferBinding}) var<storage, read> instancesUniform: InstancesUniform;
    #endif
   `;
}
