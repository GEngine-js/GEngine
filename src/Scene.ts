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
import { Instance, RenderObjectType } from "./core/WebGPUTypes";
import { Mesh } from "./mesh/Mesh";
import { Light } from "./light/Light";
import Node from "./mesh/Node";
import Camera from "./camera/Camera";
import { ViewPort } from "./render/RenderState";

export class Scene extends EventDispatcher {
	camera: PerspectiveCamera;
	context: Context;
	requestAdapter: {};
	deviceDescriptor: {};
	presentationContextDescriptor: {};
	container: HTMLDivElement;
	frameState: FrameState;
	currentRenderPipeline: IBaseRenderLine;
	viewport: ViewPort;
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
		this.viewport = new ViewPort(0, 0, this.context.presentationSize.width, this.context.presentationSize.height);
		this.ready = true;
	}
	add(instance: Instance) {
		if ([RenderObjectType.Node, RenderObjectType.Skybox, RenderObjectType.Mesh].includes(instance.type)) {
			this.primitiveManger.add(<Mesh>instance);
		} else if (instance.type == RenderObjectType.Light) {
			this.context.lightManger.add(<Light>instance);
		} else if (instance.type == RenderObjectType.PostEffect) {
			this.postEffectCollection.add(<PostEffect>instance);
		}
	}
	remove(instance: Instance) {
		if ([RenderObjectType.Node, RenderObjectType.Skybox, RenderObjectType.Mesh].includes(instance.type)) {
			this.primitiveManger.remove(<Mesh>instance);
		} else if (instance.type == RenderObjectType.Light) {
			this.context.lightManger.remove(<Light>instance);
		} else if (instance.type == RenderObjectType.PostEffect) {
			this.postEffectCollection.remove(<PostEffect>instance);
		}
	}
	setCamera(camera) {
		this.camera = camera;
	}
	resize(width: number, height: number) {
		this.context.resize(width, height);
		this.postEffectCollection.setResolveFrameDirty(true);
	}
	async render(node?: Node, camera?: Camera) {
		if (!this.inited) {
			this.inited = true;
			await this.init();
			this.update(node, camera);
			this.afterRender();
		} else {
			this.update(node, camera);
			this.afterRender();
		}
	}

	afterRender() {}

	public setViewPort(x: number, y: number, width: number, height: number): boolean {
		if (!this.ready) return false;
		this.context.setViewPort(x, y, width, height);
		return true;
	}
	public setScissorTest(x: number, y: number, width: number, height: number): boolean {
		if (!this.ready) return false;
		this.context.setScissorTest(x, y, width, height);
		return true;
	}
	private update(node?: Node, camera?: Camera) {
		if (!this.ready) return;
		//释放纹理
		textureCache.releasedTextures();
		//更新相机
		this.frameState.update(camera ?? this.camera);
		//更新灯光
		this.context.lightManger.update(this.frameState, camera ?? this.camera);
		//update primitive and select
		(node ?? this.primitiveManger).update(this.frameState, camera ?? this.camera);
		//selct renderPipeline
		this.currentRenderPipeline.render(this.frameState, camera ?? this.camera);
		//后处理
		this.postEffectCollection.render(this.context, this.currentRenderPipeline.getOutputTexture());
	}
}
