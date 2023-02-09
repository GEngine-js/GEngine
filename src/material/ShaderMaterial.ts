import { FrameState } from "../core/FrameState";
import { IUniform, ShaderMaterialParms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { addUniformToShaderData, checkContainFloatType } from "../utils/uniformUtils";
import { Material } from "./Material";

export default class ShaderMaterial extends Material {
	uniforms: { [uniform: string]: IUniform };
	uniformBuffer: UniformBuffer;
	constructor(options: ShaderMaterialParms) {
		super();
		const { type, frag, vert, uniforms } = options;
		this.type = type;
		this.shaderSource = new ShaderSource({
			type,
			frag,
			vert,
			custom: true,
			defines: {},
			render: true
		});
		this.uniforms = uniforms;
		this.uniformBuffer = undefined;
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData) this.createShaderData(mesh);
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData(mesh);
		if (checkContainFloatType(this.uniforms)) {
			this.uniformBuffer = new UniformBuffer();
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
