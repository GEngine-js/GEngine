import {
	ShaderDefine,
	ShaderString,
	computeParams,
	renderParams,
	ShaderModule,
	ShaderSourceParams,
	ShaderFunc
} from "../core/WebGPUTypes";
import getVertFrag from "./Shaders";
export class ShaderSource {
	public compute: computeParams;
	public render: renderParams;
	public shaderId: string;
	public dirty: boolean;
	public defines?: ShaderDefine;
	private _uid: string;
	private _shaderModule: ShaderModule;
	constructor(options: ShaderSourceParams) {
		this.shaderId = options.shaderId;
		this.defines = options.defines || {};
		this.render = options.render;
		this.compute = options.compute;
	}
	get uid() {
		this._uid = this.shaderId.concat(JSON.stringify(this.defines));
		return this._uid;
	}
	public setDefines(defines) {
		if (!defines) return;
		this.dirty = true;
		this.defines = Object.assign(this.defines, defines);
	}
	public getShaderModule(device: GPUDevice): ShaderModule {
		if (this.dirty) {
			const { vert, frag, compute } = this.getShaderStr() || {};
			const vertGPUModule = vert ? device.createShaderModule({ code: vert }) : undefined;
			const fragGPUModule = frag ? device.createShaderModule({ code: frag }) : undefined;
			const computeGPUModule = compute ? device.createShaderModule({ code: compute }) : undefined;
			this._shaderModule = {
				vert: vertGPUModule,
				frag: fragGPUModule,
				compute: computeGPUModule
			};
			this.dirty = false;
		}
		return this._shaderModule;
	}
	public destroy() {
		this.render = null;
		this.compute = null;
		this._shaderModule = null;
		this.defines = null;
	}
	private getShaderStr(): ShaderString {
		const { fragShader, vertShader } = this.render || {};
		const { computeShader } = this.compute || {};
		const source = getVertFrag(this.shaderId, this.defines);
		const vert =
			source?.vert ?? (vertShader instanceof Function ? (<ShaderFunc>vertShader)(this.defines) : vertShader);
		const frag =
			source?.frag ?? (fragShader instanceof Function ? (<ShaderFunc>fragShader)(this.defines) : fragShader);
		const compute = computeShader instanceof Function ? (computeShader as ShaderFunc)(this.defines) : computeShader;
		return {
			vert,
			frag,
			compute
		};
	}
	static replaceMain(source: string, renamedMain: string) {
		renamedMain = `void ${renamedMain}()`;
		return source.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, renamedMain);
	}
}
