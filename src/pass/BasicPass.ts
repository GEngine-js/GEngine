/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-28 15:11:08
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-10 18:27:09
 * @FilePath: \GEngine\src\pass\BasicPass.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CommandList from "../core/CommandList";
import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import Pass from "./Pass";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import DrawCommand from "../render/DrawCommand";
import RenderQueue from "../core/RenderQueue";

export class BasicPass extends Pass {
  skyboxDrawComand: DrawCommand;
  constructor(context: Context) {
    super(context);
    this.init(context);
  }
  render(renderQueue: RenderQueue) {
    renderQueue.sort();
    const { preRender, opaque, transparent, compute } = renderQueue;
    compute.map((mesh)=>{
        mesh.beforeRender();
        this.excuteCommand(mesh.getDrawCommand())
        mesh.afterRender();
    })
    preRender.map((mesh)=>{
        mesh.beforeRender();
        this.excuteCommand(mesh.getDrawCommand())
        mesh.afterRender();
    })
    opaque.map((mesh)=>{
        mesh.beforeRender();
        this.excuteCommand(mesh.getDrawCommand())
        mesh.afterRender();
    })
    transparent.map((mesh)=>{
        mesh.beforeRender();
        this.excuteCommand(mesh.getDrawCommand())
        mesh.afterRender();
    })
  }
  private init(context: Context) {
    this.createRenderTarget(context);
  }
  private createRenderTarget(context: Context) {
    const colorAttachment = new Attachment(
      { r: 0.14, g: 0.14, b: 0.14, a: 1 },
      {
        texture: {
          gpuTexture: this.context.context.getCurrentTexture(),
        },
      }
    );
    const depthAttachment = new Attachment(1.0);
    this.renderTarget = new RenderTarget(
      "render",
      [colorAttachment],
      depthAttachment
    );
  }
}
