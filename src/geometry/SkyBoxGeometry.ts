import { Float32Attribute } from "../render/Attribute";
import Geometry from "./Geometry";
export default class SkyBoxGeometry extends Geometry {
	constructor() {
		super({
			type: "skyBoxGeometry"
		});
		this.init();
	}
	public init() {
		const positions = [
			1.0,
			1.0,
			1.0, // 0
			-1.0,
			1.0,
			1.0, // 1
			1.0,
			-1.0,
			1.0, // 2
			-1.0,
			-1.0,
			1.0, // 3
			1.0,
			1.0,
			-1.0, // 4
			-1.0,
			1.0,
			-1.0, // 5
			1.0,
			-1.0,
			-1.0, // 6
			-1.0,
			-1.0,
			-1.0 // 7
		];
		const indices = [
			// PosX (Right)
			0, 2, 4, 6, 4, 2,

			// NegX (Left)
			5, 3, 1, 3, 5, 7,

			// PosY (Top)
			4, 1, 0, 1, 4, 5,

			// NegY (Bottom)
			2, 3, 6, 7, 6, 3,

			// PosZ (Front)
			0, 1, 2, 3, 2, 1,

			// NegZ (Back)
			6, 5, 4, 5, 6, 7
		];
		this.setAttribute(new Float32Attribute("position", positions, 3));
		this.setIndice(indices);
		this.count = indices.length;
	}
}
