import { FrameState } from "../core/FrameState.js";
import Context from "../render/Context.js";
import { Target } from "../render/RenderState.js";
import RenderTarget from "../render/RenderTarget.js";
import Texture from "../render/Texture.js";

class RenderPass {
	public renderTarget: RenderTarget;
	public context: Context;
	public colorTargets?: Array<Target>;
	public passRenderEncoder: GPURenderPassEncoder | null;
	constructor(context: Context) {
		this.context = context;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	update(frameState: FrameState): void {
		// todo;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setSize(width: number, height: number): void {
		// todo ;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	beforeRender(options?: any) {
		this.passRenderEncoder = this.renderTarget.beginRenderPass(this.context.device);
	}
	getColorTexture(index = 0): Texture {
		return this.renderTarget.getColorTexture(index) as Texture;
	}
	getDepthTexture(): Texture | { gpuTexture: GPUTexture } {
		return this.renderTarget.getDepthTexture();
	}
	afterRender() {
		this.renderTarget.endRenderPass();
	}
}

export default RenderPass;
