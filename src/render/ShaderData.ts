import { UniformSampler, UniformTexture } from "./Uniforms";
import BindGroupEntity from "./BindGroupEntity";
import BindGroupLayoutEntry from "./BindGroupLayoutEntry";
import BindGroupLayout from "./BindGroupLayout";
import BindGroup from "./BindGroup";
import defaultValue from "../utils/defaultValue";
import Context from "./Context";
import UniformBuffer from "./UniformBuffer";
import Texture from "./Texture";
import Sampler from "./Sampler";
export default class ShaderData {
	textureBinding: number;

	defines: { [prop: string]: boolean | number };

	defineDirty: boolean;

	label: string;

	bindGroup: BindGroup;

	groupLayout: BindGroupLayout;

	subBindGroup: { [prop: string]: BindGroup };

	layoutIndex: number;

	groupIndex: number;

	protected _uniforms: Map<string, any>;

	constructor(label: string, size?: number, layoutIndex?: number, groupIndex?) {
		this.label = label;
		this.textureBinding = 1;
		this.defineDirty = true;
		this.defines = {};
		this._uniforms = new Map();
		this.groupIndex = defaultValue(groupIndex, 0);
		this.layoutIndex = defaultValue(layoutIndex, 0);
	}
	setUniformBuffer(name: string, uniformBuffer: UniformBuffer) {
		if (this._uniforms.get(name)) return;
		this._uniforms.set(name, uniformBuffer);
	}
	setTexture(name: string, value: Function | Texture, binding?: number) {
		if (this._uniforms.get(name)) return;
		const uniform = new UniformTexture(name, this.textureBinding, value);
		this.setDefine(name.concat("Binding"), this.textureBinding);
		this.textureBinding += 1;
		this._uniforms.set(name, uniform);
	}
	setSampler(name: string, value: Function | Sampler, binding?: number) {
		if (this._uniforms.get(name)) return;
		const uniform = new UniformSampler(name, this.textureBinding, value);
		this.setDefine(name.concat("Binding"), this.textureBinding);
		this.textureBinding += 1;
		this._uniforms.set(name, uniform);
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
	replaceUniformBufferValue(name: string, value: Function | number | Object) {
		this._uniforms.forEach((uniform) => {
			if (uniform?.isUniformBuffer) {
				uniform.replaceUniformValue(name, value);
			}
		});
	}
	bind(context: Context, passEncoder: GPURenderPassEncoder) {
		this.uploadUniform(context);
		if (!this.bindGroup) this.bindGroup = this.createBindGroup(context.device, this.label, this.groupIndex);
		if (!this.groupLayout)
			this.groupLayout = this.createBindGroupLayout(context.device, this.label, this.layoutIndex);
		this.bindGroup.bind(passEncoder);
	}
	destroy() {
		this._uniforms.forEach((uniform) => {
			if (uniform.destroy) uniform?.destroy();
		});
		this.label = undefined;
		this.textureBinding = 1;
		this.defineDirty = true;
		this.defines = undefined;
		this._uniforms.clear();
		BindGroupLayout.removeBindGroupLayoutFromCache(this.groupLayout);
		this.bindGroup = undefined;
	}
	private createBindGroup(device: GPUDevice, label: string, groupIndex?: number) {
		const groupEntities = this.createBindGroupEntity();
		const bindGroup = new BindGroup({
			label: label,
			entires: groupEntities,
			device: device,
			layout: this.groupLayout,
			index: groupIndex || 0 //后续改成groupIndex
		});
		return bindGroup;
	}
	private createBindGroupLayout(device: GPUDevice, label: string, layoutIndex?: number) {
		const layoutEntities = this.createBindGroupLayoutEntry();
		const groupLayout = BindGroupLayout.getBindGroupLayoutFromCache(
			device,
			label,
			layoutEntities,
			layoutIndex || 0
		);
		return groupLayout;
	}
	protected uploadUniform(context: Context) {
		this._uniforms.forEach((uniform) => {
			uniform.bind(context);
		});
	}
	private createBindGroupLayoutEntry() {
		const result = new Map();
		this._uniforms.forEach((uniform) => {
			if (!result.has(uniform.binding)) {
				result.set(uniform.binding, this.createOneLayoutEntry(uniform));
			}
		});
		const lauoutEntityArray = [];
		result.forEach((value) => {
			lauoutEntityArray.push(value);
		});

		return lauoutEntityArray;
	}
	private createBindGroupEntity() {
		const result = new Map();
		this._uniforms.forEach((uniform) => {
			if (!result.has(uniform.binding)) {
				result.set(uniform.binding, this.creayeOneGroupEntity(uniform));
			}
		});
		const groupEntityArray = [];
		result.forEach((value) => {
			groupEntityArray.push(value);
		});

		return groupEntityArray;
	}
	private createOneLayoutEntry(uniform) {
		let layoutEntity;
		if (uniform.type === "uniform" || uniform.type === "read-only-storage") {
			layoutEntity = new BindGroupLayoutEntry({
				binding: uniform.binding,
				buffer: uniform.layoutType,
				visibility: uniform.visibility
			});
		} else if (uniform.type === "texture") {
			layoutEntity = new BindGroupLayoutEntry({
				binding: uniform.binding,
				visibility: uniform.visibility,
				texture: uniform.layoutType
			});
		} else if (uniform.type === "sampler") {
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
		if (uniform.type === "uniform" || uniform.type === "read-only-storage") {
			groupEntity = new BindGroupEntity({
				binding: uniform.binding,
				resource: {
					buffer: uniform.buffer.gpuBuffer,
					offset: uniform.offset,
					size: uniform.bufferSize
				}
			});
		} else if (uniform.type === "texture") {
			groupEntity = new BindGroupEntity({
				binding: uniform.binding,
				resource: uniform.texture.textureView
			});
		} else if (uniform.type === "sampler") {
			groupEntity = new BindGroupEntity({
				binding: uniform.binding,
				resource: uniform.sampler.gpuSampler
			});
		}
		return groupEntity;
	}
}
