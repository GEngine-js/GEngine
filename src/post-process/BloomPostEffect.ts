import { TextureFormat, TextureUsage } from "../core/WebGPUConstant";
import { Uniforms } from "../core/WebGPUTypes";
import ShaderMaterial from "../material/ShaderMaterial";
import Color from "../math/Color";
import Vector2 from "../math/Vector2";
import Attachment from "../render/Attachment";
import Context from "../render/Context";
import RenderTarget from "../render/RenderTarget";
import Texture from "../render/Texture";
import getVertFrag from "../shader/Shaders";
import PostEffect from "./PostEffect";

export default class BloomPostEffect extends PostEffect {
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

	constructor(options: BloomPostEffectProps) {
		super(options.width, options.height);
		this.strength = options.strength;
		this.radius = options.radius;
		this.threshold = options.threshold;
		this.init();
	}
	setSize(width: number, height: number, depth?: number): void {}
	render(context: Context, colorTexture: Texture): void {}
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
		} // luminosity high pass material
		this.highPassUniforms = {
			tDiffuse: { type: "texture", value: null },
			tSampler: {
				type: "sampler",
				value: () => {
					return this.defaultSampler;
				}
			},
			luminosityThreshol: { type: "float", value: this.threshold },
			smoothWidth: { type: "float", value: 0.01 },
			defaultColor: { type: "color", value: new Color(0, 0, 0) },
			defaultOpacity: { type: "float", value: 0.0 }
		};
		const shader = getVertFrag("luminosityHigh", {});
		this.materialHighPassFilter = new ShaderMaterial({
			type: "bloom",
			uniforms: this.highPassUniforms,
			vert: shader.vert,
			frag: shader.frag
		});
		// Gaussian Blur Materials

		this.separableBlurMaterials = [];
		const kernelSizeArray = [3, 5, 7, 9, 11];
		resx = Math.round(this.width / 2);
		resy = Math.round(this.height / 2);

		for (let i = 0; i < this.nMips; i++) {
			this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i], "BlurMaterial"));

			this.separableBlurMaterials[i].uniforms["texSize"].value = new Vector2(resx, resy);

			resx = Math.round(resx / 2);

			resy = Math.round(resy / 2);
		}
		// Composite material
		this.compositeMaterial = this.getCompositeMaterial(this.nMips, "compositeMaterial");
		this.compositeMaterial.uniforms["blurTexture1"].value = this.renderTargetsVertical[0].getColorTexture();
		this.compositeMaterial.uniforms["blurTexture2"].value = this.renderTargetsVertical[1].getColorTexture();
		this.compositeMaterial.uniforms["blurTexture3"].value = this.renderTargetsVertical[2].getColorTexture();
		this.compositeMaterial.uniforms["blurTexture4"].value = this.renderTargetsVertical[3].getColorTexture();
		this.compositeMaterial.uniforms["blurTexture5"].value = this.renderTargetsVertical[4].getColorTexture();
		this.compositeMaterial.uniforms["bloomStrength"].value = this.strength;
		this.compositeMaterial.uniforms["bloomRadius"].value = 0.1;
	}
	private createColorAttachment(width: number, height: number): Attachment {
		const colorTexture = new Texture({
			size: { width, height, depth: 1 },
			format: TextureFormat.RGBA8Unorm,
			usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding
		});
		const colorAttachment = new Attachment({ r: 0.5, g: 0.5, b: 0.5, a: 1.0 }, { texture: colorTexture });
		return colorAttachment;
	}
	private getCompositeMaterial(nMips: number, type): ShaderMaterial {
		//@ts-nocheck
		return new ShaderMaterial({
			type,
			uniforms: {
				blurTexture1: { type: "texture", value: null },
				blurTexture2: { type: "texture", value: null },
				blurTexture3: { type: "texture", value: null },
				blurTexture4: { type: "texture", value: null },
				blurTexture5: { type: "texture", value: null },
				tSampler: {
					type: "sampler",
					value: () => {
						return this.defaultSampler;
					}
				},
				bloomStrength: { type: "float", value: 1.0 },

				// bloomFactors: {type:'texture', value: null },
				// bloomTintColors: {type:'color', value: null },
				bloomRadius: { type: "float", value: 0.0 }
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

				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];
                struct BloomUniforms{
                    bloomStrength:f32,
                    bloomRadius:f32,
                    bloomFactors : array<f32,${NUM_MIPS}>,
                    bloomTintColors : array<vec3<f32>,${NUM_MIPS}>
                }  
                @group(0) @binding(0)  var<uniform> bloomUniforms : BloomUniforms;

                @group(0) @binding(${blurTexture1Binding}) var blurTexture1: texture_2d<f32>;
                @group(0) @binding(${blurTexture2Binding}) var blurTexture2: texture_2d<f32>;
                @group(0) @binding(${blurTexture3Binding}) var blurTexture3: texture_2d<f32>;
                @group(0) @binding(${blurTexture4Binding}) var blurTexture4: texture_2d<f32>;
                @group(0) @binding(${blurTexture5Binding}) var blurTexture5: texture_2d<f32>;
                @group(0) @binding(${tSamplerBinding}) var tSampler: sampler;

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
		const shader = getVertFrag("Blur", {
			KERNEL_RADIUS: kernelRadius,
			SIGMA: kernelRadius
		});
		return new ShaderMaterial({
			type,
			uniforms: {
				colorTexture: { type: "texture", value: null },
				texSize: { type: "vec2", value: new Vector2(0.5, 0.5) },
				direction: { type: "vec2", value: new Vector2(0.5, 0.5) },
				tSampler: {
					type: "sampler",
					value: () => {
						return this.defaultSampler;
					}
				}
			},

			vert: shader.vert,

			frag: shader.frag
		});
	}
}

type BloomPostEffectProps = {
	width: number;
	height: number;
	strength: number;
	radius: number;
	threshold: number;
};
