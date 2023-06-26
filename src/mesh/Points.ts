import Geometry from "../geometry/Geometry";
import PointGeometry from "../geometry/PointGeometry";
import { Material } from "../material/Material";
import { Mesh } from "./Mesh";

export class Points extends Mesh {
	constructor(geo: Geometry, mat: Material, pointCount = 1) {
		super(geo.type === "pointGeometry" ? geo : new PointGeometry(), mat);
		this.addAttributesToGeometry(geo);
		this.instanceCount = pointCount;
		this.frustumCull = false;
	}
	private addAttributesToGeometry(geo: Geometry) {
		if (geo.type === "pointGeometry") return;
		const attributes = geo?.defaultVertexBuffer.attributes.values;
		attributes.forEach((attribute) => this.geometry.setAttribute(attribute));
	}
}
