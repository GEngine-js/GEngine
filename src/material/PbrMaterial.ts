import { FrameState } from "../core/FrameState";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import Texture from "../render/Texture";
import { Material } from "./Material";
import { ShaderSource } from "../shader/ShaderSource";
import { CullMode } from "../core/WebGPUConstant";
import textureCache from "../core/TextureCache";
import UniformBuffer from "../render/UniformBuffer";
import Sampler from "../render/Sampler";

export default class PbrMaterial extends Material {
	public specularEnvTexture: Texture;

	public specularEnvSampler: Sampler;

	public emissiveTexture: Texture;

	public emissiveSampler: Sampler;

	public normalTexture: Texture;

	public normalSampler: Sampler;

	public aoTexture: Texture;

	public aoSampler: Sampler;

	public metalnessRoughnessTexture: Texture;

	public metalnessRoughnessSampler: Sampler;

	private _roughness: number;

	private _metalness: number;

	private _aoTextureIntensity: number;

	private _normalScale: Vector2;

	private _IBLRender: boolean;

	public get roughness(): number {
		return this._roughness;
	}
	public set roughness(value) {
		this._roughness = value;
	}
	public get metalness(): number {
		return this._metalness;
	}
	public set metalness(v: number) {
		this._metalness = v;
	}
	public get aoTextureIntensity(): number {
		return this._aoTextureIntensity;
	}
	public set aoTextureIntensity(v: number) {
		this._aoTextureIntensity = v;
	}
	public get normalScale(): Vector2 {
		if (this.renderState && this.renderState.primitive) {
			if (this.renderState.primitive.cullMode == CullMode.Back) {
				return Vector2.negate(this._normalScale, new Vector2());
			}
		}
		return this._normalScale;
	}
	public set normalScale(v: Vector2) {
		this._normalScale = v;
	}
	public set IBLRender(value) {
		this._IBLRender = value;
		this.shaderSource.setDefines({
			USE_IBL: this._IBLRender
		});
		this.dirty = true;
	}
	constructor() {
		super();
		this.type = "pbr_mat";

		this._roughness = 0.1;

		this._metalness = 0.1;

		this._aoTextureIntensity = 1.0;
		this.light = true;
		this._normalScale = new Vector2(1, 1);
		this._IBLRender = true;
		this.shaderSource = new ShaderSource({
			type: this.type,
			render: true,
			defines: {
				materialPbr: true,
				USE_IBL: this._IBLRender
			}
		});
	}
	update(frameState: FrameState, mesh: Mesh) {
		if (!textureCache.getTexture("specular")) return;
		if (!this.shaderData || this.dirty) {
			this.createShaderData(mesh, frameState);
		}
	}
	protected createShaderData(mesh: Mesh, frameState?: FrameState) {
		super.createShaderData(mesh);
		const uniformBuffer = new UniformBuffer("pbr");
		uniformBuffer.setMatrix4("modelMatrix", () => {
			return mesh.modelMatrix;
		});
		uniformBuffer.setColor("diffuse", this);
		uniformBuffer.setFloat("opacity", this);
		uniformBuffer.setMatrix4("normalMtrix", () => {
			return mesh.normalMatrix;
		});
		uniformBuffer.setColor("emissive", this);
		uniformBuffer.setFloat("metalness", this);
		uniformBuffer.setFloat("roughness", this);
		this.shaderData.setUniformBuffer("pbr", uniformBuffer);
		this.specularEnvTexture = textureCache.getTexture("specular");
		if (this.baseTexture) {
			this.shaderData.setDefine("USE_TEXTURE", true);
			this.shaderData.setTexture("baseColorTexture", this.baseTexture);
			this.shaderData.setSampler("baseColorSampler", this.baseSampler || textureCache.defaultSampler);
		}
		if (this.metalnessRoughnessTexture) {
			this.shaderData.setDefine("USE_METALNESSTEXTURE", true);
			this.shaderData.setTexture("metalnessRoughnessTexture", this.metalnessRoughnessTexture);
			this.shaderData.setSampler(
				"metalnessRoughnessSampler",
				this.metalnessRoughnessSampler || textureCache.defaultSampler
			);
		}
		if (this.normalTexture) {
			uniformBuffer.setFloatVec2("normalScale", this);
			this.shaderData.setDefine("USE_NORMALTEXTURE", true);
			this.shaderData.setTexture("normalTexture", this.normalTexture);
			this.shaderData.setSampler("normalSampler", this.normalSampler || textureCache.defaultSampler);
		}
		if (this.aoTexture) {
			this.shaderData.setDefine("USE_AOTEXTURE", true);
			this.shaderData.setTexture("aoTexture", this.aoTexture);
			this.shaderData.setSampler("aoSampler", this.aoSampler || textureCache.defaultSampler);
			uniformBuffer.setFloat("aoTextureIntensity", this);
		}
		if (this.emissiveTexture) {
			this.shaderData.setDefine("USE_EMISSIVETEXTURE", true);
			this.shaderData.setTexture("emissiveTexture", this.emissiveTexture);
			this.shaderData.setSampler("emissiveSampler", this.emissiveSampler || textureCache.defaultSampler);
		}
		if (this.specularEnvTexture && this._IBLRender) {
			this.shaderData.setTexture("specularEnvTexture", this.specularEnvTexture);
			this.shaderData.setSampler("specularEnvSampler", this.specularEnvSampler || textureCache.defaultSampler);
		}
	}
	destroy() {}
}
