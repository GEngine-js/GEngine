/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-23 11:14:15
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-11 17:40:05
 * @FilePath: \GEngine\src\camera\PerspectiveCamera.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CullingVolume from "../core/CullingVolume";
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
    this.top = this.near * Math.tan(0.5 * this.fov);
    this.height = 2 * this.top;
    this.width = this.aspect * this.height;
    this.left = -0.5 * this.width;
  }
  protected updateProjectionMatrix() {
    if (this.projectMatrixDirty) {
      this.updateCameraParms();
      this.projectionMatrix = Matrix4.makePerspective(
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
