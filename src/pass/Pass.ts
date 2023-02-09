import RenderTarget from "../render/RenderTarget.js";
import { Material } from "../material/Material.js";
import Context from "../render/Context.js";
import { Target } from "../render/RenderState";
import Texture from "../render/Texture.js";
import RenderQueue from "../core/RenderQueue.js";

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
	render(renderQueue: RenderQueue): void {}
	beforRender() {
		this.passRenderEncoder = this.renderTarget.beginRenderPassEncoder(this.context);
		if (this.computeTarget) this.passComputeEncoder = this.computeTarget.beginComputePassEncoder(this.context);
	}
	getColorTexture(index: number = 0): Texture {
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
