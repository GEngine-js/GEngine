export default function phongFrag (defines){
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

    @group(0) @binding(2) var mySampler: sampler;
    @group(0) @binding(1) var myTexture: texture_2d<f32>;
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        let color=textureSample(myTexture, mySampler, input.vUv);
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