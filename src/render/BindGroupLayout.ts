import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
const layoutCache = new Map();
class BindGroupLayout {
	public gpuBindGroupLayout: GPUBindGroupLayout;
	index: number;
	private constructor(device: GPUDevice, label: string, public entries: BindGroupLayoutEntry[] = [], index = 0) {
		this.index = index || 0;
		this.gpuBindGroupLayout = device.createBindGroupLayout({
			label: label,
			entries: entries.map(({ visibility, buffer, sampler, texture, storageTexture, binding }) => ({
				binding,
				visibility,
				buffer,
				sampler,
				texture,
				storageTexture
			}))
		});
	}
	static getBindGroupLayoutFromCache(
		device: GPUDevice,
		label: string,
		entires: BindGroupLayoutEntry[],
		index
	): BindGroupLayout {
		if (layoutCache.has(label)) {
			return layoutCache.get(label);
		} else {
			const bindGroupLayout = new BindGroupLayout(device, label, entires, index);
			layoutCache.set(label, bindGroupLayout);
			return bindGroupLayout;
		}
	}
	static removeBindGroupLayoutFromCache(bindGroupLayout: BindGroupLayout) {
		layoutCache.delete(bindGroupLayout);
	}
}

export default BindGroupLayout;
