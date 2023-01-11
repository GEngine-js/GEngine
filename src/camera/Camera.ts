
import CullingVolume from "../core/CullingVolume";
import Matrix4 from "../math/Matrix4";
import Plane from "../math/Plane";
import Vector3 from "../math/Vector3";

export default class Camera {
    top: number;
    bottom: number;
    left: number;
    private _near: number;
    private _far: number;
    private _up: Vector3;
    private _direction: Vector3;
    private _right: Vector3;
    private _projectionMatrix: Matrix4;
    private _viewMatrix: Matrix4;
    private _inverseViewMatrix: Matrix4;
    position: Vector3;
    _target:Vector3;
    targetDirty:boolean;
    dirUpRightDirty: boolean;
    projectMatrixDirty: boolean;
    cullingVolume: any;
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
        this._projectionMatrix = new Matrix4();
        this._inverseViewMatrix = new Matrix4();
        this._viewMatrix = new Matrix4();
        this.cullingVolume = new CullingVolume();
    }
    get projectionMatrix(): Matrix4 {
        this.updateProjectionMatrix();
        return this._projectionMatrix;
    }
    
      set projectionMatrix(v: Matrix4) {
        this._projectionMatrix = v;
      }
    
      get inverseViewMatrix(): Matrix4 {
        this.updateInverseViewMatrix();
        return this._inverseViewMatrix;
      }
      get viewMatrix(): Matrix4 {
        this.updateViewMatrix();
        return this._viewMatrix;
      }
    
      set viewMatrix(v: Matrix4) {
        this._viewMatrix = v;
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
        this._up = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
    private updateDirUpRight() {
        //暂时这么写
        Vector3.subtract(this.position, this.target, this.direction);
    
        Vector3.normalize(this.direction, this.direction);
    
        Vector3.cross(this.up, this.direction, this.right);
        if (this.right.length() === 0) {
          // up and z are parallel
          if (Math.abs(this.up.z) === 1) {
            this.direction.x += 0.0001;
          } else {
            this.direction.z += 0.0001;
          }
          this.direction = Vector3.normalize(this.direction, new Vector3());
          Vector3.cross(this.up, this.direction, this.right);
          // _x.crossVectors( up, _z );
        }
    
        Vector3.normalize(this.right, this.right);
    
        Vector3.cross(this.direction, this.right, this.up);
      }
    private updateInverseViewMatrix() {
        this.updateViewMatrix();
        Matrix4.inverseTransformation(this._viewMatrix, this._inverseViewMatrix);
    }
    private updateViewMatrix() {
        // if (this.targetDirty){
        this.targetDirty = false;
        this.updateDirUpRight();
        Matrix4.computeView(
          this.position,
          this.direction,
          this.up,
          this.right,
          this._viewMatrix
        );
        //}
      }
    protected updateProjectionMatrix(){}
    /**
   * get a culling volume for this frustum.
   */
  getCullingVolume() {
    const cloneViewMatrix = this.viewMatrix.clone(new Matrix4());
    const vpMatrix = Matrix4.multiply(
      this.projectionMatrix,
      cloneViewMatrix,
      new Matrix4()
    );
    const planes = this.cullingVolume.planes;
    const me = vpMatrix;
    const me0 = me[0],
      me1 = me[1],
      me2 = me[2],
      me3 = me[3];
    const me4 = me[4],
      me5 = me[5],
      me6 = me[6],
      me7 = me[7];
    const me8 = me[8],
      me9 = me[9],
      me10 = me[10],
      me11 = me[11];
    const me12 = me[12],
      me13 = me[13],
      me14 = me[14],
      me15 = me[15];
    planes[0] = new Plane(
      new Vector3(me3 - me0, me7 - me4, me11 - me8),
      me15 - me12
    );
    planes[0].normalize();
    planes[1] = new Plane(
      new Vector3(me3 + me0, me7 + me4, me11 + me8),
      me15 + me12
    );
    planes[1].normalize();

    planes[2] = new Plane(
      new Vector3(me3 + me1, me7 + me5, me11 + me9),
      me15 + me13
    );
    planes[2].normalize();

    planes[3] = new Plane(
      new Vector3(me3 - me1, me7 - me5, me11 - me9),
      me15 - me13
    );
    planes[3].normalize();

    planes[4] = new Plane(
      new Vector3(me3 - me2, me7 - me6, me11 - me10),
      me15 - me14
    );
    planes[4].normalize();

    planes[5] = new Plane(
      new Vector3(me3 + me2, me7 + me6, me11 + me10),
      me15 + me14
    );
    planes[5].normalize();

    return this.cullingVolume;
  }
}