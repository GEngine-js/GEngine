import Color from "../math/Color";
import Matrix2 from "../math/Matrix2";
import Matrix3 from "../math/Matrix3";
import Matrix4 from "../math/Matrix4";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
import Vector4 from "../math/Vector4";
import { ShaderStage } from "../core/WebGPUConstant";
import Texture from "./Texture";
import Sampler from "./Sampler";
import { Light } from "../light/Light";
import Buffer from "./Buffer";
import Context from "./Context";
import defaultValue from "../utils/defaultValue";
import UniformBuffer from "./UniformBuffer";
import { SpotLight } from "../light/SpotLight";
import { PointLight } from "../light/PointLight";
import { DirtectLight } from "../light/DirtectLight";
export class Uniform<T> {
	_value: T;
	name: string;
	value: T;
	offset: number;
	buffer: Float32Array | Uint16Array | Uint32Array | Uint8Array | Float64Array | UniformBuffer;
	cb: Function | number | Object;
	byteSize: number;
	binding?: number;
	visibility?: number;
	type?: string;

	constructor(uniformName: string, cb?: Function | number | Object, binding?: number, offset?: number) {
		this.name = uniformName;
		this.cb = cb;
		this.binding = defaultValue(binding, 0);
		this.offset = defaultValue(offset, 0);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.type = "number";
	}
	setBuffer(array: Array<number>) {
		for (let i = 0; i < array.length; i++) {
			this.buffer[i] = array[i];
		}
	}
	set() {}
	getValue() {
		let result;
		const cbType = typeof this.cb;
		switch (cbType) {
			case "object":
				result = this.cb[this.name];
				break;
			case "function":
				//@ts-ignore
				result = this.cb();
				break;
			case "number":
				result = this.cb;
				break;
			default:
				throw new Error("type is error");
				break;
		}
		return result;
	}
}

export class UniformFloat extends Uniform<number> {
	static align = 4;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = 0;
		this.byteSize = 4;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 1);
		this.type = "vec1";
	}
	set() {
		if (this.cb != undefined) this.value = this.getValue();
		if (this.value !== this._value) {
			this._value = this.value;
			this.buffer[0] = this.value;
			return true;
		}
		return false;
	}
}
export class UniformFloatVec2 extends Uniform<Vector2> {
	static align = 8;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = new Vector2();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 2);
		this.byteSize = 8;
		this.type = "vec2";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Vector2.equals(v, this._value)) {
			Vector2.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}
export class UniformFloatVec3 extends Uniform<Vector3> {
	static align = 16;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = new Vector3();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 3);
		this.byteSize = 12;
		this.type = "vec3";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Vector3.equals(v, this._value)) {
			Vector3.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}
export class UniformFloatVec4 extends Uniform<Vector4> {
	static align = 16;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = new Vector4();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 4);
		this.byteSize = 16;
		this.type = "vec4";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Vector4.equals(v, this._value)) {
			Vector4.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}
export class UniformColor extends Uniform<Color> {
	static align = 16;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = new Color();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 3);
		this.byteSize = 12;
		this.type = "vec3";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Color.equals(v, this._value)) {
			Color.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}

export class UniformMat2 extends Uniform<Matrix2> {
	static align = 8;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, offset);
		this.value = undefined;
		this._value = new Matrix2();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 4);
		this.byteSize = 16;
		this.type = "mat2";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Matrix2.equals(v, this._value)) {
			Matrix2.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}
export class UniformMat3 extends Uniform<Matrix3> {
	static align = 16;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = new Matrix3();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 9);
		this.byteSize = 48;
		this.type = "mat3";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Matrix3.equals(v, this._value)) {
			Matrix3.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}
export class UniformMat4 extends Uniform<Matrix4> {
	static align = 16;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		binding?: number,
		offset?: number
	) {
		super(uniformName, cb, binding, offset);
		this.value = undefined;
		this._value = new Matrix4();
		this.buffer = new Float32Array(buffer.buffer, byteOffset, 16);
		this.byteSize = 64;
		this.type = "mat4";
	}
	set(): boolean {
		if (this.cb != undefined) this.value = this.getValue();
		const v = this.value;
		if (!Matrix4.equals(v, this._value)) {
			Matrix4.clone(v, this._value);
			this.setBuffer(this._value.toArray());
			return true;
		}
		return false;
	}
}
export class UniformFloatArray extends Uniform<Array<number>> {
	static align = 4;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, count);
		this.byteSize = 4 * count;
		this.type = "array";
	}
	set(): boolean {
		this.value = this.cb();
		for (let i = 0; i < this.value.length; i++) {
			this.buffer[i] = this.value[i];
		}
		return true;
	}
}
export class UniformVec2Array extends Uniform<Array<Vector2>> {
	static align = 8;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * 8;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "array";
	}
	set(): boolean {
		this.value = this.cb();
		let j = 0;
		for (let i = 0; i < this.value.length; i++) {
			this.buffer[j] = this.value[i].x;
			this.buffer[j + 1] = this.value[i].y;
			j += 2;
		}
		return true;
	}
}
export class UniformVec3Array extends Uniform<Array<Vector3>> {
	static align = 16;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * 16;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "array";
	}
	set(): boolean {
		this.value = this.cb();
		let j = 0;
		for (let i = 0; i < this.value.length; i++) {
			this.buffer[j] = this.value[i].x;
			this.buffer[j + 1] = this.value[i].y;
			this.buffer[j + 2] = this.value[i].z;
			this.buffer[j + 3] = 0;
			j += 4;
		}
		return true;
	}
}
export class UniformVec4Array extends Uniform<Array<Vector4>> {
	static align = 16;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * 16;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "array";
	}
	set(): boolean {
		this.value = this.cb();
		let j = 0;
		for (let i = 0; i < this.value.length; i++) {
			this.buffer[j] = this.value[i].x;
			this.buffer[j + 1] = this.value[i].y;
			this.buffer[j + 2] = this.value[i].z;
			this.buffer[j + 3] = this.value[i].w;
			j += 4;
		}
		return true;
	}
}
export class UniformTexture extends Uniform<Texture> {
	public binding: number;
	public type: string;
	public visibility: ShaderStage;
	public name: string;
	public texture: Texture;
	constructor(uniformName: string, binding: number, texture: Function | Texture) {
		super(uniformName);
		this.binding = binding;
		this.type = "texture";
		this.visibility = ShaderStage.Fragment;
		this.texture = texture instanceof Function ? texture() : texture;
	}
	get layoutType() {
		return this.texture.layoutType;
	}
	bind(context: Context) {
		this.texture.update(context);
	}
}
export class UniformSampler extends Uniform<Sampler> {
	public binding: number;
	public type: string;
	public visibility: ShaderStage;
	public name: string;
	public sampler: Texture;
	constructor(uniformName: string, binding: number, sampler: Function | Sampler) {
		super(uniformName);
		this.name = uniformName;
		this.binding = binding;
		this.type = "sampler";
		this.visibility = ShaderStage.Fragment;
		this.sampler = sampler instanceof Function ? sampler() : sampler;
	}
	get layoutType() {
		return this.sampler.layoutType;
	}
	bind(context: Context) {
		this.sampler.update(context);
	}
}
export class UniformLight extends Uniform<Light> {
	bufferSize: number;
	buffer: UniformBuffer;
	constructor(uniformName: string, binding: number, buffer: Buffer | Function | Object, size: number) {
		super(uniformName);
		this.cb = buffer;
		this.binding = binding;
		this.visibility = ShaderStage.Fragment;
		this.bufferSize = size;
	}
	set() {
		this.buffer = this.getValue();
	}
}
export class UniformSpotsLight extends Uniform<SpotLight> {
	static align = 16;
	lights: Array<SpotLight>;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.cb = cb;
		this.binding = binding;
		this.byteSize = count * 54;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "spotsLight";
		this.visibility = ShaderStage.Fragment;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((spotLight) => {
			this.setSubData(spotLight);
		});
	}
	private setSubData(spotLight: SpotLight) {
		if (spotLight.positionDirty) {
			spotLight.positionDirty = false;
			setDataToTypeArray(this.buffer, spotLight.positionVC.toArray(), 0); //byteOffset=0;
		}
		if (spotLight.distanceDirty) {
			spotLight.distanceDirty = false;
			setDataToTypeArray(this.buffer, spotLight.distance, 3); //byteOffset=12;
		}
		if (spotLight.dirtectDirty) {
			spotLight.dirtectDirty = false;
			setDataToTypeArray(this.buffer, spotLight.dirtectVC.toArray(), 4); //byteOffset=16;
		}
		if (spotLight.coneCosDirty) {
			spotLight.coneCosDirty = false;
			setDataToTypeArray(this.buffer, spotLight.coneCos, 7); //byteOffset=28;
		}
		if (spotLight.colorDirty) {
			spotLight.colorDirty = false;
			setDataToTypeArray(this.buffer, spotLight.color.toArray(), 8); //byteOffset=32;
		}
		if (spotLight.penumbraCosDirty) {
			spotLight.penumbraCosDirty = false;
			setDataToTypeArray(this.buffer, spotLight.penumbraCos, 11); //byteOffset=44;
		}
		if (spotLight.decayDirty) {
			spotLight.decayDirty = false;
			setDataToTypeArray(this.buffer, spotLight.decay, 12); //byteOffset=48;
		}
	}
}
export class UniformPointsLight extends Uniform<PointLight> {
	static align = 16;
	lights: Array<PointLight>;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.cb = cb;
		this.binding = binding;
		this.byteSize = count * 32;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "spotsLight";
		this.visibility = ShaderStage.Fragment;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((pointLight) => {
			this.setSubData(pointLight);
		});
	}
	private setSubData(pointLight: PointLight) {
		if (pointLight.positionDirty) {
			pointLight.positionDirty = false;
			setDataToTypeArray(this.buffer, pointLight.positionVC.toArray(), 0); //byteOffset=0;
		}
		if (pointLight.distanceDirty) {
			pointLight.distanceDirty = false;
			setDataToTypeArray(this.buffer, pointLight.distance, 3); //byteOffset=12;
		}
		if (pointLight.colorDirty) {
			pointLight.colorDirty = false;
			setDataToTypeArray(this.buffer, pointLight.color.toArray(), 4); //byteOffset=32;
		}
		if (pointLight.decayDirty) {
			pointLight.decayDirty = false;
			setDataToTypeArray(this.buffer, pointLight.distance, 7); //byteOffset=12;
		}
	}
}
export class UniformDirtectsLight extends Uniform<DirtectLight> {
	static align = 16;
	lights: Array<DirtectLight>;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		binding?: number,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, binding, offset);
		this.cb = cb;
		this.binding = binding;
		this.byteSize = count * 32;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "spotsLight";
		this.visibility = ShaderStage.Fragment;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((dirtectLight) => {
			this.setSubData(dirtectLight);
		});
	}
	private setSubData(dirtectLight: DirtectLight) {
		if (dirtectLight.dirtectDirty) {
			dirtectLight.dirtectDirty = false;
			setDataToTypeArray(this.buffer, dirtectLight.dirtectVC.toArray(), 0); //byteOffset=16;
		}
		if (dirtectLight.colorDirty) {
			dirtectLight.colorDirty = false;
			setDataToTypeArray(this.buffer, dirtectLight.color.toArray(), 4); //byteOffset=32;
		}
	}
}
function setDataToTypeArray(buffer, data, offset) {
	if (Array.isArray(data)) {
		data.forEach((value, index) => {
			buffer[index + offset] = value;
		});
	} else {
		buffer[offset] = data;
	}
}
