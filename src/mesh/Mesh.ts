import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import LightManger from "../core/LightManger";
import RenderObject from "../core/RenderObject";
import { CommandSubType, Intersect } from "../core/WebGPUConstant";
import { RenderObjectType } from "../core/WebGPUTypes";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import DrawCommand from "../render/DrawCommand";
import createGuid from "../utils/createGuid";
export class Mesh extends RenderObject {
	[x: string]: any;
	uid: string;
	frustumCull: boolean;
	subCommands: { [prop: string]: DrawCommand };
	geometry?: Geometry;
	material?: Material;
	instanceCount?: number;
	priority?: number;
	drawCommand?: DrawCommand;
	distanceToCamera?: number;
	constructor(geometry?: Geometry, material?: Material) {
		super();
		this.geometry = geometry;
		this.material = material;
		this.type = RenderObjectType.Mesh;
		this.frustumCull = true;
		this.uid = createGuid();
		this.subCommands = {};
	}
	get ready() {
		return this.material.ready;
	}
	update(frameState: FrameState, camera?: Camera) {
		// update matrix
		this.updateMatrix(this?.parent?.modelMatrix);
		// create
		this.geometry.update(frameState);
		this.material.update(frameState, this);
		// update boundingSphere
		this.geometry.boundingSphere.update(this.modelMatrix);
		this.material.shaderSource.setDefines(frameState.defines);
		if (this.type == RenderObjectType.Debug) {
			frameState.renderQueue.debugQueue.push(this);
			return;
		}
		this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(camera);

		const visibility = frameState.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		// 视锥剔除
		if (visibility === Intersect.OUTSIDE) return;
		if (this.material.transparent) {
			frameState.renderQueue.transparent.push(this);
		} else {
			frameState.renderQueue.opaque.push(this);
		}
	}
	beforeRender() {
		// before render
	}
	afterRender() {
		// after render
	}
	public getDrawCommand(overrideMaterial?: Material, commandSubType?: CommandSubType, lightManger?: LightManger) {
		if (!this.drawCommand || this.material.dirty) {
			this.material.shaderSource.setDefines(
				Object.assign({}, this.material.shaderData.defines, this.geometry.defines)
			);
			if (this.material.dirty) this.material.dirty = false;
			this.drawCommand = new DrawCommand({
				vertexBuffer: this.geometry.vertBuffer,
				indexBuffer: this.geometry.indexBuffer,
				shaderData: this.material.shaderData,
				instances: this.instanceCount,
				count: this.geometry.count,
				renderState: this.material.renderState,
				shaderSource: this.material.shaderSource,
				type: "render",
				light: this.material.light,
				modelMatrix: this.modelMatrix,
				lightShaderData: this.material.light ? lightManger?.lightShaderData : undefined
			});
		}
		if (overrideMaterial) {
			if (!this.subCommands[commandSubType]) {
				const copyMat = overrideMaterial.clone();
				copyMat.update(undefined, this);
				if (copyMat.dirty) copyMat.dirty = false;
				this.subCommands[commandSubType] = this.drawCommand.shallowClone(copyMat);
			}
			return this.subCommands[commandSubType];
		}
		return this.drawCommand;
	}
	destroy() {
		this.geometry.destroy();
		this.material.destroy();
	}
}
