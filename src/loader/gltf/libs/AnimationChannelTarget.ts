import { GLTFNode } from "./GLTFNode";

export class AnimationChannelTarget {
	node: GLTFNode;
	path: "translation" | "rotation" | "scale" | "weights";
	constructor(node, path) {
		this.node = node;
		this.path = path;
	}
}
