import RenderObject from "../core/RenderObject";
import Color from "../math/Color";
import Vector3 from "../math/Vector3";

export class Light extends RenderObject{
    lightColor:Vector3;
    type:string;
    intensity:number
    constructor(lightColor:Vector3,intensity:number){
        super();
        this.lightColor=lightColor;
        this.intensity=intensity;
    }
}