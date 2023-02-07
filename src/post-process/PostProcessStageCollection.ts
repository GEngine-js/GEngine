import Context from "../render/Context";
import Texture from "../render/Texture";
import PostProcessStage from "./PostProcessStage";

export default class PostProcessStageCollection {
  private stages: Map<string | number, PostProcessStage>;
  constructor() {
    this.stages = new Map();
  }
  addStage(stage: PostProcessStage) {
    this.stages.set(stage.id, stage);
  }
  removeStage(id: string | number) {
    return this.stages.get(id);
  }
  render(context: Context, colorTexture: Texture) {}
  destroy() {}
}
