import { Float32Attribute } from "../render/Attribute";
import { createBox } from "../utils/GeometryUtils";
import Geometry from "./Geometry";
export default class BoxGeometry extends Geometry {
	constructor(public width: number = 10, public height: number = 10, public depth: number = 10) {
		super({
			type: "boxGeometry"
		});
		this.defines = {
			HAS_NORMAL: true
		};
		this.init();
	}
	private init() {
		// generate pos uv normal so on
		const { positions, normals, uvs } = createBox({
			dimensions: [this.depth, this.width, this.height]
		});
		this.computeBoundingSphere(positions);
		this.setAttribute(new Float32Attribute("position", positions, 3));
		this.setAttribute(new Float32Attribute("normal", normals, 3));
		this.setAttribute(new Float32Attribute("uv", uvs, 2));
		this.count = 36;
	}
}
