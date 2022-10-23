import Matrix4 from "../math/Matrix4";

export default class PerspectiveFrustum{
    projectionMatrix: Matrix4;
    _top: number;
    _bottom: number;
    _right: number;
    _left: number;
    _near: number;
    _far: number; 
    xOffset: number;
    yOffset: number;
    public set top(v : number) {
        this._top = v;
    }
    public set bottom(v : number) {
        this._bottom = v;
    }
    public set right(v : number) {
        this._right = v;
    }
    public set left(v : number) {
        this._left = v;
    }
    public set near(v : number) {
        this._near = v;
    }
    public set far(v : number) {
        this._far = v;
    }
    constructor(){
       this._bottom=0;
       this._far=1000;
       this._near=1;
       this._left=0;
       this._right=0;
       this._top=0;
       this.xOffset=0;
       this.yOffset=0;
    }
    update(){
        //+this.yOffset
        this.top=this.near * Math.tan(0.5 * this.fovy);
          //+this.yOffset
        this.bottom = -this.top+this.yOffset;
        //this.xOffset;
        this.right = this.aspect * this.top+this.xOffset;
        //this.xOffset;
        this.left = -this.right+this.xOffset;
    }
}