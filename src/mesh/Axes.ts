import { FrameState } from "../core/FrameState";
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
    this.geometry = new Geometry();
    this.geometry.setAttribute(new Float32Attribute('position', position,3));
    this.geometry.setAttribute(new Float32Attribute('color', position,4))
    this.geometry.setIndice(indices);
    this.geometry.count=indices.length;
  }
}
