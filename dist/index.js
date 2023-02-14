var e, t, i, r, n, s, a, o, c, l, u, h, f, m, d, p, g, x, v, y, b, S, E, T, w, _, R, U, M, C, L, I, z, D, O, N, A, P, B;
!(function (e) {
	e.SRGB = "srgb";
})(e || (e = {})),
	(function (e) {
		(e.LowPower = "low-power"), (e.HighPerformance = "high-performance");
	})(t || (t = {})),
	(function (e) {
		(e.DepthClipControl = "depth-clip-control"),
			(e.Depth24UnormStencil8 = "depth24unorm-stencil8"),
			(e.Depth32FloatStencil8 = "depth32float-stencil8"),
			(e.TextureCompressionBC = "texture-compression-bc"),
			(e.TextureCompressionETC2 = "texture-compression-etc2"),
			(e.TextureCompressionASTC = "texture-compression-astc"),
			(e.TimestampQuery = "timestamp-query"),
			(e.IndirectFirstInstance = "indirect-first-instance"),
			(e.ShaderF16 = "shader-f16"),
			(e.BGRA8UnormStorage = "bgra8unorm-storage");
	})(i || (i = {})),
	(function (e) {
		(e[(e.MapRead = 1)] = "MapRead"),
			(e[(e.MapWrite = 2)] = "MapWrite"),
			(e[(e.CopySrc = 4)] = "CopySrc"),
			(e[(e.CopyDst = 8)] = "CopyDst"),
			(e[(e.Index = 16)] = "Index"),
			(e[(e.Vertex = 32)] = "Vertex"),
			(e[(e.Uniform = 64)] = "Uniform"),
			(e[(e.Storage = 128)] = "Storage"),
			(e[(e.Indirect = 256)] = "Indirect"),
			(e[(e.QueryResolve = 512)] = "QueryResolve");
	})(r || (r = {})),
	(function (e) {
		(e[(e.Read = 1)] = "Read"), (e[(e.Write = 2)] = "Write");
	})(n || (n = {})),
	(function (e) {
		(e.E1d = "1d"), (e.E2d = "2d"), (e.E3d = "3d");
	})(s || (s = {})),
	(function (e) {
		(e[(e.CopySrc = 1)] = "CopySrc"),
			(e[(e.CopyDst = 2)] = "CopyDst"),
			(e[(e.TextureBinding = 4)] = "TextureBinding"),
			(e[(e.StorageBinding = 8)] = "StorageBinding"),
			(e[(e.RenderAttachment = 16)] = "RenderAttachment");
	})(a || (a = {})),
	(function (e) {
		(e.E1d = "1d"),
			(e.E2d = "2d"),
			(e.E2dArray = "2d-array"),
			(e.Cube = "cube"),
			(e.CubeArray = "cube-array"),
			(e.E3d = "3d");
	})(o || (o = {})),
	(function (e) {
		(e.All = "all"), (e.StencilOnly = "stencil-only"), (e.DepthOnly = "depth-only");
	})(c || (c = {})),
	(function (e) {
		(e.R8Unorm = "r8unorm"),
			(e.R8Snorm = "r8snorm"),
			(e.R8Uint = "r8uint"),
			(e.R8Sint = "r8sint"),
			(e.R16Uint = "r16uint"),
			(e.R16Sint = "r16sint"),
			(e.R16Float = "r16float"),
			(e.RG8Unorm = "rg8unorm"),
			(e.RG8Snorm = "rg8snorm"),
			(e.RG8Uint = "rg8uint"),
			(e.RG8Sint = "rg8sint"),
			(e.R32Uint = "r32uint"),
			(e.R32Sint = "r32sint"),
			(e.R32Float = "r32float"),
			(e.RG16Uint = "rg16uint"),
			(e.RG16Sint = "rg16sint"),
			(e.RG16Float = "rg16float"),
			(e.RGBA8Unorm = "rgba8unorm"),
			(e.RGBA8UnormSRGB = "rgba8unorm-srgb"),
			(e.RGBA8Snorm = "rgba8snorm"),
			(e.RGBA8Uint = "rgba8uint"),
			(e.RGBA8Sint = "rgba8sint"),
			(e.BGRA8Unorm = "bgra8unorm"),
			(e.BGRA8UnormSRGB = "bgra8unorm-srgb"),
			(e.RGB9E5UFloat = "rgb9e5ufloat"),
			(e.RGB10A2Unorm = "rgb10a2unorm"),
			(e.RG11B10UFloat = "rg11b10ufloat"),
			(e.RG32Uint = "rg32uint"),
			(e.RG32Sint = "rg32sint"),
			(e.RG32Float = "rg32float"),
			(e.RGBA16Uint = "rgba16uint"),
			(e.RGBA16Sint = "rgba16sint"),
			(e.RGBA16Float = "rgba16float"),
			(e.RGBA32Uint = "rgba32uint"),
			(e.RGBA32Sint = "rgba32sint"),
			(e.RGBA32Float = "rgba32float"),
			(e.Stencil8 = "stencil8"),
			(e.Depth16Unorm = "depth16unorm"),
			(e.Depth24Plus = "depth24plus"),
			(e.Depth24PlusStencil8 = "depth24plus-stencil8"),
			(e.Depth32Float = "depth32float"),
			(e.BC1RGBAUnorm = "bc1-rgba-unorm"),
			(e.BC1RGBAUnormSRGB = "bc1-rgba-unorm-srgb"),
			(e.BC2RGBAUnorm = "bc2-rgba-unorm"),
			(e.BC2RGBAUnormSRGB = "bc2-rgba-unorm-srgb"),
			(e.BC3RGBAUnorm = "bc3-rgba-unorm"),
			(e.BC3RGBAUnormSRGB = "bc3-rgba-unorm-srgb"),
			(e.BC4RUnorm = "bc4-r-unorm"),
			(e.BC4RSnorm = "bc4-r-snorm"),
			(e.BC5RGUnorm = "bc5-rg-unorm"),
			(e.BC5RGSnorm = "bc5-rg-snorm"),
			(e.BC6HRGBUFloat = "bc6h-rgb-ufloat"),
			(e.BC6HRGBFloat = "bc6h-rgb-float"),
			(e.BC7RGBAUnorm = "bc7-rgba-unorm"),
			(e.BC7RGBAUnormSRGB = "bc7-rgba-unorm-srgb"),
			(e.ETC2RGB8Unorm = "etc2-rgb8unorm"),
			(e.ETC2RGB8UnormSRGB = "etc2-rgb8unorm-srgb"),
			(e.ETC2RGB8A1Unorm = "etc2-rgb8a1unorm"),
			(e.ETC2RGB8A1UnormSRGB = "etc2-rgb8a1unorm-srgb"),
			(e.ETC2RGBA8Unorm = "etc2-rgba8unorm"),
			(e.ETC2RGBA8UnormSRGB = "etc2-rgba8unorm-srgb"),
			(e.EACR11Unorm = "eac-r11unorm"),
			(e.EACR11Snorm = "eac-r11snorm"),
			(e.EACRG11Unorm = "eac-rg11unorm"),
			(e.EACRG11Snorm = "eac-rg11snorm"),
			(e.ASTC4x4Unorm = "astc-4x4-unorm"),
			(e.ASTC4x4UnormSRGB = "astc-4x4-unorm-srgb"),
			(e.ASTC5x4Unorm = "astc-5x4-unorm"),
			(e.ASTC5x4UnormSRGB = "astc-5x4-unorm-srgb"),
			(e.ASTC5x5Unorm = "astc-5x5-unorm"),
			(e.ASTC5x5UnormSRGB = "astc-5x5-unorm-srgb"),
			(e.ASTC6x5Unorm = "astc-6x5-unorm"),
			(e.ASTC6x5UnormSRGB = "astc-6x5-unorm-srgb"),
			(e.ASTC6x6Unorm = "astc-6x6-unorm"),
			(e.ASTC6x6UnormSRGB = "astc-6x6-unorm-srgb"),
			(e.ASTC8x5Unorm = "astc-8x5-unorm"),
			(e.ASTC8x5UnormSRGB = "astc-8x5-unorm-srgb"),
			(e.ASTC8x6Unorm = "astc-8x6-unorm"),
			(e.ASTC8x6UnormSRGB = "astc-8x6-unorm-srgb"),
			(e.ASTC8x8Unorm = "astc-8x8-unorm"),
			(e.ASTC8x8UnormSRGB = "astc-8x8-unorm-srgb"),
			(e.ASTC10x5Unorm = "astc-10x5-unorm"),
			(e.ASTC10x5UnormSRGB = "astc-10x5-unorm-srgb"),
			(e.ASTC10x6Unorm = "astc-10x6-unorm"),
			(e.ASTC10x6UnormSRGB = "astc-10x6-unorm-srgb"),
			(e.ASTC10x8Unorm = "astc-10x8-unorm"),
			(e.ASTC10x8UnormSRGB = "astc-10x8-unorm-srgb"),
			(e.ASTC10x10Unorm = "astc-10x10-unorm"),
			(e.ASTC10x10UnormSRGB = "astc-10x10-unorm-srgb"),
			(e.ASTC12x10Unorm = "astc-12x10-unorm"),
			(e.ASTC12x10UnormSRGB = "astc-12x10-unorm-srgb"),
			(e.ASTC12x12Unorm = "astc-12x12-unorm"),
			(e.ASTC12x12UnormSRGB = "astc-12x12-unorm-srgb"),
			(e.Depth24UnormStencil8 = "depth24unorm-stencil8"),
			(e.Depth32FloatStencil8 = "depth32float-stencil8");
	})(l || (l = {})),
	(function (e) {
		(e.ClampToEdge = "clamp-to-edge"), (e.Repeat = "repeat"), (e.MirrorRepeat = "mirror-repeat");
	})(u || (u = {})),
	(function (e) {
		(e.Nearest = "nearest"), (e.Linear = "linear");
	})(h || (h = {})),
	(function (e) {
		(e.Never = "never"),
			(e.Less = "less"),
			(e.Equal = "equal"),
			(e.LessEqual = "less-equal"),
			(e.Greater = "greater"),
			(e.NotEqual = "not-equal"),
			(e.GreaterEqual = "greater-equal"),
			(e.Always = "always");
	})(f || (f = {})),
	(function (e) {
		(e[(e.Vertex = 1)] = "Vertex"), (e[(e.Fragment = 2)] = "Fragment"), (e[(e.Compute = 4)] = "Compute");
	})(m || (m = {})),
	(function (e) {
		(e.Uniform = "uniform"), (e.Storage = "storage"), (e.ReadOnlyStorage = "read-only-storage");
	})(d || (d = {})),
	(function (e) {
		(e.Filtering = "filtering"), (e.NonFiltering = "non-filtering"), (e.Comparison = "comparison");
	})(p || (p = {})),
	(function (e) {
		(e.Float = "float"),
			(e.UnfilterableFloat = "unfilterable-float"),
			(e.Depth = "depth"),
			(e.Sint = "sint"),
			(e.Uint = "uint");
	})(g || (g = {})),
	(function (e) {
		e.WriteOnly = "write-only";
	})(x || (x = {})),
	(function (e) {
		(e.Error = "error"), (e.Warning = "warning"), (e.Info = "info");
	})(v || (v = {})),
	(function (e) {
		e.Auto = "auto";
	})(y || (y = {})),
	(function (e) {
		(e.PointList = "point-list"),
			(e.LineList = "line-list"),
			(e.LineStrip = "line-strip"),
			(e.TriangleList = "triangle-list"),
			(e.TriangleStrip = "triangle-strip");
	})(b || (b = {})),
	(function (e) {
		(e.CCW = "ccw"), (e.CW = "cw");
	})(S || (S = {})),
	(function (e) {
		(e.None = "none"), (e.Front = "front"), (e.Back = "back");
	})(E || (E = {})),
	(function (e) {
		(e[(e.Red = 1)] = "Red"),
			(e[(e.Green = 2)] = "Green"),
			(e[(e.Blue = 4)] = "Blue"),
			(e[(e.Alpha = 8)] = "Alpha"),
			(e[(e.All = 15)] = "All");
	})(T || (T = {})),
	(function (e) {
		(e.Zero = "zero"),
			(e.One = "one"),
			(e.Src = "src"),
			(e.OneMinusSrc = "one-minus-src"),
			(e.SrcAlpha = "src-alpha"),
			(e.OneMinusSrcAlpha = "one-minus-src-alpha"),
			(e.Dst = "dst"),
			(e.OneMinusDst = "one-minus-dst"),
			(e.DstAlpha = "dst-alpha"),
			(e.OneMinusDstAlpha = "one-minus-dst-alpha"),
			(e.SrcAlphaSaturated = "src-alpha-saturated"),
			(e.Constant = "constant"),
			(e.OneMinusConstant = "one-minus-constant");
	})(w || (w = {})),
	(function (e) {
		(e.Add = "add"),
			(e.Subtract = "subtract"),
			(e.ReverseSubtract = "reverse-subtract"),
			(e.Min = "min"),
			(e.Max = "max");
	})(_ || (_ = {})),
	(function (e) {
		(e.Keep = "keep"),
			(e.Zero = "zero"),
			(e.Replace = "replace"),
			(e.Invert = "invert"),
			(e.IncrementClamp = "increment-clamp"),
			(e.DecrementClamp = "decrement-clamp"),
			(e.IncrementWrap = "increment-wrap"),
			(e.DecrementWrap = "decrement-wrap");
	})(R || (R = {})),
	(function (e) {
		(e.Uint16 = "uint16"), (e.Uint32 = "uint32");
	})(U || (U = {})),
	(function (e) {
		(e.Uint8x2 = "uint8x2"),
			(e.Uint8x4 = "uint8x4"),
			(e.Sint8x2 = "sint8x2"),
			(e.Sint8x4 = "sint8x4"),
			(e.Unorm8x2 = "unorm8x2"),
			(e.Unorm8x4 = "unorm8x4"),
			(e.Snorm8x2 = "snorm8x2"),
			(e.Snorm8x4 = "snorm8x4"),
			(e.Uint16x2 = "uint16x2"),
			(e.Uint16x4 = "uint16x4"),
			(e.Sint16x2 = "sint16x2"),
			(e.Sint16x4 = "sint16x4"),
			(e.Unorm16x2 = "unorm16x2"),
			(e.Unorm16x4 = "unorm16x4"),
			(e.Snorm16x2 = "snorm16x2"),
			(e.Snorm16x4 = "snorm16x4"),
			(e.Float16x2 = "float16x2"),
			(e.Float16x4 = "float16x4"),
			(e.Float32 = "float32"),
			(e.Float32x2 = "float32x2"),
			(e.Float32x3 = "float32x3"),
			(e.Float32x4 = "float32x4"),
			(e.Uint32 = "uint32"),
			(e.Uint32x2 = "uint32x2"),
			(e.Uint32x3 = "uint32x3"),
			(e.Uint32x4 = "uint32x4"),
			(e.Sint32 = "sint32"),
			(e.Sint32x2 = "sint32x2"),
			(e.Sint32x3 = "sint32x3"),
			(e.Sint32x4 = "sint32x4");
	})(M || (M = {})),
	(function (e) {
		(e.Vertex = "vertex"), (e.Instance = "instance");
	})(C || (C = {})),
	(function (e) {
		(e.Beginning = "beginning"), (e.End = "end");
	})(L || (L = {})),
	(function (e) {
		(e.Beginning = "beginning"), (e.End = "end");
	})(I || (I = {})),
	(function (e) {
		(e.Load = "load"), (e.Clear = "clear");
	})(z || (z = {})),
	(function (e) {
		(e.Store = "store"), (e.Discard = "discard");
	})(D || (D = {})),
	(function (e) {
		(e.Occlusion = "occlusion"), (e.Timestamp = "timestamp");
	})(O || (O = {})),
	(function (e) {
		(e.Opaque = "opaque"), (e.Premultiplied = "premultiplied");
	})(N || (N = {})),
	(function (e) {
		e.Destroyed = "destroyed";
	})(A || (A = {})),
	(function (e) {
		(e.OutOfMemory = "out-of-memory"), (e.Validation = "validation");
	})(P || (P = {})),
	(function (e) {
		(e[(e.Red = 1)] = "Red"),
			(e[(e.Green = 2)] = "Green"),
			(e[(e.Blue = 4)] = "Blue"),
			(e[(e.Alpha = 8)] = "Alpha"),
			(e[(e.All = 15)] = "All");
	})(B || (B = {}));
class V {
	constructor(e, t, i, r) {
		(this.device = e),
			(this.usage = t),
			(this.data = i),
			(this.size = r),
			(this.gpuBuffer = e.createBuffer({ size: null != r ? r : i.byteLength, usage: t })),
			i && this.setSubData(0, i);
	}
	static create(e, t, i, r) {
		return new V(e, t, i, r);
	}
	static createVertexBuffer(e, t) {
		return new V(e, r.Vertex | r.CopyDst, t, t.byteLength);
	}
	static createIndexBuffer(e, t) {
		return new V(e, r.Index | r.CopyDst, t);
	}
	static createUniformBuffer(e, t, i) {
		return new V(e, i, null, t);
	}
	static getBufferType(e) {
		switch (e) {
			case r.Uniform:
			case r.Storage:
		}
	}
	setSubData(e, t) {
		const i = t.buffer,
			r = i.byteLength,
			n = this.device.createBuffer({ mappedAtCreation: !0, size: r, usage: GPUBufferUsage.COPY_SRC }),
			s = n.getMappedRange();
		new Uint8Array(s).set(new Uint8Array(i)), n.unmap(), this.copyToBuffer(n, e, r), n.destroy();
	}
	copyToBuffer(e, t, i) {
		const r = this.device.createCommandEncoder();
		r.copyBufferToBuffer(e, 0, this.gpuBuffer, t, i), this.device.queue.submit([r.finish()]);
	}
	copyToTexture(e, t, i, r) {
		const n = this.device.createCommandEncoder();
		n.copyBufferToTexture({ buffer: this.gpuBuffer, bytesPerRow: e, rowsPerImage: t }, i, r),
			this.device.queue.submit([n.finish()]);
	}
	destroy() {
		this.gpuBuffer.destroy();
	}
}
class F {
	constructor(e) {
		(this.type = e.type),
			(this.shaderData = e.shaderData),
			(this.renderTarget = e.renderTarget),
			(this.vertexBuffer = e.vertexBuffer),
			(this.indexBuffer = e.indexBuffer),
			(this.renderState = e.renderState),
			(this.queryIndex = e.queryIndex),
			(this.count = e.count),
			(this.instances = e.instances),
			(this.dispatch = e.dispatch),
			(this.shaderSource = e.shaderSource),
			(this.dirty = e.dirty),
			(this.light = e.light);
	}
	shallowClone(e) {
		if (e)
			return new F({
				vertexBuffer: this.vertexBuffer,
				indexBuffer: this.indexBuffer,
				shaderData: e.shaderData,
				instances: this.instances,
				count: this.count,
				renderState: e.renderState,
				shaderSource: e.shaderSource,
				type: "render",
				light: e.light
			});
	}
}
const $ = "premultiplied";
class G {
	constructor(e) {
		(this.device = e), (this.sampler = e.createSampler({ minFilter: "linear" })), (this.pipelines = {});
	}
	getMipmapPipeline(e) {
		let t = this.pipelines[e];
		return (
			t ||
				(this.mipmapShaderModule ||
					(this.mipmapShaderModule = this.device.createShaderModule({
						code: "\n              var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(\n                vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));\n              struct VertexOutput {\n                @builtin(position) position : vec4<f32>,\n                @location(0) texCoord : vec2<f32>,\n              };\n              @vertex\n              fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {\n                var output : VertexOutput;\n                output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);\n                output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n                return output;\n              }\n              @group(0) @binding(0) var imgSampler : sampler;\n              @group(0) @binding(1) var img : texture_2d<f32>;\n              @fragment\n              fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {\n                return textureSample(img, imgSampler, texCoord);\n              }\n            "
					})),
				(t = this.device.createRenderPipeline({
					layout: "auto",
					vertex: { module: this.mipmapShaderModule, entryPoint: "vertexMain" },
					fragment: { module: this.mipmapShaderModule, entryPoint: "fragmentMain", targets: [{ format: e }] }
				})),
				(this.pipelines[e] = t)),
			t
		);
	}
	generateMipmap(e) {
		const t = e.gpuTexture,
			i = e.textureProp,
			r = this.getMipmapPipeline(i.format);
		if ("3d" == i.dimension || "1d" == i.dimension)
			throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
		let n = t;
		const s = i.size.depth || 1,
			a = i.usage & GPUTextureUsage.RENDER_ATTACHMENT;
		if (!a) {
			const e = {
				size: {
					width: Math.ceil(i.size.width / 2),
					height: Math.ceil(i.size.height / 2),
					depthOrArrayLayers: s
				},
				format: i.format,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
				mipLevelCount: i.mipLevelCount - 1
			};
			n = this.device.createTexture(e);
		}
		const o = this.device.createCommandEncoder({}),
			c = r.getBindGroupLayout(0);
		for (let e = 0; e < s; ++e) {
			let s = t.createView({
					baseMipLevel: 0,
					mipLevelCount: 1,
					dimension: "2d",
					baseArrayLayer: e,
					arrayLayerCount: 1
				}),
				l = a ? 1 : 0;
			for (let t = 1; t < i.mipLevelCount; ++t) {
				const t = n.createView({
						baseMipLevel: l++,
						mipLevelCount: 1,
						dimension: "2d",
						baseArrayLayer: e,
						arrayLayerCount: 1
					}),
					i = o.beginRenderPass({ colorAttachments: [{ view: t, loadOp: "clear", storeOp: "store" }] }),
					a = this.device.createBindGroup({
						layout: c,
						entries: [
							{ binding: 0, resource: this.sampler },
							{ binding: 1, resource: s }
						]
					});
				i.setPipeline(r), i.setBindGroup(0, a), i.draw(3, 1, 0, 0), i.end(), (s = t);
			}
		}
		if (!a) {
			const e = {
				width: Math.ceil(i.size.width / 2),
				height: Math.ceil(i.size.height / 2),
				depthOrArrayLayers: s
			};
			for (let r = 1; r < i.mipLevelCount; ++r)
				o.copyTextureToTexture({ texture: n, mipLevel: r - 1 }, { texture: t, mipLevel: r }, e),
					(e.width = Math.ceil(e.width / 2)),
					(e.height = Math.ceil(e.height / 2));
		}
		return this.device.queue.submit([o.finish()]), a || n.destroy(), t;
	}
}
const q = new Map();
class k {
	constructor(e, t, i = [], r) {
		(this.groupLayouts = i),
			(this.index = r || 0),
			(this.gpuPipelineLayout = e.createPipelineLayout({
				label: t,
				bindGroupLayouts: i.map((e) => e.gpuBindGroupLayout)
			}));
	}
	static getPipelineLayoutFromCache(e, t, i) {
		if (q.has(t)) return q.get(t);
		{
			const r = new k(e, t, i);
			return q.set(t, r), r;
		}
	}
}
const X = new Map(),
	j = new Map();
class H {
	constructor(e, t, i) {
		(this.type = e), (this.descriptor = i), (this.device = t), this.createPipeline();
	}
	createPipeline() {
		"render" == this.type
			? (this.gpuPipeline = this.device.createRenderPipeline(this.descriptor))
			: (this.gpuPipeline = this.device.createComputePipeline(this.descriptor));
	}
	bind(e) {
		this.type, e.setPipeline(this.gpuPipeline);
	}
	static getRenderPipelineFromCache(e, t, i) {
		const { renderState: r, shaderSource: n } = t,
			s = JSON.stringify(r),
			a = Y(n.uid.concat(s)),
			o = i.sort((e, t) => e.index - t.index);
		let c = X.get(a);
		if (!c) {
			const i = H.getPipelineDescriptor(e, t, r, o, a.toString());
			(c = new H("render", e, i)), X.set(a, c);
		}
		return c;
	}
	static getComputePipelineFromCache(e, t, i) {
		const { shaderSource: r } = t,
			n = Y(r.uid);
		let s = j.get(n);
		if (!s) {
			const { shaderSource: r } = t;
			(s = e.createComputePipeline({
				layout: k.getPipelineLayoutFromCache(e, n.toString(), i).gpuPipelineLayout,
				compute: { module: r.createShaderModule(e), entryPoint: r.computeMain }
			})),
				j.set(n, s);
		}
		return s;
	}
	static getPipelineDescriptor(e, t, i, r, n) {
		const { vertexBuffer: s, shaderSource: a } = t,
			{ vert: o, frag: c } = a.createShaderModule(e),
			l = { layout: k.getPipelineLayoutFromCache(e, n, r).gpuPipelineLayout };
		return (
			o && (l.vertex = { module: o, entryPoint: a.vertEntryPoint, buffers: s.getBufferDes() }),
			i.primitive && (l.primitive = i.primitive.getGPUPrimitiveDec()),
			i.depthStencil && (l.depthStencil = i.depthStencil.getGPUDepthStencilDec()),
			i.multisample && (l.multisample = i.multisample.getMultiSampleDec()),
			c &&
				(l.fragment = {
					module: c,
					entryPoint: a.fragEntryPoint,
					targets: i.targets.map((e) => e.getGPUTargetDec())
				}),
			l
		);
	}
}
function Y(e) {
	let t = 0;
	if (0 == e.length) return t;
	for (let i = 0; i < e.length; i++) {
		(t = (t << 5) - t + e.charCodeAt(i)), (t &= t);
	}
	return t;
}
function W(e, t) {
	return null != e ? e : t;
}
function Z(e) {
	return null != e;
}
W.EMPTY_OBJECT = Object.freeze({});
var K = function (e) {
	null == e && (e = new Date().getTime()),
		(this.N = 624),
		(this.M = 397),
		(this.MATRIX_A = 2567483615),
		(this.UPPER_MASK = 2147483648),
		(this.LOWER_MASK = 2147483647),
		(this.mt = new Array(this.N)),
		(this.mti = this.N + 1),
		e.constructor == Array ? this.init_by_array(e, e.length) : this.init_seed(e);
};
(K.prototype.init_seed = function (e) {
	for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
		e = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
		(this.mt[this.mti] = ((1812433253 * ((4294901760 & e) >>> 16)) << 16) + 1812433253 * (65535 & e) + this.mti),
			(this.mt[this.mti] >>>= 0);
	}
}),
	(K.prototype.init_by_array = function (e, t) {
		var i, r, n;
		for (this.init_seed(19650218), i = 1, r = 0, n = this.N > t ? this.N : t; n; n--) {
			var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
			(this.mt[i] =
				(this.mt[i] ^ (((1664525 * ((4294901760 & s) >>> 16)) << 16) + 1664525 * (65535 & s))) + e[r] + r),
				(this.mt[i] >>>= 0),
				r++,
				++i >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (i = 1)),
				r >= t && (r = 0);
		}
		for (n = this.N - 1; n; n--) {
			s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
			(this.mt[i] =
				(this.mt[i] ^ (((1566083941 * ((4294901760 & s) >>> 16)) << 16) + 1566083941 * (65535 & s))) - i),
				(this.mt[i] >>>= 0),
				++i >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (i = 1));
		}
		this.mt[0] = 2147483648;
	}),
	(K.prototype.random_int = function () {
		var e,
			t = new Array(0, this.MATRIX_A);
		if (this.mti >= this.N) {
			var i;
			for (this.mti == this.N + 1 && this.init_seed(5489), i = 0; i < this.N - this.M; i++)
				(e = (this.mt[i] & this.UPPER_MASK) | (this.mt[i + 1] & this.LOWER_MASK)),
					(this.mt[i] = this.mt[i + this.M] ^ (e >>> 1) ^ t[1 & e]);
			for (; i < this.N - 1; i++)
				(e = (this.mt[i] & this.UPPER_MASK) | (this.mt[i + 1] & this.LOWER_MASK)),
					(this.mt[i] = this.mt[i + (this.M - this.N)] ^ (e >>> 1) ^ t[1 & e]);
			(e = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK)),
				(this.mt[this.N - 1] = this.mt[this.M - 1] ^ (e >>> 1) ^ t[1 & e]),
				(this.mti = 0);
		}
		return (
			(e = this.mt[this.mti++]),
			(e ^= e >>> 11),
			(e ^= (e << 7) & 2636928640),
			(e ^= (e << 15) & 4022730752),
			(e ^= e >>> 18) >>> 0
		);
	}),
	(K.prototype.random_int31 = function () {
		return this.random_int() >>> 1;
	}),
	(K.prototype.random_incl = function () {
		return this.random_int() * (1 / 4294967295);
	}),
	(K.prototype.random = function () {
		return this.random_int() * (1 / 4294967296);
	}),
	(K.prototype.random_excl = function () {
		return (this.random_int() + 0.5) * (1 / 4294967296);
	}),
	(K.prototype.random_long = function () {
		return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992);
	});
var Q = K;
class J {
	static signNotZero(e) {
		return e < 0 ? -1 : 1;
	}
	static toSNorm(e, t) {
		return (t = W(t, 255)), Math.round((0.5 * J.clamp(e, -1, 1) + 0.5) * t);
	}
	static fromSNorm(e, t) {
		return (t = W(t, 255)), (J.clamp(e, 0, t) / t) * 2 - 1;
	}
	static normalize(e, t, i) {
		return 0 === (i = Math.max(i - t, 0)) ? 0 : J.clamp((e - t) / i, 0, 1);
	}
	static lerp(e, t, i) {
		return (1 - i) * e + i * t;
	}
	static toRadians(e) {
		if (!Z(e)) throw new Error("degrees is required.");
		return e * J.RADIANS_PER_DEGREE;
	}
	static toDegrees(e) {
		if (!Z(e)) throw new Error("radians is required.");
		return e * J.DEGREES_PER_RADIAN;
	}
	static negativePiToPi(e) {
		if (!Z(e)) throw new Error("angle is required.");
		return e >= -J.PI && e <= J.PI ? e : J.zeroToTwoPi(e + J.PI) - J.PI;
	}
	static zeroToTwoPi(e) {
		if (!Z(e)) throw new Error("angle is required.");
		if (e >= 0 && e <= J.TWO_PI) return e;
		const t = J.mod(e, J.TWO_PI);
		return Math.abs(t) < J.EPSILON14 && Math.abs(e) > J.EPSILON14 ? J.TWO_PI : t;
	}
	static mod(e, t) {
		if (!Z(e)) throw new Error("m is required.");
		if (!Z(t)) throw new Error("n is required.");
		if (0 === t) throw new Error("divisor cannot be 0.");
		return J.sign(e) === J.sign(t) && Math.abs(e) < Math.abs(t) ? e : ((e % t) + t) % t;
	}
	static equalsEpsilon(e, t, i, r = i) {
		if (!Z(e)) throw new Error("left is required.");
		if (!Z(t)) throw new Error("right is required.");
		(i = W(i, 0)), (r = W(r, i));
		const n = Math.abs(e - t);
		return n <= r || n <= i * Math.max(Math.abs(e), Math.abs(t));
	}
	static lessThan(e, t, i = 0) {
		if (!Z(e)) throw new Error("first is required.");
		if (!Z(t)) throw new Error("second is required.");
		if (!Z(i)) throw new Error("absoluteEpsilon is required.");
		return e - t < -i;
	}
	static lessThanOrEquals(e, t, i = 0) {
		if (!Z(e)) throw new Error("first is required.");
		if (!Z(t)) throw new Error("second is required.");
		if (!Z(i)) throw new Error("absoluteEpsilon is required.");
		return e - t < i;
	}
	static greaterThan(e, t, i = 0) {
		if (!Z(e)) throw new Error("first is required.");
		if (!Z(t)) throw new Error("second is required.");
		if (!Z(i)) throw new Error("absoluteEpsilon is required.");
		return e - t > i;
	}
	static greaterThanOrEquals(e, t, i = 0) {
		if (!Z(e)) throw new Error("first is required.");
		if (!Z(t)) throw new Error("second is required.");
		if (!Z(i)) throw new Error("absoluteEpsilon is required.");
		return e - t > -i;
	}
	static isPowerOfTwo(e) {
		if ("number" != typeof e || e < 0 || e > 4294967295)
			throw new Error("A number between 0 and (2^32)-1 is required.");
		return 0 !== e && 0 == (e & (e - 1));
	}
	static nextPowerOfTwo(e) {
		if ("number" != typeof e || e < 0 || e > 2147483648)
			throw new Error("A number between 0 and 2^31 is required.");
		return --e, (e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16), ++e;
	}
	static previousPowerOfTwo(e) {
		if ("number" != typeof e || e < 0 || e > 4294967295)
			throw new Error("A number between 0 and (2^32)-1 is required.");
		return (
			(e |= e >> 1),
			(e |= e >> 2),
			(e |= e >> 4),
			(e |= e >> 8),
			(e |= e >> 16),
			(e = ((e |= e >> 32) >>> 0) - (e >>> 1))
		);
	}
	static clamp(e, t, i) {
		return e < t ? t : e > i ? i : e;
	}
	static fog(e, t) {
		const i = e * t;
		return 1 - Math.exp(-i * i);
	}
}
(J.EPSILON1 = 0.1),
	(J.EPSILON2 = 0.01),
	(J.EPSILON3 = 0.001),
	(J.EPSILON4 = 1e-4),
	(J.EPSILON5 = 1e-5),
	(J.EPSILON6 = 1e-6),
	(J.EPSILON7 = 1e-7),
	(J.EPSILON8 = 1e-8),
	(J.EPSILON9 = 1e-9),
	(J.EPSILON10 = 1e-10),
	(J.EPSILON11 = 1e-11),
	(J.EPSILON12 = 1e-12),
	(J.EPSILON13 = 1e-13),
	(J.EPSILON14 = 1e-14),
	(J.EPSILON15 = 1e-15),
	(J.EPSILON16 = 1e-16),
	(J.EPSILON17 = 1e-17),
	(J.EPSILON18 = 1e-18),
	(J.EPSILON19 = 1e-19),
	(J.EPSILON20 = 1e-20),
	(J.EPSILON21 = 1e-21),
	(J.GRAVITATIONALPARAMETER = 3986004418e5),
	(J.SIXTY_FOUR_KILOBYTES = 65536),
	(J.FOUR_GIGABYTES = 4294967296),
	(J.sign = W(Math.sign, function (e) {
		return 0 === (e = +e) || e != e ? e : e > 0 ? 1 : -1;
	})),
	(J.sinh = W(Math.sinh, function (e) {
		return (Math.exp(e) - Math.exp(-e)) / 2;
	})),
	(J.cosh = W(Math.cosh, function (e) {
		return (Math.exp(e) + Math.exp(-e)) / 2;
	})),
	(J.PI = Math.PI),
	(J.ONE_OVER_PI = 1 / Math.PI),
	(J.PI_OVER_TWO = Math.PI / 2),
	(J.PI_OVER_THREE = Math.PI / 3),
	(J.PI_OVER_FOUR = Math.PI / 4),
	(J.PI_OVER_SIX = Math.PI / 6),
	(J.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
	(J.TWO_PI = 2 * Math.PI),
	(J.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
	(J.RADIANS_PER_DEGREE = Math.PI / 180),
	(J.DEGREES_PER_RADIAN = 180 / Math.PI),
	(J.RADIANS_PER_ARCSECOND = J.RADIANS_PER_DEGREE / 3600),
	(J.nextRandomNumber = function () {
		return ee.random();
	}),
	(J.randomBetween = function (e, t) {
		return J.nextRandomNumber() * (t - e) + e;
	}),
	(J.acosClamped = function (e) {
		if (!Z(e)) throw new Error("value is required.");
		return Math.acos(J.clamp(e, -1, 1));
	}),
	(J.asinClamped = function (e) {
		if (!Z(e)) throw new Error("value is required.");
		return Math.asin(J.clamp(e, -1, 1));
	}),
	(J.chordLength = function (e, t) {
		if (!Z(e)) throw new Error("angle is required.");
		if (!Z(t)) throw new Error("radius is required.");
		return 2 * t * Math.sin(0.5 * e);
	}),
	(J.logBase = function (e, t) {
		if (!Z(e)) throw new Error("number is required.");
		if (!Z(t)) throw new Error("base is required.");
		return Math.log(e) / Math.log(t);
	}),
	(J.cbrt = W(Math.cbrt, function (e) {
		const t = Math.pow(Math.abs(e), 1 / 3);
		return e < 0 ? -t : t;
	})),
	(J.log2 = W(Math.log2, function (e) {
		return Math.log(e) * Math.LOG2E;
	}));
let ee = new Q();
const te = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
	ie = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
	re = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
	ne = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
function se(e, t, i) {
	return (
		i < 0 && (i += 1),
		i > 1 && (i -= 1),
		6 * i < 1 ? e + 6 * (t - e) * i : 2 * i < 1 ? t : 3 * i < 2 ? e + (t - e) * (2 / 3 - i) * 6 : e
	);
}
class ae {
	constructor(e = 1, t = 1, i = 1) {
		(this.red = e), (this.green = t), (this.blue = i);
	}
	set(e) {
		return "string" == typeof e && ae.fromCssColorString(e, this), this;
	}
	toArray() {
		return [this.red, this.green, this.blue];
	}
	clone(e) {
		return ae.clone(this, e);
	}
	equals(e) {
		return ae.equals(this, e);
	}
	toCssHexString() {
		let e = ae.floatToByte(this.red).toString(16);
		e.length < 2 && (e = `0${e}`);
		let t = ae.floatToByte(this.green).toString(16);
		t.length < 2 && (t = `0${t}`);
		let i = ae.floatToByte(this.blue).toString(16);
		return i.length < 2 && (i = `0${i}`), `#${e}${t}${i}`;
	}
	toBytes(e) {
		const t = ae.floatToByte(this.red),
			i = ae.floatToByte(this.green),
			r = ae.floatToByte(this.blue);
		return Z(e) ? ((e[0] = t), (e[1] = i), (e[2] = r), e) : [t, i, r];
	}
	static fromBytes(e, t, i, r) {
		return (
			(e = ae.byteToFloat(W(e, 255))),
			(t = ae.byteToFloat(W(t, 255))),
			(i = ae.byteToFloat(W(i, 255))),
			Z(r) ? ((r.red = e), (r.green = t), (r.blue = i), r) : new ae(e, t, i)
		);
	}
	static fromHsl(e, t, i, r) {
		(e = W(e, 0) % 1), (t = W(t, 0));
		let n = (i = W(i, 0)),
			s = i,
			a = i;
		if (0 !== t) {
			let r;
			r = i < 0.5 ? i * (1 + t) : i + t - i * t;
			const o = 2 * i - r;
			(n = se(o, r, e + 1 / 3)), (s = se(o, r, e)), (a = se(o, r, e - 1 / 3));
		}
		return Z(r) ? ((r.red = n), (r.green = s), (r.blue = a), r) : new ae(n, s, a);
	}
	static fromRandom(e, t) {
		let i = (e = W(e, W.EMPTY_OBJECT)).red;
		if (!Z(i)) {
			const t = W(e.minimumRed, 0),
				r = W(e.maximumRed, 1);
			i = t + J.nextRandomNumber() * (r - t);
		}
		let r = e.green;
		if (!Z(r)) {
			const t = W(e.minimumGreen, 0),
				i = W(e.maximumGreen, 1);
			r = t + J.nextRandomNumber() * (i - t);
		}
		let n = e.blue;
		if (!Z(n)) {
			const t = W(e.minimumBlue, 0),
				i = W(e.maximumBlue, 1);
			n = t + J.nextRandomNumber() * (i - t);
		}
		return Z(t) ? ((t.red = i), (t.green = r), (t.blue = n), t) : new ae(i, r, n);
	}
	static fromCssColorString(e, t = new ae()) {
		e = e.replace(/\s/g, "");
		const i = ae[e.toUpperCase()];
		if (Z(i)) return ae.clone(i, t), t;
		let r = te.exec(e);
		return null !== r
			? ((t.red = parseInt(r[1], 16) / 15),
			  (t.green = parseInt(r[2], 16) / 15),
			  (t.blue = parseInt(r[3], 16) / 15),
			  t)
			: ((r = ie.exec(e)),
			  null !== r
					? ((t.red = parseInt(r[1], 16) / 255),
					  (t.green = parseInt(r[2], 16) / 255),
					  (t.blue = parseInt(r[3], 16) / 255),
					  t)
					: ((r = re.exec(e)),
					  null !== r
							? ((t.red = parseFloat(r[1]) / ("%" === r[1].substr(-1) ? 100 : 255)),
							  (t.green = parseFloat(r[2]) / ("%" === r[2].substr(-1) ? 100 : 255)),
							  (t.blue = parseFloat(r[3]) / ("%" === r[3].substr(-1) ? 100 : 255)),
							  t)
							: ((r = ne.exec(e)),
							  null !== r
									? ae.fromHsl(
											parseFloat(r[1]) / 360,
											parseFloat(r[2]) / 100,
											parseFloat(r[3]) / 100,
											t
									  )
									: (t = void 0))));
	}
	static byteToFloat(e) {
		return e / 255;
	}
	static floatToByte(e) {
		return 1 === e ? 255 : (256 * e) | 0;
	}
	static clone(e, t) {
		if (Z(e))
			return Z(t) ? ((t.red = e.red), (t.green = e.green), (t.blue = e.blue), t) : new ae(e.red, e.green, e.blue);
	}
	static equals(e, t) {
		return e === t || (Z(e) && Z(t) && e.red === t.red && e.green === t.green && e.blue === t.blue);
	}
	static equalsArray(e, t, i) {
		return e.red === t[i] && e.green === t[i + 1] && e.blue === t[i + 2];
	}
}
class oe {
	constructor(e = 0, t = 0) {
		(this.x = e), (this.y = t), (this.x = e), (this.y = t);
	}
	set(e, t) {
		(this.x = e), (this.y = t);
	}
	toArray() {
		return [this.x, this.y];
	}
	clone(e) {
		return oe.clone(this, e);
	}
	equals(e) {
		return oe.equals(this, e);
	}
	equalsEpsilon(e, t = 0, i = 0) {
		return oe.equalsEpsilon(this, e, t, i);
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
	}
	applyMatrix3(e) {
		const t = this.x,
			i = this.y;
		return (this.x = e[0] * t + e[3] * i + e[6]), (this.y = e[1] * t + e[4] * i + e[7]), this;
	}
	static fromElements(e, t, i) {
		return Z(i) ? ((i.x = e), (i.y = t), i) : new oe(e, t);
	}
	static clone(e, t) {
		if (Z(e)) return Z(t) ? ((t.x = e.x), (t.y = e.y), t) : new oe(e.x, e.y);
	}
	static maximumComponent(e) {
		return Math.max(e.x, e.y);
	}
	static minimumComponent(e) {
		return Math.min(e.x, e.y);
	}
	static minimumByComponent(e, t, i) {
		return (i.x = Math.min(e.x, t.x)), (i.y = Math.min(e.y, t.y)), i;
	}
	static maximumByComponent(e, t, i) {
		return (i.x = Math.max(e.x, t.x)), (i.y = Math.max(e.y, t.y)), i;
	}
	static clamp(e, t, i, r) {
		const n = J.clamp(e.x, t.x, i.x),
			s = J.clamp(e.y, t.y, i.y);
		return (r.x = n), (r.y = s), r;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y;
	}
	static magnitude(e) {
		return Math.sqrt(oe.magnitudeSquared(e));
	}
	static distance(e, t) {
		return oe.subtract(e, t, ce), oe.magnitude(ce);
	}
	static distanceSquared(e, t) {
		return oe.subtract(e, t, ce), oe.magnitudeSquared(ce);
	}
	static normalize(e, t) {
		const i = oe.magnitude(e);
		if (((t.x = e.x / i), (t.y = e.y / i), isNaN(t.x) || isNaN(t.y)))
			throw new Error("normalized result is not a number");
		return t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y;
	}
	static cross(e, t) {
		return e.x * t.y - e.y * t.x;
	}
	static multiplyComponents(e, t, i) {
		return (i.x = e.x * t.x), (i.y = e.y * t.y), i;
	}
	static divideComponents(e, t, i) {
		return (i.x = e.x / t.x), (i.y = e.y / t.y), i;
	}
	static add(e, t, i) {
		return (i.x = e.x + t.x), (i.y = e.y + t.y), i;
	}
	static subtract(e, t, i) {
		return (i.x = e.x - t.x), (i.y = e.y - t.y), i;
	}
	static multiplyByScalar(e, t, i) {
		return (i.x = e.x * t), (i.y = e.y * t), i;
	}
	static divideByScalar(e, t, i) {
		return (i.x = e.x / t), (i.y = e.y / t), i;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), t;
	}
	static abs(e, t) {
		return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
	}
	static lerp(e, t, i, r) {
		return oe.multiplyByScalar(t, i, le), (r = oe.multiplyByScalar(e, 1 - i, r)), oe.add(le, r, r);
	}
	static angleBetween(e, t) {
		return oe.normalize(e, ue), oe.normalize(t, he), J.acosClamped(oe.dot(ue, he));
	}
	static mostOrthogonalAxis(e, t) {
		const i = oe.normalize(e, fe);
		return oe.abs(i, i), (t = i.x <= i.y ? oe.clone(oe.UNIT_X, t) : oe.clone(oe.UNIT_Y, t));
	}
	static equals(e, t) {
		return e === t || (Z(e) && Z(t) && e.x === t.x && e.y === t.y);
	}
	static equalsArray(e, t, i) {
		return e.x === t[i] && e.y === t[i + 1];
	}
	static equalsEpsilon(e, t, i = 0, r = 0) {
		return e === t || (Z(e) && Z(t) && J.equalsEpsilon(e.x, t.x, i, r) && J.equalsEpsilon(e.y, t.y, i, r));
	}
}
(oe.ZERO = Object.freeze(new oe(0, 0))),
	(oe.ONE = Object.freeze(new oe(1, 1))),
	(oe.UNIT_X = Object.freeze(new oe(1, 0))),
	(oe.UNIT_Y = Object.freeze(new oe(0, 1)));
const ce = new oe(),
	le = new oe(),
	ue = new oe(),
	he = new oe(),
	fe = new oe();
class me {
	constructor(e = 0, t = 0, i = 0, r = 0) {
		(this[0] = e), (this[1] = i), (this[2] = t), (this[3] = r);
	}
	static clone(e, t) {
		if (Z(e))
			return Z(t)
				? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
				: new me(e[0], e[2], e[1], e[3]);
	}
	static fromColumnMajorArray(e, t) {
		return me.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return Z(t) ? ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]), t) : new me(e[0], e[1], e[2], e[3]);
	}
	static fromScale(e, t) {
		return Z(t) ? ((t[0] = e.x), (t[1] = 0), (t[2] = 0), (t[3] = e.y), t) : new me(e.x, 0, 0, e.y);
	}
	static fromUniformScale(e, t) {
		return Z(t) ? ((t[0] = e), (t[1] = 0), (t[2] = 0), (t[3] = e), t) : new me(e, 0, 0, e);
	}
	static fromRotation(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return Z(t) ? ((t[0] = i), (t[1] = r), (t[2] = -r), (t[3] = i), t) : new me(i, -r, r, i);
	}
	toArray() {
		const e = [];
		return me.toArray(this, e), e;
	}
	static toArray(e, t) {
		return Z(t) ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t) : [e[0], e[1], e[2], e[3]];
	}
	static getElementIndex(e, t) {
		return 2 * e + t;
	}
	static getColumn(e, t, i) {
		const r = 2 * t,
			n = e[r],
			s = e[r + 1];
		return (i.x = n), (i.y = s), i;
	}
	static setColumn(e, t, i, r) {
		const n = 2 * t;
		return ((r = me.clone(e, r))[n] = i.x), (r[n + 1] = i.y), r;
	}
	static getRow(e, t, i) {
		const r = e[t],
			n = e[t + 2];
		return (i.x = r), (i.y = n), i;
	}
	static setRow(e, t, i, r) {
		return ((r = me.clone(e, r))[t] = i.x), (r[t + 2] = i.y), r;
	}
	static setScale(e, t, i) {
		const r = me.getScale(e, de),
			n = t.x / r.x,
			s = t.y / r.y;
		return (i[0] = e[0] * n), (i[1] = e[1] * n), (i[2] = e[2] * s), (i[3] = e[3] * s), i;
	}
	static getScale(e, t) {
		return (
			(t.x = oe.magnitude(oe.fromElements(e[0], e[1], xe))),
			(t.y = oe.magnitude(oe.fromElements(e[2], e[3], xe))),
			t
		);
	}
	static getMaximumScale(e) {
		return me.getScale(e, pe), oe.maximumComponent(pe);
	}
	static setRotation(e, t, i) {
		const r = me.getScale(e, ge);
		return (i[0] = t[0] * r.x), (i[1] = t[1] * r.x), (i[2] = t[2] * r.y), (i[3] = t[3] * r.y), i;
	}
	static getRotation(e, t) {
		const i = me.getScale(e, ve);
		return (t[0] = e[0] / i.x), (t[1] = e[1] / i.x), (t[2] = e[2] / i.y), (t[3] = e[3] / i.y), t;
	}
	static multiply(e, t, i) {
		const r = e[0] * t[0] + e[2] * t[1],
			n = e[0] * t[2] + e[2] * t[3],
			s = e[1] * t[0] + e[3] * t[1],
			a = e[1] * t[2] + e[3] * t[3];
		return (i[0] = r), (i[1] = s), (i[2] = n), (i[3] = a), i;
	}
	static add(e, t, i) {
		return (i[0] = e[0] + t[0]), (i[1] = e[1] + t[1]), (i[2] = e[2] + t[2]), (i[3] = e[3] + t[3]), i;
	}
	static subtract(e, t, i) {
		return (i[0] = e[0] - t[0]), (i[1] = e[1] - t[1]), (i[2] = e[2] - t[2]), (i[3] = e[3] - t[3]), i;
	}
	static multiplyByVector(e, t, i) {
		const r = e[0] * t.x + e[2] * t.y,
			n = e[1] * t.x + e[3] * t.y;
		return (i.x = r), (i.y = n), i;
	}
	static multiplyByScalar(e, t, i) {
		return (i[0] = e[0] * t), (i[1] = e[1] * t), (i[2] = e[2] * t), (i[3] = e[3] * t), i;
	}
	static multiplyByScale(e, t, i) {
		return (i[0] = e[0] * t.x), (i[1] = e[1] * t.x), (i[2] = e[2] * t.y), (i[3] = e[3] * t.y), i;
	}
	static negate(e, t) {
		return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
	}
	static transpose(e, t) {
		const i = e[0],
			r = e[2],
			n = e[1],
			s = e[3];
		return (t[0] = i), (t[1] = r), (t[2] = n), (t[3] = s), t;
	}
	static abs(e, t) {
		return (t[0] = Math.abs(e[0])), (t[1] = Math.abs(e[1])), (t[2] = Math.abs(e[2])), (t[3] = Math.abs(e[3])), t;
	}
	static equals(e, t) {
		return e === t || (Z(e) && Z(t) && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]);
	}
	static equalsArray(e, t, i) {
		return e[0] === t[i] && e[1] === t[i + 1] && e[2] === t[i + 2] && e[3] === t[i + 3];
	}
	static equalsEpsilon(e, t, i = 0) {
		return (
			(i = W(i, 0)),
			e === t ||
				(Z(e) &&
					Z(t) &&
					Math.abs(e[0] - t[0]) <= i &&
					Math.abs(e[1] - t[1]) <= i &&
					Math.abs(e[2] - t[2]) <= i &&
					Math.abs(e[3] - t[3]) <= i)
		);
	}
	clone(e) {
		return me.clone(this, e);
	}
	equals(e) {
		return me.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return me.equalsEpsilon(this, e, t);
	}
	toString() {
		return `(${this[0]}, ${this[2]})\n(${this[1]}, ${this[3]})`;
	}
}
(me.IDENTITY = Object.freeze(new me(1, 0, 0, 1))), (me.ZERO = Object.freeze(new me(0, 0, 0, 0)));
const de = new oe();
new oe();
const pe = new oe(),
	ge = new oe(),
	xe = new oe(),
	ve = new oe();
class ye {
	constructor(e = 0, t = 0, i = 0) {
		(this.x = e), (this.y = t), (this.z = i);
	}
	set(e, t, i) {
		(this.x = e), (this.y = t), (this.z = i);
	}
	toArray() {
		return [this.x, this.y, this.z];
	}
	copy(e) {
		return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
	}
	lerp(e, t) {
		return ye.lerp(this, e, t, this), this;
	}
	add(e) {
		return ye.add(this, e, this), this;
	}
	addScaledVector(e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
	}
	subtract(e) {
		return ye.subtract(this, e, this), this;
	}
	applyQuaternion(e) {
		const t = this.x,
			i = this.y,
			r = this.z,
			n = e.x,
			s = e.y,
			a = e.z,
			o = e.w,
			c = o * t + s * r - a * i,
			l = o * i + a * t - n * r,
			u = o * r + n * i - s * t,
			h = -n * t - s * i - a * r;
		return (
			(this.x = c * o + h * -n + l * -a - u * -s),
			(this.y = l * o + h * -s + u * -n - c * -a),
			(this.z = u * o + h * -a + c * -s - l * -n),
			this
		);
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e, 4 * t);
	}
	fromArray(e, t = 0) {
		return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
	}
	multiplyByScalar(e) {
		return ye.multiplyByScalar(this, e, this), this;
	}
	clone() {
		return ye.clone(this, new ye());
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	applyMatrix4(e) {
		const t = this.x,
			i = this.y,
			r = this.z,
			n = e,
			s = 1 / (n[3] * t + n[7] * i + n[11] * r + n[15]);
		return (
			(this.x = (n[0] * t + n[4] * i + n[8] * r + n[12]) * s),
			(this.y = (n[1] * t + n[5] * i + n[9] * r + n[13]) * s),
			(this.z = (n[2] * t + n[6] * i + n[10] * r + n[14]) * s),
			this
		);
	}
	applyMatrix3(e) {
		let t = this.x,
			i = this.y,
			r = this.z;
		return (
			(this.x = t * e[0] + i * e[3] + r * e[6]),
			(this.y = t * e[1] + i * e[4] + r * e[7]),
			(this.z = t * e[2] + i * e[5] + r * e[8]),
			this
		);
	}
	transformDirection(e) {
		const t = this.x,
			i = this.y,
			r = this.z,
			n = e;
		return (
			(this.x = n[0] * t + n[4] * i + n[8] * r),
			(this.y = n[1] * t + n[5] * i + n[9] * r),
			(this.z = n[2] * t + n[6] * i + n[10] * r),
			this.normalize()
		);
	}
	normalize() {
		return ye.normalize(this, this), this;
	}
	equals(e) {
		return ye.equals(this, e);
	}
	equalsEpsilon(e, t = 0, i = 0) {
		return ye.equalsEpsilon(this, e, t, i);
	}
	toString() {
		return `(${this.x}, ${this.y}, ${this.z})`;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this;
	}
	static fromVector4(e, t) {
		return (t.x = e.x), (t.y = e.y), (t.z = e.z), t;
	}
	static fromSpherical(e, t) {
		Z(t) || (t = new ye());
		const { phi: i, radius: r, theta: n } = e,
			s = Math.sin(i) * r;
		return (t.x = s * Math.sin(n)), (t.y = Math.cos(i) * r), (t.z = s * Math.cos(n)), t;
	}
	static fromElements(e, t, i, r) {
		return Z(r) ? ((r.x = e), (r.y = t), (r.z = i), r) : new ye(e, t, i);
	}
	static clone(e, t = new ye()) {
		if (Z(e)) return Z(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t) : new ye(e.x, e.y, e.z);
	}
	static maximumComponent(e) {
		return Math.max(e.x, e.y, e.z);
	}
	static minimumComponent(e) {
		return Math.min(e.x, e.y, e.z);
	}
	static minimumByComponent(e, t, i) {
		return (i.x = Math.min(e.x, t.x)), (i.y = Math.min(e.y, t.y)), (i.z = Math.min(e.z, t.z)), i;
	}
	static maximumByComponent(e, t, i) {
		return (i.x = Math.max(e.x, t.x)), (i.y = Math.max(e.y, t.y)), (i.z = Math.max(e.z, t.z)), i;
	}
	static clamp(e, t, i, r) {
		const n = J.clamp(e.x, t.x, i.x),
			s = J.clamp(e.y, t.y, i.y),
			a = J.clamp(e.z, t.z, i.z);
		return (r.x = n), (r.y = s), (r.z = a), r;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z;
	}
	static magnitude(e) {
		return Math.sqrt(ye.magnitudeSquared(e));
	}
	static distance(e, t) {
		return ye.subtract(e, t, be), ye.magnitude(be);
	}
	static distanceSquared(e, t) {
		return ye.subtract(e, t, be), ye.magnitudeSquared(be);
	}
	static normalize(e, t) {
		const i = ye.magnitude(e);
		if (((t.x = e.x / i), (t.y = e.y / i), (t.z = e.z / i), isNaN(t.x) || isNaN(t.y) || isNaN(t.z)))
			throw new Error("normalized result is not a number");
		return t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y + e.z * t.z;
	}
	static multiplyComponents(e, t, i) {
		return (i.x = e.x * t.x), (i.y = e.y * t.y), (i.z = e.z * t.z), i;
	}
	static divideComponents(e, t, i) {
		return (i.x = e.x / t.x), (i.y = e.y / t.y), (i.z = e.z / t.z), i;
	}
	static add(e, t, i) {
		return (i.x = e.x + t.x), (i.y = e.y + t.y), (i.z = e.z + t.z), i;
	}
	static subtract(e, t, i) {
		return (i.x = e.x - t.x), (i.y = e.y - t.y), (i.z = e.z - t.z), i;
	}
	static multiplyByScalar(e, t, i) {
		return (i.x = e.x * t), (i.y = e.y * t), (i.z = e.z * t), i;
	}
	static divideByScalar(e, t, i) {
		return (i.x = e.x / t), (i.y = e.y / t), (i.z = e.z / t), i;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
	}
	static abs(e, t) {
		return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), t;
	}
	static lerp(e, t, i, r) {
		return ye.multiplyByScalar(t, i, Se), (r = ye.multiplyByScalar(e, 1 - i, r)), ye.add(Se, r, r);
	}
	static angleBetween(e, t) {
		ye.normalize(e, Ee), ye.normalize(t, Te);
		const i = ye.dot(Ee, Te),
			r = ye.magnitude(ye.cross(Ee, Te, Ee));
		return Math.atan2(r, i);
	}
	static mostOrthogonalAxis(e, t) {
		const i = ye.normalize(e, we);
		return (
			ye.abs(i, i),
			(t =
				i.x <= i.y
					? i.x <= i.z
						? ye.clone(ye.UNIT_X, t)
						: ye.clone(ye.UNIT_Z, t)
					: i.y <= i.z
					? ye.clone(ye.UNIT_Y, t)
					: ye.clone(ye.UNIT_Z, t))
		);
	}
	static projectVector(e, t, i) {
		const r = ye.dot(e, t) / ye.dot(t, t);
		return ye.multiplyByScalar(t, r, i);
	}
	static equals(e, t) {
		return e === t || (Z(e) && Z(t) && e.x === t.x && e.y === t.y && e.z === t.z);
	}
	static equalsArray(e, t, i) {
		return e.x === t[i] && e.y === t[i + 1] && e.z === t[i + 2];
	}
	static equalsEpsilon(e, t, i = 0, r = 0) {
		return (
			e === t ||
			(Z(e) &&
				Z(t) &&
				J.equalsEpsilon(e.x, t.x, i, r) &&
				J.equalsEpsilon(e.y, t.y, i, r) &&
				J.equalsEpsilon(e.z, t.z, i, r))
		);
	}
	static cross(e, t, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = t.x,
			o = t.y,
			c = t.z,
			l = n * c - s * o,
			u = s * a - r * c,
			h = r * o - n * a;
		return (i.x = l), (i.y = u), (i.z = h), i;
	}
}
(ye.ZERO = Object.freeze(new ye(0, 0, 0))),
	(ye.ONE = Object.freeze(new ye(1, 1, 1))),
	(ye.UNIT_X = Object.freeze(new ye(1, 0, 0))),
	(ye.UNIT_Y = Object.freeze(new ye(0, 1, 0))),
	(ye.UNIT_Z = Object.freeze(new ye(0, 0, 1))),
	(ye.midpoint = function (e, t, i) {
		return (i.x = 0.5 * (e.x + t.x)), (i.y = 0.5 * (e.y + t.y)), (i.z = 0.5 * (e.z + t.z)), i;
	});
const be = new ye(),
	Se = new ye(),
	Ee = new ye(),
	Te = new ye(),
	we = new ye();
class _e {
	constructor(e = 0, t = 0, i = 0, r = 0, n = 0, s = 0, a = 0, o = 0, c = 0) {
		(this[0] = e),
			(this[1] = r),
			(this[2] = a),
			(this[3] = t),
			(this[4] = n),
			(this[5] = o),
			(this[6] = i),
			(this[7] = s),
			(this[8] = c);
	}
	setFromMatrix4(e) {
		return (
			(this[0] = e[0]),
			(this[1] = e[1]),
			(this[2] = e[2]),
			(this[3] = e[4]),
			(this[4] = e[5]),
			(this[5] = e[2]),
			(this[6] = e[8]),
			(this[7] = e[9]),
			(this[8] = e[10]),
			this
		);
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e), _e.inverse(this, this), _e.transpose(this, this), this;
	}
	static clone(e, t) {
		if (Z(e))
			return Z(t)
				? ((t[0] = e[0]),
				  (t[1] = e[1]),
				  (t[2] = e[2]),
				  (t[3] = e[3]),
				  (t[4] = e[4]),
				  (t[5] = e[5]),
				  (t[6] = e[6]),
				  (t[7] = e[7]),
				  (t[8] = e[8]),
				  t)
				: new _e(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
	}
	static fromColumnMajorArray(e, t) {
		return Z(t) || (t = new _e()), _e.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return Z(t)
			? ((t[0] = e[0]),
			  (t[1] = e[3]),
			  (t[2] = e[6]),
			  (t[3] = e[1]),
			  (t[4] = e[4]),
			  (t[5] = e[7]),
			  (t[6] = e[2]),
			  (t[7] = e[5]),
			  (t[8] = e[8]),
			  t)
			: new _e(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
	}
	static fromQuaternion(e, t) {
		const i = e.x * e.x,
			r = e.x * e.y,
			n = e.x * e.z,
			s = e.x * e.w,
			a = e.y * e.y,
			o = e.y * e.z,
			c = e.y * e.w,
			l = e.z * e.z,
			u = e.z * e.w,
			h = e.w * e.w,
			f = i - a - l + h,
			m = 2 * (r - u),
			d = 2 * (n + c),
			p = 2 * (r + u),
			g = -i + a - l + h,
			x = 2 * (o - s),
			v = 2 * (n - c),
			y = 2 * (o + s),
			b = -i - a + l + h;
		return Z(t)
			? ((t[0] = f),
			  (t[1] = p),
			  (t[2] = v),
			  (t[3] = m),
			  (t[4] = g),
			  (t[5] = y),
			  (t[6] = d),
			  (t[7] = x),
			  (t[8] = b),
			  t)
			: new _e(f, m, d, p, g, x, v, y, b);
	}
	static fromScale(e, t) {
		return Z(t)
			? ((t[0] = e.x),
			  (t[1] = 0),
			  (t[2] = 0),
			  (t[3] = 0),
			  (t[4] = e.y),
			  (t[5] = 0),
			  (t[6] = 0),
			  (t[7] = 0),
			  (t[8] = e.z),
			  t)
			: new _e(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
	}
	static fromRotationX(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return Z(t)
			? ((t[0] = 1),
			  (t[1] = 0),
			  (t[2] = 0),
			  (t[3] = 0),
			  (t[4] = i),
			  (t[5] = r),
			  (t[6] = 0),
			  (t[7] = -r),
			  (t[8] = i),
			  t)
			: new _e(1, 0, 0, 0, i, -r, 0, r, i);
	}
	static fromRotationY(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return Z(t)
			? ((t[0] = i),
			  (t[1] = 0),
			  (t[2] = -r),
			  (t[3] = 0),
			  (t[4] = 1),
			  (t[5] = 0),
			  (t[6] = r),
			  (t[7] = 0),
			  (t[8] = i),
			  t)
			: new _e(i, 0, r, 0, 1, 0, -r, 0, i);
	}
	static fromRotationZstatic(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return Z(t)
			? ((t[0] = i),
			  (t[1] = r),
			  (t[2] = 0),
			  (t[3] = -r),
			  (t[4] = i),
			  (t[5] = 0),
			  (t[6] = 0),
			  (t[7] = 0),
			  (t[8] = 1),
			  t)
			: new _e(i, -r, 0, r, i, 0, 0, 0, 1);
	}
	toArray() {
		const e = [];
		return _e.toArray(this, e), e;
	}
	static toArray(e, t) {
		return Z(t)
			? ((t[0] = e[0]),
			  (t[1] = e[1]),
			  (t[2] = e[2]),
			  (t[3] = e[3]),
			  (t[4] = e[4]),
			  (t[5] = e[5]),
			  (t[6] = e[6]),
			  (t[7] = e[7]),
			  (t[8] = e[8]),
			  t)
			: [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];
	}
	static getElementIndex(e, t) {
		return 3 * e + t;
	}
	static getColumn(e, t, i) {
		const r = 3 * t,
			n = e[r],
			s = e[r + 1],
			a = e[r + 2];
		return (i.x = n), (i.y = s), (i.z = a), i;
	}
	static setColumn(e, t, i, r) {
		const n = 3 * t;
		return ((r = _e.clone(e, r))[n] = i.x), (r[n + 1] = i.y), (r[n + 2] = i.z), r;
	}
	static getRow(e, t, i) {
		const r = e[t],
			n = e[t + 3],
			s = e[t + 6];
		return (i.x = r), (i.y = n), (i.z = s), i;
	}
	static setRow(e, t, i, r) {
		return ((r = _e.clone(e, r))[t] = i.x), (r[t + 3] = i.y), (r[t + 6] = i.z), r;
	}
	static setScale(e, t, i) {
		const r = _e.getScale(e, Re),
			n = t.x / r.x,
			s = t.y / r.y,
			a = t.z / r.z;
		return (
			(i[0] = e[0] * n),
			(i[1] = e[1] * n),
			(i[2] = e[2] * n),
			(i[3] = e[3] * s),
			(i[4] = e[4] * s),
			(i[5] = e[5] * s),
			(i[6] = e[6] * a),
			(i[7] = e[7] * a),
			(i[8] = e[8] * a),
			i
		);
	}
	static getScale(e, t) {
		return (
			(t.x = ye.magnitude(ye.fromElements(e[0], e[1], e[2], Ue))),
			(t.y = ye.magnitude(ye.fromElements(e[3], e[4], e[5], Ue))),
			(t.z = ye.magnitude(ye.fromElements(e[6], e[7], e[8], Ue))),
			t
		);
	}
	static getMaximumScale(e) {
		return _e.getScale(e, Me), ye.maximumComponent(Me);
	}
	static setRotation(e, t, i) {
		const r = _e.getScale(e, Ce);
		return (
			(i[0] = t[0] * r.x),
			(i[1] = t[1] * r.x),
			(i[2] = t[2] * r.x),
			(i[3] = t[3] * r.y),
			(i[4] = t[4] * r.y),
			(i[5] = t[5] * r.y),
			(i[6] = t[6] * r.z),
			(i[7] = t[7] * r.z),
			(i[8] = t[8] * r.z),
			i
		);
	}
	static getRotation(e, t) {
		const i = _e.getScale(e, Le);
		return (
			(t[0] = e[0] / i.x),
			(t[1] = e[1] / i.x),
			(t[2] = e[2] / i.x),
			(t[3] = e[3] / i.y),
			(t[4] = e[4] / i.y),
			(t[5] = e[5] / i.y),
			(t[6] = e[6] / i.z),
			(t[7] = e[7] / i.z),
			(t[8] = e[8] / i.z),
			t
		);
	}
	static multiply(e, t, i) {
		const r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
			n = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
			s = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
			a = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
			o = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
			c = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
			l = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
			u = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
			h = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
		return (
			(i[0] = r),
			(i[1] = n),
			(i[2] = s),
			(i[3] = a),
			(i[4] = o),
			(i[5] = c),
			(i[6] = l),
			(i[7] = u),
			(i[8] = h),
			i
		);
	}
	static add(e, t, i) {
		return (
			(i[0] = e[0] + t[0]),
			(i[1] = e[1] + t[1]),
			(i[2] = e[2] + t[2]),
			(i[3] = e[3] + t[3]),
			(i[4] = e[4] + t[4]),
			(i[5] = e[5] + t[5]),
			(i[6] = e[6] + t[6]),
			(i[7] = e[7] + t[7]),
			(i[8] = e[8] + t[8]),
			i
		);
	}
	static subtract(e, t, i) {
		return (
			(i[0] = e[0] - t[0]),
			(i[1] = e[1] - t[1]),
			(i[2] = e[2] - t[2]),
			(i[3] = e[3] - t[3]),
			(i[4] = e[4] - t[4]),
			(i[5] = e[5] - t[5]),
			(i[6] = e[6] - t[6]),
			(i[7] = e[7] - t[7]),
			(i[8] = e[8] - t[8]),
			i
		);
	}
	static multiplyByVector(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * r + e[3] * n + e[6] * s,
			o = e[1] * r + e[4] * n + e[7] * s,
			c = e[2] * r + e[5] * n + e[8] * s;
		return (i.x = a), (i.y = o), (i.z = c), i;
	}
	static multiplyByScalar(e, t, i) {
		return (
			(i[0] = e[0] * t),
			(i[1] = e[1] * t),
			(i[2] = e[2] * t),
			(i[3] = e[3] * t),
			(i[4] = e[4] * t),
			(i[5] = e[5] * t),
			(i[6] = e[6] * t),
			(i[7] = e[7] * t),
			(i[8] = e[8] * t),
			i
		);
	}
	static multiplyByScale(e, t, i) {
		return (
			(i[0] = e[0] * t.x),
			(i[1] = e[1] * t.x),
			(i[2] = e[2] * t.x),
			(i[3] = e[3] * t.y),
			(i[4] = e[4] * t.y),
			(i[5] = e[5] * t.y),
			(i[6] = e[6] * t.z),
			(i[7] = e[7] * t.z),
			(i[8] = e[8] * t.z),
			i
		);
	}
	static negate(e, t) {
		return (
			(t[0] = -e[0]),
			(t[1] = -e[1]),
			(t[2] = -e[2]),
			(t[3] = -e[3]),
			(t[4] = -e[4]),
			(t[5] = -e[5]),
			(t[6] = -e[6]),
			(t[7] = -e[7]),
			(t[8] = -e[8]),
			t
		);
	}
	static transpose(e, t) {
		const i = e[0],
			r = e[3],
			n = e[6],
			s = e[1],
			a = e[4],
			o = e[7],
			c = e[2],
			l = e[5],
			u = e[8];
		return (
			(t[0] = i),
			(t[1] = r),
			(t[2] = n),
			(t[3] = s),
			(t[4] = a),
			(t[5] = o),
			(t[6] = c),
			(t[7] = l),
			(t[8] = u),
			t
		);
	}
	static abs(e, t) {
		return (
			(t[0] = Math.abs(e[0])),
			(t[1] = Math.abs(e[1])),
			(t[2] = Math.abs(e[2])),
			(t[3] = Math.abs(e[3])),
			(t[4] = Math.abs(e[4])),
			(t[5] = Math.abs(e[5])),
			(t[6] = Math.abs(e[6])),
			(t[7] = Math.abs(e[7])),
			(t[8] = Math.abs(e[8])),
			t
		);
	}
	static determinant(e) {
		const t = e[0],
			i = e[3],
			r = e[6],
			n = e[1],
			s = e[4],
			a = e[7],
			o = e[2],
			c = e[5],
			l = e[8];
		return t * (s * l - c * a) + n * (c * r - i * l) + o * (i * a - s * r);
	}
	static inverse(e, t) {
		const i = e[0],
			r = e[1],
			n = e[2],
			s = e[3],
			a = e[4],
			o = e[5],
			c = e[6],
			l = e[7],
			u = e[8],
			h = _e.determinant(e);
		if (Math.abs(h) <= J.EPSILON15) throw new Error("matrix is not invertible");
		(t[0] = a * u - l * o),
			(t[1] = l * n - r * u),
			(t[2] = r * o - a * n),
			(t[3] = c * o - s * u),
			(t[4] = i * u - c * n),
			(t[5] = s * n - i * o),
			(t[6] = s * l - c * a),
			(t[7] = c * r - i * l),
			(t[8] = i * a - s * r);
		const f = 1 / h;
		return _e.multiplyByScalar(t, f, t);
	}
	static inverseTranspose(e, t) {
		return _e.inverse(_e.transpose(e, Ie), t);
	}
	static equals(e, t) {
		return (
			e === t ||
			(Z(e) &&
				Z(t) &&
				e[0] === t[0] &&
				e[1] === t[1] &&
				e[2] === t[2] &&
				e[3] === t[3] &&
				e[4] === t[4] &&
				e[5] === t[5] &&
				e[6] === t[6] &&
				e[7] === t[7] &&
				e[8] === t[8])
		);
	}
	static equalsEpsilon(e, t, i = 0) {
		return (
			(i = W(i, 0)),
			e === t ||
				(Z(e) &&
					Z(t) &&
					Math.abs(e[0] - t[0]) <= i &&
					Math.abs(e[1] - t[1]) <= i &&
					Math.abs(e[2] - t[2]) <= i &&
					Math.abs(e[3] - t[3]) <= i &&
					Math.abs(e[4] - t[4]) <= i &&
					Math.abs(e[5] - t[5]) <= i &&
					Math.abs(e[6] - t[6]) <= i &&
					Math.abs(e[7] - t[7]) <= i &&
					Math.abs(e[8] - t[8]) <= i)
		);
	}
	clone(e) {
		return _e.clone(this, e);
	}
	equals(e) {
		return _e.equals(this, e);
	}
	equalsArray(e, t, i) {
		return (
			e[0] === t[i] &&
			e[1] === t[i + 1] &&
			e[2] === t[i + 2] &&
			e[3] === t[i + 3] &&
			e[4] === t[i + 4] &&
			e[5] === t[i + 5] &&
			e[6] === t[i + 6] &&
			e[7] === t[i + 7] &&
			e[8] === t[i + 8]
		);
	}
	equalsEpsilon(e, t) {
		return _e.equalsEpsilon(this, e, t);
	}
	toString() {
		return `(${this[0]}, ${this[3]}, ${this[6]})\n(${this[1]}, ${this[4]}, ${this[7]})\n(${this[2]}, ${this[5]}, ${this[8]})`;
	}
}
(_e.IDENTITY = Object.freeze(new _e(1, 0, 0, 0, 1, 0, 0, 0, 1))),
	(_e.ZERO = Object.freeze(new _e(0, 0, 0, 0, 0, 0, 0, 0, 0)));
const Re = new ye();
new ye();
const Ue = new ye(),
	Me = new ye(),
	Ce = new ye(),
	Le = new ye(),
	Ie = new _e();
class ze {
	constructor(e = 0, t = 0, i = 0, r = 0) {
		(this.x = e), (this.y = t), (this.z = i), (this.w = r);
	}
	set(e, t, i, r) {
		(this.x = e), (this.y = t), (this.z = i), (this.w = r);
	}
	toArray() {
		return [this.x, this.y, this.z, this.w];
	}
	clone(e) {
		return ze.clone(this, e);
	}
	equals(e) {
		return ze.equals(this, e);
	}
	equalsEpsilon(e, t = 0, i = 0) {
		return ze.equalsEpsilon(this, e, t, i);
	}
	toString() {
		return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
	}
	static fromElements(e, t, i, r, n) {
		return Z(n) ? ((n.x = e), (n.y = t), (n.z = i), (n.w = r), n) : new ze(e, t, i, r);
	}
	static clone(e, t) {
		if (Z(e)) return Z(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t) : new ze(e.x, e.y, e.z, e.w);
	}
	static maximumComponent(e) {
		return Math.max(e.x, e.y, e.z, e.w);
	}
	static minimumComponent(e) {
		return Math.min(e.x, e.y, e.z, e.w);
	}
	static minimumByComponent(e, t, i) {
		return (
			(i.x = Math.min(e.x, t.x)),
			(i.y = Math.min(e.y, t.y)),
			(i.z = Math.min(e.z, t.z)),
			(i.w = Math.min(e.w, t.w)),
			i
		);
	}
	static maximumByComponent(e, t, i) {
		return (
			(i.x = Math.max(e.x, t.x)),
			(i.y = Math.max(e.y, t.y)),
			(i.z = Math.max(e.z, t.z)),
			(i.w = Math.max(e.w, t.w)),
			i
		);
	}
	static clamp(e, t, i, r) {
		const n = J.clamp(e.x, t.x, i.x),
			s = J.clamp(e.y, t.y, i.y),
			a = J.clamp(e.z, t.z, i.z),
			o = J.clamp(e.w, t.w, i.w);
		return (r.x = n), (r.y = s), (r.z = a), (r.w = o), r;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
	}
	static magnitude(e) {
		return Math.sqrt(ze.magnitudeSquared(e));
	}
	static distance(e, t) {
		return ze.subtract(e, t, Ne), ze.magnitude(Ne);
	}
	static distanceSquared(e, t) {
		return ze.subtract(e, t, Ne), ze.magnitudeSquared(Ne);
	}
	static normalize(e, t) {
		const i = ze.magnitude(e);
		if (
			((t.x = e.x / i),
			(t.y = e.y / i),
			(t.z = e.z / i),
			(t.w = e.w / i),
			isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w))
		)
			throw new Error("normalized result is not a number");
		return t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
	}
	static multiplyComponents(e, t, i) {
		return (i.x = e.x * t.x), (i.y = e.y * t.y), (i.z = e.z * t.z), (i.w = e.w * t.w), i;
	}
	static divideComponents(e, t, i) {
		return (i.x = e.x / t.x), (i.y = e.y / t.y), (i.z = e.z / t.z), (i.w = e.w / t.w), i;
	}
	static add(e, t, i) {
		return (i.x = e.x + t.x), (i.y = e.y + t.y), (i.z = e.z + t.z), (i.w = e.w + t.w), i;
	}
	static subtract(e, t, i) {
		return (i.x = e.x - t.x), (i.y = e.y - t.y), (i.z = e.z - t.z), (i.w = e.w - t.w), i;
	}
	static multiplyByScalar(e, t, i) {
		return (i.x = e.x * t), (i.y = e.y * t), (i.z = e.z * t), (i.w = e.w * t), i;
	}
	static divideByScalar(e, t, i) {
		return (i.x = e.x / t), (i.y = e.y / t), (i.z = e.z / t), (i.w = e.w / t), i;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
	}
	static abs(e, t) {
		return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), (t.w = Math.abs(e.w)), t;
	}
	static lerp(e, t, i, r) {
		return ze.multiplyByScalar(t, i, Ae), (r = ze.multiplyByScalar(e, 1 - i, r)), ze.add(Ae, r, r);
	}
	static equals(e, t) {
		return e === t || (Z(e) && Z(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w);
	}
	static equalsArray(e, t, i) {
		return e.x === t[i] && e.y === t[i + 1] && e.z === t[i + 2] && e.w === t[i + 3];
	}
	static equalsEpsilon(e, t, i = 0, r = 0) {
		return (
			e === t ||
			(Z(e) &&
				Z(t) &&
				J.equalsEpsilon(e.x, t.x, i, r) &&
				J.equalsEpsilon(e.y, t.y, i, r) &&
				J.equalsEpsilon(e.z, t.z, i, r) &&
				J.equalsEpsilon(e.w, t.w, i, r))
		);
	}
}
(ze.ZERO = Object.freeze(new ze(0, 0, 0, 0))),
	(ze.ONE = Object.freeze(new ze(1, 1, 1, 1))),
	(ze.UNIT_X = Object.freeze(new ze(1, 0, 0, 0))),
	(ze.UNIT_Y = Object.freeze(new ze(0, 1, 0, 0))),
	(ze.UNIT_Z = Object.freeze(new ze(0, 0, 1, 0))),
	(ze.UNIT_W = Object.freeze(new ze(0, 0, 0, 1)));
const De = new Float32Array(1);
new Uint8Array(De.buffer);
const Oe = new Uint32Array([287454020]);
new Uint8Array(Oe.buffer)[0];
const Ne = new ze(),
	Ae = new ze();
new ze();
class Pe {
	constructor(
		e = 0,
		t = 0,
		i = 0,
		r = 0,
		n = 0,
		s = 0,
		a = 0,
		o = 0,
		c = 0,
		l = 0,
		u = 0,
		h = 0,
		f = 0,
		m = 0,
		d = 0,
		p = 0
	) {
		(this[0] = e),
			(this[1] = n),
			(this[2] = c),
			(this[3] = f),
			(this[4] = t),
			(this[5] = s),
			(this[6] = l),
			(this[7] = m),
			(this[8] = i),
			(this[9] = a),
			(this[10] = u),
			(this[11] = d),
			(this[12] = r),
			(this[13] = o),
			(this[14] = h),
			(this[15] = p);
	}
	clone(e) {
		return Pe.clone(this, e);
	}
	equals(e) {
		return Pe.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return Pe.equalsEpsilon(this, e, t);
	}
	lookAt(e, t, i) {
		const r = this;
		return (
			ye.subtract(e, t, Ze),
			0 === Ze.length() && (Ze.z = 1),
			Ze.normalize(),
			ye.cross(i, Ze, Ye),
			0 === Ye.length() &&
				(1 === Math.abs(i.z) ? (Ze.x += 1e-4) : (Ze.z += 1e-4), Ze.normalize(), ye.cross(i, Ze, Ye)),
			Ye.normalize(),
			ye.cross(Ze, Ye, We),
			(r[0] = Ye.x),
			(r[4] = We.x),
			(r[8] = Ze.x),
			(r[1] = Ye.y),
			(r[5] = We.y),
			(r[9] = Ze.y),
			(r[2] = Ye.z),
			(r[6] = We.z),
			(r[10] = Ze.z),
			this
		);
	}
	toString() {
		return `(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`;
	}
	static clone(e, t) {
		if (Z(e))
			return Z(t)
				? ((t[0] = e[0]),
				  (t[1] = e[1]),
				  (t[2] = e[2]),
				  (t[3] = e[3]),
				  (t[4] = e[4]),
				  (t[5] = e[5]),
				  (t[6] = e[6]),
				  (t[7] = e[7]),
				  (t[8] = e[8]),
				  (t[9] = e[9]),
				  (t[10] = e[10]),
				  (t[11] = e[11]),
				  (t[12] = e[12]),
				  (t[13] = e[13]),
				  (t[14] = e[14]),
				  (t[15] = e[15]),
				  t)
				: new Pe(
						e[0],
						e[4],
						e[8],
						e[12],
						e[1],
						e[5],
						e[9],
						e[13],
						e[2],
						e[6],
						e[10],
						e[14],
						e[3],
						e[7],
						e[11],
						e[15]
				  );
	}
	static fromColumnMajorArray(e, t) {
		return Pe.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return Z(t)
			? ((t[0] = e[0]),
			  (t[1] = e[4]),
			  (t[2] = e[8]),
			  (t[3] = e[12]),
			  (t[4] = e[1]),
			  (t[5] = e[5]),
			  (t[6] = e[9]),
			  (t[7] = e[13]),
			  (t[8] = e[2]),
			  (t[9] = e[6]),
			  (t[10] = e[10]),
			  (t[11] = e[14]),
			  (t[12] = e[3]),
			  (t[13] = e[7]),
			  (t[14] = e[11]),
			  (t[15] = e[15]),
			  t)
			: new Pe(
					e[0],
					e[1],
					e[2],
					e[3],
					e[4],
					e[5],
					e[6],
					e[7],
					e[8],
					e[9],
					e[10],
					e[11],
					e[12],
					e[13],
					e[14],
					e[15]
			  );
	}
	static fromRotationTranslation(e, t, i) {
		return (
			(t = W(t, ye.ZERO)),
			Z(i)
				? ((i[0] = e[0]),
				  (i[1] = e[1]),
				  (i[2] = e[2]),
				  (i[3] = 0),
				  (i[4] = e[3]),
				  (i[5] = e[4]),
				  (i[6] = e[5]),
				  (i[7] = 0),
				  (i[8] = e[6]),
				  (i[9] = e[7]),
				  (i[10] = e[8]),
				  (i[11] = 0),
				  (i[12] = t.x),
				  (i[13] = t.y),
				  (i[14] = t.z),
				  (i[15] = 1),
				  i)
				: new Pe(e[0], e[3], e[6], t.x, e[1], e[4], e[7], t.y, e[2], e[5], e[8], t.z, 0, 0, 0, 1)
		);
	}
	static fromTranslationQuaternionRotationScale(e, t, i, r) {
		Z(r) || (r = new Pe());
		const n = i.x,
			s = i.y,
			a = i.z,
			o = t.x * t.x,
			c = t.x * t.y,
			l = t.x * t.z,
			u = t.x * t.w,
			h = t.y * t.y,
			f = t.y * t.z,
			m = t.y * t.w,
			d = t.z * t.z,
			p = t.z * t.w,
			g = t.w * t.w,
			x = o - h - d + g,
			v = 2 * (c - p),
			y = 2 * (l + m),
			b = 2 * (c + p),
			S = -o + h - d + g,
			E = 2 * (f - u),
			T = 2 * (l - m),
			w = 2 * (f + u),
			_ = -o - h + d + g;
		return (
			(r[0] = x * n),
			(r[1] = b * n),
			(r[2] = T * n),
			(r[3] = 0),
			(r[4] = v * s),
			(r[5] = S * s),
			(r[6] = w * s),
			(r[7] = 0),
			(r[8] = y * a),
			(r[9] = E * a),
			(r[10] = _ * a),
			(r[11] = 0),
			(r[12] = e.x),
			(r[13] = e.y),
			(r[14] = e.z),
			(r[15] = 1),
			r
		);
	}
	static fromTranslationRotationScale(e, t) {
		return Pe.fromTranslationQuaternionRotationScale(e.translation, e.rotation, e.scale, t);
	}
	static fromTranslation(e, t) {
		return Pe.fromRotationTranslation(_e.IDENTITY, e, t);
	}
	static fromScale(e, t) {
		return Z(t)
			? ((t[0] = e.x),
			  (t[1] = 0),
			  (t[2] = 0),
			  (t[3] = 0),
			  (t[4] = 0),
			  (t[5] = e.y),
			  (t[6] = 0),
			  (t[7] = 0),
			  (t[8] = 0),
			  (t[9] = 0),
			  (t[10] = e.z),
			  (t[11] = 0),
			  (t[12] = 0),
			  (t[13] = 0),
			  (t[14] = 0),
			  (t[15] = 1),
			  t)
			: new Pe(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1);
	}
	static fromRotation(e, t) {
		return (
			Z(t) || (t = new Pe()),
			(t[0] = e[0]),
			(t[1] = e[1]),
			(t[2] = e[2]),
			(t[3] = 0),
			(t[4] = e[3]),
			(t[5] = e[4]),
			(t[6] = e[5]),
			(t[7] = 0),
			(t[8] = e[6]),
			(t[9] = e[7]),
			(t[10] = e[8]),
			(t[11] = 0),
			(t[12] = 0),
			(t[13] = 0),
			(t[14] = 0),
			(t[15] = 1),
			t
		);
	}
	static makePerspective(e, t, i, r, n, s) {
		const a = new Pe(),
			o = (2 * n) / (t - e),
			c = (2 * n) / (i - r),
			l = (t + e) / (t - e),
			u = (i + r) / (i - r),
			h = -s / (s - n),
			f = (-s * n) / (s - n);
		return (
			(a[0] = o),
			(a[4] = 0),
			(a[8] = l),
			(a[12] = 0),
			(a[1] = 0),
			(a[5] = c),
			(a[9] = u),
			(a[13] = 0),
			(a[2] = 0),
			(a[6] = 0),
			(a[10] = h),
			(a[14] = f),
			(a[3] = 0),
			(a[7] = 0),
			(a[11] = -1),
			(a[15] = 0),
			a
		);
	}
	static makeOrthographic(e, t, i, r, n, s) {
		const a = new Pe(),
			o = 1 / (t - e),
			c = 1 / (i - r),
			l = 1 / (s - n),
			u = (t + e) * o,
			h = (i + r) * c,
			f = n * l;
		return (
			(a[0] = 2 * o),
			(a[4] = 0),
			(a[8] = 0),
			(a[12] = -u),
			(a[1] = 0),
			(a[5] = 2 * c),
			(a[9] = 0),
			(a[13] = -h),
			(a[2] = 0),
			(a[6] = 0),
			(a[10] = -1 * l),
			(a[14] = -f),
			(a[3] = 0),
			(a[7] = 0),
			(a[11] = 0),
			(a[15] = 1),
			a
		);
	}
	toArray() {
		const e = [];
		return Pe.toArray(this, e), e;
	}
	static toArray(e, t) {
		return Z(t)
			? ((t[0] = e[0]),
			  (t[1] = e[1]),
			  (t[2] = e[2]),
			  (t[3] = e[3]),
			  (t[4] = e[4]),
			  (t[5] = e[5]),
			  (t[6] = e[6]),
			  (t[7] = e[7]),
			  (t[8] = e[8]),
			  (t[9] = e[9]),
			  (t[10] = e[10]),
			  (t[11] = e[11]),
			  (t[12] = e[12]),
			  (t[13] = e[13]),
			  (t[14] = e[14]),
			  (t[15] = e[15]),
			  t)
			: [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]];
	}
	static getElementIndex(e, t) {
		return 4 * e + t;
	}
	static getColumn(e, t, i) {
		const r = 4 * t,
			n = e[r],
			s = e[r + 1],
			a = e[r + 2],
			o = e[r + 3];
		return (i.x = n), (i.y = s), (i.z = a), (i.w = o), i;
	}
	static setColumn(e, t, i, r) {
		const n = 4 * t;
		return ((r = Pe.clone(e, r))[n] = i.x), (r[n + 1] = i.y), (r[n + 2] = i.z), (r[n + 3] = i.w), r;
	}
	static getRow(e, t, i) {
		const r = e[t],
			n = e[t + 4],
			s = e[t + 8],
			a = e[t + 12];
		return (i.x = r), (i.y = n), (i.z = s), (i.w = a), i;
	}
	static setRow(e, t, i, r) {
		return ((r = Pe.clone(e, r))[t] = i.x), (r[t + 4] = i.y), (r[t + 8] = i.z), (r[t + 12] = i.w), r;
	}
	static setTranslation(e, t, i) {
		return (
			(i[0] = e[0]),
			(i[1] = e[1]),
			(i[2] = e[2]),
			(i[3] = e[3]),
			(i[4] = e[4]),
			(i[5] = e[5]),
			(i[6] = e[6]),
			(i[7] = e[7]),
			(i[8] = e[8]),
			(i[9] = e[9]),
			(i[10] = e[10]),
			(i[11] = e[11]),
			(i[12] = t.x),
			(i[13] = t.y),
			(i[14] = t.z),
			(i[15] = e[15]),
			i
		);
	}
	static setScale(e, t, i) {
		const r = Pe.getScale(e, Ve),
			n = t.x / r.x,
			s = t.y / r.y,
			a = t.z / r.z;
		return (
			(i[0] = e[0] * n),
			(i[1] = e[1] * n),
			(i[2] = e[2] * n),
			(i[3] = e[3]),
			(i[4] = e[4] * s),
			(i[5] = e[5] * s),
			(i[6] = e[6] * s),
			(i[7] = e[7]),
			(i[8] = e[8] * a),
			(i[9] = e[9] * a),
			(i[10] = e[10] * a),
			(i[11] = e[11]),
			(i[12] = e[12]),
			(i[13] = e[13]),
			(i[14] = e[14]),
			(i[15] = e[15]),
			i
		);
	}
	static getScale(e, t) {
		return (
			(t.x = ye.magnitude(ye.fromElements(e[0], e[1], e[2], Fe))),
			(t.y = ye.magnitude(ye.fromElements(e[4], e[5], e[6], Fe))),
			(t.z = ye.magnitude(ye.fromElements(e[8], e[9], e[10], Fe))),
			t
		);
	}
	static getMaximumScale(e) {
		return Pe.getScale(e, $e), ye.maximumComponent($e);
	}
	static setRotation(e, t, i) {
		const r = Pe.getScale(e, Ge);
		return (
			(i[0] = t[0] * r.x),
			(i[1] = t[1] * r.x),
			(i[2] = t[2] * r.x),
			(i[3] = e[3]),
			(i[4] = t[3] * r.y),
			(i[5] = t[4] * r.y),
			(i[6] = t[5] * r.y),
			(i[7] = e[7]),
			(i[8] = t[6] * r.z),
			(i[9] = t[7] * r.z),
			(i[10] = t[8] * r.z),
			(i[11] = e[11]),
			(i[12] = e[12]),
			(i[13] = e[13]),
			(i[14] = e[14]),
			(i[15] = e[15]),
			i
		);
	}
	static getRotation(e, t) {
		const i = Pe.getScale(e, qe);
		return (
			(t[0] = e[0] / i.x),
			(t[1] = e[1] / i.x),
			(t[2] = e[2] / i.x),
			(t[3] = e[4] / i.y),
			(t[4] = e[5] / i.y),
			(t[5] = e[6] / i.y),
			(t[6] = e[8] / i.z),
			(t[7] = e[9] / i.z),
			(t[8] = e[10] / i.z),
			t
		);
	}
	static multiply(e, t, i) {
		const r = e[0],
			n = e[1],
			s = e[2],
			a = e[3],
			o = e[4],
			c = e[5],
			l = e[6],
			u = e[7],
			h = e[8],
			f = e[9],
			m = e[10],
			d = e[11],
			p = e[12],
			g = e[13],
			x = e[14],
			v = e[15],
			y = t[0],
			b = t[1],
			S = t[2],
			E = t[3],
			T = t[4],
			w = t[5],
			_ = t[6],
			R = t[7],
			U = t[8],
			M = t[9],
			C = t[10],
			L = t[11],
			I = t[12],
			z = t[13],
			D = t[14],
			O = t[15],
			N = r * y + o * b + h * S + p * E,
			A = n * y + c * b + f * S + g * E,
			P = s * y + l * b + m * S + x * E,
			B = a * y + u * b + d * S + v * E,
			V = r * T + o * w + h * _ + p * R,
			F = n * T + c * w + f * _ + g * R,
			$ = s * T + l * w + m * _ + x * R,
			G = a * T + u * w + d * _ + v * R,
			q = r * U + o * M + h * C + p * L,
			k = n * U + c * M + f * C + g * L,
			X = s * U + l * M + m * C + x * L,
			j = a * U + u * M + d * C + v * L,
			H = r * I + o * z + h * D + p * O,
			Y = n * I + c * z + f * D + g * O,
			W = s * I + l * z + m * D + x * O,
			Z = a * I + u * z + d * D + v * O;
		return (
			(i[0] = N),
			(i[1] = A),
			(i[2] = P),
			(i[3] = B),
			(i[4] = V),
			(i[5] = F),
			(i[6] = $),
			(i[7] = G),
			(i[8] = q),
			(i[9] = k),
			(i[10] = X),
			(i[11] = j),
			(i[12] = H),
			(i[13] = Y),
			(i[14] = W),
			(i[15] = Z),
			i
		);
	}
	static add(e, t, i) {
		return (
			(i[0] = e[0] + t[0]),
			(i[1] = e[1] + t[1]),
			(i[2] = e[2] + t[2]),
			(i[3] = e[3] + t[3]),
			(i[4] = e[4] + t[4]),
			(i[5] = e[5] + t[5]),
			(i[6] = e[6] + t[6]),
			(i[7] = e[7] + t[7]),
			(i[8] = e[8] + t[8]),
			(i[9] = e[9] + t[9]),
			(i[10] = e[10] + t[10]),
			(i[11] = e[11] + t[11]),
			(i[12] = e[12] + t[12]),
			(i[13] = e[13] + t[13]),
			(i[14] = e[14] + t[14]),
			(i[15] = e[15] + t[15]),
			i
		);
	}
	static subtract(e, t, i) {
		return (
			(i[0] = e[0] - t[0]),
			(i[1] = e[1] - t[1]),
			(i[2] = e[2] - t[2]),
			(i[3] = e[3] - t[3]),
			(i[4] = e[4] - t[4]),
			(i[5] = e[5] - t[5]),
			(i[6] = e[6] - t[6]),
			(i[7] = e[7] - t[7]),
			(i[8] = e[8] - t[8]),
			(i[9] = e[9] - t[9]),
			(i[10] = e[10] - t[10]),
			(i[11] = e[11] - t[11]),
			(i[12] = e[12] - t[12]),
			(i[13] = e[13] - t[13]),
			(i[14] = e[14] - t[14]),
			(i[15] = e[15] - t[15]),
			i
		);
	}
	static multiplyTransformation(e, t, i) {
		const r = e[0],
			n = e[1],
			s = e[2],
			a = e[4],
			o = e[5],
			c = e[6],
			l = e[8],
			u = e[9],
			h = e[10],
			f = e[12],
			m = e[13],
			d = e[14],
			p = t[0],
			g = t[1],
			x = t[2],
			v = t[4],
			y = t[5],
			b = t[6],
			S = t[8],
			E = t[9],
			T = t[10],
			w = t[12],
			_ = t[13],
			R = t[14],
			U = r * p + a * g + l * x,
			M = n * p + o * g + u * x,
			C = s * p + c * g + h * x,
			L = r * v + a * y + l * b,
			I = n * v + o * y + u * b,
			z = s * v + c * y + h * b,
			D = r * S + a * E + l * T,
			O = n * S + o * E + u * T,
			N = s * S + c * E + h * T,
			A = r * w + a * _ + l * R + f,
			P = n * w + o * _ + u * R + m,
			B = s * w + c * _ + h * R + d;
		return (
			(i[0] = U),
			(i[1] = M),
			(i[2] = C),
			(i[3] = 0),
			(i[4] = L),
			(i[5] = I),
			(i[6] = z),
			(i[7] = 0),
			(i[8] = D),
			(i[9] = O),
			(i[10] = N),
			(i[11] = 0),
			(i[12] = A),
			(i[13] = P),
			(i[14] = B),
			(i[15] = 1),
			i
		);
	}
	static multiplyByMatrix3(e, t, i) {
		const r = e[0],
			n = e[1],
			s = e[2],
			a = e[4],
			o = e[5],
			c = e[6],
			l = e[8],
			u = e[9],
			h = e[10],
			f = t[0],
			m = t[1],
			d = t[2],
			p = t[3],
			g = t[4],
			x = t[5],
			v = t[6],
			y = t[7],
			b = t[8],
			S = r * f + a * m + l * d,
			E = n * f + o * m + u * d,
			T = s * f + c * m + h * d,
			w = r * p + a * g + l * x,
			_ = n * p + o * g + u * x,
			R = s * p + c * g + h * x,
			U = r * v + a * y + l * b,
			M = n * v + o * y + u * b,
			C = s * v + c * y + h * b;
		return (
			(i[0] = S),
			(i[1] = E),
			(i[2] = T),
			(i[3] = 0),
			(i[4] = w),
			(i[5] = _),
			(i[6] = R),
			(i[7] = 0),
			(i[8] = U),
			(i[9] = M),
			(i[10] = C),
			(i[11] = 0),
			(i[12] = e[12]),
			(i[13] = e[13]),
			(i[14] = e[14]),
			(i[15] = e[15]),
			i
		);
	}
	static multiplyByTranslation(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = r * e[0] + n * e[4] + s * e[8] + e[12],
			o = r * e[1] + n * e[5] + s * e[9] + e[13],
			c = r * e[2] + n * e[6] + s * e[10] + e[14];
		return (
			(i[0] = e[0]),
			(i[1] = e[1]),
			(i[2] = e[2]),
			(i[3] = e[3]),
			(i[4] = e[4]),
			(i[5] = e[5]),
			(i[6] = e[6]),
			(i[7] = e[7]),
			(i[8] = e[8]),
			(i[9] = e[9]),
			(i[10] = e[10]),
			(i[11] = e[11]),
			(i[12] = a),
			(i[13] = o),
			(i[14] = c),
			(i[15] = e[15]),
			i
		);
	}
	static multiplyByScale(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z;
		return 1 === r && 1 === n && 1 === s
			? Pe.clone(e, i)
			: ((i[0] = r * e[0]),
			  (i[1] = r * e[1]),
			  (i[2] = r * e[2]),
			  (i[3] = e[3]),
			  (i[4] = n * e[4]),
			  (i[5] = n * e[5]),
			  (i[6] = n * e[6]),
			  (i[7] = e[7]),
			  (i[8] = s * e[8]),
			  (i[9] = s * e[9]),
			  (i[10] = s * e[10]),
			  (i[11] = e[11]),
			  (i[12] = e[12]),
			  (i[13] = e[13]),
			  (i[14] = e[14]),
			  (i[15] = e[15]),
			  i);
	}
	static multiplyByUniformScale(e, t, i) {
		return (
			(i[0] = e[0] * t),
			(i[1] = e[1] * t),
			(i[2] = e[2] * t),
			(i[3] = e[3]),
			(i[4] = e[4] * t),
			(i[5] = e[5] * t),
			(i[6] = e[6] * t),
			(i[7] = e[7]),
			(i[8] = e[8] * t),
			(i[9] = e[9] * t),
			(i[10] = e[10] * t),
			(i[11] = e[11]),
			(i[12] = e[12]),
			(i[13] = e[13]),
			(i[14] = e[14]),
			(i[15] = e[15]),
			i
		);
	}
	static multiplyByVector(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = t.w,
			o = e[0] * r + e[4] * n + e[8] * s + e[12] * a,
			c = e[1] * r + e[5] * n + e[9] * s + e[13] * a,
			l = e[2] * r + e[6] * n + e[10] * s + e[14] * a,
			u = e[3] * r + e[7] * n + e[11] * s + e[15] * a;
		return (i.x = o), (i.y = c), (i.z = l), (i.w = u), i;
	}
	static multiplyByPointAsVector(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * r + e[4] * n + e[8] * s,
			o = e[1] * r + e[5] * n + e[9] * s,
			c = e[2] * r + e[6] * n + e[10] * s;
		return (i.x = a), (i.y = o), (i.z = c), i;
	}
	static multiplyByPoint(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * r + e[4] * n + e[8] * s + e[12],
			o = e[1] * r + e[5] * n + e[9] * s + e[13],
			c = e[2] * r + e[6] * n + e[10] * s + e[14];
		return (i.x = a), (i.y = o), (i.z = c), i;
	}
	static multiplyByScalar(e, t, i) {
		return (
			(i[0] = e[0] * t),
			(i[1] = e[1] * t),
			(i[2] = e[2] * t),
			(i[3] = e[3] * t),
			(i[4] = e[4] * t),
			(i[5] = e[5] * t),
			(i[6] = e[6] * t),
			(i[7] = e[7] * t),
			(i[8] = e[8] * t),
			(i[9] = e[9] * t),
			(i[10] = e[10] * t),
			(i[11] = e[11] * t),
			(i[12] = e[12] * t),
			(i[13] = e[13] * t),
			(i[14] = e[14] * t),
			(i[15] = e[15] * t),
			i
		);
	}
	static negate(e, t) {
		return (
			(t[0] = -e[0]),
			(t[1] = -e[1]),
			(t[2] = -e[2]),
			(t[3] = -e[3]),
			(t[4] = -e[4]),
			(t[5] = -e[5]),
			(t[6] = -e[6]),
			(t[7] = -e[7]),
			(t[8] = -e[8]),
			(t[9] = -e[9]),
			(t[10] = -e[10]),
			(t[11] = -e[11]),
			(t[12] = -e[12]),
			(t[13] = -e[13]),
			(t[14] = -e[14]),
			(t[15] = -e[15]),
			t
		);
	}
	static transpose(e, t) {
		const i = e[1],
			r = e[2],
			n = e[3],
			s = e[6],
			a = e[7],
			o = e[11];
		return (
			(t[0] = e[0]),
			(t[1] = e[4]),
			(t[2] = e[8]),
			(t[3] = e[12]),
			(t[4] = i),
			(t[5] = e[5]),
			(t[6] = e[9]),
			(t[7] = e[13]),
			(t[8] = r),
			(t[9] = s),
			(t[10] = e[10]),
			(t[11] = e[14]),
			(t[12] = n),
			(t[13] = a),
			(t[14] = o),
			(t[15] = e[15]),
			t
		);
	}
	static abs(e, t) {
		return (
			(t[0] = Math.abs(e[0])),
			(t[1] = Math.abs(e[1])),
			(t[2] = Math.abs(e[2])),
			(t[3] = Math.abs(e[3])),
			(t[4] = Math.abs(e[4])),
			(t[5] = Math.abs(e[5])),
			(t[6] = Math.abs(e[6])),
			(t[7] = Math.abs(e[7])),
			(t[8] = Math.abs(e[8])),
			(t[9] = Math.abs(e[9])),
			(t[10] = Math.abs(e[10])),
			(t[11] = Math.abs(e[11])),
			(t[12] = Math.abs(e[12])),
			(t[13] = Math.abs(e[13])),
			(t[14] = Math.abs(e[14])),
			(t[15] = Math.abs(e[15])),
			t
		);
	}
	static equals(e, t) {
		return (
			e === t ||
			(Z(e) &&
				Z(t) &&
				e[12] === t[12] &&
				e[13] === t[13] &&
				e[14] === t[14] &&
				e[0] === t[0] &&
				e[1] === t[1] &&
				e[2] === t[2] &&
				e[4] === t[4] &&
				e[5] === t[5] &&
				e[6] === t[6] &&
				e[8] === t[8] &&
				e[9] === t[9] &&
				e[10] === t[10] &&
				e[3] === t[3] &&
				e[7] === t[7] &&
				e[11] === t[11] &&
				e[15] === t[15])
		);
	}
	static equalsEpsilon(e, t, i) {
		return (
			(i = W(i, 0)),
			e === t ||
				(Z(e) &&
					Z(t) &&
					Math.abs(e[0] - t[0]) <= i &&
					Math.abs(e[1] - t[1]) <= i &&
					Math.abs(e[2] - t[2]) <= i &&
					Math.abs(e[3] - t[3]) <= i &&
					Math.abs(e[4] - t[4]) <= i &&
					Math.abs(e[5] - t[5]) <= i &&
					Math.abs(e[6] - t[6]) <= i &&
					Math.abs(e[7] - t[7]) <= i &&
					Math.abs(e[8] - t[8]) <= i &&
					Math.abs(e[9] - t[9]) <= i &&
					Math.abs(e[10] - t[10]) <= i &&
					Math.abs(e[11] - t[11]) <= i &&
					Math.abs(e[12] - t[12]) <= i &&
					Math.abs(e[13] - t[13]) <= i &&
					Math.abs(e[14] - t[14]) <= i &&
					Math.abs(e[15] - t[15]) <= i)
		);
	}
	static getTranslation(e, t) {
		return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t;
	}
	static getMatrix3(e, t) {
		return (
			(t[0] = e[0]),
			(t[1] = e[1]),
			(t[2] = e[2]),
			(t[3] = e[4]),
			(t[4] = e[5]),
			(t[5] = e[6]),
			(t[6] = e[8]),
			(t[7] = e[9]),
			(t[8] = e[10]),
			t
		);
	}
	static inverse(e, t) {
		const i = e[0],
			r = e[4],
			n = e[8],
			s = e[12],
			a = e[1],
			o = e[5],
			c = e[9],
			l = e[13],
			u = e[2],
			h = e[6],
			f = e[10],
			m = e[14],
			d = e[3],
			p = e[7],
			g = e[11],
			x = e[15];
		let v = f * x,
			y = m * g,
			b = h * x,
			S = m * p,
			E = h * g,
			T = f * p,
			w = u * x,
			_ = m * d,
			R = u * g,
			U = f * d,
			M = u * p,
			C = h * d;
		const L = v * o + S * c + E * l - (y * o + b * c + T * l),
			I = y * a + w * c + U * l - (v * a + _ * c + R * l),
			z = b * a + _ * o + M * l - (S * a + w * o + C * l),
			D = T * a + R * o + C * c - (E * a + U * o + M * c),
			O = y * r + b * n + T * s - (v * r + S * n + E * s),
			N = v * i + _ * n + R * s - (y * i + w * n + U * s),
			A = S * i + w * r + C * s - (b * i + _ * r + M * s),
			P = E * i + U * r + M * n - (T * i + R * r + C * n);
		(v = n * l),
			(y = s * c),
			(b = r * l),
			(S = s * o),
			(E = r * c),
			(T = n * o),
			(w = i * l),
			(_ = s * a),
			(R = i * c),
			(U = n * a),
			(M = i * o),
			(C = r * a);
		const B = v * p + S * g + E * x - (y * p + b * g + T * x),
			V = y * d + w * g + U * x - (v * d + _ * g + R * x),
			F = b * d + _ * p + M * x - (S * d + w * p + C * x),
			$ = T * d + R * p + C * g - (E * d + U * p + M * g),
			G = b * f + T * m + y * h - (E * m + v * h + S * f),
			q = R * m + v * u + _ * f - (w * f + U * m + y * u),
			k = w * h + C * m + S * u - (M * m + b * u + _ * h),
			X = M * f + E * u + U * h - (R * h + C * f + T * u);
		let j = i * L + r * I + n * z + s * D;
		if (Math.abs(j) < J.EPSILON21) {
			if (_e.equalsEpsilon(Pe.getMatrix3(e, ke), Xe, J.EPSILON7) && ze.equals(Pe.getRow(e, 3, je), He))
				return (
					(t[0] = 0),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 0),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 0),
					(t[11] = 0),
					(t[12] = -e[12]),
					(t[13] = -e[13]),
					(t[14] = -e[14]),
					(t[15] = 1),
					t
				);
			throw new Error("matrix is not invertible because its determinate is zero.");
		}
		return (
			(j = 1 / j),
			(t[0] = L * j),
			(t[1] = I * j),
			(t[2] = z * j),
			(t[3] = D * j),
			(t[4] = O * j),
			(t[5] = N * j),
			(t[6] = A * j),
			(t[7] = P * j),
			(t[8] = B * j),
			(t[9] = V * j),
			(t[10] = F * j),
			(t[11] = $ * j),
			(t[12] = G * j),
			(t[13] = q * j),
			(t[14] = k * j),
			(t[15] = X * j),
			t
		);
	}
	static inverseTransformation(e, t) {
		const i = e[0],
			r = e[1],
			n = e[2],
			s = e[4],
			a = e[5],
			o = e[6],
			c = e[8],
			l = e[9],
			u = e[10],
			h = e[12],
			f = e[13],
			m = e[14],
			d = -i * h - r * f - n * m,
			p = -s * h - a * f - o * m,
			g = -c * h - l * f - u * m;
		return (
			(t[0] = i),
			(t[1] = s),
			(t[2] = c),
			(t[3] = 0),
			(t[4] = r),
			(t[5] = a),
			(t[6] = l),
			(t[7] = 0),
			(t[8] = n),
			(t[9] = o),
			(t[10] = u),
			(t[11] = 0),
			(t[12] = d),
			(t[13] = p),
			(t[14] = g),
			(t[15] = 1),
			t
		);
	}
	static inverseTranspose(e, t) {
		return Pe.inverse(Pe.transpose(e, Be), t);
	}
	static equalsArray(e, t, i) {
		return (
			e[0] === t[i] &&
			e[1] === t[i + 1] &&
			e[2] === t[i + 2] &&
			e[3] === t[i + 3] &&
			e[4] === t[i + 4] &&
			e[5] === t[i + 5] &&
			e[6] === t[i + 6] &&
			e[7] === t[i + 7] &&
			e[8] === t[i + 8] &&
			e[9] === t[i + 9] &&
			e[10] === t[i + 10] &&
			e[11] === t[i + 11] &&
			e[12] === t[i + 12] &&
			e[13] === t[i + 13] &&
			e[14] === t[i + 14] &&
			e[15] === t[i + 15]
		);
	}
}
(Pe.IDENTITY = Object.freeze(new Pe(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
	(Pe.ZERO = Object.freeze(new Pe(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)));
const Be = new Pe();
new ye(), new ye(), new ye();
const Ve = new ye();
new ye();
const Fe = new ye(),
	$e = new ye(),
	Ge = new ye(),
	qe = new ye(),
	ke = new _e(),
	Xe = new _e(),
	je = new ze(),
	He = new ze(0, 0, 0, 1),
	Ye = new ye(),
	We = new ye(),
	Ze = new ye();
class Ke {
	constructor(e, t, i, r) {
		(this.name = e),
			(this.cb = t),
			(this.binding = W(i, 0)),
			(this.offset = W(r, 0)),
			(this.visibility = m.Vertex | m.Fragment),
			(this.type = "number");
	}
	setBuffer(e) {
		for (let t = 0; t < e.length; t++) this.buffer[t] = e[t];
	}
	set() {}
	getValue() {
		let e;
		switch (typeof this.cb) {
			case "object":
				e = this.cb[this.name];
				break;
			case "function":
				e = this.cb();
				break;
			case "number":
				e = this.cb;
				break;
			default:
				throw new Error("type is error");
		}
		return e;
	}
}
class Qe extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = 0),
			(this.byteSize = 4),
			(this.buffer = new Float32Array(t.buffer, i, 1)),
			(this.type = "vec1");
	}
	set() {
		return (
			null != this.cb && (this.value = this.getValue()),
			this.value !== this._value && ((this._value = this.value), (this.buffer[0] = this.value), !0)
		);
	}
}
Qe.align = 4;
class Je extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = new oe()),
			(this.buffer = new Float32Array(t.buffer, i, 2)),
			(this.byteSize = 8),
			(this.type = "vec2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !oe.equals(e, this._value) && (oe.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
Je.align = 8;
class et extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = new ye()),
			(this.buffer = new Float32Array(t.buffer, i, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !ye.equals(e, this._value) && (ye.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
et.align = 16;
class tt extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = new ze()),
			(this.buffer = new Float32Array(t.buffer, i, 4)),
			(this.byteSize = 16),
			(this.type = "vec4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !ze.equals(e, this._value) && (ze.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
tt.align = 16;
class it extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = new ae()),
			(this.buffer = new Float32Array(t.buffer, i, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !ae.equals(e, this._value) && (ae.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
it.align = 16;
class rt extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, s),
			(this.value = void 0),
			(this._value = new me()),
			(this.buffer = new Float32Array(t.buffer, i, 4)),
			(this.byteSize = 16),
			(this.type = "mat2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !me.equals(e, this._value) && (me.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
rt.align = 8;
class nt extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = new _e()),
			(this.buffer = new Float32Array(t.buffer, i, 9)),
			(this.byteSize = 48),
			(this.type = "mat3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !_e.equals(e, this._value) && (_e.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
nt.align = 16;
class st extends Ke {
	constructor(e, t, i, r, n, s) {
		super(e, r, n, s),
			(this.value = void 0),
			(this._value = new Pe()),
			(this.buffer = new Float32Array(t.buffer, i, 16)),
			(this.byteSize = 64),
			(this.type = "mat4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return !Pe.equals(e, this._value) && (Pe.clone(e, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
st.align = 16;
class at extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.visibility = m.Vertex | m.Fragment),
			(this.buffer = new Float32Array(t.buffer, i, a)),
			(this.byteSize = 4 * a),
			(this.type = "float-array");
	}
	set() {
		this.value = this.cb();
		for (let e = 0; e < this.value.length; e++) this.buffer[e] = this.value[e];
		return !0;
	}
}
at.align = 4;
class ot extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.visibility = m.Vertex | m.Fragment),
			(this.byteSize = 8 * a),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "vec2-array");
	}
	set() {
		this.value = this.cb();
		let e = 0;
		for (let t = 0; t < this.value.length; t++)
			(this.buffer[e] = this.value[t].x), (this.buffer[e + 1] = this.value[t].y), (e += 2);
		return !0;
	}
}
ot.align = 8;
class ct extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.visibility = m.Vertex | m.Fragment),
			(this.byteSize = 16 * a),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "vec3-array");
	}
	set() {
		this.value = this.cb();
		let e = 0;
		for (let t = 0; t < this.value.length; t++)
			(this.buffer[e] = this.value[t].x),
				(this.buffer[e + 1] = this.value[t].y),
				(this.buffer[e + 2] = this.value[t].z),
				(this.buffer[e + 3] = 0),
				(e += 4);
		return !0;
	}
}
ct.align = 16;
class lt extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.visibility = m.Vertex | m.Fragment),
			(this.byteSize = 16 * a),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "vec4-array");
	}
	set() {
		this.value = this.cb();
		let e = 0;
		for (let t = 0; t < this.value.length; t++)
			(this.buffer[e] = this.value[t].x),
				(this.buffer[e + 1] = this.value[t].y),
				(this.buffer[e + 2] = this.value[t].z),
				(this.buffer[e + 3] = this.value[t].w),
				(e += 4);
		return !0;
	}
}
lt.align = 16;
class ut extends Ke {
	constructor(e, t, i) {
		super(e), (this.binding = t), (this.type = "texture"), (this.visibility = m.Fragment), (this._texture = i);
	}
	get layoutType() {
		return this.texture.layoutType;
	}
	bind(e) {
		(this.texture = this._texture instanceof Function ? this._texture() : this._texture), this.texture.update(e);
	}
}
class ht extends Ke {
	constructor(e, t, i) {
		super(e),
			(this.name = e),
			(this.binding = t),
			(this.type = "sampler"),
			(this.visibility = m.Fragment),
			(this._sampler = i);
	}
	get layoutType() {
		return this.sampler.layoutType;
	}
	bind(e) {
		(this.sampler = this._sampler instanceof Function ? this._sampler() : this._sampler), this.sampler.update(e);
	}
}
class ft extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.cb = r),
			(this.byteSize = 64 * a),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "spotsLight"),
			(this.visibility = m.Fragment);
	}
	set() {
		(this.lights = this.cb()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			});
	}
	setSubData(e, t) {
		const i = 16 * t;
		e.positionDirty && ((e.positionDirty = !1), pt(this.buffer, e.positionVC.toArray(), i + 0)),
			e.distanceDirty && ((e.distanceDirty = !1), pt(this.buffer, e.distance, i + 3)),
			e.dirtectDirty && ((e.dirtectDirty = !1), pt(this.buffer, e.dirtectVC.toArray(), i + 4)),
			e.coneCosDirty && ((e.coneCosDirty = !1), pt(this.buffer, e.coneCos, i + 7)),
			e.colorDirty && ((e.colorDirty = !1), pt(this.buffer, e.color.toArray(), i + 8)),
			e.penumbraCosDirty && ((e.penumbraCosDirty = !1), pt(this.buffer, e.penumbraCos, i + 11)),
			e.decayDirty && ((e.decayDirty = !1), pt(this.buffer, e.decay, i + 12));
	}
}
ft.align = 16;
class mt extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.cb = r),
			(this.byteSize = 32 * a),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "pointsLight"),
			(this.visibility = m.Fragment);
	}
	set() {
		(this.lights = this.cb()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			});
	}
	setSubData(e, t) {
		const i = 8 * t;
		e.positionDirty && ((e.positionDirty = !1), pt(this.buffer, e.positionVC.toArray(), i + 0)),
			e.distanceDirty && ((e.distanceDirty = !1), pt(this.buffer, e.distance, i + 3)),
			e.colorDirty && ((e.colorDirty = !1), pt(this.buffer, e.color.toArray(), i + 4)),
			e.decayDirty && ((e.decayDirty = !1), pt(this.buffer, e.decay, i + 7));
	}
}
mt.align = 16;
class dt extends Ke {
	constructor(e, t, i, r, n, s, a) {
		super(e, r, n, s),
			(this.cb = r),
			(this.byteSize = 32 * a),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "dirtectLights"),
			(this.visibility = m.Fragment);
	}
	set() {
		(this.lights = this.cb()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			});
	}
	setSubData(e, t) {
		const i = 8 * t;
		e.dirtectDirty && ((e.dirtectDirty = !1), pt(this.buffer, e.dirtectVC.toArray(), i + 0)),
			e.colorDirty && ((e.colorDirty = !1), pt(this.buffer, e.color.toArray(), i + 4));
	}
}
function pt(e, t, i) {
	Array.isArray(t)
		? t.forEach((t, r) => {
				e[r + i] = t;
		  })
		: (e[i] = t);
}
dt.align = 16;
class gt {
	constructor(e) {
		(this.binding = e.binding), (this.resource = e.resource);
	}
	getGPUGroupEntity() {
		return { binding: this.binding, resource: this.resource };
	}
}
class xt {
	constructor(e) {
		(this.binding = e.binding),
			(this.visibility = e.visibility),
			(this.buffer = e.buffer),
			(this.sampler = e.sampler),
			(this.texture = e.texture),
			(this.storageTexture = e.storageTexture),
			(this.externalTexture = e.storageTexture);
	}
	getGPULayoutEntity() {
		return {
			binding: this.binding,
			visibility: this.visibility,
			buffer: this.buffer,
			sampler: this.sampler,
			texture: this.texture,
			storageTexture: this.storageTexture
		};
	}
}
const vt = new Map();
class yt {
	constructor(e, t, i = [], r = 0) {
		(this.entries = i),
			(this.index = r || 0),
			(this.gpuBindGroupLayout = e.createBindGroupLayout({
				label: t,
				entries: i.map(
					({ visibility: e, buffer: t, sampler: i, texture: r, storageTexture: n, binding: s }) => ({
						binding: s,
						visibility: e,
						buffer: t,
						sampler: i,
						texture: r,
						storageTexture: n
					})
				)
			}));
	}
	static getBindGroupLayoutFromCache(e, t, i, r) {
		if (vt.has(t)) return vt.get(t);
		{
			const n = new yt(e, t, i, r);
			return vt.set(t, n), n;
		}
	}
	static removeBindGroupLayoutFromCache(e) {
		vt.delete(e);
	}
}
const bt = new Map();
class St {
	constructor(e) {
		(this.index = e.index || 0),
			(this.gpuBindGroup = e.device.createBindGroup({
				label: e.label,
				layout: e.layout.gpuBindGroupLayout,
				entries: e.entires.map((e) => ({ binding: e.binding, resource: e.resource }))
			}));
	}
	bind(e) {
		e.setBindGroup(this.index, this.gpuBindGroup);
	}
	static getBindGroupFromCache(e) {
		if (bt.has(e.label)) return bt.get(e.label);
		{
			const t = new St(e);
			return bt.set(e.label, t), t;
		}
	}
	static removeBindGroupFromCache(e) {
		bt.delete(e);
	}
}
class Et {
	constructor(e, t, i, r) {
		(this.label = e),
			(this.textureBinding = 1),
			(this.defineDirty = !0),
			(this.defines = {}),
			(this._uniforms = new Map()),
			(this.groupIndex = W(r, 0)),
			(this.layoutIndex = W(i, 0));
	}
	setUniformBuffer(e, t) {
		this._uniforms.get(e) || this._uniforms.set(e, t);
	}
	setTexture(e, t, i) {
		if (this._uniforms.get(e)) return;
		const r = new ut(e, this.textureBinding, t);
		this.setDefine(e.concat("Binding"), this.textureBinding), (this.textureBinding += 1), this._uniforms.set(e, r);
	}
	setSampler(e, t, i) {
		if (this._uniforms.get(e)) return;
		const r = new ht(e, this.textureBinding, t);
		this.setDefine(e.concat("Binding"), this.textureBinding), (this.textureBinding += 1), this._uniforms.set(e, r);
	}
	setDefine(e, t) {
		if (void 0 === this.defines[e]) (this.defineDirty = !0), (this.defines[e] = t);
		else {
			if (this.defines[e] === t) return;
			(this.defineDirty = !0), (this.defines[e] = t);
		}
	}
	bind(e, t) {
		this.uploadUniform(e);
		const { groupLayout: i, bindGroup: r } = this.createBindGroupAndLayout(
			e.device,
			this.label,
			this.layoutIndex,
			this.groupIndex
		);
		r.bind(t), (this.bindGroup = r), (this.groupLayout = i);
	}
	destroy() {
		this._uniforms.forEach((e) => {
			e.destroy && e?.destroy();
		}),
			(this.label = void 0),
			(this.textureBinding = 1),
			(this.defineDirty = !0),
			(this.defines = {}),
			this._uniforms.clear(),
			yt.removeBindGroupLayoutFromCache(this.groupLayout),
			St.removeBindGroupFromCache(this.bindGroup);
	}
	getBindGroupAndLayout(e, t, i) {
		const r = this.createBindGroupLayoutEntry(),
			n = yt.getBindGroupLayoutFromCache(e, t, r, i),
			s = this.createBindGroupEntity();
		return {
			groupLayout: n,
			bindGroup: St.getBindGroupFromCache({ label: t, entires: s, device: e, layout: n, index: i })
		};
	}
	createBindGroupAndLayout(e, t, i, r) {
		const n = this.createBindGroupLayoutEntry(),
			s = yt.getBindGroupLayoutFromCache(e, t, n, i || 0),
			a = this.createBindGroupEntity();
		return {
			groupLayout: s,
			bindGroup: St.getBindGroupFromCache({ label: t, entires: a, device: e, layout: s, index: r || 0 })
		};
	}
	uploadUniform(e) {
		this._uniforms.forEach((t) => {
			t.bind(e);
		});
	}
	createBindGroupLayoutEntry() {
		const e = new Map();
		this._uniforms.forEach((t) => {
			e.has(t.binding) || e.set(t.binding, this.createOneLayoutEntry(t));
		});
		const t = [];
		return (
			e.forEach((e) => {
				t.push(e);
			}),
			t
		);
	}
	createBindGroupEntity() {
		const e = new Map();
		this._uniforms.forEach((t) => {
			e.has(t.binding) || e.set(t.binding, this.creayeOneGroupEntity(t));
		});
		const t = [];
		return (
			e.forEach((e) => {
				t.push(e);
			}),
			t
		);
	}
	createOneLayoutEntry(e) {
		let t;
		return (
			"uniform" === e.type || "read-only-storage" === e.type
				? (t = new xt({ binding: e.binding, buffer: e.layoutType, visibility: e.visibility }))
				: "texture" === e.type
				? (t = new xt({ binding: e.binding, visibility: e.visibility, texture: e.layoutType }))
				: "sampler" === e.type &&
				  (t = new xt({ binding: e.binding, visibility: e.visibility, sampler: e.layoutType })),
			t
		);
	}
	creayeOneGroupEntity(e) {
		let t;
		return (
			"uniform" === e.type || "read-only-storage" === e.type
				? (t = new gt({
						binding: e.binding,
						resource: { buffer: e.buffer.gpuBuffer, offset: e.offset, size: e.bufferSize }
				  }))
				: "texture" === e.type
				? (t = new gt({ binding: e.binding, resource: e.texture.texureView }))
				: "sampler" === e.type && (t = new gt({ binding: e.binding, resource: e.sampler.gpuSampler })),
			t
		);
	}
}
class Tt {
	constructor(e, t, i, n, s) {
		(this.type = W(e, "uniform")),
			(this.hasDynamicOffset = !1),
			(this.minBindingSize = 0),
			(this.binding = W(s, 0)),
			(this.visibility = m.Fragment | m.Vertex),
			(this.usage = W(t, r.Uniform | r.CopyDst)),
			(this._uniforms = new Map()),
			(this.uniformDirty = !0),
			(this._bufferSize = i),
			(this.offset = 0),
			(this.dataBuffer = W(n, new Float32Array(W(this._bufferSize, 400)))),
			(this.byteOffset = 0);
	}
	get layoutType() {
		return { type: this.type, hasDynamicOffset: this.hasDynamicOffset, minBindingSize: this.minBindingSize };
	}
	get bufferSize() {
		return W(this._bufferSize, 4 * this.uniformsSize);
	}
	get uniformsSize() {
		return 16 * Math.ceil(this.byteOffset / 16);
	}
	bind(e) {
		this._uniforms.forEach((e) => {
			const t = e.set();
			null != t && 0 == this.uniformDirty && (this.uniformDirty = t);
		}),
			this.uniformDirty &&
				((this.uniformDirty = !1),
				this.buffer || (this.buffer = V.createUniformBuffer(e.device, this.bufferSize, this.usage)),
				this.buffer.setSubData(0, this.dataBuffer.slice(0, W(this?.bufferSize / 4, this.uniformsSize))));
	}
	getUniformBufferStruct() {
		let e = "struct MaterialUniform {\n ";
		return (
			this._uniforms.forEach((t) => {
				e += this.createUniformString(t);
			}),
			(e += "}\n"),
			e
		);
	}
	createUniformString(e) {
		let t = "";
		switch (e.type) {
			case "vec1":
				t = `${e.name} :f32,\n`;
				break;
			case "vec2":
				t = `${e.name} :vec2<f32>,\n`;
				break;
			case "vec3":
				t = `${e.name} :vec3<f32>,\n`;
				break;
			case "vec4":
				t = `${e.name} :vec4<f32>,\n`;
				break;
			case "mat2":
				t = `${e.name} :mat2x2<f32>,\n`;
				break;
			case "mat3":
				t = `${e.name} :mat3x3<f32>,\n`;
				break;
			case "mat4":
				t = `${e.name} :mat4x4<f32>,\n`;
		}
		return t;
	}
	setFloat(e, t, i) {
		if (this._uniforms.get(e)) return;
		const r = new Qe(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setFloatVec2(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, Je.align);
		const r = new Je(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setFloatVec3(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, et.align);
		const r = new et(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setColor(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, it.align);
		const r = new it(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setFloatVec4(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, tt.align);
		const r = new tt(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setMatrix2(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, rt.align);
		const r = new rt(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setMatrix3(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, nt.align);
		const r = new nt(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setMatrix4(e, t, i) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, st.align);
		const r = new st(e, this.dataBuffer, this.byteOffset, t, i);
		this._uniforms.set(e, r), (this.byteOffset += r.byteSize);
	}
	setFloatArray(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, at.align);
		const n = new at(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	setVec2Array(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ot.align);
		const n = new ot(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	setVec3Array(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ct.align);
		const n = new ct(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	setVec4Array(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, lt.align);
		const n = new lt(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	setSpotLights(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ft.align);
		const n = new ft(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	setPointLights(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, mt.align);
		const n = new mt(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	setDirtectLights(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, dt.align);
		const n = new dt(e, this.dataBuffer, this.byteOffset, t, r, 0, i);
		this._uniforms.set(e, n), (this.byteOffset += n.byteSize);
	}
	checkUniformOffset(e, t) {
		return Math.ceil(e / t) * t - e;
	}
	destroy() {
		this.buffer.destroy();
	}
}
class wt {
	constructor() {
		(this.spotLights = []),
			(this.pointLights = []),
			(this.dirtectLights = []),
			(this.ambientLight = void 0),
			(this.lightCountDirty = !1);
	}
	update(e, t) {
		this.updateLight(t);
	}
	add(e) {
		(this.lightCountDirty = !0),
			"ambient" == e.type
				? (this.ambientLight = e)
				: "dirtect" == e.type
				? this.dirtectLights.push(e)
				: "point" == e.type
				? this.pointLights.push(e)
				: "spot" == e.type && this.spotLights.push(e);
	}
	remove() {}
	updateLight(e) {
		this.updateLightData(e),
			this.lightCountDirty &&
				((this.lightCountDirty = !1),
				this.lightShaderData && this.lightShaderData.destroy(),
				this.createLightShaderData());
	}
	updateLightData(e) {
		this.updateSpotLight(e), this.updatePointLight(e), this.updateDirtectLight(e);
	}
	updateSpotLight(e) {
		this.spotLights.forEach((t) => {
			t.update(e);
		});
	}
	updatePointLight(e) {
		this.pointLights.forEach((t) => {
			t.update(e);
		});
	}
	updateDirtectLight(e) {
		this.dirtectLights.forEach((t) => {
			t.update(e);
		});
	}
	createLightShaderData() {
		(this.lightShaderData = new Et("light", 0, 2, 2)),
			(this.lightUniformBuffer = new Tt("read-only-storage", r.Storage | r.CopyDst)),
			this.lightShaderData.setDefine("spotLightsCount", this.spotLights.length),
			this.lightShaderData.setDefine("pointLightsCount", this.pointLights.length),
			this.lightShaderData.setDefine("dirtectLightsCount", this.dirtectLights.length),
			this.lightShaderData.setDefine("ambientLightCount", null != this.ambientLight ? 1 : 0),
			this.ambientLight && this.lightUniformBuffer.setFloatVec3("ambientLight", () => this.ambientLight.color),
			this.spotLights.length &&
				this.lightUniformBuffer.setSpotLights("spotLights", () => this.spotLights, this.spotLights.length),
			this.pointLights.length &&
				this.lightUniformBuffer.setPointLights("pointLights", () => this.pointLights, this.pointLights.length),
			this.dirtectLights.length &&
				this.lightUniformBuffer.setDirtectLights(
					"dirtectLights",
					() => this.dirtectLights,
					this.dirtectLights.length
				),
			this.lightShaderData.setUniformBuffer("light", this.lightUniformBuffer);
	}
	getAllLights() {
		return (
			(this.spotLights = []),
			(this.pointLights = []),
			(this.dirtectLights = []),
			[].concat(this.spotLights, this.pointLights, this.dirtectLights)
		);
	}
	destroy() {
		this.lightShaderData.destroy(), this.lightUniformBuffer.destroy();
	}
}
class _t {
	constructor({ canvas: e, container: t, context: i, pixelRatio: r } = {}) {
		(this.canvas = e || document.createElement("canvas")),
			(this.canvas.style.display = "block"),
			(this.canvas.width = window.innerWidth),
			(this.canvas.height = window.innerHeight),
			t.appendChild(this.canvas),
			(this.context = i || this.canvas.getContext("webgpu")),
			(this.pixelRatio = r || window.devicePixelRatio || 1),
			(this.device = void 0),
			(this.lightManger = new wt());
	}
	async init(e = {}, t = {}, i = {}) {
		try {
			if (!this.context) throw new Error('Failed to instantiate "webgpu" context.');
			if (!navigator.gpu) throw new Error('Missing "navigator.gpu".');
			(this.adapter = await navigator.gpu.requestAdapter()),
				(this.device = await this.adapter.requestDevice()),
				(this.presentationSize = {
					width: this.canvas.clientWidth * this.pixelRatio,
					height: this.canvas.clientHeight * this.pixelRatio,
					depth: 1
				}),
				(this.presentationFormat = navigator.gpu.getPreferredCanvasFormat()),
				this.device.addEventListener("uncapturederror", (e) => {
					console.error(e);
				}),
				(this.mipmapTools = new G(this.device)),
				this.context.configure({
					device: this.device,
					format: this.presentationFormat,
					usage: a.RenderAttachment,
					alphaMode: "opaque",
					...i
				}),
				(this._viewPort = {
					x: 0,
					y: 0,
					width: this.canvas.clientWidth * this.pixelRatio,
					height: this.canvas.clientHeight * this.pixelRatio
				}),
				(this._scissorTestEnabled = !1);
		} catch (e) {
			return console.error(e), !1;
		}
		return !0;
	}
	setViewPort(e, t, i, r) {
		this._viewPort = { x: e, y: t, width: i, height: r };
	}
	setScissorTest(e, t, i, r) {
		(this._scissorTestEnabled = !0), (this._scissorTest = { x: e, y: t, width: i, height: r });
	}
	resize(e, t, i = {}) {
		const r = e * this.pixelRatio,
			n = t * this.pixelRatio;
		(this.canvas.width = r),
			(this.canvas.height = n),
			Object.assign(this.canvas.style, { width: e, height: t }),
			this.context.configure({
				device: this.device,
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: a.RenderAttachment,
				alphaMode: $,
				...i
			});
	}
	render(e, t, i) {
		const r = [];
		e.shaderData && e.shaderData.bind(this, t),
			i && (i.shaderData.bind(this, t), r.push(i.shaderData.groupLayout)),
			e.light &&
				this.lightManger.lightShaderData &&
				(this.lightManger.lightShaderData.bind(this, t),
				r.push(this.lightManger.lightShaderData.groupLayout),
				e.shaderSource && e.shaderSource.setDefines(this.lightManger.lightShaderData.defines)),
			e.renderState && e.renderState.bind(t),
			e.vertexBuffer && e.vertexBuffer.bind(this.device, t),
			e.indexBuffer && e.indexBuffer.bind(this.device, t);
		H.getRenderPipelineFromCache(this.device, e, r.concat(e.shaderData.groupLayout)).bind(t),
			e.indexBuffer
				? t.drawIndexed(e.count || 0, e.instances || 1, 0, 0, 0)
				: e.count && t.draw(e.count, e.instances || 1, 0, 0);
	}
	compute(e, t) {
		H.getComputePipelineFromCache(this.device, e, [e.shaderData.groupLayout]).bind(t);
		const { x: i, y: r, z: n } = e.dispatch;
		t.dispatchWorkgroups(i, r, n);
	}
}
class Rt {
	constructor(e) {
		(this.textureProp = Object.assign(
			{
				format: l.RGBA8Unorm,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
			},
			e
		)),
			(this.sampler = e.sampler),
			(this.dirty = !0);
	}
	get layoutType() {
		const { viewFormats: e, sampleType: t, sampleCount: i } = this.textureProp;
		return { sampleType: W(t, "float"), viewDimension: W(e, "2d"), multisampled: !!(i && i > 1) };
	}
	get texureView() {
		return this.gpuTexture.createView({ dimension: W(this.textureProp.viewFormats, "2d") });
	}
	update(e) {
		this.context || (this.context = e),
			this.dirty &&
				(this.gpuTexture && this.gpuTexture.destroy(),
				(this.gpuTexture = this.createGPUTexture()),
				(this.dirty = !1),
				this.textureProp.data &&
					(Array.isArray(this.textureProp.data)
						? this.textureProp.data.forEach((e) => {
								this.setData(e);
						  })
						: this.setData(this.textureProp.data)),
				this.textureProp.needMipMap && (this.gpuTexture = e.mipmapTools.generateMipmap(this)),
				this.sampler && this.sampler.update(e));
	}
	setData(e) {
		const {
			source: t,
			width: i = e.source.width,
			height: r = e.source.height,
			depth: n = 1,
			sourceX: s = 0,
			sourceY: a = 0,
			mipLevel: o = 0,
			x: c = 0,
			y: l = 0,
			z: u = 0,
			aspect: h = "all",
			colorSpace: f = "srgb",
			premultipliedAlpha: m = !1
		} = e;
		this.context.device.queue.copyExternalImageToTexture(
			{ source: t, origin: [s, a] },
			{
				texture: this.gpuTexture,
				origin: [c, l, u],
				mipLevel: o,
				aspect: h,
				colorSpace: f,
				premultipliedAlpha: m
			},
			[i, r, n]
		);
	}
	setSize(e, t, i) {
		(this.textureProp.size.width = e),
			(this.textureProp.size.height = t),
			i && (this.textureProp.size.depth = i),
			(this.dirty = !0);
	}
	destroy() {
		this.gpuTexture.destroy();
	}
	createGPUTexture() {
		if ("number" == typeof this.textureProp.format) throw new Error("number format");
		const { width: e, height: t, depth: i } = this.textureProp.size;
		return this.context.device.createTexture({
			size: [e, t, i],
			dimension: this.textureProp.dimension || "2d",
			format: this.textureProp.format,
			usage: this.textureProp.usage,
			mipLevelCount: this.textureProp.mipLevelCount || 1,
			sampleCount: this.textureProp.sampleCount || 1
		});
	}
}
class Ut {
	constructor(
		e = {
			magFilter: "linear",
			minFilter: "linear",
			mipmapFilter: "linear",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge",
			addressModeW: "clamp-to-edge"
		}
	) {
		(this.descriptor = e), (this.layoutType = { type: "filtering" });
	}
	update(e) {
		this.gpuSampler || (this.gpuSampler = e.device.createSampler(this.descriptor));
	}
}
class Mt {
	constructor() {
		(this.scissorTest = void 0),
			(this.viewport = void 0),
			(this.depthStencil = void 0),
			(this.blendConstant = void 0),
			(this.stencilReference = 0),
			(this.multisample = void 0),
			(this.primitive = void 0),
			(this.stencilEnabled = !1),
			(this.scissorTestEnabled = !1),
			(this.targets = void 0);
	}
	bind(e) {
		if ((this.stencilReference && e.setStencilReference(this.stencilReference), this.viewport)) {
			const { x: t, y: i, width: r, height: n, minDepth: s, maxDepth: a } = this.viewport;
			e.setViewport(t, i, r, n, s, a);
		}
		if ((this.blendConstant && e.setBlendConstant(this.blendConstant), this.scissorTest)) {
			const { x: t, y: i, width: r, height: n } = this.scissorTest;
			e.setScissorRect(t, i, r, n);
		}
	}
	destroy() {
		(this.scissorTest = void 0),
			(this.viewport = void 0),
			(this.depthStencil = void 0),
			(this.blendConstant = void 0),
			(this.stencilReference = -1),
			(this.multisample = void 0),
			(this.primitive = void 0),
			(this.stencilEnabled = !1),
			(this.scissorTestEnabled = !1);
	}
}
class Ct {
	constructor(e, t, i, r) {
		(this.frontFace = W(i, S.CCW)),
			(this.cullMode = W(t, E.None)),
			(this.unclippedDepth = W(r, !1)),
			(this.topology = W(e, b.TriangleList));
	}
	getGPUPrimitiveDec() {
		return {
			frontFace: this.frontFace,
			cullMode: this.cullMode,
			unclippedDepth: this.unclippedDepth,
			topology: this.topology
		};
	}
}
class Lt {
	constructor(e) {
		(this.format = W(e?.format, l.Depth24Plus)),
			(this.depthWriteEnabled = W(e?.depthWriteEnabled, !0)),
			(this.depthCompare = W(e?.depthCompare, f.Less)),
			(this.stencilReadMask = W(e?.stencilReadMask, 4294967295)),
			(this.stencilWriteMask = W(e?.stencilWriteMask, 4294967295)),
			(this.stencilFrontCompare = W(e?.stencilFrontCompare, f.Always)),
			(this.stencilFrontFailOp = W(e?.stencilFrontFailOp, R.Keep)),
			(this.stencilFrontDepthFailOp = W(e?.stencilFrontDepthFailOp, R.Keep)),
			(this.stencilFrontPassOp = W(e?.stencilFrontPassOp, R.Keep)),
			(this.stencilBackCompare = W(e?.stencilBackCompare, f.Always)),
			(this.stencilBackFailOp = W(e?.stencilBackFailOp, R.Keep)),
			(this.stencilBackDepthFailOp = W(e?.stencilBackDepthFailOp, R.Keep)),
			(this.stencilBackPassOp = W(e?.stencilBackPassOp, R.Keep)),
			(this.depthBias = W(e?.depthBias, 0)),
			(this.depthBiasSlopeScale = W(e?.depthBiasSlopeScale, 0)),
			(this.depthBiasClamp = W(e?.depthBiasClamp, 0));
	}
	getGPUDepthStencilDec() {
		return {
			format: this.format,
			depthWriteEnabled: this.depthWriteEnabled,
			depthCompare: this.depthCompare,
			stencilReadMask: this.stencilReadMask,
			stencilWriteMask: this.stencilWriteMask,
			stencilFront: {
				compare: this.stencilFrontCompare,
				failOp: this.stencilFrontFailOp,
				depthFailOp: this.stencilFrontDepthFailOp,
				passOp: this.stencilFrontPassOp
			},
			stencilBack: {
				compare: this.stencilBackCompare,
				failOp: this.stencilBackFailOp,
				depthFailOp: this.stencilBackDepthFailOp,
				passOp: this.stencilBackPassOp
			},
			depthBias: this.depthBias,
			depthBiasSlopeScale: this.depthBiasSlopeScale,
			depthBiasClamp: this.depthBiasClamp
		};
	}
}
class It {
	constructor(e) {
		(this.format = W(e?.format, l.BGRA8Unorm)),
			(this.blendColorOperation = W(e?.blendColorOperation, _.Add)),
			(this.blendColorSrcFactor = W(e?.blendColorSrcFactor, w?.SrcAlpha)),
			(this.blendColorDstFactor = W(e?.blendColorDstFactor, w.OneMinusSrcAlpha)),
			(this.blendAlphaOperation = W(e?.blendAlphaOperation, _.Add)),
			(this.blendAlphaSrcFactor = W(e?.blendAlphaSrcFactor, w.One)),
			(this.blendAlphaDstFactor = W(e?.blendAlphaDstFactor, w.One)),
			(this.writeMask = W(e?.writeMask, B.All));
	}
	getGPUTargetDec() {
		return {
			format: this.format,
			blend: {
				color: {
					operation: this.blendColorOperation,
					srcFactor: this.blendColorSrcFactor,
					dstFactor: this.blendColorDstFactor
				},
				alpha: {
					operation: this.blendAlphaOperation,
					srcFactor: this.blendAlphaSrcFactor,
					dstFactor: this.blendAlphaDstFactor
				}
			},
			writeMask: this.writeMask
		};
	}
}
class zt {
	constructor(e, t) {
		(this.value = e), (this.op = "clear"), (this.storeOp = "store"), Object.assign(this, t);
	}
}
class Dt {
	constructor(e, t, i) {
		(this.name = e),
			(this.value = t),
			(this.itemSize = i),
			(this.name = e),
			(this.offset = 0),
			(this.shaderLocation = 0);
	}
	getGPUAttribute() {
		return { shaderLocation: this.shaderLocation, format: this.format, offset: this.offset };
	}
	destroy() {
		this.value = [];
	}
	applyMatrix3(e) {
		if (2 === this.itemSize)
			for (let t = 0, i = this.value.length / this.itemSize; t < i; t++)
				Dt.v2.fromBufferAttribute(this, t), Dt.v2.applyMatrix3(e), this.setXY(t, Dt.v2.x, Dt.v2.y);
		else if (3 === this.itemSize)
			for (let t = 0, i = this.value.length / this.itemSize; t < i; t++)
				Dt.v3.fromBufferAttribute(this, t), Dt.v3.applyMatrix3(e), this.setXYZ(t, Dt.v3.x, Dt.v3.y, Dt.v3.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, i = this.value.length / this.itemSize; t < i; t++)
			Dt.v3.fromBufferAttribute(this, t), Dt.v3.applyMatrix4(e), this.setXYZ(t, Dt.v3.x, Dt.v3.y, Dt.v3.z);
		return this;
	}
	setX(e, t) {
		return (this.value[e * this.itemSize] = t), this;
	}
	getX(e) {
		return this.value[e * this.itemSize];
	}
	setY(e, t) {
		return (this.value[e * this.itemSize + 1] = t), this;
	}
	getY(e) {
		return this.value[e * this.itemSize + 1];
	}
	setZ(e, t) {
		return (this.value[e * this.itemSize + 2] = t), this;
	}
	getZ(e) {
		return this.value[e * this.itemSize + 2];
	}
	getW(e) {
		return this.value[e * this.itemSize + 3];
	}
	setXY(e, t, i) {
		return (e *= this.itemSize), (this.value[e + 0] = t), (this.value[e + 1] = i), this;
	}
	setXYZ(e, t, i, r) {
		return (e *= this.itemSize), (this.value[e + 0] = t), (this.value[e + 1] = i), (this.value[e + 2] = r), this;
	}
	setXYZW(e, t, i, r, n) {
		return (
			(e *= this.itemSize),
			(this.value[e + 0] = t),
			(this.value[e + 1] = i),
			(this.value[e + 2] = r),
			(this.value[e + 3] = n),
			this
		);
	}
}
(Dt.v3 = new ye()), (Dt.v2 = new oe());
class Ot extends Dt {
	constructor(e, t, i) {
		super(e, t, i),
			(this.format = (function (e, t) {
				let i;
				switch (`${e}x${t}`) {
					case "float32":
						i = M.Float32;
						break;
					case "float32x2":
						i = M.Float32x2;
						break;
					case "float32x3":
						i = M.Float32x3;
						break;
					case "float32x4":
						i = M.Float32x4;
				}
				return i;
			})("float32", i)),
			(this.attributeByteSize = Float32Array.BYTES_PER_ELEMENT * i);
	}
}
var Nt = Object.freeze({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 });
class At {
	constructor(e = 0, t = 0, i = 0, r = 1) {
		(this.x = e), (this.y = t), (this.z = i), (this.w = r);
	}
	normalize() {
		const e = 1 / At.magnitude(this),
			t = this.x * e,
			i = this.y * e,
			r = this.z * e,
			n = this.w * e;
		return (this.x = t), (this.y = i), (this.z = r), (this.w = n), this;
	}
	invert() {
		return (this.x *= -1), (this.y *= -1), (this.z *= -1), this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	setFromUnitVectors(e, t) {
		let i = ye.dot(e, t) + 1;
		return (
			i < Number.EPSILON
				? ((i = 0),
				  Math.abs(e.x) > Math.abs(e.z)
						? ((this.x = -e.y), (this.y = e.x), (this.z = 0), (this.w = i))
						: ((this.x = 0), (this.y = -e.z), (this.z = e.y), (this.w = i)))
				: ((this._x = e.y * t.z - e.z * t.y),
				  (this._y = e.z * t.x - e.x * t.z),
				  (this._z = e.x * t.y - e.y * t.x),
				  (this._w = i)),
			this.normalize()
		);
	}
	setFromRotationMatrix(e) {
		const t = e,
			i = t[0],
			r = t[4],
			n = t[8],
			s = t[1],
			a = t[5],
			o = t[9],
			c = t[2],
			l = t[6],
			u = t[10],
			h = i + a + u;
		if (h > 0) {
			const e = 0.5 / Math.sqrt(h + 1);
			(this.w = 0.25 / e), (this.x = (l - o) * e), (this.y = (n - c) * e), (this.z = (s - r) * e);
		} else if (i > a && i > u) {
			const e = 2 * Math.sqrt(1 + i - a - u);
			(this.w = (l - o) / e), (this.x = 0.25 * e), (this.y = (r + s) / e), (this.z = (n + c) / e);
		} else if (a > u) {
			const e = 2 * Math.sqrt(1 + a - i - u);
			(this.w = (n - c) / e), (this.x = (r + s) / e), (this.y = 0.25 * e), (this.z = (o + l) / e);
		} else {
			const e = 2 * Math.sqrt(1 + u - i - a);
			(this.w = (s - r) / e), (this.x = (n + c) / e), (this.y = (o + l) / e), (this.z = 0.25 * e);
		}
		return this;
	}
	clone() {
		return At.clone(this, this);
	}
	equals(e) {
		return At.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return At.equalsEpsilon(this, e, t);
	}
	static fromAxisAngle(e, t) {
		const i = t / 2,
			r = Math.sin(i);
		Pt = ye.normalize(e, Pt);
		const n = Pt.x * r,
			s = Pt.y * r,
			a = Pt.z * r,
			o = Math.cos(i);
		let c = new At(n, s, a, o);
		return (c.x = n), (c.y = s), (c.z = a), (c.w = o), c;
	}
	static fromRotationMatrix(e, t) {
		let i, r, n, s, a;
		const o = e[_e.COLUMN0ROW0],
			c = e[_e.COLUMN1ROW1],
			l = e[_e.COLUMN2ROW2],
			u = o + c + l;
		if (u > 0)
			(i = Math.sqrt(u + 1)),
				(a = 0.5 * i),
				(i = 0.5 / i),
				(r = (e[_e.COLUMN1ROW2] - e[_e.COLUMN2ROW1]) * i),
				(n = (e[_e.COLUMN2ROW0] - e[_e.COLUMN0ROW2]) * i),
				(s = (e[_e.COLUMN0ROW1] - e[_e.COLUMN1ROW0]) * i);
		else {
			const t = Bt;
			let u = 0;
			c > o && (u = 1), l > o && l > c && (u = 2);
			const h = t[u],
				f = t[h];
			i = Math.sqrt(e[_e.getElementIndex(u, u)] - e[_e.getElementIndex(h, h)] - e[_e.getElementIndex(f, f)] + 1);
			const m = Vt;
			(m[u] = 0.5 * i),
				(i = 0.5 / i),
				(a = (e[_e.getElementIndex(f, h)] - e[_e.getElementIndex(h, f)]) * i),
				(m[h] = (e[_e.getElementIndex(h, u)] + e[_e.getElementIndex(u, h)]) * i),
				(m[f] = (e[_e.getElementIndex(f, u)] + e[_e.getElementIndex(u, f)]) * i),
				(r = -m[0]),
				(n = -m[1]),
				(s = -m[2]);
		}
		return Z(t) ? ((t.x = r), (t.y = n), (t.z = s), (t.w = a), t) : new At(r, n, s, a);
	}
	static clone(e, t) {
		if (Z(e)) return Z(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t) : new At(e.x, e.y, e.z, e.w);
	}
	static conjugate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
	}
	static magnitude(e) {
		return Math.sqrt(At.magnitudeSquared(e));
	}
	static normalize(e, t) {
		const i = 1 / At.magnitude(e),
			r = e.x * i,
			n = e.y * i,
			s = e.z * i,
			a = e.w * i;
		return (t.x = r), (t.y = n), (t.z = s), (t.w = a), t;
	}
	static inverse(e, t) {
		const i = At.magnitudeSquared(e);
		return (t = At.conjugate(e, t)), At.multiplyByScalar(t, 1 / i, t);
	}
	static add(e, t, i) {
		return (i.x = e.x + t.x), (i.y = e.y + t.y), (i.z = e.z + t.z), (i.w = e.w + t.w), i;
	}
	static subtract(e, t, i) {
		return (i.x = e.x - t.x), (i.y = e.y - t.y), (i.z = e.z - t.z), (i.w = e.w - t.w), i;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
	}
	static multiply(e, t, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = e.w,
			o = t.x,
			c = t.y,
			l = t.z,
			u = t.w,
			h = a * o + r * u + n * l - s * c,
			f = a * c - r * l + n * u + s * o,
			m = a * l + r * c - n * o + s * u,
			d = a * u - r * o - n * c - s * l;
		return (i.x = h), (i.y = f), (i.z = m), (i.w = d), i;
	}
	static multiplyByScalar(e, t, i) {
		return (i.x = e.x * t), (i.y = e.y * t), (i.z = e.z * t), (i.w = e.w * t), i;
	}
	static divideByScalar(e, t, i) {
		return (i.x = e.x / t), (i.y = e.y / t), (i.z = e.z / t), (i.w = e.w / t), i;
	}
	static computeAxis(e, t) {
		const i = e.w;
		if (Math.abs(i - 1) < J.EPSILON6) return (t.x = t.y = t.z = 0), t;
		const r = 1 / Math.sqrt(1 - i * i);
		return (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t;
	}
	static computeAngle(e) {
		return Math.abs(e.w - 1) < J.EPSILON6 ? 0 : 2 * Math.acos(e.w);
	}
	static lerp(e, t, i, r) {
		return (Ft = At.multiplyByScalar(t, i, Ft)), (r = At.multiplyByScalar(e, 1 - i, r)), At.add(Ft, r, r);
	}
	static slerp(e, t, i, r) {
		let n = At.dot(e, t),
			s = t;
		if ((n < 0 && ((n = -n), (s = $t = At.negate(t, $t))), 1 - n < J.EPSILON6)) return At.lerp(e, s, i, r);
		const a = Math.acos(n);
		return (
			(Gt = At.multiplyByScalar(e, Math.sin((1 - i) * a), Gt)),
			(qt = At.multiplyByScalar(s, Math.sin(i * a), qt)),
			(r = At.add(Gt, qt, r)),
			At.multiplyByScalar(r, 1 / Math.sin(a), r)
		);
	}
	static computeInnerQuadrangle(e, t, i, r) {
		const n = At.conjugate(t, Qt);
		At.multiply(n, i, Jt);
		const s = At.log(Jt, Zt);
		At.multiply(n, e, Jt);
		const a = At.log(Jt, Kt);
		return ye.add(s, a, s), ye.multiplyByScalar(s, 0.25, s), ye.negate(s, s), At.exp(s, Qt), At.multiply(t, Qt, r);
	}
	static squad(e, t, i, r, n, s) {
		const a = At.slerp(e, t, n, Qt),
			o = At.slerp(i, r, n, Jt);
		return At.slerp(a, o, 2 * n * (1 - n), s);
	}
	static fastSlerp(e, t, i, r) {
		let n,
			s = At.dot(e, t);
		s >= 0 ? (n = 1) : ((n = -1), (s = -s));
		const a = s - 1,
			o = 1 - i,
			c = i * i,
			l = o * o;
		for (let e = 7; e >= 0; --e) (Yt[e] = (jt[e] * c - Ht[e]) * a), (Wt[e] = (jt[e] * l - Ht[e]) * a);
		const u =
				n *
				i *
				(1 +
					Yt[0] *
						(1 +
							Yt[1] * (1 + Yt[2] * (1 + Yt[3] * (1 + Yt[4] * (1 + Yt[5] * (1 + Yt[6] * (1 + Yt[7])))))))),
			h =
				o *
				(1 +
					Wt[0] *
						(1 +
							Wt[1] * (1 + Wt[2] * (1 + Wt[3] * (1 + Wt[4] * (1 + Wt[5] * (1 + Wt[6] * (1 + Wt[7])))))))),
			f = At.multiplyByScalar(e, h, kt);
		return At.multiplyByScalar(t, u, r), At.add(f, r, r);
	}
	static fastSquad(e, t, i, r, n, s) {
		const a = At.fastSlerp(e, t, n, Qt),
			o = At.fastSlerp(i, r, n, Jt);
		return At.fastSlerp(a, o, 2 * n * (1 - n), s);
	}
	static equals(e, t) {
		return e === t || (Z(e) && Z(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w);
	}
	static equalsEpsilon(e, t, i = 0) {
		return (
			(i = W(i, 0)),
			e === t ||
				(Z(e) &&
					Z(t) &&
					Math.abs(e.x - t.x) <= i &&
					Math.abs(e.y - t.y) <= i &&
					Math.abs(e.z - t.z) <= i &&
					Math.abs(e.w - t.w) <= i)
		);
	}
	static log(e, t) {
		const i = J.acosClamped(e.w);
		let r = 0;
		return 0 !== i && (r = i / Math.sin(i)), ye.multiplyByScalar(e, r, t);
	}
	static exp(e, t) {
		const i = ye.magnitude(e);
		let r = 0;
		return (
			0 !== i && (r = Math.sin(i) / i), (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), (t.w = Math.cos(i)), t
		);
	}
}
(At.ZERO = Object.freeze(new At(0, 0, 0, 0))), (At.IDENTITY = Object.freeze(new At(0, 0, 0, 1)));
let Pt = new ye();
const Bt = [1, 2, 0],
	Vt = new Array(3);
new At(), new At(), new At(), new At(), new ye(), new ye(), new At(), new At(), new At();
let Ft = new At(),
	$t = new At(),
	Gt = new At(),
	qt = new At();
const kt = new At(),
	Xt = 1.9011074535173003,
	jt = new Float32Array(8),
	Ht = new Float32Array(8),
	Yt = new Float32Array(8),
	Wt = new Float32Array(8);
for (let e = 0; e < 7; ++e) {
	const t = e + 1,
		i = 2 * t + 1;
	(jt[e] = 1 / (t * i)), (Ht[e] = t / i);
}
(jt[7] = Xt / 136), (Ht[7] = (8 * Xt) / 17);
const Zt = new ye(),
	Kt = new ye(),
	Qt = new At(),
	Jt = new At();
class ei {
	constructor() {
		(this._position = new ye()),
			(this._scale = new ye(1, 1, 1)),
			(this._quaternion = new At()),
			(this.modelMatrix = Pe.clone(Pe.IDENTITY, new Pe())),
			(this._normalMatrix = Pe.clone(Pe.IDENTITY, new Pe())),
			(this.up = new ye(0, 1, 0));
	}
	get normalMatrix() {
		return this._normalMatrix;
	}
	get position() {
		return this._position;
	}
	get scale() {
		return this._scale;
	}
	get quaternion() {
		return this._quaternion;
	}
	updateNormalMatrix(e) {
		Pe.inverse(this.modelMatrix, this._normalMatrix), Pe.transpose(this._normalMatrix, this._normalMatrix);
	}
	updateMatrix() {
		this.modelMatrix = Pe.fromTranslationQuaternionRotationScale(
			this.position,
			this.quaternion,
			this.scale,
			this.modelMatrix
		);
	}
	lookAt(e, t, i) {
		si.set(e, t, i),
			this.isCamera || this.isLight
				? ni.lookAt(this.position, si, this.up)
				: ni.lookAt(si, this.position, this.up),
			this.quaternion.setFromRotationMatrix(ni);
	}
	rotateOnAxis(e, t) {
		const i = At.fromAxisAngle(e, t);
		At.multiply(this.quaternion, i, this.quaternion);
	}
	rotateX(e) {
		return this.rotateOnAxis(ti, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(ii, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(ri, e);
	}
}
const ti = new ye(1, 0, 0),
	ii = new ye(0, 1, 0),
	ri = new ye(0, 0, 1),
	ni = new Pe(),
	si = new ye();
new _e(), new Pe();
class ai extends ei {
	constructor(e, t) {
		super(), (this.geometry = e), (this.material = t), (this.type = "primitive");
	}
	update(e, t) {
		this.updateMatrix(),
			this.updateNormalMatrix(t),
			this.geometry.update(e),
			this.material.update(e, this),
			this.geometry.boundingSphere.update(this.modelMatrix),
			this.material.shaderSource.setDefines(e.defines),
			(this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(t));
		const i = e.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		(i !== Nt.INTERSECTING && i !== Nt.INSIDE) ||
			(this.material.transparent ? e.renderQueue.transparent.push(this) : e.renderQueue.opaque.push(this));
	}
	beforeRender() {}
	afterRender() {}
	getDrawCommand(e) {
		return (
			(this.drawCommand && !this.material.dirty) ||
				(this.material.dirty && (this.material.dirty = !1),
				(this.drawCommand = new F({
					vertexBuffer: this.geometry.vertBuffer,
					indexBuffer: this.geometry.indexBuffer,
					shaderData: this.material.shaderData,
					instances: this.instances,
					count: this.geometry.count,
					renderState: this.material.renderState,
					shaderSource: this.material.shaderSource,
					type: "render",
					light: this.material.light
				}))),
			this.material.shaderSource.setDefines(
				Object.assign(this.material.shaderData.defines, this.geometry.defines)
			),
			e ? (e.update(), this.drawCommand.shallowClone(e)) : this.drawCommand
		);
	}
	destroy() {
		this.geometry.destroy(), this.material.destroy();
	}
}
class oi {
	constructor(e = new ye(0, 0, 0), t = 0) {
		(this.center = e), (this.radius = t), (this.originCenter = this.center.clone()), (this.originRadius = t);
	}
	static fromPoints(e) {
		let t = new oi();
		if (!Z(e) || 0 === e.length) return (t.center = ye.clone(ye.ZERO, t.center)), (t.radius = 0), t;
		const i = ye.clone(e[0], di),
			r = ye.clone(i, ci),
			n = ye.clone(i, li),
			s = ye.clone(i, ui),
			a = ye.clone(i, hi),
			o = ye.clone(i, fi),
			c = ye.clone(i, mi),
			l = e.length;
		let u;
		for (u = 1; u < l; u++) {
			ye.clone(e[u], i);
			const t = i.x,
				l = i.y,
				h = i.z;
			t < r.x && ye.clone(i, r),
				t > a.x && ye.clone(i, a),
				l < n.y && ye.clone(i, n),
				l > o.y && ye.clone(i, o),
				h < s.z && ye.clone(i, s),
				h > c.z && ye.clone(i, c);
		}
		const h = ye.magnitudeSquared(ye.subtract(a, r, pi)),
			f = ye.magnitudeSquared(ye.subtract(o, n, pi)),
			m = ye.magnitudeSquared(ye.subtract(c, s, pi));
		let d = r,
			p = a,
			g = h;
		f > g && ((g = f), (d = n), (p = o)), m > g && ((g = m), (d = s), (p = c));
		const x = gi;
		(x.x = 0.5 * (d.x + p.x)), (x.y = 0.5 * (d.y + p.y)), (x.z = 0.5 * (d.z + p.z));
		let v = ye.magnitudeSquared(ye.subtract(p, x, pi)),
			y = Math.sqrt(v);
		const b = xi;
		(b.x = r.x), (b.y = n.y), (b.z = s.z);
		const S = vi;
		(S.x = a.x), (S.y = o.y), (S.z = c.z);
		const E = ye.midpoint(b, S, yi);
		let T = 0;
		for (u = 0; u < l; u++) {
			ye.clone(e[u], i);
			const t = ye.magnitude(ye.subtract(i, E, pi));
			t > T && (T = t);
			const r = ye.magnitudeSquared(ye.subtract(i, x, pi));
			if (r > v) {
				const e = Math.sqrt(r);
				(y = 0.5 * (y + e)), (v = y * y);
				const t = e - y;
				(x.x = (y * x.x + t * i.x) / e), (x.y = (y * x.y + t * i.y) / e), (x.z = (y * x.z + t * i.z) / e);
			}
		}
		return y < T ? (ye.clone(x, t.center), (t.radius = y)) : (ye.clone(E, t.center), (t.radius = T)), t;
	}
	static fromVertices(e, t = ye.ZERO, i = 3) {
		const r = new oi();
		if (!Z(e) || 0 === e.length) return (r.center = ye.clone(ye.ZERO, r.center)), (r.radius = 0), r;
		(t = W(t, ye.ZERO)), (i = W(i, 3));
		const n = di;
		(n.x = e[0] + t.x), (n.y = e[1] + t.y), (n.z = e[2] + t.z);
		const s = ye.clone(n, ci),
			a = ye.clone(n, li),
			o = ye.clone(n, ui),
			c = ye.clone(n, hi),
			l = ye.clone(n, fi),
			u = ye.clone(n, mi),
			h = e.length;
		let f;
		for (f = 0; f < h; f += i) {
			const i = e[f] + t.x,
				r = e[f + 1] + t.y,
				h = e[f + 2] + t.z;
			(n.x = i),
				(n.y = r),
				(n.z = h),
				i < s.x && ye.clone(n, s),
				i > c.x && ye.clone(n, c),
				r < a.y && ye.clone(n, a),
				r > l.y && ye.clone(n, l),
				h < o.z && ye.clone(n, o),
				h > u.z && ye.clone(n, u);
		}
		const m = ye.magnitudeSquared(ye.subtract(c, s, pi)),
			d = ye.magnitudeSquared(ye.subtract(l, a, pi)),
			p = ye.magnitudeSquared(ye.subtract(u, o, pi));
		let g = s,
			x = c,
			v = m;
		d > v && ((v = d), (g = a), (x = l)), p > v && ((v = p), (g = o), (x = u));
		const y = gi;
		(y.x = 0.5 * (g.x + x.x)), (y.y = 0.5 * (g.y + x.y)), (y.z = 0.5 * (g.z + x.z));
		let b = ye.magnitudeSquared(ye.subtract(x, y, pi)),
			S = Math.sqrt(b);
		const E = xi;
		(E.x = s.x), (E.y = a.y), (E.z = o.z);
		const T = vi;
		(T.x = c.x), (T.y = l.y), (T.z = u.z);
		const w = ye.midpoint(E, T, yi);
		let _ = 0;
		for (f = 0; f < h; f += i) {
			(n.x = e[f] + t.x), (n.y = e[f + 1] + t.y), (n.z = e[f + 2] + t.z);
			const i = ye.magnitude(ye.subtract(n, w, pi));
			i > _ && (_ = i);
			const r = ye.magnitudeSquared(ye.subtract(n, y, pi));
			if (r > b) {
				const e = Math.sqrt(r);
				(S = 0.5 * (S + e)), (b = S * S);
				const t = e - S;
				(y.x = (S * y.x + t * n.x) / e), (y.y = (S * y.y + t * n.y) / e), (y.z = (S * y.z + t * n.z) / e);
			}
		}
		return S < _ ? (ye.clone(y, r.center), (r.radius = S)) : (ye.clone(w, r.center), (r.radius = _)), r;
	}
	intersectPlane(e) {
		const t = this.center,
			i = this.radius,
			r = e.normal,
			n = ye.dot(r, t) + e.distance;
		return n < -i ? Nt.OUTSIDE : n < i ? Nt.INTERSECTING : Nt.INSIDE;
	}
	update(e) {
		Pe.multiplyByPoint(e, this.originCenter, this.center),
			(this.radius = Pe.getMaximumScale(e) * this.originRadius);
	}
	distanceToCamera(e) {
		return Math.max(0, ye.distance(this.center, e.position) - this.radius);
	}
}
const ci = new ye(),
	li = new ye(),
	ui = new ye(),
	hi = new ye(),
	fi = new ye(),
	mi = new ye(),
	di = new ye(),
	pi = new ye(),
	gi = new ye(),
	xi = new ye(),
	vi = new ye(),
	yi = new ye();
class bi {
	constructor(e, t, i) {
		(this.index = t || 0), (this.attributes = e || void 0), (this.stepMode = C.Vertex), (this.dirty = !0);
	}
	getBufferDes() {
		return [
			{ arrayStride: this.arrayStride, stepMode: this.stepMode, attributes: this.attributes.getGPUAttributes() }
		];
	}
	setAttributes(e) {
		(this.attributes = e), (this.dirty = !0);
	}
	bind(e, t) {
		if (this.dirty) {
			this.dirty = !1;
			const { arrayStride: t, typeArray: i } = this.attributes.getMeregeAtrributeValues();
			(this.arrayStride =
				4 *
				t.reduce(function (e, t, i, r) {
					return e + t;
				}, 0)),
				(this.buffer = V.createVertexBuffer(e, i));
		}
		t.setVertexBuffer(this.index, this.buffer.gpuBuffer);
	}
	destroy() {
		this.buffer.destroy();
	}
}
class Si {
	constructor() {
		(this._attributes = new Map()), (this.shaderLocation = 0), (this.offset = 0);
	}
	getAttribute(e) {
		return this._attributes.get(e);
	}
	setAttribute(e) {
		this._attributes.has(e.name) ||
			((e.shaderLocation = this.shaderLocation),
			(this.shaderLocation += 1),
			(e.offset = this.offset),
			(this.offset += e.attributeByteSize),
			this._attributes.set(e.name, e));
	}
	getGPUAttributes() {
		const e = [];
		return (
			this._attributes.forEach((t) => {
				e.push(t.getGPUAttribute());
			}),
			e
		);
	}
	getMeregeAtrributeValues() {
		const e = [],
			t = [];
		return (
			this._attributes.forEach((i) => {
				e.push(i.itemSize), t.push(i.value);
			}),
			{ arrayStride: e, typeArray: this.interleaveTypedArray(Float32Array, e, ...t) }
		);
	}
	destroy() {
		this._attributes.forEach((e) => {
			e.destroy();
		});
	}
	interleaveTypedArray(e, t, ...i) {
		const r = i.reduce((e, t) => e + t.length, 0),
			n = new e(r),
			s = t.reduce((e, t) => e + t);
		for (let e = 0; e < r; e++) {
			let r = 0;
			for (let a = 0; a < t.length; a++) for (let o = 0; o < t[a]; o++) (n[e * s + r] = i[a][t[a] * e + o]), r++;
		}
		return n;
	}
}
class Ei {
	constructor(e) {
		(this.indices = e), (this.indexFormat = U.Uint16), (this.dirty = !0);
	}
	setIndices(e) {
		(this.indices = e), (this.dirty = !0);
	}
	bind(e, t) {
		this.dirty &&
			((this.dirty = !1),
			(this.buffer = V.createIndexBuffer(
				e,
				this.indexFormat == U.Uint16 ? new Uint16Array(this.indices) : new Uint32Array(this.indices)
			))),
			t.setIndexBuffer(this.buffer.gpuBuffer, this.indexFormat);
	}
	destroy() {
		this.buffer.destroy();
	}
}
function Ti(e, t, i) {
	i = W(i, !1);
	const r = {},
		n = Z(e),
		s = Z(t);
	let a, o, c;
	if (n)
		for (a in e)
			e.hasOwnProperty(a) &&
				((o = e[a]),
				s && i && "object" == typeof o && t.hasOwnProperty(a)
					? ((c = t[a]), (r[a] = "object" == typeof c ? Ti(o, c, i) : o))
					: (r[a] = o));
	if (s) for (a in t) t.hasOwnProperty(a) && !r.hasOwnProperty(a) && ((c = t[a]), (r[a] = c));
	return r;
}
class wi {
	get defines() {
		return this._defines;
	}
	set defines(e) {
		(this.definesDirty = !0), (this._defines = Ti(e, this._defines, !1));
	}
	constructor(e) {
		(this.type = e.type || void 0),
			(this.boundingSphere = void 0),
			(this.dirty = !1),
			(this.definesDirty = !0),
			(this.attributes = new Si()),
			(this.vertBuffer = new bi(this.attributes, 0)),
			(this._defines = {});
	}
	getAttribute(e) {
		return this.attributes.getAttribute(e);
	}
	setAttribute(e) {
		this.attributes.setAttribute(e);
	}
	setIndice(e) {
		this.indexBuffer || (this.indexBuffer = new Ei()), this.indexBuffer.setIndices(e);
	}
	update(e) {}
	computeBoundingSphere(e) {
		this.boundingSphere = oi.fromVertices(e, new ye(0, 0, 0), 3);
	}
	destroy() {
		this?.indexBuffer.destroy(), this.vertBuffer.destroy(), this.attributes.destroy();
	}
}
const _i = /#([^\s]*)(\s*)/gm;
function Ri(e, ...t) {
	const i = [];
	let r = { frag: "", elseIsValid: !1, expression: !0 },
		n = 1;
	for (let s = 0; s < e.length; ++s) {
		const a = e[s],
			o = a.matchAll(_i);
		let c = 0,
			l = !1;
		for (const e of o) {
			switch (((r.frag += a.substring(c, e.index)), e[1])) {
				case "if":
					if (e.index + e[0].length != a.length)
						throw new Error("#if must be immediately followed by a template expression (ie: ${value})");
					(l = !0), i.push(r), n++, (r = { frag: "", elseIsValid: !0, expression: !!t[s] });
					break;
				case "elif":
					if (e.index + e[0].length != a.length)
						throw new Error("#elif must be immediately followed by a template expression (ie: ${value})");
					if (!r.elseIsValid) throw new Error("#elif not preceeded by an #if or #elif");
					(l = !0),
						r.expression && i.length != n && i.push(r),
						(r = { frag: "", elseIsValid: !0, expression: !!t[s] });
					break;
				case "else":
					if (!r.elseIsValid) throw new Error("#else not preceeded by an #if or #elif");
					r.expression && i.length != n && i.push(r), (r = { frag: e[2], elseIsValid: !1, expression: !0 });
					break;
				case "endif":
					if (!i.length) throw new Error("#endif not preceeded by an #if");
					const o = i.length == n ? i.pop() : r;
					(r = i.pop()), n--, o.expression && (r.frag += o.frag), (r.frag += e[2]);
					break;
				default:
					r.frag += e[0];
			}
			c = e.index + e[0].length;
		}
		c != a.length && (r.frag += a.substring(c, a.length)), !l && t.length > s && (r.frag += t[s]);
	}
	if (i.length) throw new Error("Mismatched #if/#endif count");
	return r.frag;
}
const Ui = {
	light: function (e) {
		return Ri`  
    struct LightColor{
        color:vec3<f32>,
    } 
    #if ${e.spotLightsCount > 0}
        struct SpotLight {
            position: vec3<f32>,
            distance: f32,
            direction: vec3<f32>,
            coneCos: f32,
            color: vec3<f32>,
            penumbraCos: f32,
            decay: f32,
        };
        fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->LightColor{
                var direction:vec3<f32> = spotLight.position - worldPos;
                var lightColor:LightColor;
                let lightDistance:f32 = length(direction);
                direction = normalize(direction);
                let angleCos:f32 = dot( direction, -spotLight.direction );
                let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);
                let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
                let decayTotal:f32 = decay * spotEffect;
                let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;
                lightColor.color= spotLight.color * d;
                let halfDir:vec3<f32> = normalize( V + direction );
                let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;
                lightColor.color= spotLight.color * s;
                return lightColor;
           }
    #endif 

    #if ${e.pointLightsCount > 0}
        struct PointLight {
            position: vec3<f32>,
            distance: f32,
            color: vec3<f32>,
            decay: f32,
        };
        fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->LightColor{
            var lightColor:LightColor;
            var direction:vec3<f32> = worldPos - pointLight.position;
            let dist:f32 = length( direction );
            direction = normalize(direction);
            let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);
    
            let d =  max( dot( N, -direction ), 0.0 ) * decay;
            lightColor.color += pointLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;
            lightColor.color += pointLight.color * s;
            return lightColor;
           }
    #endif
    #if ${e.dirtectLightsCount > 0}
        struct DirtectLight {
            direction: vec3<f32>,
            color: vec3<f32>,
        };
        fn getDirtectLightInfo(directionalLight:DirtectLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->LightColor{
            var lightColor:LightColor;
            let d:f32 = max(dot(N, -directionalLight.direction), 0.0);
            lightColor.color += directionalLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - directionalLight.direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );
            lightColor.color += directionalLight.color * s;
            return lightColor;
        }
    #endif
    #if ${e.ambientLightCount || e.spotLightsCount || e.pointLightsCount || e.dirtectLightsCount}
    struct LightUniforms{
        #if ${e.ambientLightCount}
            ambient:vec3<f32>,
        #endif
        #if ${e.spotLightsCount}
            spotLights:array<SpotLight,${e.spotLightsCount}>,
        #endif
        #if ${e.pointLightsCount}
            pointLights:array<PointLight,${e.pointLightsCount}>,
        #endif
        #if ${e.dirtectLightsCount}
            dirtectLights:array<DirtectLight,${e.dirtectLightsCount}>,
        #endif
        
    }
    @group(2) @binding(0) var<storage, read> lightUniforms: LightUniforms;
    #endif
    // #include <blinn_phong>
    #if ${e.materialPhong}
    //worldPos:vec3<f32,shininess:f32,N:f32,V:f32
        //fn parseLights(geometry:GeometricContext,material:BlinnPhongMaterial)->ReflectedLight{
        fn parseLights(worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32> {
    #elif ${e.materialPbr}
        fn parseLights(geometry:GeometricContext,material:PhysicalMaterial)->ReflectedLight{
    #endif

        // var  incidentLight:IncidentLight;
        // var reflectedLight:ReflectedLight;
        var lightColor = vec3<f32>( 0.0, 0.0, 0.0 );
        #if ${e.spotLightsCount > 0}
            //处理聚光灯
            // var spotLight:SpotLight;
            for (var k = 0u; k < ${e.spotLightsCount}; k = k + 1u) {
                var spotLight:SpotLight = lightUniforms.spotLights[k];
               // incidentLight =getSpotLightInfo( spotLight, geometry);
                #if ${e.materialPhong}
                    //let spReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                    lightColor=lightColor+getSpotLightInfo(spotLight,worldPos,shininess,N,V).color;
                #elif ${e.materialPbr}
                    let spReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
                #endif
                // reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
                // reflectedLight.directSpecular+=spReflectedLight.directSpecular;
            }
        #endif
        #if ${e.pointLightsCount > 0}
            //处理点光源
            var pointLight:PointLight;
            for (var j= 0u; j < ${e.pointLightsCount};j = j + 1u) {
                pointLight = lightUniforms.pointLights[j];
                // incidentLight =getPointLightInfo( pointLight, geometry);
                #if ${e.materialPhong}
                lightColor=lightColor+getPointLightInfo(pointLight,worldPos,shininess,N,V).color;
                    //let poiReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${e.materialPbr}
                    let poiReflectedLight=RE_Direct_Physical(incidentLight, geometry, material);
                #endif
                // reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
                // reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
            }
        #endif
        #if ${e.dirtectLightsCount > 0}
        //处理方向光
        var dirtectLight:DirtectLight;
        for (var i= 0u; i <${e.dirtectLightsCount}; i = i + 1u) {
            dirtectLight = lightUniforms.dirtectLights[i];
            //incidentLight=getDirtectLightInfo(dirtectLight, geometry);
            #if ${e.materialPhong}
                //let dirReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                lightColor=lightColor+getDirtectLightInfo(dirtectLight,shininess,N,V).color;
            #elif ${e.materialPbr}
                let dirReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
            #endif
            
            // reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
            // reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
        }
    #endif
        return lightColor;
        // return reflectedLight;
    }`;
	},
	brdf: function (e) {
		return "\n        fn BRDF_Lambert(diffuseColor:vec3<f32>)->vec3<f32> {\n\n            return RECIPROCAL_PI * diffuseColor;\n\n        } // validated\n\n        fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {\n\n            // Original approximation by Christophe Schlick '94\n            // float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n            // Optimized variant (presented by Epic at SIGGRAPH '13)\n            // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n            let fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n            return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n        } // validated\n\n        fn Schlick_to_F0(f:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {\n            let x:f32 = clamp( 1.0 - dotVH, 0.0, 1.0 );\n            let x2:f32 = x * x;\n            let x5:f32 = clamp( x * x2 * x2, 0.0, 0.9999 );\n\n            return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n        }\n        fn V_GGX_SmithCorrelated( alpha:f32, dotNL:f32,dotNV:f32 )->f32 {\n\n            let a2 :f32= pow2( alpha );\n\n            let gv:f32 = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n            let gl:f32 = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n            return 0.5 / max((gv + gl), 0.000000001 );\n\n        }\n        fn D_GGX( alpha:f32, dotNH:f32 )->f32 {\n\n            let a2:f32 = pow2( alpha );\n\n            let denom:f32 = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n            return RECIPROCAL_PI * a2 / pow2( denom );\n\n        }\n        fn BRDF_GGX( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, f0:vec3<f32>, f90:f32, roughness:f32 )->vec3<f32> {\n\n            let alpha:f32 = pow2( roughness ); // UE4's roughness\n\n            let halfDir = normalize( lightDir + viewDir );\n\n            let dotNL:f32 = saturate( dot( normal, lightDir ) );\n            let dotNV:f32 = saturate( dot( normal, viewDir ) );\n            let dotNH:f32 = saturate( dot( normal, halfDir ) );\n            let dotVH:f32 = saturate( dot( viewDir, halfDir ) );\n\n            let F = F_Schlick( f0, f90, dotVH );\n\n            let V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n            let D = D_GGX( alpha, dotNH );\n\n            return F * ( V * D );\n\n        }\n\n  ";
	},
	phongFunction: function (e) {
		return "\n    fn G_BlinnPhong_Implicit( )->f32 {\n\n        // geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n        return 0.25;\n\n    }\n    fn D_BlinnPhong( shininess:f32, dotNH:f32 )->f32 {\n\n        return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow(dotNH, shininess);\n\n    }\n    fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {\n\n        let  halfDir = normalize( lightDir + viewDir );\n\n        let  dotNH:f32 = saturate( dot( normal, halfDir ) );\n        let dotVH:f32 = saturate( dot( viewDir, halfDir ) );\n\n        let F = F_Schlick( specularColor, 1.0, dotVH );\n\n        let G:f32 = G_BlinnPhong_Implicit( );\n\n        let D = D_BlinnPhong( shininess, dotNH );\n\n        return F * ( G * D );\n\n    } \n    fn RE_Direct_BlinnPhong(  directLight:IncidentLight,geometry:GeometricContext, material:BlinnPhongMaterial )->ReflectedLight{\n        var reflectedLight:ReflectedLight; \n        let dotNL:f32 = saturate(dot(geometry.normal, directLight.direction));\n        let irradiance:vec3<f32> = dotNL*directLight.color;\n\n        reflectedLight.directDiffuse= irradiance * BRDF_Lambert( material.diffuseColor );\n\n        reflectedLight.directSpecular= irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n        return reflectedLight;\n    }\n    fn RE_IndirectDiffuse_BlinnPhong( irradiance:vec3<f32>, geometry:GeometricContext, material:BlinnPhongMaterial)->ReflectedLight {\n        var reflectedLight:ReflectedLight; \n        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n        return reflectedLight;\n    }\n    ";
	},
	phongUtils: function (e) {
		return "\n   struct BlinnPhongMaterial {\n        diffuseColor:vec3<f32>,\n        specularColor:vec3<f32>,\n        specularShininess:f32,\n        specularStrength:f32,\n    };\n    const RECIPROCAL_PI:f32= 0.3183098861837907;\n   fn pow2( x:f32 )->f32 { return x*x; }\n   fn pow3( x:f32 )->f32 { return x*x*x; }\n   fn pow4(x:f32 )->f32 { let x2 = x*x; return x2*x2; }\n   fn max3( v:vec3<f32> )->f32 { return max( max( v.x, v.y ), v.z ); }\n   fn average(v:vec3<f32> )->f32 { \n       let result=vec3<f32>( 0.3333333,  0.3333333, 0.3333333);\n       return dot( v,result ); \n   }\n   ";
	},
	lightCommon: function (e) {
		return Ri`
    struct ReflectedLight {
        directDiffuse:vec3<f32>,
        directSpecular:vec3<f32>,
        indirectDiffuse:vec3<f32>,
        indirectSpecular:vec3<f32>,
    };
    struct IncidentLight {
        color: vec3<f32>,
        direction: vec3<f32>,
        visible: bool,
    };
    struct GeometricContext {
        position: vec3<f32>,
        normal: vec3<f32>,
        viewDir: vec3<f32>,
        #if ${e.USE_CLEARCOAT}
            vec3 clearcoatNormal;
        #endif
    };
    fn getAmbientLightIrradiance(ambientLightColor: vec3<f32>) -> vec3<f32> {
        let irradiance = ambientLightColor;
        return irradiance;
    }
    fn getDistanceAttenuation(lightDistance: f32, cutoffDistance: f32, decayExponent: f32) -> f32 {
        if (cutoffDistance > 0.0 && decayExponent > 0.0) {
            let x:f32 = saturate(- lightDistance / cutoffDistance + 1.0);
            return pow(x, decayExponent);
        }
        return 1.0;
    }
    fn getSpotAttenuation(coneCosine: f32, penumbraCosine: f32, angleCosine: f32) -> f32 {
        return smoothstep(coneCosine, penumbraCosine, angleCosine);
    }
    fn shGetIrradianceAt( normal:vec3<f32>, shCoefficients:array<vec3<f32>,9>)->vec3<f32> {
        let x:f32 = normal.x; 
        let y:f32 = normal.y; 
        let z:f32 = normal.z;
        var result:vec3<f32> = shCoefficients[ 0 ] * 0.886227;
        result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
        result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
        result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
        result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
        result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
        result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
        result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
        result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
        return result;
    }
    fn inverseTransformDirection( dir:vec3<f32>, matrix:mat4x4<f32> )->vec3<f32> {
        return normalize( ( vec4<f32>( dir, 0.0 ) * matrix ).xyz );
    }
    fn getLightProbeIrradiance( lightProbe:array<vec3<f32>,9>, normal:vec3<f32>,viewMatrix:mat4x4<f32> )->vec3<f32> {
        let worldNormal:vec3<f32> = inverseTransformDirection( normal,viewMatrix );
        let irradiance:vec3<f32> = shGetIrradianceAt( worldNormal, lightProbe );
        return irradiance;
    }
 `;
	},
	pbrStruct: function (e) {
		return Ri`
        struct MaterialUniform{

            modelMatrix: mat4x4<f32>,
    
            diffuse:vec3<f32>,
    
            opacity:f32,
    
            normalMatrix: mat3x3<f32>,
    
            emissive:vec3<f32>,
    
            roughness:f32,
    
            metalness:f32,
    
            #if ${e.TONE_MAPPING}
                toneMappingExposure:f32,
            #endif
           
            #if ${e.SPECULAR}
    
                 specularColor:vec3<f32>,
    
                 specularIntensity:f32,
            #endif
            
            #if ${e.USE_SHEEN}
    
                sheenColor:vec3<f32>,
    
                sheenRoughness:f32,
            #endif

            #if ${e.USE_TRANSMISSION}
    
                attenuationColor:vec3<f32>,
    
                transmission:f32,
    
                transmissionSamplerSize:vec2<f32>,
    
                thickness:f32,
    
                attenuationDistance:f32,
                
            #endif

            #if ${e.USE_SKINNING}
    
                bindMatrix:mat4x4<f32>,
    
                bindMatrixInverse:mat4x4<f32>,
    
                boneTextureSize:u32,
            #endif

            #if ${e.USE_NORMALTEXTURE}
                 normalScale:vec2<f32>,
            #endif
    
            #if ${e.IOR}
                ior:f32,
            #endif
    
            #if ${e.USE_CLEARCOAT}
    
                #if ${e.USE_CLEARCOAT_NORMALTEXTURE}
                    clearcoatNormalScale:vec2<f32>,
                #endif
    
                 clearcoat:f32,
    
                 clearcoatRoughness:f32,
            #endif
    
            #if ${e.USE_IRIDESCENCE}
                iridescence:f32,
    
                iridescenceIOR:f32,
    
                iridescenceThicknessMinimum:f32,
    
                iridescenceThicknessMaximum:f32,
    
            #endif

            #if ${e.USE_AOTEXTURE}
                 aoTextureIntensity:f32,
            #endif

            #if ${e.USE_LIGHTTEXTURE}
                 lightTextureIntensity:f32,
            #endif
    
            #if ${e.USE_ENVTEXTURE}
                envTextureIntensity:f32,
    
                flipEnvTexture:f32,
            #endif

            #if ${e.USE_BUMPTEXTURE}
                bumpScale:f32;
            #endif

            #if ${e.USE_DISPLACEMENTTEXTURE}
    
                displacementScale:f32,
    
                displacementBias:f32,
            #endif
            
            #if ${e.USE_MORPHTARGETS}
    
                morphTargetBaseInfluence:f32,
    
                #if ${e.MORPHTARGETS_TEXTURE} 
    
                    morphTargetsTextureSize:vec2<u32>,
    
                    MORPHTARGETS_COUNT:u32,
    
                #endif
    
                morphTargetInfluences:array<f32>,
                    
            #endif
        }

   `;
	},
	pbrFunction: function (e) {
		return Ri`

    #if ${e.DITHERING}
        fn dithering(color:vec3<f32> )->vec3<f32> {
            let grid_position:f32 = rand( gl_FragCoord.xy );
            let dither_shift_RGB:vec3<f32> = vec3<f32>( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
            dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
            return color + dither_shift_RGB;
        }
    #endif

    #if ${e.USE_IRIDESCENCE}
        fn BRDF_GGX_Iridescence( lightDir:vec3<f32>, viewDir:vec3<f32>,normal:vec3<f32>, f0:vec3<f32>, f90:f32,iridescence:f32, iridescenceFresnel:vec3<f32>,roughness:f32 )->vec3<f32> {
            let alpha:f32 = pow2( roughness );
            let halfDir:vec3<f32> = normalize( lightDir + viewDir );
            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let dotVH:f32 = saturate( dot( viewDir, halfDir ) );
            let F:vec3<f32> = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
            let V:f32 = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
            let D:f32 = D_GGX( alpha, dotNH );
            return F * ( V * D );
        }
    #endif

    #if ${e.USE_SHEEN}
        fn D_Charlie( roughness:f32,dotNH:f32 )->f32 {
            let alpha:f32 = pow2( roughness );
            let invAlpha:f32 = 1.0 / alpha;
            let cos2h:f32 = dotNH * dotNH;
            let sin2h:f32 = max( 1.0 - cos2h, 0.0078125 );
            return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
        }
        fn V_Neubelt( dotNV:f32, dotNL:f32 )->f32 {
            return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
        }
        fn BRDF_Sheen(lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>,sheenColor:vec3<f32>,sheenRoughness:f32 )->vec3<f32> {
            let halfDir:vec3<f32> = normalize( lightDir + viewDir );
            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let D:f32 = D_Charlie( sheenRoughness, dotNH );
            let V:f32 = V_Neubelt( dotNV, dotNL );
            return sheenColor * ( D * V );
        }
    #endif

    #if ${e.USE_IRIDESCENCE}
        let XYZ_TO_REC709: mat3x3<f32> = mat3x3<f32>(
        3.2404542, -0.9692660, 0.0556434, -1.5371385, 1.8760108, -0.2040259, -0.4985314, 0.0415560, 1.0572252
        );
        fn Fresnel0ToIor( fresnel0:vec3<f32> )->vec3<f32> {
            let sqrtF0:vec3<f32> = sqrt( fresnel0 );
            return ( vec3<f32>( 1.0 ) + sqrtF0 ) / ( vec3<f32>( 1.0 ) - sqrtF0 );
        }
        fn IorToFresnel0(transmittedIor:vec3<f32>,incidentIor:f32 )->vec3<f32> {
            return pow2Vector( ( transmittedIor - vec3<f32>( incidentIor ) ) / ( transmittedIor + vec3<f32>( incidentIor ) ) );
        }
        fn IorToFresnel0(transmittedIor:f32, incidentIor:f32 )->f32 {
            return pow2Vector( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
        }
        fn evalSensitivity(OPD:f32,shift:vec3<f32> )->vec3<f32> {
            let phase:f32 = 2.0 * PI * OPD * 1.0e-9;
            let val:vec3<f32> = vec3<f32>( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
            let pos:vec3<f32> = vec3<f32>( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
            let vart:vec3<f32> = vec3<f32>( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
            let xyz:vec3<f32> = val * sqrt( 2.0 * PI * vart ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * vart );
            xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
            xyz /= 1.0685e-7;
            let rgb:vec3<f32> = XYZ_TO_REC709 * xyz;
            return rgb;
        }
        fn evalIridescence(outsideIOR:f32, eta2:f32,cosTheta1:f32,thinFilmThickness:f32,baseF0:vec3<f32> )->vec3<f32> {
            var I:vec3<f32>;
            let iridescenceIOR:f32 = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
            let sinTheta2Sq:f32 = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
            let cosTheta2Sq:f32 = 1.0 - sinTheta2Sq;
            if ( cosTheta2Sq < 0.0 ) {
                return vec3<f32>( 1.0 );
            }
            let cosTheta2:f32 = sqrt( cosTheta2Sq );
            let R0:f32 = IorToFresnel0( iridescenceIOR, outsideIOR );
            let R12:f32 = F_Schlick( R0, 1.0, cosTheta1 );
            let R21:f32 = R12;
            let T121:f32 = 1.0 - R12;
            let phi12:f32 = 0.0;
            if ( iridescenceIOR < outsideIOR ) phi12 = PI;
            let phi21:f32 = PI - phi12;
            let baseIOR:vec3<f32> = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );
            let R1:vec3<f32> = IorToFresnel0( baseIOR, iridescenceIOR );
            let R23:vec3<f32> = F_Schlick( R1, 1.0, cosTheta2 );
            let phi23:vec3<f32> = vec3<f32>( 0.0 );
            if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
            if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
            if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
            let OPD:f32 = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
            let phi:vec3<f32> = vec3<f32>( phi21 ) + phi23;
            let R123:vec3<f32> = clamp( R12 * R23, 1e-5, 0.9999 );
            let r123:vec3<f32> = sqrt( R123 );
            let Rs:vec3<f32> = pow2( T121 ) * R23 / ( vec3<f32>( 1.0 ) - R123 );
            let C0:vec3<f32> = R12 + Rs;
            I = C0;
            let Cm:vec3<f32> = Rs - T121;
            for ( let m : u32 = 1;m <= 2; ++ m ) {
                Cm *= r123;
                Sm:vec3<f32> = 2.0 * evalSensitivity( f32( m ) * OPD, f32( m ) * phi );
                I += Cm * Sm;
            }
            return max( I, vec3<f32>( 0.0 ) );
        }
    #endif
    const clearcoatSpecular:vec3<f32> = vec3<f32>( 0.0 );
    const sheenSpecular:vec3<f32> = vec3<f32>( 0.0 );

    fn IBLSheenBRDF( normal:vec3<f32>, viewDir:vec3<f32>, roughness:f32 )->f32 {
        let dotNV:f32 = saturate( dot( normal, viewDir ) );
        let r2:f32 = roughness * roughness;
        let a:f32 =select(-8.48 * r2 + 14.3 * roughness - 9.95,-339.2 * r2 + 161.4 * roughness - 25.9,roughness < 0.25);
        //let a:f32 = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
        let b:f32=select(1.97 * r2 - 3.27 * roughness + 0.72,44.0 * r2 - 23.7 * roughness + 3.26, roughness < 0.25);
        //let b:f32 = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
        //let DG:f32 = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
        let DG:f32 = exp( a * dotNV + b ) + select(0.1 * ( roughness - 0.25 ),0.0,roughness < 0.25);
        return saturate( DG * RECIPROCAL_PI );
    }
    fn DFGApprox( normal:vec3<f32>, viewDir:vec3<f32>,roughness:f32 )->vec2<f32> {
        let dotNV:f32 = saturate( dot( normal, viewDir ) );
        const c0:vec4<f32> = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );
        let c1:vec4<f32> = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );
        let r:vec4<f32> = roughness * c0 + c1;
        let a004:f32 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
        let fab:vec2<f32> = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;
        return fab;
    }
    fn EnvironmentBRDF( normal:vec3<f32>,viewDir:vec3<f32>,specularColor:vec3<f32>, specularF90:f32,roughness:f32 )->vec3<f32> {
        let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );
        return specularColor * fab.x + specularF90 * fab.y;
    }


    fn computeSpecularOcclusion( dotNV:f32, ambientOcclusion:f32, roughness:f32 )->f32 {
        return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
    }
    #if ${e.USE_TRANSMISSION}

    fn getVolumeTransmissionRay( n:vec3<f32>, v:vec3<f32>, thickness:f32, ior:f32, modelMatrix:mat4x4:f32)->vec3<f32> {
        var refractionVector:vec3<f32> = refract( - v, normalize( n ), 1.0 / ior );
        var modelScale:vec3<f32>;
        modelScale.x = length( vec3<f32>( modelMatrix[0].xyz ) );
        modelScale.y = length( vec3<f32>( modelMatrix[1].xyz ) );
        modelScale.z = length( vec3<f32>( modelMatrix[2].xyz ) );
        return normalize( refractionVector ) * thickness * modelScale;
    }
    fn applyIorToRoughness(roughness:f32, ior:f32 )->f32 {
        return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
    }
    fn getTransmissionSample( fragCoord:vec2<f32>, roughness:f32,ior:f32 )->vec4<f32> {
        let framebufferLod:f32 = log2( materialUniform.transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        return textureSampleLevel(transmissionSamplerTexture,baseSampler,fragCoord.xy, framebufferLod);

    }
    fn applyVolumeAttenuation( radiance:vec3<vec3>, transmissionDistance:f32,attenuationColor:vec3<f32>,attenuationDistance:f32 )->vec3<f32> {
        if ( isinf( attenuationDistance ) ) {
            return radiance;
        }
        else {
            let attenuationCoefficient:vec3<f32> = -log( attenuationColor ) / attenuationDistance;
            let transmittance:vec3<f32> = exp( - attenuationCoefficient * transmissionDistance );
            return transmittance * radiance;
        }
    
    }
    fn getIBLVolumeRefraction( n:vec3<f32>,v:vec3<f32>, roughness:f32, diffuseColor:vec3<f32>,specularColor:vec3<f32>, specularF90:f32,position:vec3<f32>, modelMatrix:mat4x4<f32>, viewMatrix:mat4x4<f32>,projMatrix:mat4x4<f32>,ior:f32, thickness:f32,attenuationColor:vec3<f32>,attenuationDistance:f32 )->vec4<f32> {
        let transmissionRay:vec3<f32> = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        let refractedRayExit:vec3<f32> = position + transmissionRay;
        let ndcPos:vec4<f32> = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
        let refractionCoords:vec2<f32> = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;
        let transmittedLight:vec4<f32> = getTransmissionSample( refractionCoords, roughness, ior );
        let attenuatedColor:vec3<f32> = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
        let F:vec3<f32> = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
        return vec4<f32>( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
    }
    #endif

    #if ${e.USE_BUMPTEXTURE}
        fn dHdxy_fwd()->vec2<f32> {
            let dSTdx:vec2<f32> = dpdx( vUv );
            let dSTdy:vec2<f32> = dpdy( vUv );

            let Hll:f32 = materialUniform.bumpScale * textureSample(bumpTexture, baseSampler, vUv).x;
            let dBx:f32 = materialUniform.bumpScale * textureSample(bumpTexture, baseSampler, vUv + dSTdx).x - Hll;
            let dBy:f32 = materialUniform.bumpScale * textureSample(bumpTexture, baseSampler, vUv + dSTdy).x - Hll;
            return vec2<f32>( dBx, dBy );
        }
        fn perturbNormalArb( surf_pos:vec3<f32>, surf_norm:vec3<f32>, dHdxy:vec2<f32>, faceDirection:f32 )->vec3<f32> {
            let vSigmaX:vec3<f32> = dpdx( surf_pos.xyz );
            let vSigmaY:vec3<f32> = dpdy( surf_pos.xyz );
            let vN:vec3<f32> = surf_norm;
            let R1:vec3<f32> = cross( vSigmaY, vN );
            let R2:vec3<f32> = cross( vN, vSigmaX );
            let fDet:f32 = dot( vSigmaX, R1 ) * faceDirection;
            let vGrad:vec3<f32> = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
            return normalize( abs( fDet ) * surf_norm - vGrad );
        }
    #endif

    //! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALTEXTURE ) || defined ( USE_CLEARCOAT_NORMALTEXTURE ) )
    #if ${(!e.USE_TANGENT && e.TANGENTSPACE_NORMALTEXTURE) || e.USE_CLEARCOAT_NORMALTEXTURE}
    fn perturbNormal2Arb( eye_pos:vec3<f32>, surf_norm:vec3<f32>, textureN:vec3<f32>, faceDirection:f32 )->vec3<f32> {
        let q0:vec3<f32> = dpdx( eye_pos.xyz );
        let q1:vec3<f32> = dpdy( eye_pos.xyz );
        let st0:vec2<f32> = dpdx( vUv.st );
        let st1:vec2<f32> = dpdy( vUv.st );
        let N:vec3<f32> = surf_norm;
        let q1perp:vec3<f32> = cross( q1, N );
        let q0perp:vec3<f32> = cross( N, q0 );
        let T:vec3<f32> = q1perp * st0.x + q0perp * st1.x;
        let B:vec3<f32> = q1perp * st0.y + q0perp * st1.y;
        let det:f32 = max( dot( T, T ), dot( B, B ) );
        let scale:f32 = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
        return normalize( T * ( textureN.x * scale ) + B * ( textureN.y * scale ) + N * textureN.z );
    }
    #endif
    struct MultiAndSingleScatter{
        multiScatter:vec3<f32>,
        singleScatter:vec3<f32>
    }
   #if ${e.USE_IRIDESCENCE}
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscatteringIridescence( normal:vec3<f32>, viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, iridescence:f32,iridescenceF0:vec3<f32>, roughness:f32 )->MultiAndSingleScatter {
   #else
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscattering( normal:vec3<f32>,viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, roughness:f32)->MultiAndSingleScatter {
   #endif
   let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );

   var multiAndSingleScatter:MultiAndSingleScatter;

   #if ${e.USE_IRIDESCENCE}
       let Fr:vec3<f32> = mix( specularColor, iridescenceF0, iridescence );
   #else
       let Fr:vec3<f32> = specularColor;
   #endif
       let FssEss:vec3<f32> = Fr * fab.x + specularF90 * fab.y;
       let Ess:f32 = fab.x + fab.y;
       let Ems:f32 = 1.0 - Ess;
       let Favg:vec3<f32> = Fr + ( 1.0 - Fr ) * 0.047619;
       let Fms:vec3<f32> = FssEss * Favg / ( 1.0 - Ems * Favg );
    //    singleScatter += FssEss;
    //    multiScatter += Fms * Ems;
       multiAndSingleScatter.multiScatter=Fms * Ems;
       multiAndSingleScatter.singleScatter=FssEss;
       return multiAndSingleScatter;
   }
   //直接光照
   fn RE_Direct_Physical( directLight:IncidentLight, geometry:GeometricContext,  material:PhysicalMaterial)->ReflectedLight {
       var reflectedLight:ReflectedLight;
       let dotNL:f32 = saturate(dot( geometry.normal, directLight.direction));
       let irradiance:vec3<f32> = dotNL * directLight.color;
       #if ${e.USE_CLEARCOAT}
           let dotNLcc:f32 = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
           let ccIrradiance:vec3<f32> = dotNLcc * directLight.color;
           clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif

       #if ${e.USE_SHEEN}
           sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
       #endif

       #if ${e.USE_IRIDESCENCE}
           reflectedLight.directSpecular = irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
       #else
           reflectedLight.directSpecular = irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
       #endif
       reflectedLight.directDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );
       return reflectedLight;
   }
   //间接光照
   fn RE_IndirectDiffuse_Physical( irradiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial )->ReflectedLight {
       var reflectedLight:ReflectedLight;
       reflectedLight.indirectDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );
       return reflectedLight;
   }
   //间接高光
   fn RE_IndirectSpecular_Physical( radiance:vec3<f32>, irradiance:vec3<f32>, clearcoatRadiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial)->ReflectedLight {
       var reflectedLight:ReflectedLight;
       #if ${e.USE_CLEARCOAT}
           clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif
       #if ${e.USE_SHEEN}
           sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
       #endif
       var singleScattering:vec3<f32>;
       var multiScattering:vec3<f32>;
       let cosineWeightedIrradiance:vec3<f32> = irradiance * RECIPROCAL_PI;
       var tempMultiAndSingleScatter:MultiAndSingleScatter;
       #if ${e.USE_IRIDESCENCE}
             tempMultiAndSingleScatter=computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
       #else
            tempMultiAndSingleScatter= computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness );
       #endif
       singleScattering=tempMultiAndSingleScatter.singleScatter; 
       multiScattering=tempMultiAndSingleScatter.multiScatter;
       let totalScattering:vec3<f32> = singleScattering + multiScattering;
       let diffuse:vec3<f32> = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
       reflectedLight.indirectSpecular = radiance * singleScattering;
       reflectedLight.indirectSpecular = multiScattering * cosineWeightedIrradiance;
       reflectedLight.indirectDiffuse = diffuse * cosineWeightedIrradiance;
       return reflectedLight;
   }
   `;
	},
	pbrTexture: function (e) {
		return Ri`        
            #if ${e.USE_BUMPTEXTURE}
                @group(0) @binding(${e.bumpTextureBinding}) var bumpTexture: texture_2d<f32>;
            #endif
            #if ${e.USE_TRANSMISSION}
                #if ${e.USE_TRANSMISSIONTEXTURE}
                    @group(0) @binding(${e.transmissionTextureBinding}) var transmissionTexture: texture_2d<f32>;
                #endif
                #if ${e.USE_THICKNESSTEXTURE}
                    @group(0) @binding(${e.thicknessTextureBinding}) var thicknessTexture: texture_2d<f32>;
                #endif
                @group(0) @binding(${e.transmissionSamplerTextureBinding}) var transmissionSamplerTexture: texture_2d<f32>;
            #endif
            #if ${e.USE_ENVTEXTURE}
                @group(0) @binding(${e.envTextureBinding}) var envTexture: texture_cube<f32>;
            #endif
            #if ${e.USE_NORMALTEXTURE}
                @group(0) @binding(${e.normalTextureBinding}) var normalTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_CLEARCOATTEXTURE}
                @group(0) @binding(${e.clearcoatTextureBinding}) var clearcoatTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                @group(0) @binding(${e.clearcoatRclearcoatRoughnessTextureBinding}) var clearcoatRoughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_CLEARCOAT_NORMALTEXTURE}
                @group(0) @binding(${e.clearcoatNormalTextureBinding}) var clearcoatNormalTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_IRIDESCENCETEXTURE}
                @group(0) @binding(${e.iridescenceTextureBinding}) var iridescenceTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_IRIDESCENCE_THICKNESSTEXTURE}
                @group(0) @binding(${e.iridescenceThicknessTextureBinding}) var iridescenceThicknessTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_ROUGHNESSTEXTURE}
                @group(0) @binding(${e.roughnessTextureBinding}) var roughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${e.USE_METALNESSTEXTURE}
                @group(0) @binding(${e.metalnessTextureBinding}) var metalnessTexture: texture_2d<f32>;
            #endif

            #if ${e.SPECULAR}
                #if ${e.USE_SPECULARINTENSITYTEXTURE}
                    @group(0) @binding(${e.specularIntensityTextureBinding}) var specularIntensityTexture: texture_2d<f32>;
                #endif

                #if ${e.USE_SPECULARCOLORTEXTURE}
                    @group(0) @binding(${e.specularColorTextureBinding}) var specularColorTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${e.USE_SHEEN}
                #if ${e.USE_SHEENCOLORTEXTURE}
                    @group(0) @binding(${e.sheenColorTextureBinding}) var sheenColorTexture: texture_2d<f32>;
                #endif
                #if ${e.USE_SHEENROUGHNESSTEXTURE}
                    @group(0) @binding(${e.sheenRoughnessTextureBinding}) var sheenRoughnessTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${e.USE_TEXTURE}
                @group(0) @binding(${e.baseSamplerBinding}) var baseSampler: sampler;
                @group(0) @binding(${e.baseTextureBinding}) var baseTexture: texture_2d<f32>;
            #endif

            #if ${e.USE_ALPHATEXTURE}
                @group(0) @binding(${e.alphaTextureBinding}) var alphaTexture: texture_2d<f32>;
            #endif

            #if ${e.USE_AOTEXTURE}
                @group(0) @binding(${e.aoTextureBinding}) var aoTexture: texture_2d<f32>;
                
            #endif
            #if ${e.USE_LIGHTTEXTURE}
                @group(0) @binding(${e.lightTextureBinding}) var lightTexture: texture_2d<f32>;
            #endif

            #if ${e.USE_EMISSIVETEXTURE}
                @group(0) @binding(${e.emissiveTextureBinding}) var emissiveTexture: texture_2d<f32>;
            #endif
     `;
	},
	pbrUtils: function (e) {
		return Ri`
    const PI:f32= 3.141592653589793;
    const PI2:f32= 6.283185307179586;
    const PI_HALF:f32= 1.5707963267948966;
    const RECIPROCAL_PI:f32= 0.3183098861837907;
    const RECIPROCAL_PI2:f32= 0.15915494309189535;
    const EPSILON:f32= 1e-6;

    fn pow2(x:f32 )->f32 {
        return x*x;
    }
    fn pow2Vector(x:vec3<f32> )->vec3<f32> {
        return x*x;
    }
    fn pow3( x:f32 )->f32 {
        return x*x*x;
    }
    fn pow4( x:f32 )->f32 {
        let x2:f32 = x*x;
        return x2*x2;
    }
    fn max3( v:vec3<f32> )->f32 {
        return max( max( v.x, v.y ), v.z );
    }
    fn average(v:vec3<f32> )->f32 {
        return dot( v, vec3<f32>( 0.3333333 ) );
    }
    fn rand( uv:vec2<f32> )->f32 {
        let a:f32 = 12.9898;
        let b:f32 = 78.233;
        let c:f32 = 43758.5453;
        let dt:f32 = dot( uv.xy, vec2<f32>( a, b ) );
        let sn:f32 = dt % PI;
        return fract( sin( sn ) * c );
    }
    fn transformDirection( dir:vec3<f32>, matrix:mat4x4<f32> )->vec3<f32> {
        return normalize( ( matrix * vec4<f32>( dir, 0.0 ) ).xyz );
    }

    fn transposeMat3( m:mat3x3<f32> )->mat3x3<f32> {
        var tmp:mat3x3<f32>;
        tmp[ 0 ] = vec3<f32>( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
        tmp[ 1 ] = vec3<f32>( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
        tmp[ 2 ] = vec3<f32>( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
        return tmp;
    }
    fn luminance( rgb:vec3<f32> )->f32 {
        let weights:vec3<f32> = vec3<f32>(0.2126729, 0.7151522, 0.0721750 );
        return dot( weights, rgb );
    }
    fn LinearToneMapping( color:vec3<f32>,toneMappingExposure:f32  )->vec3<f32> {
        return toneMappingExposure * color;
    }

    fn ReinhardToneMapping( color:vec3<f32>,toneMappingExposure:f32 )->vec3<f32> {
        var tempColor:vec3<f32>;
        tempColor=color;
        tempColor *= toneMappingExposure;
        return saturate( tempColor / ( vec3<f32>( 1.0 ) + tempColor ) );
    }
    fn CustomToneMapping( color:vec3<f32> )->vec3<f32> {
        return color;
    }
    fn toneMapping( color:vec3<f32>,toneMappingExposure:f32  )->vec3<f32> {
        return ReinhardToneMapping( color,toneMappingExposure );
    }

    fn LinearToLinear( value:vec4<f32> )->vec4<f32> {
        return value;
    }
    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{
       let xValue:f32=select(b.x,a.x,a.x<=b.x);
       let yValue:f32=select(b.y,a.y,a.y<=b.y);
       let zValue:f32=select(b.z,a.z,a.z<=b.z);
       return vec3<f32>(xValue,yValue,zValue);    
    }
    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {
        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );
    }
    fn linearToOutputTexel(value:vec4<f32> )->vec4<f32> {
        return LinearTosRGB( value );
    }
    `;
	},
	environment: function (e) {
		return Ri`
   #if ${e.ENVTEXTURE_TYPE_CUBE_UV}
        const cubeUV_minMipLevel:f32= 4.0;
        const cubeUV_minTileSize:f32= 16.0;
        const CUBEUV_MAX_MIP:f32=6.0;
        const CUBEUV_TEXEL_WIDTH:f32=1.0/256.0;
        const CUBEUV_TEXEL_HEIGHT:f32=1.0/256.0;
        fn getFace(direction:vec3<f32> )->f32 {
            let absDirection:vec3<f32> = abs( direction );
            var face:f32 = - 1.0;
            if ( absDirection.x > absDirection.z ) {
                if ( absDirection.x > absDirection.y ){
                    face =select(3.0,0.0,direction.x > 0.0);
                }else{
                    face =select(4.0,1.0,direction.y > 0.0);
                }
                
            }
            else {
                if ( absDirection.z > absDirection.y ){
                    face =select(5.0,2.0,direction.z > 0.0);
                }else{
                    face =select(4.0,1.0,direction.y > 0.0);
                }       
            }
            return face;
        }
        fn getUV( direction:vec3<f32>, face:f32 )->vec2<f32> {
            var uv:vec2<f32>;
            if ( face == 0.0 ) {
                uv = vec2<f32>( direction.z, direction.y ) / abs( direction.x );
            }
            else if ( face == 1.0 ) {
                uv = vec2<f32>( - direction.x, - direction.z ) / abs( direction.y );
            }
            else if ( face == 2.0 ) {
                uv = vec2<f32>( - direction.x, direction.y ) / abs( direction.z );
            }
            else if ( face == 3.0 ) {
                uv = vec2<f32>( - direction.z, direction.y ) / abs( direction.x );
            }
            else if ( face == 4.0 ) {
                uv = vec2<f32>( - direction.x, direction.z ) / abs( direction.y );
            }
            else {
                uv = vec2<f32>( direction.x, direction.y ) / abs( direction.z );
            }
            return 0.5 * ( uv + 1.0 );
        }
        fn bilinearCubeUV(envTexture:texture_cube<f32>,baseSampler:sampler,direction:vec3<f32>, mipInt:f32 )->vec3<f32> {
            var face:f32 = getFace( direction );
            let filterInt:f32 = max( cubeUV_minMipLevel - mipInt, 0.0 );
            let tempMipInt = max( mipInt, cubeUV_minMipLevel );
            let faceSize:f32 = exp2( tempMipInt );
            var uv:vec2<f32> = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
            if ( face > 2.0 ) {
                uv.y += faceSize;
                face -= 3.0;
            }
            uv.x += face * faceSize;
            uv.x += filterInt * 3.0 * cubeUV_minTileSize;
            uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
            uv.x *= CUBEUV_TEXEL_WIDTH;
            uv.y *= CUBEUV_TEXEL_HEIGHT;
            return textureSample(envTexture,baseSampler,direction).rgb;
        }
        const cubeUV_r0:f32= 1.0;
        const cubeUV_v0:f32= 0.339;
        const cubeUV_m0:f32= - 2.0;
        const cubeUV_r1:f32= 0.8;
        const cubeUV_v1:f32= 0.276;
        const cubeUV_m1:f32= - 1.0;
        const cubeUV_r4:f32= 0.4;
        const cubeUV_v4:f32= 0.046;
        const cubeUV_m4:f32= 2.0;
        const cubeUV_r5:f32= 0.305;
        const cubeUV_v5:f32= 0.016;
        const cubeUV_m5:f32= 3.0;
        const cubeUV_r6:f32= 0.21;
        const cubeUV_v6:f32= 0.0038;
        const cubeUV_m6:f32= 4.0;
        fn roughnessToMip( roughness:f32)->f32 {
            var mip:f32 = 0.0;
            if ( roughness >= cubeUV_r1 ) {
                mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
            }
            else if ( roughness >= cubeUV_r4 ) {
                mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
            }
            else if ( roughness >= cubeUV_r5 ) {
                mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
            }
            else if ( roughness >= cubeUV_r6 ) {
                mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
            }
            else {
                mip = - 2.0 * log2( 1.16 * roughness );
            }
            return mip;
        }
        fn textureCubeUV(envTexture:texture_cube<f32>, baseSampler:sampler,sampleDir:vec3<f32>,roughness:f32 )->vec4<f32> {
            let mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
            let mipF = fract( mip );
            let mipInt = floor( mip );
            let color0:vec3<f32> = bilinearCubeUV( envTexture,baseSampler,sampleDir, mipInt );
            if ( mipF == 0.0 ) {
                return vec4<f32>(color0, 1.0 );
            }
            else {
                let color1:vec3<f32> = bilinearCubeUV( envTexture,baseSampler, sampleDir, mipInt + 1.0 );
                return vec4<f32>(mix( color0, color1, mipF ), 1.0 );
            }
        
        }
   #endif
   #if ${e.USE_ENVTEXTURE}
        fn getIBLIrradiance( normal:vec3<f32>,baseSampler:sampler,viewMatrix:mat4x4<f32>)->vec3<f32> {
            #if ${e.ENVTEXTURE_TYPE_CUBE_UV}
                let worldNormal:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
                let envTextureColor:vec4<f32> = textureCubeUV( envTexture,baseSampler, worldNormal, 1.0 );
                return PI * envTextureColor.rgb * materialUniform.envTextureIntensity;
            #else
                return vec3<f32>( 0.0 );
            #endif
        }
        fn getIBLRadiance( viewDir:vec3<f32>,baseSampler:sampler,viewMatrix:mat4x4<f32>,normal:vec3<f32>, roughness:f32 )->vec3<f32> {
            #if ${e.ENVTEXTURE_TYPE_CUBE_UV}
                var reflectVec:vec3<f32> = reflect( - viewDir, normal );
                reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
                reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                let envTextureColor:vec4<f32> = textureCubeUV( envTexture,baseSampler, reflectVec, roughness );
                return envTextureColor.rgb * materialUniform.envTextureIntensity;
            #else
                return vec3<f32>( 0.0 );
            #endif
            }
    #endif
   `;
	},
	blinn_phong: function (e) {
		return "\n       fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n        var direction:vec3<f32> = worldPos - pointLight.position;\n        let dist:f32 = length( direction );\n        direction = normalize(direction);\n        let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);\n\n        let d =  max( dot( N, -direction ), 0.0 ) * decay;\n        color += pointLight.color * d;\n\n        let halfDir:vec3<f32> = normalize( V - direction );\n        let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;\n        color += pointLight.color * s;\n        return color;\n       }\n       fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n            var direction:vec3<f32> = spotLight.position - worldPos;\n            let lightDistance:f32 = length(direction);\n            direction = normalize(direction);\n            let angleCos:f32 = dot( direction, -spotLight.direction );\n            let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);\n            let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\n            let decayTotal:f32 = decay * spotEffect;\n            let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;\n            color += spotLight.color * d;\n            let halfDir:vec3<f32> = normalize( V + direction );\n            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;\n            color += spotLight.color * s;\n            return color;\n       }\n    struct DirtectLight {\n        direction: vec3<f32>,\n        color: vec3<f32>,\n    };\n      fn getDirtectLightInfo(directionalLight:DirtectLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n        let d:f32 = max(dot(N, -directionalLight.direction), 0.0);\n        color += directionalLight.color * d;\n\n        let halfDir:vec3<f32> = normalize( V - directionalLight.direction );\n        let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );\n        color += directionalLight.color * s;\n        return color;\n       }\n    ";
	}
};
function Mi(e) {
	return "\n    struct VertexInput {\n         @location(0) position: vec2<f32>,       \n    }\n    struct VertexOutput {\n         @builtin(position) position: vec4<f32>,\n         @location(0) uv: vec2<f32>,\n     };\n    @vertex\n    fn main(input: VertexInput) -> VertexOutput {\n     var output:VertexOutput;\n     output.uv = input.position * 0.5 + 0.5;\n     output.position = vec4<f32>(input.position, 0.0, 1.0);;\n     return output;\n    }\n    ";
}
function Ci(e) {
	return Di(e);
}
const Li = /^[ \t]*#include +<([\w\d./]+)>/gm;
let Ii = {};
const zi = {
	phong: {
		frag: function (e) {
			return Ri`  
  struct VertexOutput {
      @builtin(position) position: vec4<f32>,
      @builtin(front_facing) is_front: bool,
      @location(0) vUv: vec2<f32>,
      @location(1) view: vec3<f32>, // Vector from vertex to camera.
      @location(2) worldPos: vec3<f32>,
      @location(3) color: vec4<f32>,
      @location(4) normal: vec3<f32>,
      @location(5) viewPosition: vec3<f32>,
    };
    #include <lightCommon>
    #include <light>
    #include <brdf>
    #include <phongUtils>
    #include <phongFunction>
    struct MaterialUniform {
      modelMatrix: mat4x4<f32>,
      color: vec3<f32>,
      opacity:f32,
      normalMatrix: mat4x4<f32>,
      emissive:vec3<f32>,
      shininess:f32,
      specular:vec3<f32>,      
   }
   struct SystemUniform {
    projectionMatrix: mat4x4<f32>,
    viewMatrix: mat4x4<f32>,
    inverseViewMatrix: mat4x4<f32>,
    cameraPosition: vec3<f32>,
  }; 
  fn getNormal(input:VertexOutput)->vec3<f32>
{
    // Retrieve the tangent space matrix
    let pos_dx:vec3<f32> = dpdx(input.worldPos);
    let pos_dy:vec3<f32> = dpdy(input.worldPos);
    let tex_dx:vec3<f32> = dpdx(vec3<f32>(input.vUv, 0.0));
    let tex_dy:vec3<f32> = dpdy(vec3<f32>(input.vUv, 0.0));
    var t:vec3<f32> = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);
    let ng = input.normal;
    t = normalize(t - ng * dot(ng, t));
    let b:vec3<f32> = normalize(cross(ng, t));
    let tbn:mat3x3<f32> = mat3x3<f32>(t, b, ng);
    var n:vec3<f32> = tbn[2].xyz;
    return n;
}
    #if${e.baseTexture}
      @group(0) @binding(2) var mySampler: sampler;
      @group(0) @binding(1) var myTexture: texture_2d<f32>;
    #endif
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;

    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${e.baseTexture}
            color= vec4<f32>(textureSample(myTexture, mySampler, input.vUv).rgb+materialUniform.color,materialUniform.opacity);
        #else
            color=vec4<f32>(materialUniform.color,materialUniform.opacity);
        #endif     
        var material:BlinnPhongMaterial;
        
        material.diffuseColor =color.xyz;
        material.specularColor = materialUniform.specular;
        material.specularShininess = materialUniform.shininess;
        material.specularStrength = 1.0;

        var geometry:GeometricContext;
        geometry.position = -input.viewPosition;
        geometry.normal = input.normal;
        geometry.viewDir =normalize(input.viewPosition);
        let faceDirection:f32 =select(-1.0,1.0,input.is_front);
        let  V:vec3<f32> =  normalize( systemUniform.cameraPosition - input.worldPos);
        let  N:vec3<f32> = getNormal(input);
        //let reflectedLight:ReflectedLight= parseLights(geometry,material);
        let finnalColor:vec3<f32>=color.xyz+parseLights(input.worldPos,materialUniform.shininess,N,V);
        //let finnalColor=reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular+totalEmissiveRadiance;
        //let finnalColor:vec3<f32>=color.xyz+lightDiffuse+lightSpecular;
        return vec4<f32>(finnalColor,color.a);
    }`;
		},
		vert: function (e) {
			return "\n      struct VertexOutput {\n            @builtin(position) position: vec4<f32>,\n            @location(0) vUv: vec2<f32>,\n            @location(1) view: vec3<f32>, // Vector from vertex to camera.\n            @location(2) worldPos: vec3<f32>,\n            @location(3) color: vec4<f32>,\n            @location(4) normal: vec3<f32>,\n            @location(5) viewPosition: vec3<f32>,\n      };\n      struct MaterialUniform {\n            modelMatrix: mat4x4<f32>,\n            color: vec3<f32>,\n            opacity:f32,\n            normalMatrix: mat4x4<f32>,\n            emissive:vec3<f32>,\n            specular:vec3<f32>,\n            shininess:f32,\n      }\n      struct SystemUniform {\n            projectionMatrix: mat4x4<f32>,\n            viewMatrix: mat4x4<f32>,\n            inverseViewMatrix: mat4x4<f32>,\n            cameraPosition: vec3<f32>,\n      }; \n\n      @binding(0) @group(0) var<uniform> selfUniform : MaterialUniform;\n      @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;\n\n      struct VertexInput {\n            @location(0) position: vec3<f32>,       \n            @location(1) normal: vec3<f32>,\n            @location(2) uv: vec2<f32>,\n      }\n      @vertex\n      fn main(input: VertexInput) -> VertexOutput {\n            var output: VertexOutput;\n            output.vUv = input.uv;\n            let modelPos=selfUniform.modelMatrix *vec4<f32>(input.position,1.0);\n            output.worldPos = modelPos.xyz/modelPos.w;\n            let vNormalView = selfUniform.normalMatrix * vec4<f32>(input.normal,0.0);\n            output.normal =  vNormalView.xyz;\n            output.view = systemUniform.cameraPosition.xyz - modelPos.xyz;\n            let viewPosition=systemUniform.viewMatrix * modelPos;\n            output.viewPosition = -viewPosition.xyz;\n            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;\n            return output;\n      }";
		}
	},
	color: {
		frag: function (e) {
			return "\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) color: vec4<f32>,\n    };\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n      return input.color;\n    }\n    ";
		},
		vert: function (e) {
			return "\n   struct VertexInput {\n        @location(0) position: vec3<f32>,       \n        @location(1) color: vec4<f32>,\n   }\n   struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) color: vec4<f32>,\n    };\n   struct SelfUniform {\n      modelMatrix: mat4x4<f32>,\n   }\n   struct SystemUniform {\n      projectionMatrix: mat4x4<f32>,\n      viewMatrix: mat4x4<f32>,\n      inverseViewMatrix: mat4x4<f32>,\n      cameraPosition: vec3<f32>,\n   }; \n   @binding(0) @group(0) var<uniform> selfUniform : SelfUniform;\n   @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;\n   @vertex\n   fn main(input: VertexInput) -> VertexOutput {\n    var output:VertexOutput;\n    output.color=input.color;\n    output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(input.position,1.0);\n    return output;\n   }\n   ";
		}
	},
	pbr: {
		frag: function (e) {
			return Ri`
    #include <lightCommon>
    #include <light>
    #include <brdf>
    #include <pbrStruct>
    #include <pbrUtils>
    #include <pbrFunction>
    #include <pbrTexture>
    #include <environment>
    struct SystemUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    }; 
    // uniform vec3 lightProbe[9],
////////////////////////////////////
struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @builtin(front_facing) is_front: bool,
    @location(0) vUv: vec2<f32>,
    @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
    @location(2) vWorldPosition: vec3<f32>,
    @location(3) vNormal: vec3<f32>,
    // 可选
    #if ${e.USE_LIGHTTEXTURE || e.USE_AOTEXTURE}
        @location(${e.vUv2OutLocation}) vUv2: vec2<f32>,
    #endif

    #if ${e.USE_COLOR_ALPHA}
        @location(${e.vColorOutLocation}) vColor: vec4<f32>,
    #elif ${e.USE_COLOR || e.USE_INSTANCING_COLOR}
        @location(${e.vColorOutLocation}) vColor: vec3<f32>,
    #endif

    #if ${e.USE_TANGENT}
        @location(${e.vTangentOutLocation}) vTangent: vec3<f32>,
        @location(${e.vBitangentOutLocation}) vBitangent: vec3<f32>,
    #endif
};
        struct PhysicalMaterial {
             diffuseColor:vec3<f32>,
             roughness:f32,
             specularColor:vec3<f32>,
             specularF90:f32,
            #if ${e.USE_CLEARCOAT}
                clearcoat:f32,
                clearcoatRoughness:f32,
                clearcoatF0:vec3<f32>,
                clearcoatF90:f32,
            #endif

            #if ${e.USE_IRIDESCENCE}
                iridescence:f32,
                iridescenceIOR:f32,
                iridescenceThickness:f32,
                iridescenceFresnel:vec3<f32>,
                iridescenceF0:vec3<f32>,
            #endif

            #if ${e.USE_SHEEN}
                sheenColor:vec3<f32>,
                sheenRoughness:f32,
            #endif

            #if ${e.IOR}
                 ior:f32,
            #endif

            #if ${e.USE_TRANSMISSION}
                transmission:f32,
                transmissionAlpha:f32,
                thickness:f32,
                attenuationDistance:f32,
                attenuationColor:vec3<f32>,
            #endif
        };
@binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
@binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
@fragment
fn main(input:VertexOutput)-> @location(0) vec4<f32> {
        var diffuseColor:vec4<f32> = vec4(materialUniform.diffuse, materialUniform.opacity );
       // ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
        var reflectedLight:ReflectedLight;
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        #if ${e.USE_TEXTURE}
            var sampledDiffuseColor:vec4<f32> =textureSample(baseTexture, baseSampler, input.vUv);
            #if ${e.DECODE_VIDEO_TEXTURE}
                sampledDiffuseColor = vec4<f32>( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3<f32>( 0.0521327014 ), vec3<f32>( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3<f32>( lessThanEqual( sampledDiffuseColor.rgb, vec3<f32>( 0.04045 ) ) ) ), sampledDiffuseColor.w );
            #endif

            diffuseColor *= sampledDiffuseColor;
        #endif

        var roughnessFactor:f32 = materialUniform.roughness;
    
        #if ${e.USE_ROUGHNESSTEXTURE}
            let texelRoughness:vec4<f32>=textureSample(roughnessTexture, baseSampler, input.vUv);
            roughnessFactor *= texelRoughness.g;
        #endif

        var metalnessFactor:f32 = materialUniform.metalness;
    
        #if ${e.USE_METALNESSTEXTURE}
            let texelMetalness:vec4<f32> =textureSample(metalnessTexture, baseSampler, input.vUv);
            metalnessFactor *= texelMetalness.b;
        #endif

        let faceDirection:f32 =select(-1.0,1.0,input.is_front);
        #if ${e.FLAT_SHADED}
            let fdx:vec3<f32> = dpdx( input.vViewPosition );
            let fdy:vec3<f32> = dpdy( input.vViewPosition );
            let normal:vec3<f32> = normalize( cross( fdx, fdy ) );
        #else
            let normal:vec3<f32> = normalize( input.vNormal );
            #if ${e.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif
            #if ${e.USE_TANGENT}
                let tangent:vec3<f32> = normalize( input.vTangent );
                let bitangent:vec3<f32> = normalize( input.vBitangent );
                #if ${e.DOUBLE_SIDED}
                    tangent = tangent * faceDirection;
                    bitangent = bitangent * faceDirection;
                #endif
                #if ${e.TANGENTSPACE_NORMALTEXTURE || e.USE_CLEARCOAT_NORMALTEXTURE}
                    let vTBN:mat3x3<f32> = mat3x3<f32>( tangent, bitangent, normal );
                #endif
            #endif
        #endif
    
        let geometryNormal:vec3<f32> = normal;

        #if ${e.OBJECTSPACE_NORMALTEXTURE}
            normal =textureSample(normalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            #if ${e.FLIP_SIDED}
                normal = - normal;
            #endif
            #if ${e.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif

            normal = normalize(materialUniform.normalMatrix * normal );

            #elif ${e.TANGENTSPACE_NORMALTEXTURE}
            let tempMapN:vec3<f32> =textureSample(normalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            let mapN:vec3<f32> =tempMapN.xy *= materialUniform.normalScale;
            #if ${e.USE_TANGENT}
                normal = normalize( vTBN * mapN );
            #else
                normal = perturbNormal2Arb( - input.vViewPosition, normal, mapN, faceDirection );
            #endif

            #elif ${e.USE_BUMPTEXTURE}

                normal = perturbNormalArb( - input.vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif

        #if ${e.USE_CLEARCOAT}
            var clearcoatNormal:vec3<f32> = geometryNormal;
        #endif
        #if ${e.USE_CLEARCOAT_NORMALTEXTURE}
            var clearcoatMapN:vec3<f32> =textureSample(clearcoatNormalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            clearcoatMapN.xy *= materialUniform.clearcoatNormalScale;
            #if ${e.USE_TANGENT}
                clearcoatNormal = normalize( vTBN * clearcoatMapN );
            #else
                clearcoatNormal = perturbNormal2Arb( - input.vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
            #endif
        #endif
        #if ${e.USE_EMISSIVETEXTURE}
            let emissiveColor:vec4<f32> =textureSample(emissiveTexture, baseSampler, input.vUv);
            totalEmissiveRadiance *= emissiveColor.rgb;
        #endif

        var material:PhysicalMaterial;
        material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
        let dxy:vec3<f32> = max( abs( dpdx( geometryNormal ) ), abs( dpdy( geometryNormal ) ) );
        let geometryRoughness:f32 = max( max( dxy.x, dxy.y ), dxy.z );
        material.roughness = max( roughnessFactor, 0.0525 );
        material.roughness += geometryRoughness;
        material.roughness = min( material.roughness, 1.0 );

        #if ${e.IOR}
            material.ior = materialUniform.ior;
            #if ${e.SPECULAR}
                let specularIntensityFactor:f32 = materialUniform.specularIntensity;
                let specularColorFactor:vec3<f32> = materialUniform.specularColor;
                #if ${e.USE_SPECULARINTENSITYTEXTURE}
                    specularIntensityFactor *=textureSample(specularIntensityTexture, baseSampler, input.vUv).a;
                #endif

                #if ${e.USE_SPECULARCOLORTEXTURE}
                    specularColorFactor *=textureSample(specularColorTexture, baseSampler, input.vUv).rgb;
                #endif

                material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
            #else
                let specularIntensityFactor:f32 = 1.0;
                let specularColorFactor:vec3<f32> = vec3<f32>( 1.0 );
                material.specularF90 = 1.0;
            #endif
            material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
        #else
            material.specularColor = mix( vec3<f32>( 0.04 ), diffuseColor.rgb, metalnessFactor );
            material.specularF90 = 1.0;
        #endif
        #if ${e.USE_CLEARCOAT}
            material.clearcoat = materialUniform.clearcoat;
            material.clearcoatRoughness = materialUniform.clearcoatRoughness;
            material.clearcoatF0 = vec3<f32>( 0.04 );
            material.clearcoatF90 = 1.0;
            #if ${e.USE_CLEARCOATTEXTURE}
                material.clearcoat *=textureSample(clearcoatTexture, baseSampler, input.vUv).x;
            #endif
            #if ${e.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                material.clearcoatRoughness *=textureSample(clearcoatRoughnessTexture, baseSampler, input.vUv).y;
            #endif
            material.clearcoat = saturate( material.clearcoat );
            material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
            material.clearcoatRoughness += geometryRoughness;
            material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
        #endif
        #if ${e.USE_IRIDESCENCE}
            material.iridescence = materialUniform.iridescence;
            material.iridescenceIOR = materialUniform.iridescenceIOR;
            #if ${e.USE_IRIDESCENCETEXTURE}
                material.iridescence *=textureSample(iridescenceTexture, baseSampler, input.vUv).r;
            #endif
            #if ${e.USE_IRIDESCENCE_THICKNESSTEXTURE}
                material.iridescenceThickness = (materialUniform.iridescenceThicknessMaximum - materialUniform.iridescenceThicknessMinimum) * textureSample(iridescenceThicknessTexture, baseSampler, input.vUv).g + materialUniform.iridescenceThicknessMinimum;
            #else
                material.iridescenceThickness = materialUniform.iridescenceThicknessMaximum;
            #endif
        #endif
        #if ${e.USE_SHEEN}
            material.sheenColor = materialUniform.sheenColor;
            #if ${e.USE_SHEENCOLORTEXTURE}
                material.sheenColor *=textureSample(sheenColorTexture, baseSampler, input.vUv).rgb;
            #endif
            material.sheenRoughness = clamp( materialUniform.sheenRoughness, 0.07, 1.0 );
            #if ${e.USE_SHEENROUGHNESSTEXTURE}
                material.sheenRoughness *=textureSample(sheenRoughnessTexture, baseSampler, input.vUv).a;
            #endif
        #endif
        
        var geometry:GeometricContext;
        geometry.position = - input.vViewPosition;
        geometry.normal = normal;
       // geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( input.vViewPosition );
        geometry.viewDir = normalize( input.vViewPosition); 

        #if ${e.USE_CLEARCOAT}
            geometry.clearcoatNormal = clearcoatNormal;
        #endif

        #if ${e.USE_IRIDESCENCE}
            let dotNVi:f32 = saturate( dot( normal, geometry.viewDir ) );
            if ( material.iridescenceThickness == 0.0 ) {
                material.iridescence = 0.0;
            }
            else {
                material.iridescence = saturate( material.iridescence );
            }
            if ( material.iridescence > 0.0 ) {
                material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
                material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
            }
        #endif

        var iblIrradiance:vec3<f32> = vec3<f32>( 0.0 );
        var irradiance:vec3<f32> = getAmbientLightIrradiance(commonLightsParms.ambient);
        //irradiance += getLightProbeIrradiance( lightProbe, geometry.normal,systemUniform.viewMatrix );

        var radiance:vec3<f32> = vec3<f32>( 0.0 );
        var clearcoatRadiance:vec3<f32> = vec3<f32>( 0.0 );

        #if ${e.USE_LIGHTTEXTURE}
            let lightMapTexel:vec4<f32> =textureSample(lightTexture, baseSampler, input.vUv2);
            let lightMapIrradiance:vec3<f32> = lightMapTexel.rgb * materialUniform.lightTextureIntensity;
            irradiance += lightMapIrradiance;
        #endif
        //&& defines.STANDARD&&defines.ENVTEXTURE_TYPE_CUBE_UV
        #if ${e.USE_ENVTEXTURE} 
            iblIrradiance += getIBLIrradiance( geometry.normal,baseSampler,systemUniform.viewMatrix );
        #endif
        #if ${e.USE_ENVTEXTURE}
            radiance += getIBLRadiance( geometry.viewDir,baseSampler,systemUniform.viewMatrix, geometry.normal, materialUniform.roughness );
            #if ${e.USE_CLEARCOAT}
                clearcoatRadiance += getIBLRadiance( geometry.viewDir,baseSampler,systemUniform.viewMatrix, geometry.clearcoatNormal, material.clearcoatRoughness );
            #endif
        #endif
        //直接光照
            let dirReflectedLight:ReflectedLight= parseLights(geometry,material);
            reflectedLight.directDiffuse +=dirReflectedLight.directDiffuse;
            reflectedLight.directSpecular +=dirReflectedLight.directSpecular;
        //间接漫反射
            let indirectDiffuseLight:ReflectedLight= RE_IndirectDiffuse_Physical( irradiance, geometry, material);
            reflectedLight.directDiffuse +=indirectDiffuseLight.indirectDiffuse;
            reflectedLight.directSpecular +=indirectDiffuseLight.indirectSpecular;
        //间接高光
            let indirectSpecularLight:ReflectedLight=RE_IndirectSpecular_Physical( radiance, iblIrradiance, clearcoatRadiance, geometry, material);
            reflectedLight.directDiffuse +=indirectSpecularLight.indirectDiffuse;
            reflectedLight.directSpecular +=indirectSpecularLight.indirectSpecular;
        //环境光遮蔽
        #if ${e.USE_AOTEXTURE}
            let ambientOcclusion:f32 = (textureSample(aoTexture, baseSampler, input.vUv2).r - 1.0 ) * materialUniform.aoTextureIntensity + 1.0;

            reflectedLight.indirectDiffuse *= ambientOcclusion;
            //&&defines.STANDARD
            #if ${e.USE_ENVTEXTURE} 
                let dotNV:f32 = saturate( dot( geometry.normal, geometry.viewDir ) );
                reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
            #endif
        #endif

        var totalDiffuse:vec3<f32> = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        var totalSpecular:vec3<f32> = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        //透射
        #if ${e.USE_TRANSMISSION}
            material.transmission = materialUniform.transmission;
            material.transmissionAlpha = 1.0;
            material.thickness = materialUniform.thickness;
            material.attenuationDistance = materialUniform.attenuationDistance;
            material.attenuationColor = materialUniform.attenuationColor;
            #if ${e.USE_TRANSMISSIONTEXTURE}
                material.transmission *=textureSample(transmissionTexture, baseSampler, input.vUv).r;
            #endif
            #if ${e.USE_THICKNESSTEXTURE}
                material.thickness *=textureSample(thicknessTexture, baseSampler, input.vUv).g;
            #endif
            let pos:vec3<f32> = vWorldPosition;
            let v:vec3<f32> = normalize( cameraPosition - pos );
            let n:vec3<f32> = inverseTransformDirection( normal, systemUniform.viewMatrix );
            let transmission:vec4<f32> = getIBLVolumeRefraction(
            n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90, pos, modelMatrix, systemUniform.viewMatrix, systemUniform.projectionMatrix, material.ior, material.thickness, material.attenuationColor, material.attenuationDistance );
            material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
            totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
        #endif

        let outgoingLight:vec3<f32> = totalDiffuse + totalSpecular + totalEmissiveRadiance;

        #if ${e.USE_SHEEN}
            let sheenEnergyComp:f32 = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
        #endif

        #if ${e.USE_CLEARCOAT}
            let dotNVcc:f32 = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            let Fcc:vec3<f32> = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
            outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
        #endif

        #if ${e.USE_TRANSMISSION}
            diffuseColor.a *= material.transmissionAlpha + 0.1;
        #endif

        var finnalColor:vec4<f32>;
        finnalColor = vec4<f32>( outgoingLight, diffuseColor.a );
        #if ${e.TONE_MAPPING}
           finnalColor.rgb = toneMapping( finnalColor.rgb,materialUniform.toneMappingExposure );
        #endif

          finnalColor = linearToOutputTexel( finnalColor);

        #if ${e.PREMULTIPLIED_ALPHA}
            finnalColor.rgb *= finnalColor.a;
        #endif
        #if ${e.DITHERING}
            finnalColor.rgb = dithering( finnalColor.rgb );
        #endif
        return finnalColor;
    }`;
		},
		vert: function (e) {
			return Ri`
    #include <pbrStruct>
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
        @location(2) vWorldPosition: vec3<f32>,
        @location(3) vNormal: vec3<f32>,
        // 可选
        #if ${e.USE_LIGHTTEXTURE || e.USE_AOTEXTURE}
            @location(${e.vUv2OutLocation}) vUv2: vec2<f32>,
        #endif

        #if ${e.USE_COLOR_ALPHA}
            @location(${e.vColorOutLocation}) vColor: vec4<f32>,
        #elif ${e.USE_COLOR || e.USE_INSTANCING_COLOR}
            @location(${e.vColorOutLocation}) vColor: vec3<f32>,
        #endif

        #if ${e.USE_TANGENT}
            @location(${e.vTangentOutLocation}) vTangent: vec3<f32>,
            @location(${e.vBitangentOutLocation}) vBitangent: vec3<f32>,
        #endif
    };
    struct GlobalUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    };

    //texture and sampler
    // @group(0) @binding(${e.samplerBinding}) var baseSampler: sampler;
    #if ${e.USE_SKINNING}
        //uniform highp sampler2D boneTexture;
        @group(0) @binding(${e.boneTextureBinding}) var boneTexture: texture_2d<f32>;
    #endif

    #if ${e.USE_DISPLACEMENTTEXTURE}
        //uniform sampler2D displacementMap;
        @group(0) @binding(${e.displacementTextureBinding}) var displacementMap: texture_2d<f32>;
    #endif

    #if ${e.MORPHTARGETS_TEXTURE}
        //uniform sampler2DArray morphTargetsTexture;
        @group(0) @binding(${e.morphTargetsTextureBinding}) var morphTargetsTexture: texture_2d_array<f32>;
    #endif

    struct VertexInput {
        @location(0) position: vec3<f32>,  

        @location(1) normal: vec3<f32>,

        @location(2) uv: vec2<f32>,
        #if ${e.USE_LIGHTTEXTURE || e.USE_AOTEXTURE}
            @location(${e.uv2Location}) uv2:vec2<f32>,
        #endif
        #if ${e.USE_INSTANCING}
            @location(${e.instanceMatrixLocation}) instanceMatrix:mat4x4<f32>,
        #endif
        #if ${e.USE_INSTANCING_COLOR}
            @location(${e.instanceColorLocation}) instanceColor:vec3<f32>,
        #endif
        
        #if ${e.USE_TANGENT}
            @location(${e.tangentLocation}) tangent:vec4<f32>,
        #endif
        #if ${e.USE_COLOR_ALPHA}
            @location(${e.colorLocation}) color:vec4<f32>,
        #elif ${e.USE_COLOR}
            @location(${e.colorLocation}) color:vec3<f32>,
        #endif

        #if ${e.USE_MORPHTARGETS && !e.MORPHTARGETS_TEXTURE}
            @location(${e.morphTarget0Location}) morphTarget0:vec3<f32>,

            @location(${e.morphTarget1Location}) morphTarget1:vec3<f32>,

            @location(${e.morphTarget2Location}) morphTarget2:vec3<f32>,

            @location(${e.morphTarget3Location}) morphTarget3:vec3<f32>,
            #if ${e.USE_MORPHNORMALS}
                @location(${e.morphNormal0Location}) morphNormal0:vec3<f32>,

                @location(${e.morphNormal1Location}) morphNormal1:vec3<f32>,

                @location(${e.morphNormal2Location}) morphNormal2:vec3<f32>,

                @location(${e.morphNormal3Location}) morphNormal3:vec3<f32>,
            #else
                @location(${e.morphTarget4Location}) morphTarget4:vec3<f32>,

                @location(${e.morphTarget5Location}) morphTarget5:vec3<f32>,

                @location(${e.morphTarget6Location}) morphTarget6:vec3<f32>,

                @location(${e.morphTarget7Location}) morphTarget7:vec3<f32>,
            #endif
        #endif
        #if ${e.USE_SKINNING}
            @location(${e.skinIndexLocation}) skinIndex:vec4<f32>,
            @location(${e.skinWeightLocation}) skinWeight:vec4<f32>,
        #endif
  }

    #if ${e.MORPHTARGETS_TEXTURE}
        fn getMorph( vertexIndex:u32, morphTargetIndex:u32,offset:u32 )->vec4<f32> {
            let texelIndex:u32 = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
            let y:u32 = texelIndex / materialUniform.morphTargetsTextureSize.x;
            let x:u32 = texelIndex - y * materialUniform.morphTargetsTextureSize.x;
            let morphUV:vec3<u32> = vec3<u32>( x, y, morphTargetIndex );
            //textureLoad
            //return texelFetch( morphTargetsTexture, morphUV, 0 );
            return textureLoad( morphTargetsTexture, morphUV, 0 );
        }
    #endif
    #if ${e.USE_SKINNING}
        fn getBoneMatrix( i:f32 )->mat4x4<f32> {
            let j:f32 = i * 4.0;
            let x:f32 = j%f32( materialUniform.boneTextureSize );
            let y:f32 = floor( j / f32( materialUniform.boneTextureSize ) );
            let dx:f32 = 1.0 / f32( materialUniform.boneTextureSize );
            let dy:f32 = 1.0 / f32( materialUniform.boneTextureSize );
            y = dy * ( y + 0.5 );
            
            let v1:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 0.5 ), y ) );
            let v2:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 1.5 ), y ) );
            let v3:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 2.5 ), y ) );
            let v4:vec4<f32> = textureSample(boneTexture, baseSampler, vec2<f32>( dx * ( x + 3.5 ), y ) );
            let bone:mat4x4<f32> = mat4x4<f32>( v1, v2, v3, v4 );
            return bone;
        }
    #endif

    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> globalUniform : GlobalUniform;
    @vertex
    fn main(input:VertexInput)->VertexOutput {
        var vertexOutput:VertexOutput;
        #if ${e.USE_TEXTURE}
            vertexOutput.vUv = input.uv;
        #endif
        #if ${e.USE_LIGHTTEXTURE || e.USE_AOTEXTURE}
            vertexOutput.vUv2 input.uv2;
        #endif
        #if ${e.USE_COLOR_ALPHA}
            vertexOutput.vColor = vec4( 1.0 );
            #elif ${e.USE_COLOR || e.USE_INSTANCING_COLOR}
            vertexOutput.vColor = vec3( 1.0 );
        #endif
        #if ${e.USE_COLOR}
            vertexOutput.vColor *= input.color;
        #endif
        #if ${e.USE_INSTANCING_COLOR}
            vertexOutput.vColor.xyz *= input.instanceColor.xyz;
        #endif
        #if ${e.USE_MORPHCOLORS && e.MORPHTARGETS_TEXTURE}
            vertexOutput.vColor *= materialUniform.morphTargetBaseInfluence;
            for (let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                #if ${e.USE_COLOR_ALPHA}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ) * materialUniform.morphTargetInfluences[ i ];
                    #elif ${e.USE_COLOR}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ).rgb * materialUniform.morphTargetInfluences[ i ];
                #endif
            }
        #endif
        var objectNormal:vec3<f32> = vec3<f32>(input.normal);
        #if ${e.USE_TANGENT}
            let objectTangent:vec3<f32> = vec3<f32>( input.tangent.xyz );
        #endif
        #if ${e.USE_MORPHNORMALS}
            objectNormal *= materialUniform.morphTargetBaseInfluence;
            #if ${e.MORPHTARGETS_TEXTURE}
                for ( let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u) {
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * materialUniform.morphTargetInfluences[ i ];
                }
            #else
                objectNormal += morphNormal0 * materialUniform.morphTargetInfluences[ 0 ];
                objectNormal += morphNormal1 * materialUniform.morphTargetInfluences[ 1 ];
                objectNormal += morphNormal2 * materialUniform.morphTargetInfluences[ 2 ];
                objectNormal += morphNormal3 * materialUniform.morphTargetInfluences[ 3 ];
            #endif
        #endif
        #if ${e.USE_SKINNING}
            let boneMatX:mat4x4<f32> = getBoneMatrix( input.skinIndex.x );
            let boneMatY:mat4x4<f32> = getBoneMatrix( input.skinIndex.y );
            let boneMatZ:mat4x4<f32> = getBoneMatrix( input.skinIndex.z );
            let boneMatW:mat4x4<f32> = getBoneMatrix( input.skinIndex.w );
        #endif
        #if ${e.USE_SKINNING}
            let skinMatrix:mat4x4<f32> = mat4x4<f32>( 0.0 );
            skinMatrix += input.skinWeight.x * boneMatX;
            skinMatrix += input.skinWeight.y * boneMatY;
            skinMatrix += input.skinWeight.z * boneMatZ;
            skinMatrix += input.skinWeight.w * boneMatW;
            skinMatrix = materialUniform.bindMatrixInverse * skinMatrix * materialUniform.bindMatrix;
            objectNormal = vec4<f32>( skinMatrix * vec4<f32>( objectNormal, 0.0 ) ).xyz;
            #if ${e.USE_TANGENT}
                objectTangent = vec4<f32>( skinMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #endif
        #endif
        var transformedNormal:vec3<f32> = objectNormal;
        // transformedNormal+=vec3<f32>(0.0);
        #if ${e.USE_INSTANCING}
            let m:mat3x3<f32> = mat3x3<f32>( input.instanceMatrix );
            transformedNormal /= vec3<f32>( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
        #endif
        transformedNormal = materialUniform.normalMatrix * transformedNormal;
        #if ${e.FLIP_SIDED}
            transformedNormal = - transformedNormal;
        #endif
        #if ${e.USE_TANGENT}
            let transformedTangent:vec3<f32> = (globalUniform.viewMatrix*materialUniform.modelMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #if ${e.FLIP_SIDED}
                transformedTangent = - transformedTangent;
            #endif
        #endif
        vertexOutput.vNormal = normalize( transformedNormal );
        #if ${e.FLAT_SHADED}
            #if ${e.USE_TANGENT}
                vTangent = normalize( transformedTangent );
                vBitangent = normalize( cross( vNormal, vTangent ) * input.tangent.w );
            #endif
        #endif
        let transformed:vec3<f32> = vec3<f32>( input.position );
        #if ${e.USE_MORPHTARGETS}
            transformed *= materialUniform.morphTargetBaseInfluence;
            #if ${e.MORPHTARGETS_TEXTURE}
                for ( let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                transformed += input.morphTarget0 * materialUniform.morphTargetInfluences[ 0 ];
                transformed += input.morphTarget1 * materialUniform.morphTargetInfluences[ 1 ];
                transformed += input.morphTarget2 * materialUniform.morphTargetInfluences[ 2 ];
                transformed += input.morphTarget3 * materialUniform.morphTargetInfluences[ 3 ];
                #if ${e.USE_MORPHNORMALS}
                    transformed += input.morphTarget4 * materialUniform.morphTargetInfluences[ 4 ];
                    transformed += input.morphTarget5 * materialUniform.morphTargetInfluences[ 5 ];
                    transformed += input.morphTarget6 * materialUniform.morphTargetInfluences[ 6 ];
                    transformed += input.morphTarget7 * materialUniform.morphTargetInfluences[ 7 ];
                #endif
            #endif
        #endif
        #if ${e.USE_SKINNING}
            let skinVertex:vec4<f32> = materialUniform.bindMatrix * vec4<f32>( transformed, 1.0 );
            let skinned:vec4<f32> = vec4<f32>( 0.0 );
            skinned += boneMatX * skinVertex * input.skinWeight.x;
            skinned += boneMatY * skinVertex * input.skinWeight.y;
            skinned += boneMatZ * skinVertex * input.skinWeight.z;
            skinned += boneMatW * skinVertex * input.skinWeight.w;
            transformed = ( materialUniform.bindMatrixInverse * skinned ).xyz;
        #endif
        #if ${e.USE_DISPLACEMENTTEXTURE} 
            transformed += normalize( objectNormal ) * (textureSample(displacementMap, baseSampler, vUv).x * materialUniform.displacementScale + materialUniform.displacementBias );
        #endif
        var mvPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
        #if ${e.USE_INSTANCING}
            mvPosition = input.instanceMatrix * mvPosition;
        #endif
        mvPosition = globalUniform.viewMatrix*materialUniform.modelMatrix * mvPosition;
        vertexOutput.position = globalUniform.projectionMatrix * mvPosition;
        vertexOutput.vViewPosition = - mvPosition.xyz/mvPosition.w;
        #if ${e.USE_ENVTEXTURE || e.DISTANCE || e.USE_TRANSMISSION} 
            var worldPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
            #if ${e.USE_INSTANCING}
                worldPosition = input.instanceMatrix * worldPosition;
            #endif
            worldPosition = materialUniform.modelMatrix * worldPosition;
        #endif
        #if ${e.USE_TRANSMISSION}
            vertexOutput.vWorldPosition = worldPosition.xyz;
        #endif
        return vertexOutput;
    }
    `;
		}
	},
	skybox: {
		frag: function (e) {
			return "\n    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{\n        let xValue:f32=select(b.x,a.x,a.x<=b.x);\n        let yValue:f32=select(b.y,a.y,a.y<=b.y);\n        let zValue:f32=select(b.z,a.z,a.z<=b.z);\n        return vec3<f32>(xValue,yValue,zValue);    \n     }\n    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {\n        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );\n    }\n  struct FragmentInput {\n    @location(0) texCoord : vec3<f32>\n  };\n  @group(0) @binding(2) var defaultSampler: sampler;\n  @group(0) @binding(1) var skyboxTexture: texture_cube<f32>;\n  @fragment\n  fn main(input : FragmentInput) -> @location(0) vec4<f32> {\n    let color = textureSample(skyboxTexture, defaultSampler, input.texCoord);\n    return LinearTosRGB(color);\n  }\n";
		},
		vert: function (e) {
			return '\n   struct SystemUniform {\n       projectionMatrix: mat4x4<f32>,\n       viewMatrix: mat4x4<f32>,\n       inverseViewMatrix: mat4x4<f32>,\n       cameraPosition: vec3<f32>,\n   }; \n   struct MaterialUniform {\n    modelMatrix: mat4x4<f32>,\n }\n   @binding(0) @group(0) var<uniform> selfUniform : MaterialUniform;\n   @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;\n     struct VertexInput {\n       @location(0) position : vec3<f32>,\n     };\n     struct VertexOutput {\n       @builtin(position) position : vec4<f32>,\n       @location(0) texCoord : vec3<f32>,\n     };\n     @vertex\n     fn main(input : VertexInput) -> VertexOutput {\n       var output : VertexOutput;\n       output.texCoord = input.position.xyz;\n       var modelView = systemUniform.viewMatrix;\n       // Drop the translation portion of the modelView matrix\n       modelView[3] = vec4(0.0, 0.0, 0.0, modelView[3].w);\n       output.position = systemUniform.projectionMatrix * modelView * vec4<f32>(input.position,1.0);\n       // Returning the W component for both Z and W forces the geometry depth to\n       // the far plane. When combined with a depth func of "less-equal" this makes\n       // the sky write to any depth fragment that has not been written to yet.\n       output.position = output.position.xyww;\n       return output;\n     }\n   ';
		}
	},
	resolve: {
		frag: function (e) {
			return "\n    @group(0) @binding(2) var baseSampler: sampler;\n    @group(0) @binding(1) var colorTexture: texture_2d<f32>;\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) uv: vec2<f32>,\n    };\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n      return textureSample(colorTexture, baseSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));\n    }\n    ";
		},
		vert: Mi
	},
	pbr_mat: {
		frag: function (e) {
			return Ri`
        // reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl
        struct MaterialUniform {
            modelMatrix: mat4x4<f32>,
            color: vec3<f32>,
            opacity:f32,
            normalMatrix: mat3x3<f32>,
            emissive:vec3<f32>,
            metallic:f32,
            roughness:f32,
            #if ${e.USE_NORMALTEXTURE}
                normalTextureScale:vec2<f32>,
            #endif
            #if ${e.USE_AOTEXTURE}
                occlusionStrength:f32,
            #endif
         }
        struct VertInput {
            @location(0) worldPos:vec3<f32>,
            @location(1) normal:vec3<f32>,
            @location(2) uv:vec2<f32>
        }    
        struct PBRInfo
        {
            NdotL:f32,                 // cos angle between normal and light direction
            NdotV:f32,                  // cos angle between normal and view direction
            NdotH:f32,                  // cos angle between normal and half vector
            LdotH:f32,                  // cos angle between light direction and half vector
            VdotH:f32,                  // cos angle between view direction and half vector
            perceptualRoughness:f32,    // roughness value, as authored by the model creator (input to shader)
            metalness:f32,              // metallic value at the surface
            reflectance0:vec3<f32>,           // full reflectance color (normal incidence angle)
            reflectance90:vec3<f32>,           // reflectance color at grazing angle
            alphaRoughness:f32,         // roughness mapped to a more linear change in the roughness (proposed by [2])
            diffuseColor:vec3<f32>,            // color contribution from diffuse lighting
            specularColor:vec3<f32>,           // color contribution from specular lighting
        };
        const M_PI:f32 = 3.141592653589793;
        const c_MinRoughness:f32 = 0.04;
        @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
        // IBL
        @group(0) @binding(${e.diffuseEnvTextureBinding}) var diffuseEnvSampler: texture_cube<f32>;
        @group(0) @binding(${e.specularEnvTextureBinding}) var specularEnvSampler: texture_cube<f32>;
        @group(0) @binding(${e.brdfTextureBinding}) var brdfLUT: texture_2d<f32>;
        #if ${e.USE_TEXTURE}
           @group(0) @binding(${e.baseTextureBinding}) var baseColorTexture: texture_2d<f32>;
           @group(0) @binding(${e.baseSamplerBinding}) var defaultSampler: sampler;
        #endif
        // normal map
        #if ${e.USE_NORMALTEXTURE}
          @group(0) @binding(${e.normalTextureBinding}) var normalTexture: texture_2d<f32>;
        #endif

        // emmisve map
        #if ${e.USE_EMISSIVETEXTURE}
            @group(0) @binding(${e.emissiveTextureBinding}) var u_emissiveTexture: texture_2d<f32>;
        #endif

        // metal roughness
        #if ${e.USE_METALNESSTEXTURE}
             @group(0) @binding(${e.metalnessRoughnessTextureBinding}) var metalnessRoughnessTexture: texture_2d<f32>;
        #endif
        // occlusion texture
        #if ${e.USE_AOTEXTURE}
             @group(0) @binding(${e.aoTextureBinding}) var aoTexture: texture_2d<f32>;
        #endif

        // Find the normal for this fragment, pulling either from a predefined normal map
        // or from the interpolated mesh normal and tangent attributes.
        fn getNormal(input:VertInput
            #if ${e.USE_NORMALTEXTURE}
            ,normalTexture:texture_2d<f32>,defaultSampler:sampler
            #endif
            )->vec3<f32>
        {
            // Retrieve the tangent space matrix
            let pos_dx:vec3<f32> = dpdx(input.worldPos);
            let pos_dy:vec3<f32> = dpdy(input.worldPos);
            let tex_dx:vec3<f32> = dpdx(vec3<f32>(input.uv, 0.0));
            let tex_dy:vec3<f32> = dpdy(vec3<f32>(input.uv, 0.0));
            var t:vec3<f32> = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);
            let ng = input.normal;
            t = normalize(t - ng * dot(ng, t));
            let b:vec3<f32> = normalize(cross(ng, t));
            let tbn:mat3x3<f32> = mat3x3<f32>(t, b, ng);
        // TODO: TANGENTS
            #if ${e.USE_NORMALTEXTURE}
                var n:vec3<f32> = textureSample(normalTexture,defaultSampler, input.uv).rgb;
                n = normalize(tbn * ((2.0 * n - 1.0) * vec3<f32>(materialUniform.normalTextureScale, 1.0)));
            #else
                var n:vec3<f32> = tbn[2].xyz;
            #endif
            return n;
        }

        fn getIBLContribution( pbrInputs:PBRInfo, n:vec3<f32>, reflection:vec3<f32>,brdfLUT:texture_2d<f32>,specularEnvSampler:texture_cube<f32>,diffuseEnvSampler:texture_cube<f32>,defaultSampler:sampler)->vec3<f32>
        {
            let mipCount:f32 = 10.0; // resolution of 256x256
            let lod:f32 = (pbrInputs.perceptualRoughness * mipCount);
            // retrieve a scale and bias to F0. See [1], Figure 3
            let brdf:vec3<f32> = textureSample(brdfLUT, defaultSampler,vec2<f32>(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness)).rgb;
            let diffuseLight:vec3<f32> = textureSample(diffuseEnvSampler,defaultSampler, n).rgb;
            let specularLight:vec3<f32> = textureSampleLevel(specularEnvSampler,defaultSampler, reflection, lod).rgb;
            let diffuse:vec3<f32> = diffuseLight * pbrInputs.diffuseColor;
            let specular:vec3<f32> = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);

            return diffuse + specular;
        }

        // Basic Lambertian diffuse
        // Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
        // See also [1], Equation 1
        fn diffuse(pbrInputs:PBRInfo)->vec3<f32>
        {
            return pbrInputs.diffuseColor / M_PI;
        }


        // The following equation models the Fresnel reflectance term of the spec equation (aka F())
        // Implementation of fresnel from [4], Equation 15
        fn specularReflection(pbrInputs:PBRInfo)->vec3<f32>
        {
            return pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);
        }


        // This calculates the specular geometric attenuation (aka G()),
        // where rougher material will reflect less light back to the viewer.
        // This implementation is based on [1] Equation 4, and we adopt their modifications to
        // alphaRoughness as input as originally proposed in [2].
        fn geometricOcclusion( pbrInputs:PBRInfo)->f32
        {
            let NdotL:f32 = pbrInputs.NdotL;
            let NdotV:f32 = pbrInputs.NdotV;
            let r:f32 = pbrInputs.alphaRoughness;

            let attenuationL:f32 = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
            let attenuationV :f32= 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
            return attenuationL * attenuationV;
        }


        // The following equation(s) model the distribution of microfacet normals across the area being drawn (aka D())
        // Implementation from "Average Irregularity Representation of a Roughened Surface for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
        // Follows the distribution function recommended in the SIGGRAPH 2013 course notes from EPIC Games [1], Equation 3.
        fn microfacetDistribution( pbrInputs:PBRInfo)->f32
        {
            let roughnessSq:f32 = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;
            let f:f32 = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;
            return roughnessSq / (M_PI * f * f);
        }
        @fragment
        fn main(input:VertInput) -> @location(0) vec4<f32> 
        {
            var perceptualRoughness:f32 = materialUniform.roughness;
            var metallic:f32 = materialUniform.metallic;

        #if ${e.USE_METALNESSTEXTURE}
            // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
            // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
            let mrSample:vec4<f32> = textureSample(metalnessRoughnessTexture,defaultSampler, input.uv);
            perceptualRoughness = mrSample.g * perceptualRoughness;
            metallic = mrSample.b * metallic;
        #endif
            perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
            metallic = clamp(metallic, 0.0, 1.0);
            // Roughness is authored as perceptual roughness; as is convention,
            // convert to material roughness by squaring the perceptual roughness [2].
            let alphaRoughness:f32 = perceptualRoughness * perceptualRoughness;


            // The albedo may be defined from a base texture or a flat color
        #if ${e.USE_TEXTURE}
            let baseColor:vec4<f32> = textureSample(baseColorTexture,defaultSampler, input.uv) ;
        #else
            let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);
        #endif
        //let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);
            let f0:vec3<f32> = vec3<f32>(0.04);
            var diffuseColor:vec3<f32> = baseColor.rgb * (vec3<f32>(1.0) - f0);
            diffuseColor *= 1.0 - metallic;
            let specularColor:vec3<f32> = mix(f0, baseColor.rgb, metallic);

            // Compute reflectance.
            let reflectance:f32 = max(max(specularColor.r, specularColor.g), specularColor.b);


            // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.
            // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.
            let reflectance90:f32 = clamp(reflectance * 25.0, 0.0, 1.0);
            let specularEnvironmentR0:vec3<f32> = specularColor.rgb;
            let specularEnvironmentR90:vec3<f32> = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
     
                #if ${e.USE_NORMALTEXTURE}
                let n:vec3<f32> = getNormal(input,normalTexture,defaultSampler);  
                #else
                let n:vec3<f32> = getNormal(input);
                #endif

            //let n:vec3<f32> = getNormal(input,normalTexture,defaultSampler);                             // normal at surface point
            // vec3 v = vec3( 0.0, 0.0, 1.0 );        // Vector from surface point to camera
            let v:vec3<f32> = normalize(-input.worldPos);                       // Vector from surface point to camera
            // vec3 l = normalize(u_LightDirection);             // Vector from surface point to light
            let l:vec3<f32> =normalize(vec3( 1.0, 1.0, 1.0 )); 
                      // Vector from surface point to light
            // vec3 l = vec3( 0.0, 0.0, 1.0 );             // Vector from surface point to light
            let h:vec3<f32> = normalize(l+v);                          // Half vector between both l and v
            let reflection:vec3<f32> = -normalize(reflect(v, n));

            let NdotL:f32 = clamp(dot(n, l), 0.001, 1.0);
            let NdotV:f32 = abs(dot(n, v)) + 0.001;
            let NdotH:f32 = clamp(dot(n, h), 0.0, 1.0);
            let LdotH:f32 = clamp(dot(l, h), 0.0, 1.0);
            let VdotH:f32 = clamp(dot(v, h), 0.0, 1.0);

            var pbrInputs:PBRInfo;
            pbrInputs.NdotL=NdotL;
            pbrInputs.NdotV=NdotV;
            pbrInputs.NdotH=NdotH;
            pbrInputs.LdotH=LdotH;
            pbrInputs.VdotH=VdotH;
            pbrInputs.perceptualRoughness=perceptualRoughness;
            pbrInputs.perceptualRoughness=perceptualRoughness;
            pbrInputs.metalness=metallic;
            pbrInputs.reflectance0=specularEnvironmentR0;
            pbrInputs.reflectance90=specularEnvironmentR90;
            pbrInputs.alphaRoughness=alphaRoughness;
            pbrInputs.diffuseColor=diffuseColor;
            pbrInputs.specularColor=specularColor;

            // Calculate the shading terms for the microfacet specular shading model
            let F:vec3<f32> = specularReflection(pbrInputs);
            let G:f32 = geometricOcclusion(pbrInputs);
            let D:f32 = microfacetDistribution(pbrInputs);

            // Calculation of analytical lighting contribution
            let diffuseContrib:vec3<f32> = (1.0 - F) * diffuse(pbrInputs);
            let specContrib:vec3<f32> = max(vec3<f32>(0.0), F * G * D / (4.0 * NdotL * NdotV));
            // vec3 color = NdotL * u_LightColor * (diffuseContrib + specContrib);
            var color = NdotL * (diffuseContrib + specContrib);    // assume light color vec3(1, 1, 1)

            // Calculate lighting contribution from image based lighting source (IBL)
        // USE_IBL
            color += getIBLContribution(pbrInputs, n, reflection,brdfLUT,specularEnvSampler,diffuseEnvSampler,defaultSampler);


        // Apply optional PBR terms for additional (optional) shading
        #if ${e.USE_AOTEXTURE}
            let ao:f32 = textureSample(aoTexture,defaultSampler, input.uv).r;
            color = mix(color, color * ao, materialUniform.occlusionStrength);
        #endif

        #if ${e.USE_EMISSIVETEXTURE}
            let emissive:vec3<f32> = textureSample(u_emissiveTexture, defaultSampler,input.uv).rgb ;
            color += emissive;
        #endif
       return vec4<f32>(color.xyz, baseColor.a);
    }
   `;
		},
		vert: function (e) {
			return Ri`
   struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        color: vec3<f32>,
        opacity:f32,
        normalMatrix: mat3x3<f32>,
        emissive:vec3<f32>,
        metallic:f32,
        roughness:f32,
        #if ${e.USE_NORMALTEXTURE}
            normalTextureScale:vec2<f32>,
        #endif
        #if ${e.USE_AOTEXTURE}
            occlusionStrength:f32,
        #endif
        // #if ${e.HAS_SKIN} 
        //     jointMatrixCount:f32,
        //     jointMatrixs:array<mat4x4>,
        // #endif
   }

   struct SystemUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
   }; 
   
   struct VertexInput {
        @location(0) position: vec3<f32>,       
        @location(1) normal: vec3<f32>,
        @location(2) uv: vec2<f32>,
   }
//    ifdef HAS_SKIN
//    layout(location = JOINTS_0_LOCATION) in vec4 joint0;
//    layout(location = WEIGHTS_0_LOCATION) in vec4 weight0;
//    ifdef SKIN_VEC8
//    layout(location = JOINTS_1_LOCATION) in vec4 joint1;
//    layout(location = WEIGHTS_1_LOCATION) in vec4 weight1;
//    endif
//    endif
   
   
    struct VertexOutput {
        @builtin(position) position:vec4<f32>,
        @location(0) worldPos:vec3<f32>,
        @location(1) normal:vec3<f32>,
        @location(2) uv:vec2<f32>
    }  

    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
   fn main(input: VertexInput)-> VertexOutput
   {
       #if ${e.HAS_SKIN} 
            mat4 skinMatrix = 
                   weight0.x * u_jointMatrix.matrix[int(joint0.x)] +
                   weight0.y * u_jointMatrix.matrix[int(joint0.y)] +
                   weight0.z * u_jointMatrix.matrix[int(joint0.z)] +
                   weight0.w * u_jointMatrix.matrix[int(joint0.w)];
           #if ${e.SKIN_VEC8} 
               skinMatrix +=
                   weight1.x * u_jointMatrix.matrix[int(joint1.x)] +
                   weight1.y * u_jointMatrix.matrix[int(joint1.y)] +
                   weight1.z * u_jointMatrix.matrix[int(joint1.z)] +
                   weight1.w * u_jointMatrix.matrix[int(joint1.w)];
           #endif
        #endif
        var output: VertexOutput;
        output.uv = input.uv;
   
        #if ${e.HAS_SKIN} 
            output.normal = normalize((materialUniform.normalMatrix * transpose(inverse(skinMatrix)) * vec4<f32>(input.normal, 0.0)).xyz);
            let pos:vec4<f32> = systemUniform.viewMatrix *materialUniform.modelMatrix*skinMatrix * vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix*materialUniform.modelMatrix * skinMatrix * vec4<f32>(input.position,1.0);
        #else
            output.normal = normalize((materialUniform.normalMatrix * input.normal).xyz);
            let pos:vec4<f32>=systemUniform.viewMatrix *materialUniform.modelMatrix*vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *materialUniform.modelMatrix* vec4<f32>(input.position, 1.0);
        #endif      
        output.worldPos = pos.xyz/pos.w; 
        return output;   
   }
   `;
		}
	},
	blur: {
		frag: function (e) {
			return `\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    }\n    struct BlurUniforms {\n        direction:vec2<f32>,\n    }\n    fn gaussianPdf(x:f32, sigma:f32)->f32 {\n        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n    }\n    @group(0) @binding(0)  var<uniform> blurUniforms : BlurUniforms;\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        let invSize:vec2<f32> = vec2<f32>(1.0,1.0) / vec2<f32>(textureDimensions(tDiffuse));\n        let fSigma:f32 =f32(${e.SIGMA});\n        var weightSum:f32 = gaussianPdf(0.0, fSigma);\n        var diffuseSum:vec3<f32> = textureSample(tDiffuse, tSampler, input.uv).rgb * weightSum;\n        let uvOffset:vec2<f32> = blurUniforms.direction * invSize;\n        for( var i : u32 = 1; i < ${e.KERNEL_RADIUS};i = i + 1 ) {\n            let x:f32 = f32(i);\n            let w:f32 = gaussianPdf(x, fSigma);\n            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv+ uvOffset*x).rgb;\n            let sample2:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv- uvOffset*x).rgb;\n            diffuseSum += (sample2+sample2)* w;\n            weightSum += 2.0 * w;\n        }\n        diffuseSum/=weightSum;\n      return vec4<f32>(diffuseSum,1.0);\n    }\n  `;
		},
		vert: Mi
	},
	luminosityHigh: {
		frag: function (e) {
			return "\n    struct LuminosityUniforms{\n        luminosityThreshold:f32,\n        smoothWidth:f32,\n        defaultColor:vec3<f32>,\n        defaultOpacity:f32,\n    }\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    };\n    @group(0) @binding(0)  var<uniform> luminosityUniforms : LuminosityUniforms;\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput)-> @location(0) vec4<f32> {\n\n        let texel:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);\n\n        let luma:vec3<f32> = vec3<f32>( 0.299,0.587,0.114 );\n\n        let v:f32 = dot( texel.xyz, luma );\n\n        let outputColor:vec4<f32> = vec4<f32>( luminosityUniforms.defaultColor.rgb, luminosityUniforms.defaultOpacity );\n\n        let alpha:f32 = smoothstep( luminosityUniforms.luminosityThreshold, luminosityUniforms.luminosityThreshold + luminosityUniforms.smoothWidth, v );\n\n       return mix( outputColor, texel, alpha );\n    }\n    ";
		},
		vert: Mi
	},
	blend: {
		frag: function (e) {
			return "\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    };\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{baseColorTextureBinding}}) var baseColorTexture: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        let postColor:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);\n        let baseColor:vec4<f32> = textureSample(baseColorTexture, tSampler, input.uv);\n      return baseColor+postColor;\n    }   \n    ";
		},
		vert: Mi
	}
};
function Di(e) {
	return e.replace(Li, Oi);
}
function Oi(e, t) {
	const i = Ui[t];
	if (void 0 === i) throw new Error(`Can not resolve #include <${t}>`);
	return Di(i(Ii));
}
function Ni(e, t = {}) {
	const i = zi[e];
	return (Ii = t), { vert: Ci(i.vert(Ii)), frag: Ci(i.frag(Ii)) };
}
class Ai {
	constructor(e) {
		(this.type = e.type),
			(this.defines = e.defines),
			(this.custom = W(e.custom, !1)),
			(this.dirty = !0),
			e.render
				? ((this.render = !0),
				  (this.vertEntryPoint = e.vertMain || "main"),
				  (this.fragEntryPoint = e.fragMain || "main"),
				  (this.vert = e.vert || void 0),
				  (this.frag = e.frag || void 0))
				: ((this.compute = e.compute || void 0), (this.computeMain = e.computeMain || "main"));
	}
	get uid() {
		return (this._uid = this.type.concat(JSON.stringify(this.defines))), this._uid;
	}
	updateShaderStr() {
		if (this.custom)
			this.compute
				? (this.compute = Ai.compileCustomShader(this.compute, this.defines))
				: ((this.vert = Ai.compileCustomShader(this.vert, this.defines)),
				  (this.frag = Ai.compileCustomShader(this.frag, this.defines)));
		else {
			const e = Ni(this.type, this.defines);
			(this.vert = e.vert), (this.frag = e.frag);
		}
	}
	setDefines(e) {
		(this.dirty = !0), (this.defines = Object.assign(this.defines, e));
	}
	createShaderModule(e) {
		if ((this.dirty && (this.updateShaderStr(), (this.dirty = !1)), this.render)) {
			return {
				vert: this.vert ? e.createShaderModule({ code: this.vert }) : void 0,
				frag: this.frag ? e.createShaderModule({ code: this.frag }) : void 0
			};
		}
		return e.createShaderModule({ code: this.compute });
	}
	static replaceMain(e, t) {
		return (t = `void ${t}()`), e.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, t);
	}
	static compileCustomShader(e, t) {
		const i = /\{\{(\w+)\}\}/;
		if (i.test(e)) {
			const r = i.exec(e)[1];
			return (e = e.replace(i, t[r])), Ai.compileCustomShader(e, t);
		}
		return e;
	}
}
class Pi {
	constructor() {
		(this.label = void 0),
			(this.type = void 0),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0),
			(this._diffuse = new ae(0, 0, 0)),
			(this._opacity = 1),
			(this.shaderData = void 0),
			(this.shaderSource = void 0),
			(this.dirty = !0),
			(this._emissive = new ae(0, 0, 0)),
			(this._emissiveIntensity = 1),
			(this._doubleSided = !0),
			(this.light = !1),
			this.init();
	}
	set wireframe(e) {
		this.renderState.primitive.topology = e ? b.LineList : b.TriangleList;
	}
	get doubleSided() {
		return this._doubleSided;
	}
	set doubleSided(e) {
		(this._renderState.primitive.cullMode = e ? E.None : E.Back), (this._doubleSided = e);
	}
	get renderState() {
		return this._renderState;
	}
	set renderState(e) {
		this._renderState = e;
	}
	get diffuse() {
		return this._diffuse;
	}
	set diffuse(e) {
		this._diffuse = e;
	}
	get emissive() {
		return this._emissive;
	}
	set emissive(e) {
		this._emissive = e;
	}
	get emissiveIntensity() {
		return this._emissiveIntensity;
	}
	set emissiveIntensity(e) {
		this._emissiveIntensity = e;
	}
	get opacity() {
		return this._opacity;
	}
	set opacity(e) {
		this._opacity = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	update(e, t) {}
	createShaderData(e, t) {
		this.shaderData = new Et(this.type, 0);
	}
	init() {
		const e = new Ct(),
			t = new It(),
			i = new Lt();
		(this._renderState = new Mt()),
			(this._renderState.primitive = e),
			(this._renderState.targets = [t]),
			(this._renderState.depthStencil = i);
	}
	destroy() {
		(this.label = void 0),
			(this.type = void 0),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0),
			(this.color = void 0);
	}
}
class Bi extends Pi {
	constructor() {
		super(), (this.type = "color"), (this.shaderSource = new Ai({ type: this.type, render: !0, defines: {} }));
	}
	update(e, t) {
		this.shaderData || this.createShaderData(t);
		const i = new Tt();
		i.setMatrix4("modelMatrix", () => t.modelMatrix), this.shaderData.setUniformBuffer("color", i);
	}
}
class Vi extends ai {
	constructor() {
		super(), (this.distanceToCamera = 10), (this.material = new Bi()), (this.material.wireframe = !0), this.init();
	}
	update(e) {
		this.updateMatrix(), this.material.update(e, this), e.renderQueue.opaque.push(this);
	}
	init() {
		const e = [0, 1, 2, 3, 4, 5];
		(this.geometry = new wi({})),
			this.geometry.setAttribute(new Ot("position", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], 3)),
			this.geometry.setAttribute(
				new Ot("color", [1, 0, 0, 1, 1, 0.5, 0.5, 1, 0, 1, 0, 1, 0.5, 1, 0.5, 1, 0, 0, 1, 1, 0.5, 0.5, 1, 1], 4)
			),
			this.geometry.setIndice(e),
			(this.geometry.count = e.length);
	}
}
class Fi extends wi {
	constructor() {
		super({}), this.init();
	}
	update(e) {
		e.context;
	}
	init() {
		(this.position = [1, 1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1]),
			(this.indices = [
				0, 2, 4, 6, 4, 2, 5, 3, 1, 3, 5, 7, 4, 1, 0, 1, 4, 5, 2, 3, 6, 7, 6, 3, 0, 1, 2, 3, 2, 1, 6, 5, 4, 5, 6,
				7
			]),
			this.setAttribute(new Ot("position", this.position, 3)),
			this.setIndice(this.indices),
			(this.count = this.indices.length);
	}
}
async function $i(e) {
	const t = e.map((e) => {
			const t = document.createElement("img");
			return (t.src = e), t.decode().then(() => createImageBitmap(t));
		}),
		i = await Promise.all(t);
	await Promise.all(i);
	const r = new Ut({ magFilter: "linear", minFilter: "linear" }),
		n = i.map((e, t) => ({ source: e, width: e.width, height: e.height, depth: 1, x: 0, y: 0, z: t }));
	return {
		texture: new Rt({
			size: { width: i[0].width, height: i[0].height, depth: 6 },
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
			sampler: r,
			data: n,
			viewFormats: "cube",
			mipLevelCount: 6,
			needMipMap: !0
		}),
		sampler: r
	};
}
class Gi extends Pi {
	constructor() {
		super(),
			(this.type = "skybox"),
			(this.shaderSource = new Ai({ type: this.type, render: !0, defines: {} })),
			(this.images = []),
			(this.renderState.depthStencil.depthWriteEnabled = !1),
			(this.renderState.depthStencil.depthCompare = f.LessEqual);
	}
	async loadTexture(e) {
		const t = await $i(e);
		(this.baseTexture = t.texture), (this.baseSampler = t.sampler);
	}
	update(e, t) {
		this.shaderData || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData(e);
		const t = new Tt();
		t.setMatrix4("modelMatrix", () => e.modelMatrix),
			this.shaderData.setUniformBuffer("sky", t),
			this.shaderData.setTexture("baseTexture", this.baseTexture),
			this.shaderData.setSampler("baseSampler", this.baseSampler);
	}
}
class qi extends ai {
	constructor(e) {
		super(),
			(this.distanceToCamera = 10),
			(this.material = new Gi()),
			e && this.material.loadTexture(e),
			(this.geometry = new Fi()),
			(this.isSkyBox = !0);
	}
	update(e) {
		this.updateMatrix(), this.geometry.update(e), this.material.update(e, this), e.renderQueue.pre.push(this);
	}
}
class ki extends wi {
	constructor() {
		super({}), (this.type = "sphere"), this.init();
	}
	init() {
		const {
			positions: e,
			normals: t,
			uvs: i,
			indices: r
		} = (function (e) {
			let t,
				i,
				r,
				n,
				s,
				a,
				o,
				c,
				l,
				u,
				h,
				f,
				m,
				d,
				p,
				g,
				x,
				v,
				y,
				b,
				S = (e = e || {}).longBands || 32,
				E = e.latBands || 32,
				T = e.radius || 1,
				w = Math.PI / E,
				_ = (2 * Math.PI) / S,
				R = S * E * 4,
				U = S * E * 6,
				M = new Array(3 * R),
				C = new Array(3 * R),
				L = new Array(2 * R),
				I = new Array(U),
				z = 0,
				D = 0;
			for (x = 0; x < E; x++)
				for (t = x * w, o = Math.cos(t), c = Math.cos(t + w), v = 0; v < S; v++)
					(i = v * _),
						(r = Math.sin(t) * Math.cos(i)),
						(n = Math.sin(t) * Math.cos(i + _)),
						(s = Math.sin(t + w) * Math.cos(i)),
						(a = Math.sin(t + w) * Math.cos(i + _)),
						(l = Math.sin(t) * Math.sin(i)),
						(u = Math.sin(t) * Math.sin(i + _)),
						(h = Math.sin(t + w) * Math.sin(i)),
						(f = Math.sin(t + w) * Math.sin(i + _)),
						(m = 1 - v / S),
						(d = 1 - (v + 1) / S),
						(p = 1 - x / E),
						(g = 1 - (x + 1) / E),
						(y = 3 * z),
						(b = 2 * z),
						(M[y] = r * T),
						(M[y + 1] = o * T),
						(M[y + 2] = l * T),
						(M[y + 3] = n * T),
						(M[y + 4] = o * T),
						(M[y + 5] = u * T),
						(M[y + 6] = s * T),
						(M[y + 7] = c * T),
						(M[y + 8] = h * T),
						(M[y + 9] = a * T),
						(M[y + 10] = c * T),
						(M[y + 11] = f * T),
						(C[y] = r),
						(C[y + 1] = o),
						(C[y + 2] = l),
						(C[y + 3] = n),
						(C[y + 4] = o),
						(C[y + 5] = u),
						(C[y + 6] = s),
						(C[y + 7] = c),
						(C[y + 8] = h),
						(C[y + 9] = a),
						(C[y + 10] = c),
						(C[y + 11] = f),
						(L[b] = m),
						(L[b + 1] = p),
						(L[b + 2] = d),
						(L[b + 3] = p),
						(L[b + 4] = m),
						(L[b + 5] = g),
						(L[b + 6] = d),
						(L[b + 7] = g),
						(I[D] = z),
						(I[D + 1] = z + 1),
						(I[D + 2] = z + 2),
						(I[D + 3] = z + 2),
						(I[D + 4] = z + 1),
						(I[D + 5] = z + 3),
						(z += 4),
						(D += 6);
			return { positions: M, normals: C, uvs: L, indices: I };
		})({});
		(this.positions = e),
			(this.normals = t),
			(this.uvs = i),
			(this.indices = r),
			this.computeBoundingSphere(this.positions),
			this.setAttribute(new Ot("position", this.positions, 3)),
			this.setAttribute(new Ot("normal", this.normals, 3)),
			this.setAttribute(new Ot("uv", this.uvs, 2)),
			this.setIndice(this.indices),
			(this.count = this.indices.length);
	}
}
class Xi extends wi {
	constructor(e = 10, t = 10, i = 10) {
		super({}), (this.width = e), (this.height = t), (this.depth = i), (this.type = "box"), this.init();
	}
	init() {
		const {
			positions: e,
			normals: t,
			uvs: i
		} = (function (e) {
			let t = (e = e || {}).dimensions || [1, 1, 1],
				i = e.position || [-t[0] / 2, -t[1] / 2, -t[2] / 2],
				r = i[0],
				n = i[1],
				s = i[2],
				a = t[0],
				o = t[1],
				c = t[2],
				l = { x: r, y: n, z: s + c },
				u = { x: r + a, y: n, z: s + c },
				h = { x: r, y: n + o, z: s + c },
				f = { x: r + a, y: n + o, z: s + c },
				m = { x: r, y: n, z: s },
				d = { x: r + a, y: n, z: s },
				p = { x: r, y: n + o, z: s },
				g = { x: r + a, y: n + o, z: s };
			return {
				positions: [
					l.x,
					l.y,
					l.z,
					u.x,
					u.y,
					u.z,
					h.x,
					h.y,
					h.z,
					h.x,
					h.y,
					h.z,
					u.x,
					u.y,
					u.z,
					f.x,
					f.y,
					f.z,
					u.x,
					u.y,
					u.z,
					d.x,
					d.y,
					d.z,
					f.x,
					f.y,
					f.z,
					f.x,
					f.y,
					f.z,
					d.x,
					d.y,
					d.z,
					g.x,
					g.y,
					g.z,
					u.x,
					d.y,
					d.z,
					m.x,
					m.y,
					m.z,
					g.x,
					g.y,
					g.z,
					g.x,
					g.y,
					g.z,
					m.x,
					m.y,
					m.z,
					p.x,
					p.y,
					p.z,
					m.x,
					m.y,
					m.z,
					l.x,
					l.y,
					l.z,
					p.x,
					p.y,
					p.z,
					p.x,
					p.y,
					p.z,
					l.x,
					l.y,
					l.z,
					h.x,
					h.y,
					h.z,
					h.x,
					h.y,
					h.z,
					f.x,
					f.y,
					f.z,
					p.x,
					p.y,
					p.z,
					p.x,
					p.y,
					p.z,
					f.x,
					f.y,
					f.z,
					g.x,
					g.y,
					g.z,
					m.x,
					m.y,
					m.z,
					d.x,
					d.y,
					d.z,
					l.x,
					l.y,
					l.z,
					l.x,
					l.y,
					l.z,
					d.x,
					d.y,
					d.z,
					u.x,
					u.y,
					u.z
				],
				normals: [
					0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
					1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0, -1, 0, 0,
					-1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1,
					0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0
				],
				uvs: [
					0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,
					0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1,
					0, 1, 1, 0, 1, 1
				]
			};
		})({ dimensions: [this.depth, this.width, this.height] });
		(this.position = e),
			(this.normal = t),
			(this.uv = i),
			this.computeBoundingSphere(this.position),
			this.setAttribute(new Ot("position", this.position, 3)),
			this.setAttribute(new Ot("normal", this.normal, 3)),
			this.setAttribute(new Ot("uv", this.uv, 2)),
			(this.count = 36);
	}
	update(e) {}
	destroy() {}
}
class ji extends wi {
	constructor(e = 1, t = 0.4, i = 64, r = 8, n = 2, s = 3) {
		super({}),
			(this.radius = e),
			(this.tube = t),
			(this.tubularSegments = i),
			(this.radialSegments = r),
			(this.p = n),
			(this.q = s),
			(this.indices = []),
			(this.vertices = []),
			(this.normals = []),
			(this.uvs = []),
			this.createGeometry(),
			this.computeBoundingSphere(this.vertices),
			this.init();
	}
	update(e) {
		e.context;
	}
	init() {
		this.setAttribute(new Ot("position", this.vertices, 3)),
			this.setAttribute(new Ot("normal", this.normals, 3)),
			this.setAttribute(new Ot("uv", this.uvs, 2)),
			this.setIndice(this.indices),
			(this.count = this.indices.length);
	}
	createGeometry() {
		const e = Math.floor(this.tubularSegments),
			t = Math.floor(this.radialSegments),
			i = new ye(),
			r = new ye(),
			n = new ye(),
			s = new ye(),
			a = new ye(),
			o = new ye(),
			c = new ye();
		for (let l = 0; l <= e; ++l) {
			const u = (l / e) * this.p * Math.PI * 2;
			Hi(u, this.p, this.q, this.radius, n),
				Hi(u + 0.01, this.p, this.q, this.radius, s),
				ye.subtract(s, n, o),
				ye.add(s, n, c),
				ye.cross(o, c, a),
				ye.cross(a, o, c),
				a.normalize(),
				c.normalize();
			for (let s = 0; s <= t; ++s) {
				const o = (s / t) * Math.PI * 2,
					u = -this.tube * Math.cos(o),
					h = this.tube * Math.sin(o);
				(i.x = n.x + (u * c.x + h * a.x)),
					(i.y = n.y + (u * c.y + h * a.y)),
					(i.z = n.z + (u * c.z + h * a.z)),
					this.vertices.push(i.x, i.y, i.z),
					ye.subtract(i, n, r),
					r.normalize(),
					this.normals.push(r.x, r.y, r.z),
					this.uvs.push(l / e),
					this.uvs.push(s / t);
			}
		}
		for (let i = 1; i <= e; i++)
			for (let e = 1; e <= t; e++) {
				const r = (t + 1) * (i - 1) + (e - 1),
					n = (t + 1) * i + (e - 1),
					s = (t + 1) * i + e,
					a = (t + 1) * (i - 1) + e;
				this.indices.push(r, n, a), this.indices.push(n, s, a);
			}
	}
}
function Hi(e, t, i, r, n) {
	const s = Math.cos(e),
		a = Math.sin(e),
		o = (i / t) * e,
		c = Math.cos(o);
	(n.x = r * (2 + c) * 0.5 * s), (n.y = r * (2 + c) * a * 0.5), (n.z = r * Math.sin(o) * 0.5);
}
class Yi extends wi {
	constructor(e = 10, t = 10) {
		super({}), (this.width = e), (this.height = t), (this.type = "planeGeometry"), this.init();
	}
	init() {
		const { indices: e, normals: t, uvs: i, vertices: r } = this.createGrid(this.width, this.height);
		(this.position = r),
			(this.normal = t),
			(this.uv = i),
			(this.indices = e),
			this.computeBoundingSphere(this.position),
			this.setAttribute(new Ot("position", this.position, 3)),
			this.setAttribute(new Ot("normal", this.normal, 3)),
			this.setAttribute(new Ot("uv", this.uv, 2)),
			this.setIndice(e),
			(this.count = this.indices.length);
	}
	update(e) {}
	createGrid(e = 1, t = 1, i = 1, r = 1) {
		const n = e / 2,
			s = t / 2,
			a = Math.floor(i),
			o = Math.floor(r),
			c = a + 1,
			l = o + 1,
			u = e / a,
			h = t / o,
			f = [],
			m = [],
			d = [],
			p = [];
		for (let e = 0; e < l; e++) {
			const t = e * h - s;
			for (let i = 0; i < c; i++) {
				const r = i * u - n;
				m.push(r, -t, 0), d.push(0, 0, 1), p.push(i / a), p.push(1 - e / o);
			}
		}
		for (let e = 0; e < o; e++)
			for (let t = 0; t < a; t++) {
				const i = t + c * e,
					r = t + c * (e + 1),
					n = t + 1 + c * (e + 1),
					s = t + 1 + c * e;
				f.push(i, r, s), f.push(r, n, s);
			}
		return { indices: f, normals: d, uvs: p, vertices: m };
	}
	destroy() {}
}
class Wi extends Pi {
	constructor() {
		super(),
			(this.type = "phong"),
			(this.color = new ae(1, 0, 0)),
			(this.shaderSource = new Ai({ type: this.type, render: !0, defines: { materialPhong: !0 } })),
			(this.light = !0),
			(this.specular = new ae(1, 1, 1)),
			(this.shininess = 30),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0);
	}
	update(e, t) {
		this.shaderData || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData(e);
		const t = new Tt();
		t.setMatrix4("modelMatrix", () => e.modelMatrix),
			t.setColor("diffuse", this),
			t.setFloat("opacity", this),
			t.setMatrix4("normalMtrix", () => e.normalMatrix),
			t.setColor("emissive", this),
			t.setFloat("shininess", this),
			t.setColor("specular", this),
			this.shaderData.setUniformBuffer("phong", t),
			this.baseTexture &&
				(this.shaderData.setDefine("baseTexture", !0),
				this.shaderData.setTexture("baseTexture", this.baseTexture)),
			this.baseSampler && this.shaderData.setSampler("sampler", this.baseSampler);
	}
	destroy() {}
}
function Zi() {
	return !0;
}
const Ki = new (class {
	constructor() {
		(this._numberOfTextures = 0),
			(this._textures = new Map()),
			(this._numberOfTextures = 0),
			(this._texturesToRelease = new Map()),
			(this.defaultSampler = new Ut({
				magFilter: "linear",
				minFilter: "linear",
				addressModeU: "repeat",
				addressModeV: "repeat"
			}));
	}
	get numberOfTextures() {
		return this._numberOfTextures;
	}
	getTexture(e) {
		const t = this._textures.get(e);
		if (Z(t)) return delete this._texturesToRelease[e], ++t.count, t.texture;
	}
	addTexture(e, t) {
		const i = { texture: t, count: 1 };
		t.finalDestroy = t.destroy;
		const r = this;
		(t.destroy = function () {
			0 == --i.count && r._texturesToRelease.set(e, i);
		}),
			this._textures.set(e, i),
			++this._numberOfTextures;
	}
	releasedTextures() {
		this._texturesToRelease.forEach((e) => {
			e.texture?.finalDestroy(), --this._numberOfTextures;
		}),
			this._texturesToRelease.clear();
	}
	destroy() {
		return (
			this._textures.forEach((e) => {
				e.texture?.finalDestroy();
			}),
			(function (e) {
				function t() {
					throw new Error("This object was destroyed, i.e., destroy() was called.");
				}
				for (const i in e) "function" == typeof e[i] && (e[i] = t);
				e.isDestroyed = Zi;
			})(this)
		);
	}
})();
class Qi extends Pi {
	get roughness() {
		return this._roughness;
	}
	set roughness(e) {
		this._roughness = e;
	}
	get metalness() {
		return this._metalness;
	}
	set metalness(e) {
		this._metalness = e;
	}
	get aoTextureIntensity() {
		return this._aoTextureIntensity;
	}
	set aoTextureIntensity(e) {
		this._aoTextureIntensity = e;
	}
	get normalScale() {
		return this.renderState && this.renderState.primitive && this.renderState.primitive.cullMode == E.Back
			? oe.negate(this._normalScale, new oe())
			: this._normalScale;
	}
	set normalScale(e) {
		this._normalScale = e;
	}
	constructor() {
		super(),
			(this.type = "pbr_mat"),
			(this._roughness = 0.1),
			(this._metalness = 0.1),
			(this._aoTextureIntensity = 1),
			(this._normalScale = new oe(1, 1)),
			(this.shaderSource = new Ai({ type: this.type, render: !0, defines: { materialPbr: !0 } }));
	}
	update(e, t) {
		this.shaderData || this.createShaderData(t, e);
	}
	createShaderData(e, t) {
		super.createShaderData(e);
		const i = new Tt();
		i.setMatrix4("modelMatrix", () => e.modelMatrix),
			i.setColor("diffuse", this),
			i.setFloat("opacity", this),
			i.setMatrix3("normalMtrix", () => e.normalMatrix),
			i.setColor("emissive", this),
			i.setFloat("metalness", this),
			i.setFloat("roughness", this),
			this.shaderData.setUniformBuffer("pbr", i),
			(this.brdfTexture = Ki.getTexture("brdf")),
			(this.diffuseEnvTexture = Ki.getTexture("diffuse")),
			(this.specularEnvTexture = Ki.getTexture("specular")),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_TEXTURE", !0),
				this.shaderData.setTexture("baseTexture", this.baseTexture),
				this.shaderData.setSampler("baseSampler", this.baseSampler)),
			this.metalnessRoughnessTexture &&
				(this.shaderData.setDefine("USE_METALNESSTEXTURE", !0),
				this.shaderData.setTexture("metalnessRoughnessTexture", this.metalnessRoughnessTexture)),
			this.normalTexture &&
				(i.setFloatVec2("normalScale", this),
				this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture)),
			this.aoTexture &&
				(this.shaderData.setDefine("USE_AOTEXTURE", !0),
				this.shaderData.setTexture("aoTexture", this.aoTexture),
				i.setFloat("aoTextureIntensity", this)),
			this.emissiveTexture &&
				(this.shaderData.setDefine("USE_EMISSIVETEXTURE", !0),
				this.shaderData.setTexture("emissiveTexture", this.emissiveTexture)),
			this.specularEnvTexture && this.shaderData.setTexture("specularEnvTexture", this.specularEnvTexture),
			this.diffuseEnvTexture && this.shaderData.setTexture("diffuseEnvTexture", this.diffuseEnvTexture),
			this.brdfTexture && this.shaderData.setTexture("brdfTexture", this.brdfTexture);
	}
	destroy() {}
}
class Ji {
	constructor() {}
	addEventListener(e, t) {
		void 0 === this._listeners && (this._listeners = {});
		const i = this._listeners;
		void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t);
	}
	hasEventListener(e, t) {
		if (void 0 === this._listeners) return !1;
		const i = this._listeners;
		return void 0 !== i[e] && -1 !== i[e].indexOf(t);
	}
	removeEventListener(e, t) {
		if (void 0 === this._listeners) return;
		const i = this._listeners[e];
		if (void 0 !== i) {
			const e = i.indexOf(t);
			-1 !== e && i.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		if (void 0 === this._listeners) return;
		const t = this._listeners[e.type];
		if (void 0 !== t) {
			e.target = this;
			const i = t.slice(0);
			for (let t = 0, r = i.length; t < r; t++) i[t].call(this, e);
			e.target = null;
		}
	}
}
class er {
	constructor() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []);
	}
	sort() {
		er.sort(this.opaque, 0, this.opaque.length, er._compareFromNearToFar),
			er.sort(this.transparent, 0, this.transparent.length, er._compareFromFarToNear);
	}
	opaqueRender(e, t, i, r) {
		this.opaque.map((n) => {
			n.beforeRender(), er.excuteCommand(n.getDrawCommand(r), t, i, e), n.afterRender();
		});
	}
	transparentRender(e, t, i, r) {
		this.transparent.map((n) => {
			n.beforeRender(), er.excuteCommand(n.getDrawCommand(r), t, i, e), n.afterRender();
		});
	}
	computeRender(e, t) {
		this.computes.map((i) => {
			er.excuteCompute(i.getCommand(), e, t);
		});
	}
	preRender(e, t, i, r) {
		this.pre.map((r) => {
			r.beforeRender(), er.excuteCommand(r.getDrawCommand(), t, i, e), r.afterRender();
		});
	}
	static excuteCommand(e, t, i, r) {
		if (e.renderTarget) {
			const i = e.renderTarget.beginRenderPassEncoder(t);
			t.render(e, i, r), e.renderTarget.endRenderPassEncoder();
		} else t.render(e, i, r);
	}
	static excuteCompute(e, t, i) {
		t.compute(e, i);
	}
	reset() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []);
	}
	static _compareFromNearToFar(e, t) {
		return e.priority - t.priority || e.distanceToCamera - t.distanceToCamera;
	}
	static _compareFromFarToNear(e, t) {
		return e.priority - t.priority || t.distanceToCamera - e.distanceToCamera;
	}
	static sort(e, t, i, r) {
		er._quickSort(e, t, i, r);
	}
	static _quickSort(e, t, i, r) {
		for (;;) {
			if (i - t <= 10) return void er._insertionSort(e, t, i, r);
			const n = (t + i) >> 1;
			let s = e[t],
				a = e[i - 1],
				o = e[n];
			if (r(s, a) > 0) {
				const e = s;
				(s = a), (a = e);
			}
			if (r(s, o) >= 0) {
				const e = s;
				(s = o), (o = a), (a = e);
			} else {
				if (r(a, o) > 0) {
					const e = a;
					(a = o), (o = e);
				}
			}
			(e[t] = s), (e[i - 1] = o);
			const c = a;
			let l = t + 1,
				u = i - 1;
			(e[n] = e[l]), (e[l] = c);
			e: for (let t = l + 1; t < u; t++) {
				let i = e[t],
					n = r(i, c);
				if (n < 0) (e[t] = e[l]), (e[l] = i), l++;
				else if (n > 0) {
					do {
						if ((u--, u == t)) break e;
						n = r(e[u], c);
					} while (n > 0);
					(e[t] = e[u]), (e[u] = i), n < 0 && ((i = e[t]), (e[t] = e[l]), (e[l] = i), l++);
				}
			}
			i - u < l - t ? (this._quickSort(e, u, i, r), (i = l)) : (this._quickSort(e, t, l, r), (t = u));
		}
	}
	static _insertionSort(e, t, i, r) {
		for (let n = t + 1; n < i; n++) {
			let i;
			const s = e[n];
			for (i = n - 1; i >= t; i--) {
				const t = e[i];
				if (!(r(t, s) > 0)) break;
				e[i + 1] = t;
			}
			e[i + 1] = s;
		}
	}
}
class tr {
	constructor(e) {
		(this.context = e),
			(this.renderQueue = new er()),
			(this.geometryMemory = 0),
			(this.textureMemory = 0),
			(this.frameNumber = 0),
			(this._defines = {}),
			(this.definesDirty = !0);
	}
	get defines() {
		return this._defines;
	}
	set defines(e) {
		(this.definesDirty = !0), (this._defines = Ti(e, this._defines, !1));
	}
	update(e) {
		this.renderQueue.reset(), (this.cullingVolume = e.getCullingVolume()), (this.frameNumber += 1);
	}
}
class ir {
	constructor() {
		(this._list = []),
			(this._guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
				const t = (16 * Math.random()) | 0;
				return ("x" === e ? t : (3 & t) | 8).toString(16);
			}));
	}
	get length() {
		return this._list.length;
	}
	update(e, t) {
		this._list.forEach((i) => {
			i.update(e, t);
		});
	}
	add(e, t) {
		const i = Z(t);
		if (!Z(e)) throw new Error("instance is required.");
		if (i) {
			if (t < 0) throw new Error("index must be greater than or equal to zero.");
			if (t > this._list.length) throw new Error("index must be less than or equal to the number of primitives.");
		}
		const r = (e._external = e._external || {});
		return (
			((r._composites = r._composites || {})[this._guid] = { collection: this }),
			i ? this._list.splice(t, 0, e) : this._list.push(e),
			e
		);
	}
	remove(e) {
		if (this.contains(e)) {
			const t = this._list.indexOf(e);
			if (-1 !== t) return this._list.splice(t, 1), delete e._external._composites[this._guid], e.destroy(), !0;
		}
		return !1;
	}
	contains(e) {
		return !!(Z(e) && e._external && e._external._composites && e._external._composites[this._guid]);
	}
}
class rr {
	constructor(e) {
		this.context = e;
	}
	render(e) {}
	beforeRender() {
		(this.passRenderEncoder = this.renderTarget.beginRenderPassEncoder(this.context)),
			this.computeTarget && (this.passComputeEncoder = this.computeTarget.beginComputePassEncoder(this.context));
	}
	getColorTexture(e = 0) {
		return this.renderTarget.getColorTexture(e);
	}
	getDepthTexture() {
		return this.renderTarget.getDepthTexture();
	}
	afterRender() {
		this.renderTarget.endRenderPassEncoder(), this.computeTarget && this.computeTarget.endComputePassEncoder();
	}
}
class nr {
	constructor(e, t, i, r, n) {
		(this.type = e),
			(this.colorAttachments = t),
			(this.depthAttachment = i),
			(this.stencilAttachment = r),
			(this.querySet = n),
			(this.renderEncoder = void 0),
			(this.computeEncoder = void 0),
			(this._renderPassDescriptor = void 0),
			(this.commandEncoder = void 0),
			(this.context = void 0);
	}
	get renderPassDescriptor() {
		return (this._renderPassDescriptor = this.getRenderPassDescriptor()), this._renderPassDescriptor;
	}
	getColorTexture(e = 0) {
		const t = this.colorAttachments[e];
		return t ? t.texture : null;
	}
	getDepthTexture() {
		if (this.depthAttachment) return this.depthAttachment.texture;
	}
	getRenderPassDescriptor() {
		return (
			this.depthAttachment?.texture?.update(this.context),
			{
				...(this.colorAttachments && {
					colorAttachments: this.colorAttachments.map(
						(e) => (
							e?.texture?.update && e?.texture?.update(this.context),
							{
								view: e.texture.gpuTexture.createView() || void 0,
								resolveTarget:
									null != e.resolveTarget ? e.resolveTarget.gpuTexture.createView() : void 0,
								clearValue: e.value,
								loadOp: e.op,
								storeOp: e.storeOp
							}
						)
					)
				}),
				...((this.depthAttachment || this.stencilAttachment) && {
					depthStencilAttachment: {
						view: this.depthAttachment?.texture?.gpuTexture?.createView() || void 0,
						depthLoadOp: this.depthAttachment?.op || "clear",
						depthClearValue: this.depthAttachment?.value || 1,
						depthStoreOp: this.depthAttachment?.storeOp || "store"
					}
				})
			}
		);
	}
	beginRenderPassEncoder(e) {
		this.context || (this.context = e);
		const { device: t } = this.context;
		return (
			(this.commandEncoder = t.createCommandEncoder()),
			(this.renderEncoder = this.commandEncoder.beginRenderPass(this.renderPassDescriptor)),
			this.renderEncoder
		);
	}
	endRenderPassEncoder() {
		this.renderEncoder?.end(),
			this.context.device.queue.submit([this.commandEncoder.finish()]),
			(this.commandEncoder = null),
			(this.renderEncoder = null);
	}
	beginComputePassEncoder(e) {
		this.context || (this.context = e);
		const { device: t } = this.context;
		return (
			(this.commandEncoder = t.createCommandEncoder()),
			(this.computeEncoder = this.commandEncoder.beginComputePass()),
			this.computeEncoder
		);
	}
	endComputePassEncoder() {
		this.computeEncoder?.end(),
			this.context.device.queue.submit([this.commandEncoder.finish()]),
			(this.commandEncoder = null),
			(this.renderEncoder = null);
	}
	setSize(e, t, i) {
		this.colorAttachments &&
			this.colorAttachments.map((r) => {
				r.texture && r.texture.setSize(e, t, i);
			}),
			this.depthAttachment.texture && this.depthAttachment.texture.setSize(e, t, i);
	}
}
class sr extends rr {
	constructor(e) {
		super(e), this.init(e);
	}
	render(e, t) {
		const { renderQueue: i } = e;
		i.sort(),
			i.preRender(t, this.context, this.passRenderEncoder),
			i.transparentRender(t, this.context, this.passRenderEncoder),
			i.opaqueRender(t, this.context, this.passRenderEncoder);
	}
	init(e) {
		this.createRenderTarget(e);
	}
	createRenderTarget(e) {
		const t = new Rt({
				size: this.context.presentationSize,
				format: this.context.presentationFormat,
				usage: a.RenderAttachment | a.TextureBinding
			}),
			i = new Rt({ size: this.context.presentationSize, format: l.Depth24Plus, usage: a.RenderAttachment }),
			r = new zt({ r: 0.5, g: 0.5, b: 0.5, a: 1 }, { texture: t }),
			n = new zt(1, { texture: i });
		this.renderTarget = new nr("render", [r], n);
	}
}
const ar = ["float-array", "vec2-array", "vec3-array", "vec4-array"];
class or extends Pi {
	constructor(e) {
		super();
		const { type: t, frag: i, vert: r, defines: n } = e;
		(this.type = t),
			(this.shaderSource = new Ai({ type: t, frag: i, vert: r, custom: !0, defines: W(n, {}), render: !0 })),
			(this.uniforms = e.uniforms),
			(this.uniformBuffer = void 0);
	}
	update(e, t) {
		this.shaderData || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData(e);
		let t = (function (e) {
			let t = 0,
				i = !1;
			return (
				Object.getOwnPropertyNames(e).map((r) => {
					"texture" == e[r].type || "sampler" == e[r].type
						? (t += 0)
						: ar.find((t) => t === e[r].type)
						? (i = !0)
						: (t += 1);
				}),
				{ hasFloat: t, hasArraytype: i }
			);
		})(this.uniforms);
		t.hasFloat &&
			((this.uniformBuffer = t.hasArraytype ? new Tt("read-only-storage", r.Storage | r.CopyDst) : new Tt()),
			this.shaderData.setUniformBuffer(this.type, this.uniformBuffer));
		Object.getOwnPropertyNames(this.uniforms).map((e) => {
			!(function (e, t, i, r, n) {
				switch (t.type) {
					case "float":
						n.setFloat(e, () => i[e].value);
						break;
					case "vec2":
						n.setFloatVec2(e, () => i[e].value);
						break;
					case "vec3":
						n.setFloatVec3(e, () => i[e].value);
						break;
					case "color":
						n.setColor(e, () => i[e].value);
						break;
					case "vec4":
						n.setFloatVec4(e, () => i[e].value);
					case "mat2":
						n.setMatrix2(e, () => i[e].value);
						break;
					case "mat3":
						n.setMatrix3(e, () => i[e].value);
					case "mat4":
						n.setMatrix4(e, () => i[e].value);
						break;
					case "float-array":
						n.setFloatArray(e, () => i[e].value, i[e].value.length);
						break;
					case "vec2-array":
						n.setVec2Array(e, () => i[e].value, i[e].value.length);
						break;
					case "vec3-array":
						n.setVec3Array(e, () => i[e].value, i[e].value.length);
						break;
					case "vec4-array":
						n.setVec4Array(e, () => i[e].value, i[e].value.length);
						break;
					case "texture":
						r.setTexture(e, () => i[e].value);
						break;
					case "sampler":
						r.setSampler(e, () => i[e].value);
						break;
					default:
						throw new Error("not match unifrom type");
				}
			})(e, this.uniforms[e], this.uniforms, this.shaderData, this.uniformBuffer);
		});
	}
}
class cr {
	constructor() {
		(this.geometry = new wi({})),
			this.geometry.setAttribute(new Ot("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)),
			(this.geometry.count = 6);
		const e = Ni("resolve", {});
		(this.material = new or({
			type: "resolve",
			frag: e.frag,
			vert: e.vert,
			uniforms: {
				texture: { type: "texture", value: void 0 },
				sampler: { type: "sampler", value: new Ut({ magFilter: "linear", minFilter: "linear" }) }
			}
		})),
			(this.quadMesh = new ai(this.geometry, this.material));
	}
	render(e, t) {
		this.canvasRenderTarget || this.initRenderTarget(e),
			(this.material.uniforms.texture.value = t),
			(this.canvasRenderTarget.colorAttachments[0].texture = { gpuTexture: e.context.getCurrentTexture() }),
			this.material.update(void 0, this.quadMesh);
		const i = this.quadMesh.getDrawCommand(),
			r = this.canvasRenderTarget.beginRenderPassEncoder(e);
		e.render(i, r), this.canvasRenderTarget.endRenderPassEncoder();
	}
	initRenderTarget(e) {
		const t = new zt(
				{ r: 0.14, g: 0.14, b: 0.14, a: 1 },
				{ texture: { gpuTexture: e.context.getCurrentTexture() } }
			),
			i = new Rt({ size: e.presentationSize, format: l.Depth24Plus, usage: a.RenderAttachment }),
			r = new zt(1, { texture: i });
		this.canvasRenderTarget = new nr("render", [t], r);
	}
}
class lr extends rr {
	constructor(e) {
		super(e), this.init(e);
	}
	beforeRender() {}
	render(e, t) {
		const { renderQueue: i, context: r } = e,
			n = r.lightManger.getAllLights();
		if (0 !== n.length) {
			for (let e = 0; e < n.length; e++) {
				const t = n[e].shadow;
				this.setRenderTarget(t), super.beforeRender();
			}
			i.sort(),
				i.preRender(t, this.context, this.passRenderEncoder),
				i.transparentRender(t, this.context, this.passRenderEncoder),
				i.opaqueRender(t, this.context, this.passRenderEncoder);
		}
	}
	afterRender() {}
	setRenderTarget(e) {
		const t = e.getShadowMapTexture(),
			i = new zt(1, { texture: t });
		this.renderTarget.depthAttachment = i;
	}
	init(e) {
		this.createRenderTarget(e);
	}
	createRenderTarget(e) {
		this.renderTarget = new nr("render");
	}
}
class ur {
	constructor(e) {
		(this.context = e), (this.basicPass = new sr(e)), (this.shadowPass = new lr(e)), (this.resolveFrame = new cr());
	}
	render(e, t) {
		this.basicPass.beforeRender(),
			this.basicPass.render(e, t),
			this.basicPass.afterRender(),
			this.resolveFrame.render(e.context, this.basicPass.getColorTexture(0));
	}
	destroy() {
		this.basicPass = void 0;
	}
}
async function hr(e) {
	const t = e.map((e) => {
			const t = document.createElement("img");
			return (t.src = e), t.decode().then(() => createImageBitmap(t));
		}),
		i = await Promise.all(t);
	await Promise.all(i);
	const r = i.map((e, t) => ({ source: e, width: e.width, height: e.height, depth: 1, x: 0, y: 0, z: t }));
	return new Rt({
		size: { width: i[0].width, height: i[0].height, depth: 6 },
		format: "rgba8unorm",
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
		data: r,
		viewFormats: "cube",
		mipLevelCount: 6,
		needMipMap: !0
	});
}
async function fr(e) {
	const t = document.createElement("img");
	(t.src = e), await t.decode();
	const i = await createImageBitmap(t);
	return new Rt({ size: { width: i.width, height: i.height, depth: 1 }, data: { source: i }, format: "rgba8unorm" });
}
class mr extends Ji {
	constructor(e) {
		super(),
			(this.container =
				e.container instanceof HTMLDivElement ? e.container : document.getElementById(e.container)),
			(this.primitiveManger = new ir()),
			(this.context = new _t({ canvas: null, container: this.container, pixelRatio: 1 })),
			(this.brdfUrl = W(e.brdfUrl, void 0)),
			(this.specularEnvUrls = W(e.specularEnvUrls, [])),
			(this.diffuseEnvUrls = W(e.diffuseEnvUrls, [])),
			(this.requestAdapter = e.requestAdapter || {}),
			(this.deviceDescriptor = e.deviceDescriptor || {}),
			(this.presentationContextDescriptor = e.presentationContextDescriptor),
			(this.ready = !1),
			(this.inited = !1);
	}
	async init() {
		if (
			(await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor),
			(this.currentRenderPipeline = new ur(this.context)),
			(this.frameState = new tr(this.context)),
			(this.viewport = {
				x: 0,
				y: 0,
				width: this.context.presentationSize.width,
				height: this.context.presentationSize.height
			}),
			this.brdfUrl)
		) {
			const {
				brdfTexture: e,
				diffuseTexture: t,
				specularTexture: i
			} = await (async function (e, t, i) {
				if (!e) return;
				return { brdfTexture: await fr(e), diffuseTexture: await hr(t), specularTexture: await hr(i) };
			})(this.brdfUrl, this.diffuseEnvUrls, this.specularEnvUrls);
			Ki.addTexture("brdf", e), Ki.addTexture("diffuse", t), Ki.addTexture("specular", i);
		}
		this.ready = !0;
	}
	add(e) {
		"primitive" !== e.type || this.primitiveManger.contains(e) || this.primitiveManger.add(e);
	}
	addLight(e) {
		this.context.lightManger.add(e);
	}
	setCamera(e) {
		this.camera = e;
	}
	remove(e) {
		"primitive" !== e.type || this.primitiveManger.contains(e) || this.primitiveManger.remove(e);
	}
	getPrimitiveById() {}
	async render() {
		this.inited || ((this.inited = !0), await this.init()), this.update();
	}
	update() {
		this.ready &&
			(Ki.releasedTextures(),
			(this.frameState.viewport = this.viewport),
			this.frameState.update(this.camera),
			this.context.lightManger.update(this.frameState, this.camera),
			this.primitiveManger.update(this.frameState, this.camera),
			this.currentRenderPipeline.render(this.frameState, this.camera));
	}
}
class dr {
	constructor(e, t) {
		(this.normal = ye.clone(e)), (this.distance = t);
	}
	normalize() {
		const e = 1 / this.normal.length();
		return (this.normal = ye.multiplyByScalar(this.normal, e, this.normal)), (this.distance *= e), this;
	}
	static fromPointNormal(e, t, i) {
		if (!J.equalsEpsilon(ye.magnitude(t), 1, J.EPSILON6)) throw new Error("normal must be normalized.");
		const r = -ye.dot(t, e);
		return Z(i) ? (ye.clone(t, i.normal), (i.distance = r), i) : new dr(t, r);
	}
	static fromVector4(e, t) {
		const i = ye.fromVector4(e, pr),
			r = e.w;
		if (!J.equalsEpsilon(ye.magnitude(i), 1, J.EPSILON6)) throw new Error("normal must be normalized.");
		return Z(t) ? (ye.clone(i, t.normal), (t.distance = r), t) : new dr(i, r);
	}
	static getPointDistance(e, t) {
		return ye.dot(e.normal, t) + e.distance;
	}
	static projectPointOntoPlane(e, t, i) {
		Z(i) || (i = new ye());
		const r = dr.getPointDistance(e, t),
			n = ye.multiplyByScalar(e.normal, r, gr);
		return ye.subtract(t, n, i);
	}
	static transform(e, t, i) {
		const r = e.normal,
			n = e.distance,
			s = Pe.inverseTranspose(t, xr);
		let a = ze.fromElements(r.x, r.y, r.z, n, vr);
		a = Pe.multiplyByVector(s, a, a);
		const o = ye.fromVector4(a, yr);
		return (a = ze.divideByScalar(a, ye.magnitude(o), a)), dr.fromVector4(a, i);
	}
	static clone(e, t) {
		return Z(t) ? (ye.clone(e.normal, t.normal), (t.distance = e.distance), t) : new dr(e.normal, e.distance);
	}
	static equals(e, t) {
		return e.distance === t.distance && ye.equals(e.normal, t.normal);
	}
}
(dr.ORIGIN_XY_PLANE = Object.freeze(new dr(ye.UNIT_Z, 0))),
	(dr.ORIGIN_YZ_PLANE = Object.freeze(new dr(ye.UNIT_X, 0))),
	(dr.ORIGIN_ZX_PLANE = Object.freeze(new dr(ye.UNIT_Y, 0)));
const pr = new ye(),
	gr = new ye(),
	xr = new Pe(),
	vr = new ze(),
	yr = new ye();
class br {
	constructor(e) {
		this.planes = W(e, [
			new dr(ye.UNIT_Z, 0),
			new dr(ye.UNIT_Z, 0),
			new dr(ye.UNIT_Z, 0),
			new dr(ye.UNIT_Z, 0),
			new dr(ye.UNIT_Z, 0),
			new dr(ye.UNIT_Z, 0)
		]);
	}
	static fromBoundingSphere(e, t) {
		if (!Z(e)) throw new Error("boundingSphere is required.");
		Z(t) || (t = new br());
		const i = Sr.length,
			r = t.planes;
		r.length = 2 * i;
		const n = e.center,
			s = e.radius;
		let a = 0;
		for (let e = 0; e < i; ++e) {
			const t = Sr[e];
			let i = r[a],
				o = r[a + 1];
			Z(i) || (i = r[a] = new ze()),
				Z(o) || (o = r[a + 1] = new ze()),
				ye.multiplyByScalar(t, -s, Er),
				ye.add(n, Er, Er),
				(i.x = t.x),
				(i.y = t.y),
				(i.z = t.z),
				(i.w = -ye.dot(t, Er)),
				ye.multiplyByScalar(t, s, Er),
				ye.add(n, Er, Er),
				(o.x = -t.x),
				(o.y = -t.y),
				(o.z = -t.z),
				(o.w = -ye.dot(ye.negate(t, Tr), Er)),
				(a += 2);
		}
		return t;
	}
	computeVisibility(e) {
		if (!Z(e)) throw new Error("boundingVolume is required.");
		const t = this.planes;
		let i = !1;
		for (let r = 0, n = t.length; r < n; ++r) {
			const n = e.intersectPlane(t[r]);
			if (n === Nt.OUTSIDE) return Nt.OUTSIDE;
			n === Nt.INTERSECTING && (i = !0);
		}
		return i ? Nt.INTERSECTING : Nt.INSIDE;
	}
	computeVisibilityWithPlaneMask(e, t) {
		if (!Z(e)) throw new Error("boundingVolume is required.");
		if (!Z(t)) throw new Error("parentPlaneMask is required.");
		if (t === br.MASK_OUTSIDE || t === br.MASK_INSIDE) return t;
		let i = br.MASK_INSIDE;
		const r = this.planes;
		for (let n = 0, s = r.length; n < s; ++n) {
			const s = n < 31 ? 1 << n : 0;
			if (n < 31 && 0 == (t & s)) continue;
			wr.set(r[n].normal.x, r[n].normal.y, r[n].normal.z, r[n].distance);
			const a = e.intersectPlane(dr.fromVector4(wr, _r));
			if (a === Nt.OUTSIDE) return br.MASK_OUTSIDE;
			a === Nt.INTERSECTING && (i |= s);
		}
		return i;
	}
}
(br.MASK_OUTSIDE = 4294967295), (br.MASK_INSIDE = 0), (br.MASK_INDETERMINATE = 2147483647);
const Sr = [new ye(), new ye(), new ye()];
ye.clone(ye.UNIT_X, Sr[0]), ye.clone(ye.UNIT_Y, Sr[1]), ye.clone(ye.UNIT_Z, Sr[2]);
const Er = new ye(),
	Tr = new ye(),
	wr = new ze(),
	_r = new dr(new ye(1, 0, 0), 0);
class Rr extends ei {
	constructor() {
		super(),
			(this._viewMatrix = void 0),
			(this.isCamera = !0),
			(this.cullingVolume = new br()),
			(this._viewMatrix = new Pe()),
			(this.projectMatrixDirty = !0),
			this.createShaderData();
	}
	get viewMatrix() {
		return this.updateMatrix(), Pe.inverse(this.modelMatrix, this._viewMatrix), this._viewMatrix;
	}
	get projectionMatrix() {
		return this.updateProjectionMatrix(), this._projectionMatrix;
	}
	get inverseViewMatrix() {
		return this.updateMatrix(), this.modelMatrix;
	}
	updateProjectionMatrix() {}
	getCullingVolume() {
		const e = this.viewMatrix.clone(new Pe()),
			t = Pe.multiply(this.projectionMatrix, e, new Pe()),
			i = this.cullingVolume.planes,
			r = t,
			n = r[0],
			s = r[1],
			a = r[2],
			o = r[3],
			c = r[4],
			l = r[5],
			u = r[6],
			h = r[7],
			f = r[8],
			m = r[9],
			d = r[10],
			p = r[11],
			g = r[12],
			x = r[13],
			v = r[14],
			y = r[15];
		return (
			(i[0] = new dr(new ye(o - n, h - c, p - f), y - g)),
			i[0].normalize(),
			(i[1] = new dr(new ye(o + n, h + c, p + f), y + g)),
			i[1].normalize(),
			(i[2] = new dr(new ye(o + s, h + l, p + m), y + x)),
			i[2].normalize(),
			(i[3] = new dr(new ye(o - s, h - l, p - m), y - x)),
			i[3].normalize(),
			(i[4] = new dr(new ye(o - a, h - u, p - d), y - v)),
			i[4].normalize(),
			(i[5] = new dr(new ye(o + a, h + u, p + d), y + v)),
			i[5].normalize(),
			this.cullingVolume
		);
	}
	createShaderData() {
		this.shaderData = new Et("camera", 0, 1, 1);
		const e = new Tt();
		e.setMatrix4("projectionMatrix", () => this.projectionMatrix),
			e.setMatrix4("viewMatrix", () => this.viewMatrix),
			e.setMatrix4("inverseViewMatrix", () => this.inverseViewMatrix),
			e.setFloatVec3("position", () => this.position),
			this.shaderData.setUniformBuffer("camera", e);
	}
}
class Ur extends Rr {
	constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
		super(),
			(this._aspect = t),
			(this.fov = e),
			(this.near = i),
			(this.far = r),
			(this.xOffset = 0),
			(this.yOffset = 0),
			(this.projectMatrixDirty = !0),
			this.updateCameraParms(),
			(this.cullingVolume = new br()),
			(this.isPerspectiveCamera = !0);
	}
	get aspect() {
		return this._aspect;
	}
	set aspect(e) {
		(this.projectMatrixDirty = !0), (this._aspect = e);
	}
	get fov() {
		return this._fov;
	}
	set fov(e) {
		(this.projectMatrixDirty = !0), (this._fov = e);
	}
	updateCameraParms() {
		(this.top = this.near * Math.tan(0.5 * J.RADIANS_PER_DEGREE * this.fov)),
			(this.height = 2 * this.top),
			(this.width = this.aspect * this.height),
			(this.left = -0.5 * this.width);
	}
	updateProjectionMatrix() {
		this.projectMatrixDirty &&
			(this.updateCameraParms(),
			(this._projectionMatrix = Pe.makePerspective(
				this.left,
				this.left + this.width,
				this.top,
				this.top - this.height,
				this.near,
				this.far
			)),
			(this.projectMatrixDirty = !1));
	}
}
class Mr {
	constructor(e, t) {
		(this._color = ye.multiplyByScalar(e, t, new ye())),
			(this._intensity = t),
			(this._position = new ye(0, 0, 0)),
			(this.positionDirty = !0),
			(this.colorDirty = !0),
			(this.intensityDirty = !0),
			(this._shadow = null);
	}
	get position() {
		return this._position;
	}
	set position(e) {
		(this.positionDirty = !0), (this._position = e);
	}
	get color() {
		return this._color;
	}
	set color(e) {
		(this.colorDirty = !0), (this._color = e);
	}
	set intensity(e) {
		(this.color = ye.multiplyByScalar(this.color, e, new ye())), (this.intensityDirty = !0), (this._intensity = e);
	}
	get intensity() {
		return this._intensity;
	}
	get shadow() {
		return this._shadow;
	}
	set shadow(e) {
		this._shadow = e;
	}
	update(e) {
		e.viewMatrix;
		let t = this.position.clone();
		this.positionVC = t;
	}
}
class Cr extends Mr {
	constructor(e, t, i = 0, r = Math.PI / 3, n = 0.5, s = 1) {
		super(e, t),
			(this._distance = i),
			(this._angle = r),
			(this._penumbra = n),
			(this._decay = s),
			(this.type = "spot"),
			(this._target = new ye(0, 0, 0)),
			(this.dirtectDirty = !0),
			(this.angleDirty = !0),
			(this.penumbraDirty = !0),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.coneCosDirty = !0),
			(this.penumbraCosDirty = !0),
			this.updateConeCosOrPenumbraCos();
	}
	set target(e) {
		(this.dirtectDirty = !0), (this._target = e);
	}
	get dirtect() {
		const e = new ye();
		return ye.subtract(this.position, this._target, e), ye.normalize(e, new ye());
	}
	get angle() {
		return this._angle;
	}
	set angle(e) {
		(this.angleDirty = !0), (this._angle = e), this.updateConeCosOrPenumbraCos();
	}
	get penumbra() {
		return this._penumbra;
	}
	set penumbra(e) {
		(this.penumbraDirty = !0), (this._penumbra = e), this.updateConeCosOrPenumbraCos();
	}
	set distance(e) {
		(this.distanceDirty = !0), (this._distance = e);
	}
	get distance() {
		return this._distance;
	}
	set decay(e) {
		(this.decayDirty = !0), (this._decay = e);
	}
	get decay() {
		return this._decay;
	}
	set coneCos(e) {
		(this.coneCosDirty = !0), (this._coneCos = e);
	}
	get coneCos() {
		return this._coneCos;
	}
	set penumbraCos(e) {
		(this.penumbraCosDirty = !0), (this._penumbraCos = e);
	}
	get penumbraCos() {
		return this._penumbraCos;
	}
	updateConeCosOrPenumbraCos() {
		(this._coneCos = Math.cos(this.angle)), (this._penumbraCos = Math.cos(this.angle * (1 - this.penumbra)));
	}
	update(e) {
		super.update(e);
		let t = this.dirtect.clone();
		e.viewMatrix, (this.dirtectVC = t);
	}
}
class Lr {
	constructor(e, t) {
		(this._shadowMapSize = e), (this._camera = t), this._init();
	}
	getShadowMapTexture() {
		return this._shadowMap;
	}
	_init() {
		this._initShadowMapTexture();
	}
	_initShadowMapTexture() {
		this._createShadowMapTexture();
	}
	_createShadowMapTexture() {
		this._shadowMap = new Rt({
			size: { width: this._shadowMapSize, height: this._shadowMapSize, depth: 1 },
			format: l.Depth32Float,
			usage: a.RenderAttachment | a.TextureBinding
		});
	}
}
class Ir extends Lr {
	constructor() {
		super(1024, new Ur(90, 1, 0.5, 500)), (this.type = "pointLightShadow");
	}
}
class zr extends Mr {
	constructor(e, t, i = 0, r = 1, n = !0) {
		super(e, t),
			(this._distance = i),
			(this._decay = r),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.type = "point"),
			n && (this.shadow = new Ir());
	}
	set distance(e) {
		(this.distanceDirty = !0), (this._distance = e);
	}
	get distance() {
		return this._distance;
	}
	set decay(e) {
		(this.decayDirty = !0), (this._decay = e);
	}
	get decay() {
		return this._decay;
	}
}
class Dr extends Mr {
	constructor(e, t, i = new ye(1, 1, 0)) {
		super(e, t), (this.type = "dirtect"), (this._dirtect = i), (this.dirtectDirty = !0);
	}
	set dirtect(e) {
		(this.dirtectDirty = !0), (this._dirtect = e);
	}
	get dirtect() {
		return ye.normalize(this._dirtect, new ye());
	}
	update(e) {
		super.update(e);
		let t = this.dirtect.clone();
		e.viewMatrix, (this.dirtectVC = t.normalize());
	}
}
function Or(e, t, i, r) {
	switch (e) {
		case 5120:
			return new Int8Array(t, i, r);
		case 5121:
			return new Uint8Array(t, i, r);
		case 5122:
			return new Int16Array(t, i, r);
		case 5123:
			return new Uint16Array(t, i, r);
		case 5125:
			return new Uint32Array(t, i, r);
		case 5126:
			return new Float32Array(t, i, r);
		default:
			throw new Error("invalid component type");
	}
}
const Nr = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16,
	5120: 1,
	5121: 1,
	5122: 2,
	5123: 2,
	5125: 4,
	5126: 4,
	9728: "nearest",
	9729: "linear",
	9984: "linear",
	9985: "linear",
	9986: "linear",
	9987: "linear",
	33071: "clamp-to-edge",
	33648: "mirror-repeat",
	10497: "repeat"
};
class Ar {
	constructor(e, t, i, r = 0) {
		function n(e) {
			return {
				magFilter: Nr[e.magFilter || 9729],
				minFilter: Nr[e.minFilter || 9729],
				addressModeU: Nr[e.wrapS || 10497],
				addressModeV: Nr[e.wrapT || 10497]
			};
		}
		(this.scenes = e.scenes),
			(this.defaultScene = e.scene || 0),
			(this.nodes = e.nodes),
			(this.cameras = e.cameras || []),
			(this.images = i);
		const s = e.samplers ? e.samplers.map((e) => n(e)) : [],
			a = n({}),
			o = e.textures ? e.textures.map((e) => ((e.sampler = void 0 !== e.sampler ? s[e.sampler] : a), e)) : [],
			c = e.materials
				? e.materials.map(
						(e) => (
							e.pbrMetallicRoughness || (e.pbrMetallicRoughness = {}),
							(function (e) {
								const { baseColorTexture: t, metallicRoughnessTexture: i } = e.pbrMetallicRoughness,
									{ normalTexture: r, occlusionTexture: n, emissiveTexture: s } = e;
								return [t, i, r, n, s];
							})(e).forEach((e) => {
								e && ((e.source = o[e.index].source), (e.sampler = o[e.index].sampler));
							}),
							e
						)
				  )
				: [],
			l = { pbrMetallicRoughness: {} };
		function u(i, n) {
			const s = e.bufferViews[i.bufferView],
				a = (s.byteOffset || 0) + (i.byteOffset || 0),
				o = Math.max(s.byteStride / 4 || 0, n);
			let c = Or(i.componentType, t[s.buffer], 0 === s.buffer ? a + r : a, (i.count - 1) * o + n);
			if (o > n) {
				const e = new (0, c.constructor)(i.count * n);
				for (let t = 0, i = 0; t < e.length; t += n, i += o) for (let r = 0; r < n; r += 1) e[t + r] = c[i + r];
				c = e;
			}
			return c;
		}
		const h = e.accessors.map((e) => {
			const t = Nr[e.type];
			let i;
			if (
				((i =
					void 0 === e.bufferView
						? Or(e.componentType, new ArrayBuffer(t * e.count * Nr[e.componentType]), 0, e.count * t)
						: u(e, t)),
				e.sparse)
			) {
				(e.sparse.indices.count = e.sparse.count),
					(e.sparse.values.count = e.sparse.count),
					(e.sparse.values.componentType = e.componentType);
				const r = u(e.sparse.indices, 1),
					n = u(e.sparse.values, t);
				for (let s = 0; s < e.sparse.count; s += 1)
					for (let e = 0; e < t; e += 1) i[r[s] * t + e] = n[s * t + e];
			}
			return i;
		});
		(this.meshes = e.meshes.map((t) =>
			t.primitives.map((t) => {
				const i = void 0 !== t.material ? c[t.material] : l;
				let r,
					n = null;
				void 0 !== t.indices
					? ((n = (function (e) {
							if (e instanceof Uint16Array || e instanceof Uint32Array) return e;
							let t;
							return (
								(t = e instanceof Float32Array ? new Uint32Array(e.length) : new Uint16Array(e.length)),
								e.forEach((e, i) => {
									t[i] = e;
								}),
								t
							);
					  })(h[t.indices])),
					  (r = e.accessors[t.indices].count))
					: (r = e.accessors[t.attributes.POSITION].count);
				const s = h[t.attributes.POSITION],
					{ max: a, min: o } = e.accessors[t.attributes.POSITION],
					u = { max: a, min: o };
				let f;
				f =
					void 0 !== t.attributes.NORMAL
						? h[t.attributes.NORMAL]
						: (function (e, t) {
								const i = new Float32Array(t.length),
									r = e ? e.length : t.length;
								for (let n = 0; n < r; n += 3) {
									const r = [];
									for (let t = 0; t < 3; t += 1) e ? r.push(e[n + t]) : r.push(n + t);
									const s = r.map((e) => {
											const i = 3 * e;
											return new ye(t[i], t[i + 1], t[i + 2]);
										}),
										a = new ye();
									ye.subtract(s[1], s[0], a);
									const o = new ye();
									ye.subtract(s[2], s[0], o);
									const c = new ye();
									ye.cross(a.normalize(), o.normalize(), c);
									for (let e = 0; e < 3; e += 1) {
										const t = 3 * (n + e);
										(i[t + 0] += c.x), (i[t + 1] += c.y), (i[t + 2] += c.z);
									}
								}
								return i;
						  })(n, s);
				let m = null;
				void 0 !== t.attributes.TEXCOORD_0 && (m = h[t.attributes.TEXCOORD_0]);
				let d = null;
				void 0 !== t.attributes.TEXCOORD_1 && (d = h[t.attributes.TEXCOORD_1]);
				let p = null;
				void 0 !== t.attributes.TANGENT && void 0 !== t.attributes.NORMAL
					? (p = h[t.attributes.TANGENT])
					: i.normalTexture;
				let g = null;
				return (
					void 0 !== t.attributes.COLOR_0 && (g = h[t.attributes.COLOR_0]),
					(function (e, t) {
						const {
								vertexCount: i,
								indices: r,
								positions: n,
								normals: s,
								uvs: a,
								uv1s: o,
								tangents: c,
								colors: l,
								material: u,
								boundingBox: h
							} = e,
							{
								emissiveFactor: f,
								emissiveTexture: m,
								name: d,
								normalTexture: p,
								occlusionTexture: g,
								pbrMetallicRoughness: x
							} = u,
							v = new wi({});
						r && v.setIndice(Array.from(r));
						n && v.setAttribute(new Ot("position", Array.from(n), 3));
						s && v.setAttribute(new Ot("normal", Array.from(s), 3));
						a && v.setAttribute(new Ot("uv", Array.from(a), 2));
						v.computeBoundingSphere(Array.from(n)), (v.count = i);
						const y = new Qi();
						p && (y.normalTexture = Vr(p, t));
						g && (y.aoTexture = Vr(g, t));
						m && (y.emissiveTexture = Vr(m, t));
						x?.baseColorTexture && (y.baseTexture = Vr(x.baseColorTexture, t));
						x?.metallicRoughnessTexture &&
							(y.metalnessRoughnessTexture = Vr(x.metallicRoughnessTexture, t));
						(y.baseSampler = new Ut({
							magFilter: "linear",
							minFilter: "linear",
							addressModeU: "repeat",
							addressModeV: "repeat"
						})),
							(y.roughness = 0),
							(y.metalness = 1);
						const b = new ai(v, y);
						return b;
					})(
						{
							vertexCount: r,
							indices: n,
							positions: s,
							normals: f,
							uvs: m,
							uv1s: d,
							tangents: p,
							colors: g,
							material: i,
							boundingBox: u
						},
						this.images
					)
				);
			})
		)),
			(this.animations =
				e.animations?.map((e) => {
					const t = e.channels.map(({ sampler: t, target: i }) => ({
							input: h[e.samplers[t].input],
							output: h[e.samplers[t].output],
							interpolation: e.samplers[t].interpolation || "LINEAR",
							node: i.node,
							path: i.path
						})),
						i = t.reduce((e, { input: t }) => Math.max(e, t[t.length - 1]), 0);
					return { channels: t, length: i };
				}) || []);
	}
}
async function Pr(e, t, i = 0, r) {
	const n = t.substring(0, t.lastIndexOf("/")),
		s = [];
	let a = Promise.resolve();
	e.images &&
		(a = Promise.all(
			e.images.map(async (e, t) => {
				if (e.uri) {
					const i = "data:" === e.uri.slice(0, 5) ? e.uri : `${n}/${e.uri}`;
					s[t] = await fetch(i)
						.then((e) => e.blob())
						.then((e) => createImageBitmap(e, { colorSpaceConversion: "none" }));
				}
			})
		));
	const o = [];
	await Promise.all(
		e.buffers.map((e, t) => {
			if (!e.uri) {
				if (0 !== t) throw new Error("buffer uri undefined");
				return (o[t] = r), Promise.resolve();
			}
			const i = "data:" === e.uri.slice(0, 5) ? e.uri : `${n}/${e.uri}`;
			return fetch(i)
				.then((e) => e.arrayBuffer())
				.then((e) => {
					o[t] = e;
				});
		})
	);
	let c = Promise.resolve();
	return (
		e.images &&
			(c = Promise.all(
				e.images.map(async (t, r) => {
					if (void 0 !== t.bufferView) {
						const { buffer: n, byteOffset: a, byteLength: c } = e.bufferViews[t.bufferView],
							l = new Uint8Array(o[n], 0 === n ? a + i : a, c);
						let u;
						u = t.mimeType ? t.mimeType : 255 === l[0] ? "image/jpeg" : "image/png";
						const h = new Blob([l], { type: u });
						s[r] = await createImageBitmap(h, { colorSpaceConversion: "none" });
					}
				})
			)),
		await Promise.all([a, c]),
		new Ar(e, o, s, i)
	);
}
async function Br(e) {
	if ("gltf" === e.split(".").pop()) {
		return Pr(await fetch(e).then((e) => e.json()), e);
	}
	const t = await fetch(e).then((e) => e.arrayBuffer()),
		i = new Uint32Array(t, 12, 1)[0],
		r = new Uint8Array(t, 20, i);
	return Pr(JSON.parse(new TextDecoder("utf-8").decode(r)), e, 28 + i, t);
}
function Vr(e, t) {
	const { sampler: i, index: r } = e;
	return new Rt({
		size: { width: t[r].width, height: t[r].height, depth: 1 },
		data: { source: t[r] },
		format: "rgba8unorm",
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
	});
}
class Fr {
	constructor(e = 1, t = 0, i = 0) {
		return (this.radius = e), (this.phi = t), (this.theta = i), this;
	}
	set(e, t, i) {
		return (this.radius = e), (this.phi = t), (this.theta = i), this;
	}
	copy(e) {
		return (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this;
	}
	makeSafe() {
		const e = 1e-6;
		return (this.phi = Math.max(e, Math.min(Math.PI - e, this.phi))), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, i) {
		return (
			(this.radius = Math.sqrt(e * e + t * t + i * i)),
			0 === this.radius
				? ((this.theta = 0), (this.phi = 0))
				: ((this.theta = Math.atan2(e, i)), (this.phi = Math.acos(J.clamp(t / this.radius, -1, 1)))),
			this
		);
	}
	clone() {
		return new Fr(this.radius, this.phi, this.theta);
	}
}
const $r = { type: "change" },
	Gr = { type: "start" },
	qr = { type: "end" };
class kr extends Ji {
	constructor(e, t) {
		super(),
			void 0 === t && console.warn('OrbitControls: The second parameter "domElement" is now mandatory.'),
			t === document &&
				console.error(
					'OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
				),
			(this.object = e),
			(this.domElement = t),
			(this.domElement.style.touchAction = "none"),
			(this.enabled = !0),
			(this.target = new ye()),
			(this.minDistance = 0),
			(this.maxDistance = 1 / 0),
			(this.minZoom = 0),
			(this.maxZoom = 1 / 0),
			(this.minPolarAngle = 0),
			(this.maxPolarAngle = Math.PI),
			(this.minAzimuthAngle = -1 / 0),
			(this.maxAzimuthAngle = 1 / 0),
			(this.enableDamping = !1),
			(this.dampingFactor = 0.05),
			(this.enableZoom = !0),
			(this.zoomSpeed = 1),
			(this.enableRotate = !0),
			(this.rotateSpeed = 1),
			(this.enablePan = !0),
			(this.panSpeed = 1),
			(this.screenSpacePanning = !1),
			(this.keyPanSpeed = 7),
			(this.autoRotate = !1),
			(this.autoRotateSpeed = 2),
			(this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }),
			(this.mouseButtons = { LEFT: hn.ROTATE, MIDDLE: hn.DOLLY, RIGHT: hn.PAN }),
			(this.touches = { ONE: fn.ROTATE, TWO: fn.DOLLY_PAN }),
			(this.target0 = this.target.clone()),
			(this.position0 = this.object.position.clone()),
			(this.zoom0 = this.object.zoom),
			(this._domElementKeyEvents = null);
		const i = this;
		(this.update = (function () {
			const e = new ye(),
				t = new At().setFromUnitVectors(i.object.up, new ye(0, 1, 0)),
				r = t.clone().invert(),
				n = new ye(),
				s = new At(),
				a = 2 * Math.PI;
			return function () {
				const o = i.object.position;
				e.copy(o).subtract(i.target),
					e.applyQuaternion(t),
					Yr.setFromVector3(e),
					i.autoRotate && jr === Xr.NONE && mn(i.getAutoRotationAngle()),
					i.enableDamping
						? ((Yr.theta += Wr.theta * i.dampingFactor), (Yr.phi += Wr.phi * i.dampingFactor))
						: ((Yr.theta += Wr.theta), (Yr.phi += Wr.phi));
				let c = i.minAzimuthAngle,
					l = i.maxAzimuthAngle;
				return (
					isFinite(c) &&
						isFinite(l) &&
						(c < -Math.PI ? (c += a) : c > Math.PI && (c -= a),
						l < -Math.PI ? (l += a) : l > Math.PI && (l -= a),
						(Yr.theta =
							c <= l
								? Math.max(c, Math.min(l, Yr.theta))
								: Yr.theta > (c + l) / 2
								? Math.max(c, Yr.theta)
								: Math.min(l, Yr.theta))),
					(Yr.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, Yr.phi))),
					Yr.makeSafe(),
					(Yr.radius *= Zr),
					(Yr.radius = Math.max(i.minDistance, Math.min(i.maxDistance, Yr.radius))),
					!0 === i.enableDamping ? i.target.addScaledVector(Kr, i.dampingFactor) : i.target.add(Kr),
					ye.fromSpherical(Yr, e),
					e.applyQuaternion(r),
					o.copy(i.target).add(e),
					i.object.lookAt(i.target.x, i.target.y, i.target.z),
					!0 === i.enableDamping
						? ((Wr.theta *= 1 - i.dampingFactor),
						  (Wr.phi *= 1 - i.dampingFactor),
						  ye.multiplyByScalar(Kr, 1 - i.dampingFactor, Kr))
						: (Wr.set(0, 0, 0), Kr.set(0, 0, 0)),
					(Zr = 1),
					!!(
						Qr ||
						ye.distanceSquared(n, i.object.position) > Hr ||
						8 * (1 - s.dot(i.object.quaternion)) > Hr
					) &&
						(i.dispatchEvent($r),
						ye.clone(i.object.position, n),
						At.clone(i.object.quaternion, s),
						(Qr = !1),
						!0)
				);
			};
		})()),
			this.init();
	}
	getPolarAngle() {
		return this.spherical.phi;
	}
	getAzimuthalAngle() {
		return this.spherical.theta;
	}
	getDistance() {
		return ye.distance(this.object.position, this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this.onKeyDown), (this._domElementKeyEvents = e);
	}
	saveState() {
		ye.clone(this.target, this.target0),
			ye.clone(this.object.position, this.position0),
			(this.zoom0 = this.object.zoom);
	}
	reset() {
		ye.clone(this.target0, this.target),
			ye.clone(this.position0, this.object.position),
			(this.object.zoom = this.zoom0),
			this.object.updateProjectionMatrix(),
			this.dispatchEvent($r),
			this.update(),
			(jr = Xr.NONE);
	}
	init() {
		const e = this,
			t = (function () {
				const e = new ye();
				return function (t, i) {
					e.setFromMatrixColumn(i, 0), e.multiplyByScalar(-t), Kr.add(e);
				};
			})(),
			i = (function () {
				const t = new ye();
				return function (i, r) {
					!0 === e.screenSpacePanning
						? t.setFromMatrixColumn(r, 1)
						: (t.setFromMatrixColumn(r, 0), ye.cross(e.object.up, t, t)),
						t.multiplyByScalar(i),
						Kr.add(t);
				};
			})(),
			r = (function () {
				const r = new ye();
				return function (n, s) {
					const a = e.domElement;
					if (e.object.isPerspectiveCamera) {
						const o = e.object.position;
						r.copy(o).subtract(e.target);
						let c = r.length();
						(c *= Math.tan(((e.object.fov / 2) * Math.PI) / 180)),
							t((2 * n * c) / a.clientHeight, e.object.modelMatrix),
							i((2 * s * c) / a.clientHeight, e.object.modelMatrix);
					} else
						e.object.isOrthographicCamera
							? (t(
									(n * (e.object.right - e.object.left)) / e.object.zoom / a.clientWidth,
									e.object.modelMatrix
							  ),
							  i(
									(s * (e.object.top - e.object.bottom)) / e.object.zoom / a.clientHeight,
									e.object.modelMatrix
							  ))
							: (console.warn(
									"WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
							  ),
							  (e.enablePan = !1));
				};
			})(),
			n = (e) => {
				this.object.isPerspectiveCamera
					? (Zr /= e)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * e))),
					  this.object.updateProjectionMatrix(),
					  (Qr = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			s = (e) => {
				this.object.isPerspectiveCamera
					? (Zr *= e)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / e))),
					  this.object.updateProjectionMatrix(),
					  (Qr = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			a = (e) => {
				en.set(e.clientX, e.clientY), oe.subtract(en, Jr, tn), oe.multiplyByScalar(tn, this.rotateSpeed, tn);
				const t = this.domElement;
				mn((2 * Math.PI * tn.x) / t.clientHeight),
					dn((2 * Math.PI * tn.y) / t.clientHeight),
					oe.clone(en, Jr),
					this.update();
			},
			o = (e) => {
				on.set(e.clientX, e.clientY),
					oe.subtract(on, an, cn),
					cn.y > 0 ? n(E()) : cn.y < 0 && s(E()),
					oe.clone(on, an),
					this.update();
			},
			c = (e) => {
				nn.set(e.clientX, e.clientY),
					oe.subtract(nn, rn, sn),
					oe.multiplyByScalar(sn, this.panSpeed, sn),
					r(sn.x, sn.y),
					oe.clone(nn, rn),
					this.update();
			},
			l = (e) => {
				e.deltaY < 0 ? s(E()) : e.deltaY > 0 && n(E()), this.update();
			},
			u = (e) => {
				let t = !1;
				switch (e.code) {
					case this.keys.UP:
						r(0, this.keyPanSpeed), (t = !0);
						break;
					case this.keys.BOTTOM:
						r(0, -this.keyPanSpeed), (t = !0);
						break;
					case this.keys.LEFT:
						r(this.keyPanSpeed, 0), (t = !0);
						break;
					case this.keys.RIGHT:
						r(-this.keyPanSpeed, 0), (t = !0);
				}
				t && (e.preventDefault(), this.update());
			},
			h = () => {
				this.enableZoom && Tn(), this.enablePan && En();
			},
			f = () => {
				this.enableZoom && Tn(), this.enableRotate && Sn();
			},
			m = (e) => {
				if (1 == ln.length) en.set(e.pageX, e.pageY);
				else {
					const t = xn(e),
						i = 0.5 * (e.pageX + t.x),
						r = 0.5 * (e.pageY + t.y);
					en.set(i, r);
				}
				oe.subtract(en, Jr, tn), oe.multiplyByScalar(tn, this.rotateSpeed, tn);
				const t = this.domElement;
				mn((2 * Math.PI * tn.x) / t.clientHeight), dn((2 * Math.PI * tn.y) / t.clientHeight), oe.clone(en, Jr);
			},
			d = (e) => {
				if (1 === ln.length) nn.set(e.pageX, e.pageY);
				else {
					const t = xn(e),
						i = 0.5 * (e.pageX + t.x),
						r = 0.5 * (e.pageY + t.y);
					nn.set(i, r);
				}
				oe.subtract(nn, rn, sn), oe.multiplyByScalar(sn, this.panSpeed, sn), r(sn.x, sn.y), oe.clone(nn, rn);
			},
			p = (e) => {
				const t = xn(e),
					i = e.pageX - t.x,
					r = e.pageY - t.y,
					s = Math.sqrt(i * i + r * r);
				on.set(0, s), cn.set(0, Math.pow(on.y / an.y, this.zoomSpeed)), n(cn.y), oe.clone(on, an);
			},
			g = (e) => {
				this.enableZoom && p(e), this.enablePan && d(e);
			},
			x = (e) => {
				this.enableZoom && p(e), this.enableRotate && m(e);
			};
		(this.onPointerDown = (e) => {
			!1 !== this.enabled &&
				(0 === ln.length &&
					(this.domElement.setPointerCapture(e.pointerId),
					this.domElement.addEventListener("pointermove", this.onPointerMove),
					this.domElement.addEventListener("pointerup", this.onPointerUp)),
				(function (e) {
					ln.push(e);
				})(e),
				"touch" === e.pointerType ? b(e) : v(e));
		}),
			(this.onPointerMove = (e) => {
				!1 !== this.enabled && ("touch" === e.pointerType ? S(e) : y(e));
			}),
			(this.onPointerUp = (e) => {
				pn(e),
					0 === ln.length &&
						(this.domElement.releasePointerCapture(e.pointerId),
						this.domElement.removeEventListener("pointermove", this.onPointerMove),
						this.domElement.removeEventListener("pointerup", this.onPointerUp)),
					this.dispatchEvent(qr),
					(jr = Xr.NONE);
			});
		const v = (e) => {
				let t;
				switch (e.button) {
					case 0:
						t = this.mouseButtons.LEFT;
						break;
					case 1:
						t = this.mouseButtons.MIDDLE;
						break;
					case 2:
						t = this.mouseButtons.RIGHT;
						break;
					default:
						t = -1;
				}
				switch (t) {
					case hn.DOLLY:
						if (!1 === this.enableZoom) return;
						!(function (e) {
							an.set(e.clientX, e.clientY);
						})(e),
							(jr = Xr.DOLLY);
						break;
					case hn.ROTATE:
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							if (!1 === this.enablePan) return;
							yn(e), (jr = Xr.PAN);
						} else {
							if (!1 === this.enableRotate) return;
							vn(e), (jr = Xr.ROTATE);
						}
						break;
					case hn.PAN:
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							if (!1 === this.enableRotate) return;
							vn(e), (jr = Xr.ROTATE);
						} else {
							if (!1 === this.enablePan) return;
							yn(e), (jr = Xr.PAN);
						}
						break;
					default:
						jr = Xr.NONE;
				}
				jr !== Xr.NONE && this.dispatchEvent(Gr);
			},
			y = (e) => {
				switch (jr) {
					case Xr.ROTATE:
						if (!1 === this.enableRotate) return;
						a(e);
						break;
					case Xr.DOLLY:
						if (!1 === this.enableZoom) return;
						o(e);
						break;
					case Xr.PAN:
						if (!1 === this.enablePan) return;
						c(e);
				}
			};
		(this.onMouseWheel = (e) => {
			!1 !== this.enabled &&
				!1 !== this.enableZoom &&
				jr === Xr.NONE &&
				(e.preventDefault(), this.dispatchEvent(Gr), l(e), this.dispatchEvent(qr));
		}),
			(this.onKeyDown = (e) => {
				!1 !== this.enabled && !1 !== this.enablePan && u(e);
			});
		const b = (e) => {
				switch ((gn(e), ln.length)) {
					case 1:
						switch (this.touches.ONE) {
							case fn.ROTATE:
								if (!1 === this.enableRotate) return;
								Sn(), (jr = Xr.TOUCH_ROTATE);
								break;
							case fn.PAN:
								if (!1 === this.enablePan) return;
								En(), (jr = Xr.TOUCH_PAN);
								break;
							default:
								jr = Xr.NONE;
						}
						break;
					case 2:
						switch (this.touches.TWO) {
							case fn.DOLLY_PAN:
								if (!1 === this.enableZoom && !1 === this.enablePan) return;
								h(), (jr = Xr.TOUCH_DOLLY_PAN);
								break;
							case fn.DOLLY_ROTATE:
								if (!1 === this.enableZoom && !1 === this.enableRotate) return;
								f(), (jr = Xr.TOUCH_DOLLY_ROTATE);
								break;
							default:
								jr = Xr.NONE;
						}
						break;
					default:
						jr = Xr.NONE;
				}
				jr !== Xr.NONE && this.dispatchEvent(Gr);
			},
			S = (e) => {
				switch ((gn(e), jr)) {
					case Xr.TOUCH_ROTATE:
						if (!1 === this.enableRotate) return;
						m(e), this.update();
						break;
					case Xr.TOUCH_PAN:
						if (!1 === this.enablePan) return;
						d(e), this.update();
						break;
					case Xr.TOUCH_DOLLY_PAN:
						if (!1 === this.enableZoom && !1 === this.enablePan) return;
						g(e), this.update();
						break;
					case Xr.TOUCH_DOLLY_ROTATE:
						if (!1 === this.enableZoom && !1 === this.enableRotate) return;
						x(e), this.update();
						break;
					default:
						jr = Xr.NONE;
				}
			};
		(this.onContextMenu = (e) => {
			!1 !== this.enabled && e.preventDefault();
		}),
			(this.getAutoRotationAngle = () => ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed);
		const E = () => Math.pow(0.95, this.zoomSpeed);
		this.domElement.addEventListener("contextmenu", this.onContextMenu),
			this.domElement.addEventListener("pointerdown", this.onPointerDown),
			this.domElement.addEventListener("pointercancel", bn),
			this.domElement.addEventListener("wheel", this.onMouseWheel, { passive: !1 });
	}
	dispose() {
		this.domElement.removeEventListener("contextmenu", this.onContextMenu),
			this.domElement.removeEventListener("pointerdown", this.onPointerDown),
			this.domElement.removeEventListener("pointercancel", bn),
			this.domElement.removeEventListener("wheel", this.onMouseWheel),
			this.domElement.removeEventListener("pointermove", this.onPointerMove),
			this.domElement.removeEventListener("pointerup", this.onPointerUp),
			null !== this._domElementKeyEvents &&
				this._domElementKeyEvents.removeEventListener("keydown", this.onKeyDown);
	}
}
const Xr = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
};
let jr = Xr.NONE;
const Hr = 1e-6,
	Yr = new Fr(),
	Wr = new Fr();
let Zr = 1;
const Kr = new ye();
let Qr = !1;
const Jr = new oe(),
	en = new oe(),
	tn = new oe(),
	rn = new oe(),
	nn = new oe(),
	sn = new oe(),
	an = new oe(),
	on = new oe(),
	cn = new oe(),
	ln = [],
	un = {};
var hn, fn;
function mn(e) {
	Wr.theta -= e;
}
function dn(e) {
	Wr.phi -= e;
}
function pn(e) {
	delete un[e.pointerId];
	for (let t = 0; t < ln.length; t++) if (ln[t].pointerId == e.pointerId) return void ln.splice(t, 1);
}
function gn(e) {
	let t = un[e.pointerId];
	void 0 === t && ((t = new oe()), (un[e.pointerId] = t)), t.set(e.pageX, e.pageY);
}
function xn(e) {
	const t = e.pointerId === ln[0].pointerId ? ln[1] : ln[0];
	return un[t.pointerId];
}
function vn(e) {
	Jr.set(e.clientX, e.clientY);
}
function yn(e) {
	rn.set(e.clientX, e.clientY);
}
function bn(e) {
	pn(e);
}
function Sn() {
	if (1 === ln.length) Jr.set(ln[0].pageX, ln[0].pageY);
	else {
		const e = 0.5 * (ln[0].pageX + ln[1].pageX),
			t = 0.5 * (ln[0].pageY + ln[1].pageY);
		Jr.set(e, t);
	}
}
function En() {
	if (1 === ln.length) rn.set(ln[0].pageX, ln[0].pageY);
	else {
		const e = 0.5 * (ln[0].pageX + ln[1].pageX),
			t = 0.5 * (ln[0].pageY + ln[1].pageY);
		rn.set(e, t);
	}
}
function Tn() {
	const e = ln[0].pageX - ln[1].pageX,
		t = ln[0].pageY - ln[1].pageY,
		i = Math.sqrt(e * e + t * t);
	an.set(0, i);
}
!(function (e) {
	(e[(e.LEFT = 0)] = "LEFT"),
		(e[(e.MIDDLE = 1)] = "MIDDLE"),
		(e[(e.RIGHT = 2)] = "RIGHT"),
		(e[(e.ROTATE = 0)] = "ROTATE"),
		(e[(e.DOLLY = 1)] = "DOLLY"),
		(e[(e.PAN = 2)] = "PAN");
})(hn || (hn = {})),
	(function (e) {
		(e[(e.ROTATE = 0)] = "ROTATE"),
			(e[(e.PAN = 1)] = "PAN"),
			(e[(e.DOLLY_PAN = 2)] = "DOLLY_PAN"),
			(e[(e.DOLLY_ROTATE = 3)] = "DOLLY_ROTATE");
	})(fn || (fn = {}));
export {
	u as AddressMode,
	zt as Attachment,
	Dt as Attribute,
	Vi as Axes,
	St as BindGroup,
	gt as BindGroupEntity,
	w as BlendFactor,
	_ as BlendOperation,
	Xi as BoxGeometry,
	V as Buffer,
	r as BufferUsage,
	ae as Color,
	T as ColorWriteFlags,
	f as CompareFunction,
	_t as Context,
	$i as CubeTextureLoader,
	E as CullMode,
	Dr as DirtectLight,
	F as DrawCommand,
	h as FilterMode,
	S as FrontFace,
	U as IndexFormat,
	C as InputStepMode,
	ai as Mesh,
	kr as OrbitControl,
	Qi as PbrMat,
	Ur as PerspectiveCamera,
	Wi as PhongMaterial,
	Yi as PlaneGeometry,
	zr as PointLight,
	b as PrimitiveTopology,
	Mt as RenderState,
	Ut as Sampler,
	mr as Scene,
	m as ShaderStage,
	qi as SkyBox,
	ki as SphereGeometry,
	Cr as SpotLight,
	R as StencilOperation,
	x as StorageTextureAccess,
	Rt as Texture,
	c as TextureAspect,
	s as TextureDimension,
	l as TextureFormat,
	g as TextureSampleType,
	a as TextureUsage,
	o as TextureViewDimension,
	ji as TorusKnotGeometry,
	ye as Vector3,
	M as VertexFormat,
	Br as loadGLTF,
	fr as loadTexture
};
