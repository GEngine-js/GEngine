import Context from "../render/Context";
import Texture from "../render/Texture";
import PostEffect from "./PostEffect";

export default class PostEffectCollection {
	private _postEffects: Map<string, PostEffect>;
	public currentColorTexture: Texture;
	constructor() {
		this._postEffects = new Map();
		this.currentColorTexture = undefined;
	}
	add(postEffect: PostEffect) {
		this._postEffects.set(postEffect.id, postEffect);
	}
	remove(postEffect: PostEffect) {
		this._postEffects.delete(postEffect.id);
		postEffect.destroy();
	}
	render(context: Context, colorTexture: Texture): Texture {
		this.currentColorTexture = colorTexture;
		this._postEffects.forEach((postEffect) => {
			this.currentColorTexture = postEffect.render(context, this.currentColorTexture);
		});
		return this.currentColorTexture;
	}
	private postEffectsSort() {
		//this._postEffects.sort()
	}
}
