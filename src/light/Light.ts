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
	private _target: Vector3;
	positionDirty: boolean;
	public _shadow: BaseShadow;
	public positionVC: Vector3;
	public targetDirty: boolean;
	public isLight: boolean;

	constructor(color: Vector3, intensity: number) {
		this._color = Vector3.multiplyByScalar(color, intensity, new Vector3());
		this._intensity = intensity;
		this._position = new Vector3(0, 1, 0);
		this._target = new Vector3();
		this.positionDirty = true;
		this.targetDirty = true;
		this.colorDirty = true;
		this.intensityDirty = true;
		this._shadow = null;
		this.isLight = true;
	}

	get position() {
		return this._position;
	}

	set position(value) {
		this.positionDirty = true;
		this._position = value;
	}

	get target() {
		return this._target;
	}

	set target(value) {
		this.targetDirty = true;
		this._target = value;
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

	get shadow() {
		return this._shadow;
	}

	set shadow(value) {
		this._shadow = value;
	}

	update(camera: Camera) {
		let position = this.position.clone();
		this.positionVC = position;
	}
}
