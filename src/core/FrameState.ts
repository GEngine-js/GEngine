import Context from "../render/Context";
import Pass from "../pass/Pass";
import combine from "../utils/combine";
import CullingVolume from "./CullingVolume";
import RenderQueue from "./RenderQueue";
import Camera from "../camera/Camera";
import LightManger from "./LightManger";
export class FrameState {
	public pass: Pass;
	public renderQueue: RenderQueue;
	public drawCallnums: number;
	public geometryMemory: number;
	public textureMemory: number;
	public frameNumber: number;
	public cullingVolume: CullingVolume;
	public definesDirty: boolean;
	private _defines: {};
	constructor(public context: Context, public lightManger?: LightManger) {
		this.renderQueue = new RenderQueue();
		this.geometryMemory = 0;
		this.textureMemory = 0;
		this.frameNumber = 0;
		this._defines = {};
		this.definesDirty = true;
	}
	get defines() {
		return this._defines;
	}
	set defines(value) {
		this.definesDirty = true;
		this._defines = combine(value, this._defines, false);
	}
	update(camera: Camera) {
		this.renderQueue.reset();
		this?.lightManger?.update?.(this, camera);
		this.cullingVolume = camera.getCullingVolume();
		this.frameNumber += 1;
	}

	resetCullingVolume(camera: Camera) {
		this.cullingVolume = camera.getCullingVolume();
	}
}
