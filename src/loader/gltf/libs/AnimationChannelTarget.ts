export class AnimationChannelTarget {
	node: Node;
	path: "translation" | "rotation" | "scale" | "weights";
	constructor(node, path) {
		this.node = node;
		this.path = path;
	}
}
