import { BindGroupCacheOptions } from "../core/WebGPUTypes";
const bindGroupCache = new Map();
class BindGroup {
	device: GPUDevice;
	gpuBindGroup: GPUBindGroup;
	label: string;
	index: number;
	dirty: boolean;
	offset?: number;
	// const uniformBytes = 5 * Float32Array.BYTES_PER_ELEMENT;
	// const alignedSizeBytes = Math.ceil(uniformBytes / 256) * 256;
	// const alignedSize =alignedSizeBytes / Float32Array.BYTES_PER_ELEMENT;
	alignedSize?: number;
	maxOffset?: number;
	dynamic?: boolean;
	constructor(options: BindGroupCacheOptions) {
		this.index = options.index || 0;
		this.offset = options.offset ?? 0;
		this.alignedSize = options.alignedSize ?? 0;
		this.maxOffset = options.maxOffset ?? 0;
		this.dynamic = options.dynamic ?? false;
		this.gpuBindGroup = options.device.createBindGroup({
			label: options.label,
			layout: options.layout.gpuBindGroupLayout,
			entries: options.entires.map((entity) => ({
				binding: entity.binding,
				resource: entity.resource
			}))
		});
	}
	bind(passEncoder: GPURenderPassEncoder) {
		//dynamic uniforms must bind multiple times
		if (this.dynamic) {
			const dynamicOffsets = [0];
			dynamicOffsets[0] = this.offset * this.alignedSize;
			this.offset = ++this.offset < this.maxOffset ? this.offset : 0;
			passEncoder.setBindGroup(this.index, this.gpuBindGroup, dynamicOffsets);
		} else {
			passEncoder.setBindGroup(this.index, this.gpuBindGroup);
		}
	}
	destroy() {
		this.gpuBindGroup = undefined;
		this.device = undefined;
	}
	static getBindGroupFromCache(options: BindGroupCacheOptions): BindGroup {
		if (bindGroupCache.has(options.label)) {
			return bindGroupCache.get(options.label);
		} else {
			//@ts-ignore
			const bindGroup = new BindGroup(options);
			bindGroupCache.set(options.label, bindGroup);
			return bindGroup;
		}
	}
	static removeBindGroupFromCache(bindGroup: BindGroup) {
		bindGroupCache.delete(bindGroup);
	}
}

export default BindGroup;
