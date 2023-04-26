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
	currentBinding: number;

	defines: { [prop: string]: boolean | number };

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
	setUniformBuffer(name: string, uniformBuffer: UniformBuffer) {
		if (this._uniforms.get(name)) return;
		uniformBuffer.binding = this.currentBinding;
		this.setDefine(name.concat("Binding"), this.currentBinding);
		this.currentBinding += 1;
		this._uniforms.set(name, uniformBuffer);
	}
	setTexture(name: string, value: Function | Texture, binding?: number) {
		if (this._uniforms.get(name)) return;
		const uniform = new UniformTexture(name, this.currentBinding, value);
		this.setDefine(name.concat("Binding"), this.currentBinding);
		this.currentBinding += 1;
		this._uniforms.set(name, uniform);
	}
	setSampler(name: string, value: Function | Sampler, binding?: number) {
		if (this._uniforms.get(name)) return;
		const uniform = new UniformSampler(name, this.currentBinding, value);
		this.setDefine(name.concat("Binding"), this.currentBinding);
		this.currentBinding += 1;
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
		if (!this.groupLayout)
			this.groupLayout = this.createBindGroupLayout(context.device, this.label, this.layoutIndex);
		if (!this.bindGroup) this.bindGroup = this.createBindGroup(context.device, this.label, this.groupIndex);
		this.bindGroup.bind(passEncoder);
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
			index: groupIndex || 0, //后续改成groupIndex
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
	protected uploadUniform(context: Context) {
		this._uniforms.forEach((uniform) => {
			uniform.bind(context);
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
				texture: uniform.layoutType
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
				resource: uniform.texture.textureView
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
