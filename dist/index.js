var e,
	t,
	r,
	i,
	n,
	s,
	a,
	o,
	c,
	h,
	l,
	u,
	d,
	f,
	m,
	p,
	g,
	x,
	v,
	y,
	S,
	b,
	w,
	T,
	E,
	M,
	_,
	U,
	L,
	A,
	C,
	D,
	R,
	I,
	z,
	P,
	O,
	B,
	N,
	V,
	F;
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
	})(r || (r = {})),
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
	})(i || (i = {})),
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
	})(h || (h = {})),
	(function (e) {
		(e.ClampToEdge = "clamp-to-edge"), (e.Repeat = "repeat"), (e.MirrorRepeat = "mirror-repeat");
	})(l || (l = {})),
	(function (e) {
		(e.Nearest = "nearest"), (e.Linear = "linear");
	})(u || (u = {})),
	(function (e) {
		(e.Never = "never"),
			(e.Less = "less"),
			(e.Equal = "equal"),
			(e.LessEqual = "less-equal"),
			(e.Greater = "greater"),
			(e.NotEqual = "not-equal"),
			(e.GreaterEqual = "greater-equal"),
			(e.Always = "always");
	})(d || (d = {})),
	(function (e) {
		(e[(e.Vertex = 1)] = "Vertex"), (e[(e.Fragment = 2)] = "Fragment"), (e[(e.Compute = 4)] = "Compute");
	})(f || (f = {})),
	(function (e) {
		(e.Uniform = "uniform"), (e.Storage = "storage"), (e.ReadOnlyStorage = "read-only-storage");
	})(m || (m = {})),
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
	})(S || (S = {})),
	(function (e) {
		(e.CCW = "ccw"), (e.CW = "cw");
	})(b || (b = {})),
	(function (e) {
		(e.None = "none"), (e.Front = "front"), (e.Back = "back");
	})(w || (w = {})),
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
	})(E || (E = {})),
	(function (e) {
		(e.Add = "add"),
			(e.Subtract = "subtract"),
			(e.ReverseSubtract = "reverse-subtract"),
			(e.Min = "min"),
			(e.Max = "max");
	})(M || (M = {})),
	(function (e) {
		(e.Keep = "keep"),
			(e.Zero = "zero"),
			(e.Replace = "replace"),
			(e.Invert = "invert"),
			(e.IncrementClamp = "increment-clamp"),
			(e.DecrementClamp = "decrement-clamp"),
			(e.IncrementWrap = "increment-wrap"),
			(e.DecrementWrap = "decrement-wrap");
	})(_ || (_ = {})),
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
	})(L || (L = {})),
	(function (e) {
		(e.Vertex = "vertex"), (e.Instance = "instance");
	})(A || (A = {})),
	(function (e) {
		(e.Beginning = "beginning"), (e.End = "end");
	})(C || (C = {})),
	(function (e) {
		(e.Beginning = "beginning"), (e.End = "end");
	})(D || (D = {})),
	(function (e) {
		(e.Load = "load"), (e.Clear = "clear");
	})(R || (R = {})),
	(function (e) {
		(e.Store = "store"), (e.Discard = "discard");
	})(I || (I = {})),
	(function (e) {
		(e.Occlusion = "occlusion"), (e.Timestamp = "timestamp");
	})(z || (z = {})),
	(function (e) {
		(e.Opaque = "opaque"), (e.Premultiplied = "premultiplied");
	})(P || (P = {})),
	(function (e) {
		e.Destroyed = "destroyed";
	})(O || (O = {})),
	(function (e) {
		(e.OutOfMemory = "out-of-memory"), (e.Validation = "validation");
	})(B || (B = {})),
	(function (e) {
		(e[(e.Red = 1)] = "Red"),
			(e[(e.Green = 2)] = "Green"),
			(e[(e.Blue = 4)] = "Blue"),
			(e[(e.Alpha = 8)] = "Alpha"),
			(e[(e.All = 15)] = "All");
	})(N || (N = {})),
	(function (e) {
		(e.Shadow = "shadow"), (e.Pick = "pick");
	})(V || (V = {})),
	(function (e) {
		(e[(e.OUTSIDE = -1)] = "OUTSIDE"), (e[(e.INTERSECTING = 0)] = "INTERSECTING"), (e[(e.INSIDE = 1)] = "INSIDE");
	})(F || (F = {}));
class G {
	constructor(e, t, r, i, n) {
		(this.device = t),
			(this.usage = r),
			(this.data = i),
			(this.size = null != n ? (n + 3) & -4 : (i.byteLength + 3) & -4),
			(this.gpuBuffer = t.createBuffer({ label: e || "", size: this.size, usage: r })),
			i && this.setSubData(0, i, this.size);
	}
	static create(e, t, r, i, n) {
		return new G(e, t, r, i, n);
	}
	static createVertexBuffer(e, t, r) {
		return new G(e, t, i.Vertex | i.CopyDst, r, r.byteLength);
	}
	static createIndexBuffer(e, t, r) {
		return new G(e, t, i.Index | i.CopyDst, r);
	}
	static createUniformBuffer(e, t, r, i) {
		return new G(e, t, i, null, r);
	}
	static createStorageBuffer(e, t, r, n = i.Storage) {
		return new G(e, t, n, null, r);
	}
	setSubData(e, t, r) {
		const i = t.buffer,
			n = r ?? i.byteLength,
			s = this.device.createBuffer({ mappedAtCreation: !0, size: n, usage: GPUBufferUsage.COPY_SRC }),
			a = s.getMappedRange();
		new Uint16Array(a).set(new Uint16Array(i)), s.unmap(), this.copyToBuffer(s, e, n), s.destroy();
	}
	copyToBuffer(e, t, r) {
		const i = this.device.createCommandEncoder();
		i.copyBufferToBuffer(e, 0, this.gpuBuffer, t, r), this.device.queue.submit([i.finish()]);
	}
	copyToTexture(e, t, r, i) {
		const n = this.device.createCommandEncoder();
		n.copyBufferToTexture({ buffer: this.gpuBuffer, bytesPerRow: e, rowsPerImage: t }, r, i),
			this.device.queue.submit([n.finish()]);
	}
	destroy() {
		this.gpuBuffer.destroy();
	}
}
const k = new Map();
class H {
	constructor(e, t, r = [], i) {
		(this.groupLayouts = r),
			(this.index = i || 0),
			(this.gpuPipelineLayout = e.createPipelineLayout({
				label: t,
				bindGroupLayouts: r.map((e) => e.gpuBindGroupLayout)
			}));
	}
	static getPipelineLayoutFromCache(e, t, r) {
		if (k.has(t)) return k.get(t);
		{
			const i = new H(e, t, r);
			return k.set(t, i), i;
		}
	}
}
const q = new Map(),
	j = new Map();
class $ {
	constructor(e, t, r) {
		(this.type = e), (this.descriptor = r), (this.device = t), this.createPipeline();
	}
	createPipeline() {
		"render" == this.type
			? (this.gpuPipeline = this.device.createRenderPipeline(this.descriptor))
			: (this.gpuPipeline = this.device.createComputePipeline(this.descriptor));
	}
	bind(e) {
		this.type, e.setPipeline(this.gpuPipeline);
	}
	static getRenderPipelineFromCache(e, t, r) {
		const { renderState: i, shaderSource: n } = t,
			s = JSON.stringify(i),
			a = n.uid.concat(s),
			o = r?.filter((e) => null != e)?.sort((e, t) => e.index - t.index),
			c = X(
				a +
					(function (e) {
						let t = "";
						for (let r = 0; r < e.length; r++) {
							t += e[r].label;
						}
						return t;
					})(o)
			);
		let h = q.get(c);
		if (!h) {
			const r = $.getPipelineDescriptor(e, t, i, o, c.toString());
			(h = new $("render", e, r)), q.set(c, h);
		}
		return h;
	}
	static getComputePipelineFromCache(e, t, r) {
		const { shaderSource: i } = t,
			n = X(i.uid);
		let s = j.get(n);
		return (
			s ||
				((s = new $("compute", e, {
					layout: H.getPipelineLayoutFromCache(e, n.toString(), r).gpuPipelineLayout,
					compute: { module: i.getShaderModule(e).compute, entryPoint: i?.compute?.computeMain || "main" }
				})),
				j.set(n, s)),
			s
		);
	}
	static getPipelineDescriptor(e, t, r, i, n) {
		const { vertexBuffers: s, shaderSource: a } = t,
			{ vert: o, frag: c } = a.getShaderModule(e),
			h = { layout: i.length > 0 ? H.getPipelineLayoutFromCache(e, n, i).gpuPipelineLayout : "auto" };
		return (
			o &&
				(h.vertex = {
					module: o,
					entryPoint: a?.render?.vertMain || "main",
					buffers: s.map((e) => e.getBufferDes())
				}),
			r.primitive && (h.primitive = r.primitive.getGPUPrimitiveDec()),
			r.depthStencil && (h.depthStencil = r.depthStencil.getGPUDepthStencilDec()),
			r.multisample && (h.multisample = r.multisample.getMultiSampleDec()),
			c &&
				(h.fragment = {
					module: c,
					entryPoint: a?.render?.fragMain || "main",
					targets: r.targets.map((e) => e.getGPUTargetDec())
				}),
			h
		);
	}
}
function X(e) {
	let t = 0;
	if (0 == e.length) return t;
	for (let r = 0; r < e.length; r++) {
		(t = (t << 5) - t + e.charCodeAt(r)), (t &= t);
	}
	return t;
}
class Y {
	constructor(e) {
		(this.shaderData = e.shaderData),
			(this.renderTarget = e.renderTarget),
			(this.useLight = e.useLight),
			(this.vertexBuffers = e.vertexBuffers),
			(this.indexBuffer = e.indexBuffer),
			(this.renderState = e.renderState),
			(this.queryIndex = e.queryIndex),
			(this.shaderSource = e.shaderSource),
			(this.dirty = e.dirty),
			(this.lightShaderData = e.lightShaderData),
			(this.drawParams = e.drawParams);
	}
	shallowClone(e) {
		if (e)
			return new Y({
				vertexBuffers: this.vertexBuffers,
				indexBuffer: this.indexBuffer,
				shaderData: e.shaderData,
				drawParams: this.drawParams,
				renderState: e.renderState,
				shaderSource: e.shaderSource,
				lightShaderData: e.light ? this.lightShaderData : void 0,
				useLight: e.light
			});
	}
	render(e) {
		const { device: t, passEncoder: r, camera: i, querySet: n, viewPort: s, scissorTest: a } = e || {},
			{
				shaderData: o,
				renderState: c,
				vertexBuffers: h,
				indexBuffer: l,
				lightShaderData: u,
				shaderSource: d,
				renderTarget: f,
				useLight: m,
				indirectOffset: p,
				indirectBuffer: g,
				queryIndex: x,
				drawParams: v
			} = this,
			{
				count: y,
				baseVertex: S,
				instanceCount: b = 1,
				firstIndex: w,
				firstInstance: T = 0,
				firstVertex: E = 0
			} = v ?? {},
			M = f?.beginRenderPass?.(t) ?? r,
			_ = Object.assign({}, u?.defines ?? {}, i?.shaderData?.defines ?? {});
		o?.bind?.(t, M),
			i?.shaderData?.bind(t, M),
			m && u?.bind?.(t, M),
			c?.bind?.({ passEncoder: M, viewPort: s, scissorTest: a }),
			h?.forEach?.((e) => e?.bind?.(t, M)),
			l?.bind?.(t, M),
			d?.setDefines?.(_);
		const U = $.getRenderPipelineFromCache(t, this, [o?.groupLayout, u?.groupLayout, i?.shaderData?.groupLayout]);
		null != x && n?.beginQuery(M, x),
			U.bind(M),
			l
				? g
					? M.drawIndexedIndirect(g.gpuBuffer, p || 0)
					: M.drawIndexed(y, b, w, S, T)
				: y && (g ? M.drawIndirect(g.gpuBuffer, p) : M.draw(y, b, E, T)),
			null != x && n?.endQuery(M),
			f?.endRenderPass?.();
	}
}
const W = "premultiplied";
var Z, K, Q, J, ee;
!(function (e) {
	(e.Camera = "camera"),
		(e.Light = "light"),
		(e.Mesh = "mesh"),
		(e.SkinMesh = "skinMesh"),
		(e.Node = "node"),
		(e.Axes = "axes"),
		(e.Skybox = "skyBox"),
		(e.PostEffect = "postEffect"),
		(e.Debug = "debug");
})(Z || (Z = {})),
	(function (e) {
		(e.SpotLight = "spotLight"),
			(e.PointLight = "pointLight"),
			(e.AmbientLight = "ambientLight"),
			(e.DirectionalLight = "directionalLight");
	})(K || (K = {})),
	(function (e) {
		(e.Float = "f32"),
			(e.FloatVec2 = "vec2<f32>"),
			(e.FloatVec3 = "vec3<f32>"),
			(e.FloatVec4 = "vec4<f32>"),
			(e.FloatArray = "array<f32>"),
			(e.Mat2 = "mat2x2<f32>"),
			(e.Mat3 = "mat3x3<f32>"),
			(e.Mat4 = "mat4x4<f32>"),
			(e.Color = "color"),
			(e.Mat4Array = "array<mat4x4<f32>>"),
			(e.Vec2Array = "array<vec2<f32>>"),
			(e.Vec3Array = "array<vec3<f32>>"),
			(e.Vec4Array = "array<vec4<f32>>"),
			(e.UniformUint = "u32"),
			(e.PointLights = "pointLights"),
			(e.PointLightShadows = "pointLightShadows"),
			(e.SpotLights = "spotLights"),
			(e.SpotLightShadows = "spotLightShadows"),
			(e.DirtectLights = "dirtectLights"),
			(e.DirtectLightShadows = "dirtectLightShadows"),
			(e.DirtectLightCascadedShadows = "dirtectLightCascadedShadows"),
			(e.UniformStructArray = "StructArray");
	})(Q || (Q = {})),
	(function (e) {
		(e.WGSL = "wgsl"), (e.GLSL = "glsl");
	})(J || (J = {})),
	(function (e) {
		(e.VERT = "vertex"), (e.FRAG = "fragment"), (e.COMPUTE = "compute");
	})(ee || (ee = {}));
const te = /#([^\s]*)(\s*)/gm;
function re(e, ...t) {
	const r = [];
	let i = { frag: "", elseIsValid: !1, expression: !0 },
		n = 1;
	for (let s = 0; s < e.length; ++s) {
		const a = e[s],
			o = a.matchAll(te);
		let c = 0,
			h = !1;
		for (const e of o) {
			switch (((i.frag += a.substring(c, e.index)), e[1])) {
				case "if":
					if (e.index + e[0].length != a.length)
						throw new Error("#if must be immediately followed by a template expression (ie: ${value})");
					(h = !0), r.push(i), n++, (i = { frag: "", elseIsValid: !0, expression: !!t[s] });
					break;
				case "elif":
					if (e.index + e[0].length != a.length)
						throw new Error("#elif must be immediately followed by a template expression (ie: ${value})");
					if (!i.elseIsValid) throw new Error("#elif not preceeded by an #if or #elif");
					(h = !0),
						i.expression && r.length != n && r.push(i),
						(i = { frag: "", elseIsValid: !0, expression: !!t[s] });
					break;
				case "else":
					if (!i.elseIsValid) throw new Error("#else not preceeded by an #if or #elif");
					i.expression && r.length != n && r.push(i), (i = { frag: e[2], elseIsValid: !1, expression: !0 });
					break;
				case "endif":
					if (!r.length) throw new Error("#endif not preceeded by an #if");
					const o = r.length == n ? r.pop() : i;
					(i = r.pop()), n--, o.expression && (i.frag += o.frag), (i.frag += e[2]);
					break;
				default:
					i.frag += e[0];
			}
			c = e.index + e[0].length;
		}
		c != a.length && (i.frag += a.substring(c, a.length)), !h && t.length > s && (i.frag += t[s]);
	}
	if (r.length) throw new Error("Mismatched #if/#endif count");
	return i.frag;
}
var ie =
	"\r\nstruct VertexInput {\r\n     @location(positionLocation) position : vec2 <f32>,\r\n}\r\nstruct VertexOutput {\r\n     @builtin(position) position : vec4 <f32>,\r\n     @location(0) uv : vec2 <f32>,\r\n};\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n     var output : VertexOutput;\r\n     output.uv = input.position * 0.5 + 0.5;\r\n     output.position = vec4 <f32> (input.position, 0.0, 1.0); ;\r\n     return output;\r\n}\r\n";
const ne = {
	...{
		FragInput:
			"struct FragInput {\r\n    @builtin(front_facing) frontFacing : bool,\r\n    @location(0) worldPos : vec3 <f32>,\r\n    @location(1) normal : vec3 <f32>,\r\n    @location(2) uv : vec2 <f32>,\r\n    @location(3) view : vec3 <f32>,//Vector from vertex to camera.\r\n    @location(4) color : vec4 <f32>,\r\n    @location(5) viewPosition : vec3 <f32>,\r\n}\r\n",
		PointFragInput:
			"struct PointFragInput{\r\n  @location(0) uv : vec2 <f32>,\r\n  @location(1) color : vec3 <f32>,\r\n  @location(2) size : f32,\r\n}\r\n",
		PointVertInput:
			"struct PointVertInput {\r\n    @location(vertexPointLocation) vertexPoint : vec3 <f32>,\r\n    @location(positionLocation) position : vec3 <f32>,\r\n    @location(uvLocation) uv : vec2 <f32>,\r\n    #if HAS_COLOR\r\n        @location(colorLocation) color : vec3 <f32>,\r\n    #endif\r\n    #if VERTEX_SIZE\r\n        @location(sizeLocation) size : f32,\r\n    #endif\r\n    #if USE_INSTANCE\r\n        @builtin(instance_index) instanceIdx : u32\r\n    #endif\r\n}\r\n",
		PointVertOutput:
			"struct PointVertOutput{\r\n    @builtin(position) position : vec4 <f32>,\r\n    @location(0) uv : vec2 <f32>,\r\n    @location(1) color : vec3 <f32>,\r\n    @location(2) size : f32,\r\n}\r\n",
		VertexInput:
			"struct VertexInput {\r\n    @location(positionLocation) position : vec3 <f32>,\r\n    #if HAS_NORMAL\r\n        @location(normalLocation) normal : vec3 <f32>,\r\n    #endif\r\n    #if HAS_COLOR\r\n        @location(colorLocation) color : vec3 <f32>,\r\n    #endif\r\n    #if HAS_UV\r\n        @location(uvLocation) uv : vec2 <f32>,\r\n    #endif\r\n    #if HAS_SKIN\r\n        @location(joint0Location) joint0 : vec4 <f32>,\r\n        @location(weight0Location) weight0 : vec4 <f32>,\r\n    #endif\r\n    #if USE_INSTANCE\r\n        @builtin(instance_index) instanceIdx : u32\r\n    #endif\r\n}\r\n",
		VertexOutput:
			"struct VertexOutput {\r\n    @builtin(position) position : vec4 <f32>,\r\n    @location(0) worldPos : vec3 <f32>,\r\n    @location(1) normal : vec3 <f32>,\r\n    @location(2) uv : vec2 <f32>,\r\n    @location(3) view : vec3 <f32>,//Vector from vertex to camera.\r\n    @location(4) color : vec4 <f32>,\r\n    @location(5) viewPosition : vec3 <f32>,\r\n}\r\n"
	},
	...{
		SystemUniform:
			"struct SystemUniform {\r\n    projectionMatrix : mat4x4 <f32>,\r\n    viewMatrix : mat4x4 <f32>,\r\n    inverseViewMatrix : mat4x4 <f32>,\r\n    cameraPosition : vec3 <f32>,\r\n};\r\n",
		TextureAndSamplerDefine:
			"#if USE_IBL\r\n  @group(0) @binding(specularEnvTextureBinding) var specularEnvTexture : texture_cube <f32>;\r\n  @group(0) @binding(specularEnvSamplerBinding) var specularEnvSampler : sampler;\r\n#endif\r\n#if USE_TEXTURE\r\n  @group(0) @binding(baseColorTextureBinding) var baseColorTexture : texture_2d<f32>;\r\n  @group(0) @binding(baseColorSamplerBinding) var baseColorSampler : sampler;\r\n#endif\r\n    //normal map\r\n#if USE_NORMALTEXTURE\r\n  @group(0) @binding(normalTextureBinding) var normalTexture : texture_2d<f32>;\r\n  @group(0) @binding(normalSamplerBinding) var normalSampler : sampler;\r\n#endif\r\n    //emmisve map\r\n#if USE_EMISSIVETEXTURE\r\n  @group(0) @binding(emissiveTextureBinding) var emissiveTexture : texture_2d<f32>;\r\n  @group(0) @binding(emissiveSamplerBinding) var emissiveSampler : sampler;\r\n#endif\r\n\r\n    //metal roughness\r\n#if USE_METALNESSTEXTURE\r\n  @group(0) @binding(metalnessRoughnessTextureBinding) var metalnessRoughnessTexture : texture_2d<f32>;\r\n  @group(0) @binding(metalnessRoughnessSamplerBinding) var metalnessRoughnessSampler : sampler;\r\n#endif\r\n    //occlusion texture\r\n#if USE_AOTEXTURE\r\n  @group(0) @binding(aoTextureBinding) var aoTexture : texture_2d<f32>;\r\n  @group(0) @binding(aoSamplerBinding) var aoSampler : sampler;\r\n#endif\r\n#if USE_NORMALTEXTURE\r\n  #include <getTBN>\r\n  #include <getNormalByNormalTexture>\r\n#else\r\n  #include <getNormal>\r\n#endif\r\n"
	},
	environment: function (e) {
		return re`
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
	...{
		instanceVertHeader:
			"#if USE_INSTANCE\r\n    struct InstancesUniform {\r\n        instanceMatrixs : array<mat4x4<f32>, instanceCount>,\r\n    };\r\n    @group(0) @binding(instanceMatrixsBufferBinding) var<storage, read> instancesUniform : InstancesUniform;\r\n#endif\r\n",
		instanceVertMain:
			"#if USE_INSTANCE\r\n    modelMatrix = instancesUniform.instanceMatrixs[input.instanceIdx];\r\n#endif\r\n"
	},
	light: "struct ReflectedLight {\r\n    ambient: vec3<f32>,\r\n    directDiffuse:vec3<f32>,\r\n    directSpecular:vec3<f32>,\r\n    indirectDiffuse:vec3<f32>,\r\n    indirectSpecular:vec3<f32>,\r\n    testColor: vec3<f32>,\r\n    }; \r\nstruct IncidentLight {\r\n    color: vec3<f32>,\r\n    direction: vec3<f32>,\r\n    visible: bool,\r\n};\r\nstruct Geometry {\r\n    position: vec3<f32>,\r\n    normal: vec3<f32>,\r\n    viewDir: vec3<f32>,\r\n    viewPosition:vec3<f32>,\r\n    dotNV:f32,\r\n    #if USE_CLEARCOAT\r\n        vec3 clearcoatNormal;\r\n    #endif\r\n};\r\n\r\n#if USE_SPOTLIGHT\r\n    struct SpotLight {\r\n        position: vec3<f32>,\r\n        distance: f32,\r\n        direction: vec3<f32>,\r\n        coneCos: f32,\r\n        color: vec3<f32>,\r\n        penumbraCos: f32,\r\n        decay: f32,\r\n    };\r\n    fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{\r\n        var direction:vec3<f32> = spotLight.position - worldPos;\r\n        var lightColor:ReflectedLight;\r\n        let lightDistance:f32 = length(direction);\r\n        direction = normalize(direction);\r\n        let angleCos:f32 = dot( direction, spotLight.direction );\r\n        let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, spotLight.decay), 0.0, 1.0);\r\n        let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\r\n        let decayTotal:f32 = decay * spotEffect;\r\n        let d:f32 = max( dot( n, direction ), 0.0 )  * decayTotal;\r\n        lightColor.directDiffuse= spotLight.color * d;\r\n        let halfDir:vec3<f32> = normalize( v + direction );\r\n        let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;\r\n        lightColor.directSpecular= spotLight.color * s;\r\n        return lightColor;\r\n    }\r\n    fn getSpotLightIncidentLight(spotLight:SpotLight, geometry:Geometry)->IncidentLight {\r\n        var incidentLight:IncidentLight;\r\n        let lVector:vec3<f32> = spotLight.position - geometry.position;\r\n        incidentLight.direction = normalize( lVector );\r\n\r\n        let lightDistance:f32 = length( lVector );\r\n        let angleCos:f32 = dot( incidentLight.direction, spotLight.direction );\r\n\r\n        let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\r\n        let decayEffect:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);\r\n\r\n        incidentLight.color=spotLight.color*spotEffect * decayEffect; \r\n        return  incidentLight;\r\n    }\r\n\r\n#endif \r\n\r\n#if USE_POINTLIGHT\r\n    struct PointLight {\r\n        position: vec3<f32>,\r\n        distance: f32,\r\n        color: vec3<f32>,\r\n        decay: f32,\r\n    };\r\n    fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{\r\n        var lightColor:ReflectedLight;\r\n        var direction:vec3<f32> = worldPos - pointLight.position;\r\n        let dist:f32 = length( direction );\r\n        direction = normalize(direction);\r\n        let decay = clamp(1.0 - pow(dist / pointLight.distance, pointLight.decay), 0.0, 1.0);\r\n\r\n        let d =  max( dot( n, -direction ), 0.0 ) * decay;\r\n        lightColor.directDiffuse = pointLight.color * d;\r\n\r\n        let halfDir:vec3<f32> = normalize( v - direction );\r\n        let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess )  * decay;\r\n        lightColor.directSpecular = pointLight.color * s;\r\n        return lightColor;\r\n    }\r\n    fn getPointLightIncidentLight(pointLight:PointLight, geometry:Geometry)->IncidentLight {\r\n        var incidentLight:IncidentLight;\r\n        let lVector:vec3<f32> = pointLight.position-geometry.position;\r\n        incidentLight.direction= normalize( lVector );\r\n        let lightDistance:f32 = length( lVector );\r\n        // let weight:f32=1.0 - pow(lightDistance/pointLight.distance, 4.0);\r\n        incidentLight.color=pointLight.color*clamp(1.0 - pow(lightDistance/pointLight.distance, 4.0), 0.0, 1.0);\r\n        return incidentLight;\r\n    }\r\n#endif\r\n#if USE_DIRTECTLIGHT\r\n    struct DirectionalLight {\r\n        direction: vec3<f32>,\r\n        isOpenShadow: f32, // 0 or 1\r\n        color: vec3<f32>,\r\n        isCascadedShadow: f32 // 0 or 1\r\n    };\r\n    fn getDirectLightInfo(directionalLight:DirectionalLight,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{\r\n        var lightColor:ReflectedLight;\r\n        let d:f32 = max(dot(n, -directionalLight.direction), 0.0);\r\n        lightColor.directDiffuse += directionalLight.color * d;\r\n\r\n        let halfDir:vec3<f32> = normalize( v - directionalLight.direction );\r\n        let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess );\r\n        lightColor.directSpecular += directionalLight.color * s;\r\n        return lightColor;\r\n    }\r\n    fn getDirectionalDirectLightIncidentLight(directionalLight:DirectionalLight,geometry:Geometry)->IncidentLight {\r\n        var incidentLight:IncidentLight;\r\n        incidentLight.color = directionalLight.color;\r\n        incidentLight.direction = normalize(directionalLight.direction);\r\n        return incidentLight;         \r\n    }\r\n#endif\r\n\r\n#if OPEN_SHADOW \r\n    struct LightInfo {\r\n        direction: vec3<f32>,\r\n        viewport: vec4<f32>,\r\n    };\r\n    \r\n    fn linearizeDepth(depth: f32, near: f32, far: f32)->f32 {\r\n        return 2 * (near * far) / (far + near - depth * (far - near));\r\n    }\r\n\r\n    fn getCubeFace(v : vec3<f32>) -> i32{\r\n        let vAbs = abs(v);\r\n    \r\n        if (vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {\r\n            if (v.z < 0.0) {\r\n            return 3;\r\n            }\r\n            return 2;\r\n        }\r\n    \r\n        if (vAbs.y >= vAbs.x) {\r\n            if (v.y < 0.0) {\r\n            return 5;\r\n            }\r\n            return 4;\r\n        }\r\n    \r\n        if (v.x < 0.0) {\r\n            return 1;\r\n        }\r\n        return 0;\r\n    }\r\n\r\n    fn getCascadedIndex(z: f32, cascadedBreakVSArray: array<f32, 4>) -> i32 {\r\n        if (z >= cascadedBreakVSArray[2] && z <= cascadedBreakVSArray[3]) {\r\n            return 3;\r\n        }\r\n        if (z >= cascadedBreakVSArray[1] && z < cascadedBreakVSArray[2]) {\r\n            return 2;\r\n        }\r\n        if (z >= cascadedBreakVSArray[0] && z < cascadedBreakVSArray[1]) {\r\n            return 1;\r\n        }\r\n        return 0;\r\n    }\r\n\r\n    fn getShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, lightPos:vec4<f32>, geometry:Geometry, lightInfo:LightInfo, index:u32, isPointLight: bool, near: f32, far: f32)->f32 {\r\n        var visibility = 0.0;\r\n        var projectPos: vec3<f32> = lightPos.xyz / lightPos.w;\r\n        var shadowPos: vec3<f32> = vec3(projectPos.xy * vec2(0.5, -0.5) + vec2(0.5), projectPos.z);\r\n        var d:f32 = dot(geometry.normal, -lightInfo.direction);\r\n        var bias = max(0.012 * (1.0 - d), 0.001) / lightPos.w;\r\n        let oneOverShadowDepthTextureSize = 1.0 / 1024.0;\r\n        // var depth = select(shadowPos.z, (linearizeDepth(shadowPos.z, near, far) - near) / (far- near), isPerspectiveCamera);\r\n        var depth = shadowPos.z;\r\n\r\n        if (isPointLight) {\r\n            shadowPos.x = shadowPos.x * lightInfo.viewport.z;\r\n            shadowPos.y = shadowPos.y * lightInfo.viewport.w;\r\n            var viewportX = lightInfo.viewport.x * lightInfo.viewport.z;\r\n            var viewportY = lightInfo.viewport.y * lightInfo.viewport.w;\r\n            var uvOffset = 1.5 / 1024.0;\r\n            shadowPos.x = clamp(shadowPos.x + viewportX, viewportX + uvOffset, viewportX + lightInfo.viewport.z - uvOffset);\r\n            shadowPos.y = clamp(shadowPos.y + viewportY, viewportY + uvOffset, viewportY + lightInfo.viewport.w - uvOffset);\r\n        }\r\n\r\n        for (var y = -1; y <= 1; y++) {\r\n            for (var x = -1; x <= 1; x++) {\r\n                let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;\r\n            \r\n                visibility += textureSampleCompare(\r\n                    shadowMapArray, shadowSampler,\r\n                    shadowPos.xy + offset, index, depth - bias);\r\n            }\r\n        }\r\n        visibility /= 9.0;\r\n        var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;\r\n        if (!inFrustum || depth > 1.0) {\r\n            visibility = 1.0;\r\n        }\r\n        return visibility;\r\n    }\r\n\r\n    fn getCascadedShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, lightPos:vec4<f32>, geometry:Geometry, lightInfo:LightInfo, index:i32)->f32 {\r\n        var visibility = 0.0;\r\n        var projectPos: vec3<f32> = lightPos.xyz / lightPos.w;\r\n        var shadowPos: vec3<f32> = vec3(projectPos.xy * vec2(0.5, -0.5) + vec2(0.5), projectPos.z);\r\n        var d:f32 = dot(geometry.normal, -lightInfo.direction);\r\n        var bias = max(0.012 * (1.0 - d), 0.001) / lightPos.w;\r\n        let oneOverShadowDepthTextureSize = vec2(1 / (1024.0 * 4), 1 / 1024.0);\r\n        // var depth = select(shadowPos.z, (linearizeDepth(shadowPos.z, near, far) - near) / (far- near), isPerspectiveCamera);\r\n        var depth = shadowPos.z;\r\n\r\n        shadowPos.x = shadowPos.x * lightInfo.viewport.z;\r\n        shadowPos.y = shadowPos.y * lightInfo.viewport.w;\r\n        var viewportX = lightInfo.viewport.x * lightInfo.viewport.z;\r\n        var viewportY = lightInfo.viewport.y * lightInfo.viewport.w;\r\n        var uvOffsetX = 1.5 / (1024.0 * 4);\r\n        var uvOffsetY = 1.5 / 1024.0;\r\n        shadowPos.x = clamp(shadowPos.x + viewportX, viewportX + uvOffsetX, viewportX + lightInfo.viewport.z - uvOffsetX);\r\n        shadowPos.y = clamp(shadowPos.y + viewportY, viewportY + uvOffsetY, viewportY + lightInfo.viewport.w - uvOffsetY);\r\n\r\n\r\n        for (var y = -1; y <= 1; y++) {\r\n            for (var x = -1; x <= 1; x++) {\r\n                let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;\r\n            \r\n                visibility += textureSampleCompare(\r\n                    shadowMapArray, shadowSampler,\r\n                    shadowPos.xy + offset, index, depth - bias);\r\n            }\r\n        }\r\n        visibility /= 9.0;\r\n        var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;\r\n        if (!inFrustum || depth > 1.0) {\r\n            visibility = 1.0;\r\n        }\r\n        return visibility;\r\n    }\r\n#endif\r\n\r\n#if USE_AMBIENTLIGHT||USE_SPOTLIGHT||USE_POINTLIGHT||USE_DIRTECTLIGHT\r\n    struct LightUniforms{\r\n        #if USE_AMBIENTLIGHT\r\n            ambient:vec4<f32>,\r\n        #endif\r\n        #if USE_SPOTLIGHT\r\n            spotLights:array<SpotLight,spotLightsCount>,\r\n        #endif\r\n        #if USE_POINTLIGHT\r\n            pointLights:array<PointLight,pointLightsCount>,\r\n        #endif\r\n        #if USE_DIRTECTLIGHT\r\n            dirtectLights:array<DirectionalLight,dirtectLightsCount>,\r\n        #endif\r\n    }\r\n    @group(2) @binding(lightBinding) var<storage, read> lightUniforms: LightUniforms;\r\n\r\n    #if OPEN_SHADOW\r\n        #if USE_SPOTLIGHT_SHADOWMAP\r\n            struct SpotLightShadow {\r\n                shadowCameraVPMatrix: mat4x4<f32>,\r\n                shadowCameraNear: f32,\r\n                shadowCameraFar: f32\r\n            }\r\n        #endif\r\n        #if USE_POINTLIGHT_SHADOWMAP\r\n            struct PointLightShadow {\r\n                shadowCameraVPMatrixArray: array<mat4x4<f32>, 6>,\r\n                shadowCameraViewportArray: array<vec4<f32>, 6>,\r\n                shadowCameraNear: f32,\r\n                shadowCameraFar: f32,\r\n                // shadowCameraVPMatrix: mat4x4<f32>,\r\n                // shadowCameraVPMatrixArray: array<mat4x4<f32>, 6>,\r\n                // shadowCameraViewportArray: array<vec4<f32>, 6>,\r\n            }\r\n        #endif\r\n        #if USE_DIRECTLIGHT_SHADOWMAP\r\n            struct DirectLightShadow {\r\n                shadowCameraVPMatrix: mat4x4<f32>,\r\n            }\r\n        #endif\r\n        #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP\r\n            struct DirectLightCascadedShadow {\r\n                shadowCameraVPMatrixArray: array<mat4x4<f32>, 4>,\r\n                shadowCameraViewportArray: array<vec4<f32>, 4>,\r\n                cascadedBreakVSArray: array<f32, 4>\r\n            }\r\n        #endif\r\n        struct ShadowUniforms{\r\n            #if USE_SPOTLIGHT_SHADOWMAP\r\n                spotLightShadows:array<SpotLightShadow,spotLightShadowMapsCount>,\r\n            #endif\r\n            #if USE_POINTLIGHT_SHADOWMAP\r\n                pointLightShadows:array<PointLightShadow,pointLightShadowMapsCount>,\r\n            #endif\r\n            #if USE_DIRECTLIGHT_SHADOWMAP\r\n                directLightShadows:array<DirectLightShadow,directLightShadowMapsCount>,\r\n            #endif\r\n            #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP\r\n                directLightCascadedShadows:array<DirectLightCascadedShadow,directLightCascadedShadowMapsCount>\r\n            #endif\r\n        }\r\n        @group(2) @binding(shadowBinding) var<storage, read> shadowUniforms: ShadowUniforms;\r\n\r\n        #if SPOTLIGHT_SHADOWMAP_TEXTUREARRAY\r\n            @group(2) @binding(spotLightShadowMapTextureArrayBinding) var spotLightShadowMapTextureArray: texture_depth_2d_array;\r\n        #endif\r\n        #if POINTLIGHT_SHADOWMAP_TEXTUREARRAY\r\n            @group(2) @binding(pointLightShadowMapTextureArrayBinding) var pointLightShadowMapTextureArray: texture_depth_2d_array;\r\n        #endif\r\n        #if DIRECTLIGHT_SHADOWMAP_TEXTUREARRAY\r\n            @group(2) @binding(directLightShadowMapTextureArrayBinding) var directLightShadowMapTextureArray: texture_depth_2d_array;\r\n        #endif\r\n        #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP\r\n            @group(2) @binding(directLightCascadedShadowMapTextureArrayBinding) var directLightCascadedShadowMapTextureArray: texture_depth_2d_array;\r\n        #endif\r\n        \r\n        @group(2) @binding(shadowSamplerBinding) var shadowSampler: sampler_comparison;\r\n    #endif\r\n\r\n#endif\r\n#if MATERIAL_PHONG\r\n    fn parseLights(geometry:Geometry,shininess:f32)->ReflectedLight {\r\n#elif MATERIAL_PBR\r\n    fn parseLights(geometry:Geometry,material:PhysicalMaterial)->ReflectedLight{\r\n#endif\r\n    var reflectedLight:ReflectedLight;\r\n    var shadowValue:f32 = 1.0;\r\n    #if USE_AMBIENTLIGHT\r\n        //处理环境光\r\n        var ambientColor:vec3<f32> = lightUniforms.ambient.xyz * lightUniforms.ambient.w;\r\n        reflectedLight.ambient += ambientColor;\r\n    #endif\r\n\r\n    #if USE_SPOTLIGHT\r\n        //处理聚光灯\r\n        var spotLight:SpotLight;\r\n        for (var k = 0u; k < spotLightsCount; k = k + 1u) {\r\n            spotLight= lightUniforms.spotLights[k];\r\n            #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_SPOTLIGHT_SHADOWMAP\r\n                if k < textureNumLayers(spotLightShadowMapTextureArray) {\r\n                    var spotLightShadow:SpotLightShadow = shadowUniforms.spotLightShadows[k];\r\n                    var lightPos: vec4<f32> = spotLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);\r\n                    var lightInfo:LightInfo;\r\n                    lightInfo.direction = normalize(geometry.position - spotLight.position);\r\n\r\n                    shadowValue = getShadowValue(spotLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, k, false,\r\n                        spotLightShadow.shadowCameraNear, spotLightShadow.shadowCameraFar);\r\n                }\r\n                spotLight.color *= shadowValue;\r\n            #endif\r\n            #if MATERIAL_PHONG\r\n                let spReflectedLight=getSpotLightInfo(spotLight,geometry.position,shininess,geometry.normal,geometry.viewDir);\r\n            #elif MATERIAL_PBR\r\n                let incidentLight=getSpotLightIncidentLight(spotLight,geometry);\r\n                let spReflectedLight=direct_Physical(incidentLight, geometry, material);\r\n            #endif\r\n\r\n            reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;\r\n            reflectedLight.directSpecular+=spReflectedLight.directSpecular;\r\n        }\r\n    #endif\r\n    #if USE_POINTLIGHT\r\n        //处理点光源\r\n        var pointLight:PointLight;\r\n        for (var j = 0u; j < pointLightsCount;j = j + 1u) {\r\n            pointLight = lightUniforms.pointLights[j];\r\n            #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_POINTLIGHT_SHADOWMAP\r\n                if j < textureNumLayers(pointLightShadowMapTextureArray) {\r\n                    var pointLightShadow:PointLightShadow = shadowUniforms.pointLightShadows[j];\r\n                    var lightInfo:LightInfo;\r\n                    lightInfo.direction = normalize(geometry.position - pointLight.position);\r\n                    var cubeFace = getCubeFace(lightInfo.direction);\r\n                    var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrixArray[cubeFace] * vec4<f32>(geometry.position,1.0);\r\n                    lightInfo.viewport = pointLightShadow.shadowCameraViewportArray[cubeFace];\r\n\r\n                    // var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);\r\n\r\n                    shadowValue = getShadowValue(pointLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, j, true,\r\n                        pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar);\r\n                    \r\n                    // reflectedLight.testColor = vec3(pointLightShadow.shadowCameraFar / 1000, \r\n                    //     pointLightShadow.shadowCameraVPMatrixArray[5][3][2] / 255, pointLightShadow.shadowCameraVPMatrixArray[5][3][3] / 255);\r\n                    // reflectedLight.testColor = vec3(pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraNear);\r\n                }\r\n                pointLight.color *= shadowValue;\r\n            #endif\r\n            #if MATERIAL_PHONG\r\n                let poiReflectedLight=getPointLightInfo(pointLight,geometry.position,shininess,geometry.normal,geometry.viewDir);\r\n            #elif MATERIAL_PBR\r\n                let incidentLight=getPointLightIncidentLight(pointLight,geometry);\r\n                let poiReflectedLight=direct_Physical(incidentLight, geometry, material);\r\n            #endif\r\n\r\n            reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;\r\n            reflectedLight.directSpecular+=poiReflectedLight.directSpecular;\r\n        }\r\n    #endif\r\n    #if USE_DIRTECTLIGHT\r\n        //处理方向光\r\n        var directionalLight:DirectionalLight;\r\n        for (var i= 0u; i <dirtectLightsCount; i = i + 1u) {\r\n            directionalLight = lightUniforms.dirtectLights[i];\r\n            #if MATERIAL_PHONG&&OPEN_SHADOW\r\n                var shadowMapIndex:u32 = 0;\r\n                var cascadedShadowMapIndex = 0;\r\n                #if USE_DIRECTLIGHT_SHADOWMAP\r\n                    if directionalLight.isOpenShadow == 1.0 && directionalLight.isCascadedShadow == 0.0 {\r\n                        var directLightShadow:DirectLightShadow = shadowUniforms.directLightShadows[shadowMapIndex];\r\n                        var lightPos: vec4<f32> = directLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);\r\n                        var lightInfo:LightInfo;\r\n                        lightInfo.direction = directionalLight.direction;\r\n                            \r\n                        shadowValue = getShadowValue(directLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, shadowMapIndex, false, 0, 0);\r\n                        directionalLight.color *= shadowValue;\r\n                        shadowMapIndex++;\r\n                    }\r\n                #endif\r\n\r\n                #if USE_DIRECTLIGHT_CASCADEDSHADOWMAP\r\n                    if directionalLight.isOpenShadow == 1.0 && directionalLight.isCascadedShadow == 1.0 {\r\n                        var directLightCascadedShadow:DirectLightCascadedShadow = shadowUniforms.directLightCascadedShadows[cascadedShadowMapIndex];\r\n                        var cascadedIndex = getCascadedIndex(geometry.viewPosition.z, directLightCascadedShadow.cascadedBreakVSArray);\r\n                        var lightPos: vec4<f32> = directLightCascadedShadow.shadowCameraVPMatrixArray[cascadedIndex] * vec4<f32>(geometry.position,1.0);\r\n                        var lightInfo:LightInfo;\r\n                        lightInfo.direction = directionalLight.direction;\r\n                        lightInfo.viewport = directLightCascadedShadow.shadowCameraViewportArray[cascadedIndex];\r\n\r\n                        shadowValue = getCascadedShadowValue(directLightCascadedShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, cascadedShadowMapIndex);\r\n                        directionalLight.color *= shadowValue;\r\n                        cascadedShadowMapIndex++;\r\n                        // if (geometry.ndcPosition.z * 0.5 + 0.5) < 0.8 {\r\n                        //     reflectedLight.testColor = vec3(0.0, geometry.viewPosition.z / 3000.0, 0.0);\r\n                        // } else {\r\n                        //     reflectedLight.testColor = vec3(f32(cascadedIndex), 0.0, 0.0);\r\n                        // }\r\n                        // reflectedLight.testColor = vec3(f32(cascadedIndex * 10) / 255, (geometry.viewPosition.z) / 3000, 0.0);\r\n                    }\r\n                #endif\r\n                \r\n            #endif\r\n        \r\n            #if MATERIAL_PHONG\r\n                let dirReflectedLight=getDirectLightInfo(directionalLight,shininess,geometry.normal,geometry.viewDir);\r\n            #elif MATERIAL_PBR\r\n                let incidentLight=getDirectionalDirectLightIncidentLight(directionalLight,geometry);\r\n                let dirReflectedLight=direct_Physical(incidentLight, geometry, material);\r\n            #endif\r\n\r\n            reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;\r\n            reflectedLight.directSpecular+=dirReflectedLight.directSpecular;\r\n        }\r\n    #endif\r\n    return reflectedLight;\r\n}",
	lightCommon:
		"struct ReflectedLight {\r\n    directDiffuse : vec3 <f32>,\r\n    directSpecular : vec3 <f32>,\r\n    indirectDiffuse : vec3 <f32>,\r\n    indirectSpecular : vec3 <f32>,\r\n};\r\nstruct Geometry {\r\n    position : vec3 <f32>,\r\n    normal : vec3 <f32>,\r\n    viewDir : vec3 <f32>,\r\n    #if USE_CLEARCOAT\r\n        vec3 clearcoatNormal;\r\n    #endif\r\n};\r\nfn getAmbientLightIrradiance(ambientLightColor : vec3 <f32>) -> vec3 <f32> {\r\n    let irradiance = ambientLightColor;\r\n    return irradiance;\r\n}\r\nfn getDistanceAttenuation(lightDistance : f32, cutoffDistance : f32, decayExponent : f32) -> f32 {\r\n    if (cutoffDistance > 0.0 && decayExponent > 0.0)\r\n    {\r\n        let x : f32 = saturate(- lightDistance / cutoffDistance + 1.0);\r\n        return pow(x, decayExponent);\r\n    }\r\n    return 1.0;\r\n}\r\nfn getSpotAttenuation(coneCosine : f32, penumbraCosine : f32, angleCosine : f32) -> f32 {\r\n    return smoothstep(coneCosine, penumbraCosine, angleCosine);\r\n}\r\nfn shGetIrradianceAt(normal : vec3 <f32>, shCoefficients : array<vec3 <f32>, 9>) -> vec3 <f32> {\r\n    let x : f32 = normal.x;\r\n    let y : f32 = normal.y;\r\n    let z : f32 = normal.z;\r\n    var result : vec3 <f32> = shCoefficients[ 0 ] * 0.886227;\r\n    result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\r\n    result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\r\n    result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\r\n    result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\r\n    result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\r\n    result += shCoefficients[ 6 ] * (0.743125 * z * z - 0.247708);\r\n    result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\r\n    result += shCoefficients[ 8 ] * 0.429043 * (x * x - y * y);\r\n    return result;\r\n}\r\nfn inverseTransformDirection(dir : vec3 <f32>, matrix : mat4x4 <f32>) -> vec3 <f32> {\r\n    return normalize((vec4 <f32> (dir, 0.0) * matrix).xyz);\r\n}\r\n",
	...{
		getNormal:
			"fn getNormal(input:FragInput)->vec3<f32>{\r\n    var normal:vec3<f32>;\r\n    #if HAS_NORMAL\r\n        normal= input.normal;\r\n    #else\r\n        let pos_dx = dpdx(input.worldPos);\r\n        let pos_dy = dpdy(input.worldPos);\r\n        normal = normalize( cross(pos_dy, pos_dx) );\r\n    #endif\r\n    return normal*(f32(input.frontFacing) * 2.0 - 1.0);\r\n}",
		getNormalByNormalTexture:
			"fn getNormalByNormalTexture(input:FragInput)->vec3<f32>{\r\n    var n:vec3<f32> = textureSample(normalTexture,normalSampler, input.uv).rgb;\r\n    let tbn:mat3x3<f32> =getTBN(input);\r\n    n = normalize(tbn * (2.0 * n - vec3(1.0)));\r\n    n=n*(f32(input.frontFacing) * 2.0 - 1.0);\r\n    return n;\r\n}",
		getTBN: "fn getTBN(input:FragInput)->mat3x3<f32>{\r\n    #if HAS_TANGENT\r\n        let tbn:mat3x3<f32> = input.tbn;\r\n    #else\r\n        let normal:vec3<f32> =normalize(input.normal);\r\n        let uv:vec2<f32> = select(-input.uv,input.uv,input.frontFacing);\r\n            // ref: http://www.thetenthplanet.de/archives/1180\r\n            // get edge vectors of the pixel triangle\r\n            let dp1:vec3<f32> =  vec3<f32>(dpdx(input.worldPos.x), dpdx(input.worldPos.y), dpdx(input.worldPos.z));\r\n            let dp2:vec3<f32> =  vec3<f32>(dpdy(input.worldPos.x), dpdy(input.worldPos.y), dpdy(input.worldPos.z));\r\n            let duv1:vec2<f32> = dpdx(uv);\r\n            let duv2:vec2<f32> = dpdy(uv);\r\n\r\n            // solve the linear system\r\n            let dp2perp:vec3<f32> = cross(dp2, normal);\r\n            let dp1perp:vec3<f32> = cross(normal, dp1);\r\n            let tangent:vec3<f32> = dp2perp * duv1.x + dp1perp * duv2.x;\r\n            let binormal:vec3<f32> = dp2perp * duv1.y + dp1perp * duv2.y;\r\n            // construct a scale-invariant frame \r\n            let result:f32=max(dot(tangent, tangent), dot(binormal, binormal));\r\n            let invmax:f32 = 1.0/sqrt(result);\r\n            let tbn:mat3x3<f32> = mat3x3<f32>(tangent * invmax, binormal * invmax, normal);\r\n    #endif\r\n    return tbn;\r\n}"
	},
	...{
		brdf: "#if USE_SHEEN\r\n    fn D_Charlie(roughness : f32, dotNH : f32) -> f32 {\r\n        let alpha : f32 = pow2(roughness);\r\n        let invAlpha : f32 = 1.0 / alpha;\r\n        let cos2h : f32 = dotNH * dotNH;\r\n        let sin2h : f32 = max(1.0 - cos2h, 0.0078125);\r\n        return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * pi);\r\n    }\r\n    fn V_Neubelt(dotNV : f32, dotNL : f32) -> f32 {\r\n        return saturate(1.0 / (4.0 * (dotNL + dotNV - dotNL * dotNV) ));\r\n    }\r\n    fn BRDF_Sheen(lightDir : vec3 <f32>, viewDir : vec3 <f32>, normal : vec3 <f32>, sheenColor : vec3 <f32>, sheenRoughness : f32) -> vec3 <f32> {\r\n        let halfDir : vec3 <f32> = normalize(lightDir + viewDir);\r\n        let dotNL : f32 = saturate(dot(normal, lightDir) );\r\n        let dotNV : f32 = saturate(dot(normal, viewDir) );\r\n        let dotNH : f32 = saturate(dot(normal, halfDir) );\r\n        let D : f32 = D_Charlie(sheenRoughness, dotNH);\r\n        let V : f32 = V_Neubelt(dotNV, dotNL);\r\n        return sheenColor * (D * V);\r\n    }\r\n#endif\r\nfn BRDF_Lambert(diffuseColor : vec3 <f32>) -> vec3 <f32> {\r\n\r\n    return reciprocal_pi * diffuseColor;\r\n\r\n}       //validated\r\n\r\nfn F_Schlick(f0 : vec3 <f32>, dotVH : f32) -> vec3 <f32> {\r\n\r\n    //Original approximation by Christophe Schlick '94\r\n    //float fresnel = pow( 1.0 - dotVH, 5.0 );\r\n\r\n    //Optimized variant (presented by Epic at SIGGRAPH '13)\r\n    //https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\r\n    let fresnel = exp2((- 5.55473 * dotVH - 6.98316) * dotVH);\r\n    return (1.0 - f0) * fresnel + f0;\r\n\r\n}       //validated\r\n\r\nfn Schlick_to_F0(f : vec3 <f32>, f90 : f32, dotVH : f32) -> vec3 <f32> {\r\n    let x : f32 = clamp(1.0 - dotVH, 0.0, 1.0);\r\n    let x2 : f32 = x * x;\r\n    let x5 : f32 = clamp(x * x2 * x2, 0.0, 0.9999);\r\n\r\n    return (f - vec3(f90) * x5) / (1.0 - x5);\r\n}\r\nfn V_GGX_SmithCorrelated(alpha : f32, dotNL : f32, dotNV : f32) -> f32 {\r\n\r\n    let a2 : f32 = pow2(alpha);\r\n\r\n    let gv : f32 = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV) );\r\n    let gl : f32 = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL) );\r\n\r\n    return 0.5 / max((gv + gl), 0.000000001);\r\n\r\n}\r\nfn D_ggx(alpha : f32, dotNH : f32) -> f32 {\r\n\r\n    let a2 : f32 = pow2(alpha);\r\n\r\n    let denom : f32 = pow2(dotNH) * (a2 - 1.0) + 1.0;           //avoid alpha = 0 with dotNH = 1\r\n\r\n    return reciprocal_pi * a2 / pow2(denom);\r\n\r\n}\r\nfn BRDF_ggx(lightDir : vec3 <f32>, viewDir : vec3 <f32>, normal : vec3 <f32>, f0 : vec3 <f32>, roughness : f32) -> vec3 <f32> {\r\n\r\n    let alpha : f32 = pow2(roughness);      //UE4's roughness\r\n\r\n    let halfDir = normalize(lightDir + viewDir);\r\n\r\n    let dotNL : f32 = saturate(dot(normal, lightDir) );\r\n    let dotNV : f32 = saturate(dot(normal, viewDir) );\r\n    let dotNH : f32 = saturate(dot(normal, halfDir) );\r\n    let dotVH : f32 = saturate(dot(lightDir, halfDir) );\r\n\r\n    let f = F_Schlick(f0, dotVH);\r\n\r\n    let v = V_GGX_SmithCorrelated(alpha, dotNL, dotNV);\r\n\r\n    let d = D_ggx(alpha, dotNH);\r\n\r\n    return f * (v * d);\r\n\r\n}\r\nfn direct_Physical(directLight : IncidentLight, geometry : Geometry, material : PhysicalMaterial) -> ReflectedLight {\r\n    var reflectedLight : ReflectedLight;\r\n    let dotNL : f32 = saturate(dot(geometry.normal, geometry.viewDir));\r\n    let irradiance : vec3 <f32> = dotNL * directLight.color * 3.1415926;\r\n    reflectedLight.directSpecular = irradiance * BRDF_ggx(directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.roughness);\r\n    reflectedLight.directDiffuse = irradiance * BRDF_Lambert(material.diffuseColor);\r\n    return reflectedLight;\r\n}\r\n",
		ibl: "\r\nfn getLightProbeRadiance(viewDir : vec3 <f32>, normal : vec3 <f32>, roughness : f32) -> vec3 <f32>{\r\n  var reflectVec : vec3 <f32> = reflect(-viewDir, normal);\r\n  reflectVec.x = -reflectVec.x;   //TextureCube is left-hand,so x need inverse\r\n  let mipCount : f32 = 10.0;//resolution of 256x256\r\n  let lod : f32 = roughness * mipCount;\r\n  let specularLight : vec3 <f32> = textureSampleLevel(specularEnvTexture, specularEnvSampler, reflectVec, lod).rgb;\r\n  return specularLight;\r\n}\r\nfn getLightProbeIrradiance(lightProbe : array<vec3 <f32>, 9>, normal : vec3 <f32>) -> vec3 <f32> {\r\n  var worldNormal : vec3 <f32> = normal;\r\n  worldNormal.x = -normal.x;\r\n  var irradiance : vec3 <f32> = lightProbe[0];\r\n  irradiance += lightProbe[1] * (normal.y);\r\n  irradiance += lightProbe[2] * (normal.z);\r\n  irradiance += lightProbe[3] * (normal.x);\r\n\r\n  irradiance += lightProbe[4] * (normal.y * normal.x);\r\n  irradiance += lightProbe[5] * (normal.y * normal.z);\r\n  irradiance += lightProbe[6] * (3.0 * normal.z * normal.z - 1.0);\r\n  irradiance += lightProbe[7] * (normal.z * normal.x);\r\n  irradiance += lightProbe[8] * (normal.x * normal.x - normal.y * normal.y);\r\n\r\n  return max(irradiance, vec3 <f32> (0.0, 0.0, 0.0));\r\n}\r\nfn DFGApprox(specularColor : vec3 <f32>, roughness : f32, dotNV : f32) -> vec3 <f32> {\r\n  const c0 : vec4 <f32> = vec4 <f32> (- 1, - 0.0275, - 0.572, 0.022);\r\n  let c1 : vec4 <f32> = vec4 <f32> (1, 0.0425, 1.04, - 0.04);\r\n  let r : vec4 <f32> = roughness * c0 + c1;\r\n  let a004 : f32 = min(r.x * r.x, exp2(- 9.28 * dotNV)) * r.x + r.y;\r\n  let fab : vec2 <f32> = vec2 <f32> (- 1.04, 1.04) * a004 + r.zw;\r\n  return specularColor * fab.x + fab.y;\r\n}\r\n  //间接光照\r\nfn indirectDiffuse_Physical(geometry : Geometry, material : PhysicalMaterial) -> ReflectedLight {\r\n  var reflectedLight : ReflectedLight;\r\n  var irradiance : vec3 <f32> = lightUniforms.ambient.xyz * lightUniforms.ambient.w;\r\n  irradiance *= pi;\r\n  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);\r\n  return reflectedLight;\r\n}\r\n  //间接高光\r\nfn indirectSpecular_Physical(geometry : Geometry, material : PhysicalMaterial) -> ReflectedLight {\r\n  var reflectedLight : ReflectedLight;\r\n      //IBL specular\r\n  let radiance : vec3 <f32> = getLightProbeRadiance(geometry.viewDir, geometry.normal, material.roughness);\r\n  let radianceAttenuation : f32 = 1.0;\r\n  reflectedLight.indirectSpecular += radianceAttenuation * radiance * DFGApprox(material.specularColor, material.roughness, geometry.dotNV);\r\n  return reflectedLight;\r\n}\r\n",
		pbrStruct:
			"struct MaterialUniform{\r\n\r\n    modelMatrix : mat4x4 <f32>,\r\n\r\n    diffuse : vec3 <f32>,\r\n\r\n    opacity : f32,\r\n\r\n    normalMatrix : mat3x3 <f32>,\r\n\r\n    emissive : vec3 <f32>,\r\n\r\n    roughness : f32,\r\n\r\n    metalness : f32,\r\n\r\n    #if TONE_MAPPING\r\n        toneMappingExposure : f32,\r\n    #endif\r\n\r\n    #if SPECULAR\r\n\r\n        specularColor : vec3 <f32>,\r\n\r\n        specularIntensity : f32,\r\n    #endif\r\n\r\n    #if USE_SHEEN\r\n\r\n        sheenColor : vec3 <f32>,\r\n\r\n        sheenRoughness : f32,\r\n    #endif\r\n\r\n    #if USE_TRANSMISSION\r\n\r\n        attenuationColor : vec3 <f32>,\r\n\r\n        transmission : f32,\r\n\r\n        transmissionSamplerSize : vec2 <f32>,\r\n\r\n        thickness : f32,\r\n\r\n        attenuationDistance : f32,\r\n\r\n    #endif\r\n\r\n    #if USE_SKINNING\r\n\r\n        bindMatrix : mat4x4 <f32>,\r\n\r\n        bindMatrixInverse : mat4x4 <f32>,\r\n\r\n        boneTextureSize : u32,\r\n    #endif\r\n\r\n    #if USE_NORMALTEXTURE\r\n        normalScale : vec2 <f32>,\r\n    #endif\r\n\r\n    #if IOR\r\n        ior : f32,\r\n    #endif\r\n\r\n    #if USE_CLEARCOAT\r\n\r\n        #if USE_CLEARCOAT_NORMALTEXTURE\r\n            clearcoatNormalScale : vec2 <f32>,\r\n        #endif\r\n\r\n        clearcoat : f32,\r\n\r\n        clearcoatRoughness : f32,\r\n    #endif\r\n\r\n    #if USE_IRIDESCENCE\r\n        iridescence : f32,\r\n\r\n        iridescenceIOR : f32,\r\n\r\n        iridescenceThicknessMinimum : f32,\r\n\r\n        iridescenceThicknessMaximum : f32,\r\n\r\n    #endif\r\n\r\n    #if USE_AOTEXTURE\r\n        aoTextureIntensity : f32,\r\n    #endif\r\n\r\n    #if USE_LIGHTTEXTURE\r\n        lightTextureIntensity : f32,\r\n    #endif\r\n\r\n    #if USE_ENVTEXTURE\r\n        envTextureIntensity : f32,\r\n\r\n        flipEnvTexture : f32,\r\n    #endif\r\n\r\n    #if USE_BUMPTEXTURE\r\n        bumpScale : f32;\r\n    #endif\r\n\r\n    #if USE_DISPLACEMENTTEXTURE\r\n\r\n        displacementScale : f32,\r\n\r\n        displacementBias : f32,\r\n    #endif\r\n\r\n    #if USE_MORPHTARGETS\r\n\r\n        morphTargetBaseInfluence : f32,\r\n\r\n        #if MORPHTARGETS_TEXTURE\r\n\r\n            morphTargetsTextureSize : vec2 < u32>,\r\n\r\n            MORPHTARGETS_COUNT : u32,\r\n\r\n        #endif\r\n\r\n        morphTargetInfluences : array<f32>,\r\n\r\n    #endif\r\n}\r\n",
		pbrTexture:
			"#if USE_BUMPTEXTURE\r\n    @group(0) @binding(bumpTextureBinding) var bumpTexture : texture_2d<f32>;\r\n#endif\r\n#if USE_TRANSMISSION\r\n    #if USE_TRANSMISSIONTEXTURE\r\n        @group(0) @binding(transmissionTextureBinding) var transmissionTexture : texture_2d<f32>;\r\n    #endif\r\n    #if USE_THICKNESSTEXTURE\r\n        @group(0) @binding(thicknessTextureBinding) var thicknessTexture : texture_2d<f32>;\r\n    #endif\r\n    @group(0) @binding(transmissionSamplerTextureBinding) var transmissionSamplerTexture : texture_2d<f32>;\r\n#endif\r\n#if USE_ENVTEXTURE\r\n    @group(0) @binding(envTextureBinding) var envTexture : texture_cube <f32>;\r\n#endif\r\n#if USE_NORMALTEXTURE\r\n    @group(0) @binding(normalTextureBinding) var normalTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_CLEARCOATTEXTURE\r\n    @group(0) @binding(clearcoatTextureBinding) var clearcoatTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_CLEARCOAT_ROUGHNESSTEXTURE\r\n    @group(0) @binding(clearcoatRclearcoatRoughnessTextureBinding) var clearcoatRoughnessTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_CLEARCOAT_NORMALTEXTURE\r\n    @group(0) @binding(clearcoatNormalTextureBinding) var clearcoatNormalTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_IRIDESCENCETEXTURE\r\n    @group(0) @binding(iridescenceTextureBinding) var iridescenceTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_IRIDESCENCE_THICKNESSTEXTURE\r\n    @group(0) @binding(iridescenceThicknessTextureBinding) var iridescenceThicknessTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_ROUGHNESSTEXTURE\r\n    @group(0) @binding(roughnessTextureBinding) var roughnessTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_METALNESSTEXTURE\r\n    @group(0) @binding(metalnessTextureBinding) var metalnessTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if SPECULAR\r\n    #if USE_SPECULARINTENSITYTEXTURE\r\n        @group(0) @binding(specularIntensityTextureBinding) var specularIntensityTexture : texture_2d<f32>;\r\n    #endif\r\n\r\n    #if USE_SPECULARCOLORTEXTURE\r\n        @group(0) @binding(specularColorTextureBinding) var specularColorTexture : texture_2d<f32>;\r\n    #endif\r\n#endif\r\n\r\n#if USE_SHEEN\r\n    #if USE_SHEENCOLORTEXTURE\r\n        @group(0) @binding(sheenColorTextureBinding) var sheenColorTexture : texture_2d<f32>;\r\n    #endif\r\n    #if USE_SHEENROUGHNESSTEXTURE\r\n        @group(0) @binding(sheenRoughnessTextureBinding) var sheenRoughnessTexture : texture_2d<f32>;\r\n    #endif\r\n#endif\r\n\r\n#if USE_TEXTURE\r\n    @group(0) @binding(baseSamplerBinding) var baseSampler : sampler;\r\n    @group(0) @binding(baseTextureBinding) var baseTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_ALPHATEXTURE\r\n    @group(0) @binding(alphaTextureBinding) var alphaTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_AOTEXTURE\r\n    @group(0) @binding(aoTextureBinding) var aoTexture : texture_2d<f32>;\r\n\r\n#endif\r\n#if USE_LIGHTTEXTURE\r\n    @group(0) @binding(lightTextureBinding) var lightTexture : texture_2d<f32>;\r\n#endif\r\n\r\n#if USE_EMISSIVETEXTURE\r\n    @group(0) @binding(emissiveTextureBinding) var emissiveTexture : texture_2d<f32>;\r\n#endif\r\n",
		pbrUtils:
			"const pi : f32 = 3.141592653589793;\r\n\r\nconst reciprocal_pi : f32 = 0.3183098861837907;\r\nfn pow2(x : f32) -> f32 {\r\n    return x * x;\r\n}\r\nfn pow2Vector(x : vec3 <f32>) -> vec3 <f32> {\r\n    return x * x;\r\n}\r\nfn pow3(x : f32) -> f32 {\r\n    return x * x*x;\r\n}\r\nfn pow4(x : f32) -> f32 {\r\n    let x2 : f32 = x * x;\r\n    return x2 * x2;\r\n}\r\nfn max3(v : vec3 <f32>) -> f32 {\r\n    return max(max(v.x, v.y), v.z);\r\n}\r\nfn average(v : vec3 <f32>) -> f32 {\r\n    return dot(v, vec3 <f32> (0.3333333) );\r\n}\r\nfn rand(uv : vec2 <f32>) -> f32 {\r\n    let a : f32 = 12.9898;\r\n    let b : f32 = 78.233;\r\n    let c : f32 = 43758.5453;\r\n    let dt : f32 = dot(uv.xy, vec2 <f32> (a, b) );\r\n    let sn : f32 = dt % pi;\r\n    return fract(sin(sn) * c);\r\n}\r\nfn transformDirection(dir : vec3 <f32>, matrix : mat4x4 <f32>) -> vec3 <f32> {\r\n    return normalize((matrix * vec4 <f32> (dir, 0.0) ).xyz);\r\n}\r\n\r\nfn transposeMat3(m : mat3x3 <f32>) -> mat3x3 <f32> {\r\n    var tmp : mat3x3 <f32>;\r\n    tmp[ 0 ] = vec3 <f32> (m[ 0 ].x, m[ 1 ].x, m[ 2 ].x);\r\n    tmp[ 1 ] = vec3 <f32> (m[ 0 ].y, m[ 1 ].y, m[ 2 ].y);\r\n    tmp[ 2 ] = vec3 <f32> (m[ 0 ].z, m[ 1 ].z, m[ 2 ].z);\r\n    return tmp;\r\n}\r\nfn luminance(rgb : vec3 <f32>) -> f32 {\r\n    let weights : vec3 <f32> = vec3 <f32> (0.2126729, 0.7151522, 0.0721750);\r\n    return dot(weights, rgb);\r\n}\r\nfn LinearToneMapping(color : vec3 <f32>, toneMappingExposure : f32) -> vec3 <f32> {\r\n    return toneMappingExposure * color;\r\n}\r\n\r\nfn ReinhardToneMapping(color : vec3 <f32>, toneMappingExposure : f32) -> vec3 <f32> {\r\n    var tempColor : vec3 <f32>;\r\n    tempColor = color;\r\n    tempColor *= toneMappingExposure;\r\n    return saturate(tempColor / (vec3 <f32> (1.0) + tempColor) );\r\n}\r\nfn CustomToneMapping(color : vec3 <f32>) -> vec3 <f32> {\r\n    return color;\r\n}\r\nfn toneMapping(color : vec3 <f32>, toneMappingExposure : f32) -> vec3 <f32> {\r\n    return ReinhardToneMapping(color, toneMappingExposure);\r\n}\r\n\r\nfn LinearToLinear(value : vec4 <f32>) -> vec4 <f32> {\r\n    return value;\r\n}\r\nfn lessThanEqual(a : vec3 <f32>, b : vec3 <f32>) -> vec3 <f32>{\r\n    let xValue : f32 = select(b.x, a.x, a.x <= b.x);\r\n    let yValue : f32 = select(b.y, a.y, a.y <= b.y);\r\n    let zValue : f32 = select(b.z, a.z, a.z <= b.z);\r\n    return vec3 <f32> (xValue, yValue, zValue);\r\n}\r\nfn LinearTosRGB(value : vec4 <f32>) -> vec4 <f32> {\r\n    return vec4 <f32> (mix(pow(value.rgb, vec3 <f32> (0.41666) ) * 1.055 - vec3 <f32> (0.055), value.rgb * 12.92, vec3 <f32> (lessThanEqual(value.rgb, vec3 <f32> (0.0031308) )) ), value.a);\r\n}\r\nfn linearToOutputTexel(value : vec4 <f32>) -> vec4 <f32> {\r\n    return LinearTosRGB(value);\r\n}\r\n"
	},
	pbrFunction: function (e) {
		return re`

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
            let f:vec3<f32> = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
            let v:f32 = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
            let d:f32 = D_ggx(alpha, dotNH );
            return f * ( v * d );
        }
    #endif

    #if ${e.USE_SHEEN}
        fn D_Charlie( roughness:f32,dotNH:f32 )->f32 {
            let alpha:f32 = pow2( roughness );
            let invAlpha:f32 = 1.0 / alpha;
            let cos2h:f32 = dotNH * dotNH;
            let sin2h:f32 = max( 1.0 - cos2h, 0.0078125 );
            return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * pi );
        }
        fn V_Neubelt( dotNV:f32, dotNL:f32 )->f32 {
            return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
        }
        fn BRDF_Sheen(lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>,sheenColor:vec3<f32>,sheenRoughness:f32 )->vec3<f32> {
            let halfDir:vec3<f32> = normalize( lightDir + viewDir );
            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let d:f32 = D_Charlie( sheenRoughness, dotNH );
            let v:f32 = V_Neubelt( dotNV, dotNL );
            return sheenColor * ( d * v );
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
        fn evalSensitivity(opd:f32,shift:vec3<f32> )->vec3<f32> {
            let phase:f32 = 2.0 * pi * opd * 1.0e-9;
            let val:vec3<f32> = vec3<f32>( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
            let pos:vec3<f32> = vec3<f32>( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
            let vart:vec3<f32> = vec3<f32>( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
            let xyz:vec3<f32> = val * sqrt( 2.0 * pi * vart ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * vart );
            xyz.x += 9.7470e-14 * sqrt( 2.0 * pi * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
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
            if ( iridescenceIOR < outsideIOR ) phi12 = pi;
            let phi21:f32 = pi - phi12;
            let baseIOR:vec3<f32> = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );
            let R1:vec3<f32> = IorToFresnel0( baseIOR, iridescenceIOR );
            let R23:vec3<f32> = F_Schlick( R1, 1.0, cosTheta2 );
            let phi23:vec3<f32> = vec3<f32>( 0.0 );
            if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = pi;
            if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = pi;
            if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = pi;
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
        let dg:f32 = exp( a * dotNV + b ) + select(0.1 * ( roughness - 0.25 ),0.0,roughness < 0.25);
        return saturate( dg * reciprocal_pi );
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
           clearcoatSpecular += ccIrradiance * BRDF_ggx( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif

       #if ${e.USE_SHEEN}
           sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
       #endif

       #if ${e.USE_IRIDESCENCE}
           reflectedLight.directSpecular = irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
       #else
           reflectedLight.directSpecular = irradiance * BRDF_ggx( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
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
       let cosineWeightedIrradiance:vec3<f32> = irradiance * reciprocal_pi;
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
	...{
		blinn_phong:
			"fn getPointLightInfo(pointLight : PointLight, worldPos : vec3 <f32>, shininess : f32, N : vec3 <f32>, V : vec3 <f32>) -> vec3 <f32>{\r\n  var color = vec3 <f32> (0.0, 0.0, 0.0);\r\n  var direction : vec3 <f32> = worldPos - pointLight.position;\r\n  let dist : f32 = length(direction);\r\n  direction = normalize(direction);\r\n  let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);\r\n\r\n  let d = max(dot(N, -direction), 0.0) * decay;\r\n  color += pointLight.color * d;\r\n\r\n  let halfDir : vec3 <f32> = normalize(V - direction);\r\n  let s : f32 = pow(clamp(dot(N, halfDir), 0.0, 1.0), shininess) * decay;\r\n  color += pointLight.color * s;\r\n  return color;\r\n}\r\nfn getSpotLightInfo(spotLight : SpotLight, worldPos : vec3 <f32>, shininess : f32, N : vec3 <f32>, V : vec3 <f32>) -> vec3 <f32>{\r\n  var color = vec3 <f32> (0.0, 0.0, 0.0);\r\n  var direction : vec3 <f32> = spotLight.position - worldPos;\r\n  let lightDistance : f32 = length(direction);\r\n  direction = normalize(direction);\r\n  let angleCos : f32 = dot(direction, -spotLight.direction);\r\n  let decay : f32 = clamp(1.0 - pow(lightDistance / spotLight.distance, 4.0), 0.0, 1.0);\r\n  let spotEffect : f32 = smoothstep(spotLight.penumbraCos, spotLight.coneCos, angleCos);\r\n  let decayTotal : f32 = decay * spotEffect;\r\n  let d : f32 = max(dot(N, direction), 0.0) * decayTotal;\r\n  color += spotLight.color * d;\r\n  let halfDir : vec3 <f32> = normalize(V + direction);\r\n  let s : f32 = pow(clamp(dot(N, halfDir), 0.0, 1.0), shininess) * decayTotal;\r\n  color += spotLight.color * s;\r\n  return color;\r\n}\r\nstruct DirectionalLight {\r\n  direction : vec3 <f32>,\r\n  color : vec3 <f32>,\r\n};\r\nfn getDirectLightInfo(directionalLight : DirectionalLight, shininess : f32, N : vec3 <f32>, V : vec3 <f32>) -> vec3 <f32>{\r\n  var color = vec3 <f32> (0.0, 0.0, 0.0);\r\n  let d : f32 = max(dot(N, -directionalLight.direction), 0.0);\r\n  color += directionalLight.color * d;\r\n\r\n  let halfDir : vec3 <f32> = normalize(V - directionalLight.direction);\r\n  let s : f32 = pow(clamp(dot(N, halfDir), 0.0, 1.0), shininess);\r\n  color += directionalLight.color * s;\r\n  return color;\r\n}\r\n",
		phongFunction:
			"fn G_BlinnPhong_Implicit() -> f32 {\r\n\r\n        //geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\r\n    return 0.25;\r\n\r\n}\r\nfn D_BlinnPhong(shininess : f32, dotNH : f32) -> f32 {\r\n\r\n    return reciprocal_pi * (shininess * 0.5 + 1.0) * pow(dotNH, shininess);\r\n\r\n}\r\nfn BRDF_BlinnPhong(lightDir : vec3 <f32>, viewDir : vec3 <f32>, normal : vec3 <f32>, specularColor : vec3 <f32>, shininess : f32) -> vec3 <f32> {\r\n\r\n    let halfDir = normalize(lightDir + viewDir);\r\n\r\n    let dotNH : f32 = saturate(dot(normal, halfDir) );\r\n    let dotVH : f32 = saturate(dot(viewDir, halfDir) );\r\n\r\n    let F = F_Schlick(specularColor, 1.0, dotVH);\r\n\r\n    let G : f32 = G_BlinnPhong_Implicit();\r\n\r\n    let D = D_BlinnPhong(shininess, dotNH);\r\n\r\n    return F * (G * D);\r\n\r\n}\r\nfn RE_Direct_BlinnPhong(directLight : IncidentLight, geometry : GeometricContext, material : BlinnPhongMaterial) -> ReflectedLight{\r\n    var reflectedLight : ReflectedLight;\r\n    let dotNL : f32 = saturate(dot(geometry.normal, directLight.direction));\r\n    let irradiance : vec3 <f32> = dotNL * directLight.color;\r\n\r\n    reflectedLight.directDiffuse = irradiance * BRDF_Lambert(material.diffuseColor);\r\n\r\n    reflectedLight.directSpecular = irradiance * BRDF_BlinnPhong(directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess) * material.specularStrength;\r\n    return reflectedLight;\r\n}\r\nfn RE_IndirectDiffuse_BlinnPhong(irradiance : vec3 <f32>, geometry : GeometricContext, material : BlinnPhongMaterial) -> ReflectedLight {\r\n    var reflectedLight : ReflectedLight;\r\n    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);\r\n    return reflectedLight;\r\n}\r\n",
		phongUtils:
			"struct BlinnPhongMaterial {\r\n    diffuseColor : vec3 <f32>,\r\n    specularColor : vec3 <f32>,\r\n    specularShininess : f32,\r\n    specularStrength : f32,\r\n};\r\nconst reciprocal_pi : f32 = 0.3183098861837907;\r\nfn pow2(x : f32) -> f32 { return x * x; }\r\n    fn pow3(x : f32) -> f32 { return x * x*x; }\r\n        fn pow4(x : f32) -> f32 { let x2 = x * x; return x2 * x2; }\r\n            fn max3(v : vec3 <f32>) -> f32 { return max(max(v.x, v.y), v.z); }\r\n                fn average(v : vec3 <f32>) -> f32 {\r\n                    let result = vec3 <f32> (0.3333333, 0.3333333, 0.3333333);\r\n                    return dot(v, result);\r\n                }\r\n"
	},
	...{
		skinVertHeader:
			"#if HAS_SKIN\r\n    struct JointsUniform{\r\n        matrixs : array<mat4x4f>,\r\n    }\r\n    struct InverseBindMatricesUniform{\r\n        matrixs : array<mat4x4f>,\r\n    }\r\n    @binding(skinJointsBufferBinding) @group(0) var<storage, read> jointsUniform : JointsUniform;\r\n    @binding(invsBufferBinding) @group(0) var<storage, read> inverseBindMatricesUniform : InverseBindMatricesUniform;\r\n    fn getSkinMatrix(joints : vec4f, weights : vec4f) -> mat4x4 <f32> {\r\n        let joint0 = jointsUniform.matrixs[u32(joints.x)] * inverseBindMatricesUniform.matrixs[u32(joints.x)];\r\n        let joint1 = jointsUniform.matrixs[u32(joints.y)] * inverseBindMatricesUniform.matrixs[u32(joints.y)];\r\n        let joint2 = jointsUniform.matrixs[u32(joints.z)] * inverseBindMatricesUniform.matrixs[u32(joints.z)];\r\n        let joint3 = jointsUniform.matrixs[u32(joints.w)] * inverseBindMatricesUniform.matrixs[u32(joints.w)];\r\n\r\n        let skinMatrix = joint0 * weights.x +\r\n        joint1 * weights.y +\r\n        joint2 * weights.z +\r\n        joint3 * weights.w;\r\n        return skinMatrix;\r\n    }\r\n#endif\r\n",
		skinVertMain:
			"#if HAS_SKIN\r\n    modelMatrix = getSkinMatrix(input.joint0, input.weight0);\r\n    vNormalView = normalize((materialUniform.normalMatrix * modelMatrix * vec4 <f32> (input.normal, 0.0)).xyz);\r\n#endif\r\n"
	},
	...{
		PbrMaterialStruct:
			"struct MaterialUniform {\r\n    modelMatrix : mat4x4 <f32>,\r\n    color : vec3 <f32>,\r\n    opacity : f32,\r\n    normalMatrix : mat4x4 <f32>,\r\n    emissive : vec3 <f32>,\r\n    metallic : f32,\r\n    roughness : f32,\r\n    #if USE_NORMALTEXTURE\r\n        normalTextureScale : vec2 <f32>,\r\n    #endif\r\n    #if USE_AOTEXTURE\r\n        occlusionStrength : f32,\r\n    #endif\r\n}\r\n"
	}
};
const se = /#([^\s]*)(\s*)/gm,
	ae = /\b[0-9A-Z_&&||]+\b/g;
function oe(e, t) {
	if (!e) return;
	const r = (function (e, t) {
			if (!t) return e;
			let r = e;
			const i = Object.keys(t)?.filter?.((e) => e != e.toUpperCase());
			return (
				i?.forEach?.((e) => {
					r = r.replaceAll(e, t[e]);
				}),
				r
			);
		})(e, t),
		i = r.match(ae)?.filter((e) => !["&&", "||", "_"].includes(e) && !!isNaN(e) && "" != e),
		n = (function (e, t) {
			return e?.map?.((e) => {
				if (e?.includes("&&") || e?.includes("||")) {
					if (e.includes("&&")) {
						return (function (e, t) {
							let r = 0;
							return e?.forEach?.((e) => (r += Number(t[e]) > 1 ? 1 : Number(t[e]))), r === e.length;
						})(e.split("&&"), t);
					}
					return !(function (e, t) {
						let r = 0;
						return e?.forEach?.((e) => (r += Number(t[e]) > 1 ? 1 : Number(t[e]))), 0 === r;
					})(e.split("||"), t);
				}
				return t[e];
			});
		})(i, t),
		s = (function (e, t) {
			let r = e;
			const i =
				t?.map((e) => {
					const t = r.indexOf(e),
						i = r.slice(0, t);
					return (r = r.slice(t + 1 + e.length)), i;
				}) || [];
			i?.length && i.push(r);
			return i;
		})(r, i);
	return s.length > 0
		? (function (e, t) {
				const r = [];
				let i = { frag: "", elseIsValid: !1, expression: !0 },
					n = 1;
				for (let s = 0; s < e.length; ++s) {
					const a = e[s],
						o = a.matchAll(se);
					let c = 0,
						h = !1;
					for (const e of o) {
						switch (((i.frag += a.substring(c, e.index)), e[1])) {
							case "if":
								if (e.index + e[0].length != a.length)
									throw new Error(
										"#if must be immediately followed by a template expression (ie: ${value})"
									);
								(h = !0), r.push(i), n++, (i = { frag: "", elseIsValid: !0, expression: !!t[s] });
								break;
							case "elif":
								if (e.index + e[0].length != a.length)
									throw new Error(
										"#elif must be immediately followed by a template expression (ie: ${value})"
									);
								if (!i.elseIsValid) throw new Error("#elif not preceeded by an #if or #elif");
								(h = !0),
									i.expression && r.length != n && r.push(i),
									(i = { frag: "", elseIsValid: !0, expression: !!t[s] });
								break;
							case "else":
								if (!i.elseIsValid) throw new Error("#else not preceeded by an #if or #elif");
								i.expression && r.length != n && r.push(i),
									(i = { frag: e[2], elseIsValid: !1, expression: !0 });
								break;
							case "endif":
								if (!r.length) throw new Error("#endif not preceeded by an #if");
								const o = r.length == n ? r.pop() : i;
								(i = r.pop()), n--, o.expression && (i.frag += o.frag), (i.frag += e[2]);
								break;
							default:
								i.frag += e[0];
						}
						c = e.index + e[0].length;
					}
					c != a.length && (i.frag += a.substring(c, a.length)), !h && t.length > s && (i.frag += t[s]);
				}
				if (r.length) throw new Error("Mismatched #if/#endif count");
				return i.frag;
		  })(s, n)
		: r;
}
function ce(e) {
	return null != e ? de(e) : void 0;
}
const he = /^[ \t]*#include +<([\w\d./]+)>/gm;
let le = {};
const ue = {
	phong: {
		frag: "struct MaterialUniform {\r\n    modelMatrix : mat4x4 <f32>,\r\n    color : vec3 <f32>,\r\n    opacity : f32,\r\n    normalMatrix : mat4x4 <f32>,\r\n    emissive : vec3 <f32>,\r\n    shininess : f32,\r\n    specular : vec3 <f32>,\r\n}\r\n\r\n#include <FragInput>\r\n#include <SystemUniform>\r\n#include <TextureAndSamplerDefine>\r\n#include <light>\r\n@binding(phongBinding) @group(0) var<uniform> materialUniform : MaterialUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@fragment\r\nfn main(input : FragInput) -> @location(0) vec4 <f32> {\r\n    var totalEmissiveRadiance : vec3 <f32> = materialUniform.emissive;\r\n    var color : vec4 <f32>;\r\n    #if USE_COLORTEXTURE\r\n        color = vec4 <f32> (textureSample(baseColorTexture, baseColorSampler, input.uv).rgb + materialUniform.color, materialUniform.opacity);\r\n    #else\r\n        color = vec4 <f32> (materialUniform.color, materialUniform.opacity);\r\n    #endif\r\n    let v : vec3 <f32> = normalize(systemUniform.cameraPosition - input.worldPos);\r\n    #if USE_NORMALTEXTURE\r\n        let n : vec3 <f32> = getNormalByNormalTexture(input);\r\n    #else\r\n        let n : vec3 <f32> = getNormal(input);\r\n    #endif\r\n    var geometry : Geometry;\r\n    geometry.normal = n;\r\n    geometry.viewDir = v;\r\n    geometry.position = input.worldPos;\r\n    geometry.viewPosition = input.viewPosition.xyz;\r\n    let lightColor : ReflectedLight = parseLights(geometry, materialUniform.shininess);\r\n        //var finnalColor:vec3<f32>=color.xyz + (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);\r\n    var finnalColor : vec3 <f32>= color.xyz * (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);\r\n\r\n        //finnalColor = lightColor.testColor.xyz;\r\n\r\n    return vec4 <f32> (finnalColor, color.a);\r\n}\r\n",
		vert: "\r\nstruct MaterialUniform {\r\n      modelMatrix : mat4x4 <f32>,\r\n      color : vec3 <f32>,\r\n      opacity : f32,\r\n      normalMatrix : mat4x4 <f32>,\r\n      emissive : vec3 <f32>,\r\n      specular : vec3 <f32>,\r\n      shininess : f32,\r\n}\r\n#include <VertexOutput>\r\n#include <SystemUniform>\r\n#include <VertexInput>\r\n#include <instanceVertHeader>\r\n@binding(phongBinding) @group(0) var<uniform> selfUniform : MaterialUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n      var output : VertexOutput;\r\n      #if HAS_UV\r\n            output.uv = input.uv;\r\n      #endif\r\n      var modelMatrix:mat4x4<f32>;\r\n      modelMatrix = selfUniform.modelMatrix;\r\n      #include <instanceVertMain>;\r\n      let modelPos = modelMatrix *vec4<f32>(input.position,1.0);\r\n      output.worldPos = modelPos.xyz / modelPos.w;\r\n      let vNormalView = selfUniform.normalMatrix * vec4 <f32> (input.normal, 0.0);\r\n      output.normal = vNormalView.xyz;\r\n      output.view = systemUniform.cameraPosition.xyz - modelPos.xyz;\r\n      let viewPosition = systemUniform.viewMatrix * modelPos;\r\n      output.viewPosition = -viewPosition.xyz;\r\n      output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;\r\n      return output;\r\n}\r\n"
	},
	color: {
		frag: "struct VertexOutput {\r\n  @builtin(position) position : vec4 <f32>,\r\n  @location(0) color : vec4 <f32>,\r\n};\r\n\r\n@fragment\r\nfn main(input : VertexOutput) -> @location(0) vec4 <f32> {\r\n  return input.color;\r\n}\r\n",
		vert: "\r\nstruct VertexInput {\r\n   @location(positionLocation) position : vec3 <f32>,\r\n   @location(colorLocation) color : vec4 <f32>,\r\n}\r\nstruct VertexOutput {\r\n   @builtin(position) position : vec4 <f32>,\r\n   @location(0) color : vec4 <f32>,\r\n};\r\nstruct SelfUniform {\r\n   modelMatrix : mat4x4 <f32>,\r\n}\r\nstruct SystemUniform {\r\n   projectionMatrix : mat4x4 <f32>,\r\n   viewMatrix : mat4x4 <f32>,\r\n   inverseViewMatrix : mat4x4 <f32>,\r\n   cameraPosition : vec3 <f32>,\r\n};\r\n@binding(colorBinding) @group(0) var<uniform> selfUniform : SelfUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n   var output : VertexOutput;\r\n   output.color = input.color;\r\n   output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * selfUniform.modelMatrix * vec4 <f32> (input.position, 1.0);\r\n   return output;\r\n}\r\n"
	},
	pbr: {
		frag: function (e) {
			return re`
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
            let normal:vec3<f32> = normalize( cross( fdy, fdx ) );
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
			return re`
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
		frag: "\r\nfn lessThanEqual(a : vec3 <f32>, b : vec3 <f32>) -> vec3 <f32>{\r\n  let xValue : f32 = select(b.x, a.x, a.x <= b.x);\r\n  let yValue : f32 = select(b.y, a.y, a.y <= b.y);\r\n  let zValue : f32 = select(b.z, a.z, a.z <= b.z);\r\n  return vec3 <f32> (xValue, yValue, zValue);\r\n}\r\nfn LinearTosRGB(value : vec4 <f32>) -> vec4 <f32> {\r\n  return vec4 <f32> (mix(pow(value.rgb, vec3 <f32> (0.41666) ) * 1.055 - vec3 <f32> (0.055), value.rgb * 12.92, vec3 <f32> (lessThanEqual(value.rgb, vec3 <f32> (0.0031308) )) ), value.a);\r\n}\r\nstruct FragmentInput {\r\n  @location(0) texCoord : vec3 <f32>\r\n};\r\n@group(0) @binding(2) var defaultSampler : sampler;\r\n@group(0) @binding(1) var skyboxTexture : texture_cube <f32>;\r\n@fragment\r\nfn main(input : FragmentInput) -> @location(0) vec4 <f32> {\r\n  let color = textureSample(skyboxTexture, defaultSampler, input.texCoord);\r\n  return LinearTosRGB(color);\r\n}\r\n",
		vert: "\r\nstruct SystemUniform {\r\n  projectionMatrix : mat4x4 <f32>,\r\n  viewMatrix : mat4x4 <f32>,\r\n  inverseViewMatrix : mat4x4 <f32>,\r\n  cameraPosition : vec3 <f32>,\r\n};\r\nstruct MaterialUniform {\r\n  modelMatrix : mat4x4 <f32>,\r\n}\r\n@binding(skyboxBinding) @group(0) var<uniform> selfUniform : MaterialUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\nstruct VertexInput {\r\n  @location(positionLocation) position : vec3 <f32>,\r\n};\r\nstruct VertexOutput {\r\n  @builtin(position) position : vec4 <f32>,\r\n  @location(0) texCoord : vec3 <f32>,\r\n};\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n  var output : VertexOutput;\r\n  output.texCoord = input.position.xyz;\r\n  var modelView = systemUniform.viewMatrix;\r\n      //Drop the translation portion of the modelView matrix\r\n  modelView[3] = vec4(0.0, 0.0, 0.0, modelView[3].w);\r\n  output.position = systemUniform.projectionMatrix * modelView * vec4 <f32> (input.position, 1.0);\r\n  output.position = output.position.xyww;\r\n  return output;\r\n}\r\n"
	},
	resolve: {
		frag: "@group(0) @binding(1) var baseSampler : sampler;\r\n@group(0) @binding(0) var colorTexture : texture_2d<f32>;\r\nstruct VertexOutput {\r\n  @builtin(position) position : vec4 <f32>,\r\n  @location(0) uv : vec2 <f32>,\r\n};\r\n@fragment\r\nfn main(input : VertexOutput) -> @location(0) vec4 <f32> {\r\n  return textureSample(colorTexture, baseSampler, vec2 <f32> (input.uv.x, 1.0 - input.uv.y));\r\n}\r\n",
		vert: ie
	},
	pbr_mat: {
		frag: "// reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl\r\n#include <pbrUtils>\r\n#include <light>\r\n#include <brdf>\r\n#include <PbrMaterialStruct>\r\n#include <SystemUniform> \r\n#include <FragInput>   \r\nstruct PhysicalMaterial {\r\n    diffuseColor:vec3<f32>,\r\n    roughness:f32,\r\n    specularColor:vec3<f32>,\r\n    #if USE_CLEARCOAT\r\n        clearcoat:f32,\r\n        clearcoatRoughness:f32,\r\n        clearcoatF0:vec3<f32>,\r\n        clearcoatF90:f32,\r\n    #endif\r\n\r\n    #if USE_IRIDESCENCE\r\n        iridescence:f32,\r\n        iridescenceIOR:f32,\r\n        iridescenceThickness:f32,\r\n        iridescenceFresnel:vec3<f32>,\r\n        iridescenceF0:vec3<f32>,\r\n    #endif\r\n\r\n    #if USE_SHEEN\r\n        sheenColor:vec3<f32>,\r\n        sheenRoughness:f32,\r\n    #endif\r\n\r\n    #if IOR\r\n        ior:f32,\r\n    #endif\r\n\r\n    #if USE_TRANSMISSION\r\n        transmission:f32,\r\n        transmissionAlpha:f32,\r\n        thickness:f32,\r\n        attenuationDistance:f32,\r\n        attenuationColor:vec3<f32>,\r\n    #endif\r\n};\r\nconst M_PI:f32 = 3.141592653589793;\r\nconst c_MinRoughness:f32 = 0.04;\r\n#include <TextureAndSamplerDefine>\r\n#if USE_IBL\r\n    #include <ibl>\r\n#endif\r\n@binding(pbrBinding) @group(0) var<uniform> materialUniform : MaterialUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@fragment\r\nfn main(input:FragInput) -> @location(0) vec4<f32> \r\n{\r\n    var perceptualRoughness:f32 = materialUniform.roughness;\r\n    var metallic:f32 = materialUniform.metallic;\r\n\r\n    #if USE_METALNESSTEXTURE\r\n        let mrSample:vec4<f32> = textureSample(metalnessRoughnessTexture,metalnessRoughnessSampler, input.uv);\r\n        perceptualRoughness = mrSample.g * perceptualRoughness;\r\n        metallic = mrSample.b * metallic;\r\n    #endif\r\n    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);\r\n    metallic = clamp(metallic, 0.0, 1.0);\r\n    let alphaRoughness:f32 = perceptualRoughness * perceptualRoughness;\r\n\r\n\r\n    // The albedo may be defined from a base texture or a flat color\r\n    #if USE_TEXTURE\r\n        let baseColor:vec4<f32> = textureSample(baseColorTexture,baseColorSampler, input.uv) ;\r\n    #else\r\n        let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);\r\n    #endif\r\n\r\n    #if USE_NORMALTEXTURE\r\n        let n:vec3<f32> = getNormalByNormalTexture(input);  \r\n    #else\r\n        let n:vec3<f32> = getNormal(input);\r\n    #endif\r\n    var material:PhysicalMaterial;\r\n    material.diffuseColor=baseColor.rgb*( 1.0 - metallic );\r\n    material.roughness=perceptualRoughness;\r\n    material.specularColor=mix( vec3<f32>( 0.04), baseColor.rgb, metallic );\r\n    var geometry:Geometry;\r\n    geometry.normal=n;\r\n    geometry.viewDir=normalize(systemUniform.cameraPosition - input.worldPos);\r\n    geometry.position=input.worldPos;\r\n    geometry.dotNV = saturate(dot(geometry.normal, geometry.viewDir) );\r\n    //light shading\r\n    var reflectedLight=parseLights(geometry,material);\r\n    var color=reflectedLight.directDiffuse+reflectedLight.directSpecular;\r\n    //ibl\r\n    #if USE_IBL&&HAS_UV\r\n        var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);\r\n        var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);\r\n        color+=reflectedLightDiffuse.indirectDiffuse;\r\n        color+=reflectedLightSpecular.indirectSpecular;\r\n    #endif\r\n    #if USE_AOTEXTURE\r\n        let ao:f32 = textureSample(aoTexture,aoSampler, input.uv).r;\r\n        color = mix(color, color * ao, materialUniform.occlusionStrength);\r\n    #endif\r\n\r\n    #if USE_EMISSIVETEXTURE\r\n        let emissive:vec3<f32> = textureSample(emissiveTexture, emissiveSampler,input.uv).rgb ;\r\n        color += emissive;\r\n    #endif\r\n    return vec4<f32>(color, baseColor.a);\r\n}\r\n",
		vert: "#include <PbrMaterialStruct>\r\n#include <SystemUniform>\r\n#include <VertexInput>\r\n#include <VertexOutput>\r\n#include <skinVertHeader>\r\n#include <instanceVertHeader>\r\n@binding(pbrBinding) @group(0) var<uniform> materialUniform : MaterialUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput\r\n{\r\n    var output : VertexOutput;\r\n    #if HAS_UV\r\n        output.uv = input.uv;\r\n    #endif\r\n    var modelMatrix : mat4x4 <f32>;\r\n    var vNormalView : vec3 <f32>;\r\n    vNormalView = normalize(materialUniform.normalMatrix * vec4 <f32> (input.normal, 0.0)).xyz;\r\n    modelMatrix = materialUniform.modelMatrix;\r\n    #include <skinVertMain>\r\n    #include <instanceVertMain>\r\n    output.normal = vNormalView.xyz;\r\n    output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelMatrix * vec4 <f32> (input.position, 1.0);\r\n    let modelPos = modelMatrix * vec4 <f32> (input.position, 1.0);\r\n    output.worldPos = modelPos.xyz / modelPos.w;\r\n    return output;\r\n}\r\n"
	},
	blur: {
		frag: "\r\n    struct FragInput {\r\n        @location(0) uv: vec2<f32>,\r\n    }\r\n    struct BlurUniforms {\r\n        direction:vec2<f32>,\r\n    }\r\n    fn gaussianPdf(x:f32, sigma:f32)->f32 {\r\n        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\r\n    }\r\n    @group(0) @binding(0)  var<uniform> blurUniforms : BlurUniforms;\r\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\r\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\r\n    @fragment\r\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\r\n        let invSize:vec2<f32> = vec2<f32>(1.0,1.0) / vec2<f32>(textureDimensions(tDiffuse));\r\n        let fSigma:f32 =f32(sigmaConst);\r\n        var weightSum:f32 = gaussianPdf(0.0, fSigma);\r\n        let baseColor=textureSample(tDiffuse, tSampler, input.uv);\r\n        var diffuseSum:vec3<f32> = baseColor.rgb * weightSum;\r\n        let uvOffset:vec2<f32> = blurUniforms.direction * invSize;\r\n        for( var i : u32 = 1; i < kernelRadius;i = i + 1 ) {\r\n            let x:f32 = f32(i);\r\n            let w:f32 = gaussianPdf(x, fSigma);\r\n            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv+ uvOffset*x).rgb;\r\n            let sample2:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv- uvOffset*x).rgb;\r\n            diffuseSum =diffuseSum+ (sample2+sample2)* w;\r\n            weightSum += 2.0 * w;\r\n        }\r\n        diffuseSum/=weightSum;\r\n      return vec4<f32>(diffuseSum,baseColor.a);\r\n    }\r\n\r\n",
		vert: ie
	},
	luminosityHigh: {
		frag: "\r\nstruct LuminosityUniforms{\r\n    luminosityThreshold : f32,\r\n    smoothWidth : f32,\r\n    defaultColor : vec3 <f32>,\r\n    defaultOpacity : f32,\r\n}\r\nstruct FragInput {\r\n    @location(0) uv : vec2 <f32>,\r\n};\r\n@group(0) @binding(0) var<uniform> luminosityUniforms : LuminosityUniforms;\r\n@group(0) @binding({{tDiffuseBinding}}) var tDiffuse : texture_2d<f32>;\r\n    @group(0) @binding({{tSamplerBinding}}) var tSampler : sampler;\r\n        @fragment\r\n        fn main(input : FragInput) -> @location(0) vec4 <f32> {\r\n\r\n            let texel : vec4 <f32> = textureSample(tDiffuse, tSampler, input.uv);\r\n\r\n            let luma : vec3 <f32> = vec3 <f32> (0.299, 0.587, 0.114);\r\n\r\n            let v : f32 = dot(texel.xyz, luma);\r\n\r\n            let outputColor : vec4 <f32> = vec4 <f32> (luminosityUniforms.defaultColor.rgb, luminosityUniforms.defaultOpacity);\r\n\r\n            let alpha : f32 = smoothstep(luminosityUniforms.luminosityThreshold, luminosityUniforms.luminosityThreshold + luminosityUniforms.smoothWidth, v);\r\n\r\n            return mix(outputColor, texel, alpha);\r\n        }\r\n",
		vert: ie
	},
	blend: {
		frag: "struct FragInput {\r\n  @location(0) uv : vec2 <f32>,\r\n};\r\n@group(0) @binding({{tDiffuseBinding}}) var tDiffuse : texture_2d<f32>;\r\n  @group(0) @binding({{baseColorTextureBinding}}) var baseColorTexture : texture_2d<f32>;\r\n    @group(0) @binding({{tSamplerBinding}}) var tSampler : sampler;\r\n      @fragment\r\n      fn main(input : FragInput) -> @location(0) vec4 <f32> {\r\n        let postColor : vec4 <f32> = textureSample(tDiffuse, tSampler, input.uv);\r\n        let baseColor : vec4 <f32> = textureSample(baseColorTexture, tSampler, input.uv);\r\n        return baseColor + postColor;\r\n      }\r\n",
		vert: ie
	},
	shadowMapDebugger: {
		frag: "@group(0) @binding(1) var shadowSampler : sampler;\r\n@group(0) @binding(0) var shadowMap : texture_depth_2d;\r\n\r\n    //@group(0) @binding(0) var shadowMap: texture_depth_2d_array;\r\n    //@group(0) @binding(0) var shadowMap: texture_2d<f32>;\r\n\r\nstruct VertexOutput {\r\n  @builtin(position) position : vec4 <f32>,\r\n  @location(0) uv : vec2 <f32>,\r\n};\r\n\r\nfn linearizeDepth(depth : f32, near : f32, far : f32) -> f32 {\r\n  return 2 * (near * far) / (far + near - depth * (far - near));\r\n}\r\n\r\n@fragment\r\nfn main(input : VertexOutput) -> @location(0) vec4 <f32> {\r\n  let color : vec4 <f32> = textureGather(shadowMap, shadowSampler, vec2 <f32> (input.uv.x, 1.0 - input.uv.y));\r\n  let depth = (linearizeDepth(color.r, 0.1, 500) - 0.1) / (500 - 0.1);\r\n  return vec4(vec3(depth), 1.0);    //PerspectiveCamera\r\n      //return color;\r\n\r\n      //return textureSample(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));\r\n\r\n}\r\n",
		vert: "struct VertexInput {\r\n     @location(positionLocation) position : vec2 <f32>,\r\n}\r\nstruct VertexOutput {\r\n     @builtin(position) position : vec4 <f32>,\r\n     @location(0) uv : vec2 <f32>,\r\n};\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n     var output : VertexOutput;\r\n     output.uv = input.position * 0.5 + 0.5;\r\n     output.position = vec4 <f32> (input.position, 0.0, 1.0); ;\r\n     return output;\r\n}\r\n"
	},
	shadowMap: {
		vert: "struct VertexInput {\r\n   #if USE_INSTANCE\r\n      @builtin(instance_index) instanceIdx : u32,\r\n   #endif\r\n   @location(positionLocation) position : vec3 <f32>,\r\n};\r\nstruct VertexOutput {\r\n   @builtin(position) position : vec4 <f32>,\r\n};\r\nstruct SelfUniform {\r\n   modelMatrix : mat4x4 <f32>,\r\n};\r\nstruct SystemUniform {\r\n   projectionMatrix : mat4x4 <f32>,\r\n   viewMatrix : mat4x4 <f32>,\r\n   inverseViewMatrix : mat4x4 <f32>,\r\n   cameraPosition : vec3 <f32>,\r\n};\r\n#include <instanceVertHeader>\r\n\r\n#if IS_POINTLIGHT_SHADOWMAP\r\n   struct PointLightUniform {\r\n      vpMatrix : mat4x4 <f32>,\r\n         //vpMatrixArray: array<mat4x4<f32>, 6>,\r\n   };\r\n   @group(1) @binding(pointLightShadowCameraBinding) var<storage, read> pointLightUniform : PointLightUniform;\r\n#endif\r\n\r\n@group(0) @binding(selfBinding) var<uniform> selfUniform : SelfUniform;\r\n@group(1) @binding(cameraBinding) var<uniform> systemUniform : SystemUniform;\r\n\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n   var output : VertexOutput;\r\n   var modelMatrix:mat4x4<f32>;\r\n   modelMatrix = selfUniform.modelMatrix;\r\n   #include <instanceVertMain>\r\n   #if IS_POINTLIGHT_SHADOWMAP\r\n      output.position = pointLightUniform.vpMatrix * modelMatrix * vec4<f32>(input.position,1.0);\r\n   #else\r\n      output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelMatrix * vec4<f32>(input.position,1.0);\r\n   #endif\r\n   return output;\r\n}\r\n",
		frag: void 0
	},
	sprite: {
		vert: "\r\n#include <VertexInput>\r\n#include <VertexOutput>\r\n#include <SystemUniform>\r\nstruct SelfUniform {\r\n  modelMatrix : mat4x4 <f32>,\r\n  color : vec3 <f32>,\r\n  rotation : f32,\r\n  center : vec2 <f32>,\r\n  opacity : f32,\r\n}\r\n@binding(spriteBinding) @group(0) var<uniform> selfUniform : SelfUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@vertex\r\nfn main(input : VertexInput) -> VertexOutput {\r\n  var output : VertexOutput;\r\n  var mvPosition : vec4 <f32>= systemUniform.viewMatrix * selfUniform.modelMatrix * vec4 <f32> (0.0, 0.0, 0.0, 1.0);\r\n  #if HAS_UV\r\n    output.uv = input.uv;\r\n  #endif\r\n  var scale : vec2 <f32>;\r\n  scale.x = length(vec3 <f32> (selfUniform.modelMatrix[0].x, selfUniform.modelMatrix[0].y, selfUniform.modelMatrix[0].z));\r\n  scale.y = length(vec3 <f32> (selfUniform.modelMatrix[1].x, selfUniform.modelMatrix[1].y, selfUniform.modelMatrix[1].z));\r\n      //scale *= - mvPosition.z;\r\n  var alignedPosition : vec2 <f32> =(input.position.xy - (selfUniform.center - vec2 <f32> (0.5, 0.5))) * scale;\r\n  let rotatedPositionX = cos(selfUniform.rotation) * alignedPosition.x - sin(selfUniform.rotation) * alignedPosition.y;\r\n  let rotatedPositionY = sin(selfUniform.rotation) * alignedPosition.x + cos(selfUniform.rotation) * alignedPosition.y;\r\n  var rotatedPosition = vec2 <f32> (rotatedPositionX, rotatedPositionY);\r\n  let newPoint = mvPosition.xy + rotatedPosition;\r\n  output.position = systemUniform.projectionMatrix * vec4 <f32> (newPoint.x, newPoint.y, mvPosition.z, mvPosition.w);\r\n  return output;\r\n}\r\n",
		frag: "#include <VertexOutput>\r\nstruct SelfUniform {\r\n  modelMatrix : mat4x4 <f32>,\r\n  color : vec3 <f32>,\r\n  rotation : f32,\r\n  center : vec2 <f32>,\r\n  opacity : f32,\r\n}\r\n@binding(spriteBinding) @group(0) var<uniform> selfUniform : SelfUniform;\r\n#if USE_COLORTEXTURE\r\n  @group(0) @binding(baseColorSamplerBinding) var baseColorSampler : sampler;\r\n  @group(0) @binding(baseColorTextureBinding) var baseColorTexture : texture_2d<f32>;\r\n#endif\r\n@fragment\r\nfn main(input : VertexOutput) -> @location(0) vec4 <f32> {\r\n  #if USE_COLORTEXTURE\r\n    return textureSample(baseColorTexture, baseColorSampler, input.uv);\r\n  #else\r\n    return vec4 <f32> (selfUniform.color, selfUniform.opacity);\r\n  #endif\r\n}\r\n"
	},
	point: {
		vert: "\r\n#include <PointVertOutput>\r\n#include <SystemUniform>\r\n#include <PointVertInput>\r\nstruct SelfUniform {\r\n    modelMatrix : mat4x4 <f32>,\r\n    color : vec3 <f32>,\r\n    size : f32,\r\n}\r\n@binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;\r\n@binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\r\n@vertex\r\nfn main(input : PointVertInput) -> PointVertOutput {\r\n    var output : PointVertOutput;\r\n    let v1=vec4<f32>(1.0,0.0,0.0,0.0);\r\n    let v2=vec4<f32>(0.0,1.0,0.0,0.0);\r\n    let v3=vec4<f32>(0.0,0.0,1.0,0.0);\r\n    let rotatePoint=selfUniform.modelMatrix*vec4<f32>(input.position.x,input.position.y,input.position.z,1.0);\r\n    let v4=vec4<f32>(rotatePoint.x,rotatePoint.y,rotatePoint.z,1.0);\r\n\r\n    let matrix=mat4x4<f32>(v1,v2,v3,v4);\r\n    var mvPosition : vec4 <f32>= systemUniform.viewMatrix *matrix* vec4 <f32> (0.0, 0.0, 0.0, 1.0);\r\n    #if VERTEX_COLOR\r\n        output.color = input.color;\r\n    #endif\r\n    #if VERTEX_SIZE\r\n        let alignedPosition = input.vertexPoint.xy * input.size;\r\n    #else\r\n        let alignedPosition = input.vertexPoint.xy * selfUniform.size;\r\n    #endif\r\n    let newPoint = mvPosition.xy + alignedPosition;\r\n    output.position = systemUniform.projectionMatrix * vec4 <f32> (newPoint.x, newPoint.y, mvPosition.z, mvPosition.w);\r\n    return output;\r\n}\r\n",
		frag: "\r\n#include <PointFragInput>\r\nstruct SelfUniform {\r\n  modelMatrix : mat4x4 <f32>,\r\n  color : vec3 <f32>,\r\n  size : f32,\r\n}\r\n@binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;\r\n#if USE_COLORTEXTURE\r\n  @group(0) @binding(baseColorSamplerBinding) var baseColorSampler : sampler;\r\n  @group(0) @binding(baseColorTextureBinding) var baseColorTexture : texture_2d<f32>;\r\n#endif\r\n@fragment\r\nfn main(input : PointFragInput) -> @location(0) vec4 <f32> {\r\n  var color : vec4 <f32>= vec4 <f32> (selfUniform.color, 1.0);\r\n  #if USE_COLORTEXTURE\r\n    color = textureSample(baseColorTexture, baseColorSampler, input.uv);\r\n  #endif\r\n  #if VERTEX_COLOR\r\n    color = vec4 <f32> (input.color, 1.0);\r\n  #endif\r\n  return color;\r\n}\r\n"
	}
};
function de(e) {
	return e.replace(he, fe);
}
function fe(e, t) {
	const r = ne[t];
	if (void 0 === r) throw new Error(`Can not resolve #include <${t}>`);
	return de(oe(r, le));
}
function me(e, t = {}) {
	const r = ue[e];
	return (le = t), { vert: r?.vert ? ce(oe(r.vert, le)) : void 0, frag: r?.frag ? ce(oe(r.frag, le)) : void 0 };
}
class pe {
	constructor(e) {
		(this.shaderId = e.shaderId),
			(this.defines = e.defines || {}),
			(this.render = e.render),
			(this.compute = e.compute),
			(this._shaderLanguage = e.language),
			(this.dirty = !0);
	}
	get uid() {
		return (this._uid = this.shaderId.concat(JSON.stringify(this.defines))), this._uid;
	}
	setDefines(e) {
		e && ((this.dirty = !0), (this.defines = Object.assign(this.defines, e)));
	}
	getShaderModule(e) {
		if (this.dirty) {
			const { vert: t, frag: r, compute: i } = this.getShaderStr() || {},
				n = this._shaderLanguage == J.GLSL,
				s = t ? e.createShaderModule({ code: n ? pe?.glslang.compileGLSL(t, ee.VERT) : t }) : void 0,
				a = r ? e.createShaderModule({ code: n ? pe?.glslang.compileGLSL(r, ee.FRAG) : r }) : void 0,
				o = i ? e.createShaderModule({ code: n ? pe?.glslang.compileGLSL(i, ee.COMPUTE) : i }) : void 0;
			(this._shaderModule = { vert: s, frag: a, compute: o }), (this.dirty = !1);
		}
		return this._shaderModule;
	}
	destroy() {
		(this.render = null), (this.compute = null), (this._shaderModule = null), (this.defines = null);
	}
	getShaderStr() {
		const { fragShader: e, vertShader: t } = this.render || {},
			{ computeShader: r } = this.compute || {},
			i = me(this.shaderId, this.defines);
		return {
			vert: i?.vert ?? oe(t instanceof Function ? t() : t, this.defines),
			frag: i?.frag ?? oe(e instanceof Function ? e() : e, this.defines),
			compute: oe(r instanceof Function ? r() : r, this.defines)
		};
	}
	static replaceMain(e, t) {
		return (t = `void ${t}()`), e.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, t);
	}
}
class ge {
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
			r = e.textureProp,
			i = this.getMipmapPipeline(r.format);
		if ("3d" == r.dimension || "1d" == r.dimension)
			throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
		let n = t;
		const s = r.size.depth || 1,
			a = r.usage & GPUTextureUsage.RENDER_ATTACHMENT;
		if (!a) {
			const e = {
				size: {
					width: Math.ceil(r.size.width / 2),
					height: Math.ceil(r.size.height / 2),
					depthOrArrayLayers: s
				},
				format: r.format,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
				mipLevelCount: r.mipLevelCount - 1
			};
			n = this.device.createTexture(e);
		}
		const o = this.device.createCommandEncoder({}),
			c = i.getBindGroupLayout(0);
		for (let e = 0; e < s; ++e) {
			let s = t.createView({
					baseMipLevel: 0,
					mipLevelCount: 1,
					dimension: "2d",
					baseArrayLayer: e,
					arrayLayerCount: 1
				}),
				h = a ? 1 : 0;
			for (let t = 1; t < r.mipLevelCount; ++t) {
				const t = n.createView({
						baseMipLevel: h++,
						mipLevelCount: 1,
						dimension: "2d",
						baseArrayLayer: e,
						arrayLayerCount: 1
					}),
					r = o.beginRenderPass({ colorAttachments: [{ view: t, loadOp: "clear", storeOp: "store" }] }),
					a = this.device.createBindGroup({
						layout: c,
						entries: [
							{ binding: 0, resource: this.sampler },
							{ binding: 1, resource: s }
						]
					});
				r.setPipeline(i), r.setBindGroup(0, a), r.draw(3, 1, 0, 0), r.end(), (s = t);
			}
		}
		if (!a) {
			const e = {
				width: Math.ceil(r.size.width / 2),
				height: Math.ceil(r.size.height / 2),
				depthOrArrayLayers: s
			};
			for (let i = 1; i < r.mipLevelCount; ++i)
				o.copyTextureToTexture({ texture: n, mipLevel: i - 1 }, { texture: t, mipLevel: i }, e),
					(e.width = Math.ceil(e.width / 2)),
					(e.height = Math.ceil(e.height / 2));
		}
		return this.device.queue.submit([o.finish()]), a || n.destroy(), t;
	}
}
function xe(e, t) {
	return null != e ? e : t;
}
xe.EMPTY_OBJECT = Object.freeze({});
class ve {
	constructor(e) {
		(this.scissorTest = e?.scissorTest),
			(this.viewport = e?.viewport),
			(this.depthStencil = e?.depthStencil),
			(this.blendConstant = e?.blendConstant),
			(this.stencilReference = e?.stencilReference),
			(this.multisample = e?.multisample),
			(this.primitive = e?.primitive),
			(this.stencilEnabled = !1),
			(this.scissorTestEnabled = !1),
			(this.targets = e?.targets);
	}
	bind(e) {
		const { passEncoder: t, viewPort: r, scissorTest: i } = e,
			n = this.viewport ?? r,
			s = this.scissorTest ?? i;
		if ((this.stencilReference && t.setStencilReference(this.stencilReference), n?.equalsAndUpdateCache(_e))) {
			const { x: e, y: r, width: i, height: s, minDepth: a, maxDepth: o } = n;
			t.setViewport(e, r, i, s, a, o);
		}
		if ((this.blendConstant && t.setBlendConstant(this.blendConstant), s?.equalsAndUpdateCache(Ue))) {
			const { x: e, y: r, width: i, height: n } = s;
			t.setScissorRect(e, r, i, n);
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
class ye {
	constructor(e, t, r, i) {
		(this.r = e), (this.g = t), (this.b = r), (this.a = i);
	}
}
class Se {
	constructor(e = 1, t = 4294967295, r = !1) {
		(this.count = e), (this.mask = t), (this.alphaToCoverageEnabled = r);
	}
	getMultiSampleDec() {
		return { count: this.count, mask: this.mask, alphaToCoverageEnabled: this.alphaToCoverageEnabled };
	}
}
class be {
	constructor(e = 0, t = 0, r = 0, i = 0, n = !0) {
		(this.x = e), (this.y = t), (this.width = r), (this.height = i), (this.variable = n);
	}
	set(e, t, r, i) {
		(this.x = e), (this.y = t), (this.width = r), (this.height = i);
	}
	static fromScissorTestProps(e) {
		const { x: t = 0, y: r = 0, width: i = 0, height: n = 0, variable: s = !0 } = e;
		return new be(t, r, i, n, s);
	}
	equalsAndUpdateCache(e) {
		const { x: t, y: r, width: i, height: n } = e;
		return (
			(this.x != t || this.y != r || this.width != i || this.height != n) &&
			(e.set(this.x, this.y, this.width, this.height), !0)
		);
	}
}
class we {
	constructor(e = 0, t = 0, r = 0, i = 0, n = 0, s = 1, a = !0) {
		(this.x = e),
			(this.y = t),
			(this.width = r),
			(this.height = i),
			(this.minDepth = n),
			(this.maxDepth = s),
			(this.variable = a);
	}
	set(e, t, r, i, n = 0, s = 1) {
		this.variable &&
			((this.x = e), (this.y = t), (this.width = r), (this.height = i), (this.minDepth = n), (this.maxDepth = s));
	}
	static fromViewPortProps(e) {
		const {
			x: t = 0,
			y: r = 0,
			width: i = 0,
			height: n = 0,
			minDepth: s = 0,
			maxDepth: a = 1,
			variable: o = !0
		} = e;
		return new we(t, r, i, n, s, a, o);
	}
	equalsAndUpdateCache(e) {
		const { x: t, y: r, width: i, height: n, minDepth: s, maxDepth: a } = e;
		return (
			(this.x != t ||
				this.y != r ||
				this.width != i ||
				this.height != n ||
				this.minDepth != s ||
				this.maxDepth != a) &&
			(e.set(this.x, this.y, this.width, this.height, this.minDepth, this.maxDepth), !0)
		);
	}
}
class Te {
	constructor(e, t, r, i) {
		(this.frontFace = xe(r, b.CCW)),
			(this.cullMode = xe(t, w.None)),
			(this.unclippedDepth = xe(i, !1)),
			(this.topology = xe(e, S.TriangleList));
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
class Ee {
	constructor(e) {
		(this.format = xe(e?.format, h.Depth24Plus)),
			(this.depthWriteEnabled = xe(e?.depthWriteEnabled, !0)),
			(this.depthCompare = xe(e?.depthCompare, d.Less)),
			(this.stencilReadMask = xe(e?.stencilReadMask, 4294967295)),
			(this.stencilWriteMask = xe(e?.stencilWriteMask, 4294967295)),
			(this.stencilFrontCompare = xe(e?.stencilFront?.compare, d.Always)),
			(this.stencilFrontFailOp = xe(e?.stencilFront?.failOp, _.Keep)),
			(this.stencilFrontDepthFailOp = xe(e?.stencilFront?.depthFailOp, _.Keep)),
			(this.stencilFrontPassOp = xe(e?.stencilFront?.passOp, _.Keep)),
			(this.stencilBackCompare = xe(e?.stencilBack?.compare, d.Always)),
			(this.stencilBackFailOp = xe(e?.stencilBack?.failOp, _.Keep)),
			(this.stencilBackDepthFailOp = xe(e?.stencilBack?.depthFailOp, _.Keep)),
			(this.stencilBackPassOp = xe(e?.stencilBack?.passOp, _.Keep)),
			(this.depthBias = xe(e?.depthBias, 0)),
			(this.depthBiasSlopeScale = xe(e?.depthBiasSlopeScale, 0)),
			(this.depthBiasClamp = xe(e?.depthBiasClamp, 0));
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
class Me {
	constructor(e) {
		(this.format = xe(e?.format, h.BGRA8Unorm)),
			(this.blendColorOperation = xe(e?.blend?.color?.operation, M.Add)),
			(this.blendColorSrcFactor = xe(e?.blend?.color?.srcFactor, E?.SrcAlpha)),
			(this.blendColorDstFactor = xe(e?.blend?.color?.dstFactor, E.OneMinusSrcAlpha)),
			(this.blendAlphaOperation = xe(e?.blend?.alpha?.operation, M.Add)),
			(this.blendAlphaSrcFactor = xe(e?.blend?.alpha?.srcFactor, E.One)),
			(this.blendAlphaDstFactor = xe(e?.blend?.alpha?.dstFactor, E.One)),
			(this.writeMask = xe(e?.writeMask, N.All));
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
const _e = new we(),
	Ue = new be();
class Le {
	get viewPort() {
		return this._viewPort;
	}
	get scissorTest() {
		return this._scissorTest;
	}
	constructor({ canvas: e, container: t, context: r, pixelRatio: i, useGLSL: n = !1 }) {
		if (!t.clientWidth || !t.clientHeight) throw new Error("container width or height illegality");
		(this.canvas = e || document.createElement("canvas")), (this.pixelRatio = i || window.devicePixelRatio || 1);
		const s = t.clientWidth * this.pixelRatio,
			a = t.clientHeight * this.pixelRatio;
		(this.canvas.width = s),
			(this.canvas.height = a),
			(this.canvas.style.width = t.clientWidth + "px"),
			(this.canvas.style.height = t.clientHeight + "px"),
			t.appendChild(this.canvas),
			(this.context = r || this.canvas.getContext("webgpu")),
			(this._useGLSL = n),
			(this.device = void 0);
	}
	async init(e = {}, t = {}, r = {}) {
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
				this._useGLSL &&
					(pe.glslang = await (async function () {
						const e = await import("https://unpkg.com/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js");
						return await e.default();
					})()),
				(this.mipmapTools = new ge(this.device)),
				this.context.configure({
					device: this.device,
					format: this.presentationFormat,
					usage: a.RenderAttachment,
					alphaMode: "premultiplied",
					...r
				}),
				(this._viewPort = new we(
					0,
					0,
					this.canvas.clientWidth * this.pixelRatio,
					this.canvas.clientHeight * this.pixelRatio
				)),
				(this._scissorTest = new be(
					0,
					0,
					this.canvas.clientWidth * this.pixelRatio,
					this.canvas.clientHeight * this.pixelRatio
				));
		} catch (e) {
			return console.error(e), !1;
		}
		return !0;
	}
	setViewPort(e, t, r, i) {
		this._viewPort.set(e, t, r, i);
	}
	resetViewPortToFullCanvas() {
		this._viewPort.set(0, 0, this.canvas.clientWidth * this.pixelRatio, this.canvas.clientHeight * this.pixelRatio);
	}
	setScissorTest(e, t, r, i) {
		this._scissorTest.set(e, t, r, i);
	}
	resize(e, t, r = {}) {
		const i = e * this.pixelRatio,
			n = t * this.pixelRatio;
		(this.canvas.style.width = i + "px"),
			(this.canvas.style.height = n + "px"),
			(this.canvas.width = i),
			(this.canvas.height = n),
			(this.presentationSize = { width: i, height: n, depth: 1 }),
			this.context.configure({
				device: this.device,
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: a.RenderAttachment,
				alphaMode: W,
				...r
			});
	}
}
class Ae {
	constructor(e) {
		(this.textureProp = Object.assign(
			{
				format: h.RGBA8Unorm,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
				dataIsTexture: !1
			},
			e
		)),
			(this.dirty = !0),
			(this.fixedSize = e.fixedSize || !1);
	}
	get layoutType() {
		const { viewFormats: e, sampleType: t, sampleCount: r } = this.textureProp;
		return { sampleType: xe(t, "float"), viewDimension: xe(e, "2d"), multisampled: !!(r && r > 1) };
	}
	get storageTextureLayoutType() {
		const { access: e = x.WriteOnly, viewFormats: t, format: r } = this.textureProp;
		return { viewDimension: xe(t, "2d"), access: e, format: r };
	}
	get textureView() {
		return (
			this._textureView ||
				(this._textureView = this.gpuTexture.createView({ dimension: xe(this.textureProp.viewFormats, "2d") })),
			this._textureView
		);
	}
	update(e) {
		this.device || (this.device = e),
			this.dirty &&
				(this.checkNeedCreateTexture(),
				(this.dirty = !1),
				this.textureProp.data &&
					(Array.isArray(this.textureProp.data)
						? this.textureProp.data.forEach((e) => {
								this.setData(e);
						  })
						: this.setData(this.textureProp.data)),
				this.textureProp.needMipMap &&
					(Ae.mipmapTools || (Ae.mipmapTools = new ge(this.device)),
					(this.gpuTexture = Ae.mipmapTools.generateMipmap(this))));
	}
	setData(e) {
		const {
			source: t,
			width: r = e.source.width,
			height: i = e.source.height,
			depth: n = 1,
			sourceX: s = 0,
			sourceY: a = 0,
			mipLevel: o = 0,
			x: c = 0,
			y: h = 0,
			z: l = 0,
			aspect: u = "all",
			colorSpace: d = "srgb",
			premultipliedAlpha: f = !1
		} = e;
		if (t instanceof Ae) {
			let e = this.device.createCommandEncoder();
			e.copyTextureToTexture(
				{ texture: t.gpuTexture, origin: [s, a] },
				{ texture: this.gpuTexture, origin: { x: 0, y: 0, z: l }, mipLevel: o },
				{ width: r, height: i, depthOrArrayLayers: 1 }
			),
				this.device.queue.submit([e.finish()]),
				(e = null);
		} else
			this.device.queue.copyExternalImageToTexture(
				{ source: t, origin: [s, a] },
				{
					texture: this.gpuTexture,
					origin: [c, h, l],
					mipLevel: o,
					aspect: u,
					colorSpace: d,
					premultipliedAlpha: f
				},
				[r, i, n]
			);
	}
	setSize(e, t, r, i) {
		(this.fixedSize && !i) ||
			((this.textureProp.size.width = e),
			(this.textureProp.size.height = t),
			r && (this.textureProp.size.depth = r),
			(this.dirty = !0));
	}
	destroy() {
		this.gpuTexture.destroy();
	}
	createGPUTexture() {
		if ("number" == typeof this.textureProp.format) throw new Error("number format");
		const { width: e, height: t, depth: r } = this.textureProp.size;
		return this.device.createTexture({
			label: `${this.textureProp?.label || "undefined"}-size{${e},${t},${r}}`,
			size: [e, t, r],
			dimension: this.textureProp.dimension || "2d",
			format: this.textureProp.format,
			usage: this.textureProp.usage,
			mipLevelCount: this.textureProp.mipLevelCount || 1,
			sampleCount: this.textureProp.sampleCount || 1
		});
	}
	checkNeedCreateTexture() {
		const { width: e, height: t } = this.textureProp.size;
		this.gpuTexture
			? (e == this.gpuTexture.width && t == this.gpuTexture.height) ||
			  ((this._textureView = void 0), this.gpuTexture.destroy(), (this.gpuTexture = this.createGPUTexture()))
			: (this.gpuTexture = this.createGPUTexture());
	}
}
class Ce {
	constructor(e, t = { type: "filtering" }) {
		(this.descriptor = e),
			(this.descriptor = {}),
			Object.assign(
				this.descriptor,
				{
					magFilter: "linear",
					minFilter: "linear",
					addressModeU: "clamp-to-edge",
					addressModeV: "clamp-to-edge"
				},
				e
			),
			(this.layoutType = t);
	}
	update(e) {
		this.gpuSampler || (this.gpuSampler = e.createSampler(this.descriptor));
	}
}
Ce.baseSampler = new Ce({ magFilter: "linear", minFilter: "linear" });
class De {
	constructor(e, t) {
		(this.value = e), (this.op = "clear"), (this.storeOp = "store"), Object.assign(this, t);
	}
}
function Re(e) {
	return null != e;
}
var Ie = function (e) {
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
(Ie.prototype.init_seed = function (e) {
	for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
		e = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
		(this.mt[this.mti] = ((1812433253 * ((4294901760 & e) >>> 16)) << 16) + 1812433253 * (65535 & e) + this.mti),
			(this.mt[this.mti] >>>= 0);
	}
}),
	(Ie.prototype.init_by_array = function (e, t) {
		var r, i, n;
		for (this.init_seed(19650218), r = 1, i = 0, n = this.N > t ? this.N : t; n; n--) {
			var s = this.mt[r - 1] ^ (this.mt[r - 1] >>> 30);
			(this.mt[r] =
				(this.mt[r] ^ (((1664525 * ((4294901760 & s) >>> 16)) << 16) + 1664525 * (65535 & s))) + e[i] + i),
				(this.mt[r] >>>= 0),
				i++,
				++r >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (r = 1)),
				i >= t && (i = 0);
		}
		for (n = this.N - 1; n; n--) {
			s = this.mt[r - 1] ^ (this.mt[r - 1] >>> 30);
			(this.mt[r] =
				(this.mt[r] ^ (((1566083941 * ((4294901760 & s) >>> 16)) << 16) + 1566083941 * (65535 & s))) - r),
				(this.mt[r] >>>= 0),
				++r >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (r = 1));
		}
		this.mt[0] = 2147483648;
	}),
	(Ie.prototype.random_int = function () {
		var e,
			t = new Array(0, this.MATRIX_A);
		if (this.mti >= this.N) {
			var r;
			for (this.mti == this.N + 1 && this.init_seed(5489), r = 0; r < this.N - this.M; r++)
				(e = (this.mt[r] & this.UPPER_MASK) | (this.mt[r + 1] & this.LOWER_MASK)),
					(this.mt[r] = this.mt[r + this.M] ^ (e >>> 1) ^ t[1 & e]);
			for (; r < this.N - 1; r++)
				(e = (this.mt[r] & this.UPPER_MASK) | (this.mt[r + 1] & this.LOWER_MASK)),
					(this.mt[r] = this.mt[r + (this.M - this.N)] ^ (e >>> 1) ^ t[1 & e]);
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
	(Ie.prototype.random_int31 = function () {
		return this.random_int() >>> 1;
	}),
	(Ie.prototype.random_incl = function () {
		return this.random_int() * (1 / 4294967295);
	}),
	(Ie.prototype.random = function () {
		return this.random_int() * (1 / 4294967296);
	}),
	(Ie.prototype.random_excl = function () {
		return (this.random_int() + 0.5) * (1 / 4294967296);
	}),
	(Ie.prototype.random_long = function () {
		return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992);
	});
var ze = Ie;
class Pe {
	static signNotZero(e) {
		return e < 0 ? -1 : 1;
	}
	static toSNorm(e, t) {
		return (t = xe(t, 255)), Math.round((0.5 * Pe.clamp(e, -1, 1) + 0.5) * t);
	}
	static fromSNorm(e, t) {
		return (t = xe(t, 255)), (Pe.clamp(e, 0, t) / t) * 2 - 1;
	}
	static normalize(e, t, r) {
		return 0 === (r = Math.max(r - t, 0)) ? 0 : Pe.clamp((e - t) / r, 0, 1);
	}
	static lerp(e, t, r) {
		return (1 - r) * e + r * t;
	}
	static toRadians(e) {
		if (!Re(e)) throw new Error("degrees is required.");
		return e * Pe.RADIANS_PER_DEGREE;
	}
	static toDegrees(e) {
		if (!Re(e)) throw new Error("radians is required.");
		return e * Pe.DEGREES_PER_RADIAN;
	}
	static negativePiToPi(e) {
		if (!Re(e)) throw new Error("angle is required.");
		return e >= -Pe.PI && e <= Pe.PI ? e : Pe.zeroToTwoPi(e + Pe.PI) - Pe.PI;
	}
	static zeroToTwoPi(e) {
		if (!Re(e)) throw new Error("angle is required.");
		if (e >= 0 && e <= Pe.TWO_PI) return e;
		const t = Pe.mod(e, Pe.TWO_PI);
		return Math.abs(t) < Pe.EPSILON14 && Math.abs(e) > Pe.EPSILON14 ? Pe.TWO_PI : t;
	}
	static mod(e, t) {
		if (!Re(e)) throw new Error("m is required.");
		if (!Re(t)) throw new Error("n is required.");
		if (0 === t) throw new Error("divisor cannot be 0.");
		return Pe.sign(e) === Pe.sign(t) && Math.abs(e) < Math.abs(t) ? e : ((e % t) + t) % t;
	}
	static equalsEpsilon(e, t, r, i = r) {
		if (!Re(e)) throw new Error("left is required.");
		if (!Re(t)) throw new Error("right is required.");
		(r = xe(r, 0)), (i = xe(i, r));
		const n = Math.abs(e - t);
		return n <= i || n <= r * Math.max(Math.abs(e), Math.abs(t));
	}
	static lessThan(e, t, r = 0) {
		if (!Re(e)) throw new Error("first is required.");
		if (!Re(t)) throw new Error("second is required.");
		if (!Re(r)) throw new Error("absoluteEpsilon is required.");
		return e - t < -r;
	}
	static lessThanOrEquals(e, t, r = 0) {
		if (!Re(e)) throw new Error("first is required.");
		if (!Re(t)) throw new Error("second is required.");
		if (!Re(r)) throw new Error("absoluteEpsilon is required.");
		return e - t < r;
	}
	static greaterThan(e, t, r = 0) {
		if (!Re(e)) throw new Error("first is required.");
		if (!Re(t)) throw new Error("second is required.");
		if (!Re(r)) throw new Error("absoluteEpsilon is required.");
		return e - t > r;
	}
	static greaterThanOrEquals(e, t, r = 0) {
		if (!Re(e)) throw new Error("first is required.");
		if (!Re(t)) throw new Error("second is required.");
		if (!Re(r)) throw new Error("absoluteEpsilon is required.");
		return e - t > -r;
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
	static clamp(e, t, r) {
		return e < t ? t : e > r ? r : e;
	}
	static fog(e, t) {
		const r = e * t;
		return 1 - Math.exp(-r * r);
	}
}
(Pe.EPSILON1 = 0.1),
	(Pe.EPSILON2 = 0.01),
	(Pe.EPSILON3 = 0.001),
	(Pe.EPSILON4 = 1e-4),
	(Pe.EPSILON5 = 1e-5),
	(Pe.EPSILON6 = 1e-6),
	(Pe.EPSILON7 = 1e-7),
	(Pe.EPSILON8 = 1e-8),
	(Pe.EPSILON9 = 1e-9),
	(Pe.EPSILON10 = 1e-10),
	(Pe.EPSILON11 = 1e-11),
	(Pe.EPSILON12 = 1e-12),
	(Pe.EPSILON13 = 1e-13),
	(Pe.EPSILON14 = 1e-14),
	(Pe.EPSILON15 = 1e-15),
	(Pe.EPSILON16 = 1e-16),
	(Pe.EPSILON17 = 1e-17),
	(Pe.EPSILON18 = 1e-18),
	(Pe.EPSILON19 = 1e-19),
	(Pe.EPSILON20 = 1e-20),
	(Pe.EPSILON21 = 1e-21),
	(Pe.GRAVITATIONALPARAMETER = 3986004418e5),
	(Pe.SIXTY_FOUR_KILOBYTES = 65536),
	(Pe.FOUR_GIGABYTES = 4294967296),
	(Pe.sign = xe(Math.sign, function (e) {
		return 0 === (e = +e) || e != e ? e : e > 0 ? 1 : -1;
	})),
	(Pe.sinh = xe(Math.sinh, function (e) {
		return (Math.exp(e) - Math.exp(-e)) / 2;
	})),
	(Pe.cosh = xe(Math.cosh, function (e) {
		return (Math.exp(e) + Math.exp(-e)) / 2;
	})),
	(Pe.PI = Math.PI),
	(Pe.ONE_OVER_PI = 1 / Math.PI),
	(Pe.PI_OVER_TWO = Math.PI / 2),
	(Pe.PI_OVER_THREE = Math.PI / 3),
	(Pe.PI_OVER_FOUR = Math.PI / 4),
	(Pe.PI_OVER_SIX = Math.PI / 6),
	(Pe.THREE_PI_OVER_TWO = (3 * Math.PI) / 2),
	(Pe.TWO_PI = 2 * Math.PI),
	(Pe.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
	(Pe.RADIANS_PER_DEGREE = Math.PI / 180),
	(Pe.DEGREES_PER_RADIAN = 180 / Math.PI),
	(Pe.RADIANS_PER_ARCSECOND = Pe.RADIANS_PER_DEGREE / 3600),
	(Pe.nextRandomNumber = function () {
		return Oe.random();
	}),
	(Pe.randomBetween = function (e, t) {
		return Pe.nextRandomNumber() * (t - e) + e;
	}),
	(Pe.acosClamped = function (e) {
		if (!Re(e)) throw new Error("value is required.");
		return Math.acos(Pe.clamp(e, -1, 1));
	}),
	(Pe.asinClamped = function (e) {
		if (!Re(e)) throw new Error("value is required.");
		return Math.asin(Pe.clamp(e, -1, 1));
	}),
	(Pe.chordLength = function (e, t) {
		if (!Re(e)) throw new Error("angle is required.");
		if (!Re(t)) throw new Error("radius is required.");
		return 2 * t * Math.sin(0.5 * e);
	}),
	(Pe.logBase = function (e, t) {
		if (!Re(e)) throw new Error("number is required.");
		if (!Re(t)) throw new Error("base is required.");
		return Math.log(e) / Math.log(t);
	}),
	(Pe.cbrt = xe(Math.cbrt, function (e) {
		const t = Math.pow(Math.abs(e), 1 / 3);
		return e < 0 ? -t : t;
	})),
	(Pe.log2 = xe(Math.log2, function (e) {
		return Math.log(e) * Math.LOG2E;
	}));
const Oe = new ze();
class Be {
	constructor(e = 0, t = 0) {
		(this.x = e), (this.y = t), (this.x = e), (this.y = t);
	}
	set(e, t) {
		return (this.x = e), (this.y = t), this;
	}
	toArray() {
		return [this.x, this.y];
	}
	clone(e) {
		return Be.clone(this, e);
	}
	equals(e) {
		return Be.equals(this, e);
	}
	equalsEpsilon(e, t = 0, r = 0) {
		return Be.equalsEpsilon(this, e, t, r);
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
	}
	applyMatrix3(e) {
		const t = this.x,
			r = this.y;
		return (this.x = e[0] * t + e[3] * r + e[6]), (this.y = e[1] * t + e[4] * r + e[7]), this;
	}
	static fromElements(e, t, r) {
		return Re(r) ? ((r.x = e), (r.y = t), r) : new Be(e, t);
	}
	static clone(e, t) {
		if (Re(e)) return Re(t) ? ((t.x = e.x), (t.y = e.y), t) : new Be(e.x, e.y);
	}
	static maximumComponent(e) {
		return Math.max(e.x, e.y);
	}
	static minimumComponent(e) {
		return Math.min(e.x, e.y);
	}
	static minimumByComponent(e, t, r) {
		return (r.x = Math.min(e.x, t.x)), (r.y = Math.min(e.y, t.y)), r;
	}
	static maximumByComponent(e, t, r) {
		return (r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), r;
	}
	static clamp(e, t, r, i) {
		const n = Pe.clamp(e.x, t.x, r.x),
			s = Pe.clamp(e.y, t.y, r.y);
		return (i.x = n), (i.y = s), i;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y;
	}
	static magnitude(e) {
		return Math.sqrt(Be.magnitudeSquared(e));
	}
	static distance(e, t) {
		return Be.subtract(e, t, Ne), Be.magnitude(Ne);
	}
	static distanceSquared(e, t) {
		return Be.subtract(e, t, Ne), Be.magnitudeSquared(Ne);
	}
	static normalize(e, t) {
		const r = Be.magnitude(e);
		if (((t.x = e.x / r), (t.y = e.y / r), isNaN(t.x) || isNaN(t.y)))
			throw new Error("normalized result is not a number");
		return t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y;
	}
	static cross(e, t) {
		return e.x * t.y - e.y * t.x;
	}
	static multiplyComponents(e, t, r) {
		return (r.x = e.x * t.x), (r.y = e.y * t.y), r;
	}
	static divideComponents(e, t, r) {
		return (r.x = e.x / t.x), (r.y = e.y / t.y), r;
	}
	static add(e, t, r) {
		return (r.x = e.x + t.x), (r.y = e.y + t.y), r;
	}
	static subtract(e, t, r) {
		return (r.x = e.x - t.x), (r.y = e.y - t.y), r;
	}
	static multiplyByScalar(e, t, r) {
		return (r.x = e.x * t), (r.y = e.y * t), r;
	}
	static divideByScalar(e, t, r) {
		return (r.x = e.x / t), (r.y = e.y / t), r;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), t;
	}
	static abs(e, t) {
		return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
	}
	static lerp(e, t, r, i) {
		return Be.multiplyByScalar(t, r, Ve), (i = Be.multiplyByScalar(e, 1 - r, i)), Be.add(Ve, i, i);
	}
	static angleBetween(e, t) {
		return Be.normalize(e, Fe), Be.normalize(t, Ge), Pe.acosClamped(Be.dot(Fe, Ge));
	}
	static mostOrthogonalAxis(e, t) {
		const r = Be.normalize(e, ke);
		return Be.abs(r, r), (t = r.x <= r.y ? Be.clone(Be.UNIT_X, t) : Be.clone(Be.UNIT_Y, t));
	}
	static equals(e, t) {
		return e === t || (Re(e) && Re(t) && e.x === t.x && e.y === t.y);
	}
	static equalsArray(e, t, r) {
		return e.x === t[r] && e.y === t[r + 1];
	}
	static equalsEpsilon(e, t, r = 0, i = 0) {
		return e === t || (Re(e) && Re(t) && Pe.equalsEpsilon(e.x, t.x, r, i) && Pe.equalsEpsilon(e.y, t.y, r, i));
	}
}
(Be.ZERO = Object.freeze(new Be(0, 0))),
	(Be.ONE = Object.freeze(new Be(1, 1))),
	(Be.UNIT_X = Object.freeze(new Be(1, 0))),
	(Be.UNIT_Y = Object.freeze(new Be(0, 1)));
const Ne = new Be(),
	Ve = new Be(),
	Fe = new Be(),
	Ge = new Be(),
	ke = new Be();
class He {
	constructor(e = 0, t = 0, r = 0) {
		(this.x = e), (this.y = t), (this.z = r);
	}
	set(e, t, r) {
		return (this.x = e), (this.y = t), (this.z = r), this;
	}
	toArray() {
		return [this.x, this.y, this.z];
	}
	copy(e) {
		return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
	}
	lerp(e, t) {
		return He.lerp(this, e, t, this), this;
	}
	add(e) {
		return He.add(this, e, this), this;
	}
	addScaledVector(e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
	}
	subtract(e) {
		return He.subtract(this, e, this), this;
	}
	applyQuaternion(e) {
		const t = this.x,
			r = this.y,
			i = this.z,
			n = e.x,
			s = e.y,
			a = e.z,
			o = e.w,
			c = o * t + s * i - a * r,
			h = o * r + a * t - n * i,
			l = o * i + n * r - s * t,
			u = -n * t - s * r - a * i;
		return (
			(this.x = c * o + u * -n + h * -a - l * -s),
			(this.y = h * o + u * -s + l * -n - c * -a),
			(this.z = l * o + u * -a + c * -s - h * -n),
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
		return He.multiplyByScalar(this, e, this), this;
	}
	clone() {
		return He.clone(this, new He());
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	applyMatrix4(e) {
		const t = this.x,
			r = this.y,
			i = this.z,
			n = e,
			s = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
		return (
			(this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * s),
			(this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * s),
			(this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * s),
			this
		);
	}
	applyMatrix3(e) {
		const t = this.x,
			r = this.y,
			i = this.z;
		return (
			(this.x = t * e[0] + r * e[3] + i * e[6]),
			(this.y = t * e[1] + r * e[4] + i * e[7]),
			(this.z = t * e[2] + r * e[5] + i * e[8]),
			this
		);
	}
	transformDirection(e) {
		const t = this.x,
			r = this.y,
			i = this.z,
			n = e;
		return (
			(this.x = n[0] * t + n[4] * r + n[8] * i),
			(this.y = n[1] * t + n[5] * r + n[9] * i),
			(this.z = n[2] * t + n[6] * r + n[10] * i),
			this.normalize()
		);
	}
	setFromMatrixPosition(e) {
		const t = e;
		return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
	}
	normalize() {
		return He.normalize(this, this), this;
	}
	equals(e) {
		return He.equals(this, e);
	}
	equalsEpsilon(e, t = 0, r = 0) {
		return He.equalsEpsilon(this, e, t, r);
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
		Re(t) || (t = new He());
		const { phi: r, radius: i, theta: n } = e,
			s = Math.sin(r) * i;
		return (t.x = s * Math.sin(n)), (t.y = Math.cos(r) * i), (t.z = s * Math.cos(n)), t;
	}
	static fromElements(e, t, r, i) {
		return Re(i) ? ((i.x = e), (i.y = t), (i.z = r), i) : new He(e, t, r);
	}
	static clone(e, t = new He()) {
		if (Re(e)) return Re(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t) : new He(e.x, e.y, e.z);
	}
	static maximumComponent(e) {
		return Math.max(e.x, e.y, e.z);
	}
	static minimumComponent(e) {
		return Math.min(e.x, e.y, e.z);
	}
	static minimumByComponent(e, t, r) {
		return (r.x = Math.min(e.x, t.x)), (r.y = Math.min(e.y, t.y)), (r.z = Math.min(e.z, t.z)), r;
	}
	static maximumByComponent(e, t, r) {
		return (r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), (r.z = Math.max(e.z, t.z)), r;
	}
	static clamp(e, t, r, i) {
		const n = Pe.clamp(e.x, t.x, r.x),
			s = Pe.clamp(e.y, t.y, r.y),
			a = Pe.clamp(e.z, t.z, r.z);
		return (i.x = n), (i.y = s), (i.z = a), i;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z;
	}
	static magnitude(e) {
		return Math.sqrt(He.magnitudeSquared(e));
	}
	static distance(e, t) {
		return He.subtract(e, t, qe), He.magnitude(qe);
	}
	static distanceSquared(e, t) {
		return He.subtract(e, t, qe), He.magnitudeSquared(qe);
	}
	static normalize(e, t) {
		const r = He.magnitude(e);
		if (((t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), isNaN(t.x) || isNaN(t.y) || isNaN(t.z)))
			throw new Error("normalized result is not a number");
		return t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y + e.z * t.z;
	}
	static multiplyComponents(e, t, r) {
		return (r.x = e.x * t.x), (r.y = e.y * t.y), (r.z = e.z * t.z), r;
	}
	static divideComponents(e, t, r) {
		return (r.x = e.x / t.x), (r.y = e.y / t.y), (r.z = e.z / t.z), r;
	}
	static add(e, t, r) {
		return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), r;
	}
	static subtract(e, t, r) {
		return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), r;
	}
	static multiplyByScalar(e, t, r) {
		return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r;
	}
	static divideByScalar(e, t, r) {
		return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
	}
	static abs(e, t) {
		return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), t;
	}
	static lerp(e, t, r, i) {
		return He.multiplyByScalar(t, r, je), (i = He.multiplyByScalar(e, 1 - r, i)), He.add(je, i, i);
	}
	static angleBetween(e, t) {
		He.normalize(e, $e), He.normalize(t, Xe);
		const r = He.dot($e, Xe),
			i = He.magnitude(He.cross($e, Xe, $e));
		return Math.atan2(i, r);
	}
	static mostOrthogonalAxis(e, t) {
		const r = He.normalize(e, Ye);
		return (
			He.abs(r, r),
			(t =
				r.x <= r.y
					? r.x <= r.z
						? He.clone(He.UNIT_X, t)
						: He.clone(He.UNIT_Z, t)
					: r.y <= r.z
					? He.clone(He.UNIT_Y, t)
					: He.clone(He.UNIT_Z, t))
		);
	}
	static projectVector(e, t, r) {
		const i = He.dot(e, t) / He.dot(t, t);
		return He.multiplyByScalar(t, i, r);
	}
	static equals(e, t) {
		return e === t || (Re(e) && Re(t) && e.x === t.x && e.y === t.y && e.z === t.z);
	}
	static equalsArray(e, t, r) {
		return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2];
	}
	static equalsEpsilon(e, t, r = 0, i = 0) {
		return (
			e === t ||
			(Re(e) &&
				Re(t) &&
				Pe.equalsEpsilon(e.x, t.x, r, i) &&
				Pe.equalsEpsilon(e.y, t.y, r, i) &&
				Pe.equalsEpsilon(e.z, t.z, r, i))
		);
	}
	static cross(e, t, r) {
		const i = e.x,
			n = e.y,
			s = e.z,
			a = t.x,
			o = t.y,
			c = t.z,
			h = n * c - s * o,
			l = s * a - i * c,
			u = i * o - n * a;
		return (r.x = h), (r.y = l), (r.z = u), r;
	}
}
(He.ZERO = Object.freeze(new He(0, 0, 0))),
	(He.ONE = Object.freeze(new He(1, 1, 1))),
	(He.UNIT_X = Object.freeze(new He(1, 0, 0))),
	(He.UNIT_Y = Object.freeze(new He(0, 1, 0))),
	(He.UNIT_Z = Object.freeze(new He(0, 0, 1))),
	(He.midpoint = function (e, t, r) {
		return (r.x = 0.5 * (e.x + t.x)), (r.y = 0.5 * (e.y + t.y)), (r.z = 0.5 * (e.z + t.z)), r;
	});
const qe = new He(),
	je = new He(),
	$e = new He(),
	Xe = new He(),
	Ye = new He();
class We {
	constructor(e, t, r) {
		(this.name = e),
			(this.value = t),
			(this.itemSize = r),
			(this.name = e),
			(this.offset = 0),
			(this.shaderLocation = 0),
			(this.attributeType = et.attribute),
			(this.dirty = !0);
	}
	getGPUAttribute() {
		return [{ shaderLocation: this.shaderLocation, format: this.format, offset: this.offset }];
	}
	destroy() {
		this.value = [];
	}
	applyMatrix3(e) {
		if (2 === this.itemSize)
			for (let t = 0, r = this.value.length / this.itemSize; t < r; t++)
				We.v2.fromBufferAttribute(this, t), We.v2.applyMatrix3(e), this.setXY(t, We.v2.x, We.v2.y);
		else if (3 === this.itemSize)
			for (let t = 0, r = this.value.length / this.itemSize; t < r; t++)
				We.v3.fromBufferAttribute(this, t), We.v3.applyMatrix3(e), this.setXYZ(t, We.v3.x, We.v3.y, We.v3.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, r = this.value.length / this.itemSize; t < r; t++)
			We.v3.fromBufferAttribute(this, t), We.v3.applyMatrix4(e), this.setXYZ(t, We.v3.x, We.v3.y, We.v3.z);
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
	setXY(e, t, r) {
		return (e *= this.itemSize), (this.value[e + 0] = t), (this.value[e + 1] = r), this;
	}
	setXYZ(e, t, r, i) {
		return (e *= this.itemSize), (this.value[e + 0] = t), (this.value[e + 1] = r), (this.value[e + 2] = i), this;
	}
	setXYZW(e, t, r, i, n) {
		return (
			(e *= this.itemSize),
			(this.value[e + 0] = t),
			(this.value[e + 1] = r),
			(this.value[e + 2] = i),
			(this.value[e + 3] = n),
			this
		);
	}
}
(We.v3 = new He()), (We.v2 = new Be());
class Ze {
	constructor(e, t, r) {
		(this.names = e),
			(this.itemSizes = r),
			(this.value = t),
			(this.attributeType = et.interleavedAttribute),
			(this.dirty = !0),
			(this.shaderLocation = 0);
	}
	getGPUAttribute() {
		const e = [];
		return (
			this.itemSizes.reduce(
				(t, r, i) => (
					e.push({
						shaderLocation: this.shaderLocation + i,
						format: 1 == r ? `${this.format}` : `${this.format}x${r}`,
						offset: t * this.byteSize
					}),
					t + r
				),
				0
			),
			e
		);
	}
	destroy() {
		(this.value = null), (this.names = null), (this.itemSizes = null);
	}
}
class Ke extends We {
	constructor(e, t, r) {
		super(e, t, r);
		const { format: i, totalByteSize: n } = (function (e, t) {
			const r = `${e}x${t}`;
			return {
				[L.Float32]: {
					format: "float32",
					totalByteSize: Float32Array.BYTES_PER_ELEMENT * t,
					byteSize: Float32Array.BYTES_PER_ELEMENT
				},
				[L.Float32x2]: {
					format: "float32x2",
					totalByteSize: Float32Array.BYTES_PER_ELEMENT * t,
					byteSize: Float32Array.BYTES_PER_ELEMENT
				},
				[L.Float32x3]: {
					format: "float32x3",
					totalByteSize: Float32Array.BYTES_PER_ELEMENT * t,
					byteSize: Float32Array.BYTES_PER_ELEMENT
				},
				[L.Float32x4]: {
					format: "float32x4",
					totalByteSize: Float32Array.BYTES_PER_ELEMENT * t,
					byteSize: Float32Array.BYTES_PER_ELEMENT
				}
			}[r];
		})(L.Float32, r);
		(this.format = i), (this.attributeByteSize = n);
	}
}
class Qe extends Ze {
	constructor(e, t, r) {
		super(e, t, r), (this.format = L.Float32), (this.byteSize = Float32Array.BYTES_PER_ELEMENT);
	}
}
class Je extends Qe {
	constructor(e, t, r) {
		super(e, void 0, r), (this.buffer = t);
	}
}
var et;
!(function (e) {
	(e[(e.interleavedAttribute = 0)] = "interleavedAttribute"), (e[(e.attribute = 1)] = "attribute");
})(et || (et = {}));
const tt = new Map();
class rt {
	constructor(e) {
		(this.index = e.index || 0),
			(this.offset = e.offset ?? 0),
			(this.alignedSize = e.alignedSize ?? 0),
			(this.maxOffset = e.maxOffset ?? 0),
			(this.dynamic = e.dynamic ?? !1),
			(this.gpuBindGroup = e.device.createBindGroup({
				label: e.label,
				layout: e.layout.gpuBindGroupLayout,
				entries: e.entires.map((e) => ({ binding: e.binding, resource: e.resource }))
			}));
	}
	bind(e) {
		if (this.dynamic) {
			const t = [0];
			(t[0] = this.offset * this.alignedSize),
				(this.offset = ++this.offset < this.maxOffset ? this.offset : 0),
				e.setBindGroup(this.index, this.gpuBindGroup, t);
		} else e.setBindGroup(this.index, this.gpuBindGroup);
	}
	destroy() {
		(this.gpuBindGroup = void 0), (this.device = void 0);
	}
	static getBindGroupFromCache(e) {
		if (tt.has(e.label)) return tt.get(e.label);
		{
			const t = new rt(e);
			return tt.set(e.label, t), t;
		}
	}
	static removeBindGroupFromCache(e) {
		tt.delete(e);
	}
}
class it {
	constructor(e) {
		(this.binding = e.binding), (this.resource = e.resource);
	}
	getGPUGroupEntity() {
		return { binding: this.binding, resource: this.resource };
	}
}
class nt {
	constructor(e, t, r, i, n, s) {
		(this.type = e),
			(this.colorAttachments = t),
			(this.depthAttachment = r),
			(this.stencilAttachment = i),
			(this.querySet = n),
			(this.fixedSize = s),
			(this.renderEncoder = void 0),
			(this.computeEncoder = void 0),
			(this._renderPassDescriptor = void 0),
			(this.commandEncoder = void 0),
			(this.device = void 0),
			(this.fixedSize = !1);
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
			this.depthAttachment?.texture?.update(this.device),
			this?.querySet?.update(this.device),
			{
				...(this.colorAttachments && {
					colorAttachments: this.colorAttachments.map(
						(e) => (
							e?.texture?.update && e?.texture?.update(this.device),
							{
								view: e?.textureView?.() ?? e.texture.textureView,
								resolveTarget: null != e.resolveTarget ? e.resolveTarget.textureView : void 0,
								clearValue: e.value,
								loadOp: e.op,
								storeOp: e.storeOp
							}
						)
					)
				}),
				...((this.depthAttachment || this.stencilAttachment) && {
					depthStencilAttachment: {
						view: this.depthAttachment?.texture?.textureView || void 0,
						depthLoadOp: this.depthAttachment?.op || "clear",
						depthClearValue: this.depthAttachment?.value || 1,
						depthStoreOp: this.depthAttachment?.storeOp || "store",
						depthReadOnly: this.depthAttachment?.readOnly || !1
					}
				}),
				...(this.querySet && { occlusionQuerySet: this.querySet.gpuQuerySet })
			}
		);
	}
	beginRenderPass(e) {
		return (
			this.device || (this.device = e),
			(this.commandEncoder = this.device.createCommandEncoder()),
			(this.renderEncoder = this.commandEncoder.beginRenderPass(this.renderPassDescriptor)),
			this.renderEncoder
		);
	}
	endRenderPass() {
		this.renderEncoder?.end(),
			this.device.queue.submit([this.commandEncoder.finish()]),
			(this.commandEncoder = null),
			(this.renderEncoder = null);
	}
	beginComputePassEncoder(e) {
		return (
			this.device || (this.device = e),
			(this.commandEncoder = this.device.createCommandEncoder()),
			(this.computeEncoder = this.commandEncoder.beginComputePass()),
			this.computeEncoder
		);
	}
	endComputePassEncoder() {
		this.computeEncoder?.end(),
			this.device.queue.submit([this.commandEncoder.finish()]),
			(this.commandEncoder = null),
			(this.renderEncoder = null);
	}
	setSize(e, t, r = 1) {
		this.fixedSize ||
			(this?.depthAttachment?.texture?.setSize?.(e, t, r),
			this?.colorAttachments?.forEach?.((i) => i?.texture?.setSize?.(e, t, r)));
	}
	destroy() {
		this.colorAttachments &&
			this.colorAttachments.forEach((e) => {
				e.texture && e.texture.destroy();
			}),
			this.depthAttachment.texture && this.depthAttachment.texture.destroy();
	}
}
class st {
	constructor(e = 0, t = 0, r = 0, i = 0, n = 0, s = 0, a = 0, o = 0, c = 0) {
		(this[0] = e),
			(this[1] = i),
			(this[2] = a),
			(this[3] = t),
			(this[4] = n),
			(this[5] = o),
			(this[6] = r),
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
		return this.setFromMatrix4(e), st.inverse(this, this), st.transpose(this, this), this;
	}
	static clone(e, t) {
		if (Re(e))
			return Re(t)
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
				: new st(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
	}
	static fromColumnMajorArray(e, t) {
		return Re(t) || (t = new st()), st.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return Re(t)
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
			: new st(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
	}
	static fromQuaternion(e, t) {
		const r = e.x * e.x,
			i = e.x * e.y,
			n = e.x * e.z,
			s = e.x * e.w,
			a = e.y * e.y,
			o = e.y * e.z,
			c = e.y * e.w,
			h = e.z * e.z,
			l = e.z * e.w,
			u = e.w * e.w,
			d = r - a - h + u,
			f = 2 * (i - l),
			m = 2 * (n + c),
			p = 2 * (i + l),
			g = -r + a - h + u,
			x = 2 * (o - s),
			v = 2 * (n - c),
			y = 2 * (o + s),
			S = -r - a + h + u;
		return Re(t)
			? ((t[0] = d),
			  (t[1] = p),
			  (t[2] = v),
			  (t[3] = f),
			  (t[4] = g),
			  (t[5] = y),
			  (t[6] = m),
			  (t[7] = x),
			  (t[8] = S),
			  t)
			: new st(d, f, m, p, g, x, v, y, S);
	}
	static fromScale(e, t) {
		return Re(t)
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
			: new st(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
	}
	static fromRotationX(e, t) {
		const r = Math.cos(e),
			i = Math.sin(e);
		return Re(t)
			? ((t[0] = 1),
			  (t[1] = 0),
			  (t[2] = 0),
			  (t[3] = 0),
			  (t[4] = r),
			  (t[5] = i),
			  (t[6] = 0),
			  (t[7] = -i),
			  (t[8] = r),
			  t)
			: new st(1, 0, 0, 0, r, -i, 0, i, r);
	}
	static fromRotationY(e, t) {
		const r = Math.cos(e),
			i = Math.sin(e);
		return Re(t)
			? ((t[0] = r),
			  (t[1] = 0),
			  (t[2] = -i),
			  (t[3] = 0),
			  (t[4] = 1),
			  (t[5] = 0),
			  (t[6] = i),
			  (t[7] = 0),
			  (t[8] = r),
			  t)
			: new st(r, 0, i, 0, 1, 0, -i, 0, r);
	}
	static fromRotationZstatic(e, t) {
		const r = Math.cos(e),
			i = Math.sin(e);
		return Re(t)
			? ((t[0] = r),
			  (t[1] = i),
			  (t[2] = 0),
			  (t[3] = -i),
			  (t[4] = r),
			  (t[5] = 0),
			  (t[6] = 0),
			  (t[7] = 0),
			  (t[8] = 1),
			  t)
			: new st(r, -i, 0, i, r, 0, 0, 0, 1);
	}
	toArray() {
		const e = [];
		return st.toArray(this, e), e;
	}
	static toArray(e, t) {
		return Re(t)
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
	static getColumn(e, t, r) {
		const i = 3 * t,
			n = e[i],
			s = e[i + 1],
			a = e[i + 2];
		return (r.x = n), (r.y = s), (r.z = a), r;
	}
	static setColumn(e, t, r, i) {
		const n = 3 * t;
		return ((i = st.clone(e, i))[n] = r.x), (i[n + 1] = r.y), (i[n + 2] = r.z), i;
	}
	static getRow(e, t, r) {
		const i = e[t],
			n = e[t + 3],
			s = e[t + 6];
		return (r.x = i), (r.y = n), (r.z = s), r;
	}
	static setRow(e, t, r, i) {
		return ((i = st.clone(e, i))[t] = r.x), (i[t + 3] = r.y), (i[t + 6] = r.z), i;
	}
	static setScale(e, t, r) {
		const i = st.getScale(e, at),
			n = t.x / i.x,
			s = t.y / i.y,
			a = t.z / i.z;
		return (
			(r[0] = e[0] * n),
			(r[1] = e[1] * n),
			(r[2] = e[2] * n),
			(r[3] = e[3] * s),
			(r[4] = e[4] * s),
			(r[5] = e[5] * s),
			(r[6] = e[6] * a),
			(r[7] = e[7] * a),
			(r[8] = e[8] * a),
			r
		);
	}
	static getScale(e, t) {
		return (
			(t.x = He.magnitude(He.fromElements(e[0], e[1], e[2], ot))),
			(t.y = He.magnitude(He.fromElements(e[3], e[4], e[5], ot))),
			(t.z = He.magnitude(He.fromElements(e[6], e[7], e[8], ot))),
			t
		);
	}
	static getMaximumScale(e) {
		return st.getScale(e, ct), He.maximumComponent(ct);
	}
	static setRotation(e, t, r) {
		const i = st.getScale(e, ht);
		return (
			(r[0] = t[0] * i.x),
			(r[1] = t[1] * i.x),
			(r[2] = t[2] * i.x),
			(r[3] = t[3] * i.y),
			(r[4] = t[4] * i.y),
			(r[5] = t[5] * i.y),
			(r[6] = t[6] * i.z),
			(r[7] = t[7] * i.z),
			(r[8] = t[8] * i.z),
			r
		);
	}
	static getRotation(e, t) {
		const r = st.getScale(e, lt);
		return (
			(t[0] = e[0] / r.x),
			(t[1] = e[1] / r.x),
			(t[2] = e[2] / r.x),
			(t[3] = e[3] / r.y),
			(t[4] = e[4] / r.y),
			(t[5] = e[5] / r.y),
			(t[6] = e[6] / r.z),
			(t[7] = e[7] / r.z),
			(t[8] = e[8] / r.z),
			t
		);
	}
	static multiply(e, t, r) {
		const i = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
			n = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
			s = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
			a = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
			o = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
			c = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
			h = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
			l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
			u = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
		return (
			(r[0] = i),
			(r[1] = n),
			(r[2] = s),
			(r[3] = a),
			(r[4] = o),
			(r[5] = c),
			(r[6] = h),
			(r[7] = l),
			(r[8] = u),
			r
		);
	}
	static add(e, t, r) {
		return (
			(r[0] = e[0] + t[0]),
			(r[1] = e[1] + t[1]),
			(r[2] = e[2] + t[2]),
			(r[3] = e[3] + t[3]),
			(r[4] = e[4] + t[4]),
			(r[5] = e[5] + t[5]),
			(r[6] = e[6] + t[6]),
			(r[7] = e[7] + t[7]),
			(r[8] = e[8] + t[8]),
			r
		);
	}
	static subtract(e, t, r) {
		return (
			(r[0] = e[0] - t[0]),
			(r[1] = e[1] - t[1]),
			(r[2] = e[2] - t[2]),
			(r[3] = e[3] - t[3]),
			(r[4] = e[4] - t[4]),
			(r[5] = e[5] - t[5]),
			(r[6] = e[6] - t[6]),
			(r[7] = e[7] - t[7]),
			(r[8] = e[8] - t[8]),
			r
		);
	}
	static multiplyByVector(e, t, r) {
		const i = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * i + e[3] * n + e[6] * s,
			o = e[1] * i + e[4] * n + e[7] * s,
			c = e[2] * i + e[5] * n + e[8] * s;
		return (r.x = a), (r.y = o), (r.z = c), r;
	}
	static multiplyByScalar(e, t, r) {
		return (
			(r[0] = e[0] * t),
			(r[1] = e[1] * t),
			(r[2] = e[2] * t),
			(r[3] = e[3] * t),
			(r[4] = e[4] * t),
			(r[5] = e[5] * t),
			(r[6] = e[6] * t),
			(r[7] = e[7] * t),
			(r[8] = e[8] * t),
			r
		);
	}
	static multiplyByScale(e, t, r) {
		return (
			(r[0] = e[0] * t.x),
			(r[1] = e[1] * t.x),
			(r[2] = e[2] * t.x),
			(r[3] = e[3] * t.y),
			(r[4] = e[4] * t.y),
			(r[5] = e[5] * t.y),
			(r[6] = e[6] * t.z),
			(r[7] = e[7] * t.z),
			(r[8] = e[8] * t.z),
			r
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
		const r = e[0],
			i = e[3],
			n = e[6],
			s = e[1],
			a = e[4],
			o = e[7],
			c = e[2],
			h = e[5],
			l = e[8];
		return (
			(t[0] = r),
			(t[1] = i),
			(t[2] = n),
			(t[3] = s),
			(t[4] = a),
			(t[5] = o),
			(t[6] = c),
			(t[7] = h),
			(t[8] = l),
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
			r = e[3],
			i = e[6],
			n = e[1],
			s = e[4],
			a = e[7],
			o = e[2],
			c = e[5],
			h = e[8];
		return t * (s * h - c * a) + n * (c * i - r * h) + o * (r * a - s * i);
	}
	static inverse(e, t) {
		const r = e[0],
			i = e[1],
			n = e[2],
			s = e[3],
			a = e[4],
			o = e[5],
			c = e[6],
			h = e[7],
			l = e[8],
			u = st.determinant(e);
		if (Math.abs(u) <= Pe.EPSILON15) throw new Error("matrix is not invertible");
		(t[0] = a * l - h * o),
			(t[1] = h * n - i * l),
			(t[2] = i * o - a * n),
			(t[3] = c * o - s * l),
			(t[4] = r * l - c * n),
			(t[5] = s * n - r * o),
			(t[6] = s * h - c * a),
			(t[7] = c * i - r * h),
			(t[8] = r * a - s * i);
		const d = 1 / u;
		return st.multiplyByScalar(t, d, t);
	}
	static inverseTranspose(e, t) {
		return st.inverse(st.transpose(e, ut), t);
	}
	static equals(e, t) {
		return (
			e === t ||
			(Re(e) &&
				Re(t) &&
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
	static equalsEpsilon(e, t, r = 0) {
		return (
			(r = xe(r, 0)),
			e === t ||
				(Re(e) &&
					Re(t) &&
					Math.abs(e[0] - t[0]) <= r &&
					Math.abs(e[1] - t[1]) <= r &&
					Math.abs(e[2] - t[2]) <= r &&
					Math.abs(e[3] - t[3]) <= r &&
					Math.abs(e[4] - t[4]) <= r &&
					Math.abs(e[5] - t[5]) <= r &&
					Math.abs(e[6] - t[6]) <= r &&
					Math.abs(e[7] - t[7]) <= r &&
					Math.abs(e[8] - t[8]) <= r)
		);
	}
	clone(e) {
		return st.clone(this, e);
	}
	equals(e) {
		return st.equals(this, e);
	}
	equalsArray(e, t, r) {
		return (
			e[0] === t[r] &&
			e[1] === t[r + 1] &&
			e[2] === t[r + 2] &&
			e[3] === t[r + 3] &&
			e[4] === t[r + 4] &&
			e[5] === t[r + 5] &&
			e[6] === t[r + 6] &&
			e[7] === t[r + 7] &&
			e[8] === t[r + 8]
		);
	}
	equalsEpsilon(e, t) {
		return st.equalsEpsilon(this, e, t);
	}
	toString() {
		return `(${this[0]}, ${this[3]}, ${this[6]})\n(${this[1]}, ${this[4]}, ${this[7]})\n(${this[2]}, ${this[5]}, ${this[8]})`;
	}
}
(st.IDENTITY = Object.freeze(new st(1, 0, 0, 0, 1, 0, 0, 0, 1))),
	(st.ZERO = Object.freeze(new st(0, 0, 0, 0, 0, 0, 0, 0, 0)));
const at = new He(),
	ot = new He(),
	ct = new He(),
	ht = new He(),
	lt = new He(),
	ut = new st();
class dt {
	constructor(e = 0, t = 0, r = 0, i = 0) {
		(this.x = e), (this.y = t), (this.z = r), (this.w = i);
	}
	set(e, t, r, i) {
		(this.x = e), (this.y = t), (this.z = r), (this.w = i);
	}
	toArray() {
		return [this.x, this.y, this.z, this.w];
	}
	clone(e) {
		return dt.clone(this, e);
	}
	equals(e) {
		return dt.equals(this, e);
	}
	equalsEpsilon(e, t = 0, r = 0) {
		return dt.equalsEpsilon(this, e, t, r);
	}
	toString() {
		return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
	}
	static fromElements(e, t, r, i, n) {
		return Re(n) ? ((n.x = e), (n.y = t), (n.z = r), (n.w = i), n) : new dt(e, t, r, i);
	}
	static clone(e, t) {
		if (Re(e)) return Re(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t) : new dt(e.x, e.y, e.z, e.w);
	}
	static maximumComponent(e) {
		return Math.max(e.x, e.y, e.z, e.w);
	}
	static minimumComponent(e) {
		return Math.min(e.x, e.y, e.z, e.w);
	}
	static minimumByComponent(e, t, r) {
		return (
			(r.x = Math.min(e.x, t.x)),
			(r.y = Math.min(e.y, t.y)),
			(r.z = Math.min(e.z, t.z)),
			(r.w = Math.min(e.w, t.w)),
			r
		);
	}
	static maximumByComponent(e, t, r) {
		return (
			(r.x = Math.max(e.x, t.x)),
			(r.y = Math.max(e.y, t.y)),
			(r.z = Math.max(e.z, t.z)),
			(r.w = Math.max(e.w, t.w)),
			r
		);
	}
	static clamp(e, t, r, i) {
		const n = Pe.clamp(e.x, t.x, r.x),
			s = Pe.clamp(e.y, t.y, r.y),
			a = Pe.clamp(e.z, t.z, r.z),
			o = Pe.clamp(e.w, t.w, r.w);
		return (i.x = n), (i.y = s), (i.z = a), (i.w = o), i;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
	}
	static magnitude(e) {
		return Math.sqrt(dt.magnitudeSquared(e));
	}
	static distance(e, t) {
		return dt.subtract(e, t, ft), dt.magnitude(ft);
	}
	static distanceSquared(e, t) {
		return dt.subtract(e, t, ft), dt.magnitudeSquared(ft);
	}
	static normalize(e, t) {
		const r = dt.magnitude(e);
		if (
			((t.x = e.x / r),
			(t.y = e.y / r),
			(t.z = e.z / r),
			(t.w = e.w / r),
			isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w))
		)
			throw new Error("normalized result is not a number");
		return t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
	}
	static multiplyComponents(e, t, r) {
		return (r.x = e.x * t.x), (r.y = e.y * t.y), (r.z = e.z * t.z), (r.w = e.w * t.w), r;
	}
	static divideComponents(e, t, r) {
		return (r.x = e.x / t.x), (r.y = e.y / t.y), (r.z = e.z / t.z), (r.w = e.w / t.w), r;
	}
	static add(e, t, r) {
		return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), (r.w = e.w + t.w), r;
	}
	static subtract(e, t, r) {
		return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), (r.w = e.w - t.w), r;
	}
	static multiplyByScalar(e, t, r) {
		return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
	}
	static divideByScalar(e, t, r) {
		return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
	}
	static abs(e, t) {
		return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), (t.z = Math.abs(e.z)), (t.w = Math.abs(e.w)), t;
	}
	static lerp(e, t, r, i) {
		return dt.multiplyByScalar(t, r, mt), (i = dt.multiplyByScalar(e, 1 - r, i)), dt.add(mt, i, i);
	}
	static equals(e, t) {
		return e === t || (Re(e) && Re(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w);
	}
	static equalsArray(e, t, r) {
		return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2] && e.w === t[r + 3];
	}
	static equalsEpsilon(e, t, r = 0, i = 0) {
		return (
			e === t ||
			(Re(e) &&
				Re(t) &&
				Pe.equalsEpsilon(e.x, t.x, r, i) &&
				Pe.equalsEpsilon(e.y, t.y, r, i) &&
				Pe.equalsEpsilon(e.z, t.z, r, i) &&
				Pe.equalsEpsilon(e.w, t.w, r, i))
		);
	}
}
(dt.ZERO = Object.freeze(new dt(0, 0, 0, 0))),
	(dt.ONE = Object.freeze(new dt(1, 1, 1, 1))),
	(dt.UNIT_X = Object.freeze(new dt(1, 0, 0, 0))),
	(dt.UNIT_Y = Object.freeze(new dt(0, 1, 0, 0))),
	(dt.UNIT_Z = Object.freeze(new dt(0, 0, 1, 0))),
	(dt.UNIT_W = Object.freeze(new dt(0, 0, 0, 1)));
const ft = new dt(),
	mt = new dt();
class pt {
	constructor(
		e = 0,
		t = 0,
		r = 0,
		i = 0,
		n = 0,
		s = 0,
		a = 0,
		o = 0,
		c = 0,
		h = 0,
		l = 0,
		u = 0,
		d = 0,
		f = 0,
		m = 0,
		p = 0
	) {
		(this[0] = e),
			(this[1] = n),
			(this[2] = c),
			(this[3] = d),
			(this[4] = t),
			(this[5] = s),
			(this[6] = h),
			(this[7] = f),
			(this[8] = r),
			(this[9] = a),
			(this[10] = l),
			(this[11] = m),
			(this[12] = i),
			(this[13] = o),
			(this[14] = u),
			(this[15] = p);
	}
	clone(e = new pt()) {
		return pt.clone(this, e);
	}
	set(e) {
		return pt.clone(e, this), this;
	}
	equals(e) {
		return pt.equals(this, e);
	}
	compose(e, t, r) {
		const i = this,
			n = t.x,
			s = t.y,
			a = t.z,
			o = t.w,
			c = n + n,
			h = s + s,
			l = a + a,
			u = n * c,
			d = n * h,
			f = n * l,
			m = s * h,
			p = s * l,
			g = a * l,
			x = o * c,
			v = o * h,
			y = o * l,
			S = r.x,
			b = r.y,
			w = r.z;
		return (
			(i[0] = (1 - (m + g)) * S),
			(i[1] = (d + y) * S),
			(i[2] = (f - v) * S),
			(i[3] = 0),
			(i[4] = (d - y) * b),
			(i[5] = (1 - (u + g)) * b),
			(i[6] = (p + x) * b),
			(i[7] = 0),
			(i[8] = (f + v) * w),
			(i[9] = (p - x) * w),
			(i[10] = (1 - (u + m)) * w),
			(i[11] = 0),
			(i[12] = e.x),
			(i[13] = e.y),
			(i[14] = e.z),
			(i[15] = 1),
			this
		);
	}
	equalsEpsilon(e, t = 0) {
		return pt.equalsEpsilon(this, e, t);
	}
	lookAt(e, t, r) {
		const i = this;
		return (
			He.subtract(e, t, Lt),
			0 === Lt.length() && (Lt.z = 1),
			Lt.normalize(),
			He.cross(r, Lt, _t),
			0 === _t.length() &&
				(1 === Math.abs(r.z) ? (Lt.x += 1e-4) : (Lt.z += 1e-4), Lt.normalize(), He.cross(r, Lt, _t)),
			_t.normalize(),
			He.cross(Lt, _t, Ut),
			(i[0] = _t.x),
			(i[4] = Ut.x),
			(i[8] = Lt.x),
			(i[1] = _t.y),
			(i[5] = Ut.y),
			(i[9] = Lt.y),
			(i[2] = _t.z),
			(i[6] = Ut.z),
			(i[10] = Lt.z),
			this
		);
	}
	toString() {
		return `(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`;
	}
	static clone(e, t) {
		if (Re(e))
			return Re(t)
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
				: new pt(
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
		return pt.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return Re(t)
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
			: new pt(
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
	static fromRotationTranslation(e, t, r) {
		return (
			(t = xe(t, He.ZERO)),
			Re(r)
				? ((r[0] = e[0]),
				  (r[1] = e[1]),
				  (r[2] = e[2]),
				  (r[3] = 0),
				  (r[4] = e[3]),
				  (r[5] = e[4]),
				  (r[6] = e[5]),
				  (r[7] = 0),
				  (r[8] = e[6]),
				  (r[9] = e[7]),
				  (r[10] = e[8]),
				  (r[11] = 0),
				  (r[12] = t.x),
				  (r[13] = t.y),
				  (r[14] = t.z),
				  (r[15] = 1),
				  r)
				: new pt(e[0], e[3], e[6], t.x, e[1], e[4], e[7], t.y, e[2], e[5], e[8], t.z, 0, 0, 0, 1)
		);
	}
	static fromTranslationQuaternionRotationScale(e, t, r, i) {
		Re(i) || (i = new pt());
		const n = r.x,
			s = r.y,
			a = r.z,
			o = t.x * t.x,
			c = t.x * t.y,
			h = t.x * t.z,
			l = t.x * t.w,
			u = t.y * t.y,
			d = t.y * t.z,
			f = t.y * t.w,
			m = t.z * t.z,
			p = t.z * t.w,
			g = t.w * t.w,
			x = o - u - m + g,
			v = 2 * (c - p),
			y = 2 * (h + f),
			S = 2 * (c + p),
			b = -o + u - m + g,
			w = 2 * (d - l),
			T = 2 * (h - f),
			E = 2 * (d + l),
			M = -o - u + m + g;
		return (
			(i[0] = x * n),
			(i[1] = S * n),
			(i[2] = T * n),
			(i[3] = 0),
			(i[4] = v * s),
			(i[5] = b * s),
			(i[6] = E * s),
			(i[7] = 0),
			(i[8] = y * a),
			(i[9] = w * a),
			(i[10] = M * a),
			(i[11] = 0),
			(i[12] = e.x),
			(i[13] = e.y),
			(i[14] = e.z),
			(i[15] = 1),
			i
		);
	}
	static fromTranslationRotationScale(e, t) {
		return pt.fromTranslationQuaternionRotationScale(e.translation, e.rotation, e.scale, t);
	}
	static fromTranslation(e, t) {
		return pt.fromRotationTranslation(st.IDENTITY, e, t);
	}
	static fromScale(e, t) {
		return Re(t)
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
			: new pt(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1);
	}
	static fromRotation(e, t) {
		return (
			Re(t) || (t = new pt()),
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
	static makePerspective(e, t, r, i, n, s) {
		const a = new pt(),
			o = (2 * n) / (t - e),
			c = (2 * n) / (r - i),
			h = (t + e) / (t - e),
			l = (r + i) / (r - i),
			u = -s / (s - n),
			d = (-s * n) / (s - n);
		return (
			(a[0] = o),
			(a[4] = 0),
			(a[8] = h),
			(a[12] = 0),
			(a[1] = 0),
			(a[5] = c),
			(a[9] = l),
			(a[13] = 0),
			(a[2] = 0),
			(a[6] = 0),
			(a[10] = u),
			(a[14] = d),
			(a[3] = 0),
			(a[7] = 0),
			(a[11] = -1),
			(a[15] = 0),
			a
		);
	}
	static makeOrthographic(e, t, r, i, n, s) {
		const a = new pt(),
			o = 1 / (t - e),
			c = 1 / (r - i),
			h = 1 / (s - n),
			l = (t + e) * o,
			u = (r + i) * c,
			d = n * h;
		return (
			(a[0] = 2 * o),
			(a[4] = 0),
			(a[8] = 0),
			(a[12] = -l),
			(a[1] = 0),
			(a[5] = 2 * c),
			(a[9] = 0),
			(a[13] = -u),
			(a[2] = 0),
			(a[6] = 0),
			(a[10] = -1 * h),
			(a[14] = -d),
			(a[3] = 0),
			(a[7] = 0),
			(a[11] = 0),
			(a[15] = 1),
			a
		);
	}
	toArray() {
		const e = [];
		return pt.toArray(this, e), e;
	}
	static toArray(e, t) {
		return Re(t)
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
	static getColumn(e, t, r) {
		const i = 4 * t,
			n = e[i],
			s = e[i + 1],
			a = e[i + 2],
			o = e[i + 3];
		return (r.x = n), (r.y = s), (r.z = a), (r.w = o), r;
	}
	static setColumn(e, t, r, i) {
		const n = 4 * t;
		return ((i = pt.clone(e, i))[n] = r.x), (i[n + 1] = r.y), (i[n + 2] = r.z), (i[n + 3] = r.w), i;
	}
	static getRow(e, t, r) {
		const i = e[t],
			n = e[t + 4],
			s = e[t + 8],
			a = e[t + 12];
		return (r.x = i), (r.y = n), (r.z = s), (r.w = a), r;
	}
	static setRow(e, t, r, i) {
		return ((i = pt.clone(e, i))[t] = r.x), (i[t + 4] = r.y), (i[t + 8] = r.z), (i[t + 12] = r.w), i;
	}
	static setTranslation(e, t, r) {
		return (
			(r[0] = e[0]),
			(r[1] = e[1]),
			(r[2] = e[2]),
			(r[3] = e[3]),
			(r[4] = e[4]),
			(r[5] = e[5]),
			(r[6] = e[6]),
			(r[7] = e[7]),
			(r[8] = e[8]),
			(r[9] = e[9]),
			(r[10] = e[10]),
			(r[11] = e[11]),
			(r[12] = t.x),
			(r[13] = t.y),
			(r[14] = t.z),
			(r[15] = e[15]),
			r
		);
	}
	static setScale(e, t, r) {
		const i = pt.getScale(e, xt),
			n = t.x / i.x,
			s = t.y / i.y,
			a = t.z / i.z;
		return (
			(r[0] = e[0] * n),
			(r[1] = e[1] * n),
			(r[2] = e[2] * n),
			(r[3] = e[3]),
			(r[4] = e[4] * s),
			(r[5] = e[5] * s),
			(r[6] = e[6] * s),
			(r[7] = e[7]),
			(r[8] = e[8] * a),
			(r[9] = e[9] * a),
			(r[10] = e[10] * a),
			(r[11] = e[11]),
			(r[12] = e[12]),
			(r[13] = e[13]),
			(r[14] = e[14]),
			(r[15] = e[15]),
			r
		);
	}
	static getScale(e, t) {
		return (
			(t.x = He.magnitude(He.fromElements(e[0], e[1], e[2], vt))),
			(t.y = He.magnitude(He.fromElements(e[4], e[5], e[6], vt))),
			(t.z = He.magnitude(He.fromElements(e[8], e[9], e[10], vt))),
			t
		);
	}
	static getMaximumScale(e) {
		return pt.getScale(e, yt), He.maximumComponent(yt);
	}
	static setRotation(e, t, r) {
		const i = pt.getScale(e, St);
		return (
			(r[0] = t[0] * i.x),
			(r[1] = t[1] * i.x),
			(r[2] = t[2] * i.x),
			(r[3] = e[3]),
			(r[4] = t[3] * i.y),
			(r[5] = t[4] * i.y),
			(r[6] = t[5] * i.y),
			(r[7] = e[7]),
			(r[8] = t[6] * i.z),
			(r[9] = t[7] * i.z),
			(r[10] = t[8] * i.z),
			(r[11] = e[11]),
			(r[12] = e[12]),
			(r[13] = e[13]),
			(r[14] = e[14]),
			(r[15] = e[15]),
			r
		);
	}
	static getRotation(e, t) {
		const r = pt.getScale(e, bt),
			i = 1 / r.x,
			n = 1 / r.y,
			s = 1 / r.z,
			a = e[0] * i,
			o = e[1] * n,
			c = e[2] * s,
			h = e[4] * i,
			l = e[5] * n,
			u = e[6] * s,
			d = e[8] * i,
			f = e[9] * n,
			m = e[10] * s,
			p = a + l + m;
		let g = 0;
		return (
			p > 0
				? ((g = 2 * Math.sqrt(p + 1)),
				  (t.w = 0.25 * g),
				  (t.x = (u - f) / g),
				  (t.y = (d - c) / g),
				  (t.z = (o - h) / g))
				: a > l && a > m
				? ((g = 2 * Math.sqrt(1 + a - l - m)),
				  (t.w = (u - f) / g),
				  (t.x = 0.25 * g),
				  (t.y = (o + h) / g),
				  (t.z = (d + c) / g))
				: l > m
				? ((g = 2 * Math.sqrt(1 + l - a - m)),
				  (t.w = (d - c) / g),
				  (t.x = (o + h) / g),
				  (t.y = 0.25 * g),
				  (t.z = (u + f) / g))
				: ((g = 2 * Math.sqrt(1 + m - a - l)),
				  (t.w = (o - h) / g),
				  (t.x = (d + c) / g),
				  (t.y = (u + f) / g),
				  (t.z = 0.25 * g)),
			t
		);
	}
	static multiply(e, t, r) {
		const i = e[0],
			n = e[1],
			s = e[2],
			a = e[3],
			o = e[4],
			c = e[5],
			h = e[6],
			l = e[7],
			u = e[8],
			d = e[9],
			f = e[10],
			m = e[11],
			p = e[12],
			g = e[13],
			x = e[14],
			v = e[15],
			y = t[0],
			S = t[1],
			b = t[2],
			w = t[3],
			T = t[4],
			E = t[5],
			M = t[6],
			_ = t[7],
			U = t[8],
			L = t[9],
			A = t[10],
			C = t[11],
			D = t[12],
			R = t[13],
			I = t[14],
			z = t[15],
			P = i * y + o * S + u * b + p * w,
			O = n * y + c * S + d * b + g * w,
			B = s * y + h * S + f * b + x * w,
			N = a * y + l * S + m * b + v * w,
			V = i * T + o * E + u * M + p * _,
			F = n * T + c * E + d * M + g * _,
			G = s * T + h * E + f * M + x * _,
			k = a * T + l * E + m * M + v * _,
			H = i * U + o * L + u * A + p * C,
			q = n * U + c * L + d * A + g * C,
			j = s * U + h * L + f * A + x * C,
			$ = a * U + l * L + m * A + v * C,
			X = i * D + o * R + u * I + p * z,
			Y = n * D + c * R + d * I + g * z,
			W = s * D + h * R + f * I + x * z,
			Z = a * D + l * R + m * I + v * z;
		return (
			(r[0] = P),
			(r[1] = O),
			(r[2] = B),
			(r[3] = N),
			(r[4] = V),
			(r[5] = F),
			(r[6] = G),
			(r[7] = k),
			(r[8] = H),
			(r[9] = q),
			(r[10] = j),
			(r[11] = $),
			(r[12] = X),
			(r[13] = Y),
			(r[14] = W),
			(r[15] = Z),
			r
		);
	}
	static add(e, t, r) {
		return (
			(r[0] = e[0] + t[0]),
			(r[1] = e[1] + t[1]),
			(r[2] = e[2] + t[2]),
			(r[3] = e[3] + t[3]),
			(r[4] = e[4] + t[4]),
			(r[5] = e[5] + t[5]),
			(r[6] = e[6] + t[6]),
			(r[7] = e[7] + t[7]),
			(r[8] = e[8] + t[8]),
			(r[9] = e[9] + t[9]),
			(r[10] = e[10] + t[10]),
			(r[11] = e[11] + t[11]),
			(r[12] = e[12] + t[12]),
			(r[13] = e[13] + t[13]),
			(r[14] = e[14] + t[14]),
			(r[15] = e[15] + t[15]),
			r
		);
	}
	static subtract(e, t, r) {
		return (
			(r[0] = e[0] - t[0]),
			(r[1] = e[1] - t[1]),
			(r[2] = e[2] - t[2]),
			(r[3] = e[3] - t[3]),
			(r[4] = e[4] - t[4]),
			(r[5] = e[5] - t[5]),
			(r[6] = e[6] - t[6]),
			(r[7] = e[7] - t[7]),
			(r[8] = e[8] - t[8]),
			(r[9] = e[9] - t[9]),
			(r[10] = e[10] - t[10]),
			(r[11] = e[11] - t[11]),
			(r[12] = e[12] - t[12]),
			(r[13] = e[13] - t[13]),
			(r[14] = e[14] - t[14]),
			(r[15] = e[15] - t[15]),
			r
		);
	}
	static multiplyTransformation(e, t, r) {
		const i = e[0],
			n = e[1],
			s = e[2],
			a = e[4],
			o = e[5],
			c = e[6],
			h = e[8],
			l = e[9],
			u = e[10],
			d = e[12],
			f = e[13],
			m = e[14],
			p = t[0],
			g = t[1],
			x = t[2],
			v = t[4],
			y = t[5],
			S = t[6],
			b = t[8],
			w = t[9],
			T = t[10],
			E = t[12],
			M = t[13],
			_ = t[14],
			U = i * p + a * g + h * x,
			L = n * p + o * g + l * x,
			A = s * p + c * g + u * x,
			C = i * v + a * y + h * S,
			D = n * v + o * y + l * S,
			R = s * v + c * y + u * S,
			I = i * b + a * w + h * T,
			z = n * b + o * w + l * T,
			P = s * b + c * w + u * T,
			O = i * E + a * M + h * _ + d,
			B = n * E + o * M + l * _ + f,
			N = s * E + c * M + u * _ + m;
		return (
			(r[0] = U),
			(r[1] = L),
			(r[2] = A),
			(r[3] = 0),
			(r[4] = C),
			(r[5] = D),
			(r[6] = R),
			(r[7] = 0),
			(r[8] = I),
			(r[9] = z),
			(r[10] = P),
			(r[11] = 0),
			(r[12] = O),
			(r[13] = B),
			(r[14] = N),
			(r[15] = 1),
			r
		);
	}
	static multiplyByMatrix3(e, t, r) {
		const i = e[0],
			n = e[1],
			s = e[2],
			a = e[4],
			o = e[5],
			c = e[6],
			h = e[8],
			l = e[9],
			u = e[10],
			d = t[0],
			f = t[1],
			m = t[2],
			p = t[3],
			g = t[4],
			x = t[5],
			v = t[6],
			y = t[7],
			S = t[8],
			b = i * d + a * f + h * m,
			w = n * d + o * f + l * m,
			T = s * d + c * f + u * m,
			E = i * p + a * g + h * x,
			M = n * p + o * g + l * x,
			_ = s * p + c * g + u * x,
			U = i * v + a * y + h * S,
			L = n * v + o * y + l * S,
			A = s * v + c * y + u * S;
		return (
			(r[0] = b),
			(r[1] = w),
			(r[2] = T),
			(r[3] = 0),
			(r[4] = E),
			(r[5] = M),
			(r[6] = _),
			(r[7] = 0),
			(r[8] = U),
			(r[9] = L),
			(r[10] = A),
			(r[11] = 0),
			(r[12] = e[12]),
			(r[13] = e[13]),
			(r[14] = e[14]),
			(r[15] = e[15]),
			r
		);
	}
	static multiplyByTranslation(e, t, r) {
		const i = t.x,
			n = t.y,
			s = t.z,
			a = i * e[0] + n * e[4] + s * e[8] + e[12],
			o = i * e[1] + n * e[5] + s * e[9] + e[13],
			c = i * e[2] + n * e[6] + s * e[10] + e[14];
		return (
			(r[0] = e[0]),
			(r[1] = e[1]),
			(r[2] = e[2]),
			(r[3] = e[3]),
			(r[4] = e[4]),
			(r[5] = e[5]),
			(r[6] = e[6]),
			(r[7] = e[7]),
			(r[8] = e[8]),
			(r[9] = e[9]),
			(r[10] = e[10]),
			(r[11] = e[11]),
			(r[12] = a),
			(r[13] = o),
			(r[14] = c),
			(r[15] = e[15]),
			r
		);
	}
	static multiplyByScale(e, t, r) {
		const i = t.x,
			n = t.y,
			s = t.z;
		return 1 === i && 1 === n && 1 === s
			? pt.clone(e, r)
			: ((r[0] = i * e[0]),
			  (r[1] = i * e[1]),
			  (r[2] = i * e[2]),
			  (r[3] = e[3]),
			  (r[4] = n * e[4]),
			  (r[5] = n * e[5]),
			  (r[6] = n * e[6]),
			  (r[7] = e[7]),
			  (r[8] = s * e[8]),
			  (r[9] = s * e[9]),
			  (r[10] = s * e[10]),
			  (r[11] = e[11]),
			  (r[12] = e[12]),
			  (r[13] = e[13]),
			  (r[14] = e[14]),
			  (r[15] = e[15]),
			  r);
	}
	static multiplyByUniformScale(e, t, r) {
		return (
			(r[0] = e[0] * t),
			(r[1] = e[1] * t),
			(r[2] = e[2] * t),
			(r[3] = e[3]),
			(r[4] = e[4] * t),
			(r[5] = e[5] * t),
			(r[6] = e[6] * t),
			(r[7] = e[7]),
			(r[8] = e[8] * t),
			(r[9] = e[9] * t),
			(r[10] = e[10] * t),
			(r[11] = e[11]),
			(r[12] = e[12]),
			(r[13] = e[13]),
			(r[14] = e[14]),
			(r[15] = e[15]),
			r
		);
	}
	static multiplyByVector(e, t, r) {
		const i = t.x,
			n = t.y,
			s = t.z,
			a = t.w,
			o = e[0] * i + e[4] * n + e[8] * s + e[12] * a,
			c = e[1] * i + e[5] * n + e[9] * s + e[13] * a,
			h = e[2] * i + e[6] * n + e[10] * s + e[14] * a,
			l = e[3] * i + e[7] * n + e[11] * s + e[15] * a;
		return (r.x = o), (r.y = c), (r.z = h), (r.w = l), r;
	}
	static multiplyByPointAsVector(e, t, r) {
		const i = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * i + e[4] * n + e[8] * s,
			o = e[1] * i + e[5] * n + e[9] * s,
			c = e[2] * i + e[6] * n + e[10] * s;
		return (r.x = a), (r.y = o), (r.z = c), r;
	}
	static multiplyByPoint(e, t, r) {
		const i = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * i + e[4] * n + e[8] * s + e[12],
			o = e[1] * i + e[5] * n + e[9] * s + e[13],
			c = e[2] * i + e[6] * n + e[10] * s + e[14];
		return (r.x = a), (r.y = o), (r.z = c), r;
	}
	static multiplyByScalar(e, t, r) {
		return (
			(r[0] = e[0] * t),
			(r[1] = e[1] * t),
			(r[2] = e[2] * t),
			(r[3] = e[3] * t),
			(r[4] = e[4] * t),
			(r[5] = e[5] * t),
			(r[6] = e[6] * t),
			(r[7] = e[7] * t),
			(r[8] = e[8] * t),
			(r[9] = e[9] * t),
			(r[10] = e[10] * t),
			(r[11] = e[11] * t),
			(r[12] = e[12] * t),
			(r[13] = e[13] * t),
			(r[14] = e[14] * t),
			(r[15] = e[15] * t),
			r
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
		const r = e[1],
			i = e[2],
			n = e[3],
			s = e[6],
			a = e[7],
			o = e[11];
		return (
			(t[0] = e[0]),
			(t[1] = e[4]),
			(t[2] = e[8]),
			(t[3] = e[12]),
			(t[4] = r),
			(t[5] = e[5]),
			(t[6] = e[9]),
			(t[7] = e[13]),
			(t[8] = i),
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
			(Re(e) &&
				Re(t) &&
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
	static equalsEpsilon(e, t, r) {
		return (
			(r = xe(r, 0)),
			e === t ||
				(Re(e) &&
					Re(t) &&
					Math.abs(e[0] - t[0]) <= r &&
					Math.abs(e[1] - t[1]) <= r &&
					Math.abs(e[2] - t[2]) <= r &&
					Math.abs(e[3] - t[3]) <= r &&
					Math.abs(e[4] - t[4]) <= r &&
					Math.abs(e[5] - t[5]) <= r &&
					Math.abs(e[6] - t[6]) <= r &&
					Math.abs(e[7] - t[7]) <= r &&
					Math.abs(e[8] - t[8]) <= r &&
					Math.abs(e[9] - t[9]) <= r &&
					Math.abs(e[10] - t[10]) <= r &&
					Math.abs(e[11] - t[11]) <= r &&
					Math.abs(e[12] - t[12]) <= r &&
					Math.abs(e[13] - t[13]) <= r &&
					Math.abs(e[14] - t[14]) <= r &&
					Math.abs(e[15] - t[15]) <= r)
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
		const r = e[0],
			i = e[4],
			n = e[8],
			s = e[12],
			a = e[1],
			o = e[5],
			c = e[9],
			h = e[13],
			l = e[2],
			u = e[6],
			d = e[10],
			f = e[14],
			m = e[3],
			p = e[7],
			g = e[11],
			x = e[15];
		let v = d * x,
			y = f * g,
			S = u * x,
			b = f * p,
			w = u * g,
			T = d * p,
			E = l * x,
			M = f * m,
			_ = l * g,
			U = d * m,
			L = l * p,
			A = u * m;
		const C = v * o + b * c + w * h - (y * o + S * c + T * h),
			D = y * a + E * c + U * h - (v * a + M * c + _ * h),
			R = S * a + M * o + L * h - (b * a + E * o + A * h),
			I = T * a + _ * o + A * c - (w * a + U * o + L * c),
			z = y * i + S * n + T * s - (v * i + b * n + w * s),
			P = v * r + M * n + _ * s - (y * r + E * n + U * s),
			O = b * r + E * i + A * s - (S * r + M * i + L * s),
			B = w * r + U * i + L * n - (T * r + _ * i + A * n);
		(v = n * h),
			(y = s * c),
			(S = i * h),
			(b = s * o),
			(w = i * c),
			(T = n * o),
			(E = r * h),
			(M = s * a),
			(_ = r * c),
			(U = n * a),
			(L = r * o),
			(A = i * a);
		const N = v * p + b * g + w * x - (y * p + S * g + T * x),
			V = y * m + E * g + U * x - (v * m + M * g + _ * x),
			F = S * m + M * p + L * x - (b * m + E * p + A * x),
			G = T * m + _ * p + A * g - (w * m + U * p + L * g),
			k = S * d + T * f + y * u - (w * f + v * u + b * d),
			H = _ * f + v * l + M * d - (E * d + U * f + y * l),
			q = E * u + A * f + b * l - (L * f + S * l + M * u),
			j = L * d + w * l + U * u - (_ * u + A * d + T * l);
		let $ = r * C + i * D + n * R + s * I;
		if (Math.abs($) < Pe.EPSILON21) {
			if (st.equalsEpsilon(pt.getMatrix3(e, wt), Tt, Pe.EPSILON7) && dt.equals(pt.getRow(e, 3, Et), Mt))
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
			($ = 1 / $),
			(t[0] = C * $),
			(t[1] = D * $),
			(t[2] = R * $),
			(t[3] = I * $),
			(t[4] = z * $),
			(t[5] = P * $),
			(t[6] = O * $),
			(t[7] = B * $),
			(t[8] = N * $),
			(t[9] = V * $),
			(t[10] = F * $),
			(t[11] = G * $),
			(t[12] = k * $),
			(t[13] = H * $),
			(t[14] = q * $),
			(t[15] = j * $),
			t
		);
	}
	static inverseTransformation(e, t) {
		const r = e[0],
			i = e[1],
			n = e[2],
			s = e[4],
			a = e[5],
			o = e[6],
			c = e[8],
			h = e[9],
			l = e[10],
			u = e[12],
			d = e[13],
			f = e[14],
			m = -r * u - i * d - n * f,
			p = -s * u - a * d - o * f,
			g = -c * u - h * d - l * f;
		return (
			(t[0] = r),
			(t[1] = s),
			(t[2] = c),
			(t[3] = 0),
			(t[4] = i),
			(t[5] = a),
			(t[6] = h),
			(t[7] = 0),
			(t[8] = n),
			(t[9] = o),
			(t[10] = l),
			(t[11] = 0),
			(t[12] = m),
			(t[13] = p),
			(t[14] = g),
			(t[15] = 1),
			t
		);
	}
	static inverseTranspose(e, t) {
		return pt.inverse(pt.transpose(e, gt), t);
	}
	static equalsArray(e, t, r) {
		return (
			e[0] === t[r] &&
			e[1] === t[r + 1] &&
			e[2] === t[r + 2] &&
			e[3] === t[r + 3] &&
			e[4] === t[r + 4] &&
			e[5] === t[r + 5] &&
			e[6] === t[r + 6] &&
			e[7] === t[r + 7] &&
			e[8] === t[r + 8] &&
			e[9] === t[r + 9] &&
			e[10] === t[r + 10] &&
			e[11] === t[r + 11] &&
			e[12] === t[r + 12] &&
			e[13] === t[r + 13] &&
			e[14] === t[r + 14] &&
			e[15] === t[r + 15]
		);
	}
}
(pt.IDENTITY = Object.freeze(new pt(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
	(pt.ZERO = Object.freeze(new pt(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)));
const gt = new pt(),
	xt = new He(),
	vt = new He(),
	yt = new He(),
	St = new He(),
	bt = new He(),
	wt = new st(),
	Tt = new st(),
	Et = new dt(),
	Mt = new dt(0, 0, 0, 1),
	_t = new He(),
	Ut = new He(),
	Lt = new He();
class At {
	constructor(e = new He(0, 0, 0), t = 0) {
		(this.center = e), (this.radius = t), (this.originCenter = this.center.clone()), (this.originRadius = t);
	}
	static fromPoints(e) {
		const t = new At();
		if (!Re(e) || 0 === e.length) return (t.center = He.clone(He.ZERO, t.center)), (t.radius = 0), t;
		const r = He.clone(e[0], Ot),
			i = He.clone(r, Ct),
			n = He.clone(r, Dt),
			s = He.clone(r, Rt),
			a = He.clone(r, It),
			o = He.clone(r, zt),
			c = He.clone(r, Pt),
			h = e.length;
		let l;
		for (l = 1; l < h; l++) {
			He.clone(e[l], r);
			const t = r.x,
				h = r.y,
				u = r.z;
			t < i.x && He.clone(r, i),
				t > a.x && He.clone(r, a),
				h < n.y && He.clone(r, n),
				h > o.y && He.clone(r, o),
				u < s.z && He.clone(r, s),
				u > c.z && He.clone(r, c);
		}
		const u = He.magnitudeSquared(He.subtract(a, i, Bt)),
			d = He.magnitudeSquared(He.subtract(o, n, Bt)),
			f = He.magnitudeSquared(He.subtract(c, s, Bt));
		let m = i,
			p = a,
			g = u;
		d > g && ((g = d), (m = n), (p = o)), f > g && ((g = f), (m = s), (p = c));
		const x = Nt;
		(x.x = 0.5 * (m.x + p.x)), (x.y = 0.5 * (m.y + p.y)), (x.z = 0.5 * (m.z + p.z));
		let v = He.magnitudeSquared(He.subtract(p, x, Bt)),
			y = Math.sqrt(v);
		const S = Vt;
		(S.x = i.x), (S.y = n.y), (S.z = s.z);
		const b = Ft;
		(b.x = a.x), (b.y = o.y), (b.z = c.z);
		const w = He.midpoint(S, b, Gt);
		let T = 0;
		for (l = 0; l < h; l++) {
			He.clone(e[l], r);
			const t = He.magnitude(He.subtract(r, w, Bt));
			t > T && (T = t);
			const i = He.magnitudeSquared(He.subtract(r, x, Bt));
			if (i > v) {
				const e = Math.sqrt(i);
				(y = 0.5 * (y + e)), (v = y * y);
				const t = e - y;
				(x.x = (y * x.x + t * r.x) / e), (x.y = (y * x.y + t * r.y) / e), (x.z = (y * x.z + t * r.z) / e);
			}
		}
		return y < T ? (He.clone(x, t.center), (t.radius = y)) : (He.clone(w, t.center), (t.radius = T)), t;
	}
	static fromVertices(e, t = He.ZERO, r = 3) {
		const i = new At();
		if (!Re(e) || 0 === e.length) return (i.center = He.clone(He.ZERO, i.center)), (i.radius = 0), i;
		(t = xe(t, He.ZERO)), (r = xe(r, 3));
		const n = Ot;
		(n.x = e[0] + t.x), (n.y = e[1] + t.y), (n.z = e[2] + t.z);
		const s = He.clone(n, Ct),
			a = He.clone(n, Dt),
			o = He.clone(n, Rt),
			c = He.clone(n, It),
			h = He.clone(n, zt),
			l = He.clone(n, Pt),
			u = e.length;
		let d;
		for (d = 0; d < u; d += r) {
			const r = e[d] + t.x,
				i = e[d + 1] + t.y,
				u = e[d + 2] + t.z;
			(n.x = r),
				(n.y = i),
				(n.z = u),
				r < s.x && He.clone(n, s),
				r > c.x && He.clone(n, c),
				i < a.y && He.clone(n, a),
				i > h.y && He.clone(n, h),
				u < o.z && He.clone(n, o),
				u > l.z && He.clone(n, l);
		}
		const f = He.magnitudeSquared(He.subtract(c, s, Bt)),
			m = He.magnitudeSquared(He.subtract(h, a, Bt)),
			p = He.magnitudeSquared(He.subtract(l, o, Bt));
		let g = s,
			x = c,
			v = f;
		m > v && ((v = m), (g = a), (x = h)), p > v && ((v = p), (g = o), (x = l));
		const y = Nt;
		(y.x = 0.5 * (g.x + x.x)), (y.y = 0.5 * (g.y + x.y)), (y.z = 0.5 * (g.z + x.z));
		let S = He.magnitudeSquared(He.subtract(x, y, Bt)),
			b = Math.sqrt(S);
		const w = Vt;
		(w.x = s.x), (w.y = a.y), (w.z = o.z);
		const T = Ft;
		(T.x = c.x), (T.y = h.y), (T.z = l.z);
		const E = He.midpoint(w, T, Gt);
		let M = 0;
		for (d = 0; d < u; d += r) {
			(n.x = e[d] + t.x), (n.y = e[d + 1] + t.y), (n.z = e[d + 2] + t.z);
			const r = He.magnitude(He.subtract(n, E, Bt));
			r > M && (M = r);
			const i = He.magnitudeSquared(He.subtract(n, y, Bt));
			if (i > S) {
				const e = Math.sqrt(i);
				(b = 0.5 * (b + e)), (S = b * b);
				const t = e - b;
				(y.x = (b * y.x + t * n.x) / e), (y.y = (b * y.y + t * n.y) / e), (y.z = (b * y.z + t * n.z) / e);
			}
		}
		return b < M ? (He.clone(y, i.center), (i.radius = b)) : (He.clone(E, i.center), (i.radius = M)), i;
	}
	intersectPlane(e) {
		const t = this.center,
			r = this.radius,
			i = e.normal,
			n = He.dot(i, t) + e.distance;
		return n < -r ? F.OUTSIDE : n < r ? F.INTERSECTING : F.INSIDE;
	}
	update(e) {
		pt.multiplyByPoint(e, this.originCenter, this.center),
			(this.radius = pt.getMaximumScale(e) * this.originRadius);
	}
	distanceToCamera(e) {
		return Math.max(0, He.distance(this.center, e.position) - this.radius);
	}
}
const Ct = new He(),
	Dt = new He(),
	Rt = new He(),
	It = new He(),
	zt = new He(),
	Pt = new He(),
	Ot = new He(),
	Bt = new He(),
	Nt = new He(),
	Vt = new He(),
	Ft = new He(),
	Gt = new He();
class kt {
	constructor(e, t) {
		(this.label = e),
			(this.indices = t),
			(this.indexFormat = t instanceof Uint32Array ? U.Uint32 : U.Uint16),
			(this.dirty = !0);
	}
	setIndices(e) {
		(this.indices = e), (this.indexFormat = e instanceof Uint32Array ? U.Uint32 : U.Uint16), (this.dirty = !0);
	}
	bind(e, t) {
		this.dirty &&
			((this.dirty = !1),
			(this.buffer = G.createIndexBuffer(
				this.label,
				e,
				this.indices instanceof Array
					? U.Uint16
						? new Uint16Array(this.indices)
						: new Uint32Array(this.indices)
					: this.indices
			))),
			t.setIndexBuffer(this.buffer.gpuBuffer, this.indexFormat);
	}
	destroy() {
		this.buffer.destroy();
	}
}
class Ht {
	constructor(e = 0) {
		(this._attributes = new Map()), (this.shaderLocation = e), (this.offset = 0), (this.interleave = !1);
	}
	get dirty() {
		let e = !1;
		return this._attributes.forEach((t) => !e && (e = t.dirty)), e;
	}
	set dirty(e) {
		this._attributes.forEach((t) => (t.dirty = e));
	}
	get values() {
		return this._attributes;
	}
	getAttribute(e) {
		return this._attributes.get(e);
	}
	setAttribute(e) {
		e.attributeType === et.attribute ? this.setNotInterleavedAttribute(e) : this.setInterleavedAttribute(e);
	}
	setNotInterleavedAttribute(e) {
		this._attributes.has(e.name) ||
			((e.shaderLocation = this.shaderLocation),
			(this.shaderLocation += 1),
			(e.offset = this.offset),
			(this.offset += e.attributeByteSize),
			this._attributes.set(e.name, e));
	}
	setInterleavedAttribute(e) {
		this._attributes.has(e.names.toString()) ||
			((e.shaderLocation = this.shaderLocation),
			(this.shaderLocation += e.names.length),
			this._attributes.set(e.names.toString(), e));
	}
	getGPUAttributesDes() {
		const e = [];
		return (
			this._attributes.forEach((t) => {
				e.push(...t.getGPUAttribute());
			}),
			e
		);
	}
	getAtrributeValues() {
		const e = [];
		let t,
			r = 0,
			i = null;
		const n = [];
		this._attributes.forEach((s) => {
			s.attributeType === et.attribute
				? (e.push(s.itemSize), n.push(s.value), (r += s.itemSize))
				: (this.interleave || (this.interleave = !0),
				  (i = i ?? s.value),
				  (t = s?.buffer),
				  t || (r = s.itemSizes.reduce((e, t) => e + t, 0)));
		});
		const s = this.interleave ? new Float32Array(i) : this.interleaveTypedArray(Float32Array, e, ...n);
		return { arrayStride: r * s.BYTES_PER_ELEMENT, typeArray: s, buffer: t };
	}
	destroy() {
		this._attributes.forEach((e) => {
			e.destroy();
		});
	}
	interleaveTypedArray(e, t, ...r) {
		const i = r.reduce((e, t) => e + t.length, 0),
			n = new e(i),
			s = t.reduce((e, t) => e + t);
		for (let e = 0; e < i; e++) {
			let i = 0;
			for (let a = 0; a < t.length; a++) for (let o = 0; o < t[a]; o++) (n[e * s + i] = r[a][t[a] * e + o]), i++;
		}
		return n;
	}
}
class qt {
	constructor(e) {
		const { label: t, index: r, locationIndex: i = 0, stepMode: n = A.Vertex, arrayStride: s } = e;
		(this.index = r || 0),
			(this.attributes = new Ht(i)),
			(this.stepMode = n),
			(this.dirty = !0),
			(this.label = t?.concat(`_${r}_VertexBuffer`)),
			(this.arrayStride = s),
			(this.defines = {}),
			(this.locationIndex = i);
	}
	getBufferDes() {
		return {
			arrayStride: this.arrayStride,
			stepMode: this.stepMode,
			attributes: this.attributes.getGPUAttributesDes()
		};
	}
	setAttribute(e) {
		e.attributeType === et.attribute
			? this.setLocationIndex(e.name)
			: e?.names.forEach((e) => this.setLocationIndex(e)),
			this.attributes.setAttribute(e),
			(this.dirty = !0);
	}
	getAttribute(e) {
		return this.attributes.getAttribute(e);
	}
	containAttribute(e) {
		return null != this.defines[e?.concat("Location")];
	}
	bind(e, t) {
		if (this.attributes.dirty) {
			this.attributes.dirty = !1;
			const { arrayStride: t, typeArray: r, buffer: i } = this.attributes.getAtrributeValues();
			void 0 === this.arrayStride && (this.arrayStride = t),
				this.buffer
					? r && this.buffer.setSubData(0, r)
					: (this.buffer = i ?? G.createVertexBuffer(this.label, e, r));
		}
		t.setVertexBuffer(this.index, this.buffer.gpuBuffer);
	}
	setLocationIndex(e) {
		!this.defines[e?.concat("Location")] &&
			e &&
			((this.defines[e?.concat("Location")] = this.locationIndex), (this.locationIndex += 1));
	}
	destroy() {
		this.buffer.destroy(), this.attributes.destroy();
	}
}
function jt(e, t, r) {
	r = xe(r, !1);
	const i = {},
		n = Re(e),
		s = Re(t);
	let a, o, c;
	if (n)
		for (a in e)
			e.hasOwnProperty(a) &&
				((o = e[a]),
				s && r && "object" == typeof o && t.hasOwnProperty(a)
					? ((c = t[a]), (i[a] = "object" == typeof c ? jt(o, c, r) : o))
					: (i[a] = o));
	if (s) for (a in t) t.hasOwnProperty(a) && !i.hasOwnProperty(a) && ((c = t[a]), (i[a] = c));
	return i;
}
class $t {
	get defines() {
		return Object.assign({}, this._defines, ...this.vertexBuffers.map((e) => e.defines));
	}
	set defines(e) {
		(this.definesDirty = !0), (this._defines = jt(e, this._defines, !1));
	}
	get currentLocationIndex() {
		return this?.vertexBuffers?.reduce((e, t) => (t.locationIndex > e ? (e = t.locationIndex) : e), 0);
	}
	get vertexBufferCount() {
		return this.vertexBuffers.length;
	}
	constructor(e) {
		(this.type = e.type || void 0),
			(this.boundingSphere = void 0),
			(this.dirty = !1),
			(this.definesDirty = !0),
			(this.defaultVertexBuffer = new qt({ label: this.type, index: 0 })),
			(this.vertexBuffers = [this.defaultVertexBuffer]),
			(this._defines = {}),
			(this.normals = []),
			(this.uvs = []),
			(this.positions = []),
			(this.indices = []),
			(this.tangents = []);
	}
	getAttribute(e) {
		return this.defaultVertexBuffer.getAttribute(e);
	}
	setAttribute(e) {
		this.defaultVertexBuffer.setAttribute(e);
	}
	setIndice(e) {
		(this.indices = e),
			this.indexBuffer || (this.indexBuffer = new kt(this.type + "IndexBuffer")),
			this.indexBuffer.setIndices(e);
	}
	update(e) {}
	computeBoundingSphere(e, t = 3) {
		this.boundingSphere = At.fromVertices(e, new He(0, 0, 0), t);
	}
	calculateTangents() {
		if (!this.normals || !this.uvs) throw "Set normal and uv before calculation.";
		const { indices: e, positions: t, normals: r, uvs: i } = this,
			n = new He(),
			s = new He(),
			a = new He(),
			o = new Be(),
			c = new Be(),
			h = new Be(),
			l = new He(),
			u = new He(),
			d = new He(),
			f = new He(),
			m = new He(),
			p = this.indices.length,
			g = e ? e.length / 3 : t.length / 3,
			x = new Array(p),
			v = new Array(p);
		this.tangents = [];
		for (let e = 0; e < p; e++) (x[e] = new dt()), (v[e] = new He());
		for (let r = 0; r < g; r++) {
			let p = 3 * r,
				g = 3 * r + 1,
				y = 3 * r + 2;
			e && ((p = e[p]), (g = e[g]), (y = e[y]));
			const S = n.set(t[p], t[p + 1], t[p + 2]),
				b = s.set(t[g], t[g + 1], t[g + 2]),
				w = a.set(t[y], t[y + 1], t[y + 2]),
				T = o.set(i[p], i[p + 1]),
				E = c.set(i[g], i[g + 1]),
				M = h.set(i[y], i[y + 1]);
			He.subtract(b, S, l), He.subtract(w, S, u);
			const _ = E.x - T.x,
				U = M.x - T.x,
				L = E.y - T.y,
				A = M.y - T.y,
				C = 1 / (_ * A - U * L);
			He.multiplyByScalar(l, A * C, d),
				He.multiplyByScalar(u, L * C, m),
				He.subtract(d, m, d),
				He.multiplyByScalar(u, _ * C, f),
				He.multiplyByScalar(l, U * C, m),
				He.subtract(f, m, f);
			let D = x[p];
			D.set(D.x + d.x, D.y + d.y, D.z + d.z, 1),
				(D = x[g]),
				D.set(D.x + d.x, D.y + d.y, D.z + d.z, 1),
				(D = x[y]),
				D.set(D.x + d.x, D.y + d.y, D.z + d.z, 1),
				v[p].add(f),
				v[g].add(f),
				v[y].add(f);
		}
		for (let e = 0; e < p; e++) {
			const t = new He(r[3 * e], r[3 * e + 1], r[3 * e + 2]),
				i = v[e],
				n = x[e];
			d.set(n.x, n.y, n.z), He.cross(d, i, m);
			const s = He.dot(m, t) > 0 ? 1 : -1;
			He.multiplyByScalar(t, He.dot(d, t), m),
				He.subtract(d, m, d),
				He.normalize(d, d),
				n.set(d.x, d.y, d.z, s),
				this.tangents.push(d.x, d.y, d.z, s);
		}
	}
	destroy() {
		this?.indexBuffer.destroy(),
			this.defaultVertexBuffer.destroy(),
			(this.normals = null),
			(this.uvs = null),
			(this.positions = null),
			(this.indices = null),
			(this.tangents = null),
			(this.boundingSphere = void 0);
	}
}
class Xt extends $t {
	constructor(e = 10, t = 10) {
		super({ type: "planeGeometry" }),
			(this.width = e),
			(this.height = t),
			(this.defines = { HAS_NORMAL: !0 }),
			this.init();
	}
	init() {
		const { indices: e, normals: t, uvs: r, vertices: i } = this.createGrid(this.width, this.height);
		this.computeBoundingSphere(i),
			this.setAttribute(new Ke("position", i, 3)),
			this.setAttribute(new Ke("normal", t, 3)),
			this.setAttribute(new Ke("uv", r, 2)),
			this.setIndice(e),
			(this.count = e.length);
	}
	createGrid(e = 1, t = 1, r = 1, i = 1) {
		const n = e / 2,
			s = t / 2,
			a = Math.floor(r),
			o = Math.floor(i),
			c = a + 1,
			h = o + 1,
			l = e / a,
			u = t / o,
			d = [],
			f = [],
			m = [],
			p = [];
		for (let e = 0; e < h; e++) {
			const t = e * u - s;
			for (let r = 0; r < c; r++) {
				const i = r * l - n;
				f.push(i, -t, 0), m.push(0, 0, 1), p.push(r / a), p.push(1 - e / o);
			}
		}
		for (let e = 0; e < o; e++)
			for (let t = 0; t < a; t++) {
				const r = t + c * e,
					i = t + c * (e + 1),
					n = t + 1 + c * (e + 1),
					s = t + 1 + c * e;
				d.push(r, i, s), d.push(i, n, s);
			}
		return { indices: d, normals: m, uvs: p, vertices: f };
	}
}
class Yt {
	constructor(e = 0, t = 0, r = 0, i = 1) {
		(this.x = e), (this.y = t), (this.z = r), (this.w = i);
	}
	set(e, t, r, i) {
		(this.x = e), (this.y = t), (this.z = r), (this.w = i);
	}
	normalize() {
		const e = 1 / Yt.magnitude(this),
			t = this.x * e,
			r = this.y * e,
			i = this.z * e,
			n = this.w * e;
		return (this.x = t), (this.y = r), (this.z = i), (this.w = n), this;
	}
	invert() {
		return (this.x *= -1), (this.y *= -1), (this.z *= -1), this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	setFromUnitVectors(e, t) {
		let r = He.dot(e, t) + 1;
		return (
			r < Number.EPSILON
				? ((r = 0),
				  Math.abs(e.x) > Math.abs(e.z)
						? ((this.x = -e.y), (this.y = e.x), (this.z = 0), (this.w = r))
						: ((this.x = 0), (this.y = -e.z), (this.z = e.y), (this.w = r)))
				: ((this.x = e.y * t.z - e.z * t.y),
				  (this.y = e.z * t.x - e.x * t.z),
				  (this.z = e.x * t.y - e.y * t.x),
				  (this.w = r)),
			this.normalize()
		);
	}
	setFromRotationMatrix(e) {
		const t = e,
			r = t[0],
			i = t[4],
			n = t[8],
			s = t[1],
			a = t[5],
			o = t[9],
			c = t[2],
			h = t[6],
			l = t[10],
			u = r + a + l;
		if (u > 0) {
			const e = 0.5 / Math.sqrt(u + 1);
			(this.w = 0.25 / e), (this.x = (h - o) * e), (this.y = (n - c) * e), (this.z = (s - i) * e);
		} else if (r > a && r > l) {
			const e = 2 * Math.sqrt(1 + r - a - l);
			(this.w = (h - o) / e), (this.x = 0.25 * e), (this.y = (i + s) / e), (this.z = (n + c) / e);
		} else if (a > l) {
			const e = 2 * Math.sqrt(1 + a - r - l);
			(this.w = (n - c) / e), (this.x = (i + s) / e), (this.y = 0.25 * e), (this.z = (o + h) / e);
		} else {
			const e = 2 * Math.sqrt(1 + l - r - a);
			(this.w = (s - i) / e), (this.x = (n + c) / e), (this.y = (o + h) / e), (this.z = 0.25 * e);
		}
		return this;
	}
	clone() {
		return Yt.clone(this, this);
	}
	equals(e) {
		return Yt.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return Yt.equalsEpsilon(this, e, t);
	}
	toArray() {
		const { x: e, y: t, z: r, w: i } = this;
		return [e, t, r, i];
	}
	static fromAxisAngle(e, t) {
		const r = t / 2,
			i = Math.sin(r);
		Wt = He.normalize(e, Wt);
		const n = Wt.x * i,
			s = Wt.y * i,
			a = Wt.z * i,
			o = Math.cos(r),
			c = new Yt(n, s, a, o);
		return (c.x = n), (c.y = s), (c.z = a), (c.w = o), c;
	}
	static clone(e, t) {
		if (Re(e)) return Re(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t) : new Yt(e.x, e.y, e.z, e.w);
	}
	static conjugate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
	}
	static magnitude(e) {
		return Math.sqrt(Yt.magnitudeSquared(e));
	}
	static normalize(e, t) {
		const r = 1 / Yt.magnitude(e),
			i = e.x * r,
			n = e.y * r,
			s = e.z * r,
			a = e.w * r;
		return (t.x = i), (t.y = n), (t.z = s), (t.w = a), t;
	}
	static inverse(e, t) {
		const r = Yt.magnitudeSquared(e);
		return (t = Yt.conjugate(e, t)), Yt.multiplyByScalar(t, 1 / r, t);
	}
	static add(e, t, r) {
		return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), (r.w = e.w + t.w), r;
	}
	static subtract(e, t, r) {
		return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), (r.w = e.w - t.w), r;
	}
	static negate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
	}
	static dot(e, t) {
		return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
	}
	static multiply(e, t, r) {
		const i = e.x,
			n = e.y,
			s = e.z,
			a = e.w,
			o = t.x,
			c = t.y,
			h = t.z,
			l = t.w,
			u = a * o + i * l + n * h - s * c,
			d = a * c - i * h + n * l + s * o,
			f = a * h + i * c - n * o + s * l,
			m = a * l - i * o - n * c - s * h;
		return (r.x = u), (r.y = d), (r.z = f), (r.w = m), r;
	}
	static multiplyByScalar(e, t, r) {
		return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), (r.w = e.w * t), r;
	}
	static divideByScalar(e, t, r) {
		return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), (r.w = e.w / t), r;
	}
	static computeAxis(e, t) {
		const r = e.w;
		if (Math.abs(r - 1) < Pe.EPSILON6) return (t.x = t.y = t.z = 0), t;
		const i = 1 / Math.sqrt(1 - r * r);
		return (t.x = e.x * i), (t.y = e.y * i), (t.z = e.z * i), t;
	}
	static computeAngle(e) {
		return Math.abs(e.w - 1) < Pe.EPSILON6 ? 0 : 2 * Math.acos(e.w);
	}
	static lerp(e, t, r, i) {
		return (Zt = Yt.multiplyByScalar(t, r, Zt)), (i = Yt.multiplyByScalar(e, 1 - r, i)), Yt.add(Zt, i, i);
	}
	static slerp(e, t, r, i) {
		let n = Yt.dot(e, t),
			s = t;
		if ((n < 0 && ((n = -n), (s = Kt = Yt.negate(t, Kt))), 1 - n < Pe.EPSILON6)) return Yt.lerp(e, s, r, i);
		const a = Math.acos(n);
		return (
			(Qt = Yt.multiplyByScalar(e, Math.sin((1 - r) * a), Qt)),
			(Jt = Yt.multiplyByScalar(s, Math.sin(r * a), Jt)),
			(i = Yt.add(Qt, Jt, i)),
			Yt.multiplyByScalar(i, 1 / Math.sin(a), i)
		);
	}
	static squad(e, t, r, i, n, s) {
		const a = Yt.slerp(e, t, n, er),
			o = Yt.slerp(r, i, n, tr);
		return Yt.slerp(a, o, 2 * n * (1 - n), s);
	}
	static equals(e, t) {
		return e === t || (Re(e) && Re(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w);
	}
	static equalsEpsilon(e, t, r = 0) {
		return (
			(r = xe(r, 0)),
			e === t ||
				(Re(e) &&
					Re(t) &&
					Math.abs(e.x - t.x) <= r &&
					Math.abs(e.y - t.y) <= r &&
					Math.abs(e.z - t.z) <= r &&
					Math.abs(e.w - t.w) <= r)
		);
	}
	static exp(e, t) {
		const r = He.magnitude(e);
		let i = 0;
		return (
			0 !== r && (i = Math.sin(r) / r), (t.x = e.x * i), (t.y = e.y * i), (t.z = e.z * i), (t.w = Math.cos(r)), t
		);
	}
}
(Yt.ZERO = Object.freeze(new Yt(0, 0, 0, 0))), (Yt.IDENTITY = Object.freeze(new Yt(0, 0, 0, 1)));
let Wt = new He(),
	Zt = new Yt(),
	Kt = new Yt(),
	Qt = new Yt(),
	Jt = new Yt();
const er = new Yt(),
	tr = new Yt();
class rr {
	constructor() {
		(this._position = new He()),
			(this._scale = new He(1, 1, 1)),
			(this._quaternion = new Yt()),
			(this.modelMatrix = pt.clone(pt.IDENTITY, new pt())),
			(this._normalMatrix = pt.clone(pt.IDENTITY, new pt())),
			(this.up = new He(0, 1, 0)),
			(this._target = new He(0, 0, 0));
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
	updateNormalMatrix() {
		pt.inverse(this.modelMatrix, this._normalMatrix), pt.transpose(this._normalMatrix, this._normalMatrix);
	}
	updateMatrix(e) {
		this.modelMatrix.compose(this.position, this.quaternion, this.scale),
			e && pt.multiply(e, this.modelMatrix, this.modelMatrix),
			this.updateNormalMatrix();
	}
	lookAt(e, t, r) {
		this._target.set(e, t, r),
			this.type == Z.Camera || this.type == Z.Light
				? ar.lookAt(this.position, this._target, this.up)
				: ar.lookAt(this._target, this.position, this.up),
			this.quaternion.setFromRotationMatrix(ar);
	}
	rotateOnAxis(e, t) {
		const r = Yt.fromAxisAngle(e, t);
		Yt.multiply(this.quaternion, r, this.quaternion);
	}
	rotateX(e) {
		return this.rotateOnAxis(ir, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(nr, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(sr, e);
	}
}
const ir = new He(1, 0, 0),
	nr = new He(0, 1, 0),
	sr = new He(0, 0, 1),
	ar = new pt();
class or extends rr {
	constructor(e, t) {
		super(),
			(this.type = Z.Light),
			(this._color = He.multiplyByScalar(e, t, new He())),
			(this._intensity = t),
			(this._position = new He(0, 1, 0)),
			(this._target = new He()),
			(this.positionDirty = !0),
			(this.targetDirty = !0),
			(this.colorDirty = !0),
			(this.shadowDirty = !0),
			(this.intensityDirty = !0),
			(this._shadow = null);
	}
	get position() {
		return this._position;
	}
	set position(e) {
		(this.positionDirty = !0), (this._position = e);
	}
	get target() {
		return this._target;
	}
	set target(e) {
		(this.targetDirty = !0), (this._target = e);
	}
	get color() {
		return this._color;
	}
	set color(e) {
		(this.colorDirty = !0), (this._color = e);
	}
	set intensity(e) {
		(this.color = He.multiplyByScalar(this.color, e, new He())), (this.intensityDirty = !0), (this._intensity = e);
	}
	get intensity() {
		return this._intensity;
	}
	get shadow() {
		return this._shadow;
	}
	set shadow(e) {
		(this.shadowDirty = !0), (this._shadow = e);
	}
}
class cr {
	constructor(e, t) {
		(this.normal = He.clone(e)), (this.distance = t);
	}
	normalize() {
		const e = 1 / this.normal.length();
		return (this.normal = He.multiplyByScalar(this.normal, e, this.normal)), (this.distance *= e), this;
	}
	static fromPointNormal(e, t, r) {
		if (!Pe.equalsEpsilon(He.magnitude(t), 1, Pe.EPSILON6)) throw new Error("normal must be normalized.");
		const i = -He.dot(t, e);
		return Re(r) ? (He.clone(t, r.normal), (r.distance = i), r) : new cr(t, i);
	}
	static fromVector4(e, t) {
		const r = He.fromVector4(e, hr),
			i = e.w;
		if (!Pe.equalsEpsilon(He.magnitude(r), 1, Pe.EPSILON6)) throw new Error("normal must be normalized.");
		return Re(t) ? (He.clone(r, t.normal), (t.distance = i), t) : new cr(r, i);
	}
	static getPointDistance(e, t) {
		return He.dot(e.normal, t) + e.distance;
	}
	static projectPointOntoPlane(e, t, r) {
		Re(r) || (r = new He());
		const i = cr.getPointDistance(e, t),
			n = He.multiplyByScalar(e.normal, i, lr);
		return He.subtract(t, n, r);
	}
	static transform(e, t, r) {
		const i = e.normal,
			n = e.distance,
			s = pt.inverseTranspose(t, ur);
		let a = dt.fromElements(i.x, i.y, i.z, n, dr);
		a = pt.multiplyByVector(s, a, a);
		const o = He.fromVector4(a, fr);
		return (a = dt.divideByScalar(a, He.magnitude(o), a)), cr.fromVector4(a, r);
	}
	static clone(e, t) {
		return Re(t) ? (He.clone(e.normal, t.normal), (t.distance = e.distance), t) : new cr(e.normal, e.distance);
	}
	static equals(e, t) {
		return e.distance === t.distance && He.equals(e.normal, t.normal);
	}
}
(cr.ORIGIN_XY_PLANE = Object.freeze(new cr(He.UNIT_Z, 0))),
	(cr.ORIGIN_YZ_PLANE = Object.freeze(new cr(He.UNIT_X, 0))),
	(cr.ORIGIN_ZX_PLANE = Object.freeze(new cr(He.UNIT_Y, 0)));
const hr = new He(),
	lr = new He(),
	ur = new pt(),
	dr = new dt(),
	fr = new He();
class mr {
	constructor(e) {
		this.planes = xe(e, [
			new cr(He.UNIT_Z, 0),
			new cr(He.UNIT_Z, 0),
			new cr(He.UNIT_Z, 0),
			new cr(He.UNIT_Z, 0),
			new cr(He.UNIT_Z, 0),
			new cr(He.UNIT_Z, 0)
		]);
	}
	static fromBoundingSphere(e, t) {
		if (!Re(e)) throw new Error("boundingSphere is required.");
		Re(t) || (t = new mr());
		const r = pr.length,
			i = t.planes;
		i.length = 2 * r;
		const n = e.center,
			s = e.radius;
		let a = 0;
		for (let e = 0; e < r; ++e) {
			const t = pr[e];
			let r = i[a],
				o = i[a + 1];
			Re(r) || (r = i[a] = new dt()),
				Re(o) || (o = i[a + 1] = new dt()),
				He.multiplyByScalar(t, -s, gr),
				He.add(n, gr, gr),
				(r.x = t.x),
				(r.y = t.y),
				(r.z = t.z),
				(r.w = -He.dot(t, gr)),
				He.multiplyByScalar(t, s, gr),
				He.add(n, gr, gr),
				(o.x = -t.x),
				(o.y = -t.y),
				(o.z = -t.z),
				(o.w = -He.dot(He.negate(t, xr), gr)),
				(a += 2);
		}
		return t;
	}
	computeVisibility(e) {
		if (!Re(e)) throw new Error("boundingVolume is required.");
		const t = this.planes;
		let r = !1;
		for (let i = 0, n = t.length; i < n; ++i) {
			const n = e.intersectPlane(t[i]);
			if (n === F.OUTSIDE) return F.OUTSIDE;
			n === F.INTERSECTING && (r = !0);
		}
		return r ? F.INTERSECTING : F.INSIDE;
	}
}
(mr.MASK_OUTSIDE = 4294967295), (mr.MASK_INSIDE = 0), (mr.MASK_INDETERMINATE = 2147483647);
const pr = [new He(), new He(), new He()];
He.clone(He.UNIT_X, pr[0]), He.clone(He.UNIT_Y, pr[1]), He.clone(He.UNIT_Z, pr[2]);
const gr = new He(),
	xr = new He(),
	vr = new Map();
class yr {
	constructor(e, t, r = [], i = 0) {
		(this.entries = r),
			(this.index = i || 0),
			(this.label = t),
			(this.gpuBindGroupLayout = e.createBindGroupLayout({
				label: t,
				entries: r.map(
					({ visibility: e, buffer: t, sampler: r, texture: i, storageTexture: n, binding: s }) => ({
						binding: s,
						visibility: e,
						buffer: t,
						sampler: r,
						texture: i,
						storageTexture: n
					})
				)
			}));
	}
	static getBindGroupLayoutFromCache(e, t, r, i) {
		if (vr.has(t)) return vr.get(t);
		{
			const n = new yr(e, t, r, i);
			return vr.set(t, n), n;
		}
	}
	static removeBindGroupLayoutFromCache(e) {
		vr.delete(e);
	}
}
class Sr {
	constructor(e) {
		(this.binding = e.binding),
			(this.visibility = e.visibility),
			(this.buffer = e.buffer),
			(this.sampler = e.sampler),
			(this.texture = e.texture),
			(this.storageTexture = e.storageTexture),
			(this.externalTexture = e.externalTexture);
	}
	getGPULayoutEntity() {
		return {
			binding: this.binding,
			visibility: this.visibility,
			buffer: this.buffer,
			sampler: this.sampler,
			texture: this.texture,
			externalTexture: this.externalTexture,
			storageTexture: this.storageTexture
		};
	}
}
class br {
	constructor(e, t, r, i) {
		(this.label = e),
			(this.currentBinding = 0),
			(this.defineDirty = !0),
			(this.defines = {}),
			(this._uniforms = new Map()),
			(this.groupIndex = xe(i, 0)),
			(this.layoutIndex = xe(r, 0));
	}
	getUniformBuffer(e) {
		return this._uniforms.get(e);
	}
	getTexture(e) {
		return this._uniforms.get(e);
	}
	getSampler(e) {
		return this._uniforms.get(e);
	}
	setUniformBuffer(e, t, r) {
		this._uniforms.get(e) ||
			((t.binding = this.currentBinding),
			this.setDefine(e.concat("Binding"), r ?? this.currentBinding),
			(this.currentBinding += 1),
			this._uniforms.set(e, t));
	}
	setTexture(e, t, r, i, n, s) {
		if (this._uniforms.get(e)) return;
		const a = new ri(e, r ?? this.currentBinding, t, i, n, s);
		this.setDefine(e.concat("Binding"), r ?? this.currentBinding),
			(this.currentBinding += 1),
			this._uniforms.set(e, a);
	}
	setSampler(e, t, r, i) {
		if (this._uniforms.get(e)) return;
		const n = new ii(e, r ?? this.currentBinding, t, i);
		this.setDefine(e.concat("Binding"), r ?? this.currentBinding),
			(this.currentBinding += 1),
			this._uniforms.set(e, n);
	}
	setDefine(e, t) {
		if (void 0 === this.defines[e]) (this.defineDirty = !0), (this.defines[e] = t);
		else {
			if (this.defines[e] === t) return;
			(this.defineDirty = !0), (this.defines[e] = t);
		}
	}
	setUniformBufferValue(e) {
		this._uniforms.get(e.name).setUniformsFromUniformBuffer(e);
	}
	bind(e, t) {
		this.uploadUniform(e),
			!this.groupLayout &&
				this._uniforms.size > 0 &&
				(this.groupLayout = this.createBindGroupLayout(e, this.label, this.layoutIndex)),
			!this.bindGroup &&
				this._uniforms.size > 0 &&
				(this.bindGroup = this.createBindGroup(e, this.label, this.groupIndex)),
			this?.bindGroup?.bind?.(t);
	}
	destroy() {
		this._uniforms.forEach((e) => {
			e.destroy && e?.destroy();
		}),
			(this.label = void 0),
			(this.currentBinding = 1),
			(this.defineDirty = !0),
			(this.defines = void 0),
			this._uniforms.clear(),
			yr.removeBindGroupLayoutFromCache(this.groupLayout),
			(this.bindGroup = void 0);
	}
	createBindGroup(e, t, r) {
		const { entities: i, dynamic: n, alignedSize: s, maxOffset: a } = this.createBindGroupEntity();
		return new rt({
			label: t,
			entires: i,
			device: e,
			layout: this.groupLayout,
			index: r || 0,
			dynamic: n,
			alignedSize: s,
			maxOffset: a
		});
	}
	createBindGroupLayout(e, t, r) {
		const i = this.createBindGroupLayoutEntry();
		return yr.getBindGroupLayoutFromCache(e, t + "-" + i.uid, i.layouts, r || 0);
	}
	uploadUniform(e) {
		this._uniforms.forEach((t) => {
			t.bind(e);
		});
	}
	createBindGroupLayoutEntry() {
		let e = "";
		const t = new Map();
		return (
			this._uniforms.forEach((r) => {
				t.has(r.name) ||
					((e = "" === e ? e.concat(r.name) : e.concat(", ").concat(r.name)),
					t.set(r.name, this.createOneLayoutEntry(r)));
			}),
			(e = `uniforms[${e}]`),
			{ uid: e, layouts: [...t.values()] }
		);
	}
	createBindGroupEntity() {
		const e = new Map();
		let t = !1,
			r = 0,
			i = 0;
		return (
			this._uniforms.forEach((n) => {
				e.has(n.name) ||
					(n?.hasDynamicOffset && ((t = !0), (i = n.maxOffset), (r = 256 * Math.ceil(n.uniformsSize / 1024))),
					e.set(n.name, this.creayeOneGroupEntity(n)));
			}),
			{ entities: [...e.values()], dynamic: t, alignedSize: r, maxOffset: i }
		);
	}
	createOneLayoutEntry(e) {
		let t;
		return (
			e.isUniformBuffer
				? (t = new Sr({ binding: e.binding, buffer: e.layoutType, visibility: e.visibility }))
				: e.isTexture
				? (t = new Sr({
						binding: e.binding,
						visibility: e.visibility,
						texture: "texture" == e.type ? e.layoutType : void 0,
						storageTexture: "storageTexture" == e.type ? e.storageTextureLayoutType : void 0
				  }))
				: e.isSampler && (t = new Sr({ binding: e.binding, visibility: e.visibility, sampler: e.layoutType })),
			t
		);
	}
	creayeOneGroupEntity(e) {
		let t;
		return (
			e.isUniformBuffer
				? (t = new it({
						binding: e.binding,
						resource: { buffer: e.buffer.gpuBuffer, offset: e.offset, size: e.bufferSize }
				  }))
				: e.isTexture
				? (t = new it({ binding: e.binding, resource: e?.textureView ?? e.texture.textureView }))
				: e.isSampler && (t = new it({ binding: e.binding, resource: e.sampler.gpuSampler })),
			t
		);
	}
}
class wr extends rr {
	constructor() {
		super(),
			(this._viewMatrix = void 0),
			(this.type = Z.Camera),
			(this.cullingVolume = new mr()),
			(this._viewMatrix = new pt()),
			(this._vpMatrix = new pt()),
			(this.projectMatrixDirty = !0),
			this.createShaderData();
	}
	set near(e) {
		(this._near = e), (this.projectMatrixDirty = !0);
	}
	get near() {
		return this._near;
	}
	set far(e) {
		(this._far = e), (this.projectMatrixDirty = !0);
	}
	get far() {
		return this._far;
	}
	get viewMatrix() {
		return this.updateMatrix(), pt.inverse(this.modelMatrix, this._viewMatrix), this._viewMatrix;
	}
	get projectionMatrix() {
		return this.updateProjectionMatrix(), this._projectionMatrix;
	}
	get vpMatrix() {
		return pt.multiply(this.projectionMatrix, this.viewMatrix, this._vpMatrix), this._vpMatrix;
	}
	get inverseViewMatrix() {
		return this.updateMatrix(), this.modelMatrix;
	}
	updateProjectionMatrix() {}
	getCullingVolume() {
		const e = this.viewMatrix.clone(new pt()),
			t = pt.multiply(this.projectionMatrix, e, new pt()),
			r = this.cullingVolume.planes,
			i = t,
			n = i[0],
			s = i[1],
			a = i[2],
			o = i[3],
			c = i[4],
			h = i[5],
			l = i[6],
			u = i[7],
			d = i[8],
			f = i[9],
			m = i[10],
			p = i[11],
			g = i[12],
			x = i[13],
			v = i[14],
			y = i[15];
		return (
			(r[0] = new cr(new He(o - n, u - c, p - d), y - g)),
			r[0].normalize(),
			(r[1] = new cr(new He(o + n, u + c, p + d), y + g)),
			r[1].normalize(),
			(r[2] = new cr(new He(o + s, u + h, p + f), y + x)),
			r[2].normalize(),
			(r[3] = new cr(new He(o - s, u - h, p - f), y - x)),
			r[3].normalize(),
			(r[4] = new cr(new He(o - a, u - l, p - m), y - v)),
			r[4].normalize(),
			(r[5] = new cr(new He(o + a, u + l, p + m), y + v)),
			r[5].normalize(),
			this.cullingVolume
		);
	}
	createShaderData() {
		this.shaderData = new br("camera", 0, 1, 1);
		const e = new fi({ label: "camera" });
		e.setUniform("projectionMatrix", () => this.projectionMatrix, Q.Mat4),
			e.setUniform("viewMatrix", () => this.viewMatrix, Q.Mat4),
			e.setUniform("inverseViewMatrix", () => this.inverseViewMatrix, Q.Mat4),
			e.setUniform("position", () => this.position, Q.FloatVec3),
			this.shaderData.setUniformBuffer("camera", e);
	}
}
class Tr extends wr {
	constructor(e = -1, t = 1, r = 1, i = -1, n = 0.1, s = 2e3) {
		super(),
			(this.near = n),
			(this.far = s),
			(this.left = e),
			(this.top = r),
			(this.bottom = i),
			(this.right = t),
			(this.isOrthographicCamera = !0);
	}
	set left(e) {
		(this._left = e), (this.projectMatrixDirty = !0);
	}
	get left() {
		return this._left;
	}
	set right(e) {
		(this._right = e), (this.projectMatrixDirty = !0);
	}
	get right() {
		return this._right;
	}
	set top(e) {
		(this._top = e), (this.projectMatrixDirty = !0);
	}
	get top() {
		return this._top;
	}
	set bottom(e) {
		(this._bottom = e), (this.projectMatrixDirty = !0);
	}
	get bottom() {
		return this._bottom;
	}
	updateCameraParms() {
		const e = (this.right - this.left) / 2,
			t = (this.top - this.bottom) / 2,
			r = (this.right + this.left) / 2,
			i = (this.top + this.bottom) / 2;
		return { left: r - e, right: r + e, top: i + t, bottom: i - t };
	}
	updateProjectionMatrix() {
		if (this.projectMatrixDirty) {
			const { left: e, right: t, top: r, bottom: i } = this.updateCameraParms();
			(this._projectionMatrix = pt.makeOrthographic(e, t, r, i, this.near, this.far)),
				(this.projectMatrixDirty = !1);
		}
	}
}
class Er {
	constructor(e, t) {
		(this._shadowMapSize = e),
			(this._camera = Array.isArray(t) ? void 0 : t),
			(this._cameraArray = Array.isArray(t) ? t : void 0),
			(this.viewPortDirty = !0),
			(this.vpMatrixDirty = !0);
	}
	get camera() {
		return this._camera;
	}
	get cameraArray() {
		return this._cameraArray;
	}
	get shadowMapSize() {
		return this._shadowMapSize;
	}
	get viewports() {
		return this._viewports;
	}
	getShadowMapTexture() {
		return this._shadowMap;
	}
	init() {
		this._initShadowMapTexture();
	}
	_initShadowMapTexture() {
		this._createShadowMapTexture();
	}
	_createShadowMapTexture() {
		this._shadowMap = new Ae({
			label: `${this.type}Map`,
			size: { width: this._shadowMapSize.x, height: this._shadowMapSize.y, depth: 1 },
			fixedSize: !0,
			sampleType: g.Depth,
			format: h.Depth24Plus,
			usage: a.RenderAttachment | a.TextureBinding | a.CopySrc
		});
	}
	update(e) {}
}
class Mr {
	constructor() {
		this.vertices = {
			near: [new He(), new He(), new He(), new He()],
			far: [new He(), new He(), new He(), new He()]
		};
	}
	setFromProjectionMatrix(e, t) {
		const r = new pt(),
			i = 0 === e[11];
		return (
			pt.inverse(e, r),
			this.vertices.near[0].set(1, 1, -1),
			this.vertices.near[1].set(1, -1, -1),
			this.vertices.near[2].set(-1, -1, -1),
			this.vertices.near[3].set(-1, 1, -1),
			this.vertices.near.forEach(function (e) {
				e.applyMatrix4(r);
			}),
			this.vertices.far[0].set(1, 1, 1),
			this.vertices.far[1].set(1, -1, 1),
			this.vertices.far[2].set(-1, -1, 1),
			this.vertices.far[3].set(-1, 1, 1),
			this.vertices.far.forEach(function (e) {
				e.applyMatrix4(r);
				const n = Math.abs(e.z);
				i ? (e.z *= Math.min(t / n, 1)) : e.multiplyByScalar(Math.min(t / n, 1));
			}),
			this.vertices
		);
	}
	getBreakVSArray(e, t) {
		t.length = 0;
		for (let r = 0; r < e.length; r++) t[r] = -1 * e[r] * this.vertices.far[0].z;
	}
	splitedByBreaks(e, t) {
		for (; e.length > t.length; ) t.push(new Mr());
		t.length = e.length;
		for (let r = 0; r < e.length; r++) {
			const i = t[r];
			if (0 === r) for (let e = 0; e < 4; e++) i.vertices.near[e].copy(this.vertices.near[e]);
			else
				for (let t = 0; t < 4; t++)
					i.vertices.near[t].set(0, 0, 0), i.vertices.near[t].lerp(this.vertices.far[t], e[r - 1]);
			if (r === e.length - 1) for (let e = 0; e < 4; e++) i.vertices.far[e].copy(this.vertices.far[e]);
			else
				for (let t = 0; t < 4; t++)
					i.vertices.far[t].set(0, 0, 0), i.vertices.far[t].lerp(this.vertices.far[t], e[r]);
		}
	}
	updateBoundingSphere() {
		this.boundingSphere = At.fromPoints([...this.vertices.near, ...this.vertices.far]);
	}
}
const _r = { shadowMapSize: new Be(1024, 1024), cascadeNumber: 4, cascadeMode: "practical" };
class Ur extends Er {
	constructor(e) {
		const { shadowMapSize: t, vpMatrixArray: r, lightInstance: i, cascadeMode: n } = e;
		super(t, new Tr(-50, 50, 50, -50, 0, 100)),
			(this.isCascadedShadow = !0),
			(this._cascadeNumber = r.length),
			(this.vpMatrixArray = r),
			(this.cascadeMode = n),
			(this._lightInstance = i),
			(this.sceneActiveCameraFrustum = new Mr()),
			(this.cascadeSubFrustumArray = []),
			(this.breaks = []),
			(this.breakVSArray = []),
			(this._viewports = []),
			(this.viewportSize = t),
			(this.currentViewportIndex = 0);
	}
	set cascadeNumber(e) {
		(this._cascadeNumber = e), this.updateSetting(), (this._lightInstance.shadowDirty = !0);
	}
	get cascadeNumber() {
		return this._cascadeNumber;
	}
	initSetting(e) {
		(this._sceneAvtiveCamera = e._getSceneActiveCamera()), this.updateSetting();
	}
	updateSetting() {
		this.getBreaks(), this.updateViewports();
	}
	updateViewports() {
		(this._viewports.length = 0), (this.viewPortDirty = !0);
		for (let e = 0; e < this.breaks.length; e++) this._viewports.push(new dt(e, 0, 1 / this.breaks.length, 1));
		this.updateShadowMapTextureSize();
	}
	updateShadowMapTextureSize() {
		this.getShadowMapTexture().setSize(
			this._viewports.length * this.viewportSize.x,
			this.viewportSize.y,
			void 0,
			!0
		);
	}
	updateCameraMatrixBySubFrustum() {
		const e = this.cascadeSubFrustumArray,
			t = this.camera,
			r = e[this.currentViewportIndex];
		r.updateBoundingSphere();
		const i = r.boundingSphere.center,
			n = r.boundingSphere.radius,
			s = this.shadowMapSize.x / 2,
			a = (n * s) / (s - Ur.atlasBorderSize);
		if (t instanceof Tr) {
			const e = new He();
			He.multiplyByScalar(this._lightInstance.directional, n + t.near, e),
				He.subtract(i, e, e),
				t.position.copy(e),
				t.lookAt(i.x, i.y, i.z),
				(t.left = -a),
				(t.right = a),
				(t.top = a),
				(t.bottom = -a),
				(t.far = 2 * a + t.near),
				(t.near = 0);
		}
		pt.clone(t.vpMatrix, this.vpMatrixArray[this.currentViewportIndex]);
	}
	updateCascadeFrustumArray() {
		const e = this._sceneAvtiveCamera;
		e.updateProjectionMatrix(),
			this.sceneActiveCameraFrustum.setFromProjectionMatrix(e.projectionMatrix, 1e4),
			this.sceneActiveCameraFrustum.splitedByBreaks(this.breaks, this.cascadeSubFrustumArray),
			this.sceneActiveCameraFrustum.getBreakVSArray(this.breaks, this.breakVSArray);
	}
	getBreaks() {
		const e = this._sceneAvtiveCamera,
			t = Math.min(e.far, 1e4);
		switch (((this.breaks.length = 0), this.cascadeMode)) {
			case "uniform":
				r(this.cascadeNumber, e.near, t, this.breaks);
				break;
			case "logarithmic":
				i(this.cascadeNumber, e.near, t, this.breaks);
				break;
			case "practical":
				!(function (e, t, n, s, a) {
					const o = [],
						c = [];
					i(e, t, n, c), r(e, t, n, o);
					for (let t = 1; t < e; t++) a.push(Pe.lerp(o[t - 1], c[t - 1], s));
					a.push(1);
				})(this.cascadeNumber, e.near, t, 0.5, this.breaks);
		}
		function r(e, t, r, i) {
			for (let n = 1; n < e; n++) i.push((t + ((r - t) * n) / e) / r);
			i.push(1);
		}
		function i(e, t, r, i) {
			for (let n = 1; n < e; n++) i.push((t * (r / t) ** (n / e)) / r);
			i.push(1);
		}
	}
}
Ur.atlasBorderSize = 0;
class Lr extends Ur {
	constructor(e) {
		const t = Object.assign({}, _r, e);
		super(Lr._getCascadedShadowOptions(t.cascadeNumber, t.shadowMapSize, t.lightInstance, t.cascadeMode)),
			(this.type = "directionalLightCascadedShadow"),
			super.init();
	}
	update(e) {
		this.updateCascadeFrustumArray(),
			this.updateCameraMatrixBySubFrustum(),
			this.currentViewportIndex == this.vpMatrixArray.length - 1 && (this.vpMatrixArrayDirty = !0);
	}
	static _getCascadedShadowOptions(e, t, r, i) {
		const n = e > 8 ? 8 : e,
			s = [];
		for (let e = 0; e < n; e++) s.push(new pt());
		return { vpMatrixArray: s, shadowMapSize: t, lightInstance: r, cascadeMode: i };
	}
}
const Ar = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
	Cr = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
	Dr = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
	Rr = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
function Ir(e, t, r) {
	return (
		r < 0 && (r += 1),
		r > 1 && (r -= 1),
		6 * r < 1 ? e + 6 * (t - e) * r : 2 * r < 1 ? t : 3 * r < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e
	);
}
class zr {
	constructor(e = 1, t = 1, r = 1) {
		(this.red = e), (this.green = t), (this.blue = r);
	}
	set(e) {
		return "string" == typeof e && zr.fromCssColorString(e, this), this;
	}
	toArray() {
		return [this.red, this.green, this.blue];
	}
	clone(e) {
		return zr.clone(this, e);
	}
	equals(e) {
		return zr.equals(this, e);
	}
	toCssHexString() {
		let e = zr.floatToByte(this.red).toString(16);
		e.length < 2 && (e = `0${e}`);
		let t = zr.floatToByte(this.green).toString(16);
		t.length < 2 && (t = `0${t}`);
		let r = zr.floatToByte(this.blue).toString(16);
		return r.length < 2 && (r = `0${r}`), `#${e}${t}${r}`;
	}
	toBytes(e) {
		const t = zr.floatToByte(this.red),
			r = zr.floatToByte(this.green),
			i = zr.floatToByte(this.blue);
		return Re(e) ? ((e[0] = t), (e[1] = r), (e[2] = i), e) : [t, r, i];
	}
	static fromBytes(e, t, r, i) {
		return (
			(e = zr.byteToFloat(xe(e, 255))),
			(t = zr.byteToFloat(xe(t, 255))),
			(r = zr.byteToFloat(xe(r, 255))),
			Re(i) ? ((i.red = e), (i.green = t), (i.blue = r), i) : new zr(e, t, r)
		);
	}
	static fromHsl(e, t, r, i) {
		(e = xe(e, 0) % 1), (t = xe(t, 0));
		let n = (r = xe(r, 0)),
			s = r,
			a = r;
		if (0 !== t) {
			let i;
			i = r < 0.5 ? r * (1 + t) : r + t - r * t;
			const o = 2 * r - i;
			(n = Ir(o, i, e + 1 / 3)), (s = Ir(o, i, e)), (a = Ir(o, i, e - 1 / 3));
		}
		return Re(i) ? ((i.red = n), (i.green = s), (i.blue = a), i) : new zr(n, s, a);
	}
	static fromRandom(e, t) {
		let r = (e = xe(e, xe.EMPTY_OBJECT)).red;
		if (!Re(r)) {
			const t = xe(e.minimumRed, 0),
				i = xe(e.maximumRed, 1);
			r = t + Pe.nextRandomNumber() * (i - t);
		}
		let i = e.green;
		if (!Re(i)) {
			const t = xe(e.minimumGreen, 0),
				r = xe(e.maximumGreen, 1);
			i = t + Pe.nextRandomNumber() * (r - t);
		}
		let n = e.blue;
		if (!Re(n)) {
			const t = xe(e.minimumBlue, 0),
				r = xe(e.maximumBlue, 1);
			n = t + Pe.nextRandomNumber() * (r - t);
		}
		return Re(t) ? ((t.red = r), (t.green = i), (t.blue = n), t) : new zr(r, i, n);
	}
	static fromCssColorString(e, t = new zr()) {
		e = e.replace(/\s/g, "");
		const r = zr[e.toUpperCase()];
		if (Re(r)) return zr.clone(r, t), t;
		let i = Ar.exec(e);
		return null !== i
			? ((t.red = parseInt(i[1], 16) / 15),
			  (t.green = parseInt(i[2], 16) / 15),
			  (t.blue = parseInt(i[3], 16) / 15),
			  t)
			: ((i = Cr.exec(e)),
			  null !== i
					? ((t.red = parseInt(i[1], 16) / 255),
					  (t.green = parseInt(i[2], 16) / 255),
					  (t.blue = parseInt(i[3], 16) / 255),
					  t)
					: ((i = Dr.exec(e)),
					  null !== i
							? ((t.red = parseFloat(i[1]) / ("%" === i[1].substr(-1) ? 100 : 255)),
							  (t.green = parseFloat(i[2]) / ("%" === i[2].substr(-1) ? 100 : 255)),
							  (t.blue = parseFloat(i[3]) / ("%" === i[3].substr(-1) ? 100 : 255)),
							  t)
							: ((i = Rr.exec(e)),
							  null !== i
									? zr.fromHsl(
											parseFloat(i[1]) / 360,
											parseFloat(i[2]) / 100,
											parseFloat(i[3]) / 100,
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
		if (Re(e))
			return Re(t)
				? ((t.red = e.red), (t.green = e.green), (t.blue = e.blue), t)
				: new zr(e.red, e.green, e.blue);
	}
	static equals(e, t) {
		return e === t || (Re(e) && Re(t) && e.red === t.red && e.green === t.green && e.blue === t.blue);
	}
	static equalsArray(e, t, r) {
		return e.red === t[r] && e.green === t[r + 1] && e.blue === t[r + 2];
	}
}
class Pr {
	constructor(e = 0, t = 0, r = 0, i = 0) {
		(this[0] = e), (this[1] = r), (this[2] = t), (this[3] = i);
	}
	static clone(e, t) {
		if (Re(e))
			return Re(t)
				? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
				: new Pr(e[0], e[2], e[1], e[3]);
	}
	static fromColumnMajorArray(e, t) {
		return Pr.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return Re(t) ? ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]), t) : new Pr(e[0], e[1], e[2], e[3]);
	}
	static fromScale(e, t) {
		return Re(t) ? ((t[0] = e.x), (t[1] = 0), (t[2] = 0), (t[3] = e.y), t) : new Pr(e.x, 0, 0, e.y);
	}
	static fromRotation(e, t) {
		const r = Math.cos(e),
			i = Math.sin(e);
		return Re(t) ? ((t[0] = r), (t[1] = i), (t[2] = -i), (t[3] = r), t) : new Pr(r, -i, i, r);
	}
	toArray() {
		const e = [];
		return Pr.toArray(this, e), e;
	}
	static toArray(e, t) {
		return Re(t) ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t) : [e[0], e[1], e[2], e[3]];
	}
	static getElementIndex(e, t) {
		return 2 * e + t;
	}
	static getColumn(e, t, r) {
		const i = 2 * t,
			n = e[i],
			s = e[i + 1];
		return (r.x = n), (r.y = s), r;
	}
	static setColumn(e, t, r, i) {
		const n = 2 * t;
		return ((i = Pr.clone(e, i))[n] = r.x), (i[n + 1] = r.y), i;
	}
	static getRow(e, t, r) {
		const i = e[t],
			n = e[t + 2];
		return (r.x = i), (r.y = n), r;
	}
	static setRow(e, t, r, i) {
		return ((i = Pr.clone(e, i))[t] = r.x), (i[t + 2] = r.y), i;
	}
	static setScale(e, t, r) {
		const i = Pr.getScale(e, Or),
			n = t.x / i.x,
			s = t.y / i.y;
		return (r[0] = e[0] * n), (r[1] = e[1] * n), (r[2] = e[2] * s), (r[3] = e[3] * s), r;
	}
	static getScale(e, t) {
		return (
			(t.x = Be.magnitude(Be.fromElements(e[0], e[1], Vr))),
			(t.y = Be.magnitude(Be.fromElements(e[2], e[3], Vr))),
			t
		);
	}
	static getMaximumScale(e) {
		return Pr.getScale(e, Br), Be.maximumComponent(Br);
	}
	static setRotation(e, t, r) {
		const i = Pr.getScale(e, Nr);
		return (r[0] = t[0] * i.x), (r[1] = t[1] * i.x), (r[2] = t[2] * i.y), (r[3] = t[3] * i.y), r;
	}
	static getRotation(e, t) {
		const r = Pr.getScale(e, Fr);
		return (t[0] = e[0] / r.x), (t[1] = e[1] / r.x), (t[2] = e[2] / r.y), (t[3] = e[3] / r.y), t;
	}
	static multiply(e, t, r) {
		const i = e[0] * t[0] + e[2] * t[1],
			n = e[0] * t[2] + e[2] * t[3],
			s = e[1] * t[0] + e[3] * t[1],
			a = e[1] * t[2] + e[3] * t[3];
		return (r[0] = i), (r[1] = s), (r[2] = n), (r[3] = a), r;
	}
	static add(e, t, r) {
		return (r[0] = e[0] + t[0]), (r[1] = e[1] + t[1]), (r[2] = e[2] + t[2]), (r[3] = e[3] + t[3]), r;
	}
	static subtract(e, t, r) {
		return (r[0] = e[0] - t[0]), (r[1] = e[1] - t[1]), (r[2] = e[2] - t[2]), (r[3] = e[3] - t[3]), r;
	}
	static multiplyByVector(e, t, r) {
		const i = e[0] * t.x + e[2] * t.y,
			n = e[1] * t.x + e[3] * t.y;
		return (r.x = i), (r.y = n), r;
	}
	static multiplyByScalar(e, t, r) {
		return (r[0] = e[0] * t), (r[1] = e[1] * t), (r[2] = e[2] * t), (r[3] = e[3] * t), r;
	}
	static multiplyByScale(e, t, r) {
		return (r[0] = e[0] * t.x), (r[1] = e[1] * t.x), (r[2] = e[2] * t.y), (r[3] = e[3] * t.y), r;
	}
	static negate(e, t) {
		return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
	}
	static transpose(e, t) {
		const r = e[0],
			i = e[2],
			n = e[1],
			s = e[3];
		return (t[0] = r), (t[1] = i), (t[2] = n), (t[3] = s), t;
	}
	static abs(e, t) {
		return (t[0] = Math.abs(e[0])), (t[1] = Math.abs(e[1])), (t[2] = Math.abs(e[2])), (t[3] = Math.abs(e[3])), t;
	}
	static equals(e, t) {
		return e === t || (Re(e) && Re(t) && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]);
	}
	static equalsArray(e, t, r) {
		return e[0] === t[r] && e[1] === t[r + 1] && e[2] === t[r + 2] && e[3] === t[r + 3];
	}
	static equalsEpsilon(e, t, r = 0) {
		return (
			(r = xe(r, 0)),
			e === t ||
				(Re(e) &&
					Re(t) &&
					Math.abs(e[0] - t[0]) <= r &&
					Math.abs(e[1] - t[1]) <= r &&
					Math.abs(e[2] - t[2]) <= r &&
					Math.abs(e[3] - t[3]) <= r)
		);
	}
	clone(e) {
		return Pr.clone(this, e);
	}
	equals(e) {
		return Pr.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return Pr.equalsEpsilon(this, e, t);
	}
	toString() {
		return `(${this[0]}, ${this[2]})\n(${this[1]}, ${this[3]})`;
	}
}
(Pr.IDENTITY = Object.freeze(new Pr(1, 0, 0, 1))), (Pr.ZERO = Object.freeze(new Pr(0, 0, 0, 0)));
const Or = new Be(),
	Br = new Be(),
	Nr = new Be(),
	Vr = new Be(),
	Fr = new Be();
class Gr {
	constructor(e, t, r) {
		(this.name = e), (this.cb = t), (this.offset = xe(r, 0)), (this.type = "number");
	}
	setBuffer(e, t = 0) {
		for (let r = 0; r < e.length; r++) this.buffer[r + t] = e[r];
	}
	set() {}
	getValue() {
		let e;
		switch (typeof this.cb) {
			case "object":
				e = this.cb[this.name] || this.cb;
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
	equals(e) {
		if (this._value.length !== e.length) return !1;
		for (let t = 0; t < e.length; t++) if (e[t] !== this._value[t]) return !1;
		return !0;
	}
}
class kr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = 0),
			(this.byteSize = 4),
			(this.buffer = new Uint32Array(t.buffer, r, 1)),
			(this.type = "uint");
	}
	set() {
		return (
			null != this.cb && (this.value = this.getValue()),
			this.value !== this._value && ((this._value = this.value), (this.buffer[0] = this.value), !0)
		);
	}
}
kr.align = 4;
class Hr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = 0),
			(this.byteSize = 4),
			(this.buffer = new Float32Array(t.buffer, r, 1)),
			(this.type = "vec1");
	}
	set() {
		return (
			null != this.cb && (this.value = this.getValue()),
			this.value !== this._value && ((this._value = this.value), (this.buffer[0] = this.value), !0)
		);
	}
}
Hr.align = 4;
class qr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new Be()),
			(this.buffer = new Float32Array(t.buffer, r, 2)),
			(this.byteSize = 8),
			(this.type = "vec2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof Be
			? !Be.equals(e, this._value) && (Be.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
qr.align = 8;
class jr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new He()),
			(this.buffer = new Float32Array(t.buffer, r, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof He
			? !He.equals(e, this._value) && (He.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
jr.align = 16;
class $r extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new dt()),
			(this.buffer = new Float32Array(t.buffer, r, 4)),
			(this.byteSize = 16),
			(this.type = "vec4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof dt
			? !dt.equals(e, this._value) && (dt.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
$r.align = 16;
class Xr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new zr()),
			(this.buffer = new Float32Array(t.buffer, r, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof zr
			? !zr.equals(e, this._value) && (zr.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
Xr.align = 16;
class Yr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new Pr()),
			(this.buffer = new Float32Array(t.buffer, r, 4)),
			(this.byteSize = 16),
			(this.type = "mat2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof Pr
			? !Pr.equals(e, this._value) && (Pr.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
Yr.align = 8;
class Wr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new st()),
			(this.buffer = new Float32Array(t.buffer, r, 9)),
			(this.byteSize = 48),
			(this.type = "mat3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof st
			? !st.equals(e, this._value) && (st.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
Wr.align = 16;
class Zr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.value = void 0),
			(this._value = new pt()),
			(this.buffer = new Float32Array(t.buffer, r, 16)),
			(this.byteSize = 64),
			(this.type = "mat4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof pt
			? !pt.equals(e, this._value) && (pt.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: ((this._value = e), this.setBuffer(e), !0);
	}
}
Zr.align = 16;
class Kr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.byteSize = 64 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "mat4-array");
	}
	set() {
		if (((this.value = this.getValue()), !this.value)) return !1;
		for (let e = 0; e < this.value.length; e++) this.setBuffer(this.value[e].toArray(), 16 * e);
		return !0;
	}
}
Kr.align = 16;
class Qr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.buffer = new Float32Array(t.buffer, r, n)),
			(this.byteSize = 4 * n),
			(this.type = "float-array");
	}
	set() {
		this.value = this.getValue();
		for (let e = 0; e < this.value.length; e++) this.buffer[e] = this.value[e];
		return !0;
	}
}
Qr.align = 4;
class Jr extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.byteSize = 8 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "vec2-array");
	}
	set() {
		this.value = this.getValue();
		let e = 0;
		for (let t = 0; t < this.value.length; t++)
			(this.buffer[e] = this.value[t].x), (this.buffer[e + 1] = this.value[t].y), (e += 2);
		return !0;
	}
}
Jr.align = 8;
class ei extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.byteSize = 16 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "vec3-array");
	}
	set() {
		this.value = this.getValue();
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
ei.align = 16;
class ti extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.byteSize = 16 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "vec4-array");
	}
	set() {
		this.value = this.getValue();
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
ti.align = 16;
class ri extends Gr {
	constructor(e, t, r, i, n, s) {
		super(e, void 0, 0),
			(this.binding = t),
			(this.visibility = xe(n, f.Vertex | f.Fragment)),
			(this.textureView = s),
			(this.type = i ?? "texture"),
			(this.isTexture = !0),
			(this._texture = r);
	}
	get layoutType() {
		return this.texture?.layoutType || "not yet bind";
	}
	get storageTextureLayoutType() {
		return this.texture?.storageTextureLayoutType || "not yet bind";
	}
	bind(e) {
		this._texture &&
			((this.texture = this._texture instanceof Function ? this._texture() : this._texture),
			this.texture.update(e));
	}
}
class ii extends Gr {
	constructor(e, t, r, i) {
		super(e, void 0, 0),
			(this.visibility = xe(i, f.Vertex | f.Fragment)),
			(this.name = e),
			(this.binding = t),
			(this.type = "sampler"),
			(this.isSampler = !0),
			(this._sampler = r);
	}
	get layoutType() {
		return this.sampler?.layoutType || "not yet bind";
	}
	bind(e) {
		(this.sampler = this._sampler instanceof Function ? this._sampler() : this._sampler), this.sampler.update(e);
	}
}
class ni extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, n),
			(this.cb = i),
			(this.type = "struct-array"),
			(this.dirty = !1),
			(this.byteOffset = r),
			(this.sourceBuffer = t);
	}
	set() {
		return (
			(this.structArray = this.getValue()),
			(this.byteSize = this.getStructSize()),
			(this.buffer = new Float32Array(this.sourceBuffer.buffer, this.byteOffset, this.byteSize / 4)),
			this.setSubData(),
			!0
		);
	}
	setSubData() {
		this.structArray.forEach((e) => {
			Object.keys(e).forEach((t) => {
				const r = Array.isArray(e[t]?.value) ? e[t]?.value : e[t]?.value.toArray();
				di(this.buffer, r, e[t].offset);
			});
		});
	}
	getStructSize() {
		let e = 0;
		return (
			this.structArray.forEach((t) => {
				Object.keys(t).forEach((r) => {
					(e += fi.checkUniformOffset(e, ni.aligns[t[r].type])),
						(t[r].offset = e),
						(this.byteOffset += ni.byteSizes[t[r].type]);
				});
			}),
			e
		);
	}
}
(ni.align = 16),
	(ni.aligns = {
		[Q.UniformUint]: 4,
		[Q.Float]: 4,
		[Q.FloatVec2]: 8,
		[Q.FloatVec3]: 16,
		[Q.FloatVec4]: 16,
		[Q.Mat2]: 8,
		[Q.Mat3]: 16,
		[Q.Mat4]: 16,
		[Q.Color]: 16
	}),
	(ni.byteSizes = {
		[Q.UniformUint]: 4,
		[Q.Float]: 4,
		[Q.FloatVec2]: 8,
		[Q.FloatVec3]: 12,
		[Q.FloatVec4]: 16,
		[Q.Mat2]: 16,
		[Q.Mat3]: 48,
		[Q.Mat4]: 64,
		[Q.Color]: 12
	});
class si extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.cb = i),
			(this.byteSize = 64 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "spotsLight"),
			(this.dirty = !1);
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		const r = 16 * t;
		e.positionDirty && (this.dirty = di(this.buffer, e.position.toArray(), r + 0)),
			e.distanceDirty && (this.dirty = di(this.buffer, e.distance, r + 3)),
			e.dirtectDirty && (this.dirty = di(this.buffer, e.directional.toArray(), r + 4)),
			e.coneCosDirty && (this.dirty = di(this.buffer, e.coneCos, r + 7)),
			e.colorDirty && (this.dirty = di(this.buffer, e.color.toArray(), r + 8)),
			e.penumbraCosDirty && (this.dirty = di(this.buffer, e.penumbraCos, r + 11)),
			e.decayDirty && (this.dirty = di(this.buffer, e.decay, r + 12)),
			(e.positionDirty = !1),
			(e.distanceDirty = !1),
			(e.dirtectDirty = !1),
			(e.coneCosDirty = !1),
			(e.colorDirty = !1),
			(e.penumbraCosDirty = !1),
			(e.decayDirty = !1);
	}
}
si.align = 16;
class ai extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = ai.uniformSize),
			(this.byteSize = n * this._subDataSize * s),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "spotLightShadows"),
			(this._nearValue = null),
			(this._farValue = null);
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		const r = t * this._subDataSize;
		e.shadow.vpMatrixDirty &&
			((e.shadow.vpMatrixDirty = !1), (this.dirty = di(this.buffer, e.shadow.camera.vpMatrix.toArray(), r + 0)));
		const i = e.shadow.camera.near;
		i != this._nearValue && ((this._nearValue = i), (this.dirty = di(this.buffer, this._nearValue, r + 16)));
		const n = e.shadow.camera.far;
		n != this._farValue && ((this._farValue = n), (this.dirty = di(this.buffer, this._farValue, r + 17)));
	}
}
(ai.align = 16), (ai.uniformSize = 18);
class oi extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.byteSize = 32 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "pointsLight");
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		const r = 8 * t;
		e.positionDirty && ((e.positionDirty = !1), (this.dirty = di(this.buffer, e.position.toArray(), r + 0))),
			e.distanceDirty && ((e.distanceDirty = !1), (this.dirty = di(this.buffer, e.distance, r + 3))),
			e.colorDirty && ((e.colorDirty = !1), (this.dirty = di(this.buffer, e.color.toArray(), r + 4))),
			e.decayDirty && ((e.decayDirty = !1), (this.dirty = di(this.buffer, e.decay, r + 7)));
	}
}
oi.align = 16;
class ci extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = ci.uniformSize),
			(this.byteSize = n * s * this._subDataSize),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "pointLightShadows"),
			(this._nearValue = null),
			(this._farValue = null);
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		const r = t * this._subDataSize;
		if (e.shadow.vpMatrixArrayDirty) {
			e.shadow.vpMatrixArrayDirty = !1;
			const t = e.shadow.camera.vpMatrixArray;
			for (let e = 0; e < t.length; e++) {
				const i = t[e];
				this.dirty = di(this.buffer, i.toArray(), r + 0 + 16 * e);
			}
		}
		if (e.shadow.viewPortDirty) {
			e.shadow.viewPortDirty = !1;
			for (let t = 0; t < 6; t++) this.dirty = di(this.buffer, e.shadow.viewports[t].toArray(), r + 96 + 4 * t);
		}
		const i = e.shadow.camera.near;
		i != this._nearValue && ((this._nearValue = i), (this.dirty = di(this.buffer, this._nearValue, r + 120)));
		const n = e.shadow.camera.far;
		n != this._farValue && ((this._farValue = n), (this.dirty = di(this.buffer, this._farValue, r + 121)));
	}
}
(ci.align = 16), (ci.uniformSize = 122);
class hi extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0),
			(this.cb = i),
			(this.byteSize = 32 * n),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "dirtectLights"),
			(this._isCascadedShadow = void 0);
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		const r = 8 * t;
		if (
			(e.dirtectDirty && ((e.dirtectDirty = !1), (this.dirty = di(this.buffer, e.directional.toArray(), r + 0))),
			this._isOpenShadow != Boolean(e.shadow))
		) {
			this._isOpenShadow = Boolean(e.shadow);
			const t = !0 === this._isOpenShadow ? 1 : 0;
			this.dirty = di(this.buffer, t, r + 3);
		}
		if (
			(e.colorDirty && ((e.colorDirty = !1), (this.dirty = di(this.buffer, e.color.toArray(), r + 4))),
			e.shadow && this._isCascadedShadow != e.shadow.isCascadedShadow)
		) {
			this._isCascadedShadow = e.shadow.isCascadedShadow;
			const t = !0 === this._isCascadedShadow ? 1 : 0;
			this.dirty = di(this.buffer, t, r + 7);
		}
	}
}
hi.align = 16;
class li extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = li.uniformSize),
			(this.byteSize = n * s * this._subDataSize),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "dirtectLightShadows");
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		const r = t * this._subDataSize;
		e.shadow.vpMatrixDirty &&
			((e.shadow.vpMatrixDirty = !1), (this.dirty = di(this.buffer, e.shadow.camera.vpMatrix.toArray(), r + 0)));
	}
}
(li.align = 16), (li.uniformSize = 16);
class ui extends Gr {
	constructor(e, t, r, i, n) {
		super(e, i, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = ui.uniformSize),
			(this.byteSize = n * s * this._subDataSize),
			(this.buffer = new Float32Array(t.buffer, r, this.byteSize / 4)),
			(this.type = "dirtectLightCascadedShadows");
	}
	set() {
		return (
			(this.lights = this.getValue()),
			this.lights.forEach((e, t) => {
				this.setSubData(e, t);
			}),
			this.dirty
		);
	}
	setSubData(e, t) {
		if (e.shadow instanceof Lr) {
			const r = t * this._subDataSize;
			if (e.shadow.vpMatrixArrayDirty) {
				e.shadow.vpMatrixArrayDirty = !1;
				const t = e.shadow.vpMatrixArray;
				for (let e = 0; e < t.length; e++) {
					const i = t[e];
					this.dirty = di(this.buffer, i.toArray(), r + 0 + 16 * e);
				}
			}
			if (e.shadow.viewPortDirty) {
				e.shadow.viewPortDirty = !1;
				const t = e.shadow.viewports;
				for (let i = 0; i < t.length; i++)
					this.dirty = di(this.buffer, t[i].toArray(), r + 16 * e.shadow.vpMatrixArray.length + 4 * i);
			}
			this.dirty = di(
				this.buffer,
				e.shadow.breakVSArray,
				r + 16 * e.shadow.vpMatrixArray.length + 4 * e.shadow.viewports.length
			);
		}
	}
}
function di(e, t, r) {
	return (
		Array.isArray(t)
			? t.forEach((t, i) => {
					e[i + r] = t;
			  })
			: (e[r] = t),
		!0
	);
}
(ui.align = 16), (ui.uniformSize = 84);
class fi {
	constructor(e) {
		(this.type = xe(e.type, "uniform")),
			(this.label = xe(e.label, "")),
			(this.name = xe(e.label, "")),
			(this.hasDynamicOffset = e.hasDynamicOffset ?? !1),
			(this.minBindingSize = e.minBindingSize ?? 0),
			(this.binding = e.binding ?? 0),
			(this.visibility = xe(e.visibility, f.Fragment | f.Vertex)),
			(this.usage = xe(e.usage, i.Uniform | i.CopyDst)),
			(this._uniformStruct = new Map()),
			(this.uniformDirty = !0),
			(this._bufferSize = e.size),
			(this.buffer = e.buffer),
			(this.offset = 0),
			(this.dataBuffer = xe(e.dataBuffer, new Float32Array(xe(this._bufferSize, 400)))),
			(this.byteOffset = 0),
			(this.isUniformBuffer = !0),
			(this.maxOffset = e.maxOffset ?? 0);
	}
	get layoutType() {
		return { type: this.type, hasDynamicOffset: this.hasDynamicOffset, minBindingSize: this.minBindingSize };
	}
	get bufferSize() {
		return this._bufferSize ?? 4 * this.uniformsSize;
	}
	get uniformsSize() {
		return null != this._bufferSize ? this._bufferSize / 4 : 16 * Math.ceil(this.byteOffset / 16);
	}
	bind(e) {
		this._uniformStruct.forEach((e) => {
			const t = e.set();
			null != e?.dirty && (e.dirty = !1), null != t && 0 == this.uniformDirty && (this.uniformDirty = t);
		}),
			this.uniformDirty &&
				((this.uniformDirty = !1),
				this.buffer || (this.buffer = G.createUniformBuffer(this.label, e, this.bufferSize, this.usage)),
				this.type != m.Storage &&
					this.buffer.setSubData(0, this.dataBuffer.slice(0, xe(this?.bufferSize / 4, this.uniformsSize))));
	}
	getUniformBufferStruct() {
		let e = "struct MaterialUniform {\n ";
		return (
			this._uniformStruct.forEach((t) => {
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
	contains(e) {
		return this._uniformStruct.get(e);
	}
	replaceUniformValue(e, t) {
		const r = this._uniformStruct.get(e);
		r && (r.cb = t);
	}
	getUniformByName(e) {
		return this._uniformStruct.get(e);
	}
	setUniform(e, t, r, i) {
		if (this._uniformStruct.get(e)) return;
		const n = fi.UniformType[r];
		this.byteOffset += fi.checkUniformOffset(this.byteOffset, n.align);
		const s =
			null != i
				? new n(e, this.dataBuffer, this.byteOffset, t, i)
				: new n(e, this.dataBuffer, this.byteOffset, t);
		this._uniformStruct.set(e, s), (this.byteOffset += s.byteSize);
	}
	setUniformsFromUniformBuffer(e) {
		this._uniformStruct.forEach((t, r) => {
			const i = e.getUniformByName(r);
			i && this._uniformStruct.set(r, i);
		});
	}
	static checkUniformOffset(e, t) {
		return Math.ceil(e / t) * t - e;
	}
	destroy() {
		this?.buffer?.destroy();
	}
}
function mi(e, t, r, i, n) {
	const s = t?.value instanceof Function;
	switch (t.type) {
		case "f32":
			n.setUniform(e, s ? t.value : () => t.value, Q.Float);
			break;
		case "vec2<f32>":
			n.setUniform(e, s ? t.value : () => t.value, Q.FloatVec2);
			break;
		case "vec3<f32>":
			n.setUniform(e, s ? t.value : () => t.value, Q.FloatVec3);
			break;
		case "color":
			n.setUniform(e, s ? t.value : () => t.value, Q.Color);
			break;
		case "vec4<f32>":
			n.setUniform(e, s ? t.value : () => t.value, Q.FloatVec4);
			break;
		case "mat2x2<f32>":
			n.setUniform(e, s ? t.value : () => t.value, Q.Mat2);
			break;
		case "mat3x3<f32>":
			n.setUniform(e, s ? t.value : () => t.value, Q.Mat3);
			break;
		case "mat4x4<f32>":
			n.setUniform(
				e,
				s
					? t.value
					: () => ("modelMatrix" == e ? i?.modelMatrix : "normalMatrix" === e ? i?.normalMatrix : t.value),
				Q.Mat4
			);
			break;
		case "array<f32>":
			n.setUniform(e, s ? t.value : () => t.value, Q.FloatArray, t.value.length);
			break;
		case "array<vec2<f32>>":
			n.setUniform(e, s ? t.value : () => t.value, Q.Vec2Array, t.value.length);
			break;
		case "array<vec3<f32>>":
			n.setUniform(e, s ? t.value : () => t.value, Q.Vec3Array, t.value.length);
			break;
		case "array<vec4<f32>>":
			n.setUniform(e, s ? t.value : () => t.value, Q.Vec4Array, t.value.length);
			break;
		case "texture":
		case "storageTexture":
			r.setTexture(e, s ? t.value : () => t.value, t?.binding, t?.type, t?.visibility, t?.textureView);
			break;
		case "sampler":
			r.setSampler(e, s ? t.value : () => t.value, t?.binding, t?.visibility);
			break;
		default:
			throw new Error("not match unifrom type");
	}
}
fi.UniformType = {
	[Q.UniformUint]: kr,
	[Q.Float]: Hr,
	[Q.FloatVec2]: qr,
	[Q.FloatVec3]: jr,
	[Q.FloatVec4]: $r,
	[Q.Mat2]: Yr,
	[Q.Mat3]: Wr,
	[Q.Mat4]: Zr,
	[Q.Color]: Xr,
	[Q.FloatArray]: Qr,
	[Q.Vec2Array]: Jr,
	[Q.Vec3Array]: ei,
	[Q.Vec4Array]: ti,
	[Q.Mat4Array]: Kr,
	[Q.PointLights]: oi,
	[Q.SpotLights]: si,
	[Q.DirtectLights]: hi,
	[Q.PointLightShadows]: ci,
	[Q.SpotLightShadows]: ai,
	[Q.DirtectLightShadows]: li,
	[Q.DirtectLightCascadedShadows]: ui,
	[Q.UniformStructArray]: ni
};
class pi {
	constructor() {
		(this.label = void 0),
			(this.type = void 0),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0),
			(this._diffuse = new zr(0, 0, 0)),
			(this._opacity = 1),
			(this.shaderData = void 0),
			(this.shaderSource = void 0),
			(this.dirty = !0),
			(this._emissive = new zr(0, 0, 0)),
			(this._emissiveIntensity = 1),
			(this._doubleSided = !0),
			(this.light = !1),
			(this.ready = !1),
			this.init();
	}
	set wireframe(e) {
		this.renderState.primitive.topology = e ? S.LineList : S.TriangleList;
	}
	set topology(e) {
		this.renderState.primitive.topology = e;
	}
	get doubleSided() {
		return this._doubleSided;
	}
	set doubleSided(e) {
		(this._renderState.primitive.cullMode = e ? w.None : w.Back), (this._doubleSided = e);
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
	clone() {
		return null;
	}
	update(e, t) {}
	createShaderData() {
		this.shaderData && this.shaderData.destroy(), (this.shaderData = new br(this.type, 0)), (this.ready = !0);
	}
	init() {
		const e = new Te(),
			t = new Me(),
			r = new Ee();
		(this._renderState = new ve()),
			(this._renderState.primitive = e),
			(this._renderState.targets = [t]),
			(this._renderState.depthStencil = r);
	}
	destroy() {
		(this.label = void 0),
			(this.type = void 0),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0),
			(this.color = void 0);
	}
}
class gi extends pi {
	constructor(e) {
		super();
		const { type: t, frag: r, vert: i, defines: n, light: s, shaderId: a } = e;
		(this.type = a ?? t),
			(this.shaderMaterialParms = e),
			(this.shaderSource = new pe({
				shaderId: a ?? t,
				render: { fragShader: r, vertShader: i },
				defines: xe(n, {})
			})),
			(this.uniforms = e.uniforms),
			(this.light = s || !1);
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	clone() {
		return new gi(this.shaderMaterialParms);
	}
	createShaderData(e) {
		const { uniformBuffers: t, uniformTextureAndSampler: r } = this.shaderMaterialParms;
		super.createShaderData();
		const i = this.shaderData;
		return t?.forEach?.((t) => this.createUniformBuffer(t, e)), r && this.addUniformToShaderData(r), i;
	}
	createUniformBuffer(e, t) {
		const {
				type: r = "uniform",
				usage: n = i.Uniform | i.CopyDst,
				uniforms: s,
				uid: a,
				binding: o,
				buffer: c,
				bufferSize: h,
				visibility: l
			} = e,
			u = new fi({ label: a, type: r, usage: n, binding: o, buffer: c, visibility: l, size: c?.size ?? h });
		this.shaderData.setUniformBuffer(a, u), c || this.addUniformToShaderData(s, u, t);
	}
	addUniformToShaderData(e, t, r) {
		if (!e) return;
		Object.getOwnPropertyNames(e).map((i) => {
			mi(i, e[i], this.shaderData, r, t);
		});
	}
}
function xi() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
		const t = (16 * Math.random()) | 0;
		return ("x" === e ? t : (3 & t) | 8).toString(16);
	});
}
class vi extends rr {
	constructor(e, t) {
		super(),
			(this.geometry = e),
			(this.material = t),
			(this.type = Z.Mesh),
			(this.frustumCull = !0),
			(this.uid = xi()),
			(this.subCommands = {});
	}
	get ready() {
		return this.material.ready;
	}
	update(e, t) {
		if (
			(this.updateMatrix(this?.parent?.modelMatrix),
			this.geometry.update(e),
			this.material.update(e, this),
			this.geometry.boundingSphere.update(this.modelMatrix),
			this.material.shaderSource.setDefines(e.defines),
			this.type == Z.Debug)
		)
			return void e.renderQueue.debugQueue.push(this);
		this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(t);
		(this.frustumCull ? e.cullingVolume.computeVisibility(this.geometry.boundingSphere) : F.INSIDE) !== F.OUTSIDE &&
			(this.material.transparent ? e.renderQueue.transparent.push(this) : e.renderQueue.opaque.push(this));
	}
	beforeRender() {}
	afterRender() {}
	getDrawCommand(e, t, r) {
		if (
			((this.drawCommand && !this.material.dirty) ||
				(this.material.shaderSource.setDefines(
					Object.assign({}, this.material.shaderData.defines, this.geometry.defines)
				),
				this.material.dirty && (this.material.dirty = !1),
				(this.drawCommand = new Y({
					vertexBuffers: this.geometry.vertexBuffers,
					indexBuffer: this.geometry.indexBuffer,
					shaderData: this.material.shaderData,
					drawParams: { count: this.geometry.count, instanceCount: this.instanceCount },
					renderState: this.material.renderState,
					shaderSource: this.material.shaderSource,
					lightShaderData: this.material.light ? r?.lightShaderData : void 0,
					useLight: this.material.light
				}))),
			e)
		) {
			if (!this.subCommands[t]) {
				const r = e.clone();
				r.update(void 0, this),
					r.shaderSource.setDefines(Object.assign({}, this.material.shaderData.defines)),
					this.instanceCount > 1 &&
						r.shaderData.setUniformBuffer(
							"instanceMatrixsBuffer",
							this.material.shaderData.getUniformBuffer("instanceMatrixsBuffer")
						),
					r.dirty && (r.dirty = !1),
					(this.subCommands[t] = this.drawCommand.shallowClone(r));
			}
			return this.subCommands[t];
		}
		return this.drawCommand;
	}
	destroy() {
		this.geometry.destroy(), this.material.destroy();
	}
}
class yi {
	constructor(e, t) {
		if (!(e && e instanceof or)) throw new Error("The parameter must be Light instance");
		(this.light = e),
			(this.scene = t),
			(this.debuggerSize = { width: 256, height: 256 }),
			(this.mesh = this._createShadowMapMesh());
		const r = this.light.shadow.getShadowMapTexture();
		(this.material.shaderMaterialParms.uniformTextureAndSampler.texture.value = r),
			(this.mesh.type = Z.Debug),
			this.scene.add(this.mesh);
	}
	_createShadowMapMesh() {
		const e = me("shadowMapDebugger", { positionLocation: 0 });
		return (
			(this.geometry = new Xt(2, 2)),
			(this.material = new gi({
				shaderId: "shadowMapDebugger",
				frag: e.frag,
				vert: e.vert,
				uniformTextureAndSampler: {
					texture: { type: "texture", value: void 0 },
					sampler: { type: "sampler", value: new Ce({ magFilter: "linear", minFilter: "linear" }) }
				}
			})),
			(this.material.renderState.viewport = new we(0, 0, this.debuggerSize.width, this.debuggerSize.height)),
			new vi(this.geometry, this.material)
		);
	}
	setSize(e, t) {
		e && t && ((this.debuggerSize.width = e), (this.debuggerSize.height = t), this.update());
	}
	update() {
		this.material.renderState.viewport = new we(0, 0, this.debuggerSize.width, this.debuggerSize.height);
	}
}
class Si extends pi {
	constructor() {
		super(), (this.type = "color"), (this.shaderSource = new pe({ shaderId: this.type, defines: {} }));
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData();
		const r = new fi({ label: "color" });
		r.setUniform("modelMatrix", () => t.modelMatrix, Q.Mat4), this.shaderData.setUniformBuffer("color", r);
	}
}
class bi extends vi {
	constructor() {
		super(),
			(this.type = Z.Axes),
			(this.distanceToCamera = 10),
			(this.material = new Si()),
			(this.material.wireframe = !0),
			this.init();
	}
	update(e) {
		this.updateMatrix(), this.material.update(e, this), e.renderQueue.opaque.push(this);
	}
	init() {
		const e = [0, 1, 2, 3, 4, 5];
		(this.geometry = new $t({})),
			this.geometry.setAttribute(new Ke("position", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], 3)),
			this.geometry.setAttribute(
				new Ke("color", [1, 0, 0, 1, 1, 0.5, 0.5, 1, 0, 1, 0, 1, 0.5, 1, 0.5, 1, 0, 0, 1, 1, 0.5, 0.5, 1, 1], 4)
			),
			this.geometry.setIndice(e),
			(this.geometry.count = e.length);
	}
}
class wi extends $t {
	constructor() {
		super({ type: "skyBoxGeometry" }), this.init();
	}
	init() {
		const e = [
			0, 2, 4, 6, 4, 2, 5, 3, 1, 3, 5, 7, 4, 1, 0, 1, 4, 5, 2, 3, 6, 7, 6, 3, 0, 1, 2, 3, 2, 1, 6, 5, 4, 5, 6, 7
		];
		this.setAttribute(
			new Ke("position", [1, 1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, -1, -1, -1, -1, -1], 3)
		),
			this.setIndice(e),
			(this.count = e.length);
	}
}
function Ti() {
	return !0;
}
const Ei = new (class {
	constructor() {
		(this._numberOfTextures = 0),
			(this._textures = new Map()),
			(this._numberOfTextures = 0),
			(this._texturesToRelease = new Map()),
			(this.defaultSampler = new Ce({
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
		if (Re(t)) return delete this._texturesToRelease[e], ++t.count, t.texture;
	}
	addTexture(e, t) {
		const r = { texture: t, count: 1 };
		(t.finalDestroy = t.destroy),
			(t.destroy = () => {
				0 == --r.count && this._texturesToRelease.set(e, r);
			}),
			this._textures.set(e, r),
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
				for (const r in e) "function" == typeof e[r] && (e[r] = t);
				e.isDestroyed = Ti;
			})(this)
		);
	}
})();
async function Mi(e) {
	const t = e.map((e) => {
			const t = document.createElement("img");
			return (t.src = e), t.decode().then(() => createImageBitmap(t));
		}),
		r = await Promise.all(t);
	await Promise.all(r);
	const i = new Ce({ magFilter: "linear", minFilter: "linear" }),
		n = r.map((e, t) => ({ source: e, width: e.width, height: e.height, depth: 1, x: 0, y: 0, z: t }));
	return {
		texture: new Ae({
			size: { width: r[0].width, height: r[0].height, depth: 6 },
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
			data: n,
			viewFormats: "cube",
			mipLevelCount: 6,
			needMipMap: !0
		}),
		sampler: i
	};
}
class _i extends pi {
	constructor() {
		super(),
			(this.type = "skybox"),
			(this.shaderSource = new pe({ shaderId: this.type, defines: {} })),
			(this.loadFish = !1),
			(this.renderState.depthStencil.depthWriteEnabled = !1),
			(this.renderState.depthStencil.depthCompare = d.LessEqual);
	}
	async loadTexture(e) {
		const t = await Mi(e);
		(this.loadFish = !0),
			Ei.addTexture("specular", t.texture),
			(this.baseTexture = t.texture),
			(this.baseSampler = t.sampler);
	}
	update(e, t) {
		this.loadFish && (this.shaderData || this.createShaderData(t));
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new fi({ label: "skybox" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			this.shaderData.setUniformBuffer("skybox", t),
			this.shaderData.setTexture("baseTexture", this.baseTexture),
			this.shaderData.setSampler("baseSampler", this.baseSampler);
	}
}
class Ui extends vi {
	constructor(e) {
		super(),
			(this.type = Z.Skybox),
			(this.visibility = !0),
			(this.material = new _i()),
			e && this.material.loadTexture(e),
			(this.geometry = new wi()),
			(this.isSkyBox = !0);
	}
	update(e) {
		this.updateMatrix(),
			this.geometry.update(e),
			this.material.update(e, this),
			this.visibility && e.renderQueue.pre.push(this);
	}
}
class Li extends rr {
	constructor() {
		super(), (this._notUpdateMatrix = !1), (this.visiblity = !1), (this.id = xi());
	}
	setMatrix4(e) {
		this.modelMatrix.set(e), (this._notUpdateMatrix = !0);
	}
	updateMatrix(e) {
		this._notUpdateMatrix || super.updateMatrix(e);
	}
}
class Ai extends vi {
	constructor(e, t) {
		super(e, t), (this.instances = new Map()), (this.renderInstances = []), (this.hasAddInstances = !1);
	}
	update(e, t) {
		this.checkInstancesVisiblity({ frameState: e, camera: t }),
			this.geometry.update(e),
			this.material.update(e, this),
			this.hasAddInstances || this.addUniformsToMaterial(),
			(this.instanceCount = this.renderInstances.length),
			this.renderInstances.length < 1 ||
				(this.material.transparent ? e.renderQueue.transparent.push(this) : e.renderQueue.opaque.push(this));
	}
	addInstance(e) {
		this.instances.get(e.id) || this.instances.set(e.id, e);
	}
	removeInstance(e) {
		return this.instances.delete(e);
	}
	getInstance(e) {
		return this.instances.get(e);
	}
	checkInstancesVisiblity(e) {
		const { frameState: t, camera: r } = e,
			i = this.renderInstances.length;
		(this.renderInstances = []),
			this.instances.forEach((e) => {
				e.updateMatrix(this?.parent?.modelMatrix),
					(e.visiblity = this.getInstanceVisiblity({ instance: e, frameState: t, camera: r })),
					e.visiblity && this.renderInstances.push(e);
			}),
			(this.material.dirty = this.renderInstances.length === i),
			this.material.dirty && (this.hasAddInstances = !1);
	}
	getInstanceVisiblity(e) {
		const { instance: t, frameState: r, camera: i } = e;
		this.geometry.boundingSphere.update(t.modelMatrix),
			(this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(i));
		const n = r.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		return n === F.INTERSECTING || n === F.INSIDE;
	}
	addUniformsToMaterial() {
		if (!this.material.shaderData) return;
		this.hasAddInstances = !0;
		const e = new fi({
			label: "instanceMatrixsBuffer",
			type: m.ReadOnlyStorage,
			usage: i.Storage | i.CopyDst,
			size: 64 * this.instances.size
		});
		e.setUniform(
			"instanceMatrixs",
			() => this?.renderInstances?.map((e) => e.modelMatrix),
			Q.Mat4Array,
			this?.renderInstances?.length
		),
			this.material.shaderData.setUniformBuffer("instanceMatrixsBuffer", e),
			this.material.shaderData.setDefine("USE_INSTANCE", !0),
			this.material.shaderData.setDefine("instanceCount", this?.renderInstances?.length);
	}
}
class Ci {
	constructor(e) {
		(this.dispatch = e.dispatch), (this.shaderData = e.shaderData), (this.shaderSource = e.shaderSource);
	}
	render(e) {
		const { device: t, passEncoder: r } = e;
		this.shaderData?.bind?.(t, r);
		$.getComputePipelineFromCache(t, this, [this.shaderData.groupLayout]).bind(r);
		const { x: i, y: n, z: s } = this.dispatch;
		r.dispatchWorkgroups(i, n, s);
	}
}
class Di {
	constructor(e) {
		(this.modelParams = e),
			(this.renderType = null != this.modelParams.compute ? "compute" : "render"),
			(this.vertexBuffers = new Map());
	}
	render(e) {
		const { device: t, passEncoder: r, viewPort: i, scissorTest: n } = e;
		this.command || (this.command = this.createDrawCommand()),
			this.command.render({
				device: t,
				passEncoder: r,
				viewPort: i ? we.fromViewPortProps(i) : void 0,
				scissorTest: n ? be.fromScissorTestProps(n) : void 0
			});
	}
	compute(e) {
		const { device: t, passEncoder: r } = e;
		this.command || (this.command = this.createComputeCommand()),
			this.command.render({ device: t, passEncoder: r });
	}
	getVertexBufferByUid(e) {
		return this.vertexBuffers.get(e);
	}
	getUniformBufferByUid(e) {
		return this.shaderData.getUniformBuffer(e);
	}
	getTextureByName(e) {
		return this.shaderData.getTexture(e);
	}
	getSamplerByName(e) {
		return this.shaderData.getSampler(e);
	}
	destroy() {
		this?.vertexBuffers.clear(), this?.shaderData.destroy(), (this.command = null), (this.modelParams = null);
	}
	createDrawCommand() {
		const { draw: e } = this.modelParams,
			t = this.createVertexBuffer();
		this.shaderData = this.createShaderData();
		const r = this.createIndexBuffer(),
			i = this.createShaderSource(),
			n = this.createRenderState();
		return new Y({
			vertexBuffers: t,
			shaderData: this.shaderData,
			indexBuffer: r,
			shaderSource: i,
			renderState: n,
			drawParams: e
		});
	}
	createComputeCommand() {
		const { dispatch: e } = this.modelParams,
			t = this.createShaderData(),
			r = this.createShaderSource();
		return new Ci({ dispatch: e, shaderData: t, shaderSource: r });
	}
	createVertexBuffer() {
		const { vertexBuffers: e, shaderId: t } = this.modelParams;
		let r = 0;
		return (
			e?.map((e, i) => {
				const { attributes: n, stepMode: s, uid: a, arrayStride: o } = e,
					c = new qt({ label: t, index: i, locationIndex: r, stepMode: s, arrayStride: o });
				return (
					Object.keys(n).forEach((e) => {
						const { size: t, value: i, names: s, itemSizes: a, buffer: o } = n[e];
						c.setAttribute(s?.length > 0 ? (o ? new Je(s, o, a) : new Qe(s, i, a)) : new Ke(e, i, t));
						r += s?.length > 0 ? s?.length : 1;
					}),
					this.vertexBuffers.set(a, c),
					c
				);
			}) || []
		);
	}
	createShaderSource() {
		const { vert: e, frag: t, compute: r, shaderId: i } = this.modelParams;
		return new pe({ shaderId: i, render: { vertShader: e, fragShader: t }, compute: { computeShader: r } });
	}
	createShaderData() {
		const { shaderId: e, uniformBuffers: t, uniformTextureAndSampler: r } = this.modelParams,
			i = new br(e);
		return t?.forEach?.((e) => this.createUniformBuffer(e, i)), this.addUniformToShaderData(r, i, void 0), i;
	}
	createRenderState() {
		const {
			blendConstant: e,
			depthStencil: t,
			viewPort: r,
			scissorTest: i,
			targets: n,
			multiSample: s,
			primitive: a,
			stencilReference: o
		} = this.modelParams.renderState;
		return new ve({
			scissorTest: i ? be.fromScissorTestProps(i) : void 0,
			viewport: r ? we.fromViewPortProps(r) : void 0,
			targets: n?.map((e) => new Me(e)),
			depthStencil: t ? new Ee(t) : void 0,
			blendConstant: e ? new ye(e.r, e.g, e.b, e.a) : void 0,
			stencilReference: o || 0,
			multisample: s ? new Se(s.count, s.mask, s.alphaToCoverageEnabled) : void 0,
			primitive: a ? new Te(a.topology, a.cullMode, a.frontFace, a.unclippedDepth) : void 0,
			stencilEnabled: !1,
			scissorTestEnabled: !1
		});
	}
	createIndexBuffer() {
		const { indices: e, shaderId: t } = this.modelParams;
		let r;
		return e && ((r = new kt(t + "IndexBuffer")), r.setIndices(e)), r;
	}
	createUniformBuffer(e, t) {
		const {
				type: r = "uniform",
				usage: n = i.Uniform | i.CopyDst,
				uniforms: s,
				uid: a,
				binding: o,
				buffer: c,
				bufferSize: h,
				visibility: l
			} = e,
			u = new fi({
				label: a + "_UniformBuffer",
				type: r,
				usage: n,
				binding: o,
				buffer: c,
				visibility: l,
				size: c?.size ?? h
			});
		t.setUniformBuffer(a, u), c || this.addUniformToShaderData(s, t, u);
	}
	addUniformToShaderData(e, t, r) {
		if (!e) return;
		Object.getOwnPropertyNames(e).map((i) => {
			mi(i, e[i], t, void 0, r);
		});
	}
}
class Ri extends $t {
	constructor() {
		super({ type: "spriteGeometry" }), this.init();
	}
	init() {
		const e = [-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1],
			t = [0, 1, 2, 0, 2, 3];
		this.computeBoundingSphere(e, 5),
			this.setAttribute(new Qe(["position", "uv"], e, [3, 2])),
			this.setIndice(t),
			(this.count = t.length);
	}
}
class Ii extends pi {
	constructor() {
		super(), (this.type = "sprite"), (this.shaderSource = new pe({ shaderId: this.type, defines: { HAS_UV: !0 } }));
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new fi({ label: "sprite" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			t.setUniform("color", e, Q.Color),
			t.setUniform("rotation", e, Q.Float),
			t.setUniform("center", e, Q.FloatVec2),
			t.setUniform("opacity", e, Q.Float),
			this.shaderData.setUniformBuffer("sprite", t),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_COLORTEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || Ei.defaultSampler));
	}
	destroy() {
		this?.baseTexture?.destroy(), super.destroy();
	}
}
class zi extends vi {
	constructor() {
		super(),
			(this.material = new Ii()),
			(this.geometry = new Ri()),
			(this.rotation = Math.PI),
			(this.opacity = 1),
			(this.center = new Be(0, 0)),
			(this.color = new zr(1, 0, 0));
	}
	setTexture(e) {
		this.material.baseTexture = e;
	}
	setSampler(e) {
		this.material.baseSampler = e;
	}
}
class Pi extends $t {
	constructor() {
		super({ type: "pointGeometry" }), this.init();
	}
	init() {
		const e = [0, 1, 2, 0, 2, 3],
			t = [-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1];
		this.computeBoundingSphere(t, 5),
			super.setAttribute(new Qe(["vertexPoint", "uv"], t, [3, 2])),
			this.setIndice(e),
			(this.count = e.length),
			(this.instanceVertexBuffer = new qt({
				label: this.type,
				index: this.vertexBufferCount,
				locationIndex: this.currentLocationIndex,
				stepMode: A.Instance
			})),
			this.vertexBuffers.push(this.instanceVertexBuffer);
	}
	getAttribute(e) {
		return this.instanceVertexBuffer.getAttribute(e);
	}
	setAttribute(e) {
		this.instanceVertexBuffer.setAttribute(e);
	}
}
class Oi extends vi {
	constructor(e, t, r = 1) {
		super("pointGeometry" === e.type ? e : new Pi(), t),
			this.addAttributesToGeometry(e),
			(this.instanceCount = r),
			(this.frustumCull = !1),
			(this.size = 0.1),
			(this._vertexColor = !1),
			(this._vertexSize = !1);
	}
	get vertexColor() {
		return this._vertexColor;
	}
	set vertexColor(e) {
		(this._vertexColor = e), this.material.shaderSource.setDefines({ VERTEX_COLOR: e });
	}
	get vertexSize() {
		return this._vertexSize;
	}
	set vertextSize(e) {
		(this._vertexSize = e), this.material.shaderSource.setDefines({ VERTEX_SIZE: e });
	}
	addAttributesToGeometry(e) {
		if ("pointGeometry" === e.type) return;
		const t = e?.defaultVertexBuffer.attributes.values;
		t.forEach((e) => this.geometry.setAttribute(e));
	}
}
class Bi extends $t {
	constructor(e) {
		super({ type: "sphereGeometry" }), (this.defines = { HAS_NORMAL: !0 }), (this.radius = e), this.init();
	}
	init() {
		const {
			positions: e,
			normals: t,
			uvs: r,
			indices: i
		} = (function (e) {
			const t = (e = e || {}).longBands || 32,
				r = e.latBands || 32,
				i = e.radius || 1,
				n = Math.PI / r,
				s = (2 * Math.PI) / t,
				a = t * r * 4,
				o = t * r * 6;
			let c, h;
			const l = new Array(3 * a),
				u = new Array(3 * a),
				d = new Array(2 * a),
				f = new Array(o);
			let m,
				p,
				g,
				x,
				v,
				y,
				S,
				b,
				w,
				T,
				E,
				M,
				_,
				U,
				L,
				A,
				C,
				D,
				R = 0,
				I = 0;
			for (L = 0; L < r; L++)
				for (c = L * n, v = Math.cos(c), y = Math.cos(c + n), A = 0; A < t; A++)
					(h = A * s),
						(m = Math.sin(c) * Math.cos(h)),
						(p = Math.sin(c) * Math.cos(h + s)),
						(g = Math.sin(c + n) * Math.cos(h)),
						(x = Math.sin(c + n) * Math.cos(h + s)),
						(S = Math.sin(c) * Math.sin(h)),
						(b = Math.sin(c) * Math.sin(h + s)),
						(w = Math.sin(c + n) * Math.sin(h)),
						(T = Math.sin(c + n) * Math.sin(h + s)),
						(E = 1 - A / t),
						(M = 1 - (A + 1) / t),
						(_ = 1 - L / r),
						(U = 1 - (L + 1) / r),
						(C = 3 * R),
						(D = 2 * R),
						(l[C] = m * i),
						(l[C + 1] = v * i),
						(l[C + 2] = S * i),
						(l[C + 3] = p * i),
						(l[C + 4] = v * i),
						(l[C + 5] = b * i),
						(l[C + 6] = g * i),
						(l[C + 7] = y * i),
						(l[C + 8] = w * i),
						(l[C + 9] = x * i),
						(l[C + 10] = y * i),
						(l[C + 11] = T * i),
						(u[C] = m),
						(u[C + 1] = v),
						(u[C + 2] = S),
						(u[C + 3] = p),
						(u[C + 4] = v),
						(u[C + 5] = b),
						(u[C + 6] = g),
						(u[C + 7] = y),
						(u[C + 8] = w),
						(u[C + 9] = x),
						(u[C + 10] = y),
						(u[C + 11] = T),
						(d[D] = E),
						(d[D + 1] = _),
						(d[D + 2] = M),
						(d[D + 3] = _),
						(d[D + 4] = E),
						(d[D + 5] = U),
						(d[D + 6] = M),
						(d[D + 7] = U),
						(f[I] = R),
						(f[I + 1] = R + 1),
						(f[I + 2] = R + 2),
						(f[I + 3] = R + 2),
						(f[I + 4] = R + 1),
						(f[I + 5] = R + 3),
						(R += 4),
						(I += 6);
			return { positions: l, normals: u, uvs: d, indices: f };
		})({ radius: this.radius });
		this.computeBoundingSphere(e),
			this.setAttribute(new Ke("position", e, 3)),
			this.setAttribute(new Ke("normal", t, 3)),
			this.setAttribute(new Ke("uv", r, 2)),
			this.setIndice(i),
			(this.count = i.length);
	}
}
class Ni extends $t {
	constructor(e = 10, t = 10, r = 10) {
		super({ type: "boxGeometry" }),
			(this.width = e),
			(this.height = t),
			(this.depth = r),
			(this.defines = { HAS_NORMAL: !0 }),
			this.init();
	}
	init() {
		const {
			positions: e,
			normals: t,
			uvs: r
		} = (function (e) {
			const t = (e = e || {}).dimensions || [1, 1, 1],
				r = e.position || [-t[0] / 2, -t[1] / 2, -t[2] / 2],
				i = r[0],
				n = r[1],
				s = r[2],
				a = t[0],
				o = t[1],
				c = t[2],
				h = { x: i, y: n, z: s + c },
				l = { x: i + a, y: n, z: s + c },
				u = { x: i, y: n + o, z: s + c },
				d = { x: i + a, y: n + o, z: s + c },
				f = { x: i, y: n, z: s },
				m = { x: i + a, y: n, z: s },
				p = { x: i, y: n + o, z: s },
				g = { x: i + a, y: n + o, z: s };
			return {
				positions: [
					h.x,
					h.y,
					h.z,
					l.x,
					l.y,
					l.z,
					u.x,
					u.y,
					u.z,
					u.x,
					u.y,
					u.z,
					l.x,
					l.y,
					l.z,
					d.x,
					d.y,
					d.z,
					l.x,
					l.y,
					l.z,
					m.x,
					m.y,
					m.z,
					d.x,
					d.y,
					d.z,
					d.x,
					d.y,
					d.z,
					m.x,
					m.y,
					m.z,
					g.x,
					g.y,
					g.z,
					l.x,
					m.y,
					m.z,
					f.x,
					f.y,
					f.z,
					g.x,
					g.y,
					g.z,
					g.x,
					g.y,
					g.z,
					f.x,
					f.y,
					f.z,
					p.x,
					p.y,
					p.z,
					f.x,
					f.y,
					f.z,
					h.x,
					h.y,
					h.z,
					p.x,
					p.y,
					p.z,
					p.x,
					p.y,
					p.z,
					h.x,
					h.y,
					h.z,
					u.x,
					u.y,
					u.z,
					u.x,
					u.y,
					u.z,
					d.x,
					d.y,
					d.z,
					p.x,
					p.y,
					p.z,
					p.x,
					p.y,
					p.z,
					d.x,
					d.y,
					d.z,
					g.x,
					g.y,
					g.z,
					f.x,
					f.y,
					f.z,
					m.x,
					m.y,
					m.z,
					h.x,
					h.y,
					h.z,
					h.x,
					h.y,
					h.z,
					m.x,
					m.y,
					m.z,
					l.x,
					l.y,
					l.z
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
		this.computeBoundingSphere(e),
			this.setAttribute(new Ke("position", e, 3)),
			this.setAttribute(new Ke("normal", t, 3)),
			this.setAttribute(new Ke("uv", r, 2)),
			(this.count = 36);
	}
}
class Vi extends $t {
	constructor(e = 1, t = 0.4, r = 64, i = 8, n = 2, s = 3) {
		super({ type: "torusKnotGeometry" }),
			(this.defines = { HAS_NORMAL: !0 }),
			(this.radius = e),
			(this.tube = t),
			(this.tubularSegments = r),
			(this.radialSegments = i),
			(this.p = n),
			(this.q = s),
			this.init();
	}
	init() {
		const { normals: e, uvs: t, positions: r, indices: i } = this.createGeometry();
		this.computeBoundingSphere(r),
			this.setAttribute(new Ke("position", r, 3)),
			this.setAttribute(new Ke("normal", e, 3)),
			this.setAttribute(new Ke("uv", t, 2)),
			this.setIndice(i),
			(this.count = i.length);
	}
	createGeometry() {
		const e = [],
			t = [],
			r = [],
			i = [],
			n = Math.floor(this.tubularSegments),
			s = Math.floor(this.radialSegments),
			a = new He(),
			o = new He(),
			c = new He(),
			h = new He(),
			l = new He(),
			u = new He(),
			d = new He();
		for (let i = 0; i <= n; ++i) {
			const f = (i / n) * this.p * Math.PI * 2;
			Fi(f, this.p, this.q, this.radius, c),
				Fi(f + 0.01, this.p, this.q, this.radius, h),
				He.subtract(h, c, u),
				He.add(h, c, d),
				He.cross(u, d, l),
				He.cross(l, u, d),
				l.normalize(),
				d.normalize();
			for (let h = 0; h <= s; ++h) {
				const u = (h / s) * Math.PI * 2,
					f = -this.tube * Math.cos(u),
					m = this.tube * Math.sin(u);
				(a.x = c.x + (f * d.x + m * l.x)),
					(a.y = c.y + (f * d.y + m * l.y)),
					(a.z = c.z + (f * d.z + m * l.z)),
					e.push(a.x, a.y, a.z),
					He.subtract(a, c, o),
					o.normalize(),
					t.push(o.x, o.y, o.z),
					r.push(i / n),
					r.push(h / s);
			}
		}
		for (let e = 1; e <= n; e++)
			for (let t = 1; t <= s; t++) {
				const r = (s + 1) * (e - 1) + (t - 1),
					n = (s + 1) * e + (t - 1),
					a = (s + 1) * e + t,
					o = (s + 1) * (e - 1) + t;
				i.push(r, n, o), i.push(n, a, o);
			}
		return { normals: t, uvs: r, positions: e, indices: i };
	}
}
function Fi(e, t, r, i, n) {
	const s = Math.cos(e),
		a = Math.sin(e),
		o = (r / t) * e,
		c = Math.cos(o);
	(n.x = i * (2 + c) * 0.5 * s), (n.y = i * (2 + c) * a * 0.5), (n.z = i * Math.sin(o) * 0.5);
}
class Gi extends pi {
	constructor() {
		super(),
			(this.type = "phong"),
			(this.color = new zr(1, 0, 0)),
			(this.shaderSource = new pe({ shaderId: this.type, defines: { materialPhong: !0, MATERIAL_PHONG: !0 } })),
			(this.light = !0),
			(this.specular = new zr(1, 1, 1)),
			(this.shininess = 30),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0);
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new fi({ label: "phong" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			t.setUniform("color", this, Q.Color),
			t.setUniform("opacity", this, Q.Float),
			t.setUniform("normalMtrix", () => e.normalMatrix, Q.Mat4),
			t.setUniform("emissive", this, Q.Color),
			t.setUniform("shininess", this, Q.Float),
			t.setUniform("specular", this, Q.Color),
			this.shaderData.setUniformBuffer("phong", t),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_COLORTEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || Ei.defaultSampler)),
			this.normalTexture &&
				(this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture),
				this.shaderData.setSampler("normalSampler", this.normalSampler || Ei.defaultSampler));
	}
	destroy() {
		this?.baseTexture?.destroy(), super.destroy();
	}
}
class ki extends pi {
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
		return this.renderState && this.renderState.primitive && this.renderState.primitive.cullMode == w.Back
			? Be.negate(this._normalScale, new Be())
			: this._normalScale;
	}
	set normalScale(e) {
		this._normalScale = e;
	}
	set IBLRender(e) {
		(this._IBLRender = e), this.shaderSource.setDefines({ USE_IBL: this._IBLRender }), (this.dirty = !0);
	}
	constructor() {
		super(),
			(this.type = "pbr_mat"),
			(this._roughness = 0.1),
			(this._metalness = 0.1),
			(this._aoTextureIntensity = 1),
			(this.light = !0),
			(this._normalScale = new Be(1, 1)),
			(this._IBLRender = !0),
			(this.shaderSource = new pe({
				shaderId: this.type,
				defines: { materialPbr: !0, USE_IBL: this._IBLRender, MATERIAL_PBR: !0 }
			}));
	}
	update(e, t) {
		Ei.getTexture("specular") && ((this.shaderData && !this.dirty) || this.createShaderData(t));
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new fi({ label: "pbr" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			t.setUniform("color", this, Q.Color),
			t.setUniform("opacity", this, Q.Float),
			t.setUniform("normalMtrix", () => e.normalMatrix, Q.Mat4),
			t.setUniform("emissive", this, Q.Color),
			t.setUniform("metalness", this, Q.Float),
			t.setUniform("roughness", this, Q.Float),
			this.shaderData.setUniformBuffer("pbr", t),
			(this.specularEnvTexture = Ei.getTexture("specular")),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_TEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || Ei.defaultSampler)),
			this.metalnessRoughnessTexture &&
				(this.shaderData.setDefine("USE_METALNESSTEXTURE", !0),
				this.shaderData.setTexture("metalnessRoughnessTexture", this.metalnessRoughnessTexture),
				this.shaderData.setSampler(
					"metalnessRoughnessSampler",
					this.metalnessRoughnessSampler || Ei.defaultSampler
				)),
			this.normalTexture &&
				(t.setUniform("normalScale", this, Q.FloatVec2),
				this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture),
				this.shaderData.setSampler("normalSampler", this.normalSampler || Ei.defaultSampler)),
			this.aoTexture &&
				(this.shaderData.setDefine("USE_AOTEXTURE", !0),
				this.shaderData.setTexture("aoTexture", this.aoTexture),
				this.shaderData.setSampler("aoSampler", this.aoSampler || Ei.defaultSampler),
				t.setUniform("aoTextureIntensity", this, Q.Float)),
			this.emissiveTexture &&
				(this.shaderData.setDefine("USE_EMISSIVETEXTURE", !0),
				this.shaderData.setTexture("emissiveTexture", this.emissiveTexture),
				this.shaderData.setSampler("emissiveSampler", this.emissiveSampler || Ei.defaultSampler)),
			this.specularEnvTexture &&
				this._IBLRender &&
				(this.shaderData.setTexture("specularEnvTexture", this.specularEnvTexture),
				this.shaderData.setSampler("specularEnvSampler", this.specularEnvSampler || Ei.defaultSampler));
	}
	destroy() {
		this?.aoTexture?.destroy(),
			this?.baseTexture?.destroy(),
			this?.emissiveTexture?.destroy(),
			this?.normalTexture?.destroy(),
			(this.specularEnvTexture = void 0);
	}
}
class Hi extends pi {
	constructor() {
		super(),
			(this.type = "point"),
			(this.shaderSource = new pe({
				shaderId: this.type,
				defines: { HAS_UV: !0, HAS_COLOR: !0, VERTEX_COLOR: !1, VERTEX_SIZE: !1 }
			}));
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new fi({ label: "point" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			t.setUniform("color", this, Q.Color),
			t.setUniform("size", e, Q.Float),
			this.shaderData.setUniformBuffer("point", t),
			this.shaderData.setDefine("USE_INSTANCE", !0),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_COLORTEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || Ei.defaultSampler));
	}
	destroy() {
		this?.baseTexture?.destroy(), super.destroy();
	}
}
class qi {
	constructor() {
		this._listeners = {};
	}
	addEventListener(e, t) {
		void 0 === this._listeners && (this._listeners = {});
		const r = this._listeners;
		void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t);
	}
	hasEventListener(e, t) {
		if (void 0 === this._listeners) return !1;
		const r = this._listeners;
		return void 0 !== r[e] && -1 !== r[e].indexOf(t);
	}
	removeEventListener(e, t) {
		if (void 0 === this._listeners) return;
		const r = this._listeners[e];
		if (void 0 !== r) {
			const e = r.indexOf(t);
			-1 !== e && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		if (void 0 === this._listeners) return;
		const t = this._listeners[e.type];
		if (void 0 !== t) {
			e.target = this;
			const r = t.slice(0);
			for (let t = 0, i = r.length; t < i; t++) r[t].call(this, e);
			e.target = null;
		}
	}
}
class ji {
	constructor() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []), (this.debugQueue = []);
	}
	sort() {
		ji.sort(this.opaque, 0, this.opaque.length, ji._compareFromNearToFar),
			ji.sort(this.transparent, 0, this.transparent.length, ji._compareFromFarToNear);
	}
	opaqueRender(e, t, r, i, n, s) {
		this.opaque.map((a) => {
			a.ready && (a.beforeRender(), ji.excuteCommand(a.getDrawCommand(i, n, s), t, r, e), a.afterRender());
		});
	}
	transparentRender(e, t, r, i, n, s) {
		this.transparent.map((a) => {
			a.ready && (a.beforeRender(), ji.excuteCommand(a.getDrawCommand(i, n, s), t, r, e), a.afterRender());
		});
	}
	computeRender(e, t) {
		this.computes.map((r) => {
			ji.excuteCompute(r.getCommand(), e, t);
		});
	}
	debugQueueRender(e, t, r, i, n) {
		this.debugQueue.map((s) => {
			s.ready && (s.beforeRender(), ji.excuteCommand(s.getDrawCommand(i, n), t, r, e), s.afterRender());
		});
	}
	preRender(e, t, r, i) {
		this.pre.map((i) => {
			i.ready && (i.beforeRender(), ji.excuteCommand(i.getDrawCommand(), t, r, e), i.afterRender());
		});
	}
	static excuteCommand(e, t, r, i) {
		e.render({ device: t.device, passEncoder: r, camera: i, viewPort: t?.viewPort, scissorTest: t?.scissorTest });
	}
	static excuteCompute(e, t, r) {
		e.render({ device: t.device, passEncoder: r });
	}
	reset() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []), (this.debugQueue = []);
	}
	static _compareFromNearToFar(e, t) {
		return e.priority - t.priority || e.distanceToCamera - t.distanceToCamera;
	}
	static _compareFromFarToNear(e, t) {
		return e.priority - t.priority || t.distanceToCamera - e.distanceToCamera;
	}
	static sort(e, t, r, i) {
		ji._quickSort(e, t, r, i);
	}
	static _quickSort(e, t, r, i) {
		for (;;) {
			if (r - t <= 10) return void ji._insertionSort(e, t, r, i);
			const n = (t + r) >> 1;
			let s = e[t],
				a = e[r - 1],
				o = e[n];
			if (i(s, a) > 0) {
				const e = s;
				(s = a), (a = e);
			}
			if (i(s, o) >= 0) {
				const e = s;
				(s = o), (o = a), (a = e);
			} else {
				if (i(a, o) > 0) {
					const e = a;
					(a = o), (o = e);
				}
			}
			(e[t] = s), (e[r - 1] = o);
			const c = a;
			let h = t + 1,
				l = r - 1;
			(e[n] = e[h]), (e[h] = c);
			e: for (let t = h + 1; t < l; t++) {
				let r = e[t],
					n = i(r, c);
				if (n < 0) (e[t] = e[h]), (e[h] = r), h++;
				else if (n > 0) {
					do {
						if ((l--, l == t)) break e;
						n = i(e[l], c);
					} while (n > 0);
					(e[t] = e[l]), (e[l] = r), n < 0 && ((r = e[t]), (e[t] = e[h]), (e[h] = r), h++);
				}
			}
			r - l < h - t ? (this._quickSort(e, l, r, i), (r = h)) : (this._quickSort(e, t, h, i), (t = l));
		}
	}
	static _insertionSort(e, t, r, i) {
		for (let n = t + 1; n < r; n++) {
			let r;
			const s = e[n];
			for (r = n - 1; r >= t; r--) {
				const t = e[r];
				if (!(i(t, s) > 0)) break;
				e[r + 1] = t;
			}
			e[r + 1] = s;
		}
	}
}
class $i {
	constructor(e, t, r = {}) {
		(this.context = e),
			(this.lightManger = t),
			(this.background = r.background),
			(this.renderQueue = new ji()),
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
		(this.definesDirty = !0), (this._defines = jt(e, this._defines, !1));
	}
	update(e, t = {}) {
		(this.background = t.background),
			this.renderQueue.reset(),
			this?.lightManger?.update?.(),
			(this.cullingVolume = e.getCullingVolume()),
			(this.frameNumber += 1);
	}
	resetCullingVolume(e) {
		this.cullingVolume = e.getCullingVolume();
	}
	static getFrameStateOptionsByScene(e) {
		return { background: e.background };
	}
}
class Xi extends or {
	constructor(e, t) {
		super(e, t), (this.lightType = K.AmbientLight), (this._colorAndIntensity = new dt(e.x, e.y, e.z, t));
	}
	get ColorAndIntensity() {
		return (
			this._colorAndIntensity.set(this.color.x, this.color.y, this.color.z, this.intensity),
			this._colorAndIntensity
		);
	}
}
class Yi extends Er {
	constructor() {
		const e = new Tr(-50, 50, 50, -50, 0, 100);
		super(new Be(1024, 1024), e), (this.type = "directionalLightShadow"), super.init();
	}
	update(e) {
		e instanceof Wi && this.updateMatrices(e);
	}
	updateMatrices(e) {
		this.camera.position.copy(e.position);
		const { x: t, y: r, z: i } = e.target;
		this.camera.lookAt(t, r, i), this.camera.updateMatrix(), (this.vpMatrixDirty = !0);
	}
}
class Wi extends or {
	constructor(e, t, r = !0, i = { openCSM: !0 }) {
		super(e, t),
			(this.lightType = K.DirectionalLight),
			r && (this.shadow = i.openCSM ? new Lr({ lightInstance: this }) : new Yi());
	}
	get dirtectDirty() {
		return this.positionDirty || this.targetDirty;
	}
	set dirtectDirty(e) {
		(this.positionDirty = e), (this.targetDirty = e);
	}
	get directional() {
		const e = new He();
		return He.subtract(this.target, this.position, e), e.normalize();
	}
	_setSceneInstance(e) {
		this._scene = e;
	}
	_getSceneActiveCamera() {
		return this._scene.camera;
	}
}
class Zi {
	constructor(e) {
		(this.spotLights = []),
			(this.pointLights = []),
			(this.directLights = []),
			(this.ambientLight = new Xi(new He(1, 1, 1), 0.2)),
			(this.lightCountDirty = !0),
			(this.openShadow = e.openShadow);
	}
	update() {
		this.checkLightShadowState(), this.updateLight();
	}
	add(e) {
		(this.lightCountDirty = !0),
			e.lightType == K.AmbientLight
				? (this.ambientLight = e)
				: e.lightType == K.DirectionalLight
				? (e instanceof Wi && e.shadow instanceof Lr && e.shadow.initSetting(e), this.directLights.push(e))
				: e.lightType == K.PointLight
				? this.pointLights.push(e)
				: e.lightType == K.SpotLight && this.spotLights.push(e);
	}
	remove(e) {
		(this.lightCountDirty = !0),
			e.lightType == K.AmbientLight
				? (this.ambientLight = new Xi(new He(1, 1, 1), 1))
				: e.lightType == K.DirectionalLight
				? this.directLights.splice(this.directLights.indexOf(e), 1)
				: e.lightType == K.PointLight
				? this.pointLights.splice(this.pointLights.indexOf(e), 1)
				: e.lightType == K.SpotLight && this.spotLights.splice(this.spotLights.indexOf(e), 1);
	}
	checkLightShadowState() {
		const e = this.getAllLights();
		for (let t = 0; t < e.length; t++) {
			const r = e[t];
			r.shadowDirty && ((r.shadowDirty = !1), (this.lightCountDirty = !0));
		}
	}
	updateLightShadow() {
		this.spotLightShadowMapTextureArray && (this.spotLightShadowMapTextureArray.dirty = !0),
			this.pointLightShadowMapTextureArray && (this.pointLightShadowMapTextureArray.dirty = !0),
			this.directLightShadowMapTextureArray && (this.directLightShadowMapTextureArray.dirty = !0),
			this.directLightCascadedShadowMapTextureArray && (this.directLightCascadedShadowMapTextureArray.dirty = !0);
	}
	updateLight() {
		this.lightCountDirty &&
			((this.lightCountDirty = !1),
			this.lightShaderData && this.lightShaderData.destroy(),
			this.createLightShaderData());
	}
	createLightShaderData() {
		(this.lightShaderData = new br("light", 0, 2, 2)),
			(this.lightUniformBuffer = new fi({
				label: "light",
				type: m.ReadOnlyStorage,
				usage: i.Storage | i.CopyDst
			})),
			this.lightShaderData.setDefine("spotLightsCount", this.spotLights.length),
			this.lightShaderData.setDefine("pointLightsCount", this.pointLights.length),
			this.lightShaderData.setDefine("dirtectLightsCount", this.directLights.length),
			this.lightShaderData.setDefine("ambientLightCount", 1),
			this.lightShaderData.setDefine("USE_SPOTLIGHT", this.spotLights.length),
			this.lightShaderData.setDefine("USE_POINTLIGHT", this.pointLights.length),
			this.lightShaderData.setDefine("USE_DIRTECTLIGHT", this.directLights.length),
			this.lightShaderData.setDefine("USE_AMBIENTLIGHT", 1),
			this.ambientLight &&
				this.lightUniformBuffer.setUniform(
					"ambientLight",
					() => this.ambientLight.ColorAndIntensity,
					Q.FloatVec4
				),
			this.spotLights.length &&
				this.lightUniformBuffer.setUniform(
					"spotLights",
					() => this.spotLights,
					Q.SpotLights,
					this.spotLights.length
				),
			this.pointLights.length &&
				this.lightUniformBuffer.setUniform(
					"pointLights",
					() => this.pointLights,
					Q.PointLights,
					this.pointLights.length
				),
			this.directLights.length &&
				this.lightUniformBuffer.setUniform(
					"directLights",
					() => this.directLights,
					Q.DirtectLights,
					this.directLights.length
				);
		e: if (this.openShadow) {
			const e = (this.spotLightShadowMapTextureArray = this.createShadowMapTextureArray(this.spotLights)),
				t = (this.pointLightShadowMapTextureArray = this.createShadowMapTextureArray(this.pointLights)),
				r = (this.directLightShadowMapTextureArray = this.createShadowMapTextureArray(this.directLights)),
				n = (this.directLightCascadedShadowMapTextureArray = this.createShadowMapTextureArray(
					this.directLights,
					!0
				));
			if (!(e || t || r || n)) break e;
			this.lightShaderData.setDefine("openShadow", this.openShadow),
				this.lightShaderData.setDefine("OPEN_SHADOW", this.openShadow),
				(this.shadowUniformBuffer = new fi({
					label: "shadow",
					type: m.ReadOnlyStorage,
					usage: i.Storage | i.CopyDst
				}));
			const s = this.setShadowUniform("spotLightShadows", this.spotLights, Q.SpotLightShadows),
				a = this.setShadowUniform("pointLightShadows", this.pointLights, Q.PointLightShadows),
				o = this.setShadowUniform("directLightShadows", this.directLights, Q.DirtectLightShadows),
				c = this.setShadowUniform(
					"directLightCascadedShadows",
					this.directLights,
					Q.DirtectLightCascadedShadows,
					!0
				);
			this.lightShaderData.setUniformBuffer("shadow", this.shadowUniformBuffer),
				this.lightShaderData.setDefine("spotLightShadowMapsCount", s),
				this.lightShaderData.setDefine("pointLightShadowMapsCount", a),
				this.lightShaderData.setDefine("directLightShadowMapsCount", o),
				this.lightShaderData.setDefine("directLightCascadedShadowMapsCount", c),
				this.lightShaderData.setDefine("USE_SPOTLIGHT_SHADOWMAP", s),
				this.lightShaderData.setDefine("USE_POINTLIGHT_SHADOWMAP", a),
				this.lightShaderData.setDefine("USE_DIRECTLIGHT_SHADOWMAP", o),
				this.lightShaderData.setDefine("USE_DIRECTLIGHT_CASCADEDSHADOWMAP", c),
				void 0 !== e &&
					(e.textureProp.size.depth != s && console.warn("spotLightShadowMap align has problem"),
					this.lightShaderData.setTexture("spotLightShadowMapTextureArray", e),
					this.lightShaderData.setDefine("SPOTLIGHT_SHADOWMAP_TEXTUREARRAY", !0)),
				void 0 !== t &&
					(t.textureProp.size.depth != a && console.warn("pointLightShadowMap align has problem"),
					this.lightShaderData.setTexture("pointLightShadowMapTextureArray", t),
					this.lightShaderData.setDefine("POINTLIGHT_SHADOWMAP_TEXTUREARRAY", !0)),
				void 0 !== r &&
					(r.textureProp.size.depth != o && console.warn("directLightShadowMap align has problem"),
					this.lightShaderData.setTexture("directLightShadowMapTextureArray", r),
					this.lightShaderData.setDefine("DIRECTLIGHT_SHADOWMAP_TEXTUREARRAY", !0)),
				void 0 !== n &&
					(n.textureProp.size.depth != c && console.warn("directLightCascadedShadowMap align has problem"),
					this.lightShaderData.setTexture("directLightCascadedShadowMapTextureArray", n)),
				this.lightShaderData.setSampler("shadowSampler", new Ce({ compare: d.Less }, { type: p.Comparison }));
		}
		this.lightShaderData.setUniformBuffer("light", this.lightUniformBuffer);
	}
	getAllLights() {
		return [].concat(this.spotLights, this.pointLights, this.directLights);
	}
	destroy() {
		this.lightShaderData.destroy(), this.lightUniformBuffer.destroy();
	}
	createShadowMapTextureArray(e, t = !1) {
		if (e.length <= 0) return;
		const r = [];
		for (let i = 0; i < e.length; i++) {
			const n = e[i];
			if (n.shadow) {
				if (n.shadow.isCascadedShadow && !t) continue;
				const e = n.shadow.getShadowMapTexture(),
					s = {
						source: e,
						width: e.textureProp.size.width,
						height: e.textureProp.size.height,
						depth: 1,
						x: 0,
						y: 0,
						z: i
					};
				r.push(s);
			}
		}
		if (r.length <= 0) return;
		return new Ae({
			label: `${r[0].source?.textureProp?.label}TextureArray`,
			size: { width: r[0].width, height: r[0].height, depth: r.length },
			fixedSize: !0,
			sampleType: g.Depth,
			format: h.Depth24Plus,
			usage: a.TextureBinding | a.CopyDst,
			data: r,
			viewFormats: o.E2dArray
		});
	}
	setShadowUniform(e, t, r, i = !1) {
		if (t.length) {
			const n = [];
			for (let e = 0; e < t.length; e++) {
				const r = t[e];
				r.shadow && (i ? r.shadow.isCascadedShadow && n.push(r) : r.shadow.isCascadedShadow || n.push(r));
			}
			return 0 === n.length ? 0 : (this.shadowUniformBuffer.setUniform(e, () => n, r, n.length), n.length);
		}
	}
}
class Ki {
	constructor() {
		this._list = new Map();
	}
	get length() {
		return this._list.size;
	}
	update(e, t) {
		this._list.forEach((r) => {
			r.update(e, t);
		});
	}
	add(e) {
		return this._list.get(e.uid) ? this._list.get(e.uid) : (this._list.set(e.uid, e), e);
	}
	remove(e) {
		return !!this._list.get(e.uid) && (e.destroy(), this._list.delete(e.uid), !0);
	}
	contains(e) {
		return !!this._list.get(e.uid);
	}
}
class Qi {
	constructor() {
		(this.geometry = new $t({})),
			this.geometry.setAttribute(new Ke("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)),
			(this.geometry.count = 6);
		const e = me("resolve", { positionLocation: 0 });
		(this.material = new gi({
			shaderId: "resolve",
			frag: e.frag,
			vert: e.vert,
			uniformTextureAndSampler: {
				texture: { type: "texture", value: void 0 },
				sampler: { type: "sampler", value: new Ce({ magFilter: "linear", minFilter: "linear" }) }
			}
		})),
			(this.quadMesh = new vi(this.geometry, this.material));
	}
	setSize(e, t) {
		this.canvasRenderTarget.setSize(e, t), (this.material.dirty = !0);
	}
	render(e, t) {
		this.canvasRenderTarget || this.initRenderTarget(e),
			(this.material.shaderMaterialParms.uniformTextureAndSampler.texture.value = t),
			this.material.update(void 0, this.quadMesh);
		const r = this.quadMesh.getDrawCommand(),
			i = this.canvasRenderTarget.beginRenderPass(e.device);
		r.render({ device: e.device, passEncoder: i }), this.canvasRenderTarget.endRenderPass();
	}
	initRenderTarget(e) {
		const { width: t, height: r, depth: i } = e.presentationSize,
			n = new De({ r: 0, g: 0, b: 0, a: 0 }, { textureView: () => e.context.getCurrentTexture().createView() }),
			s = new Ae({
				label: "resolveDepth",
				size: { width: t, height: r, depth: i },
				format: h.Depth24Plus,
				usage: a.RenderAttachment
			}),
			o = new De(1, { texture: s });
		this.canvasRenderTarget = new nt("render", [n], o);
	}
}
class Ji {
	constructor() {
		(this._postEffects = new Map()), (this.currentColorTexture = void 0), (this.resolveFrame = new Qi());
	}
	add(e) {
		this._postEffects.set(e.id, e);
	}
	remove(e) {
		this._postEffects.delete(e.id), e.destroy();
	}
	render(e, t) {
		(this.currentColorTexture = t),
			this._postEffects.forEach((t) => {
				this.currentColorTexture = t.render(e, this.currentColorTexture);
			}),
			this.resolveFrame.render(e, this.currentColorTexture);
	}
	setSize(e, t) {
		this._postEffects.forEach((r) => r.setSize(e, t)), this.resolveFrame.setSize(e, t);
	}
	postEffectsSort() {}
}
class en {
	constructor(e) {
		this.context = e;
	}
	update(e) {}
	setSize(e, t) {}
	beforeRender(e) {
		(this.passRenderEncoder = this.renderTarget.beginRenderPass(this.context.device)),
			this.computeTarget &&
				(this.passComputeEncoder = this.computeTarget.beginComputePassEncoder(this.context.device));
	}
	getColorTexture(e = 0) {
		return this.renderTarget.getColorTexture(e);
	}
	getDepthTexture() {
		return this.renderTarget.getDepthTexture();
	}
	afterRender() {
		this.renderTarget.endRenderPass(), this.computeTarget && this.computeTarget.endComputePassEncoder();
	}
}
class tn extends en {
	constructor(e) {
		super(e), this.init(e);
	}
	beforeRender(e) {
		this.updateRenderTarget(e), super.beforeRender();
	}
	render(e, t) {
		const { renderQueue: r, lightManger: i } = e;
		r.sort(),
			r.preRender(t, this.context, this.passRenderEncoder),
			r.transparentRender(t, this.context, this.passRenderEncoder, void 0, void 0, i),
			r.opaqueRender(t, this.context, this.passRenderEncoder, void 0, void 0, i),
			r.debugQueueRender(t, this.context, this.passRenderEncoder);
	}
	init(e) {
		this.createRenderTarget(e);
	}
	createRenderTarget(e) {
		const { width: t, height: r, depth: i } = e.presentationSize,
			n = new Ae({
				label: "basicPassColor",
				size: { width: t, height: r, depth: i },
				format: this.context.presentationFormat,
				usage: a.RenderAttachment | a.TextureBinding
			}),
			s = new Ae({
				label: "basicPassDepth",
				size: { width: t, height: r, depth: i },
				format: h.Depth24Plus,
				usage: a.RenderAttachment
			}),
			o = new De({ r: 0, g: 0, b: 0, a: 0 }, { texture: n }),
			c = new De(1, { texture: s });
		this.renderTarget = new nt("render", [o], c);
	}
	setSize(e, t) {
		this.renderTarget.setSize(e, t, 1);
	}
	updateRenderTarget(e) {
		if (e?.background?.value instanceof zr) {
			const { red: t, green: r, blue: i } = e.background.value,
				n = e.background?.opacity,
				s = { r: t, g: r, b: i, a: n ?? 1 };
			this.renderTarget.colorAttachments[0].value = s;
		}
	}
}
class rn extends en {
	constructor(e) {
		super(e), this.init(e);
	}
	render(e, t) {
		const { renderQueue: r, context: i, lightManger: n } = e,
			s = n.getAllLights();
		if (0 !== s.length) {
			for (let e = 0; e < s.length; e++) {
				const t = s[e],
					a = t.shadow;
				if (a)
					if (a?.viewports?.length > 0)
						for (let e = 0; e < a.viewports.length; e++) {
							if (0 === e) this.renderTarget.depthAttachment.op = "clear";
							else this.renderTarget.depthAttachment.op = "load";
							this.beforeRender({ shadow: a });
							const s = a.viewports[e],
								o = a.viewportSize;
							(a.currentViewportIndex = e),
								a.update(t),
								i.setViewPort(s.x * o.x, s.y * o.y, o.x, o.y),
								i.setScissorTest(s.x * o.x, s.y * o.y, o.x, o.y),
								this.subRender(r, a, n),
								super.afterRender();
						}
					else
						(this.renderTarget.depthAttachment.op = "clear"),
							this.beforeRender({ shadow: a }),
							a.update(t),
							i.setViewPort(0, 0, a.shadowMapSize.x, a.shadowMapSize.y),
							i.setScissorTest(0, 0, a.shadowMapSize.x, a.shadowMapSize.y),
							this.subRender(r, a, n),
							super.afterRender();
			}
			n.updateLightShadow(), i.resetViewPortToFullCanvas();
		}
	}
	subRender(e, t, r) {
		e.sort(),
			e.transparentRender(t.camera, this.context, this.passRenderEncoder, this.shadowMaterial, V.Shadow, r),
			e.opaqueRender(t.camera, this.context, this.passRenderEncoder, this.shadowMaterial, V.Shadow, r);
	}
	beforeRender(e) {
		const { shadow: t } = e;
		this.setRenderTarget(t), super.beforeRender();
	}
	setSize(e, t) {
		this.renderTarget.setSize(e, t, 1);
	}
	setRenderTarget(e) {
		this.renderTarget.depthAttachment.texture = e.getShadowMapTexture();
	}
	init(e) {
		this.createRenderTarget(e), this.createShadowMaterial();
	}
	createRenderTarget(e) {
		const t = new De(1, { texture: void 0 });
		this.renderTarget = new nt("render", [], t);
	}
	createShadowMaterial() {
		this.shadowMaterial = new gi({
			shaderId: "shadowMap",
			uniformBuffers: [{ uid: "shadow", uniforms: { modelMatrix: { type: "mat4x4<f32>", value: null } } }],
			defines: { selfBinding: 0, cameraBinding: 0, positionLocation: 0 },
			light: !1
		});
	}
}
class nn {
	constructor(e) {
		(this.context = e), (this.basicPass = new tn(e)), (this.shadowPass = new rn(e));
	}
	getOutputTexture() {
		return this.basicPass.getColorTexture(0);
	}
	render(e, t) {
		this.shadowPass.render(e, t),
			this.basicPass.beforeRender(e),
			this.basicPass.render(e, t),
			this.basicPass.afterRender();
	}
	setSize(e, t) {
		this.basicPass.setSize(e, t), this.shadowPass.setSize(e, t);
	}
	destroy() {
		this.basicPass = void 0;
	}
}
class sn extends qi {
	constructor(e) {
		super(),
			(this.container =
				e.container instanceof HTMLDivElement ? e.container : document.getElementById(e.container)),
			(this.meshManger = new Ki()),
			(this.postEffectCollection = new Ji()),
			(this.context = new Le({ canvas: null, container: this.container, pixelRatio: 1 })),
			(this.requestAdapter = e.requestAdapter || {}),
			(this.deviceDescriptor = e.deviceDescriptor || {}),
			(this.presentationContextDescriptor = e.presentationContextDescriptor),
			(this.ready = !1),
			(this.inited = !1),
			(this.lightManger = new Zi({ openShadow: !0 })),
			(this.background = e.background);
	}
	async init() {
		await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor),
			(this.currentRenderPipeline = new nn(this.context)),
			(this.frameState = new $i(this.context, this.lightManger, $i.getFrameStateOptionsByScene(this))),
			(this.viewport = new we(0, 0, this.context.presentationSize.width, this.context.presentationSize.height)),
			(this.ready = !0);
	}
	add(e) {
		[Z.Node, Z.Skybox, Z.Mesh, Z.Debug].includes(e.type)
			? this.meshManger.add(e)
			: e.type == Z.Light
			? (e instanceof Wi && e._setSceneInstance(this), this.lightManger.add(e))
			: e.type == Z.PostEffect && this.postEffectCollection.add(e);
	}
	remove(e) {
		[Z.Node, Z.Skybox, Z.Mesh].includes(e.type)
			? this.meshManger.remove(e)
			: e.type == Z.Light
			? this.lightManger.remove(e)
			: e.type == Z.PostEffect && this.postEffectCollection.remove(e);
	}
	setCamera(e) {
		this.camera = e;
	}
	resize(e, t) {
		this.context.resize(e, t),
			this?.currentRenderPipeline?.setSize(e, t),
			this?.postEffectCollection?.setSize(e, t);
	}
	async render(e, t) {
		this.inited
			? (this.update(e, t), this.afterRender())
			: ((this.inited = !0), await this.init(), this.update(e, t), this.afterRender());
	}
	afterRender() {}
	setViewPort(e, t, r, i) {
		return !!this.ready && (this.context.setViewPort(e, t, r, i), !0);
	}
	setScissorTest(e, t, r, i) {
		return !!this.ready && (this.context.setScissorTest(e, t, r, i), !0);
	}
	update(e, t) {
		this.ready &&
			(Ei.releasedTextures(),
			this.frameState.update(t ?? this.camera, $i.getFrameStateOptionsByScene(this)),
			(e ?? this.meshManger).update(this.frameState, t ?? this.camera),
			this.currentRenderPipeline.render(this.frameState, t ?? this.camera),
			this.postEffectCollection.render(this.context, this.currentRenderPipeline.getOutputTexture()));
	}
}
class an {
	constructor(e, t, r) {
		(this.width = e),
			(this.height = t),
			this.initDefaultParms(),
			(this.id = r),
			(this.priority = 0),
			(this.isPostEffect = !0),
			(this.type = Z.PostEffect);
	}
	render(e, t) {
		return null;
	}
	setSize(e, t) {}
	destroy() {
		this?.currentRenderTarget?.destroy();
	}
	renderMesh(e) {
		(this.fullScreenQuad.material.dirty = !0), this.fullScreenQuad.material.update();
		const t = this.fullScreenQuad.getDrawCommand(),
			r = this.currentRenderTarget.beginRenderPass(e.device);
		t.render({ device: e.device, passEncoder: r }), this.currentRenderTarget.endRenderPass();
	}
	initDefaultParms() {
		const e = new $t({});
		e.setAttribute(new Ke("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)), (e.count = 6);
		const t = new Te(),
			r = new Me(),
			i = new ve();
		(i.primitive = t),
			(i.targets = [r]),
			(this.renderState = i),
			(this.fullScreenQuad = new vi(e)),
			(this.defaultSampler = new Ce());
	}
}
class on extends an {
	constructor(e) {
		super(e.width, e.height, "bloom"),
			(this.strength = e.strength),
			(this.radius = e.radius),
			(this.threshold = e.threshold),
			this.init();
	}
	destroy() {
		this.renderTargetBright.destroy();
	}
	render(e, t) {
		(this.currentRenderTarget = this.renderTargetBright),
			(this.highPassUniformTextureAndSampler.tDiffuse.value = t),
			(this.fullScreenQuad.material = this.materialHighPassFilter),
			this.renderMesh(e);
		let r = this.renderTargetBright;
		for (let t = 0; t < this.nMips; t++)
			(this.fullScreenQuad.material = this.separableBlurMaterials[t]),
				(this.separableBlurMaterials[t].uniforms.tDiffuse.value = r.getColorTexture()),
				(this.separableBlurMaterials[t].uniforms.direction.value = on.BlurDirectionX),
				(this.currentRenderTarget = this.renderTargetsHorizontal[t]),
				this.renderMesh(e),
				(this.fullScreenQuad.material = this.separableBlurYMaterials[t]),
				(this.separableBlurYMaterials[t].uniforms.tDiffuse.value =
					this.renderTargetsHorizontal[t].getColorTexture()),
				(this.separableBlurYMaterials[t].uniforms.direction.value = on.BlurDirectionY),
				(this.currentRenderTarget = this.renderTargetsVertical[t]),
				this.renderMesh(e),
				(r = this.renderTargetsVertical[t]);
		return (
			(this.fullScreenQuad.material = this.compositeMaterial),
			(this.currentRenderTarget = this.renderTargetsHorizontal[0]),
			this.renderMesh(e),
			(this.blendUniformTextureAndSampler.baseColorTexture.value = t),
			(this.fullScreenQuad.material = this.blendMaterial),
			(this.currentRenderTarget = this.blendTarget),
			this.renderMesh(e),
			this.currentRenderTarget.getColorTexture()
		);
	}
	setSize(e, t) {
		this?.renderTargetsHorizontal?.forEach((r) => r.setSize(e, t, 1)),
			this?.renderTargetsVertical?.forEach((r) => r.setSize(e, t, 1)),
			this?.renderTargetBright?.setSize?.(e, t, 1),
			this?.blendTarget?.setSize?.(e, t, 1);
	}
	init() {
		(this.renderTargetsHorizontal = []), (this.renderTargetsVertical = []), (this.nMips = 5);
		let e = Math.round(this.width / 2),
			t = Math.round(this.height / 2);
		this.renderTargetBright = new nt("render", [this.createColorAttachment(e, t)]);
		for (let r = 0; r < this.nMips; r++) {
			const r = new nt("render", [this.createColorAttachment(e, t)]);
			this.renderTargetsHorizontal.push(r);
			const i = new nt("render", [this.createColorAttachment(e, t)]);
			this.renderTargetsVertical.push(i), (e = Math.round(e / 2)), (t = Math.round(t / 2));
		}
		(this.highPassUniformBuffer = {
			uniforms: {
				luminosityThreshol: { type: "float", value: this.threshold },
				smoothWidth: { type: "float", value: 0.01 },
				defaultColor: { type: "color", value: new zr(0, 0, 0) },
				defaultOpacity: { type: "float", value: 1 }
			}
		}),
			(this.highPassUniformTextureAndSampler = {
				tDiffuse: { type: "texture", value: null },
				tSampler: { type: "sampler", value: this.defaultSampler }
			});
		const r = me("luminosityHigh", { positionLocation: 0 });
		(this.materialHighPassFilter = new gi({
			shaderId: "bloom",
			uniformBuffers: [this.highPassUniformBuffer],
			uniformTextureAndSampler: this.highPassUniformTextureAndSampler,
			vert: r.vert,
			frag: r.frag
		})),
			(this.materialHighPassFilter.renderState = this.renderState),
			(this.separableBlurMaterials = []),
			(this.separableBlurYMaterials = []);
		const i = [3, 5, 7, 9, 11];
		(e = Math.round(this.width / 2)), (t = Math.round(this.height / 2));
		for (let r = 0; r < this.nMips; r++)
			this.separableBlurMaterials.push(this.getSeperableBlurMaterial(i[r], "BlurMaterial" + r)),
				this.separableBlurYMaterials.push(this.getSeperableBlurMaterial(i[r], "BlurMaterialY" + r)),
				(e = Math.round(e / 2)),
				(t = Math.round(t / 2));
		(this.compositeMaterial = this.getCompositeMaterial(this.nMips, "compositeMaterial")),
			(this.compositeMaterial.renderState = this.renderState),
			(this.blendUniformTextureAndSampler = {
				tDiffuse: { type: "texture", value: this.renderTargetsHorizontal[0].getColorTexture() },
				baseColorTexture: { type: "texture", value: null },
				tSampler: { type: "sampler", value: this.defaultSampler }
			});
		const n = me("blend", { positionLocation: 0 });
		(this.blendMaterial = new gi({
			shaderId: "postBlend",
			uniformTextureAndSampler: this.blendUniformTextureAndSampler,
			vert: n.vert,
			frag: n.frag
		})),
			(this.blendMaterial.renderState = this.renderState),
			(this.blendTarget = new nt("render", [this.createColorAttachment(this.width, this.height)]));
	}
	createColorAttachment(e, t) {
		const r = new Ae({
			size: { width: e, height: t, depth: 1 },
			format: h.BGRA8Unorm,
			usage: a.RenderAttachment | a.TextureBinding
		});
		return new De({ r: 0, g: 0, b: 0, a: 0 }, { texture: r });
	}
	getCompositeMaterial(e, t) {
		return new gi({
			shaderId: t,
			uniformTextureAndSampler: {
				blurTexture1: { type: "texture", value: this.renderTargetsVertical[0].getColorTexture() },
				blurTexture2: { type: "texture", value: this.renderTargetsVertical[1].getColorTexture() },
				blurTexture3: { type: "texture", value: this.renderTargetsVertical[2].getColorTexture() },
				blurTexture4: { type: "texture", value: this.renderTargetsVertical[3].getColorTexture() },
				blurTexture5: { type: "texture", value: this.renderTargetsVertical[4].getColorTexture() },
				tSampler: { type: "sampler", value: this.defaultSampler }
			},
			uniformBuffers: [
				{
					uid: t,
					uniforms: {
						bloomStrength: { type: "f32", value: this.strength },
						bloomRadius: { type: "f32", value: this.radius },
						bloomFactors: { type: "array<f32>", value: [1, 0.8, 0.6, 0.4, 0.2] },
						bloomTintColors: {
							type: "array<f32>",
							value: [new He(1, 1, 1), new He(1, 1, 1), new He(1, 1, 1), new He(1, 1, 1), new He(1, 1, 1)]
						}
					}
				}
			],
			vert: () =>
				"\n              struct VertexInput {\n                    @location(0) position: vec2<f32>,       \n               }\n               struct VertexOutput {\n                    @builtin(position) position: vec4<f32>,\n                    @location(0) uv: vec2<f32>,\n                };\n               @vertex\n               fn main(input: VertexInput) -> VertexOutput {\n                var output:VertexOutput;\n                output.uv = input.position * 0.5 + 0.5;\n                output.position = vec4<f32>(input.position, 0.0, 1.0);;\n                return output;\n               }\n                ",
			frag: () =>
				"\n                struct FragInput {\n                    @location(0) uv: vec2<f32>,\n                };\n                struct BloomUniforms{\n                    bloomStrength:f32,\n                    bloomRadius:f32,\n                    bloomFactors : array<f32,5>,\n                    bloomTintColors : array<vec3<f32>,5>\n                }  \n                @group(0) @binding(0)  var<storage, read> bloomUniforms : BloomUniforms;\n\n                @group(0) @binding(blurTexture1Binding) var blurTexture1: texture_2d<f32>;\n                @group(0) @binding(blurTexture2Binding) var blurTexture2: texture_2d<f32>;\n                @group(0) @binding(blurTexture3Binding) var blurTexture3: texture_2d<f32>;\n                @group(0) @binding(blurTexture4Binding) var blurTexture4: texture_2d<f32>;\n                @group(0) @binding(blurTexture5Binding) var blurTexture5: texture_2d<f32>;\n                @group(0) @binding(tSamplerBinding) var tSampler: sampler;\n\n\t\t\t\tfn lerpBloomFactor(factor:f32)->f32 {\n\t\t\t\t\tlet mirrorFactor:f32 = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomUniforms.bloomRadius);\n\t\t\t\t}\n                @fragment\n\t\t\t\tfn main(input:FragInput)-> @location(0) vec4<f32>  {\n\t\t\t\t\treturn bloomUniforms.bloomStrength * ( lerpBloomFactor(bloomUniforms.bloomFactors[0]) * vec4(bloomUniforms.bloomTintColors[0], 1.0) * textureSample(blurTexture1, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[1]) * vec4<f32>(bloomUniforms.bloomTintColors[1], 1.0) * textureSample(blurTexture2, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[2]) * vec4<f32>(bloomUniforms.bloomTintColors[2], 1.0) * textureSample(blurTexture3, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[3]) * vec4<f32>(bloomUniforms.bloomTintColors[3], 1.0) * textureSample(blurTexture4, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[4]) * vec4<f32>(bloomUniforms.bloomTintColors[4], 1.0) * textureSample(blurTexture5, tSampler, input.uv) );\n\t\t\t\t}"
		});
	}
	getSeperableBlurMaterial(e, t) {
		const r = me("blur", { kernelRadius: e, sigmaConst: e, positionLocation: 0 }),
			i = new gi({
				shaderId: t,
				uniformBuffers: [{ uid: t, uniforms: { direction: { type: "vec2<f32>", value: new Be(0, 0) } } }],
				uniformTextureAndSampler: {
					tDiffuse: { type: "texture", value: null },
					tSampler: { type: "sampler", value: this.defaultSampler }
				},
				vert: r.vert,
				frag: r.frag
			});
		return (i.renderState = this.renderState), i;
	}
}
(on.BlurDirectionX = new Be(1, 0)), (on.BlurDirectionY = new Be(0, 1));
class cn extends wr {
	constructor(e = 50, t = 1, r = 0.1, i = 2e3) {
		super(),
			(this._aspect = t),
			(this.fov = e),
			(this.near = r),
			(this.far = i),
			(this.xOffset = 0),
			(this.yOffset = 0),
			(this.projectMatrixDirty = !0),
			this.updateCameraParms(),
			(this.cullingVolume = new mr()),
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
		(this.top = this.near * Math.tan(0.5 * Pe.RADIANS_PER_DEGREE * this.fov)),
			(this.height = 2 * this.top),
			(this.width = this.aspect * this.height),
			(this.left = -0.5 * this.width);
	}
	updateProjectionMatrix() {
		this.projectMatrixDirty &&
			(this.updateCameraParms(),
			(this._projectionMatrix = pt.makePerspective(
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
class hn extends Er {
	constructor() {
		const e = new cn(60, 1, 0.1, 500);
		super(new Be(1024, 1024), e), (this.type = "spotLightShadow"), super.init();
	}
	update(e) {
		this.updateMatrices(e);
	}
	updateMatrices(e) {
		this.camera.position.copy(e.position);
		const { x: t, y: r, z: i } = e.target;
		this.camera.lookAt(t, r, i), this.camera.updateMatrix(), (this.vpMatrixDirty = !0);
	}
}
class ln extends or {
	constructor(e, t, r = 0, i = 60, n = 60, s = 4, a = !0) {
		super(e, t),
			(this._distance = r),
			(this._angle = (i / 180) * Math.PI),
			(this._penumbra = (n / 180) * Math.PI),
			(this._decay = s),
			(this.lightType = K.SpotLight),
			(this.angleDirty = !0),
			(this.penumbraDirty = !0),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.coneCosDirty = !0),
			(this.penumbraCosDirty = !0),
			a && (this.shadow = new hn()),
			this.updateConeCosOrPenumbraCos();
	}
	get dirtectDirty() {
		return this.positionDirty || this.targetDirty;
	}
	set dirtectDirty(e) {
		(this.positionDirty = e), (this.targetDirty = e);
	}
	get directional() {
		const e = new He();
		return He.subtract(this.position, this.target, e), He.normalize(e, new He());
	}
	get angle() {
		return this._angle;
	}
	set angle(e) {
		(this.angleDirty = !0), (this._angle = (e / 180) * Math.PI), this.updateConeCosOrPenumbraCos();
	}
	get penumbra() {
		return this._penumbra;
	}
	set penumbra(e) {
		(this.penumbraDirty = !0), (this._penumbra = (e / 180) * Math.PI), this.updateConeCosOrPenumbraCos();
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
		(this._coneCos = Math.cos(this.angle)), (this._penumbraCos = Math.cos(this.angle + this.penumbra));
	}
}
class un extends cn {
	constructor(e = 50, t = 1, r = 0.1, i = 2e3) {
		super(e, t, r, i), (this.vpMatrixArray = [new pt(), new pt(), new pt(), new pt(), new pt(), new pt()]);
	}
	createShaderData() {
		this.shaderData = new br("camera", 0, 1, 1);
		const e = new fi({ label: "pointLightShadowCamera", type: "read-only-storage", usage: i.Storage | i.CopyDst });
		e.setUniform("vpMatrix", () => this.vpMatrix, Q.Mat4),
			this.shaderData.setUniformBuffer("pointLightShadowCamera", e),
			this.shaderData.setDefine("isPointLightShadowMap", !0),
			this.shaderData.setDefine("IS_POINTLIGHT_SHADOWMAP", !0);
	}
	updateVpMatrixArrayAndIndex(e) {
		pt.clone(this.vpMatrix, this.vpMatrixArray[e]);
	}
}
class dn extends Er {
	get camera() {
		return this._camera;
	}
	constructor() {
		const e = new un(90, 1, 0.1, 500);
		super(new Be(1536, 1024), e),
			(this.viewportSize = new Be(512, 512)),
			(this.currentViewportIndex = 0),
			(this.type = "pointLightShadow"),
			(this.vpMatrixArrayDirty = !0),
			(this._viewports = [
				new dt(0, 0, 1 / 3, 0.5),
				new dt(1, 0, 1 / 3, 0.5),
				new dt(2, 0, 1 / 3, 0.5),
				new dt(0, 1, 1 / 3, 0.5),
				new dt(1, 1, 1 / 3, 0.5),
				new dt(2, 1, 1 / 3, 0.5)
			]),
			(this._pointLightShadowLookDirections = [
				new He(1, 0, 0),
				new He(-1, 0, 0),
				new He(0, 0, 1),
				new He(0, 0, -1),
				new He(0, 1, 0),
				new He(0, -1, 0)
			]),
			(this._pointLightShadowUps = [
				new He(0, 1, 0),
				new He(0, 1, 0),
				new He(0, 1, 0),
				new He(0, 1, 0),
				new He(0, 0, 1),
				new He(0, 0, -1)
			]),
			super.init();
	}
	update(e) {
		e instanceof fn && this.updateMatrices(e);
	}
	updateMatrices(e) {
		if (this.camera instanceof un) {
			this.camera.position.copy(e.position);
			const t = He.clone(e.position);
			t.add(this._pointLightShadowLookDirections[this.currentViewportIndex]),
				this.camera.up.copy(this._pointLightShadowUps[this.currentViewportIndex]);
			const { x: r, y: i, z: n } = t;
			this.camera.lookAt(r, i, n),
				this.camera.updateMatrix(),
				this.camera.updateVpMatrixArrayAndIndex(this.currentViewportIndex),
				5 == this.currentViewportIndex && (this.vpMatrixArrayDirty = !0);
		}
	}
}
class fn extends or {
	get shadow() {
		return this._shadow;
	}
	set shadow(e) {
		(this.shadowDirty = !0), (this._shadow = e);
	}
	constructor(e, t, r = 0, i = 4, n = !0) {
		super(e, t),
			(this._distance = r),
			(this._decay = i),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.lightType = K.PointLight),
			n && (this.shadow = new dn());
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
class mn extends rr {
	constructor() {
		super(), (this.type = Z.Node), (this.children = new Map()), (this.parent = null), (this.uid = xi());
	}
	add(e) {
		(e.parent = this), this.children.set(e.uid, e);
	}
	remove(e) {
		this.children.delete(e.uid);
	}
	update(e, t) {
		this.updateMatrix(this?.parent?.modelMatrix?.clone()),
			this?.children?.forEach?.((r) => {
				r.update(e, t);
			});
	}
	destroy() {
		this.children.forEach((e) => {
			e.destroy();
		}),
			this?.children?.clear();
	}
	traverse(e, t) {
		for (let r = 0, i = this.children.size; r < i; r++)
			this.children.forEach((r) => {
				r.traverse(e, t);
			});
	}
}
class pn extends vi {
	constructor(e, t) {
		super(e, t), (this.type = Z.SkinMesh), (this.uniformMatrixs = []), (this.hasAddJoints = !1);
	}
	setSkinData(e) {
		(this.inverseBindMatrices = e.inverseBindMatrices), (this.joints = e.joints);
	}
	update(e, t) {
		(this.uniformMatrixs = this.joints.map((e) => e.modelMatrix)),
			super.update(e, t),
			this.hasAddJoints || this.addUniformsToMaterial();
	}
	addUniformsToMaterial() {
		if (this.material.shaderData && ((this.hasAddJoints = !0), this.joints)) {
			const e = new fi({
					label: "skinJointsBuffer",
					type: m.ReadOnlyStorage,
					usage: i.Storage | i.CopyDst,
					size: 3e3
				}),
				t = new fi({ label: "invsBuffer", type: m.ReadOnlyStorage, usage: i.Storage | i.CopyDst, size: 3e3 });
			e.setUniform("joints", () => this.uniformMatrixs, Q.Mat4Array, this.uniformMatrixs.length),
				t.setUniform("jointsInv", () => this.inverseBindMatrices, Q.Mat4Array, this.inverseBindMatrices.length),
				this.material.shaderData.setUniformBuffer("skinJointsBuffer", e),
				this.material.shaderData.setUniformBuffer("invsBuffer", t);
		}
	}
}
function gn(e, t, r, i) {
	switch (e) {
		case 5120:
			return new Int8Array(t, r, i);
		case 5121:
			return new Uint8Array(t, r, i);
		case 5122:
			return new Int16Array(t, r, i);
		case 5123:
			return new Uint16Array(t, r, i);
		case 5124:
			return new Int32Array(t, r, i);
		case 5125:
			return new Uint32Array(t, r, i);
		case 5126:
			return new Float32Array(t, r, i);
		default:
			throw new Error("invalid component type");
	}
}
const xn = {
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
class vn {
	constructor(e) {
		(this.values = e.values ?? []),
			(this.id = e.id),
			(this.count = e.count),
			(this.componentType = e.componentType),
			(this.type = e.type),
			(this.min = e.min),
			(this.max = e.max);
	}
	getArray() {
		return Array.from(this.values);
	}
	getVec4Array() {
		const e = [];
		for (let t = 0; t < this.values.length; t += 4)
			e.push(new dt(this.values[t], this.values[t + 1], this.values[t + 2], this.values[t + 3]));
		return e;
	}
	getMat4Array() {
		const e = [];
		for (let t = 0; t < this.values.length; t += 16) {
			const r = new pt();
			pt.fromColumnMajorArray(this.values.slice(t, t + 16), r), e.push(r);
		}
		return e;
	}
}
class yn {
	constructor(e, t, r) {
		(this.name = e), (this.samplers = t), (this.channels = r);
	}
	play(e) {
		let t, r, i;
		this?.channels?.map((n) => {
			switch (((r = n.sampler), r.getValue(e), (i = n.target), (t = i.node), i.path)) {
				case "rotation":
					Yt.clone(r.currentValue, t.quaternion);
					break;
				case "translation":
					dt.clone(r.currentValue, t.position);
					break;
				case "scale":
					dt.clone(r.currentValue, t.scale);
			}
		});
	}
}
class Sn {
	constructor() {}
}
class bn {
	constructor(e, t) {
		(this.node = e), (this.path = t);
	}
}
var wn;
!(function (e) {
	(e[(e.SCALAR = 1)] = "SCALAR"),
		(e[(e.VEC2 = 2)] = "VEC2"),
		(e[(e.VEC3 = 3)] = "VEC3"),
		(e[(e.VEC4 = 4)] = "VEC4"),
		(e[(e.MAT2 = 4)] = "MAT2"),
		(e[(e.MAT3 = 9)] = "MAT3"),
		(e[(e.MAT4 = 16)] = "MAT4");
})(wn || (wn = {}));
class Tn {
	constructor() {}
	formGltf(e, t) {
		(this.input = e.accessors[t.input].values),
			(this.output = e.accessors[t.output].values),
			(this.interpolation = void 0 !== t.interpolation ? t.interpolation : "LINEAR"),
			(this.currentIndex = 0),
			(this.endTime = this.input[this.input.length - 1]),
			(this.inputMax = this.endTime - this.input[0]),
			(this.inputType = e?.json?.accessors[t.input]?.type),
			(this.outputType = e?.json?.accessors[t.output]?.type);
	}
	getValue(e) {
		e > this.endTime &&
			((e -= this.inputMax * Math.ceil((e - this.endTime) / this.inputMax)), (this.currentIndex = 0));
		const t = this.input.length;
		for (; this.currentIndex <= t - 2 && e >= this.input[this.currentIndex + 1]; ) this.currentIndex++;
		this.currentIndex >= t - 1 && ((e -= this.inputMax), (this.currentIndex = 0));
		const r = wn[this.outputType],
			i = 4 === r ? new Yt() : new dt(),
			n = 4 === r ? new Yt() : new dt();
		this.currentValue || (this.currentValue = 4 === r ? new Yt() : new dt());
		const s = this.currentIndex,
			a = s * r,
			o = a + r,
			c = Math.max(0, e - this.input[s]) / (this.input[s + 1] - this.input[s]);
		if (
			(i.set(this.output[a + 0], this.output[a + 1], this.output[a + 2], this.output[a + 3]),
			n.set(this.output[o + 0], this.output[o + 1], this.output[o + 2], this.output[o + 3]),
			"LINEAR" === this.interpolation)
		)
			4 === r ? Yt.slerp(i, n, c, this.currentValue) : dt.lerp(i, n, c, this.currentValue);
	}
}
class En {
	constructor(e, t, r = 0, i) {
		(this.json = e),
			(this.bufferViews = e.bufferViews),
			(this.glbOffset = r),
			(this.rootUrl = t),
			(this.scenes = e.scenes),
			(this.cameras = e.cameras || []),
			(this.glbBin = i),
			(this.meshes = []);
	}
	async parseData() {
		(this.buffers = await this.loadBuffes()),
			(this.images = await this.loadImages()),
			this.parseSamplers(),
			this.parseTextures(),
			this.parseMaterials(),
			this.parseAccessors(),
			this.parseMeshs(),
			this.parseNodes(),
			this.normalizeData(),
			this.parseScenes(),
			this.parseAnimations();
	}
	getAccessor(e) {
		return this.accessors[e];
	}
	parseSamplers() {
		this.samplers = this.json.samplers ? this.json.samplers.map((e) => this.getSampler(e)) : [];
	}
	parseScenes() {
		this.scenes = this.json.scenes.map((e) => {
			const t = e?.nodes?.map((e) => this.nodes[e]);
			return t;
		});
	}
	parseTextures() {
		this.textures = this.json.textures
			? this.json.textures.map((e) => ({
					sampler: void 0 !== e.sampler ? this.samplers[e.sampler] : this.getSampler({}),
					texture: this.createTexture(e.source)
			  }))
			: [];
	}
	parseMaterials() {
		this.materials = this.json.materials
			? this.json.materials.map((e) => {
					const t = new ki(),
						{
							baseColorFactor: r,
							metallicFactor: i,
							metallicRoughnessTexture: n,
							baseColorTexture: s,
							roughnessFactor: a
						} = e.pbrMetallicRoughness;
					return (
						e.normalTexture && (t.normalTexture = this.textures[e.normalTexture.index].texture),
						e.occlusionTexture && (t.aoTexture = this.textures[e.occlusionTexture.index].texture),
						e.emissiveTexture && (t.emissiveTexture = this.textures[e.emissiveTexture.index].texture),
						s && (t.baseTexture = this.textures[s.index].texture),
						n && (t.metalnessRoughnessTexture = this.textures[n.index].texture),
						r && (t.color = new zr(r[0], r[1], r[2])),
						(t.metalness = i ?? 1),
						(t.roughness = a ?? 0),
						(t.baseSampler = new Ce({
							magFilter: "linear",
							minFilter: "linear",
							addressModeU: "repeat",
							addressModeV: "repeat"
						})),
						t
					);
			  })
			: [];
	}
	parseAccessors() {
		this.accessors = this.json.accessors.map((e, t) => {
			const r = xn[e.type];
			let i;
			if (
				((i =
					void 0 === e.bufferView
						? gn(e.componentType, new ArrayBuffer(r * e.count * xn[e.componentType]), 0, e.count * r)
						: this.getBufferView(e, r)),
				e.sparse)
			) {
				(e.sparse.indices.count = e.sparse.count),
					(e.sparse.values.count = e.sparse.count),
					(e.sparse.values.componentType = e.componentType);
				const t = this.getBufferView(e.sparse.indices, 1),
					n = this.getBufferView(e.sparse.values, r);
				for (let s = 0; s < e.sparse.count; s += 1)
					for (let e = 0; e < r; e += 1) i[t[s] * r + e] = n[s * r + e];
			}
			return new vn({
				componentType: xn[e.componentType],
				count: e.count,
				type: r,
				values: i,
				id: t,
				min: e?.min,
				max: e?.max
			});
		});
	}
	parseAnimations() {
		this.animations = this?.json?.animations?.map((e, t) => {
			const r = e?.samplers?.map((e) => {
					const t = new Tn();
					return t.formGltf(this, e), t;
				}),
				i = e?.channels?.map((e) => {
					const t = new Sn();
					return (t.sampler = r[e.sampler]), (t.target = new bn(this.nodes[e.target.node], e.target.path)), t;
				});
			return new yn(t.toString(), r, i);
		});
	}
	parseMeshs() {
		this.meshes = this?.json?.meshes?.map?.((e) => ({
			name: e.name,
			primitives: e?.primitives?.map?.((t) => {
				const r = void 0 !== t.material ? this.materials[t.material] : { pbrMetallicRoughness: {} },
					i = this.createGeometry(t, r),
					n = new vi(i, r);
				return (n.name = e.name), n;
			})
		}));
	}
	getSampler(e) {
		return new Ce({
			magFilter: xn[e.magFilter || 9729],
			minFilter: xn[e.minFilter || 9729],
			addressModeU: xn[e.wrapS || 10497],
			addressModeV: xn[e.wrapT || 10497]
		});
	}
	getBufferView(e, t) {
		const r = this.bufferViews[e.bufferView],
			i = (r.byteOffset || 0) + (e.byteOffset || 0),
			n = Math.max(r.byteStride / 4 || 0, t);
		let s = gn(
			e.componentType,
			this.buffers[r.buffer],
			0 === r.buffer ? i + this.glbOffset : i,
			(e.count - 1) * n + t
		);
		if (n > t) {
			const r = new (0, s.constructor)(e.count * t);
			for (let e = 0, i = 0; e < r.length; e += t, i += n) for (let n = 0; n < t; n += 1) r[e + n] = s[i + n];
			s = r;
		}
		return s;
	}
	createGeometry(e, t) {
		let r = null,
			i = null;
		const n = { HAS_NORMAL: !0 };
		let s;
		i = this.getAccessor(e.attributes.POSITION);
		const a = i.getArray();
		let o;
		(s = i.count),
			void 0 !== e.indices &&
				((i = this.getAccessor(e.indices)),
				(r = (function (e) {
					if (e instanceof Uint16Array || e instanceof Uint32Array) return e;
					let t;
					if (e instanceof Float32Array) t = new Uint32Array(e.length);
					else {
						let r = 0;
						for (let t = 0; t < e.length; t++) r = r < e[t] ? e[t] : r;
						t = r < 65536 ? new Uint16Array(e.length) : new Uint32Array(e.length);
					}
					return (
						e.forEach((e, r) => {
							t[r] = e;
						}),
						t
					);
				})(i.getArray())),
				(s = i.count)),
			void 0 !== e.attributes.NORMAL
				? ((i = this.getAccessor(e.attributes.NORMAL)), (o = i.getArray()))
				: (o = (function (e, t) {
						const r = new Float32Array(t.length),
							i = e ? e.length : t.length;
						for (let n = 0; n < i; n += 3) {
							const i = [];
							for (let t = 0; t < 3; t += 1) e ? i.push(e[n + t]) : i.push(n + t);
							const s = i.map((e) => {
									const r = 3 * e;
									return new He(t[r], t[r + 1], t[r + 2]);
								}),
								a = new He();
							He.subtract(s[1], s[0], a);
							const o = new He();
							He.subtract(s[2], s[0], o);
							const c = new He();
							He.cross(a.normalize(), o.normalize(), c);
							for (let e = 0; e < 3; e += 1) {
								const t = 3 * (n + e);
								(r[t + 0] += c.x), (r[t + 1] += c.y), (r[t + 2] += c.z);
							}
						}
						return r;
				  })(r, a));
		let c = null;
		void 0 !== e.attributes.TEXCOORD_0 &&
			((i = this.getAccessor(e.attributes.TEXCOORD_0)), (c = i.getArray()), (n.HAS_UV = !0)),
			void 0 !== e.attributes.TEXCOORD_1 &&
				((i = this.getAccessor(e.attributes.TEXCOORD_1)), i.getArray(), (n.HAS_UV1 = !0)),
			void 0 !== e.attributes.TANGENT && void 0 !== e.attributes.NORMAL
				? ((i = this.getAccessor(e.attributes.TANGENT)), i.getArray())
				: t.normalTexture;
		let h = null,
			l = 3;
		void 0 !== e.attributes.COLOR_0 &&
			((i = this.accessors[e.attributes.COLOR_0]), (h = i.getArray()), (l = i.type), (n.HAS_COLOR = !0));
		let u = null;
		void 0 !== e.attributes.JOINTS_0 &&
			((i = this.getAccessor(e.attributes.JOINTS_0)), (u = i.getArray()), (n.HAS_SKIN = !0));
		let d = null;
		void 0 !== e.attributes.WEIGHTS_0 && ((i = this.getAccessor(e.attributes.WEIGHTS_0)), (d = i.getArray()));
		const f = new $t({ type: "pbrGeomtry" });
		return (
			r && f.setIndice(r),
			a && f.setAttribute(new Ke("position", Array.from(a), 3)),
			o && f.setAttribute(new Ke("normal", Array.from(o), 3)),
			h && f.setAttribute(new Ke("color", Array.from(h), l)),
			c && f.setAttribute(new Ke("uv", Array.from(c), 2)),
			u && f.setAttribute(new Ke("joint0", Array.from(u), 4)),
			d && f.setAttribute(new Ke("weight0", Array.from(d), 4)),
			(f.defines = n),
			f.computeBoundingSphere(Array.from(a)),
			(f.count = s),
			f
		);
	}
	createTexture(e) {
		return new Ae({
			size: { width: this.images[e].width, height: this.images[e].height, depth: 1 },
			data: { source: this.images[e] },
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
		});
	}
	async loadImages() {
		const e = [];
		let t = Promise.resolve();
		this.json.images &&
			(t = Promise.all(
				this.json.images.map(async (t, r) => {
					if (t.uri) {
						const i = "data:" === t.uri.slice(0, 5) ? t.uri : `${this.rootUrl}/${t.uri}`;
						e[r] = await fetch(i)
							.then((e) => e.blob())
							.then((e) => createImageBitmap(e, { colorSpaceConversion: "none" }));
					}
				})
			));
		let r = Promise.resolve();
		return (
			this.json.images &&
				(r = Promise.all(
					this.json.images.map(async (t, r) => {
						if (void 0 !== t.bufferView) {
							const { buffer: i, byteOffset: n, byteLength: s } = this.json.bufferViews[t.bufferView],
								a = new Uint8Array(this.buffers[i], 0 === i ? n + this.glbOffset : n, s);
							let o;
							o = t.mimeType ? t.mimeType : 255 === a[0] ? "image/jpeg" : "image/png";
							const c = new Blob([a], { type: o });
							e[r] = await createImageBitmap(c, { colorSpaceConversion: "none" });
						}
					})
				)),
			await Promise.all([t, r]),
			e
		);
	}
	async loadBuffes() {
		const e = [];
		return (
			await Promise.all(
				this.json.buffers.map((t, r) => {
					if (!t.uri) {
						if (0 !== r) throw new Error("buffer uri undefined");
						return (e[r] = this.glbBin), Promise.resolve();
					}
					const i = "data:" === t.uri.slice(0, 5) ? t.uri : `${this.rootUrl}/${t.uri}`;
					return fetch(i)
						.then((e) => e.arrayBuffer())
						.then((t) => {
							e[r] = t;
						});
				})
			),
			e
		);
	}
	parseNodes() {
		this.nodes = this?.json?.nodes?.map((e) => {
			const t = new mn();
			if ((this.parseNodeTRS(t, e), e.name && (t.name = e.name), null != e.mesh)) {
				let r,
					i = !1;
				null != e.skin && ((r = this.json.skins[e.skin]), (i = !0)),
					this.meshes[e.mesh].primitives.forEach((e, n, s) => {
						const a = i && e.type == Z.Mesh ? new pn(e.geometry, e.material) : e;
						i &&
							e.type == Z.Mesh &&
							((s[n] = a),
							a.setSkinData({
								inverseBindMatrices: this.getAccessor(r.inverseBindMatrices).getMat4Array(),
								joints: r.joints
							})),
							t.add(a);
					});
			}
			return t;
		});
	}
	parseNodeTRS(e, t) {
		let { matrix: r, rotation: i, translation: n, scale: s } = t;
		if (r) {
			const e = new pt(),
				t = new He(),
				a = new He(),
				o = new Yt();
			pt.fromColumnMajorArray(r, e),
				pt.getScale(e, t),
				pt.getTranslation(e, a),
				pt.getRotation(e, o),
				(i = o.toArray()),
				(n = a.toArray()),
				(s = t.toArray());
		}
		return (
			i && e.quaternion.set(i[0], i[1], i[2], i[3]),
			n && e.position.set(n[0], n[1], n[2]),
			s && e.scale.set(s[0], s[1], s[2]),
			e
		);
	}
	normalizeData() {
		this?.nodes?.map?.((e, t) => {
			this.json?.nodes[t]?.children?.map((t) => {
				const r = this.nodes[t];
				e.add(r);
			});
		}),
			this.meshes.map((e) => {
				e.primitives.map((e) => {
					e.type == Z.SkinMesh && (e.joints = e.joints.map((e) => this.nodes[e]));
				});
			});
	}
}
async function Mn(e) {
	let t;
	const r = e.split(".").pop(),
		i = e.substring(0, e.lastIndexOf("/"));
	if ("gltf" === r) {
		const r = await fetch(e).then((e) => e.json());
		t = new En(r, i, 0);
	} else {
		const r = await fetch(e).then((e) => e.arrayBuffer()),
			n = new Uint32Array(r, 12, 1)[0],
			s = new Uint8Array(r, 20, n),
			a = JSON.parse(new TextDecoder("utf-8").decode(s));
		t = new En(a, i, 28 + n, r);
	}
	return await t.parseData(), t;
}
async function _n(e) {
	const t = document.createElement("img");
	(t.src = e), await t.decode();
	const r = await createImageBitmap(t);
	return new Ae({ size: { width: r.width, height: r.height, depth: 1 }, data: { source: r }, format: "rgba8unorm" });
}
class Un {
	constructor(e = 1, t = 0, r = 0) {
		return (this.radius = e), (this.phi = t), (this.theta = r), this;
	}
	set(e, t, r) {
		return (this.radius = e), (this.phi = t), (this.theta = r), this;
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
	setFromCartesianCoords(e, t, r) {
		return (
			(this.radius = Math.sqrt(e * e + t * t + r * r)),
			0 === this.radius
				? ((this.theta = 0), (this.phi = 0))
				: ((this.theta = Math.atan2(e, r)), (this.phi = Math.acos(Pe.clamp(t / this.radius, -1, 1)))),
			this
		);
	}
	clone() {
		return new Un(this.radius, this.phi, this.theta);
	}
}
const Ln = { type: "change" },
	An = { type: "start" },
	Cn = { type: "end" };
class Dn extends qi {
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
			(this.target = new He()),
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
			(this.mouseButtons = { LEFT: Kn.ROTATE, MIDDLE: Kn.DOLLY, RIGHT: Kn.PAN }),
			(this.touches = { ONE: Qn.ROTATE, TWO: Qn.DOLLY_PAN }),
			(this.target0 = this.target.clone()),
			(this.position0 = this.object.position.clone()),
			(this.zoom0 = this.object.zoom),
			(this._domElementKeyEvents = null);
		const r = this;
		(this.update = (function () {
			const e = new He(),
				t = new Yt().setFromUnitVectors(r.object.up, new He(0, 1, 0)),
				i = t.clone().invert(),
				n = new He(),
				s = new Yt(),
				a = 2 * Math.PI;
			return function () {
				const o = r.object.position;
				e.copy(o).subtract(r.target),
					e.applyQuaternion(t),
					Pn.setFromVector3(e),
					r.autoRotate && In === Rn.NONE && Jn(r.getAutoRotationAngle()),
					r.enableDamping
						? ((Pn.theta += On.theta * r.dampingFactor), (Pn.phi += On.phi * r.dampingFactor))
						: ((Pn.theta += On.theta), (Pn.phi += On.phi));
				let c = r.minAzimuthAngle,
					h = r.maxAzimuthAngle;
				return (
					isFinite(c) &&
						isFinite(h) &&
						(c < -Math.PI ? (c += a) : c > Math.PI && (c -= a),
						h < -Math.PI ? (h += a) : h > Math.PI && (h -= a),
						(Pn.theta =
							c <= h
								? Math.max(c, Math.min(h, Pn.theta))
								: Pn.theta > (c + h) / 2
								? Math.max(c, Pn.theta)
								: Math.min(h, Pn.theta))),
					(Pn.phi = Math.max(r.minPolarAngle, Math.min(r.maxPolarAngle, Pn.phi))),
					Pn.makeSafe(),
					(Pn.radius *= Bn),
					(Pn.radius = Math.max(r.minDistance, Math.min(r.maxDistance, Pn.radius))),
					!0 === r.enableDamping ? r.target.addScaledVector(Nn, r.dampingFactor) : r.target.add(Nn),
					He.fromSpherical(Pn, e),
					e.applyQuaternion(i),
					o.copy(r.target).add(e),
					r.object.lookAt(r.target.x, r.target.y, r.target.z),
					!0 === r.enableDamping
						? ((On.theta *= 1 - r.dampingFactor),
						  (On.phi *= 1 - r.dampingFactor),
						  He.multiplyByScalar(Nn, 1 - r.dampingFactor, Nn))
						: (On.set(0, 0, 0), Nn.set(0, 0, 0)),
					(Bn = 1),
					!!(
						Vn ||
						He.distanceSquared(n, r.object.position) > zn ||
						8 * (1 - s.dot(r.object.quaternion)) > zn
					) &&
						(r.dispatchEvent(Ln),
						He.clone(r.object.position, n),
						Yt.clone(r.object.quaternion, s),
						(Vn = !1),
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
		return He.distance(this.object.position, this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this.onKeyDown), (this._domElementKeyEvents = e);
	}
	saveState() {
		He.clone(this.target, this.target0),
			He.clone(this.object.position, this.position0),
			(this.zoom0 = this.object.zoom);
	}
	reset() {
		He.clone(this.target0, this.target),
			He.clone(this.position0, this.object.position),
			(this.object.zoom = this.zoom0),
			this.object.updateProjectionMatrix(),
			this.dispatchEvent(Ln),
			this.update(),
			(In = Rn.NONE);
	}
	init() {
		const e = this,
			t = (function () {
				const e = new He();
				return function (t, r) {
					e.setFromMatrixColumn(r, 0), e.multiplyByScalar(-t), Nn.add(e);
				};
			})(),
			r = (function () {
				const t = new He();
				return function (r, i) {
					!0 === e.screenSpacePanning
						? t.setFromMatrixColumn(i, 1)
						: (t.setFromMatrixColumn(i, 0), He.cross(e.object.up, t, t)),
						t.multiplyByScalar(r),
						Nn.add(t);
				};
			})(),
			i = (function () {
				const i = new He();
				return function (n, s) {
					const a = e.domElement;
					if (e.object.isPerspectiveCamera) {
						const o = e.object.position;
						i.copy(o).subtract(e.target);
						let c = i.length();
						(c *= Math.tan(((e.object.fov / 2) * Math.PI) / 180)),
							t((2 * n * c) / a.clientHeight, e.object.modelMatrix),
							r((2 * s * c) / a.clientHeight, e.object.modelMatrix);
					} else
						e.object.isOrthographicCamera
							? (t(
									(n * (e.object.right - e.object.left)) / e.object.zoom / a.clientWidth,
									e.object.modelMatrix
							  ),
							  r(
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
					? (Bn /= e)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * e))),
					  this.object.updateProjectionMatrix(),
					  (Vn = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			s = (e) => {
				this.object.isPerspectiveCamera
					? (Bn *= e)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / e))),
					  this.object.updateProjectionMatrix(),
					  (Vn = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			a = (e) => {
				Gn.set(e.clientX, e.clientY), Be.subtract(Gn, Fn, kn), Be.multiplyByScalar(kn, this.rotateSpeed, kn);
				const t = this.domElement;
				Jn((2 * Math.PI * kn.x) / t.clientHeight),
					es((2 * Math.PI * kn.y) / t.clientHeight),
					Be.clone(Gn, Fn),
					this.update();
			},
			o = (e) => {
				Xn.set(e.clientX, e.clientY),
					Be.subtract(Xn, $n, Yn),
					Yn.y > 0 ? n(w()) : Yn.y < 0 && s(w()),
					Be.clone(Xn, $n),
					this.update();
			},
			c = (e) => {
				qn.set(e.clientX, e.clientY),
					Be.subtract(qn, Hn, jn),
					Be.multiplyByScalar(jn, this.panSpeed, jn),
					i(jn.x, jn.y),
					Be.clone(qn, Hn),
					this.update();
			},
			h = (e) => {
				e.deltaY < 0 ? s(w()) : e.deltaY > 0 && n(w()), this.update();
			},
			l = (e) => {
				let t = !1;
				switch (e.code) {
					case this.keys.UP:
						i(0, this.keyPanSpeed), (t = !0);
						break;
					case this.keys.BOTTOM:
						i(0, -this.keyPanSpeed), (t = !0);
						break;
					case this.keys.LEFT:
						i(this.keyPanSpeed, 0), (t = !0);
						break;
					case this.keys.RIGHT:
						i(-this.keyPanSpeed, 0), (t = !0);
				}
				t && (e.preventDefault(), this.update());
			},
			u = () => {
				this.enableZoom && hs(), this.enablePan && cs();
			},
			d = () => {
				this.enableZoom && hs(), this.enableRotate && os();
			},
			f = (e) => {
				if (1 == Wn.length) Gn.set(e.pageX, e.pageY);
				else {
					const t = is(e),
						r = 0.5 * (e.pageX + t.x),
						i = 0.5 * (e.pageY + t.y);
					Gn.set(r, i);
				}
				Be.subtract(Gn, Fn, kn), Be.multiplyByScalar(kn, this.rotateSpeed, kn);
				const t = this.domElement;
				Jn((2 * Math.PI * kn.x) / t.clientHeight), es((2 * Math.PI * kn.y) / t.clientHeight), Be.clone(Gn, Fn);
			},
			m = (e) => {
				if (1 === Wn.length) qn.set(e.pageX, e.pageY);
				else {
					const t = is(e),
						r = 0.5 * (e.pageX + t.x),
						i = 0.5 * (e.pageY + t.y);
					qn.set(r, i);
				}
				Be.subtract(qn, Hn, jn), Be.multiplyByScalar(jn, this.panSpeed, jn), i(jn.x, jn.y), Be.clone(qn, Hn);
			},
			p = (e) => {
				const t = is(e),
					r = e.pageX - t.x,
					i = e.pageY - t.y,
					s = Math.sqrt(r * r + i * i);
				Xn.set(0, s), Yn.set(0, Math.pow(Xn.y / $n.y, this.zoomSpeed)), n(Yn.y), Be.clone(Xn, $n);
			},
			g = (e) => {
				this.enableZoom && p(e), this.enablePan && m(e);
			},
			x = (e) => {
				this.enableZoom && p(e), this.enableRotate && f(e);
			};
		(this.onPointerDown = (e) => {
			!1 !== this.enabled &&
				(0 === Wn.length &&
					(this.domElement.setPointerCapture(e.pointerId),
					this.domElement.addEventListener("pointermove", this.onPointerMove),
					this.domElement.addEventListener("pointerup", this.onPointerUp)),
				(function (e) {
					Wn.push(e);
				})(e),
				"touch" === e.pointerType ? S(e) : v(e));
		}),
			(this.onPointerMove = (e) => {
				!1 !== this.enabled && ("touch" === e.pointerType ? b(e) : y(e));
			}),
			(this.onPointerUp = (e) => {
				ts(e),
					0 === Wn.length &&
						(this.domElement.releasePointerCapture(e.pointerId),
						this.domElement.removeEventListener("pointermove", this.onPointerMove),
						this.domElement.removeEventListener("pointerup", this.onPointerUp)),
					this.dispatchEvent(Cn),
					(In = Rn.NONE);
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
					case Kn.DOLLY:
						if (!1 === this.enableZoom) return;
						!(function (e) {
							$n.set(e.clientX, e.clientY);
						})(e),
							(In = Rn.DOLLY);
						break;
					case Kn.ROTATE:
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							if (!1 === this.enablePan) return;
							ss(e), (In = Rn.PAN);
						} else {
							if (!1 === this.enableRotate) return;
							ns(e), (In = Rn.ROTATE);
						}
						break;
					case Kn.PAN:
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							if (!1 === this.enableRotate) return;
							ns(e), (In = Rn.ROTATE);
						} else {
							if (!1 === this.enablePan) return;
							ss(e), (In = Rn.PAN);
						}
						break;
					default:
						In = Rn.NONE;
				}
				In !== Rn.NONE && this.dispatchEvent(An);
			},
			y = (e) => {
				switch (In) {
					case Rn.ROTATE:
						if (!1 === this.enableRotate) return;
						a(e);
						break;
					case Rn.DOLLY:
						if (!1 === this.enableZoom) return;
						o(e);
						break;
					case Rn.PAN:
						if (!1 === this.enablePan) return;
						c(e);
				}
			};
		(this.onMouseWheel = (e) => {
			!1 !== this.enabled &&
				!1 !== this.enableZoom &&
				In === Rn.NONE &&
				(e.preventDefault(), this.dispatchEvent(An), h(e), this.dispatchEvent(Cn));
		}),
			(this.onKeyDown = (e) => {
				!1 !== this.enabled && !1 !== this.enablePan && l(e);
			});
		const S = (e) => {
				switch ((rs(e), Wn.length)) {
					case 1:
						switch (this.touches.ONE) {
							case Qn.ROTATE:
								if (!1 === this.enableRotate) return;
								os(), (In = Rn.TOUCH_ROTATE);
								break;
							case Qn.PAN:
								if (!1 === this.enablePan) return;
								cs(), (In = Rn.TOUCH_PAN);
								break;
							default:
								In = Rn.NONE;
						}
						break;
					case 2:
						switch (this.touches.TWO) {
							case Qn.DOLLY_PAN:
								if (!1 === this.enableZoom && !1 === this.enablePan) return;
								u(), (In = Rn.TOUCH_DOLLY_PAN);
								break;
							case Qn.DOLLY_ROTATE:
								if (!1 === this.enableZoom && !1 === this.enableRotate) return;
								d(), (In = Rn.TOUCH_DOLLY_ROTATE);
								break;
							default:
								In = Rn.NONE;
						}
						break;
					default:
						In = Rn.NONE;
				}
				In !== Rn.NONE && this.dispatchEvent(An);
			},
			b = (e) => {
				switch ((rs(e), In)) {
					case Rn.TOUCH_ROTATE:
						if (!1 === this.enableRotate) return;
						f(e), this.update();
						break;
					case Rn.TOUCH_PAN:
						if (!1 === this.enablePan) return;
						m(e), this.update();
						break;
					case Rn.TOUCH_DOLLY_PAN:
						if (!1 === this.enableZoom && !1 === this.enablePan) return;
						g(e), this.update();
						break;
					case Rn.TOUCH_DOLLY_ROTATE:
						if (!1 === this.enableZoom && !1 === this.enableRotate) return;
						x(e), this.update();
						break;
					default:
						In = Rn.NONE;
				}
			};
		(this.onContextMenu = (e) => {
			!1 !== this.enabled && e.preventDefault();
		}),
			(this.getAutoRotationAngle = () => ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed);
		const w = () => Math.pow(0.95, this.zoomSpeed);
		this.domElement.addEventListener("contextmenu", this.onContextMenu),
			this.domElement.addEventListener("pointerdown", this.onPointerDown),
			this.domElement.addEventListener("pointercancel", as),
			this.domElement.addEventListener("wheel", this.onMouseWheel, { passive: !1 });
	}
	dispose() {
		this.domElement.removeEventListener("contextmenu", this.onContextMenu),
			this.domElement.removeEventListener("pointerdown", this.onPointerDown),
			this.domElement.removeEventListener("pointercancel", as),
			this.domElement.removeEventListener("wheel", this.onMouseWheel),
			this.domElement.removeEventListener("pointermove", this.onPointerMove),
			this.domElement.removeEventListener("pointerup", this.onPointerUp),
			null !== this._domElementKeyEvents &&
				this._domElementKeyEvents.removeEventListener("keydown", this.onKeyDown);
	}
}
const Rn = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
};
let In = Rn.NONE;
const zn = 1e-6,
	Pn = new Un(),
	On = new Un();
let Bn = 1;
const Nn = new He();
let Vn = !1;
const Fn = new Be(),
	Gn = new Be(),
	kn = new Be(),
	Hn = new Be(),
	qn = new Be(),
	jn = new Be(),
	$n = new Be(),
	Xn = new Be(),
	Yn = new Be(),
	Wn = [],
	Zn = {};
var Kn, Qn;
function Jn(e) {
	On.theta -= e;
}
function es(e) {
	On.phi -= e;
}
function ts(e) {
	delete Zn[e.pointerId];
	for (let t = 0; t < Wn.length; t++) if (Wn[t].pointerId == e.pointerId) return void Wn.splice(t, 1);
}
function rs(e) {
	let t = Zn[e.pointerId];
	void 0 === t && ((t = new Be()), (Zn[e.pointerId] = t)), t.set(e.pageX, e.pageY);
}
function is(e) {
	const t = e.pointerId === Wn[0].pointerId ? Wn[1] : Wn[0];
	return Zn[t.pointerId];
}
function ns(e) {
	Fn.set(e.clientX, e.clientY);
}
function ss(e) {
	Hn.set(e.clientX, e.clientY);
}
function as(e) {
	ts(e);
}
function os() {
	if (1 === Wn.length) Fn.set(Wn[0].pageX, Wn[0].pageY);
	else {
		const e = 0.5 * (Wn[0].pageX + Wn[1].pageX),
			t = 0.5 * (Wn[0].pageY + Wn[1].pageY);
		Fn.set(e, t);
	}
}
function cs() {
	if (1 === Wn.length) Hn.set(Wn[0].pageX, Wn[0].pageY);
	else {
		const e = 0.5 * (Wn[0].pageX + Wn[1].pageX),
			t = 0.5 * (Wn[0].pageY + Wn[1].pageY);
		Hn.set(e, t);
	}
}
function hs() {
	const e = Wn[0].pageX - Wn[1].pageX,
		t = Wn[0].pageY - Wn[1].pageY,
		r = Math.sqrt(e * e + t * t);
	$n.set(0, r);
}
!(function (e) {
	(e[(e.LEFT = 0)] = "LEFT"),
		(e[(e.MIDDLE = 1)] = "MIDDLE"),
		(e[(e.RIGHT = 2)] = "RIGHT"),
		(e[(e.ROTATE = 0)] = "ROTATE"),
		(e[(e.DOLLY = 1)] = "DOLLY"),
		(e[(e.PAN = 2)] = "PAN");
})(Kn || (Kn = {})),
	(function (e) {
		(e[(e.ROTATE = 0)] = "ROTATE"),
			(e[(e.PAN = 1)] = "PAN"),
			(e[(e.DOLLY_PAN = 2)] = "DOLLY_PAN"),
			(e[(e.DOLLY_ROTATE = 3)] = "DOLLY_ROTATE");
	})(Qn || (Qn = {}));
export {
	l as AddressMode,
	Xi as AmbientLight,
	De as Attachment,
	We as Attribute,
	bi as Axes,
	rt as BindGroup,
	it as BindGroupEntity,
	E as BlendFactor,
	M as BlendOperation,
	Gi as BlinnPhongMaterial,
	on as BloomPostEffect,
	Ni as BoxGeometry,
	G as Buffer,
	i as BufferUsage,
	zr as Color,
	T as ColorWriteFlags,
	d as CompareFunction,
	Le as Context,
	Mi as CubeTextureLoader,
	w as CullMode,
	Wi as DirectionalLight,
	Y as DrawCommand,
	u as FilterMode,
	b as FrontFace,
	U as IndexFormat,
	A as InputStepMode,
	Li as Instance,
	Ai as InstanceMesh,
	Ze as InterleavedAttribute,
	Qe as InterleavedFloat32Attribute,
	vi as Mesh,
	Di as Model,
	Dn as OrbitControl,
	Tr as OrthographicCamera,
	ki as PbrMaterial,
	cn as PerspectiveCamera,
	Xt as PlaneGeometry,
	Pi as PointGeometry,
	fn as PointLight,
	Hi as PointMaterial,
	Oi as Points,
	S as PrimitiveTopology,
	ve as RenderState,
	nt as RenderTarget,
	Ce as Sampler,
	sn as Scene,
	gi as ShaderMaterial,
	f as ShaderStage,
	yi as ShadowMapDebugger,
	Ui as SkyBox,
	Bi as SphereGeometry,
	ln as SpotLight,
	zi as Sprite,
	_ as StencilOperation,
	x as StorageTextureAccess,
	Ae as Texture,
	c as TextureAspect,
	s as TextureDimension,
	h as TextureFormat,
	g as TextureSampleType,
	a as TextureUsage,
	o as TextureViewDimension,
	Vi as TorusKnotGeometry,
	He as Vector3,
	L as VertexFormat,
	Mn as loadGLTF,
	_n as loadTexture
};
