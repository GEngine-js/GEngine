// @ts-nocheck
import Vector3 from "./Vector3";
import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import GMath from "./Math";
import Matrix3 from "./Matrix3";
import Matrix4 from "./Matrix4";
/**
 * A set of 4-dimensional coordinates used to represent rotation in 3-dimensional space.
 * @alias Quaternion
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 * @param {Number} [z=0.0] The Z component.
 * @param {Number} [w=0.0] The W component.
 *
 * @see PackableForInterpolation
 */
export class Quaternion {
	public static ZERO = Object.freeze(new Quaternion(0.0, 0.0, 0.0, 0.0));

	public static IDENTITY = Object.freeze(new Quaternion(0.0, 0.0, 0.0, 1.0));

	constructor(public x: number = 0, public y: number = 0, public z: number = 0, public w: number = 1) {}
	set(x, y, z, w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	normalize() {
		const inverseMagnitude = 1.0 / Quaternion.magnitude(this);
		const x = this.x * inverseMagnitude;
		const y = this.y * inverseMagnitude;
		const z = this.z * inverseMagnitude;
		const w = this.w * inverseMagnitude;

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		return this;
	}
	invert() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;

		return this;
	}
	dot(v: Quaternion): number {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
	}
	setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion {
		// assumes direction vectors vFrom and vTo are normalized
		let r = Vector3.dot(vFrom, vTo) + 1;
		if (r < Number.EPSILON) {
			// vFrom and vTo point in opposite directions

			r = 0;

			if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
				this.x = -vFrom.y;
				this.y = vFrom.x;
				this.z = 0;
				this.w = r;
			} else {
				this.x = 0;
				this.y = -vFrom.z;
				this.z = vFrom.y;
				this.w = r;
			}
		} else {
			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;
		}

		return this.normalize();
	}
	setFromRotationMatrix(matrix: Matrix4): Quaternion {
		const te = matrix,
			m11 = te[0],
			m12 = te[4],
			m13 = te[8],
			m21 = te[1],
			m22 = te[5],
			m23 = te[9],
			m31 = te[2],
			m32 = te[6],
			m33 = te[10],
			trace = m11 + m22 + m33;

		if (trace > 0) {
			const s = 0.5 / Math.sqrt(trace + 1.0);

			this.w = 0.25 / s;
			this.x = (m32 - m23) * s;
			this.y = (m13 - m31) * s;
			this.z = (m21 - m12) * s;
		} else if (m11 > m22 && m11 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);

			this.w = (m32 - m23) / s;
			this.x = 0.25 * s;
			this.y = (m12 + m21) / s;
			this.z = (m13 + m31) / s;
		} else if (m22 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);

			this.w = (m13 - m31) / s;
			this.x = (m12 + m21) / s;
			this.y = 0.25 * s;
			this.z = (m23 + m32) / s;
		} else {
			const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);

			this.w = (m21 - m12) / s;
			this.x = (m13 + m31) / s;
			this.y = (m23 + m32) / s;
			this.z = 0.25 * s;
		}
		return this;
	}
	clone() {
		return Quaternion.clone(this, this);
	}

	equals(right: Quaternion): boolean {
		return Quaternion.equals(this, right);
	}

	equalsEpsilon(right: Quaternion, epsilon: number = 0): boolean {
		return Quaternion.equalsEpsilon(this, right, epsilon);
	}
	toArray(): number[] {
		const { x, y, z, w } = this;
		return [x, y, z, w];
	}
	static fromAxisAngle(axis: Vector3, angle: number): Quaternion {
		const halfAngle = angle / 2.0;
		const s = Math.sin(halfAngle);
		fromAxisAngleScratch = Vector3.normalize(axis, fromAxisAngleScratch);

		const x = fromAxisAngleScratch.x * s;
		const y = fromAxisAngleScratch.y * s;
		const z = fromAxisAngleScratch.z * s;
		const w = Math.cos(halfAngle);
		// if (!defined(result)) {
		//   return
		// }
		let result = new Quaternion(x, y, z, w);
		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static fromRotationMatrix(matrix: Matrix3, result: Quaternion): Quaternion {
		let root;
		let x;
		let y;
		let z;
		let w;

		const m00 = matrix[Matrix3.COLUMN0ROW0];
		const m11 = matrix[Matrix3.COLUMN1ROW1];
		const m22 = matrix[Matrix3.COLUMN2ROW2];
		const trace = m00 + m11 + m22;

		if (trace > 0.0) {
			// |w| > 1/2, may as well choose w > 1/2
			root = Math.sqrt(trace + 1.0); // 2w
			w = 0.5 * root;
			root = 0.5 / root; // 1/(4w)

			x = (matrix[Matrix3.COLUMN1ROW2] - matrix[Matrix3.COLUMN2ROW1]) * root;
			y = (matrix[Matrix3.COLUMN2ROW0] - matrix[Matrix3.COLUMN0ROW2]) * root;
			z = (matrix[Matrix3.COLUMN0ROW1] - matrix[Matrix3.COLUMN1ROW0]) * root;
		} else {
			// |w| <= 1/2
			const next = fromRotationMatrixNext;

			let i = 0;
			if (m11 > m00) {
				i = 1;
			}
			if (m22 > m00 && m22 > m11) {
				i = 2;
			}
			const j = next[i];
			const k = next[j];

			root = Math.sqrt(
				matrix[Matrix3.getElementIndex(i, i)] -
					matrix[Matrix3.getElementIndex(j, j)] -
					matrix[Matrix3.getElementIndex(k, k)] +
					1.0
			);

			const quat = fromRotationMatrixQuat;
			quat[i] = 0.5 * root;
			root = 0.5 / root;
			w = (matrix[Matrix3.getElementIndex(k, j)] - matrix[Matrix3.getElementIndex(j, k)]) * root;
			quat[j] = (matrix[Matrix3.getElementIndex(j, i)] + matrix[Matrix3.getElementIndex(i, j)]) * root;
			quat[k] = (matrix[Matrix3.getElementIndex(k, i)] + matrix[Matrix3.getElementIndex(i, k)]) * root;

			x = -quat[0];
			y = -quat[1];
			z = -quat[2];
		}

		if (!defined(result)) {
			return new Quaternion(x, y, z, w);
		}
		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static clone(quaternion: Quaternion, result: Quaternion): Quaternion {
		if (!defined(quaternion)) {
			return undefined;
		}

		if (!defined(result)) {
			return new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
		}

		result.x = quaternion.x;
		result.y = quaternion.y;
		result.z = quaternion.z;
		result.w = quaternion.w;
		return result;
	}

	static conjugate(quaternion: Quaternion, result: Quaternion): Quaternion {
		result.x = -quaternion.x;
		result.y = -quaternion.y;
		result.z = -quaternion.z;
		result.w = quaternion.w;
		return result;
	}

	static magnitudeSquared(quaternion: Quaternion): number {
		return (
			quaternion.x * quaternion.x +
			quaternion.y * quaternion.y +
			quaternion.z * quaternion.z +
			quaternion.w * quaternion.w
		);
	}

	static magnitude(quaternion: Quaternion): number {
		return Math.sqrt(Quaternion.magnitudeSquared(quaternion));
	}

	static normalize(quaternion: Quaternion, result: Quaternion): Quaternion {
		const inverseMagnitude = 1.0 / Quaternion.magnitude(quaternion);
		const x = quaternion.x * inverseMagnitude;
		const y = quaternion.y * inverseMagnitude;
		const z = quaternion.z * inverseMagnitude;
		const w = quaternion.w * inverseMagnitude;

		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static inverse(quaternion: Quaternion, result: Quaternion): Quaternion {
		const magnitudeSquared = Quaternion.magnitudeSquared(quaternion);
		result = Quaternion.conjugate(quaternion, result);
		return Quaternion.multiplyByScalar(result, 1.0 / magnitudeSquared, result);
	}

	static add(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion {
		result.x = left.x + right.x;
		result.y = left.y + right.y;
		result.z = left.z + right.z;
		result.w = left.w + right.w;
		return result;
	}

	static subtract(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion {
		result.x = left.x - right.x;
		result.y = left.y - right.y;
		result.z = left.z - right.z;
		result.w = left.w - right.w;
		return result;
	}

	static negate(quaternion: Quaternion, result: Quaternion): Quaternion {
		result.x = -quaternion.x;
		result.y = -quaternion.y;
		result.z = -quaternion.z;
		result.w = -quaternion.w;
		return result;
	}

	static dot(left: Quaternion, right: Quaternion): Quaternion {
		return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w;
	}

	static multiply(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion {
		const leftX = left.x;
		const leftY = left.y;
		const leftZ = left.z;
		const leftW = left.w;

		const rightX = right.x;
		const rightY = right.y;
		const rightZ = right.z;
		const rightW = right.w;

		const x = leftW * rightX + leftX * rightW + leftY * rightZ - leftZ * rightY;
		const y = leftW * rightY - leftX * rightZ + leftY * rightW + leftZ * rightX;
		const z = leftW * rightZ + leftX * rightY - leftY * rightX + leftZ * rightW;
		const w = leftW * rightW - leftX * rightX - leftY * rightY - leftZ * rightZ;

		result.x = x;
		result.y = y;
		result.z = z;
		result.w = w;
		return result;
	}

	static multiplyByScalar(quaternion: Quaternion, scalar: number, result: Quaternion): Quaternion {
		result.x = quaternion.x * scalar;
		result.y = quaternion.y * scalar;
		result.z = quaternion.z * scalar;
		result.w = quaternion.w * scalar;
		return result;
	}

	static divideByScalar(quaternion: Quaternion, scalar: number, result: Quaternion): Quaternion {
		result.x = quaternion.x / scalar;
		result.y = quaternion.y / scalar;
		result.z = quaternion.z / scalar;
		result.w = quaternion.w / scalar;
		return result;
	}

	static computeAxis(quaternion: Quaternion, result: Vector3): Vector3 {
		const w = quaternion.w;
		if (Math.abs(w - 1.0) < GMath.EPSILON6) {
			result.x = result.y = result.z = 0;
			return result;
		}

		const scalar = 1.0 / Math.sqrt(1.0 - w * w);

		result.x = quaternion.x * scalar;
		result.y = quaternion.y * scalar;
		result.z = quaternion.z * scalar;
		return result;
	}

	static computeAngle(quaternion: Quaternion): number {
		if (Math.abs(quaternion.w - 1.0) < GMath.EPSILON6) {
			return 0.0;
		}
		return 2.0 * Math.acos(quaternion.w);
	}

	static lerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion {
		lerpScratch = Quaternion.multiplyByScalar(end, t, lerpScratch);
		result = Quaternion.multiplyByScalar(start, 1.0 - t, result);
		return Quaternion.add(lerpScratch, result, result);
	}

	static slerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): number {
		let dot = Quaternion.dot(start, end);

		// The angle between start must be acute. Since q and -q represent
		// the same rotation, negate q to get the acute angle.
		let r = end;
		if (dot < 0.0) {
			dot = -dot;
			r = slerpEndNegated = Quaternion.negate(end, slerpEndNegated);
		}

		// dot > 0, as the dot product approaches 1, the angle between the
		// quaternions vanishes. use linear interpolation.
		if (1.0 - dot < GMath.EPSILON6) {
			return Quaternion.lerp(start, r, t, result);
		}

		const theta = Math.acos(dot);
		slerpScaledP = Quaternion.multiplyByScalar(start, Math.sin((1 - t) * theta), slerpScaledP);
		slerpScaledR = Quaternion.multiplyByScalar(r, Math.sin(t * theta), slerpScaledR);
		result = Quaternion.add(slerpScaledP, slerpScaledR, result);
		return Quaternion.multiplyByScalar(result, 1.0 / Math.sin(theta), result);
	}

	static computeInnerQuadrangle(q0: Quaternion, q1: Quaternion, q2: Quaternion, result: Quaternion): Quaternion {
		const qInv = Quaternion.conjugate(q1, squadScratchQuaternion0);
		Quaternion.multiply(qInv, q2, squadScratchQuaternion1);
		const cart0 = Quaternion.log(squadScratchQuaternion1, squadScratchCartesian0);

		Quaternion.multiply(qInv, q0, squadScratchQuaternion1);
		const cart1 = Quaternion.log(squadScratchQuaternion1, squadScratchCartesian1);

		Vector3.add(cart0, cart1, cart0);
		Vector3.multiplyByScalar(cart0, 0.25, cart0);
		Vector3.negate(cart0, cart0);
		Quaternion.exp(cart0, squadScratchQuaternion0);

		return Quaternion.multiply(q1, squadScratchQuaternion0, result);
	}

	static squad(
		q0: Quaternion,
		q1: Quaternion,
		s0: Quaternion,
		s1: Quaternion,
		t: number,
		result: Quaternion
	): Quaternion {
		const slerp0 = Quaternion.slerp(q0, q1, t, squadScratchQuaternion0);
		const slerp1 = Quaternion.slerp(s0, s1, t, squadScratchQuaternion1);
		return Quaternion.slerp(slerp0, slerp1, 2.0 * t * (1.0 - t), result);
	}

	static fastSlerp(start: Quaternion, end: Quaternion, t: number, result: number): Quaternion {
		let x = Quaternion.dot(start, end);

		let sign;
		if (x >= 0) {
			sign = 1.0;
		} else {
			sign = -1.0;
			x = -x;
		}

		const xm1 = x - 1.0;
		const d = 1.0 - t;
		const sqrT = t * t;
		const sqrD = d * d;

		for (let i = 7; i >= 0; --i) {
			bT[i] = (u[i] * sqrT - v[i]) * xm1;
			bD[i] = (u[i] * sqrD - v[i]) * xm1;
		}

		const cT =
			sign *
			t *
			(1.0 +
				bT[0] *
					(1.0 +
						bT[1] *
							(1.0 +
								bT[2] *
									(1.0 + bT[3] * (1.0 + bT[4] * (1.0 + bT[5] * (1.0 + bT[6] * (1.0 + bT[7]))))))));
		const cD =
			d *
			(1.0 +
				bD[0] *
					(1.0 +
						bD[1] *
							(1.0 +
								bD[2] *
									(1.0 + bD[3] * (1.0 + bD[4] * (1.0 + bD[5] * (1.0 + bD[6] * (1.0 + bD[7]))))))));

		const temp = Quaternion.multiplyByScalar(start, cD, fastSlerpScratchQuaternion);
		Quaternion.multiplyByScalar(end, cT, result);
		return Quaternion.add(temp, result, result);
	}

	static fastSquad(
		q0: Quaternion,
		q1: Quaternion,
		s0: Quaternion,
		s1: Quaternion,
		t: number,
		result: number
	): Quaternion {
		const slerp0 = Quaternion.fastSlerp(q0, q1, t, squadScratchQuaternion0);
		const slerp1 = Quaternion.fastSlerp(s0, s1, t, squadScratchQuaternion1);
		return Quaternion.fastSlerp(slerp0, slerp1, 2.0 * t * (1.0 - t), result);
	}

	static equals(left: Quaternion, right: Quaternion): boolean {
		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				left.x === right.x &&
				left.y === right.y &&
				left.z === right.z &&
				left.w === right.w)
		);
	}

	static equalsEpsilon(left: Quaternion, right: Quaternion, epsilon: number = 0): boolean {
		epsilon = defaultValue(epsilon, 0);

		return (
			left === right ||
			(defined(left) &&
				defined(right) &&
				Math.abs(left.x - right.x) <= epsilon &&
				Math.abs(left.y - right.y) <= epsilon &&
				Math.abs(left.z - right.z) <= epsilon &&
				Math.abs(left.w - right.w) <= epsilon)
		);
	}

	static log(quaternion: Quaternion, result: Vector3): Vector3 {
		const theta = GMath.acosClamped(quaternion.w);
		let thetaOverSinTheta = 0.0;

		if (theta !== 0.0) {
			thetaOverSinTheta = theta / Math.sin(theta);
		}

		return Vector3.multiplyByScalar(quaternion, thetaOverSinTheta, result);
	}

	static exp(cartesian: Vector3, result: Quaternion): Quaternion {
		const theta = Vector3.magnitude(cartesian);
		let sinThetaOverTheta = 0.0;

		if (theta !== 0.0) {
			sinThetaOverTheta = Math.sin(theta) / theta;
		}

		result.x = cartesian.x * sinThetaOverTheta;
		result.y = cartesian.y * sinThetaOverTheta;
		result.z = cartesian.z * sinThetaOverTheta;
		result.w = Math.cos(theta);

		return result;
	}
}

let fromAxisAngleScratch = new Vector3();

const fromRotationMatrixNext = [1, 2, 0];
const fromRotationMatrixQuat = new Array(3);

const scratchHPRQuaternion = new Quaternion();
let scratchHeadingQuaternion = new Quaternion();
let scratchPitchQuaternion = new Quaternion();
let scratchRollQuaternion = new Quaternion();

const sampledQuaternionAxis = new Vector3();
const sampledQuaternionRotation = new Vector3();
const sampledQuaternionTempQuaternion = new Quaternion();
const sampledQuaternionQuaternion0 = new Quaternion();
const sampledQuaternionQuaternion0Conjugate = new Quaternion();

let lerpScratch = new Quaternion();

let slerpEndNegated = new Quaternion();
let slerpScaledP = new Quaternion();
let slerpScaledR = new Quaternion();

const fastSlerpScratchQuaternion = new Quaternion();
// eslint-disable-next-line no-loss-of-precision
const opmu = 1.90110745351730037;
const u = new Float32Array(8);
const v = new Float32Array(8);
const bT = new Float32Array(8);
const bD = new Float32Array(8);

for (let i = 0; i < 7; ++i) {
	const s = i + 1.0;
	const t = 2.0 * s + 1.0;
	u[i] = 1.0 / (s * t);
	v[i] = s / t;
}

u[7] = opmu / (8.0 * 17.0);
v[7] = (opmu * 8.0) / 17.0;

const squadScratchCartesian0 = new Vector3();
const squadScratchCartesian1 = new Vector3();
const squadScratchQuaternion0 = new Quaternion();
const squadScratchQuaternion1 = new Quaternion();
