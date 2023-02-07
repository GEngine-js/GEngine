import { FrameState } from "../core/FrameState";
import SkyBoxGeometry from "../geometry/SkyBoxGeometry";
import SkyBoxMaterial from "../material/SkyBoxMaterial";
import { Mesh } from "./Mesh";
export default class SkyBox extends Mesh {
  type: string;
  material: SkyBoxMaterial;
  isSkyBox: boolean;
  constructor(urls?: Array<string>) {
    super();
    this.distanceToCamera = 10;
    this.material = new SkyBoxMaterial();
    if (urls) this.material.loadTexture(urls);
    this.geometry = new SkyBoxGeometry();
    this.isSkyBox = true;
  }
  update(frameState: FrameState) {
    this.updateMatrix();
    this.geometry.update(frameState);
    this.material.update(frameState, this);
    frameState.renderQueue.preRender.push(this);
  }
}
