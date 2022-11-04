import RenderObject from "../core/RenderObject";
import Color from "../math/Color";
import Vector3 from "../math/Vector3";

export class Light{
    private _color:Vector3;
    type:string;
    private _intensity:number
    dirty: boolean;
    colorDirty: boolean;
    intensityDirty: boolean;
    private _position: Vector3;
    positionDirty: boolean;
    constructor(color:Vector3,intensity:number){
        this._color=color;
        this._intensity=intensity;
        this._position=new Vector3(0,0,0);
        this.positionDirty=true;
        this.colorDirty=true;
        this.intensityDirty=true;
    }
    get position(){
        return this._position;
    }
    set position(value){
        this.positionDirty=true;
        this._position=value;
    }
    get color(){
       return this._color;
    }
    set color(value){
        this.colorDirty=true;
        this._color=value;
     }
    set intensity(value){
       this.intensityDirty=true;
       this._intensity=value;
    }
    get intensity(){
        return this._intensity;
     }
}