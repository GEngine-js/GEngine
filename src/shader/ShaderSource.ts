import defaultValue from "../utils/defaultValue";
import getVertFrag from "./Shaders";
export interface GPUShaderModuleObject {
	vert: GPUShaderModule;
	frag: GPUShaderModule;
}
export class ShaderSource {
	vertEntryPoint?: string;
	fragEntryPoint?: string;
	vert?: string;
	frag?: string;
	compute?: string;
	computeMain?: string;
	defines?: {};
	dirty: boolean;
	render: boolean;
	type: string;
	private _uid: string;
	private custom: boolean;
	constructor(options) {
		this.type = options.type;
		this.defines = options.defines;
		this.custom = defaultValue(options.custom, false);
		this.dirty = true;
		if (options.render) {
			this.render = true;
			this.vertEntryPoint = options.vertMain || "main";
			this.fragEntryPoint = options.fragMain || "main";
			this.vert = options.vert || undefined;
			this.frag = options.frag || undefined;
		} else {
			this.compute = options.compute || undefined;
			this.computeMain = options.computeMain || "main";
		}
	}
	get uid() {
		this._uid = this.type.concat(JSON.stringify(this.defines));
		return this._uid;
	}
	private updateShaderStr() {
		if (this.custom) {
			if (this.compute) {
				this.compute = ShaderSource.compileCustomShader(this.compute, this.defines);
			} else {
				this.vert = ShaderSource.compileCustomShader(this.vert, this.defines);
				this.frag = ShaderSource.compileCustomShader(this.frag, this.defines);
			}
		} else {
			const source = getVertFrag(this.type, this.defines);

			this.vert = source.vert;
			this.frag = source.frag;
		}
	}
	public setDefines(defines) {
		this.dirty = true;
		this.defines = Object.assign(this.defines, defines);
	}
	createShaderModule(device: GPUDevice): { vert: GPUShaderModule; frag: GPUShaderModule } | GPUShaderModule {
		if (this.dirty) {
			this.updateShaderStr();
			this.dirty = false;
		}
		if (this.render) {
			const vert = this.vert
				? device.createShaderModule({
						code: this.vert
				  })
				: undefined;
			const frag = this.frag
				? device.createShaderModule({
						code: this.frag
				  })
				: undefined;

			return { vert, frag };
		} else {
			const compute = device.createShaderModule({
				code: this.compute
			});
			return compute;
		}
	}
	static replaceMain(source: string, renamedMain: string) {
		renamedMain = `void ${renamedMain}()`;
		return source.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, renamedMain);
	}
	static compileCustomShader(template, defines): string {
		const reg = /\{\{(\w+)\}\}/;
		if (reg.test(template)) {
			const name = reg.exec(template)[1];
			template = template.replace(reg, defines[name]);
			return ShaderSource.compileCustomShader(template, defines);
		}
		return template;
	}
}
