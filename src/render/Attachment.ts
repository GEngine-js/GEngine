import { AttachmentOptions } from "../core/WebGPUTypes";
import Texture from "./Texture";

class Attachment {
	public op: GPULoadOp = "clear";
	public storeOp: GPUStoreOp = "store";

	public texture?: Texture;
	public resolveTarget?: Texture;
	public textureView?: () => GPUTextureView | GPUTextureView;
	public readOnly?: boolean;

	constructor(public value: GPUColorDict | GPUColor | number, options?: AttachmentOptions) {
		Object.assign(this, options);
	}
	getGPURenderPassColorAttachment(device: GPUDevice): GPURenderPassColorAttachment {
		this?.texture?.update?.(device);
		return {
			view:
				// 暂时这么写
				(this?.textureView?.() || this?.textureView) ?? this.texture.textureView,
			resolveTarget: this?.resolveTarget?.textureView,
			clearValue: this.value,
			loadOp: this.op,
			storeOp: this.storeOp
		} as GPURenderPassColorAttachment;
	}
	getGPURenderPassDepthAttachment(device: GPUDevice): GPURenderPassDepthStencilAttachment {
		this?.texture?.update?.(device);
		return {
			view: this?.texture?.textureView || undefined,
			depthLoadOp: this?.op || "clear",
			depthClearValue: this?.value || 1.0,
			depthStoreOp: this?.storeOp || "store",
			depthReadOnly: this?.readOnly || false
		} as GPURenderPassDepthStencilAttachment;
	}
	getGPURenderPassStencilAttachment(device: GPUDevice): GPURenderPassDepthStencilAttachment {
		this?.texture?.update?.(device);
		return {
			stencilLoadOp: this?.op || "clear",
			stencilClearValue: this?.value || 0,
			stencilStoreOp: this?.storeOp || "store",
			stencilReadOnly: this?.readOnly || false
		} as GPURenderPassDepthStencilAttachment;
	}
}

export default Attachment;
