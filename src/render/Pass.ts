import RenderTarget from "./RenderTarget.js";
import { Material } from "../material/Material.js";
import CommandList from "../core/CommandList.js";
import Context from "./Context.js";
import DrawCommand from "./DrawCommand.js";
import { Target } from "../core/WebGPUTypes.js";
import Texture from "./Texture.js";
import IPass from "./IPass.js";
class Pass {
  public renderTarget: RenderTarget;
  public context:Context;
  public overrideMaterial?:Material;
  public colorTargets?:Array<Target>
  constructor(
    context:Context
  ) {
     this.context=context;
  }
  render(commandList: CommandList|DrawCommand): void{};
  beforRender(){

  }
  getColorTexture(index:number=0):Texture{
     return this.renderTarget.getColorTexture(index)
  }
  getDepthTexture():Texture{
    return this.renderTarget.getDepthTexture();
  }
  afterRender(){

  }
  protected excuteCommands(commands:DrawCommand[]){
    commands.forEach((command)=>{
      this.excuteCommand(command);
    });
  }
  protected excuteCommand(command){
    this.context.currentRenderTarget=this.renderTarget;
    this.context.render(command);
    this.context.currentRenderTarget=null;
  }
  resolveFramebuffers
}

export default Pass;
