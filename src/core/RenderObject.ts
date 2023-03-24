import Matrix3 from "../math/Matrix3";
import Matrix4 from "../math/Matrix4";
import { Quaternion } from "../math/Quaternion";
import Vector3 from "../math/Vector3";

export default class RenderObject {
	public up: Vector3;
	private _position: Vector3;
	private _scale: Vector3;
	private _quaternion: Quaternion;
	modelMatrix: Matrix4;
	private _normalMatrix: Matrix4;
	isCamera: boolean;
	isLight: boolean;
	constructor() {
		this._position = new Vector3();
		this._scale = new Vector3(1, 1, 1);
		this._quaternion = new Quaternion();
		this.modelMatrix = Matrix4.clone(Matrix4.IDENTITY, new Matrix4());
		this._normalMatrix = Matrix4.clone(Matrix4.IDENTITY, new Matrix4());
		this.up = new Vector3(0, 1, 0);
	}
	public get normalMatrix(): Matrix4 {
		return this._normalMatrix;
	}

	public get position(): Vector3 {
		return this._position;
	}
	public get scale(): Vector3 {
		return this._scale;
	}
	public get quaternion(): Quaternion {
		return this._quaternion;
	}
	private updateNormalMatrix() {
		Matrix4.inverse(this.modelMatrix, this._normalMatrix);
		Matrix4.transpose(this._normalMatrix, this._normalMatrix);
	}
	updateMatrix(matrix?: Matrix4) {
		Matrix4.fromTranslationQuaternionRotationScale(this.position, this.quaternion, this.scale, this.modelMatrix);
		if (matrix) Matrix4.multiply(this.modelMatrix, matrix, this.modelMatrix);
		this.updateNormalMatrix();
	}
	lookAt(x, y, z) {
		_target.set(x, y, z);
		if (this.isCamera || this.isLight) {
			_m1.lookAt(this.position, _target, this.up);
		} else {
			_m1.lookAt(_target, this.position, this.up);
		}
		this.quaternion.setFromRotationMatrix(_m1);
	}
	rotateOnAxis(axis, angle) {
		const quat = Quaternion.fromAxisAngle(axis, angle);
		Quaternion.multiply(this.quaternion, quat, this.quaternion);
	}
	rotateX(angle) {
		return this.rotateOnAxis(_xAxis, angle);
	}
	rotateY(angle) {
		return this.rotateOnAxis(_yAxis, angle);
	}
	rotateZ(angle) {
		return this.rotateOnAxis(_zAxis, angle);
	}
}
const _xAxis = new Vector3(1, 0, 0);
const _yAxis = new Vector3(0, 1, 0);
const _zAxis = new Vector3(0, 0, 1);
const _m1 = new Matrix4();
const _target = new Vector3();
const _matrix3 = new Matrix3();
const _mvMatrix = new Matrix4();
