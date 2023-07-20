export default `
    struct LuminosityUniforms{
        luminosityThreshold:f32,
        smoothWidth:f32,
        defaultColor:vec3<f32>,
        defaultOpacity:f32,
    }
    struct FragInput {
        @location(0) uv: vec2<f32>,
    };
    @group(0) @binding(0)  var<uniform> luminosityUniforms : LuminosityUniforms;
    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;
    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;
    @fragment
    fn main(input:FragInput)-> @location(0) vec4<f32> {

        let texel:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);

        let luma:vec3<f32> = vec3<f32>( 0.299,0.587,0.114 );

        let v:f32 = dot( texel.xyz, luma );

        let outputColor:vec4<f32> = vec4<f32>( luminosityUniforms.defaultColor.rgb, luminosityUniforms.defaultOpacity );

        let alpha:f32 = smoothstep( luminosityUniforms.luminosityThreshold, luminosityUniforms.luminosityThreshold + luminosityUniforms.smoothWidth, v );

       return mix( outputColor, texel, alpha );
    }
    `;
