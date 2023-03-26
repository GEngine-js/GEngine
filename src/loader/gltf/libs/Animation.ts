import { AnimationChannel } from "./AnimationChannel";
import { AnimationSampler } from "./AnimationSampler";

export class Animation {
	samplers: AnimationSampler[];
	channels: AnimationChannel[];
	name: string;
	constructor() {}
}
