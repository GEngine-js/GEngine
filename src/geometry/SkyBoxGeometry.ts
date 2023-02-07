import { Float32Attribute } from "../render/Attribute";
import Geometry from "./Geometry";
export default class SkyBoxGeometry extends Geometry {
  position: number[];
  indices: number[];
  constructor() {
    super({});
    this.init();
  }
  public update(frameState) {
    const { device } = frameState.context;
  }
  public init() {
    this.position = [
      1.0,
      1.0,
      1.0, // 0
      -1.0,
      1.0,
      1.0, // 1
      1.0,
      -1.0,
      1.0, // 2
      -1.0,
      -1.0,
      1.0, // 3
      1.0,
      1.0,
      -1.0, // 4
      -1.0,
      1.0,
      -1.0, // 5
      1.0,
      -1.0,
      -1.0, // 6
      -1.0,
      -1.0,
      -1.0, // 7
    ];
    this.indices = [
      // PosX (Right)
      0, 2, 4, 6, 4, 2,

      // NegX (Left)
      5, 3, 1, 3, 5, 7,

      // PosY (Top)
      4, 1, 0, 1, 4, 5,

      // NegY (Bottom)
      2, 3, 6, 7, 6, 3,

      // PosZ (Front)
      0, 1, 2, 3, 2, 1,

      // NegZ (Back)
      6, 5, 4, 5, 6, 7,
    ];
    this.setAttribute(new Float32Attribute("position", this.position, 3));
    this.setIndice(this.indices);
    this.count = this.indices.length;
  }
}
