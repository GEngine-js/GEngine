import Geometry from "../geometry/Geometry";
import { Mesh } from "../mesh/Mesh";
import { Float32Attribute } from "../render/Attribute";
import Context from "../render/Context";
import { Primitive, RenderState, Target } from "../render/RenderState";
import RenderTarget from "../render/RenderTarget";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";

export default class PostEffect {
	width: number;

	height: number;

	defaultSampler: Sampler;

	resolveToCanvas: boolean;

	currentRenderTarget: RenderTarget;

	fullScreenQuad: Mesh;

	renderState: RenderState;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.initDefaultParms();
	}
	setSize(width: number, height: number, depth?: number) {}
	render(context: Context, colorTexture: Texture) {}
	protected renderMesh(context: Context) {
		const drawComand = this.fullScreenQuad.getDrawCommand();
		const currentRenderPassEncoder = this.currentRenderTarget.beginRenderPassEncoder(context);
		context.render(drawComand, currentRenderPassEncoder);
		this.currentRenderTarget.endRenderPassEncoder();
	}
	private initDefaultParms() {
		const geometry = new Geometry();
		geometry.setAttribute(
			new Float32Attribute("position", [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0], 2)
		);
		geometry.count = 6;
		//rs
		const primitive = new Primitive();
		const target = new Target();
		const renderState = new RenderState();
		renderState.primitive = primitive;
		renderState.targets = [target];
		this.renderState = renderState;
		this.fullScreenQuad = new Mesh(geometry);

		this.defaultSampler = new Sampler();
	}
}
