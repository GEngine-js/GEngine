import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import Matrix4 from "../math/Matrix4";
import { Mesh } from "../mesh/Mesh";

export type GeometryUpdateParams = {
	frameState?: FrameState;
	mesh?: Mesh;
	camera?: Camera;
	matrix?: Matrix4;
};
export type MaterialUpdateParams = {
	frameState?: FrameState;
	mesh?: Mesh;
};
