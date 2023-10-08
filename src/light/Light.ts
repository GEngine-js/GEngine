import RenderObject from "../core/RenderObject";
import { LightType, RenderObjectType } from "../core/WebGPUTypes";
import Vector3 from "../math/Vector3";
import { BaseShadow } from "./shadows/BaseShadow";

export class Light extends RenderObject {
	private _color: Vector3;
	type: RenderObjectType;
	private _intensity: number;
	dirty: boolean;
	colorDirty: boolean;
	shadowDirty: boolean;
	intensityDirty: boolean;
	positionDirty: boolean;
	private _shadow: BaseShadow | null;
	public targetDirty: boolean;
	public lightType: LightType;

	constructor(color: Vector3, intensity: number) {
		super();
		this.type = RenderObjectType.Light;
		this._color = Vector3.multiplyByScalar(color, intensity, new Vector3());
		this._intensity = intensity;
		this._position = new Vector3(0, 1, 0);
		this._target = new Vector3();
		this.positionDirty = true;
		this.targetDirty = true;
		this.colorDirty = true;
		this.shadowDirty = true;
		this.intensityDirty = true;
		this._shadow = null;
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
		this.shadowDirty = true;
		this._shadow = value;
	}
}
