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
        const colorTexture=new Texture({
            size:this.context.presentationSize,
            format:this.context.presentationFormat,
            usage:TextureUsage.RenderAttachment|TextureUsage.TextureBinding
        });
        colorTexture.update(context);
        const colorAttachment=new Attachment({ r: 0.14, g: 0.14, b: 0.14, a: 1 },{
            texture:colorTexture,
        })
        const depthTexture=new Texture({
            size:this.context.presentationSize,
            format:TextureFormat.Depth24Plus,
            usage:TextureUsage.RenderAttachment
        });
        depthTexture.update(context)
        const depthAttachment=new Attachment(1.0,{
            texture:depthTexture,
        })
        this.renderTarget=new RenderTarget(
            'render',
            [colorAttachment],
             depthAttachment
        )
    }
}