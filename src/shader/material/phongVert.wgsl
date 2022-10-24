struct SystemUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    inverseViewMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
    time: f32,
  }; 
  @group(0) @binding(0) var<uniform> system: SystemUniform; 
 struct MeshUniform {
   modelMatrix: mat4x4<f32>,
   normalMatrix: mat3x3<f32>,
 };
 
 @group(1) @binding(0) var<uniform> mesh: MeshUniform;
 
 struct Output {
   @builtin(position) position: vec4<f32>,
   @location(0) vPositionWorld: vec3<f32>,
   @location(1) vPositionView: vec3<f32>,
   @location(2) vNormalView: vec3<f32>,
   @location(3) vNormalWorld: vec3<f32>,
 };

 @vertex
 fn main(
   @location(0) position: vec3<f32>,
   @location(1) normal: vec3<f32>,
   @location(2) uv: vec2<f32>
 ) -> Output {
   var output: Output;
   output.vPositionWorld = (mesh.modelMatrix * vec4<f32>(position, 1.0)).xyz;
   output.vPositionView = (system.viewMatrix * vec4<f32>(output.vPositionWorld, 1.0)).xyz; 
   output.vNormalView = mesh.normalMatrix * normal;
   output.vNormalWorld = normalize((system.inverseViewMatrix * vec4<f32>(output.vNormalView, 0.0)).xyz);
   output.position = system.projectionMatrix * vec4<f32>(output.vPositionView, 1.0); 
   return output;
 }