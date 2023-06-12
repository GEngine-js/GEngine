import { wgslParseDefines } from "../../WgslPreprocessor";

export function instanceVertHeader(defines) {
	return wgslParseDefines`
   #if ${defines.USE_INSTANCE}
      struct InstancesUniform {
         instanceMatrixs:  array<mat4x4<f32>, ${defines.instanceCount}>,
      };
      @group(0) @binding(${defines.instanceMatrixsBufferBinding}) var<storage, read> instancesUniform: InstancesUniform;
    #endif
   `;
}
export function instanceVertMain(defines) {
	return wgslParseDefines`
      #if ${defines.USE_INSTANCE}
         modelMatrix=instancesUniform.instanceMatrixs[input.instanceIdx];
      #endif
   `;
}
