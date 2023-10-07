import Camera from "../camera/Camera";
import { FrameState } from "../core/FrameState";
import LightManger from "../core/LightManger";
import RenderQueue from "../core/RenderQueue";
import { PassEnum } from "../core/WebGPUTypes";
import { Light } from "../light/Light";
import { PointLight } from "../light/PointLight";
import { BaseShadow } from "../light/shadows/BaseShadow";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import Pass from "./Pass";
export class ShadowPass extends Pass {
	_testTexture: Texture;
	constructor(context: Context) {
		super(context);
		this.init(context);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render(frameState: FrameState, camera?: Camera) {
		const { renderQueue, context, lightManger } = frameState;
		const lights = lightManger.getAllLights();
		if (lights.length === 0) return;

		for (let i = 0; i < lights.length; i++) {
			const light: PointLight | Light = lights[i];
			const shadow = light.shadow;
			if (!shadow) continue;
			// this._testTexture = context.lightManger._testTexture
			// this.beforeRender({ shadow });
			if (shadow?.viewports?.length > 0) {
				for (let i = 0; i < shadow.viewports.length; i++) {
					// 动态buffer暂未调通，先以此种方式解决
					switch (i) {
						case 0:
							this.renderTarget.depthAttachment.op = "clear";
							break;

						default:
							this.renderTarget.depthAttachment.op = "load";
							break;
					}
					this.beforeRender({ shadow });

					const viewport = shadow.viewports[i];
					const viewportSize = shadow.viewportSize;
					shadow.currentViewportIndex = i;
					shadow.update(light);
					// light.forceUpdate = true;
					context.setViewPort(
						viewport.x * viewportSize.x,
						viewport.y * viewportSize.y,
						viewportSize.x,
						viewportSize.y
					);
					context.setScissorTest(
						viewport.x * viewportSize.x,
						viewport.y * viewportSize.y,
						viewportSize.x,
						viewportSize.y
					);
					this.subRender(renderQueue, shadow, lightManger);
					super.afterRender();
				}
			} else {
				this.renderTarget.depthAttachment.op = "clear";
				this.beforeRender({ shadow });
				shadow.update(light);
				context.setViewPort(0, 0, shadow.shadowMapSize.x, shadow.shadowMapSize.y);
				context.setScissorTest(0, 0, shadow.shadowMapSize.x, shadow.shadowMapSize.y);
				this.subRender(renderQueue, shadow, lightManger);
				super.afterRender();
			}
		}
		// super.afterRender();
		lightManger.updateLightShadow();
		context.resetViewPortToFullCanvas();
	}

	subRender(renderQueue: RenderQueue, shadow: BaseShadow, lightManger: LightManger) {
		renderQueue.sort();
		// renderQueue.preRender(shadow.camera, this.context, this.passRenderEncoder);
		renderQueue.opaqueRender(shadow.camera, this.context, this.passRenderEncoder, lightManger, PassEnum.SHADOW);
		renderQueue.transparentRender(
			shadow.camera,
			this.context,
			this.passRenderEncoder,
			lightManger,
			PassEnum.SHADOW
		);
	}

	// getDepthTexture(): Texture {
	// 	return this._testTexture;
	// }
	beforeRender(options: { shadow: BaseShadow }) {
		const { shadow } = options;
		this.setRenderTarget(shadow);
		super.beforeRender();
	}
	public setSize(width: number, height: number): void {
		this.renderTarget.setSize(width, height, 1);
	}
	private setRenderTarget(shadow: BaseShadow) {
		this.renderTarget.depthAttachment.texture = shadow.getShadowMapTexture();
	}

	private init(context: Context) {
		this.createRenderTarget(context);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	private createRenderTarget(context: Context) {
		const depthAttachment = new Attachment(1.0, { texture: undefined });
		this.renderTarget = new RenderTarget("render", [], depthAttachment);
	}
}
