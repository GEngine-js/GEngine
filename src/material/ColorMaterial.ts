import { FrameState } from "../core/FrameState";
import { ShaderDataFactory } from "../core/ShaderDataFactory";
import { ShaderDataEnum } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
export default class ColorMaterial extends Material {
	constructor() {
		super();
		this.type = "color";
		this.shaderSource = new ShaderSource({
			shaderId: this.type
		});
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty)
			this.shaderData = ShaderDataFactory.createShaderData({
				mesh,
				material: this,
				shaderDataEnum: ShaderDataEnum.COLOR
			});
	}
}
