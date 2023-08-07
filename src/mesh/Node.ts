import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import RenderObject from "../core/RenderObject";
import { RenderObjectType } from "../core/WebGPUTypes";
import createGuid from "../utils/createGuid";
import { Mesh } from "./Mesh";

export default class Node extends RenderObject {
	uid: string;
	children: Map<string, Node | Mesh>;
	name: string;
	constructor() {
		super();
		this.type = RenderObjectType.Node;
		this.children = new Map();
		this.parent = null;
		this.uid = createGuid();
	}
	add(node: Node | Mesh) {
		node.parent = this;
		this.children.set(node.uid, node);
	}
	remove(node: Node | Mesh) {
		this.children.delete(node.uid);
	}
	update(frameState: FrameState, camera?: Camera) {
		this.updateMatrix(this?.parent?.modelMatrix?.clone());
		this?.children?.forEach?.((node) => {
			node.update(frameState, camera);
		});
	}
	destroy() {
		this.children.forEach((node) => {
			node.destroy();
		});
		this?.children?.clear();
	}
	// eslint-disable-next-line @typescript-eslint/ban-types
	traverse(traverseFunction: Function, param: { [prop: string]: any }): void {
		for (let i = 0, len = this.children.size; i < len; i++) {
			this.children.forEach((child) => {
				child.traverse(traverseFunction, param);
			});
		}
	}
}
