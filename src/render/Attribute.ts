import { VertexFormat } from "../core/WebGPUConstant";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
import Buffer from "../render/Buffer";

export class Attribute {
	public offset: number;
	public shaderLocation: number;
	public type: string;
	public format: string;
	public attributeByteSize: number;
	public attributeType: AttributeType;
	public dirty: boolean;
	public static v3 = new Vector3();
	public static v2 = new Vector2();
	constructor(public name: string, public value: Array<number>, public itemSize: number) {
		this.name = name;
		this.offset = 0;
		this.shaderLocation = 0;
		this.attributeType = AttributeType.attribute;
		this.dirty = true;
	}
	getGPUAttribute(): Array<GPUAttribute> {
		return [
			{
				shaderLocation: this.shaderLocation,
				format: this.format,
				offset: this.offset
			}
		];
	}
	destroy() {
		this.value = [];
	}
	applyMatrix3(matrix3) {
		if (this.itemSize === 2) {
			for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
				Attribute.v2.fromBufferAttribute(this, i);
				Attribute.v2.applyMatrix3(matrix3);
				this.setXY(i, Attribute.v2.x, Attribute.v2.y);
			}
		} else if (this.itemSize === 3) {
			for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
				Attribute.v3.fromBufferAttribute(this, i);
				Attribute.v3.applyMatrix3(matrix3);
				this.setXYZ(i, Attribute.v3.x, Attribute.v3.y, Attribute.v3.z);
			}
		}
		return this;
	}
	applyMatrix4(matrix4) {
		for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
			Attribute.v3.fromBufferAttribute(this, i);
			Attribute.v3.applyMatrix4(matrix4);
			this.setXYZ(i, Attribute.v3.x, Attribute.v3.y, Attribute.v3.z);
		}
		return this;
	}
	setX(index, x) {
		this.value[index * this.itemSize] = x;
		return this;
	}
	getX(index) {
		const x = this.value[index * this.itemSize];
		return x;
	}
	setY(index, y) {
		this.value[index * this.itemSize + 1] = y;
		return this;
	}
	getY(index) {
		const y = this.value[index * this.itemSize + 1];
		return y;
	}
	setZ(index, z) {
		this.value[index * this.itemSize + 2] = z;
		return this;
	}
	getZ(index) {
		const z = this.value[index * this.itemSize + 2];
		return z;
	}
	getW(index) {
		const w = this.value[index * this.itemSize + 3];
		return w;
	}
	setXY(index, x, y) {
		index *= this.itemSize;
		this.value[index + 0] = x;
		this.value[index + 1] = y;
		return this;
	}
	setXYZ(index, x, y, z) {
		index *= this.itemSize;
		this.value[index + 0] = x;
		this.value[index + 1] = y;
		this.value[index + 2] = z;
		return this;
	}
	setXYZW(index, x, y, z, w) {
		index *= this.itemSize;
		this.value[index + 0] = x;
		this.value[index + 1] = y;
		this.value[index + 2] = z;
		this.value[index + 3] = w;
		return this;
	}
}

export class InterleavedAttribute {
	public names: string[];
	public value: Array<number>;
	public itemSizes: number[];
	public format: string;
	public byteSize: number;
	public attributeType: AttributeType;
	public dirty: boolean;
	constructor(names: string[], value: Array<number>, itemSizes: number[]) {
		this.names = names;
		this.itemSizes = itemSizes;
		this.value = value;
		this.attributeType = AttributeType.interleavedAttribute;
		this.dirty = true;
	}
	getGPUAttribute(): Array<GPUAttribute> {
		const result = [];
		this.itemSizes.reduce((total, current, index) => {
			result.push({
				shaderLocation: index,
				format: current == 1 ? `${this.format}` : `${this.format}x${current}`,
				offset: total * this.byteSize
			});
			return (total += current);
		}, 0);
		return result;
	}
	destroy() {
		this.value = null;
		this.names = null;
		this.itemSizes = null;
	}
}
export class Float32Attribute extends Attribute {
	constructor(name: string, value: Array<number>, itemSize: number) {
		super(name, value, itemSize);
		const { format, totalByteSize } = getAttributeFormat(VertexFormat.Float32, itemSize);
		this.format = format;
		this.attributeByteSize = totalByteSize;
	}
}
export class InterleavedFloat32Attribute extends InterleavedAttribute {
	constructor(names: string[], value: Array<number>, itemSizes: number[]) {
		super(names, value, itemSizes);
		this.format = VertexFormat.Float32;
		this.byteSize = Float32Array.BYTES_PER_ELEMENT;
	}
}
export class BufferInterleavedFloat32Attribute extends InterleavedFloat32Attribute {
	public buffer: Buffer;
	constructor(names: string[], buffer: Buffer, itemSizes: number[]) {
		super(names, undefined, itemSizes);
		this.buffer = buffer;
	}
}
export enum AttributeType {
	interleavedAttribute = 0,
	attribute = 1
}
export type GPUAttribute = {
	shaderLocation: number;
	format: string;
	offset: number;
};
function getAttributeFormat(type: string, itemSize: number) {
	const key = `${type}x${itemSize}`;
	return {
		[VertexFormat.Float32]: {
			format: "float32",
			totalByteSize: Float32Array.BYTES_PER_ELEMENT * itemSize,
			byteSize: Float32Array.BYTES_PER_ELEMENT
		},
		[VertexFormat.Float32x2]: {
			format: "float32x2",
			totalByteSize: Float32Array.BYTES_PER_ELEMENT * itemSize,
			byteSize: Float32Array.BYTES_PER_ELEMENT
		},
		[VertexFormat.Float32x3]: {
			format: "float32x3",
			totalByteSize: Float32Array.BYTES_PER_ELEMENT * itemSize,
			byteSize: Float32Array.BYTES_PER_ELEMENT
		},
		[VertexFormat.Float32x4]: {
			format: "float32x4",
			totalByteSize: Float32Array.BYTES_PER_ELEMENT * itemSize,
			byteSize: Float32Array.BYTES_PER_ELEMENT
		}
	}[key];
}
