import { Mesh } from "../../../mesh/Mesh";
import { Skin } from "./Skin";
import Node from "../../../mesh/Node";
import { FrameState } from "../../../core/FrameState";
import Camera from "../../../camera/Camera";

export class GLTFNode extends Node {
	meshList: Array<Mesh>;
	skin?: Skin; //暂时挂载这里
	constructor() {
		super();
	}
	update(frameState: FrameState, camera?: Camera) {
		this.updateMatrix(this?.parent?.modelMatrix ?? undefined);
		this?.children?.forEach?.((node: Node) => {
			node.update(frameState, camera);
		});
		if (this.skin) this.skin.update(this.modelMatrix);
		if (this.meshList)
			this?.meshList?.map?.((mesh: Mesh) => {
				mesh.update(frameState, camera, this.modelMatrix);
			});
	}
	destroy() {
		this.meshList.map((mesh: Mesh) => {
			mesh?.destroy();
		});
		super.destroy();
	}
}
