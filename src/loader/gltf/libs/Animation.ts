import { Quaternion } from "../../../math/Quaternion";
import Vector4 from "../../../math/Vector4";
import { AnimationChannel } from "./AnimationChannel";
import { AnimationSampler } from "./AnimationSampler";

export class Animation {
	constructor(public name: string, public samplers: AnimationSampler[], public channels: AnimationChannel[]) {}
	play(time: number) {
		let node, animationSampler, target;
		this?.channels?.map((channel) => {
			animationSampler = channel.sampler;
			animationSampler.getValue(time);
			target = channel.target;
			node = target.node;
			switch (target.path) {
				case "rotation":
					Quaternion.clone(animationSampler.currentValue, node.quaternion);
					break;
				case "translation":
					Vector4.clone(animationSampler.currentValue, node.position);
					break;
				case "scale":
					Vector4.clone(animationSampler.currentValue, node.scale);
					break;
			}
		});
	}
}
