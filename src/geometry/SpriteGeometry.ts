import { InterleavedFloat32Attribute } from "../render/Attribute";
import Geometry from "./Geometry";
export class SpriteGeometry extends Geometry {
	constructor() {
		super({
			type: "spriteGeometry"
		});
		this.init();
	}
	private init() {
		// xyz、uv
		const vertices = [-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1];
		const indices = [0, 1, 2, 0, 2, 3];
		this.computeBoundingSphere(vertices, 5);
		this.setAttribute(new InterleavedFloat32Attribute(["position", "uv"], vertices, [3, 2]));
		this.setIndice(indices);
		this.count = indices.length;
	}
}
