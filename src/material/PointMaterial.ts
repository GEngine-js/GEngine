import { FrameState } from "../core/FrameState";
import textureCache from "../core/TextureCache";
import { UniformEnum } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { Material } from "./Material";

export class PointMaterial extends Material {
	constructor() {
		super();
		this.type = "point";
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty) this.createShaderData(mesh);
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData();
		const uniformBuffer = new UniformBuffer({ label: "point" });
		uniformBuffer.setUniform(
			"modelMatrix",
			() => {
				return mesh.modelMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform("color", this, UniformEnum.Color);
		uniformBuffer.setUniform("size", this, UniformEnum.Float);
		this.shaderData.setUniformBuffer("point", uniformBuffer);
		this.shaderData.setDefine("USE_INSTANCE", true);
		if (this.baseTexture) {
			this.shaderData.setDefine("USE_COLORTEXTURE", true);
			this.shaderData.setTexture("baseColorTexture", this.baseTexture);
			this.shaderData.setSampler("baseColorSampler", this.baseSampler || textureCache.defaultSampler);
		}
	}
	destroy() {
		this?.baseTexture?.destroy();
		super.destroy();
	}
}
