import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class PointLight extends Light {
    private _distance: number;
    private _decay: number;
    distanceDirty: boolean;
    decayDirty: boolean;
    constructor(color: Vector3, intensity: number, distance: number = 0, decay: number = 1) {
        super(color, intensity);
        this._distance = distance;
        this._decay = decay;
        this.distanceDirty = true;
        this.decayDirty = true;
        this.type = 'point'
    }
    set distance(value) {
        this.distanceDirty = true;
        this._distance = value;
    }
    get distance() {
        return this._distance;
    }
    set decay(value) {
        this.decayDirty = true;
        this._decay = value;
    }
    get decay() {
        return this._decay;
    }
}
//uniform
// color: {},
// position: {},
// decay: {},
// distance: {}