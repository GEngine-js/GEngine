import { InputStepMode } from "../core/WebGPUConstant";
import { Attribute, InterleavedFloat32Attribute } from "../render/Attribute";
import VertexBuffer from "../render/VertexBuffer";
import Geometry from "./Geometry";
export default class PointGeometry extends Geometry {
	private instanceVertexBuffer: VertexBuffer;
	constructor() {
		super({
			type: "pointGeometry"
		});
		this.init();
	}
	private init() {
		const indices = [0, 1, 2, 0, 2, 3];
		const vertices = [-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1];
		this.computeBoundingSphere(vertices, 5);
		super.setAttribute(new InterleavedFloat32Attribute(["vertexPoint", "uv"], vertices, [3, 2]));
		this.setIndice(indices);
		this.count = indices.length;
		this.instanceVertexBuffer = new VertexBuffer({
			label: this.type,
			index: this.vertexBufferCount,
			locationIndex: this.currentLocationIndex,
			stepMode: InputStepMode.Instance
		});
		this.vertexBuffers.push(this.instanceVertexBuffer);
	}
	getAttribute(name: string) {
		return this.instanceVertexBuffer.getAttribute(name);
	}
	setAttribute(attribute: Attribute | InterleavedFloat32Attribute) {
		this.instanceVertexBuffer.setAttribute(attribute);
	}
}
