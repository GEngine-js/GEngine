import Matrix4 from "../math/Matrix4";
import Vector3 from "../math/Vector3";

export default class Camera{
    projectionMatrix: Matrix4;
    viewMatrix:Matrix4;
    top: number;
    bottom: number;
    right: number;
    left: number;
    near: number;
    far: number;
    cameraUp:Vector3;
    cameraDirection:Vector3;
    cameraRight:Vector3;
    position:Vector3;
    constructor(){
        this.projectionMatrix=new Matrix4();
        this.viewMatrix=new Matrix4();
        this.top=0;
        this.bottom = 0;
        this.right = 0;
        this.left = 0;
        this.near = 0;
        this.far = 0;
        this.cameraUp=new Vector3(0,1,0);
        this.cameraDirection=new Vector3(0,0,1);
        this.cameraRight=new Vector3(1,0,0);
    }
}