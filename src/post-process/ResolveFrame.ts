import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import Geometry from "../geometry/Geometry";
import ShaderMaterial from "../material/ShaderMaterial";
import { Mesh } from "../mesh/Mesh";
import Attachment from "../render/Attachment";
import { Float32Attribute } from "../render/Attribute";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import getVertFrag from "../shader/Shaders";
export default class ResolveFrame {
  canvasRenderTarget: RenderTarget;
  material: ShaderMaterial;
  geometry: Geometry;
  quadMesh: Mesh;
  constructor() {
    this.geometry = new Geometry({});
    this.geometry.setAttribute(
      new Float32Attribute(
        "position",
        [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0],
        2
      )
    );
    this.geometry.count = 6;
    const shader = getVertFrag("resolve", {});
    this.material = new ShaderMaterial({
      type: "resolve",
      frag: shader.frag,
      vert: shader.vert,
      uniforms: {
        texture: {
          type: "texture",
          value: undefined,
        },
        sampler: {
          type: "sampler",
          value: new Sampler({
            magFilter: "linear",
            minFilter: "linear",
          }),
        },
      },
    });
    this.quadMesh = new Mesh(this.geometry, this.material);
  }
  render(context: Context, colorTexture?: Texture) {
    if (!this.canvasRenderTarget) this.initRenderTarget(context);
    // this.material
    this.material.uniforms.texture.value = colorTexture;
    this.canvasRenderTarget.colorAttachments[0].texture = {
      gpuTexture: context.context.getCurrentTexture(),
     } as Texture;
     this.material.update(undefined,this.quadMesh)
     this.quadMesh.beforeRender();
     const drawComand=this.quadMesh.getDrawCommand();
     const currentRenderPassEncoder=this.canvasRenderTarget.beginRenderPassEncoder(context);
     context.render(drawComand,currentRenderPassEncoder);
     this.canvasRenderTarget.endRenderPassEncoder();
     this.quadMesh.afterRender();
  }
  private initRenderTarget(context: Context) {
    const colorAttachment = new Attachment(
        { r: 0.14, g: 0.14, b: 0.14, a: 1 },
        {
          texture: {
            gpuTexture: context.context.getCurrentTexture(),
          } as Texture,
        }
      );
      const depthTexture = new Texture({
        size: context.presentationSize,
        format: TextureFormat.Depth24Plus,
        usage: TextureUsage.RenderAttachment,
      });
      const depthAttachment = new Attachment(1.0,{texture:depthTexture});
      this.canvasRenderTarget = new RenderTarget(
        "render",
        [colorAttachment],
        depthAttachment
      );
  }
}
