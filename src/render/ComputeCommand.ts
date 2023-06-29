import { ShaderSource } from "../shader/ShaderSource";
import { Command } from "./Command";
import Pipeline from "./Pipeline";
import ShaderData from "./ShaderData";

export class ComputeCommand implements Command {
	public dispatch?: { x?: number; y?: number; z?: number };
	public shaderSource?: ShaderSource;
	public shaderData?: ShaderData;
	constructor(options: ComputeCommandType) {
		this.dispatch = options.dispatch;
		this.shaderData = options.shaderData;
		this.shaderSource = options.shaderSource;
	}
	render(params?: ComputeParams): void {
		const { device, passEncoder } = params;
		const pipeline = Pipeline.getComputePipelineFromCache(device, this, [this.shaderData.groupLayout]);
		pipeline.bind(passEncoder);
		const { x, y, z } = this.dispatch;
		passEncoder.dispatchWorkgroups(x, y, z);
	}
}
type ComputeCommandType = {
	dispatch?: { x?: number; y?: number; z?: number };

	shaderSource?: ShaderSource;

	shaderData?: ShaderData;
};
type ComputeParams = {
	device?: GPUDevice;
	passEncoder?: GPUComputePassEncoder;
};
