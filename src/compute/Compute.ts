import { Uniforms } from "../core/WebGPUTypes";
import { ComputeCommand } from "../render/ComputeCommand";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { addUniformToShaderData, checkContainFloatType } from "../utils/uniformUtils";

export class Compute {
	public shaderData: ShaderData;
	public uniforms: Uniforms;
	public computeShader: string;
	public name: string;
	public dirty: boolean;
	public uniformBuffer: UniformBuffer;
	public computeCommand: ComputeCommand;
	public dispatch: { x?: number; y?: number; z?: number };
	public type: string;
	private shaderSource: ShaderSource;
	constructor(options: computeProps) {
		this.type = "compute";
		this.name = options.name;
		this.computeShader = options.computeShader;
		this.uniforms = options.uniforms;
		this.dirty = true;
		this.computeCommand = undefined;
		this.dispatch = options.dispatch;
		this.shaderSource = new ShaderSource({
			shaderId: this.name,
			defines: {},
			compute: {
				computeShader: this.computeShader
			}
		});
	}
	public getCommand() {
		if (this.dirty) {
			this.dirty = false;
			this.computeCommand = new ComputeCommand({
				shaderData: this.createShaderData(),
				dispatch: this.dispatch,
				shaderSource: this.shaderSource
			});
		}
		return this.computeCommand;
	}
	public destroy() {
		if (this.shaderData) this.shaderData?.destroy();
		if (this.uniformBuffer) this.uniformBuffer?.destroy();
	}
	private createShaderData(): ShaderData {
		this.destroy();
		this.shaderData = new ShaderData(this.name, 0);
		if (checkContainFloatType(this.uniforms)) {
			this.uniformBuffer = new UniformBuffer({ label: this.name });
			this.shaderData.setUniformBuffer(this.name, this.uniformBuffer);
		}
		const uniformsNames = Object.getOwnPropertyNames(this.uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(
				uniformsName,
				this.uniforms[uniformsName],
				this.uniforms,
				this.shaderData,
				undefined,
				this.uniformBuffer
			);
		});
		return this.shaderData;
	}
}
type computeProps = {
	uniforms: Uniforms;
	computeShader: string;
	name: string;
	dispatch: { x?: number; y?: number; z?: number };
};
