import Color from "../math/Color";
import Vector3 from "../math/Vector3";
import { LightProbe } from "./LightProbe";

export class HemisphereLightProbe extends LightProbe {
  constructor(skyColor, groundColor, intensity = 1) {
    super(undefined, intensity);
    const color1 = new Color().set(skyColor);
    const color2 = new Color().set(groundColor);

    const sky = new Vector3(color1.red, color1.green, color1.blue);
    const ground = new Vector3(color2.red, color2.green, color2.blue);

    // without extra factor of PI in the shader, should = 1 / Math.sqrt( Math.PI );
    const c0 = Math.sqrt(Math.PI);
    const c1 = c0 * Math.sqrt(0.75);

    this.sh.coefficients[0].copy(sky).add(ground).multiplyByScalar(c0);
    this.sh.coefficients[1].copy(sky).subtract(ground).multiplyByScalar(c1);
  }
}
