import IClone from "../core/IClone";
import { RenderObjectType } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Context from "../render/Context";
import { Primitive, RenderState, Target } from "../render/RenderState";
import RenderTarget from "../render/RenderTarget";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";

export default class PostEffect implements IClone {
	width: number;

	height: number;

	defaultSampler: Sampler;

	resolveToCanvas: boolean;

	currentRenderTarget: RenderTarget;

	fullScreenQuad: Mesh;

	renderState: RenderState;

	id: string;

	priority: number;

	isPostEffect: boolean;

	type: RenderObjectType;

	constructor(width: number, height: number, id: string) {
		this.width = width;
		this.height = height;
		this.initDefaultParms();
		this.id = id;
		this.priority = 0;
		this.isPostEffect = true;
		this.type = RenderObjectType.PostEffect;
	}
	render(context: Context, colorTexture: Texture): Texture {
		return null;
	}
	destroy() {}
	protected renderMesh(context: Context) {
		this.fullScreenQuad.material.dirty = true;
		this.fullScreenQuad.material.update();
		const drawComand = this.fullScreenQuad.getDrawCommand();
		const currentRenderPassEncoder = this.currentRenderTarget.beginRenderPassEncoder(context);
		drawComand.render(context, currentRenderPassEncoder);
		this.currentRenderTarget.endRenderPassEncoder();
	}
	private initDefaultParms() {
		const geometry = new Geometry({});
		geometry.setAttribute(
			new Float32Attribute("position", [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0], 2)
		);
		geometry.count = 6;
		//rs
		const primitive = new Primitive();
		const target = new Target();
		// target.format=TextureFormat.RGBA8Unorm
		const renderState = new RenderState();
		renderState.primitive = primitive;
		renderState.targets = [target];
		this.renderState = renderState;
		this.fullScreenQuad = new Mesh(geometry);

		this.defaultSampler = new Sampler();
	}
}
