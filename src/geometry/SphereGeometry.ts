import { Float32Attribute } from "../render/Attribute";
import { createSphere } from "../utils/GeometryUtils";
import Geometry from "./Geometry";

export default class SphereGeometry extends Geometry {
	radius: number;
	constructor(radius: number) {
		super({
			type: "sphereGeometry"
		});
		this.defines = {
			HAS_NORMAL: true
		};
		this.radius = radius;
		this.init();
	}
	private init() {
		const { positions, normals, uvs, indices } = createSphere({ radius: this.radius });
		// this.positions = positions;
		// this.normals = normals;
		// this.uvs = uvs;
		// this.indices = indices;
		this.computeBoundingSphere(positions);
		this.setAttribute(new Float32Attribute("position", positions, 3));
		this.setAttribute(new Float32Attribute("normal", normals, 3));
		this.setAttribute(new Float32Attribute("uv", uvs, 2));

		this.setIndice(indices);
		this.count = indices.length;
	}
}
