/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-11-13 17:27:40
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 10:21:28
 * @FilePath: \GEngine\src\mesh\Axes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FrameState } from "../core/FrameState";
import { PrimitiveTopology } from "../core/WebGPUConstant";
import Geometry from "../geometry/Geometry";
import ColorMaterial from "../material/ColorMaterial";
import { Float32Attribute } from "../render/Attribute";
import { Mesh } from "./Mesh";
export default class Axes extends Mesh {
  type: string;
  material: ColorMaterial;
  constructor() {
    super();
    this.distanceToCamera = 10;
    this.material = new ColorMaterial();
    this.material.wireframe=true;
    this.init();
  }
  update(frameState: FrameState) {
    this.updateMatrix();
    this.material.update(frameState, this);
    frameState.renderQueue.opaque.push(this);
  }
  private init() {
    const position = [
      0, 0, 0,
      1, 0, 0,
      0, 0, 0,
      0, 1, 0,
      0,0, 0,
      0, 0, 1,
    ];
    const colors = [
      1, 0, 0, 1,
      1, 0.5, 0.5, 1,
      0, 1, 0, 1,
      0.5, 1, 0.5, 1,
      0, 0, 1, 1,
      0.5, 0.5, 1, 1,
    ]
    const indices = [0, 1, 2, 3, 4, 5];
    this.geometry = new Geometry({});
    this.geometry.setAttribute(new Float32Attribute('position', position,3));
    this.geometry.setAttribute(new Float32Attribute('color', colors,4))
    this.geometry.setIndice(indices);
    this.geometry.count=indices.length;
  }
}
