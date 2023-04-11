import { FrameState } from "../core/FrameState";
import { BufferUsage } from "../core/WebGPUConstant";
import { ShaderMaterialParms, Uniforms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import defaultValue from "../utils/defaultValue";
import { addUniformToShaderData, checkContainFloatType } from "../utils/uniformUtils";
import { Material } from "./Material";

export default class ShaderMaterial extends Material {
	uniforms: Uniforms;
	uniformBuffer: UniformBuffer;
	private shaderMaterialParms: ShaderMaterialParms;
	constructor(options: ShaderMaterialParms) {
		super();
		const { type, frag, vert, defines, light } = options;
		this.type = type;
		this.shaderMaterialParms = options;
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
		this.light = light || false;
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty) this.createShaderData(mesh);
	}
	clone() {
		return new ShaderMaterial(this.shaderMaterialParms);
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData(mesh);
		let result = checkContainFloatType(this.uniforms);
		if (result.hasFloat) {
			this.uniformBuffer = result.hasArraytype
				? new UniformBuffer({
						label: this.type,
						type: "read-only-storage",
						usage: BufferUsage.Storage | BufferUsage.CopyDst
				  })
				: new UniformBuffer({ label: this.type });
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
