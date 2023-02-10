export default function convolutionVert(defines) {
	return `
    struct VertexInput {
        @location(0) position: vec2<f32>,       
   }
   struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
    };
    struct ConvolutionUniforms {
        uImageIncrement:vec2<f32>
    };
    @group(0) @binding(${defines.convolutionUniformsBinding}) var<uniform> convolutionUniforms : ConvolutionUniforms;
    @vertex
    fn main(input:VertexInput) -> VertexOutput {
        var output:VertexOutput;
        output.uv = (input.position * 0.5 + 0.5)- ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * convolutionUniforms.uImageIncrement;
        output.position = vec4<f32>(input.position, 0.0, 1.0);;
        return output;

    }
    `;
}
