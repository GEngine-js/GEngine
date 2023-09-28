import { FrameState } from "../core/FrameState";
import { BufferBindingType, BufferUsage } from "../core/WebGPUConstant";
import { ShaderMaterialParms, Uniforms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { addUniformToShaderData } from "../utils/uniformUtils";
import { Material } from "./Material";

export default class ShaderMaterial extends Material {
	uniforms: Uniforms;
	public shaderMaterialParms: ShaderMaterialParms;
	constructor(options: ShaderMaterialParms) {
		super();
		const { type, frag, vert, defines = {}, light, shaderId } = options;
		this.defines = defines;
		this.type = shaderId ?? type;
		this.shaderMaterialParms = options;
		this.shaderSource = new ShaderSource({
			shaderId: shaderId ?? type,
			render: {
				fragShader: frag,
				vertShader: vert
			},
			defines: this.defines
		});
		this.uniforms = options.uniforms;
		this.light = light || false;
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty) this.createShaderData(mesh);
	}
	clone() {
		return new ShaderMaterial(this.shaderMaterialParms);
	}
	protected createShaderData(mesh?: Mesh) {
		const { uniformBuffers, uniformTextureAndSampler } = this.shaderMaterialParms;
		super.createShaderData();
		const shaderData = this.shaderData;
		// fill uniformBuffer
		uniformBuffers?.forEach?.((uniformBuffer) => this.createUniformBuffer(uniformBuffer, mesh));
		// fill texture and sampler
		if (uniformTextureAndSampler) this.addUniformToShaderData(uniformTextureAndSampler);
		return shaderData;
	}
	private createUniformBuffer(uniformBufferParams, mesh: Mesh) {
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
		if (!buffer) this.addUniformToShaderData(uniforms, uniformBuffer, mesh);
	}
	private addUniformToShaderData(uniforms, uniformBuffer?: UniformBuffer, mesh?: Mesh) {
		if (!uniforms) return;
		const uniformsNames = Object.getOwnPropertyNames(uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(uniformsName, uniforms[uniformsName], this.shaderData, mesh, uniformBuffer);
		});
	}
}
