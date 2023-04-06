import { wgslParseDefines } from "../WgslPreprocessor";
export default function pbr_vs(defines) {
	return wgslParseDefines`
   struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        color: vec3<f32>,
        opacity:f32,
        normalMatrix: mat4x4<f32>,
        emissive:vec3<f32>,
        metallic:f32,
        roughness:f32,
        #if ${defines.USE_NORMALTEXTURE}
            normalTextureScale:vec2<f32>,
        #endif
        #if ${defines.USE_AOTEXTURE}
            occlusionStrength:f32,
        #endif
        #if ${defines.HAS_SKIN} 
             //jointMatrixCount:f32,
             jointMatrixs:array<mat4x4>,
        #endif
   }

   struct SystemUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
   }; 
   
   struct VertexInput {
        @location(${defines.positionLocation}) position: vec3<f32>,       
        @location(${defines.normalLocation}) normal: vec3<f32>,
        #if${defines.HAS_COLOR} 
            @location(${defines.colorLocation}) color: vec3<f32>,
        #endif
        #if ${defines.HAS_UV}
            @location(${defines.uvLocation}) uv: vec2<f32>,
        #endif
        #if${defines.HAS_SKIN} 
            @location(${defines.joint0Location}) joint0:vec4<f32>;
            @location(${defines.weight0Location}) weight0:vec4<f32>;
            #if${defines.SKIN_VEC8}
                @location(${defines.joint1Location}) joint1:vec4<f32>;
                @location(${defines.weight1Location}) weight1:vec4:<f32>;
            #endif
        #endif
   }
    struct VertexOutput {
        @builtin(position) position:vec4<f32>,
        @location(0) worldPos:vec3<f32>,
        @location(1) normal:vec3<f32>,
        #if ${defines.HAS_UV}
            @location(2) uv:vec2<f32>
        #endif
    }  

    @binding(${defines.pbrBinding}) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(${defines.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
   fn main(input: VertexInput)-> VertexOutput
   {
       #if ${defines.HAS_SKIN} 
            var skinMatrix:mat4x4<f32> = 
                   input.weight0.x * materialUniform.jointMatrixs[u32(input.joint0.x)] +
                   input.weight0.y * materialUniform.jointMatrixs[u32(input.joint0.y)] +
                   input.weight0.z * materialUniform.jointMatrixs[u32(input.joint0.z)] +
                   input.weight0.w * materialUniform.jointMatrixs[u32(input.joint0.w)];
           #if ${defines.SKIN_VEC8} 
               skinMatrix +=
                   input.weight1.x * materialUniform.jointMatrixs[u32(joint1.x)] +
                   input.weight1.y * materialUniform.jointMatrixs[u32(joint1.y)] +
                   input.weight1.z * materialUniform.jointMatrixs[u32(joint1.z)] +
                   input.weight1.w * materialUniform.jointMatrixs[u32(joint1.w)];
           #endif
        #endif
        var output: VertexOutput;
        #if ${defines.HAS_UV}
            output.uv = input.uv;
        #endif
        #if ${defines.HAS_SKIN} 
            output.normal = normalize((materialUniform.normalMatrix * transpose(inverse(skinMatrix)) * vec4<f32>(input.normal, 0.0)).xyz);
            let pos:vec4<f32> = systemUniform.viewMatrix *materialUniform.modelMatrix*skinMatrix * vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix*materialUniform.modelMatrix * skinMatrix * vec4<f32>(input.position,1.0);
        #else
            let vNormalView = materialUniform.normalMatrix * vec4<f32>(input.normal,0.0);
            output.normal = vNormalView.xyz;
            let pos:vec4<f32>=systemUniform.viewMatrix *materialUniform.modelMatrix*vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *materialUniform.modelMatrix* vec4<f32>(input.position, 1.0);
        #endif      
        // output.worldPos = pos.xyz/pos.w; 
        let modelPos=materialUniform.modelMatrix *vec4<f32>(input.position,1.0);
        output.worldPos = modelPos.xyz/modelPos.w;
        return output;   
   }
   `;
}
