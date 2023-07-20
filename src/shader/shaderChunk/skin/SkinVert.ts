export const getSkinMatrix = `
   #if HAS_SKIN
        struct JointsUniform{
             matrixs:array<mat4x4f>,
        }
        struct InverseBindMatricesUniform{
            matrixs:array<mat4x4f>,
        }
        @binding(skinJointsBufferBinding) @group(0) var<storage, read> jointsUniform : JointsUniform;
        @binding(invsBufferBinding) @group(0) var<storage, read> inverseBindMatricesUniform : InverseBindMatricesUniform;
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

export const skinVertHeader = `
   #if HAS_SKIN 
        struct JointsUniform{
             matrixs:array<mat4x4f>,
        }
        struct InverseBindMatricesUniform{
            matrixs:array<mat4x4f>,
        }
        @binding(skinJointsBufferBinding) @group(0) var<storage, read> jointsUniform : JointsUniform;
        @binding(invsBufferBinding) @group(0) var<storage, read> inverseBindMatricesUniform : InverseBindMatricesUniform;
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
export const skinVertMain = `
        #if HAS_SKIN
            modelMatrix =getSkinMatrix(input.joint0,input.weight0);
            vNormalView = normalize((materialUniform.normalMatrix * modelMatrix * vec4<f32>(input.normal, 0.0)).xyz);
        #endif
  `;
