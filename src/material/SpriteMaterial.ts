import { FrameState } from "../core/FrameState";
import textureCache from "../core/TextureCache";
import { UniformEnum } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";

export class SpriteMaterial extends Material {
	constructor() {
		super();
		this.type = "sprite";
		this.defines = {
			HAS_UV: true
		};
		this.shaderSource = new ShaderSource({
			shaderId: this.type,
			defines: this.defines
		});
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty) this.createShaderData(mesh);
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData();
		const uniformBuffer = new UniformBuffer({ label: "sprite" });
		uniformBuffer.setUniform(
			"modelMatrix",
			() => {
				return mesh.modelMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform("color", mesh, UniformEnum.Color);
		uniformBuffer.setUniform("rotation", mesh, UniformEnum.Float);
		uniformBuffer.setUniform("center", mesh, UniformEnum.FloatVec2);
		uniformBuffer.setUniform("opacity", mesh, UniformEnum.Float);
		this.shaderData.setUniformBuffer("sprite", uniformBuffer);
		if (this.baseTexture) {
			this.shaderData.setTexture("baseColorTexture", this.baseTexture);
			this.shaderData.setSampler("baseColorSampler", this.baseSampler || textureCache.defaultSampler);
		}
	}
	destroy() {
		this?.baseTexture?.destroy();
		super.destroy();
	}
}
