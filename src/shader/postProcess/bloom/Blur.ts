export default function Blur(defines) {
	return `
    const KERNEL_RADIUS:u32=${defines.KERNEL_RADIUS}
    struct FragInput {
        @location(0) uv: vec2<f32>,
    };
    struct BlurUniforms {
        texSize:vec2<f32>,
        direction:vec2<f32>,
    }
    fn gaussianPdf(x:f32, sigma:f32)->f32 {
        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
    }
    @group(0) @binding(0)  var<uniform> blurUniforms : BlurUniforms;
    @group(0) @binding(${defines.tDiffuseBinding}) var tDiffuse: texture_2d<f32>;
    @group(0) @binding(${defines.tSamplerBinding}) var tSampler: sampler;
    @fragment
    fn main(input:FragInput)-> @location(0) vec4<f32>  {
        let invSize:vec2<f32> = 1.0 / texSize;
        let fSigma:f32 = SIGMA;
        let weightSum:f32 = gaussianPdf(0.0, fSigma);
        let diffuseSum:vec3<f32> = textureSample(tDiffuse, tSampler, input.uv).rgb * weightSum;
        for( var i : u32 = 0u;; i < KERNEL_RADIUS; i ++ ) {
            let x:f32 = i;
            let w:f32 = gaussianPdf(x, fSigma);
            let uvOffset:vec2<f32> = direction * invSize * x;
            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv+ uvOffset).rgb;
            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv- uvOffset).rgb;
            diffuseSum += (sample1 + sample2) * w;
            weightSum += 2.0 * w;
        }
      returtn vec4<f32>(diffuseSum/weightSum, 1.0);
    }
  `;
}
