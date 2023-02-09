import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import Intersect from "../core/Intersect";
import RenderObject from "../core/RenderObject";
import { PrimitiveTopology } from "../core/WebGPUConstant";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import DrawCommand from "../render/DrawCommand";
export class Mesh extends RenderObject {
	[x: string]: any;
	geometry?: Geometry;
	material?: Material;
	instances?: number;
	priority?: number;
	drawCommand?: DrawCommand;
	distanceToCamera?: number;
	constructor(geometry?: Geometry, material?: Material) {
		super();
		this.geometry = geometry;
		this.material = material;
		this.type = "primitive";
	}
	update(frameState: FrameState, camera?: Camera) {
		//update matrix
		this.updateMatrix();

		this.updateNormalMatrix(camera);
		//create
		this.geometry.update(frameState);

		this.material.update(frameState, this);

		// update boundingSphere

		this.geometry.boundingSphere.update(this.modelMatrix);
		this.material.shaderSource.setDefines(frameState.defines);
		this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(camera);

		const visibility = frameState.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		//视锥剔除
		if (visibility === Intersect.INTERSECTING || visibility === Intersect.INSIDE) {
			if (this.material.transparent) {
				frameState.renderQueue.transparent.push(this);
			} else {
				frameState.renderQueue.opaque.push(this);
			}
		}
	}
	beforeRender() {}
	afterRender() {}
	public getDrawCommand(overrideMaterial?: Material) {
		if (!this.drawCommand || this.material.dirty) {
			if (this.material.dirty) this.material.dirty = false;
			this.drawCommand = new DrawCommand({
				vertexBuffer: this.geometry.vertBuffer,
				indexBuffer: this.geometry.indexBuffer,
				shaderData: this.material.shaderData,
				instances: this.instances,
				count: this.geometry.count,
				renderState: this.material.renderState,
				shaderSource: this.material.shaderSource,
				type: "render",
				light: this.material.light
			});
		}
		this.material.shaderSource.setDefines(Object.assign(this.material.shaderData.defines, this.geometry.defines));
		if (overrideMaterial) {
			overrideMaterial.update();
			return this.drawCommand.shallowClone(overrideMaterial);
		}
		return this.drawCommand;
	}
	destroy() {
		this.geometry.destroy();
		this.material.destroy();
	}
}
