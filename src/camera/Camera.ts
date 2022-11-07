import Matrix4 from "../math/Matrix4";
import Vector3 from "../math/Vector3";

export default class Camera {
    top: number;
    bottom: number;
    // right: number;
    left: number;
    private _near: number;
    private _far: number;
    private _up: Vector3;
    private _direction: Vector3;
    private _right: Vector3;
    position: Vector3;
    _target:Vector3;
    targetDirty:boolean;
    dirUpRightDirty: boolean;
    projectMatrixDirty: boolean;
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.position=new Vector3(0,0,0)
        this._up = new Vector3(0, 1, 0);
        this._direction = new Vector3(0, 0, 1);
        this._right = new Vector3(1, 0, 0);
        this.dirUpRightDirty = false;
        this.projectMatrixDirty=false;
        this.targetDirty=false;
        this._target=new Vector3();
    }
    get target(){
        return this._target;
    }
    set target(value){
        this.targetDirty=true;
        this._target=value;
    }
    get near(): number {
        return this._near
    }

    set near(v: number) {
        this.projectMatrixDirty=true;
        this._near = v;
    }
    get far(): number {
        return this._far
    }

    set far(v: number) {
        this.projectMatrixDirty=true;
        this._far = v;
    }
    get up() {
        return this._up;
    }
    set up(value) {
        this.dirUpRightDirty = true;
        this._up = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this.dirUpRightDirty = true;
        this._direction = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this.dirUpRightDirty = true;
        this._right = value;
    }
}