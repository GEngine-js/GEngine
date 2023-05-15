import { Attribute } from "../render/Attribute";
import defined from "../utils/defined";
import GMath from "./Math";
import Matrix3 from "./Matrix3";
/**
 * A 2D Cartesian point.
 * @alias Vector2
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 *
 */
class Vector2 {
	public static ZERO = Object.freeze(new Vector2(0.0, 0.0));

	public static ONE = Object.freeze(new Vector2(1.0, 1.0));

	public static UNIT_X = Object.freeze(new Vector2(1.0, 0.0));

	public static UNIT_Y = Object.freeze(new Vector2(0.0, 1.0));

	constructor(public x: number = 0.0, public y: number = 0.0) {
		this.x = x;
		this.y = y;
	}
	set(x: number, y: number): Vector2 {
		this.x = x;
		this.y = y;
		return this;
	}
	toArray() {
		return [this.x, this.y];
	}

	clone(result: Vector2): Vector2 {
		return Vector2.clone(this, result);
	}

	equals(right: Vector2): boolean {
		return Vector2.equals(this, right);
	}
	equalsEpsilon(right: Vector2, relativeEpsilon = 0, absoluteEpsilon = 0): boolean {
		return Vector2.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon);
	}

	toString() {
		return `(${this.x}, ${this.y})`;
	}
	fromBufferAttribute(attribute: Attribute, index: number): Vector2 {
		this.x = attribute.getX(index);
		this.y = attribute.getY(index);
		return this;
	}
	applyMatrix3(matrix3: Matrix3): Vector2 {
		const x = this.x,
			y = this.y;
		this.x = matrix3[0] * x + matrix3[3] * y + matrix3[6];
		this.y = matrix3[1] * x + matrix3[4] * y + matrix3[7];
		return this;
	}

	static fromElements(x: number, y: number, result: Vector2): Vector2 {
		if (!defined(result)) {
			return new Vector2(x, y);
		}

		result.x = x;
		result.y = y;
		return result;
	}

	static clone(cartesian: Vector2, result: Vector2): Vector2 {
		if (!defined(cartesian)) {
			return undefined;
		}
		if (!defined(result)) {
			return new Vector2(cartesian.x, cartesian.y);
		}

		result.x = cartesian.x;
		result.y = cartesian.y;
		return result;
	}

	static maximumComponent(cartesian: Vector2): number {
		return Math.max(cartesian.x, cartesian.y);
	}

	static minimumComponent(cartesian: Vector2): number {
		return Math.min(cartesian.x, cartesian.y);
	}

	static minimumByComponent(first: Vector2, second: Vector2, result: Vector2): Vector2 {
		result.x = Math.min(first.x, second.x);
		result.y = Math.min(first.y, second.y);

		return result;
	}

	static maximumByComponent(first: Vector2, second: Vector2, result: Vector2): Vector2 {
		result.x = Math.max(first.x, second.x);
		result.y = Math.max(first.y, second.y);
		return result;
	}

	static clamp(value: Vector2, min: Vector2, max: Vector2, result: Vector2): Vector2 {
		const x = GMath.clamp(value.x, min.x, max.x);
		const y = GMath.clamp(value.y, min.y, max.y);

		result.x = x;
		result.y = y;

		return result;
	}

	static magnitudeSquared(cartesian: Vector2): number {
		return cartesian.x * cartesian.x + cartesian.y * cartesian.y;
	}

	static magnitude(cartesian: Vector2): number {
		return Math.sqrt(Vector2.magnitudeSquared(cartesian));
	}

	static distance(left: Vector2, right: Vector2): number {
		Vector2.subtract(left, right, distanceScratch);
		return Vector2.magnitude(distanceScratch);
	}

	static distanceSquared(left: Vector2, right: Vector2): number {
		Vector2.subtract(left, right, distanceScratch);
		return Vector2.magnitudeSquared(distanceScratch);
	}

	static normalize(cartesian: Vector2, result: Vector2): Vector2 {
		const magnitude = Vector2.magnitude(cartesian);

		result.x = cartesian.x / magnitude;
		result.y = cartesian.y / magnitude;

		// >>includeStart('debug', pragmas.debug);
		if (isNaN(result.x) || isNaN(result.y)) {
			throw new Error("normalized result is not a number");
		}
		// >>includeEnd('debug');

		return result;
	}

	static dot(left: Vector2, right: Vector2): number {
		return left.x * right.x + left.y * right.y;
	}

	static cross(left: Vector2, right: Vector2): number {
		return left.x * right.y - left.y * right.x;
	}

	static multiplyComponents(left: Vector2, right: Vector2, result: Vector2): Vector2 {
		result.x = left.x * right.x;
		result.y = left.y * right.y;
		return result;
	}

	static divideComponents(left: Vector2, right: Vector2, result: Vector2): Vector2 {
		result.x = left.x / right.x;
		result.y = left.y / right.y;
		return result;
	}

	static add(left: Vector2, right: Vector2, result: Vector2): Vector2 {
		result.x = left.x + right.x;
		result.y = left.y + right.y;
		return result;
	}

	static subtract(left: Vector2, right: Vector2, result: Vector2): Vector2 {
		result.x = left.x - right.x;
		result.y = left.y - right.y;
		return result;
	}

	static multiplyByScalar(cartesian: Vector2, scalar: number, result: Vector2): Vector2 {
		result.x = cartesian.x * scalar;
		result.y = cartesian.y * scalar;
		return result;
	}

	static divideByScalar(cartesian: Vector2, scalar: number, result: Vector2): Vector2 {
		result.x = cartesian.x / scalar;
		result.y = cartesian.y / scalar;
		return result;
	}

	static negate(cartesian: Vector2, result: Vector2): Vector2 {
		result.x = -cartesian.x;
		result.y = -cartesian.y;
		return result;
	}

	static abs(cartesian: Vector2, result: Vector2): Vector2 {
		result.x = Math.abs(cartesian.x);
		result.y = Math.abs(cartesian.y);
		return result;
	}

	static lerp(start: Vector2, end: Vector2, t: number, result: Vector2): Vector2 {
		Vector2.multiplyByScalar(end, t, lerpScratch);
		result = Vector2.multiplyByScalar(start, 1.0 - t, result);
		return Vector2.add(lerpScratch, result, result);
	}

	static angleBetween(left: Vector2, right: Vector2): number {
		Vector2.normalize(left, angleBetweenScratch);
		Vector2.normalize(right, angleBetweenScratch2);
		return GMath.acosClamped(Vector2.dot(angleBetweenScratch, angleBetweenScratch2));
	}

	static mostOrthogonalAxis(cartesian: Vector2, result: Vector2): Vector2 {
		const f = Vector2.normalize(cartesian, mostOrthogonalAxisScratch);
		Vector2.abs(f, f);

		if (f.x <= f.y) {
			result = Vector2.clone(Vector2.UNIT_X, result);
		} else {
			result = Vector2.clone(Vector2.UNIT_Y, result);
		}

		return result;
	}

	static equals(left: Vector2, right: Vector2): boolean {
		return left === right || (defined(left) && defined(right) && left.x === right.x && left.y === right.y);
	}

	/**
	 * @private
	 */
	static equalsArray(cartesian: Vector2, array: number[], offset: number): boolean {
		return cartesian.x === array[offset] && cartesian.y === array[offset + 1];
	}

	static equalsEpsilon(left: Vector2, right: Vector2, relativeEpsilon = 0, absoluteEpsilon = 0): boolean {
		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				GMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
				GMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon))
		);
	}
}
const distanceScratch = new Vector2();
const lerpScratch = new Vector2();
const angleBetweenScratch = new Vector2();
const angleBetweenScratch2 = new Vector2();
const mostOrthogonalAxisScratch = new Vector2();

export default Vector2;
