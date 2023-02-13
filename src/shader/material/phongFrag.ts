/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-23 10:06:23
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-02-12 10:25:04
 * @FilePath: \GEngine\src\shader\material\phongFrag.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { wgslParseDefines } from "../WgslPreprocessor";
export default function phongFrag(defines) {
	return wgslParseDefines`  
  struct VertexOutput {
      @builtin(position) position: vec4<f32>,
      @builtin(front_facing) is_front: bool,
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
      normalMatrix: mat4x4<f32>,
      emissive:vec3<f32>,
      shininess:f32,
      specular:vec3<f32>,      
   }
   struct SystemUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    inverseViewMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
  }; 
  fn getNormal(input:VertexOutput)->vec3<f32>
{
    // Retrieve the tangent space matrix
    let pos_dx:vec3<f32> = dpdx(input.worldPos);
    let pos_dy:vec3<f32> = dpdy(input.worldPos);
    let tex_dx:vec3<f32> = dpdx(vec3<f32>(input.vUv, 0.0));
    let tex_dy:vec3<f32> = dpdy(vec3<f32>(input.vUv, 0.0));
    var t:vec3<f32> = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);
    let ng = input.normal;
    t = normalize(t - ng * dot(ng, t));
    let b:vec3<f32> = normalize(cross(ng, t));
    let tbn:mat3x3<f32> = mat3x3<f32>(t, b, ng);
    var n:vec3<f32> = tbn[2].xyz;
    return n;
}
    #if${defines.baseTexture}
      @group(0) @binding(2) var mySampler: sampler;
      @group(0) @binding(1) var myTexture: texture_2d<f32>;
    #endif
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;

    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${defines.baseTexture}
            color=textureSample(myTexture, mySampler, input.vUv)*vec4<f32>(materialUniform.color,materialUniform.opacity);
        #else
            color=vec4<f32>(materialUniform.color,materialUniform.opacity);
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
        let faceDirection:f32 =select(-1.0,1.0,input.is_front);
        let  V:vec3<f32> =  normalize( systemUniform.cameraPosition - input.worldPos);
        let  N:vec3<f32> = getNormal(input);
        //let reflectedLight:ReflectedLight= parseLights(geometry,material);
        let finnalColor:vec3<f32>=color.xyz+parseLights(input.worldPos,materialUniform.shininess,N,V);
        //let finnalColor=reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular+totalEmissiveRadiance;
        //let finnalColor:vec3<f32>=color.xyz+lightDiffuse+lightSpecular;
        return vec4<f32>(finnalColor,color.a);
    }`;
}
