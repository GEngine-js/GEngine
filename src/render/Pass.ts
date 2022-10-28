import RenderTarget from "./RenderTarget.js";
import { Material } from "../material/Material.js";
import CommandList from "../core/CommandList.js";
import Context from "./Context.js";
import DrawCommand from "./DrawCommand.js";
class Pass {
  public renderTarget: RenderTarget;
  public context:Context;
  public overrideMaterial?:Material;
  public colorTargets?:{}
  constructor(
    context:Context
  ) {
     this.context=context;
  }
  beforRender(){

  }
  render(opaque,transparent){;
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
}

export default Pass;
