import Matrix4 from "../../../math/Matrix4";

export class Skin {
	id: number;
	name: string;
	inverseBindMatrices: Array<Matrix4>;
	joints: Array<number>;
	constructor() {}
}
