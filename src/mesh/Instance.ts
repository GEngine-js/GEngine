import RenderObject from "../core/RenderObject";
import Matrix4 from "../math/Matrix4";

export class Instance extends RenderObject {
	public id: string | number;
	public visiblity: boolean;
	private _notUpdateMatrix: boolean;
	constructor() {
		super();
		this._notUpdateMatrix = false;
		this.visiblity = false;
	}
	setMatrix4(mat4: Matrix4) {
		this.modelMatrix.set(mat4);
		this._notUpdateMatrix = true;
	}
	updateMatrix(matrix?: Matrix4) {
		if (this._notUpdateMatrix) return;
		super.updateMatrix(matrix);
	}
}
