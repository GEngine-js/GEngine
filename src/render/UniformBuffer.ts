import { BufferUsage, ShaderStage } from "../core/WebGPUConstant";
import { UniformFunc } from "../core/WebGPUTypes";
import defaultValue from "../utils/defaultValue";
import Buffer from "./Buffer";

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
	UniformUint,
	UniformVec2Array,
	UniformVec3Array,
	UniformVec4Array,
	UniformEnum
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
	maxOffset: number;
	isUniformBuffer: boolean;
	name: string;
	private static UniformType = {
		[UniformEnum.UniformUint]: UniformUint,
		[UniformEnum.Float]: UniformFloat,
		[UniformEnum.FloatVec2]: UniformFloatVec2,
		[UniformEnum.FloatVec3]: UniformFloatVec3,
		[UniformEnum.FloatVec4]: UniformFloatVec4,
		[UniformEnum.Mat2]: UniformMat2,
		[UniformEnum.Mat3]: UniformMat3,
		[UniformEnum.Mat4]: UniformMat4,
		[UniformEnum.Color]: UniformColor,
		[UniformEnum.FloatArray]: UniformFloatArray,
		[UniformEnum.Vec2Array]: UniformVec2Array,
		[UniformEnum.Vec3Array]: UniformVec3Array,
		[UniformEnum.Vec4Array]: UniformVec4Array,
		[UniformEnum.Mat4Array]: UniformMatrix4Array,
		[UniformEnum.PointLights]: UniformPointLights,
		[UniformEnum.SpotLights]: UniformSpotLights,
		[UniformEnum.DirtectLights]: UniformDirtectLights,
		[UniformEnum.PointLightShadows]: UniformPointLightShadows,
		[UniformEnum.SpotLightShadows]: UniformSpotLightShadows,
		[UniformEnum.DirtectLightShadows]: UniformDirtectLightShadows
	};
	constructor(options: UniformBufferType) {
		this.type = defaultValue(options.type, "uniform");
		this.label = defaultValue(options.label, "");
		this.name = defaultValue(options.label, "");
		this.hasDynamicOffset = options.hasDynamicOffset ?? false;
		this.minBindingSize = options.minBindingSize ?? 0;
		this.binding = options.binding ?? 0;
		this.visibility = ShaderStage.Fragment | ShaderStage.Vertex;
		this.usage = defaultValue(options.usage, BufferUsage.Uniform | BufferUsage.CopyDst);
		this._uniformStruct = new Map();
		this.uniformDirty = true;
		this._bufferSize = options.size;
		this.offset = 0;
		this.dataBuffer = defaultValue(options.dataBuffer, new Float32Array(defaultValue(this._bufferSize, 400)));
		this.byteOffset = 0;
		this.isUniformBuffer = true;
		this.maxOffset = options.maxOffset ?? 0;
	}
	get layoutType() {
		return {
			type: this.type,
			hasDynamicOffset: this.hasDynamicOffset,
			minBindingSize: this.minBindingSize
		};
	}
	get bufferSize() {
		return this.uniformsSize * 4;
	}
	get uniformsSize() {
		// https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
		return Math.ceil(this.byteOffset / 16) * 16;
	}
	bind(device: GPUDevice) {
		this._uniformStruct.forEach((uniform) => {
			const result = uniform.set();
			if (uniform?.dirty != undefined) uniform.dirty = false;
			if (result != undefined && this.uniformDirty == false) this.uniformDirty = result;
		});
		if (this.uniformDirty) {
			this.uniformDirty = false;
			if (!this.buffer) this.buffer = Buffer.createUniformBuffer(this.label, device, this.bufferSize, this.usage);
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
	contains(name: string): Uniform<any> {
		return this._uniformStruct.get(name);
	}
	replaceUniformValue(name: string, value: UniformFunc | number | object) {
		const uniform = this._uniformStruct.get(name);
		if (!uniform) return;
		uniform.cb = value;
	}
	// uniformBuffer.setVec3Array('test',()=>{return [new Vector3(1,0,0),new Vector3(1,0.8,0.5)]},2);
	// uniformBuffer.setFloatArray('test1',()=>{return [0.5,0.5,1.0]},3);
	// uniformBuffer.setVec4Array('test4',()=>{return [new Vector4(0.5,0.6,0.2,1.0),new Vector4(0.5,0.8,0.8,1.0)]},2);
	// uniformBuffer.setVec2Array('test2',()=>{return [new Vector2(0.5,0.6),new Vector2(0.5,0.8,)]},2);
	setUniform(name: string, value: UniformFunc | number | object, uniformType: UniformEnum, count?: number) {
		if (this._uniformStruct.get(name)) return;
		const TypeUniform = UniformBuffer.UniformType[uniformType];
		this.byteOffset += this.checkUniformOffset(this.byteOffset, TypeUniform.align);
		const uniform =
			count != undefined
				? new TypeUniform(name, this.dataBuffer, this.byteOffset, value, 0, count)
				: new TypeUniform(name, this.dataBuffer, this.byteOffset, value);
		this._uniformStruct.set(name, uniform);
		this.byteOffset += uniform.byteSize;
	}
	private checkUniformOffset(byteSize: number, Align: number): number {
		// from https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
		// return this.hasDynamicOffset
		// 	? Math.ceil(byteSize / 256) * 256 - byteSize
		// 	: Math.ceil(byteSize / Align) * Align - byteSize;
		return Math.ceil(byteSize / Align) * Align - byteSize;
	}
	destroy() {
		this?.buffer?.destroy();
	}
}
type UniformBufferType = {
	label: string;
	type?: string;
	usage?: BufferUsage;
	size?: number;
	dataBuffer?: Float32Array;
	binding?: number;
	hasDynamicOffset?: boolean;
	minBindingSize?: number;
	maxOffset?: number;
};
