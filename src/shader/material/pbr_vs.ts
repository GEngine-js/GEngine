import { wgslParseDefines } from "../WgslPreprocessor";
export default function pbr_vs(defines) {
	return wgslParseDefines`
    #include <PbrMaterialStruct>
    #include <SystemUniform>
    #include <VertexInput>
    #include <VertexOutput> 
    #include <skinVertHeader>
    #include <instanceVertHeader>
    @binding(${defines.pbrBinding}) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(${defines.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
    fn main(input: VertexInput)-> VertexOutput
   {
        var output: VertexOutput;
        #if ${defines.HAS_UV}
            output.uv = input.uv;
        #endif
        var modelMatrix:mat4x4<f32>;
        var vNormalView:vec3<f32>;
        vNormalView = normalize(materialUniform.normalMatrix * vec4<f32>(input.normal,0.0)).xyz;
        modelMatrix=materialUniform.modelMatrix;   
        #include <skinVertMain>
        #include <instanceVertMain>  
        output.normal = vNormalView.xyz;
        output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *modelMatrix* vec4<f32>(input.position, 1.0);
        let modelPos=modelMatrix *vec4<f32>(input.position,1.0);
        output.worldPos = modelPos.xyz/modelPos.w;
        return output;   
   }
   `;
}
