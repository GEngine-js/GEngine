/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-23 10:06:23
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-17 15:55:23
 * @FilePath: \GEngine\src\shader\material\phongFrag.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { wgslParseDefines } from "../WgslPreprocessor";
export default function phongFrag (defines){
  return wgslParseDefines`    
  struct VertexOutput {
      @builtin(position) position: vec4<f32>,
      @location(0) vUv: vec2<f32>,
      @location(1) view: vec3<f32>, // Vector from vertex to camera.
      @location(2) worldPos: vec3<f32>,
      @location(3) color: vec4<f32>,
      @location(4) normal: vec3<f32>,
      @location(5) viewPosition: vec3<f32>,
    };
    #include <lightCommon>
    #include <light>
    #include <brdf>
    #include <phongUtils>
    #include <phongFunction>
    struct MaterialUniform {
      modelMatrix: mat4x4<f32>,
      color: vec3<f32>,
      opacity:f32,
      normalMatrix: mat3x3<f32>,
      emissive:vec3<f32>,
      shininess:f32,
      specular:vec3<f32>,      
   }
    #if${defines.baseTexture}
      @group(0) @binding(2) var mySampler: sampler;
      @group(0) @binding(1) var myTexture: texture_2d<f32>;
    #endif
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${defines.baseTexture}
            color=textureSample(myTexture, mySampler, input.vUv);
        #else
            color=vec4<f32>(materialUniform.color,1.0);
        #endif     
        var material:BlinnPhongMaterial;
        
        material.diffuseColor =color.xyz;
        material.specularColor = materialUniform.specular;
        material.specularShininess = materialUniform.shininess;
        material.specularStrength = 1.0;

        var geometry:GeometricContext;
        geometry.position = -input.viewPosition;
        geometry.normal = input.normal;
        geometry.viewDir =normalize(input.viewPosition);

        let reflectedLight:ReflectedLight= parseLights(geometry,material);

        let finnalColor=reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular+totalEmissiveRadiance;

        return vec4<f32>(finnalColor,1.0);
    }`
  }