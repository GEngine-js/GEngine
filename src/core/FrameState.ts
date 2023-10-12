import Camera from "../camera/Camera";
import Color from "../math/Color";
import Context from "../render/Context";
import Texture from "../render/Texture";
import { Scene } from "../Scene";
import { Frustum } from "./Frustum";
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
	public renderQueue: RenderQueue;
	public drawCallnums: number;
	public geometryMemory: number;
	public textureMemory: number;
	public frameNumber: number;
	public frustum: Frustum;
	constructor(public context: Context, public lightManger?: LightManger, options: FrameStateOptions = {}) {
		this.background = options.background;
		this.renderQueue = new RenderQueue();
		this.geometryMemory = 0;
		this.textureMemory = 0;
		this.frameNumber = 0;
		this.frustum = new Frustum();
	}
	update(camera: Camera, options: FrameStateOptions = {}) {
		this.background = options.background;

		this.renderQueue.reset();
		this?.lightManger?.update?.();
		this.frustum.update(camera);
		this.frameNumber += 1;
	}
	static getFrameStateOptionsByScene(sceneInstance: Scene) {
		return {
			background: sceneInstance.background
		};
	}
}
