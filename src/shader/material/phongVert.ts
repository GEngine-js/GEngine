/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-12-02 19:05:56
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-02-12 07:52:16
 * @FilePath: \GEngine\src\shader\material\phongVert.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { wgslParseDefines } from "../WgslPreprocessor";
export default function phongVert(defines) {
	return `
      struct VertexOutput {
            @builtin(position) position: vec4<f32>,
            @location(0) vUv: vec2<f32>,
            @location(1) view: vec3<f32>, // Vector from vertex to camera.
            @location(2) worldPos: vec3<f32>,
            @location(3) color: vec4<f32>,
            @location(4) normal: vec3<f32>,
            @location(5) viewPosition: vec3<f32>,
      };
      struct MaterialUniform {
            modelMatrix: mat4x4<f32>,
            color: vec3<f32>,
            opacity:f32,
            normalMatrix: mat4x4<f32>,
            emissive:vec3<f32>,
            specular:vec3<f32>,
            shininess:f32,
      }
      struct SystemUniform {
            projectionMatrix: mat4x4<f32>,
            viewMatrix: mat4x4<f32>,
            inverseViewMatrix: mat4x4<f32>,
            cameraPosition: vec3<f32>,
      }; 

      @binding(0) @group(0) var<uniform> selfUniform : MaterialUniform;
      @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;

      struct VertexInput {
            @location(0) position: vec3<f32>,       
            @location(1) normal: vec3<f32>,
            @location(2) uv: vec2<f32>,
      }
      @vertex
      fn main(input: VertexInput) -> VertexOutput {
            var output: VertexOutput;
            output.vUv = input.uv;
            let modelPos=selfUniform.modelMatrix *vec4<f32>(input.position,1.0);
            output.worldPos = modelPos.xyz/modelPos.w;
            let vNormalView = selfUniform.normalMatrix * vec4<f32>(input.normal,0.0);
            output.normal =  vNormalView.xyz;
            output.view = systemUniform.cameraPosition.xyz - modelPos.xyz;
            let viewPosition=systemUniform.viewMatrix * modelPos;
            output.viewPosition = -viewPosition.xyz;
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;
            return output;
      }`;
}
