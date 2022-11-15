import { wgslParseDefines } from "../WgslPreprocessor"
export default function phongVert(defines){
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
      struct SelfUniform {
            modelMatrix: mat4x4<f32>,
            normalMatrix: mat3x3<f32>,
            color: vec3<f32>
      }
      struct SystemUniform {
            projectionMatrix: mat4x4<f32>,
            viewMatrix: mat4x4<f32>,
            inverseViewMatrix: mat4x4<f32>,
            cameraPosition: vec3<f32>,
      }; 

      @binding(0) @group(0) var<uniform> selfUniform : SelfUniform;
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
            // 
            let temModelPos = selfUniform.modelMatrix *vec4<f32>(input.position,1.0);
            let modelPos=temModelPos.xyzw/temModelPos.w;
            output.worldPos = modelPos.xyz;
            let vNormalView = selfUniform.normalMatrix * input.normal;
            //output.normal = normalize((systemUniform.inverseViewMatrix * vec4<f32>(vNormalView, 0.0)).xyz);
            output.normal = vNormalView;
            output.view = systemUniform.cameraPosition - modelPos.xyz;
            let viewPosition=systemUniform.viewMatrix * modelPos;
            output.viewPosition = viewPosition.xyz/viewPosition.w;
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;
            return output;
      }` ;    
 }

