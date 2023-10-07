import { ShaderDataFactory } from "../core/ShaderDataFactory";
import { Pass, ShaderDataEnum } from "../core/WebGPUTypes";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
import { RenderState } from "./RenderState";
import ShaderData from "./ShaderData";

export class RenderPass {
	public passType: Pass;
	private _shaderSource: ShaderSource;
	private _shaderData: ShaderData;
	private _label: string;
	private _shaderDataEnum: ShaderDataEnum;
	private _renderState: RenderState;
	get shaderSource() {
		return this._shaderSource;
	}
	get shaderData() {
		return this._shaderData;
	}
	set defines(defines) {
		this._shaderSource.setDefines(Object.assign({}, defines));
	}
	constructor(params: { shaderDataEnum: ShaderDataEnum; passType?: Pass; label?: string }) {
		const { label, passType = Pass.RENDER, shaderDataEnum } = params;
		this._label = label;
		this.passType = passType;
		this._shaderDataEnum = shaderDataEnum;
	}
	get renderState() {
		return this._renderState;
	}
	set renderState(value) {
		this._renderState = value;
	}
	update(mesh?: Mesh) {
		const { material, geometry } = mesh;
		const defines = Object.assign({}, geometry?.defines, material?.defines, this?.shaderData?.defines) ?? {};
		if (!this._shaderData || material?.dirty)
			this._shaderData = ShaderDataFactory.createShaderData({
				label: this._label,
				mesh,
				material,
				shaderDataEnum: this._shaderDataEnum
			});
		if (!this._shaderSource)
			this._shaderSource = new ShaderSource({
				shaderId: this._label ?? material?.type
			});
		this._shaderSource.setDefines(defines);
	}
	destroy() {
		this?._shaderData?.destroy();
		this?._shaderSource?.destroy();
	}
}
