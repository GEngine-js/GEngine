import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import { CompareFunction } from "../core/WebGPUConstant";
import CubeTextureLoader from "../loader/CubeTextureLoader";
import UniformBuffer from "../render/UniformBuffer";
import textureCache from "../core/TextureCache";
export default class SkyBoxMaterial extends Material {
	loadFish: Boolean;
	constructor() {
		super();
		this.type = "skybox";
		this.shaderSource = new ShaderSource({
			type: this.type,
			render: true,
			defines: {}
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
	update(frameState: FrameState, mesh: Mesh) {
		if (!this.loadFish) return;
		if (!this.shaderData) {
			this.createShaderData(mesh);
		}
	}
	protected createShaderData(mesh: Mesh) {
		super.createShaderData(mesh);
		const uniformBuffer = new UniformBuffer("skybox");
		uniformBuffer.setMatrix4("modelMatrix", () => {
			return null;
		});
		this.shaderData.setUniformBuffer("sky", uniformBuffer);
		this.shaderData.setTexture("baseTexture", this.baseTexture);
		this.shaderData.setSampler("baseSampler", this.baseSampler);
	}
}
