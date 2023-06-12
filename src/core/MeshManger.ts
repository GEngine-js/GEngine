import Camera from "../camera/Camera";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "./FrameState";
export default class MeshManger {
	private _list: Map<string | number, Mesh>;
	constructor() {
		this._list = new Map();
	}
	get length() {
		return this._list.size;
	}
	update(frameState: FrameState, camera: Camera): void {
		this._list.forEach((instance) => {
			instance.update(frameState, camera);
		});
	}
	add(instance: Mesh): Mesh {
		if (this._list.get(instance.uid)) return this._list.get(instance.uid);
		this._list.set(instance.uid, instance);
		return instance;
	}
	remove(instance: Mesh): boolean {
		if (this._list.get(instance.uid)) {
			instance.destroy();
			this._list.delete(instance.uid);
			return true;
		}
		return false;
	}
	contains(instance: Mesh) {
		return !!this._list.get(instance.uid);
	}
}
