import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import RenderObject from "../core/RenderObject";
import createGuid from "../utils/createGuid";
import { Mesh } from "./Mesh";

export default class Node extends RenderObject {
	uid: string;
	id: number;
	isNode: boolean;
	children: Node[];
	parent: Node;
	meshList: Array<Mesh>;
	constructor() {
		super();
		this.isNode = true;
		this.children = [];
		this.parent = null;
		this.uid = createGuid();
	}
	add(node: Node) {
		node.parent = this;
		this.children.push(node);
	}
	remove(node: Node) {}
	update(frameState: FrameState, camera?: Camera) {
		if (this.parent) this.updateMatrix(this.parent.modelMatrix);
		this.children.forEach((node: Node) => {
			node.update(frameState, camera);
		});
	}
	destroy() {
		this.meshList.forEach((mesh: Mesh) => {
			mesh?.destroy();
		});
		this.children.forEach((node: Node) => {
			node.destroy();
		});
	}
	traverse(traverseFunction: Function, param: { [prop: string]: any }): void {
		for (let i = 0, len = this.children.length; i < len; i++) {
			this.children[i].traverse(traverseFunction, param);
		}
	}
}
