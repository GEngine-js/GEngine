export default`    
  struct VertexOutput {
      @builtin(position) position : vec4<f32>,
      @location(0) worldPos : vec3<f32>,
      @location(1) view : vec3<f32>, // Vector from vertex to camera.
      @location(2) vUv : vec2<f32>,
      @location(3) color : vec4<f32>,
      @location(4) normal : vec3<f32>,
      @location(5) viewPosition:vec3<f32>,
    };
    // struct BlinnPhongMaterial {
    //   diffuseColor:vec3<f32>,
    //   specularColor:vec3<f32>,
    //   specularShininess:f32,
    //   specularStrength:f32,
    // };
    // struct GeometricContext {
    //     position: vec3<f32>,
    //     normal: vec3<f32>,
    //     viewDir: vec3<f32>,
    // };
    #include <light>
    // @group(0) @binding(0)  var<uniform> selfUniform : SelfUniform;
    @group(0) @binding(1) var mySampler: sampler;
    @group(0) @binding(2) var myTexture: texture_2d<f32>;
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        let color=textureSample(myTexture, mySampler, input.vUv);
        var material:BlinnPhongMaterial;
        material.diffuseColor =color.xyz;
        material.specularColor = vec3<f32>(0.9, 0.9, 0.9);
        material.specularShininess = 20.0;
        material.specularStrength = 0.3;
        var geometry:GeometricContext;
        geometry.position = - input.viewPosition;
        geometry.normal = input.normal;
        geometry.viewDir =normalize( input.view );
        let reflectedLight:ReflectedLight= parseLights(geometry,material);
        let finnalColor=reflectedLight.directDiffuse+reflectedLight.directSpecular;
        return vec4<f32>(finnalColor, color.a);
    }`