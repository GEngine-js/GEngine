import { SpriteGeometry } from "../geometry/SpriteGeometry";
import { SpriteMaterial } from "../material/SpriteMaterial";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import { Mesh } from "./Mesh";

export class Sprite extends Mesh {
	public rotation: number;
	public center: Vector2;
	public color: Color;
	public opacity: number;
	constructor() {
		super();
		this.material = new SpriteMaterial();
		this.geometry = new SpriteGeometry();
		this.rotation = Math.PI;
		this.opacity = 1;
		this.center = new Vector2(0, 0);
		this.color = new Color(1, 0, 0);
	}
	setTexture(texture: Texture) {
		this.material.baseTexture = texture;
	}
	setSampler(sampler: Sampler) {
		this.material.baseSampler = sampler;
	}
}
