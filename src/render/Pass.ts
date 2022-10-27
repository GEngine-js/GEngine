import RenderTarget from "./RenderTarget.js";
import { Material } from "../material/Material.js";
import { FrontFace } from "../core/WebGPUConstant.js";
import { FrameState } from "../core/FrameState.js";
import CommandList from "../core/CommandList.js";
class Pass {
  constructor(
    public renderTarget: RenderTarget,
    public overrideMaterial?:Material,
    public colorTargets?:{}
  ) {

  }
  beforRender(){

  }
  render(frameState:FrameState){
   this.beforRender();
   const commandList=frameState.commandList;
  
   this.afterRender();
  }
  afterRender(){

  }
  private excuteCommands(commandList:CommandList){
      const {opaque,transparent}=commandList;
  }
  private excuteCommand(command,frameState){
    //systemGroupLayouts 怎么传值
    const {context,pass,systemGroupLayouts}=frameState;
    context.currentRenderTarget=pass.renderTarget;
    context.render(command,systemGroupLayouts);
    context.currentRenderTarget=null;
  }
}

export default Pass;
