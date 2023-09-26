import RenderObject from "../core/RenderObject";
import { RenderObjectType, UniformEnum } from "../core/WebGPUTypes";
import Matrix4 from "../math/Matrix4";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";

export default class Camera extends RenderObject {
	private _viewMatrix: Matrix4;
	protected _projectionMatrix: Matrix4;
	private _vpMatrix: Matrix4;
	projectMatrixDirty: boolean;
	shaderData: ShaderData;
	_near: number;
	_far: number;
	constructor() {
		super();
		this._viewMatrix = undefined;
		this.type = RenderObjectType.Camera;
		this._viewMatrix = new Matrix4();
		this._vpMatrix = new Matrix4();
		this.projectMatrixDirty = true;
		this.createShaderData();
	}

	set near(value: number) {
		this._near = value;
		this.projectMatrixDirty = true;
	}

	get near() {
		return this._near;
	}

	set far(value: number) {
		this._far = value;
		this.projectMatrixDirty = true;
	}

	get far() {
		return this._far;
	}

	get viewMatrix() {
		this.updateMatrix();
		Matrix4.inverse(this.modelMatrix, this._viewMatrix);
		return this._viewMatrix;
	}
	get projectionMatrix() {
		this.updateProjectionMatrix();
		return this._projectionMatrix;
	}

	get vpMatrix() {
		Matrix4.multiply(this.projectionMatrix, this.viewMatrix, this._vpMatrix);
		return this._vpMatrix;
	}

	get inverseViewMatrix() {
		this.updateMatrix();
		return this.modelMatrix;
	}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public updateProjectionMatrix() {}
	createShaderData() {
		this.shaderData = new ShaderData("camera", 0, 1, 1);
		const uniformBuffer = new UniformBuffer({ label: "camera" });
		uniformBuffer.setUniform(
			"projectionMatrix",
			() => {
				return this.projectionMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform(
			"viewMatrix",
			() => {
				return this.viewMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform(
			"inverseViewMatrix",
			() => {
				return this.inverseViewMatrix;
			},
			UniformEnum.Mat4
		);
		uniformBuffer.setUniform(
			"position",
			() => {
				return this.position;
			},
			UniformEnum.FloatVec3
		);
		this.shaderData.setUniformBuffer("camera", uniformBuffer);
	}
}
