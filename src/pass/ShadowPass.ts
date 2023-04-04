import Attachment from "../render/Attachment";
import Context from "../render/Context";
import Pass from "./Pass";
import RenderTarget from "../render/RenderTarget";
import Camera from "../camera/Camera";
import { BaseShadow } from "../light/shadows/BaseShadow";
import { FrameState } from "../core/FrameState";
import ShaderMaterial from "../material/ShaderMaterial";
import getVertFrag from "../shader/Shaders";
import Texture from "../render/Texture";
import { CommandSubType } from "../core/WebGPUConstant";
import RenderQueue from "../core/RenderQueue";
export class ShadowPass extends Pass {
	public shadowMaterial: ShaderMaterial;
	_testTexture: Texture;
	constructor(context: Context) {
		super(context);
		this.init(context);
	}
	render(frameState: FrameState, camera?: Camera) {
		const { renderQueue, context } = frameState;
		const lights = context.lightManger.getAllLights();
		if (lights.length === 0) return;

		for (let i = 0; i < lights.length; i++) {
			const light = lights[i];
			const shadow = light.shadow;
			if (!shadow) continue;
			// this._testTexture = context.lightManger._testTexture
			this.beforeRender(shadow);

			if (shadow.type == "pointLightShadow") {
				// for (let i = 0; i < shadow.viewports.length; i++) {
				// 	const viewport = shadow.viewports[i];
				// 	const viewportSize = shadow.viewportSize;
				// 	shadow.currentViewportIndex = i;
				// 	// this.shadowMaterial.renderState.setViewPort(
				// 	// 	viewport.x * viewportSize.x,
				// 	// 	viewport.y * viewportSize.y,
				// 	// 	viewportSize.x,
				// 	// 	viewportSize.y
				// 	// );
				// 	this.subRender(renderQueue, shadow);
				// }
				this.shadowMaterial.renderState.setViewPort(0, 0, shadow.shadowMapSize.x, shadow.shadowMapSize.y);
				this.subRender(renderQueue, shadow);
			} else {
				this.shadowMaterial.renderState.setViewPort(0, 0, shadow.shadowMapSize.x, shadow.shadowMapSize.y);
				this.subRender(renderQueue, shadow);
			}

			super.afterRender();
		}
		context.lightManger.updateLightShadow();
	}

	subRender(renderQueue: RenderQueue, shadow: BaseShadow) {
		renderQueue.sort();
		// renderQueue.preRender(shadow.camera, this.context, this.passRenderEncoder);
		renderQueue.transparentRender(
			shadow.camera,
			this.context,
			this.passRenderEncoder,
			this.shadowMaterial,
			CommandSubType.Shadow
		);
		renderQueue.opaqueRender(
			shadow.camera,
			this.context,
			this.passRenderEncoder,
			this.shadowMaterial,
			CommandSubType.Shadow
		);
	}

	// getDepthTexture(): Texture {
	// 	return this._testTexture;
	// }
	beforeRender(shadow: BaseShadow) {
		this.setRenderTarget(shadow);
		super.beforeRender();
	}

	private setRenderTarget(shadow: BaseShadow) {
		this.renderTarget.depthAttachment.texture = shadow.getShadowMapTexture();
	}

	private init(context: Context) {
		this.createRenderTarget(context);
		this.createShadowMaterial();
	}
	private createRenderTarget(context: Context) {
		const depthAttachment = new Attachment(1.0, { texture: undefined });
		this.renderTarget = new RenderTarget("render", [], depthAttachment);
	}

	private createShadowMaterial() {
		const colorShader = getVertFrag("color", {
			colorBinding: 0,
			cameraBinding: 0,
			positionLocation: 0,
			colorLocation: 1
		});
		this.shadowMaterial = new ShaderMaterial({
			type: "shadowMaterial",
			uniforms: {
				modelMatrix: { type: "mat4", value: null }
			},
			vert: colorShader.vert,
			frag: undefined,
			light: true
		});
	}
}
