import { ShaderDataFactory } from "../core/ShaderDataFactory";
import { PassEnum, ShaderDataEnum } from "../core/WebGPUTypes";
import { Material } from "../material/Material";
import { Mesh } from "../mesh/Mesh";
import { ShaderSource } from "../shader/ShaderSource";
import ShaderData from "./ShaderData";

export class RenderPass {
	public passType: PassEnum;
	private _shaderSource: ShaderSource;
	private _shaderData: ShaderData;
	private _label: string;
	private _shaderDataEnum: ShaderDataEnum;
	get shaderSource() {
		return this._shaderSource;
	}
	get shaderData() {
		return this._shaderData;
	}
	set defines(defines) {
		this._shaderSource.setDefines(Object.assign({}, defines));
	}
	constructor(params: { label: string; passType: PassEnum; shaderDataEnum: ShaderDataEnum }) {
		const { label, passType, shaderDataEnum } = params;
		this._label = label;
		this.passType = passType;
		this._shaderDataEnum = shaderDataEnum;
	}
	update(mesh?: Mesh, material?: Material) {
		if (!this._shaderData || material.dirty)
			this._shaderData = ShaderDataFactory.createShaderData({
				label: this._label,
				mesh,
				material,
				shaderDataEnum: this._shaderDataEnum
			});
		if (!this._shaderSource)
			this._shaderSource = new ShaderSource({
				shaderId: this._label
			});
		this._shaderSource.setDefines(Object.assign({}, material?.defines, this?.shaderData?.defines));
	}
	destroy() {
		this?._shaderData?.destroy();
		this?._shaderSource?.destroy();
	}
}
