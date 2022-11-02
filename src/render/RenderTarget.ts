import { PassType } from "../core/WebGPUTypes";
import Attachment from "./Attachment"
import Context from "./Context";
import QuerySet from "./QuerySet";
import Texture from "./Texture";

export default class RenderTarget {
  colorTextures: Texture[];
  depthStencilTexture: Texture[];
  renderPassDescriptor: GPURenderPassDescriptor;
  constructor(
    public type: PassType,
    public colorAttachments?: Attachment[],
    public depthAttachment?: Attachment,
    public stencilAttachment?: Attachment,
    public querySet?: QuerySet
  ) {
    this.renderPassDescriptor = this.getRenderPassDescriptor();
  }

  private getRenderPassDescriptor(): GPURenderPassDescriptor | null {
    if (this.type === "render") {
      return {
        ...(this.colorAttachments && {
          colorAttachments: this.colorAttachments.map(
            (colorAttachment) => {
              return ({
                view: colorAttachment.texture.gpuTexture.createView(),
                resolveTarget: colorAttachment.resolveTarget != undefined ? colorAttachment.resolveTarget.gpuTexture.createView(): undefined,
                clearValue: colorAttachment.value,
                loadOp: colorAttachment.op,
                storeOp: colorAttachment.storeOp,
              }) as GPURenderPassColorAttachment
            }
          ),
        }),
        ...((this.depthAttachment || this.stencilAttachment) && {
          depthStencilAttachment: {
            view: this.depthAttachment.texture.gpuTexture.createView(),
            depthLoadOp: this.depthAttachment?.op || "clear",
            depthClearValue: this.depthAttachment?.value || 0,
            depthStoreOp: this.depthAttachment?.storeOp || "store",
            // stencilLoadOp: this.stencilAttachment?.op || "clear",
            // stencilClearValue: this.stencilAttachment?.value || 0,
            // stencilStoreOp: this.stencilAttachment?.storeOp || "store",
          } as GPURenderPassDepthStencilAttachment,
        }),
      };
    }
    return null;
  }
  resize(context:Context) {
    const {width,height}=context.canvas;
    const size={
      width,
      height,
      depth:this.colorAttachments[0]?.texture?.textureProp?.size.depth||0
    }
    for (let i = 0; i < this.colorAttachments.length; ++i) {
      if (this.colorAttachments[i]) {        
        const resizedTexture =new Texture(context,{...this.colorAttachments[i].texture.textureProp,size})
        this.colorAttachments[i].texture.destroy();
        this.colorAttachments[i].texture = resizedTexture;
        this.renderPassDescriptor.colorAttachments[i].view = resizedTexture.gpuTexture.createView();
      }
    }

    if (this.depthAttachment) {
       const resizedTexture = new Texture(context,{...this.depthAttachment.texture.textureProp,size})
       this.depthAttachment.texture.destroy();
       this.depthAttachment.texture= resizedTexture;
       this.renderPassDescriptor.depthStencilAttachment.view = resizedTexture.gpuTexture.createView();
    }
  }
}