import ShaderMaterial from "../material/ShaderMaterial";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import PostProcessStage from "./PostProcessStage";

export default class ResolveFrameStage extends PostProcessStage {
  canvasRenderTarget: RenderTarget;
  material:ShaderMaterial;
  constructor() {
    super();
    this.material=new ShaderMaterial({
        type:'resolve',
        frag:'',
        vert:'',
        uniforms:{
            texture:{
                type:'texture',
                value:undefined,
            }
        }
    });
  }
  render(context: Context) {
     if(!this.canvasRenderTarget) this.initRenderTarget(context);
     this.material.uniforms.texture.value=undefined;
     this.fullScreenQuad.material=this.material;
     this.renderMesh(context,this.canvasRenderTarget)
  }
  private initRenderTarget(context: Context){
    const colorAttachment = new Attachment(
        { r: 0.14, g: 0.14, b: 0.14, a: 1 },
        {
          texture: {
            gpuTexture: context.context.getCurrentTexture(),
          },
        }
      );
      const depthAttachment = new Attachment(1.0);
      this.canvasRenderTarget = new RenderTarget(
        "render",
        [colorAttachment],
        depthAttachment
      );
  }
}
