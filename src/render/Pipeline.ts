import BindGroupLayout from "./BindGroupLayout";
import { ComputeCommand } from "./ComputeCommand";
import DrawCommand from "./DrawCommand";
import { PipelineLayout } from "./PipelineLayout";
import { RenderState } from "./RenderState";

const renderPipelines = new Map();
const computePipelines = new Map();
export default class Pipeline {
	gpuPipeline: GPURenderPipeline | GPUComputePipeline;
	type: string;
	device: GPUDevice;
	descriptor: GPURenderPipelineDescriptor | GPUComputePipelineDescriptor;
	constructor(
		type: string,
		device: GPUDevice,
		descriptor: GPURenderPipelineDescriptor | GPUComputePipelineDescriptor
	) {
		this.type = type;
		this.descriptor = descriptor;
		this.device = device;
		this.createPipeline();
	}
	private createPipeline() {
		if (this.type == "render") {
			this.gpuPipeline = this.device.createRenderPipeline(this.descriptor as GPURenderPipelineDescriptor);
		} else {
			this.gpuPipeline = this.device.createComputePipeline(this.descriptor as GPUComputePipelineDescriptor);
		}
	}
	public bind(passEncoder: GPURenderPassEncoder | GPUComputePassEncoder) {
		if (this.type == "render") {
			(passEncoder as GPURenderPassEncoder).setPipeline(this.gpuPipeline as GPURenderPipeline);
		} else {
			(passEncoder as GPUComputePassEncoder).setPipeline(this.gpuPipeline as GPUComputePipeline);
		}
	}
	static getRenderPipelineFromCache(
		device: GPUDevice,
		drawComand: DrawCommand,
		groupLayouts: BindGroupLayout[]
	): Pipeline {
		const { renderState, shaderSource } = drawComand;
		const rsStr = JSON.stringify(renderState);
		const combineStr = shaderSource.uid.concat(rsStr);
		const hashId = stringToHash(combineStr);
		const combineLayouts = groupLayouts
			?.filter((layout) => layout != undefined)
			?.sort((layout1, layout2) => layout1.index - layout2.index);
		let pipeline = renderPipelines.get(hashId);
		if (!pipeline) {
			const descriptor = Pipeline.getPipelineDescriptor(
				device,
				drawComand,
				renderState,
				combineLayouts,
				hashId.toString()
			);
			pipeline = new Pipeline("render", device, descriptor);
			renderPipelines.set(hashId, pipeline);
		}
		return pipeline;
	}
	static getComputePipelineFromCache(
		device: GPUDevice,
		computeCommad: ComputeCommand,
		groupLayouts: BindGroupLayout[]
	): Pipeline {
		const { shaderSource } = computeCommad;
		const hashId = stringToHash(shaderSource.uid);
		let pipeline = computePipelines.get(hashId);
		if (!pipeline) {
			pipeline = device.createComputePipeline({
				layout: PipelineLayout.getPipelineLayoutFromCache(device, hashId.toString(), groupLayouts)
					.gpuPipelineLayout,
				compute: {
					module: shaderSource.createShaderModule(device) as GPUShaderModule,
					entryPoint: shaderSource.computeMain
				}
			});
			computePipelines.set(hashId, pipeline);
		}
		return pipeline;
	}
	private static getPipelineDescriptor(
		device: GPUDevice,
		drawComand: DrawCommand,
		renderState: RenderState,
		groupLayouts: BindGroupLayout[],
		hashId: string
	): GPURenderPipelineDescriptor {
		const { vertexBuffers, shaderSource } = drawComand;
		const { vert, frag } = shaderSource.createShaderModule(device) as {
			vert: GPUShaderModule;
			frag: GPUShaderModule;
		};
		const pipelineDec = {
			layout: PipelineLayout.getPipelineLayoutFromCache(device, hashId, groupLayouts).gpuPipelineLayout
		} as any;
		if (vert)
			pipelineDec.vertex = {
				module: vert,
				entryPoint: shaderSource.vertEntryPoint,
				buffers: vertexBuffers.map((vertexBuffer) => vertexBuffer.getBufferDes())
			};
		if (renderState.primitive) pipelineDec.primitive = renderState.primitive.getGPUPrimitiveDec();
		if (renderState.depthStencil) pipelineDec.depthStencil = renderState.depthStencil.getGPUDepthStencilDec();
		if (renderState.multisample) pipelineDec.multisample = renderState.multisample.getMultiSampleDec();
		if (frag)
			pipelineDec.fragment = {
				module: frag,
				entryPoint: shaderSource.fragEntryPoint,
				targets: renderState.targets.map((target) => {
					return target.getGPUTargetDec();
				})
			};
		return pipelineDec;
	}
}
// Borrowed from https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function stringToHash(str) {
	let hash = 0;
	if (str.length == 0) return hash;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}
