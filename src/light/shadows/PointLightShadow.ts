import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";
import PerspectiveCamera from "../../camera/PerspectiveCamera";

export class PointLightShadow extends BaseShadow {
	constructor(light: Light) {
		const camera = new PerspectiveCamera(90, 1, 0.5, 500);
		super(light, 1024, camera);

		this._light._shadowCollection.set(camera, this);
	}
}
