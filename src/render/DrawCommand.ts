import { ShaderSource } from "../shader/ShaderSource";
import RenderTarget from "./RenderTarget";
import ShaderData from "./ShaderData";
import VertextBuffer from "./VertextBuffer";
import IndexBuffer from "./IndexBuffer";
import { RenderState } from "./RenderState";
import { Material } from "../material/Material";

class DrawCommand {
	public type?: string;

	public shaderData?: ShaderData;

	public renderTarget?: RenderTarget;

	public vertexBuffer?: VertextBuffer;

	public indexBuffer?: IndexBuffer;

	public renderState?: RenderState;

	public queryIndex?: number;

	public count?: number;

	public instances?: number;

	public dispatch?: { x?: number; y?: number; z?: number };

	public shaderSource?: ShaderSource;

	public dirty?: boolean;

	public light?: boolean;

	public indirectBuffer?: Buffer;

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

		this.dispatch = options.dispatch;

		this.shaderSource = options.shaderSource;

		this.dirty = options.dirty;

		this.light = options.light;
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
				light: material.light
			});
		}
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

	dispatch?: { x?: number; y?: number; z?: number };

	shaderSource?: ShaderSource;

	dirty?: boolean;

	light?: boolean;
};
export default DrawCommand;
