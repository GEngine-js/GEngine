import CullingVolume from "../core/CullingVolume";
import RenderObject from "../core/RenderObject";
import Matrix4 from "../math/Matrix4";
import Plane from "../math/Plane";
import Vector3 from "../math/Vector3";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";

export default class Camera extends RenderObject {
	private _viewMatrix: Matrix4;
	protected _projectionMatrix: Matrix4;
	private _vpMatrix: Matrix4;
	cullingVolume: CullingVolume;
	projectMatrixDirty: boolean;
	shaderData: ShaderData;
	near: number;
	far: number;
	constructor() {
		super();
		this._viewMatrix = undefined;
		this.isCamera = true;
		this.cullingVolume = new CullingVolume();
		this._viewMatrix = new Matrix4();
		this._vpMatrix = new Matrix4();
		this.projectMatrixDirty = true;
		this.createShaderData();
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
	public updateProjectionMatrix() {}
	/**
	 * get a culling volume for this frustum.
	 */
	getCullingVolume() {
		const cloneViewMatrix = this.viewMatrix.clone(new Matrix4());
		const vpMatrix = Matrix4.multiply(this.projectionMatrix, cloneViewMatrix, new Matrix4());
		const planes = this.cullingVolume.planes;
		const me = vpMatrix;
		const me0 = me[0],
			me1 = me[1],
			me2 = me[2],
			me3 = me[3];
		const me4 = me[4],
			me5 = me[5],
			me6 = me[6],
			me7 = me[7];
		const me8 = me[8],
			me9 = me[9],
			me10 = me[10],
			me11 = me[11];
		const me12 = me[12],
			me13 = me[13],
			me14 = me[14],
			me15 = me[15];
		planes[0] = new Plane(new Vector3(me3 - me0, me7 - me4, me11 - me8), me15 - me12);
		planes[0].normalize();
		planes[1] = new Plane(new Vector3(me3 + me0, me7 + me4, me11 + me8), me15 + me12);
		planes[1].normalize();

		planes[2] = new Plane(new Vector3(me3 + me1, me7 + me5, me11 + me9), me15 + me13);
		planes[2].normalize();

		planes[3] = new Plane(new Vector3(me3 - me1, me7 - me5, me11 - me9), me15 - me13);
		planes[3].normalize();

		planes[4] = new Plane(new Vector3(me3 - me2, me7 - me6, me11 - me10), me15 - me14);
		planes[4].normalize();

		planes[5] = new Plane(new Vector3(me3 + me2, me7 + me6, me11 + me10), me15 + me14);
		planes[5].normalize();

		return this.cullingVolume;
	}
	private createShaderData() {
		this.shaderData = new ShaderData("camera", 0, 1, 1);
		const uniformBuffer = new UniformBuffer("camera");
		uniformBuffer.setMatrix4("projectionMatrix", () => {
			return this.projectionMatrix;
		});
		uniformBuffer.setMatrix4("viewMatrix", () => {
			return this.viewMatrix;
		});
		uniformBuffer.setMatrix4("inverseViewMatrix", () => {
			return this.inverseViewMatrix;
		});
		uniformBuffer.setFloatVec3("position", () => {
			return this.position;
		});
		this.shaderData.setUniformBuffer("camera", uniformBuffer);
	}
}
