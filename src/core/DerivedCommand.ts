import { Mesh } from "../mesh/Mesh";
import DrawCommand from "../render/DrawCommand";
import LightManger from "./LightManger";

export class DerivedCommand {
	// static createPickCommand() {}
	// static createShadowCommand() {}
	// static createNormalCommand() {}
	static createRenderCommand(mesh?: Mesh, lightManger?: LightManger) {
		const { geometry, material } = mesh;
		return new DrawCommand({
			vertexBuffers: geometry.vertexBuffers,
			indexBuffer: geometry.indexBuffer,
			shaderData: material.shaderData,
			drawParams: {
				count: geometry.count,
				instanceCount: mesh.instanceCount
			},
			renderState: material.renderState,
			shaderSource: material.shaderSource,
			lightShaderData: material.light ? lightManger?.lightShaderData : undefined,
			useLight: material.light
		});
	}
}
