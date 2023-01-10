/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-15 16:59:45
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-08 14:04:45
 * @FilePath: \GEngine\src\pass\Pass.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    this.passRenderEncoder=this.renderTarget.getRenderPassEncoder(this.context);
  }
  getColorTexture(index:number=0):Texture{
     return this.renderTarget.getColorTexture(index)
  }
  getDepthTexture():Texture{
    return this.renderTarget.getDepthTexture();
  }
  afterRender(){
    this.renderTarget.endRenderPassEncoder();
  }
  protected excuteCommands(commands:DrawCommand[]){
    commands.forEach((command)=>{
      this.excuteCommand(command,);
    });
  }
  protected excuteCommand(command:DrawCommand){
    if (command.renderTarget) {
      const currentRenderPassEncoder=command.renderTarget.getRenderPassEncoder(this.context);
      this.context.render(command,currentRenderPassEncoder);
      command.renderTarget.endRenderPassEncoder();
    } else {
      this.context.render(command,this.passRenderEncoder);
    }
    
  }
}

export default Pass;
