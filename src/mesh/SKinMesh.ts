import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { BufferBindingType, BufferUsage } from "../core/WebGPUConstant";
import { RenderObjectType, UniformEnum } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import Matrix4 from "../math/Matrix4";
import UniformBuffer from "../render/UniformBuffer";
import { Mesh } from "./Mesh";
import Node from "./Node";

export class SKinMesh extends Mesh {
	inverseBindMatrices: Array<Matrix4>;
	uniformMatrixs: Array<Matrix4>;
	joints: Array<Node>;
	private hasAddJoints: boolean;
	constructor(geometry?: Geometry, material?: Material) {
		super(geometry, material);
		this.type = RenderObjectType.SkinMesh;
		this.uniformMatrixs = [];
		this.hasAddJoints = false;
	}
	setSkinData(data: SkinDataType) {
		this.inverseBindMatrices = data.inverseBindMatrices;
		this.joints = data.joints;
	}
	update(frameState: FrameState, camera?: Camera) {
		this.uniformMatrixs = this.joints.map((joint) => (joint as Node).modelMatrix);
		super.update(frameState, camera);
		if (!this.hasAddJoints) this.addUniformsToMaterial();
	}
	private addUniformsToMaterial() {
		if (!this.material.shaderData) return;
		this.hasAddJoints = true;
		if (this.joints) {
			const skinJointsBuffer = new UniformBuffer({
				label: "skinJointsBuffer",
				type: BufferBindingType.ReadOnlyStorage,
				usage: BufferUsage.Storage | BufferUsage.CopyDst,
				size: 3000
			});
			const invsBuffer = new UniformBuffer({
				label: "invsBuffer",
				type: BufferBindingType.ReadOnlyStorage,
				usage: BufferUsage.Storage | BufferUsage.CopyDst,
				size: 3000
			});
			skinJointsBuffer.setUniform(
				"joints",
				() => {
					return this.uniformMatrixs;
				},
				UniformEnum.Mat4Array,
				this.uniformMatrixs.length
			);
			invsBuffer.setUniform(
				"jointsInv",
				() => {
					return this.inverseBindMatrices;
				},
				UniformEnum.Mat4Array,
				this.inverseBindMatrices.length
			);
			this.material.shaderData.setUniformBuffer("skinJointsBuffer", skinJointsBuffer);
			this.material.shaderData.setUniformBuffer("invsBuffer", invsBuffer);
		}
	}
}
export type SkinDataType = {
	inverseBindMatrices?: Array<Matrix4>;
	joints?: Array<Node>;
};
