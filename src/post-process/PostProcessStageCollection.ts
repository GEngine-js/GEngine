import Context from "../render/Context";
import Texture from "../render/Texture";
import PostProcessStage from "./PostProcessStage";

export default class PostProcessStageCollection {
	private stages: Map<string | number, PostProcessStage>;
	private previousActiveStage: PostProcessStage;
	constructor() {
		this.stages = new Map();
		this.previousActiveStage = undefined;
	}
	addStage(stage: PostProcessStage) {
		this.stages.set(stage.id, stage);
	}
	removeStage(id: string | number) {
		return this.stages.get(id);
	}
	render(context: Context, colorTexture: Texture) {
		this.stages.forEach((stage) => {
			if (this.previousActiveStage) {
				stage.render(context, this.previousActiveStage.getColorTexture());
				this.previousActiveStage = stage;
			} else {
				stage.render(context, colorTexture);
			}
		});
	}
	destroy() {
		this.stages.forEach((stage) => {
			stage.destroy();
		});
	}
}
