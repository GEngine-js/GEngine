import { IUniform, Target } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import ShaderMaterial from "../material/ShaderMaterial";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Sampler from "../render/Sampler";
import quadVert from "../shader/material/quadVert";

export default class PostProcessStage {
  public enabled: boolean;
  public fullScreenQuad: Mesh;
  public geometry: Geometry;
  public id: string | number;
  public currentRenderTarget: RenderTarget;
  public  material: ShaderMaterial;
  public uniforms: { [uniform: string]: IUniform };
  private fragmentShader:string;
  constructor(id?: number | string) {
    this.enabled = true;
    this.id = id;
    this.currentRenderTarget = undefined;
    this.init();
  }
  setRenderTarget(renderTarget: RenderTarget) {
    this.currentRenderTarget = renderTarget;
  }
  setSize() {}
  destroy() {}
  render(context: Context) {
     
  }
  protected renderMesh(context: Context) {
    const drawComand = this.fullScreenQuad.getDrawCommand();
    const currentRenderPassEncoder =
      this.currentRenderTarget.getRenderPassEncoder(context);
    context.render(drawComand, currentRenderPassEncoder);
    this.currentRenderTarget.endRenderPassEncoder();
  }
  private init(){
    this.geometry = new Geometry();
    this.geometry.setAttribute(
      new Float32Attribute(
        "position",
        [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0],
        2
      )
    );
    this.geometry.count = 6;
    this.material=new ShaderMaterial({
        type:'resolve',
        frag:this.fragmentShader,
        vert:quadVert({}),
        uniforms:this.uniforms,
    });
    this.fullScreenQuad = new Mesh(this.geometry);
  }
}
