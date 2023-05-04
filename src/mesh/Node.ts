import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { RenderObjectType } from "../core/WebGPUTypes";
import Matrix4 from "../math/Matrix4";
import createGuid from "../utils/createGuid";
import { Mesh } from "./Mesh";

export default class Node extends Mesh {
	uid: string;
	children: Map<string, Node | Mesh>;
	name: string;
	constructor() {
		super();
		this.isNode = true;
		this.type = RenderObjectType.Node;
		this.children = new Map();
		this.parent = null;
		this.uid = createGuid();
	}
	add(node: Node | Mesh) {
		//if (node.type == RenderObjectType.Node)
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
	traverse(traverseFunction: Function, param: { [prop: string]: any }): void {
		for (let i = 0, len = this.children.size; i < len; i++) {
			this.children.forEach((child) => {
				child.traverse(traverseFunction, param);
			});
		}
	}
}
