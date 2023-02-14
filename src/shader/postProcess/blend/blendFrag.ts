export default function blendFrag(defines) {
	return `
    struct FragInput {
        @location(0) uv: vec2<f32>,
    };
    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;
    @group(0) @binding({{baseColorTextureBinding}}) var baseColorTexture: texture_2d<f32>;
    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;
    @fragment
    fn main(input:FragInput) -> @location(0) vec4<f32> {
        let postColor:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);
        let baseColor:vec4<f32> = textureSample(baseColorTexture, tSampler, input.uv);
      return baseColor+postColor;
    }   
    `;
}
