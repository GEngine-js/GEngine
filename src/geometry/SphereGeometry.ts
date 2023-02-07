/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-24 19:41:12
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 16:56:45
 * @FilePath: \GEngine\src\geometry\SphereGeometry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Float32Attribute } from "../render/Attribute";
import { createSphere } from "../utils/GeometryUtils";
import Geometry from "./Geometry";

export default class SphereGeometry extends Geometry {
  normals: number[];
  uvs: number[];
  positions: number[];
  indices: number[];
  constructor() {
    super({});
    this.type = "sphere";
    this.init();
  }
  private init() {
    const { positions, normals, uvs, indices } = createSphere({});
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;
    this.computeBoundingSphere(this.positions);
    this.setAttribute(new Float32Attribute("position", this.positions, 3));
    this.setAttribute(new Float32Attribute("normal", this.normals, 3));
    this.setAttribute(new Float32Attribute("uv", this.uvs, 2));

    this.setIndice(this.indices);
    this.count = this.indices.length;
  }
}
