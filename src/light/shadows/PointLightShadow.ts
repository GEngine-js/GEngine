import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";
import PerspectiveCamera from "../../camera/PerspectiveCamera";

export class PointLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new PerspectiveCamera(90, 1, 0.5, 500);
		super(1024, camera);
		this.type = "pointLightShadow";
	}
}
