import { wgslParseDefines } from "../WgslPreprocessor";
export default function phongFrag(defines) {
	return wgslParseDefines`  
  struct VertInput {
      @builtin(position) position: vec4<f32>,
      @builtin(front_facing) frontFacing: bool,
      @location(0) uv: vec2<f32>,
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
      shininess:f32,
      specular:vec3<f32>,      
   }
   struct SystemUniform {
      projectionMatrix: mat4x4<f32>,
      viewMatrix: mat4x4<f32>,
      inverseViewMatrix: mat4x4<f32>,
      cameraPosition: vec3<f32>,
  }; 

    #if${defines.USE_COLORTEXTURE}
      @group(0) @binding(${defines.baseColorSamplerBinding}) var baseColorSampler: sampler;
      @group(0) @binding(${defines.baseColorTextureBinding}) var baseColorTexture: texture_2d<f32>;
    #endif
    #if ${defines.USE_NORMALTEXTURE}
      @group(0) @binding(${defines.normalTextureBinding}) var normalTexture: texture_2d<f32>;
      @group(0) @binding(${defines.normalSamplerBinding}) var normalSampler: sampler;
    #endif
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
    #if ${defines.USE_NORMALTEXTURE}
      #include <getTBN>
      #include <getNormalByNormalTexture>
    #else
        #include <getNormal>
    #endif

    #include <light>

    @fragment
    fn main(input:VertInput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${defines.USE_COLORTEXTURE}
            color= vec4<f32>(textureSample(baseColorTexture, baseColorSampler, input.uv).rgb+materialUniform.color,materialUniform.opacity);
        #else
            color=vec4<f32>(materialUniform.color,materialUniform.opacity);
        #endif     
        let  V:vec3<f32> =  normalize( systemUniform.cameraPosition - input.worldPos);
        #if ${defines.USE_NORMALTEXTURE}
            let N:vec3<f32> = getNormalByNormalTexture(input);  
        #else
            let N:vec3<f32> = getNormal(input);
        #endif
        var geometry:Geometry;
        geometry.normal=N;
        geometry.viewDir=V;
        geometry.position=input.worldPos;
        let lightColor:ReflectedLight=parseLights(geometry,materialUniform.shininess,input);
        var finnalColor:vec3<f32>=color.xyz+lightColor.directDiffuse+lightColor.directSpecular;
        // var finnalColor:vec3<f32>=lightColor.testColor.xyz;

        return vec4<f32>(finnalColor,color.a);
    }`;
}
