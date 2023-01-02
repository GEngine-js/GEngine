import Pass from "../pass/Pass";
import Pipeline from "./Pipeline";
import Buffer from "./Buffer";
import BindGroup from "./BindGroup";

import { IndexFormat } from "../core/WebGPUConstant";
import { VertextBuffers } from "../core/VertextBuffers";
import { FrameState } from "../core/FrameState";
import BindGroupLayout from "./BindGroupLayout";
import { ShaderSource } from "../shader/ShaderSource";
import RenderTarget from "./RenderTarget";

class DrawCommand {

  public type?: string;

  public renderTarget?:RenderTarget;

  public pipeline?: Pipeline;

  public vertexBuffers?: VertextBuffers;

  public indexBuffer?: Buffer;

  public indexFormat?: GPUIndexFormat = IndexFormat.Uint32;

  public bindGroups?: BindGroup[];

  public renderState?:{};

  public queryIndex?:number;

  public topology?:GPUPrimitiveTopology;

  public count?: number;

  public instances?: number;

  public dispatch?: number | [number, number?, number?];

  public groupLayouts?:BindGroupLayout[];

  public shaderSource?:ShaderSource;

  public uuid?:string;

  public dirty?:boolean;

  public distanceToCamera?:number;

  public onwer?:Object;

  constructor(options: DrawCommand) {
    Object.assign(this, options);
  }
}

export default DrawCommand;
