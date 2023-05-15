import Context from "../render/Context";
import Texture from "../render/Texture";
import PostEffect from "./PostEffect";
import ResolveFrame from "./ResolveFrame";

export default class PostEffectCollection {
	private _postEffects: Map<string, PostEffect>;
	public currentColorTexture: Texture;
	private resolveFrame: ResolveFrame;
	constructor() {
		this._postEffects = new Map();
		this.currentColorTexture = undefined;
		this.resolveFrame = new ResolveFrame();
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
		this.resolveFrame.render(context, this.currentColorTexture);
	}
	setResolveFrameDirty(value: boolean) {
		this.resolveFrame.material.dirty = value;
	}
	private postEffectsSort() {
		// this._postEffects.sort()
	}
}
