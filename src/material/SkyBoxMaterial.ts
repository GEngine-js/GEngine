import { FrameState } from "../core/FrameState";
import { ShaderDataFactory } from "../core/ShaderDataFactory";
import textureCache from "../core/TextureCache";
import { CompareFunction } from "../core/WebGPUConstant";
import { ShaderDataEnum } from "../core/WebGPUTypes";
import CubeTextureLoader from "../loader/CubeTextureLoader";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
export default class SkyBoxMaterial extends Material {
	loadFish: boolean;
	constructor() {
		super();
		this.type = "skybox";
		this.shaderSource = new ShaderSource({
			shaderId: this.type
		});
		this.loadFish = false;
		this.renderState.depthStencil.depthWriteEnabled = false;
		this.renderState.depthStencil.depthCompare = CompareFunction.LessEqual;
	}
	async loadTexture(urls) {
		const result = await CubeTextureLoader(urls);
		this.loadFish = true;
		textureCache.addTexture("specular", result.texture);
		this.baseTexture = result.texture;
		this.baseSampler = result.sampler;
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!this.loadFish) return;
		if (!this.shaderData)
			this.shaderData = ShaderDataFactory.createShaderData({
				mesh,
				material: this,
				shaderDataEnum: ShaderDataEnum.SKYBOX
			});
	}
}
