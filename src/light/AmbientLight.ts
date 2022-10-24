import Color from "../math/Color";
import { Light } from "./Light";

export class AmbientLight extends Light {
    intensity: number;
    constructor(color:Color, intensity:number){
        super(color,intensity);
        this.type='ambient';
    }
}
//light.color ).multiplyScalar( light.intensity * scaleFactor );