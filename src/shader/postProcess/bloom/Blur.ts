export default function Blur(defines) {
	return `
    struct FragInput {
        @location(0) uv: vec2<f32>,
    }
    struct BlurUniforms {
        direction:vec2<f32>,
    }
    fn gaussianPdf(x:f32, sigma:f32)->f32 {
        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
    }
    @group(0) @binding(0)  var<uniform> blurUniforms : BlurUniforms;
    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;
    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;
    @fragment
    fn main(input:FragInput) -> @location(0) vec4<f32> {
        let invSize:vec2<f32> = vec2<f32>(1.0,1.0) / vec2<f32>(textureDimensions(tDiffuse));
        let fSigma:f32 =f32(${defines.SIGMA});
        var weightSum:f32 = gaussianPdf(0.0, fSigma);
        var diffuseSum:vec3<f32> = textureSample(tDiffuse, tSampler, input.uv).rgb * weightSum;
        let uvOffset:vec2<f32> = blurUniforms.direction * invSize;
        for( var i : u32 = 1; i < ${defines.KERNEL_RADIUS};i = i + 1 ) {
            let x:f32 = f32(i);
            let w:f32 = gaussianPdf(x, fSigma);
            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv+ uvOffset*x).rgb;
            let sample2:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv- uvOffset*x).rgb;
            diffuseSum += (sample2+sample2)* w;
            weightSum += 2.0 * w;
        }
        diffuseSum/=weightSum;
      return vec4<f32>(diffuseSum,1.0);
    }
  `;
}
