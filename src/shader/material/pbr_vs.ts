/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-18 10:53:08
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-02-16 17:59:01
 * @FilePath: \GEngine\src\shader\material\pbr_vs.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { wgslParseDefines } from "../WgslPreprocessor";
export default function pbr_vs(defines) {
	return wgslParseDefines`
   struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        color: vec3<f32>,
        opacity:f32,
        normalMatrix: mat4x4<f32>,
        emissive:vec3<f32>,
        metallic:f32,
        roughness:f32,
        #if ${defines.USE_NORMALTEXTURE}
            normalTextureScale:vec2<f32>,
        #endif
        #if ${defines.USE_AOTEXTURE}
            occlusionStrength:f32,
        #endif
        // #if ${defines.HAS_SKIN} 
        //     jointMatrixCount:f32,
        //     jointMatrixs:array<mat4x4>,
        // #endif
   }

   struct SystemUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
   }; 
   
   struct VertexInput {
        @location(0) position: vec3<f32>,       
        @location(1) normal: vec3<f32>,
        @location(2) uv: vec2<f32>,
   }
//    ifdef HAS_SKIN
//    layout(location = JOINTS_0_LOCATION) in vec4 joint0;
//    layout(location = WEIGHTS_0_LOCATION) in vec4 weight0;
//    ifdef SKIN_VEC8
//    layout(location = JOINTS_1_LOCATION) in vec4 joint1;
//    layout(location = WEIGHTS_1_LOCATION) in vec4 weight1;
//    endif
//    endif
   
   
    struct VertexOutput {
        @builtin(position) position:vec4<f32>,
        @location(0) worldPos:vec3<f32>,
        @location(1) normal:vec3<f32>,
        @location(2) uv:vec2<f32>
    }  

    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
   fn main(input: VertexInput)-> VertexOutput
   {
       #if ${defines.HAS_SKIN} 
            mat4 skinMatrix = 
                   weight0.x * u_jointMatrix.matrix[int(joint0.x)] +
                   weight0.y * u_jointMatrix.matrix[int(joint0.y)] +
                   weight0.z * u_jointMatrix.matrix[int(joint0.z)] +
                   weight0.w * u_jointMatrix.matrix[int(joint0.w)];
           #if ${defines.SKIN_VEC8} 
               skinMatrix +=
                   weight1.x * u_jointMatrix.matrix[int(joint1.x)] +
                   weight1.y * u_jointMatrix.matrix[int(joint1.y)] +
                   weight1.z * u_jointMatrix.matrix[int(joint1.z)] +
                   weight1.w * u_jointMatrix.matrix[int(joint1.w)];
           #endif
        #endif
        var output: VertexOutput;
        output.uv = input.uv;
   
        #if ${defines.HAS_SKIN} 
            output.normal = normalize((materialUniform.normalMatrix * transpose(inverse(skinMatrix)) * vec4<f32>(input.normal, 0.0)).xyz);
            let pos:vec4<f32> = systemUniform.viewMatrix *materialUniform.modelMatrix*skinMatrix * vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix*materialUniform.modelMatrix * skinMatrix * vec4<f32>(input.position,1.0);
        #else
            let vNormalView = materialUniform.normalMatrix * vec4<f32>(input.normal,0.0);
            output.normal =  vNormalView.xyz;
            let pos:vec4<f32>=systemUniform.viewMatrix *materialUniform.modelMatrix*vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *materialUniform.modelMatrix* vec4<f32>(input.position, 1.0);
        #endif      
        // output.worldPos = pos.xyz/pos.w; 
        let modelPos=materialUniform.modelMatrix *vec4<f32>(input.position,1.0);
        output.worldPos = modelPos.xyz/modelPos.w;
        return output;   
   }
   `;
}
