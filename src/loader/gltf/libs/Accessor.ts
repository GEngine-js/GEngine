import Matrix4 from "../../../math/Matrix4";
import Vector4 from "../../../math/Vector4";

export class Accessor {
	values: any;
	id: number;
	count: number;
	componentType: number;
	type: number;
	min: number[];
	max: number[];
	constructor(options: AccessorParms) {
		this.values = options.values ?? [];
		this.id = options.id;
		this.count = options.count;
		this.componentType = options.componentType;
		this.type = options.type;
		this.min = options.min;
		this.max = options.max;
	}
	getArray(): number[] {
		return Array.from(this.values);
	}
	getVec4Array(): Vector4[] {
		const result = [];
		for (let i = 0; i < this.values.length / this.componentType; i += this.componentType) {
			result.push(new Vector4(this.values[i], this.values[i + 1], this.values[i + 2], this.values[i + 3]));
		}
		return result;
	}
	getMat4Array(): Matrix4[] {
		const result = [];
		for (let i = 0; i < this.values.length / this.componentType; i += this.componentType) {
			const mat4 = new Matrix4();
			Matrix4.fromColumnMajorArray(this.values.slice(i, i + 16), mat4);
			result.push(mat4);
		}
		return result;
	}
}
export type AccessorParms = Partial<Accessor>;
