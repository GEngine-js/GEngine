import { Light } from "../Light";
import { BaseShadow } from "./BaseShadow";
import OrthographicCamera from "../../camera/OrthographicCamera";

export class DirectionalLightShadow extends BaseShadow {
	public type: string;
	constructor() {
		const camera = new OrthographicCamera(-50, 50, 50, -50, 0, 100);
		super(1024, camera);
		this.type = "directionalLightShadow";
	}
}
