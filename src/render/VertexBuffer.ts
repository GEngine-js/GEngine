import { InputStepMode } from "../core/WebGPUConstant";
import { Attribute, AttributeType, InterleavedAttribute, InterleavedFloat32Attribute } from "./Attribute";
import Attributes from "./Attributes";
import Buffer from "./Buffer";
export default class VertexBuffer {
	public index: number;
	public arrayStride: number;
	public stepMode: string;
	public buffer: Buffer;
	public attributes: Attributes;
	public dirty: boolean;
	public defines: { [prop: string]: boolean | number };
	public locationIndex: number;
	private label: string;
	constructor(label: string, index?: number, locationIndex = 0, stepMode = InputStepMode.Vertex) {
		this.index = index || 0;
		this.attributes = new Attributes();
		this.stepMode = stepMode;
		this.dirty = true;
		this.label = label?.concat(`_${index}_VertexBuffer`);
		this.defines = {};
		this.locationIndex = locationIndex;
	}
	public getBufferDes() {
		const result = {
			arrayStride: this.arrayStride,
			stepMode: this.stepMode,
			attributes: this.attributes.getGPUAttributesDes()
		};
		return result;
	}
	public setAttribute(attribute: Attribute | InterleavedAttribute) {
		if (attribute.attributeType === AttributeType.attribute) {
			this.setLocationIndex((attribute as Attribute).name);
		} else {
			(attribute as InterleavedFloat32Attribute)?.names.forEach((name: string) => this.setLocationIndex(name));
		}
		this.attributes.setAttribute(attribute);
		this.dirty = true;
	}
	public getAttribute(name: string): Attribute | InterleavedAttribute {
		return this.attributes.getAttribute(name);
	}
	public containAttribute(name: string): boolean {
		return this.defines[name?.concat("Location")] != undefined ? true : false;
	}
	public bind(device: GPUDevice, passEncoder: GPURenderPassEncoder) {
		if (this.attributes.dirty) {
			this.attributes.dirty = false;
			const { arrayStride, typeArray, buffer } = this.attributes.getAtrributeValues();
			this.arrayStride = arrayStride;
			if (!this.buffer) {
				this.buffer = buffer ?? Buffer.createVertexBuffer(this.label, device, typeArray);
			} else {
				// update Buffer
				if (typeArray) this.buffer.setSubData(0, typeArray);
			}
		}
		passEncoder.setVertexBuffer(this.index, this.buffer.gpuBuffer);
	}
	private setLocationIndex(name: string) {
		if (this.defines[name?.concat("Location")] || !name) return;
		this.defines[name?.concat("Location")] = this.locationIndex;
		this.locationIndex += 1;
	}
	destroy() {
		this.buffer.destroy();
		this.attributes.destroy();
	}
}
