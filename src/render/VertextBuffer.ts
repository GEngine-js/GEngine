import { InputStepMode } from "../core/WebGPUConstant";
import { Attribute } from "./Attribute";
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
	constructor(label: string, index?: number, stepMode?: string) {
		this.index = index || 0;
		this.attributes = new Attributes();
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
	public setAttribute(attribute: Attribute) {
		this.attributes.setAttribute(attribute);
		this.dirty = true;
	}
	public getAttribute(name: string): Attribute {
		return this.attributes.getAttribute(name);
	}
	public bind(device: GPUDevice, passEncoder: GPURenderPassEncoder) {
		if (this.dirty) {
			this.dirty = false;
			const { arrayStride, typeArray } = this.attributes.getAtrributeValues();
			this.arrayStride = arrayStride;
			this.buffer = Buffer.createVertexBuffer(this.label, device, typeArray);
		}
		passEncoder.setVertexBuffer(this.index, this.buffer.gpuBuffer);
	}
	destroy() {
		this.buffer.destroy();
		this.attributes.destroy();
	}
}
