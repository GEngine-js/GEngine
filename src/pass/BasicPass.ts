import Attachment from "../render/Attachment";
import Context from "../render/Context";
import Pass from "./Pass";
import RenderTarget from "../render/RenderTarget";
import DrawCommand from "../render/DrawCommand";
import RenderQueue from "../core/RenderQueue";
import { PrimitiveTopology } from "../core/WebGPUConstant";

export class BasicPass extends Pass {
  skyboxDrawComand: DrawCommand;
  constructor(context: Context) {
    super(context);
    this.init(context);
  }
  render(renderQueue: RenderQueue) {
    renderQueue.sort();
    const { preRender, opaque, transparent, compute } = renderQueue;
    compute.map((mesh) => {
      mesh.beforeRender();
      this.excuteCommand(mesh.getDrawCommand());
      mesh.afterRender();
    });
    preRender.map((mesh) => {
      mesh.beforeRender();
    
      const dr=mesh.getDrawCommand()
      dr.topology=PrimitiveTopology.TriangleList 
      this.excuteCommand(dr );
      mesh.afterRender();
    });
    opaque.map((mesh) => {
      mesh.beforeRender();
      this.excuteCommand(mesh.getDrawCommand());
      mesh.afterRender();
    });
    transparent.map((mesh) => {
      mesh.beforeRender();
      this.excuteCommand(mesh.getDrawCommand());
      mesh.afterRender();
    });
  }
  private init(context: Context) {
    this.createRenderTarget(context);
  }
  private createRenderTarget(context: Context) {
    const colorAttachment = new Attachment({ r: 0.5, g: 0.5, b: 0.5, a: 1.0});
    const depthAttachment = new Attachment(1.0);
    this.renderTarget = new RenderTarget(
      "render",
      [colorAttachment],
      depthAttachment
    );
  }
}
