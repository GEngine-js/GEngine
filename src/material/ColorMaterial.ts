import { ShaderSource } from "../shader/ShaderSource";
import { Material } from "./Material";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import UniformBuffer from "../render/UniformBuffer";
export default class ColorMaterial extends Material {
	constructor() {
		super();
		this.type = "color";
		this.shaderSource = new ShaderSource({
			type: this.type,
			render: true,
			defines: {}
		});
	}
	update(frameState: FrameState, mesh: Mesh) {
		if (!this.shaderData || this.dirty) this.createShaderData(mesh);
		const uniformBuffer = new UniformBuffer({ label: "color" });
		uniformBuffer.setMatrix4("modelMatrix", () => {
			return null;
		});
		this.shaderData.setUniformBuffer("color", uniformBuffer);
	}
}
