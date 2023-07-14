import { TextureUsage } from "../core/WebGPUConstant";
import { GPUCanvasCompositingAlphaMode, ContextOptions } from "../core/WebGPUTypes";
import { ShaderSource } from "../shader/ShaderSource";
import { loadGlslangModule } from "../utils/loadGlslangModule";
import { MipmapGenerator } from "../utils/MipmapGenerator";
import { ScissorTest, ViewPort } from "./RenderState";

class Context {
	public canvas: HTMLCanvasElement;

	public context: GPUCanvasContext;

	public pixelRatio: number;

	public device: GPUDevice;

	private adapter: GPUAdapter;

	public presentationSize: { width: number; height: number; depth: number };

	public presentationFormat: GPUTextureFormat;

	public mipmapTools: MipmapGenerator;

	private _viewPort: ViewPort;

	private _scissorTest: ScissorTest;

	private _useGLSL: boolean; // will glsl shaders be used

	public get viewPort(): ViewPort {
		return this._viewPort;
	}

	public get scissorTest(): ScissorTest {
		return this._scissorTest;
	}
	constructor({ canvas, container, context, pixelRatio, useGLSL = false }: ContextOptions) {
		if (!container.clientWidth || !container.clientHeight) throw new Error("container width or height illegality");
		this.canvas = canvas || document.createElement("canvas");
		// this.canvas.style.display = "block";
		this.pixelRatio = pixelRatio || window.devicePixelRatio || 1;
		const width = container.clientWidth * this.pixelRatio;
		const height = container.clientHeight * this.pixelRatio;
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.width = container.clientWidth + "px";
		this.canvas.style.height = container.clientHeight + "px";
		container.appendChild(this.canvas);
		this.context = context || (this.canvas.getContext("webgpu") as GPUCanvasContext);
		this._useGLSL = useGLSL;
		this.device = undefined;
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
				// State.error = true;
			});
			if (this._useGLSL) ShaderSource.glslang = await loadGlslangModule();
			this.mipmapTools = new MipmapGenerator(this.device);
			this.context.configure({
				device: this.device,
				format: this.presentationFormat,
				usage: TextureUsage.RenderAttachment,
				alphaMode: "premultiplied",
				...presentationContextDescriptor
			});
			this._viewPort = new ViewPort(
				0,
				0,
				this.canvas.clientWidth * this.pixelRatio,
				this.canvas.clientHeight * this.pixelRatio
			);
			this._scissorTest = new ScissorTest(
				0,
				0,
				this.canvas.clientWidth * this.pixelRatio,
				this.canvas.clientHeight * this.pixelRatio
			);
		} catch (error) {
			console.error(error);
			return false;
		}

		return true;
	}
	public setViewPort(x: number, y: number, width: number, height: number) {
		this._viewPort.set(x, y, width, height);
	}

	public resetViewPortToFullCanvas() {
		this._viewPort.set(0, 0, this.canvas.clientWidth * this.pixelRatio, this.canvas.clientHeight * this.pixelRatio);
	}

	public setScissorTest(x: number, y: number, width: number, height: number) {
		this._scissorTest.set(x, y, width, height);
	}
	public resize(width: number, height: number, presentationContextDescriptor = {}): void {
		const w = width * this.pixelRatio;
		const h = height * this.pixelRatio;
		this.canvas.style.width = w + "px";
		this.canvas.style.height = h + "px";
		this.canvas.width = w;
		this.canvas.height = h;
		this.presentationSize = {
			width: w,
			height: h,
			depth: 1
		};
		this.context.configure({
			device: this.device,
			format: navigator.gpu.getPreferredCanvasFormat(),
			usage: TextureUsage.RenderAttachment,
			alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
			...presentationContextDescriptor
		});
	}
}

export default Context;
