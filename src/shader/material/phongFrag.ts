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
    @group(0) @binding(2) var mySampler: sampler;
    @group(0) @binding(1) var myTexture: texture_2d<f32>;

    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        let color=textureSample(myTexture, mySampler, input.vUv);
        var material:BlinnPhongMaterial;
        
        material.diffuseColor =color.xyz;
        material.specularColor = vec3<f32>(1.0, 1.0, 1.0);
        material.specularShininess = 0.9;
        material.specularStrength = 0.3;

        var geometry:GeometricContext;
        geometry.position = input.viewPosition;
        geometry.normal = input.normal;
        geometry.viewDir =normalize(input.view);

        let reflectedLight:ReflectedLight= parseLights(geometry,material);

        let finnalColor=reflectedLight.directDiffuse+reflectedLight.directSpecular;

        return vec4<f32>(finnalColor,1.0);
    }`
  }