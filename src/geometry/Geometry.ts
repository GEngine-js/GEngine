import BoundingBox from "../core/BoundingBox";
import BoundingSphere from "../core/BoundingSphere";
import { FrameState } from "../core/FrameState";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
import Vector4 from "../math/Vector4";
import { Attribute, InterleavedFloat32Attribute } from "../render/Attribute";
import IndexBuffer from "../render/IndexBuffer";
import VertexBuffer from "../render/VertexBuffer";
import combine from "../utils/combine";
export default class Geometry {
	normals: number[];
	uvs: number[];
	positions: number[];
	indices: number[];
	tangents: number[];
	type: string;
	dirty: boolean;
	indexBuffer?: IndexBuffer;
	defaultVertexBuffer: VertexBuffer;
	count: number;
	boundingSphere?: BoundingSphere;
	boundingBox?: BoundingBox;
	private _defines: { [prop: string]: boolean | number };
	public vertexBuffers: Array<VertexBuffer>;
	definesDirty: boolean;
	get defines() {
		return Object.assign({}, this._defines, ...this.vertexBuffers.map((vertexBuffer) => vertexBuffer.defines));
	}
	set defines(value) {
		this.definesDirty = true;
		this._defines = combine(value, this._defines, false);
	}
	get currentLocationIndex(): number {
		return this?.vertexBuffers?.reduce(
			(max, current) => (current.locationIndex > max ? (max = current.locationIndex) : max),
			0
		);
	}
	get vertexBufferCount(): number {
		return this.vertexBuffers.length;
	}
	constructor(options?: { type?: string }) {
		this.type = options.type || undefined;
		this.boundingSphere = undefined;
		this.dirty = false;
		this.definesDirty = true;
		this.defaultVertexBuffer = new VertexBuffer({
			label: this.type,
			index: 0
		});
		this.vertexBuffers = [this.defaultVertexBuffer];
		this._defines = {};
		this.normals = [];
		this.uvs = [];
		this.positions = [];
		this.indices = [];
		this.tangents = [];
	}
	getAttribute(name: string) {
		return this.defaultVertexBuffer.getAttribute(name);
	}
	setAttribute(attribute: Attribute | InterleavedFloat32Attribute) {
		this.defaultVertexBuffer.setAttribute(attribute);
	}
	setIndice(indices: Array<number>) {
		this.indices = indices;
		if (!this.indexBuffer) this.indexBuffer = new IndexBuffer(this.type + "IndexBuffer");
		this.indexBuffer.setIndices(indices);
	}
	update(frameState: FrameState) {
		// todo
	}
	computeBoundingSphere(positions: number[], stride = 3) {
		this.boundingSphere = BoundingSphere.fromVertices(positions, new Vector3(0, 0, 0), stride);
	}
	/**
	 * Calculate mesh tangent.
	 * @remark need to set positions(with or not with indices), normals, uv before calculation.
	 * @remark based on http://foundationsofgameenginedev.com/FGED2-sample.pdf
	 */
	calculateTangents(): void {
		if (!this.normals || !this.uvs) {
			throw "Set normal and uv before calculation.";
		}
		const { indices, positions, normals, uvs } = this;
		const tempPos0 = new Vector3(),
			tempPos1 = new Vector3(),
			tempPos2 = new Vector3(),
			tempUV0 = new Vector2(),
			tempUV1 = new Vector2(),
			tempUV2 = new Vector2();
		const e1 = new Vector3(),
			e2 = new Vector3(),
			t = new Vector3(),
			b = new Vector3(),
			temp = new Vector3();
		const vertexCount = this.indices.length;
		const triangleCount = indices ? indices.length / 3 : positions.length / 3;
		const tangents = new Array<Vector4>(vertexCount);
		const biTangents = new Array<Vector3>(vertexCount);
		this.tangents = [];
		for (let i = 0; i < vertexCount; i++) {
			tangents[i] = new Vector4();
			biTangents[i] = new Vector3();
		}

		// Calculate tangent and bi-tangent for each triangle and add to all three vertices.
		for (let k = 0; k < triangleCount; k++) {
			let i0 = 3 * k;
			let i1 = 3 * k + 1;
			let i2 = 3 * k + 2;
			if (indices) {
				i0 = indices[i0];
				i1 = indices[i1];
				i2 = indices[i2];
			}

			const p0 = tempPos0.set(positions[i0], positions[i0 + 1], positions[i0 + 2]);
			const p1 = tempPos1.set(positions[i1], positions[i1 + 1], positions[i1 + 2]);
			const p2 = tempPos2.set(positions[i2], positions[i2 + 1], positions[i2 + 2]);
			const w0 = tempUV0.set(uvs[i0], uvs[i0 + 1]);
			const w1 = tempUV1.set(uvs[i1], uvs[i1 + 1]);
			const w2 = tempUV2.set(uvs[i2], uvs[i2 + 1]);

			Vector3.subtract(p1, p0, e1);
			Vector3.subtract(p2, p0, e2);
			const x1 = w1.x - w0.x;
			const x2 = w2.x - w0.x;
			const y1 = w1.y - w0.y;
			const y2 = w2.y - w0.y;
			const r = 1.0 / (x1 * y2 - x2 * y1);

			Vector3.multiplyByScalar(e1, y2 * r, t);
			Vector3.multiplyByScalar(e2, y1 * r, temp);
			Vector3.subtract(t, temp, t);
			Vector3.multiplyByScalar(e2, x1 * r, b);
			Vector3.multiplyByScalar(e1, x2 * r, temp);
			Vector3.subtract(b, temp, b);

			let tangent = tangents[i0];
			tangent.set(tangent.x + t.x, tangent.y + t.y, tangent.z + t.z, 1.0);

			tangent = tangents[i1];
			tangent.set(tangent.x + t.x, tangent.y + t.y, tangent.z + t.z, 1.0);

			tangent = tangents[i2];
			tangent.set(tangent.x + t.x, tangent.y + t.y, tangent.z + t.z, 1.0);
			biTangents[i0].add(b);
			biTangents[i1].add(b);
			biTangents[i2].add(b);
		}

		// Orthonormalize each tangent and calculate the handedness.
		for (let i = 0; i < vertexCount; i++) {
			const n = new Vector3(normals[3 * i], normals[3 * i + 1], normals[3 * i + 2]);
			const b = biTangents[i];
			const tangent = tangents[i];
			t.set(tangent.x, tangent.y, tangent.z);

			Vector3.cross(t, b, temp);
			const w = Vector3.dot(temp, n) > 0.0 ? 1 : -1;
			Vector3.multiplyByScalar(n, Vector3.dot(t, n), temp);
			Vector3.subtract(t, temp, t);
			Vector3.normalize(t, t);
			// t.normalize();
			tangent.set(t.x, t.y, t.z, w);
			this.tangents.push(t.x, t.y, t.z, w);
		}
		// this.setTangents(tangents);
	}
	destroy() {
		this?.indexBuffer.destroy();
		this.defaultVertexBuffer.destroy();
		this.normals = null;
		this.uvs = null;
		this.positions = null;
		this.indices = null;
		this.tangents = null;
		this.boundingSphere = undefined;
	}

	updateGeometry(options) {}
}
