import { IndexFormat } from "../core/WebGPUConstant";
import Buffer from "./Buffer";
import {TypedArray} from "../utils/gltfUtils";
export default class IndexBuffer {
	buffer: Buffer;
	indices: TypedArray;
	indexFormat: GPUIndexFormat;
	dirty: boolean;
	private label: string;
	constructor(label: string, indices?: TypedArray) {
		this.label = label;
		this.indices = indices;
		this.indexFormat = indices instanceof Uint32Array ? IndexFormat.Uint32 : IndexFormat.Uint16;
		this.dirty = true;
	}
	setIndices(indices) {
		this.indices = indices;
		this.indexFormat = indices instanceof Uint32Array ? IndexFormat.Uint32 : IndexFormat.Uint16;
		this.dirty = true;
	}
	bind(device: GPUDevice, passEncoder: GPURenderPassEncoder) {
		if (this.dirty) {
			this.dirty = false;
			this.buffer = Buffer.createIndexBuffer(
				this.label,
				device,
				this.indices instanceof Array ?
					(IndexFormat.Uint16 ? new Uint16Array(this.indices) : new Uint32Array(this.indices)):
					this.indices);
		}
		passEncoder.setIndexBuffer(this.buffer.gpuBuffer, this.indexFormat);
	}
	destroy() {
		this.buffer.destroy();
	}
}
