import { FrameState } from "../core/FrameState";
import { ShaderDataFactory } from "../core/ShaderDataFactory";
import textureCache from "../core/TextureCache";
import { CullMode } from "../core/WebGPUConstant";
import { ShaderDataEnum } from "../core/WebGPUTypes";
import Vector2 from "../math/Vector2";
import { Mesh } from "../mesh/Mesh";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";

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
	public get IBLRender() {
		return this._IBLRender;
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
		this.defines = {
			materialPbr: true,
			USE_IBL: this._IBLRender,
			MATERIAL_PBR: true
		};
		this.shaderSource = new ShaderSource({
			shaderId: this.type,
			defines: this.defines
		});
	}
	update(frameState?: FrameState, mesh?: Mesh) {
		if (!textureCache.getTexture("specular")) return;
		if (!this.shaderData || this.dirty)
			this.shaderData = ShaderDataFactory.createShaderData({
				mesh,
				material: this,
				shaderDataEnum: ShaderDataEnum.PBR
			});
	}
	destroy() {
		this?.aoTexture?.destroy();
		this?.baseTexture?.destroy();
		this?.emissiveTexture?.destroy();
		this?.normalTexture?.destroy();
		this.specularEnvTexture = undefined;
	}
}
