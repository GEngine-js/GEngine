import Camera from "../camera/Camera";
import { DerivedCommands } from "../core/DerivedCommands";
import { FrameState } from "../core/FrameState";
import LightManger from "../core/LightManger";
import RenderObject from "../core/RenderObject";
import { Intersect } from "../core/WebGPUConstant";
import { PassEnum, RenderObjectType } from "../core/WebGPUTypes";
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
	derivedCommands?: DerivedCommands;
	constructor(geometry?: Geometry, material?: Material) {
		super();
		this.geometry = geometry;
		this.material = material;
		this.type = RenderObjectType.Mesh;
		this.frustumCull = true;
		this.uid = createGuid();
		this.subCommands = {};
		this.derivedCommands = new DerivedCommands();
	}
	get distanceToCamera(): number {
		return this?.geometry?.distanceToCamera;
	}
	get ready() {
		return this.material.ready;
	}
	update(frameState: FrameState, camera?: Camera) {
		// update matrix
		this.updateMatrix(this?.parent?.modelMatrix);
		// create
		this.geometry.update({ frameState, matrix: this.modelMatrix, camera });
		this.material.update(frameState, this);
		if (this.type == RenderObjectType.Debug) {
			frameState.renderQueue.debugQueue.push(this);
			return;
		}
		const visibility = !this.frustumCull ? Intersect.INSIDE : this.geometry?.intersect;

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
	public getPassCommand(pass = PassEnum.RENDER, lightManger?: LightManger) {
		return this?.derivedCommands?.getDerivedCommand({ pass, lightManger, mesh: this });
	}
	destroy() {
		this.geometry.destroy();
		this.material.destroy();
	}
}
