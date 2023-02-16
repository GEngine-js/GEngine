import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import { Uniforms } from "../core/WebGPUTypes";
import ShaderMaterial from "../material/ShaderMaterial";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import Vector3 from "../math/Vector3";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import getVertFrag from "../shader/Shaders";
import PostEffect from "./PostEffect";

export default class BloomPostEffect extends PostEffect {
	static BlurDirectionX = new Vector2(1.0, 0.0);
	static BlurDirectionY = new Vector2(0.0, 1.0);
	strength: number;
	radius: number;
	threshold: number;
	renderTargetsHorizontal: RenderTarget[];
	renderTargetsVertical: RenderTarget[];
	nMips: number;
	renderTargetBright: RenderTarget;
	materialHighPassFilter: ShaderMaterial;
	highPassUniforms: Uniforms;
	compositeMaterial: ShaderMaterial;
	separableBlurMaterials: ShaderMaterial[];
	separableBlurYMaterials: ShaderMaterial[];
	blendUniforms: Uniforms;
	blendMaterial: ShaderMaterial;
	blendTarget: RenderTarget;

	constructor(options: BloomPostEffectProps) {
		super(options.width, options.height, "bloom");
		this.strength = options.strength;
		this.radius = options.radius;
		this.threshold = options.threshold;
		this.init();
	}
	setSize(width: number, height: number, depth?: number): void {}
	destroy() {
		this.renderTargetBright.destroy();
	}
	render(context: Context, colorTexture: Texture): Texture {
		// 1. Extract Bright Areas
		this.currentRenderTarget = this.renderTargetBright;
		this.highPassUniforms.tDiffuse.value = colorTexture;
		this.fullScreenQuad.material = this.materialHighPassFilter;
		this.renderMesh(context);
		// 2. Blur All the mips progressively
		let inputRenderTarget = this.renderTargetBright;
		for (let i = 0; i < this.nMips; i++) {
			this.fullScreenQuad.material = this.separableBlurMaterials[i];

			this.separableBlurMaterials[i].uniforms.tDiffuse.value = inputRenderTarget.getColorTexture();
			this.separableBlurMaterials[i].uniforms.direction.value = BloomPostEffect.BlurDirectionX;
			this.currentRenderTarget = this.renderTargetsHorizontal[i];

			this.renderMesh(context);
			this.fullScreenQuad.material = this.separableBlurYMaterials[i];
			this.separableBlurYMaterials[i].uniforms.tDiffuse.value = this.renderTargetsHorizontal[i].getColorTexture();
			this.separableBlurYMaterials[i].uniforms.direction.value = BloomPostEffect.BlurDirectionY;
			this.currentRenderTarget = this.renderTargetsVertical[i];

			this.renderMesh(context);

			inputRenderTarget = this.renderTargetsVertical[i];
		}
		// Composite All the mips
		this.fullScreenQuad.material = this.compositeMaterial;
		this.currentRenderTarget = this.renderTargetsHorizontal[0];
		this.renderMesh(context);
		//blend
		this.blendUniforms.baseColorTexture.value = colorTexture;
		this.fullScreenQuad.material = this.blendMaterial;
		this.currentRenderTarget = this.blendTarget;
		this.renderMesh(context);
		return this.currentRenderTarget.getColorTexture();
	}
	private init() {
		this.renderTargetsHorizontal = [];
		this.renderTargetsVertical = [];
		this.nMips = 5;
		let resx = Math.round(this.width / 2);
		let resy = Math.round(this.height / 2);

		this.renderTargetBright = new RenderTarget("render", [this.createColorAttachment(resx, resy)]);

		for (let i = 0; i < this.nMips; i++) {
			const renderTargetHorizonal = new RenderTarget("render", [this.createColorAttachment(resx, resy)]);
			this.renderTargetsHorizontal.push(renderTargetHorizonal);
			const renderTargetVertical = new RenderTarget("render", [this.createColorAttachment(resx, resy)]);
			this.renderTargetsVertical.push(renderTargetVertical);
			resx = Math.round(resx / 2);
			resy = Math.round(resy / 2);
		}
		// luminosity high pass material
		this.highPassUniforms = {
			tDiffuse: { type: "texture", value: null },
			tSampler: {
				type: "sampler",
				value: this.defaultSampler
			},
			luminosityThreshol: { type: "float", value: this.threshold },
			smoothWidth: { type: "float", value: 0.01 },
			defaultColor: { type: "color", value: new Color(0.0, 0, 0) },
			defaultOpacity: { type: "float", value: 1.0 }
		};
		const shader = getVertFrag("luminosityHigh", {});
		this.materialHighPassFilter = new ShaderMaterial({
			type: "bloom",
			uniforms: this.highPassUniforms,
			vert: shader.vert,
			frag: shader.frag
		});
		// Gaussian Blur Materials
		this.materialHighPassFilter.renderState = this.renderState;
		this.separableBlurMaterials = [];
		this.separableBlurYMaterials = [];
		const kernelSizeArray = [3, 5, 7, 9, 11];
		resx = Math.round(this.width / 2);
		resy = Math.round(this.height / 2);

		for (let i = 0; i < this.nMips; i++) {
			this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i], "BlurMaterial" + i));
			this.separableBlurYMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i], "BlurMaterialY" + i));
			resx = Math.round(resx / 2);

			resy = Math.round(resy / 2);
		}
		// Composite material
		this.compositeMaterial = this.getCompositeMaterial(this.nMips, "compositeMaterial");
		this.compositeMaterial.renderState = this.renderState;
		this.blendUniforms = {
			tDiffuse: { type: "texture", value: this.renderTargetsHorizontal[0].getColorTexture() },
			baseColorTexture: { type: "texture", value: null },
			tSampler: {
				type: "sampler",
				value: this.defaultSampler
			}
		};
		const blendShader = getVertFrag("blend", {});
		this.blendMaterial = new ShaderMaterial({
			type: "postBlend",
			uniforms: this.blendUniforms,
			vert: blendShader.vert,
			frag: blendShader.frag
		});
		this.blendMaterial.renderState = this.renderState;
		this.blendTarget = new RenderTarget("render", [this.createColorAttachment(this.width, this.height)]);
	}
	private createColorAttachment(width: number, height: number): Attachment {
		const colorTexture = new Texture({
			size: { width, height, depth: 1 },
			format: TextureFormat.BGRA8Unorm,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});
		const colorAttachment = new Attachment({ r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, { texture: colorTexture });
		return colorAttachment;
	}
	private getCompositeMaterial(nMips: number, type): ShaderMaterial {
		//@ts-nocheck
		return new ShaderMaterial({
			type,
			uniforms: {
				blurTexture1: { type: "texture", value: this.renderTargetsVertical[0].getColorTexture() },
				blurTexture2: { type: "texture", value: this.renderTargetsVertical[1].getColorTexture() },
				blurTexture3: { type: "texture", value: this.renderTargetsVertical[2].getColorTexture() },
				blurTexture4: { type: "texture", value: this.renderTargetsVertical[3].getColorTexture() },
				blurTexture5: { type: "texture", value: this.renderTargetsVertical[4].getColorTexture() },
				tSampler: {
					type: "sampler",
					value: this.defaultSampler
				},
				bloomStrength: { type: "float", value: this.strength },
				bloomRadius: { type: "float", value: this.radius },
				bloomFactors: { type: "float-array", value: [1.0, 0.8, 0.6, 0.4, 0.2] },
				bloomTintColors: {
					type: "vec3-array",
					value: [
						new Vector3(1, 1, 1),
						new Vector3(1, 1, 1),
						new Vector3(1, 1, 1),
						new Vector3(1, 1, 1),
						new Vector3(1, 1, 1)
					]
				}
			},

			vert: `
              struct VertexInput {
                    @location(0) position: vec2<f32>,       
               }
               struct VertexOutput {
                    @builtin(position) position: vec4<f32>,
                    @location(0) uv: vec2<f32>,
                };
               @vertex
               fn main(input: VertexInput) -> VertexOutput {
                var output:VertexOutput;
                output.uv = input.position * 0.5 + 0.5;
                output.position = vec4<f32>(input.position, 0.0, 1.0);;
                return output;
               }
                `,

			frag: `
                struct FragInput {
                    @location(0) uv: vec2<f32>,
                };
                struct BloomUniforms{
                    bloomStrength:f32,
                    bloomRadius:f32,
                    bloomFactors : array<f32,5>,
                    bloomTintColors : array<vec3<f32>,5>
                }  
                @group(0) @binding(0)  var<storage, read> bloomUniforms : BloomUniforms;

                @group(0) @binding({{blurTexture1Binding}}) var blurTexture1: texture_2d<f32>;
                @group(0) @binding({{blurTexture2Binding}}) var blurTexture2: texture_2d<f32>;
                @group(0) @binding({{blurTexture3Binding}}) var blurTexture3: texture_2d<f32>;
                @group(0) @binding({{blurTexture4Binding}}) var blurTexture4: texture_2d<f32>;
                @group(0) @binding({{blurTexture5Binding}}) var blurTexture5: texture_2d<f32>;
                @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;

				fn lerpBloomFactor(factor:f32)->f32 {
					let mirrorFactor:f32 = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomUniforms.bloomRadius);
				}
                @fragment
				fn main(input:FragInput)-> @location(0) vec4<f32>  {
					return bloomUniforms.bloomStrength * ( lerpBloomFactor(bloomUniforms.bloomFactors[0]) * vec4(bloomUniforms.bloomTintColors[0], 1.0) * textureSample(blurTexture1, tSampler, input.uv) +
						lerpBloomFactor(bloomUniforms.bloomFactors[1]) * vec4<f32>(bloomUniforms.bloomTintColors[1], 1.0) * textureSample(blurTexture2, tSampler, input.uv) +
						lerpBloomFactor(bloomUniforms.bloomFactors[2]) * vec4<f32>(bloomUniforms.bloomTintColors[2], 1.0) * textureSample(blurTexture3, tSampler, input.uv) +
						lerpBloomFactor(bloomUniforms.bloomFactors[3]) * vec4<f32>(bloomUniforms.bloomTintColors[3], 1.0) * textureSample(blurTexture4, tSampler, input.uv) +
						lerpBloomFactor(bloomUniforms.bloomFactors[4]) * vec4<f32>(bloomUniforms.bloomTintColors[4], 1.0) * textureSample(blurTexture5, tSampler, input.uv) );
				}`
		});
	}
	private getSeperableBlurMaterial(kernelRadius, type) {
		const shader = getVertFrag("blur", {
			KERNEL_RADIUS: kernelRadius,
			SIGMA: kernelRadius
		});
		const mat = new ShaderMaterial({
			type,
			uniforms: {
				tDiffuse: { type: "texture", value: null },
				direction: { type: "vec2", value: new Vector2(0.0, 0.0) },
				tSampler: {
					type: "sampler",
					value: this.defaultSampler
				}
			},

			vert: shader.vert,

			frag: shader.frag
		});
		mat.renderState = this.renderState;
		return mat;
	}
}

type BloomPostEffectProps = {
	width: number;
	height: number;
	strength: number;
	radius: number;
	threshold: number;
};
