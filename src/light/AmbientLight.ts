import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class AmbientLight extends Light {
  constructor(color: Vector3, intensity: number) {
    super(color, intensity);
    this.type = "ambient";
  }
}
//light.color ).multiplyScalar( light.intensity * scaleFactor );
