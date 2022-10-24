import { PassType } from "../core/WebGPUTypes";
import Attachment from "./Attachment"
import QuerySet from "./QuerySet";

export default class RenderTarget{
    defaultCorlorAttachmentTexture:GPUTexture;
    defaultDepthStencilAttachmentTexture:GPUTexture;
    constructor(    
        public type: PassType,
        public colorAttachments?: Attachment[],
        public depthAttachment?: Attachment,
        public stencilAttachment?: Attachment,
        public querySet?:QuerySet
        ){}
    private get descriptor(): GPURenderPassDescriptor | null {
        if (this.type === "render") {
          return {
            ...(this.colorAttachments && {
              colorAttachments: this.colorAttachments.map(
                (colorAttachment) =>
                  ({
                    view: colorAttachment.view,
                    resolveTarget: colorAttachment.resolveTarget,
                    clearValue: colorAttachment.value,
                    loadOp: colorAttachment.op,
                    storeOp: colorAttachment.storeOp,
                  } as GPURenderPassColorAttachment)
              ),
            }),
            ...((this.depthAttachment || this.stencilAttachment) && {
              depthStencilAttachment: {
                view: this.depthAttachment.view,
                depthLoadOp: this.depthAttachment?.op || "clear",
                depthClearValue: this.depthAttachment?.value || 0,
                depthStoreOp: this.depthAttachment?.storeOp || "store",
                stencilLoadOp: this.stencilAttachment?.op || "clear",
                stencilClearValue: this.stencilAttachment?.value || 0,
                stencilStoreOp: this.stencilAttachment?.storeOp || "store",
              } as GPURenderPassDepthStencilAttachment,
            }),
          };
        }
        return null;
      }
   
}