import { BufferUsage, ShaderStage } from "../core/WebGPUConstant";
import defaultValue from "../utils/defaultValue";
import Buffer from "./Buffer";
import Context from "./Context";
import {
	Uniform,
	UniformColor,
	UniformDirtectLights,
	UniformDirtectLightShadows,
	UniformFloat,
	UniformFloatArray,
	UniformFloatVec2,
	UniformFloatVec3,
	UniformFloatVec4,
	UniformMat2,
	UniformMat3,
	UniformMat4,
	UniformMatrix4Array,
	UniformPointLights,
	UniformPointLightShadows,
	UniformSpotLights,
	UniformSpotLightShadows,
	UniformVec2Array,
	UniformVec3Array,
	UniformVec4Array
} from "./Uniforms";
export default class UniformBuffer {
	public type: string;
	public hasDynamicOffset: boolean;
	public minBindingSize: number;
	private _uniformStruct: Map<string, Uniform<any>>;
	private _bufferSize: number;
	private label: string;
	byteOffset: number;
	uniformDirty: boolean;
	binding: number;
	visibility: ShaderStage;
	usage: BufferUsage;
	buffer: Buffer;
	dataBuffer: Float32Array;
	offset: number;
	isUniformBuffer: boolean;
	constructor(label: string, type?: string, usage?: BufferUsage, size?: number, dataBuffer?: Float32Array) {
		this.type = defaultValue(type, "uniform");
		this.label = defaultValue(label, "");
		(this.hasDynamicOffset = false), (this.minBindingSize = 0);
		this.binding = 0;
		this.visibility = ShaderStage.Fragment | ShaderStage.Vertex;
		this.usage = defaultValue(usage, BufferUsage.Uniform | BufferUsage.CopyDst);
		this._uniformStruct = new Map();
		this.uniformDirty = true;
		this._bufferSize = size;
		this.offset = 0;
		this.dataBuffer = defaultValue(dataBuffer, new Float32Array(defaultValue(this._bufferSize, 400)));
		this.byteOffset = 0;
		this.isUniformBuffer = true;
	}
	get layoutType() {
		return {
			type: this.type,
			hasDynamicOffset: this.hasDynamicOffset,
			minBindingSize: this.minBindingSize
		};
	}
	get bufferSize() {
		return defaultValue(this._bufferSize, this.uniformsSize * 4);
	}
	get uniformsSize() {
		//https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
		return Math.ceil(this.byteOffset / 16) * 16;
	}
	bind(context: Context) {
		this._uniformStruct.forEach((uniform) => {
			const result = uniform.set();
			if (uniform?.dirty != undefined) uniform.dirty = false;
			if (result != undefined && this.uniformDirty == false) this.uniformDirty = result;
		});
		if (this.uniformDirty) {
			this.uniformDirty = false;
			if (!this.buffer)
				this.buffer = Buffer.createUniformBuffer(this.label, context.device, this.bufferSize, this.usage);
			this.buffer.setSubData(0, this.dataBuffer.slice(0, defaultValue(this?.bufferSize / 4, this.uniformsSize)));
		}
	}
	public getUniformBufferStruct() {
		let uniformStruct = `struct MaterialUniform {\n `;
		this._uniformStruct.forEach((uniform) => {
			uniformStruct += this.createUniformString(uniform);
		});
		uniformStruct += `}\n`;
		return uniformStruct;
	}
	private createUniformString(uniform) {
		let result = ``;
		switch (uniform.type) {
			case "vec1":
				result = `${uniform.name} :f32,\n`;
				break;
			case "vec2":
				result = `${uniform.name} :vec2<f32>,\n`;
				break;
			case "vec3":
				result = `${uniform.name} :vec3<f32>,\n`;
				break;
			case "vec4":
				result = `${uniform.name} :vec4<f32>,\n`;
				break;
			case "mat2":
				result = `${uniform.name} :mat2x2<f32>,\n`;
				break;
			case "mat3":
				result = `${uniform.name} :mat3x3<f32>,\n`;
				break;
			case "mat4":
				result = `${uniform.name} :mat4x4<f32>,\n`;
				break;
		}
		return result;
	}
	setFloat(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		const uniform = new UniformFloat(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setFloatVec2(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatVec2.align);
		const uniform = new UniformFloatVec2(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setFloatVec3(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatVec3.align);
		const uniform = new UniformFloatVec3(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setColor(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformColor.align);
		const uniform = new UniformColor(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setFloatVec4(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatVec4.align);
		const uniform = new UniformFloatVec4(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setMatrix2(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMat2.align);
		const uniform = new UniformMat2(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setMatrix3(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMat3.align);
		const uniform = new UniformMat3(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setMatrix4(name: string, value: Function | number | Object, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMat4.align);
		const uniform = new UniformMat4(name, this.dataBuffer, this.byteOffset, value, binding);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setMatrix4Array(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMatrix4Array.align);
		const uniform = new UniformMatrix4Array(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	replaceUniformValue(name: string, value: Function | number | Object) {
		const uniform = this._uniformStruct.get(name);
		if (!uniform) console.error("not find uniform");
		uniform.cb = value;
	}
	// uniformBuffer.setVec3Array('test',()=>{return [new Vector3(1,0,0),new Vector3(1,0.8,0.5)]},2);
	// uniformBuffer.setFloatArray('test1',()=>{return [0.5,0.5,1.0]},3);
	// uniformBuffer.setVec4Array('test4',()=>{return [new Vector4(0.5,0.6,0.2,1.0),new Vector4(0.5,0.8,0.8,1.0)]},2);
	// uniformBuffer.setVec2Array('test2',()=>{return [new Vector2(0.5,0.6),new Vector2(0.5,0.8,)]},2);
	setFloatArray(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatArray.align);
		const uniform = new UniformFloatArray(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setVec2Array(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformVec2Array.align);
		const uniform = new UniformVec2Array(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setVec3Array(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformVec3Array.align);
		const uniform = new UniformVec3Array(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setVec4Array(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformVec4Array.align);
		const uniform = new UniformVec4Array(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setSpotLights(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformSpotLights.align);
		const uniform = new UniformSpotLights(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setPointLights(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformPointLights.align);
		const uniform = new UniformPointLights(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setDirtectLights(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformDirtectLights.align);
		const uniform = new UniformDirtectLights(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setSpotLightShadows(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformSpotLightShadows.align);
		const uniform = new UniformSpotLightShadows(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setPointLightShadows(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformPointLightShadows.align);
		const uniform = new UniformPointLightShadows(name, this.dataBuffer, this.byteOffset, value, binding, 0, count);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	setDirtectLightShadows(name: string, value: Function, count: number, binding?: number) {
		if (this._uniformStruct.get(name)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformDirtectLightShadows.align);
		const uniform = new UniformDirtectLightShadows(
			name,
			this.dataBuffer,
			this.byteOffset,
			value,
			binding,
			0,
			count
		);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	private checkUniformOffset(byteSize: number, Align: number): number {
		//from https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
		return Math.ceil(byteSize / Align) * Align - byteSize;
	}
	destroy() {
		this?.buffer?.destroy();
	}
}
