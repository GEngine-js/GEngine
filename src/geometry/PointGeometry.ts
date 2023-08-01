import { InputStepMode } from "../core/WebGPUConstant";
import { Attribute, Float32Attribute, InterleavedFloat32Attribute } from "../render/Attribute";
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
		const positions = [0, 0, 1, 0, 1, 1, 0, 1];
		const uvs = [0, 0, 1, 0, 1, 1, 0, 1];
		const indices = [0, 1, 2, 0, 2, 3];
		this.computeBoundingSphere(positions);
		this.setAttribute(new Float32Attribute("inner_positionLocation", positions, 3));
		this.setAttribute(new Float32Attribute("uv", uvs, 2));
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
