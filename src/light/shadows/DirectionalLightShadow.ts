import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";
import OrthographicCamera from "../../camera/OrthographicCamera";

export class DirectionalLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new OrthographicCamera(-5, 5, 5, -5, 0.5, 500);
		super(1024, camera);
		this.type = "directionalLightShadow";
	}
}
