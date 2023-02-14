import { FrameState } from "../core/FrameState";
import { BufferUsage } from "../core/WebGPUConstant";
import { IUniform, ShaderMaterialParms, Uniforms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import defaultValue from "../utils/defaultValue";
import { addUniformToShaderData, checkContainFloatType } from "../utils/uniformUtils";
import { Material } from "./Material";

export default class ShaderMaterial extends Material {
	uniforms: Uniforms;
	uniformBuffer: UniformBuffer;
	constructor(options: ShaderMaterialParms) {
		super();
		const { type, frag, vert, defines } = options;
		this.type = type;
		this.shaderSource = new ShaderSource({
			type,
			frag,
			vert,
			custom: true,
			defines: defaultValue(defines, {}),
			render: true
		});
		this.uniforms = options.uniforms;
		this.uniformBuffer = undefined;
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData) this.createShaderData(mesh);
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData(mesh);
		let result = checkContainFloatType(this.uniforms);
		if (result.hasFloat) {
			this.uniformBuffer = result.hasArraytype
				? new UniformBuffer("read-only-storage", BufferUsage.Storage | BufferUsage.CopyDst)
				: new UniformBuffer();
			this.shaderData.setUniformBuffer(this.type, this.uniformBuffer);
		}
		const uniformsNames = Object.getOwnPropertyNames(this.uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(
				uniformsName,
				this.uniforms[uniformsName],
				this.uniforms,
				this.shaderData,
				this.uniformBuffer
			);
		});
	}
}
