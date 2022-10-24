import RenderObject from "../core/RenderObject";
import Color from "../math/Color";

export class Light extends RenderObject{
    lightColor:Color;
    type:string;
    intensity:number
    constructor(lightColor:Color,intensity:number){
        super();
        this.lightColor=lightColor;
        this.intensity=intensity;
    }
}