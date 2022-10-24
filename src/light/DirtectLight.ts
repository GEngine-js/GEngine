import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class DirtectLight extends Light{
    intensity: number;
    dirtect: Vector3;
    constructor(color:Color, intensity:number,dirtect :Vector3=new Vector3(1,1,0)){
        super(color);
        this.intensity=intensity;
        this.type='dirtect';
        this.dirtect=dirtect;
    }
}