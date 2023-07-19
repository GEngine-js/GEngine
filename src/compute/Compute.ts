import { BufferBindingType, BufferUsage } from "../core/WebGPUConstant";
import { IUniform, ShaderDefine, UniformBufferProp } from "../core/WebGPUTypes";
import { ComputeCommand } from "../render/ComputeCommand";
import ShaderData from "../render/ShaderData";
import Texture from "../render/Texture";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { addUniformToShaderData } from "../utils/uniformUtils";

export class Compute {
	public shaderData: ShaderData;
	public uid: string;
	public dirty: boolean;
	public computeCommand: ComputeCommand;
	public dispatch: { x?: number; y?: number; z?: number };
	public type: string;
	private shaderSource: ShaderSource;
	private computeProps: ComputeProps;
	constructor(options: ComputeProps) {
		this.type = "compute";
		this.uid = options.uid;
		this.computeProps = options;
		this.dirty = true;
		this.computeCommand = undefined;
		this.dispatch = options.dispatch;
		this.shaderSource = new ShaderSource({
			shaderId: this.uid,
			defines: this.computeProps.defines ?? {},
			compute: {
				computeShader: this.computeProps.shader,
				computeMain: this.computeProps?.shaderMain ?? "main"
			}
		});
	}
	public getUniformBufferByUid(uid: string): UniformBuffer {
		return this.shaderData.getUniformBuffer(uid);
	}
	public getTextureByName(name: string): Texture {
		return this.shaderData.getTexture(name);
	}
	public getSamplerByName(name: string) {
		return this.shaderData.getSampler(name);
	}
	public getCommand() {
		if (this.dirty) {
			this.dirty = false;
			this.computeCommand = new ComputeCommand({
				shaderData: this.createShaderData(),
				dispatch: this.dispatch,
				shaderSource: this.shaderSource
			});
		}
		return this.computeCommand;
	}
	public destroy() {
		if (this.shaderData) this.shaderData?.destroy();
	}
	protected createShaderData() {
		const { uniformBuffers, uniformTextureAndSampler } = this.computeProps;
		const shaderData = this.shaderData;
		// fill uniformBuffer
		uniformBuffers?.forEach?.((uniformBuffer) => this.createUniformBuffer(uniformBuffer));
		// fill texture and sampler
		if (uniformTextureAndSampler) this.addUniformToShaderData(uniformTextureAndSampler);
		return shaderData;
	}
	private createUniformBuffer(uniformBufferParams) {
		const {
			type = "uniform",
			usage = BufferUsage.Uniform | BufferUsage.CopyDst,
			uniforms,
			uid,
			binding,
			buffer,
			bufferSize,
			visibility
		} = uniformBufferParams;
		const uniformBuffer = new UniformBuffer({
			label: uid,
			type: <BufferBindingType>type,
			usage: <BufferUsage>usage,
			binding,
			buffer,
			visibility,
			size: buffer?.size ?? bufferSize
		});
		this.shaderData.setUniformBuffer(uid, uniformBuffer);
		if (!buffer) this.addUniformToShaderData(uniforms, uniformBuffer);
	}
	private addUniformToShaderData(uniforms, uniformBuffer?: UniformBuffer) {
		if (!uniforms) return;
		const uniformsNames = Object.getOwnPropertyNames(uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(uniformsName, uniforms[uniformsName], this.shaderData, undefined, uniformBuffer);
		});
	}
}
type ComputeProps = {
	uniformBuffers?: Array<UniformBufferProp>;
	uniformTextureAndSampler?: {
		[uniform: string]: IUniform<any>;
	};
	shader?: string;
	shaderMain?: string;
	uid?: string;
	defines?: ShaderDefine;
	dispatch: { x?: number; y?: number; z?: number };
};
