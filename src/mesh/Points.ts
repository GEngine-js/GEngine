import Geometry from "../geometry/Geometry";
import PointGeometry from "../geometry/PointGeometry";
import { Material } from "../material/Material";
import { Mesh } from "./Mesh";

export class Points extends Mesh {
	public size: number;
	private _vertexColor: boolean;
	private _vertexSize;
	constructor(geo: Geometry, mat: Material, pointCount = 1) {
		super(geo.type === "pointGeometry" ? geo : new PointGeometry(), mat);
		this.addAttributesToGeometry(geo);
		this.instanceCount = pointCount;
		this.frustumCull = false;
		this.size = 0.1;
		this._vertexColor = false;
		this._vertexSize = false;
	}
	get vertexColor(): boolean {
		return this._vertexColor;
	}
	set vertexColor(value: boolean) {
		this._vertexColor = value;
		this.material.shaderSource.setDefines({ VERTEX_COLOR: value });
	}
	get vertexSize(): boolean {
		return this._vertexSize;
	}
	set vertextSize(value) {
		this._vertexSize = value;
		this.material.shaderSource.setDefines({ VERTEX_SIZE: value });
	}
	private addAttributesToGeometry(geo: Geometry) {
		if (geo.type === "pointGeometry") return;
		const attributes = geo?.defaultVertexBuffer.attributes.values;
		attributes.forEach((attribute) => this.geometry.setAttribute(attribute));
	}
}
