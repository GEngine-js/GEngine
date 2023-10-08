import { FrameState } from "../core/FrameState";
import { CullMode, PrimitiveTopology } from "../core/WebGPUConstant";
import { ShaderDefine } from "../core/WebGPUTypes";
import Color from "../math/Color";
import { Mesh } from "../mesh/Mesh";
import { DepthStencil, RenderState, Target, Primitive } from "../render/RenderState";
import Sampler from "../render/Sampler";
import ShaderData from "../render/ShaderData";
import Texture from "../render/Texture";
import { ShaderSource } from "../shader/ShaderSource";
export class Material {
	public shaderData: ShaderData;

	private _defines: ShaderDefine;

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
		this._defines = {};
		this.init();
	}
	public set defines(defines) {
		this._defines = Object.assign({}, defines, this._defines);
	}
	public get defines() {
		return this._defines;
	}
	public set wireframe(value: boolean) {
		this.renderState.primitive.topology = value ? PrimitiveTopology.LineList : PrimitiveTopology.TriangleList;
	}
	public set topology(value: PrimitiveTopology) {
		this.renderState.primitive.topology = value;
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
	onBeforeRender() {
		// callback
	}

	onBeforeCompile() {
		// callback
	}
	clone(): Material {
		return null;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	update(frameState?: FrameState, mesh?: Mesh) {
		// update material
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
