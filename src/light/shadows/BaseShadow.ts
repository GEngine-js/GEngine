import { Light } from "../Light";
import Camera from "../../camera/Camera";
import { TextureFormat, TextureSampleType, TextureUsage } from "../../core/WebGPUConstant";
import Texture from "../../render/Texture";
import Vector2 from "../../math/Vector2";
import Vector4 from "../../math/Vector4";
export class BaseShadow {
	protected _shadowMapSize: Vector2;
	protected _camera: Camera;
	protected _shadowMap: Texture;
	public type: string;
	public _viewports: Array<Vector4>;
	public viewportSize: Vector2;
	public currentViewportIndex: number;

	constructor(shadowMapSize: Vector2, camera: Camera) {
		this._shadowMapSize = shadowMapSize;
		this._camera = camera;

		this._init();
	}

	get camera() {
		return this._camera;
	}

	get shadowMapSize() {
		return this._shadowMapSize;
	}

	get viewports() {
		return this._viewports;
	}

	public getShadowMapTexture() {
		return this._shadowMap;
	}

	protected _init() {
		this._initShadowMapTexture();
	}

	protected _initShadowMapTexture() {
		this._createShadowMapTexture();
	}

	protected _createShadowMapTexture() {
		this._shadowMap = new Texture({
			size: {
				width: this._shadowMapSize.x,
				height: this._shadowMapSize.y,
				depth: 1
			},
			fixedSize: true,
			sampleType: TextureSampleType.Depth,
			format: TextureFormat.Depth24Plus,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding | TextureUsage.CopySrc
		});
	}

	public update(light: Light) {}
}
