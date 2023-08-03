import BoundingSphere from "../../core/BoundingSphere";
import Matrix4 from "../../math/Matrix4";
import Vector3 from "../../math/Vector3";

export class CascadedFrustum {
	vertices: {
		near: Vector3[];
		far: Vector3[];
	};
	boundingSphere: BoundingSphere;

	constructor() {
		this.vertices = {
			near: [new Vector3(), new Vector3(), new Vector3(), new Vector3()],
			far: [new Vector3(), new Vector3(), new Vector3(), new Vector3()]
		};
	}

	/**
	 * Convert the eight points of the main camera visual cone to the view space coordinate system
	 * @param projectionMatrix
	 * @param maxFar
	 * @returns
	 */
	setFromProjectionMatrix(projectionMatrix: Matrix4, maxFar: number) {
		const inverseProjectionMatrix = new Matrix4();

		const isOrthographic = projectionMatrix[2 * 4 + 3] === 0;

		Matrix4.inverse(projectionMatrix, inverseProjectionMatrix);

		// 3 --- 0  vertices.near/far order
		// |     |
		// 2 --- 1
		// clip space spans from [-1, 1]

		this.vertices.near[0].set(1, 1, -1);
		this.vertices.near[1].set(1, -1, -1);
		this.vertices.near[2].set(-1, -1, -1);
		this.vertices.near[3].set(-1, 1, -1);
		this.vertices.near.forEach(function (v) {
			v.applyMatrix4(inverseProjectionMatrix);
		});

		this.vertices.far[0].set(1, 1, 1);
		this.vertices.far[1].set(1, -1, 1);
		this.vertices.far[2].set(-1, -1, 1);
		this.vertices.far[3].set(-1, 1, 1);
		this.vertices.far.forEach(function (v) {
			v.applyMatrix4(inverseProjectionMatrix);

			const absZ = Math.abs(v.z);
			if (isOrthographic) {
				v.z *= Math.min(maxFar / absZ, 1.0);
			} else {
				v.multiplyByScalar(Math.min(maxFar / absZ, 1.0));
			}
		});

		return this.vertices;
	}

	getBreakVSArray(breaks: number[], breakVSArray: number[]) {
		breakVSArray.length = 0;
		for (let i = 0; i < breaks.length; i++) {
			breakVSArray[i] = -1 * breaks[i] * this.vertices.far[0].z;
		}
	}

	splitedByBreaks(breaks: number[], target: CascadedFrustum[]) {
		while (breaks.length > target.length) {
			target.push(new CascadedFrustum());
		}

		target.length = breaks.length;

		for (let i = 0; i < breaks.length; i++) {
			const cascadeSubFrustum = target[i];

			if (i === 0) {
				for (let j = 0; j < 4; j++) {
					cascadeSubFrustum.vertices.near[j].copy(this.vertices.near[j]);
				}
			} else {
				for (let j = 0; j < 4; j++) {
					cascadeSubFrustum.vertices.near[j].set(0, 0, 0);
					cascadeSubFrustum.vertices.near[j].lerp(this.vertices.far[j], breaks[i - 1]);
				}
			}

			if (i === breaks.length - 1) {
				for (let j = 0; j < 4; j++) {
					cascadeSubFrustum.vertices.far[j].copy(this.vertices.far[j]);
				}
			} else {
				for (let j = 0; j < 4; j++) {
					cascadeSubFrustum.vertices.far[j].set(0, 0, 0);
					cascadeSubFrustum.vertices.far[j].lerp(this.vertices.far[j], breaks[i]);
				}
			}
		}
	}

	updateBoundingSphere() {
		this.boundingSphere = BoundingSphere.fromPoints([...this.vertices.near, ...this.vertices.far]);
	}
}
