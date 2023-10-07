import { Material } from "../material/Material";
import ShaderMaterial from "../material/ShaderMaterial";
import { Mesh } from "../mesh/Mesh";
import DrawCommand from "../render/DrawCommand";
import LightManger from "./LightManger";
import { Pass } from "./WebGPUTypes";

export class DerivedCommands {
	private _commands: Map<string | number, DrawCommand>;
	public shadowMaterial: Material;
	constructor() {
		this._commands = new Map();
		this._initDerivedMaterial();
	}
	public getDerivedCommand(params: { pass: Pass; mesh?: Mesh; lightManger?: LightManger }): DrawCommand {
		const { pass, mesh, lightManger } = params;
		const { material } = mesh || {};
		let command = this._commands.get(pass);
		if (!command || material?.dirty) {
			switch (pass) {
				case Pass.RENDER:
					command = DerivedCommands.createRenderCommand(mesh, lightManger);
					break;
				case Pass.SHADOW:
					command = DerivedCommands.createShadowCommand(mesh, this);
					break;
				default:
					break;
			}
			this._commands.set(pass, command);
		}
		return command;
	}
	public destroy() {
		this._commands?.clear?.();
	}
	private _initDerivedMaterial() {
		this.shadowMaterial = new ShaderMaterial({
			shaderId: "shadowMap",
			uniformBuffers: [
				{
					uid: "shadow",
					uniforms: {
						modelMatrix: { type: "mat4x4<f32>", value: null }
					}
				}
			],
			defines: {
				selfBinding: 0,
				cameraBinding: 0,
				positionLocation: 0
			},
			light: false
		});
	}
	static createRenderCommand(mesh?: Mesh, lightManger?: LightManger) {
		const { geometry, material } = mesh;
		material.dirty = false;
		material.shaderData.defines = Object.assign({}, geometry.defines);
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
	static createShadowCommand(mesh?: Mesh, derivedCommands?: DerivedCommands) {
		const { geometry, material } = mesh;
		const { shadowMaterial } = derivedCommands;
		shadowMaterial.update(undefined, mesh);
		if (mesh.instanceCount > 1)
			shadowMaterial.shaderData.setUniformBuffer(
				"instanceMatrixsBuffer",
				material.shaderData.getUniformBuffer("instanceMatrixsBuffer")
			);
		shadowMaterial.dirty = false;
		return new DrawCommand({
			vertexBuffers: geometry.vertexBuffers,
			indexBuffer: geometry.indexBuffer,
			shaderData: shadowMaterial.shaderData,
			drawParams: {
				count: geometry.count,
				instanceCount: mesh.instanceCount
			},
			renderState: material.renderState,
			shaderSource: shadowMaterial.shaderSource,
			lightShaderData: undefined,
			useLight: false
		});
	}
	// static createPickCommand() {}
	// static createShadowCommand() {}
	// static createNormalCommand() {}
}
