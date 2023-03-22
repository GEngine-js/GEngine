import { IndexFormat } from "../core/WebGPUConstant";
import Buffer from "./Buffer";
export default class IndexBuffer {
	buffer: Buffer;
	indices: Array<number>;
	indexFormat: GPUIndexFormat;
	dirty: boolean;
	private label: string;
	constructor(label: string, indices?: Array<number>) {
		this.label = label;
		this.indices = indices;
		this.indexFormat = IndexFormat.Uint16;
		this.dirty = true;
	}
	setIndices(indices) {
		this.indices = indices;
		this.dirty = true;
	}
	bind(device: GPUDevice, passEncoder: GPURenderPassEncoder) {
		if (this.dirty) {
			this.dirty = false;
			this.buffer = Buffer.createIndexBuffer(
				this.label,
				device,
				this.indexFormat == IndexFormat.Uint16 ? new Uint16Array(this.indices) : new Uint32Array(this.indices)
			);
		}
		passEncoder.setIndexBuffer(this.buffer.gpuBuffer, this.indexFormat);
	}
	destroy() {
		this.buffer.destroy();
	}
}
