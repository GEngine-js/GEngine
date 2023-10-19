import { Quaternion } from "../math/Quaternion";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";

export function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

export function toFloat(num: number | undefined, defaultValue = 1) {
	const n = num !== undefined ? num : defaultValue;
	if (Number.isInteger(n)) {
		return `${n}.0`;
	}
	return n;
}

export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Uint32Array | Float32Array;

export function newTypedArray(type: number, buffer: ArrayBuffer, byteOffset: number, length: number) {
	switch (type) {
		case 5120:
			return new Int8Array(buffer, byteOffset, length);
		case 5121:
			return new Uint8Array(buffer, byteOffset, length);
		case 5122:
			return new Int16Array(buffer, byteOffset, length);
		case 5123:
			return new Uint16Array(buffer, byteOffset, length);
		case 5124:
			return new Int32Array(buffer, byteOffset, length);
		case 5125:
			return new Uint32Array(buffer, byteOffset, length);
		case 5126:
			return new Float32Array(buffer, byteOffset, length);
		default:
			throw new Error("invalid component type");
	}
}

export function toIndices(array: TypedArray): Uint16Array | Uint32Array {
	if (array instanceof Uint16Array || array instanceof Uint32Array) {
		return array;
	}
	let toArray;
	if (array instanceof Float32Array) {
		toArray = new Uint32Array(array.length);
	} else {
		let max = 0;
		for (let i = 0; i < array.length; i++) {
			max = max < array[i] ? array[i] : max;
		}
		if (max < 65536) {
			toArray = new Uint16Array(array.length);
		} else {
			toArray = new Uint32Array(array.length);
		}
	}
	array.forEach((element, index) => {
		toArray[index] = element;
	});
	return toArray;
}

export function joinArray(arrays: Array<Float32Array>) {
	let length = 0;
	arrays.forEach((array) => {
		length += array.length;
	});
	const joined = new Float32Array(length);
	length = 0;
	arrays.forEach((array) => {
		joined.set(array, length);
		length += array.length;
	});
	return joined;
}

export function createGPUBuffer(array: TypedArray, usage: number, device: GPUDevice) {
	const buffer = device.createBuffer({
		size: (array.byteLength + 3) & ~3, // eslint-disable-line no-bitwise
		usage,
		mappedAtCreation: true
	});
	let writeArary;
	if (array instanceof Int8Array) {
		writeArary = new Int8Array(buffer.getMappedRange());
	} else if (array instanceof Uint8Array) {
		writeArary = new Uint8Array(buffer.getMappedRange());
	} else if (array instanceof Int16Array) {
		writeArary = new Int16Array(buffer.getMappedRange());
	} else if (array instanceof Uint16Array) {
		writeArary = new Uint16Array(buffer.getMappedRange());
	} else if (array instanceof Uint32Array) {
		writeArary = new Uint32Array(buffer.getMappedRange());
	} else {
		writeArary = new Float32Array(buffer.getMappedRange());
	}
	writeArary.set(array);
	buffer.unmap();
	return buffer;
}

export function generateNormals(indices: TypedArray | null, positions: TypedArray) {
	const normals = new Float32Array(positions.length);
	const vertexCount = indices ? indices.length : positions.length;
	for (let i = 0; i < vertexCount; i += 3) {
		const triIndices = [];
		for (let n = 0; n < 3; n += 1) {
			if (indices) {
				triIndices.push(indices[i + n]);
			} else {
				triIndices.push(i + n);
			}
		}
		const triangle = triIndices.map((vertexIndex) => {
			const index = vertexIndex * 3;
			return new Vector3(positions[index], positions[index + 1], positions[index + 2]);
		});
		const dv1 = new Vector3();
		Vector3.subtract(triangle[1], triangle[0], dv1);
		const dv2 = new Vector3();
		Vector3.subtract(triangle[2], triangle[0], dv2);
		const normal = new Vector3();
		Vector3.cross(dv1.normalize(), dv2.normalize(), normal);
		for (let n = 0; n < 3; n += 1) {
			const index = (i + n) * 3;
			normals[index + 0] += normal.x;
			normals[index + 1] += normal.y;
			normals[index + 2] += normal.z;
		}
	}
	return normals;
}

export function generateTangents(
	indices: TypedArray | null,
	positions: TypedArray,
	normals: TypedArray,
	uvs: TypedArray
) {
	const tangents = new Float32Array((normals.length / 3) * 4);
	const vertexCount = indices ? indices.length : positions.length;
	for (let i = 0; i < vertexCount; i += 3) {
		const triIndices = [];
		for (let n = 0; n < 3; n += 1) {
			if (indices) {
				triIndices.push(indices[i + n]);
			} else {
				triIndices.push(i + n);
			}
		}
		const pos = triIndices.map((vertexIndex) => {
			const index = vertexIndex * 3;
			return new Vector3(positions[index], positions[index + 1], positions[index + 2]);
		});
		const uv = triIndices.map((vertexIndex) => {
			const index = vertexIndex * 2;
			return new Vector2(uvs?.[index], uvs?.[index + 1]);
		});

		const dv1 = new Vector3();
		Vector3.subtract(pos[1], pos[0], dv1);
		const dv2 = new Vector3();
		Vector3.subtract(pos[2], pos[0], dv2);
		const duv1 = new Vector2();
		Vector2.subtract(uv[1], uv[0], duv1);
		const duv2 = new Vector2();
		Vector2.subtract(uv[2], uv[0], duv2);

		const tangent = new Vector3();
		Vector3.multiplyByScalar(dv1, duv1.y, dv1);
		Vector3.multiplyByScalar(dv2, duv2.y, dv2);
		Vector3.subtract(dv1, dv2, tangent);

		Vector3.multiplyByScalar(tangent, duv2.y * duv1.x - duv1.y * duv2.x, tangent);

		tangent.normalize();
		for (let n = 0; n < 3; n += 1) {
			const index = (i + n) * 4;

			tangents[index + 0] += tangent.x;
			tangents[index + 1] += tangent.y;
			tangents[index + 2] += tangent.z;
			tangents[index + 3] = 1;
		}
	}
	return tangents;
}

function lerp(a: number, b: number, x: number) {
	if (x < a) {
		return 0;
	}
	if (x > b) {
		return 1;
	}
	return (x - a) / (b - a);
}

export function interpQuat(input: TypedArray, o: TypedArray, time: number, method: string) {
	let index = 1;
	while (index < input.length - 1 && time >= input[index]) {
		index += 1;
	}
	const t = lerp(input[index - 1], input[index], time);

	if (method === "CUBICSPLINE") {
		const td = input[index] - input[index - 1];
		const t2 = t * t;
		const t3 = t2 * t;
		const i = 12 * index;

		const v0 = new Quaternion(o[i - 8], o[i - 7], o[i - 6], o[i - 5]);
		const b0 = new Quaternion(o[i - 4], o[i - 3], o[i - 2], o[i - 1]);
		const v1 = new Quaternion(o[i + 4], o[i + 5], o[i + 6], o[i + 7]);
		const a1 = new Quaternion(o[i], o[i + 1], o[i + 2], o[i + 3]);
		Quaternion.multiplyByScalar(v0, 2 * t3 - 3 * t2 + 1, v0);
		Quaternion.multiplyByScalar(b0, td * (t3 - 2 * t2 + t), b0);
		Quaternion.multiplyByScalar(v1, -2 * t3 + 3 * t2, v1);
		Quaternion.multiplyByScalar(a1, td * (t3 - t2), a1);

		const result = new Quaternion();
		Quaternion.add(result, v0, result);
		Quaternion.add(result, b0, result);
		Quaternion.add(result, v1, result);
		Quaternion.add(result, a1, result);
		Quaternion.normalize(result, result);
		return result;
	}

	const q = [];
	for (let n = -1; n < 1; n += 1) {
		const i = 4 * (index + n);
		q.push(new Quaternion(o[i], o[i + 1], o[i + 2], o[i + 3]));
	}

	if (method === "STEP") {
		return t < 1 ? q[0] : q[1];
	}
	const result = new Quaternion();
	Quaternion.slerp(q[0], q[1], t, result);
	return result;
}

export function interpVec3(input: TypedArray, output: TypedArray, time: number, method: string) {
	let index = 1;
	while (index < input.length - 1 && time >= input[index]) {
		index += 1;
	}
	const t = lerp(input[index - 1], input[index], time);

	if (method === "CUBICSPLINE") {
		const td = input[index] - input[index - 1];
		const t2 = t * t;
		const t3 = t2 * t;
		const i = 9 * index;
		const v0 = new Vector3(output[i - 6], output[i - 5], output[i - 4]);
		const b0 = new Vector3(output[i - 3], output[i - 2], output[i - 1]);
		const v1 = new Vector3(output[i + 3], output[i + 4], output[i + 5]);
		const a1 = new Vector3(output[i], output[i + 1], output[i + 2]);
		Vector3.multiplyByScalar(v0, 2 * t3 - 3 * t2 + 1, v0);
		Vector3.multiplyByScalar(b0, td * (t3 - 2 * t2 + t), b0);
		Vector3.multiplyByScalar(v1, -2 * t3 + 3 * t2, v1);
		Vector3.multiplyByScalar(a1, td * (t3 - t2), a1);
		const result = new Vector3();
		Vector3.add(result, v0, result);
		Vector3.add(result, b0, result);
		Vector3.add(result, v1, result);
		Vector3.add(result, a1, result);
		return result;
	}

	const v = [];
	for (let n = -1; n < 1; n += 1) {
		const i = 3 * (index + n);
		v.push(new Vector3(output[i], output[i + 1], output[i + 2]));
	}

	if (method === "STEP") {
		return t < 1 ? v[0] : v[1];
	}
	const result = new Vector3();
	return Vector3.lerp(v[0], v[1], t, result);
}
