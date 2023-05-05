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
import Context from "./Context";
import defaultValue from "../utils/defaultValue";
import UniformBuffer from "./UniformBuffer";
import { SpotLight } from "../light/SpotLight";
import { PointLight } from "../light/PointLight";
import { DirectionalLight } from "../light/DirectionalLight";
import PointLightShadowCamera from "../camera/PointLightShadowCamera";
import { PointLightShadow } from "../light/shadows/PointLightShadow";
export class Uniform<T> {
	_value: T;
	name: string;
	value: T;
	offset: number;
	buffer: Float32Array | Uint16Array | Uint32Array | Uint8Array | Float64Array | UniformBuffer;
	cb: Function | number | Object;
	byteSize: number;
	visibility?: number;
	type?: string;
	dirty?: boolean;

	constructor(uniformName: string, cb?: Function | number | Object, offset?: number) {
		this.name = uniformName;
		this.cb = cb;
		this.offset = defaultValue(offset, 0);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.type = "number";
	}
	setBuffer(array: Array<number>, offset: number = 0) {
		for (let i = 0; i < array.length; i++) {
			this.buffer[i + offset] = array[i];
		}
	}
	set() {
		return undefined;
	}
	getValue() {
		let result;
		const cbType = typeof this.cb;
		switch (cbType) {
			case "object":
				result = this.cb[this.name] || this.cb;
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

export class UniformUint extends Uniform<number> {
	static align = 4;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		offset?: number
	) {
		super(uniformName, cb, offset);
		this.value = undefined;
		this._value = 0;
		this.byteSize = 4;
		this.buffer = new Uint32Array(buffer.buffer, byteOffset, 1);
		this.type = "uint";
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

export class UniformFloat extends Uniform<number> {
	static align = 4;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function | number | Object,
		offset?: number
	) {
		super(uniformName, cb, offset);
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
		offset?: number
	) {
		super(uniformName, cb, offset);
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
		offset?: number
	) {
		super(uniformName, cb, offset);
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
		offset?: number
	) {
		super(uniformName, cb, offset);
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
		offset?: number
	) {
		super(uniformName, cb, offset);
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
		offset?: number
	) {
		super(uniformName, cb, offset);
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
		offset?: number
	) {
		super(uniformName, cb, offset);
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
export class UniformMatrix4Array extends Uniform<Array<Matrix4>> {
	static align = 16;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number,
		size: number = 64
	) {
		super(uniformName, cb, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * size;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "mat4-array";
	}
	set(): boolean {
		this.value = this.cb();
		if (!this.value) return false;
		for (let i = 0; i < this.value.length; i++) {
			this.setBuffer(this.value[i].toArray(), i * 16);
		}
		return true;
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
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, count);
		this.byteSize = 4 * count;
		this.type = "float-array";
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
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * 8;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "vec2-array";
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
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * 16;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "vec3-array";
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
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
		this.byteSize = count * 16;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "vec4-array";
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
	public isTexture: boolean;
	private _texture: Function | Texture;
	constructor(uniformName: string, binding: number, texture: Function | Texture) {
		super(uniformName);
		this.binding = binding;
		this.type = "texture";
		this.isTexture = true;
		this.visibility = ShaderStage.Fragment;
		this._texture = texture;
	}
	get layoutType() {
		return this.texture?.layoutType || "not yet bind";
	}
	bind(context: Context) {
		this.texture = this._texture instanceof Function ? this._texture() : this._texture;
		this.texture.update(context);
	}
}
export class UniformSampler extends Uniform<Sampler> {
	public binding: number;
	public type: string;
	public visibility: ShaderStage;
	public name: string;
	public sampler: Sampler;
	public isSampler: boolean;
	private _sampler: Function | Sampler;
	constructor(uniformName: string, binding: number, sampler: Function | Sampler) {
		super(uniformName);
		this.name = uniformName;
		this.binding = binding;
		this.type = "sampler";
		this.isSampler = true;
		this.visibility = ShaderStage.Fragment;
		this._sampler = sampler;
	}
	get layoutType() {
		return this.sampler?.layoutType || "not yet bind";
	}
	bind(context: Context) {
		this.sampler = this._sampler instanceof Function ? this._sampler() : this._sampler;
		this.sampler.update(context);
	}
}
export class UniformSpotLights extends Uniform<SpotLight> {
	static align = 16;
	lights: Array<SpotLight>;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.cb = cb;
		this.byteSize = count * 64;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "spotsLight";
		this.visibility = ShaderStage.Fragment;
		this.dirty = false;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((spotLight, index) => {
			this.setSubData(spotLight, index);
		});
		return this.dirty;
	}
	private setSubData(spotLight: SpotLight, index: number) {
		const offset = index * 16;
		if (spotLight.positionDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.position.toArray(), offset + 0); //byteOffset=0;
		}
		if (spotLight.distanceDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.distance, offset + 3); //byteOffset=12;
		}
		if (spotLight.dirtectDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.directional.toArray(), offset + 4); //byteOffset=16;
		}
		if (spotLight.coneCosDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.coneCos, offset + 7); //byteOffset=28;
		}
		if (spotLight.colorDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.color.toArray(), offset + 8); //byteOffset=32;
		}
		if (spotLight.penumbraCosDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.penumbraCos, offset + 11); //byteOffset=44;
		}
		if (spotLight.decayDirty) {
			this.dirty = setDataToTypeArray(this.buffer, spotLight.decay, offset + 12); //byteOffset=48;
		}

		spotLight.positionDirty = false;
		spotLight.distanceDirty = false;
		spotLight.dirtectDirty = false;
		spotLight.coneCosDirty = false;
		spotLight.colorDirty = false;
		spotLight.penumbraCosDirty = false;
		spotLight.decayDirty = false;
	}
}

export class UniformSpotLightShadows extends Uniform<SpotLight> {
	static align = 16;
	static uniformSize = 18;
	lights: Array<SpotLight>;
	cb: Function;
	private _nearValue: number;
	private _farValue: number;
	private _subDataSize: number;

	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.cb = cb;
		const bytesPerElement = Float32Array.BYTES_PER_ELEMENT;
		this._subDataSize = UniformSpotLightShadows.uniformSize;
		this.byteSize = count * this._subDataSize * bytesPerElement;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "spotLightShadows";
		this.visibility = ShaderStage.Fragment;
		this._nearValue = null;
		this._farValue = null;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((spotLight, index) => {
			this.setSubData(spotLight, index);
		});
		return this.dirty;
	}
	private setSubData(spotLight: SpotLight, index: number) {
		const offset = index * this._subDataSize;
		if (spotLight.positionDirty || spotLight.targetDirty || spotLight.shadow.camera.projectMatrixDirty) {
			spotLight.shadow.update(spotLight);
			this.dirty = setDataToTypeArray(this.buffer, spotLight.shadow.camera.vpMatrix.toArray(), offset + 0); //byteOffset=0;
		}
		const nearValue = spotLight.shadow.camera.near;
		if (nearValue != this._nearValue) {
			this._nearValue = nearValue;
			this.dirty = setDataToTypeArray(this.buffer, this._nearValue, offset + 16); //byteOffset=0;
		}
		const farValue = spotLight.shadow.camera.far;
		if (farValue != this._farValue) {
			this._farValue = farValue;
			this.dirty = setDataToTypeArray(this.buffer, this._farValue, offset + 17); //byteOffset=0;
		}
	}
}
export class UniformPointLights extends Uniform<PointLight> {
	static align = 16;
	lights: Array<PointLight>;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.cb = cb;
		this.byteSize = count * 32;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "pointsLight";
		this.visibility = ShaderStage.Fragment;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((pointLight, index) => {
			this.setSubData(pointLight, index);
		});
		return this.dirty;
	}
	private setSubData(pointLight: PointLight, index: number) {
		const offset = index * 8;
		if (pointLight.positionDirty) {
			pointLight.positionDirty = false;
			this.dirty = setDataToTypeArray(this.buffer, pointLight.position.toArray(), offset + 0); //byteOffset=0;
		}
		if (pointLight.distanceDirty) {
			pointLight.distanceDirty = false;
			this.dirty = setDataToTypeArray(this.buffer, pointLight.distance, offset + 3); //byteOffset=12;
		}
		if (pointLight.colorDirty) {
			pointLight.colorDirty = false;
			this.dirty = setDataToTypeArray(this.buffer, pointLight.color.toArray(), offset + 4); //byteOffset=32;
		}
		if (pointLight.decayDirty) {
			pointLight.decayDirty = false;
			this.dirty = setDataToTypeArray(this.buffer, pointLight.decay, offset + 7); //byteOffset=12;
		}
	}
}

export class UniformPointLightShadows extends Uniform<PointLight> {
	static align = 16;
	static uniformSize = 122;
	lights: Array<PointLight>;
	cb: Function;
	private _nearValue: number;
	private _farValue: number;
	private _subDataSize: number;

	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.cb = cb;
		const bytesPerElement = Float32Array.BYTES_PER_ELEMENT;
		this._subDataSize = UniformPointLightShadows.uniformSize;
		this.byteSize = count * bytesPerElement * this._subDataSize;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "pointLightShadows";
		this.visibility = ShaderStage.Fragment;
		this._nearValue = null;
		this._farValue = null;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((pointLight, index) => {
			this.setSubData(pointLight, index);
		});
		return this.dirty;
	}
	private setSubData(pointLight: PointLight, index: number) {
		const offset = index * this._subDataSize;

		if (pointLight.shadow instanceof PointLightShadow && pointLight.shadow.vpMatrixArrayDirty) {
			pointLight.shadow.vpMatrixArrayDirty = false;
			const vpMatrixArray = (pointLight.shadow.camera as PointLightShadowCamera).vpMatrixArray;
			for (let i = 0; i < vpMatrixArray.length; i++) {
				const vpMatrix = vpMatrixArray[i];
				this.dirty = setDataToTypeArray(this.buffer, vpMatrix.toArray(), offset + 0 + 16 * i); //byteOffset=98 * 4;
			}
		}

		if (pointLight.shadow.viewPortDirty) {
			pointLight.shadow.viewPortDirty = false;
			for (let i = 0; i < 6; i++) {
				this.dirty = setDataToTypeArray(
					this.buffer,
					pointLight.shadow.viewports[i].toArray(),
					offset + 96 + 4 * i
				); //byteOffset=0;
			}
		}

		const nearValue = pointLight.shadow.camera.near;
		if (nearValue != this._nearValue) {
			this._nearValue = nearValue;
			this.dirty = setDataToTypeArray(this.buffer, this._nearValue, offset + 120); //byteOffset=0;
		}
		const farValue = pointLight.shadow.camera.far;
		if (farValue != this._farValue) {
			this._farValue = farValue;
			this.dirty = setDataToTypeArray(this.buffer, this._farValue, offset + 121); //byteOffset=1;
		}
	}
}
export class UniformDirtectLights extends Uniform<DirectionalLight> {
	static align = 16;
	lights: Array<DirectionalLight>;
	cb: Function;
	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.cb = cb;
		this.byteSize = count * 32;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "dirtectLights";
		this.visibility = ShaderStage.Fragment;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((directionalLight, index) => {
			this.setSubData(directionalLight, index);
		});
		return this.dirty;
	}
	private setSubData(directionalLight: DirectionalLight, index: number) {
		const offset = index * 8;
		if (directionalLight.dirtectDirty) {
			directionalLight.dirtectDirty = false;
			this.dirty = setDataToTypeArray(this.buffer, directionalLight.directional.toArray(), offset + 0); //byteOffset=16;
		}
		if (directionalLight.colorDirty) {
			directionalLight.colorDirty = false;
			this.dirty = setDataToTypeArray(this.buffer, directionalLight.color.toArray(), offset + 4); //byteOffset=32;
		}
	}
}

export class UniformDirtectLightShadows extends Uniform<DirectionalLight> {
	static align = 16;
	static uniformSize = 16;
	lights: Array<DirectionalLight>;
	cb: Function;
	private _subDataSize: number;

	constructor(
		uniformName: string,
		buffer: Float32Array,
		byteOffset: number,
		cb: Function,
		offset?: number,
		count?: number
	) {
		super(uniformName, cb, offset);
		this.cb = cb;
		const bytesPerElement = Float32Array.BYTES_PER_ELEMENT;
		this._subDataSize = UniformDirtectLightShadows.uniformSize;
		this.byteSize = count * bytesPerElement * this._subDataSize;
		this.buffer = new Float32Array(buffer.buffer, byteOffset, this.byteSize / 4);
		this.type = "dirtectLightShadows";
		this.visibility = ShaderStage.Fragment;
	}
	set() {
		this.lights = this.cb();
		this.lights.forEach((directionalLight, index) => {
			this.setSubData(directionalLight, index);
		});
		return this.dirty;
	}
	private setSubData(directionalLight: DirectionalLight, index: number) {
		const offset = index * this._subDataSize;
		if (directionalLight.dirtectDirty) {
			directionalLight.shadow.update(directionalLight);
			this.dirty = setDataToTypeArray(this.buffer, directionalLight.shadow.camera.vpMatrix.toArray(), offset + 0); //byteOffset=16;
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
	return true;
}
