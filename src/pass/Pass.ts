import RenderTarget from "../render/RenderTarget.js";
import { Material } from "../material/Material.js";
import CommandList from "../core/CommandList.js";
import Context from "../render/Context.js";
import DrawCommand from "../render/DrawCommand.js";
import { Target } from "../core/WebGPUTypes.js";
import Texture from "../render/Texture.js";
import IPass from "../render/IPass.js";

class Pass {
  public renderTarget: RenderTarget;
  public context:Context;
  public overrideMaterial?:Material;
  public colorTargets?:Array<Target>;
  private commandEncoder:GPUCommandEncoder |null;
  private passRenderEncoder: GPURenderPassEncoder |null;
  constructor(
    context:Context
  ) {
     this.context=context;
     
  }
  render(commandList: CommandList|DrawCommand): void{};
  beforRender(){
    const {device}=this.context;
    this.commandEncoder = device.createCommandEncoder();
    this.renderTarget.renderPassDescriptor.colorAttachments[0].view = this.context.context.getCurrentTexture().createView();
    this.passRenderEncoder = this.commandEncoder.beginRenderPass(this.renderTarget.renderPassDescriptor);
  }
  getColorTexture(index:number=0):Texture{
     return this.renderTarget.getColorTexture(index)
  }
  getDepthTexture():Texture{
    return this.renderTarget.getDepthTexture();
  }
  afterRender(){
    this.passRenderEncoder?.end();
    this.passRenderEncoder = null;
    this.context.device.queue.submit([this.commandEncoder.finish()]);
    this.commandEncoder = null;
  }
  protected excuteCommands(commands:DrawCommand[]){
    commands.forEach((command)=>{
      this.excuteCommand(command,this.passRenderEncoder);
    });
  }
  protected excuteCommand(command,passEncoder:GPURenderPassEncoder | GPUComputePassEncoder){
    this.context.render(command,passEncoder);
  }
}

export default Pass;
