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
	update(frameState: FrameState, camera?: Camera) {
		this.uniformMatrixs = [];
		this.joints.map((joint, index) => {
			this.uniformMatrixs.push((joint as Node).modelMatrix);
		});
		(this.material as PbrMaterial).joints = () => {
			return this.uniformMatrixs;
		};
		(this.material as PbrMaterial).jointsInv = () => {
			return this.inverseBindMatrices;
		};
		super.update(frameState, camera);
	}
}
const inverseTransformMat4 = new Matrix4();
export type SkinDataType = {
	inverseBindMatrices?: Array<Matrix4>;
	joints?: Array<Node>;
};
