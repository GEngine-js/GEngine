import BillboardGeometry from "../geometry/BillboardGeometry";
import { BillboardMaterial } from "../material/BillboardMaterial";
import Texture from "../render/Texture";
import { Mesh } from "./Mesh";

export class Billboard extends Mesh {
	constructor() {
		super();
		this.material = new BillboardMaterial();
		this.geometry = new BillboardGeometry();
	}
	setTexture(texture: Texture) {
		this.material.baseTexture = texture;
	}
	// set center(){

	// }
}
