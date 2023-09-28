import { FrameState } from "../core/FrameState";
import textureCache from "../core/TextureCache";
import { UniformEnum } from "../core/WebGPUTypes";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
export default class BlinnPhongMaterial extends Material {
	public specular: Color;
	public shininess: number;
	public normalTexture: Texture;
	public normalSampler: Sampler;
	constructor() {
		super();
		this.type = "phong";
		this.color = new Color(1.0, 0.0, 0.0);
		this.defines = {
			materialPhong: true,
			MATERIAL_PHONG: true
		};
		this.shaderSource = new ShaderSource({
			shaderId: this.type,
			defines: this.defines
		});
		this.light = true;
		this.specular = new Color(1.0, 1.0, 1.0);
		this.shininess = 30.0;
		this.baseTexture = undefined;
		this.baseSampler = undefined;
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.shaderData || this.dirty) this.createShaderData(mesh);
	}
	protected createShaderData(mesh?: Mesh) {
		super.createShaderData();
		const uniformBuffer = new UniformBuffer({ label: "phong" });
		uniformBuffer.setUniform(
			"modelMatrix",
			() => {
				return mesh.modelMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform("color", this, UniformEnum.Color);
		uniformBuffer.setUniform("opacity", this, UniformEnum.Float);
		uniformBuffer.setUniform(
			"normalMtrix",
			() => {
				return mesh.normalMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform("emissive", this, UniformEnum.Color);
		uniformBuffer.setUniform("shininess", this, UniformEnum.Float);
		uniformBuffer.setUniform("specular", this, UniformEnum.Color);
		this.shaderData.setUniformBuffer("phong", uniformBuffer);
		if (this.baseTexture) {
			this.shaderData.setDefine("USE_COLORTEXTURE", true);
			this.shaderData.setTexture("baseColorTexture", this.baseTexture);
			this.shaderData.setSampler("baseColorSampler", this.baseSampler || textureCache.defaultSampler);
		}
		if (this.normalTexture) {
			this.shaderData.setDefine("USE_NORMALTEXTURE", true);
			this.shaderData.setTexture("normalTexture", this.normalTexture);
			this.shaderData.setSampler("normalSampler", this.normalSampler || textureCache.defaultSampler);
		}
	}
	destroy() {
		this?.baseTexture?.destroy();
		super.destroy();
	}
}
