import Vector3 from "../math/Vector3";
import { Float32Attribute } from "../render/Attribute";
import Geometry from "./Geometry";
export default class TorusKnotGeometry extends Geometry {
	radius: number;
	tube: number;
	tubularSegments: number;
	radialSegments: number;
	p: number;
	q: number;
	constructor(
		radius: number = 1,
		tube: number = 0.4,
		tubularSegments: number = 64,
		radialSegments: number = 8,
		p: number = 2,
		q: number = 3
	) {
		super({});
		this.radius = radius;
		this.tube = tube;
		this.tubularSegments = tubularSegments;
		this.radialSegments = radialSegments;
		this.p = p;
		this.q = q;
		this.indices = [];
		this.positions = [];
		this.normals = [];
		this.uvs = [];
		this.createGeometry();
		this.computeBoundingSphere(this.positions);
		this.init();
	}
	public update(frameState) {
		const { device } = frameState.context;
	}
	private init() {
		this.setAttribute(new Float32Attribute("positions", this.positions, 3));
		this.setAttribute(new Float32Attribute("normals", this.normals, 3));
		this.setAttribute(new Float32Attribute("uvs", this.uvs, 2));
		this.setIndice(this.indices);
		this.count = this.indices.length;
	}
	private createGeometry() {
		const tubularSegments = Math.floor(this.tubularSegments);
		const radialSegments = Math.floor(this.radialSegments);
		// helper variables

		const vertex = new Vector3();
		const normal = new Vector3();

		const P1 = new Vector3();
		const P2 = new Vector3();

		const B = new Vector3();
		const T = new Vector3();
		const N = new Vector3();

		// generate vertices, normals and uvs

		for (let i = 0; i <= tubularSegments; ++i) {
			// the radian "u" is used to calculate the position on the torus curve of the current tubular segment

			const u = (i / tubularSegments) * this.p * Math.PI * 2;

			// now we calculate two points. P1 is our current position on the curve, P2 is a little farther ahead.
			// these points are used to create a special "coordinate space", which is necessary to calculate the correct vertex positions

			calculatePositionOnCurve(u, this.p, this.q, this.radius, P1);
			calculatePositionOnCurve(u + 0.01, this.p, this.q, this.radius, P2);

			// calculate orthonormal basis

			Vector3.subtract(P2, P1, T);
			// T.subVectors( P2, P1 );
			Vector3.add(P2, P1, N);
			// N.addVectors( P2, P1 );
			Vector3.cross(T, N, B);
			//B.crossVectors( T, N );
			Vector3.cross(B, T, N);
			// N.crossVectors( B, T );

			// normalize B, N. T can be ignored, we don't use it

			B.normalize();
			N.normalize();

			for (let j = 0; j <= radialSegments; ++j) {
				// now calculate the vertices. they are nothing more than an extrusion of the torus curve.
				// because we extrude a shape in the xy-plane, there is no need to calculate a z-value.

				const v = (j / radialSegments) * Math.PI * 2;
				const cx = -this.tube * Math.cos(v);
				const cy = this.tube * Math.sin(v);

				// now calculate the final vertex position.
				// first we orient the extrusion with our basis vectors, then we add it to the current position on the curve

				vertex.x = P1.x + (cx * N.x + cy * B.x);
				vertex.y = P1.y + (cx * N.y + cy * B.y);
				vertex.z = P1.z + (cx * N.z + cy * B.z);

				this.positions.push(vertex.x, vertex.y, vertex.z);

				// normal (P1 is always the center/origin of the extrusion, thus we can use it to calculate the normal)
				Vector3.subtract(vertex, P1, normal);
				normal.normalize();

				this.normals.push(normal.x, normal.y, normal.z);

				// uv

				this.uvs.push(i / tubularSegments);
				this.uvs.push(j / radialSegments);
			}
		}

		// generate indices

		for (let j = 1; j <= tubularSegments; j++) {
			for (let i = 1; i <= radialSegments; i++) {
				// indices

				const a = (radialSegments + 1) * (j - 1) + (i - 1);
				const b = (radialSegments + 1) * j + (i - 1);
				const c = (radialSegments + 1) * j + i;
				const d = (radialSegments + 1) * (j - 1) + i;

				// faces

				this.indices.push(a, b, d);
				this.indices.push(b, c, d);
			}
		}
	}
}
function calculatePositionOnCurve(u, p, q, radius, position) {
	const cu = Math.cos(u);
	const su = Math.sin(u);
	const quOverP = (q / p) * u;
	const cs = Math.cos(quOverP);

	position.x = radius * (2 + cs) * 0.5 * cu;
	position.y = radius * (2 + cs) * su * 0.5;
	position.z = radius * Math.sin(quOverP) * 0.5;
}
