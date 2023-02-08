import RenderTarget from "../render/RenderTarget.js";
import { Material } from "../material/Material.js";
import Context from "../render/Context.js";
import DrawCommand from "../render/DrawCommand.js";
import { Target } from "../render/RenderState";
import Texture from "../render/Texture.js";
import RenderQueue from "../core/RenderQueue.js";

class Pass {
  public renderTarget: RenderTarget;
  public context: Context;
  public overrideMaterial?: Material;
  public colorTargets?: Array<Target>;
  public passRenderEncoder: GPURenderPassEncoder | null;
  constructor(context: Context) {
    this.context = context;
  }
  render(renderQueue: RenderQueue): void {}
  beforRender() {
    this.passRenderEncoder = this.renderTarget.beginRenderPassEncoder(
      this.context
    );
  }
  getColorTexture(index: number = 0): Texture {
    return this.renderTarget.getColorTexture(index) as Texture;
  }
  getDepthTexture(): Texture | { gpuTexture: GPUTexture } {
    return this.renderTarget.getDepthTexture();
  }
  afterRender() {
    this.renderTarget.endRenderPassEncoder();
  }
  protected excuteCommands(commands: DrawCommand[]) {
    commands.forEach((command) => {
      this.excuteCommand(command);
    });
  }
  protected excuteCommand(command: DrawCommand) {
    if (command.renderTarget) {
      const currentRenderPassEncoder =
        command.renderTarget.beginRenderPassEncoder(this.context);
      this.context.render(command, currentRenderPassEncoder);
      command.renderTarget.endRenderPassEncoder();
    } else {
      if (this.colorTargets) command.renderState.targets = this.colorTargets;
      this.context.render(command, this.passRenderEncoder);
    }
  }
}

export default Pass;
