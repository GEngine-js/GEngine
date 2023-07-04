import Camera from "../camera/Camera";
import { DrawCommandParams } from "../core/WebGPUTypes";
import { Material } from "../material/Material";
import { ShaderSource } from "../shader/ShaderSource";
import Buffer from "./Buffer";
import { Command } from "./Command";
import Context from "./Context";
import IndexBuffer from "./IndexBuffer";
import Pipeline from "./Pipeline";
import QuerySet from "./QuerySet";
import { RenderState, ScissorTest, ViewPort } from "./RenderState";
import RenderTarget from "./RenderTarget";
import ShaderData from "./ShaderData";
import VertexBuffer from "./VertexBuffer";

class DrawCommand implements Command {
	public shaderData?: ShaderData;

	public renderTarget?: RenderTarget;

	public vertexBuffers?: Array<VertexBuffer>;

	public indexBuffer?: IndexBuffer;

	public renderState?: RenderState;

	public queryIndex?: number;

	public count?: number;

	public instances?: number;

	public shaderSource?: ShaderSource;

	public dirty?: boolean;

	public indirectBuffer?: Buffer;

	public indirectOffset?: number;

	public lightShaderData?: ShaderData;

	public useLight?: boolean;

	constructor(options: DrawCommandParams) {
		this.shaderData = options.shaderData;

		this.renderTarget = options.renderTarget;

		this.useLight = options.useLight;

		this.vertexBuffers = options.vertexBuffers;

		this.indexBuffer = options.indexBuffer;

		this.renderState = options.renderState;

		this.queryIndex = options.queryIndex;

		this.count = options.count;

		this.instances = options.instances;

		this.shaderSource = options.shaderSource;

		this.dirty = options.dirty;

		this.lightShaderData = options.lightShaderData;
	}
	public shallowClone(material?: Material) {
		if (!material) return;
		return new DrawCommand({
			vertexBuffers: this.vertexBuffers,
			indexBuffer: this.indexBuffer,
			shaderData: material.shaderData,
			instances: this.instances,
			count: this.count,
			renderState: material.renderState,
			shaderSource: material.shaderSource,
			lightShaderData: material.light ? this.lightShaderData : undefined,
			useLight: material.light
		});
	}
	public render(params?: RenderParams): void {
		const { device, passEncoder, camera, querySet, viewPort, scissorTest } = params || {};
		const {
			shaderData,
			renderState,
			vertexBuffers,
			indexBuffer,
			lightShaderData,
			shaderSource,
			count,
			instances,
			renderTarget,
			useLight,
			indirectOffset,
			indirectBuffer,
			queryIndex
		} = this;
		const currentPassEncoder = renderTarget?.beginRenderPass?.(device) ?? passEncoder;
		const defines = Object.assign({}, lightShaderData?.defines ?? {}, camera?.shaderData?.defines ?? {});

		shaderData?.bind?.(device, currentPassEncoder);

		camera?.shaderData?.bind(device, currentPassEncoder);

		useLight && lightShaderData?.bind?.(device, currentPassEncoder);

		renderState?.bind?.({
			passEncoder: currentPassEncoder,
			viewPort: viewPort as ViewPort,
			scissorTest: <ScissorTest>scissorTest
		});

		vertexBuffers?.forEach?.((vertexBuffer: VertexBuffer) => vertexBuffer?.bind?.(device, currentPassEncoder));

		indexBuffer?.bind?.(device, currentPassEncoder);

		shaderSource?.setDefines?.(defines);

		const pipeline = Pipeline.getRenderPipelineFromCache(device, this, [
			shaderData?.groupLayout,
			lightShaderData?.groupLayout,
			camera?.shaderData?.groupLayout
		]);
		if (queryIndex != undefined) querySet?.beginQuery(currentPassEncoder, queryIndex);
		pipeline.bind(currentPassEncoder);
		if (indexBuffer) {
			if (indirectBuffer) {
				currentPassEncoder.drawIndexedIndirect(indirectBuffer.gpuBuffer, indirectOffset || 0);
			} else {
				currentPassEncoder.drawIndexed(count || 0, instances || 1, 0, 0, 0);
			}
		} else if (count) {
			if (indirectBuffer) {
				currentPassEncoder.drawIndirect(indirectBuffer.gpuBuffer, indirectOffset);
			} else {
				currentPassEncoder.draw(count, instances || 1, 0, 0);
			}
		}
		if (queryIndex != undefined) querySet?.endQuery(currentPassEncoder);
		renderTarget?.endRenderPass?.();
	}
}
export default DrawCommand;
type RenderParams = {
	context?: Context;
	device?: GPUDevice;
	passEncoder?: GPURenderPassEncoder;
	camera?: Camera;
	querySet?: QuerySet;
	viewPort?: ViewPort;
	scissorTest?: ScissorTest;
};
