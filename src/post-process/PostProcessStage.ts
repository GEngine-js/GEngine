import { TextureUsage } from "../core/WebGPUConstant";
import { IUniform, Target } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import ShaderMaterial from "../material/ShaderMaterial";
import { Mesh } from "../mesh/Mesh";
import Attachment from "../render/Attachment";
import { Float32Attribute } from "../render/Attribute";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import quadVert from "../shader/material/quadVert";

export default class PostProcessStage {
  public enabled: boolean;
  public fullScreenQuad: Mesh;
  public geometry: Geometry;
  public id: string | number;
  public material: ShaderMaterial;
  public uniforms: { [uniform: string]: IUniform };
  private fragmentShader: string;
  private renderTarget: RenderTarget;
  private width: number;
  private height: number;
  colorTexture: Texture;
  constructor(id?: number | string) {
    this.enabled = true;
    this.id = id;
    this.renderTarget = undefined;
    this.width=1920;
    this.height=1080;
    this.colorTexture=undefined
    this.init();
  }
  setSize(width:number,height:number) {
    this.width=width;
    this.height=height;
    //this.renderTarget.set
   }
  destroy() { }
  render(context: Context) {
       this.renderMesh(context);
  }
  protected renderMesh(context: Context) {
    this.colorTexture.update(context)
    const drawComand = this.fullScreenQuad.getDrawCommand();
    const currentRenderPassEncoder = this.renderTarget.beginRenderPassEncoder(context);
    context.render(drawComand, currentRenderPassEncoder);
    this.renderTarget.endRenderPassEncoder();
  }
  private init() {
    this.colorTexture = new Texture({
      size: {width:this.width, height:this.height, depth:1},
      format: 'rgba8unorm',
      usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding,
    });
    const colorAttachment = new Attachment({ r: 0.5, g: 0.5, b: 0.5, a: 1.0},{texture:this.colorTexture});
    const depthAttachment = new Attachment(1.0);
    this.renderTarget = new RenderTarget(
      "render",
      [colorAttachment],
      depthAttachment
    );
    this.geometry = new Geometry();
    this.geometry.setAttribute(
      new Float32Attribute(
        "position",
        [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0],
        2
      )
    );
    this.geometry.count = 6;
    this.material = new ShaderMaterial({
      type: 'resolve',
      frag: this.fragmentShader,
      vert: quadVert({}),
      uniforms: this.uniforms,
    });
    this.fullScreenQuad = new Mesh(this.geometry);
  }
}
