import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import { BufferBindingType, BufferUsage, Intersect } from "../core/WebGPUConstant";
import Geometry from "../geometry/Geometry";
import { Material } from "../material/Material";
import UniformBuffer from "../render/UniformBuffer";
import { UniformEnum } from "../render/Uniforms";
import { Instance } from "./Instance";
import { Mesh } from "./Mesh";

export class InstanceMesh extends Mesh {
	private instances: Map<string | number, Instance>;
	private renderInstances: Array<Instance>;
	private hasAddInstances: boolean;
	constructor(geo: Geometry, mat: Material) {
		super(geo, mat);
		this.instances = new Map();
		this.renderInstances = [];
		this.hasAddInstances = false;
	}
	update(frameState: FrameState, camera?: Camera) {
		// update instances visiblity
		this.checkInstancesVisiblity({ frameState, camera });
		this.geometry.update(frameState);
		this.material.update(frameState, this);
		if (!this.hasAddInstances) this.addUniformsToMaterial();
		this.instanceCount = this.renderInstances.length;
		if (this.renderInstances.length < 1) return;
		if (this.material.transparent) {
			frameState.renderQueue.transparent.push(this);
		} else {
			frameState.renderQueue.opaque.push(this);
		}
	}
	addInstance(instance: Instance) {
		if (this.instances.get(instance.id)) return;
		this.instances.set(instance.id, instance);
	}
	removeInstance(key: number | string) {
		return this.instances.delete(key);
	}
	getInstance(key: number | string) {
		return this.instances.get(key);
	}
	private checkInstancesVisiblity(options: { frameState: FrameState; camera: Camera }) {
		const { frameState, camera } = options;
		const preFrameInstanceCount = this.renderInstances.length;
		this.renderInstances = [];
		this.instances.forEach((instance: Instance) => {
			instance.updateMatrix(this?.parent?.modelMatrix);
			instance.visiblity = this.getInstanceVisiblity({ instance, frameState, camera });
			if (instance.visiblity) this.renderInstances.push(instance);
		});
		this.material.dirty = this.renderInstances.length === preFrameInstanceCount;
		// rebuild instanceMatrixsBuffer
		if (this.material.dirty) this.hasAddInstances = false;
	}
	private getInstanceVisiblity(options: { instance: Instance; frameState: FrameState; camera: Camera }): boolean {
		const { instance, frameState, camera } = options;
		this.geometry.boundingSphere.update(instance.modelMatrix);
		this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(camera);
		const visibility = frameState.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		return visibility === Intersect.INTERSECTING || visibility === Intersect.INSIDE;
	}
	private addUniformsToMaterial() {
		if (!this.material.shaderData) return;
		this.hasAddInstances = true;
		const instanceMatrixsBuffer = new UniformBuffer({
			label: "instanceMatrixsBuffer",
			type: BufferBindingType.ReadOnlyStorage,
			usage: BufferUsage.Storage | BufferUsage.CopyDst,
			size: this.instances.size * 64
		});
		instanceMatrixsBuffer.setUniform(
			"instanceMatrixs",
			() => {
				return this?.renderInstances?.map((renderInstance: Instance) => renderInstance.modelMatrix);
			},
			UniformEnum.Mat4Array,
			this?.renderInstances?.length
		);
		this.material.shaderData.setUniformBuffer("instanceMatrixsBuffer", instanceMatrixsBuffer);
		this.material.shaderData.setDefine("USE_INSTANCE", true);
		this.material.shaderData.setDefine("instanceCount", this?.renderInstances?.length);
	}
}
