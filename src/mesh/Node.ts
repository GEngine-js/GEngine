import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { RenderObjectType } from "../core/WebGPUTypes";
import { Skin } from "../loader/gltf/libs/Skin";
import Matrix4 from "../math/Matrix4";
import createGuid from "../utils/createGuid";
import { Mesh } from "./Mesh";

export default class Node extends Mesh {
	uid: string;
	children: Map<string, Node | Mesh>;
	parent: Node;
	constructor() {
		super();
		this.isNode = true;
		this.type = RenderObjectType.Node;
		this.children = new Map();
		this.parent = null;
		this.uid = createGuid();
	}
	add(node: Node | Mesh) {
		if (node.type == RenderObjectType.Node) node.parent = this;
		this.children.set(node.uid, node);
	}
	remove(node: Node | Mesh) {
		this.children.delete(node.uid);
	}
	update(frameState: FrameState, camera?: Camera, matrix?: Matrix4) {
		this.updateMatrix(matrix);
		this?.children?.forEach?.((node) => {
			node.update(frameState, camera, this.modelMatrix);
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
