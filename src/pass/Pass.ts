import { FrameState } from "../core/FrameState.js";
import { Material } from "../material/Material.js";
import Context from "../render/Context.js";
import { Target } from "../render/RenderState";
import RenderTarget from "../render/RenderTarget.js";
import Texture from "../render/Texture.js";

class Pass {
	public renderTarget: RenderTarget;
	public computeTarget: RenderTarget;
	public context: Context;
	public overrideMaterial?: Material;
	public colorTargets?: Array<Target>;
	public passRenderEncoder: GPURenderPassEncoder | null;
	public passComputeEncoder: GPUComputePassEncoder;
	constructor(context: Context) {
		this.context = context;
	}
	render(frameState: FrameState): void {}
	beforeRender(options?: any) {
		this.passRenderEncoder = this.renderTarget.beginRenderPassEncoder(this.context);
		if (this.computeTarget) this.passComputeEncoder = this.computeTarget.beginComputePassEncoder(this.context);
	}
	getColorTexture(index = 0): Texture {
		return this.renderTarget.getColorTexture(index) as Texture;
	}
	getDepthTexture(): Texture | { gpuTexture: GPUTexture } {
		return this.renderTarget.getDepthTexture();
	}
	afterRender() {
		this.renderTarget.endRenderPassEncoder();
		if (this.computeTarget) this.computeTarget.endComputePassEncoder();
	}
}

export default Pass;
