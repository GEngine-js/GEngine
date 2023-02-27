import Geometry from "./Geometry";
import { Float32Attribute } from "../render/Attribute";
import { createBox } from "../utils/GeometryUtils";
export default class BoxGeometry extends Geometry {
	constructor(public width: number = 10, public height: number = 10, public depth: number = 10) {
		super({});
		this.type = "box";
		this.init();
	}
	private init() {
		//generate pos uv normal so on
		const { positions, normals, uvs } = createBox({
			dimensions: [this.depth, this.width, this.height]
		});
		this.positions = positions;
		this.normals = normals;
		this.uvs = uvs;
		this.computeBoundingSphere(this.positions);
		this.setAttribute(new Float32Attribute("position", this.positions, 3));
		this.setAttribute(new Float32Attribute("normal", this.normals, 3));
		this.setAttribute(new Float32Attribute("uv", this.uvs, 2));
		this.count = 36;
	}
	public update(frameState) {}
	destroy() {}
}
