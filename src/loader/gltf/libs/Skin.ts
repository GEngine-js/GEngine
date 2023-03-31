import Matrix4 from "../../../math/Matrix4";
import Node from "../../../mesh/Node";

export class Skin {
	id: number;
	name: string;
	inverseBindMatrices: Array<Matrix4>;
	uniformMatrixs: Array<Matrix4>;
	joints: Array<Node | number>;
	skeleton: number;
	constructor(options: SkinParms) {
		this.id = options.id;
		this.name = options.name;
		this.inverseBindMatrices = options.inverseBindMatrices;
		this.joints = options.joints;
		this.skeleton = options.skeleton;
		this.uniformMatrixs = [];
	}
	update(matrix: Matrix4) {
		Matrix4.inverse(matrix, inverseTransformMat4);
		this.joints.map((joint, index) => {
			const tempSkinMatrix = new Matrix4();
			Matrix4.multiply((joint as Node).modelMatrix, this.inverseBindMatrices[index], tempSkinMatrix);
			Matrix4.multiply(tempSkinMatrix, inverseTransformMat4, tempSkinMatrix);
			this.uniformMatrixs.push(tempSkinMatrix);
		});
	}
}
const inverseTransformMat4 = new Matrix4();
export type SkinParms = Partial<Skin>;
