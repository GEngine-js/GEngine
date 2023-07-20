export default `
    @group(0) @binding(1) var shadowSampler: sampler;
    // @group(0) @binding(1) var shadowMap: texture_depth_2d;
    @group(0) @binding(0) var shadowMap: texture_depth_2d_array;

    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
    };

    fn linearizeDepth(depth: f32, near: f32, far: f32)->f32 {
      return 2 * (near * far) / (far + near - depth * (far - near));
    }

    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
			var finalColor = vec4( 0.0, 1.0, 0.0, 1.0 );
			// let color: vec4<f32> = textureGather(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));
			let color: vec4<f32> = textureGather(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y), 0);
      let depth = (linearizeDepth(color.r, 0.1, 500) - 0.1) / (500 - 0.1);
      return vec4(vec3(depth), 1.0); // PerspectiveCamera
      // return color;
    }
    `;
