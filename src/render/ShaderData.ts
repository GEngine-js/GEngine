import { ShaderStage } from "../core/WebGPUConstant";
import { UniformFunc, ShaderDefine } from "../core/WebGPUTypes";
import defaultValue from "../utils/defaultValue";
import BindGroup from "./BindGroup";
import BindGroupEntity from "./BindGroupEntity";
import BindGroupLayout from "./BindGroupLayout";
import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
import Sampler from "./Sampler";
import Texture from "./Texture";
import UniformBuffer from "./UniformBuffer";
import { UniformSampler, UniformTexture } from "./Uniforms";
export default class ShaderData {
	currentBinding: number;

	defines: ShaderDefine;

	defineDirty: boolean;

	label: string;

	bindGroup: BindGroup;

	groupLayout: BindGroupLayout;

	layoutIndex: number;

	groupIndex: number;

	protected _uniforms: Map<string, any>;

	constructor(label: string, size?: number, layoutIndex?: number, groupIndex?) {
		this.label = label;
		this.currentBinding = 0;
		this.defineDirty = true;
		this.defines = {};
		this._uniforms = new Map();
		this.groupIndex = defaultValue(groupIndex, 0);
		this.layoutIndex = defaultValue(layoutIndex, 0);
	}
	getUniformBuffer(name: string): UniformBuffer {
		return this._uniforms.get(name);
	}
	getTexture(name: string): Texture {
		return this._uniforms.get(name);
	}
	getSampler(name: string): Sampler {
		return this._uniforms.get(name);
	}
	setUniformBuffer(name: string, uniformBuffer: UniformBuffer, binding?: number): ShaderData {
		if (this._uniforms.get(name)) return;
		uniformBuffer.binding = this.currentBinding;
		this.setDefine(name.concat("Binding"), binding ?? this.currentBinding);
		this.currentBinding += 1;
		this._uniforms.set(name, uniformBuffer);
		return this;
	}
	setTexture(
		name: string,
		value: UniformFunc | Texture,
		binding?: number,
		type?: string,
		visibility?: ShaderStage,
		textureView?: GPUTextureView
	): ShaderData {
		if (this._uniforms.get(name)) return;
		const uniform = new UniformTexture(name, binding ?? this.currentBinding, value, type, visibility, textureView);
		this.setDefine(name.concat("Binding"), binding ?? this.currentBinding);
		this.setDefine(`USE_${name.toLocaleUpperCase()}`, true);
		this.currentBinding += 1;
		this._uniforms.set(name, uniform);
		return this;
	}
	setSampler(name: string, value: UniformFunc | Sampler, binding?: number, visibility?: ShaderStage): ShaderData {
		if (this._uniforms.get(name)) return;
		const uniform = new UniformSampler(name, binding ?? this.currentBinding, value, visibility);
		this.setDefine(name.concat("Binding"), binding ?? this.currentBinding);
		this.currentBinding += 1;
		this._uniforms.set(name, uniform);
		return this;
	}
	setDefine(name: string, value: boolean | number) {
		if (this.defines[name] === undefined) {
			this.defineDirty = true;
			this.defines[name] = value;
		} else {
			if (this.defines[name] === value) {
				return;
			} else {
				this.defineDirty = true;
				this.defines[name] = value;
			}
		}
	}
	setUniformBufferValue(uniformBuffer: UniformBuffer) {
		const distUbo = this._uniforms.get(uniformBuffer.name);
		distUbo.setUniformsFromUniformBuffer(uniformBuffer);
	}
	bind(device: GPUDevice, passEncoder: GPURenderPassEncoder | GPUComputePassEncoder) {
		this.uploadUniform(device);
		if (!this.groupLayout && this._uniforms.size > 0)
			this.groupLayout = this.createBindGroupLayout(device, this.label, this.layoutIndex);
		if (!this.bindGroup && this._uniforms.size > 0)
			this.bindGroup = this.createBindGroup(device, this.label, this.groupIndex);
		this?.bindGroup?.bind?.(passEncoder);
	}
	destroy() {
		this._uniforms.forEach((uniform) => {
			if (uniform.destroy) uniform?.destroy();
		});
		this.label = undefined;
		this.currentBinding = 1;
		this.defineDirty = true;
		this.defines = undefined;
		this._uniforms.clear();
		BindGroupLayout.removeBindGroupLayoutFromCache(this.groupLayout);
		this.bindGroup = undefined;
	}
	private createBindGroup(device: GPUDevice, label: string, groupIndex?: number) {
		const { entities, dynamic, alignedSize, maxOffset } = this.createBindGroupEntity();
		const bindGroup = new BindGroup({
			label: label,
			entires: entities,
			device: device,
			layout: this.groupLayout,
			index: groupIndex || 0, // 后续改成groupIndex
			dynamic,
			alignedSize,
			maxOffset
		});
		return bindGroup;
	}
	private createBindGroupLayout(device: GPUDevice, label: string, layoutIndex?: number) {
		const result = this.createBindGroupLayoutEntry();
		const groupLayout = BindGroupLayout.getBindGroupLayoutFromCache(
			device,
			label + "-" + result.uid,
			result.layouts,
			layoutIndex || 0
		);
		return groupLayout;
	}
	protected uploadUniform(device: GPUDevice) {
		this._uniforms.forEach((uniform) => {
			uniform.bind(device);
		});
	}
	private createBindGroupLayoutEntry() {
		let uid = "";
		const result = new Map();
		this._uniforms.forEach((uniform) => {
			if (!result.has(uniform.name)) {
				uid = uid === "" ? uid.concat(uniform.name) : uid.concat(", ").concat(uniform.name);
				result.set(uniform.name, this.createOneLayoutEntry(uniform));
			}
		});
		uid = `uniforms[${uid}]`;
		return { uid, layouts: [...result.values()] };
	}
	private createBindGroupEntity() {
		const result = new Map();
		let dynamic = false,
			alignedSize = 0,
			maxOffset = 0;
		this._uniforms.forEach((uniform) => {
			if (!result.has(uniform.name)) {
				if (uniform?.hasDynamicOffset) {
					dynamic = true;
					maxOffset = uniform.maxOffset;
					alignedSize = Math.ceil(uniform.uniformsSize / (4 * 256)) * 256;
				}
				result.set(uniform.name, this.creayeOneGroupEntity(uniform));
			}
		});
		return {
			entities: [...result.values()],
			dynamic,
			alignedSize,
			maxOffset
		};
	}
	private createOneLayoutEntry(uniform) {
		let layoutEntity;
		if (uniform.isUniformBuffer) {
			layoutEntity = new BindGroupLayoutEntry({
				binding: uniform.binding,
				buffer: uniform.layoutType,
				visibility: uniform.visibility
			});
		} else if (uniform.isTexture) {
			layoutEntity = new BindGroupLayoutEntry({
				binding: uniform.binding,
				visibility: uniform.visibility,
				texture: uniform.type == "texture" ? uniform.layoutType : undefined,
				storageTexture: uniform.type == "storageTexture" ? uniform.storageTextureLayoutType : undefined
			});
		} else if (uniform.isSampler) {
			layoutEntity = new BindGroupLayoutEntry({
				binding: uniform.binding,
				visibility: uniform.visibility,
				sampler: uniform.layoutType
			});
		}
		return layoutEntity;
	}
	private creayeOneGroupEntity(uniform) {
		let groupEntity;
		if (uniform.isUniformBuffer) {
			groupEntity = new BindGroupEntity({
				binding: uniform.binding,
				resource: {
					buffer: uniform.buffer.gpuBuffer,
					offset: uniform.offset,
					size: uniform.bufferSize
				}
			});
		} else if (uniform.isTexture) {
			groupEntity = new BindGroupEntity({
				binding: uniform.binding,
				resource: uniform?.textureView ?? uniform.texture.textureView
			});
		} else if (uniform.isSampler) {
			groupEntity = new BindGroupEntity({
				binding: uniform.binding,
				resource: uniform.sampler.gpuSampler
			});
		}
		return groupEntity;
	}
}
