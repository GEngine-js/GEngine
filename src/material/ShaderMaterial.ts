import { FrameState } from "../core/FrameState";
import { ShaderDataFactory } from "../core/ShaderDataFactory";
import { ShaderDataEnum, ShaderMaterialParms, Uniforms } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
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
		if (!this.shaderData || this.dirty)
			this.shaderData = ShaderDataFactory.createShaderData({
				label: this.type,
				mesh,
				material: this,
				shaderDataEnum: ShaderDataEnum.CUSTOM
			});
	}
	clone() {
		return new ShaderMaterial(this.shaderMaterialParms);
	}
}
