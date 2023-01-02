import RenderTarget from "../render/RenderTarget.js";
import { Material } from "../material/Material.js";
import CommandList from "../core/CommandList.js";
import Context from "../render/Context.js";
import DrawCommand from "../render/DrawCommand.js";
import { Target } from "../core/WebGPUTypes.js";
import Texture from "../render/Texture.js";

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
    //暂时这么写
    this.renderTarget.renderPassDescriptor.colorAttachments[0].view = this.context.context.getCurrentTexture().createView();
    //this.passRenderEncoder = this.commandEncoder.beginRenderPass(this.renderTarget.renderPassDescriptor);
    this.passRenderEncoder=this.renderTarget.getRenderPassEncoder(this.commandEncoder);
  }
  getColorTexture(index:number=0):Texture{
     return this.renderTarget.getColorTexture(index)
  }
  getDepthTexture():Texture{
    return this.renderTarget.getDepthTexture();
  }
  afterRender(){
    this.renderTarget.endRenderPassEncoder();
    this.context.device.queue.submit([this.commandEncoder.finish()]);
    this.commandEncoder = null;
  }
  protected excuteCommands(commands:DrawCommand[]){
    commands.forEach((command)=>{
      this.excuteCommand(command,);
    });
  }
  protected excuteCommand(command:DrawCommand){
    if (command.renderTarget) {
      const currentRenderPassEncoder=command.renderTarget.getRenderPassEncoder(this.commandEncoder);
      this.context.render(command,currentRenderPassEncoder);
      command.renderTarget.endRenderPassEncoder();
    } else {
      this.context.render(command,this.passRenderEncoder);
    }
    
  }
}

export default Pass;
