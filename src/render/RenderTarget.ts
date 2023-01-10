import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import { PassType } from "../core/WebGPUTypes";
import Attachment from "./Attachment";
import Context from "./Context";
import QuerySet from "./QuerySet";
import Texture from "./Texture";

export default class RenderTarget {
  context:Context;
  private _renderPassDescriptor: GPURenderPassDescriptor;
  private renderEncoder: GPURenderPassEncoder;
  private commandEncoder: GPUCommandEncoder | null;
  constructor(
    public type: PassType,
    // public context: Context,
    public colorAttachments?: Attachment[],
    public depthAttachment?: Attachment,
    public stencilAttachment?: Attachment,
    public querySet?: QuerySet
  ) {
    // this.init();
    this.renderEncoder = undefined;
    this._renderPassDescriptor = undefined;
    this.commandEncoder=undefined;
    this.context=undefined;
  }
  get renderPassDescriptor() {
   //if (!this._renderPassDescriptor)
      this._renderPassDescriptor = this.getRenderPassDescriptor();
    return this._renderPassDescriptor;
  }
  private preParse() {
    if (this?.colorAttachments[0]?.texture == undefined) {
      const colorTexture = new Texture({
        size: this.context.presentationSize,
        format: this.context.presentationFormat,
        usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding,
      });
      colorTexture.update(this.context);
      this.colorAttachments[0].texture = colorTexture;
    }
    if (this.depthAttachment && this.depthAttachment?.texture == undefined) {
      const depthTexture = new Texture({
        size: this.context.presentationSize,
        format: TextureFormat.Depth24Plus,
        usage: TextureUsage.RenderAttachment,
      });
      depthTexture.update(this.context);
      this.depthAttachment.texture = depthTexture;
    }
  }
  public getColorTexture(index: number = 0): Texture {
    const colAtt = this.colorAttachments[index];
    if (colAtt) {
      return colAtt.texture;
    } else {
      return null;
    }
  }
  public getDepthTexture(): Texture {
    if (this.depthAttachment) {
      return this.depthAttachment.texture;
    }
  }
  private getRenderPassDescriptor(): GPURenderPassDescriptor | null {
    if (this.type === "render") {
      console.log();
      
      this.preParse();
      return {
        ...(this.colorAttachments && {
          colorAttachments: this.colorAttachments.map((colorAttachment) => {
            return {
              view:
              //暂时这么写
              this.context.context.getCurrentTexture().createView() || undefined,
              resolveTarget:
                colorAttachment.resolveTarget != undefined
                  ? colorAttachment.resolveTarget.gpuTexture.createView()
                  : undefined,
              clearValue: colorAttachment.value,
              loadOp: colorAttachment.op,
              storeOp: colorAttachment.storeOp,
            } as GPURenderPassColorAttachment;
          }),
        }),
        ...((this.depthAttachment || this.stencilAttachment) && {
          depthStencilAttachment: {
            view:
              this.depthAttachment?.texture?.gpuTexture?.createView() ||
              undefined,
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
  public getRenderPassEncoder(context: Context) {
    if (!this.context) this.context = context;
    const { device } = this.context;
    this.commandEncoder = device.createCommandEncoder();
    this.renderEncoder = this.commandEncoder.beginRenderPass(
      this.renderPassDescriptor
    );
    return this.renderEncoder;
  }
  public endRenderPassEncoder() {
    this.renderEncoder?.end();
    this.context.device.queue.submit([this.commandEncoder.finish()]);
    this.commandEncoder = null;
    this.renderEncoder = null;
  }
  resize() {
    const { width, height } = this.context.canvas;
    const size = {
      width,
      height,
      depth: this.colorAttachments[0]?.texture?.textureProp?.size.depth || 0,
    };
    for (let i = 0; i < this.colorAttachments.length; ++i) {
      if (this.colorAttachments[i]) {
        const resizedTexture = new Texture({
          ...this.colorAttachments[i].texture.textureProp,
          size,
        });
        resizedTexture.update(this.context);
        this.colorAttachments[i].texture.destroy();
        this.colorAttachments[i].texture = resizedTexture;
        this.renderPassDescriptor.colorAttachments[i].view =
          resizedTexture.gpuTexture.createView();
      }
    }

    if (this.depthAttachment) {
      const resizedTexture = new Texture({
        ...this.depthAttachment.texture.textureProp,
        size,
      });
      resizedTexture.update(this.context);
      this.depthAttachment.texture.destroy();
      this.depthAttachment.texture = resizedTexture;
      this.renderPassDescriptor.depthStencilAttachment.view =
        resizedTexture.gpuTexture.createView();
    }
  }
}
