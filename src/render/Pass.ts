import Attachment from "./Attachment.js";
import { PassType } from "../core/WebGPUTypes";
import Context from "./Context.js";

class Pass {
  defaultCorlorAttachmentTexture:GPUTexture;
  defaultDepthStencilAttachmentTexture:GPUTexture;
  passEncoder: GPURenderPassEncoder;

  constructor(
    public type: PassType,
    public colorAttachments?: Attachment[],
    public depthAttachment?: Attachment,
    public stencilAttachment?: Attachment
  ) {}
  update(context:Context){
    if (this.type==='render') {
      if (this.descriptor.colorAttachments&&!this.defaultCorlorAttachmentTexture) {
        this.defaultCorlorAttachmentTexture=context.context.getCurrentTexture();
        const currentView = this.defaultCorlorAttachmentTexture.createView();
        const views =this.descriptor.colorAttachments as Array<GPURenderPassColorAttachment>;
        for (let i = 0; i < views.length; i++) {
          views[i].view ||= currentView;
        }
      }
      if (this.descriptor.depthStencilAttachment&&!this.defaultDepthStencilAttachmentTexture) {

        this.defaultDepthStencilAttachmentTexture=context.device.createTexture({
          size: { width: context.canvas.width , height: context.canvas.height , depthOrArrayLayers: 1 },
          mipLevelCount: 1,
          sampleCount: 1,
          dimension: "2d",
          format: "depth24plus-stencil8",
          usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });
        (
          this.descriptor.depthStencilAttachment as GPURenderPassDepthStencilAttachment
        ).view ||= this.defaultDepthStencilAttachmentTexture.createView();
      }
      this.passEncoder=context.commandEncoder.beginRenderPass(this.descriptor)
    }
  }
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

export default Pass;
