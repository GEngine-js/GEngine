import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";
import PerspectiveCamera from "../../camera/PerspectiveCamera";

export class PointLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new PerspectiveCamera(60, 1, 0.1, 500);
		super(1024, camera);
		this.type = "pointLightShadow";
	}
}
