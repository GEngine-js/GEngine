/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-28 15:11:08
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-08 13:50:00
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

export class BasicPass extends Pass{
    skyboxDrawComand:DrawCommand;
    constructor(context:Context){
        super(context);
        this.init(context);
    }
    render(commandList:CommandList){
       if(this.skyboxDrawComand) this.excuteCommand(this.skyboxDrawComand)
       CommandList.sort(commandList.opaque,0,commandList.opaqueLength,CommandList._compareFromNearToFar);
       CommandList.sort(commandList.transparent,0,commandList.transparentLenght,CommandList._compareFromFarToNear);
       this.excuteCommands(commandList.opaque);
       this.excuteCommands(commandList.transparent);
    }
    private init(context:Context){
        this.createRenderTarget(context);
    }
    private createRenderTarget(context:Context){
        const colorAttachment=new Attachment({ r: 0.14, g: 0.14, b: 0.14, a: 1 },{
            texture:{
                gpuTexture:this.context.context.getCurrentTexture()
            }
        })
        const depthAttachment=new Attachment(1.0)
        this.renderTarget=new RenderTarget(
            'render',
            [colorAttachment],
             depthAttachment
        )
    }
}