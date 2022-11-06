import CommandList from "../core/CommandList";
import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import Pass from "../render/Pass";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";

export class BasicPass extends Pass{
    constructor(context:Context){
        super(context);
        this.init();
    }
    render(opaque,transparent){
       CommandList.sort(opaque,0,opaque.length,CommandList._compareFromNearToFar);
       CommandList.sort(transparent,0,transparent.length,CommandList._compareFromFarToNear);
       this.excuteCommands(opaque);
       this.excuteCommands(transparent);
    }
    private init(){
        this.createRenderTarget();
    }
    private createRenderTarget(){
        debugger
        const colorTexture=new Texture(this.context,{
            size:this.context.presentationSize,
            format:this.context.presentationFormat,
            usage:TextureUsage.RenderAttachment|TextureUsage.TextureBinding
        })
        const colorAttachment=new Attachment({ r: 0.14, g: 0.14, b: 0.14, a: 1 },{
            texture:colorTexture,
        })
        const depthTexture=new Texture(this.context,{
            size:this.context.presentationSize,
            format:TextureFormat.Depth24Plus,
            usage:TextureUsage.RenderAttachment
        });
        const depthAttachment=new Attachment(1,{
            texture:depthTexture,
        })
        this.renderTarget=new RenderTarget(
            'render',
            [colorAttachment],
            //new Attachment(1)
             depthAttachment
        )
    }
}