import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
import Matrix4 from "./Matrix4";
import { Quaternion } from "./Quaternion";
import Vector3 from "./Vector3";
/**
 * A 3x3 matrix, indexable as a column-major order array.
 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
 * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
 * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
 * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
 * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
 * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
 */
class Matrix3 {
	constructor(
		column0Row0 = 0,
		column1Row0 = 0,
		column2Row0 = 0,
		column0Row1 = 0,
		column1Row1 = 0,
		column2Row1 = 0,
		column0Row2 = 0,
		column1Row2 = 0,
		column2Row2 = 0
	) {
		this[0] = column0Row0;
		this[1] = column0Row1;
		this[2] = column0Row2;
		this[3] = column1Row0;
		this[4] = column1Row1;
		this[5] = column1Row2;
		this[6] = column2Row0;
		this[7] = column2Row1;
		this[8] = column2Row2;
	}
	setFromMatrix4(matrix: Matrix4): Matrix3 {
		this[0] = matrix[0];
		this[1] = matrix[1];
		this[2] = matrix[2];
		this[3] = matrix[4];
		this[4] = matrix[5];
		this[5] = matrix[2];
		this[6] = matrix[8];
		this[7] = matrix[9];
		this[8] = matrix[10];
		return this;
	}
	getNormalMatrix(matrix4: Matrix4): Matrix3 {
		this.setFromMatrix4(matrix4);
		Matrix3.inverse(this, this);
		Matrix3.transpose(this, this);
		return this;
	}

	static clone(matrix: Matrix3 | number[], result: Matrix3): Matrix3 {
		if (!defined(matrix)) {
			return undefined;
		}
		if (!defined(result)) {
			return new Matrix3(
				matrix[0],
				matrix[3],
				matrix[6],
				matrix[1],
				matrix[4],
				matrix[7],
				matrix[2],
				matrix[5],
				matrix[8]
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
		return result;
	}

	static fromColumnMajorArray(values: Array<number>, result?: Matrix3): Matrix3 {
		if (!defined(result)) {
			result = new Matrix3();
		}
		return Matrix3.clone(values, result);
	}

	static fromRowMajorArray(values: Array<number>, result?: Matrix3): Matrix3 {
		if (!defined(result)) {
			return new Matrix3(
				values[0],
				values[1],
				values[2],
				values[3],
				values[4],
				values[5],
				values[6],
				values[7],
				values[8]
			);
		}
		result[0] = values[0];
		result[1] = values[3];
		result[2] = values[6];
		result[3] = values[1];
		result[4] = values[4];
		result[5] = values[7];
		result[6] = values[2];
		result[7] = values[5];
		result[8] = values[8];
		return result;
	}

	static fromQuaternion(quaternion: Quaternion, result?: Matrix3): Matrix3 {
		const x2 = quaternion.x * quaternion.x;
		const xy = quaternion.x * quaternion.y;
		const xz = quaternion.x * quaternion.z;
		const xw = quaternion.x * quaternion.w;
		const y2 = quaternion.y * quaternion.y;
		const yz = quaternion.y * quaternion.z;
		const yw = quaternion.y * quaternion.w;
		const z2 = quaternion.z * quaternion.z;
		const zw = quaternion.z * quaternion.w;
		const w2 = quaternion.w * quaternion.w;

		const m00 = x2 - y2 - z2 + w2;
		const m01 = 2.0 * (xy - zw);
		const m02 = 2.0 * (xz + yw);

		const m10 = 2.0 * (xy + zw);
		const m11 = -x2 + y2 - z2 + w2;
		const m12 = 2.0 * (yz - xw);

		const m20 = 2.0 * (xz - yw);
		const m21 = 2.0 * (yz + xw);
		const m22 = -x2 - y2 + z2 + w2;

		if (!defined(result)) {
			return new Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22);
		}
		result[0] = m00;
		result[1] = m10;
		result[2] = m20;
		result[3] = m01;
		result[4] = m11;
		result[5] = m21;
		result[6] = m02;
		result[7] = m12;
		result[8] = m22;
		return result;
	}

	static fromScale(scale: Vector3, result: Matrix3): Matrix3 {
		if (!defined(result)) {
			return new Matrix3(scale.x, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, scale.z);
		}

		result[0] = scale.x;
		result[1] = 0.0;
		result[2] = 0.0;
		result[3] = 0.0;
		result[4] = scale.y;
		result[5] = 0.0;
		result[6] = 0.0;
		result[7] = 0.0;
		result[8] = scale.z;
		return result;
	}

	static fromRotationX(angle: number, result: Matrix3): Matrix3 {
		const cosAngle = Math.cos(angle);
		const sinAngle = Math.sin(angle);

		if (!defined(result)) {
			return new Matrix3(1.0, 0.0, 0.0, 0.0, cosAngle, -sinAngle, 0.0, sinAngle, cosAngle);
		}

		result[0] = 1.0;
		result[1] = 0.0;
		result[2] = 0.0;
		result[3] = 0.0;
		result[4] = cosAngle;
		result[5] = sinAngle;
		result[6] = 0.0;
		result[7] = -sinAngle;
		result[8] = cosAngle;

		return result;
	}

	static fromRotationY(angle: number, result: Matrix3): Matrix3 {
		const cosAngle = Math.cos(angle);
		const sinAngle = Math.sin(angle);

		if (!defined(result)) {
			return new Matrix3(cosAngle, 0.0, sinAngle, 0.0, 1.0, 0.0, -sinAngle, 0.0, cosAngle);
		}

		result[0] = cosAngle;
		result[1] = 0.0;
		result[2] = -sinAngle;
		result[3] = 0.0;
		result[4] = 1.0;
		result[5] = 0.0;
		result[6] = sinAngle;
		result[7] = 0.0;
		result[8] = cosAngle;

		return result;
	}

	static fromRotationZstatic(angle: number, result: Matrix3): Matrix3 {
		const cosAngle = Math.cos(angle);
		const sinAngle = Math.sin(angle);

		if (!defined(result)) {
			return new Matrix3(cosAngle, -sinAngle, 0.0, sinAngle, cosAngle, 0.0, 0.0, 0.0, 1.0);
		}

		result[0] = cosAngle;
		result[1] = sinAngle;
		result[2] = 0.0;
		result[3] = -sinAngle;
		result[4] = cosAngle;
		result[5] = 0.0;
		result[6] = 0.0;
		result[7] = 0.0;
		result[8] = 1.0;

		return result;
	}
	toArray() {
		const result = [];
		Matrix3.toArray(this, result);
		return result;
	}

	static toArray(matrix: Matrix3, result: number[]): number[] {
		if (!defined(result)) {
			return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8]];
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
		return result;
	}

	static getElementIndex(column: number, row: number): number {
		return column * 3 + row;
	}

	static getColumn(matrix: Matrix3, index: number, result: Vector3): Vector3 {
		const startIndex = index * 3;
		const x = matrix[startIndex];
		const y = matrix[startIndex + 1];
		const z = matrix[startIndex + 2];

		result.x = x;
		result.y = y;
		result.z = z;
		return result;
	}

	static setColumn(matrix: Matrix3, index: number, cartesian: Vector3, result: Matrix3): Matrix3 {
		result = Matrix3.clone(matrix, result);
		const startIndex = index * 3;
		result[startIndex] = cartesian.x;
		result[startIndex + 1] = cartesian.y;
		result[startIndex + 2] = cartesian.z;
		return result;
	}

	static getRow(matrix: Matrix3, index: number, result: Vector3): Vector3 {
		const x = matrix[index];
		const y = matrix[index + 3];
		const z = matrix[index + 6];

		result.x = x;
		result.y = y;
		result.z = z;
		return result;
	}

	static setRow(matrix: Matrix3, index: number, cartesian: Vector3, result: Matrix3): Matrix3 {
		result = Matrix3.clone(matrix, result);
		result[index] = cartesian.x;
		result[index + 3] = cartesian.y;
		result[index + 6] = cartesian.z;
		return result;
	}

	static setScale(matrix: Matrix3, scale: Vector3, result: Matrix3): Matrix3 {
		const existingScale = Matrix3.getScale(matrix, scaleScratch1);
		const scaleRatioX = scale.x / existingScale.x;
		const scaleRatioY = scale.y / existingScale.y;
		const scaleRatioZ = scale.z / existingScale.z;

		result[0] = matrix[0] * scaleRatioX;
		result[1] = matrix[1] * scaleRatioX;
		result[2] = matrix[2] * scaleRatioX;
		result[3] = matrix[3] * scaleRatioY;
		result[4] = matrix[4] * scaleRatioY;
		result[5] = matrix[5] * scaleRatioY;
		result[6] = matrix[6] * scaleRatioZ;
		result[7] = matrix[7] * scaleRatioZ;
		result[8] = matrix[8] * scaleRatioZ;

		return result;
	}

	static getScale(matrix: Matrix3, result: Vector3): Vector3 {
		result.x = Vector3.magnitude(Vector3.fromElements(matrix[0], matrix[1], matrix[2], scratchColumn));
		result.y = Vector3.magnitude(Vector3.fromElements(matrix[3], matrix[4], matrix[5], scratchColumn));
		result.z = Vector3.magnitude(Vector3.fromElements(matrix[6], matrix[7], matrix[8], scratchColumn));
		return result;
	}

	static getMaximumScale(matrix: Matrix3): number {
		Matrix3.getScale(matrix, scaleScratch3);
		return Vector3.maximumComponent(scaleScratch3);
	}

	static setRotation(matrix: Matrix3, rotation: Matrix3, result: Matrix3): Matrix3 {
		const scale = Matrix3.getScale(matrix, scaleScratch4);

		result[0] = rotation[0] * scale.x;
		result[1] = rotation[1] * scale.x;
		result[2] = rotation[2] * scale.x;
		result[3] = rotation[3] * scale.y;
		result[4] = rotation[4] * scale.y;
		result[5] = rotation[5] * scale.y;
		result[6] = rotation[6] * scale.z;
		result[7] = rotation[7] * scale.z;
		result[8] = rotation[8] * scale.z;

		return result;
	}

	static getRotation(matrix: Matrix3, result: Matrix3): Matrix3 {
		const scale = Matrix3.getScale(matrix, scaleScratch5);

		result[0] = matrix[0] / scale.x;
		result[1] = matrix[1] / scale.x;
		result[2] = matrix[2] / scale.x;
		result[3] = matrix[3] / scale.y;
		result[4] = matrix[4] / scale.y;
		result[5] = matrix[5] / scale.y;
		result[6] = matrix[6] / scale.z;
		result[7] = matrix[7] / scale.z;
		result[8] = matrix[8] / scale.z;

		return result;
	}

	static multiply(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3 {
		const column0Row0 = left[0] * right[0] + left[3] * right[1] + left[6] * right[2];
		const column0Row1 = left[1] * right[0] + left[4] * right[1] + left[7] * right[2];
		const column0Row2 = left[2] * right[0] + left[5] * right[1] + left[8] * right[2];

		const column1Row0 = left[0] * right[3] + left[3] * right[4] + left[6] * right[5];
		const column1Row1 = left[1] * right[3] + left[4] * right[4] + left[7] * right[5];
		const column1Row2 = left[2] * right[3] + left[5] * right[4] + left[8] * right[5];

		const column2Row0 = left[0] * right[6] + left[3] * right[7] + left[6] * right[8];
		const column2Row1 = left[1] * right[6] + left[4] * right[7] + left[7] * right[8];
		const column2Row2 = left[2] * right[6] + left[5] * right[7] + left[8] * right[8];

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column0Row2;
		result[3] = column1Row0;
		result[4] = column1Row1;
		result[5] = column1Row2;
		result[6] = column2Row0;
		result[7] = column2Row1;
		result[8] = column2Row2;
		return result;
	}

	static add(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3 {
		result[0] = left[0] + right[0];
		result[1] = left[1] + right[1];
		result[2] = left[2] + right[2];
		result[3] = left[3] + right[3];
		result[4] = left[4] + right[4];
		result[5] = left[5] + right[5];
		result[6] = left[6] + right[6];
		result[7] = left[7] + right[7];
		result[8] = left[8] + right[8];
		return result;
	}

	static subtract(left: Matrix3, right: Matrix3, result: Matrix3) {
		result[0] = left[0] - right[0];
		result[1] = left[1] - right[1];
		result[2] = left[2] - right[2];
		result[3] = left[3] - right[3];
		result[4] = left[4] - right[4];
		result[5] = left[5] - right[5];
		result[6] = left[6] - right[6];
		result[7] = left[7] - right[7];
		result[8] = left[8] - right[8];
		return result;
	}

	static multiplyByVector(matrix: Matrix3, cartesian: Vector3, result: Vector3): Vector3 {
		const vX = cartesian.x;
		const vY = cartesian.y;
		const vZ = cartesian.z;

		const x = matrix[0] * vX + matrix[3] * vY + matrix[6] * vZ;
		const y = matrix[1] * vX + matrix[4] * vY + matrix[7] * vZ;
		const z = matrix[2] * vX + matrix[5] * vY + matrix[8] * vZ;

		result.x = x;
		result.y = y;
		result.z = z;
		return result;
	}

	static multiplyByScalar(matrix: Matrix3, scalar: number, result: Matrix3): Matrix3 {
		result[0] = matrix[0] * scalar;
		result[1] = matrix[1] * scalar;
		result[2] = matrix[2] * scalar;
		result[3] = matrix[3] * scalar;
		result[4] = matrix[4] * scalar;
		result[5] = matrix[5] * scalar;
		result[6] = matrix[6] * scalar;
		result[7] = matrix[7] * scalar;
		result[8] = matrix[8] * scalar;
		return result;
	}

	static multiplyByScale(matrix: Matrix3, scale: Vector3, result: Matrix3): Matrix3 {
		result[0] = matrix[0] * scale.x;
		result[1] = matrix[1] * scale.x;
		result[2] = matrix[2] * scale.x;
		result[3] = matrix[3] * scale.y;
		result[4] = matrix[4] * scale.y;
		result[5] = matrix[5] * scale.y;
		result[6] = matrix[6] * scale.z;
		result[7] = matrix[7] * scale.z;
		result[8] = matrix[8] * scale.z;

		return result;
	}

	static negate(matrix: Matrix3, result: Matrix3): Matrix3 {
		result[0] = -matrix[0];
		result[1] = -matrix[1];
		result[2] = -matrix[2];
		result[3] = -matrix[3];
		result[4] = -matrix[4];
		result[5] = -matrix[5];
		result[6] = -matrix[6];
		result[7] = -matrix[7];
		result[8] = -matrix[8];
		return result;
	}

	static transpose(matrix: Matrix3, result: Matrix3): Matrix3 {
		const column0Row0 = matrix[0];
		const column0Row1 = matrix[3];
		const column0Row2 = matrix[6];
		const column1Row0 = matrix[1];
		const column1Row1 = matrix[4];
		const column1Row2 = matrix[7];
		const column2Row0 = matrix[2];
		const column2Row1 = matrix[5];
		const column2Row2 = matrix[8];

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column0Row2;
		result[3] = column1Row0;
		result[4] = column1Row1;
		result[5] = column1Row2;
		result[6] = column2Row0;
		result[7] = column2Row1;
		result[8] = column2Row2;
		return result;
	}

	static abs(matrix: Matrix3, result: Matrix3): Matrix3 {
		result[0] = Math.abs(matrix[0]);
		result[1] = Math.abs(matrix[1]);
		result[2] = Math.abs(matrix[2]);
		result[3] = Math.abs(matrix[3]);
		result[4] = Math.abs(matrix[4]);
		result[5] = Math.abs(matrix[5]);
		result[6] = Math.abs(matrix[6]);
		result[7] = Math.abs(matrix[7]);
		result[8] = Math.abs(matrix[8]);

		return result;
	}

	static determinant(matrix: Matrix3): number {
		const m11 = matrix[0];
		const m21 = matrix[3];
		const m31 = matrix[6];
		const m12 = matrix[1];
		const m22 = matrix[4];
		const m32 = matrix[7];
		const m13 = matrix[2];
		const m23 = matrix[5];
		const m33 = matrix[8];

		return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31);
	}

	static inverse(matrix: Matrix3, result: Matrix3): Matrix3 {
		const m11 = matrix[0];
		const m21 = matrix[1];
		const m31 = matrix[2];
		const m12 = matrix[3];
		const m22 = matrix[4];
		const m32 = matrix[5];
		const m13 = matrix[6];
		const m23 = matrix[7];
		const m33 = matrix[8];

		const determinant = Matrix3.determinant(matrix);

		// >>includeStart('debug', pragmas.debug);
		if (Math.abs(determinant) <= GMath.EPSILON15) {
			throw new Error("matrix is not invertible");
		}
		// >>includeEnd('debug');

		result[0] = m22 * m33 - m23 * m32;
		result[1] = m23 * m31 - m21 * m33;
		result[2] = m21 * m32 - m22 * m31;
		result[3] = m13 * m32 - m12 * m33;
		result[4] = m11 * m33 - m13 * m31;
		result[5] = m12 * m31 - m11 * m32;
		result[6] = m12 * m23 - m13 * m22;
		result[7] = m13 * m21 - m11 * m23;
		result[8] = m11 * m22 - m12 * m21;

		const scale = 1.0 / determinant;
		return Matrix3.multiplyByScalar(result, scale, result);
	}

	static inverseTranspose(matrix: Matrix3, result: Matrix3) {
		return Matrix3.inverse(Matrix3.transpose(matrix, scratchTransposeMatrix), result);
	}

	static equals(left: Matrix3, right: Matrix3): boolean {
		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				left[0] === right[0] &&
				left[1] === right[1] &&
				left[2] === right[2] &&
				left[3] === right[3] &&
				left[4] === right[4] &&
				left[5] === right[5] &&
				left[6] === right[6] &&
				left[7] === right[7] &&
				left[8] === right[8])
		);
	}

	static equalsEpsilon(left: Matrix3, right: Matrix3, epsilon = 0): boolean {
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
				Math.abs(left[8] - right[8]) <= epsilon)
		);
	}

	static IDENTITY = Object.freeze(new Matrix3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0));

	static ZERO = Object.freeze(new Matrix3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0));

	clone(result: Matrix3): Matrix3 {
		return Matrix3.clone(this, result);
	}

	equals(right: Matrix3): boolean {
		return Matrix3.equals(this, right);
	}

	/**
	 * @private
	 */
	equalsArray(matrix: Matrix3 | number[], array: number[], offset: number): boolean {
		return (
			matrix[0] === array[offset] &&
			matrix[1] === array[offset + 1] &&
			matrix[2] === array[offset + 2] &&
			matrix[3] === array[offset + 3] &&
			matrix[4] === array[offset + 4] &&
			matrix[5] === array[offset + 5] &&
			matrix[6] === array[offset + 6] &&
			matrix[7] === array[offset + 7] &&
			matrix[8] === array[offset + 8]
		);
	}

	/**
	 * Compares this matrix to the provided matrix componentwise and returns
	 * <code>true</code> if they are within the provided epsilon,
	 * <code>false</code> otherwise.
	 *
	 * @param {Matrix3} [right] The right hand side matrix.
	 * @param {Number} [epsilon=0] The epsilon to use for equality testing.
	 * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
	 */
	equalsEpsilon(right, epsilon) {
		return Matrix3.equalsEpsilon(this, right, epsilon);
	}

	toString() {
		return (
			`(${this[0]}, ${this[3]}, ${this[6]})\n` +
			`(${this[1]}, ${this[4]}, ${this[7]})\n` +
			`(${this[2]}, ${this[5]}, ${this[8]})`
		);
	}
}

const scaleScratch1 = new Vector3();
const scratchColumn = new Vector3();
const scaleScratch3 = new Vector3();
const scaleScratch4 = new Vector3();
const scaleScratch5 = new Vector3();

const scratchTransposeMatrix = new Matrix3();
export default Matrix3;
