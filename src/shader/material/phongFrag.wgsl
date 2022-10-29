struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) worldPos : vec3<f32>,
  @location(1) view : vec3<f32>, // Vector from vertex to camera.
  @location(2) vUv : vec2<f32>,
  @location(3) color : vec4<f32>,
  @location(4) normal : vec3<f32>,
};
struct BlinnPhongMaterial {
	diffuseColor:vec3<f32>;
	specularColor:vec3<f32>;
	specularShininess:f32;
	specularStrength:f32;
};
struct SelfUniform {
    matrix : mat4x4<f32>,
    color:vec3<f32>
}
struct GeometricContext {
    position: vec3<f32>;
    normal: vec3<f32>;
    viewDir: vec3<f32>;
    // #ifdef USE_CLEARCOAT
    //     vec3 clearcoatNormal;
    // #endif
};
@group(0) @binding(0)  var<uniform> selfUniform : SelfUniform;
@group(0) @binding(1) var mySampler: sampler;
@group(0) @binding(2) var myTexture: texture_2d<f32>;
@fragment
fn main(input:VertexOutput) -> @location(0) vec4<f32> {
    var material:BlinnPhongMaterial;
    material.diffuseColor = diffuseColor.rgb;
    material.specularColor = vec3<f32>(0.9, 0.9, 0.9);
    material.specularShininess = 20.0;
    material.specularStrength = 0.3;
    var geometry:GeometricContext;
    geometry.position = - vViewPosition;
    geometry.normal = input.normal;
    geometry.viewDir =normalize( input.view );
  return vec4<f32>(color, 1.0);
}