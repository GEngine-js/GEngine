import { ShaderSource } from "../shader/ShaderSource";
import RenderTarget from "./RenderTarget";
import ShaderData from "./ShaderData";
import VertextBuffer from "./VertextBuffer";
import IndexBuffer from "./IndexBuffer";
import { RenderStateProps } from "../core/WebGPUTypes";

class DrawCommand {

  public type?: string;

  public shaderData?:ShaderData;

  public renderTarget?:RenderTarget;

  public vertexBuffer?: VertextBuffer;

  public indexBuffer?: IndexBuffer;

  public renderState?:RenderStateProps;

  public queryIndex?:number;

  public count?: number;

  public instances?: number;

  public dispatch?: number | [number, number?, number?];

  public shaderSource?:ShaderSource;

  public dirty?:boolean;

  public materialType?:string

  constructor(options: DrawCommand) {
    Object.assign(this, options);
  }
}

export default DrawCommand;
