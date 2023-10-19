import { FrameState } from "../core/FrameState";
import { ShaderDataFactory } from "../core/ShaderDataFactory";
import { ShaderDataEnum } from "../core/WebGPUTypes";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
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
		if (!this.shaderData || this.dirty)
			this.shaderData = ShaderDataFactory.createShaderData({
				mesh,
				material: this,
				shaderDataEnum: ShaderDataEnum.BLINNPHONG
			});
	}
	destroy() {
		this?.baseTexture?.destroy();
		super.destroy();
	}
}
