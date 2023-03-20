export default function shadowTestFrag(defines) {
	return `
    @group(0) @binding(2) var shadowSampler: sampler;
    // @group(0) @binding(1) var shadowMap: texture_depth_2d;
    @group(0) @binding(1) var shadowMap: texture_depth_2d_array;

    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
    }; 
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
			var finalColor = vec4( 0.0, 1.0, 0.0, 1.0 );
			// let color: vec4<f32> = textureGather(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));
			let color: vec4<f32> = textureGather(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y), 0);

      return color;
    }
    `;
}
