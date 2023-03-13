import { InputStepMode } from "../core/WebGPUConstant";
import Attributes from "./Attributes";
import Buffer from "./Buffer";
export default class VertextBuffer {
	public index: number;
	public arrayStride: number;
	public stepMode: string;
	public buffer: Buffer;
	public attributes: Attributes;
	public dirty: Boolean;
	private label: string;
	constructor(label: string, attributes?: Attributes, index?: number, stepMode?: string) {
		this.index = index || 0;
		this.attributes = attributes || undefined;
		this.stepMode = InputStepMode.Vertex;
		this.dirty = true;
		this.label = label;
	}
	public getBufferDes() {
		return [
			{
				arrayStride: this.arrayStride,
				stepMode: this.stepMode,
				attributes: this.attributes.getGPUAttributes()
			}
		];
	}
	public setAttributes(attributes: Attributes) {
		this.attributes = attributes;
		this.dirty = true;
	}
	public bind(device: GPUDevice, passEncoder: GPURenderPassEncoder) {
		if (this.dirty) {
			this.dirty = false;
			const { arrayStride, typeArray } = this.attributes.getMeregeAtrributeValues();
			this.arrayStride =
				arrayStride.reduce(function (sum, item, index, arr) {
					return (sum += item);
				}, 0) * 4;
			this.buffer = Buffer.createVertexBuffer(this.label, device, typeArray);
		}
		passEncoder.setVertexBuffer(this.index, this.buffer.gpuBuffer);
	}
	destroy() {
		this.buffer.destroy();
	}
}
