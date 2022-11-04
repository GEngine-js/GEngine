import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class SpotLight extends Light{
    private _distance: number;
    private _angle: number;
    private _penumbra: number;
    private _decay: number;
    public target: Vector3;
    decayDirty: boolean;
    distanceDirty: boolean;
    private _coneCos: number;
    private _penumbraCos: number;
    coneCosDirty: boolean;
    penumbraDirty: boolean;
    angleDirty: boolean;
    constructor(color, intensity, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 1){
        super(color, intensity);
        this._distance=distance;
        this._angle=angle;
        this._penumbra=penumbra;
        this._decay=decay;
        this.type='spot';
        this.target=new Vector3(0,0,0);
        this.updateConeCosOrPenumbraCos()
    }
    get dirtect(){
        const result=new Vector3()
         Vector3.subtract(this.position,this.target,result);
         return result;
    }
    get angle(){
        return this._angle;
    }
    set angle(value){
        this.angleDirty = true;
       this._angle=value;
       this.updateConeCosOrPenumbraCos()
    }
    get penumbra(){
        return this._penumbra;
    }
    set penumbra(value){
        this.penumbraDirty = true;
        this._penumbra=value;
        this.updateConeCosOrPenumbraCos()
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
    set coneCos(value) {
        this.coneCosDirty = true;
        this._coneCos = value;
    }
    get coneCos() {
        return this._coneCos;
    }
    private updateConeCosOrPenumbraCos(){
        this._coneCos= Math.cos( this.angle );
        this._penumbraCos= Math.cos( this.angle * ( 1 - this.penumbra ) );
    } 
}
//uniform
// color: {},
// position: {},
// direction: {},
// distance: {},
// coneCos: {},
// penumbraCos: {},
// decay: {}