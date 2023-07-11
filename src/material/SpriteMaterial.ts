import { FrameState } from "../core/FrameState";
import textureCache from "../core/TextureCache";
import { UniformEnum } from "../core/WebGPUTypes";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";

export class SpriteMaterial extends Material {
	public rotation: number;
	public center: Vector2;
	constructor() {
		super();
		this.type = "sprite";
		this.shaderSource = new ShaderSource({
			shaderId: this.type,
			defines: {
				HAS_UV: true
			}
		});
		this.rotation = Math.PI;
		this.opacity = 1;
		this.center = new Vector2(0, 0);
		this.color = new Color(1, 0, 0);
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
		uniformBuffer.setUniform("color", this, UniformEnum.Color);
		uniformBuffer.setUniform("rotation", this, UniformEnum.Float);
		uniformBuffer.setUniform("center", this, UniformEnum.FloatVec2);
		uniformBuffer.setUniform("opacity", this, UniformEnum.Float);
		this.shaderData.setUniformBuffer("sprite", uniformBuffer);
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
