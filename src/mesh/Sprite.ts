import { SpriteGeometry } from "../geometry/SpriteGeometry";
import { SpriteMaterial } from "../material/SpriteMaterial";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { Mesh } from "./Mesh";

export class Sprite extends Mesh {
	constructor() {
		super();
		this.material = new SpriteMaterial();
		this.geometry = new SpriteGeometry();
	}
	setTexture(texture: Texture) {
		this.material.baseTexture = texture;
	}
	setSampler(sampler: Sampler) {
		this.material.baseSampler = sampler;
	}
}
