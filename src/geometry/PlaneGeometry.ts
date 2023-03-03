import Geometry from "./Geometry";
import { Float32Attribute } from "../render/Attribute";
export default class PlaneGeometry extends Geometry {
	constructor(public width: number = 10, public height: number = 10) {
		super({});
		this.type = "planeGeometry";
		this.defines = {
			HAS_NORMAL: true
		};
		this.init();
	}
	private init() {
		//generate pos uv normal so on
		const { indices, normals, uvs, vertices } = this.createGrid(this.width, this.height);
		this.positions = vertices;
		this.normals = normals;
		this.uvs = uvs;
		this.indices = indices;
		this.computeBoundingSphere(this.positions);
		this.setAttribute(new Float32Attribute("positions", this.positions, 3));
		this.setAttribute(new Float32Attribute("normals", this.normals, 3));
		this.setAttribute(new Float32Attribute("uvs", this.uvs, 2));
		this.setIndice(indices);
		this.count = this.indices.length;
		// this.count = 36;
	}
	public update(frameState) {}
	private createGrid(width: number = 1, height: number = 1, widthSegments: number = 1, heightSegments: number = 1) {
		const width_half = width / 2;
		const height_half = height / 2;

		const gridX = Math.floor(widthSegments);
		const gridY = Math.floor(heightSegments);

		const gridX1 = gridX + 1;
		const gridY1 = gridY + 1;

		const segment_width = width / gridX;
		const segment_height = height / gridY;

		//

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		for (let iy = 0; iy < gridY1; iy++) {
			const y = iy * segment_height - height_half;

			for (let ix = 0; ix < gridX1; ix++) {
				const x = ix * segment_width - width_half;

				vertices.push(x, -y, 0);

				normals.push(0, 0, 1);

				uvs.push(ix / gridX);
				uvs.push(1 - iy / gridY);
			}
		}

		for (let iy = 0; iy < gridY; iy++) {
			for (let ix = 0; ix < gridX; ix++) {
				const a = ix + gridX1 * iy;
				const b = ix + gridX1 * (iy + 1);
				const c = ix + 1 + gridX1 * (iy + 1);
				const d = ix + 1 + gridX1 * iy;

				indices.push(a, b, d);
				indices.push(b, c, d);
			}
		}
		return { indices, normals, uvs, vertices };
	}
	destroy() {}
}
