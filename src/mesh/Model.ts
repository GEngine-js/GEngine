import {
	BufferBindingType,
	BufferUsage,
	CullMode,
	FrontFace,
	InputStepMode,
	PrimitiveTopology
} from "../core/WebGPUConstant";
import { ModelParams } from "../core/WebGPUTypes";
import { Float32Attribute, InterleavedFloat32Attribute } from "../render/Attribute";
import { ComputeCommand } from "../render/ComputeCommand";
import DrawCommand from "../render/DrawCommand";
import IndexBuffer from "../render/IndexBuffer";
import {
	BlendConstant,
	DepthStencil,
	DepthStencilProps,
	MultiSample,
	Primitive,
	RenderState,
	ScissorTest,
	Target,
	ViewPort
} from "../render/RenderState";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";
import VertexBuffer from "../render/VertexBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { addUniformToShaderData } from "../utils/uniformUtils";

export class Model {
	public modelParams: ModelParams;
	public command: DrawCommand | ComputeCommand;
	public renderType: string;
	private vertexBuffers: Array<VertexBuffer>;
	private shaderData: ShaderData;
	constructor(params: ModelParams) {
		this.modelParams = params;
		this.renderType = this.modelParams.compute != undefined ? "compute" : "render";
	}
	render(params: renderModelParams) {
		const { device, passEncoder } = params;
		if (!this.command)
			this.command = this.renderType === "render" ? this.createDrawCommand() : this.createComputeCommand();
		if (this.renderType === "render") {
			(this.command as DrawCommand).render({
				device,
				passEncoder: <GPURenderPassEncoder>passEncoder
			});
		} else {
			(this.command as ComputeCommand).render({
				device,
				passEncoder: <GPUComputePassEncoder>passEncoder
			});
		}
	}
	public getVertexBufferByUid(uid: string) {
		//
		// return this.vertexBuffers.find(uid=>uid==)
	}
	public getUniformBufferByUid(uid: string) {
		//
	}
	private createDrawCommand() {
		const { count, instances } = this.modelParams;
		this.vertexBuffers = this.createVertexBuffer();
		this.shaderData = this.createShaderData();
		const indexBuffer = this.createIndexBuffer();
		const shaderSource = this.createShaderSource();
		const renderState = this.createRenderState();
		return new DrawCommand({
			vertexBuffers: this.vertexBuffers,
			shaderData: this.shaderData,
			indexBuffer,
			shaderSource,
			renderState,
			count,
			instances
		});
	}
	private createComputeCommand() {
		const { dispatch } = this.modelParams;
		const shaderData = this.createShaderData();
		const shaderSource = this.createShaderSource();
		return new ComputeCommand({
			dispatch,
			shaderData,
			shaderSource
		});
	}
	private createVertexBuffer() {
		const { vertexBuffers, shaderId } = this.modelParams;
		let locationIndex = 0;
		return (
			vertexBuffers?.map((vertexBufferObject, index) => {
				const { attributes, stepMode } = vertexBufferObject;
				const vertexBuffer = new VertexBuffer(shaderId, index, locationIndex, <InputStepMode>stepMode);
				const attributeKeys = Object.keys(attributes);
				attributeKeys.forEach((key: string) => {
					const { size, value, names, itemSizes } = attributes[key];
					vertexBuffer.setAttribute(
						names?.length > 0
							? new InterleavedFloat32Attribute(names, value, itemSizes)
							: new Float32Attribute(key, value, size)
					);
				});
				locationIndex += attributeKeys.length - 1;
				return vertexBuffer;
			}) || []
		);
	}
	private createShaderSource() {
		const { vert, frag, compute, shaderId } = this.modelParams;
		return new ShaderSource({
			shaderId,
			render: {
				vertShader: vert,
				fragShader: frag
			},
			compute: {
				computeShader: compute
			}
		});
	}
	private createShaderData() {
		const { shaderId, uniformBuffers } = this.modelParams;
		const shaderData = new ShaderData(shaderId);
		uniformBuffers.forEach((uniformBuffer) =>
			this.createUniformBufferAndTexture(uniformBuffer, shaderData, shaderId)
		);
		return shaderData;
	}
	private createRenderState() {
		const {
			blendConstant,
			depthStencil,
			viewPort,
			scissorTest,
			targets,
			multiSample,
			primitive,
			stencilReference
		} = this.modelParams.renderState;
		return new RenderState({
			scissorTest: scissorTest
				? new ScissorTest(scissorTest.x, scissorTest.y, scissorTest.width, scissorTest.height)
				: undefined,
			viewport: viewPort ? new ViewPort(viewPort.x, viewPort.y, viewPort.width, viewPort.height) : undefined,
			targets: targets?.map((target) => {
				return new Target(target as any);
			}),
			depthStencil: depthStencil ? new DepthStencil(<DepthStencilProps>depthStencil) : undefined,
			blendConstant: blendConstant
				? new BlendConstant(blendConstant.r, blendConstant.g, blendConstant.b, blendConstant.a)
				: undefined,
			stencilReference: stencilReference || 0,
			multisample: multiSample
				? new MultiSample(multiSample.count, multiSample.mask, multiSample.alphaToCoverageEnabled)
				: undefined,
			primitive: primitive
				? new Primitive(
						<PrimitiveTopology>primitive.topology,
						<CullMode>primitive.cullMode,
						<FrontFace>primitive.frontFace,
						primitive.unclippedDepth
				  )
				: undefined,
			stencilEnabled: false,
			scissorTestEnabled: false
		});
	}
	private createIndexBuffer() {
		const { indices, shaderId } = this.modelParams;
		let indexBuffer = undefined;
		if (indices) {
			indexBuffer = new IndexBuffer(shaderId + "IndexBuffer");
			indexBuffer.setIndices(indices);
		}

		return indexBuffer;
	}
	private createUniformBufferAndTexture(uniformBufferParams, shaderData: ShaderData, shaderId: string) {
		const { type = "uniform", usage = BufferUsage.Uniform | BufferUsage.CopyDst, uniforms } = uniformBufferParams;
		const uniformBuffer = new UniformBuffer({
			label: shaderId + "_UniformBuffer",
			type: <BufferBindingType>type,
			usage: <BufferUsage>usage
		});
		shaderData.setUniformBuffer(shaderId, uniformBuffer);

		const uniformsNames = Object.getOwnPropertyNames(uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(
				uniformsName,
				uniforms[uniformsName],
				uniforms,
				shaderData,
				undefined,
				uniformBuffer
			);
		});
	}
}
export type renderModelParams = {
	device: GPUDevice;
	passEncoder: GPURenderPassEncoder | GPUComputePassEncoder;
};
