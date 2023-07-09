import {
	BufferBindingType,
	BufferUsage,
	CullMode,
	FrontFace,
	InputStepMode,
	PrimitiveTopology
} from "../core/WebGPUConstant";
import { ModelParams } from "../core/WebGPUTypes";
import { BufferFloat32Attribute, Float32Attribute, InterleavedFloat32Attribute } from "../render/Attribute";
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
import Texture from "../render/Texture";
import UniformBuffer from "../render/UniformBuffer";
import VertexBuffer from "../render/VertexBuffer";
import { ShaderSource } from "../shader/ShaderSource";
import { addUniformToShaderData } from "../utils/uniformUtils";

export class Model {
	public modelParams: ModelParams;
	public command: DrawCommand | ComputeCommand;
	public renderType: string;
	private vertexBuffers: Map<string, VertexBuffer>;
	private shaderData: ShaderData;
	constructor(params: ModelParams) {
		this.modelParams = params;
		this.renderType = this.modelParams.compute != undefined ? "compute" : "render";
		this.vertexBuffers = new Map();
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
	public getVertexBufferByUid(uid: string): VertexBuffer {
		return this.vertexBuffers.get(uid);
	}
	public getUniformBufferByUid(uid: string): UniformBuffer {
		return this.shaderData.getUniformBuffer(uid);
	}
	public getTextureByName(name: string): Texture {
		return this.shaderData.getTexture(name);
	}
	public getSamplerByName(name: string) {
		return this.shaderData.getSampler(name);
	}
	public destroy() {
		this?.vertexBuffers.clear();
		this?.shaderData.destroy();
		this.command = null;
		this.modelParams = null;
	}
	private createDrawCommand() {
		const { count, instances } = this.modelParams;
		const vertexBuffers = this.createVertexBuffer();
		this.shaderData = this.createShaderData();
		const indexBuffer = this.createIndexBuffer();
		const shaderSource = this.createShaderSource();
		const renderState = this.createRenderState();
		return new DrawCommand({
			vertexBuffers,
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
				const { attributes, stepMode, uid, arrayStride } = vertexBufferObject;
				const vertexBuffer = new VertexBuffer({
					label: shaderId,
					index,
					locationIndex,
					stepMode: <InputStepMode>stepMode,
					arrayStride
				});
				const attributeKeys = Object.keys(attributes);
				attributeKeys.forEach((key: string) => {
					const { size, value, names, itemSizes, buffer } = attributes[key];
					vertexBuffer.setAttribute(
						names?.length > 0
							? buffer
								? new BufferFloat32Attribute(names, buffer, itemSizes)
								: new InterleavedFloat32Attribute(names, value, itemSizes)
							: new Float32Attribute(key, value, size)
					);
					const count = names?.length > 0 ? names?.length : 1;
					locationIndex += count;
				});
				this.vertexBuffers.set(uid, vertexBuffer);
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
		const { shaderId, uniformBuffers, uniformTextureAndSampler } = this.modelParams;
		const shaderData = new ShaderData(shaderId);
		// fill uniformBuffer
		uniformBuffers.forEach((uniformBuffer) => this.createUniformBuffer(uniformBuffer, shaderData, shaderId));
		// fill texture and sampler
		this.addUniformToShaderData(uniformTextureAndSampler, shaderData, undefined);
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
	private createUniformBuffer(uniformBufferParams, shaderData: ShaderData, shaderId: string) {
		const {
			type = "uniform",
			usage = BufferUsage.Uniform | BufferUsage.CopyDst,
			uniforms,
			uid,
			binding,
			buffer,
			bufferSize,
			visibility
		} = uniformBufferParams;
		const uniformBuffer = new UniformBuffer({
			label: uid + "_UniformBuffer",
			type: <BufferBindingType>type,
			usage: <BufferUsage>usage,
			binding,
			buffer,
			visibility,
			size: buffer?.size ?? bufferSize
		});
		shaderData.setUniformBuffer(uid, uniformBuffer);
		if (!buffer) this.addUniformToShaderData(uniforms, shaderData, uniformBuffer);
	}
	private addUniformToShaderData(uniforms, shaderData: ShaderData, uniformBuffer: UniformBuffer) {
		if (!uniforms) return;
		const uniformsNames = Object.getOwnPropertyNames(uniforms);
		uniformsNames.map((uniformsName) => {
			addUniformToShaderData(uniformsName, uniforms[uniformsName], shaderData, undefined, uniformBuffer);
		});
	}
}

export type renderModelParams = {
	device: GPUDevice;
	passEncoder: GPURenderPassEncoder | GPUComputePassEncoder;
};
