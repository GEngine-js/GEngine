import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import ShaderMaterial from "../material/ShaderMaterial";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Sampler from "../render/Sampler";
import Texture from "../render/Texture";
import getVertFrag from "../shader/Shaders";
import PostEffect from "./PostEffect";
export default class ResolvePostEffect extends PostEffect {
	material: ShaderMaterial;
	constructor() {
		super(1024, 1024, "resolve");
		const shader = getVertFrag("resolve", { positionLocation: 0 });
		this.material = new ShaderMaterial({
			shaderId: "resolve",
			frag: shader.frag,
			vert: shader.vert,
			uniformTextureAndSampler: {
				texture: {
					type: "texture",
					value: undefined
				},
				sampler: {
					type: "sampler",
					value: new Sampler({
						magFilter: "linear",
						minFilter: "linear"
					})
				}
			}
		});
		this.fullScreenQuad.material = this.material;
	}
	setSize(width: number, height: number) {
		this.currentRenderTarget.setSize(width, height);
		this.material.dirty = true;
	}
	render(context: Context, colorTexture: Texture) {
		if (!this.currentRenderTarget) this.initRenderTarget(context);
		// this.material
		this.material.shaderMaterialParms.uniformTextureAndSampler.texture.value = colorTexture;
		this.material.update(undefined, this.fullScreenQuad);
		this.renderMesh(context);
		return null;
	}
	private initRenderTarget(context: Context) {
		const { width, height, depth } = context.presentationSize;
		const colorAttachment = new Attachment(
			{ r: 0.0, g: 0.0, b: 0.0, a: 0 },
			{
				textureView: () => {
					return context.context.getCurrentTexture().createView();
				}
			}
		);
		const depthTexture = new Texture({
			label: "resolveDepth",
			textureDescriptor: {
				size: { width, height, depth },
				format: TextureFormat.Depth24Plus,
				usage: TextureUsage.RenderAttachment
			}
		});
		const depthAttachment = new Attachment(1.0, { texture: depthTexture });
		this.currentRenderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
	}
}
