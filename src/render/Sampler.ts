import Context from "./Context";

class Sampler {
	public gpuSampler: GPUSampler;
	public layoutType: GPUSamplerBindingLayout;
	constructor(
		public descriptor: GPUSamplerDescriptor = {
			magFilter: "linear",
			minFilter: "linear",
			// mipmapFilter: "linear",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge"
			// addressModeW: "clamp-to-edge",
		},
		layoutType: GPUSamplerBindingLayout = {
			type: "filtering"
		}
	) {
		this.layoutType = layoutType;
	}
	update(context: Context) {
		if (!this.gpuSampler) this.gpuSampler = context.device.createSampler(this.descriptor);
	}
}

export default Sampler;
