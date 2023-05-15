import Camera from "../camera/Camera";
import { Material } from "../material/Material";
import Matrix4 from "../math/Matrix4";
import { ShaderSource } from "../shader/ShaderSource";
import { Command } from "./Command";
import Context from "./Context";
import IndexBuffer from "./IndexBuffer";
import Pipeline from "./Pipeline";
import { RenderState } from "./RenderState";
import RenderTarget from "./RenderTarget";
import ShaderData from "./ShaderData";
import VertextBuffer from "./VertextBuffer";

class DrawCommand implements Command {
	public type?: string;

	public shaderData?: ShaderData;

	public renderTarget?: RenderTarget;

	public vertexBuffer?: VertextBuffer;

	public indexBuffer?: IndexBuffer;

	public renderState?: RenderState;

	public queryIndex?: number;

	public count?: number;

	public instances?: number;

	public shaderSource?: ShaderSource;

	public dirty?: boolean;

	public light?: boolean;

	public indirectBuffer?: Buffer;

	public modelMatrix?: Matrix4;

	public lightShaderData?: ShaderData;

	constructor(options: DrawCommandProps) {
		this.type = options.type;

		this.shaderData = options.shaderData;

		this.renderTarget = options.renderTarget;

		this.vertexBuffer = options.vertexBuffer;

		this.indexBuffer = options.indexBuffer;

		this.renderState = options.renderState;

		this.queryIndex = options.queryIndex;

		this.count = options.count;

		this.instances = options.instances;

		this.shaderSource = options.shaderSource;

		this.dirty = options.dirty;

		this.light = options.light;

		this.modelMatrix = options.modelMatrix;

		this.lightShaderData = options.lightShaderData;
	}
	public shallowClone(material?: Material) {
		if (material) {
			return new DrawCommand({
				vertexBuffer: this.vertexBuffer,
				indexBuffer: this.indexBuffer,
				shaderData: material.shaderData,
				instances: this.instances,
				count: this.count,
				renderState: material.renderState,
				shaderSource: material.shaderSource,
				type: "render",
				light: material.light,
				modelMatrix: this.modelMatrix,
				lightShaderData: material.light ? this.lightShaderData : undefined
			});
		}
	}
	public render(context?: Context, passEncoder?: GPURenderPassEncoder, camera?: Camera): void {
		const {
			shaderData,
			modelMatrix,
			renderState,
			vertexBuffer,
			indexBuffer,
			lightShaderData,
			shaderSource,
			count,
			instances,
			renderTarget
		} = this;
		const currentPassEncoder = renderTarget?.beginRenderPassEncoder?.(context) ?? passEncoder;

		const { device } = context;

		if (modelMatrix) shaderData?.replaceUniformBufferValue?.("modelMatrix", modelMatrix);

		shaderData?.bind?.(context, currentPassEncoder);

		camera?.shaderData?.bind(context, currentPassEncoder);

		shaderSource?.setDefines?.(camera?.shaderData?.defines);

		lightShaderData?.bind?.(context, currentPassEncoder);

		shaderSource?.setDefines?.(lightShaderData?.defines);

		renderState?.bind?.(currentPassEncoder, context);

		vertexBuffer?.bind?.(device, currentPassEncoder);

		indexBuffer?.bind?.(device, currentPassEncoder);

		const pipeline = Pipeline.getRenderPipelineFromCache(device, this, [
			shaderData?.groupLayout,
			lightShaderData?.groupLayout,
			camera?.shaderData?.groupLayout
		]);
		pipeline.bind(currentPassEncoder);
		if (indexBuffer) {
			currentPassEncoder.drawIndexed(count || 0, instances || 1, 0, 0, 0);
		} else if (count) {
			currentPassEncoder.draw(count, instances || 1, 0, 0);
		}
		renderTarget?.endRenderPassEncoder?.();
	}
}
type DrawCommandProps = {
	type?: string;

	shaderData?: ShaderData;

	renderTarget?: RenderTarget;

	vertexBuffer?: VertextBuffer;

	indexBuffer?: IndexBuffer;

	renderState?: RenderState;

	queryIndex?: number;

	count?: number;

	instances?: number;

	shaderSource?: ShaderSource;

	dirty?: boolean;

	light?: boolean;

	modelMatrix?: Matrix4;

	lightShaderData?: ShaderData;
};
export default DrawCommand;
