import Vector2 from "../../math/Vector2";
import { BaseShadow } from "./BaseShadow";

export class CascadedShadow extends BaseShadow {
	constructor() {
		super(new Vector2(1024, 1024), undefined);
	}
}
