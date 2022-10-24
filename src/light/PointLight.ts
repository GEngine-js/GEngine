import Color from "../math/Color";
import { Light } from "./Light";

export class PointLight extends Light{
    distance: number;
    decay: number;
    constructor(color:Color, intensity:number, distance:number = 0, decay:number = 1){
        super(color,intensity);
        this.distance=distance;
        this.decay=decay;
        this.type='point'
    }
}