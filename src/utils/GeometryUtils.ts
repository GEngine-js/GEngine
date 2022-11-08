import Vector3 from "../math/Vector3";

/**
 * Two times PI.
 * @constant {number}
 */
const TAU = Math.PI * 2;

 /**
  * Two times PI.
  * @constant {number}
  */
const HALF_PI = Math.PI / 2;
 
 /**
  * Square root of 2.
  * @constant {number}
  */
const SQRT2 = Math.sqrt(2);
 
 /**
  * Normalize a vector 3.
  * @param {number[]} v Vector 3 array
  * @returns {number[]} Normalized vector
  */
function normalize(v) {
   const l = 1 / (Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]) || 1);
   v[0] *= l;
   v[1] *= l;
   v[2] *= l;
   return v;
 }
 
 /**
  * Ensure first argument passed to the primitive functions is an object
  * @param {...*} args
  */
 function checkArguments(args) {
   const argumentType = typeof args[0];
   if (argumentType !== "object" && argumentType !== "undefined") {
	 console.error("First argument must be an object.");
   }
 }
 
 /**
  * @private
  */
 let TYPED_ARRAY_TYPE;
 
 /**
  * Enforce a typed array constructor for cells
  * @param {(Class<Uint8Array>|Class<Uint16Array>|Class<Uint32Array>)} type
  */
function setTypedArrayType(type) {
   TYPED_ARRAY_TYPE = type;
 }
 
 /**
  * Select cells typed array from a size determined by amount of vertices.
  *
  * @param {number} size The max value expected
  * @returns {(Uint8Array|Uint16Array|Uint32Array)}
  * @see [MDN TypedArray objects]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
  */
const getCellsTypedArray = (size) =>
   TYPED_ARRAY_TYPE ||
   (size <= 255 ? Uint8Array : size <= 65535 ? Uint16Array : Uint32Array);
 
 /**
  * @private
  */
 const TMP = [0, 0, 0];
 
 /**
  * @private
  */
const PLANE_DIRECTIONS = {
   z: [0, 1, 2, 1, -1, 1],
   "-z": [0, 1, 2, -1, -1, -1],
   "-x": [2, 1, 0, 1, -1, -1],
   x: [2, 1, 0, -1, -1, 1],
   y: [0, 2, 1, 1, 1, 1],
   "-y": [0, 2, 1, 1, -1, -1],
 };
 
 /**
  * @private
  */
function computePlane(
   geometry,
   indices,
   su,
   sv,
   nu,
   nv,
   direction = "z",
   pw = 0,
   quads = false,
   uvScale = [1, 1],
   uvOffset = [0, 0],
   center = [0, 0, 0],
   ccw = true
 ) {
   const { positions, normals, uvs, cells } = geometry;
   const [u, v, w, flipU, flipV, normal] = PLANE_DIRECTIONS[direction];
 
   const vertexOffset = indices.vertex;
 
   for (let j = 0; j <= nv; j++) {
	 for (let i = 0; i <= nu; i++) {
	   positions[indices.vertex * 3 + u] =
		 (-su / 2 + (i * su) / nu) * flipU + center[u];
	   positions[indices.vertex * 3 + v] =
		 (-sv / 2 + (j * sv) / nv) * flipV + center[v];
	   positions[indices.vertex * 3 + w] = pw + center[w];
 
	   normals[indices.vertex * 3 + w] = normal;
 
	   uvs[indices.vertex * 2] = (i / nu) * uvScale[0] + uvOffset[0];
	   uvs[indices.vertex * 2 + 1] = (1 - j / nv) * uvScale[1] + uvOffset[1];
 
	   indices.vertex++;
 
	   if (j < nv && i < nu) {
		 const n = vertexOffset + j * (nu + 1) + i;
		 if (quads) {
		   const o = vertexOffset + (j + 1) * (nu + 1) + i;
		   cells[indices.cell] = n;
		   cells[indices.cell + 1] = o;
		   cells[indices.cell + 2] = o + 1;
		   cells[indices.cell + 3] = n + 1;
		 } else {
		   cells[indices.cell] = n;
		   cells[indices.cell + (ccw ? 1 : 2)] = n + nu + 1;
		   cells[indices.cell + (ccw ? 2 : 1)] = n + nu + 2;
 
		   cells[indices.cell + 3] = n;
		   cells[indices.cell + (ccw ? 4 : 5)] = n + nu + 2;
		   cells[indices.cell + (ccw ? 5 : 4)] = n + 1;
		 }
		 indices.cell += quads ? 4 : 6;
	   }
	 }
   }
 
   return geometry;
 }
 /**
 * @typedef {Object} CubeOptions
 * @property {number} [sx=1]
 * @property {number} [sy=sx]
 * @property {number} [sz=sx]
 * @property {number} [nx=1]
 * @property {number} [ny=nx]
 * @property {number} [nz=nx]
 */
export function createCube({ sx = 1, sy = 1, sz = 1, nx = 1, ny = 1, nz = 1 } = {}) {
	checkArguments(arguments);
  
	const size =(nx + 1) * (ny + 1) * 2 + (nx + 1) * (nz + 1) * 2 + (nz + 1) * (ny + 1) * 2;
  
	const geometry = {
	  positions: new Float32Array(size * 3),
	  normals: new Float32Array(size * 3),
	  uvs: new Float32Array(size * 2),
	  cells: new (getCellsTypedArray(size))(
		(nx * ny * 2 + nx * nz * 2 + nz * ny * 2) * 6
	  ),
	};
  
	const halfSX = sx * 0.5;
	const halfSY = sy * 0.5;
	const halfSZ = sz * 0.5;
  
	const indices = { vertex: 0, cell: 0 };
  
	computePlane(geometry, indices, sx, sy, nx, ny, "z", halfSZ);
	computePlane(geometry, indices, sx, sy, nx, ny, "-z", -halfSZ);
	computePlane(geometry, indices, sz, sy, nz, ny, "-x", -halfSX);
	computePlane(geometry, indices, sz, sy, nz, ny, "x", halfSX);
	computePlane(geometry, indices, sx, sz, nx, nz, "y", halfSY);
	computePlane(geometry, indices, sx, sz, nx, nz, "-y", -halfSY);
  
	return geometry;
}

/**
 * @typedef {Object} EllipsoidOptions
 * @property {number} [radius=0.5]
 * @property {number} [nx=32]
 * @property {number} [ny=16]
 * @property {number} [rx=1]
 * @property {number} [rx=0.5]
 * @property {number} [rz=ry]
 * @property {number} [theta=Math.PI]
 * @property {number} [thetaOffset=0]
 * @property {number} [phi=TAU]
 * @property {number} [phiOffset=0]
 */
 function createEllipsoid({
	radius = 1,
	nx = 32,
	ny = 16,
	rx = 0.5,
	ry = 0.25,
	rz = ry,
	theta = Math.PI,
	thetaOffset = 0,
	phi = TAU,
	phiOffset = 0,
  } = {}) {
	checkArguments(arguments);
  
	const size = (ny + 1) * (nx + 1);
  
	const positions = new Float32Array(size * 3);
	const normals = new Float32Array(size * 3);
	const uvs = new Float32Array(size * 2);
	const cells = new (getCellsTypedArray(size))(ny * nx * 6);
  
	let vertexIndex = 0;
	let cellIndex = 0;
  
	for (let y = 0; y <= ny; y++) {
	  const v = y / ny;
	  const t = v * theta + thetaOffset;
	  const cosTheta = Math.cos(t);
	  const sinTheta = Math.sin(t);
  
	  for (let x = 0; x <= nx; x++) {
		const u = x / nx;
		const p = u * phi + phiOffset;
		const cosPhi = Math.cos(p);
		const sinPhi = Math.sin(p);
  
		TMP[0] = -rx * cosPhi * sinTheta;
		TMP[1] = -ry * cosTheta;
		TMP[2] = rz * sinPhi * sinTheta;
  
		positions[vertexIndex * 3] = radius * TMP[0];
		positions[vertexIndex * 3 + 1] = radius * TMP[1];
		positions[vertexIndex * 3 + 2] = radius * TMP[2];
  
		normalize(TMP);
  
		normals[vertexIndex * 3] = TMP[0];
		normals[vertexIndex * 3 + 1] = TMP[1];
		normals[vertexIndex * 3 + 2] = TMP[2];
  
		uvs[vertexIndex * 2] = u;
		uvs[vertexIndex * 2 + 1] = v;
  
		vertexIndex++;
	  }
  
	  if (y > 0) {
		for (let i = vertexIndex - 2 * (nx + 1); i + nx + 2 < vertexIndex; i++) {
		  const a = i;
		  const b = i + 1;
		  const c = i + nx + 1;
		  const d = i + nx + 2;
		  cells[cellIndex] = a;
		  cells[cellIndex + 1] = b;
		  cells[cellIndex + 2] = c;
  
		  cells[cellIndex + 3] = c;
		  cells[cellIndex + 4] = b;
		  cells[cellIndex + 5] = d;
  
		  cellIndex += 6;
		}
	  }
	}
  
	return {
	  positions,
	  normals,
	  uvs,
	  cells,
	};
  }
  
  /**
 * @typedef {Object} SphereOptions
 * @property {number} [radius=0.5]
 * @property {number} [nx=32]
 * @property {number} [ny=16]
 * @property {number} [theta=Math.PI]
 * @property {number} [thetaOffset=0]
 * @property {number} [phi=TAU]
 * @property {number} [phiOffset=0]
 */
export function createSphere({
	radius = 0.5,
	nx = 32,
	ny = 16,
	theta=Math.PI,
	thetaOffset=0,
	phi=TAU,
	phiOffset=0,
  } = {}) {
	checkArguments(arguments);
  
	return createEllipsoid({
	  radius,
	  nx,
	  ny,
	  theta,
	  thetaOffset,
	  phi,
	  phiOffset,
	  rx: 1,
	  ry: 1,
	});
  }
  