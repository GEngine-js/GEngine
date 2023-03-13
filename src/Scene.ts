import PerspectiveCamera from "./camera/PerspectiveCamera";
import { EventDispatcher } from "./core/EventDispatcher";
import { FrameState } from "./core/FrameState";
import PrimitiveManger from "./core/PrimitiveManger";
import Context from "./render/Context";
import ForwardRenderLine from "./renderpipeline/ForwardRenderLine";
import IBaseRenderLine from "./renderpipeline/IBaseRenderLine";
import textureCache from "./core/TextureCache";
import PostEffectCollection from "./post-process/PostEffectCollection";
import PostEffect from "./post-process/PostEffect";
import { Instance } from "./core/WebGPUTypes";
import { Mesh } from "./mesh/Mesh";
import { Light } from "./light/Light";

export class Scene extends EventDispatcher {
	camera: PerspectiveCamera;
	context: Context;
	requestAdapter: {};
	deviceDescriptor: {};
	presentationContextDescriptor: {};
	container: HTMLDivElement;
	frameState: FrameState;
	currentRenderPipeline: IBaseRenderLine;
	viewport: { x: number; y: number; width: number; height: number };
	private ready: boolean;
	private inited: boolean;
	private primitiveManger: PrimitiveManger;
	private postEffectCollection: PostEffectCollection;
	constructor(options) {
		super();
		this.container =
			options.container instanceof HTMLDivElement
				? options.container
				: document.getElementById(options.container);
		this.primitiveManger = new PrimitiveManger();
		this.postEffectCollection = new PostEffectCollection();
		this.context = new Context({
			canvas: null,
			container: this.container,
			pixelRatio: 1
		});
		this.requestAdapter = options.requestAdapter || {};
		this.deviceDescriptor = options.deviceDescriptor || {};
		this.presentationContextDescriptor = options.presentationContextDescriptor;
		this.ready = false;
		this.inited = false;
	}
	private async init() {
		await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor);
		this.currentRenderPipeline = new ForwardRenderLine(this.context);
		this.frameState = new FrameState(this.context);
		this.viewport = {
			x: 0,
			y: 0,
			width: this.context.presentationSize.width,
			height: this.context.presentationSize.height
		};
		this.ready = true;
	}
	add(instance: Instance) {
		if ((instance as Mesh)?.isMesh) {
			this.primitiveManger.add(<Mesh>instance);
		} else if ((instance as Light)?.isLight) {
			this.context.lightManger.add(<Light>instance);
		} else if ((instance as PostEffect)?.isPostEffect) {
			this.postEffectCollection.add(<PostEffect>instance);
		}
	}
	remove(instance: Instance) {
		if ((instance as Mesh)?.isMesh) {
			this.primitiveManger.remove(<Mesh>instance);
		} else if ((instance as Light)?.isLight) {
			this.context.lightManger.remove(<Light>instance);
		} else if ((instance as PostEffect)?.isPostEffect) {
			this.postEffectCollection.remove(<PostEffect>instance);
		}
	}
	setCamera(camera) {
		this.camera = camera;
	}
	resize(width: number, height: number) {
		this.context.resize(width, height);
	}
	async render() {
		if (!this.inited) {
			this.inited = true;
			await this.init();
			this.update();
		} else {
			this.update();
		}
	}
	private update() {
		if (!this.ready) return;
		//释放纹理
		textureCache.releasedTextures();
		//更新相机
		this.frameState.viewport = this.viewport;
		this.frameState.update(this.camera);
		//更新灯光
		this.context.lightManger.update(this.frameState, this.camera);
		//update primitive and select
		this.primitiveManger.update(this.frameState, this.camera);
		//selct renderPipeline
		this.currentRenderPipeline.render(this.frameState, this.camera);
		//后处理
		this.postEffectCollection.render(this.context, this.currentRenderPipeline.getOutputTexture());
	}
}
