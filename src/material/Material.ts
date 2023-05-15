import { FrameState } from "../core/FrameState";
import { CullMode, PrimitiveTopology } from "../core/WebGPUConstant";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import { DepthStencil, RenderState, Target, Primitive } from "../render/RenderState";
import Sampler from "../render/Sampler";
import ShaderData from "../render/ShaderData";
import Texture from "../render/Texture";
import { ShaderSource } from "../shader/ShaderSource";
export class Material {
	public shaderData: ShaderData;

	color?: Color;

	baseSampler?: Sampler;

	baseTexture?: Texture;

	type: string;

	label: string;

	shaderSource: ShaderSource;

	transparent: boolean;

	dirty: boolean;

	light: boolean;

	ready: boolean;

	private _emissive: Color;

	private _opacity: number;

	private _emissiveIntensity: number;

	private _diffuse: Color;

	private _renderState: RenderState;

	private _doubleSided: boolean;

	constructor() {
		this.label = undefined;
		this.type = undefined;
		this.baseTexture = undefined;
		this.baseSampler = undefined;
		this._diffuse = new Color(0.0, 0.0, 0.0);
		this._opacity = 1.0;
		// Buffer
		this.shaderData = undefined;
		this.shaderSource = undefined;
		this.dirty = true;
		this._emissive = new Color(0.0, 0.0, 0);
		this._emissiveIntensity = 1.0;
		this._doubleSided = true;
		this.light = false;
		this.ready = false;
		this.init();
	}
	public set wireframe(value: boolean) {
		this.renderState.primitive.topology = value ? PrimitiveTopology.LineList : PrimitiveTopology.TriangleList;
	}
	public get doubleSided() {
		return this._doubleSided;
	}
	public set doubleSided(value: boolean) {
		this._renderState.primitive.cullMode = value ? CullMode.None : CullMode.Back;
		this._doubleSided = value;
	}
	public get renderState() {
		return this._renderState;
	}
	public set renderState(value: RenderState) {
		this._renderState = value;
	}
	public get diffuse(): Color {
		return this._diffuse;
	}
	public set diffuse(v: Color) {
		this._diffuse = v;
	}
	public get emissive(): Color {
		return this._emissive;
	}
	public set emissive(v: Color) {
		this._emissive = v;
	}
	public get emissiveIntensity(): number {
		return this._emissiveIntensity;
	}
	public set emissiveIntensity(v: number) {
		this._emissiveIntensity = v;
	}
	public get opacity(): number {
		return this._opacity;
	}
	public set opacity(v: number) {
		this._opacity = v;
	}
	onBeforeRender() {}

	onBeforeCompile() {}
	clone(): Material {
		return null;
	}
	update(frameState?: FrameState, mesh?: Mesh) {}
	protected createShaderData(mesh: Mesh, frameState?: FrameState) {
		if (this.shaderData) this.shaderData.destroy();
		this.shaderData = new ShaderData(this.type, 0);
		this.ready = true;
	}
	private init() {
		// 默认渲染状态
		const primitive = new Primitive();
		const target = new Target();
		const depthStencil = new DepthStencil();
		this._renderState = new RenderState();
		this._renderState.primitive = primitive;
		this._renderState.targets = [target];
		this._renderState.depthStencil = depthStencil;
	}
	public destroy() {
		this.label = undefined;
		this.type = undefined;
		this.baseTexture = undefined;
		this.baseSampler = undefined;
		this.color = undefined;
	}
}
