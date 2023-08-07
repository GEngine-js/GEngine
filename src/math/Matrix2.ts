import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import Vector2 from "./Vector2";

/**
 * A 2x2 matrix, indexable as a column-major order array.
 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
 */
class Matrix2 {
	constructor(column0Row0 = 0, column1Row0 = 0, column0Row1 = 0, column1Row1 = 0) {
		this[0] = column0Row0;
		this[1] = column0Row1;
		this[2] = column1Row0;
		this[3] = column1Row1;
	}

	static clone(matrix: Matrix2 | number[], result: Matrix2): Matrix2 {
		if (!defined(matrix)) {
			return undefined;
		}
		if (!defined(result)) {
			return new Matrix2(matrix[0], matrix[2], matrix[1], matrix[3]);
		}
		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[3];
		return result;
	}

	static fromColumnMajorArray(values: number[], result: Matrix2): Matrix2 {
		return Matrix2.clone(values, result);
	}

	static fromRowMajorArray(values: number, result: Matrix2): Matrix2 {
		if (!defined(result)) {
			return new Matrix2(values[0], values[1], values[2], values[3]);
		}
		result[0] = values[0];
		result[1] = values[2];
		result[2] = values[1];
		result[3] = values[3];
		return result;
	}

	static fromScale(scale: Vector2, result: Matrix2): Matrix2 {
		if (!defined(result)) {
			return new Matrix2(scale.x, 0.0, 0.0, scale.y);
		}

		result[0] = scale.x;
		result[1] = 0.0;
		result[2] = 0.0;
		result[3] = scale.y;
		return result;
	}

	static fromRotation(angle: number, result: Matrix2): Matrix2 {
		const cosAngle = Math.cos(angle);
		const sinAngle = Math.sin(angle);

		if (!defined(result)) {
			return new Matrix2(cosAngle, -sinAngle, sinAngle, cosAngle);
		}
		result[0] = cosAngle;
		result[1] = sinAngle;
		result[2] = -sinAngle;
		result[3] = cosAngle;
		return result;
	}
	toArray() {
		const result = [];
		Matrix2.toArray(this, result);
		return result;
	}

	static toArray(matrix: Matrix2, result: number[]): number[] {
		if (!defined(result)) {
			return [matrix[0], matrix[1], matrix[2], matrix[3]];
		}
		result[0] = matrix[0];
		result[1] = matrix[1];
		result[2] = matrix[2];
		result[3] = matrix[3];
		return result;
	}

	static getElementIndex(column: number, row: number): number {
		return column * 2 + row;
	}

	static getColumn(matrix: Matrix2, index: number, result: Vector2): Vector2 {
		const startIndex = index * 2;
		const x = matrix[startIndex];
		const y = matrix[startIndex + 1];

		result.x = x;
		result.y = y;
		return result;
	}

	static setColumn(matrix: Matrix2, index: number, cartesian: Vector2, result: Matrix2): Matrix2 {
		result = Matrix2.clone(matrix, result);
		const startIndex = index * 2;
		result[startIndex] = cartesian.x;
		result[startIndex + 1] = cartesian.y;
		return result;
	}

	static getRow(matrix: Matrix2, index: number, result: Vector2): Vector2 {
		const x = matrix[index];
		const y = matrix[index + 2];

		result.x = x;
		result.y = y;
		return result;
	}

	static setRow(matrix: Matrix2, index: number, cartesian: Vector2, result: Matrix2): Matrix2 {
		result = Matrix2.clone(matrix, result);
		result[index] = cartesian.x;
		result[index + 2] = cartesian.y;
		return result;
	}

	static setScale(matrix: Matrix2, scale: Vector2, result: Matrix2): Matrix2 {
		const existingScale = Matrix2.getScale(matrix, scaleScratch1);
		const scaleRatioX = scale.x / existingScale.x;
		const scaleRatioY = scale.y / existingScale.y;

		result[0] = matrix[0] * scaleRatioX;
		result[1] = matrix[1] * scaleRatioX;
		result[2] = matrix[2] * scaleRatioY;
		result[3] = matrix[3] * scaleRatioY;

		return result;
	}

	static getScale(matrix: Matrix2, result: Vector2): Vector2 {
		result.x = Vector2.magnitude(Vector2.fromElements(matrix[0], matrix[1], scratchColumn));
		result.y = Vector2.magnitude(Vector2.fromElements(matrix[2], matrix[3], scratchColumn));
		return result;
	}

	static getMaximumScale(matrix: Matrix2): number {
		Matrix2.getScale(matrix, scaleScratch3);
		return Vector2.maximumComponent(scaleScratch3);
	}

	static setRotation(matrix: Matrix2, rotation: Matrix2, result: Matrix2): Matrix2 {
		const scale = Matrix2.getScale(matrix, scaleScratch4);

		result[0] = rotation[0] * scale.x;
		result[1] = rotation[1] * scale.x;
		result[2] = rotation[2] * scale.y;
		result[3] = rotation[3] * scale.y;

		return result;
	}

	static getRotation(matrix: Matrix2, result: Matrix2): Matrix2 {
		const scale = Matrix2.getScale(matrix, scaleScratch5);

		result[0] = matrix[0] / scale.x;
		result[1] = matrix[1] / scale.x;
		result[2] = matrix[2] / scale.y;
		result[3] = matrix[3] / scale.y;

		return result;
	}

	static multiply(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2 {
		const column0Row0 = left[0] * right[0] + left[2] * right[1];
		const column1Row0 = left[0] * right[2] + left[2] * right[3];
		const column0Row1 = left[1] * right[0] + left[3] * right[1];
		const column1Row1 = left[1] * right[2] + left[3] * right[3];

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column1Row0;
		result[3] = column1Row1;
		return result;
	}

	static add(left: Matrix2, right: Matrix2, result: Matrix2) {
		result[0] = left[0] + right[0];
		result[1] = left[1] + right[1];
		result[2] = left[2] + right[2];
		result[3] = left[3] + right[3];
		return result;
	}

	static subtract(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2 {
		result[0] = left[0] - right[0];
		result[1] = left[1] - right[1];
		result[2] = left[2] - right[2];
		result[3] = left[3] - right[3];
		return result;
	}

	static multiplyByVector(matrix: Matrix2, cartesian: Vector2, result: Vector2): Vector2 {
		const x = matrix[0] * cartesian.x + matrix[2] * cartesian.y;
		const y = matrix[1] * cartesian.x + matrix[3] * cartesian.y;

		result.x = x;
		result.y = y;
		return result;
	}

	static multiplyByScalar(matrix: Matrix2, scalar: number, result: Matrix2): Matrix2 {
		result[0] = matrix[0] * scalar;
		result[1] = matrix[1] * scalar;
		result[2] = matrix[2] * scalar;
		result[3] = matrix[3] * scalar;
		return result;
	}

	static multiplyByScale(matrix: Matrix2, scale: Vector2, result: Matrix2): Matrix2 {
		result[0] = matrix[0] * scale.x;
		result[1] = matrix[1] * scale.x;
		result[2] = matrix[2] * scale.y;
		result[3] = matrix[3] * scale.y;

		return result;
	}

	static negate(matrix: Matrix2, result: Matrix2): Matrix2 {
		result[0] = -matrix[0];
		result[1] = -matrix[1];
		result[2] = -matrix[2];
		result[3] = -matrix[3];
		return result;
	}

	static transpose(matrix: Matrix2, result: Matrix2): Matrix2 {
		const column0Row0 = matrix[0];
		const column0Row1 = matrix[2];
		const column1Row0 = matrix[1];
		const column1Row1 = matrix[3];

		result[0] = column0Row0;
		result[1] = column0Row1;
		result[2] = column1Row0;
		result[3] = column1Row1;
		return result;
	}

	static abs(matrix: Matrix2, result: Matrix2): Matrix2 {
		result[0] = Math.abs(matrix[0]);
		result[1] = Math.abs(matrix[1]);
		result[2] = Math.abs(matrix[2]);
		result[3] = Math.abs(matrix[3]);

		return result;
	}

	static equals(left: Matrix2, right: Matrix2): boolean {
		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				left[0] === right[0] &&
				left[1] === right[1] &&
				left[2] === right[2] &&
				left[3] === right[3])
		);
	}

	/**
	 * @private
	 */
	static equalsArray(matrix: Matrix2, array: number[], offset: number): boolean {
		return (
			matrix[0] === array[offset] &&
			matrix[1] === array[offset + 1] &&
			matrix[2] === array[offset + 2] &&
			matrix[3] === array[offset + 3]
		);
	}

	static equalsEpsilon(left: Matrix2, right: Matrix2, epsilon = 0): boolean {
		epsilon = defaultValue(epsilon, 0);
		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				Math.abs(left[0] - right[0]) <= epsilon &&
				Math.abs(left[1] - right[1]) <= epsilon &&
				Math.abs(left[2] - right[2]) <= epsilon &&
				Math.abs(left[3] - right[3]) <= epsilon)
		);
	}

	public static IDENTITY = Object.freeze(new Matrix2(1.0, 0.0, 0.0, 1.0));

	public static ZERO = Object.freeze(new Matrix2(0.0, 0.0, 0.0, 0.0));

	clone(result: Matrix2): Matrix2 {
		return Matrix2.clone(this, result);
	}

	equals(right: Matrix2): boolean {
		return Matrix2.equals(this, right);
	}

	equalsEpsilon(right: Matrix2, epsilon = 0): boolean {
		return Matrix2.equalsEpsilon(this, right, epsilon);
	}

	toString() {
		return `(${this[0]}, ${this[2]})\n` + `(${this[1]}, ${this[3]})`;
	}
}
const scaleScratch1 = new Vector2();
const scaleScratch3 = new Vector2();
const scaleScratch4 = new Vector2();
const scratchColumn = new Vector2();
const scaleScratch5 = new Vector2();
export default Matrix2;
