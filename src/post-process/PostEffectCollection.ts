import Context from "../render/Context";
import Texture from "../render/Texture";
import PostEffect from "./PostEffect";
import ResolvePostEffect from "./ResolvePostEffect";

export default class PostEffectCollection {
	private _postEffects: Map<string, PostEffect>;
	public currentColorTexture: Texture;
	private resolvePostEffect: ResolvePostEffect;
	constructor() {
		this._postEffects = new Map();
		this.currentColorTexture = undefined;
		this.resolvePostEffect = new ResolvePostEffect();
	}
	add(postEffect: PostEffect) {
		this._postEffects.set(postEffect.id, postEffect);
	}
	remove(postEffect: PostEffect) {
		this._postEffects.delete(postEffect.id);
		postEffect.destroy();
	}
	render(context: Context, colorTexture: Texture): void {
		this.currentColorTexture = colorTexture;
		this._postEffects.forEach((postEffect) => {
			this.currentColorTexture = postEffect.render(context, this.currentColorTexture);
		});
		this.resolvePostEffect.render(context, this.currentColorTexture);
	}
	setSize(width: number, height: number) {
		this._postEffects.forEach((postEffect) => postEffect.setSize(width, height));
		this.resolvePostEffect.setSize(width, height);
	}
	private postEffectsSort() {
		// this._postEffects.sort()
	}
}
