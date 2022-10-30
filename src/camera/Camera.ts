import Matrix4 from "../math/Matrix4";
import Vector3 from "../math/Vector3";

export default class Camera {
    top: number;
    bottom: number;
    right: number;
    left: number;
    private _near: number;
    private _far: number;
    private _cameraUp: Vector3;
    private _cameraDirection: Vector3;
    private _cameraRight: Vector3;
    position: Vector3;
    target:Vector3;
    dirUpRightDirty: boolean;
    projectMatrixDirty: boolean;
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.right = 0;
        this.left = 0;
        this.position=new Vector3(0,0,0)
        this._cameraUp = new Vector3(0, 1, 0);
        this._cameraDirection = new Vector3(0, 0, 1);
        this._cameraRight = new Vector3(1, 0, 0);
        this.dirUpRightDirty = false;
        this.projectMatrixDirty=false;
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
    get cameraUp() {
        return this._cameraUp;
    }
    set cameraUp(up) {
        this.dirUpRightDirty = true;
        this._cameraUp = up;
    }
    get cameraDirection() {
        return this._cameraDirection;
    }
    set cameraDirection(up) {
        this.dirUpRightDirty = true;
        this._cameraDirection = up;
    }
    get cameraRight() {
        return this._cameraRight;
    }
    set cameraRight(up) {
        this.dirUpRightDirty = true;
        this._cameraRight = up;
    }
}