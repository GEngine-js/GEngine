import { BufferUsage } from "../core/WebGPUConstant";
import Matrix4 from "../math/Matrix4";
import ShaderData from "../render/ShaderData";
import UniformBuffer from "../render/UniformBuffer";
import PerspectiveCamera from "./PerspectiveCamera";

export default class PointLightShadowCamera extends PerspectiveCamera {
	public vpMatrixArray: Array<Matrix4>;
	public vpMatrixIndexArray: Array<number>;

	constructor(fov: number = 50, aspect: number = 1, near: number = 0.1, far: number = 2000) {
		super(fov, aspect, near, far);
		this.vpMatrixArray = [new Matrix4(), new Matrix4(), new Matrix4(), new Matrix4(), new Matrix4(), new Matrix4()];
	}

	// createShaderData() {
	// 	this.shaderData = new ShaderData("camera", 0, 1, 1);

	// 	const uniformBuffer = new UniformBuffer({
	// 		label: "pointLightShadowCamera",
	// 		type: "read-only-storage",
	// 		usage: BufferUsage.Storage | BufferUsage.CopyDst,
	// 		hasDynamicOffset: true,
	// 		minBindingSize: 64,
	// 		maxOffset: 6,
	// 		size: 256 * 6
	// 	});
	// 	uniformBuffer.setMatrix4Array(
	// 		"vpMatrixArray",
	// 		() => {
	// 			if (this.vpMatrixArray.length != 6) throw new Error("pointLightShadowCamera uniformBuffer has Error");

	// 			return this.vpMatrixArray;
	// 		},
	// 		6,
	// 		256
	// 	);

	// 	this.shaderData.setUniformBuffer("pointLightShadowCamera", uniformBuffer);
	// 	this.shaderData.setDefine("isPointLightShadowMap", true);
	// }

	createShaderData() {
		this.shaderData = new ShaderData("camera", 0, 1, 1);

		const uniformBuffer = new UniformBuffer({
			label: "pointLightShadowCamera",
			type: "read-only-storage",
			usage: BufferUsage.Storage | BufferUsage.CopyDst
		});
		uniformBuffer.setMatrix4("vpMatrix", () => {
			return this.vpMatrix;
		});

		this.shaderData.setUniformBuffer("pointLightShadowCamera", uniformBuffer);
		this.shaderData.setDefine("isPointLightShadowMap", true);
	}

	updateVpMatrixArrayAndIndex(index: number) {
		Matrix4.clone(this.vpMatrix, this.vpMatrixArray[index]);
	}
}