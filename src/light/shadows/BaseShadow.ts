import { Light } from "../Light";
import Camera from "../../camera/Camera";
import { TextureFormat, TextureUsage } from "../../core/WebGPUConstant";
import Texture from "../../render/Texture";

export class BaseShadow {
	protected _shadowMapSize: number;
	protected _camera: Camera;
	protected _shadowMap: Texture;

	constructor(shadowMapSize: number, camera: Camera) {
		this._shadowMapSize = shadowMapSize;
		this._camera = camera;

		this._init();
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
				width: this._shadowMapSize,
				height: this._shadowMapSize,
				depth: 1
			},
			format: TextureFormat.Depth32Float,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});
	}
}
