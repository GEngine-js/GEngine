import { FrameState } from "../core/FrameState";
import { ShaderDataFactory } from "../core/ShaderDataFactory";
import { ShaderDataEnum } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";

export class PointMaterial extends Material {
	constructor() {
		super();
		this.type = "point";
		this.defines = {
			HAS_UV: true,
			HAS_COLOR: true,
			VERTEX_COLOR: false,
			VERTEX_SIZE: false,
			USE_INSTANCE: true
		};
		this.shaderSource = new ShaderSource({
			shaderId: this.type,
			defines: this.defines
		});
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty)
			this.shaderData = ShaderDataFactory.createShaderData({
				mesh,
				material: this,
				shaderDataEnum: ShaderDataEnum.POINT
			});
	}
	destroy() {
		this?.baseTexture?.destroy();
		super.destroy();
	}
}
