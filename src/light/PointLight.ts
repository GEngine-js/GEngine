import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class PointLight extends Light{
    distance: number;
    decay: number;
    constructor(color:Vector3, intensity:number, distance:number = 0, decay:number = 1){
        super(color,intensity);
        this.distance=distance;
        this.decay=decay;
        this.type='point'
    }
}
//uniform
// color: {},
// position: {},
// decay: {},
// distance: {}