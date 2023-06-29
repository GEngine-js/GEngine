import Camera from "./camera/Camera";
import PerspectiveCamera from "./camera/PerspectiveCamera";
import { EventDispatcher } from "./core/EventDispatcher";
import { FrameState, Background } from "./core/FrameState";
import LightManger from "./core/LightManger";
import MeshManger from "./core/MeshManger";
import textureCache from "./core/TextureCache";
import { Instance, RenderObjectType } from "./core/WebGPUTypes";
import { Light } from "./light/Light";
import { Mesh } from "./mesh/Mesh";
import Node from "./mesh/Node";
import PostEffect from "./post-process/PostEffect";
import PostEffectCollection from "./post-process/PostEffectCollection";
import Context from "./render/Context";
import { ViewPort } from "./render/RenderState";
import ForwardRenderLine from "./renderpipeline/ForwardRenderLine";
import IBaseRenderLine from "./renderpipeline/IBaseRenderLine";

export class Scene extends EventDispatcher {
	camera: PerspectiveCamera;
	context: Context;
	requestAdapter: object;
	deviceDescriptor: object;
	presentationContextDescriptor: object;
	container: HTMLDivElement;
	frameState: FrameState;
	currentRenderPipeline: IBaseRenderLine;
	viewport: ViewPort;
	background: Background;
	private ready: boolean;
	private inited: boolean;
	private meshManger: MeshManger;
	private postEffectCollection: PostEffectCollection;
	private lightManger: LightManger;
	constructor(options) {
		super();
		this.container =
			options.container instanceof HTMLDivElement
				? options.container
				: document.getElementById(options.container);
		this.meshManger = new MeshManger();
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
		this.lightManger = new LightManger({ openShadow: true });
		this.background = options.background;
	}
	private async init() {
		await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor);
		this.currentRenderPipeline = new ForwardRenderLine(this.context);
		this.frameState = new FrameState(this.context, this.lightManger, FrameState.getFrameStateOptionsByScene(this));
		this.viewport = new ViewPort(0, 0, this.context.presentationSize.width, this.context.presentationSize.height);
		this.ready = true;
	}
	add(instance: Instance) {
		if (
			[RenderObjectType.Node, RenderObjectType.Skybox, RenderObjectType.Mesh, RenderObjectType.Debug].includes(
				instance.type
			)
		) {
			this.meshManger.add(<Mesh>instance);
		} else if (instance.type == RenderObjectType.Light) {
			this.lightManger.add(<Light>instance);
		} else if (instance.type == RenderObjectType.PostEffect) {
			this.postEffectCollection.add(<PostEffect>instance);
		}
	}
	remove(instance: Instance) {
		if ([RenderObjectType.Node, RenderObjectType.Skybox, RenderObjectType.Mesh].includes(instance.type)) {
			this.meshManger.remove(<Mesh>instance);
		} else if (instance.type == RenderObjectType.Light) {
			this.lightManger.remove(<Light>instance);
		} else if (instance.type == RenderObjectType.PostEffect) {
			this.postEffectCollection.remove(<PostEffect>instance);
		}
	}
	setCamera(camera) {
		this.camera = camera;
	}
	resize(width: number, height: number) {
		this.context.resize(width, height);
		this?.currentRenderPipeline?.setSize(width, height);
		this?.postEffectCollection?.setSize(width, height);
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

	afterRender() {
		// TODO
	}

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
		// 释放纹理
		textureCache.releasedTextures();
		// 更新FrameState
		this.frameState.update(camera ?? this.camera, FrameState.getFrameStateOptionsByScene(this));
		// update primitive and select
		(node ?? this.meshManger).update(this.frameState, camera ?? this.camera);
		// selct renderPipeline
		this.currentRenderPipeline.render(this.frameState, camera ?? this.camera);
		// 后处理
		this.postEffectCollection.render(this.context, this.currentRenderPipeline.getOutputTexture());
	}
}
