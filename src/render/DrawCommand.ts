import Pass from "./Pass";
import Pipeline from "./Pipeline";
import Buffer from "./Buffer";
import BindGroup from "./BindGroup";

import { IndexFormat } from "../core/WebGPUConstant";
import { VertextBuffers } from "../core/VertextBuffers";
import RenderState from "./RenderState";
import QuerySet from "./QuerySet";

class DrawCommand {
  public pass?: Pass;
  public pipeline?: Pipeline;

  public vertexBuffers?: VertextBuffers;
  public indexBuffer?: Buffer;
  public indexFormat?: GPUIndexFormat = IndexFormat.Uint32;
  public bindGroups?: BindGroup[];
  public renderState?:RenderState;
  public querySet?:QuerySet;
  public queryIndex?:number;

  public count?: number;
  public instances?: number;

  public dispatch?: number | [number, number?, number?];

  constructor(options: DrawCommand) {
    Object.assign(this, options);
  }
}

export default DrawCommand;
