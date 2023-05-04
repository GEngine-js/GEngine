import { wgslParseDefines } from "../../WgslPreprocessor";

export function getSkinMatrix(defines) {
	return wgslParseDefines`
   #if ${defines.HAS_SKIN} 
        struct JointsUniform{
             matrixs:array<mat4x4f>,
        }
        struct InverseBindMatricesUniform{
            matrixs:array<mat4x4f>,
        }
        @binding(${defines.skinJointsBufferBinding}) @group(0) var<storage, read> jointsUniform : JointsUniform;
        @binding(${defines.invsBufferBinding}) @group(0) var<storage, read> inverseBindMatricesUniform : InverseBindMatricesUniform;
        fn getSkinMatrix(joints: vec4f, weights: vec4f) -> mat4x4<f32> {
            let joint0 = jointsUniform.matrixs[u32(joints.x)] * inverseBindMatricesUniform.matrixs[u32(joints.x)];
            let joint1 = jointsUniform.matrixs[u32(joints.y)] * inverseBindMatricesUniform.matrixs[u32(joints.y)];
            let joint2 = jointsUniform.matrixs[u32(joints.z)] * inverseBindMatricesUniform.matrixs[u32(joints.z)];
            let joint3 = jointsUniform.matrixs[u32(joints.w)] * inverseBindMatricesUniform.matrixs[u32(joints.w)];
        
            let skinMatrix = joint0 * weights.x +
                            joint1 * weights.y +
                            joint2 * weights.z +
                            joint3 * weights.w;
            return skinMatrix;
        }
        #endif
   `;
}
