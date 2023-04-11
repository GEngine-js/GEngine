import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { RenderObjectType } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import PbrMaterial from "../material/PbrMaterial";
import Matrix4 from "../math/Matrix4";
import { Mesh } from "./Mesh";
import Node from "./Node";

export class SKinMesh extends Mesh {
	inverseBindMatrices: Array<Matrix4>;
	uniformMatrixs: Array<Matrix4>;
	joints: Array<Node>;
	constructor(geometry?: Geometry, material?: Material) {
		super(geometry, material);
		this.type = RenderObjectType.SkinMesh;
		this.uniformMatrixs = [];
	}
	setSkinData(data: SkinDataType) {
		this.inverseBindMatrices = data.inverseBindMatrices;
		this.joints = data.joints;
	}
	update(frameState: FrameState, camera?: Camera, matrix?: Matrix4) {
		Matrix4.inverse(matrix, inverseTransformMat4);
		this.joints.map((joint, index) => {
			const tempSkinMatrix = new Matrix4();
			Matrix4.multiply((joint as Node).modelMatrix, this.inverseBindMatrices[index], tempSkinMatrix);
			Matrix4.multiply(tempSkinMatrix, inverseTransformMat4, tempSkinMatrix);
			this.uniformMatrixs.push(tempSkinMatrix);
		});
		(this.material as PbrMaterial).joints = () => {
			return this.uniformMatrixs;
		};
		super.update(frameState, camera, matrix);
	}
}
const inverseTransformMat4 = new Matrix4();
export type SkinDataType = {
	inverseBindMatrices?: Array<Matrix4>;
	joints?: Array<Node>;
};
