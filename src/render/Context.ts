import { GPUCanvasCompositingAlphaMode, ScissorTest, ViewPort } from "../core/WebGPUTypes";
import { TextureUsage } from "../core/WebGPUConstant";
import { ContextOptions } from "../core/WebGPUTypes";
import DrawCommand from "./DrawCommand.js";
import { MipmapGenerator } from "../utils/MipmapGenerator";
import Pipeline from "./Pipeline";
import Camera from "../camera/Camera";
import LightManger from "../core/LightManger";

class Context {
	public canvas: HTMLCanvasElement;

	public context: GPUCanvasContext;

	public pixelRatio: number;

	public device: GPUDevice;

	private adapter: GPUAdapter;

	public commandEncoder: GPUCommandEncoder | null;

	public presentationSize: { width: number; height: number; depth: number };

	public presentationFormat: GPUTextureFormat;

	public mipmapTools: MipmapGenerator;

	public lightManger: LightManger;

	private _viewPort: ViewPort;

	private _scissorTest: ScissorTest;

	private _scissorTestEnabled: boolean;

	constructor({ canvas, container, context, pixelRatio }: ContextOptions = {}) {
		this.canvas = canvas || document.createElement("canvas");
		this.canvas.style.display = "block";
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		container.appendChild(this.canvas);
		this.context = context || (this.canvas.getContext("webgpu") as GPUCanvasContext);
		this.pixelRatio = pixelRatio || window.devicePixelRatio || 1;
		this.device = undefined;
		this.lightManger = new LightManger();
	}

	public async init(
		requestAdapter = {},
		deviceDescriptor = {},
		presentationContextDescriptor = {}
	): Promise<boolean> {
		try {
			if (!this.context) {
				throw new Error(`Failed to instantiate "webgpu" context.`);
			}
			if (!navigator.gpu) {
				throw new Error(`Missing "navigator.gpu".`);
			}

			this.adapter = await navigator.gpu.requestAdapter();
			this.device = await this.adapter.requestDevice();
			this.presentationSize = {
				width: this.canvas.clientWidth * this.pixelRatio,
				height: this.canvas.clientHeight * this.pixelRatio,
				depth: 1
			};
			this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();
			this.device.addEventListener("uncapturederror", (error) => {
				console.error(error);
				//State.error = true;
			});
			this.mipmapTools = new MipmapGenerator(this.device);
			this.context.configure({
				device: this.device,
				format: this.presentationFormat,
				usage: TextureUsage.RenderAttachment,
				alphaMode: "opaque",
				...presentationContextDescriptor
			});
			this._viewPort = {
				x: 0,
				y: 0,
				width: this.canvas.clientWidth * this.pixelRatio,
				height: this.canvas.clientHeight * this.pixelRatio
			};
			this._scissorTestEnabled = false;
		} catch (error) {
			console.error(error);
			return false;
		}

		return true;
	}
	public setViewPort(x: number, y: number, width: number, height: number) {
		this._viewPort = { x, y, width, height };
	}
	public setScissorTest(x: number, y: number, width: number, height: number) {
		this._scissorTestEnabled = true;
		this._scissorTest = { x, y, width, height };
	}
	public resize(width: number, height: number, presentationContextDescriptor = {}): void {
		const w = width * this.pixelRatio;
		const h = height * this.pixelRatio;
		this.canvas.width = w;
		this.canvas.height = h;
		Object.assign(this.canvas.style, { width, height });

		this.context.configure({
			device: this.device,
			format: navigator.gpu.getPreferredCanvasFormat(),
			usage: TextureUsage.RenderAttachment,
			alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
			...presentationContextDescriptor
		});
	}

	public render(command: DrawCommand, passEncoder: GPURenderPassEncoder, camera?: Camera): void {
		const grouplayouts = [];
		if (command.shaderData) command.shaderData.bind(this, passEncoder);
		//设置系统
		if (camera) {
			camera.shaderData.bind(this, passEncoder);
			grouplayouts.push(camera.shaderData.groupLayout);
		}
		if (command.light && this.lightManger.lightShaderData) {
			this.lightManger.lightShaderData.bind(this, passEncoder);
			grouplayouts.push(this.lightManger.lightShaderData.groupLayout);
			if (command.shaderSource) command.shaderSource.setDefines(this.lightManger.lightShaderData.defines);
		}
		if (command.renderState) command.renderState.bind(passEncoder);
		if (command.vertexBuffer) command.vertexBuffer.bind(this.device, passEncoder);

		if (command.indexBuffer) command.indexBuffer.bind(this.device, passEncoder);

		const pipeline = Pipeline.getRenderPipelineFromCache(
			this.device,
			command,
			grouplayouts.concat(command.shaderData.groupLayout)
		);
		pipeline.bind(passEncoder);
		if (command.indexBuffer) {
			passEncoder.drawIndexed(command.count || 0, command.instances || 1, 0, 0, 0);
		} else if (command.count) {
			passEncoder.draw(command.count, command.instances || 1, 0, 0);
		}
	}
	public compute(command: DrawCommand, passEncoder: GPUComputePassEncoder) {
		const pipeline = Pipeline.getComputePipelineFromCache(this.device, command, [command.shaderData.groupLayout]);
		pipeline.bind(passEncoder);
		const { x, y, z } = command.dispatch;
		passEncoder.dispatchWorkgroups(x, y, z);
	}
}

export default Context;
