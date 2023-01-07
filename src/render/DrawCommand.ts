import Buffer from "./Buffer";
import { IndexFormat } from "../core/WebGPUConstant";
import { VertextBuffers } from "../core/VertextBuffers";
import { ShaderSource } from "../shader/ShaderSource";
import RenderTarget from "./RenderTarget";
import ShaderData from "./ShaderData";

class DrawCommand {

  public type?: string;

  public shaderData?:ShaderData;

  public renderTarget?:RenderTarget;

  public vertexBuffers?: VertextBuffers;

  public indexBuffer?: Buffer;

  public indexFormat?: GPUIndexFormat = IndexFormat.Uint32;

  public renderState?:{};

  public queryIndex?:number;

  public topology?:GPUPrimitiveTopology;

  public count?: number;

  public instances?: number;

  public dispatch?: number | [number, number?, number?];

  public shaderSource?:ShaderSource;

  public dirty?:boolean;

  public distanceToCamera?:number;

  public onwer?:Object;

  public materialType?:string

  constructor(options: DrawCommand) {
    Object.assign(this, options);
  }
}

export default DrawCommand;
