import Camera from "../camera/Camera";
import RenderObject from "../core/RenderObject";
import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { BaseShadow } from "./shadows/BaseShadow";

export class Light {
	private _color: Vector3;
	type: string;
	private _intensity: number;
	dirty: boolean;
	colorDirty: boolean;
	intensityDirty: boolean;
	private _position: Vector3;
	positionDirty: boolean;
	public _shadowCollection: Map<Camera, BaseShadow>;

	public positionVC: Vector3;
	constructor(color: Vector3, intensity: number) {
		this._color = Vector3.multiplyByScalar(color, intensity, new Vector3());
		this._intensity = intensity;
		this._position = new Vector3(0, 0, 0);
		this.positionDirty = true;
		this.colorDirty = true;
		this.intensityDirty = true;
		this._shadowCollection = new Map();
	}
	get position() {
		return this._position;
	}
	set position(value) {
		this.positionDirty = true;
		this._position = value;
	}
	get color() {
		return this._color;
	}
	set color(value) {
		this.colorDirty = true;
		this._color = value;
	}
	set intensity(value) {
		this.color = Vector3.multiplyByScalar(this.color, value, new Vector3());
		this.intensityDirty = true;
		this._intensity = value;
	}
	get intensity() {
		return this._intensity;
	}

	public getShadowByCamera(camera: Camera): BaseShadow {
		if (this._shadowCollection.size === 0) {
			return null;
		}

		return this._shadowCollection.get(camera) ?? null;
	}

	public getAllShadow(): Map<Camera, BaseShadow> {
		return this._shadowCollection;
	}
	update(camera: Camera) {
		const viewMatrix = camera.viewMatrix;
		let position = this.position.clone();
		// position = position.applyMatrix4(viewMatrix);
		this.positionVC = position;
	}
}
