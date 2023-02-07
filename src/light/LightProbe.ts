import SphericalHarmonics3 from "../math/SphericalHarmonics3";
import { Light } from "./Light";

export class LightProbe extends Light {
  public sh: SphericalHarmonics3;
  constructor(sh = new SphericalHarmonics3(), intensity: number = 1) {
    super(undefined, intensity);
    this.type = "lightProbe";
    this.sh = sh;
  }
}
