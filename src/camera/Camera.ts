import Matrix4 from "../math/Matrix4";
import Vector3 from "../math/Vector3";

export default class Camera{
    projectionMatrix: Matrix4;
    top: number;
    bottom: number;
    right: number;
    left: number;
    near: number;
    far: number;
    // up:Vector3;
    // direction:Vector3;
    // right:Vector3;
    constructor(){
        this.projectionMatrix=new Matrix4();
        this.top=0;
        this.bottom = 0;
        this.right = 0;
        this.left = 0;
        this.near = 0;
        this.far = 0;
    }
}