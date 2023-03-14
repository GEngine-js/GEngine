import Context from "./Context";

class Sampler {
	public gpuSampler: GPUSampler;
	public layoutType: GPUSamplerBindingLayout;

	static baseSampler = new Sampler({
		magFilter: "linear",
		minFilter: "linear"
	});

	constructor(
		public descriptor?: GPUSamplerDescriptor,
		layoutType: GPUSamplerBindingLayout = {
			type: "filtering"
		}
	) {
		this.descriptor = {};
		Object.assign(this.descriptor, {
			magFilter: "linear",
			minFilter: "linear",
			// mipmapFilter: "linear",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge"
			// addressModeW: "clamp-to-edge",
		});
		this.layoutType = layoutType;
	}
	update(context: Context) {
		if (!this.gpuSampler) this.gpuSampler = context.device.createSampler(this.descriptor);
	}
}

export default Sampler;
