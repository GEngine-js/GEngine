import { wgslParseDefines } from "../WgslPreprocessor";
export default function phongFrag(defines) {
	return wgslParseDefines`  
  struct VertInput {
      @builtin(position) position: vec4<f32>,
      @builtin(front_facing) is_front: bool,
      @location(0) uv: vec2<f32>,
      @location(1) view: vec3<f32>, // Vector from vertex to camera.
      @location(2) worldPos: vec3<f32>,
      @location(3) color: vec4<f32>,
      @location(4) normal: vec3<f32>,
      @location(5) viewPosition: vec3<f32>,
    };
    #include <lightCommon>
    #include <light>
    #include <getNormal>
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

    #if${defines.baseTexture}
      @group(0) @binding(2) var mySampler: sampler;
      @group(0) @binding(1) var myTexture: texture_2d<f32>;
    #endif
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;

    @fragment
    fn main(input:VertInput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${defines.baseTexture}
            color= vec4<f32>(textureSample(myTexture, mySampler, input.uv).rgb+materialUniform.color,materialUniform.opacity);
        #else
            color=vec4<f32>(materialUniform.color,materialUniform.opacity);
        #endif     
        let faceDirection:f32 =select(-1.0,1.0,input.is_front);
        let  V:vec3<f32> =  normalize( systemUniform.cameraPosition - input.worldPos);
        let  N:vec3<f32> = getNormal(input)*faceDirection;
        let lightColor:LightColor=parseLights(input.worldPos,materialUniform.shininess,N,V);
        var finnalColor:vec3<f32>=color.xyz+lightColor.diffuse+lightColor.specular;
        return vec4<f32>(finnalColor,color.a);
    }`;
}
