import { FrameState } from "../core/FrameState";
import { RenderObjectType } from "../core/WebGPUTypes";
import SkyBoxGeometry from "../geometry/SkyBoxGeometry";
import SkyBoxMaterial from "../material/SkyBoxMaterial";
import { Mesh } from "./Mesh";
export default class SkyBox extends Mesh {
	material: SkyBoxMaterial;
	public visibility: boolean;
	constructor(urls?: Array<string>) {
		super();
		this.type = RenderObjectType.Skybox;
		this.visibility = true;
		this.material = new SkyBoxMaterial();
		if (urls) this.material.loadTexture(urls);
		this.geometry = new SkyBoxGeometry();
		this.isSkyBox = true;
	}
	update(frameState: FrameState) {
		this.updateMatrix();
		this.geometry.update({ frameState });
		this.material.update(frameState, this);
		if (this.visibility) frameState.renderQueue.pre.push(this);
	}
}
