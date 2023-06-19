import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { UniformEnum } from "../render/Uniforms";
import { Material } from "./Material";

export class BillboardMaterial extends Material {
	constructor() {
		super();
		this.type = "billboard";
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData(mesh);
		const uniformBuffer = new UniformBuffer({ label: "billboard" });
		uniformBuffer.setUniform(
			"modelMatrix",
			() => {
				return null;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform("color", this, UniformEnum.Color);
		uniformBuffer.setUniform("opacity", this, UniformEnum.Float);
		uniformBuffer.setUniform("rotation", this, UniformEnum.Float);
		uniformBuffer.setUniform("center", this, UniformEnum.FloatVec2);
		uniformBuffer.setUniform("specular", this, UniformEnum.Color);
		this.shaderData.setUniformBuffer("phong", uniformBuffer);
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
