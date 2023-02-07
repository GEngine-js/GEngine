import CullingVolume from "../core/CullingVolume";
import GMath from "../math/Math";
import Matrix4 from "../math/Matrix4";
import Camera from "./Camera";
export default class PerspectiveCamera extends Camera {
  xOffset: number;
  yOffset: number;
  cullingVolume: any;
  private _aspect: number;
  private _fov: number;
  height: number;
  width: number;
  isPerspectiveCamera: boolean;
  near: number;
  far: number;
  top: number;
  left: number;
  constructor(
    fov: number = 50,
    aspect: number = 1,
    near: number = 0.1,
    far: number = 2000
  ) {
    super();
    this._aspect = aspect;
    this.fov = fov;
    this.near = near;
    this.far = far;
    this.xOffset = 0;
    this.yOffset = 0;
    this.projectMatrixDirty = true;
    this.updateCameraParms();
    this.cullingVolume = new CullingVolume();
    this.isPerspectiveCamera = true;
  }
  get aspect(): number {
    return this._aspect;
  }

  set aspect(v: number) {
    this.projectMatrixDirty = true;
    this._aspect = v;
  }
  get fov(): number {
    return this._fov;
  }

  set fov(v: number) {
    this.projectMatrixDirty = true;
    this._fov = v;
  }
  private updateCameraParms() {
    this.top = this.near * Math.tan(0.5 * GMath.RADIANS_PER_DEGREE * this.fov);
    this.height = 2 * this.top;
    this.width = this.aspect * this.height;
    this.left = -0.5 * this.width;
  }
  public updateProjectionMatrix() {
    if (this.projectMatrixDirty) {
      this.updateCameraParms();
      this._projectionMatrix = Matrix4.makePerspective(
        this.left,
        this.left + this.width,
        this.top,
        this.top - this.height,
        this.near,
        this.far
      );
      this.projectMatrixDirty = false;
    }
  }
}
