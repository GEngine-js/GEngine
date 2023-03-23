var t,
	e,
	i,
	r,
	n,
	s,
	a,
	o,
	c,
	l,
	h,
	u,
	f,
	d,
	m,
	p,
	g,
	x,
	y,
	v,
	b,
	S,
	w,
	T,
	E,
	M,
	_,
	U,
	L,
	R,
	C,
	D,
	A,
	z,
	O,
	I,
	N,
	P,
	B,
	V,
	F;
!(function (t) {
	t.SRGB = "srgb";
})(t || (t = {})),
	(function (t) {
		(t.LowPower = "low-power"), (t.HighPerformance = "high-performance");
	})(e || (e = {})),
	(function (t) {
		(t.DepthClipControl = "depth-clip-control"),
			(t.Depth24UnormStencil8 = "depth24unorm-stencil8"),
			(t.Depth32FloatStencil8 = "depth32float-stencil8"),
			(t.TextureCompressionBC = "texture-compression-bc"),
			(t.TextureCompressionETC2 = "texture-compression-etc2"),
			(t.TextureCompressionASTC = "texture-compression-astc"),
			(t.TimestampQuery = "timestamp-query"),
			(t.IndirectFirstInstance = "indirect-first-instance"),
			(t.ShaderF16 = "shader-f16"),
			(t.BGRA8UnormStorage = "bgra8unorm-storage");
	})(i || (i = {})),
	(function (t) {
		(t[(t.MapRead = 1)] = "MapRead"),
			(t[(t.MapWrite = 2)] = "MapWrite"),
			(t[(t.CopySrc = 4)] = "CopySrc"),
			(t[(t.CopyDst = 8)] = "CopyDst"),
			(t[(t.Index = 16)] = "Index"),
			(t[(t.Vertex = 32)] = "Vertex"),
			(t[(t.Uniform = 64)] = "Uniform"),
			(t[(t.Storage = 128)] = "Storage"),
			(t[(t.Indirect = 256)] = "Indirect"),
			(t[(t.QueryResolve = 512)] = "QueryResolve");
	})(r || (r = {})),
	(function (t) {
		(t[(t.Read = 1)] = "Read"), (t[(t.Write = 2)] = "Write");
	})(n || (n = {})),
	(function (t) {
		(t.E1d = "1d"), (t.E2d = "2d"), (t.E3d = "3d");
	})(s || (s = {})),
	(function (t) {
		(t[(t.CopySrc = 1)] = "CopySrc"),
			(t[(t.CopyDst = 2)] = "CopyDst"),
			(t[(t.TextureBinding = 4)] = "TextureBinding"),
			(t[(t.StorageBinding = 8)] = "StorageBinding"),
			(t[(t.RenderAttachment = 16)] = "RenderAttachment");
	})(a || (a = {})),
	(function (t) {
		(t.E1d = "1d"),
			(t.E2d = "2d"),
			(t.E2dArray = "2d-array"),
			(t.Cube = "cube"),
			(t.CubeArray = "cube-array"),
			(t.E3d = "3d");
	})(o || (o = {})),
	(function (t) {
		(t.All = "all"), (t.StencilOnly = "stencil-only"), (t.DepthOnly = "depth-only");
	})(c || (c = {})),
	(function (t) {
		(t.R8Unorm = "r8unorm"),
			(t.R8Snorm = "r8snorm"),
			(t.R8Uint = "r8uint"),
			(t.R8Sint = "r8sint"),
			(t.R16Uint = "r16uint"),
			(t.R16Sint = "r16sint"),
			(t.R16Float = "r16float"),
			(t.RG8Unorm = "rg8unorm"),
			(t.RG8Snorm = "rg8snorm"),
			(t.RG8Uint = "rg8uint"),
			(t.RG8Sint = "rg8sint"),
			(t.R32Uint = "r32uint"),
			(t.R32Sint = "r32sint"),
			(t.R32Float = "r32float"),
			(t.RG16Uint = "rg16uint"),
			(t.RG16Sint = "rg16sint"),
			(t.RG16Float = "rg16float"),
			(t.RGBA8Unorm = "rgba8unorm"),
			(t.RGBA8UnormSRGB = "rgba8unorm-srgb"),
			(t.RGBA8Snorm = "rgba8snorm"),
			(t.RGBA8Uint = "rgba8uint"),
			(t.RGBA8Sint = "rgba8sint"),
			(t.BGRA8Unorm = "bgra8unorm"),
			(t.BGRA8UnormSRGB = "bgra8unorm-srgb"),
			(t.RGB9E5UFloat = "rgb9e5ufloat"),
			(t.RGB10A2Unorm = "rgb10a2unorm"),
			(t.RG11B10UFloat = "rg11b10ufloat"),
			(t.RG32Uint = "rg32uint"),
			(t.RG32Sint = "rg32sint"),
			(t.RG32Float = "rg32float"),
			(t.RGBA16Uint = "rgba16uint"),
			(t.RGBA16Sint = "rgba16sint"),
			(t.RGBA16Float = "rgba16float"),
			(t.RGBA32Uint = "rgba32uint"),
			(t.RGBA32Sint = "rgba32sint"),
			(t.RGBA32Float = "rgba32float"),
			(t.Stencil8 = "stencil8"),
			(t.Depth16Unorm = "depth16unorm"),
			(t.Depth24Plus = "depth24plus"),
			(t.Depth24PlusStencil8 = "depth24plus-stencil8"),
			(t.Depth32Float = "depth32float"),
			(t.BC1RGBAUnorm = "bc1-rgba-unorm"),
			(t.BC1RGBAUnormSRGB = "bc1-rgba-unorm-srgb"),
			(t.BC2RGBAUnorm = "bc2-rgba-unorm"),
			(t.BC2RGBAUnormSRGB = "bc2-rgba-unorm-srgb"),
			(t.BC3RGBAUnorm = "bc3-rgba-unorm"),
			(t.BC3RGBAUnormSRGB = "bc3-rgba-unorm-srgb"),
			(t.BC4RUnorm = "bc4-r-unorm"),
			(t.BC4RSnorm = "bc4-r-snorm"),
			(t.BC5RGUnorm = "bc5-rg-unorm"),
			(t.BC5RGSnorm = "bc5-rg-snorm"),
			(t.BC6HRGBUFloat = "bc6h-rgb-ufloat"),
			(t.BC6HRGBFloat = "bc6h-rgb-float"),
			(t.BC7RGBAUnorm = "bc7-rgba-unorm"),
			(t.BC7RGBAUnormSRGB = "bc7-rgba-unorm-srgb"),
			(t.ETC2RGB8Unorm = "etc2-rgb8unorm"),
			(t.ETC2RGB8UnormSRGB = "etc2-rgb8unorm-srgb"),
			(t.ETC2RGB8A1Unorm = "etc2-rgb8a1unorm"),
			(t.ETC2RGB8A1UnormSRGB = "etc2-rgb8a1unorm-srgb"),
			(t.ETC2RGBA8Unorm = "etc2-rgba8unorm"),
			(t.ETC2RGBA8UnormSRGB = "etc2-rgba8unorm-srgb"),
			(t.EACR11Unorm = "eac-r11unorm"),
			(t.EACR11Snorm = "eac-r11snorm"),
			(t.EACRG11Unorm = "eac-rg11unorm"),
			(t.EACRG11Snorm = "eac-rg11snorm"),
			(t.ASTC4x4Unorm = "astc-4x4-unorm"),
			(t.ASTC4x4UnormSRGB = "astc-4x4-unorm-srgb"),
			(t.ASTC5x4Unorm = "astc-5x4-unorm"),
			(t.ASTC5x4UnormSRGB = "astc-5x4-unorm-srgb"),
			(t.ASTC5x5Unorm = "astc-5x5-unorm"),
			(t.ASTC5x5UnormSRGB = "astc-5x5-unorm-srgb"),
			(t.ASTC6x5Unorm = "astc-6x5-unorm"),
			(t.ASTC6x5UnormSRGB = "astc-6x5-unorm-srgb"),
			(t.ASTC6x6Unorm = "astc-6x6-unorm"),
			(t.ASTC6x6UnormSRGB = "astc-6x6-unorm-srgb"),
			(t.ASTC8x5Unorm = "astc-8x5-unorm"),
			(t.ASTC8x5UnormSRGB = "astc-8x5-unorm-srgb"),
			(t.ASTC8x6Unorm = "astc-8x6-unorm"),
			(t.ASTC8x6UnormSRGB = "astc-8x6-unorm-srgb"),
			(t.ASTC8x8Unorm = "astc-8x8-unorm"),
			(t.ASTC8x8UnormSRGB = "astc-8x8-unorm-srgb"),
			(t.ASTC10x5Unorm = "astc-10x5-unorm"),
			(t.ASTC10x5UnormSRGB = "astc-10x5-unorm-srgb"),
			(t.ASTC10x6Unorm = "astc-10x6-unorm"),
			(t.ASTC10x6UnormSRGB = "astc-10x6-unorm-srgb"),
			(t.ASTC10x8Unorm = "astc-10x8-unorm"),
			(t.ASTC10x8UnormSRGB = "astc-10x8-unorm-srgb"),
			(t.ASTC10x10Unorm = "astc-10x10-unorm"),
			(t.ASTC10x10UnormSRGB = "astc-10x10-unorm-srgb"),
			(t.ASTC12x10Unorm = "astc-12x10-unorm"),
			(t.ASTC12x10UnormSRGB = "astc-12x10-unorm-srgb"),
			(t.ASTC12x12Unorm = "astc-12x12-unorm"),
			(t.ASTC12x12UnormSRGB = "astc-12x12-unorm-srgb"),
			(t.Depth24UnormStencil8 = "depth24unorm-stencil8"),
			(t.Depth32FloatStencil8 = "depth32float-stencil8");
	})(l || (l = {})),
	(function (t) {
		(t.ClampToEdge = "clamp-to-edge"), (t.Repeat = "repeat"), (t.MirrorRepeat = "mirror-repeat");
	})(h || (h = {})),
	(function (t) {
		(t.Nearest = "nearest"), (t.Linear = "linear");
	})(u || (u = {})),
	(function (t) {
		(t.Never = "never"),
			(t.Less = "less"),
			(t.Equal = "equal"),
			(t.LessEqual = "less-equal"),
			(t.Greater = "greater"),
			(t.NotEqual = "not-equal"),
			(t.GreaterEqual = "greater-equal"),
			(t.Always = "always");
	})(f || (f = {})),
	(function (t) {
		(t[(t.Vertex = 1)] = "Vertex"), (t[(t.Fragment = 2)] = "Fragment"), (t[(t.Compute = 4)] = "Compute");
	})(d || (d = {})),
	(function (t) {
		(t.Uniform = "uniform"), (t.Storage = "storage"), (t.ReadOnlyStorage = "read-only-storage");
	})(m || (m = {})),
	(function (t) {
		(t.Filtering = "filtering"), (t.NonFiltering = "non-filtering"), (t.Comparison = "comparison");
	})(p || (p = {})),
	(function (t) {
		(t.Float = "float"),
			(t.UnfilterableFloat = "unfilterable-float"),
			(t.Depth = "depth"),
			(t.Sint = "sint"),
			(t.Uint = "uint");
	})(g || (g = {})),
	(function (t) {
		t.WriteOnly = "write-only";
	})(x || (x = {})),
	(function (t) {
		(t.Error = "error"), (t.Warning = "warning"), (t.Info = "info");
	})(y || (y = {})),
	(function (t) {
		t.Auto = "auto";
	})(v || (v = {})),
	(function (t) {
		(t.PointList = "point-list"),
			(t.LineList = "line-list"),
			(t.LineStrip = "line-strip"),
			(t.TriangleList = "triangle-list"),
			(t.TriangleStrip = "triangle-strip");
	})(b || (b = {})),
	(function (t) {
		(t.CCW = "ccw"), (t.CW = "cw");
	})(S || (S = {})),
	(function (t) {
		(t.None = "none"), (t.Front = "front"), (t.Back = "back");
	})(w || (w = {})),
	(function (t) {
		(t[(t.Red = 1)] = "Red"),
			(t[(t.Green = 2)] = "Green"),
			(t[(t.Blue = 4)] = "Blue"),
			(t[(t.Alpha = 8)] = "Alpha"),
			(t[(t.All = 15)] = "All");
	})(T || (T = {})),
	(function (t) {
		(t.Zero = "zero"),
			(t.One = "one"),
			(t.Src = "src"),
			(t.OneMinusSrc = "one-minus-src"),
			(t.SrcAlpha = "src-alpha"),
			(t.OneMinusSrcAlpha = "one-minus-src-alpha"),
			(t.Dst = "dst"),
			(t.OneMinusDst = "one-minus-dst"),
			(t.DstAlpha = "dst-alpha"),
			(t.OneMinusDstAlpha = "one-minus-dst-alpha"),
			(t.SrcAlphaSaturated = "src-alpha-saturated"),
			(t.Constant = "constant"),
			(t.OneMinusConstant = "one-minus-constant");
	})(E || (E = {})),
	(function (t) {
		(t.Add = "add"),
			(t.Subtract = "subtract"),
			(t.ReverseSubtract = "reverse-subtract"),
			(t.Min = "min"),
			(t.Max = "max");
	})(M || (M = {})),
	(function (t) {
		(t.Keep = "keep"),
			(t.Zero = "zero"),
			(t.Replace = "replace"),
			(t.Invert = "invert"),
			(t.IncrementClamp = "increment-clamp"),
			(t.DecrementClamp = "decrement-clamp"),
			(t.IncrementWrap = "increment-wrap"),
			(t.DecrementWrap = "decrement-wrap");
	})(_ || (_ = {})),
	(function (t) {
		(t.Uint16 = "uint16"), (t.Uint32 = "uint32");
	})(U || (U = {})),
	(function (t) {
		(t.Uint8x2 = "uint8x2"),
			(t.Uint8x4 = "uint8x4"),
			(t.Sint8x2 = "sint8x2"),
			(t.Sint8x4 = "sint8x4"),
			(t.Unorm8x2 = "unorm8x2"),
			(t.Unorm8x4 = "unorm8x4"),
			(t.Snorm8x2 = "snorm8x2"),
			(t.Snorm8x4 = "snorm8x4"),
			(t.Uint16x2 = "uint16x2"),
			(t.Uint16x4 = "uint16x4"),
			(t.Sint16x2 = "sint16x2"),
			(t.Sint16x4 = "sint16x4"),
			(t.Unorm16x2 = "unorm16x2"),
			(t.Unorm16x4 = "unorm16x4"),
			(t.Snorm16x2 = "snorm16x2"),
			(t.Snorm16x4 = "snorm16x4"),
			(t.Float16x2 = "float16x2"),
			(t.Float16x4 = "float16x4"),
			(t.Float32 = "float32"),
			(t.Float32x2 = "float32x2"),
			(t.Float32x3 = "float32x3"),
			(t.Float32x4 = "float32x4"),
			(t.Uint32 = "uint32"),
			(t.Uint32x2 = "uint32x2"),
			(t.Uint32x3 = "uint32x3"),
			(t.Uint32x4 = "uint32x4"),
			(t.Sint32 = "sint32"),
			(t.Sint32x2 = "sint32x2"),
			(t.Sint32x3 = "sint32x3"),
			(t.Sint32x4 = "sint32x4");
	})(L || (L = {})),
	(function (t) {
		(t.Vertex = "vertex"), (t.Instance = "instance");
	})(R || (R = {})),
	(function (t) {
		(t.Beginning = "beginning"), (t.End = "end");
	})(C || (C = {})),
	(function (t) {
		(t.Beginning = "beginning"), (t.End = "end");
	})(D || (D = {})),
	(function (t) {
		(t.Load = "load"), (t.Clear = "clear");
	})(A || (A = {})),
	(function (t) {
		(t.Store = "store"), (t.Discard = "discard");
	})(z || (z = {})),
	(function (t) {
		(t.Occlusion = "occlusion"), (t.Timestamp = "timestamp");
	})(O || (O = {})),
	(function (t) {
		(t.Opaque = "opaque"), (t.Premultiplied = "premultiplied");
	})(I || (I = {})),
	(function (t) {
		t.Destroyed = "destroyed";
	})(N || (N = {})),
	(function (t) {
		(t.OutOfMemory = "out-of-memory"), (t.Validation = "validation");
	})(P || (P = {})),
	(function (t) {
		(t[(t.Red = 1)] = "Red"),
			(t[(t.Green = 2)] = "Green"),
			(t[(t.Blue = 4)] = "Blue"),
			(t[(t.Alpha = 8)] = "Alpha"),
			(t[(t.All = 15)] = "All");
	})(B || (B = {})),
	(function (t) {
		(t.Shadow = "shadow"), (t.Pick = "pick");
	})(V || (V = {})),
	(function (t) {
		(t[(t.OUTSIDE = -1)] = "OUTSIDE"), (t[(t.INTERSECTING = 0)] = "INTERSECTING"), (t[(t.INSIDE = 1)] = "INSIDE");
	})(F || (F = {}));
class $ {
	constructor(t, e, i, r, n) {
		(this.device = e),
			(this.usage = i),
			(this.data = r),
			(this.size = null != n ? (n + 3) & -4 : (r.byteLength + 3) & -4),
			(this.gpuBuffer = e.createBuffer({ label: t || "", size: this.size, usage: i })),
			r && this.setSubData(0, r, this.size);
	}
	static create(t, e, i, r, n) {
		return new $(t, e, i, r, n);
	}
	static createVertexBuffer(t, e, i) {
		return new $(t, e, r.Vertex | r.CopyDst, i, i.byteLength);
	}
	static createIndexBuffer(t, e, i) {
		return new $(t, e, r.Index | r.CopyDst, i);
	}
	static createUniformBuffer(t, e, i, r) {
		return new $(t, e, r, null, i);
	}
	static getBufferType(t) {
		switch (t) {
			case r.Uniform:
			case r.Storage:
		}
	}
	setSubData(t, e, i) {
		const r = e.buffer,
			n = i ?? r.byteLength,
			s = this.device.createBuffer({ mappedAtCreation: !0, size: n, usage: GPUBufferUsage.COPY_SRC }),
			a = s.getMappedRange();
		new Uint16Array(a).set(new Uint16Array(r)), s.unmap(), this.copyToBuffer(s, t, n), s.destroy();
	}
	copyToBuffer(t, e, i) {
		const r = this.device.createCommandEncoder();
		r.copyBufferToBuffer(t, 0, this.gpuBuffer, e, i), this.device.queue.submit([r.finish()]);
	}
	copyToTexture(t, e, i, r) {
		const n = this.device.createCommandEncoder();
		n.copyBufferToTexture({ buffer: this.gpuBuffer, bytesPerRow: t, rowsPerImage: e }, i, r),
			this.device.queue.submit([n.finish()]);
	}
	destroy() {
		this.gpuBuffer.destroy();
	}
}
class G {
	constructor(t) {
		(this.type = t.type),
			(this.shaderData = t.shaderData),
			(this.renderTarget = t.renderTarget),
			(this.vertexBuffer = t.vertexBuffer),
			(this.indexBuffer = t.indexBuffer),
			(this.renderState = t.renderState),
			(this.queryIndex = t.queryIndex),
			(this.count = t.count),
			(this.instances = t.instances),
			(this.dispatch = t.dispatch),
			(this.shaderSource = t.shaderSource),
			(this.dirty = t.dirty),
			(this.light = t.light),
			(this.modelMatrix = t.modelMatrix);
	}
	shallowClone(t) {
		if (t)
			return new G({
				vertexBuffer: this.vertexBuffer,
				indexBuffer: this.indexBuffer,
				shaderData: t.shaderData,
				instances: this.instances,
				count: this.count,
				renderState: t.renderState,
				shaderSource: t.shaderSource,
				type: "render",
				light: t.light,
				modelMatrix: this.modelMatrix
			});
	}
}
const q = "premultiplied";
class k {
	constructor(t) {
		(this.device = t), (this.sampler = t.createSampler({ minFilter: "linear" })), (this.pipelines = {});
	}
	getMipmapPipeline(t) {
		let e = this.pipelines[t];
		return (
			e ||
				(this.mipmapShaderModule ||
					(this.mipmapShaderModule = this.device.createShaderModule({
						code: "\n              var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(\n                vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));\n              struct VertexOutput {\n                @builtin(position) position : vec4<f32>,\n                @location(0) texCoord : vec2<f32>,\n              };\n              @vertex\n              fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {\n                var output : VertexOutput;\n                output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);\n                output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n                return output;\n              }\n              @group(0) @binding(0) var imgSampler : sampler;\n              @group(0) @binding(1) var img : texture_2d<f32>;\n              @fragment\n              fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {\n                return textureSample(img, imgSampler, texCoord);\n              }\n            "
					})),
				(e = this.device.createRenderPipeline({
					layout: "auto",
					vertex: { module: this.mipmapShaderModule, entryPoint: "vertexMain" },
					fragment: { module: this.mipmapShaderModule, entryPoint: "fragmentMain", targets: [{ format: t }] }
				})),
				(this.pipelines[t] = e)),
			e
		);
	}
	generateMipmap(t) {
		const e = t.gpuTexture,
			i = t.textureProp,
			r = this.getMipmapPipeline(i.format);
		if ("3d" == i.dimension || "1d" == i.dimension)
			throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
		let n = e;
		const s = i.size.depth || 1,
			a = i.usage & GPUTextureUsage.RENDER_ATTACHMENT;
		if (!a) {
			const t = {
				size: {
					width: Math.ceil(i.size.width / 2),
					height: Math.ceil(i.size.height / 2),
					depthOrArrayLayers: s
				},
				format: i.format,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
				mipLevelCount: i.mipLevelCount - 1
			};
			n = this.device.createTexture(t);
		}
		const o = this.device.createCommandEncoder({}),
			c = r.getBindGroupLayout(0);
		for (let t = 0; t < s; ++t) {
			let s = e.createView({
					baseMipLevel: 0,
					mipLevelCount: 1,
					dimension: "2d",
					baseArrayLayer: t,
					arrayLayerCount: 1
				}),
				l = a ? 1 : 0;
			for (let e = 1; e < i.mipLevelCount; ++e) {
				const e = n.createView({
						baseMipLevel: l++,
						mipLevelCount: 1,
						dimension: "2d",
						baseArrayLayer: t,
						arrayLayerCount: 1
					}),
					i = o.beginRenderPass({ colorAttachments: [{ view: e, loadOp: "clear", storeOp: "store" }] }),
					a = this.device.createBindGroup({
						layout: c,
						entries: [
							{ binding: 0, resource: this.sampler },
							{ binding: 1, resource: s }
						]
					});
				i.setPipeline(r), i.setBindGroup(0, a), i.draw(3, 1, 0, 0), i.end(), (s = e);
			}
		}
		if (!a) {
			const t = {
				width: Math.ceil(i.size.width / 2),
				height: Math.ceil(i.size.height / 2),
				depthOrArrayLayers: s
			};
			for (let r = 1; r < i.mipLevelCount; ++r)
				o.copyTextureToTexture({ texture: n, mipLevel: r - 1 }, { texture: e, mipLevel: r }, t),
					(t.width = Math.ceil(t.width / 2)),
					(t.height = Math.ceil(t.height / 2));
		}
		return this.device.queue.submit([o.finish()]), a || n.destroy(), e;
	}
}
const j = new Map();
class X {
	constructor(t, e, i = [], r) {
		(this.groupLayouts = i),
			(this.index = r || 0),
			(this.gpuPipelineLayout = t.createPipelineLayout({
				label: e,
				bindGroupLayouts: i.map((t) => t.gpuBindGroupLayout)
			}));
	}
	static getPipelineLayoutFromCache(t, e, i) {
		if (j.has(e)) return j.get(e);
		{
			const r = new X(t, e, i);
			return j.set(e, r), r;
		}
	}
}
const H = new Map(),
	Y = new Map();
class W {
	constructor(t, e, i) {
		(this.type = t), (this.descriptor = i), (this.device = e), this.createPipeline();
	}
	createPipeline() {
		"render" == this.type
			? (this.gpuPipeline = this.device.createRenderPipeline(this.descriptor))
			: (this.gpuPipeline = this.device.createComputePipeline(this.descriptor));
	}
	bind(t) {
		this.type, t.setPipeline(this.gpuPipeline);
	}
	static getRenderPipelineFromCache(t, e, i) {
		const { renderState: r, shaderSource: n } = e,
			s = JSON.stringify(r),
			a = Z(n.uid.concat(s)),
			o = i.sort((t, e) => t.index - e.index);
		let c = H.get(a);
		if (!c) {
			const i = W.getPipelineDescriptor(t, e, r, o, a.toString());
			(c = new W("render", t, i)), H.set(a, c);
		}
		return c;
	}
	static getComputePipelineFromCache(t, e, i) {
		const { shaderSource: r } = e,
			n = Z(r.uid);
		let s = Y.get(n);
		if (!s) {
			const { shaderSource: r } = e;
			(s = t.createComputePipeline({
				layout: X.getPipelineLayoutFromCache(t, n.toString(), i).gpuPipelineLayout,
				compute: { module: r.createShaderModule(t), entryPoint: r.computeMain }
			})),
				Y.set(n, s);
		}
		return s;
	}
	static getPipelineDescriptor(t, e, i, r, n) {
		const { vertexBuffer: s, shaderSource: a } = e,
			{ vert: o, frag: c } = a.createShaderModule(t),
			l = { layout: X.getPipelineLayoutFromCache(t, n, r).gpuPipelineLayout };
		return (
			o && (l.vertex = { module: o, entryPoint: a.vertEntryPoint, buffers: s.getBufferDes() }),
			i.primitive && (l.primitive = i.primitive.getGPUPrimitiveDec()),
			i.depthStencil && (l.depthStencil = i.depthStencil.getGPUDepthStencilDec()),
			i.multisample && (l.multisample = i.multisample.getMultiSampleDec()),
			c &&
				(l.fragment = {
					module: c,
					entryPoint: a.fragEntryPoint,
					targets: i.targets.map((t) => t.getGPUTargetDec())
				}),
			l
		);
	}
}
function Z(t) {
	let e = 0;
	if (0 == t.length) return e;
	for (let i = 0; i < t.length; i++) {
		(e = (e << 5) - e + t.charCodeAt(i)), (e &= e);
	}
	return e;
}
function K(t) {
	return null != t;
}
var Q = function (t) {
	null == t && (t = new Date().getTime()),
		(this.N = 624),
		(this.M = 397),
		(this.MATRIX_A = 2567483615),
		(this.UPPER_MASK = 2147483648),
		(this.LOWER_MASK = 2147483647),
		(this.mt = new Array(this.N)),
		(this.mti = this.N + 1),
		t.constructor == Array ? this.init_by_array(t, t.length) : this.init_seed(t);
};
(Q.prototype.init_seed = function (t) {
	for (this.mt[0] = t >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
		t = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
		(this.mt[this.mti] = ((1812433253 * ((4294901760 & t) >>> 16)) << 16) + 1812433253 * (65535 & t) + this.mti),
			(this.mt[this.mti] >>>= 0);
	}
}),
	(Q.prototype.init_by_array = function (t, e) {
		var i, r, n;
		for (this.init_seed(19650218), i = 1, r = 0, n = this.N > e ? this.N : e; n; n--) {
			var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
			(this.mt[i] =
				(this.mt[i] ^ (((1664525 * ((4294901760 & s) >>> 16)) << 16) + 1664525 * (65535 & s))) + t[r] + r),
				(this.mt[i] >>>= 0),
				r++,
				++i >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (i = 1)),
				r >= e && (r = 0);
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
	(Q.prototype.random_int = function () {
		var t,
			e = new Array(0, this.MATRIX_A);
		if (this.mti >= this.N) {
			var i;
			for (this.mti == this.N + 1 && this.init_seed(5489), i = 0; i < this.N - this.M; i++)
				(t = (this.mt[i] & this.UPPER_MASK) | (this.mt[i + 1] & this.LOWER_MASK)),
					(this.mt[i] = this.mt[i + this.M] ^ (t >>> 1) ^ e[1 & t]);
			for (; i < this.N - 1; i++)
				(t = (this.mt[i] & this.UPPER_MASK) | (this.mt[i + 1] & this.LOWER_MASK)),
					(this.mt[i] = this.mt[i + (this.M - this.N)] ^ (t >>> 1) ^ e[1 & t]);
			(t = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK)),
				(this.mt[this.N - 1] = this.mt[this.M - 1] ^ (t >>> 1) ^ e[1 & t]),
				(this.mti = 0);
		}
		return (
			(t = this.mt[this.mti++]),
			(t ^= t >>> 11),
			(t ^= (t << 7) & 2636928640),
			(t ^= (t << 15) & 4022730752),
			(t ^= t >>> 18) >>> 0
		);
	}),
	(Q.prototype.random_int31 = function () {
		return this.random_int() >>> 1;
	}),
	(Q.prototype.random_incl = function () {
		return this.random_int() * (1 / 4294967295);
	}),
	(Q.prototype.random = function () {
		return this.random_int() * (1 / 4294967296);
	}),
	(Q.prototype.random_excl = function () {
		return (this.random_int() + 0.5) * (1 / 4294967296);
	}),
	(Q.prototype.random_long = function () {
		return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992);
	});
var J = Q;
function tt(t, e) {
	return null != t ? t : e;
}
tt.EMPTY_OBJECT = Object.freeze({});
class et {
	static signNotZero(t) {
		return t < 0 ? -1 : 1;
	}
	static toSNorm(t, e) {
		return (e = tt(e, 255)), Math.round((0.5 * et.clamp(t, -1, 1) + 0.5) * e);
	}
	static fromSNorm(t, e) {
		return (e = tt(e, 255)), (et.clamp(t, 0, e) / e) * 2 - 1;
	}
	static normalize(t, e, i) {
		return 0 === (i = Math.max(i - e, 0)) ? 0 : et.clamp((t - e) / i, 0, 1);
	}
	static lerp(t, e, i) {
		return (1 - i) * t + i * e;
	}
	static toRadians(t) {
		if (!K(t)) throw new Error("degrees is required.");
		return t * et.RADIANS_PER_DEGREE;
	}
	static toDegrees(t) {
		if (!K(t)) throw new Error("radians is required.");
		return t * et.DEGREES_PER_RADIAN;
	}
	static negativePiToPi(t) {
		if (!K(t)) throw new Error("angle is required.");
		return t >= -et.PI && t <= et.PI ? t : et.zeroToTwoPi(t + et.PI) - et.PI;
	}
	static zeroToTwoPi(t) {
		if (!K(t)) throw new Error("angle is required.");
		if (t >= 0 && t <= et.TWO_PI) return t;
		const e = et.mod(t, et.TWO_PI);
		return Math.abs(e) < et.EPSILON14 && Math.abs(t) > et.EPSILON14 ? et.TWO_PI : e;
	}
	static mod(t, e) {
		if (!K(t)) throw new Error("m is required.");
		if (!K(e)) throw new Error("n is required.");
		if (0 === e) throw new Error("divisor cannot be 0.");
		return et.sign(t) === et.sign(e) && Math.abs(t) < Math.abs(e) ? t : ((t % e) + e) % e;
	}
	static equalsEpsilon(t, e, i, r = i) {
		if (!K(t)) throw new Error("left is required.");
		if (!K(e)) throw new Error("right is required.");
		(i = tt(i, 0)), (r = tt(r, i));
		const n = Math.abs(t - e);
		return n <= r || n <= i * Math.max(Math.abs(t), Math.abs(e));
	}
	static lessThan(t, e, i = 0) {
		if (!K(t)) throw new Error("first is required.");
		if (!K(e)) throw new Error("second is required.");
		if (!K(i)) throw new Error("absoluteEpsilon is required.");
		return t - e < -i;
	}
	static lessThanOrEquals(t, e, i = 0) {
		if (!K(t)) throw new Error("first is required.");
		if (!K(e)) throw new Error("second is required.");
		if (!K(i)) throw new Error("absoluteEpsilon is required.");
		return t - e < i;
	}
	static greaterThan(t, e, i = 0) {
		if (!K(t)) throw new Error("first is required.");
		if (!K(e)) throw new Error("second is required.");
		if (!K(i)) throw new Error("absoluteEpsilon is required.");
		return t - e > i;
	}
	static greaterThanOrEquals(t, e, i = 0) {
		if (!K(t)) throw new Error("first is required.");
		if (!K(e)) throw new Error("second is required.");
		if (!K(i)) throw new Error("absoluteEpsilon is required.");
		return t - e > -i;
	}
	static isPowerOfTwo(t) {
		if ("number" != typeof t || t < 0 || t > 4294967295)
			throw new Error("A number between 0 and (2^32)-1 is required.");
		return 0 !== t && 0 == (t & (t - 1));
	}
	static nextPowerOfTwo(t) {
		if ("number" != typeof t || t < 0 || t > 2147483648)
			throw new Error("A number between 0 and 2^31 is required.");
		return --t, (t |= t >> 1), (t |= t >> 2), (t |= t >> 4), (t |= t >> 8), (t |= t >> 16), ++t;
	}
	static previousPowerOfTwo(t) {
		if ("number" != typeof t || t < 0 || t > 4294967295)
			throw new Error("A number between 0 and (2^32)-1 is required.");
		return (
			(t |= t >> 1),
			(t |= t >> 2),
			(t |= t >> 4),
			(t |= t >> 8),
			(t |= t >> 16),
			(t = ((t |= t >> 32) >>> 0) - (t >>> 1))
		);
	}
	static clamp(t, e, i) {
		return t < e ? e : t > i ? i : t;
	}
	static fog(t, e) {
		const i = t * e;
		return 1 - Math.exp(-i * i);
	}
}
(et.EPSILON1 = 0.1),
	(et.EPSILON2 = 0.01),
	(et.EPSILON3 = 0.001),
	(et.EPSILON4 = 1e-4),
	(et.EPSILON5 = 1e-5),
	(et.EPSILON6 = 1e-6),
	(et.EPSILON7 = 1e-7),
	(et.EPSILON8 = 1e-8),
	(et.EPSILON9 = 1e-9),
	(et.EPSILON10 = 1e-10),
	(et.EPSILON11 = 1e-11),
	(et.EPSILON12 = 1e-12),
	(et.EPSILON13 = 1e-13),
	(et.EPSILON14 = 1e-14),
	(et.EPSILON15 = 1e-15),
	(et.EPSILON16 = 1e-16),
	(et.EPSILON17 = 1e-17),
	(et.EPSILON18 = 1e-18),
	(et.EPSILON19 = 1e-19),
	(et.EPSILON20 = 1e-20),
	(et.EPSILON21 = 1e-21),
	(et.GRAVITATIONALPARAMETER = 3986004418e5),
	(et.SIXTY_FOUR_KILOBYTES = 65536),
	(et.FOUR_GIGABYTES = 4294967296),
	(et.sign = tt(Math.sign, function (t) {
		return 0 === (t = +t) || t != t ? t : t > 0 ? 1 : -1;
	})),
	(et.sinh = tt(Math.sinh, function (t) {
		return (Math.exp(t) - Math.exp(-t)) / 2;
	})),
	(et.cosh = tt(Math.cosh, function (t) {
		return (Math.exp(t) + Math.exp(-t)) / 2;
	})),
	(et.PI = Math.PI),
	(et.ONE_OVER_PI = 1 / Math.PI),
	(et.PI_OVER_TWO = Math.PI / 2),
	(et.PI_OVER_THREE = Math.PI / 3),
	(et.PI_OVER_FOUR = Math.PI / 4),
	(et.PI_OVER_SIX = Math.PI / 6),
	(et.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
	(et.TWO_PI = 2 * Math.PI),
	(et.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
	(et.RADIANS_PER_DEGREE = Math.PI / 180),
	(et.DEGREES_PER_RADIAN = 180 / Math.PI),
	(et.RADIANS_PER_ARCSECOND = et.RADIANS_PER_DEGREE / 3600),
	(et.nextRandomNumber = function () {
		return it.random();
	}),
	(et.randomBetween = function (t, e) {
		return et.nextRandomNumber() * (e - t) + t;
	}),
	(et.acosClamped = function (t) {
		if (!K(t)) throw new Error("value is required.");
		return Math.acos(et.clamp(t, -1, 1));
	}),
	(et.asinClamped = function (t) {
		if (!K(t)) throw new Error("value is required.");
		return Math.asin(et.clamp(t, -1, 1));
	}),
	(et.chordLength = function (t, e) {
		if (!K(t)) throw new Error("angle is required.");
		if (!K(e)) throw new Error("radius is required.");
		return 2 * e * Math.sin(0.5 * t);
	}),
	(et.logBase = function (t, e) {
		if (!K(t)) throw new Error("number is required.");
		if (!K(e)) throw new Error("base is required.");
		return Math.log(t) / Math.log(e);
	}),
	(et.cbrt = tt(Math.cbrt, function (t) {
		const e = Math.pow(Math.abs(t), 1 / 3);
		return t < 0 ? -e : e;
	})),
	(et.log2 = tt(Math.log2, function (t) {
		return Math.log(t) * Math.LOG2E;
	}));
let it = new J();
class rt {
	constructor(t = 0, e = 0, i = 0, r = 0) {
		(this.x = t), (this.y = e), (this.z = i), (this.w = r);
	}
	set(t, e, i, r) {
		(this.x = t), (this.y = e), (this.z = i), (this.w = r);
	}
	toArray() {
		return [this.x, this.y, this.z, this.w];
	}
	clone(t) {
		return rt.clone(this, t);
	}
	equals(t) {
		return rt.equals(this, t);
	}
	equalsEpsilon(t, e = 0, i = 0) {
		return rt.equalsEpsilon(this, t, e, i);
	}
	toString() {
		return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
	}
	fromBufferAttribute(t, e) {
		return (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), (this.w = t.getW(e)), this;
	}
	static fromElements(t, e, i, r, n) {
		return K(n) ? ((n.x = t), (n.y = e), (n.z = i), (n.w = r), n) : new rt(t, e, i, r);
	}
	static clone(t, e) {
		if (K(t)) return K(e) ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e) : new rt(t.x, t.y, t.z, t.w);
	}
	static maximumComponent(t) {
		return Math.max(t.x, t.y, t.z, t.w);
	}
	static minimumComponent(t) {
		return Math.min(t.x, t.y, t.z, t.w);
	}
	static minimumByComponent(t, e, i) {
		return (
			(i.x = Math.min(t.x, e.x)),
			(i.y = Math.min(t.y, e.y)),
			(i.z = Math.min(t.z, e.z)),
			(i.w = Math.min(t.w, e.w)),
			i
		);
	}
	static maximumByComponent(t, e, i) {
		return (
			(i.x = Math.max(t.x, e.x)),
			(i.y = Math.max(t.y, e.y)),
			(i.z = Math.max(t.z, e.z)),
			(i.w = Math.max(t.w, e.w)),
			i
		);
	}
	static clamp(t, e, i, r) {
		const n = et.clamp(t.x, e.x, i.x),
			s = et.clamp(t.y, e.y, i.y),
			a = et.clamp(t.z, e.z, i.z),
			o = et.clamp(t.w, e.w, i.w);
		return (r.x = n), (r.y = s), (r.z = a), (r.w = o), r;
	}
	static magnitudeSquared(t) {
		return t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w;
	}
	static magnitude(t) {
		return Math.sqrt(rt.magnitudeSquared(t));
	}
	static distance(t, e) {
		return rt.subtract(t, e, at), rt.magnitude(at);
	}
	static distanceSquared(t, e) {
		return rt.subtract(t, e, at), rt.magnitudeSquared(at);
	}
	static normalize(t, e) {
		const i = rt.magnitude(t);
		if (
			((e.x = t.x / i),
			(e.y = t.y / i),
			(e.z = t.z / i),
			(e.w = t.w / i),
			isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || isNaN(e.w))
		)
			throw new Error("normalized result is not a number");
		return e;
	}
	static dot(t, e) {
		return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w;
	}
	static multiplyComponents(t, e, i) {
		return (i.x = t.x * e.x), (i.y = t.y * e.y), (i.z = t.z * e.z), (i.w = t.w * e.w), i;
	}
	static divideComponents(t, e, i) {
		return (i.x = t.x / e.x), (i.y = t.y / e.y), (i.z = t.z / e.z), (i.w = t.w / e.w), i;
	}
	static add(t, e, i) {
		return (i.x = t.x + e.x), (i.y = t.y + e.y), (i.z = t.z + e.z), (i.w = t.w + e.w), i;
	}
	static subtract(t, e, i) {
		return (i.x = t.x - e.x), (i.y = t.y - e.y), (i.z = t.z - e.z), (i.w = t.w - e.w), i;
	}
	static multiplyByScalar(t, e, i) {
		return (i.x = t.x * e), (i.y = t.y * e), (i.z = t.z * e), (i.w = t.w * e), i;
	}
	static divideByScalar(t, e, i) {
		return (i.x = t.x / e), (i.y = t.y / e), (i.z = t.z / e), (i.w = t.w / e), i;
	}
	static negate(t, e) {
		return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), (e.w = -t.w), e;
	}
	static abs(t, e) {
		return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), (e.z = Math.abs(t.z)), (e.w = Math.abs(t.w)), e;
	}
	static lerp(t, e, i, r) {
		return rt.multiplyByScalar(e, i, ot), (r = rt.multiplyByScalar(t, 1 - i, r)), rt.add(ot, r, r);
	}
	static equals(t, e) {
		return t === e || (K(t) && K(e) && t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w);
	}
	static equalsArray(t, e, i) {
		return t.x === e[i] && t.y === e[i + 1] && t.z === e[i + 2] && t.w === e[i + 3];
	}
	static equalsEpsilon(t, e, i = 0, r = 0) {
		return (
			t === e ||
			(K(t) &&
				K(e) &&
				et.equalsEpsilon(t.x, e.x, i, r) &&
				et.equalsEpsilon(t.y, e.y, i, r) &&
				et.equalsEpsilon(t.z, e.z, i, r) &&
				et.equalsEpsilon(t.w, e.w, i, r))
		);
	}
}
(rt.ZERO = Object.freeze(new rt(0, 0, 0, 0))),
	(rt.ONE = Object.freeze(new rt(1, 1, 1, 1))),
	(rt.UNIT_X = Object.freeze(new rt(1, 0, 0, 0))),
	(rt.UNIT_Y = Object.freeze(new rt(0, 1, 0, 0))),
	(rt.UNIT_Z = Object.freeze(new rt(0, 0, 1, 0))),
	(rt.UNIT_W = Object.freeze(new rt(0, 0, 0, 1)));
const nt = new Float32Array(1);
new Uint8Array(nt.buffer);
const st = new Uint32Array([287454020]);
new Uint8Array(st.buffer)[0];
const at = new rt(),
	ot = new rt();
new rt();
class ct {
	constructor(t = 0, e = 0, i = 0) {
		(this.x = t), (this.y = e), (this.z = i);
	}
	set(t, e, i) {
		return (this.x = t), (this.y = e), (this.z = i), this;
	}
	toArray() {
		return [this.x, this.y, this.z];
	}
	copy(t) {
		return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
	}
	lerp(t, e) {
		return ct.lerp(this, t, e, this), this;
	}
	add(t) {
		return ct.add(this, t, this), this;
	}
	addScaledVector(t, e) {
		return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
	}
	subtract(t) {
		return ct.subtract(this, t, this), this;
	}
	applyQuaternion(t) {
		const e = this.x,
			i = this.y,
			r = this.z,
			n = t.x,
			s = t.y,
			a = t.z,
			o = t.w,
			c = o * e + s * r - a * i,
			l = o * i + a * e - n * r,
			h = o * r + n * i - s * e,
			u = -n * e - s * i - a * r;
		return (
			(this.x = c * o + u * -n + l * -a - h * -s),
			(this.y = l * o + u * -s + h * -n - c * -a),
			(this.z = h * o + u * -a + c * -s - l * -n),
			this
		);
	}
	setFromMatrixColumn(t, e) {
		return this.fromArray(t, 4 * e);
	}
	fromArray(t, e = 0) {
		return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
	}
	multiplyByScalar(t) {
		return ct.multiplyByScalar(this, t, this), this;
	}
	clone() {
		return ct.clone(this, new ct());
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	applyMatrix4(t) {
		const e = this.x,
			i = this.y,
			r = this.z,
			n = t,
			s = 1 / (n[3] * e + n[7] * i + n[11] * r + n[15]);
		return (
			(this.x = (n[0] * e + n[4] * i + n[8] * r + n[12]) * s),
			(this.y = (n[1] * e + n[5] * i + n[9] * r + n[13]) * s),
			(this.z = (n[2] * e + n[6] * i + n[10] * r + n[14]) * s),
			this
		);
	}
	applyMatrix3(t) {
		let e = this.x,
			i = this.y,
			r = this.z;
		return (
			(this.x = e * t[0] + i * t[3] + r * t[6]),
			(this.y = e * t[1] + i * t[4] + r * t[7]),
			(this.z = e * t[2] + i * t[5] + r * t[8]),
			this
		);
	}
	transformDirection(t) {
		const e = this.x,
			i = this.y,
			r = this.z,
			n = t;
		return (
			(this.x = n[0] * e + n[4] * i + n[8] * r),
			(this.y = n[1] * e + n[5] * i + n[9] * r),
			(this.z = n[2] * e + n[6] * i + n[10] * r),
			this.normalize()
		);
	}
	setFromMatrixPosition(t) {
		const e = t;
		return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
	}
	normalize() {
		return ct.normalize(this, this), this;
	}
	equals(t) {
		return ct.equals(this, t);
	}
	equalsEpsilon(t, e = 0, i = 0) {
		return ct.equalsEpsilon(this, t, e, i);
	}
	toString() {
		return `(${this.x}, ${this.y}, ${this.z})`;
	}
	fromBufferAttribute(t, e) {
		return (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this;
	}
	static fromVector4(t, e) {
		return (e.x = t.x), (e.y = t.y), (e.z = t.z), e;
	}
	static fromSpherical(t, e) {
		K(e) || (e = new ct());
		const { phi: i, radius: r, theta: n } = t,
			s = Math.sin(i) * r;
		return (e.x = s * Math.sin(n)), (e.y = Math.cos(i) * r), (e.z = s * Math.cos(n)), e;
	}
	static fromElements(t, e, i, r) {
		return K(r) ? ((r.x = t), (r.y = e), (r.z = i), r) : new ct(t, e, i);
	}
	static clone(t, e = new ct()) {
		if (K(t)) return K(e) ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), e) : new ct(t.x, t.y, t.z);
	}
	static maximumComponent(t) {
		return Math.max(t.x, t.y, t.z);
	}
	static minimumComponent(t) {
		return Math.min(t.x, t.y, t.z);
	}
	static minimumByComponent(t, e, i) {
		return (i.x = Math.min(t.x, e.x)), (i.y = Math.min(t.y, e.y)), (i.z = Math.min(t.z, e.z)), i;
	}
	static maximumByComponent(t, e, i) {
		return (i.x = Math.max(t.x, e.x)), (i.y = Math.max(t.y, e.y)), (i.z = Math.max(t.z, e.z)), i;
	}
	static clamp(t, e, i, r) {
		const n = et.clamp(t.x, e.x, i.x),
			s = et.clamp(t.y, e.y, i.y),
			a = et.clamp(t.z, e.z, i.z);
		return (r.x = n), (r.y = s), (r.z = a), r;
	}
	static magnitudeSquared(t) {
		return t.x * t.x + t.y * t.y + t.z * t.z;
	}
	static magnitude(t) {
		return Math.sqrt(ct.magnitudeSquared(t));
	}
	static distance(t, e) {
		return ct.subtract(t, e, lt), ct.magnitude(lt);
	}
	static distanceSquared(t, e) {
		return ct.subtract(t, e, lt), ct.magnitudeSquared(lt);
	}
	static normalize(t, e) {
		const i = ct.magnitude(t);
		if (((e.x = t.x / i), (e.y = t.y / i), (e.z = t.z / i), isNaN(e.x) || isNaN(e.y) || isNaN(e.z)))
			throw new Error("normalized result is not a number");
		return e;
	}
	static dot(t, e) {
		return t.x * e.x + t.y * e.y + t.z * e.z;
	}
	static multiplyComponents(t, e, i) {
		return (i.x = t.x * e.x), (i.y = t.y * e.y), (i.z = t.z * e.z), i;
	}
	static divideComponents(t, e, i) {
		return (i.x = t.x / e.x), (i.y = t.y / e.y), (i.z = t.z / e.z), i;
	}
	static add(t, e, i) {
		return (i.x = t.x + e.x), (i.y = t.y + e.y), (i.z = t.z + e.z), i;
	}
	static subtract(t, e, i) {
		return (i.x = t.x - e.x), (i.y = t.y - e.y), (i.z = t.z - e.z), i;
	}
	static multiplyByScalar(t, e, i) {
		return (i.x = t.x * e), (i.y = t.y * e), (i.z = t.z * e), i;
	}
	static divideByScalar(t, e, i) {
		return (i.x = t.x / e), (i.y = t.y / e), (i.z = t.z / e), i;
	}
	static negate(t, e) {
		return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), e;
	}
	static abs(t, e) {
		return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), (e.z = Math.abs(t.z)), e;
	}
	static lerp(t, e, i, r) {
		return ct.multiplyByScalar(e, i, ht), (r = ct.multiplyByScalar(t, 1 - i, r)), ct.add(ht, r, r);
	}
	static angleBetween(t, e) {
		ct.normalize(t, ut), ct.normalize(e, ft);
		const i = ct.dot(ut, ft),
			r = ct.magnitude(ct.cross(ut, ft, ut));
		return Math.atan2(r, i);
	}
	static mostOrthogonalAxis(t, e) {
		const i = ct.normalize(t, dt);
		return (
			ct.abs(i, i),
			(e =
				i.x <= i.y
					? i.x <= i.z
						? ct.clone(ct.UNIT_X, e)
						: ct.clone(ct.UNIT_Z, e)
					: i.y <= i.z
					? ct.clone(ct.UNIT_Y, e)
					: ct.clone(ct.UNIT_Z, e))
		);
	}
	static projectVector(t, e, i) {
		const r = ct.dot(t, e) / ct.dot(e, e);
		return ct.multiplyByScalar(e, r, i);
	}
	static equals(t, e) {
		return t === e || (K(t) && K(e) && t.x === e.x && t.y === e.y && t.z === e.z);
	}
	static equalsArray(t, e, i) {
		return t.x === e[i] && t.y === e[i + 1] && t.z === e[i + 2];
	}
	static equalsEpsilon(t, e, i = 0, r = 0) {
		return (
			t === e ||
			(K(t) &&
				K(e) &&
				et.equalsEpsilon(t.x, e.x, i, r) &&
				et.equalsEpsilon(t.y, e.y, i, r) &&
				et.equalsEpsilon(t.z, e.z, i, r))
		);
	}
	static cross(t, e, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = e.x,
			o = e.y,
			c = e.z,
			l = n * c - s * o,
			h = s * a - r * c,
			u = r * o - n * a;
		return (i.x = l), (i.y = h), (i.z = u), i;
	}
}
(ct.ZERO = Object.freeze(new ct(0, 0, 0))),
	(ct.ONE = Object.freeze(new ct(1, 1, 1))),
	(ct.UNIT_X = Object.freeze(new ct(1, 0, 0))),
	(ct.UNIT_Y = Object.freeze(new ct(0, 1, 0))),
	(ct.UNIT_Z = Object.freeze(new ct(0, 0, 1))),
	(ct.midpoint = function (t, e, i) {
		return (i.x = 0.5 * (t.x + e.x)), (i.y = 0.5 * (t.y + e.y)), (i.z = 0.5 * (t.z + e.z)), i;
	});
const lt = new ct(),
	ht = new ct(),
	ut = new ct(),
	ft = new ct(),
	dt = new ct();
class mt {
	constructor(t, e) {
		(this._color = ct.multiplyByScalar(t, e, new ct())),
			(this._intensity = e),
			(this._position = new ct(0, 1, 0)),
			(this._target = new ct()),
			(this.positionDirty = !0),
			(this.targetDirty = !0),
			(this.colorDirty = !0),
			(this.shadowDirty = !0),
			(this.intensityDirty = !0),
			(this._shadow = null),
			(this.isLight = !0);
	}
	get position() {
		return this._position;
	}
	set position(t) {
		(this.positionDirty = !0), (this._position = t);
	}
	get target() {
		return this._target;
	}
	set target(t) {
		(this.targetDirty = !0), (this._target = t);
	}
	get color() {
		return this._color;
	}
	set color(t) {
		(this.colorDirty = !0), (this._color = t);
	}
	set intensity(t) {
		(this.color = ct.multiplyByScalar(this.color, t, new ct())), (this.intensityDirty = !0), (this._intensity = t);
	}
	get intensity() {
		return this._intensity;
	}
	get shadow() {
		return this._shadow;
	}
	set shadow(t) {
		(this.shadowDirty = !0), (this._shadow = t);
	}
}
class pt extends mt {
	constructor(t, e) {
		super(t, e), (this.type = "ambient"), (this._colorAndIntensity = new rt(t.x, t.y, t.z, e));
	}
	get ColorAndIntensity() {
		return (
			this._colorAndIntensity.set(this.color.x, this.color.y, this.color.z, this.intensity),
			this._colorAndIntensity
		);
	}
}
const gt = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
	xt = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
	yt = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
	vt = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
function bt(t, e, i) {
	return (
		i < 0 && (i += 1),
		i > 1 && (i -= 1),
		6 * i < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
	);
}
class St {
	constructor(t = 1, e = 1, i = 1) {
		(this.red = t), (this.green = e), (this.blue = i);
	}
	set(t) {
		return "string" == typeof t && St.fromCssColorString(t, this), this;
	}
	toArray() {
		return [this.red, this.green, this.blue];
	}
	clone(t) {
		return St.clone(this, t);
	}
	equals(t) {
		return St.equals(this, t);
	}
	toCssHexString() {
		let t = St.floatToByte(this.red).toString(16);
		t.length < 2 && (t = `0${t}`);
		let e = St.floatToByte(this.green).toString(16);
		e.length < 2 && (e = `0${e}`);
		let i = St.floatToByte(this.blue).toString(16);
		return i.length < 2 && (i = `0${i}`), `#${t}${e}${i}`;
	}
	toBytes(t) {
		const e = St.floatToByte(this.red),
			i = St.floatToByte(this.green),
			r = St.floatToByte(this.blue);
		return K(t) ? ((t[0] = e), (t[1] = i), (t[2] = r), t) : [e, i, r];
	}
	static fromBytes(t, e, i, r) {
		return (
			(t = St.byteToFloat(tt(t, 255))),
			(e = St.byteToFloat(tt(e, 255))),
			(i = St.byteToFloat(tt(i, 255))),
			K(r) ? ((r.red = t), (r.green = e), (r.blue = i), r) : new St(t, e, i)
		);
	}
	static fromHsl(t, e, i, r) {
		(t = tt(t, 0) % 1), (e = tt(e, 0));
		let n = (i = tt(i, 0)),
			s = i,
			a = i;
		if (0 !== e) {
			let r;
			r = i < 0.5 ? i * (1 + e) : i + e - i * e;
			const o = 2 * i - r;
			(n = bt(o, r, t + 1 / 3)), (s = bt(o, r, t)), (a = bt(o, r, t - 1 / 3));
		}
		return K(r) ? ((r.red = n), (r.green = s), (r.blue = a), r) : new St(n, s, a);
	}
	static fromRandom(t, e) {
		let i = (t = tt(t, tt.EMPTY_OBJECT)).red;
		if (!K(i)) {
			const e = tt(t.minimumRed, 0),
				r = tt(t.maximumRed, 1);
			i = e + et.nextRandomNumber() * (r - e);
		}
		let r = t.green;
		if (!K(r)) {
			const e = tt(t.minimumGreen, 0),
				i = tt(t.maximumGreen, 1);
			r = e + et.nextRandomNumber() * (i - e);
		}
		let n = t.blue;
		if (!K(n)) {
			const e = tt(t.minimumBlue, 0),
				i = tt(t.maximumBlue, 1);
			n = e + et.nextRandomNumber() * (i - e);
		}
		return K(e) ? ((e.red = i), (e.green = r), (e.blue = n), e) : new St(i, r, n);
	}
	static fromCssColorString(t, e = new St()) {
		t = t.replace(/\s/g, "");
		const i = St[t.toUpperCase()];
		if (K(i)) return St.clone(i, e), e;
		let r = gt.exec(t);
		return null !== r
			? ((e.red = parseInt(r[1], 16) / 15),
			  (e.green = parseInt(r[2], 16) / 15),
			  (e.blue = parseInt(r[3], 16) / 15),
			  e)
			: ((r = xt.exec(t)),
			  null !== r
					? ((e.red = parseInt(r[1], 16) / 255),
					  (e.green = parseInt(r[2], 16) / 255),
					  (e.blue = parseInt(r[3], 16) / 255),
					  e)
					: ((r = yt.exec(t)),
					  null !== r
							? ((e.red = parseFloat(r[1]) / ("%" === r[1].substr(-1) ? 100 : 255)),
							  (e.green = parseFloat(r[2]) / ("%" === r[2].substr(-1) ? 100 : 255)),
							  (e.blue = parseFloat(r[3]) / ("%" === r[3].substr(-1) ? 100 : 255)),
							  e)
							: ((r = vt.exec(t)),
							  null !== r
									? St.fromHsl(
											parseFloat(r[1]) / 360,
											parseFloat(r[2]) / 100,
											parseFloat(r[3]) / 100,
											e
									  )
									: (e = void 0))));
	}
	static byteToFloat(t) {
		return t / 255;
	}
	static floatToByte(t) {
		return 1 === t ? 255 : (256 * t) | 0;
	}
	static clone(t, e) {
		if (K(t))
			return K(e) ? ((e.red = t.red), (e.green = t.green), (e.blue = t.blue), e) : new St(t.red, t.green, t.blue);
	}
	static equals(t, e) {
		return t === e || (K(t) && K(e) && t.red === e.red && t.green === e.green && t.blue === e.blue);
	}
	static equalsArray(t, e, i) {
		return t.red === e[i] && t.green === e[i + 1] && t.blue === e[i + 2];
	}
}
class wt {
	constructor(t = 0, e = 0) {
		(this.x = t), (this.y = e), (this.x = t), (this.y = e);
	}
	set(t, e) {
		return (this.x = t), (this.y = e), this;
	}
	toArray() {
		return [this.x, this.y];
	}
	clone(t) {
		return wt.clone(this, t);
	}
	equals(t) {
		return wt.equals(this, t);
	}
	equalsEpsilon(t, e = 0, i = 0) {
		return wt.equalsEpsilon(this, t, e, i);
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
	fromBufferAttribute(t, e) {
		return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
	}
	applyMatrix3(t) {
		const e = this.x,
			i = this.y;
		return (this.x = t[0] * e + t[3] * i + t[6]), (this.y = t[1] * e + t[4] * i + t[7]), this;
	}
	static fromElements(t, e, i) {
		return K(i) ? ((i.x = t), (i.y = e), i) : new wt(t, e);
	}
	static clone(t, e) {
		if (K(t)) return K(e) ? ((e.x = t.x), (e.y = t.y), e) : new wt(t.x, t.y);
	}
	static maximumComponent(t) {
		return Math.max(t.x, t.y);
	}
	static minimumComponent(t) {
		return Math.min(t.x, t.y);
	}
	static minimumByComponent(t, e, i) {
		return (i.x = Math.min(t.x, e.x)), (i.y = Math.min(t.y, e.y)), i;
	}
	static maximumByComponent(t, e, i) {
		return (i.x = Math.max(t.x, e.x)), (i.y = Math.max(t.y, e.y)), i;
	}
	static clamp(t, e, i, r) {
		const n = et.clamp(t.x, e.x, i.x),
			s = et.clamp(t.y, e.y, i.y);
		return (r.x = n), (r.y = s), r;
	}
	static magnitudeSquared(t) {
		return t.x * t.x + t.y * t.y;
	}
	static magnitude(t) {
		return Math.sqrt(wt.magnitudeSquared(t));
	}
	static distance(t, e) {
		return wt.subtract(t, e, Tt), wt.magnitude(Tt);
	}
	static distanceSquared(t, e) {
		return wt.subtract(t, e, Tt), wt.magnitudeSquared(Tt);
	}
	static normalize(t, e) {
		const i = wt.magnitude(t);
		if (((e.x = t.x / i), (e.y = t.y / i), isNaN(e.x) || isNaN(e.y)))
			throw new Error("normalized result is not a number");
		return e;
	}
	static dot(t, e) {
		return t.x * e.x + t.y * e.y;
	}
	static cross(t, e) {
		return t.x * e.y - t.y * e.x;
	}
	static multiplyComponents(t, e, i) {
		return (i.x = t.x * e.x), (i.y = t.y * e.y), i;
	}
	static divideComponents(t, e, i) {
		return (i.x = t.x / e.x), (i.y = t.y / e.y), i;
	}
	static add(t, e, i) {
		return (i.x = t.x + e.x), (i.y = t.y + e.y), i;
	}
	static subtract(t, e, i) {
		return (i.x = t.x - e.x), (i.y = t.y - e.y), i;
	}
	static multiplyByScalar(t, e, i) {
		return (i.x = t.x * e), (i.y = t.y * e), i;
	}
	static divideByScalar(t, e, i) {
		return (i.x = t.x / e), (i.y = t.y / e), i;
	}
	static negate(t, e) {
		return (e.x = -t.x), (e.y = -t.y), e;
	}
	static abs(t, e) {
		return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), e;
	}
	static lerp(t, e, i, r) {
		return wt.multiplyByScalar(e, i, Et), (r = wt.multiplyByScalar(t, 1 - i, r)), wt.add(Et, r, r);
	}
	static angleBetween(t, e) {
		return wt.normalize(t, Mt), wt.normalize(e, _t), et.acosClamped(wt.dot(Mt, _t));
	}
	static mostOrthogonalAxis(t, e) {
		const i = wt.normalize(t, Ut);
		return wt.abs(i, i), (e = i.x <= i.y ? wt.clone(wt.UNIT_X, e) : wt.clone(wt.UNIT_Y, e));
	}
	static equals(t, e) {
		return t === e || (K(t) && K(e) && t.x === e.x && t.y === e.y);
	}
	static equalsArray(t, e, i) {
		return t.x === e[i] && t.y === e[i + 1];
	}
	static equalsEpsilon(t, e, i = 0, r = 0) {
		return t === e || (K(t) && K(e) && et.equalsEpsilon(t.x, e.x, i, r) && et.equalsEpsilon(t.y, e.y, i, r));
	}
}
(wt.ZERO = Object.freeze(new wt(0, 0))),
	(wt.ONE = Object.freeze(new wt(1, 1))),
	(wt.UNIT_X = Object.freeze(new wt(1, 0))),
	(wt.UNIT_Y = Object.freeze(new wt(0, 1)));
const Tt = new wt(),
	Et = new wt(),
	Mt = new wt(),
	_t = new wt(),
	Ut = new wt();
class Lt {
	constructor(t = 0, e = 0, i = 0, r = 0) {
		(this[0] = t), (this[1] = i), (this[2] = e), (this[3] = r);
	}
	static clone(t, e) {
		if (K(t))
			return K(e)
				? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
				: new Lt(t[0], t[2], t[1], t[3]);
	}
	static fromColumnMajorArray(t, e) {
		return Lt.clone(t, e);
	}
	static fromRowMajorArray(t, e) {
		return K(e) ? ((e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]), e) : new Lt(t[0], t[1], t[2], t[3]);
	}
	static fromScale(t, e) {
		return K(e) ? ((e[0] = t.x), (e[1] = 0), (e[2] = 0), (e[3] = t.y), e) : new Lt(t.x, 0, 0, t.y);
	}
	static fromRotation(t, e) {
		const i = Math.cos(t),
			r = Math.sin(t);
		return K(e) ? ((e[0] = i), (e[1] = r), (e[2] = -r), (e[3] = i), e) : new Lt(i, -r, r, i);
	}
	toArray() {
		const t = [];
		return Lt.toArray(this, t), t;
	}
	static toArray(t, e) {
		return K(e) ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e) : [t[0], t[1], t[2], t[3]];
	}
	static getElementIndex(t, e) {
		return 2 * t + e;
	}
	static getColumn(t, e, i) {
		const r = 2 * e,
			n = t[r],
			s = t[r + 1];
		return (i.x = n), (i.y = s), i;
	}
	static setColumn(t, e, i, r) {
		const n = 2 * e;
		return ((r = Lt.clone(t, r))[n] = i.x), (r[n + 1] = i.y), r;
	}
	static getRow(t, e, i) {
		const r = t[e],
			n = t[e + 2];
		return (i.x = r), (i.y = n), i;
	}
	static setRow(t, e, i, r) {
		return ((r = Lt.clone(t, r))[e] = i.x), (r[e + 2] = i.y), r;
	}
	static setScale(t, e, i) {
		const r = Lt.getScale(t, Rt),
			n = e.x / r.x,
			s = e.y / r.y;
		return (i[0] = t[0] * n), (i[1] = t[1] * n), (i[2] = t[2] * s), (i[3] = t[3] * s), i;
	}
	static getScale(t, e) {
		return (
			(e.x = wt.magnitude(wt.fromElements(t[0], t[1], At))),
			(e.y = wt.magnitude(wt.fromElements(t[2], t[3], At))),
			e
		);
	}
	static getMaximumScale(t) {
		return Lt.getScale(t, Ct), wt.maximumComponent(Ct);
	}
	static setRotation(t, e, i) {
		const r = Lt.getScale(t, Dt);
		return (i[0] = e[0] * r.x), (i[1] = e[1] * r.x), (i[2] = e[2] * r.y), (i[3] = e[3] * r.y), i;
	}
	static getRotation(t, e) {
		const i = Lt.getScale(t, zt);
		return (e[0] = t[0] / i.x), (e[1] = t[1] / i.x), (e[2] = t[2] / i.y), (e[3] = t[3] / i.y), e;
	}
	static multiply(t, e, i) {
		const r = t[0] * e[0] + t[2] * e[1],
			n = t[0] * e[2] + t[2] * e[3],
			s = t[1] * e[0] + t[3] * e[1],
			a = t[1] * e[2] + t[3] * e[3];
		return (i[0] = r), (i[1] = s), (i[2] = n), (i[3] = a), i;
	}
	static add(t, e, i) {
		return (i[0] = t[0] + e[0]), (i[1] = t[1] + e[1]), (i[2] = t[2] + e[2]), (i[3] = t[3] + e[3]), i;
	}
	static subtract(t, e, i) {
		return (i[0] = t[0] - e[0]), (i[1] = t[1] - e[1]), (i[2] = t[2] - e[2]), (i[3] = t[3] - e[3]), i;
	}
	static multiplyByVector(t, e, i) {
		const r = t[0] * e.x + t[2] * e.y,
			n = t[1] * e.x + t[3] * e.y;
		return (i.x = r), (i.y = n), i;
	}
	static multiplyByScalar(t, e, i) {
		return (i[0] = t[0] * e), (i[1] = t[1] * e), (i[2] = t[2] * e), (i[3] = t[3] * e), i;
	}
	static multiplyByScale(t, e, i) {
		return (i[0] = t[0] * e.x), (i[1] = t[1] * e.x), (i[2] = t[2] * e.y), (i[3] = t[3] * e.y), i;
	}
	static negate(t, e) {
		return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e;
	}
	static transpose(t, e) {
		const i = t[0],
			r = t[2],
			n = t[1],
			s = t[3];
		return (e[0] = i), (e[1] = r), (e[2] = n), (e[3] = s), e;
	}
	static abs(t, e) {
		return (e[0] = Math.abs(t[0])), (e[1] = Math.abs(t[1])), (e[2] = Math.abs(t[2])), (e[3] = Math.abs(t[3])), e;
	}
	static equals(t, e) {
		return t === e || (K(t) && K(e) && t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]);
	}
	static equalsArray(t, e, i) {
		return t[0] === e[i] && t[1] === e[i + 1] && t[2] === e[i + 2] && t[3] === e[i + 3];
	}
	static equalsEpsilon(t, e, i = 0) {
		return (
			(i = tt(i, 0)),
			t === e ||
				(K(t) &&
					K(e) &&
					Math.abs(t[0] - e[0]) <= i &&
					Math.abs(t[1] - e[1]) <= i &&
					Math.abs(t[2] - e[2]) <= i &&
					Math.abs(t[3] - e[3]) <= i)
		);
	}
	clone(t) {
		return Lt.clone(this, t);
	}
	equals(t) {
		return Lt.equals(this, t);
	}
	equalsEpsilon(t, e = 0) {
		return Lt.equalsEpsilon(this, t, e);
	}
	toString() {
		return `(${this[0]}, ${this[2]})\n(${this[1]}, ${this[3]})`;
	}
}
(Lt.IDENTITY = Object.freeze(new Lt(1, 0, 0, 1))), (Lt.ZERO = Object.freeze(new Lt(0, 0, 0, 0)));
const Rt = new wt();
new wt();
const Ct = new wt(),
	Dt = new wt(),
	At = new wt(),
	zt = new wt();
class Ot {
	constructor(t = 0, e = 0, i = 0, r = 0, n = 0, s = 0, a = 0, o = 0, c = 0) {
		(this[0] = t),
			(this[1] = r),
			(this[2] = a),
			(this[3] = e),
			(this[4] = n),
			(this[5] = o),
			(this[6] = i),
			(this[7] = s),
			(this[8] = c);
	}
	setFromMatrix4(t) {
		return (
			(this[0] = t[0]),
			(this[1] = t[1]),
			(this[2] = t[2]),
			(this[3] = t[4]),
			(this[4] = t[5]),
			(this[5] = t[2]),
			(this[6] = t[8]),
			(this[7] = t[9]),
			(this[8] = t[10]),
			this
		);
	}
	getNormalMatrix(t) {
		return this.setFromMatrix4(t), Ot.inverse(this, this), Ot.transpose(this, this), this;
	}
	static clone(t, e) {
		if (K(t))
			return K(e)
				? ((e[0] = t[0]),
				  (e[1] = t[1]),
				  (e[2] = t[2]),
				  (e[3] = t[3]),
				  (e[4] = t[4]),
				  (e[5] = t[5]),
				  (e[6] = t[6]),
				  (e[7] = t[7]),
				  (e[8] = t[8]),
				  e)
				: new Ot(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]);
	}
	static fromColumnMajorArray(t, e) {
		return K(e) || (e = new Ot()), Ot.clone(t, e);
	}
	static fromRowMajorArray(t, e) {
		return K(e)
			? ((e[0] = t[0]),
			  (e[1] = t[3]),
			  (e[2] = t[6]),
			  (e[3] = t[1]),
			  (e[4] = t[4]),
			  (e[5] = t[7]),
			  (e[6] = t[2]),
			  (e[7] = t[5]),
			  (e[8] = t[8]),
			  e)
			: new Ot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
	}
	static fromQuaternion(t, e) {
		const i = t.x * t.x,
			r = t.x * t.y,
			n = t.x * t.z,
			s = t.x * t.w,
			a = t.y * t.y,
			o = t.y * t.z,
			c = t.y * t.w,
			l = t.z * t.z,
			h = t.z * t.w,
			u = t.w * t.w,
			f = i - a - l + u,
			d = 2 * (r - h),
			m = 2 * (n + c),
			p = 2 * (r + h),
			g = -i + a - l + u,
			x = 2 * (o - s),
			y = 2 * (n - c),
			v = 2 * (o + s),
			b = -i - a + l + u;
		return K(e)
			? ((e[0] = f),
			  (e[1] = p),
			  (e[2] = y),
			  (e[3] = d),
			  (e[4] = g),
			  (e[5] = v),
			  (e[6] = m),
			  (e[7] = x),
			  (e[8] = b),
			  e)
			: new Ot(f, d, m, p, g, x, y, v, b);
	}
	static fromScale(t, e) {
		return K(e)
			? ((e[0] = t.x),
			  (e[1] = 0),
			  (e[2] = 0),
			  (e[3] = 0),
			  (e[4] = t.y),
			  (e[5] = 0),
			  (e[6] = 0),
			  (e[7] = 0),
			  (e[8] = t.z),
			  e)
			: new Ot(t.x, 0, 0, 0, t.y, 0, 0, 0, t.z);
	}
	static fromRotationX(t, e) {
		const i = Math.cos(t),
			r = Math.sin(t);
		return K(e)
			? ((e[0] = 1),
			  (e[1] = 0),
			  (e[2] = 0),
			  (e[3] = 0),
			  (e[4] = i),
			  (e[5] = r),
			  (e[6] = 0),
			  (e[7] = -r),
			  (e[8] = i),
			  e)
			: new Ot(1, 0, 0, 0, i, -r, 0, r, i);
	}
	static fromRotationY(t, e) {
		const i = Math.cos(t),
			r = Math.sin(t);
		return K(e)
			? ((e[0] = i),
			  (e[1] = 0),
			  (e[2] = -r),
			  (e[3] = 0),
			  (e[4] = 1),
			  (e[5] = 0),
			  (e[6] = r),
			  (e[7] = 0),
			  (e[8] = i),
			  e)
			: new Ot(i, 0, r, 0, 1, 0, -r, 0, i);
	}
	static fromRotationZstatic(t, e) {
		const i = Math.cos(t),
			r = Math.sin(t);
		return K(e)
			? ((e[0] = i),
			  (e[1] = r),
			  (e[2] = 0),
			  (e[3] = -r),
			  (e[4] = i),
			  (e[5] = 0),
			  (e[6] = 0),
			  (e[7] = 0),
			  (e[8] = 1),
			  e)
			: new Ot(i, -r, 0, r, i, 0, 0, 0, 1);
	}
	toArray() {
		const t = [];
		return Ot.toArray(this, t), t;
	}
	static toArray(t, e) {
		return K(e)
			? ((e[0] = t[0]),
			  (e[1] = t[1]),
			  (e[2] = t[2]),
			  (e[3] = t[3]),
			  (e[4] = t[4]),
			  (e[5] = t[5]),
			  (e[6] = t[6]),
			  (e[7] = t[7]),
			  (e[8] = t[8]),
			  e)
			: [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]];
	}
	static getElementIndex(t, e) {
		return 3 * t + e;
	}
	static getColumn(t, e, i) {
		const r = 3 * e,
			n = t[r],
			s = t[r + 1],
			a = t[r + 2];
		return (i.x = n), (i.y = s), (i.z = a), i;
	}
	static setColumn(t, e, i, r) {
		const n = 3 * e;
		return ((r = Ot.clone(t, r))[n] = i.x), (r[n + 1] = i.y), (r[n + 2] = i.z), r;
	}
	static getRow(t, e, i) {
		const r = t[e],
			n = t[e + 3],
			s = t[e + 6];
		return (i.x = r), (i.y = n), (i.z = s), i;
	}
	static setRow(t, e, i, r) {
		return ((r = Ot.clone(t, r))[e] = i.x), (r[e + 3] = i.y), (r[e + 6] = i.z), r;
	}
	static setScale(t, e, i) {
		const r = Ot.getScale(t, It),
			n = e.x / r.x,
			s = e.y / r.y,
			a = e.z / r.z;
		return (
			(i[0] = t[0] * n),
			(i[1] = t[1] * n),
			(i[2] = t[2] * n),
			(i[3] = t[3] * s),
			(i[4] = t[4] * s),
			(i[5] = t[5] * s),
			(i[6] = t[6] * a),
			(i[7] = t[7] * a),
			(i[8] = t[8] * a),
			i
		);
	}
	static getScale(t, e) {
		return (
			(e.x = ct.magnitude(ct.fromElements(t[0], t[1], t[2], Nt))),
			(e.y = ct.magnitude(ct.fromElements(t[3], t[4], t[5], Nt))),
			(e.z = ct.magnitude(ct.fromElements(t[6], t[7], t[8], Nt))),
			e
		);
	}
	static getMaximumScale(t) {
		return Ot.getScale(t, Pt), ct.maximumComponent(Pt);
	}
	static setRotation(t, e, i) {
		const r = Ot.getScale(t, Bt);
		return (
			(i[0] = e[0] * r.x),
			(i[1] = e[1] * r.x),
			(i[2] = e[2] * r.x),
			(i[3] = e[3] * r.y),
			(i[4] = e[4] * r.y),
			(i[5] = e[5] * r.y),
			(i[6] = e[6] * r.z),
			(i[7] = e[7] * r.z),
			(i[8] = e[8] * r.z),
			i
		);
	}
	static getRotation(t, e) {
		const i = Ot.getScale(t, Vt);
		return (
			(e[0] = t[0] / i.x),
			(e[1] = t[1] / i.x),
			(e[2] = t[2] / i.x),
			(e[3] = t[3] / i.y),
			(e[4] = t[4] / i.y),
			(e[5] = t[5] / i.y),
			(e[6] = t[6] / i.z),
			(e[7] = t[7] / i.z),
			(e[8] = t[8] / i.z),
			e
		);
	}
	static multiply(t, e, i) {
		const r = t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
			n = t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
			s = t[2] * e[0] + t[5] * e[1] + t[8] * e[2],
			a = t[0] * e[3] + t[3] * e[4] + t[6] * e[5],
			o = t[1] * e[3] + t[4] * e[4] + t[7] * e[5],
			c = t[2] * e[3] + t[5] * e[4] + t[8] * e[5],
			l = t[0] * e[6] + t[3] * e[7] + t[6] * e[8],
			h = t[1] * e[6] + t[4] * e[7] + t[7] * e[8],
			u = t[2] * e[6] + t[5] * e[7] + t[8] * e[8];
		return (
			(i[0] = r),
			(i[1] = n),
			(i[2] = s),
			(i[3] = a),
			(i[4] = o),
			(i[5] = c),
			(i[6] = l),
			(i[7] = h),
			(i[8] = u),
			i
		);
	}
	static add(t, e, i) {
		return (
			(i[0] = t[0] + e[0]),
			(i[1] = t[1] + e[1]),
			(i[2] = t[2] + e[2]),
			(i[3] = t[3] + e[3]),
			(i[4] = t[4] + e[4]),
			(i[5] = t[5] + e[5]),
			(i[6] = t[6] + e[6]),
			(i[7] = t[7] + e[7]),
			(i[8] = t[8] + e[8]),
			i
		);
	}
	static subtract(t, e, i) {
		return (
			(i[0] = t[0] - e[0]),
			(i[1] = t[1] - e[1]),
			(i[2] = t[2] - e[2]),
			(i[3] = t[3] - e[3]),
			(i[4] = t[4] - e[4]),
			(i[5] = t[5] - e[5]),
			(i[6] = t[6] - e[6]),
			(i[7] = t[7] - e[7]),
			(i[8] = t[8] - e[8]),
			i
		);
	}
	static multiplyByVector(t, e, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = t[0] * r + t[3] * n + t[6] * s,
			o = t[1] * r + t[4] * n + t[7] * s,
			c = t[2] * r + t[5] * n + t[8] * s;
		return (i.x = a), (i.y = o), (i.z = c), i;
	}
	static multiplyByScalar(t, e, i) {
		return (
			(i[0] = t[0] * e),
			(i[1] = t[1] * e),
			(i[2] = t[2] * e),
			(i[3] = t[3] * e),
			(i[4] = t[4] * e),
			(i[5] = t[5] * e),
			(i[6] = t[6] * e),
			(i[7] = t[7] * e),
			(i[8] = t[8] * e),
			i
		);
	}
	static multiplyByScale(t, e, i) {
		return (
			(i[0] = t[0] * e.x),
			(i[1] = t[1] * e.x),
			(i[2] = t[2] * e.x),
			(i[3] = t[3] * e.y),
			(i[4] = t[4] * e.y),
			(i[5] = t[5] * e.y),
			(i[6] = t[6] * e.z),
			(i[7] = t[7] * e.z),
			(i[8] = t[8] * e.z),
			i
		);
	}
	static negate(t, e) {
		return (
			(e[0] = -t[0]),
			(e[1] = -t[1]),
			(e[2] = -t[2]),
			(e[3] = -t[3]),
			(e[4] = -t[4]),
			(e[5] = -t[5]),
			(e[6] = -t[6]),
			(e[7] = -t[7]),
			(e[8] = -t[8]),
			e
		);
	}
	static transpose(t, e) {
		const i = t[0],
			r = t[3],
			n = t[6],
			s = t[1],
			a = t[4],
			o = t[7],
			c = t[2],
			l = t[5],
			h = t[8];
		return (
			(e[0] = i),
			(e[1] = r),
			(e[2] = n),
			(e[3] = s),
			(e[4] = a),
			(e[5] = o),
			(e[6] = c),
			(e[7] = l),
			(e[8] = h),
			e
		);
	}
	static abs(t, e) {
		return (
			(e[0] = Math.abs(t[0])),
			(e[1] = Math.abs(t[1])),
			(e[2] = Math.abs(t[2])),
			(e[3] = Math.abs(t[3])),
			(e[4] = Math.abs(t[4])),
			(e[5] = Math.abs(t[5])),
			(e[6] = Math.abs(t[6])),
			(e[7] = Math.abs(t[7])),
			(e[8] = Math.abs(t[8])),
			e
		);
	}
	static determinant(t) {
		const e = t[0],
			i = t[3],
			r = t[6],
			n = t[1],
			s = t[4],
			a = t[7],
			o = t[2],
			c = t[5],
			l = t[8];
		return e * (s * l - c * a) + n * (c * r - i * l) + o * (i * a - s * r);
	}
	static inverse(t, e) {
		const i = t[0],
			r = t[1],
			n = t[2],
			s = t[3],
			a = t[4],
			o = t[5],
			c = t[6],
			l = t[7],
			h = t[8],
			u = Ot.determinant(t);
		if (Math.abs(u) <= et.EPSILON15) throw new Error("matrix is not invertible");
		(e[0] = a * h - l * o),
			(e[1] = l * n - r * h),
			(e[2] = r * o - a * n),
			(e[3] = c * o - s * h),
			(e[4] = i * h - c * n),
			(e[5] = s * n - i * o),
			(e[6] = s * l - c * a),
			(e[7] = c * r - i * l),
			(e[8] = i * a - s * r);
		const f = 1 / u;
		return Ot.multiplyByScalar(e, f, e);
	}
	static inverseTranspose(t, e) {
		return Ot.inverse(Ot.transpose(t, Ft), e);
	}
	static equals(t, e) {
		return (
			t === e ||
			(K(t) &&
				K(e) &&
				t[0] === e[0] &&
				t[1] === e[1] &&
				t[2] === e[2] &&
				t[3] === e[3] &&
				t[4] === e[4] &&
				t[5] === e[5] &&
				t[6] === e[6] &&
				t[7] === e[7] &&
				t[8] === e[8])
		);
	}
	static equalsEpsilon(t, e, i = 0) {
		return (
			(i = tt(i, 0)),
			t === e ||
				(K(t) &&
					K(e) &&
					Math.abs(t[0] - e[0]) <= i &&
					Math.abs(t[1] - e[1]) <= i &&
					Math.abs(t[2] - e[2]) <= i &&
					Math.abs(t[3] - e[3]) <= i &&
					Math.abs(t[4] - e[4]) <= i &&
					Math.abs(t[5] - e[5]) <= i &&
					Math.abs(t[6] - e[6]) <= i &&
					Math.abs(t[7] - e[7]) <= i &&
					Math.abs(t[8] - e[8]) <= i)
		);
	}
	clone(t) {
		return Ot.clone(this, t);
	}
	equals(t) {
		return Ot.equals(this, t);
	}
	equalsArray(t, e, i) {
		return (
			t[0] === e[i] &&
			t[1] === e[i + 1] &&
			t[2] === e[i + 2] &&
			t[3] === e[i + 3] &&
			t[4] === e[i + 4] &&
			t[5] === e[i + 5] &&
			t[6] === e[i + 6] &&
			t[7] === e[i + 7] &&
			t[8] === e[i + 8]
		);
	}
	equalsEpsilon(t, e) {
		return Ot.equalsEpsilon(this, t, e);
	}
	toString() {
		return `(${this[0]}, ${this[3]}, ${this[6]})\n(${this[1]}, ${this[4]}, ${this[7]})\n(${this[2]}, ${this[5]}, ${this[8]})`;
	}
}
(Ot.IDENTITY = Object.freeze(new Ot(1, 0, 0, 0, 1, 0, 0, 0, 1))),
	(Ot.ZERO = Object.freeze(new Ot(0, 0, 0, 0, 0, 0, 0, 0, 0)));
const It = new ct();
new ct();
const Nt = new ct(),
	Pt = new ct(),
	Bt = new ct(),
	Vt = new ct(),
	Ft = new Ot();
class $t {
	constructor(
		t = 0,
		e = 0,
		i = 0,
		r = 0,
		n = 0,
		s = 0,
		a = 0,
		o = 0,
		c = 0,
		l = 0,
		h = 0,
		u = 0,
		f = 0,
		d = 0,
		m = 0,
		p = 0
	) {
		(this[0] = t),
			(this[1] = n),
			(this[2] = c),
			(this[3] = f),
			(this[4] = e),
			(this[5] = s),
			(this[6] = l),
			(this[7] = d),
			(this[8] = i),
			(this[9] = a),
			(this[10] = h),
			(this[11] = m),
			(this[12] = r),
			(this[13] = o),
			(this[14] = u),
			(this[15] = p);
	}
	clone(t) {
		return $t.clone(this, t);
	}
	equals(t) {
		return $t.equals(this, t);
	}
	equalsEpsilon(t, e = 0) {
		return $t.equalsEpsilon(this, t, e);
	}
	lookAt(t, e, i) {
		const r = this;
		return (
			ct.subtract(t, e, te),
			0 === te.length() && (te.z = 1),
			te.normalize(),
			ct.cross(i, te, Qt),
			0 === Qt.length() &&
				(1 === Math.abs(i.z) ? (te.x += 1e-4) : (te.z += 1e-4), te.normalize(), ct.cross(i, te, Qt)),
			Qt.normalize(),
			ct.cross(te, Qt, Jt),
			(r[0] = Qt.x),
			(r[4] = Jt.x),
			(r[8] = te.x),
			(r[1] = Qt.y),
			(r[5] = Jt.y),
			(r[9] = te.y),
			(r[2] = Qt.z),
			(r[6] = Jt.z),
			(r[10] = te.z),
			this
		);
	}
	toString() {
		return `(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`;
	}
	static clone(t, e) {
		if (K(t))
			return K(e)
				? ((e[0] = t[0]),
				  (e[1] = t[1]),
				  (e[2] = t[2]),
				  (e[3] = t[3]),
				  (e[4] = t[4]),
				  (e[5] = t[5]),
				  (e[6] = t[6]),
				  (e[7] = t[7]),
				  (e[8] = t[8]),
				  (e[9] = t[9]),
				  (e[10] = t[10]),
				  (e[11] = t[11]),
				  (e[12] = t[12]),
				  (e[13] = t[13]),
				  (e[14] = t[14]),
				  (e[15] = t[15]),
				  e)
				: new $t(
						t[0],
						t[4],
						t[8],
						t[12],
						t[1],
						t[5],
						t[9],
						t[13],
						t[2],
						t[6],
						t[10],
						t[14],
						t[3],
						t[7],
						t[11],
						t[15]
				  );
	}
	static fromColumnMajorArray(t, e) {
		return $t.clone(t, e);
	}
	static fromRowMajorArray(t, e) {
		return K(e)
			? ((e[0] = t[0]),
			  (e[1] = t[4]),
			  (e[2] = t[8]),
			  (e[3] = t[12]),
			  (e[4] = t[1]),
			  (e[5] = t[5]),
			  (e[6] = t[9]),
			  (e[7] = t[13]),
			  (e[8] = t[2]),
			  (e[9] = t[6]),
			  (e[10] = t[10]),
			  (e[11] = t[14]),
			  (e[12] = t[3]),
			  (e[13] = t[7]),
			  (e[14] = t[11]),
			  (e[15] = t[15]),
			  e)
			: new $t(
					t[0],
					t[1],
					t[2],
					t[3],
					t[4],
					t[5],
					t[6],
					t[7],
					t[8],
					t[9],
					t[10],
					t[11],
					t[12],
					t[13],
					t[14],
					t[15]
			  );
	}
	static fromRotationTranslation(t, e, i) {
		return (
			(e = tt(e, ct.ZERO)),
			K(i)
				? ((i[0] = t[0]),
				  (i[1] = t[1]),
				  (i[2] = t[2]),
				  (i[3] = 0),
				  (i[4] = t[3]),
				  (i[5] = t[4]),
				  (i[6] = t[5]),
				  (i[7] = 0),
				  (i[8] = t[6]),
				  (i[9] = t[7]),
				  (i[10] = t[8]),
				  (i[11] = 0),
				  (i[12] = e.x),
				  (i[13] = e.y),
				  (i[14] = e.z),
				  (i[15] = 1),
				  i)
				: new $t(t[0], t[3], t[6], e.x, t[1], t[4], t[7], e.y, t[2], t[5], t[8], e.z, 0, 0, 0, 1)
		);
	}
	static fromTranslationQuaternionRotationScale(t, e, i, r) {
		K(r) || (r = new $t());
		const n = i.x,
			s = i.y,
			a = i.z,
			o = e.x * e.x,
			c = e.x * e.y,
			l = e.x * e.z,
			h = e.x * e.w,
			u = e.y * e.y,
			f = e.y * e.z,
			d = e.y * e.w,
			m = e.z * e.z,
			p = e.z * e.w,
			g = e.w * e.w,
			x = o - u - m + g,
			y = 2 * (c - p),
			v = 2 * (l + d),
			b = 2 * (c + p),
			S = -o + u - m + g,
			w = 2 * (f - h),
			T = 2 * (l - d),
			E = 2 * (f + h),
			M = -o - u + m + g;
		return (
			(r[0] = x * n),
			(r[1] = b * n),
			(r[2] = T * n),
			(r[3] = 0),
			(r[4] = y * s),
			(r[5] = S * s),
			(r[6] = E * s),
			(r[7] = 0),
			(r[8] = v * a),
			(r[9] = w * a),
			(r[10] = M * a),
			(r[11] = 0),
			(r[12] = t.x),
			(r[13] = t.y),
			(r[14] = t.z),
			(r[15] = 1),
			r
		);
	}
	static fromTranslationRotationScale(t, e) {
		return $t.fromTranslationQuaternionRotationScale(t.translation, t.rotation, t.scale, e);
	}
	static fromTranslation(t, e) {
		return $t.fromRotationTranslation(Ot.IDENTITY, t, e);
	}
	static fromScale(t, e) {
		return K(e)
			? ((e[0] = t.x),
			  (e[1] = 0),
			  (e[2] = 0),
			  (e[3] = 0),
			  (e[4] = 0),
			  (e[5] = t.y),
			  (e[6] = 0),
			  (e[7] = 0),
			  (e[8] = 0),
			  (e[9] = 0),
			  (e[10] = t.z),
			  (e[11] = 0),
			  (e[12] = 0),
			  (e[13] = 0),
			  (e[14] = 0),
			  (e[15] = 1),
			  e)
			: new $t(t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, t.z, 0, 0, 0, 0, 1);
	}
	static fromRotation(t, e) {
		return (
			K(e) || (e = new $t()),
			(e[0] = t[0]),
			(e[1] = t[1]),
			(e[2] = t[2]),
			(e[3] = 0),
			(e[4] = t[3]),
			(e[5] = t[4]),
			(e[6] = t[5]),
			(e[7] = 0),
			(e[8] = t[6]),
			(e[9] = t[7]),
			(e[10] = t[8]),
			(e[11] = 0),
			(e[12] = 0),
			(e[13] = 0),
			(e[14] = 0),
			(e[15] = 1),
			e
		);
	}
	static makePerspective(t, e, i, r, n, s) {
		const a = new $t(),
			o = (2 * n) / (e - t),
			c = (2 * n) / (i - r),
			l = (e + t) / (e - t),
			h = (i + r) / (i - r),
			u = -s / (s - n),
			f = (-s * n) / (s - n);
		return (
			(a[0] = o),
			(a[4] = 0),
			(a[8] = l),
			(a[12] = 0),
			(a[1] = 0),
			(a[5] = c),
			(a[9] = h),
			(a[13] = 0),
			(a[2] = 0),
			(a[6] = 0),
			(a[10] = u),
			(a[14] = f),
			(a[3] = 0),
			(a[7] = 0),
			(a[11] = -1),
			(a[15] = 0),
			a
		);
	}
	static makeOrthographic(t, e, i, r, n, s) {
		const a = new $t(),
			o = 1 / (e - t),
			c = 1 / (i - r),
			l = 1 / (s - n),
			h = (e + t) * o,
			u = (i + r) * c,
			f = n * l;
		return (
			(a[0] = 2 * o),
			(a[4] = 0),
			(a[8] = 0),
			(a[12] = -h),
			(a[1] = 0),
			(a[5] = 2 * c),
			(a[9] = 0),
			(a[13] = -u),
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
		const t = [];
		return $t.toArray(this, t), t;
	}
	static toArray(t, e) {
		return K(e)
			? ((e[0] = t[0]),
			  (e[1] = t[1]),
			  (e[2] = t[2]),
			  (e[3] = t[3]),
			  (e[4] = t[4]),
			  (e[5] = t[5]),
			  (e[6] = t[6]),
			  (e[7] = t[7]),
			  (e[8] = t[8]),
			  (e[9] = t[9]),
			  (e[10] = t[10]),
			  (e[11] = t[11]),
			  (e[12] = t[12]),
			  (e[13] = t[13]),
			  (e[14] = t[14]),
			  (e[15] = t[15]),
			  e)
			: [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]];
	}
	static getElementIndex(t, e) {
		return 4 * t + e;
	}
	static getColumn(t, e, i) {
		const r = 4 * e,
			n = t[r],
			s = t[r + 1],
			a = t[r + 2],
			o = t[r + 3];
		return (i.x = n), (i.y = s), (i.z = a), (i.w = o), i;
	}
	static setColumn(t, e, i, r) {
		const n = 4 * e;
		return ((r = $t.clone(t, r))[n] = i.x), (r[n + 1] = i.y), (r[n + 2] = i.z), (r[n + 3] = i.w), r;
	}
	static getRow(t, e, i) {
		const r = t[e],
			n = t[e + 4],
			s = t[e + 8],
			a = t[e + 12];
		return (i.x = r), (i.y = n), (i.z = s), (i.w = a), i;
	}
	static setRow(t, e, i, r) {
		return ((r = $t.clone(t, r))[e] = i.x), (r[e + 4] = i.y), (r[e + 8] = i.z), (r[e + 12] = i.w), r;
	}
	static setTranslation(t, e, i) {
		return (
			(i[0] = t[0]),
			(i[1] = t[1]),
			(i[2] = t[2]),
			(i[3] = t[3]),
			(i[4] = t[4]),
			(i[5] = t[5]),
			(i[6] = t[6]),
			(i[7] = t[7]),
			(i[8] = t[8]),
			(i[9] = t[9]),
			(i[10] = t[10]),
			(i[11] = t[11]),
			(i[12] = e.x),
			(i[13] = e.y),
			(i[14] = e.z),
			(i[15] = t[15]),
			i
		);
	}
	static setScale(t, e, i) {
		const r = $t.getScale(t, qt),
			n = e.x / r.x,
			s = e.y / r.y,
			a = e.z / r.z;
		return (
			(i[0] = t[0] * n),
			(i[1] = t[1] * n),
			(i[2] = t[2] * n),
			(i[3] = t[3]),
			(i[4] = t[4] * s),
			(i[5] = t[5] * s),
			(i[6] = t[6] * s),
			(i[7] = t[7]),
			(i[8] = t[8] * a),
			(i[9] = t[9] * a),
			(i[10] = t[10] * a),
			(i[11] = t[11]),
			(i[12] = t[12]),
			(i[13] = t[13]),
			(i[14] = t[14]),
			(i[15] = t[15]),
			i
		);
	}
	static getScale(t, e) {
		return (
			(e.x = ct.magnitude(ct.fromElements(t[0], t[1], t[2], kt))),
			(e.y = ct.magnitude(ct.fromElements(t[4], t[5], t[6], kt))),
			(e.z = ct.magnitude(ct.fromElements(t[8], t[9], t[10], kt))),
			e
		);
	}
	static getMaximumScale(t) {
		return $t.getScale(t, jt), ct.maximumComponent(jt);
	}
	static setRotation(t, e, i) {
		const r = $t.getScale(t, Xt);
		return (
			(i[0] = e[0] * r.x),
			(i[1] = e[1] * r.x),
			(i[2] = e[2] * r.x),
			(i[3] = t[3]),
			(i[4] = e[3] * r.y),
			(i[5] = e[4] * r.y),
			(i[6] = e[5] * r.y),
			(i[7] = t[7]),
			(i[8] = e[6] * r.z),
			(i[9] = e[7] * r.z),
			(i[10] = e[8] * r.z),
			(i[11] = t[11]),
			(i[12] = t[12]),
			(i[13] = t[13]),
			(i[14] = t[14]),
			(i[15] = t[15]),
			i
		);
	}
	static getRotation(t, e) {
		const i = $t.getScale(t, Ht);
		return (
			(e[0] = t[0] / i.x),
			(e[1] = t[1] / i.x),
			(e[2] = t[2] / i.x),
			(e[3] = t[4] / i.y),
			(e[4] = t[5] / i.y),
			(e[5] = t[6] / i.y),
			(e[6] = t[8] / i.z),
			(e[7] = t[9] / i.z),
			(e[8] = t[10] / i.z),
			e
		);
	}
	static multiply(t, e, i) {
		const r = t[0],
			n = t[1],
			s = t[2],
			a = t[3],
			o = t[4],
			c = t[5],
			l = t[6],
			h = t[7],
			u = t[8],
			f = t[9],
			d = t[10],
			m = t[11],
			p = t[12],
			g = t[13],
			x = t[14],
			y = t[15],
			v = e[0],
			b = e[1],
			S = e[2],
			w = e[3],
			T = e[4],
			E = e[5],
			M = e[6],
			_ = e[7],
			U = e[8],
			L = e[9],
			R = e[10],
			C = e[11],
			D = e[12],
			A = e[13],
			z = e[14],
			O = e[15],
			I = r * v + o * b + u * S + p * w,
			N = n * v + c * b + f * S + g * w,
			P = s * v + l * b + d * S + x * w,
			B = a * v + h * b + m * S + y * w,
			V = r * T + o * E + u * M + p * _,
			F = n * T + c * E + f * M + g * _,
			$ = s * T + l * E + d * M + x * _,
			G = a * T + h * E + m * M + y * _,
			q = r * U + o * L + u * R + p * C,
			k = n * U + c * L + f * R + g * C,
			j = s * U + l * L + d * R + x * C,
			X = a * U + h * L + m * R + y * C,
			H = r * D + o * A + u * z + p * O,
			Y = n * D + c * A + f * z + g * O,
			W = s * D + l * A + d * z + x * O,
			Z = a * D + h * A + m * z + y * O;
		return (
			(i[0] = I),
			(i[1] = N),
			(i[2] = P),
			(i[3] = B),
			(i[4] = V),
			(i[5] = F),
			(i[6] = $),
			(i[7] = G),
			(i[8] = q),
			(i[9] = k),
			(i[10] = j),
			(i[11] = X),
			(i[12] = H),
			(i[13] = Y),
			(i[14] = W),
			(i[15] = Z),
			i
		);
	}
	static add(t, e, i) {
		return (
			(i[0] = t[0] + e[0]),
			(i[1] = t[1] + e[1]),
			(i[2] = t[2] + e[2]),
			(i[3] = t[3] + e[3]),
			(i[4] = t[4] + e[4]),
			(i[5] = t[5] + e[5]),
			(i[6] = t[6] + e[6]),
			(i[7] = t[7] + e[7]),
			(i[8] = t[8] + e[8]),
			(i[9] = t[9] + e[9]),
			(i[10] = t[10] + e[10]),
			(i[11] = t[11] + e[11]),
			(i[12] = t[12] + e[12]),
			(i[13] = t[13] + e[13]),
			(i[14] = t[14] + e[14]),
			(i[15] = t[15] + e[15]),
			i
		);
	}
	static subtract(t, e, i) {
		return (
			(i[0] = t[0] - e[0]),
			(i[1] = t[1] - e[1]),
			(i[2] = t[2] - e[2]),
			(i[3] = t[3] - e[3]),
			(i[4] = t[4] - e[4]),
			(i[5] = t[5] - e[5]),
			(i[6] = t[6] - e[6]),
			(i[7] = t[7] - e[7]),
			(i[8] = t[8] - e[8]),
			(i[9] = t[9] - e[9]),
			(i[10] = t[10] - e[10]),
			(i[11] = t[11] - e[11]),
			(i[12] = t[12] - e[12]),
			(i[13] = t[13] - e[13]),
			(i[14] = t[14] - e[14]),
			(i[15] = t[15] - e[15]),
			i
		);
	}
	static multiplyTransformation(t, e, i) {
		const r = t[0],
			n = t[1],
			s = t[2],
			a = t[4],
			o = t[5],
			c = t[6],
			l = t[8],
			h = t[9],
			u = t[10],
			f = t[12],
			d = t[13],
			m = t[14],
			p = e[0],
			g = e[1],
			x = e[2],
			y = e[4],
			v = e[5],
			b = e[6],
			S = e[8],
			w = e[9],
			T = e[10],
			E = e[12],
			M = e[13],
			_ = e[14],
			U = r * p + a * g + l * x,
			L = n * p + o * g + h * x,
			R = s * p + c * g + u * x,
			C = r * y + a * v + l * b,
			D = n * y + o * v + h * b,
			A = s * y + c * v + u * b,
			z = r * S + a * w + l * T,
			O = n * S + o * w + h * T,
			I = s * S + c * w + u * T,
			N = r * E + a * M + l * _ + f,
			P = n * E + o * M + h * _ + d,
			B = s * E + c * M + u * _ + m;
		return (
			(i[0] = U),
			(i[1] = L),
			(i[2] = R),
			(i[3] = 0),
			(i[4] = C),
			(i[5] = D),
			(i[6] = A),
			(i[7] = 0),
			(i[8] = z),
			(i[9] = O),
			(i[10] = I),
			(i[11] = 0),
			(i[12] = N),
			(i[13] = P),
			(i[14] = B),
			(i[15] = 1),
			i
		);
	}
	static multiplyByMatrix3(t, e, i) {
		const r = t[0],
			n = t[1],
			s = t[2],
			a = t[4],
			o = t[5],
			c = t[6],
			l = t[8],
			h = t[9],
			u = t[10],
			f = e[0],
			d = e[1],
			m = e[2],
			p = e[3],
			g = e[4],
			x = e[5],
			y = e[6],
			v = e[7],
			b = e[8],
			S = r * f + a * d + l * m,
			w = n * f + o * d + h * m,
			T = s * f + c * d + u * m,
			E = r * p + a * g + l * x,
			M = n * p + o * g + h * x,
			_ = s * p + c * g + u * x,
			U = r * y + a * v + l * b,
			L = n * y + o * v + h * b,
			R = s * y + c * v + u * b;
		return (
			(i[0] = S),
			(i[1] = w),
			(i[2] = T),
			(i[3] = 0),
			(i[4] = E),
			(i[5] = M),
			(i[6] = _),
			(i[7] = 0),
			(i[8] = U),
			(i[9] = L),
			(i[10] = R),
			(i[11] = 0),
			(i[12] = t[12]),
			(i[13] = t[13]),
			(i[14] = t[14]),
			(i[15] = t[15]),
			i
		);
	}
	static multiplyByTranslation(t, e, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = r * t[0] + n * t[4] + s * t[8] + t[12],
			o = r * t[1] + n * t[5] + s * t[9] + t[13],
			c = r * t[2] + n * t[6] + s * t[10] + t[14];
		return (
			(i[0] = t[0]),
			(i[1] = t[1]),
			(i[2] = t[2]),
			(i[3] = t[3]),
			(i[4] = t[4]),
			(i[5] = t[5]),
			(i[6] = t[6]),
			(i[7] = t[7]),
			(i[8] = t[8]),
			(i[9] = t[9]),
			(i[10] = t[10]),
			(i[11] = t[11]),
			(i[12] = a),
			(i[13] = o),
			(i[14] = c),
			(i[15] = t[15]),
			i
		);
	}
	static multiplyByScale(t, e, i) {
		const r = e.x,
			n = e.y,
			s = e.z;
		return 1 === r && 1 === n && 1 === s
			? $t.clone(t, i)
			: ((i[0] = r * t[0]),
			  (i[1] = r * t[1]),
			  (i[2] = r * t[2]),
			  (i[3] = t[3]),
			  (i[4] = n * t[4]),
			  (i[5] = n * t[5]),
			  (i[6] = n * t[6]),
			  (i[7] = t[7]),
			  (i[8] = s * t[8]),
			  (i[9] = s * t[9]),
			  (i[10] = s * t[10]),
			  (i[11] = t[11]),
			  (i[12] = t[12]),
			  (i[13] = t[13]),
			  (i[14] = t[14]),
			  (i[15] = t[15]),
			  i);
	}
	static multiplyByUniformScale(t, e, i) {
		return (
			(i[0] = t[0] * e),
			(i[1] = t[1] * e),
			(i[2] = t[2] * e),
			(i[3] = t[3]),
			(i[4] = t[4] * e),
			(i[5] = t[5] * e),
			(i[6] = t[6] * e),
			(i[7] = t[7]),
			(i[8] = t[8] * e),
			(i[9] = t[9] * e),
			(i[10] = t[10] * e),
			(i[11] = t[11]),
			(i[12] = t[12]),
			(i[13] = t[13]),
			(i[14] = t[14]),
			(i[15] = t[15]),
			i
		);
	}
	static multiplyByVector(t, e, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = e.w,
			o = t[0] * r + t[4] * n + t[8] * s + t[12] * a,
			c = t[1] * r + t[5] * n + t[9] * s + t[13] * a,
			l = t[2] * r + t[6] * n + t[10] * s + t[14] * a,
			h = t[3] * r + t[7] * n + t[11] * s + t[15] * a;
		return (i.x = o), (i.y = c), (i.z = l), (i.w = h), i;
	}
	static multiplyByPointAsVector(t, e, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = t[0] * r + t[4] * n + t[8] * s,
			o = t[1] * r + t[5] * n + t[9] * s,
			c = t[2] * r + t[6] * n + t[10] * s;
		return (i.x = a), (i.y = o), (i.z = c), i;
	}
	static multiplyByPoint(t, e, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = t[0] * r + t[4] * n + t[8] * s + t[12],
			o = t[1] * r + t[5] * n + t[9] * s + t[13],
			c = t[2] * r + t[6] * n + t[10] * s + t[14];
		return (i.x = a), (i.y = o), (i.z = c), i;
	}
	static multiplyByScalar(t, e, i) {
		return (
			(i[0] = t[0] * e),
			(i[1] = t[1] * e),
			(i[2] = t[2] * e),
			(i[3] = t[3] * e),
			(i[4] = t[4] * e),
			(i[5] = t[5] * e),
			(i[6] = t[6] * e),
			(i[7] = t[7] * e),
			(i[8] = t[8] * e),
			(i[9] = t[9] * e),
			(i[10] = t[10] * e),
			(i[11] = t[11] * e),
			(i[12] = t[12] * e),
			(i[13] = t[13] * e),
			(i[14] = t[14] * e),
			(i[15] = t[15] * e),
			i
		);
	}
	static negate(t, e) {
		return (
			(e[0] = -t[0]),
			(e[1] = -t[1]),
			(e[2] = -t[2]),
			(e[3] = -t[3]),
			(e[4] = -t[4]),
			(e[5] = -t[5]),
			(e[6] = -t[6]),
			(e[7] = -t[7]),
			(e[8] = -t[8]),
			(e[9] = -t[9]),
			(e[10] = -t[10]),
			(e[11] = -t[11]),
			(e[12] = -t[12]),
			(e[13] = -t[13]),
			(e[14] = -t[14]),
			(e[15] = -t[15]),
			e
		);
	}
	static transpose(t, e) {
		const i = t[1],
			r = t[2],
			n = t[3],
			s = t[6],
			a = t[7],
			o = t[11];
		return (
			(e[0] = t[0]),
			(e[1] = t[4]),
			(e[2] = t[8]),
			(e[3] = t[12]),
			(e[4] = i),
			(e[5] = t[5]),
			(e[6] = t[9]),
			(e[7] = t[13]),
			(e[8] = r),
			(e[9] = s),
			(e[10] = t[10]),
			(e[11] = t[14]),
			(e[12] = n),
			(e[13] = a),
			(e[14] = o),
			(e[15] = t[15]),
			e
		);
	}
	static abs(t, e) {
		return (
			(e[0] = Math.abs(t[0])),
			(e[1] = Math.abs(t[1])),
			(e[2] = Math.abs(t[2])),
			(e[3] = Math.abs(t[3])),
			(e[4] = Math.abs(t[4])),
			(e[5] = Math.abs(t[5])),
			(e[6] = Math.abs(t[6])),
			(e[7] = Math.abs(t[7])),
			(e[8] = Math.abs(t[8])),
			(e[9] = Math.abs(t[9])),
			(e[10] = Math.abs(t[10])),
			(e[11] = Math.abs(t[11])),
			(e[12] = Math.abs(t[12])),
			(e[13] = Math.abs(t[13])),
			(e[14] = Math.abs(t[14])),
			(e[15] = Math.abs(t[15])),
			e
		);
	}
	static equals(t, e) {
		return (
			t === e ||
			(K(t) &&
				K(e) &&
				t[12] === e[12] &&
				t[13] === e[13] &&
				t[14] === e[14] &&
				t[0] === e[0] &&
				t[1] === e[1] &&
				t[2] === e[2] &&
				t[4] === e[4] &&
				t[5] === e[5] &&
				t[6] === e[6] &&
				t[8] === e[8] &&
				t[9] === e[9] &&
				t[10] === e[10] &&
				t[3] === e[3] &&
				t[7] === e[7] &&
				t[11] === e[11] &&
				t[15] === e[15])
		);
	}
	static equalsEpsilon(t, e, i) {
		return (
			(i = tt(i, 0)),
			t === e ||
				(K(t) &&
					K(e) &&
					Math.abs(t[0] - e[0]) <= i &&
					Math.abs(t[1] - e[1]) <= i &&
					Math.abs(t[2] - e[2]) <= i &&
					Math.abs(t[3] - e[3]) <= i &&
					Math.abs(t[4] - e[4]) <= i &&
					Math.abs(t[5] - e[5]) <= i &&
					Math.abs(t[6] - e[6]) <= i &&
					Math.abs(t[7] - e[7]) <= i &&
					Math.abs(t[8] - e[8]) <= i &&
					Math.abs(t[9] - e[9]) <= i &&
					Math.abs(t[10] - e[10]) <= i &&
					Math.abs(t[11] - e[11]) <= i &&
					Math.abs(t[12] - e[12]) <= i &&
					Math.abs(t[13] - e[13]) <= i &&
					Math.abs(t[14] - e[14]) <= i &&
					Math.abs(t[15] - e[15]) <= i)
		);
	}
	static getTranslation(t, e) {
		return (e.x = t[12]), (e.y = t[13]), (e.z = t[14]), e;
	}
	static getMatrix3(t, e) {
		return (
			(e[0] = t[0]),
			(e[1] = t[1]),
			(e[2] = t[2]),
			(e[3] = t[4]),
			(e[4] = t[5]),
			(e[5] = t[6]),
			(e[6] = t[8]),
			(e[7] = t[9]),
			(e[8] = t[10]),
			e
		);
	}
	static inverse(t, e) {
		const i = t[0],
			r = t[4],
			n = t[8],
			s = t[12],
			a = t[1],
			o = t[5],
			c = t[9],
			l = t[13],
			h = t[2],
			u = t[6],
			f = t[10],
			d = t[14],
			m = t[3],
			p = t[7],
			g = t[11],
			x = t[15];
		let y = f * x,
			v = d * g,
			b = u * x,
			S = d * p,
			w = u * g,
			T = f * p,
			E = h * x,
			M = d * m,
			_ = h * g,
			U = f * m,
			L = h * p,
			R = u * m;
		const C = y * o + S * c + w * l - (v * o + b * c + T * l),
			D = v * a + E * c + U * l - (y * a + M * c + _ * l),
			A = b * a + M * o + L * l - (S * a + E * o + R * l),
			z = T * a + _ * o + R * c - (w * a + U * o + L * c),
			O = v * r + b * n + T * s - (y * r + S * n + w * s),
			I = y * i + M * n + _ * s - (v * i + E * n + U * s),
			N = S * i + E * r + R * s - (b * i + M * r + L * s),
			P = w * i + U * r + L * n - (T * i + _ * r + R * n);
		(y = n * l),
			(v = s * c),
			(b = r * l),
			(S = s * o),
			(w = r * c),
			(T = n * o),
			(E = i * l),
			(M = s * a),
			(_ = i * c),
			(U = n * a),
			(L = i * o),
			(R = r * a);
		const B = y * p + S * g + w * x - (v * p + b * g + T * x),
			V = v * m + E * g + U * x - (y * m + M * g + _ * x),
			F = b * m + M * p + L * x - (S * m + E * p + R * x),
			$ = T * m + _ * p + R * g - (w * m + U * p + L * g),
			G = b * f + T * d + v * u - (w * d + y * u + S * f),
			q = _ * d + y * h + M * f - (E * f + U * d + v * h),
			k = E * u + R * d + S * h - (L * d + b * h + M * u),
			j = L * f + w * h + U * u - (_ * u + R * f + T * h);
		let X = i * C + r * D + n * A + s * z;
		if (Math.abs(X) < et.EPSILON21) {
			if (Ot.equalsEpsilon($t.getMatrix3(t, Yt), Wt, et.EPSILON7) && rt.equals($t.getRow(t, 3, Zt), Kt))
				return (
					(e[0] = 0),
					(e[1] = 0),
					(e[2] = 0),
					(e[3] = 0),
					(e[4] = 0),
					(e[5] = 0),
					(e[6] = 0),
					(e[7] = 0),
					(e[8] = 0),
					(e[9] = 0),
					(e[10] = 0),
					(e[11] = 0),
					(e[12] = -t[12]),
					(e[13] = -t[13]),
					(e[14] = -t[14]),
					(e[15] = 1),
					e
				);
			throw new Error("matrix is not invertible because its determinate is zero.");
		}
		return (
			(X = 1 / X),
			(e[0] = C * X),
			(e[1] = D * X),
			(e[2] = A * X),
			(e[3] = z * X),
			(e[4] = O * X),
			(e[5] = I * X),
			(e[6] = N * X),
			(e[7] = P * X),
			(e[8] = B * X),
			(e[9] = V * X),
			(e[10] = F * X),
			(e[11] = $ * X),
			(e[12] = G * X),
			(e[13] = q * X),
			(e[14] = k * X),
			(e[15] = j * X),
			e
		);
	}
	static inverseTransformation(t, e) {
		const i = t[0],
			r = t[1],
			n = t[2],
			s = t[4],
			a = t[5],
			o = t[6],
			c = t[8],
			l = t[9],
			h = t[10],
			u = t[12],
			f = t[13],
			d = t[14],
			m = -i * u - r * f - n * d,
			p = -s * u - a * f - o * d,
			g = -c * u - l * f - h * d;
		return (
			(e[0] = i),
			(e[1] = s),
			(e[2] = c),
			(e[3] = 0),
			(e[4] = r),
			(e[5] = a),
			(e[6] = l),
			(e[7] = 0),
			(e[8] = n),
			(e[9] = o),
			(e[10] = h),
			(e[11] = 0),
			(e[12] = m),
			(e[13] = p),
			(e[14] = g),
			(e[15] = 1),
			e
		);
	}
	static inverseTranspose(t, e) {
		return $t.inverse($t.transpose(t, Gt), e);
	}
	static equalsArray(t, e, i) {
		return (
			t[0] === e[i] &&
			t[1] === e[i + 1] &&
			t[2] === e[i + 2] &&
			t[3] === e[i + 3] &&
			t[4] === e[i + 4] &&
			t[5] === e[i + 5] &&
			t[6] === e[i + 6] &&
			t[7] === e[i + 7] &&
			t[8] === e[i + 8] &&
			t[9] === e[i + 9] &&
			t[10] === e[i + 10] &&
			t[11] === e[i + 11] &&
			t[12] === e[i + 12] &&
			t[13] === e[i + 13] &&
			t[14] === e[i + 14] &&
			t[15] === e[i + 15]
		);
	}
}
($t.IDENTITY = Object.freeze(new $t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
	($t.ZERO = Object.freeze(new $t(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)));
const Gt = new $t();
new ct(), new ct(), new ct();
const qt = new ct();
new ct();
const kt = new ct(),
	jt = new ct(),
	Xt = new ct(),
	Ht = new ct(),
	Yt = new Ot(),
	Wt = new Ot(),
	Zt = new rt(),
	Kt = new rt(0, 0, 0, 1),
	Qt = new ct(),
	Jt = new ct(),
	te = new ct();
class ee {
	constructor(t, e, i, r) {
		(this.name = t),
			(this.cb = e),
			(this.binding = tt(i, 0)),
			(this.offset = tt(r, 0)),
			(this.visibility = d.Vertex | d.Fragment),
			(this.type = "number");
	}
	setBuffer(t, e = 0) {
		for (let i = 0; i < t.length; i++) this.buffer[i + e] = t[i];
	}
	set() {}
	getValue() {
		let t;
		switch (typeof this.cb) {
			case "object":
				t = this.cb[this.name] || this.cb;
				break;
			case "function":
				t = this.cb();
				break;
			case "number":
				t = this.cb;
				break;
			default:
				throw new Error("type is error");
		}
		return t;
	}
}
class ie extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = 0),
			(this.byteSize = 4),
			(this.buffer = new Float32Array(e.buffer, i, 1)),
			(this.type = "vec1");
	}
	set() {
		return (
			null != this.cb && (this.value = this.getValue()),
			this.value !== this._value && ((this._value = this.value), (this.buffer[0] = this.value), !0)
		);
	}
}
ie.align = 4;
class re extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = new wt()),
			(this.buffer = new Float32Array(e.buffer, i, 2)),
			(this.byteSize = 8),
			(this.type = "vec2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !wt.equals(t, this._value) && (wt.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
re.align = 8;
class ne extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = new ct()),
			(this.buffer = new Float32Array(e.buffer, i, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !ct.equals(t, this._value) && (ct.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
ne.align = 16;
class se extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = new rt()),
			(this.buffer = new Float32Array(e.buffer, i, 4)),
			(this.byteSize = 16),
			(this.type = "vec4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !rt.equals(t, this._value) && (rt.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
se.align = 16;
class ae extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = new St()),
			(this.buffer = new Float32Array(e.buffer, i, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !St.equals(t, this._value) && (St.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
ae.align = 16;
class oe extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, s),
			(this.value = void 0),
			(this._value = new Lt()),
			(this.buffer = new Float32Array(e.buffer, i, 4)),
			(this.byteSize = 16),
			(this.type = "mat2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !Lt.equals(t, this._value) && (Lt.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
oe.align = 8;
class ce extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = new Ot()),
			(this.buffer = new Float32Array(e.buffer, i, 9)),
			(this.byteSize = 48),
			(this.type = "mat3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !Ot.equals(t, this._value) && (Ot.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
ce.align = 16;
class le extends ee {
	constructor(t, e, i, r, n, s) {
		super(t, r, n, s),
			(this.value = void 0),
			(this._value = new $t()),
			(this.buffer = new Float32Array(e.buffer, i, 16)),
			(this.byteSize = 64),
			(this.type = "mat4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const t = this.value;
		return !$t.equals(t, this._value) && ($t.clone(t, this._value), this.setBuffer(this._value.toArray()), !0);
	}
}
le.align = 16;
class he extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.visibility = d.Vertex | d.Fragment),
			(this.byteSize = 64 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "mat4-array");
	}
	set() {
		this.value = this.cb();
		for (let t = 0; t < this.value.length; t++) this.setBuffer(this.value[t].toArray(), 16 * t);
		return !0;
	}
}
he.align = 16;
class ue extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.visibility = d.Vertex | d.Fragment),
			(this.buffer = new Float32Array(e.buffer, i, a)),
			(this.byteSize = 4 * a),
			(this.type = "float-array");
	}
	set() {
		this.value = this.cb();
		for (let t = 0; t < this.value.length; t++) this.buffer[t] = this.value[t];
		return !0;
	}
}
ue.align = 4;
class fe extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.visibility = d.Vertex | d.Fragment),
			(this.byteSize = 8 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "vec2-array");
	}
	set() {
		this.value = this.cb();
		let t = 0;
		for (let e = 0; e < this.value.length; e++)
			(this.buffer[t] = this.value[e].x), (this.buffer[t + 1] = this.value[e].y), (t += 2);
		return !0;
	}
}
fe.align = 8;
class de extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.visibility = d.Vertex | d.Fragment),
			(this.byteSize = 16 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "vec3-array");
	}
	set() {
		this.value = this.cb();
		let t = 0;
		for (let e = 0; e < this.value.length; e++)
			(this.buffer[t] = this.value[e].x),
				(this.buffer[t + 1] = this.value[e].y),
				(this.buffer[t + 2] = this.value[e].z),
				(this.buffer[t + 3] = 0),
				(t += 4);
		return !0;
	}
}
de.align = 16;
class me extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.visibility = d.Vertex | d.Fragment),
			(this.byteSize = 16 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "vec4-array");
	}
	set() {
		this.value = this.cb();
		let t = 0;
		for (let e = 0; e < this.value.length; e++)
			(this.buffer[t] = this.value[e].x),
				(this.buffer[t + 1] = this.value[e].y),
				(this.buffer[t + 2] = this.value[e].z),
				(this.buffer[t + 3] = this.value[e].w),
				(t += 4);
		return !0;
	}
}
me.align = 16;
class pe extends ee {
	constructor(t, e, i) {
		super(t), (this.binding = e), (this.type = "texture"), (this.visibility = d.Fragment), (this._texture = i);
	}
	get layoutType() {
		return this.texture?.layoutType || "not yet bind";
	}
	bind(t) {
		(this.texture = this._texture instanceof Function ? this._texture() : this._texture), this.texture.update(t);
	}
}
class ge extends ee {
	constructor(t, e, i) {
		super(t),
			(this.name = t),
			(this.binding = e),
			(this.type = "sampler"),
			(this.visibility = d.Fragment),
			(this._sampler = i);
	}
	get layoutType() {
		return this.sampler?.layoutType || "not yet bind";
	}
	bind(t) {
		(this.sampler = this._sampler instanceof Function ? this._sampler() : this._sampler), this.sampler.update(t);
	}
}
class xe extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.cb = r),
			(this.byteSize = 64 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "spotsLight"),
			(this.visibility = d.Fragment),
			(this.dirty = !1);
	}
	set() {
		return (
			(this.lights = this.cb()),
			this.lights.forEach((t, e) => {
				this.setSubData(t, e);
			}),
			this.dirty
		);
	}
	setSubData(t, e) {
		const i = 16 * e;
		t.positionDirty && (this.dirty = Te(this.buffer, t.position.toArray(), i + 0)),
			t.distanceDirty && (this.dirty = Te(this.buffer, t.distance, i + 3)),
			t.dirtectDirty && (this.dirty = Te(this.buffer, t.directional.toArray(), i + 4)),
			t.coneCosDirty && (this.dirty = Te(this.buffer, t.coneCos, i + 7)),
			t.colorDirty && (this.dirty = Te(this.buffer, t.color.toArray(), i + 8)),
			t.penumbraCosDirty && (this.dirty = Te(this.buffer, t.penumbraCos, i + 11)),
			t.decayDirty && (this.dirty = Te(this.buffer, t.decay, i + 12)),
			(t.positionDirty = !1),
			(t.distanceDirty = !1),
			(t.dirtectDirty = !1),
			(t.coneCosDirty = !1),
			(t.colorDirty = !1),
			(t.penumbraCosDirty = !1),
			(t.decayDirty = !1);
	}
}
xe.align = 16;
class ye extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s), (this.cb = r);
		const o = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = 18),
			(this.byteSize = a * this._subDataSize * o),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "spotLightShadows"),
			(this.visibility = d.Fragment),
			(this._nearValue = null),
			(this._farValue = null);
	}
	set() {
		return (
			(this.lights = this.cb()),
			this.lights.forEach((t, e) => {
				this.setSubData(t, e);
			}),
			this.dirty
		);
	}
	setSubData(t, e) {
		const i = e * this._subDataSize;
		(t.positionDirty || t.targetDirty || t.shadow.camera.projectMatrixDirty) &&
			(t.shadow.update(t), (this.dirty = Te(this.buffer, t.shadow.camera.vpMatrix.toArray(), i + 0)));
		const r = t.shadow.camera.near;
		r != this._nearValue && ((this._nearValue = r), (this.dirty = Te(this.buffer, this._nearValue, i + 16)));
		const n = t.shadow.camera.far;
		n != this._farValue && ((this._farValue = n), (this.dirty = Te(this.buffer, this._farValue, i + 17)));
	}
}
ye.align = 16;
class ve extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.cb = r),
			(this.byteSize = 32 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "pointsLight"),
			(this.visibility = d.Fragment);
	}
	set() {
		return (
			(this.lights = this.cb()),
			this.lights.forEach((t, e) => {
				this.setSubData(t, e);
			}),
			this.dirty
		);
	}
	setSubData(t, e) {
		const i = 8 * e;
		t.positionDirty && ((t.positionDirty = !1), (this.dirty = Te(this.buffer, t.position.toArray(), i + 0))),
			t.distanceDirty && ((t.distanceDirty = !1), (this.dirty = Te(this.buffer, t.distance, i + 3))),
			t.colorDirty && ((t.colorDirty = !1), (this.dirty = Te(this.buffer, t.color.toArray(), i + 4))),
			t.decayDirty && ((t.decayDirty = !1), (this.dirty = Te(this.buffer, t.decay, i + 7)));
	}
}
ve.align = 16;
class be extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s), (this.cb = r);
		const o = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = 18),
			(this.byteSize = a * o * this._subDataSize),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "pointLightShadows"),
			(this.visibility = d.Fragment),
			(this._nearValue = null),
			(this._farValue = null);
	}
	set() {
		return (
			(this.lights = this.cb()),
			this.lights.forEach((t, e) => {
				this.setSubData(t, e);
			}),
			this.dirty
		);
	}
	setSubData(t, e) {
		const i = e * this._subDataSize;
		t.positionDirty &&
			(t.shadow.update(t), (this.dirty = Te(this.buffer, t.shadow.camera.vpMatrix.toArray(), i + 0)));
		const r = t.shadow.camera.near;
		r != this._nearValue && ((this._nearValue = r), (this.dirty = Te(this.buffer, this._nearValue, i + 16)));
		const n = t.shadow.camera.far;
		n != this._farValue && ((this._farValue = n), (this.dirty = Te(this.buffer, this._farValue, i + 17)));
	}
}
be.align = 16;
class Se extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s),
			(this.cb = r),
			(this.byteSize = 32 * a),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "dirtectLights"),
			(this.visibility = d.Fragment);
	}
	set() {
		return (
			(this.lights = this.cb()),
			this.lights.forEach((t, e) => {
				this.setSubData(t, e);
			}),
			this.dirty
		);
	}
	setSubData(t, e) {
		const i = 8 * e;
		t.dirtectDirty && ((t.dirtectDirty = !1), (this.dirty = Te(this.buffer, t.directional.toArray(), i + 0))),
			t.colorDirty && ((t.colorDirty = !1), (this.dirty = Te(this.buffer, t.color.toArray(), i + 4)));
	}
}
Se.align = 16;
class we extends ee {
	constructor(t, e, i, r, n, s, a) {
		super(t, r, n, s), (this.cb = r);
		const o = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = 16),
			(this.byteSize = a * o * this._subDataSize),
			(this.buffer = new Float32Array(e.buffer, i, this.byteSize / 4)),
			(this.type = "dirtectLightShadows"),
			(this.visibility = d.Fragment);
	}
	set() {
		return (
			(this.lights = this.cb()),
			this.lights.forEach((t, e) => {
				this.setSubData(t, e);
			}),
			this.dirty
		);
	}
	setSubData(t, e) {
		const i = e * this._subDataSize;
		t.dirtectDirty &&
			(t.shadow.update(t), (this.dirty = Te(this.buffer, t.shadow.camera.vpMatrix.toArray(), i + 0)));
	}
}
function Te(t, e, i) {
	return (
		Array.isArray(e)
			? e.forEach((e, r) => {
					t[r + i] = e;
			  })
			: (t[i] = e),
		!0
	);
}
we.align = 16;
class Ee {
	constructor(t) {
		(this.binding = t.binding), (this.resource = t.resource);
	}
	getGPUGroupEntity() {
		return { binding: this.binding, resource: this.resource };
	}
}
class Me {
	constructor(t) {
		(this.binding = t.binding),
			(this.visibility = t.visibility),
			(this.buffer = t.buffer),
			(this.sampler = t.sampler),
			(this.texture = t.texture),
			(this.storageTexture = t.storageTexture),
			(this.externalTexture = t.storageTexture);
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
const _e = new Map();
class Ue {
	constructor(t, e, i = [], r = 0) {
		(this.entries = i),
			(this.index = r || 0),
			(this.gpuBindGroupLayout = t.createBindGroupLayout({
				label: e,
				entries: i.map(
					({ visibility: t, buffer: e, sampler: i, texture: r, storageTexture: n, binding: s }) => ({
						binding: s,
						visibility: t,
						buffer: e,
						sampler: i,
						texture: r,
						storageTexture: n
					})
				)
			}));
	}
	static getBindGroupLayoutFromCache(t, e, i, r) {
		if (_e.has(e)) return _e.get(e);
		{
			const n = new Ue(t, e, i, r);
			return _e.set(e, n), n;
		}
	}
	static removeBindGroupLayoutFromCache(t) {
		_e.delete(t);
	}
}
const Le = new Map();
class Re {
	constructor(t) {
		(this.index = t.index || 0),
			(this.gpuBindGroup = t.device.createBindGroup({
				label: t.label,
				layout: t.layout.gpuBindGroupLayout,
				entries: t.entires.map((t) => ({ binding: t.binding, resource: t.resource }))
			}));
	}
	bind(t) {
		t.setBindGroup(this.index, this.gpuBindGroup);
	}
	destroy() {
		(this.gpuBindGroup = void 0), (this.device = void 0);
	}
	static getBindGroupFromCache(t) {
		if (Le.has(t.label)) return Le.get(t.label);
		{
			const e = new Re(t);
			return Le.set(t.label, e), e;
		}
	}
	static removeBindGroupFromCache(t) {
		Le.delete(t);
	}
}
class Ce {
	constructor(t, e, i, r) {
		(this.label = t),
			(this.currentBinding = 0),
			(this.defineDirty = !0),
			(this.defines = {}),
			(this._uniforms = new Map()),
			(this.groupIndex = tt(r, 0)),
			(this.layoutIndex = tt(i, 0));
	}
	setUniformBuffer(t, e) {
		this._uniforms.get(t) ||
			((e.binding = this.currentBinding),
			this.setDefine(t.concat("Binding"), this.currentBinding),
			(this.currentBinding += 1),
			this._uniforms.set(t, e));
	}
	setTexture(t, e, i) {
		if (this._uniforms.get(t)) return;
		const r = new pe(t, this.currentBinding, e);
		this.setDefine(t.concat("Binding"), this.currentBinding), (this.currentBinding += 1), this._uniforms.set(t, r);
	}
	setSampler(t, e, i) {
		if (this._uniforms.get(t)) return;
		const r = new ge(t, this.currentBinding, e);
		this.setDefine(t.concat("Binding"), this.currentBinding), (this.currentBinding += 1), this._uniforms.set(t, r);
	}
	setDefine(t, e) {
		if (void 0 === this.defines[t]) (this.defineDirty = !0), (this.defines[t] = e);
		else {
			if (this.defines[t] === e) return;
			(this.defineDirty = !0), (this.defines[t] = e);
		}
	}
	replaceUniformBufferValue(t, e) {
		this._uniforms.forEach((i) => {
			i?.isUniformBuffer && i.replaceUniformValue(t, e);
		});
	}
	bind(t, e) {
		this.uploadUniform(t),
			this.groupLayout || (this.groupLayout = this.createBindGroupLayout(t.device, this.label, this.layoutIndex)),
			this.bindGroup || (this.bindGroup = this.createBindGroup(t.device, this.label, this.groupIndex)),
			this.bindGroup.bind(e);
	}
	destroy() {
		this._uniforms.forEach((t) => {
			t.destroy && t?.destroy();
		}),
			(this.label = void 0),
			(this.currentBinding = 1),
			(this.defineDirty = !0),
			(this.defines = void 0),
			this._uniforms.clear(),
			Ue.removeBindGroupLayoutFromCache(this.groupLayout),
			(this.bindGroup = void 0);
	}
	createBindGroup(t, e, i) {
		const r = this.createBindGroupEntity();
		return new Re({ label: e, entires: r, device: t, layout: this.groupLayout, index: i || 0 });
	}
	createBindGroupLayout(t, e, i) {
		const r = this.createBindGroupLayoutEntry();
		return Ue.getBindGroupLayoutFromCache(t, e, r, i || 0);
	}
	uploadUniform(t) {
		this._uniforms.forEach((e) => {
			e.bind(t);
		});
	}
	createBindGroupLayoutEntry() {
		const t = new Map();
		this._uniforms.forEach((e) => {
			t.has(e.binding) || t.set(e.binding, this.createOneLayoutEntry(e));
		});
		const e = [];
		return (
			t.forEach((t) => {
				e.push(t);
			}),
			e
		);
	}
	createBindGroupEntity() {
		const t = new Map();
		this._uniforms.forEach((e) => {
			t.has(e.binding) || t.set(e.binding, this.creayeOneGroupEntity(e));
		});
		const e = [];
		return (
			t.forEach((t) => {
				e.push(t);
			}),
			e
		);
	}
	createOneLayoutEntry(t) {
		let e;
		return (
			"uniform" === t.type || "read-only-storage" === t.type
				? (e = new Me({ binding: t.binding, buffer: t.layoutType, visibility: t.visibility }))
				: "texture" === t.type
				? (e = new Me({ binding: t.binding, visibility: t.visibility, texture: t.layoutType }))
				: "sampler" === t.type &&
				  (e = new Me({ binding: t.binding, visibility: t.visibility, sampler: t.layoutType })),
			e
		);
	}
	creayeOneGroupEntity(t) {
		let e;
		return (
			"uniform" === t.type || "read-only-storage" === t.type
				? (e = new Ee({
						binding: t.binding,
						resource: { buffer: t.buffer.gpuBuffer, offset: t.offset, size: t.bufferSize }
				  }))
				: "texture" === t.type
				? (e = new Ee({ binding: t.binding, resource: t.texture.textureView }))
				: "sampler" === t.type && (e = new Ee({ binding: t.binding, resource: t.sampler.gpuSampler })),
			e
		);
	}
}
class De {
	constructor(t, e, i, n, s) {
		(this.type = tt(e, "uniform")),
			(this.label = tt(t, "")),
			(this.hasDynamicOffset = !1),
			(this.minBindingSize = 0),
			(this.binding = 0),
			(this.visibility = d.Fragment | d.Vertex),
			(this.usage = tt(i, r.Uniform | r.CopyDst)),
			(this._uniformStruct = new Map()),
			(this.uniformDirty = !0),
			(this._bufferSize = n),
			(this.offset = 0),
			(this.dataBuffer = tt(s, new Float32Array(tt(this._bufferSize, 400)))),
			(this.byteOffset = 0),
			(this.isUniformBuffer = !0);
	}
	get layoutType() {
		return { type: this.type, hasDynamicOffset: this.hasDynamicOffset, minBindingSize: this.minBindingSize };
	}
	get bufferSize() {
		return tt(this._bufferSize, 4 * this.uniformsSize);
	}
	get uniformsSize() {
		return 16 * Math.ceil(this.byteOffset / 16);
	}
	bind(t) {
		this._uniformStruct.forEach((t) => {
			const e = t.set();
			null != t?.dirty && (t.dirty = !1), null != e && 0 == this.uniformDirty && (this.uniformDirty = e);
		}),
			this.uniformDirty &&
				((this.uniformDirty = !1),
				this.buffer || (this.buffer = $.createUniformBuffer(this.label, t.device, this.bufferSize, this.usage)),
				this.buffer.setSubData(0, this.dataBuffer.slice(0, tt(this?.bufferSize / 4, this.uniformsSize))));
	}
	getUniformBufferStruct() {
		let t = "struct MaterialUniform {\n ";
		return (
			this._uniformStruct.forEach((e) => {
				t += this.createUniformString(e);
			}),
			(t += "}\n"),
			t
		);
	}
	createUniformString(t) {
		let e = "";
		switch (t.type) {
			case "vec1":
				e = `${t.name} :f32,\n`;
				break;
			case "vec2":
				e = `${t.name} :vec2<f32>,\n`;
				break;
			case "vec3":
				e = `${t.name} :vec3<f32>,\n`;
				break;
			case "vec4":
				e = `${t.name} :vec4<f32>,\n`;
				break;
			case "mat2":
				e = `${t.name} :mat2x2<f32>,\n`;
				break;
			case "mat3":
				e = `${t.name} :mat3x3<f32>,\n`;
				break;
			case "mat4":
				e = `${t.name} :mat4x4<f32>,\n`;
		}
		return e;
	}
	setFloat(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		const r = new ie(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setFloatVec2(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, re.align);
		const r = new re(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setFloatVec3(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ne.align);
		const r = new ne(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setColor(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ae.align);
		const r = new ae(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setFloatVec4(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, se.align);
		const r = new se(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setMatrix2(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, oe.align);
		const r = new oe(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setMatrix3(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ce.align);
		const r = new ce(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setMatrix4(t, e, i) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, le.align);
		const r = new le(t, this.dataBuffer, this.byteOffset, e, i);
		this._uniformStruct.set(t, r), (this.byteOffset += r.byteSize);
	}
	setMatrix4Array(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, he.align);
		const n = new he(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	replaceUniformValue(t, e) {
		const i = this._uniformStruct.get(t);
		i || console.error("not find uniform"), (i.cb = e);
	}
	setFloatArray(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ue.align);
		const n = new ue(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setVec2Array(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, fe.align);
		const n = new fe(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setVec3Array(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, de.align);
		const n = new de(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setVec4Array(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, me.align);
		const n = new me(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setSpotLights(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, xe.align);
		const n = new xe(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setPointLights(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ve.align);
		const n = new ve(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setDirtectLights(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, Se.align);
		const n = new Se(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setSpotLightShadows(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, ye.align);
		const n = new ye(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setPointLightShadows(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, be.align);
		const n = new be(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	setDirtectLightShadows(t, e, i, r) {
		if (this._uniformStruct.get(t)) return;
		this.byteOffset += this.checkUniformOffset(this.byteOffset, we.align);
		const n = new we(t, this.dataBuffer, this.byteOffset, e, r, 0, i);
		this._uniformStruct.set(t, n), (this.byteOffset += n.byteSize);
	}
	checkUniformOffset(t, e) {
		return Math.ceil(t / e) * e - t;
	}
	destroy() {
		this?.buffer?.destroy();
	}
}
class Ae {
	constructor(t) {
		(this.textureProp = Object.assign(
			{
				format: l.RGBA8Unorm,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
				dataIsTexture: !1
			},
			t
		)),
			(this.sampler = t.sampler),
			(this.dirty = !0),
			(this.fixedSize = t.fixedSize || !1);
	}
	get layoutType() {
		const { viewFormats: t, sampleType: e, sampleCount: i } = this.textureProp;
		return { sampleType: tt(e, "float"), viewDimension: tt(t, "2d"), multisampled: !!(i && i > 1) };
	}
	get textureView() {
		return (
			this._textureView ||
				(this._textureView = this.gpuTexture.createView({ dimension: tt(this.textureProp.viewFormats, "2d") })),
			this._textureView
		);
	}
	update(t) {
		this.context || (this.context = t),
			this.dirty &&
				(this.checkNeedCreateTexture(),
				(this.dirty = !1),
				this.textureProp.data &&
					(Array.isArray(this.textureProp.data)
						? this.textureProp.data.forEach((t) => {
								this.setData(t);
						  })
						: this.setData(this.textureProp.data)),
				this.textureProp.needMipMap && (this.gpuTexture = t.mipmapTools.generateMipmap(this)),
				this.sampler && this.sampler.update(t));
	}
	setData(t) {
		const {
			source: e,
			width: i = t.source.width,
			height: r = t.source.height,
			depth: n = 1,
			sourceX: s = 0,
			sourceY: a = 0,
			mipLevel: o = 0,
			x: c = 0,
			y: l = 0,
			z: h = 0,
			aspect: u = "all",
			colorSpace: f = "srgb",
			premultipliedAlpha: d = !1
		} = t;
		if (e instanceof Ae) {
			let t = this.context.device.createCommandEncoder();
			t.copyTextureToTexture(
				{ texture: e.gpuTexture, origin: [s, a] },
				{ texture: this.gpuTexture, origin: { x: 0, y: 0, z: h }, mipLevel: o },
				{ width: i, height: r, depthOrArrayLayers: 1 }
			),
				this.context.device.queue.submit([t.finish()]),
				(t = null);
		} else
			this.context.device.queue.copyExternalImageToTexture(
				{ source: e, origin: [s, a] },
				{
					texture: this.gpuTexture,
					origin: [c, l, h],
					mipLevel: o,
					aspect: u,
					colorSpace: f,
					premultipliedAlpha: d
				},
				[i, r, n]
			);
	}
	setSize(t, e, i) {
		this.fixedSize ||
			((this.textureProp.size.width = t),
			(this.textureProp.size.height = e),
			i && (this.textureProp.size.depth = i),
			(this.dirty = !0));
	}
	destroy() {
		this.gpuTexture.destroy();
	}
	createGPUTexture() {
		if ("number" == typeof this.textureProp.format) throw new Error("number format");
		const { width: t, height: e, depth: i } = this.textureProp.size;
		return this.context.device.createTexture({
			label: this.textureProp?.label || "undefined",
			size: [t, e, i],
			dimension: this.textureProp.dimension || "2d",
			format: this.textureProp.format,
			usage: this.textureProp.usage,
			mipLevelCount: this.textureProp.mipLevelCount || 1,
			sampleCount: this.textureProp.sampleCount || 1
		});
	}
	checkNeedCreateTexture() {
		const { width: t, height: e, depth: i } = this.textureProp.size;
		this.gpuTexture
			? (t == this.gpuTexture.width && e == this.gpuTexture.height) ||
			  ((this._textureView = void 0), this.gpuTexture.destroy(), (this.gpuTexture = this.createGPUTexture()))
			: (this.gpuTexture = this.createGPUTexture());
	}
}
class ze {
	constructor(t, e = { type: "filtering" }) {
		(this.descriptor = t),
			(this.descriptor = {}),
			Object.assign(
				this.descriptor,
				{
					magFilter: "linear",
					minFilter: "linear",
					addressModeU: "clamp-to-edge",
					addressModeV: "clamp-to-edge"
				},
				t
			),
			(this.layoutType = e);
	}
	update(t) {
		this.gpuSampler || (this.gpuSampler = t.device.createSampler(this.descriptor));
	}
}
ze.baseSampler = new ze({ magFilter: "linear", minFilter: "linear" });
class Oe {
	constructor(t) {
		(this.spotLights = []),
			(this.pointLights = []),
			(this.directLights = []),
			(this.ambientLight = new pt(new ct(1, 1, 1), 0.2)),
			(this.lightCountDirty = !0),
			(this.openShadow = t.openShadow);
	}
	update(t, e) {
		this.checkLightShadowState(), this.updateLight(e);
	}
	add(t) {
		(this.lightCountDirty = !0),
			"ambient" == t.type
				? (this.ambientLight = t)
				: "directional" == t.type
				? this.directLights.push(t)
				: "point" == t.type
				? this.pointLights.push(t)
				: "spot" == t.type && this.spotLights.push(t);
	}
	remove(t) {
		(this.lightCountDirty = !0),
			"ambient" == t.type
				? (this.ambientLight = new pt(new ct(1, 1, 1), 1))
				: "directional" == t.type
				? this.directLights.splice(this.directLights.indexOf(t), 1)
				: "point" == t.type
				? this.pointLights.splice(this.pointLights.indexOf(t), 1)
				: "spot" == t.type && this.spotLights.splice(this.spotLights.indexOf(t), 1);
	}
	checkLightShadowState() {
		const t = this.getAllLights();
		for (let e = 0; e < t.length; e++) {
			const i = t[e];
			i.shadowDirty && ((i.shadowDirty = !1), (this.lightCountDirty = !0));
		}
	}
	updateLightShadow() {
		this.spotLightShadowMapTextureArray && (this.spotLightShadowMapTextureArray.dirty = !0),
			this.pointLightShadowMapTextureArray && (this.pointLightShadowMapTextureArray.dirty = !0),
			this.directLightShadowMapTextureArray && (this.directLightShadowMapTextureArray.dirty = !0);
	}
	updateLight(t) {
		this.lightCountDirty &&
			((this.lightCountDirty = !1),
			this.lightShaderData && this.lightShaderData.destroy(),
			this.createLightShaderData());
	}
	createLightShaderData() {
		(this.lightShaderData = new Ce("light", 0, 2, 2)),
			(this.lightUniformBuffer = new De("light", "read-only-storage", r.Storage | r.CopyDst)),
			this.lightShaderData.setDefine("spotLightsCount", this.spotLights.length),
			this.lightShaderData.setDefine("pointLightsCount", this.pointLights.length),
			this.lightShaderData.setDefine("dirtectLightsCount", this.directLights.length),
			this.lightShaderData.setDefine("ambientLightCount", 1),
			this.ambientLight &&
				this.lightUniformBuffer.setFloatVec4("ambientLight", () => this.ambientLight.ColorAndIntensity),
			this.spotLights.length &&
				this.lightUniformBuffer.setSpotLights("spotLights", () => this.spotLights, this.spotLights.length),
			this.pointLights.length &&
				this.lightUniformBuffer.setPointLights("pointLights", () => this.pointLights, this.pointLights.length),
			this.directLights.length &&
				this.lightUniformBuffer.setDirtectLights(
					"directLights",
					() => this.directLights,
					this.directLights.length
				);
		t: if (this.openShadow) {
			const t = (this.spotLightShadowMapTextureArray = this.createShadowMapTextureArray(this.spotLights)),
				e = (this.pointLightShadowMapTextureArray = this.createShadowMapTextureArray(this.pointLights)),
				i = (this.directLightShadowMapTextureArray = this.createShadowMapTextureArray(this.directLights));
			if (!t && !e && !i) break t;
			this.lightShaderData.setDefine("openShadow", this.openShadow),
				(this.shadowUniformBuffer = new De("shadow", "read-only-storage", r.Storage | r.CopyDst));
			const n = this.setShadowUniform("spotLightShadows", this.spotLights, "setSpotLightShadows"),
				s = this.setShadowUniform("pointLightShadows", this.pointLights, "setPointLightShadows"),
				a = this.setShadowUniform("directLightShadows", this.directLights, "setDirtectLightShadows");
			this.lightShaderData.setUniformBuffer("shadow", this.shadowUniformBuffer),
				this.lightShaderData.setDefine("spotLightShadowMapsCount", n),
				this.lightShaderData.setDefine("pointLightShadowMapsCount", s),
				this.lightShaderData.setDefine("directLightShadowMapsCount", a),
				void 0 !== t &&
					(t.textureProp.size.depth != n && console.warn("spotLightShadowMap align has problem"),
					this.lightShaderData.setTexture("spotLightShadowMapTextureArray", t)),
				void 0 !== e &&
					(e.textureProp.size.depth != s && console.warn("pointLightShadowMap align has problem"),
					this.lightShaderData.setTexture("pointLightShadowMapTextureArray", e)),
				void 0 !== i &&
					(i.textureProp.size.depth != a && console.warn("directLightShadowMap align has problem"),
					this.lightShaderData.setTexture("directLightShadowMapTextureArray", i)),
				this.lightShaderData.setSampler("shadowSampler", new ze({ compare: f.Less }, { type: p.Comparison }));
		}
		this.lightShaderData.setUniformBuffer("light", this.lightUniformBuffer);
	}
	getAllLights() {
		return [].concat(this.spotLights, this.pointLights, this.directLights);
	}
	destroy() {
		this.lightShaderData.destroy(), this.lightUniformBuffer.destroy();
	}
	createShadowMapTextureArray(t) {
		if (t.length <= 0) return;
		const e = [];
		for (let i = 0; i < t.length; i++) {
			const r = t[i];
			if (r.shadow) {
				const t = r.shadow.getShadowMapTexture(),
					n = {
						source: t,
						width: t.textureProp.size.width,
						height: t.textureProp.size.height,
						depth: 1,
						x: 0,
						y: 0,
						z: i
					};
				e.push(n);
			}
		}
		if (e.length <= 0) return;
		return new Ae({
			size: { width: e[0].width, height: e[0].height, depth: e.length },
			fixedSize: !0,
			sampleType: g.Depth,
			format: l.Depth24Plus,
			usage: a.TextureBinding | a.CopyDst,
			data: e,
			viewFormats: o.E2dArray
		});
	}
	setShadowUniform(t, e, i) {
		if (e.length) {
			const r = [];
			for (let t = 0; t < e.length; t++) {
				const i = e[t];
				i.shadow && r.push(i);
			}
			return this.shadowUniformBuffer[i](t, () => r, r.length), r.length;
		}
	}
}
class Ie {
	constructor({ canvas: t, container: e, context: i, pixelRatio: r } = {}) {
		if (!e.clientWidth || !e.clientHeight) throw new Error("container width or height illegality");
		(this.canvas = t || document.createElement("canvas")), (this.pixelRatio = r || window.devicePixelRatio || 1);
		const n = e.clientWidth * this.pixelRatio,
			s = e.clientHeight * this.pixelRatio;
		(this.canvas.width = n),
			(this.canvas.height = s),
			(this.canvas.style.width = e.clientWidth + "px"),
			(this.canvas.style.height = e.clientHeight + "px"),
			e.appendChild(this.canvas),
			(this.context = i || this.canvas.getContext("webgpu")),
			(this.device = void 0),
			(this._openShadow = !0),
			(this.lightManger = new Oe({ openShadow: this._openShadow }));
	}
	async init(t = {}, e = {}, i = {}) {
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
				this.device.addEventListener("uncapturederror", (t) => {
					console.error(t);
				}),
				(this.mipmapTools = new k(this.device)),
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
		} catch (t) {
			return console.error(t), !1;
		}
		return !0;
	}
	setViewPort(t, e, i, r) {
		this._viewPort = { x: t, y: e, width: i, height: r };
	}
	setScissorTest(t, e, i, r) {
		(this._scissorTestEnabled = !0), (this._scissorTest = { x: t, y: e, width: i, height: r });
	}
	resize(t, e, i = {}) {
		const r = t * this.pixelRatio,
			n = e * this.pixelRatio;
		(this.canvas.style.width = r + "px"),
			(this.canvas.style.height = n + "px"),
			(this.canvas.width = r),
			(this.canvas.height = n),
			(this.presentationSize = { width: r, height: n, depth: 1 }),
			this.context.configure({
				device: this.device,
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: a.RenderAttachment,
				alphaMode: q,
				...i
			});
	}
	render(t, e, i) {
		const r = [];
		t.shaderData &&
			(t.modelMatrix && t.shaderData.replaceUniformBufferValue("modelMatrix", t.modelMatrix),
			t.shaderData.bind(this, e)),
			i &&
				(i.shaderData.bind(this, e),
				r.push(i.shaderData.groupLayout),
				t.shaderSource && t.shaderSource.setDefines(i.shaderData.defines)),
			t.light &&
				this.lightManger.lightShaderData &&
				(this.lightManger.lightShaderData.bind(this, e),
				r.push(this.lightManger.lightShaderData.groupLayout),
				t.shaderSource && t.shaderSource.setDefines(this.lightManger.lightShaderData.defines)),
			t.renderState && t.renderState.bind(e, this),
			t.vertexBuffer && t.vertexBuffer.bind(this.device, e),
			t.indexBuffer && t.indexBuffer.bind(this.device, e);
		W.getRenderPipelineFromCache(this.device, t, r.concat(t.shaderData.groupLayout)).bind(e),
			t.indexBuffer
				? e.drawIndexed(t.count || 0, t.instances || 1, 0, 0, 0)
				: t.count && e.draw(t.count, t.instances || 1, 0, 0);
	}
	compute(t, e) {
		W.getComputePipelineFromCache(this.device, t, [t.shaderData.groupLayout]).bind(e);
		const { x: i, y: r, z: n } = t.dispatch;
		e.dispatchWorkgroups(i, r, n);
	}
}
class Ne {
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
	bind(t, e) {
		this.blendConstant && t.setBlendConstant(this.blendConstant);
	}
	setViewPort(t, e, i, r, n = 0, s = 1) {
		this.viewport ? this.viewport.set(t, e, i, r, n, s) : (this.viewport = new Be(t, e, i, r, n, s));
	}
	setScissorRect(t, e, i, r) {
		this.scissorTest ? this.scissorTest.set(t, e, i, r) : (this.scissorTest = new Pe(t, e, i, r));
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
class Pe {
	constructor(t = 0, e = 0, i = 0, r = 0, n = !0) {
		(this.x = t), (this.y = e), (this.width = i), (this.height = r), (this.variable = n);
	}
	set(t, e, i, r) {
		(this.x = t), (this.y = e), (this.width = i), (this.height = r);
	}
	equalsAndUpdateCache(t) {
		const { x: e, y: i, width: r, height: n } = t;
		return (
			(this.x != e || this.y != i || this.width != r || this.height != n) &&
			(t.set(this.x, this.y, this.width, this.height), !0)
		);
	}
}
class Be {
	constructor(t = 0, e = 0, i = 0, r = 0, n = 0, s = 1, a = !0) {
		(this.x = t),
			(this.y = e),
			(this.width = i),
			(this.height = r),
			(this.minDepth = n),
			(this.maxDepth = s),
			(this.variable = a);
	}
	set(t, e, i, r, n = 0, s = 1) {
		this.variable &&
			((this.x = t), (this.y = e), (this.width = i), (this.height = r), (this.minDepth = n), (this.maxDepth = s));
	}
	equalsAndUpdateCache(t) {
		const { x: e, y: i, width: r, height: n, minDepth: s, maxDepth: a } = t;
		return (
			(this.x != e ||
				this.y != i ||
				this.width != r ||
				this.height != n ||
				this.minDepth != s ||
				this.maxDepth != a) &&
			(t.set(this.x, this.y, this.width, this.height, this.minDepth, this.maxDepth), !0)
		);
	}
}
class Ve {
	constructor(t, e, i, r) {
		(this.frontFace = tt(i, S.CCW)),
			(this.cullMode = tt(e, w.None)),
			(this.unclippedDepth = tt(r, !1)),
			(this.topology = tt(t, b.TriangleList));
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
class Fe {
	constructor(t) {
		(this.format = tt(t?.format, l.Depth24Plus)),
			(this.depthWriteEnabled = tt(t?.depthWriteEnabled, !0)),
			(this.depthCompare = tt(t?.depthCompare, f.Less)),
			(this.stencilReadMask = tt(t?.stencilReadMask, 4294967295)),
			(this.stencilWriteMask = tt(t?.stencilWriteMask, 4294967295)),
			(this.stencilFrontCompare = tt(t?.stencilFrontCompare, f.Always)),
			(this.stencilFrontFailOp = tt(t?.stencilFrontFailOp, _.Keep)),
			(this.stencilFrontDepthFailOp = tt(t?.stencilFrontDepthFailOp, _.Keep)),
			(this.stencilFrontPassOp = tt(t?.stencilFrontPassOp, _.Keep)),
			(this.stencilBackCompare = tt(t?.stencilBackCompare, f.Always)),
			(this.stencilBackFailOp = tt(t?.stencilBackFailOp, _.Keep)),
			(this.stencilBackDepthFailOp = tt(t?.stencilBackDepthFailOp, _.Keep)),
			(this.stencilBackPassOp = tt(t?.stencilBackPassOp, _.Keep)),
			(this.depthBias = tt(t?.depthBias, 0)),
			(this.depthBiasSlopeScale = tt(t?.depthBiasSlopeScale, 0)),
			(this.depthBiasClamp = tt(t?.depthBiasClamp, 0));
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
class $e {
	constructor(t) {
		(this.format = tt(t?.format, l.BGRA8Unorm)),
			(this.blendColorOperation = tt(t?.blendColorOperation, M.Add)),
			(this.blendColorSrcFactor = tt(t?.blendColorSrcFactor, E?.SrcAlpha)),
			(this.blendColorDstFactor = tt(t?.blendColorDstFactor, E.OneMinusSrcAlpha)),
			(this.blendAlphaOperation = tt(t?.blendAlphaOperation, M.Add)),
			(this.blendAlphaSrcFactor = tt(t?.blendAlphaSrcFactor, E.One)),
			(this.blendAlphaDstFactor = tt(t?.blendAlphaDstFactor, E.One)),
			(this.writeMask = tt(t?.writeMask, B.All));
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
new Be(), new Pe();
class Ge {
	constructor(t, e) {
		(this.value = t), (this.op = "clear"), (this.storeOp = "store"), Object.assign(this, e);
	}
}
class qe {
	constructor(t, e, i) {
		(this.name = t),
			(this.value = e),
			(this.itemSize = i),
			(this.name = t),
			(this.offset = 0),
			(this.shaderLocation = 0);
	}
	getGPUAttribute() {
		return { shaderLocation: this.shaderLocation, format: this.format, offset: this.offset };
	}
	destroy() {
		this.value = [];
	}
	applyMatrix3(t) {
		if (2 === this.itemSize)
			for (let e = 0, i = this.value.length / this.itemSize; e < i; e++)
				qe.v2.fromBufferAttribute(this, e), qe.v2.applyMatrix3(t), this.setXY(e, qe.v2.x, qe.v2.y);
		else if (3 === this.itemSize)
			for (let e = 0, i = this.value.length / this.itemSize; e < i; e++)
				qe.v3.fromBufferAttribute(this, e), qe.v3.applyMatrix3(t), this.setXYZ(e, qe.v3.x, qe.v3.y, qe.v3.z);
		return this;
	}
	applyMatrix4(t) {
		for (let e = 0, i = this.value.length / this.itemSize; e < i; e++)
			qe.v3.fromBufferAttribute(this, e), qe.v3.applyMatrix4(t), this.setXYZ(e, qe.v3.x, qe.v3.y, qe.v3.z);
		return this;
	}
	setX(t, e) {
		return (this.value[t * this.itemSize] = e), this;
	}
	getX(t) {
		return this.value[t * this.itemSize];
	}
	setY(t, e) {
		return (this.value[t * this.itemSize + 1] = e), this;
	}
	getY(t) {
		return this.value[t * this.itemSize + 1];
	}
	setZ(t, e) {
		return (this.value[t * this.itemSize + 2] = e), this;
	}
	getZ(t) {
		return this.value[t * this.itemSize + 2];
	}
	getW(t) {
		return this.value[t * this.itemSize + 3];
	}
	setXY(t, e, i) {
		return (t *= this.itemSize), (this.value[t + 0] = e), (this.value[t + 1] = i), this;
	}
	setXYZ(t, e, i, r) {
		return (t *= this.itemSize), (this.value[t + 0] = e), (this.value[t + 1] = i), (this.value[t + 2] = r), this;
	}
	setXYZW(t, e, i, r, n) {
		return (
			(t *= this.itemSize),
			(this.value[t + 0] = e),
			(this.value[t + 1] = i),
			(this.value[t + 2] = r),
			(this.value[t + 3] = n),
			this
		);
	}
}
(qe.v3 = new ct()), (qe.v2 = new wt());
class ke extends qe {
	constructor(t, e, i) {
		super(t, e, i),
			(this.format = (function (t, e) {
				let i;
				switch (`${t}x${e}`) {
					case "float32":
						i = L.Float32;
						break;
					case "float32x2":
						i = L.Float32x2;
						break;
					case "float32x3":
						i = L.Float32x3;
						break;
					case "float32x4":
						i = L.Float32x4;
				}
				return i;
			})("float32", i)),
			(this.attributeByteSize = Float32Array.BYTES_PER_ELEMENT * i);
	}
}
class je {
	constructor(t = 0, e = 0, i = 0, r = 1) {
		(this.x = t), (this.y = e), (this.z = i), (this.w = r);
	}
	normalize() {
		const t = 1 / je.magnitude(this),
			e = this.x * t,
			i = this.y * t,
			r = this.z * t,
			n = this.w * t;
		return (this.x = e), (this.y = i), (this.z = r), (this.w = n), this;
	}
	invert() {
		return (this.x *= -1), (this.y *= -1), (this.z *= -1), this;
	}
	dot(t) {
		return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
	}
	setFromUnitVectors(t, e) {
		let i = ct.dot(t, e) + 1;
		return (
			i < Number.EPSILON
				? ((i = 0),
				  Math.abs(t.x) > Math.abs(t.z)
						? ((this.x = -t.y), (this.y = t.x), (this.z = 0), (this.w = i))
						: ((this.x = 0), (this.y = -t.z), (this.z = t.y), (this.w = i)))
				: ((this._x = t.y * e.z - t.z * e.y),
				  (this._y = t.z * e.x - t.x * e.z),
				  (this._z = t.x * e.y - t.y * e.x),
				  (this._w = i)),
			this.normalize()
		);
	}
	setFromRotationMatrix(t) {
		const e = t,
			i = e[0],
			r = e[4],
			n = e[8],
			s = e[1],
			a = e[5],
			o = e[9],
			c = e[2],
			l = e[6],
			h = e[10],
			u = i + a + h;
		if (u > 0) {
			const t = 0.5 / Math.sqrt(u + 1);
			(this.w = 0.25 / t), (this.x = (l - o) * t), (this.y = (n - c) * t), (this.z = (s - r) * t);
		} else if (i > a && i > h) {
			const t = 2 * Math.sqrt(1 + i - a - h);
			(this.w = (l - o) / t), (this.x = 0.25 * t), (this.y = (r + s) / t), (this.z = (n + c) / t);
		} else if (a > h) {
			const t = 2 * Math.sqrt(1 + a - i - h);
			(this.w = (n - c) / t), (this.x = (r + s) / t), (this.y = 0.25 * t), (this.z = (o + l) / t);
		} else {
			const t = 2 * Math.sqrt(1 + h - i - a);
			(this.w = (s - r) / t), (this.x = (n + c) / t), (this.y = (o + l) / t), (this.z = 0.25 * t);
		}
		return this;
	}
	clone() {
		return je.clone(this, this);
	}
	equals(t) {
		return je.equals(this, t);
	}
	equalsEpsilon(t, e = 0) {
		return je.equalsEpsilon(this, t, e);
	}
	static fromAxisAngle(t, e) {
		const i = e / 2,
			r = Math.sin(i);
		Xe = ct.normalize(t, Xe);
		const n = Xe.x * r,
			s = Xe.y * r,
			a = Xe.z * r,
			o = Math.cos(i);
		let c = new je(n, s, a, o);
		return (c.x = n), (c.y = s), (c.z = a), (c.w = o), c;
	}
	static fromRotationMatrix(t, e) {
		let i, r, n, s, a;
		const o = t[Ot.COLUMN0ROW0],
			c = t[Ot.COLUMN1ROW1],
			l = t[Ot.COLUMN2ROW2],
			h = o + c + l;
		if (h > 0)
			(i = Math.sqrt(h + 1)),
				(a = 0.5 * i),
				(i = 0.5 / i),
				(r = (t[Ot.COLUMN1ROW2] - t[Ot.COLUMN2ROW1]) * i),
				(n = (t[Ot.COLUMN2ROW0] - t[Ot.COLUMN0ROW2]) * i),
				(s = (t[Ot.COLUMN0ROW1] - t[Ot.COLUMN1ROW0]) * i);
		else {
			const e = He;
			let h = 0;
			c > o && (h = 1), l > o && l > c && (h = 2);
			const u = e[h],
				f = e[u];
			i = Math.sqrt(t[Ot.getElementIndex(h, h)] - t[Ot.getElementIndex(u, u)] - t[Ot.getElementIndex(f, f)] + 1);
			const d = Ye;
			(d[h] = 0.5 * i),
				(i = 0.5 / i),
				(a = (t[Ot.getElementIndex(f, u)] - t[Ot.getElementIndex(u, f)]) * i),
				(d[u] = (t[Ot.getElementIndex(u, h)] + t[Ot.getElementIndex(h, u)]) * i),
				(d[f] = (t[Ot.getElementIndex(f, h)] + t[Ot.getElementIndex(h, f)]) * i),
				(r = -d[0]),
				(n = -d[1]),
				(s = -d[2]);
		}
		return K(e) ? ((e.x = r), (e.y = n), (e.z = s), (e.w = a), e) : new je(r, n, s, a);
	}
	static clone(t, e) {
		if (K(t)) return K(e) ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e) : new je(t.x, t.y, t.z, t.w);
	}
	static conjugate(t, e) {
		return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), (e.w = t.w), e;
	}
	static magnitudeSquared(t) {
		return t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w;
	}
	static magnitude(t) {
		return Math.sqrt(je.magnitudeSquared(t));
	}
	static normalize(t, e) {
		const i = 1 / je.magnitude(t),
			r = t.x * i,
			n = t.y * i,
			s = t.z * i,
			a = t.w * i;
		return (e.x = r), (e.y = n), (e.z = s), (e.w = a), e;
	}
	static inverse(t, e) {
		const i = je.magnitudeSquared(t);
		return (e = je.conjugate(t, e)), je.multiplyByScalar(e, 1 / i, e);
	}
	static add(t, e, i) {
		return (i.x = t.x + e.x), (i.y = t.y + e.y), (i.z = t.z + e.z), (i.w = t.w + e.w), i;
	}
	static subtract(t, e, i) {
		return (i.x = t.x - e.x), (i.y = t.y - e.y), (i.z = t.z - e.z), (i.w = t.w - e.w), i;
	}
	static negate(t, e) {
		return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), (e.w = -t.w), e;
	}
	static dot(t, e) {
		return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w;
	}
	static multiply(t, e, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = t.w,
			o = e.x,
			c = e.y,
			l = e.z,
			h = e.w,
			u = a * o + r * h + n * l - s * c,
			f = a * c - r * l + n * h + s * o,
			d = a * l + r * c - n * o + s * h,
			m = a * h - r * o - n * c - s * l;
		return (i.x = u), (i.y = f), (i.z = d), (i.w = m), i;
	}
	static multiplyByScalar(t, e, i) {
		return (i.x = t.x * e), (i.y = t.y * e), (i.z = t.z * e), (i.w = t.w * e), i;
	}
	static divideByScalar(t, e, i) {
		return (i.x = t.x / e), (i.y = t.y / e), (i.z = t.z / e), (i.w = t.w / e), i;
	}
	static computeAxis(t, e) {
		const i = t.w;
		if (Math.abs(i - 1) < et.EPSILON6) return (e.x = e.y = e.z = 0), e;
		const r = 1 / Math.sqrt(1 - i * i);
		return (e.x = t.x * r), (e.y = t.y * r), (e.z = t.z * r), e;
	}
	static computeAngle(t) {
		return Math.abs(t.w - 1) < et.EPSILON6 ? 0 : 2 * Math.acos(t.w);
	}
	static lerp(t, e, i, r) {
		return (We = je.multiplyByScalar(e, i, We)), (r = je.multiplyByScalar(t, 1 - i, r)), je.add(We, r, r);
	}
	static slerp(t, e, i, r) {
		let n = je.dot(t, e),
			s = e;
		if ((n < 0 && ((n = -n), (s = Ze = je.negate(e, Ze))), 1 - n < et.EPSILON6)) return je.lerp(t, s, i, r);
		const a = Math.acos(n);
		return (
			(Ke = je.multiplyByScalar(t, Math.sin((1 - i) * a), Ke)),
			(Qe = je.multiplyByScalar(s, Math.sin(i * a), Qe)),
			(r = je.add(Ke, Qe, r)),
			je.multiplyByScalar(r, 1 / Math.sin(a), r)
		);
	}
	static computeInnerQuadrangle(t, e, i, r) {
		const n = je.conjugate(e, oi);
		je.multiply(n, i, ci);
		const s = je.log(ci, si);
		je.multiply(n, t, ci);
		const a = je.log(ci, ai);
		return ct.add(s, a, s), ct.multiplyByScalar(s, 0.25, s), ct.negate(s, s), je.exp(s, oi), je.multiply(e, oi, r);
	}
	static squad(t, e, i, r, n, s) {
		const a = je.slerp(t, e, n, oi),
			o = je.slerp(i, r, n, ci);
		return je.slerp(a, o, 2 * n * (1 - n), s);
	}
	static fastSlerp(t, e, i, r) {
		let n,
			s = je.dot(t, e);
		s >= 0 ? (n = 1) : ((n = -1), (s = -s));
		const a = s - 1,
			o = 1 - i,
			c = i * i,
			l = o * o;
		for (let t = 7; t >= 0; --t) (ri[t] = (ei[t] * c - ii[t]) * a), (ni[t] = (ei[t] * l - ii[t]) * a);
		const h =
				n *
				i *
				(1 +
					ri[0] *
						(1 +
							ri[1] * (1 + ri[2] * (1 + ri[3] * (1 + ri[4] * (1 + ri[5] * (1 + ri[6] * (1 + ri[7])))))))),
			u =
				o *
				(1 +
					ni[0] *
						(1 +
							ni[1] * (1 + ni[2] * (1 + ni[3] * (1 + ni[4] * (1 + ni[5] * (1 + ni[6] * (1 + ni[7])))))))),
			f = je.multiplyByScalar(t, u, Je);
		return je.multiplyByScalar(e, h, r), je.add(f, r, r);
	}
	static fastSquad(t, e, i, r, n, s) {
		const a = je.fastSlerp(t, e, n, oi),
			o = je.fastSlerp(i, r, n, ci);
		return je.fastSlerp(a, o, 2 * n * (1 - n), s);
	}
	static equals(t, e) {
		return t === e || (K(t) && K(e) && t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w);
	}
	static equalsEpsilon(t, e, i = 0) {
		return (
			(i = tt(i, 0)),
			t === e ||
				(K(t) &&
					K(e) &&
					Math.abs(t.x - e.x) <= i &&
					Math.abs(t.y - e.y) <= i &&
					Math.abs(t.z - e.z) <= i &&
					Math.abs(t.w - e.w) <= i)
		);
	}
	static log(t, e) {
		const i = et.acosClamped(t.w);
		let r = 0;
		return 0 !== i && (r = i / Math.sin(i)), ct.multiplyByScalar(t, r, e);
	}
	static exp(t, e) {
		const i = ct.magnitude(t);
		let r = 0;
		return (
			0 !== i && (r = Math.sin(i) / i), (e.x = t.x * r), (e.y = t.y * r), (e.z = t.z * r), (e.w = Math.cos(i)), e
		);
	}
}
(je.ZERO = Object.freeze(new je(0, 0, 0, 0))), (je.IDENTITY = Object.freeze(new je(0, 0, 0, 1)));
let Xe = new ct();
const He = [1, 2, 0],
	Ye = new Array(3);
new je(), new je(), new je(), new je(), new ct(), new ct(), new je(), new je(), new je();
let We = new je(),
	Ze = new je(),
	Ke = new je(),
	Qe = new je();
const Je = new je(),
	ti = 1.9011074535173003,
	ei = new Float32Array(8),
	ii = new Float32Array(8),
	ri = new Float32Array(8),
	ni = new Float32Array(8);
for (let t = 0; t < 7; ++t) {
	const e = t + 1,
		i = 2 * e + 1;
	(ei[t] = 1 / (e * i)), (ii[t] = e / i);
}
(ei[7] = ti / 136), (ii[7] = (8 * ti) / 17);
const si = new ct(),
	ai = new ct(),
	oi = new je(),
	ci = new je();
class li {
	constructor() {
		(this._position = new ct()),
			(this._scale = new ct(1, 1, 1)),
			(this._quaternion = new je()),
			(this.modelMatrix = $t.clone($t.IDENTITY, new $t())),
			(this._normalMatrix = $t.clone($t.IDENTITY, new $t())),
			(this.up = new ct(0, 1, 0));
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
	updateNormalMatrix(t) {
		$t.inverse(this.modelMatrix, this._normalMatrix), $t.transpose(this._normalMatrix, this._normalMatrix);
	}
	updateMatrix() {
		$t.fromTranslationQuaternionRotationScale(this.position, this.quaternion, this.scale, this.modelMatrix);
	}
	lookAt(t, e, i) {
		mi.set(t, e, i),
			this.isCamera || this.isLight
				? di.lookAt(this.position, mi, this.up)
				: di.lookAt(mi, this.position, this.up),
			this.quaternion.setFromRotationMatrix(di);
	}
	rotateOnAxis(t, e) {
		const i = je.fromAxisAngle(t, e);
		je.multiply(this.quaternion, i, this.quaternion);
	}
	rotateX(t) {
		return this.rotateOnAxis(hi, t);
	}
	rotateY(t) {
		return this.rotateOnAxis(ui, t);
	}
	rotateZ(t) {
		return this.rotateOnAxis(fi, t);
	}
}
const hi = new ct(1, 0, 0),
	ui = new ct(0, 1, 0),
	fi = new ct(0, 0, 1),
	di = new $t(),
	mi = new ct();
new Ot(), new $t();
class pi extends li {
	constructor(t, e) {
		super(),
			(this.geometry = t),
			(this.material = e),
			(this.type = "mesh"),
			(this.isMesh = !0),
			(this.subCommands = {});
	}
	get ready() {
		return this.material.ready;
	}
	update(t, e) {
		this.updateMatrix(),
			this.updateNormalMatrix(e),
			this.geometry.update(t),
			this.material.update(t, this),
			this.geometry.boundingSphere.update(this.modelMatrix),
			this.material.shaderSource.setDefines(t.defines),
			(this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(e));
		const i = t.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		(i !== F.INTERSECTING && i !== F.INSIDE) ||
			(this.material.transparent ? t.renderQueue.transparent.push(this) : t.renderQueue.opaque.push(this));
	}
	beforeRender() {}
	afterRender() {}
	getDrawCommand(t, e) {
		if (
			((this.drawCommand && !this.material.dirty) ||
				(this.material.shaderSource.setDefines(
					Object.assign(this.material.shaderData.defines, this.geometry.defines)
				),
				this.material.dirty && (this.material.dirty = !1),
				(this.drawCommand = new G({
					vertexBuffer: this.geometry.vertBuffer,
					indexBuffer: this.geometry.indexBuffer,
					shaderData: this.material.shaderData,
					instances: this.instances,
					count: this.geometry.count,
					renderState: this.material.renderState,
					shaderSource: this.material.shaderSource,
					type: "render",
					light: this.material.light,
					modelMatrix: this.modelMatrix
				}))),
			t)
		) {
			if (!this.subCommands[e]) {
				const i = t.clone();
				t.update(),
					i.update(),
					i.dirty && (i.dirty = !1),
					(this.subCommands[e] = this.drawCommand.shallowClone(i));
			}
			return this.subCommands[e];
		}
		return this.drawCommand;
	}
	destroy() {
		this.geometry.destroy(), this.material.destroy();
	}
}
class gi {
	constructor(t = new ct(0, 0, 0), e = 0) {
		(this.center = t), (this.radius = e), (this.originCenter = this.center.clone()), (this.originRadius = e);
	}
	static fromPoints(t) {
		let e = new gi();
		if (!K(t) || 0 === t.length) return (e.center = ct.clone(ct.ZERO, e.center)), (e.radius = 0), e;
		const i = ct.clone(t[0], Ti),
			r = ct.clone(i, xi),
			n = ct.clone(i, yi),
			s = ct.clone(i, vi),
			a = ct.clone(i, bi),
			o = ct.clone(i, Si),
			c = ct.clone(i, wi),
			l = t.length;
		let h;
		for (h = 1; h < l; h++) {
			ct.clone(t[h], i);
			const e = i.x,
				l = i.y,
				u = i.z;
			e < r.x && ct.clone(i, r),
				e > a.x && ct.clone(i, a),
				l < n.y && ct.clone(i, n),
				l > o.y && ct.clone(i, o),
				u < s.z && ct.clone(i, s),
				u > c.z && ct.clone(i, c);
		}
		const u = ct.magnitudeSquared(ct.subtract(a, r, Ei)),
			f = ct.magnitudeSquared(ct.subtract(o, n, Ei)),
			d = ct.magnitudeSquared(ct.subtract(c, s, Ei));
		let m = r,
			p = a,
			g = u;
		f > g && ((g = f), (m = n), (p = o)), d > g && ((g = d), (m = s), (p = c));
		const x = Mi;
		(x.x = 0.5 * (m.x + p.x)), (x.y = 0.5 * (m.y + p.y)), (x.z = 0.5 * (m.z + p.z));
		let y = ct.magnitudeSquared(ct.subtract(p, x, Ei)),
			v = Math.sqrt(y);
		const b = _i;
		(b.x = r.x), (b.y = n.y), (b.z = s.z);
		const S = Ui;
		(S.x = a.x), (S.y = o.y), (S.z = c.z);
		const w = ct.midpoint(b, S, Li);
		let T = 0;
		for (h = 0; h < l; h++) {
			ct.clone(t[h], i);
			const e = ct.magnitude(ct.subtract(i, w, Ei));
			e > T && (T = e);
			const r = ct.magnitudeSquared(ct.subtract(i, x, Ei));
			if (r > y) {
				const t = Math.sqrt(r);
				(v = 0.5 * (v + t)), (y = v * v);
				const e = t - v;
				(x.x = (v * x.x + e * i.x) / t), (x.y = (v * x.y + e * i.y) / t), (x.z = (v * x.z + e * i.z) / t);
			}
		}
		return v < T ? (ct.clone(x, e.center), (e.radius = v)) : (ct.clone(w, e.center), (e.radius = T)), e;
	}
	static fromVertices(t, e = ct.ZERO, i = 3) {
		const r = new gi();
		if (!K(t) || 0 === t.length) return (r.center = ct.clone(ct.ZERO, r.center)), (r.radius = 0), r;
		(e = tt(e, ct.ZERO)), (i = tt(i, 3));
		const n = Ti;
		(n.x = t[0] + e.x), (n.y = t[1] + e.y), (n.z = t[2] + e.z);
		const s = ct.clone(n, xi),
			a = ct.clone(n, yi),
			o = ct.clone(n, vi),
			c = ct.clone(n, bi),
			l = ct.clone(n, Si),
			h = ct.clone(n, wi),
			u = t.length;
		let f;
		for (f = 0; f < u; f += i) {
			const i = t[f] + e.x,
				r = t[f + 1] + e.y,
				u = t[f + 2] + e.z;
			(n.x = i),
				(n.y = r),
				(n.z = u),
				i < s.x && ct.clone(n, s),
				i > c.x && ct.clone(n, c),
				r < a.y && ct.clone(n, a),
				r > l.y && ct.clone(n, l),
				u < o.z && ct.clone(n, o),
				u > h.z && ct.clone(n, h);
		}
		const d = ct.magnitudeSquared(ct.subtract(c, s, Ei)),
			m = ct.magnitudeSquared(ct.subtract(l, a, Ei)),
			p = ct.magnitudeSquared(ct.subtract(h, o, Ei));
		let g = s,
			x = c,
			y = d;
		m > y && ((y = m), (g = a), (x = l)), p > y && ((y = p), (g = o), (x = h));
		const v = Mi;
		(v.x = 0.5 * (g.x + x.x)), (v.y = 0.5 * (g.y + x.y)), (v.z = 0.5 * (g.z + x.z));
		let b = ct.magnitudeSquared(ct.subtract(x, v, Ei)),
			S = Math.sqrt(b);
		const w = _i;
		(w.x = s.x), (w.y = a.y), (w.z = o.z);
		const T = Ui;
		(T.x = c.x), (T.y = l.y), (T.z = h.z);
		const E = ct.midpoint(w, T, Li);
		let M = 0;
		for (f = 0; f < u; f += i) {
			(n.x = t[f] + e.x), (n.y = t[f + 1] + e.y), (n.z = t[f + 2] + e.z);
			const i = ct.magnitude(ct.subtract(n, E, Ei));
			i > M && (M = i);
			const r = ct.magnitudeSquared(ct.subtract(n, v, Ei));
			if (r > b) {
				const t = Math.sqrt(r);
				(S = 0.5 * (S + t)), (b = S * S);
				const e = t - S;
				(v.x = (S * v.x + e * n.x) / t), (v.y = (S * v.y + e * n.y) / t), (v.z = (S * v.z + e * n.z) / t);
			}
		}
		return S < M ? (ct.clone(v, r.center), (r.radius = S)) : (ct.clone(E, r.center), (r.radius = M)), r;
	}
	intersectPlane(t) {
		const e = this.center,
			i = this.radius,
			r = t.normal,
			n = ct.dot(r, e) + t.distance;
		return n < -i ? F.OUTSIDE : n < i ? F.INTERSECTING : F.INSIDE;
	}
	update(t) {
		$t.multiplyByPoint(t, this.originCenter, this.center),
			(this.radius = $t.getMaximumScale(t) * this.originRadius);
	}
	distanceToCamera(t) {
		return Math.max(0, ct.distance(this.center, t.position) - this.radius);
	}
}
const xi = new ct(),
	yi = new ct(),
	vi = new ct(),
	bi = new ct(),
	Si = new ct(),
	wi = new ct(),
	Ti = new ct(),
	Ei = new ct(),
	Mi = new ct(),
	_i = new ct(),
	Ui = new ct(),
	Li = new ct();
class Ri {
	constructor(t, e, i, r) {
		(this.index = i || 0),
			(this.attributes = e || void 0),
			(this.stepMode = R.Vertex),
			(this.dirty = !0),
			(this.label = t);
	}
	getBufferDes() {
		return [
			{ arrayStride: this.arrayStride, stepMode: this.stepMode, attributes: this.attributes.getGPUAttributes() }
		];
	}
	setAttributes(t) {
		(this.attributes = t), (this.dirty = !0);
	}
	bind(t, e) {
		if (this.dirty) {
			this.dirty = !1;
			const { arrayStride: e, typeArray: i } = this.attributes.getMeregeAtrributeValues();
			(this.arrayStride =
				e.reduce(function (t, e, i, r) {
					return t + e;
				}, 0) * i.BYTES_PER_ELEMENT),
				(this.buffer = $.createVertexBuffer(this.label, t, i));
		}
		e.setVertexBuffer(this.index, this.buffer.gpuBuffer);
	}
	destroy() {
		this.buffer.destroy();
	}
}
class Ci {
	constructor() {
		(this._attributes = new Map()), (this.shaderLocation = 0), (this.offset = 0);
	}
	getAttribute(t) {
		return this._attributes.get(t);
	}
	setAttribute(t) {
		this._attributes.has(t.name) ||
			((t.shaderLocation = this.shaderLocation),
			(this.shaderLocation += 1),
			(t.offset = this.offset),
			(this.offset += t.attributeByteSize),
			this._attributes.set(t.name, t));
	}
	getGPUAttributes() {
		const t = [];
		return (
			this._attributes.forEach((e) => {
				t.push(e.getGPUAttribute());
			}),
			t
		);
	}
	getMeregeAtrributeValues() {
		const t = [],
			e = [];
		return (
			this._attributes.forEach((i) => {
				t.push(i.itemSize), e.push(i.value);
			}),
			{ arrayStride: t, typeArray: this.interleaveTypedArray(Float32Array, t, ...e) }
		);
	}
	destroy() {
		this._attributes.forEach((t) => {
			t.destroy();
		});
	}
	interleaveTypedArray(t, e, ...i) {
		const r = i.reduce((t, e) => t + e.length, 0),
			n = new t(r),
			s = e.reduce((t, e) => t + e);
		for (let t = 0; t < r; t++) {
			let r = 0;
			for (let a = 0; a < e.length; a++) for (let o = 0; o < e[a]; o++) (n[t * s + r] = i[a][e[a] * t + o]), r++;
		}
		return n;
	}
}
class Di {
	constructor(t, e) {
		(this.label = t), (this.indices = e), (this.indexFormat = U.Uint16), (this.dirty = !0);
	}
	setIndices(t) {
		(this.indices = t), (this.dirty = !0);
	}
	bind(t, e) {
		this.dirty &&
			((this.dirty = !1),
			(this.buffer = $.createIndexBuffer(
				this.label,
				t,
				this.indexFormat == U.Uint16 ? new Uint16Array(this.indices) : new Uint32Array(this.indices)
			))),
			e.setIndexBuffer(this.buffer.gpuBuffer, this.indexFormat);
	}
	destroy() {
		this.buffer.destroy();
	}
}
function Ai(t, e, i) {
	i = tt(i, !1);
	const r = {},
		n = K(t),
		s = K(e);
	let a, o, c;
	if (n)
		for (a in t)
			t.hasOwnProperty(a) &&
				((o = t[a]),
				s && i && "object" == typeof o && e.hasOwnProperty(a)
					? ((c = e[a]), (r[a] = "object" == typeof c ? Ai(o, c, i) : o))
					: (r[a] = o));
	if (s) for (a in e) e.hasOwnProperty(a) && !r.hasOwnProperty(a) && ((c = e[a]), (r[a] = c));
	return r;
}
class zi {
	get defines() {
		return this._defines;
	}
	set defines(t) {
		(this.definesDirty = !0), (this._defines = Ai(t, this._defines, !1));
	}
	constructor(t) {
		(this.type = t.type || void 0),
			(this.boundingSphere = void 0),
			(this.dirty = !1),
			(this.definesDirty = !0),
			(this.locationIndex = 0),
			(this.attributes = new Ci()),
			(this.vertBuffer = new Ri(this.type, this.attributes, 0)),
			(this._defines = {}),
			(this.normals = []),
			(this.uvs = []),
			(this.positions = []),
			(this.indices = []),
			(this.tangents = []);
	}
	getAttribute(t) {
		return this.attributes.getAttribute(t);
	}
	setAttribute(t) {
		this._defines[t?.name?.concat("Location")] ||
			((this._defines[t?.name?.concat("Location")] = this.locationIndex), (this.locationIndex += 1)),
			this.attributes.setAttribute(t);
	}
	setIndice(t) {
		(this.indices = t),
			this.indexBuffer || (this.indexBuffer = new Di(this.type + "IndexBuffer")),
			this.indexBuffer.setIndices(t);
	}
	update(t) {}
	computeBoundingSphere(t) {
		this.boundingSphere = gi.fromVertices(this.positions, new ct(0, 0, 0), 3);
	}
	calculateTangents() {
		if (!this.normals || !this.uvs) throw "Set normal and uv before calculation.";
		const { indices: t, positions: e, normals: i, uvs: r } = this,
			n = new ct(),
			s = new ct(),
			a = new ct(),
			o = new wt(),
			c = new wt(),
			l = new wt(),
			h = new ct(),
			u = new ct(),
			f = new ct(),
			d = new ct(),
			m = new ct(),
			p = this.indices.length,
			g = t ? t.length / 3 : e.length / 3,
			x = new Array(p),
			y = new Array(p);
		this.tangents = [];
		for (let t = 0; t < p; t++) (x[t] = new rt()), (y[t] = new ct());
		for (let i = 0; i < g; i++) {
			let p = 3 * i,
				g = 3 * i + 1,
				v = 3 * i + 2;
			t && ((p = t[p]), (g = t[g]), (v = t[v]));
			const b = n.set(e[p], e[p + 1], e[p + 2]),
				S = s.set(e[g], e[g + 1], e[g + 2]),
				w = a.set(e[v], e[v + 1], e[v + 2]),
				T = o.set(r[p], r[p + 1]),
				E = c.set(r[g], r[g + 1]),
				M = l.set(r[v], r[v + 1]);
			ct.subtract(S, b, h), ct.subtract(w, b, u);
			const _ = E.x - T.x,
				U = M.x - T.x,
				L = E.y - T.y,
				R = M.y - T.y,
				C = 1 / (_ * R - U * L);
			ct.multiplyByScalar(h, R * C, f),
				ct.multiplyByScalar(u, L * C, m),
				ct.subtract(f, m, f),
				ct.multiplyByScalar(u, _ * C, d),
				ct.multiplyByScalar(h, U * C, m),
				ct.subtract(d, m, d);
			let D = x[p];
			D.set(D.x + f.x, D.y + f.y, D.z + f.z, 1),
				(D = x[g]),
				D.set(D.x + f.x, D.y + f.y, D.z + f.z, 1),
				(D = x[v]),
				D.set(D.x + f.x, D.y + f.y, D.z + f.z, 1),
				y[p].add(d),
				y[g].add(d),
				y[v].add(d);
		}
		for (let t = 0; t < p; t++) {
			const e = new ct(i[3 * t], i[3 * t + 1], i[3 * t + 2]),
				r = y[t],
				n = x[t];
			f.set(n.x, n.y, n.z), ct.cross(f, r, m);
			const s = ct.dot(m, e) > 0 ? 1 : -1;
			ct.multiplyByScalar(e, ct.dot(f, e), m),
				ct.subtract(f, m, f),
				ct.normalize(f, f),
				n.set(f.x, f.y, f.z, s),
				this.tangents.push(f.x, f.y, f.z, s);
		}
	}
	destroy() {
		this?.indexBuffer.destroy(),
			this.vertBuffer.destroy(),
			this.attributes.destroy(),
			(this.normals = null),
			(this.uvs = null),
			(this.positions = null),
			(this.indices = null),
			(this.tangents = null),
			(this.boundingSphere = void 0);
	}
}
const Oi = /#([^\s]*)(\s*)/gm;
function Ii(t, ...e) {
	const i = [];
	let r = { frag: "", elseIsValid: !1, expression: !0 },
		n = 1;
	for (let s = 0; s < t.length; ++s) {
		const a = t[s],
			o = a.matchAll(Oi);
		let c = 0,
			l = !1;
		for (const t of o) {
			switch (((r.frag += a.substring(c, t.index)), t[1])) {
				case "if":
					if (t.index + t[0].length != a.length)
						throw new Error("#if must be immediately followed by a template expression (ie: ${value})");
					(l = !0), i.push(r), n++, (r = { frag: "", elseIsValid: !0, expression: !!e[s] });
					break;
				case "elif":
					if (t.index + t[0].length != a.length)
						throw new Error("#elif must be immediately followed by a template expression (ie: ${value})");
					if (!r.elseIsValid) throw new Error("#elif not preceeded by an #if or #elif");
					(l = !0),
						r.expression && i.length != n && i.push(r),
						(r = { frag: "", elseIsValid: !0, expression: !!e[s] });
					break;
				case "else":
					if (!r.elseIsValid) throw new Error("#else not preceeded by an #if or #elif");
					r.expression && i.length != n && i.push(r), (r = { frag: t[2], elseIsValid: !1, expression: !0 });
					break;
				case "endif":
					if (!i.length) throw new Error("#endif not preceeded by an #if");
					const o = i.length == n ? i.pop() : r;
					(r = i.pop()), n--, o.expression && (r.frag += o.frag), (r.frag += t[2]);
					break;
				default:
					r.frag += t[0];
			}
			c = t.index + t[0].length;
		}
		c != a.length && (r.frag += a.substring(c, a.length)), !l && e.length > s && (r.frag += e[s]);
	}
	if (i.length) throw new Error("Mismatched #if/#endif count");
	return r.frag;
}
const Ni = {
	light: function (t) {
		return Ii` 
    struct ReflectedLight {
        ambient: vec3<f32>,
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
    struct Geometry {
        position: vec3<f32>,
        normal: vec3<f32>,
        viewDir: vec3<f32>,
        dotNV:f32,
        #if ${t.USE_CLEARCOAT}
            vec3 clearcoatNormal;
        #endif
    };

    #if ${t.spotLightsCount > 0}
        struct SpotLight {
            position: vec3<f32>,
            distance: f32,
            direction: vec3<f32>,
            coneCos: f32,
            color: vec3<f32>,
            penumbraCos: f32,
            decay: f32,
        };
        fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->ReflectedLight{
                var direction:vec3<f32> = spotLight.position - worldPos;
                var lightColor:ReflectedLight;
                let lightDistance:f32 = length(direction);
                direction = normalize(direction);
                let angleCos:f32 = dot( direction, spotLight.direction );
                let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, spotLight.decay), 0.0, 1.0);
                let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
                let decayTotal:f32 = decay * spotEffect;
                let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;
                lightColor.directDiffuse= spotLight.color * d;
                let halfDir:vec3<f32> = normalize( V + direction );
                let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;
                lightColor.directSpecular= spotLight.color * s;
                return lightColor;
        }
        fn getSpotLightIncidentLight(spotLight:SpotLight, geometry:Geometry)->IncidentLight {
            var incidentLight:IncidentLight;
            let lVector:vec3<f32> = spotLight.position - geometry.position;
            incidentLight.direction = normalize( lVector );
    
            let lightDistance:f32 = length( lVector );
            let angleCos:f32 = dot( incidentLight.direction, spotLight.direction );
    
            let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );
            let decayEffect:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);
    
            incidentLight.color=spotLight.color*spotEffect * decayEffect; 
            return  incidentLight;
        }

    #endif 

    #if ${t.pointLightsCount > 0}
        struct PointLight {
            position: vec3<f32>,
            distance: f32,
            color: vec3<f32>,
            decay: f32,
        };
        fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->ReflectedLight{
            var lightColor:ReflectedLight;
            var direction:vec3<f32> = worldPos - pointLight.position;
            let dist:f32 = length( direction );
            direction = normalize(direction);
            let decay = clamp(1.0 - pow(dist / pointLight.distance, pointLight.decay), 0.0, 1.0);
    
            let d =  max( dot( N, -direction ), 0.0 ) * decay;
            lightColor.directDiffuse = pointLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;
            lightColor.directSpecular = pointLight.color * s;
            return lightColor;
        }
        fn getPointLightIncidentLight(pointLight:PointLight, geometry:Geometry)->IncidentLight {
            var incidentLight:IncidentLight;
            let lVector:vec3<f32> = pointLight.position-geometry.position;
            incidentLight.direction= normalize( lVector );
            let lightDistance:f32 = length( lVector );
            // let weight:f32=1.0 - pow(lightDistance/pointLight.distance, 4.0);
            incidentLight.color=pointLight.color*clamp(1.0 - pow(lightDistance/pointLight.distance, 4.0), 0.0, 1.0);
            return incidentLight;
        }
    #endif
    #if ${t.dirtectLightsCount > 0}
        struct DirectionalLight {
            direction: vec3<f32>,
            color: vec3<f32>,
        };
        fn getDirectLightInfo(directionalLight:DirectionalLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->ReflectedLight{
            var lightColor:ReflectedLight;
            let d:f32 = max(dot(N, -directionalLight.direction), 0.0);
            lightColor.directDiffuse += directionalLight.color * d;
    
            let halfDir:vec3<f32> = normalize( V - directionalLight.direction );
            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );
            lightColor.directSpecular += directionalLight.color * s;
            return lightColor;
        }
        fn getDirectionalDirectLightIncidentLight(directionalLight:DirectionalLight,geometry:Geometry)->IncidentLight {
            var incidentLight:IncidentLight;
            incidentLight.color = directionalLight.color;
            incidentLight.direction = normalize(directionalLight.direction);
            return incidentLight;         
        }
    #endif

    #if ${t.openShadow} 
        struct LightInfo {
            direction: vec3<f32>,
        };
        
        fn linearizeDepth(depth: f32, near: f32, far: f32)->f32 {
            return 2 * (near * far) / (far + near - depth * (far - near));
        }

        fn getShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, lightPos:vec4<f32>, geometry:Geometry, lightInfo:LightInfo, index:u32, isPerspectiveCamera: bool, near: f32, far: f32)->f32 {
            var visibility = 0.0;
            var projectPos: vec3<f32> = lightPos.xyz / lightPos.w;
            var shadowPos: vec3<f32> = vec3(projectPos.xy * vec2(0.5, -0.5) + vec2(0.5), projectPos.z);
            var d:f32 = dot(geometry.normal, -lightInfo.direction);
            var bias = max(0.012 * (1.0 - d), 0.001) / lightPos.w;
            let oneOverShadowDepthTextureSize = 1.0 / 1024.0;
            // var depth = select(shadowPos.z, (linearizeDepth(shadowPos.z, near, far) - near) / (far- near), isPerspectiveCamera);
            var depth = shadowPos.z;
            for (var y = -1; y <= 1; y++) {
                for (var x = -1; x <= 1; x++) {
                    let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;
                
                    visibility += textureSampleCompare(
                        shadowMapArray, shadowSampler,
                        shadowPos.xy + offset, index, depth - bias);
                }
            }
            visibility /= 9.0;
            var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;
            if (!inFrustum || depth > 1.0) {
                visibility = 1.0;
            }
            return visibility;
        }
    #endif

    #if ${t.ambientLightCount || t.spotLightsCount || t.pointLightsCount || t.dirtectLightsCount}
        struct LightUniforms{
            #if ${t.ambientLightCount}
                ambient:vec4<f32>,
            #endif
            #if ${t.spotLightsCount}
                spotLights:array<SpotLight,${t.spotLightsCount}>,
            #endif
            #if ${t.pointLightsCount}
                pointLights:array<PointLight,${t.pointLightsCount}>,
            #endif
            #if ${t.dirtectLightsCount}
                dirtectLights:array<DirectionalLight,${t.dirtectLightsCount}>,
            #endif
        }
        @group(2) @binding(${t.lightBinding}) var<storage, read> lightUniforms: LightUniforms;

        #if ${t.openShadow}
            #if ${t.spotLightShadowMapsCount}
                struct SpotLightShadow {
                    shadowCameraVPMatrixArray: mat4x4<f32>,
                    shadowCameraNear: f32,
                    shadowCameraFar: f32
                }
            #endif
            #if ${t.pointLightShadowMapsCount}
                struct PointLightShadow {
                    shadowCameraVPMatrixArray: mat4x4<f32>,
                    shadowCameraNear: f32,
                    shadowCameraFar: f32
                }
            #endif
            #if ${t.directLightShadowMapsCount}
                struct DirectLightShadow {
                    shadowCameraVPMatrixArray: mat4x4<f32>,
                }
            #endif
            struct ShadowUniforms{
                #if ${t.spotLightShadowMapsCount}
                    spotLightShadows:array<SpotLightShadow,${t.spotLightShadowMapsCount}>,
                #endif
                #if ${t.pointLightShadowMapsCount}
                    pointLightShadows:array<PointLightShadow,${t.pointLightShadowMapsCount}>,
                #endif
                #if ${t.directLightShadowMapsCount}
                    directLightShadows:array<DirectLightShadow,${t.directLightShadowMapsCount}>,
                #endif
            }
            @group(2) @binding(${t.shadowBinding}) var<storage, read> shadowUniforms: ShadowUniforms;

            #if ${t.spotLightShadowMapTextureArrayBinding}
                @group(2) @binding(${
					t.spotLightShadowMapTextureArrayBinding
				}) var spotLightShadowMapTextureArray: texture_depth_2d_array;
            #endif
            #if ${t.pointLightShadowMapTextureArrayBinding}
                @group(2) @binding(${
					t.pointLightShadowMapTextureArrayBinding
				}) var pointLightShadowMapTextureArray: texture_depth_2d_array;
            #endif
            #if ${t.directLightShadowMapTextureArrayBinding}
                @group(2) @binding(${
					t.directLightShadowMapTextureArrayBinding
				}) var directLightShadowMapTextureArray: texture_depth_2d_array;
            #endif
            @group(2) @binding(${t.shadowSamplerBinding}) var shadowSampler: sampler_comparison;
        #endif

    #endif
    #if ${t.materialPhong}
        fn parseLights(geometry:Geometry,shininess:f32)->ReflectedLight {
    #elif ${t.materialPbr}
        fn parseLights(geometry:Geometry,material:PhysicalMaterial)->ReflectedLight{
    #endif
        var reflectedLight:ReflectedLight;
        var shadowValue:f32 = 1.0;
        #if ${t.ambientLightCount > 0}
            //处理环境光
            var ambientColor:vec3<f32> = lightUniforms.ambient.xyz * lightUniforms.ambient.w;
            reflectedLight.ambient += ambientColor;
        #endif

        #if ${t.spotLightsCount > 0}
            //处理聚光灯
            var spotLight:SpotLight;
            for (var k = 0u; k < ${t.spotLightsCount}; k = k + 1u) {
                spotLight= lightUniforms.spotLights[k];
                #if ${t.materialPhong && t.openShadow && t.spotLightShadowMapsCount}
                    if k < textureNumLayers(spotLightShadowMapTextureArray) {
                        var spotLightShadow:SpotLightShadow = shadowUniforms.spotLightShadows[k];
                        var lightPos: vec4<f32> = spotLightShadow.shadowCameraVPMatrixArray * vec4<f32>(geometry.position,1.0);
                        var lightInfo:LightInfo;
                        lightInfo.direction = normalize(geometry.position - spotLight.position);
                    
                        shadowValue = getShadowValue(spotLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, k, true,
                            spotLightShadow.shadowCameraNear, spotLightShadow.shadowCameraFar);
                    }
                    spotLight.color *= shadowValue;
                #endif
                #if ${t.materialPhong}
                    let spReflectedLight=getSpotLightInfo(spotLight,geometry.position,shininess,geometry.normal,geometry.viewDir);
                #elif ${t.materialPbr}
                    let incidentLight=getSpotLightIncidentLight(spotLight,geometry);
                    let spReflectedLight=direct_Physical(incidentLight, geometry, material);
                #endif

                reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=spReflectedLight.directSpecular;
            }
        #endif
        #if ${t.pointLightsCount > 0}
            //处理点光源
            var pointLight:PointLight;
            for (var j= 0u; j < ${t.pointLightsCount};j = j + 1u) {
                pointLight = lightUniforms.pointLights[j];
                #if ${t.materialPhong && t.openShadow && t.pointLightShadowMapsCount}
                    if j < textureNumLayers(pointLightShadowMapTextureArray) {
                        var pointLightShadow:PointLightShadow = shadowUniforms.pointLightShadows[j];
                        var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrixArray * vec4<f32>(geometry.position,1.0);
                        var lightInfo:LightInfo;
                        lightInfo.direction = normalize(geometry.position - pointLight.position);

                        shadowValue = getShadowValue(pointLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, j, true,
                             pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar);
                    }
                    pointLight.color *= shadowValue;
                #endif
                #if ${t.materialPhong}
                    let poiReflectedLight=getPointLightInfo(pointLight,geometry.position,shininess,geometry.normal,geometry.viewDir);
                #elif ${t.materialPbr}
                   let incidentLight=getPointLightIncidentLight(pointLight,geometry);
                   let poiReflectedLight=direct_Physical(incidentLight, geometry, material);
                #endif

                reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
            }
        #endif
        #if ${t.dirtectLightsCount > 0}
            //处理方向光
            var directionalLight:DirectionalLight;
            for (var i= 0u; i <${t.dirtectLightsCount}; i = i + 1u) {
                directionalLight = lightUniforms.dirtectLights[i];
                #if ${t.materialPhong && t.openShadow && t.directLightShadowMapsCount}
                    if i < textureNumLayers(directLightShadowMapTextureArray) {
                        var directLightShadow:DirectLightShadow = shadowUniforms.directLightShadows[i];
                        var lightPos: vec4<f32> = directLightShadow.shadowCameraVPMatrixArray * vec4<f32>(geometry.position,1.0);
                        var lightInfo:LightInfo;
                        lightInfo.direction = directionalLight.direction;
                            
                        shadowValue = getShadowValue(directLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, i, false, 0, 0);
                    }
                    directionalLight.color *= shadowValue;
                #endif
            
                #if ${t.materialPhong}
                    let dirReflectedLight=getDirectLightInfo(directionalLight,shininess,geometry.normal,geometry.viewDir);
                #elif ${t.materialPbr}
                    let incidentLight=getDirectionalDirectLightIncidentLight(directionalLight,geometry);
                    let dirReflectedLight=direct_Physical(incidentLight, geometry, material);
                #endif

                reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
            }
        #endif
        return reflectedLight;
    }`;
	},
	brdf: function (t) {
		return Ii`
        #if ${t.USE_SHEEN}
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
        fn BRDF_Lambert(diffuseColor:vec3<f32>)->vec3<f32> {

            return RECIPROCAL_PI * diffuseColor;

        } // validated

        fn F_Schlick( f0:vec3<f32>, dotVH:f32 )->vec3<f32> {

            // Original approximation by Christophe Schlick '94
            // float fresnel = pow( 1.0 - dotVH, 5.0 );

            // Optimized variant (presented by Epic at SIGGRAPH '13)
            // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
           let fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
           return ( 1.0 - f0 ) * fresnel + f0;

        } // validated

        fn Schlick_to_F0(f:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {
            let x:f32 = clamp( 1.0 - dotVH, 0.0, 1.0 );
            let x2:f32 = x * x;
            let x5:f32 = clamp( x * x2 * x2, 0.0, 0.9999 );

            return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
        }
        fn V_GGX_SmithCorrelated( alpha:f32, dotNL:f32,dotNV:f32 )->f32 {

            let a2 :f32= pow2( alpha );

            let gv:f32 = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
            let gl:f32 = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

            return 0.5 / max((gv + gl), 0.000000001 );

        }
        fn D_GGX( alpha:f32, dotNH:f32 )->f32 {

            let a2:f32 = pow2( alpha );

            let denom:f32 = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

            return RECIPROCAL_PI * a2 / pow2( denom );

        }
        fn BRDF_GGX( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, f0:vec3<f32>,  roughness:f32 )->vec3<f32> {

            let alpha:f32 = pow2( roughness ); // UE4's roughness

            let halfDir = normalize( lightDir + viewDir );

            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let dotVH:f32 = saturate( dot( lightDir, halfDir ) );

            let F = F_Schlick( f0,  dotVH );

            let V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

            let D = D_GGX( alpha, dotNH );

            return F * ( V * D );

        }
        fn direct_Physical( directLight:IncidentLight, geometry:Geometry,material:PhysicalMaterial)->ReflectedLight {
            var reflectedLight:ReflectedLight;
            let dotNL:f32 = saturate(dot( geometry.normal,geometry.viewDir));
            let irradiance:vec3<f32> = dotNL * directLight.color*3.1415926;
            reflectedLight.directSpecular = irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.roughness );
            reflectedLight.directDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );
            return reflectedLight;
        }
  `;
	},
	phongFunction: function (t) {
		return "\n    fn G_BlinnPhong_Implicit( )->f32 {\n\n        // geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n        return 0.25;\n\n    }\n    fn D_BlinnPhong( shininess:f32, dotNH:f32 )->f32 {\n\n        return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow(dotNH, shininess);\n\n    }\n    fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {\n\n        let  halfDir = normalize( lightDir + viewDir );\n\n        let  dotNH:f32 = saturate( dot( normal, halfDir ) );\n        let dotVH:f32 = saturate( dot( viewDir, halfDir ) );\n\n        let F = F_Schlick( specularColor, 1.0, dotVH );\n\n        let G:f32 = G_BlinnPhong_Implicit( );\n\n        let D = D_BlinnPhong( shininess, dotNH );\n\n        return F * ( G * D );\n\n    } \n    fn RE_Direct_BlinnPhong(  directLight:IncidentLight,geometry:GeometricContext, material:BlinnPhongMaterial )->ReflectedLight{\n        var reflectedLight:ReflectedLight; \n        let dotNL:f32 = saturate(dot(geometry.normal, directLight.direction));\n        let irradiance:vec3<f32> = dotNL*directLight.color;\n\n        reflectedLight.directDiffuse= irradiance * BRDF_Lambert( material.diffuseColor );\n\n        reflectedLight.directSpecular= irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n        return reflectedLight;\n    }\n    fn RE_IndirectDiffuse_BlinnPhong( irradiance:vec3<f32>, geometry:GeometricContext, material:BlinnPhongMaterial)->ReflectedLight {\n        var reflectedLight:ReflectedLight; \n        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n        return reflectedLight;\n    }\n    ";
	},
	phongUtils: function (t) {
		return "\n   struct BlinnPhongMaterial {\n        diffuseColor:vec3<f32>,\n        specularColor:vec3<f32>,\n        specularShininess:f32,\n        specularStrength:f32,\n    };\n    const RECIPROCAL_PI:f32= 0.3183098861837907;\n   fn pow2( x:f32 )->f32 { return x*x; }\n   fn pow3( x:f32 )->f32 { return x*x*x; }\n   fn pow4(x:f32 )->f32 { let x2 = x*x; return x2*x2; }\n   fn max3( v:vec3<f32> )->f32 { return max( max( v.x, v.y ), v.z ); }\n   fn average(v:vec3<f32> )->f32 { \n       let result=vec3<f32>( 0.3333333,  0.3333333, 0.3333333);\n       return dot( v,result ); \n   }\n   ";
	},
	lightCommon: function (t) {
		return Ii`
    struct ReflectedLight {
        directDiffuse:vec3<f32>,
        directSpecular:vec3<f32>,
        indirectDiffuse:vec3<f32>,
        indirectSpecular:vec3<f32>,
    };
    struct Geometry {
        position: vec3<f32>,
        normal: vec3<f32>,
        viewDir: vec3<f32>,
        #if ${t.USE_CLEARCOAT}
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
 `;
	},
	pbrStruct: function (t) {
		return Ii`
        struct MaterialUniform{

            modelMatrix: mat4x4<f32>,
    
            diffuse:vec3<f32>,
    
            opacity:f32,
    
            normalMatrix: mat3x3<f32>,
    
            emissive:vec3<f32>,
    
            roughness:f32,
    
            metalness:f32,
    
            #if ${t.TONE_MAPPING}
                toneMappingExposure:f32,
            #endif
           
            #if ${t.SPECULAR}
    
                 specularColor:vec3<f32>,
    
                 specularIntensity:f32,
            #endif
            
            #if ${t.USE_SHEEN}
    
                sheenColor:vec3<f32>,
    
                sheenRoughness:f32,
            #endif

            #if ${t.USE_TRANSMISSION}
    
                attenuationColor:vec3<f32>,
    
                transmission:f32,
    
                transmissionSamplerSize:vec2<f32>,
    
                thickness:f32,
    
                attenuationDistance:f32,
                
            #endif

            #if ${t.USE_SKINNING}
    
                bindMatrix:mat4x4<f32>,
    
                bindMatrixInverse:mat4x4<f32>,
    
                boneTextureSize:u32,
            #endif

            #if ${t.USE_NORMALTEXTURE}
                 normalScale:vec2<f32>,
            #endif
    
            #if ${t.IOR}
                ior:f32,
            #endif
    
            #if ${t.USE_CLEARCOAT}
    
                #if ${t.USE_CLEARCOAT_NORMALTEXTURE}
                    clearcoatNormalScale:vec2<f32>,
                #endif
    
                 clearcoat:f32,
    
                 clearcoatRoughness:f32,
            #endif
    
            #if ${t.USE_IRIDESCENCE}
                iridescence:f32,
    
                iridescenceIOR:f32,
    
                iridescenceThicknessMinimum:f32,
    
                iridescenceThicknessMaximum:f32,
    
            #endif

            #if ${t.USE_AOTEXTURE}
                 aoTextureIntensity:f32,
            #endif

            #if ${t.USE_LIGHTTEXTURE}
                 lightTextureIntensity:f32,
            #endif
    
            #if ${t.USE_ENVTEXTURE}
                envTextureIntensity:f32,
    
                flipEnvTexture:f32,
            #endif

            #if ${t.USE_BUMPTEXTURE}
                bumpScale:f32;
            #endif

            #if ${t.USE_DISPLACEMENTTEXTURE}
    
                displacementScale:f32,
    
                displacementBias:f32,
            #endif
            
            #if ${t.USE_MORPHTARGETS}
    
                morphTargetBaseInfluence:f32,
    
                #if ${t.MORPHTARGETS_TEXTURE} 
    
                    morphTargetsTextureSize:vec2<u32>,
    
                    MORPHTARGETS_COUNT:u32,
    
                #endif
    
                morphTargetInfluences:array<f32>,
                    
            #endif
        }

   `;
	},
	pbrFunction: function (t) {
		return Ii`

    #if ${t.DITHERING}
        fn dithering(color:vec3<f32> )->vec3<f32> {
            let grid_position:f32 = rand( gl_FragCoord.xy );
            let dither_shift_RGB:vec3<f32> = vec3<f32>( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
            dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
            return color + dither_shift_RGB;
        }
    #endif

    #if ${t.USE_IRIDESCENCE}
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

    #if ${t.USE_SHEEN}
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

    #if ${t.USE_IRIDESCENCE}
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
    fn DFGApprox( specularColor:vec3<f32>, roughness:f32,dotNV:f32 )->vec3<f32> {
        const c0:vec4<f32> = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );
        let c1:vec4<f32> = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );
        let r:vec4<f32> = roughness * c0 + c1;
        let a004:f32 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
        let fab:vec2<f32> = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;
        return specularColor * fab.x + fab.y;
    }
    fn EnvironmentBRDF( normal:vec3<f32>,viewDir:vec3<f32>,specularColor:vec3<f32>, specularF90:f32,roughness:f32 )->vec3<f32> {
        let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );
        return specularColor * fab.x + specularF90 * fab.y;
    }


    fn computeSpecularOcclusion( dotNV:f32, ambientOcclusion:f32, roughness:f32 )->f32 {
        return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
    }
    #if ${t.USE_TRANSMISSION}

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

    #if ${t.USE_BUMPTEXTURE}
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
    #if ${(!t.USE_TANGENT && t.TANGENTSPACE_NORMALTEXTURE) || t.USE_CLEARCOAT_NORMALTEXTURE}
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
   #if ${t.USE_IRIDESCENCE}
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscatteringIridescence( normal:vec3<f32>, viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, iridescence:f32,iridescenceF0:vec3<f32>, roughness:f32 )->MultiAndSingleScatter {
   #else
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscattering( normal:vec3<f32>,viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, roughness:f32)->MultiAndSingleScatter {
   #endif
   let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );

   var multiAndSingleScatter:MultiAndSingleScatter;

   #if ${t.USE_IRIDESCENCE}
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
       #if ${t.USE_CLEARCOAT}
           let dotNLcc:f32 = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
           let ccIrradiance:vec3<f32> = dotNLcc * directLight.color;
           clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif

       #if ${t.USE_SHEEN}
           sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
       #endif

       #if ${t.USE_IRIDESCENCE}
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
       #if ${t.USE_CLEARCOAT}
           clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif
       #if ${t.USE_SHEEN}
           sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
       #endif
       var singleScattering:vec3<f32>;
       var multiScattering:vec3<f32>;
       let cosineWeightedIrradiance:vec3<f32> = irradiance * RECIPROCAL_PI;
       var tempMultiAndSingleScatter:MultiAndSingleScatter;
       #if ${t.USE_IRIDESCENCE}
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
	pbrTexture: function (t) {
		return Ii`        
            #if ${t.USE_BUMPTEXTURE}
                @group(0) @binding(${t.bumpTextureBinding}) var bumpTexture: texture_2d<f32>;
            #endif
            #if ${t.USE_TRANSMISSION}
                #if ${t.USE_TRANSMISSIONTEXTURE}
                    @group(0) @binding(${t.transmissionTextureBinding}) var transmissionTexture: texture_2d<f32>;
                #endif
                #if ${t.USE_THICKNESSTEXTURE}
                    @group(0) @binding(${t.thicknessTextureBinding}) var thicknessTexture: texture_2d<f32>;
                #endif
                @group(0) @binding(${t.transmissionSamplerTextureBinding}) var transmissionSamplerTexture: texture_2d<f32>;
            #endif
            #if ${t.USE_ENVTEXTURE}
                @group(0) @binding(${t.envTextureBinding}) var envTexture: texture_cube<f32>;
            #endif
            #if ${t.USE_NORMALTEXTURE}
                @group(0) @binding(${t.normalTextureBinding}) var normalTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_CLEARCOATTEXTURE}
                @group(0) @binding(${t.clearcoatTextureBinding}) var clearcoatTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                @group(0) @binding(${t.clearcoatRclearcoatRoughnessTextureBinding}) var clearcoatRoughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_CLEARCOAT_NORMALTEXTURE}
                @group(0) @binding(${t.clearcoatNormalTextureBinding}) var clearcoatNormalTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_IRIDESCENCETEXTURE}
                @group(0) @binding(${t.iridescenceTextureBinding}) var iridescenceTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_IRIDESCENCE_THICKNESSTEXTURE}
                @group(0) @binding(${t.iridescenceThicknessTextureBinding}) var iridescenceThicknessTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_ROUGHNESSTEXTURE}
                @group(0) @binding(${t.roughnessTextureBinding}) var roughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${t.USE_METALNESSTEXTURE}
                @group(0) @binding(${t.metalnessTextureBinding}) var metalnessTexture: texture_2d<f32>;
            #endif

            #if ${t.SPECULAR}
                #if ${t.USE_SPECULARINTENSITYTEXTURE}
                    @group(0) @binding(${t.specularIntensityTextureBinding}) var specularIntensityTexture: texture_2d<f32>;
                #endif

                #if ${t.USE_SPECULARCOLORTEXTURE}
                    @group(0) @binding(${t.specularColorTextureBinding}) var specularColorTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${t.USE_SHEEN}
                #if ${t.USE_SHEENCOLORTEXTURE}
                    @group(0) @binding(${t.sheenColorTextureBinding}) var sheenColorTexture: texture_2d<f32>;
                #endif
                #if ${t.USE_SHEENROUGHNESSTEXTURE}
                    @group(0) @binding(${t.sheenRoughnessTextureBinding}) var sheenRoughnessTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${t.USE_TEXTURE}
                @group(0) @binding(${t.baseSamplerBinding}) var baseSampler: sampler;
                @group(0) @binding(${t.baseTextureBinding}) var baseTexture: texture_2d<f32>;
            #endif

            #if ${t.USE_ALPHATEXTURE}
                @group(0) @binding(${t.alphaTextureBinding}) var alphaTexture: texture_2d<f32>;
            #endif

            #if ${t.USE_AOTEXTURE}
                @group(0) @binding(${t.aoTextureBinding}) var aoTexture: texture_2d<f32>;
                
            #endif
            #if ${t.USE_LIGHTTEXTURE}
                @group(0) @binding(${t.lightTextureBinding}) var lightTexture: texture_2d<f32>;
            #endif

            #if ${t.USE_EMISSIVETEXTURE}
                @group(0) @binding(${t.emissiveTextureBinding}) var emissiveTexture: texture_2d<f32>;
            #endif
     `;
	},
	pbrUtils: function (t) {
		return Ii`
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
	environment: function (t) {
		return Ii`
   #if ${t.ENVTEXTURE_TYPE_CUBE_UV}
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
   #if ${t.USE_ENVTEXTURE}
        fn getIBLIrradiance( normal:vec3<f32>,baseSampler:sampler,viewMatrix:mat4x4<f32>)->vec3<f32> {
            #if ${t.ENVTEXTURE_TYPE_CUBE_UV}
                let worldNormal:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
                let envTextureColor:vec4<f32> = textureCubeUV( envTexture,baseSampler, worldNormal, 1.0 );
                return PI * envTextureColor.rgb * materialUniform.envTextureIntensity;
            #else
                return vec3<f32>( 0.0 );
            #endif
        }
        fn getIBLRadiance( viewDir:vec3<f32>,baseSampler:sampler,viewMatrix:mat4x4<f32>,normal:vec3<f32>, roughness:f32 )->vec3<f32> {
            #if ${t.ENVTEXTURE_TYPE_CUBE_UV}
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
	blinn_phong: function (t) {
		return "\n       fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n        var direction:vec3<f32> = worldPos - pointLight.position;\n        let dist:f32 = length( direction );\n        direction = normalize(direction);\n        let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);\n\n        let d =  max( dot( N, -direction ), 0.0 ) * decay;\n        color += pointLight.color * d;\n\n        let halfDir:vec3<f32> = normalize( V - direction );\n        let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;\n        color += pointLight.color * s;\n        return color;\n       }\n       fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n            var direction:vec3<f32> = spotLight.position - worldPos;\n            let lightDistance:f32 = length(direction);\n            direction = normalize(direction);\n            let angleCos:f32 = dot( direction, -spotLight.direction );\n            let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);\n            let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\n            let decayTotal:f32 = decay * spotEffect;\n            let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;\n            color += spotLight.color * d;\n            let halfDir:vec3<f32> = normalize( V + direction );\n            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;\n            color += spotLight.color * s;\n            return color;\n       }\n    struct DirectionalLight {\n        direction: vec3<f32>,\n        color: vec3<f32>,\n    };\n      fn getDirectLightInfo(directionalLight:DirectionalLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n        let d:f32 = max(dot(N, -directionalLight.direction), 0.0);\n        color += directionalLight.color * d;\n\n        let halfDir:vec3<f32> = normalize( V - directionalLight.direction );\n        let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );\n        color += directionalLight.color * s;\n        return color;\n       }\n    ";
	},
	getNormal: function (t) {
		return Ii`
      fn getNormal(input:VertInput)->vec3<f32>{
        var normal:vec3<f32>;
        #if ${t.HAS_NORMAL}
            normal= input.normal;
        #else
          let pos_dx = dpdx(input.worldPos);
          let pos_dy = dpdy(input.worldPos);
          normal = normalize( cross(pos_dy, pos_dx) );
        #endif
        return normal*(f32(input.frontFacing) * 2.0 - 1.0);
      }
    `;
	},
	getTBN: function (t) {
		return Ii`
        fn getTBN(input:VertInput)->mat3x3<f32>{
        #if ${t.HAS_TANGENT}
            let tbn:mat3x3<f32> = input.tbn;
        #else
            let normal:vec3<f32> =normalize(input.normal);
            let uv:vec2<f32> = select(-input.uv,input.uv,input.frontFacing);
              // ref: http://www.thetenthplanet.de/archives/1180
              // get edge vectors of the pixel triangle
              let dp1:vec3<f32> =  vec3<f32>(dpdx(input.worldPos.x), dpdx(input.worldPos.y), dpdx(input.worldPos.z));
              let dp2:vec3<f32> =  vec3<f32>(dpdy(input.worldPos.x), dpdy(input.worldPos.y), dpdy(input.worldPos.z));
              let duv1:vec2<f32> = dpdx(uv);
              let duv2:vec2<f32> = dpdy(uv);

              // solve the linear system
              let dp2perp:vec3<f32> = cross(dp2, normal);
              let dp1perp:vec3<f32> = cross(normal, dp1);
              let tangent:vec3<f32> = dp2perp * duv1.x + dp1perp * duv2.x;
              let binormal:vec3<f32> = dp2perp * duv1.y + dp1perp * duv2.y;
              // construct a scale-invariant frame 
              let result:f32=max(dot(tangent, tangent), dot(binormal, binormal));
              let invmax:f32 = 1.0/sqrt(result);
              let tbn:mat3x3<f32> = mat3x3<f32>(tangent * invmax, binormal * invmax, normal);
        #endif
        return tbn;
      }
  `;
	},
	getNormalByNormalTexture: function (t) {
		return Ii`
      fn getNormalByNormalTexture(input:VertInput)->vec3<f32>{
        var n:vec3<f32> = textureSample(normalTexture,normalSampler, input.uv).rgb;
        let tbn:mat3x3<f32> =getTBN(input);
        n = normalize(tbn * (2.0 * n - vec3(1.0)));
        n=n*(f32(input.frontFacing) * 2.0 - 1.0);
        return n;
      }
    `;
	},
	ibl: function (t) {
		return Ii`
  fn getLightProbeRadiance( viewDir:vec3<f32>,normal:vec3<f32>, roughness:f32 )->vec3<f32>{
    var reflectVec:vec3<f32> = reflect( -viewDir, normal );
    reflectVec.x = -reflectVec.x; // TextureCube is left-hand,so x need inverse
    let mipCount:f32 = 10.0; // resolution of 256x256
    let lod:f32 = roughness * mipCount;
    let specularLight:vec3<f32> = textureSampleLevel(specularEnvTexture,specularEnvSampler, reflectVec, lod).rgb;
    return specularLight;
  }
  fn getLightProbeIrradiance( lightProbe:array<vec3<f32>,9>, normal:vec3<f32>)->vec3<f32> {
    var worldNormal:vec3<f32> = normal;
    worldNormal.x = -normal.x;
    var irradiance:vec3<f32> = lightProbe[0];
    irradiance+=lightProbe[1] * (normal.y);
    irradiance+=lightProbe[2] * (normal.z) ;
    irradiance+=lightProbe[3] * (normal.x) ;

    irradiance+=lightProbe[4] * (normal.y * normal.x) ;
    irradiance+=lightProbe[5] * (normal.y * normal.z) ;
    irradiance+=lightProbe[6] * (3.0 * normal.z * normal.z - 1.0);
    irradiance+=lightProbe[7] * (normal.z * normal.x) ;
    irradiance+=lightProbe[8] * (normal.x * normal.x - normal.y * normal.y);

    return max(irradiance, vec3<f32>(0.0,0.0,0.0));
  }
  fn DFGApprox( specularColor:vec3<f32>, roughness:f32,dotNV:f32 )->vec3<f32> {
    const c0:vec4<f32> = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );
    let c1:vec4<f32> = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );
    let r:vec4<f32> = roughness * c0 + c1;
    let a004:f32 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
    let fab:vec2<f32> = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;
    return specularColor * fab.x + fab.y;
  }
  //间接光照
  fn indirectDiffuse_Physical(geometry:Geometry, material:PhysicalMaterial )->ReflectedLight {
      var reflectedLight:ReflectedLight;
      var irradiance:vec3<f32> = lightUniforms.ambient.xyz*lightUniforms.ambient.w;
      irradiance *= PI;
      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
      return reflectedLight;
  }
  //间接高光
  fn indirectSpecular_Physical(geometry:Geometry, material:PhysicalMaterial)->ReflectedLight {
      var reflectedLight:ReflectedLight;
      // IBL specular
      let radiance:vec3<f32> = getLightProbeRadiance(geometry.viewDir, geometry.normal, material.roughness);
      let radianceAttenuation:f32 = 1.0;
      reflectedLight.indirectSpecular += radianceAttenuation * radiance * DFGApprox(material.specularColor, material.roughness, geometry.dotNV );
      return reflectedLight;
    }
  `;
	}
};
function Pi(t) {
	return `\n    struct VertexInput {\n         @location(${t.positionLocation}) position: vec2<f32>,       \n    }\n    struct VertexOutput {\n         @builtin(position) position: vec4<f32>,\n         @location(0) uv: vec2<f32>,\n     };\n    @vertex\n    fn main(input: VertexInput) -> VertexOutput {\n     var output:VertexOutput;\n     output.uv = input.position * 0.5 + 0.5;\n     output.position = vec4<f32>(input.position, 0.0, 1.0);;\n     return output;\n    }\n    `;
}
function Bi(t) {
	return Gi(t);
}
const Vi = /^[ \t]*#include +<([\w\d./]+)>/gm;
let Fi = {};
const $i = {
	phong: {
		frag: function (t) {
			return Ii`  
  struct VertInput {
      @builtin(position) position: vec4<f32>,
      @builtin(front_facing) frontFacing: bool,
      @location(0) uv: vec2<f32>,
      @location(1) view: vec3<f32>, // Vector from vertex to camera.
      @location(2) worldPos: vec3<f32>,
      @location(3) color: vec4<f32>,
      @location(4) normal: vec3<f32>,
      @location(5) viewPosition: vec3<f32>,
    };
    
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

    #if${t.USE_COLORTEXTURE}
      @group(0) @binding(${t.baseColorSamplerBinding}) var baseColorSampler: sampler;
      @group(0) @binding(${t.baseColorTextureBinding}) var baseColorTexture: texture_2d<f32>;
    #endif
    #if ${t.USE_NORMALTEXTURE}
      @group(0) @binding(${t.normalTextureBinding}) var normalTexture: texture_2d<f32>;
      @group(0) @binding(${t.normalSamplerBinding}) var normalSampler: sampler;
    #endif
    @binding(${t.phongBinding}) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(${t.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
    #if ${t.USE_NORMALTEXTURE}
      #include <getTBN>
      #include <getNormalByNormalTexture>
    #else
        #include <getNormal>
    #endif

    #include <light>

    @fragment
    fn main(input:VertInput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${t.USE_COLORTEXTURE}
            color= vec4<f32>(textureSample(baseColorTexture, baseColorSampler, input.uv).rgb+materialUniform.color,materialUniform.opacity);
        #else
            color=vec4<f32>(materialUniform.color,materialUniform.opacity);
        #endif     
        let  V:vec3<f32> =  normalize( systemUniform.cameraPosition - input.worldPos);
        #if ${t.USE_NORMALTEXTURE}
            let N:vec3<f32> = getNormalByNormalTexture(input);  
        #else
            let N:vec3<f32> = getNormal(input);
        #endif
        var geometry:Geometry;
        geometry.normal=N;
        geometry.viewDir=V;
        geometry.position=input.worldPos;
        let lightColor:ReflectedLight=parseLights(geometry,materialUniform.shininess);
        // var finnalColor:vec3<f32>=color.xyz + (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);
        var finnalColor:vec3<f32>=color.xyz * (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);

        return vec4<f32>(finnalColor,color.a);
    }`;
		},
		vert: function (t) {
			return `\n      struct VertexOutput {\n            @builtin(position) position: vec4<f32>,\n            @location(0) uv: vec2<f32>,\n            @location(1) view: vec3<f32>, // Vector from vertex to camera.\n            @location(2) worldPos: vec3<f32>,\n            @location(3) color: vec4<f32>,\n            @location(4) normal: vec3<f32>,\n            @location(5) viewPosition: vec3<f32>,\n      };\n      struct MaterialUniform {\n            modelMatrix: mat4x4<f32>,\n            color: vec3<f32>,\n            opacity:f32,\n            normalMatrix: mat4x4<f32>,\n            emissive:vec3<f32>,\n            specular:vec3<f32>,\n            shininess:f32,\n      }\n      struct SystemUniform {\n            projectionMatrix: mat4x4<f32>,\n            viewMatrix: mat4x4<f32>,\n            inverseViewMatrix: mat4x4<f32>,\n            cameraPosition: vec3<f32>,\n      }; \n\n      @binding(${t.phongBinding}) @group(0) var<uniform> selfUniform : MaterialUniform;\n      @binding(${t.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;\n\n      struct VertexInput {\n            @location(${t.positionLocation}) position: vec3<f32>,       \n            @location(${t.normalLocation}) normal: vec3<f32>,\n            @location(${t.uvLocation}) uv: vec2<f32>,\n      }\n      @vertex\n      fn main(input: VertexInput) -> VertexOutput {\n            var output: VertexOutput;\n            output.uv = input.uv;\n            let modelPos=selfUniform.modelMatrix *vec4<f32>(input.position,1.0);\n            output.worldPos = modelPos.xyz/modelPos.w;\n            let vNormalView = selfUniform.normalMatrix * vec4<f32>(input.normal,0.0);\n            output.normal =  vNormalView.xyz;\n            output.view = systemUniform.cameraPosition.xyz - modelPos.xyz;\n            let viewPosition=systemUniform.viewMatrix * modelPos;\n            output.viewPosition = -viewPosition.xyz;\n            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;\n            return output;\n      }`;
		}
	},
	color: {
		frag: function (t) {
			return "\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) color: vec4<f32>,\n    };\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n      return input.color;\n    }\n    ";
		},
		vert: function (t) {
			return `\n   struct VertexInput {\n        @location(${t.positionLocation}) position: vec3<f32>,       \n        @location(${t.colorLocation}) color: vec4<f32>,\n   }\n   struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) color: vec4<f32>,\n    };\n   struct SelfUniform {\n      modelMatrix: mat4x4<f32>,\n   }\n   struct SystemUniform {\n      projectionMatrix: mat4x4<f32>,\n      viewMatrix: mat4x4<f32>,\n      inverseViewMatrix: mat4x4<f32>,\n      cameraPosition: vec3<f32>,\n   }; \n   @binding(${t.colorBinding}) @group(0) var<uniform> selfUniform : SelfUniform;\n   @binding(${t.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;\n   @vertex\n   fn main(input: VertexInput) -> VertexOutput {\n    var output:VertexOutput;\n    output.color=input.color;\n    output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(input.position,1.0);\n    return output;\n   }\n   `;
		}
	},
	pbr: {
		frag: function (t) {
			return Ii`
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
    #if ${t.USE_LIGHTTEXTURE || t.USE_AOTEXTURE}
        @location(${t.vUv2OutLocation}) vUv2: vec2<f32>,
    #endif

    #if ${t.USE_COLOR_ALPHA}
        @location(${t.vColorOutLocation}) vColor: vec4<f32>,
    #elif ${t.USE_COLOR || t.USE_INSTANCING_COLOR}
        @location(${t.vColorOutLocation}) vColor: vec3<f32>,
    #endif

    #if ${t.USE_TANGENT}
        @location(${t.vTangentOutLocation}) vTangent: vec3<f32>,
        @location(${t.vBitangentOutLocation}) vBitangent: vec3<f32>,
    #endif
};
        struct PhysicalMaterial {
             diffuseColor:vec3<f32>,
             roughness:f32,
             specularColor:vec3<f32>,
             specularF90:f32,
            #if ${t.USE_CLEARCOAT}
                clearcoat:f32,
                clearcoatRoughness:f32,
                clearcoatF0:vec3<f32>,
                clearcoatF90:f32,
            #endif

            #if ${t.USE_IRIDESCENCE}
                iridescence:f32,
                iridescenceIOR:f32,
                iridescenceThickness:f32,
                iridescenceFresnel:vec3<f32>,
                iridescenceF0:vec3<f32>,
            #endif

            #if ${t.USE_SHEEN}
                sheenColor:vec3<f32>,
                sheenRoughness:f32,
            #endif

            #if ${t.IOR}
                 ior:f32,
            #endif

            #if ${t.USE_TRANSMISSION}
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
        #if ${t.USE_TEXTURE}
            var sampledDiffuseColor:vec4<f32> =textureSample(baseTexture, baseSampler, input.vUv);
            #if ${t.DECODE_VIDEO_TEXTURE}
                sampledDiffuseColor = vec4<f32>( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3<f32>( 0.0521327014 ), vec3<f32>( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3<f32>( lessThanEqual( sampledDiffuseColor.rgb, vec3<f32>( 0.04045 ) ) ) ), sampledDiffuseColor.w );
            #endif

            diffuseColor *= sampledDiffuseColor;
        #endif

        var roughnessFactor:f32 = materialUniform.roughness;
    
        #if ${t.USE_ROUGHNESSTEXTURE}
            let texelRoughness:vec4<f32>=textureSample(roughnessTexture, baseSampler, input.vUv);
            roughnessFactor *= texelRoughness.g;
        #endif

        var metalnessFactor:f32 = materialUniform.metalness;
    
        #if ${t.USE_METALNESSTEXTURE}
            let texelMetalness:vec4<f32> =textureSample(metalnessTexture, baseSampler, input.vUv);
            metalnessFactor *= texelMetalness.b;
        #endif

        let faceDirection:f32 =select(-1.0,1.0,input.is_front);
        #if ${t.FLAT_SHADED}
            let fdx:vec3<f32> = dpdx( input.vViewPosition );
            let fdy:vec3<f32> = dpdy( input.vViewPosition );
            let normal:vec3<f32> = normalize( cross( fdy, fdx ) );
        #else
            let normal:vec3<f32> = normalize( input.vNormal );
            #if ${t.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif
            #if ${t.USE_TANGENT}
                let tangent:vec3<f32> = normalize( input.vTangent );
                let bitangent:vec3<f32> = normalize( input.vBitangent );
                #if ${t.DOUBLE_SIDED}
                    tangent = tangent * faceDirection;
                    bitangent = bitangent * faceDirection;
                #endif
                #if ${t.TANGENTSPACE_NORMALTEXTURE || t.USE_CLEARCOAT_NORMALTEXTURE}
                    let vTBN:mat3x3<f32> = mat3x3<f32>( tangent, bitangent, normal );
                #endif
            #endif
        #endif
    
        let geometryNormal:vec3<f32> = normal;

        #if ${t.OBJECTSPACE_NORMALTEXTURE}
            normal =textureSample(normalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            #if ${t.FLIP_SIDED}
                normal = - normal;
            #endif
            #if ${t.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif

            normal = normalize(materialUniform.normalMatrix * normal );

            #elif ${t.TANGENTSPACE_NORMALTEXTURE}
            let tempMapN:vec3<f32> =textureSample(normalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            let mapN:vec3<f32> =tempMapN.xy *= materialUniform.normalScale;
            #if ${t.USE_TANGENT}
                normal = normalize( vTBN * mapN );
            #else
                normal = perturbNormal2Arb( - input.vViewPosition, normal, mapN, faceDirection );
            #endif

            #elif ${t.USE_BUMPTEXTURE}

                normal = perturbNormalArb( - input.vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif

        #if ${t.USE_CLEARCOAT}
            var clearcoatNormal:vec3<f32> = geometryNormal;
        #endif
        #if ${t.USE_CLEARCOAT_NORMALTEXTURE}
            var clearcoatMapN:vec3<f32> =textureSample(clearcoatNormalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            clearcoatMapN.xy *= materialUniform.clearcoatNormalScale;
            #if ${t.USE_TANGENT}
                clearcoatNormal = normalize( vTBN * clearcoatMapN );
            #else
                clearcoatNormal = perturbNormal2Arb( - input.vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
            #endif
        #endif
        #if ${t.USE_EMISSIVETEXTURE}
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

        #if ${t.IOR}
            material.ior = materialUniform.ior;
            #if ${t.SPECULAR}
                let specularIntensityFactor:f32 = materialUniform.specularIntensity;
                let specularColorFactor:vec3<f32> = materialUniform.specularColor;
                #if ${t.USE_SPECULARINTENSITYTEXTURE}
                    specularIntensityFactor *=textureSample(specularIntensityTexture, baseSampler, input.vUv).a;
                #endif

                #if ${t.USE_SPECULARCOLORTEXTURE}
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
        #if ${t.USE_CLEARCOAT}
            material.clearcoat = materialUniform.clearcoat;
            material.clearcoatRoughness = materialUniform.clearcoatRoughness;
            material.clearcoatF0 = vec3<f32>( 0.04 );
            material.clearcoatF90 = 1.0;
            #if ${t.USE_CLEARCOATTEXTURE}
                material.clearcoat *=textureSample(clearcoatTexture, baseSampler, input.vUv).x;
            #endif
            #if ${t.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                material.clearcoatRoughness *=textureSample(clearcoatRoughnessTexture, baseSampler, input.vUv).y;
            #endif
            material.clearcoat = saturate( material.clearcoat );
            material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
            material.clearcoatRoughness += geometryRoughness;
            material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
        #endif
        #if ${t.USE_IRIDESCENCE}
            material.iridescence = materialUniform.iridescence;
            material.iridescenceIOR = materialUniform.iridescenceIOR;
            #if ${t.USE_IRIDESCENCETEXTURE}
                material.iridescence *=textureSample(iridescenceTexture, baseSampler, input.vUv).r;
            #endif
            #if ${t.USE_IRIDESCENCE_THICKNESSTEXTURE}
                material.iridescenceThickness = (materialUniform.iridescenceThicknessMaximum - materialUniform.iridescenceThicknessMinimum) * textureSample(iridescenceThicknessTexture, baseSampler, input.vUv).g + materialUniform.iridescenceThicknessMinimum;
            #else
                material.iridescenceThickness = materialUniform.iridescenceThicknessMaximum;
            #endif
        #endif
        #if ${t.USE_SHEEN}
            material.sheenColor = materialUniform.sheenColor;
            #if ${t.USE_SHEENCOLORTEXTURE}
                material.sheenColor *=textureSample(sheenColorTexture, baseSampler, input.vUv).rgb;
            #endif
            material.sheenRoughness = clamp( materialUniform.sheenRoughness, 0.07, 1.0 );
            #if ${t.USE_SHEENROUGHNESSTEXTURE}
                material.sheenRoughness *=textureSample(sheenRoughnessTexture, baseSampler, input.vUv).a;
            #endif
        #endif
        
        var geometry:GeometricContext;
        geometry.position = - input.vViewPosition;
        geometry.normal = normal;
       // geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( input.vViewPosition );
        geometry.viewDir = normalize( input.vViewPosition); 

        #if ${t.USE_CLEARCOAT}
            geometry.clearcoatNormal = clearcoatNormal;
        #endif

        #if ${t.USE_IRIDESCENCE}
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

        #if ${t.USE_LIGHTTEXTURE}
            let lightMapTexel:vec4<f32> =textureSample(lightTexture, baseSampler, input.vUv2);
            let lightMapIrradiance:vec3<f32> = lightMapTexel.rgb * materialUniform.lightTextureIntensity;
            irradiance += lightMapIrradiance;
        #endif
        //&& defines.STANDARD&&defines.ENVTEXTURE_TYPE_CUBE_UV
        #if ${t.USE_ENVTEXTURE} 
            iblIrradiance += getIBLIrradiance( geometry.normal,baseSampler,systemUniform.viewMatrix );
        #endif
        #if ${t.USE_ENVTEXTURE}
            radiance += getIBLRadiance( geometry.viewDir,baseSampler,systemUniform.viewMatrix, geometry.normal, materialUniform.roughness );
            #if ${t.USE_CLEARCOAT}
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
        #if ${t.USE_AOTEXTURE}
            let ambientOcclusion:f32 = (textureSample(aoTexture, baseSampler, input.vUv2).r - 1.0 ) * materialUniform.aoTextureIntensity + 1.0;

            reflectedLight.indirectDiffuse *= ambientOcclusion;
            //&&defines.STANDARD
            #if ${t.USE_ENVTEXTURE} 
                let dotNV:f32 = saturate( dot( geometry.normal, geometry.viewDir ) );
                reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
            #endif
        #endif

        var totalDiffuse:vec3<f32> = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        var totalSpecular:vec3<f32> = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        //透射
        #if ${t.USE_TRANSMISSION}
            material.transmission = materialUniform.transmission;
            material.transmissionAlpha = 1.0;
            material.thickness = materialUniform.thickness;
            material.attenuationDistance = materialUniform.attenuationDistance;
            material.attenuationColor = materialUniform.attenuationColor;
            #if ${t.USE_TRANSMISSIONTEXTURE}
                material.transmission *=textureSample(transmissionTexture, baseSampler, input.vUv).r;
            #endif
            #if ${t.USE_THICKNESSTEXTURE}
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

        #if ${t.USE_SHEEN}
            let sheenEnergyComp:f32 = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
        #endif

        #if ${t.USE_CLEARCOAT}
            let dotNVcc:f32 = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            let Fcc:vec3<f32> = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
            outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
        #endif

        #if ${t.USE_TRANSMISSION}
            diffuseColor.a *= material.transmissionAlpha + 0.1;
        #endif

        var finnalColor:vec4<f32>;
        finnalColor = vec4<f32>( outgoingLight, diffuseColor.a );
        #if ${t.TONE_MAPPING}
           finnalColor.rgb = toneMapping( finnalColor.rgb,materialUniform.toneMappingExposure );
        #endif

          finnalColor = linearToOutputTexel( finnalColor);

        #if ${t.PREMULTIPLIED_ALPHA}
            finnalColor.rgb *= finnalColor.a;
        #endif
        #if ${t.DITHERING}
            finnalColor.rgb = dithering( finnalColor.rgb );
        #endif
        return finnalColor;
    }`;
		},
		vert: function (t) {
			return Ii`
    #include <pbrStruct>
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
        @location(2) vWorldPosition: vec3<f32>,
        @location(3) vNormal: vec3<f32>,
        // 可选
        #if ${t.USE_LIGHTTEXTURE || t.USE_AOTEXTURE}
            @location(${t.vUv2OutLocation}) vUv2: vec2<f32>,
        #endif

        #if ${t.USE_COLOR_ALPHA}
            @location(${t.vColorOutLocation}) vColor: vec4<f32>,
        #elif ${t.USE_COLOR || t.USE_INSTANCING_COLOR}
            @location(${t.vColorOutLocation}) vColor: vec3<f32>,
        #endif

        #if ${t.USE_TANGENT}
            @location(${t.vTangentOutLocation}) vTangent: vec3<f32>,
            @location(${t.vBitangentOutLocation}) vBitangent: vec3<f32>,
        #endif
    };
    struct GlobalUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    };

    //texture and sampler
    // @group(0) @binding(${t.samplerBinding}) var baseSampler: sampler;
    #if ${t.USE_SKINNING}
        //uniform highp sampler2D boneTexture;
        @group(0) @binding(${t.boneTextureBinding}) var boneTexture: texture_2d<f32>;
    #endif

    #if ${t.USE_DISPLACEMENTTEXTURE}
        //uniform sampler2D displacementMap;
        @group(0) @binding(${t.displacementTextureBinding}) var displacementMap: texture_2d<f32>;
    #endif

    #if ${t.MORPHTARGETS_TEXTURE}
        //uniform sampler2DArray morphTargetsTexture;
        @group(0) @binding(${t.morphTargetsTextureBinding}) var morphTargetsTexture: texture_2d_array<f32>;
    #endif

    struct VertexInput {
        @location(0) position: vec3<f32>,  

        @location(1) normal: vec3<f32>,

        @location(2) uv: vec2<f32>,
        #if ${t.USE_LIGHTTEXTURE || t.USE_AOTEXTURE}
            @location(${t.uv2Location}) uv2:vec2<f32>,
        #endif
        #if ${t.USE_INSTANCING}
            @location(${t.instanceMatrixLocation}) instanceMatrix:mat4x4<f32>,
        #endif
        #if ${t.USE_INSTANCING_COLOR}
            @location(${t.instanceColorLocation}) instanceColor:vec3<f32>,
        #endif
        
        #if ${t.USE_TANGENT}
            @location(${t.tangentLocation}) tangent:vec4<f32>,
        #endif
        #if ${t.USE_COLOR_ALPHA}
            @location(${t.colorLocation}) color:vec4<f32>,
        #elif ${t.USE_COLOR}
            @location(${t.colorLocation}) color:vec3<f32>,
        #endif

        #if ${t.USE_MORPHTARGETS && !t.MORPHTARGETS_TEXTURE}
            @location(${t.morphTarget0Location}) morphTarget0:vec3<f32>,

            @location(${t.morphTarget1Location}) morphTarget1:vec3<f32>,

            @location(${t.morphTarget2Location}) morphTarget2:vec3<f32>,

            @location(${t.morphTarget3Location}) morphTarget3:vec3<f32>,
            #if ${t.USE_MORPHNORMALS}
                @location(${t.morphNormal0Location}) morphNormal0:vec3<f32>,

                @location(${t.morphNormal1Location}) morphNormal1:vec3<f32>,

                @location(${t.morphNormal2Location}) morphNormal2:vec3<f32>,

                @location(${t.morphNormal3Location}) morphNormal3:vec3<f32>,
            #else
                @location(${t.morphTarget4Location}) morphTarget4:vec3<f32>,

                @location(${t.morphTarget5Location}) morphTarget5:vec3<f32>,

                @location(${t.morphTarget6Location}) morphTarget6:vec3<f32>,

                @location(${t.morphTarget7Location}) morphTarget7:vec3<f32>,
            #endif
        #endif
        #if ${t.USE_SKINNING}
            @location(${t.skinIndexLocation}) skinIndex:vec4<f32>,
            @location(${t.skinWeightLocation}) skinWeight:vec4<f32>,
        #endif
  }

    #if ${t.MORPHTARGETS_TEXTURE}
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
    #if ${t.USE_SKINNING}
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
        #if ${t.USE_TEXTURE}
            vertexOutput.vUv = input.uv;
        #endif
        #if ${t.USE_LIGHTTEXTURE || t.USE_AOTEXTURE}
            vertexOutput.vUv2 input.uv2;
        #endif
        #if ${t.USE_COLOR_ALPHA}
            vertexOutput.vColor = vec4( 1.0 );
            #elif ${t.USE_COLOR || t.USE_INSTANCING_COLOR}
            vertexOutput.vColor = vec3( 1.0 );
        #endif
        #if ${t.USE_COLOR}
            vertexOutput.vColor *= input.color;
        #endif
        #if ${t.USE_INSTANCING_COLOR}
            vertexOutput.vColor.xyz *= input.instanceColor.xyz;
        #endif
        #if ${t.USE_MORPHCOLORS && t.MORPHTARGETS_TEXTURE}
            vertexOutput.vColor *= materialUniform.morphTargetBaseInfluence;
            for (let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                #if ${t.USE_COLOR_ALPHA}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ) * materialUniform.morphTargetInfluences[ i ];
                    #elif ${t.USE_COLOR}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ).rgb * materialUniform.morphTargetInfluences[ i ];
                #endif
            }
        #endif
        var objectNormal:vec3<f32> = vec3<f32>(input.normal);
        #if ${t.USE_TANGENT}
            let objectTangent:vec3<f32> = vec3<f32>( input.tangent.xyz );
        #endif
        #if ${t.USE_MORPHNORMALS}
            objectNormal *= materialUniform.morphTargetBaseInfluence;
            #if ${t.MORPHTARGETS_TEXTURE}
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
        #if ${t.USE_SKINNING}
            let boneMatX:mat4x4<f32> = getBoneMatrix( input.skinIndex.x );
            let boneMatY:mat4x4<f32> = getBoneMatrix( input.skinIndex.y );
            let boneMatZ:mat4x4<f32> = getBoneMatrix( input.skinIndex.z );
            let boneMatW:mat4x4<f32> = getBoneMatrix( input.skinIndex.w );
        #endif
        #if ${t.USE_SKINNING}
            let skinMatrix:mat4x4<f32> = mat4x4<f32>( 0.0 );
            skinMatrix += input.skinWeight.x * boneMatX;
            skinMatrix += input.skinWeight.y * boneMatY;
            skinMatrix += input.skinWeight.z * boneMatZ;
            skinMatrix += input.skinWeight.w * boneMatW;
            skinMatrix = materialUniform.bindMatrixInverse * skinMatrix * materialUniform.bindMatrix;
            objectNormal = vec4<f32>( skinMatrix * vec4<f32>( objectNormal, 0.0 ) ).xyz;
            #if ${t.USE_TANGENT}
                objectTangent = vec4<f32>( skinMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #endif
        #endif
        var transformedNormal:vec3<f32> = objectNormal;
        // transformedNormal+=vec3<f32>(0.0);
        #if ${t.USE_INSTANCING}
            let m:mat3x3<f32> = mat3x3<f32>( input.instanceMatrix );
            transformedNormal /= vec3<f32>( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
        #endif
        transformedNormal = materialUniform.normalMatrix * transformedNormal;
        #if ${t.FLIP_SIDED}
            transformedNormal = - transformedNormal;
        #endif
        #if ${t.USE_TANGENT}
            let transformedTangent:vec3<f32> = (globalUniform.viewMatrix*materialUniform.modelMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #if ${t.FLIP_SIDED}
                transformedTangent = - transformedTangent;
            #endif
        #endif
        vertexOutput.vNormal = normalize( transformedNormal );
        #if ${t.FLAT_SHADED}
            #if ${t.USE_TANGENT}
                vTangent = normalize( transformedTangent );
                vBitangent = normalize( cross( vNormal, vTangent ) * input.tangent.w );
            #endif
        #endif
        let transformed:vec3<f32> = vec3<f32>( input.position );
        #if ${t.USE_MORPHTARGETS}
            transformed *= materialUniform.morphTargetBaseInfluence;
            #if ${t.MORPHTARGETS_TEXTURE}
                for ( let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                transformed += input.morphTarget0 * materialUniform.morphTargetInfluences[ 0 ];
                transformed += input.morphTarget1 * materialUniform.morphTargetInfluences[ 1 ];
                transformed += input.morphTarget2 * materialUniform.morphTargetInfluences[ 2 ];
                transformed += input.morphTarget3 * materialUniform.morphTargetInfluences[ 3 ];
                #if ${t.USE_MORPHNORMALS}
                    transformed += input.morphTarget4 * materialUniform.morphTargetInfluences[ 4 ];
                    transformed += input.morphTarget5 * materialUniform.morphTargetInfluences[ 5 ];
                    transformed += input.morphTarget6 * materialUniform.morphTargetInfluences[ 6 ];
                    transformed += input.morphTarget7 * materialUniform.morphTargetInfluences[ 7 ];
                #endif
            #endif
        #endif
        #if ${t.USE_SKINNING}
            let skinVertex:vec4<f32> = materialUniform.bindMatrix * vec4<f32>( transformed, 1.0 );
            let skinned:vec4<f32> = vec4<f32>( 0.0 );
            skinned += boneMatX * skinVertex * input.skinWeight.x;
            skinned += boneMatY * skinVertex * input.skinWeight.y;
            skinned += boneMatZ * skinVertex * input.skinWeight.z;
            skinned += boneMatW * skinVertex * input.skinWeight.w;
            transformed = ( materialUniform.bindMatrixInverse * skinned ).xyz;
        #endif
        #if ${t.USE_DISPLACEMENTTEXTURE} 
            transformed += normalize( objectNormal ) * (textureSample(displacementMap, baseSampler, vUv).x * materialUniform.displacementScale + materialUniform.displacementBias );
        #endif
        var mvPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
        #if ${t.USE_INSTANCING}
            mvPosition = input.instanceMatrix * mvPosition;
        #endif
        mvPosition = globalUniform.viewMatrix*materialUniform.modelMatrix * mvPosition;
        vertexOutput.position = globalUniform.projectionMatrix * mvPosition;
        vertexOutput.vViewPosition = - mvPosition.xyz/mvPosition.w;
        #if ${t.USE_ENVTEXTURE || t.DISTANCE || t.USE_TRANSMISSION} 
            var worldPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
            #if ${t.USE_INSTANCING}
                worldPosition = input.instanceMatrix * worldPosition;
            #endif
            worldPosition = materialUniform.modelMatrix * worldPosition;
        #endif
        #if ${t.USE_TRANSMISSION}
            vertexOutput.vWorldPosition = worldPosition.xyz;
        #endif
        return vertexOutput;
    }
    `;
		}
	},
	skybox: {
		frag: function (t) {
			return "\n    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{\n        let xValue:f32=select(b.x,a.x,a.x<=b.x);\n        let yValue:f32=select(b.y,a.y,a.y<=b.y);\n        let zValue:f32=select(b.z,a.z,a.z<=b.z);\n        return vec3<f32>(xValue,yValue,zValue);    \n     }\n    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {\n        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );\n    }\n  struct FragmentInput {\n    @location(0) texCoord : vec3<f32>\n  };\n  @group(0) @binding(2) var defaultSampler: sampler;\n  @group(0) @binding(1) var skyboxTexture: texture_cube<f32>;\n  @fragment\n  fn main(input : FragmentInput) -> @location(0) vec4<f32> {\n    let color = textureSample(skyboxTexture, defaultSampler, input.texCoord);\n    return LinearTosRGB(color);\n  }\n";
		},
		vert: function (t) {
			return `\n   struct SystemUniform {\n       projectionMatrix: mat4x4<f32>,\n       viewMatrix: mat4x4<f32>,\n       inverseViewMatrix: mat4x4<f32>,\n       cameraPosition: vec3<f32>,\n   }; \n   struct MaterialUniform {\n    modelMatrix: mat4x4<f32>,\n }\n   @binding(${t.skyboxBinding}) @group(0) var<uniform> selfUniform : MaterialUniform;\n   @binding(${t.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;\n     struct VertexInput {\n       @location(${t.positionLocation}) position : vec3<f32>,\n     };\n     struct VertexOutput {\n       @builtin(position) position : vec4<f32>,\n       @location(0) texCoord : vec3<f32>,\n     };\n     @vertex\n     fn main(input : VertexInput) -> VertexOutput {\n       var output : VertexOutput;\n       output.texCoord = input.position.xyz;\n       var modelView = systemUniform.viewMatrix;\n       // Drop the translation portion of the modelView matrix\n       modelView[3] = vec4(0.0, 0.0, 0.0, modelView[3].w);\n       output.position = systemUniform.projectionMatrix * modelView * vec4<f32>(input.position,1.0);\n       // Returning the W component for both Z and W forces the geometry depth to\n       // the far plane. When combined with a depth func of "less-equal" this makes\n       // the sky write to any depth fragment that has not been written to yet.\n       output.position = output.position.xyww;\n       return output;\n     }\n   `;
		}
	},
	resolve: {
		frag: function (t) {
			return "\n    @group(0) @binding(1) var baseSampler: sampler;\n    @group(0) @binding(0) var colorTexture: texture_2d<f32>;\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) uv: vec2<f32>,\n    };\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n      return textureSample(colorTexture, baseSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));\n    }\n    ";
		},
		vert: Pi
	},
	pbr_mat: {
		frag: function (t) {
			return Ii`
        // reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl
        #include <pbrUtils>
        #include <light>
        #include <brdf>
        struct MaterialUniform {
            modelMatrix: mat4x4<f32>,
            color: vec3<f32>,
            opacity:f32,
            normalMatrix: mat4x4<f32>,
            emissive:vec3<f32>,
            metallic:f32,
            roughness:f32,
            #if ${t.USE_NORMALTEXTURE}
                normalTextureScale:vec2<f32>,
            #endif
            #if ${t.USE_AOTEXTURE}
                occlusionStrength:f32,
            #endif
         }
         struct SystemUniform {
            projectionMatrix: mat4x4<f32>,
            viewMatrix: mat4x4<f32>,
            inverseViewMatrix: mat4x4<f32>,
            cameraPosition: vec3<f32>,
        }; 
        struct VertInput {
            @builtin(front_facing) frontFacing: bool,
            @location(0) worldPos:vec3<f32>,
            @location(1) normal:vec3<f32>,
            @location(2) uv:vec2<f32>
        }    
        struct PhysicalMaterial {
            diffuseColor:vec3<f32>,
            roughness:f32,
            specularColor:vec3<f32>,
           #if ${t.USE_CLEARCOAT}
               clearcoat:f32,
               clearcoatRoughness:f32,
               clearcoatF0:vec3<f32>,
               clearcoatF90:f32,
           #endif

           #if ${t.USE_IRIDESCENCE}
               iridescence:f32,
               iridescenceIOR:f32,
               iridescenceThickness:f32,
               iridescenceFresnel:vec3<f32>,
               iridescenceF0:vec3<f32>,
           #endif

           #if ${t.USE_SHEEN}
               sheenColor:vec3<f32>,
               sheenRoughness:f32,
           #endif

           #if ${t.IOR}
                ior:f32,
           #endif

           #if ${t.USE_TRANSMISSION}
               transmission:f32,
               transmissionAlpha:f32,
               thickness:f32,
               attenuationDistance:f32,
               attenuationColor:vec3<f32>,
           #endif
       };
        const M_PI:f32 = 3.141592653589793;
        const c_MinRoughness:f32 = 0.04;
        @binding(${t.pbrBinding}) @group(0) var<uniform> materialUniform : MaterialUniform;
        @binding(${t.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
        // IBL
        #if ${t.USE_IBL}
            @group(0) @binding(${t.specularEnvTextureBinding}) var specularEnvTexture: texture_cube<f32>;
            @group(0) @binding(${t.specularEnvSamplerBinding}) var specularEnvSampler: sampler;
        #endif
        #if ${t.USE_TEXTURE}
           @group(0) @binding(${t.baseColorTextureBinding}) var baseColorTexture: texture_2d<f32>;
           @group(0) @binding(${t.baseColorSamplerBinding}) var baseColorSampler: sampler;
        #endif
        // normal map
        #if ${t.USE_NORMALTEXTURE}
          @group(0) @binding(${t.normalTextureBinding}) var normalTexture: texture_2d<f32>;
          @group(0) @binding(${t.normalSamplerBinding}) var normalSampler: sampler;
        #endif
        // emmisve map
        #if ${t.USE_EMISSIVETEXTURE}
            @group(0) @binding(${t.emissiveTextureBinding}) var emissiveTexture: texture_2d<f32>;
            @group(0) @binding(${t.emissiveSamplerBinding}) var emissiveSampler: sampler;
        #endif

        // metal roughness
        #if ${t.USE_METALNESSTEXTURE}
             @group(0) @binding(${t.metalnessRoughnessTextureBinding}) var metalnessRoughnessTexture: texture_2d<f32>;
             @group(0) @binding(${t.metalnessRoughnessSamplerBinding}) var metalnessRoughnessSampler: sampler;
        #endif
        // occlusion texture
        #if ${t.USE_AOTEXTURE}
             @group(0) @binding(${t.aoTextureBinding}) var aoTexture: texture_2d<f32>;
             @group(0) @binding(${t.aoSamplerBinding}) var aoSampler: sampler;
        #endif
        #if ${t.USE_NORMALTEXTURE}
            #include <getTBN>
            #include <getNormalByNormalTexture>
        #else
            #include <getNormal>
        #endif
        #if ${t.USE_IBL}
            #include <ibl>
        #endif
        @fragment
        fn main(input:VertInput) -> @location(0) vec4<f32> 
        {
            var perceptualRoughness:f32 = materialUniform.roughness;
            var metallic:f32 = materialUniform.metallic;

            #if ${t.USE_METALNESSTEXTURE}
                let mrSample:vec4<f32> = textureSample(metalnessRoughnessTexture,metalnessRoughnessSampler, input.uv);
                perceptualRoughness = mrSample.g * perceptualRoughness;
                metallic = mrSample.b * metallic;
            #endif
            perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
            metallic = clamp(metallic, 0.0, 1.0);
            let alphaRoughness:f32 = perceptualRoughness * perceptualRoughness;


            // The albedo may be defined from a base texture or a flat color
            #if ${t.USE_TEXTURE}
                let baseColor:vec4<f32> = textureSample(baseColorTexture,baseColorSampler, input.uv) ;
            #else
                let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);
            #endif

            #if ${t.USE_NORMALTEXTURE}
                let n:vec3<f32> = getNormalByNormalTexture(input);  
            #else
                let n:vec3<f32> = getNormal(input);
            #endif
            var material:PhysicalMaterial;
            material.diffuseColor=baseColor.rgb*( 1.0 - metallic );
            material.roughness=perceptualRoughness;
            material.specularColor=mix( vec3<f32>( 0.04), baseColor.rgb, metallic );
            var geometry:Geometry;
            geometry.normal=n;
            geometry.viewDir=normalize(systemUniform.cameraPosition - input.worldPos);
            geometry.position=input.worldPos;
            geometry.dotNV = saturate(dot(geometry.normal, geometry.viewDir) );
            //light shading
            var reflectedLight=parseLights(geometry,material);
            var color=reflectedLight.directDiffuse+reflectedLight.directSpecular;
            //IBL
            #if ${t.USE_IBL}
                var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);
                var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);
                color+=reflectedLightDiffuse.indirectDiffuse;
                color+=reflectedLightSpecular.indirectSpecular;
            #endif
            #if ${t.USE_AOTEXTURE}
                let ao:f32 = textureSample(aoTexture,aoSampler, input.uv).r;
                color = mix(color, color * ao, materialUniform.occlusionStrength);
            #endif

            #if ${t.USE_EMISSIVETEXTURE}
                let emissive:vec3<f32> = textureSample(emissiveTexture, emissiveSampler,input.uv).rgb ;
                color += emissive;
            #endif
       return vec4<f32>(color, baseColor.a);
    }
   `;
		},
		vert: function (t) {
			return Ii`
   struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        color: vec3<f32>,
        opacity:f32,
        normalMatrix: mat4x4<f32>,
        emissive:vec3<f32>,
        metallic:f32,
        roughness:f32,
        #if ${t.USE_NORMALTEXTURE}
            normalTextureScale:vec2<f32>,
        #endif
        #if ${t.USE_AOTEXTURE}
            occlusionStrength:f32,
        #endif
        #if ${t.HAS_SKIN} 
             jointMatrixCount:f32,
             jointMatrixs:array<mat4x4>,
        #endif
   }

   struct SystemUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
   }; 
   
   struct VertexInput {
        @location(${t.positionLocation}) position: vec3<f32>,       
        @location(${t.normalLocation}) normal: vec3<f32>,
        #if${t.HAS_COLOR} 
            @location(${t.colorLocation}) color: vec3<f32>,
        #endif
        @location(${t.uvLocation}) uv: vec2<f32>,
        #if${t.HAS_SKIN} 
            @location(${t.joint0Location}) joint0:vec4<f32>;
            @location(${t.weight0Location}) weight0:vec4<f32>;
            #if${t.SKIN_VEC8}
                @location(${t.joint1Location}) joint1:vec4<f32>;
                @location(${t.weight1Location}) weight1:vec4:<f32>;
            #endif
        #endif
   }
    struct VertexOutput {
        @builtin(position) position:vec4<f32>,
        @location(0) worldPos:vec3<f32>,
        @location(1) normal:vec3<f32>,
        @location(2) uv:vec2<f32>
    }  

    @binding(${t.pbrBinding}) @group(0) var<uniform> materialUniform : MaterialUniform;
    @binding(${t.cameraBinding}) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
   fn main(input: VertexInput)-> VertexOutput
   {
       #if ${t.HAS_SKIN} 
            var skinMatrix:mat4x4<f32> = 
                   input.weight0.x * materialUniform.jointMatrixs[u32(input.joint0.x)] +
                   input.weight0.y * materialUniform.jointMatrixs[u32(input.joint0.y)] +
                   input.weight0.z * materialUniform.jointMatrixs[u32(input.joint0.z)] +
                   input.weight0.w * materialUniform.jointMatrixs[u32(input.joint0.w)];
           #if ${t.SKIN_VEC8} 
               skinMatrix +=
                   input.weight1.x * materialUniform.jointMatrixs[u32(joint1.x)] +
                   input.weight1.y * materialUniform.jointMatrixs[u32(joint1.y)] +
                   input.weight1.z * materialUniform.jointMatrixs[u32(joint1.z)] +
                   input.weight1.w * materialUniform.jointMatrixs[u32(joint1.w)];
           #endif
        #endif
        var output: VertexOutput;
        output.uv = input.uv;
   
        #if ${t.HAS_SKIN} 
            output.normal = normalize((materialUniform.normalMatrix * transpose(inverse(skinMatrix)) * vec4<f32>(input.normal, 0.0)).xyz);
            let pos:vec4<f32> = systemUniform.viewMatrix *materialUniform.modelMatrix*skinMatrix * vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix*materialUniform.modelMatrix * skinMatrix * vec4<f32>(input.position,1.0);
        #else
            let vNormalView = materialUniform.normalMatrix * vec4<f32>(input.normal,0.0);
            output.normal = vNormalView.xyz;
            let pos:vec4<f32>=systemUniform.viewMatrix *materialUniform.modelMatrix*vec4<f32>(input.position, 1.0);
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *materialUniform.modelMatrix* vec4<f32>(input.position, 1.0);
        #endif      
        // output.worldPos = pos.xyz/pos.w; 
        let modelPos=materialUniform.modelMatrix *vec4<f32>(input.position,1.0);
        output.worldPos = modelPos.xyz/modelPos.w;
        return output;   
   }
   `;
		}
	},
	blur: {
		frag: function (t) {
			return `\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    }\n    struct BlurUniforms {\n        direction:vec2<f32>,\n    }\n    fn gaussianPdf(x:f32, sigma:f32)->f32 {\n        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n    }\n    @group(0) @binding(0)  var<uniform> blurUniforms : BlurUniforms;\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        let invSize:vec2<f32> = vec2<f32>(1.0,1.0) / vec2<f32>(textureDimensions(tDiffuse));\n        let fSigma:f32 =f32(${t.SIGMA});\n        var weightSum:f32 = gaussianPdf(0.0, fSigma);\n        let baseColor=textureSample(tDiffuse, tSampler, input.uv);\n        var diffuseSum:vec3<f32> = baseColor.rgb * weightSum;\n        let uvOffset:vec2<f32> = blurUniforms.direction * invSize;\n        for( var i : u32 = 1; i < ${t.KERNEL_RADIUS};i = i + 1 ) {\n            let x:f32 = f32(i);\n            let w:f32 = gaussianPdf(x, fSigma);\n            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv+ uvOffset*x).rgb;\n            let sample2:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv- uvOffset*x).rgb;\n            diffuseSum =diffuseSum+ (sample2+sample2)* w;\n            weightSum += 2.0 * w;\n        }\n        diffuseSum/=weightSum;\n      return vec4<f32>(diffuseSum,baseColor.a);\n    }\n  `;
		},
		vert: Pi
	},
	luminosityHigh: {
		frag: function (t) {
			return "\n    struct LuminosityUniforms{\n        luminosityThreshold:f32,\n        smoothWidth:f32,\n        defaultColor:vec3<f32>,\n        defaultOpacity:f32,\n    }\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    };\n    @group(0) @binding(0)  var<uniform> luminosityUniforms : LuminosityUniforms;\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput)-> @location(0) vec4<f32> {\n\n        let texel:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);\n\n        let luma:vec3<f32> = vec3<f32>( 0.299,0.587,0.114 );\n\n        let v:f32 = dot( texel.xyz, luma );\n\n        let outputColor:vec4<f32> = vec4<f32>( luminosityUniforms.defaultColor.rgb, luminosityUniforms.defaultOpacity );\n\n        let alpha:f32 = smoothstep( luminosityUniforms.luminosityThreshold, luminosityUniforms.luminosityThreshold + luminosityUniforms.smoothWidth, v );\n\n       return mix( outputColor, texel, alpha );\n    }\n    ";
		},
		vert: Pi
	},
	blend: {
		frag: function (t) {
			return "\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    };\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{baseColorTextureBinding}}) var baseColorTexture: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        let postColor:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);\n        let baseColor:vec4<f32> = textureSample(baseColorTexture, tSampler, input.uv);\n      return baseColor+postColor;\n    }   \n    ";
		},
		vert: Pi
	}
};
function Gi(t) {
	return t.replace(Vi, qi);
}
function qi(t, e) {
	const i = Ni[e];
	if (void 0 === i) throw new Error(`Can not resolve #include <${e}>`);
	return Gi(i(Fi));
}
function ki(t, e = {}) {
	const i = $i[t];
	return (Fi = e), { vert: Bi(i.vert(Fi)), frag: Bi(i.frag(Fi)) };
}
class ji {
	constructor(t) {
		(this.type = t.type),
			(this.defines = t.defines),
			(this.custom = tt(t.custom, !1)),
			(this.dirty = !0),
			t.render
				? ((this.render = !0),
				  (this.vertEntryPoint = t.vertMain || "main"),
				  (this.fragEntryPoint = t.fragMain || "main"),
				  (this.vert = t.vert || void 0),
				  (this.frag = t.frag || void 0))
				: ((this.compute = t.compute || void 0), (this.computeMain = t.computeMain || "main"));
	}
	get uid() {
		return (this._uid = this.type.concat(JSON.stringify(this.defines))), this._uid;
	}
	updateShaderStr() {
		if (this.custom)
			this.compute
				? (this.compute = ji.compileCustomShader(this.compute, this.defines))
				: ((this.vert = ji.compileCustomShader(this.vert, this.defines)),
				  (this.frag = ji.compileCustomShader(this.frag, this.defines)));
		else {
			const t = ki(this.type, this.defines);
			(this.vert = t.vert), (this.frag = t.frag);
		}
	}
	setDefines(t) {
		(this.dirty = !0), (this.defines = Object.assign(this.defines, t));
	}
	createShaderModule(t) {
		if ((this.dirty && (this.updateShaderStr(), (this.dirty = !1)), this.render)) {
			return {
				vert: this.vert ? t.createShaderModule({ code: this.vert }) : void 0,
				frag: this.frag ? t.createShaderModule({ code: this.frag }) : void 0
			};
		}
		return t.createShaderModule({ code: this.compute });
	}
	static replaceMain(t, e) {
		return (e = `void ${e}()`), t.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, e);
	}
	static compileCustomShader(t, e) {
		const i = /\{\{(\w+)\}\}/;
		if (i.test(t)) {
			const r = i.exec(t)[1];
			return (t = t.replace(i, e[r])), ji.compileCustomShader(t, e);
		}
		return t;
	}
}
class Xi {
	constructor() {
		(this.label = void 0),
			(this.type = void 0),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0),
			(this._diffuse = new St(0, 0, 0)),
			(this._opacity = 1),
			(this.shaderData = void 0),
			(this.shaderSource = void 0),
			(this.dirty = !0),
			(this._emissive = new St(0, 0, 0)),
			(this._emissiveIntensity = 1),
			(this._doubleSided = !0),
			(this.light = !1),
			(this.ready = !1),
			this.init();
	}
	set wireframe(t) {
		this.renderState.primitive.topology = t ? b.LineList : b.TriangleList;
	}
	get doubleSided() {
		return this._doubleSided;
	}
	set doubleSided(t) {
		(this._renderState.primitive.cullMode = t ? w.None : w.Back), (this._doubleSided = t);
	}
	get renderState() {
		return this._renderState;
	}
	set renderState(t) {
		this._renderState = t;
	}
	get diffuse() {
		return this._diffuse;
	}
	set diffuse(t) {
		this._diffuse = t;
	}
	get emissive() {
		return this._emissive;
	}
	set emissive(t) {
		this._emissive = t;
	}
	get emissiveIntensity() {
		return this._emissiveIntensity;
	}
	set emissiveIntensity(t) {
		this._emissiveIntensity = t;
	}
	get opacity() {
		return this._opacity;
	}
	set opacity(t) {
		this._opacity = t;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	clone() {
		return null;
	}
	update(t, e) {}
	createShaderData(t, e) {
		this.shaderData && this.shaderData.destroy(), (this.shaderData = new Ce(this.type, 0)), (this.ready = !0);
	}
	init() {
		const t = new Ve(),
			e = new $e(),
			i = new Fe();
		(this._renderState = new Ne()),
			(this._renderState.primitive = t),
			(this._renderState.targets = [e]),
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
class Hi extends Xi {
	constructor() {
		super(), (this.type = "color"), (this.shaderSource = new ji({ type: this.type, render: !0, defines: {} }));
	}
	update(t, e) {
		(this.shaderData && !this.dirty) || this.createShaderData(e);
		const i = new De("color");
		i.setMatrix4("modelMatrix", () => null), this.shaderData.setUniformBuffer("color", i);
	}
}
class Yi extends pi {
	constructor() {
		super(), (this.distanceToCamera = 10), (this.material = new Hi()), (this.material.wireframe = !0), this.init();
	}
	update(t) {
		this.updateMatrix(), this.material.update(t, this), t.renderQueue.opaque.push(this);
	}
	init() {
		const t = [0, 1, 2, 3, 4, 5];
		(this.geometry = new zi({})),
			this.geometry.setAttribute(new ke("position", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], 3)),
			this.geometry.setAttribute(
				new ke("color", [1, 0, 0, 1, 1, 0.5, 0.5, 1, 0, 1, 0, 1, 0.5, 1, 0.5, 1, 0, 0, 1, 1, 0.5, 0.5, 1, 1], 4)
			),
			this.geometry.setIndice(t),
			(this.geometry.count = t.length);
	}
}
class Wi extends zi {
	constructor() {
		super({ type: "skyBoxGeometry" }), this.init();
	}
	update(t) {
		t.context;
	}
	init() {
		(this.positions = [1, 1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1]),
			(this.indices = [
				0, 2, 4, 6, 4, 2, 5, 3, 1, 3, 5, 7, 4, 1, 0, 1, 4, 5, 2, 3, 6, 7, 6, 3, 0, 1, 2, 3, 2, 1, 6, 5, 4, 5, 6,
				7
			]),
			this.setAttribute(new ke("position", this.positions, 3)),
			this.setIndice(this.indices),
			(this.count = this.indices.length);
	}
}
async function Zi(t) {
	const e = t.map((t) => {
			const e = document.createElement("img");
			return (e.src = t), e.decode().then(() => createImageBitmap(e));
		}),
		i = await Promise.all(e);
	await Promise.all(i);
	const r = new ze({ magFilter: "linear", minFilter: "linear" }),
		n = i.map((t, e) => ({ source: t, width: t.width, height: t.height, depth: 1, x: 0, y: 0, z: e }));
	return {
		texture: new Ae({
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
function Ki() {
	return !0;
}
const Qi = new (class {
	constructor() {
		(this._numberOfTextures = 0),
			(this._textures = new Map()),
			(this._numberOfTextures = 0),
			(this._texturesToRelease = new Map()),
			(this.defaultSampler = new ze({
				magFilter: "linear",
				minFilter: "linear",
				addressModeU: "repeat",
				addressModeV: "repeat"
			}));
	}
	get numberOfTextures() {
		return this._numberOfTextures;
	}
	getTexture(t) {
		const e = this._textures.get(t);
		if (K(e)) return delete this._texturesToRelease[t], ++e.count, e.texture;
	}
	addTexture(t, e) {
		const i = { texture: e, count: 1 };
		e.finalDestroy = e.destroy;
		const r = this;
		(e.destroy = function () {
			0 == --i.count && r._texturesToRelease.set(t, i);
		}),
			this._textures.set(t, i),
			++this._numberOfTextures;
	}
	releasedTextures() {
		this._texturesToRelease.forEach((t) => {
			t.texture?.finalDestroy(), --this._numberOfTextures;
		}),
			this._texturesToRelease.clear();
	}
	destroy() {
		return (
			this._textures.forEach((t) => {
				t.texture?.finalDestroy();
			}),
			(function (t) {
				function e() {
					throw new Error("This object was destroyed, i.e., destroy() was called.");
				}
				for (const i in t) "function" == typeof t[i] && (t[i] = e);
				t.isDestroyed = Ki;
			})(this)
		);
	}
})();
class Ji extends Xi {
	constructor() {
		super(),
			(this.type = "skybox"),
			(this.shaderSource = new ji({ type: this.type, render: !0, defines: {} })),
			(this.loadFish = !1),
			(this.renderState.depthStencil.depthWriteEnabled = !1),
			(this.renderState.depthStencil.depthCompare = f.LessEqual);
	}
	async loadTexture(t) {
		const e = await Zi(t);
		(this.loadFish = !0),
			Qi.addTexture("specular", e.texture),
			(this.baseTexture = e.texture),
			(this.baseSampler = e.sampler);
	}
	update(t, e) {
		this.loadFish && (this.shaderData || this.createShaderData(e));
	}
	createShaderData(t) {
		super.createShaderData(t);
		const e = new De("skybox");
		e.setMatrix4("modelMatrix", () => null),
			this.shaderData.setUniformBuffer("skybox", e),
			this.shaderData.setTexture("baseTexture", this.baseTexture),
			this.shaderData.setSampler("baseSampler", this.baseSampler);
	}
}
class tr extends pi {
	constructor(t) {
		super(),
			(this.distanceToCamera = 10),
			(this.material = new Ji()),
			t && this.material.loadTexture(t),
			(this.geometry = new Wi()),
			(this.isSkyBox = !0);
	}
	update(t) {
		this.updateMatrix(), this.geometry.update(t), this.material.update(t, this), t.renderQueue.pre.push(this);
	}
}
class er extends zi {
	constructor(t) {
		super({ type: "sphereGeometry" }), (this.defines = { HAS_NORMAL: !0 }), (this.radius = t), this.init();
	}
	init() {
		const {
			positions: t,
			normals: e,
			uvs: i,
			indices: r
		} = (function (t) {
			let e,
				i,
				r,
				n,
				s,
				a,
				o,
				c,
				l,
				h,
				u,
				f,
				d,
				m,
				p,
				g,
				x,
				y,
				v,
				b,
				S = (t = t || {}).longBands || 32,
				w = t.latBands || 32,
				T = t.radius || 1,
				E = Math.PI / w,
				M = (2 * Math.PI) / S,
				_ = S * w * 4,
				U = S * w * 6,
				L = new Array(3 * _),
				R = new Array(3 * _),
				C = new Array(2 * _),
				D = new Array(U),
				A = 0,
				z = 0;
			for (x = 0; x < w; x++)
				for (e = x * E, o = Math.cos(e), c = Math.cos(e + E), y = 0; y < S; y++)
					(i = y * M),
						(r = Math.sin(e) * Math.cos(i)),
						(n = Math.sin(e) * Math.cos(i + M)),
						(s = Math.sin(e + E) * Math.cos(i)),
						(a = Math.sin(e + E) * Math.cos(i + M)),
						(l = Math.sin(e) * Math.sin(i)),
						(h = Math.sin(e) * Math.sin(i + M)),
						(u = Math.sin(e + E) * Math.sin(i)),
						(f = Math.sin(e + E) * Math.sin(i + M)),
						(d = 1 - y / S),
						(m = 1 - (y + 1) / S),
						(p = 1 - x / w),
						(g = 1 - (x + 1) / w),
						(v = 3 * A),
						(b = 2 * A),
						(L[v] = r * T),
						(L[v + 1] = o * T),
						(L[v + 2] = l * T),
						(L[v + 3] = n * T),
						(L[v + 4] = o * T),
						(L[v + 5] = h * T),
						(L[v + 6] = s * T),
						(L[v + 7] = c * T),
						(L[v + 8] = u * T),
						(L[v + 9] = a * T),
						(L[v + 10] = c * T),
						(L[v + 11] = f * T),
						(R[v] = r),
						(R[v + 1] = o),
						(R[v + 2] = l),
						(R[v + 3] = n),
						(R[v + 4] = o),
						(R[v + 5] = h),
						(R[v + 6] = s),
						(R[v + 7] = c),
						(R[v + 8] = u),
						(R[v + 9] = a),
						(R[v + 10] = c),
						(R[v + 11] = f),
						(C[b] = d),
						(C[b + 1] = p),
						(C[b + 2] = m),
						(C[b + 3] = p),
						(C[b + 4] = d),
						(C[b + 5] = g),
						(C[b + 6] = m),
						(C[b + 7] = g),
						(D[z] = A),
						(D[z + 1] = A + 1),
						(D[z + 2] = A + 2),
						(D[z + 3] = A + 2),
						(D[z + 4] = A + 1),
						(D[z + 5] = A + 3),
						(A += 4),
						(z += 6);
			return { positions: L, normals: R, uvs: C, indices: D };
		})({ radius: this.radius });
		(this.positions = t),
			(this.normals = e),
			(this.uvs = i),
			(this.indices = r),
			this.computeBoundingSphere(this.positions),
			this.setAttribute(new ke("position", this.positions, 3)),
			this.setAttribute(new ke("normal", this.normals, 3)),
			this.setAttribute(new ke("uv", this.uvs, 2)),
			this.setIndice(this.indices),
			(this.count = this.indices.length);
	}
}
class ir extends zi {
	constructor(t = 10, e = 10, i = 10) {
		super({ type: "boxGeometry" }),
			(this.width = t),
			(this.height = e),
			(this.depth = i),
			(this.defines = { HAS_NORMAL: !0 }),
			this.init();
	}
	init() {
		const {
			positions: t,
			normals: e,
			uvs: i
		} = (function (t) {
			let e = (t = t || {}).dimensions || [1, 1, 1],
				i = t.position || [-e[0] / 2, -e[1] / 2, -e[2] / 2],
				r = i[0],
				n = i[1],
				s = i[2],
				a = e[0],
				o = e[1],
				c = e[2],
				l = { x: r, y: n, z: s + c },
				h = { x: r + a, y: n, z: s + c },
				u = { x: r, y: n + o, z: s + c },
				f = { x: r + a, y: n + o, z: s + c },
				d = { x: r, y: n, z: s },
				m = { x: r + a, y: n, z: s },
				p = { x: r, y: n + o, z: s },
				g = { x: r + a, y: n + o, z: s };
			return {
				positions: [
					l.x,
					l.y,
					l.z,
					h.x,
					h.y,
					h.z,
					u.x,
					u.y,
					u.z,
					u.x,
					u.y,
					u.z,
					h.x,
					h.y,
					h.z,
					f.x,
					f.y,
					f.z,
					h.x,
					h.y,
					h.z,
					m.x,
					m.y,
					m.z,
					f.x,
					f.y,
					f.z,
					f.x,
					f.y,
					f.z,
					m.x,
					m.y,
					m.z,
					g.x,
					g.y,
					g.z,
					h.x,
					m.y,
					m.z,
					d.x,
					d.y,
					d.z,
					g.x,
					g.y,
					g.z,
					g.x,
					g.y,
					g.z,
					d.x,
					d.y,
					d.z,
					p.x,
					p.y,
					p.z,
					d.x,
					d.y,
					d.z,
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
					u.x,
					u.y,
					u.z,
					u.x,
					u.y,
					u.z,
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
					d.x,
					d.y,
					d.z,
					m.x,
					m.y,
					m.z,
					l.x,
					l.y,
					l.z,
					l.x,
					l.y,
					l.z,
					m.x,
					m.y,
					m.z,
					h.x,
					h.y,
					h.z
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
		(this.positions = t),
			(this.normals = e),
			(this.uvs = i),
			this.computeBoundingSphere(this.positions),
			this.setAttribute(new ke("position", this.positions, 3)),
			this.setAttribute(new ke("normal", this.normals, 3)),
			this.setAttribute(new ke("uv", this.uvs, 2)),
			(this.count = 36);
	}
	update(t) {}
}
class rr extends zi {
	constructor(t = 1, e = 0.4, i = 64, r = 8, n = 2, s = 3) {
		super({ type: "torusKnotGeometry" }),
			(this.defines = { HAS_NORMAL: !0 }),
			(this.radius = t),
			(this.tube = e),
			(this.tubularSegments = i),
			(this.radialSegments = r),
			(this.p = n),
			(this.q = s),
			(this.indices = []),
			(this.positions = []),
			(this.normals = []),
			(this.uvs = []),
			this.createGeometry(),
			this.computeBoundingSphere(this.positions),
			this.init();
	}
	update(t) {
		t.context;
	}
	init() {
		this.setAttribute(new ke("position", this.positions, 3)),
			this.setAttribute(new ke("normal", this.normals, 3)),
			this.setAttribute(new ke("uv", this.uvs, 2)),
			this.setIndice(this.indices),
			(this.count = this.indices.length);
	}
	createGeometry() {
		const t = Math.floor(this.tubularSegments),
			e = Math.floor(this.radialSegments),
			i = new ct(),
			r = new ct(),
			n = new ct(),
			s = new ct(),
			a = new ct(),
			o = new ct(),
			c = new ct();
		for (let l = 0; l <= t; ++l) {
			const h = (l / t) * this.p * Math.PI * 2;
			nr(h, this.p, this.q, this.radius, n),
				nr(h + 0.01, this.p, this.q, this.radius, s),
				ct.subtract(s, n, o),
				ct.add(s, n, c),
				ct.cross(o, c, a),
				ct.cross(a, o, c),
				a.normalize(),
				c.normalize();
			for (let s = 0; s <= e; ++s) {
				const o = (s / e) * Math.PI * 2,
					h = -this.tube * Math.cos(o),
					u = this.tube * Math.sin(o);
				(i.x = n.x + (h * c.x + u * a.x)),
					(i.y = n.y + (h * c.y + u * a.y)),
					(i.z = n.z + (h * c.z + u * a.z)),
					this.positions.push(i.x, i.y, i.z),
					ct.subtract(i, n, r),
					r.normalize(),
					this.normals.push(r.x, r.y, r.z),
					this.uvs.push(l / t),
					this.uvs.push(s / e);
			}
		}
		for (let i = 1; i <= t; i++)
			for (let t = 1; t <= e; t++) {
				const r = (e + 1) * (i - 1) + (t - 1),
					n = (e + 1) * i + (t - 1),
					s = (e + 1) * i + t,
					a = (e + 1) * (i - 1) + t;
				this.indices.push(r, n, a), this.indices.push(n, s, a);
			}
	}
}
function nr(t, e, i, r, n) {
	const s = Math.cos(t),
		a = Math.sin(t),
		o = (i / e) * t,
		c = Math.cos(o);
	(n.x = r * (2 + c) * 0.5 * s), (n.y = r * (2 + c) * a * 0.5), (n.z = r * Math.sin(o) * 0.5);
}
class sr extends zi {
	constructor(t = 10, e = 10) {
		super({ type: "planeGeometry" }),
			(this.width = t),
			(this.height = e),
			(this.defines = { HAS_NORMAL: !0 }),
			this.init();
	}
	init() {
		const { indices: t, normals: e, uvs: i, vertices: r } = this.createGrid(this.width, this.height);
		(this.positions = r),
			(this.normals = e),
			(this.uvs = i),
			(this.indices = t),
			this.computeBoundingSphere(this.positions),
			this.setAttribute(new ke("position", this.positions, 3)),
			this.setAttribute(new ke("normal", this.normals, 3)),
			this.setAttribute(new ke("uv", this.uvs, 2)),
			this.setIndice(t),
			(this.count = this.indices.length);
	}
	update(t) {}
	createGrid(t = 1, e = 1, i = 1, r = 1) {
		const n = t / 2,
			s = e / 2,
			a = Math.floor(i),
			o = Math.floor(r),
			c = a + 1,
			l = o + 1,
			h = t / a,
			u = e / o,
			f = [],
			d = [],
			m = [],
			p = [];
		for (let t = 0; t < l; t++) {
			const e = t * u - s;
			for (let i = 0; i < c; i++) {
				const r = i * h - n;
				d.push(r, -e, 0), m.push(0, 0, 1), p.push(i / a), p.push(1 - t / o);
			}
		}
		for (let t = 0; t < o; t++)
			for (let e = 0; e < a; e++) {
				const i = e + c * t,
					r = e + c * (t + 1),
					n = e + 1 + c * (t + 1),
					s = e + 1 + c * t;
				f.push(i, r, s), f.push(r, n, s);
			}
		return { indices: f, normals: m, uvs: p, vertices: d };
	}
}
class ar extends Xi {
	constructor() {
		super(),
			(this.type = "phong"),
			(this.color = new St(1, 0, 0)),
			(this.shaderSource = new ji({ type: this.type, render: !0, defines: { materialPhong: !0 } })),
			(this.light = !0),
			(this.specular = new St(1, 1, 1)),
			(this.shininess = 30),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0);
	}
	update(t, e) {
		(this.shaderData && !this.dirty) || this.createShaderData(e);
	}
	createShaderData(t) {
		super.createShaderData(t);
		const e = new De("phong");
		e.setMatrix4("modelMatrix", () => null),
			e.setColor("color", this),
			e.setFloat("opacity", this),
			e.setMatrix4("normalMtrix", () => t.normalMatrix),
			e.setColor("emissive", this),
			e.setFloat("shininess", this),
			e.setColor("specular", this),
			this.shaderData.setUniformBuffer("phong", e),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_COLORTEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || Qi.defaultSampler)),
			this.normalTexture &&
				(this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture),
				this.shaderData.setSampler("normalSampler", this.normalSampler || Qi.defaultSampler));
	}
	destroy() {}
}
class or extends Xi {
	get roughness() {
		return this._roughness;
	}
	set roughness(t) {
		this._roughness = t;
	}
	get metalness() {
		return this._metalness;
	}
	set metalness(t) {
		this._metalness = t;
	}
	get aoTextureIntensity() {
		return this._aoTextureIntensity;
	}
	set aoTextureIntensity(t) {
		this._aoTextureIntensity = t;
	}
	get normalScale() {
		return this.renderState && this.renderState.primitive && this.renderState.primitive.cullMode == w.Back
			? wt.negate(this._normalScale, new wt())
			: this._normalScale;
	}
	set normalScale(t) {
		this._normalScale = t;
	}
	set IBLRender(t) {
		(this._IBLRender = t), this.shaderSource.setDefines({ USE_IBL: this._IBLRender }), (this.dirty = !0);
	}
	constructor() {
		super(),
			(this.type = "pbr_mat"),
			(this._roughness = 0.1),
			(this._metalness = 0.1),
			(this._aoTextureIntensity = 1),
			(this.light = !0),
			(this._normalScale = new wt(1, 1)),
			(this._IBLRender = !0),
			(this.shaderSource = new ji({
				type: this.type,
				render: !0,
				defines: { materialPbr: !0, USE_IBL: this._IBLRender }
			}));
	}
	update(t, e) {
		Qi.getTexture("specular") && ((this.shaderData && !this.dirty) || this.createShaderData(e, t));
	}
	createShaderData(t, e) {
		super.createShaderData(t);
		const i = new De("pbr");
		i.setMatrix4("modelMatrix", () => t.modelMatrix),
			i.setColor("diffuse", this),
			i.setFloat("opacity", this),
			i.setMatrix4("normalMtrix", () => t.normalMatrix),
			i.setColor("emissive", this),
			i.setFloat("metalness", this),
			i.setFloat("roughness", this),
			this.shaderData.setUniformBuffer("pbr", i),
			(this.specularEnvTexture = Qi.getTexture("specular")),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_TEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || Qi.defaultSampler)),
			this.metalnessRoughnessTexture &&
				(this.shaderData.setDefine("USE_METALNESSTEXTURE", !0),
				this.shaderData.setTexture("metalnessRoughnessTexture", this.metalnessRoughnessTexture),
				this.shaderData.setSampler(
					"metalnessRoughnessSampler",
					this.metalnessRoughnessSampler || Qi.defaultSampler
				)),
			this.normalTexture &&
				(i.setFloatVec2("normalScale", this),
				this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture),
				this.shaderData.setSampler("normalSampler", this.normalSampler || Qi.defaultSampler)),
			this.aoTexture &&
				(this.shaderData.setDefine("USE_AOTEXTURE", !0),
				this.shaderData.setTexture("aoTexture", this.aoTexture),
				this.shaderData.setSampler("aoSampler", this.aoSampler || Qi.defaultSampler),
				i.setFloat("aoTextureIntensity", this)),
			this.emissiveTexture &&
				(this.shaderData.setDefine("USE_EMISSIVETEXTURE", !0),
				this.shaderData.setTexture("emissiveTexture", this.emissiveTexture),
				this.shaderData.setSampler("emissiveSampler", this.emissiveSampler || Qi.defaultSampler)),
			this.specularEnvTexture &&
				this._IBLRender &&
				(this.shaderData.setTexture("specularEnvTexture", this.specularEnvTexture),
				this.shaderData.setSampler("specularEnvSampler", this.specularEnvSampler || Qi.defaultSampler));
	}
	destroy() {}
}
const cr = ["float-array", "vec2-array", "vec3-array", "vec4-array"];
class lr extends Xi {
	constructor(t) {
		super();
		const { type: e, frag: i, vert: r, defines: n, light: s } = t;
		(this.type = e),
			(this.shaderMaterialParms = t),
			(this.shaderSource = new ji({ type: e, frag: i, vert: r, custom: !0, defines: tt(n, {}), render: !0 })),
			(this.uniforms = t.uniforms),
			(this.uniformBuffer = void 0),
			(this.light = s || !1);
	}
	update(t, e) {
		(this.shaderData && !this.dirty) || this.createShaderData(e);
	}
	clone() {
		return new lr(this.shaderMaterialParms);
	}
	createShaderData(t) {
		super.createShaderData(t);
		let e = (function (t) {
			let e = 0,
				i = !1;
			return (
				Object.getOwnPropertyNames(t).map((r) => {
					"texture" == t[r].type || "sampler" == t[r].type
						? (e += 0)
						: cr.find((e) => e === t[r].type)
						? (i = !0)
						: (e += 1);
				}),
				{ hasFloat: e, hasArraytype: i }
			);
		})(this.uniforms);
		e.hasFloat &&
			((this.uniformBuffer = e.hasArraytype
				? new De(this.type, "read-only-storage", r.Storage | r.CopyDst)
				: new De(this.type)),
			this.shaderData.setUniformBuffer(this.type, this.uniformBuffer));
		Object.getOwnPropertyNames(this.uniforms).map((t) => {
			!(function (t, e, i, r, n) {
				switch (e.type) {
					case "float":
						n.setFloat(t, () => i[t].value);
						break;
					case "vec2":
						n.setFloatVec2(t, () => i[t].value);
						break;
					case "vec3":
						n.setFloatVec3(t, () => i[t].value);
						break;
					case "color":
						n.setColor(t, () => i[t].value);
						break;
					case "vec4":
						n.setFloatVec4(t, () => i[t].value);
					case "mat2":
						n.setMatrix2(t, () => i[t].value);
						break;
					case "mat3":
						n.setMatrix3(t, () => i[t].value);
					case "mat4":
						n.setMatrix4(t, () => i[t].value);
						break;
					case "float-array":
						n.setFloatArray(t, () => i[t].value, i[t].value.length);
						break;
					case "vec2-array":
						n.setVec2Array(t, () => i[t].value, i[t].value.length);
						break;
					case "vec3-array":
						n.setVec3Array(t, () => i[t].value, i[t].value.length);
						break;
					case "vec4-array":
						n.setVec4Array(t, () => i[t].value, i[t].value.length);
						break;
					case "texture":
						r.setTexture(t, () => i[t].value);
						break;
					case "sampler":
						r.setSampler(t, () => i[t].value);
						break;
					default:
						throw new Error("not match unifrom type");
				}
			})(t, this.uniforms[t], this.uniforms, this.shaderData, this.uniformBuffer);
		});
	}
}
class hr {
	constructor() {}
	addEventListener(t, e) {
		void 0 === this._listeners && (this._listeners = {});
		const i = this._listeners;
		void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e);
	}
	hasEventListener(t, e) {
		if (void 0 === this._listeners) return !1;
		const i = this._listeners;
		return void 0 !== i[t] && -1 !== i[t].indexOf(e);
	}
	removeEventListener(t, e) {
		if (void 0 === this._listeners) return;
		const i = this._listeners[t];
		if (void 0 !== i) {
			const t = i.indexOf(e);
			-1 !== t && i.splice(t, 1);
		}
	}
	dispatchEvent(t) {
		if (void 0 === this._listeners) return;
		const e = this._listeners[t.type];
		if (void 0 !== e) {
			t.target = this;
			const i = e.slice(0);
			for (let e = 0, r = i.length; e < r; e++) i[e].call(this, t);
			t.target = null;
		}
	}
}
class ur {
	constructor() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []);
	}
	sort() {
		ur.sort(this.opaque, 0, this.opaque.length, ur._compareFromNearToFar),
			ur.sort(this.transparent, 0, this.transparent.length, ur._compareFromFarToNear);
	}
	opaqueRender(t, e, i, r, n) {
		this.opaque.map((s) => {
			s.ready && (s.beforeRender(), ur.excuteCommand(s.getDrawCommand(r, n), e, i, t), s.afterRender());
		});
	}
	transparentRender(t, e, i, r, n) {
		this.transparent.map((s) => {
			s.ready && (s.beforeRender(), ur.excuteCommand(s.getDrawCommand(r, n), e, i, t), s.afterRender());
		});
	}
	computeRender(t, e) {
		this.computes.map((i) => {
			ur.excuteCompute(i.getCommand(), t, e);
		});
	}
	preRender(t, e, i, r) {
		this.pre.map((r) => {
			r.ready && (r.beforeRender(), ur.excuteCommand(r.getDrawCommand(), e, i, t), r.afterRender());
		});
	}
	static excuteCommand(t, e, i, r) {
		if (t.renderTarget) {
			const i = t.renderTarget.beginRenderPassEncoder(e);
			e.render(t, i, r), t.renderTarget.endRenderPassEncoder();
		} else e.render(t, i, r);
	}
	static excuteCompute(t, e, i) {
		e.compute(t, i);
	}
	reset() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []);
	}
	static _compareFromNearToFar(t, e) {
		return t.priority - e.priority || t.distanceToCamera - e.distanceToCamera;
	}
	static _compareFromFarToNear(t, e) {
		return t.priority - e.priority || e.distanceToCamera - t.distanceToCamera;
	}
	static sort(t, e, i, r) {
		ur._quickSort(t, e, i, r);
	}
	static _quickSort(t, e, i, r) {
		for (;;) {
			if (i - e <= 10) return void ur._insertionSort(t, e, i, r);
			const n = (e + i) >> 1;
			let s = t[e],
				a = t[i - 1],
				o = t[n];
			if (r(s, a) > 0) {
				const t = s;
				(s = a), (a = t);
			}
			if (r(s, o) >= 0) {
				const t = s;
				(s = o), (o = a), (a = t);
			} else {
				if (r(a, o) > 0) {
					const t = a;
					(a = o), (o = t);
				}
			}
			(t[e] = s), (t[i - 1] = o);
			const c = a;
			let l = e + 1,
				h = i - 1;
			(t[n] = t[l]), (t[l] = c);
			t: for (let e = l + 1; e < h; e++) {
				let i = t[e],
					n = r(i, c);
				if (n < 0) (t[e] = t[l]), (t[l] = i), l++;
				else if (n > 0) {
					do {
						if ((h--, h == e)) break t;
						n = r(t[h], c);
					} while (n > 0);
					(t[e] = t[h]), (t[h] = i), n < 0 && ((i = t[e]), (t[e] = t[l]), (t[l] = i), l++);
				}
			}
			i - h < l - e ? (this._quickSort(t, h, i, r), (i = l)) : (this._quickSort(t, e, l, r), (e = h));
		}
	}
	static _insertionSort(t, e, i, r) {
		for (let n = e + 1; n < i; n++) {
			let i;
			const s = t[n];
			for (i = n - 1; i >= e; i--) {
				const e = t[i];
				if (!(r(e, s) > 0)) break;
				t[i + 1] = e;
			}
			t[i + 1] = s;
		}
	}
}
class fr {
	constructor(t) {
		(this.context = t),
			(this.renderQueue = new ur()),
			(this.geometryMemory = 0),
			(this.textureMemory = 0),
			(this.frameNumber = 0),
			(this._defines = {}),
			(this.definesDirty = !0);
	}
	get defines() {
		return this._defines;
	}
	set defines(t) {
		(this.definesDirty = !0), (this._defines = Ai(t, this._defines, !1));
	}
	update(t) {
		this.renderQueue.reset(), (this.cullingVolume = t.getCullingVolume()), (this.frameNumber += 1);
	}
}
class dr {
	constructor() {
		(this._list = []),
			(this._guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
				const e = (16 * Math.random()) | 0;
				return ("x" === t ? e : (3 & e) | 8).toString(16);
			}));
	}
	get length() {
		return this._list.length;
	}
	update(t, e) {
		this._list.forEach((i) => {
			i.update(t, e);
		});
	}
	add(t, e) {
		if (this.contains(t)) return;
		const i = K(e);
		if (!K(t)) throw new Error("instance is required.");
		if (i) {
			if (e < 0) throw new Error("index must be greater than or equal to zero.");
			if (e > this._list.length) throw new Error("index must be less than or equal to the number of primitives.");
		}
		const r = (t._external = t._external || {});
		return (
			((r._composites = r._composites || {})[this._guid] = { collection: this }),
			i ? this._list.splice(e, 0, t) : this._list.push(t),
			t
		);
	}
	remove(t) {
		if (this.contains(t)) {
			const e = this._list.indexOf(t);
			if (-1 !== e) return this._list.splice(e, 1), delete t._external._composites[this._guid], t.destroy(), !0;
		}
		return !1;
	}
	contains(t) {
		return !!(K(t) && t._external && t._external._composites && t._external._composites[this._guid]);
	}
}
class mr {
	constructor(t) {
		this.context = t;
	}
	render(t) {}
	beforeRender() {
		(this.passRenderEncoder = this.renderTarget.beginRenderPassEncoder(this.context)),
			this.computeTarget && (this.passComputeEncoder = this.computeTarget.beginComputePassEncoder(this.context));
	}
	getColorTexture(t = 0) {
		return this.renderTarget.getColorTexture(t);
	}
	getDepthTexture() {
		return this.renderTarget.getDepthTexture();
	}
	afterRender() {
		this.renderTarget.endRenderPassEncoder(), this.computeTarget && this.computeTarget.endComputePassEncoder();
	}
}
class pr {
	constructor(t, e, i, r, n) {
		(this.type = t),
			(this.colorAttachments = e),
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
	getColorTexture(t = 0) {
		const e = this.colorAttachments[t];
		return e ? e.texture : null;
	}
	getDepthTexture() {
		if (this.depthAttachment) return this.depthAttachment.texture;
	}
	getRenderPassDescriptor() {
		return (
			this.checkSize(),
			this.depthAttachment?.texture?.update(this.context),
			{
				...(this.colorAttachments && {
					colorAttachments: this.colorAttachments.map(
						(t) => (
							t?.texture?.update && t?.texture?.update(this.context),
							{
								view: t.texture.textureView || void 0,
								resolveTarget: null != t.resolveTarget ? t.resolveTarget.textureView : void 0,
								clearValue: t.value,
								loadOp: t.op,
								storeOp: t.storeOp
							}
						)
					)
				}),
				...((this.depthAttachment || this.stencilAttachment) && {
					depthStencilAttachment: {
						view: this.depthAttachment?.texture?.textureView || void 0,
						depthLoadOp: this.depthAttachment?.op || "clear",
						depthClearValue: this.depthAttachment?.value || 1,
						depthStoreOp: this.depthAttachment?.storeOp || "store"
					}
				})
			}
		);
	}
	beginRenderPassEncoder(t) {
		this.context || (this.context = t);
		const { device: e } = this.context;
		return (
			(this.commandEncoder = e.createCommandEncoder()),
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
	beginComputePassEncoder(t) {
		this.context || (this.context = t);
		const { device: e } = this.context;
		return (
			(this.commandEncoder = e.createCommandEncoder()),
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
	checkSize() {
		const { width: t, height: e, depth: i } = this.context.presentationSize;
		if (this.depthAttachment.texture) {
			const r = this.depthAttachment?.texture?.textureProp?.size;
			(t == r?.width && e == r?.height && i == r?.depth) || this.depthAttachment.texture.setSize(t, e, i);
		}
		this.colorAttachments &&
			this.colorAttachments.forEach((r) => {
				if (r.texture) {
					const n = r?.texture?.textureProp?.size;
					!n || (t == n?.width && e == n?.height && i == n?.depth) || r.texture.setSize(t, e, i);
				}
			});
	}
	destroy() {
		this.colorAttachments &&
			this.colorAttachments.forEach((t) => {
				t.texture && t.texture.destroy();
			}),
			this.depthAttachment.texture && this.depthAttachment.texture.destroy();
	}
}
class gr extends mr {
	constructor(t) {
		super(t), this.init(t);
	}
	render(t, e) {
		const { renderQueue: i } = t;
		i.sort(),
			i.preRender(e, this.context, this.passRenderEncoder),
			i.transparentRender(e, this.context, this.passRenderEncoder),
			i.opaqueRender(e, this.context, this.passRenderEncoder);
	}
	init(t) {
		this.createRenderTarget(t);
	}
	createRenderTarget(t) {
		const { width: e, height: i, depth: r } = this.context.presentationSize,
			n = new Ae({
				label: "basicPassColor",
				size: { width: e, height: i, depth: r },
				format: this.context.presentationFormat,
				usage: a.RenderAttachment | a.TextureBinding
			}),
			s = new Ae({
				label: "basicPassDepth",
				size: { width: e, height: i, depth: r },
				format: l.Depth24Plus,
				usage: a.RenderAttachment
			}),
			o = new Ge({ r: 0, g: 0, b: 0, a: 0 }, { texture: n }),
			c = new Ge(1, { texture: s });
		this.renderTarget = new pr("render", [o], c);
	}
}
class xr extends mr {
	constructor(t) {
		super(t), this.init(t);
	}
	render(t, e) {
		const { renderQueue: i, context: r } = t,
			n = r.lightManger.getAllLights();
		if (0 !== n.length) {
			for (let t = 0; t < n.length; t++) {
				const e = n[t].shadow;
				e &&
					(this.setRenderTarget(e),
					super.beforeRender(),
					i.sort(),
					i.transparentRender(e.camera, this.context, this.passRenderEncoder, this.shadowMaterial, V.Shadow),
					i.opaqueRender(e.camera, this.context, this.passRenderEncoder, this.shadowMaterial, V.Shadow),
					super.afterRender());
			}
			r.lightManger.updateLightShadow();
		}
	}
	setRenderTarget(t) {
		this.renderTarget.depthAttachment.texture = t.getShadowMapTexture();
	}
	init(t) {
		this.createRenderTarget(t), this.createShadowMaterial();
	}
	createRenderTarget(t) {
		const e = new Ge(1, { texture: void 0 });
		this.renderTarget = new pr("render", [], e);
	}
	createShadowMaterial() {
		const t = ki("color", { colorBinding: 0, cameraBinding: 0, positionLocation: 0, colorLocation: 1 });
		this.shadowMaterial = new lr({
			type: "shadowMaterial",
			uniforms: { modelMatrix: { type: "mat4", value: null } },
			vert: t.vert,
			frag: void 0,
			light: !0
		});
	}
}
class yr {
	constructor(t) {
		(this.context = t), (this.basicPass = new gr(t)), (this.shadowPass = new xr(t));
	}
	getOutputTexture() {
		return this.basicPass.getColorTexture(0);
	}
	render(t, e) {
		this.shadowPass.render(t, e),
			this.basicPass.beforeRender(),
			this.basicPass.render(t, e),
			this.basicPass.afterRender();
	}
	destroy() {
		this.basicPass = void 0;
	}
}
class vr {
	constructor() {
		(this.geometry = new zi({})),
			this.geometry.setAttribute(new ke("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)),
			(this.geometry.count = 6);
		const t = ki("resolve", { positionLocation: 0 });
		(this.material = new lr({
			type: "resolve",
			frag: t.frag,
			vert: t.vert,
			uniforms: {
				texture: { type: "texture", value: void 0 },
				sampler: { type: "sampler", value: new ze({ magFilter: "linear", minFilter: "linear" }) }
			}
		})),
			(this.quadMesh = new pi(this.geometry, this.material));
	}
	render(t, e) {
		this.canvasRenderTarget || this.initRenderTarget(t),
			(this.material.uniforms.texture.value = e),
			(this.canvasRenderTarget.colorAttachments[0].texture = {
				textureView: t.context.getCurrentTexture().createView()
			}),
			this.material.update(void 0, this.quadMesh);
		const i = this.quadMesh.getDrawCommand(),
			r = this.canvasRenderTarget.beginRenderPassEncoder(t);
		t.render(i, r), this.canvasRenderTarget.endRenderPassEncoder();
	}
	initRenderTarget(t) {
		const { width: e, height: i, depth: r } = t.presentationSize,
			n = new Ge({ r: 0, g: 0, b: 0, a: 0 }, { texture: { textureView: void 0 } }),
			s = new Ae({
				label: "resolveDepth",
				size: { width: e, height: i, depth: r },
				format: l.Depth24Plus,
				usage: a.RenderAttachment
			}),
			o = new Ge(1, { texture: s });
		this.canvasRenderTarget = new pr("render", [n], o);
	}
}
class br {
	constructor() {
		(this._postEffects = new Map()), (this.currentColorTexture = void 0), (this.resolveFrame = new vr());
	}
	add(t) {
		this._postEffects.set(t.id, t);
	}
	remove(t) {
		this._postEffects.delete(t.id), t.destroy();
	}
	render(t, e) {
		(this.currentColorTexture = e),
			this._postEffects.forEach((e) => {
				this.currentColorTexture = e.render(t, this.currentColorTexture);
			}),
			this.resolveFrame.render(t, this.currentColorTexture);
	}
	setResolveFrameDirty(t) {
		this.resolveFrame.material.dirty = t;
	}
	postEffectsSort() {}
}
class Sr extends hr {
	constructor(t) {
		super(),
			(this.container =
				t.container instanceof HTMLDivElement ? t.container : document.getElementById(t.container)),
			(this.primitiveManger = new dr()),
			(this.postEffectCollection = new br()),
			(this.context = new Ie({ canvas: null, container: this.container, pixelRatio: 1 })),
			(this.requestAdapter = t.requestAdapter || {}),
			(this.deviceDescriptor = t.deviceDescriptor || {}),
			(this.presentationContextDescriptor = t.presentationContextDescriptor),
			(this.ready = !1),
			(this.inited = !1);
	}
	async init() {
		await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor),
			(this.currentRenderPipeline = new yr(this.context)),
			(this.frameState = new fr(this.context)),
			(this.viewport = {
				x: 0,
				y: 0,
				width: this.context.presentationSize.width,
				height: this.context.presentationSize.height
			}),
			(this.ready = !0);
	}
	add(t) {
		t?.isMesh
			? this.primitiveManger.add(t)
			: t?.isLight
			? this.context.lightManger.add(t)
			: t?.isPostEffect && this.postEffectCollection.add(t);
	}
	remove(t) {
		t?.isMesh
			? this.primitiveManger.remove(t)
			: t?.isLight
			? this.context.lightManger.remove(t)
			: t?.isPostEffect && this.postEffectCollection.remove(t);
	}
	setCamera(t) {
		this.camera = t;
	}
	resize(t, e) {
		this.context.resize(t, e), this.postEffectCollection.setResolveFrameDirty(!0);
	}
	async render() {
		this.inited || ((this.inited = !0), await this.init()), this.update();
	}
	update() {
		this.ready &&
			(Qi.releasedTextures(),
			(this.frameState.viewport = this.viewport),
			this.frameState.update(this.camera),
			this.context.lightManger.update(this.frameState, this.camera),
			this.primitiveManger.update(this.frameState, this.camera),
			this.currentRenderPipeline.render(this.frameState, this.camera),
			this.postEffectCollection.render(this.context, this.currentRenderPipeline.getOutputTexture()));
	}
}
class wr {
	constructor(t, e, i) {
		(this.width = t),
			(this.height = e),
			this.initDefaultParms(),
			(this.id = i),
			(this.priority = 0),
			(this.isPostEffect = !0);
	}
	render(t, e) {
		return null;
	}
	destroy() {}
	renderMesh(t) {
		(this.fullScreenQuad.material.dirty = !0), this.fullScreenQuad.material.update();
		const e = this.fullScreenQuad.getDrawCommand(),
			i = this.currentRenderTarget.beginRenderPassEncoder(t);
		t.render(e, i), this.currentRenderTarget.endRenderPassEncoder();
	}
	initDefaultParms() {
		const t = new zi({});
		t.setAttribute(new ke("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)), (t.count = 6);
		const e = new Ve(),
			i = new $e(),
			r = new Ne();
		(r.primitive = e),
			(r.targets = [i]),
			(this.renderState = r),
			(this.fullScreenQuad = new pi(t)),
			(this.defaultSampler = new ze());
	}
}
class Tr extends wr {
	constructor(t) {
		super(t.width, t.height, "bloom"),
			(this.strength = t.strength),
			(this.radius = t.radius),
			(this.threshold = t.threshold),
			this.init();
	}
	destroy() {
		this.renderTargetBright.destroy();
	}
	render(t, e) {
		(this.currentRenderTarget = this.renderTargetBright),
			(this.highPassUniforms.tDiffuse.value = e),
			(this.fullScreenQuad.material = this.materialHighPassFilter),
			this.renderMesh(t);
		let i = this.renderTargetBright;
		for (let e = 0; e < this.nMips; e++)
			(this.fullScreenQuad.material = this.separableBlurMaterials[e]),
				(this.separableBlurMaterials[e].uniforms.tDiffuse.value = i.getColorTexture()),
				(this.separableBlurMaterials[e].uniforms.direction.value = Tr.BlurDirectionX),
				(this.currentRenderTarget = this.renderTargetsHorizontal[e]),
				this.renderMesh(t),
				(this.fullScreenQuad.material = this.separableBlurYMaterials[e]),
				(this.separableBlurYMaterials[e].uniforms.tDiffuse.value =
					this.renderTargetsHorizontal[e].getColorTexture()),
				(this.separableBlurYMaterials[e].uniforms.direction.value = Tr.BlurDirectionY),
				(this.currentRenderTarget = this.renderTargetsVertical[e]),
				this.renderMesh(t),
				(i = this.renderTargetsVertical[e]);
		return (
			(this.fullScreenQuad.material = this.compositeMaterial),
			(this.currentRenderTarget = this.renderTargetsHorizontal[0]),
			this.renderMesh(t),
			(this.blendUniforms.baseColorTexture.value = e),
			(this.fullScreenQuad.material = this.blendMaterial),
			(this.currentRenderTarget = this.blendTarget),
			this.renderMesh(t),
			this.currentRenderTarget.getColorTexture()
		);
	}
	init() {
		(this.renderTargetsHorizontal = []), (this.renderTargetsVertical = []), (this.nMips = 5);
		let t = Math.round(this.width / 2),
			e = Math.round(this.height / 2);
		this.renderTargetBright = new pr("render", [this.createColorAttachment(t, e)]);
		for (let i = 0; i < this.nMips; i++) {
			const i = new pr("render", [this.createColorAttachment(t, e)]);
			this.renderTargetsHorizontal.push(i);
			const r = new pr("render", [this.createColorAttachment(t, e)]);
			this.renderTargetsVertical.push(r), (t = Math.round(t / 2)), (e = Math.round(e / 2));
		}
		this.highPassUniforms = {
			tDiffuse: { type: "texture", value: null },
			tSampler: { type: "sampler", value: this.defaultSampler },
			luminosityThreshol: { type: "float", value: this.threshold },
			smoothWidth: { type: "float", value: 0.01 },
			defaultColor: { type: "color", value: new St(0, 0, 0) },
			defaultOpacity: { type: "float", value: 1 }
		};
		const i = ki("luminosityHigh", {});
		(this.materialHighPassFilter = new lr({
			type: "bloom",
			uniforms: this.highPassUniforms,
			vert: i.vert,
			frag: i.frag
		})),
			(this.materialHighPassFilter.renderState = this.renderState),
			(this.separableBlurMaterials = []),
			(this.separableBlurYMaterials = []);
		const r = [3, 5, 7, 9, 11];
		(t = Math.round(this.width / 2)), (e = Math.round(this.height / 2));
		for (let i = 0; i < this.nMips; i++)
			this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[i], "BlurMaterial" + i)),
				this.separableBlurYMaterials.push(this.getSeperableBlurMaterial(r[i], "BlurMaterialY" + i)),
				(t = Math.round(t / 2)),
				(e = Math.round(e / 2));
		(this.compositeMaterial = this.getCompositeMaterial(this.nMips, "compositeMaterial")),
			(this.compositeMaterial.renderState = this.renderState),
			(this.blendUniforms = {
				tDiffuse: { type: "texture", value: this.renderTargetsHorizontal[0].getColorTexture() },
				baseColorTexture: { type: "texture", value: null },
				tSampler: { type: "sampler", value: this.defaultSampler }
			});
		const n = ki("blend", {});
		(this.blendMaterial = new lr({ type: "postBlend", uniforms: this.blendUniforms, vert: n.vert, frag: n.frag })),
			(this.blendMaterial.renderState = this.renderState),
			(this.blendTarget = new pr("render", [this.createColorAttachment(this.width, this.height)]));
	}
	createColorAttachment(t, e) {
		const i = new Ae({
			size: { width: t, height: e, depth: 1 },
			format: l.BGRA8Unorm,
			usage: a.RenderAttachment | a.TextureBinding
		});
		return new Ge({ r: 0, g: 0, b: 0, a: 0 }, { texture: i });
	}
	getCompositeMaterial(t, e) {
		return new lr({
			type: e,
			uniforms: {
				blurTexture1: { type: "texture", value: this.renderTargetsVertical[0].getColorTexture() },
				blurTexture2: { type: "texture", value: this.renderTargetsVertical[1].getColorTexture() },
				blurTexture3: { type: "texture", value: this.renderTargetsVertical[2].getColorTexture() },
				blurTexture4: { type: "texture", value: this.renderTargetsVertical[3].getColorTexture() },
				blurTexture5: { type: "texture", value: this.renderTargetsVertical[4].getColorTexture() },
				tSampler: { type: "sampler", value: this.defaultSampler },
				bloomStrength: { type: "float", value: this.strength },
				bloomRadius: { type: "float", value: this.radius },
				bloomFactors: { type: "float-array", value: [1, 0.8, 0.6, 0.4, 0.2] },
				bloomTintColors: {
					type: "vec3-array",
					value: [new ct(1, 1, 1), new ct(1, 1, 1), new ct(1, 1, 1), new ct(1, 1, 1), new ct(1, 1, 1)]
				}
			},
			vert: "\n              struct VertexInput {\n                    @location(0) position: vec2<f32>,       \n               }\n               struct VertexOutput {\n                    @builtin(position) position: vec4<f32>,\n                    @location(0) uv: vec2<f32>,\n                };\n               @vertex\n               fn main(input: VertexInput) -> VertexOutput {\n                var output:VertexOutput;\n                output.uv = input.position * 0.5 + 0.5;\n                output.position = vec4<f32>(input.position, 0.0, 1.0);;\n                return output;\n               }\n                ",
			frag: "\n                struct FragInput {\n                    @location(0) uv: vec2<f32>,\n                };\n                struct BloomUniforms{\n                    bloomStrength:f32,\n                    bloomRadius:f32,\n                    bloomFactors : array<f32,5>,\n                    bloomTintColors : array<vec3<f32>,5>\n                }  \n                @group(0) @binding(0)  var<storage, read> bloomUniforms : BloomUniforms;\n\n                @group(0) @binding({{blurTexture1Binding}}) var blurTexture1: texture_2d<f32>;\n                @group(0) @binding({{blurTexture2Binding}}) var blurTexture2: texture_2d<f32>;\n                @group(0) @binding({{blurTexture3Binding}}) var blurTexture3: texture_2d<f32>;\n                @group(0) @binding({{blurTexture4Binding}}) var blurTexture4: texture_2d<f32>;\n                @group(0) @binding({{blurTexture5Binding}}) var blurTexture5: texture_2d<f32>;\n                @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n\n\t\t\t\tfn lerpBloomFactor(factor:f32)->f32 {\n\t\t\t\t\tlet mirrorFactor:f32 = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomUniforms.bloomRadius);\n\t\t\t\t}\n                @fragment\n\t\t\t\tfn main(input:FragInput)-> @location(0) vec4<f32>  {\n\t\t\t\t\treturn bloomUniforms.bloomStrength * ( lerpBloomFactor(bloomUniforms.bloomFactors[0]) * vec4(bloomUniforms.bloomTintColors[0], 1.0) * textureSample(blurTexture1, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[1]) * vec4<f32>(bloomUniforms.bloomTintColors[1], 1.0) * textureSample(blurTexture2, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[2]) * vec4<f32>(bloomUniforms.bloomTintColors[2], 1.0) * textureSample(blurTexture3, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[3]) * vec4<f32>(bloomUniforms.bloomTintColors[3], 1.0) * textureSample(blurTexture4, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[4]) * vec4<f32>(bloomUniforms.bloomTintColors[4], 1.0) * textureSample(blurTexture5, tSampler, input.uv) );\n\t\t\t\t}"
		});
	}
	getSeperableBlurMaterial(t, e) {
		const i = ki("blur", { KERNEL_RADIUS: t, SIGMA: t }),
			r = new lr({
				type: e,
				uniforms: {
					tDiffuse: { type: "texture", value: null },
					direction: { type: "vec2", value: new wt(0, 0) },
					tSampler: { type: "sampler", value: this.defaultSampler }
				},
				vert: i.vert,
				frag: i.frag
			});
		return (r.renderState = this.renderState), r;
	}
}
(Tr.BlurDirectionX = new wt(1, 0)), (Tr.BlurDirectionY = new wt(0, 1));
class Er {
	constructor(t, e) {
		(this.normal = ct.clone(t)), (this.distance = e);
	}
	normalize() {
		const t = 1 / this.normal.length();
		return (this.normal = ct.multiplyByScalar(this.normal, t, this.normal)), (this.distance *= t), this;
	}
	static fromPointNormal(t, e, i) {
		if (!et.equalsEpsilon(ct.magnitude(e), 1, et.EPSILON6)) throw new Error("normal must be normalized.");
		const r = -ct.dot(e, t);
		return K(i) ? (ct.clone(e, i.normal), (i.distance = r), i) : new Er(e, r);
	}
	static fromVector4(t, e) {
		const i = ct.fromVector4(t, Mr),
			r = t.w;
		if (!et.equalsEpsilon(ct.magnitude(i), 1, et.EPSILON6)) throw new Error("normal must be normalized.");
		return K(e) ? (ct.clone(i, e.normal), (e.distance = r), e) : new Er(i, r);
	}
	static getPointDistance(t, e) {
		return ct.dot(t.normal, e) + t.distance;
	}
	static projectPointOntoPlane(t, e, i) {
		K(i) || (i = new ct());
		const r = Er.getPointDistance(t, e),
			n = ct.multiplyByScalar(t.normal, r, _r);
		return ct.subtract(e, n, i);
	}
	static transform(t, e, i) {
		const r = t.normal,
			n = t.distance,
			s = $t.inverseTranspose(e, Ur);
		let a = rt.fromElements(r.x, r.y, r.z, n, Lr);
		a = $t.multiplyByVector(s, a, a);
		const o = ct.fromVector4(a, Rr);
		return (a = rt.divideByScalar(a, ct.magnitude(o), a)), Er.fromVector4(a, i);
	}
	static clone(t, e) {
		return K(e) ? (ct.clone(t.normal, e.normal), (e.distance = t.distance), e) : new Er(t.normal, t.distance);
	}
	static equals(t, e) {
		return t.distance === e.distance && ct.equals(t.normal, e.normal);
	}
}
(Er.ORIGIN_XY_PLANE = Object.freeze(new Er(ct.UNIT_Z, 0))),
	(Er.ORIGIN_YZ_PLANE = Object.freeze(new Er(ct.UNIT_X, 0))),
	(Er.ORIGIN_ZX_PLANE = Object.freeze(new Er(ct.UNIT_Y, 0)));
const Mr = new ct(),
	_r = new ct(),
	Ur = new $t(),
	Lr = new rt(),
	Rr = new ct();
class Cr {
	constructor(t) {
		this.planes = tt(t, [
			new Er(ct.UNIT_Z, 0),
			new Er(ct.UNIT_Z, 0),
			new Er(ct.UNIT_Z, 0),
			new Er(ct.UNIT_Z, 0),
			new Er(ct.UNIT_Z, 0),
			new Er(ct.UNIT_Z, 0)
		]);
	}
	static fromBoundingSphere(t, e) {
		if (!K(t)) throw new Error("boundingSphere is required.");
		K(e) || (e = new Cr());
		const i = Dr.length,
			r = e.planes;
		r.length = 2 * i;
		const n = t.center,
			s = t.radius;
		let a = 0;
		for (let t = 0; t < i; ++t) {
			const e = Dr[t];
			let i = r[a],
				o = r[a + 1];
			K(i) || (i = r[a] = new rt()),
				K(o) || (o = r[a + 1] = new rt()),
				ct.multiplyByScalar(e, -s, Ar),
				ct.add(n, Ar, Ar),
				(i.x = e.x),
				(i.y = e.y),
				(i.z = e.z),
				(i.w = -ct.dot(e, Ar)),
				ct.multiplyByScalar(e, s, Ar),
				ct.add(n, Ar, Ar),
				(o.x = -e.x),
				(o.y = -e.y),
				(o.z = -e.z),
				(o.w = -ct.dot(ct.negate(e, zr), Ar)),
				(a += 2);
		}
		return e;
	}
	computeVisibility(t) {
		if (!K(t)) throw new Error("boundingVolume is required.");
		const e = this.planes;
		let i = !1;
		for (let r = 0, n = e.length; r < n; ++r) {
			const n = t.intersectPlane(e[r]);
			if (n === F.OUTSIDE) return F.OUTSIDE;
			n === F.INTERSECTING && (i = !0);
		}
		return i ? F.INTERSECTING : F.INSIDE;
	}
}
(Cr.MASK_OUTSIDE = 4294967295), (Cr.MASK_INSIDE = 0), (Cr.MASK_INDETERMINATE = 2147483647);
const Dr = [new ct(), new ct(), new ct()];
ct.clone(ct.UNIT_X, Dr[0]), ct.clone(ct.UNIT_Y, Dr[1]), ct.clone(ct.UNIT_Z, Dr[2]);
const Ar = new ct(),
	zr = new ct();
new rt(), new Er(new ct(1, 0, 0), 0);
class Or extends li {
	constructor() {
		super(),
			(this._viewMatrix = void 0),
			(this.isCamera = !0),
			(this.cullingVolume = new Cr()),
			(this._viewMatrix = new $t()),
			(this._vpMatrix = new $t()),
			(this.projectMatrixDirty = !0),
			this.createShaderData();
	}
	get viewMatrix() {
		return this.updateMatrix(), $t.inverse(this.modelMatrix, this._viewMatrix), this._viewMatrix;
	}
	get projectionMatrix() {
		return this.updateProjectionMatrix(), this._projectionMatrix;
	}
	get vpMatrix() {
		return $t.multiply(this.projectionMatrix, this.viewMatrix, this._vpMatrix), this._vpMatrix;
	}
	get inverseViewMatrix() {
		return this.updateMatrix(), this.modelMatrix;
	}
	updateProjectionMatrix() {}
	getCullingVolume() {
		const t = this.viewMatrix.clone(new $t()),
			e = $t.multiply(this.projectionMatrix, t, new $t()),
			i = this.cullingVolume.planes,
			r = e,
			n = r[0],
			s = r[1],
			a = r[2],
			o = r[3],
			c = r[4],
			l = r[5],
			h = r[6],
			u = r[7],
			f = r[8],
			d = r[9],
			m = r[10],
			p = r[11],
			g = r[12],
			x = r[13],
			y = r[14],
			v = r[15];
		return (
			(i[0] = new Er(new ct(o - n, u - c, p - f), v - g)),
			i[0].normalize(),
			(i[1] = new Er(new ct(o + n, u + c, p + f), v + g)),
			i[1].normalize(),
			(i[2] = new Er(new ct(o + s, u + l, p + d), v + x)),
			i[2].normalize(),
			(i[3] = new Er(new ct(o - s, u - l, p - d), v - x)),
			i[3].normalize(),
			(i[4] = new Er(new ct(o - a, u - h, p - m), v - y)),
			i[4].normalize(),
			(i[5] = new Er(new ct(o + a, u + h, p + m), v + y)),
			i[5].normalize(),
			this.cullingVolume
		);
	}
	createShaderData() {
		this.shaderData = new Ce("camera", 0, 1, 1);
		const t = new De("camera");
		t.setMatrix4("projectionMatrix", () => this.projectionMatrix),
			t.setMatrix4("viewMatrix", () => this.viewMatrix),
			t.setMatrix4("inverseViewMatrix", () => this.inverseViewMatrix),
			t.setFloatVec3("position", () => this.position),
			this.shaderData.setUniformBuffer("camera", t);
	}
}
class Ir extends Or {
	constructor(t = 50, e = 1, i = 0.1, r = 2e3) {
		super(),
			(this._aspect = e),
			(this.fov = t),
			(this.near = i),
			(this.far = r),
			(this.xOffset = 0),
			(this.yOffset = 0),
			(this.projectMatrixDirty = !0),
			this.updateCameraParms(),
			(this.cullingVolume = new Cr()),
			(this.isPerspectiveCamera = !0);
	}
	get aspect() {
		return this._aspect;
	}
	set aspect(t) {
		(this.projectMatrixDirty = !0), (this._aspect = t);
	}
	get fov() {
		return this._fov;
	}
	set fov(t) {
		(this.projectMatrixDirty = !0), (this._fov = t);
	}
	updateCameraParms() {
		(this.top = this.near * Math.tan(0.5 * et.RADIANS_PER_DEGREE * this.fov)),
			(this.height = 2 * this.top),
			(this.width = this.aspect * this.height),
			(this.left = -0.5 * this.width);
	}
	updateProjectionMatrix() {
		this.projectMatrixDirty &&
			(this.updateCameraParms(),
			(this._projectionMatrix = $t.makePerspective(
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
class Nr extends Or {
	constructor(t = -1, e = 1, i = 1, r = -1, n = 0.1, s = 2e3) {
		super(),
			(this.near = n),
			(this.far = s),
			(this.left = t),
			(this.top = i),
			(this.bottom = r),
			(this.right = e),
			(this.isOrthographicCamera = !0);
	}
	updateCameraParms() {
		const t = (this.right - this.left) / 2,
			e = (this.top - this.bottom) / 2,
			i = (this.right + this.left) / 2,
			r = (this.top + this.bottom) / 2;
		return { left: i - t, right: i + t, top: r + e, bottom: r - e };
	}
	updateProjectionMatrix() {
		if (this.projectMatrixDirty) {
			const { left: t, right: e, top: i, bottom: r } = this.updateCameraParms();
			(this._projectionMatrix = $t.makeOrthographic(t, e, i, r, this.near, this.far)),
				(this.projectMatrixDirty = !1);
		}
	}
}
class Pr {
	constructor(t, e) {
		(this._shadowMapSize = t), (this._camera = e), this._init();
	}
	get camera() {
		return this._camera;
	}
	get shadowMapSize() {
		return this._shadowMapSize;
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
		this._shadowMap = new Ae({
			size: { width: this._shadowMapSize, height: this._shadowMapSize, depth: 1 },
			fixedSize: !0,
			sampleType: g.Depth,
			format: l.Depth24Plus,
			usage: a.RenderAttachment | a.TextureBinding | a.CopySrc
		});
	}
	update(t) {}
}
class Br extends Pr {
	constructor() {
		super(1024, new Ir(60, 1, 0.1, 500)), (this.type = "spotLightShadow");
	}
	update(t) {
		this.updateMatrices(t);
	}
	updateMatrices(t) {
		this.camera.position.copy(t.position);
		const { x: e, y: i, z: r } = t.target;
		this.camera.lookAt(e, i, r), this.camera.updateMatrix();
	}
}
class Vr extends mt {
	constructor(t, e, i = 0, r = 60, n = 60, s = 4, a = !0) {
		super(t, e),
			(this._distance = i),
			(this._angle = (r / 180) * Math.PI),
			(this._penumbra = (n / 180) * Math.PI),
			(this._decay = s),
			(this.type = "spot"),
			(this.angleDirty = !0),
			(this.penumbraDirty = !0),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.coneCosDirty = !0),
			(this.penumbraCosDirty = !0),
			a && (this.shadow = new Br()),
			this.updateConeCosOrPenumbraCos();
	}
	get dirtectDirty() {
		return this.positionDirty || this.targetDirty;
	}
	set dirtectDirty(t) {
		(this.positionDirty = t), (this.targetDirty = t);
	}
	get directional() {
		const t = new ct();
		return ct.subtract(this.position, this.target, t), ct.normalize(t, new ct());
	}
	get angle() {
		return this._angle;
	}
	set angle(t) {
		(this.angleDirty = !0), (this._angle = (t / 180) * Math.PI), this.updateConeCosOrPenumbraCos();
	}
	get penumbra() {
		return this._penumbra;
	}
	set penumbra(t) {
		(this.penumbraDirty = !0), (this._penumbra = (t / 180) * Math.PI), this.updateConeCosOrPenumbraCos();
	}
	set distance(t) {
		(this.distanceDirty = !0), (this._distance = t);
	}
	get distance() {
		return this._distance;
	}
	set decay(t) {
		(this.decayDirty = !0), (this._decay = t);
	}
	get decay() {
		return this._decay;
	}
	set coneCos(t) {
		(this.coneCosDirty = !0), (this._coneCos = t);
	}
	get coneCos() {
		return this._coneCos;
	}
	set penumbraCos(t) {
		(this.penumbraCosDirty = !0), (this._penumbraCos = t);
	}
	get penumbraCos() {
		return this._penumbraCos;
	}
	updateConeCosOrPenumbraCos() {
		(this._coneCos = Math.cos(this.angle)), (this._penumbraCos = Math.cos(this.angle + this.penumbra));
	}
}
class Fr extends Pr {
	constructor() {
		super(1024, new Ir(60, 1, 0.1, 500)), (this.type = "pointLightShadow");
	}
}
class $r extends mt {
	constructor(t, e, i = 0, r = 4, n = !0) {
		super(t, e),
			(this._distance = i),
			(this._decay = r),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.type = "point"),
			n && (this.shadow = new Fr());
	}
	set distance(t) {
		(this.distanceDirty = !0), (this._distance = t);
	}
	get distance() {
		return this._distance;
	}
	set decay(t) {
		(this.decayDirty = !0), (this._decay = t);
	}
	get decay() {
		return this._decay;
	}
}
class Gr extends Pr {
	constructor() {
		super(1024, new Nr(-50, 50, 50, -50, 0, 100)), (this.type = "directionalLightShadow");
	}
	update(t) {
		this.updateMatrices(t);
	}
	updateMatrices(t) {
		this.camera.position.copy(t.position);
		const { x: e, y: i, z: r } = t.target;
		this.camera.lookAt(e, i, r), this.camera.updateMatrix();
	}
}
class qr extends mt {
	constructor(t, e, i = !0) {
		super(t, e), (this.type = "directional"), i && (this.shadow = new Gr());
	}
	get dirtectDirty() {
		return this.positionDirty || this.targetDirty;
	}
	set dirtectDirty(t) {
		(this.positionDirty = t), (this.targetDirty = t);
	}
	get directional() {
		const t = new ct();
		return ct.subtract(this.target, this.position, t), t.normalize();
	}
}
function kr(t, e, i, r) {
	switch (t) {
		case 5120:
			return new Int8Array(e, i, r);
		case 5121:
			return new Uint8Array(e, i, r);
		case 5122:
			return new Int16Array(e, i, r);
		case 5123:
			return new Uint16Array(e, i, r);
		case 5124:
			return new Int32Array(e, i, r);
		case 5125:
			return new Uint32Array(e, i, r);
		case 5126:
			return new Float32Array(e, i, r);
		default:
			throw new Error("invalid component type");
	}
}
const jr = {
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
class Xr {
	constructor(t, e, i = 0, r) {
		(this.json = t),
			(this.bufferViews = t.bufferViews),
			(this.glbOffset = i),
			(this.rootUrl = e),
			(this.scenes = t.scenes),
			(this.defaultScene = t.scene || 0),
			(this.nodes = t.nodes),
			(this.cameras = t.cameras || []),
			(this.glbBin = r),
			(this.meshes = []);
	}
	async parseData() {
		(this.buffers = await this.loadBuffes()),
			(this.images = await this.loadImages()),
			this.parseSamplers(),
			this.parseTextures(),
			this.parseMaterials(),
			this.parseAccessors(),
			this.parseMesh(),
			this.parseAnimations();
	}
	parseSamplers() {
		this.samplers = this.json.samplers ? this.json.samplers.map((t) => this.getSampler(t)) : [];
	}
	parseTextures() {
		this.textures = this.json.textures
			? this.json.textures.map((t) => ({
					sampler: void 0 !== t.sampler ? this.samplers[t.sampler] : this.getSampler({}),
					texture: this.createTexture(t.source)
			  }))
			: [];
	}
	parseMaterials() {
		this.materials = this.json.materials
			? this.json.materials.map((t) => {
					const e = new or();
					return (
						t.normalTexture && (e.normalTexture = this.textures[t.normalTexture.index].texture),
						t.occlusionTexture && (e.aoTexture = this.textures[t.occlusionTexture.index].texture),
						t.emissiveTexture && (e.emissiveTexture = this.textures[t.emissiveTexture.index].texture),
						t.pbrMetallicRoughness?.baseColorTexture &&
							(e.baseTexture = this.textures[t.pbrMetallicRoughness?.baseColorTexture.index].texture),
						t.pbrMetallicRoughness?.metallicRoughnessTexture &&
							(e.metalnessRoughnessTexture =
								this.textures[t.pbrMetallicRoughness?.metallicRoughnessTexture.index].texture),
						(e.baseSampler = new ze({
							magFilter: "linear",
							minFilter: "linear",
							addressModeU: "repeat",
							addressModeV: "repeat"
						})),
						(e.roughness = 0),
						(e.metalness = 1),
						e
					);
			  })
			: [];
	}
	parseAccessors() {
		this.accessors = this.json.accessors.map((t) => {
			const e = jr[t.type];
			let i;
			if (
				((i =
					void 0 === t.bufferView
						? kr(t.componentType, new ArrayBuffer(e * t.count * jr[t.componentType]), 0, t.count * e)
						: this.getBufferView(t, e)),
				t.sparse)
			) {
				(t.sparse.indices.count = t.sparse.count),
					(t.sparse.values.count = t.sparse.count),
					(t.sparse.values.componentType = t.componentType);
				const r = this.getBufferView(t.sparse.indices, 1),
					n = this.getBufferView(t.sparse.values, e);
				for (let s = 0; s < t.sparse.count; s += 1)
					for (let t = 0; t < e; t += 1) i[r[s] * e + t] = n[s * e + t];
			}
			return i;
		});
	}
	parseAnimations() {
		this.animations =
			this.json.animations?.map((t) => {
				const e = t.channels.map(({ sampler: e, target: i }) => ({
						input: this.accessors[t.samplers[e].input],
						output: this.accessors[t.samplers[e].output],
						interpolation: t.samplers[e].interpolation || "LINEAR",
						node: i.node,
						path: i.path
					})),
					i = e.reduce((t, { input: e }) => Math.max(t, e[e.length - 1]), 0);
				return { channels: e, length: i };
			}) || [];
	}
	parseMesh() {
		this.json.meshes.map((t) =>
			t.primitives.map((t) => {
				const e = void 0 !== t.material ? this.materials[t.material] : { pbrMetallicRoughness: {} },
					i = this.createGeometry(t, e),
					r = new pi(i, e);
				this.meshes.push(r);
			})
		);
	}
	getSampler(t) {
		return new ze({
			magFilter: jr[t.magFilter || 9729],
			minFilter: jr[t.minFilter || 9729],
			addressModeU: jr[t.wrapS || 10497],
			addressModeV: jr[t.wrapT || 10497]
		});
	}
	getBufferView(t, e) {
		const i = this.bufferViews[t.bufferView],
			r = (i.byteOffset || 0) + (t.byteOffset || 0),
			n = Math.max(i.byteStride / 4 || 0, e);
		let s = kr(
			t.componentType,
			this.buffers[i.buffer],
			0 === i.buffer ? r + this.glbOffset : r,
			(t.count - 1) * n + e
		);
		if (n > e) {
			const i = new (0, s.constructor)(t.count * e);
			for (let t = 0, r = 0; t < i.length; t += e, r += n) for (let n = 0; n < e; n += 1) i[t + n] = s[r + n];
			s = i;
		}
		return s;
	}
	createGeometry(t, e) {
		let i = null;
		const r = { HAS_NORMAL: !0 };
		let n;
		void 0 !== t.indices
			? ((i = (function (t) {
					if (t instanceof Uint16Array || t instanceof Uint32Array) return t;
					let e;
					return (
						(e = t instanceof Float32Array ? new Uint32Array(t.length) : new Uint16Array(t.length)),
						t.forEach((t, i) => {
							e[i] = t;
						}),
						e
					);
			  })(this.accessors[t.indices])),
			  (n = this.json.accessors[t.indices].count))
			: (n = this.json.accessors[t.attributes.POSITION].count);
		const s = this.accessors[t.attributes.POSITION];
		let a;
		this.json.accessors[t.attributes.POSITION],
			(a =
				void 0 !== t.attributes.NORMAL
					? this.accessors[t.attributes.NORMAL]
					: (function (t, e) {
							const i = new Float32Array(e.length),
								r = t ? t.length : e.length;
							for (let n = 0; n < r; n += 3) {
								const r = [];
								for (let e = 0; e < 3; e += 1) t ? r.push(t[n + e]) : r.push(n + e);
								const s = r.map((t) => {
										const i = 3 * t;
										return new ct(e[i], e[i + 1], e[i + 2]);
									}),
									a = new ct();
								ct.subtract(s[1], s[0], a);
								const o = new ct();
								ct.subtract(s[2], s[0], o);
								const c = new ct();
								ct.cross(a.normalize(), o.normalize(), c);
								for (let t = 0; t < 3; t += 1) {
									const e = 3 * (n + t);
									(i[e + 0] += c.x), (i[e + 1] += c.y), (i[e + 2] += c.z);
								}
							}
							return i;
					  })(i, s));
		let o = null;
		void 0 !== t.attributes.TEXCOORD_0 && ((o = this.accessors[t.attributes.TEXCOORD_0]), (r.HAS_UV = !0)),
			void 0 !== t.attributes.TEXCOORD_1 && (this.accessors[t.attributes.TEXCOORD_1], (r.HAS_UV1 = !0)),
			void 0 !== t.attributes.TANGENT && void 0 !== t.attributes.NORMAL
				? (this.accessors[t.attributes.TANGENT], (r.HAS_TANGENT = !0))
				: e.normalTexture;
		let c = null;
		void 0 !== t.attributes.COLOR_0 && ((c = this.accessors[t.attributes.COLOR_0]), (r.HAS_COLOR = !0)),
			void 0 !== t.attributes.JOINTS_0 && (this.accessors[t.attributes.JOINTS_0], (r.HAS_SKIN = !0)),
			void 0 !== t.attributes.WEIGHTS_0 && this.accessors[t.attributes.WEIGHTS_0];
		const l = new zi({ type: "pbrGeomtry" });
		return (
			i && l.setIndice(Array.from(i)),
			s && l.setAttribute(new ke("position", Array.from(s), 3)),
			a && l.setAttribute(new ke("normal", Array.from(a), 3)),
			c && l.setAttribute(new ke("color", Array.from(c), 3)),
			o && l.setAttribute(new ke("uv", Array.from(o), 2)),
			(l.defines = r),
			l.computeBoundingSphere(Array.from(s)),
			(l.count = n),
			l
		);
	}
	createTexture(t) {
		return new Ae({
			size: { width: this.images[t].width, height: this.images[t].height, depth: 1 },
			data: { source: this.images[t] },
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
		});
	}
	async loadImages() {
		const t = [];
		let e = Promise.resolve();
		this.json.images &&
			(e = Promise.all(
				this.json.images.map(async (e, i) => {
					if (e.uri) {
						const r = "data:" === e.uri.slice(0, 5) ? e.uri : `${this.rootUrl}/${e.uri}`;
						t[i] = await fetch(r)
							.then((t) => t.blob())
							.then((t) => createImageBitmap(t, { colorSpaceConversion: "none" }));
					}
				})
			));
		let i = Promise.resolve();
		return (
			this.json.images &&
				(i = Promise.all(
					this.json.images.map(async (e, i) => {
						if (void 0 !== e.bufferView) {
							const { buffer: r, byteOffset: n, byteLength: s } = this.json.bufferViews[e.bufferView],
								a = new Uint8Array(this.buffers[r], 0 === r ? n + this.glbOffset : n, s);
							let o;
							o = e.mimeType ? e.mimeType : 255 === a[0] ? "image/jpeg" : "image/png";
							const c = new Blob([a], { type: o });
							t[i] = await createImageBitmap(c, { colorSpaceConversion: "none" });
						}
					})
				)),
			await Promise.all([e, i]),
			t
		);
	}
	async loadBuffes() {
		const t = [];
		return (
			await Promise.all(
				this.json.buffers.map((e, i) => {
					if (!e.uri) {
						if (0 !== i) throw new Error("buffer uri undefined");
						return (t[i] = this.glbBin), Promise.resolve();
					}
					const r = "data:" === e.uri.slice(0, 5) ? e.uri : `${this.rootUrl}/${e.uri}`;
					return fetch(r)
						.then((t) => t.arrayBuffer())
						.then((e) => {
							t[i] = e;
						});
				})
			),
			t
		);
	}
}
async function Hr(t) {
	let e;
	const i = t.split(".").pop(),
		r = t.substring(0, t.lastIndexOf("/"));
	if ("gltf" === i) {
		const i = await fetch(t).then((t) => t.json());
		e = new Xr(i, r, 0);
	} else {
		const i = await fetch(t).then((t) => t.arrayBuffer()),
			n = new Uint32Array(i, 12, 1)[0],
			s = new Uint8Array(i, 20, n),
			a = JSON.parse(new TextDecoder("utf-8").decode(s));
		e = new Xr(a, r, 28 + n, i);
	}
	return await e.parseData(), e;
}
async function Yr(t) {
	const e = document.createElement("img");
	(e.src = t), await e.decode();
	const i = await createImageBitmap(e);
	return new Ae({ size: { width: i.width, height: i.height, depth: 1 }, data: { source: i }, format: "rgba8unorm" });
}
class Wr {
	constructor(t = 1, e = 0, i = 0) {
		return (this.radius = t), (this.phi = e), (this.theta = i), this;
	}
	set(t, e, i) {
		return (this.radius = t), (this.phi = e), (this.theta = i), this;
	}
	copy(t) {
		return (this.radius = t.radius), (this.phi = t.phi), (this.theta = t.theta), this;
	}
	makeSafe() {
		const t = 1e-6;
		return (this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this;
	}
	setFromVector3(t) {
		return this.setFromCartesianCoords(t.x, t.y, t.z);
	}
	setFromCartesianCoords(t, e, i) {
		return (
			(this.radius = Math.sqrt(t * t + e * e + i * i)),
			0 === this.radius
				? ((this.theta = 0), (this.phi = 0))
				: ((this.theta = Math.atan2(t, i)), (this.phi = Math.acos(et.clamp(e / this.radius, -1, 1)))),
			this
		);
	}
	clone() {
		return new Wr(this.radius, this.phi, this.theta);
	}
}
const Zr = { type: "change" },
	Kr = { type: "start" },
	Qr = { type: "end" };
class Jr extends hr {
	constructor(t, e) {
		super(),
			void 0 === e && console.warn('OrbitControls: The second parameter "domElement" is now mandatory.'),
			e === document &&
				console.error(
					'OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
				),
			(this.object = t),
			(this.domElement = e),
			(this.domElement.style.touchAction = "none"),
			(this.enabled = !0),
			(this.target = new ct()),
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
			(this.mouseButtons = { LEFT: bn.ROTATE, MIDDLE: bn.DOLLY, RIGHT: bn.PAN }),
			(this.touches = { ONE: Sn.ROTATE, TWO: Sn.DOLLY_PAN }),
			(this.target0 = this.target.clone()),
			(this.position0 = this.object.position.clone()),
			(this.zoom0 = this.object.zoom),
			(this._domElementKeyEvents = null);
		const i = this;
		(this.update = (function () {
			const t = new ct(),
				e = new je().setFromUnitVectors(i.object.up, new ct(0, 1, 0)),
				r = e.clone().invert(),
				n = new ct(),
				s = new je(),
				a = 2 * Math.PI;
			return function () {
				const o = i.object.position;
				t.copy(o).subtract(i.target),
					t.applyQuaternion(e),
					nn.setFromVector3(t),
					i.autoRotate && en === tn.NONE && wn(i.getAutoRotationAngle()),
					i.enableDamping
						? ((nn.theta += sn.theta * i.dampingFactor), (nn.phi += sn.phi * i.dampingFactor))
						: ((nn.theta += sn.theta), (nn.phi += sn.phi));
				let c = i.minAzimuthAngle,
					l = i.maxAzimuthAngle;
				return (
					isFinite(c) &&
						isFinite(l) &&
						(c < -Math.PI ? (c += a) : c > Math.PI && (c -= a),
						l < -Math.PI ? (l += a) : l > Math.PI && (l -= a),
						(nn.theta =
							c <= l
								? Math.max(c, Math.min(l, nn.theta))
								: nn.theta > (c + l) / 2
								? Math.max(c, nn.theta)
								: Math.min(l, nn.theta))),
					(nn.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, nn.phi))),
					nn.makeSafe(),
					(nn.radius *= an),
					(nn.radius = Math.max(i.minDistance, Math.min(i.maxDistance, nn.radius))),
					!0 === i.enableDamping ? i.target.addScaledVector(on, i.dampingFactor) : i.target.add(on),
					ct.fromSpherical(nn, t),
					t.applyQuaternion(r),
					o.copy(i.target).add(t),
					i.object.lookAt(i.target.x, i.target.y, i.target.z),
					!0 === i.enableDamping
						? ((sn.theta *= 1 - i.dampingFactor),
						  (sn.phi *= 1 - i.dampingFactor),
						  ct.multiplyByScalar(on, 1 - i.dampingFactor, on))
						: (sn.set(0, 0, 0), on.set(0, 0, 0)),
					(an = 1),
					!!(
						cn ||
						ct.distanceSquared(n, i.object.position) > rn ||
						8 * (1 - s.dot(i.object.quaternion)) > rn
					) &&
						(i.dispatchEvent(Zr),
						ct.clone(i.object.position, n),
						je.clone(i.object.quaternion, s),
						(cn = !1),
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
		return ct.distance(this.object.position, this.target);
	}
	listenToKeyEvents(t) {
		t.addEventListener("keydown", this.onKeyDown), (this._domElementKeyEvents = t);
	}
	saveState() {
		ct.clone(this.target, this.target0),
			ct.clone(this.object.position, this.position0),
			(this.zoom0 = this.object.zoom);
	}
	reset() {
		ct.clone(this.target0, this.target),
			ct.clone(this.position0, this.object.position),
			(this.object.zoom = this.zoom0),
			this.object.updateProjectionMatrix(),
			this.dispatchEvent(Zr),
			this.update(),
			(en = tn.NONE);
	}
	init() {
		const t = this,
			e = (function () {
				const t = new ct();
				return function (e, i) {
					t.setFromMatrixColumn(i, 0), t.multiplyByScalar(-e), on.add(t);
				};
			})(),
			i = (function () {
				const e = new ct();
				return function (i, r) {
					!0 === t.screenSpacePanning
						? e.setFromMatrixColumn(r, 1)
						: (e.setFromMatrixColumn(r, 0), ct.cross(t.object.up, e, e)),
						e.multiplyByScalar(i),
						on.add(e);
				};
			})(),
			r = (function () {
				const r = new ct();
				return function (n, s) {
					const a = t.domElement;
					if (t.object.isPerspectiveCamera) {
						const o = t.object.position;
						r.copy(o).subtract(t.target);
						let c = r.length();
						(c *= Math.tan(((t.object.fov / 2) * Math.PI) / 180)),
							e((2 * n * c) / a.clientHeight, t.object.modelMatrix),
							i((2 * s * c) / a.clientHeight, t.object.modelMatrix);
					} else
						t.object.isOrthographicCamera
							? (e(
									(n * (t.object.right - t.object.left)) / t.object.zoom / a.clientWidth,
									t.object.modelMatrix
							  ),
							  i(
									(s * (t.object.top - t.object.bottom)) / t.object.zoom / a.clientHeight,
									t.object.modelMatrix
							  ))
							: (console.warn(
									"WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
							  ),
							  (t.enablePan = !1));
				};
			})(),
			n = (t) => {
				this.object.isPerspectiveCamera
					? (an /= t)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t))),
					  this.object.updateProjectionMatrix(),
					  (cn = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			s = (t) => {
				this.object.isPerspectiveCamera
					? (an *= t)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t))),
					  this.object.updateProjectionMatrix(),
					  (cn = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			a = (t) => {
				hn.set(t.clientX, t.clientY), wt.subtract(hn, ln, un), wt.multiplyByScalar(un, this.rotateSpeed, un);
				const e = this.domElement;
				wn((2 * Math.PI * un.x) / e.clientHeight),
					Tn((2 * Math.PI * un.y) / e.clientHeight),
					wt.clone(hn, ln),
					this.update();
			},
			o = (t) => {
				gn.set(t.clientX, t.clientY),
					wt.subtract(gn, pn, xn),
					xn.y > 0 ? n(w()) : xn.y < 0 && s(w()),
					wt.clone(gn, pn),
					this.update();
			},
			c = (t) => {
				dn.set(t.clientX, t.clientY),
					wt.subtract(dn, fn, mn),
					wt.multiplyByScalar(mn, this.panSpeed, mn),
					r(mn.x, mn.y),
					wt.clone(dn, fn),
					this.update();
			},
			l = (t) => {
				t.deltaY < 0 ? s(w()) : t.deltaY > 0 && n(w()), this.update();
			},
			h = (t) => {
				let e = !1;
				switch (t.code) {
					case this.keys.UP:
						r(0, this.keyPanSpeed), (e = !0);
						break;
					case this.keys.BOTTOM:
						r(0, -this.keyPanSpeed), (e = !0);
						break;
					case this.keys.LEFT:
						r(this.keyPanSpeed, 0), (e = !0);
						break;
					case this.keys.RIGHT:
						r(-this.keyPanSpeed, 0), (e = !0);
				}
				e && (t.preventDefault(), this.update());
			},
			u = () => {
				this.enableZoom && An(), this.enablePan && Dn();
			},
			f = () => {
				this.enableZoom && An(), this.enableRotate && Cn();
			},
			d = (t) => {
				if (1 == yn.length) hn.set(t.pageX, t.pageY);
				else {
					const e = _n(t),
						i = 0.5 * (t.pageX + e.x),
						r = 0.5 * (t.pageY + e.y);
					hn.set(i, r);
				}
				wt.subtract(hn, ln, un), wt.multiplyByScalar(un, this.rotateSpeed, un);
				const e = this.domElement;
				wn((2 * Math.PI * un.x) / e.clientHeight), Tn((2 * Math.PI * un.y) / e.clientHeight), wt.clone(hn, ln);
			},
			m = (t) => {
				if (1 === yn.length) dn.set(t.pageX, t.pageY);
				else {
					const e = _n(t),
						i = 0.5 * (t.pageX + e.x),
						r = 0.5 * (t.pageY + e.y);
					dn.set(i, r);
				}
				wt.subtract(dn, fn, mn), wt.multiplyByScalar(mn, this.panSpeed, mn), r(mn.x, mn.y), wt.clone(dn, fn);
			},
			p = (t) => {
				const e = _n(t),
					i = t.pageX - e.x,
					r = t.pageY - e.y,
					s = Math.sqrt(i * i + r * r);
				gn.set(0, s), xn.set(0, Math.pow(gn.y / pn.y, this.zoomSpeed)), n(xn.y), wt.clone(gn, pn);
			},
			g = (t) => {
				this.enableZoom && p(t), this.enablePan && m(t);
			},
			x = (t) => {
				this.enableZoom && p(t), this.enableRotate && d(t);
			};
		(this.onPointerDown = (t) => {
			!1 !== this.enabled &&
				(0 === yn.length &&
					(this.domElement.setPointerCapture(t.pointerId),
					this.domElement.addEventListener("pointermove", this.onPointerMove),
					this.domElement.addEventListener("pointerup", this.onPointerUp)),
				(function (t) {
					yn.push(t);
				})(t),
				"touch" === t.pointerType ? b(t) : y(t));
		}),
			(this.onPointerMove = (t) => {
				!1 !== this.enabled && ("touch" === t.pointerType ? S(t) : v(t));
			}),
			(this.onPointerUp = (t) => {
				En(t),
					0 === yn.length &&
						(this.domElement.releasePointerCapture(t.pointerId),
						this.domElement.removeEventListener("pointermove", this.onPointerMove),
						this.domElement.removeEventListener("pointerup", this.onPointerUp)),
					this.dispatchEvent(Qr),
					(en = tn.NONE);
			});
		const y = (t) => {
				let e;
				switch (t.button) {
					case 0:
						e = this.mouseButtons.LEFT;
						break;
					case 1:
						e = this.mouseButtons.MIDDLE;
						break;
					case 2:
						e = this.mouseButtons.RIGHT;
						break;
					default:
						e = -1;
				}
				switch (e) {
					case bn.DOLLY:
						if (!1 === this.enableZoom) return;
						!(function (t) {
							pn.set(t.clientX, t.clientY);
						})(t),
							(en = tn.DOLLY);
						break;
					case bn.ROTATE:
						if (t.ctrlKey || t.metaKey || t.shiftKey) {
							if (!1 === this.enablePan) return;
							Ln(t), (en = tn.PAN);
						} else {
							if (!1 === this.enableRotate) return;
							Un(t), (en = tn.ROTATE);
						}
						break;
					case bn.PAN:
						if (t.ctrlKey || t.metaKey || t.shiftKey) {
							if (!1 === this.enableRotate) return;
							Un(t), (en = tn.ROTATE);
						} else {
							if (!1 === this.enablePan) return;
							Ln(t), (en = tn.PAN);
						}
						break;
					default:
						en = tn.NONE;
				}
				en !== tn.NONE && this.dispatchEvent(Kr);
			},
			v = (t) => {
				switch (en) {
					case tn.ROTATE:
						if (!1 === this.enableRotate) return;
						a(t);
						break;
					case tn.DOLLY:
						if (!1 === this.enableZoom) return;
						o(t);
						break;
					case tn.PAN:
						if (!1 === this.enablePan) return;
						c(t);
				}
			};
		(this.onMouseWheel = (t) => {
			!1 !== this.enabled &&
				!1 !== this.enableZoom &&
				en === tn.NONE &&
				(t.preventDefault(), this.dispatchEvent(Kr), l(t), this.dispatchEvent(Qr));
		}),
			(this.onKeyDown = (t) => {
				!1 !== this.enabled && !1 !== this.enablePan && h(t);
			});
		const b = (t) => {
				switch ((Mn(t), yn.length)) {
					case 1:
						switch (this.touches.ONE) {
							case Sn.ROTATE:
								if (!1 === this.enableRotate) return;
								Cn(), (en = tn.TOUCH_ROTATE);
								break;
							case Sn.PAN:
								if (!1 === this.enablePan) return;
								Dn(), (en = tn.TOUCH_PAN);
								break;
							default:
								en = tn.NONE;
						}
						break;
					case 2:
						switch (this.touches.TWO) {
							case Sn.DOLLY_PAN:
								if (!1 === this.enableZoom && !1 === this.enablePan) return;
								u(), (en = tn.TOUCH_DOLLY_PAN);
								break;
							case Sn.DOLLY_ROTATE:
								if (!1 === this.enableZoom && !1 === this.enableRotate) return;
								f(), (en = tn.TOUCH_DOLLY_ROTATE);
								break;
							default:
								en = tn.NONE;
						}
						break;
					default:
						en = tn.NONE;
				}
				en !== tn.NONE && this.dispatchEvent(Kr);
			},
			S = (t) => {
				switch ((Mn(t), en)) {
					case tn.TOUCH_ROTATE:
						if (!1 === this.enableRotate) return;
						d(t), this.update();
						break;
					case tn.TOUCH_PAN:
						if (!1 === this.enablePan) return;
						m(t), this.update();
						break;
					case tn.TOUCH_DOLLY_PAN:
						if (!1 === this.enableZoom && !1 === this.enablePan) return;
						g(t), this.update();
						break;
					case tn.TOUCH_DOLLY_ROTATE:
						if (!1 === this.enableZoom && !1 === this.enableRotate) return;
						x(t), this.update();
						break;
					default:
						en = tn.NONE;
				}
			};
		(this.onContextMenu = (t) => {
			!1 !== this.enabled && t.preventDefault();
		}),
			(this.getAutoRotationAngle = () => ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed);
		const w = () => Math.pow(0.95, this.zoomSpeed);
		this.domElement.addEventListener("contextmenu", this.onContextMenu),
			this.domElement.addEventListener("pointerdown", this.onPointerDown),
			this.domElement.addEventListener("pointercancel", Rn),
			this.domElement.addEventListener("wheel", this.onMouseWheel, { passive: !1 });
	}
	dispose() {
		this.domElement.removeEventListener("contextmenu", this.onContextMenu),
			this.domElement.removeEventListener("pointerdown", this.onPointerDown),
			this.domElement.removeEventListener("pointercancel", Rn),
			this.domElement.removeEventListener("wheel", this.onMouseWheel),
			this.domElement.removeEventListener("pointermove", this.onPointerMove),
			this.domElement.removeEventListener("pointerup", this.onPointerUp),
			null !== this._domElementKeyEvents &&
				this._domElementKeyEvents.removeEventListener("keydown", this.onKeyDown);
	}
}
const tn = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
};
let en = tn.NONE;
const rn = 1e-6,
	nn = new Wr(),
	sn = new Wr();
let an = 1;
const on = new ct();
let cn = !1;
const ln = new wt(),
	hn = new wt(),
	un = new wt(),
	fn = new wt(),
	dn = new wt(),
	mn = new wt(),
	pn = new wt(),
	gn = new wt(),
	xn = new wt(),
	yn = [],
	vn = {};
var bn, Sn;
function wn(t) {
	sn.theta -= t;
}
function Tn(t) {
	sn.phi -= t;
}
function En(t) {
	delete vn[t.pointerId];
	for (let e = 0; e < yn.length; e++) if (yn[e].pointerId == t.pointerId) return void yn.splice(e, 1);
}
function Mn(t) {
	let e = vn[t.pointerId];
	void 0 === e && ((e = new wt()), (vn[t.pointerId] = e)), e.set(t.pageX, t.pageY);
}
function _n(t) {
	const e = t.pointerId === yn[0].pointerId ? yn[1] : yn[0];
	return vn[e.pointerId];
}
function Un(t) {
	ln.set(t.clientX, t.clientY);
}
function Ln(t) {
	fn.set(t.clientX, t.clientY);
}
function Rn(t) {
	En(t);
}
function Cn() {
	if (1 === yn.length) ln.set(yn[0].pageX, yn[0].pageY);
	else {
		const t = 0.5 * (yn[0].pageX + yn[1].pageX),
			e = 0.5 * (yn[0].pageY + yn[1].pageY);
		ln.set(t, e);
	}
}
function Dn() {
	if (1 === yn.length) fn.set(yn[0].pageX, yn[0].pageY);
	else {
		const t = 0.5 * (yn[0].pageX + yn[1].pageX),
			e = 0.5 * (yn[0].pageY + yn[1].pageY);
		fn.set(t, e);
	}
}
function An() {
	const t = yn[0].pageX - yn[1].pageX,
		e = yn[0].pageY - yn[1].pageY,
		i = Math.sqrt(t * t + e * e);
	pn.set(0, i);
}
!(function (t) {
	(t[(t.LEFT = 0)] = "LEFT"),
		(t[(t.MIDDLE = 1)] = "MIDDLE"),
		(t[(t.RIGHT = 2)] = "RIGHT"),
		(t[(t.ROTATE = 0)] = "ROTATE"),
		(t[(t.DOLLY = 1)] = "DOLLY"),
		(t[(t.PAN = 2)] = "PAN");
})(bn || (bn = {})),
	(function (t) {
		(t[(t.ROTATE = 0)] = "ROTATE"),
			(t[(t.PAN = 1)] = "PAN"),
			(t[(t.DOLLY_PAN = 2)] = "DOLLY_PAN"),
			(t[(t.DOLLY_ROTATE = 3)] = "DOLLY_ROTATE");
	})(Sn || (Sn = {}));
export {
	h as AddressMode,
	pt as AmbientLight,
	Ge as Attachment,
	qe as Attribute,
	Yi as Axes,
	Re as BindGroup,
	Ee as BindGroupEntity,
	E as BlendFactor,
	M as BlendOperation,
	ar as BlinnPhongMaterial,
	Tr as BloomPostEffect,
	ir as BoxGeometry,
	$ as Buffer,
	r as BufferUsage,
	St as Color,
	T as ColorWriteFlags,
	f as CompareFunction,
	Ie as Context,
	Zi as CubeTextureLoader,
	w as CullMode,
	qr as DirectionalLight,
	G as DrawCommand,
	u as FilterMode,
	S as FrontFace,
	U as IndexFormat,
	R as InputStepMode,
	pi as Mesh,
	Jr as OrbitControl,
	Nr as OrthographicCamera,
	or as PbrMaterial,
	Ir as PerspectiveCamera,
	sr as PlaneGeometry,
	$r as PointLight,
	b as PrimitiveTopology,
	Ne as RenderState,
	ze as Sampler,
	Sr as Scene,
	lr as ShaderMaterial,
	d as ShaderStage,
	tr as SkyBox,
	er as SphereGeometry,
	Vr as SpotLight,
	_ as StencilOperation,
	x as StorageTextureAccess,
	Ae as Texture,
	c as TextureAspect,
	s as TextureDimension,
	l as TextureFormat,
	g as TextureSampleType,
	a as TextureUsage,
	o as TextureViewDimension,
	rr as TorusKnotGeometry,
	ct as Vector3,
	L as VertexFormat,
	Hr as loadGLTF,
	Yr as loadTexture
};
