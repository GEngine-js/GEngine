import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
import Matrix3 from "./Matrix3";
import { Quaternion } from "./Quaternion";
import Vector3 from "./Vector3";
import Vector4 from "./Vector4";
class Matrix4 {
	public static IDENTITY = Object.freeze(
		new Matrix4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)
	);
	public static ZERO = Object.freeze(
		new Matrix4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
	);
	/**
	 * A 4x4 matrix, indexable as a column-major order array.
	 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
	 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
	 * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
	 * @param {Number} [column3Row0=0.0] The value for column 3, row 0.
	 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
	 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
	 * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
	 * @param {Number} [column3Row1=0.0] The value for column 3, row 1.
	 * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
	 * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
	 * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
	 * @param {Number} [column3Row2=0.0] The value for column 3, row 2.
	 * @param {Number} [column0Row3=0.0] The value for column 0, row 3.
	 * @param {Number} [column1Row3=0.0] The value for column 1, row 3.
	 * @param {Number} [column2Row3=0.0] The value for column 2, row 3.
	 * @param {Number} [column3Row3=0.0] The value for column 3, row 3.
	 */
	constructor(
		column0Row0 = 0,
		column1Row0 = 0,
		column2Row0 = 0,
		column3Row0 = 0,
		column0Row1 = 0,
		column1Row1 = 0,
		column2Row1 = 0,
		column3Row1 = 0,
		column0Row2 = 0,
		column1Row2 = 0,
		column2Row2 = 0,
		column3Row2 = 0,
		column0Row3 = 0,
		column1Row3 = 0,
		column2Row3 = 0,
		column3Row3 = 0
	) {
		this[0] = column0Row0;
		this[1] = column0Row1;
		this[2] = column0Row2;
		this[3] = column0Row3;
		this[4] = column1Row0;
		this[5] = column1Row1;
		this[6] = column1Row2;
		this[7] = column1Row3;
		this[8] = column2Row0;
		this[9] = column2Row1;
		this[10] = column2Row2;
		this[11] = column2Row3;
		this[12] = column3Row0;
		this[13] = column3Row1;
		this[14] = column3Row2;
		this[15] = column3Row3;
	}

	identity() {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const te = this;

		te[0] = 1;
		te[1] = 0;
		te[2] = 0;
		te[3] = 0;

		te[4] = 0;
		te[5] = 1;
		te[6] = 0;
		te[7] = 0;

		te[8] = 0;
		te[9] = 0;
		te[10] = 1;
		te[11] = 0;

		te[12] = 0;
		te[13] = 0;
		te[14] = 0;
		te[15] = 1;

		return this;
	}
	// ????
	clone(result: Matrix4 = new Matrix4()): Matrix4 {
		return Matrix4.clone(this, result);
	}
	set(mat4: Matrix4) {
		Matrix4.clone(mat4, this);
		return this;
	}
	equals(right: Matrix4): boolean {
		return Matrix4.equals(this, right);
	}
	compose(position: Vector3, quaternion: Quaternion, scale: Vector3): Matrix4 {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const te = this;

		const x = quaternion.x,
			y = quaternion.y,
			z = quaternion.z,
			w = quaternion.w;
		const x2 = x + x,
			y2 = y + y,
			z2 = z + z;
		const xx = x * x2,
			xy = x * y2,
			xz = x * z2;
		const yy = y * y2,
			yz = y * z2,
			zz = z * z2;
		const wx = w * x2,
			wy = w * y2,
			wz = w * z2;

		const sx = scale.x,
			sy = scale.y,
			sz = scale.z;

		te[0] = (1 - (yy + zz)) * sx;
		te[1] = (xy + wz) * sx;
		te[2] = (xz - wy) * sx;
		te[3] = 0;

		te[4] = (xy - wz) * sy;
		te[5] = (1 - (xx + zz)) * sy;
		te[6] = (yz + wx) * sy;
		te[7] = 0;

		te[8] = (xz + wy) * sz;
		te[9] = (yz - wx) * sz;
		te[10] = (1 - (xx + yy)) * sz;
		te[11] = 0;

		te[12] = position.x;
		te[13] = position.y;
		te[14] = position.z;
		te[15] = 1;

		return this;
	}
	equalsEpsilon(right: Matrix4, epsilon = 0): boolean {
		return Matrix4.equalsEpsilon(this, right, epsilon);
	}
	lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4 {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const matrix = this;
		Vector3.subtract(eye, target, z);
		if (z.length() === 0) {
			// eye and target are in the same position
			z.z = 1;
		}
		z.normalize();
		Vector3.cross(up, z, x);
		if (x.length() === 0) {
			// up and z are parallel

			if (Math.abs(up.z) === 1) {
				z.x += 0.0001;
			} else {
				z.z += 0.0001;
			}
			z.normalize();
			Vector3.cross(up, z, x);
		}
		x.normalize();
		Vector3.cross(z, x, y);
		matrix[0] = x.x;
		matrix[4] = y.x;
		matrix[8] = z.x;
		matrix[1] = x.y;
		matrix[5] = y.y;
		matrix[9] = z.y;
		matrix[2] = x.z;
		matrix[6] = y.z;
		matrix[10] = z.z;

		return this;
	}
	toString() {
		return (
			`(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n` +
			`(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n` +
			`(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n` +
			`(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`
		);
	}
	static clone(matrix: Matrix4 | number[], result: Matrix4): Matrix4 {
		if (!defined(matrix)) {
			return undefined;
		}
		if (!defined(result)) {
			return new Matrix4(
				matrix[0],
				matrix[4],
				matrix[8],
				matrix[12],
				matrix[1],
				matrix[5],
				matrix[9],
				matrix[13],
				matrix[2],
				matrix[6],
				matrix[10],
				matrix[14],
				matrix[3],
				matrix[7],
				matrix[11],
				matrix[15]
			);
		}
		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[3];
		result[4] = matrix[4];
		result[5] = matrix[5];
		result[6] = matrix[6];
		result[7] = matrix[7];
		result[8] = matrix[8];
		result[9] = matrix[9];
		result[10] = matrix[10];
		result[11] = matrix[11];
		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];
		return result;
	}

	static fromColumnMajorArray(values: number[], result: Matrix4): Matrix4 {
		return Matrix4.clone(values, result);
	}

	static fromRowMajorArray(values: number[], result: Matrix4): Matrix4 {
		if (!defined(result)) {
			return new Matrix4(
				values[0],
				values[1],
				values[2],
				values[3],
				values[4],
				values[5],
				values[6],
				values[7],
				values[8],
				values[9],
				values[10],
				values[11],
				values[12],
				values[13],
				values[14],
				values[15]
			);
		}
		result[0] = values[0];
		result[1] = values[4];
		result[2] = values[8];
		result[3] = values[12];
		result[4] = values[1];
		result[5] = values[5];
		result[6] = values[9];
		result[7] = values[13];
		result[8] = values[2];
		result[9] = values[6];
		result[10] = values[10];
		result[11] = values[14];
		result[12] = values[3];
		result[13] = values[7];
		result[14] = values[11];
		result[15] = values[15];
		return result;
	}

	static fromRotationTranslation(rotation: Matrix3, translation: Vector3, result: Matrix4): Matrix4 {
		translation = defaultValue(translation, Vector3.ZERO);

		if (!defined(result)) {
			return new Matrix4(
				rotation[0],
				rotation[3],
				rotation[6],
				translation.x,
				rotation[1],
				rotation[4],
				rotation[7],
				translation.y,
				rotation[2],
				rotation[5],
				rotation[8],
				translation.z,
				0.0,
				0.0,
				0.0,
				1.0
			);
		}

		result[0] = rotation[0];
		result[1] = rotation[1];
		result[2] = rotation[2];
		result[3] = 0.0;
		result[4] = rotation[3];
		result[5] = rotation[4];
		result[6] = rotation[5];
		result[7] = 0.0;
		result[8] = rotation[6];
		result[9] = rotation[7];
		result[10] = rotation[8];
		result[11] = 0.0;
		result[12] = translation.x;
		result[13] = translation.y;
		result[14] = translation.z;
		result[15] = 1.0;
		return result;
	}

	static fromTranslationQuaternionRotationScale(
		translation: Vector3,
		rotation: Quaternion,
		scale: Vector3,
		result: Matrix4
	): Matrix4 {
		if (!defined(result)) {
			result = new Matrix4();
		}

		const scaleX = scale.x;
		const scaleY = scale.y;
		const scaleZ = scale.z;

		const x2 = rotation.x * rotation.x;
		const xy = rotation.x * rotation.y;
		const xz = rotation.x * rotation.z;
		const xw = rotation.x * rotation.w;
		const y2 = rotation.y * rotation.y;
		const yz = rotation.y * rotation.z;
		const yw = rotation.y * rotation.w;
		const z2 = rotation.z * rotation.z;
		const zw = rotation.z * rotation.w;
		const w2 = rotation.w * rotation.w;

		const m00 = x2 - y2 - z2 + w2;
		const m01 = 2.0 * (xy - zw);
		const m02 = 2.0 * (xz + yw);

		const m10 = 2.0 * (xy + zw);
		const m11 = -x2 + y2 - z2 + w2;
		const m12 = 2.0 * (yz - xw);

		const m20 = 2.0 * (xz - yw);
		const m21 = 2.0 * (yz + xw);
		const m22 = -x2 - y2 + z2 + w2;

		result[0] = m00 * scaleX;
		result[1] = m10 * scaleX;
		result[2] = m20 * scaleX;
		result[3] = 0.0;
		result[4] = m01 * scaleY;
		result[5] = m11 * scaleY;
		result[6] = m21 * scaleY;
		result[7] = 0.0;
		result[8] = m02 * scaleZ;
		result[9] = m12 * scaleZ;
		result[10] = m22 * scaleZ;
		result[11] = 0.0;
		result[12] = translation.x;
		result[13] = translation.y;
		result[14] = translation.z;
		result[15] = 1.0;

		return result;
	}

	static fromTranslationRotationScale(
		translationRotationScale: {
			translation: Vector3;
			rotation: Quaternion;
			scale: Vector3;
		},
		result: Matrix4
	): Matrix4 {
		return Matrix4.fromTranslationQuaternionRotationScale(
			translationRotationScale.translation,
			translationRotationScale.rotation,
			translationRotationScale.scale,
			result
		);
	}

	static fromTranslation(translation: Vector3, result: Matrix4): Matrix4 {
		return Matrix4.fromRotationTranslation(Matrix3.IDENTITY, translation, result);
	}

	static fromScale(scale: Vector3, result: Matrix4): Matrix4 {
		if (!defined(result)) {
			return new Matrix4(
				scale.x,
				0.0,
				0.0,
				0.0,
				0.0,
				scale.y,
				0.0,
				0.0,
				0.0,
				0.0,
				scale.z,
				0.0,
				0.0,
				0.0,
				0.0,
				1.0
			);
		}

		result[0] = scale.x;
		result[1] = 0.0;
		result[2] = 0.0;
		result[3] = 0.0;
		result[4] = 0.0;
		result[5] = scale.y;
		result[6] = 0.0;
		result[7] = 0.0;
		result[8] = 0.0;
		result[9] = 0.0;
		result[10] = scale.z;
		result[11] = 0.0;
		result[12] = 0.0;
		result[13] = 0.0;
		result[14] = 0.0;
		result[15] = 1.0;
		return result;
	}

	static fromRotation(rotation: Matrix3, result: Matrix4): Matrix4 {
		if (!defined(result)) {
			result = new Matrix4();
		}
		result[0] = rotation[0];
		result[1] = rotation[1];
		result[2] = rotation[2];
		result[3] = 0.0;

		result[4] = rotation[3];
		result[5] = rotation[4];
		result[6] = rotation[5];
		result[7] = 0.0;

		result[8] = rotation[6];
		result[9] = rotation[7];
		result[10] = rotation[8];
		result[11] = 0.0;

		result[12] = 0.0;
		result[13] = 0.0;
		result[14] = 0.0;
		result[15] = 1.0;

		return result;
	}

	static makePerspective(
		left: number,
		right: number,
		top: number,
		bottom: number,
		near: number,
		far: number
	): Matrix4 {
		// from three.js
		const matrix = new Matrix4();
		const x = (2 * near) / (right - left);
		const y = (2 * near) / (top - bottom);

		const a = (right + left) / (right - left);
		const b = (top + bottom) / (top - bottom);
		const c = -far / (far - near);
		const d = (-far * near) / (far - near);

		matrix[0] = x;
		matrix[4] = 0;
		matrix[8] = a;
		matrix[12] = 0;
		matrix[1] = 0;
		matrix[5] = y;
		matrix[9] = b;
		matrix[13] = 0;
		matrix[2] = 0;
		matrix[6] = 0;
		matrix[10] = c;
		matrix[14] = d;
		matrix[3] = 0;
		matrix[7] = 0;
		matrix[11] = -1;
		matrix[15] = 0;
		return matrix;
	}
	static makeOrthographic(
		left: number,
		right: number,
		top: number,
		bottom: number,
		near: number,
		far: number
	): Matrix4 {
		const matrix = new Matrix4();
		const w = 1.0 / (right - left);
		const h = 1.0 / (top - bottom);
		const p = 1.0 / (far - near);

		const x = (right + left) * w;
		const y = (top + bottom) * h;
		const z = near * p;

		matrix[0] = 2 * w;
		matrix[4] = 0;
		matrix[8] = 0;
		matrix[12] = -x;
		matrix[1] = 0;
		matrix[5] = 2 * h;
		matrix[9] = 0;
		matrix[13] = -y;
		matrix[2] = 0;
		matrix[6] = 0;
		matrix[10] = -1 * p;
		matrix[14] = -z;
		matrix[3] = 0;
		matrix[7] = 0;
		matrix[11] = 0;
		matrix[15] = 1;
		return matrix;
	}
	toArray() {
		const result = [];
		Matrix4.toArray(this, result);
		return result;
	}
	/**
	 * Computes an Array from the provided Matrix4 instance.
	 * The array will be in column-major order.
	 * @example
	 * //create an array from an instance of Matrix4
	 * // m = [10.0, 14.0, 18.0, 22.0]
	 * //     [11.0, 15.0, 19.0, 23.0]
	 * //     [12.0, 16.0, 20.0, 24.0]
	 * //     [13.0, 17.0, 21.0, 25.0]
	 * const a = Matrix4.toArray(m);
	 *
	 * // m remains the same
	 * //creates a = [10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0]
	 */
	static toArray(matrix: Array<number> | Matrix4, result: Array<number>): Array<number> {
		if (!defined(result)) {
			return [
				matrix[0],
				matrix[1],
				matrix[2],
				matrix[3],
				matrix[4],
				matrix[5],
				matrix[6],
				matrix[7],
				matrix[8],
				matrix[9],
				matrix[10],
				matrix[11],
				matrix[12],
				matrix[13],
				matrix[14],
				matrix[15]
			];
		}
		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[3];
		result[4] = matrix[4];
		result[5] = matrix[5];
		result[6] = matrix[6];
		result[7] = matrix[7];
		result[8] = matrix[8];
		result[9] = matrix[9];
		result[10] = matrix[10];
		result[11] = matrix[11];
		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];
		return result;
	}

	static getElementIndex(column: number, row: number): number {
		return column * 4 + row;
	}

	static getColumn(matrix: Matrix4, index: number, result: Vector4): Vector4 {
		const startIndex = index * 4;
		const x = matrix[startIndex];
		const y = matrix[startIndex + 1];
		const z = matrix[startIndex + 2];
		const w = matrix[startIndex + 3];

		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static setColumn(matrix: Matrix4, index: number, cartesian: Vector4, result: Matrix4): Matrix4 {
		result = Matrix4.clone(matrix, result);
		const startIndex = index * 4;
		result[startIndex] = cartesian.x;
		result[startIndex + 1] = cartesian.y;
		result[startIndex + 2] = cartesian.z;
		result[startIndex + 3] = cartesian.w;
		return result;
	}

	static getRow(matrix: Matrix4, index: number, result: Vector4): Vector4 {
		const x = matrix[index];
		const y = matrix[index + 4];
		const z = matrix[index + 8];
		const w = matrix[index + 12];

		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static setRow(matrix: Matrix4, index: number, cartesian: Vector4, result: Matrix4): Matrix4 {
		result = Matrix4.clone(matrix, result);
		result[index] = cartesian.x;
		result[index + 4] = cartesian.y;
		result[index + 8] = cartesian.z;
		result[index + 12] = cartesian.w;
		return result;
	}

	static setTranslation(matrix: Matrix4, translation: Vector3, result: Matrix4): Matrix4 {
		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[3];

		result[4] = matrix[4];
		result[5] = matrix[5];
		result[6] = matrix[6];
		result[7] = matrix[7];

		result[8] = matrix[8];
		result[9] = matrix[9];
		result[10] = matrix[10];
		result[11] = matrix[11];

		result[12] = translation.x;
		result[13] = translation.y;
		result[14] = translation.z;
		result[15] = matrix[15];

		return result;
	}

	static setScale(matrix: Matrix4, scale: Vector3, result: Matrix4): Matrix4 {
		const existingScale = Matrix4.getScale(matrix, scaleScratch1);
		const scaleRatioX = scale.x / existingScale.x;
		const scaleRatioY = scale.y / existingScale.y;
		const scaleRatioZ = scale.z / existingScale.z;

		result[0] = matrix[0] * scaleRatioX;
		result[1] = matrix[1] * scaleRatioX;
		result[2] = matrix[2] * scaleRatioX;
		result[3] = matrix[3];

		result[4] = matrix[4] * scaleRatioY;
		result[5] = matrix[5] * scaleRatioY;
		result[6] = matrix[6] * scaleRatioY;
		result[7] = matrix[7];

		result[8] = matrix[8] * scaleRatioZ;
		result[9] = matrix[9] * scaleRatioZ;
		result[10] = matrix[10] * scaleRatioZ;
		result[11] = matrix[11];

		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];

		return result;
	}

	static getScale(matrix: Matrix4, result: Vector3): Vector3 {
		result.x = Vector3.magnitude(Vector3.fromElements(matrix[0], matrix[1], matrix[2], scratchColumn));
		result.y = Vector3.magnitude(Vector3.fromElements(matrix[4], matrix[5], matrix[6], scratchColumn));
		result.z = Vector3.magnitude(Vector3.fromElements(matrix[8], matrix[9], matrix[10], scratchColumn));
		return result;
	}

	static getMaximumScale(matrix: Matrix4): number {
		Matrix4.getScale(matrix, scaleScratch3);
		return Vector3.maximumComponent(scaleScratch3);
	}

	static setRotation(matrix: Matrix4, rotation: Matrix3, result: Matrix4): Matrix4 {
		const scale = Matrix4.getScale(matrix, scaleScratch4);

		result[0] = rotation[0] * scale.x;
		result[1] = rotation[1] * scale.x;
		result[2] = rotation[2] * scale.x;
		result[3] = matrix[3];

		result[4] = rotation[3] * scale.y;
		result[5] = rotation[4] * scale.y;
		result[6] = rotation[5] * scale.y;
		result[7] = matrix[7];

		result[8] = rotation[6] * scale.z;
		result[9] = rotation[7] * scale.z;
		result[10] = rotation[8] * scale.z;
		result[11] = matrix[11];

		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];

		return result;
	}

	static getRotation(matrix: Matrix4, result: Quaternion): Quaternion {
		const scale = Matrix4.getScale(matrix, scaleScratch5);

		const is1 = 1 / scale.x;
		const is2 = 1 / scale.y;
		const is3 = 1 / scale.z;

		const sm11 = matrix[0] * is1;
		const sm12 = matrix[1] * is2;
		const sm13 = matrix[2] * is3;
		const sm21 = matrix[4] * is1;
		const sm22 = matrix[5] * is2;
		const sm23 = matrix[6] * is3;
		const sm31 = matrix[8] * is1;
		const sm32 = matrix[9] * is2;
		const sm33 = matrix[10] * is3;

		const trace = sm11 + sm22 + sm33;
		let S = 0;

		if (trace > 0) {
			S = Math.sqrt(trace + 1.0) * 2;
			result.w = 0.25 * S;
			result.x = (sm23 - sm32) / S;
			result.y = (sm31 - sm13) / S;
			result.z = (sm12 - sm21) / S;
		} else if (sm11 > sm22 && sm11 > sm33) {
			S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
			result.w = (sm23 - sm32) / S;
			result.x = 0.25 * S;
			result.y = (sm12 + sm21) / S;
			result.z = (sm31 + sm13) / S;
		} else if (sm22 > sm33) {
			S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
			result.w = (sm31 - sm13) / S;
			result.x = (sm12 + sm21) / S;
			result.y = 0.25 * S;
			result.z = (sm23 + sm32) / S;
		} else {
			S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
			result.w = (sm12 - sm21) / S;
			result.x = (sm31 + sm13) / S;
			result.y = (sm23 + sm32) / S;
			result.z = 0.25 * S;
		}
		return result;
	}

	static multiply(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4 {
		const left0 = left[0];
		const left1 = left[1];
		const left2 = left[2];
		const left3 = left[3];
		const left4 = left[4];
		const left5 = left[5];
		const left6 = left[6];
		const left7 = left[7];
		const left8 = left[8];
		const left9 = left[9];
		const left10 = left[10];
		const left11 = left[11];
		const left12 = left[12];
		const left13 = left[13];
		const left14 = left[14];
		const left15 = left[15];

		const right0 = right[0];
		const right1 = right[1];
		const right2 = right[2];
		const right3 = right[3];
		const right4 = right[4];
		const right5 = right[5];
		const right6 = right[6];
		const right7 = right[7];
		const right8 = right[8];
		const right9 = right[9];
		const right10 = right[10];
		const right11 = right[11];
		const right12 = right[12];
		const right13 = right[13];
		const right14 = right[14];
		const right15 = right[15];

		const column0Row0 = left0 * right0 + left4 * right1 + left8 * right2 + left12 * right3;
		const column0Row1 = left1 * right0 + left5 * right1 + left9 * right2 + left13 * right3;
		const column0Row2 = left2 * right0 + left6 * right1 + left10 * right2 + left14 * right3;
		const column0Row3 = left3 * right0 + left7 * right1 + left11 * right2 + left15 * right3;

		const column1Row0 = left0 * right4 + left4 * right5 + left8 * right6 + left12 * right7;
		const column1Row1 = left1 * right4 + left5 * right5 + left9 * right6 + left13 * right7;
		const column1Row2 = left2 * right4 + left6 * right5 + left10 * right6 + left14 * right7;
		const column1Row3 = left3 * right4 + left7 * right5 + left11 * right6 + left15 * right7;

		const column2Row0 = left0 * right8 + left4 * right9 + left8 * right10 + left12 * right11;
		const column2Row1 = left1 * right8 + left5 * right9 + left9 * right10 + left13 * right11;
		const column2Row2 = left2 * right8 + left6 * right9 + left10 * right10 + left14 * right11;
		const column2Row3 = left3 * right8 + left7 * right9 + left11 * right10 + left15 * right11;

		const column3Row0 = left0 * right12 + left4 * right13 + left8 * right14 + left12 * right15;
		const column3Row1 = left1 * right12 + left5 * right13 + left9 * right14 + left13 * right15;
		const column3Row2 = left2 * right12 + left6 * right13 + left10 * right14 + left14 * right15;
		const column3Row3 = left3 * right12 + left7 * right13 + left11 * right14 + left15 * right15;

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column0Row2;
		result[3] = column0Row3;
		result[4] = column1Row0;
		result[5] = column1Row1;
		result[6] = column1Row2;
		result[7] = column1Row3;
		result[8] = column2Row0;
		result[9] = column2Row1;
		result[10] = column2Row2;
		result[11] = column2Row3;
		result[12] = column3Row0;
		result[13] = column3Row1;
		result[14] = column3Row2;
		result[15] = column3Row3;
		return result;
	}

	static add(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4 {
		result[0] = left[0] + right[0];
		result[1] = left[1] + right[1];
		result[2] = left[2] + right[2];
		result[3] = left[3] + right[3];
		result[4] = left[4] + right[4];
		result[5] = left[5] + right[5];
		result[6] = left[6] + right[6];
		result[7] = left[7] + right[7];
		result[8] = left[8] + right[8];
		result[9] = left[9] + right[9];
		result[10] = left[10] + right[10];
		result[11] = left[11] + right[11];
		result[12] = left[12] + right[12];
		result[13] = left[13] + right[13];
		result[14] = left[14] + right[14];
		result[15] = left[15] + right[15];
		return result;
	}

	static subtract(left: Matrix4, right: Matrix4, result: Matrix4) {
		result[0] = left[0] - right[0];
		result[1] = left[1] - right[1];
		result[2] = left[2] - right[2];
		result[3] = left[3] - right[3];
		result[4] = left[4] - right[4];
		result[5] = left[5] - right[5];
		result[6] = left[6] - right[6];
		result[7] = left[7] - right[7];
		result[8] = left[8] - right[8];
		result[9] = left[9] - right[9];
		result[10] = left[10] - right[10];
		result[11] = left[11] - right[11];
		result[12] = left[12] - right[12];
		result[13] = left[13] - right[13];
		result[14] = left[14] - right[14];
		result[15] = left[15] - right[15];
		return result;
	}

	static multiplyTransformation(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4 {
		const left0 = left[0];
		const left1 = left[1];
		const left2 = left[2];
		const left4 = left[4];
		const left5 = left[5];
		const left6 = left[6];
		const left8 = left[8];
		const left9 = left[9];
		const left10 = left[10];
		const left12 = left[12];
		const left13 = left[13];
		const left14 = left[14];

		const right0 = right[0];
		const right1 = right[1];
		const right2 = right[2];
		const right4 = right[4];
		const right5 = right[5];
		const right6 = right[6];
		const right8 = right[8];
		const right9 = right[9];
		const right10 = right[10];
		const right12 = right[12];
		const right13 = right[13];
		const right14 = right[14];

		const column0Row0 = left0 * right0 + left4 * right1 + left8 * right2;
		const column0Row1 = left1 * right0 + left5 * right1 + left9 * right2;
		const column0Row2 = left2 * right0 + left6 * right1 + left10 * right2;

		const column1Row0 = left0 * right4 + left4 * right5 + left8 * right6;
		const column1Row1 = left1 * right4 + left5 * right5 + left9 * right6;
		const column1Row2 = left2 * right4 + left6 * right5 + left10 * right6;

		const column2Row0 = left0 * right8 + left4 * right9 + left8 * right10;
		const column2Row1 = left1 * right8 + left5 * right9 + left9 * right10;
		const column2Row2 = left2 * right8 + left6 * right9 + left10 * right10;

		const column3Row0 = left0 * right12 + left4 * right13 + left8 * right14 + left12;
		const column3Row1 = left1 * right12 + left5 * right13 + left9 * right14 + left13;
		const column3Row2 = left2 * right12 + left6 * right13 + left10 * right14 + left14;

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column0Row2;
		result[3] = 0.0;
		result[4] = column1Row0;
		result[5] = column1Row1;
		result[6] = column1Row2;
		result[7] = 0.0;
		result[8] = column2Row0;
		result[9] = column2Row1;
		result[10] = column2Row2;
		result[11] = 0.0;
		result[12] = column3Row0;
		result[13] = column3Row1;
		result[14] = column3Row2;
		result[15] = 1.0;
		return result;
	}

	static multiplyByMatrix3(matrix: Matrix4, rotation: Matrix3, result: Matrix4): Matrix4 {
		const left0 = matrix[0];
		const left1 = matrix[1];
		const left2 = matrix[2];
		const left4 = matrix[4];
		const left5 = matrix[5];
		const left6 = matrix[6];
		const left8 = matrix[8];
		const left9 = matrix[9];
		const left10 = matrix[10];

		const right0 = rotation[0];
		const right1 = rotation[1];
		const right2 = rotation[2];
		const right4 = rotation[3];
		const right5 = rotation[4];
		const right6 = rotation[5];
		const right8 = rotation[6];
		const right9 = rotation[7];
		const right10 = rotation[8];

		const column0Row0 = left0 * right0 + left4 * right1 + left8 * right2;
		const column0Row1 = left1 * right0 + left5 * right1 + left9 * right2;
		const column0Row2 = left2 * right0 + left6 * right1 + left10 * right2;

		const column1Row0 = left0 * right4 + left4 * right5 + left8 * right6;
		const column1Row1 = left1 * right4 + left5 * right5 + left9 * right6;
		const column1Row2 = left2 * right4 + left6 * right5 + left10 * right6;

		const column2Row0 = left0 * right8 + left4 * right9 + left8 * right10;
		const column2Row1 = left1 * right8 + left5 * right9 + left9 * right10;
		const column2Row2 = left2 * right8 + left6 * right9 + left10 * right10;

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column0Row2;
		result[3] = 0.0;
		result[4] = column1Row0;
		result[5] = column1Row1;
		result[6] = column1Row2;
		result[7] = 0.0;
		result[8] = column2Row0;
		result[9] = column2Row1;
		result[10] = column2Row2;
		result[11] = 0.0;
		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];
		return result;
	}

	static multiplyByTranslation(matrix: Matrix4, translation: Vector3, result: Matrix4): Matrix4 {
		const x = translation.x;
		const y = translation.y;
		const z = translation.z;

		const tx = x * matrix[0] + y * matrix[4] + z * matrix[8] + matrix[12];
		const ty = x * matrix[1] + y * matrix[5] + z * matrix[9] + matrix[13];
		const tz = x * matrix[2] + y * matrix[6] + z * matrix[10] + matrix[14];

		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[3];
		result[4] = matrix[4];
		result[5] = matrix[5];
		result[6] = matrix[6];
		result[7] = matrix[7];
		result[8] = matrix[8];
		result[9] = matrix[9];
		result[10] = matrix[10];
		result[11] = matrix[11];
		result[12] = tx;
		result[13] = ty;
		result[14] = tz;
		result[15] = matrix[15];
		return result;
	}

	static multiplyByScale(matrix: Matrix4, scale: Vector3, result: Matrix4): Matrix4 {
		const scaleX = scale.x;
		const scaleY = scale.y;
		const scaleZ = scale.z;

		// Faster than Vector3.equals
		if (scaleX === 1.0 && scaleY === 1.0 && scaleZ === 1.0) {
			return Matrix4.clone(matrix, result);
		}

		result[0] = scaleX * matrix[0];
		result[1] = scaleX * matrix[1];
		result[2] = scaleX * matrix[2];
		result[3] = matrix[3];

		result[4] = scaleY * matrix[4];
		result[5] = scaleY * matrix[5];
		result[6] = scaleY * matrix[6];
		result[7] = matrix[7];

		result[8] = scaleZ * matrix[8];
		result[9] = scaleZ * matrix[9];
		result[10] = scaleZ * matrix[10];
		result[11] = matrix[11];

		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];

		return result;
	}

	static multiplyByUniformScale(matrix: Matrix4, scale: number, result: Matrix4): Matrix4 {
		result[0] = matrix[0] * scale;
		result[1] = matrix[1] * scale;
		result[2] = matrix[2] * scale;
		result[3] = matrix[3];

		result[4] = matrix[4] * scale;
		result[5] = matrix[5] * scale;
		result[6] = matrix[6] * scale;
		result[7] = matrix[7];

		result[8] = matrix[8] * scale;
		result[9] = matrix[9] * scale;
		result[10] = matrix[10] * scale;
		result[11] = matrix[11];

		result[12] = matrix[12];
		result[13] = matrix[13];
		result[14] = matrix[14];
		result[15] = matrix[15];

		return result;
	}

	static multiplyByVector(matrix: Matrix4, cartesian: Vector4, result: Vector4): Vector4 {
		const vX = cartesian.x;
		const vY = cartesian.y;
		const vZ = cartesian.z;
		const vW = cartesian.w;

		const x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12] * vW;
		const y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13] * vW;
		const z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14] * vW;
		const w = matrix[3] * vX + matrix[7] * vY + matrix[11] * vZ + matrix[15] * vW;

		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static multiplyByPointAsVector(matrix: Matrix4, cartesian: Vector3, result: Vector3): Vector3 {
		const vX = cartesian.x;
		const vY = cartesian.y;
		const vZ = cartesian.z;

		const x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ;
		const y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ;
		const z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ;

		result.x = x;
		result.y = y;
		result.z = z;
		return result;
	}

	static multiplyByPoint(matrix: Matrix4, cartesian: Vector3, result: Vector3): Vector3 {
		const vX = cartesian.x;
		const vY = cartesian.y;
		const vZ = cartesian.z;

		const x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12];
		const y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13];
		const z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14];

		result.x = x;
		result.y = y;
		result.z = z;
		return result;
	}

	static multiplyByScalar(matrix: Matrix4, scalar: number, result: Matrix4): Matrix4 {
		result[0] = matrix[0] * scalar;
		result[1] = matrix[1] * scalar;
		result[2] = matrix[2] * scalar;
		result[3] = matrix[3] * scalar;
		result[4] = matrix[4] * scalar;
		result[5] = matrix[5] * scalar;
		result[6] = matrix[6] * scalar;
		result[7] = matrix[7] * scalar;
		result[8] = matrix[8] * scalar;
		result[9] = matrix[9] * scalar;
		result[10] = matrix[10] * scalar;
		result[11] = matrix[11] * scalar;
		result[12] = matrix[12] * scalar;
		result[13] = matrix[13] * scalar;
		result[14] = matrix[14] * scalar;
		result[15] = matrix[15] * scalar;
		return result;
	}

	static negate(matrix: Matrix4, result: Matrix4): Matrix4 {
		result[0] = -matrix[0];
		result[1] = -matrix[1];
		result[2] = -matrix[2];
		result[3] = -matrix[3];
		result[4] = -matrix[4];
		result[5] = -matrix[5];
		result[6] = -matrix[6];
		result[7] = -matrix[7];
		result[8] = -matrix[8];
		result[9] = -matrix[9];
		result[10] = -matrix[10];
		result[11] = -matrix[11];
		result[12] = -matrix[12];
		result[13] = -matrix[13];
		result[14] = -matrix[14];
		result[15] = -matrix[15];
		return result;
	}

	static transpose(matrix: Matrix4, result: Matrix4): Matrix4 {
		const matrix1 = matrix[1];
		const matrix2 = matrix[2];
		const matrix3 = matrix[3];
		const matrix6 = matrix[6];
		const matrix7 = matrix[7];
		const matrix11 = matrix[11];

		result[0] = matrix[0];
		result[1] = matrix[4];
		result[2] = matrix[8];
		result[3] = matrix[12];
		result[4] = matrix1;
		result[5] = matrix[5];
		result[6] = matrix[9];
		result[7] = matrix[13];
		result[8] = matrix2;
		result[9] = matrix6;
		result[10] = matrix[10];
		result[11] = matrix[14];
		result[12] = matrix3;
		result[13] = matrix7;
		result[14] = matrix11;
		result[15] = matrix[15];
		return result;
	}

	static abs(matrix: Matrix4, result: Matrix4) {
		result[0] = Math.abs(matrix[0]);
		result[1] = Math.abs(matrix[1]);
		result[2] = Math.abs(matrix[2]);
		result[3] = Math.abs(matrix[3]);
		result[4] = Math.abs(matrix[4]);
		result[5] = Math.abs(matrix[5]);
		result[6] = Math.abs(matrix[6]);
		result[7] = Math.abs(matrix[7]);
		result[8] = Math.abs(matrix[8]);
		result[9] = Math.abs(matrix[9]);
		result[10] = Math.abs(matrix[10]);
		result[11] = Math.abs(matrix[11]);
		result[12] = Math.abs(matrix[12]);
		result[13] = Math.abs(matrix[13]);
		result[14] = Math.abs(matrix[14]);
		result[15] = Math.abs(matrix[15]);

		return result;
	}

	static equals(left: Matrix4, right: Matrix4): boolean {
		// Given that most matrices will be transformation matrices, the elements
		// are tested in order such that the test is likely to fail as early
		// as possible.  I _think_ this is just as friendly to the L1 cache
		// as testing in index order.  It is certainty faster in practice.
		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				// Translation
				left[12] === right[12] &&
				left[13] === right[13] &&
				left[14] === right[14] &&
				// Rotation/scale
				left[0] === right[0] &&
				left[1] === right[1] &&
				left[2] === right[2] &&
				left[4] === right[4] &&
				left[5] === right[5] &&
				left[6] === right[6] &&
				left[8] === right[8] &&
				left[9] === right[9] &&
				left[10] === right[10] &&
				// Bottom row
				left[3] === right[3] &&
				left[7] === right[7] &&
				left[11] === right[11] &&
				left[15] === right[15])
		);
	}

	static equalsEpsilon(left: Matrix4, right: Matrix4, epsilon: number): boolean {
		epsilon = defaultValue(epsilon, 0);

		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				Math.abs(left[0] - right[0]) <= epsilon &&
				Math.abs(left[1] - right[1]) <= epsilon &&
				Math.abs(left[2] - right[2]) <= epsilon &&
				Math.abs(left[3] - right[3]) <= epsilon &&
				Math.abs(left[4] - right[4]) <= epsilon &&
				Math.abs(left[5] - right[5]) <= epsilon &&
				Math.abs(left[6] - right[6]) <= epsilon &&
				Math.abs(left[7] - right[7]) <= epsilon &&
				Math.abs(left[8] - right[8]) <= epsilon &&
				Math.abs(left[9] - right[9]) <= epsilon &&
				Math.abs(left[10] - right[10]) <= epsilon &&
				Math.abs(left[11] - right[11]) <= epsilon &&
				Math.abs(left[12] - right[12]) <= epsilon &&
				Math.abs(left[13] - right[13]) <= epsilon &&
				Math.abs(left[14] - right[14]) <= epsilon &&
				Math.abs(left[15] - right[15]) <= epsilon)
		);
	}

	static getTranslation(matrix: Matrix4, result: Vector3): Vector3 {
		result.x = matrix[12];
		result.y = matrix[13];
		result.z = matrix[14];
		return result;
	}

	static getMatrix3(matrix: Matrix4, result: Matrix3): Matrix3 {
		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[4];
		result[4] = matrix[5];
		result[5] = matrix[6];
		result[6] = matrix[8];
		result[7] = matrix[9];
		result[8] = matrix[10];
		return result;
	}

	static inverse(matrix: Matrix4, result: Matrix4) {
		//
		// Ported from:
		//   ftp://download.intel.com/design/PentiumIII/sml/24504301.pdf
		//
		const src0 = matrix[0];
		const src1 = matrix[4];
		const src2 = matrix[8];
		const src3 = matrix[12];
		const src4 = matrix[1];
		const src5 = matrix[5];
		const src6 = matrix[9];
		const src7 = matrix[13];
		const src8 = matrix[2];
		const src9 = matrix[6];
		const src10 = matrix[10];
		const src11 = matrix[14];
		const src12 = matrix[3];
		const src13 = matrix[7];
		const src14 = matrix[11];
		const src15 = matrix[15];

		// calculate pairs for first 8 elements (cofactors)
		let tmp0 = src10 * src15;
		let tmp1 = src11 * src14;
		let tmp2 = src9 * src15;
		let tmp3 = src11 * src13;
		let tmp4 = src9 * src14;
		let tmp5 = src10 * src13;
		let tmp6 = src8 * src15;
		let tmp7 = src11 * src12;
		let tmp8 = src8 * src14;
		let tmp9 = src10 * src12;
		let tmp10 = src8 * src13;
		let tmp11 = src9 * src12;

		// calculate first 8 elements (cofactors)
		const dst0 = tmp0 * src5 + tmp3 * src6 + tmp4 * src7 - (tmp1 * src5 + tmp2 * src6 + tmp5 * src7);
		const dst1 = tmp1 * src4 + tmp6 * src6 + tmp9 * src7 - (tmp0 * src4 + tmp7 * src6 + tmp8 * src7);
		const dst2 = tmp2 * src4 + tmp7 * src5 + tmp10 * src7 - (tmp3 * src4 + tmp6 * src5 + tmp11 * src7);
		const dst3 = tmp5 * src4 + tmp8 * src5 + tmp11 * src6 - (tmp4 * src4 + tmp9 * src5 + tmp10 * src6);
		const dst4 = tmp1 * src1 + tmp2 * src2 + tmp5 * src3 - (tmp0 * src1 + tmp3 * src2 + tmp4 * src3);
		const dst5 = tmp0 * src0 + tmp7 * src2 + tmp8 * src3 - (tmp1 * src0 + tmp6 * src2 + tmp9 * src3);
		const dst6 = tmp3 * src0 + tmp6 * src1 + tmp11 * src3 - (tmp2 * src0 + tmp7 * src1 + tmp10 * src3);
		const dst7 = tmp4 * src0 + tmp9 * src1 + tmp10 * src2 - (tmp5 * src0 + tmp8 * src1 + tmp11 * src2);

		// calculate pairs for second 8 elements (cofactors)
		tmp0 = src2 * src7;
		tmp1 = src3 * src6;
		tmp2 = src1 * src7;
		tmp3 = src3 * src5;
		tmp4 = src1 * src6;
		tmp5 = src2 * src5;
		tmp6 = src0 * src7;
		tmp7 = src3 * src4;
		tmp8 = src0 * src6;
		tmp9 = src2 * src4;
		tmp10 = src0 * src5;
		tmp11 = src1 * src4;

		// calculate second 8 elements (cofactors)
		const dst8 = tmp0 * src13 + tmp3 * src14 + tmp4 * src15 - (tmp1 * src13 + tmp2 * src14 + tmp5 * src15);
		const dst9 = tmp1 * src12 + tmp6 * src14 + tmp9 * src15 - (tmp0 * src12 + tmp7 * src14 + tmp8 * src15);
		const dst10 = tmp2 * src12 + tmp7 * src13 + tmp10 * src15 - (tmp3 * src12 + tmp6 * src13 + tmp11 * src15);
		const dst11 = tmp5 * src12 + tmp8 * src13 + tmp11 * src14 - (tmp4 * src12 + tmp9 * src13 + tmp10 * src14);
		const dst12 = tmp2 * src10 + tmp5 * src11 + tmp1 * src9 - (tmp4 * src11 + tmp0 * src9 + tmp3 * src10);
		const dst13 = tmp8 * src11 + tmp0 * src8 + tmp7 * src10 - (tmp6 * src10 + tmp9 * src11 + tmp1 * src8);
		const dst14 = tmp6 * src9 + tmp11 * src11 + tmp3 * src8 - (tmp10 * src11 + tmp2 * src8 + tmp7 * src9);
		const dst15 = tmp10 * src10 + tmp4 * src8 + tmp9 * src9 - (tmp8 * src9 + tmp11 * src10 + tmp5 * src8);

		// calculate determinant
		let det = src0 * dst0 + src1 * dst1 + src2 * dst2 + src3 * dst3;

		if (Math.abs(det) < GMath.EPSILON21) {
			// Special case for a zero scale matrix that can occur, for example,
			// when a model's node has a [0, 0, 0] scale.
			if (
				Matrix3.equalsEpsilon(
					Matrix4.getMatrix3(matrix, scratchInverseRotation),
					scratchMatrix3Zero,
					GMath.EPSILON7
				) &&
				Vector4.equals(Matrix4.getRow(matrix, 3, scratchBottomRow), scratchExpectedBottomRow)
			) {
				result[0] = 0.0;
				result[1] = 0.0;
				result[2] = 0.0;
				result[3] = 0.0;
				result[4] = 0.0;
				result[5] = 0.0;
				result[6] = 0.0;
				result[7] = 0.0;
				result[8] = 0.0;
				result[9] = 0.0;
				result[10] = 0.0;
				result[11] = 0.0;
				result[12] = -matrix[12];
				result[13] = -matrix[13];
				result[14] = -matrix[14];
				result[15] = 1.0;
				return result;
			}

			throw new Error("matrix is not invertible because its determinate is zero.");
		}

		// calculate matrix inverse
		det = 1.0 / det;

		result[0] = dst0 * det;
		result[1] = dst1 * det;
		result[2] = dst2 * det;
		result[3] = dst3 * det;
		result[4] = dst4 * det;
		result[5] = dst5 * det;
		result[6] = dst6 * det;
		result[7] = dst7 * det;
		result[8] = dst8 * det;
		result[9] = dst9 * det;
		result[10] = dst10 * det;
		result[11] = dst11 * det;
		result[12] = dst12 * det;
		result[13] = dst13 * det;
		result[14] = dst14 * det;
		result[15] = dst15 * det;
		return result;
	}

	static inverseTransformation(matrix: Matrix4, result: Matrix4): Matrix4 {
		// This function is an optimized version of the below 4 lines.
		// const rT = Matrix3.transpose(Matrix4.getMatrix3(matrix));
		// const rTN = Matrix3.negate(rT);
		// const rTT = Matrix3.multiplyByVector(rTN, Matrix4.getTranslation(matrix));
		// return Matrix4.fromRotationTranslation(rT, rTT, result);

		const matrix0 = matrix[0];
		const matrix1 = matrix[1];
		const matrix2 = matrix[2];
		const matrix4 = matrix[4];
		const matrix5 = matrix[5];
		const matrix6 = matrix[6];
		const matrix8 = matrix[8];
		const matrix9 = matrix[9];
		const matrix10 = matrix[10];

		const vX = matrix[12];
		const vY = matrix[13];
		const vZ = matrix[14];

		const x = -matrix0 * vX - matrix1 * vY - matrix2 * vZ;
		const y = -matrix4 * vX - matrix5 * vY - matrix6 * vZ;
		const z = -matrix8 * vX - matrix9 * vY - matrix10 * vZ;

		result[0] = matrix0;
		result[1] = matrix4;
		result[2] = matrix8;
		result[3] = 0.0;
		result[4] = matrix1;
		result[5] = matrix5;
		result[6] = matrix9;
		result[7] = 0.0;
		result[8] = matrix2;
		result[9] = matrix6;
		result[10] = matrix10;
		result[11] = 0.0;
		result[12] = x;
		result[13] = y;
		result[14] = z;
		result[15] = 1.0;
		return result;
	}

	static inverseTranspose(matrix: Matrix4, result: Matrix4): Matrix4 {
		return Matrix4.inverse(Matrix4.transpose(matrix, scratchTransposeMatrix), result);
	}
	/**
	 * @private
	 */
	static equalsArray(matrix: Matrix4, array: Array<number>, offset: number): boolean {
		return (
			matrix[0] === array[offset] &&
			matrix[1] === array[offset + 1] &&
			matrix[2] === array[offset + 2] &&
			matrix[3] === array[offset + 3] &&
			matrix[4] === array[offset + 4] &&
			matrix[5] === array[offset + 5] &&
			matrix[6] === array[offset + 6] &&
			matrix[7] === array[offset + 7] &&
			matrix[8] === array[offset + 8] &&
			matrix[9] === array[offset + 9] &&
			matrix[10] === array[offset + 10] &&
			matrix[11] === array[offset + 11] &&
			matrix[12] === array[offset + 12] &&
			matrix[13] === array[offset + 13] &&
			matrix[14] === array[offset + 14] &&
			matrix[15] === array[offset + 15]
		);
	}
}

const scratchTransposeMatrix = new Matrix4();

const scaleScratch1 = new Vector3();
const scratchColumn = new Vector3();
const scaleScratch3 = new Vector3();
const scaleScratch4 = new Vector3();
const scaleScratch5 = new Vector3();
const scratchInverseRotation = new Matrix3();
const scratchMatrix3Zero = new Matrix3();
const scratchBottomRow = new Vector4();
const scratchExpectedBottomRow = new Vector4(0.0, 0.0, 0.0, 1.0);
const x = new Vector3();
const y = new Vector3();
const z = new Vector3();
export default Matrix4;
