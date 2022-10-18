import Pass from "./Pass.js";
import Pipeline from "./Pipeline.js";
import Buffer from "./Buffer.js";
import BindGroup from "./BindGroupCache.js";

import { IndexFormat } from "../core/WebGPUConstants";

class DrawCommand {
  public pass?: Pass;
  public pipeline?: Pipeline;

  public vertexBuffers?: Buffer[];
  public indexBuffer?: Buffer;
  public indexFormat?: GPUIndexFormat = IndexFormat.Uint32;
  public bindGroups?: BindGroup[];

  public count?: number;
  public instances?: number;

  public dispatch?: number | [number, number?, number?];

  constructor(options: DrawCommand) {
    Object.assign(this, options);
  }
}

export default DrawCommand;
