import Matrix4 from "../math/Matrix4";
import Camera from "./Camera";
export default class OrthographicCamera extends Camera {
	right: number;
	isOrthographicCamera: boolean;
	bottom: number;
	left: number;
	near: number;
	far: number;
	top: number;
	constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2000) {
		super();
		this.near = near;
		this.far = far;
		this.left = left;
		this.top = top;
		this.bottom = bottom;
		this.right = right;
		this.isOrthographicCamera = true;
	}
	private updateCameraParms() {
		const dx = (this.right - this.left) / 2;
		const dy = (this.top - this.bottom) / 2;
		const cx = (this.right + this.left) / 2;
		const cy = (this.top + this.bottom) / 2;
		return {
			left: cx - dx,
			right: cx + dx,
			top: cy + dy,
			bottom: cy - dy
		};
	}
	public updateProjectionMatrix() {
		if (this.projectMatrixDirty) {
			const { left, right, top, bottom } = this.updateCameraParms();
			this._projectionMatrix = Matrix4.makeOrthographic(left, right, top, bottom, this.near, this.far);
			this.projectMatrixDirty = false;
		}
	}
}
