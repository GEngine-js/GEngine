import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import createGuid from "../utils/createGuid";
import { Mesh } from "./Mesh";

export default class Node extends Mesh {
	uid: string;
	id: number;
	isNode: boolean;
	children: Map<string, Node>;
	parent: Node;
	meshList: Array<Mesh>;
	constructor() {
		super();
		this.isNode = true;
		this.children = new Map();
		this.parent = null;
		this.uid = createGuid();
	}
	add(node: Node) {
		node.parent = this;
		this.children.set(node.uid, node);
	}
	remove(node: Node) {
		this.children.delete(node.uid);
	}
	update(frameState: FrameState, camera?: Camera) {
		if (this.parent) this.updateMatrix(this.parent.modelMatrix);
		if (this.meshList)
			this.meshList.map((mesh: Mesh) => {
				mesh.update(frameState, camera, this.modelMatrix);
			});
		this?.children?.forEach?.((node: Node) => {
			node.update(frameState, camera);
		});
	}
	destroy() {
		this.meshList.map((mesh: Mesh) => {
			mesh?.destroy();
		});
		this.children.forEach((node: Node) => {
			node.destroy();
		});
		this?.children?.clear();
	}
	traverse(traverseFunction: Function, param: { [prop: string]: any }): void {
		for (let i = 0, len = this.children.size; i < len; i++) {
			this.children.forEach((child) => {
				child.traverse(traverseFunction, param);
			});
		}
	}
}
