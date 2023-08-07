import Camera from "../camera/Camera";
import Color from "../math/Color";
import Pass from "../pass/Pass";
import Context from "../render/Context";
import Texture from "../render/Texture";
import { Scene } from "../Scene";
import combine from "../utils/combine";
import CullingVolume from "./CullingVolume";
import LightManger from "./LightManger";
import RenderQueue from "./RenderQueue";

interface FrameStateOptions {
	background?: Background;
}

export interface Background {
	value: Color | Texture;
	opacity: number;
}

export class FrameState {
	public background: Background;
	public pass: Pass;
	public renderQueue: RenderQueue;
	public drawCallnums: number;
	public geometryMemory: number;
	public textureMemory: number;
	public frameNumber: number;
	public cullingVolume: CullingVolume;
	public definesDirty: boolean;
	private _defines: object;
	constructor(public context: Context, public lightManger?: LightManger, options: FrameStateOptions = {}) {
		this.background = options.background;
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
	update(camera: Camera, options: FrameStateOptions = {}) {
		this.background = options.background;

		this.renderQueue.reset();
		this?.lightManger?.update?.();
		this.cullingVolume = camera.getCullingVolume();
		this.frameNumber += 1;
	}

	resetCullingVolume(camera: Camera) {
		this.cullingVolume = camera.getCullingVolume();
	}

	static getFrameStateOptionsByScene(sceneInstance: Scene) {
		return {
			background: sceneInstance.background
		};
	}
}
