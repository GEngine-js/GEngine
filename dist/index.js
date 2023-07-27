var e,
	t,
	i,
	r,
	n,
	s,
	a,
	o,
	l,
	c,
	h,
	u,
	f,
	d,
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
	U,
	_,
	L,
	A,
	R,
	C,
	D,
	I,
	z,
	P,
	N,
	O,
	B,
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
	})(l || (l = {})),
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
	})(c || (c = {})),
	(function (e) {
		(e.ClampToEdge = "clamp-to-edge"), (e.Repeat = "repeat"), (e.MirrorRepeat = "mirror-repeat");
	})(h || (h = {})),
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
	})(f || (f = {})),
	(function (e) {
		(e[(e.Vertex = 1)] = "Vertex"), (e[(e.Fragment = 2)] = "Fragment"), (e[(e.Compute = 4)] = "Compute");
	})(d || (d = {})),
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
	})(U || (U = {})),
	(function (e) {
		(e.Uint16 = "uint16"), (e.Uint32 = "uint32");
	})(_ || (_ = {})),
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
	})(R || (R = {})),
	(function (e) {
		(e.Beginning = "beginning"), (e.End = "end");
	})(C || (C = {})),
	(function (e) {
		(e.Load = "load"), (e.Clear = "clear");
	})(D || (D = {})),
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
	})(N || (N = {})),
	(function (e) {
		(e.OutOfMemory = "out-of-memory"), (e.Validation = "validation");
	})(O || (O = {})),
	(function (e) {
		(e[(e.Red = 1)] = "Red"),
			(e[(e.Green = 2)] = "Green"),
			(e[(e.Blue = 4)] = "Blue"),
			(e[(e.Alpha = 8)] = "Alpha"),
			(e[(e.All = 15)] = "All");
	})(B || (B = {})),
	(function (e) {
		(e.Shadow = "shadow"), (e.Pick = "pick");
	})(V || (V = {})),
	(function (e) {
		(e[(e.OUTSIDE = -1)] = "OUTSIDE"), (e[(e.INTERSECTING = 0)] = "INTERSECTING"), (e[(e.INSIDE = 1)] = "INSIDE");
	})(F || (F = {}));
class G {
	constructor(e, t, i, r, n) {
		(this.device = t),
			(this.usage = i),
			(this.data = r),
			(this.size = null != n ? (n + 3) & -4 : (r.byteLength + 3) & -4),
			(this.gpuBuffer = t.createBuffer({ label: e || "", size: this.size, usage: i })),
			r && this.setSubData(0, r, this.size);
	}
	static create(e, t, i, r, n) {
		return new G(e, t, i, r, n);
	}
	static createVertexBuffer(e, t, i) {
		return new G(e, t, r.Vertex | r.CopyDst, i, i.byteLength);
	}
	static createIndexBuffer(e, t, i) {
		return new G(e, t, r.Index | r.CopyDst, i);
	}
	static createUniformBuffer(e, t, i, r) {
		return new G(e, t, r, null, i);
	}
	static createStorageBuffer(e, t, i, n = r.Storage) {
		return new G(e, t, n, null, i);
	}
	setSubData(e, t, i) {
		const r = t.buffer,
			n = i ?? r.byteLength,
			s = this.device.createBuffer({ mappedAtCreation: !0, size: n, usage: GPUBufferUsage.COPY_SRC }),
			a = s.getMappedRange();
		new Uint16Array(a).set(new Uint16Array(r)), s.unmap(), this.copyToBuffer(s, e, n), s.destroy();
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
const k = new Map();
class H {
	constructor(e, t, i = [], r) {
		(this.groupLayouts = i),
			(this.index = r || 0),
			(this.gpuPipelineLayout = e.createPipelineLayout({
				label: t,
				bindGroupLayouts: i.map((e) => e.gpuBindGroupLayout)
			}));
	}
	static getPipelineLayoutFromCache(e, t, i) {
		if (k.has(t)) return k.get(t);
		{
			const r = new H(e, t, i);
			return k.set(t, r), r;
		}
	}
}
const q = new Map(),
	j = new Map();
class $ {
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
			a = X(n.uid.concat(s)),
			o = i?.filter((e) => null != e)?.sort((e, t) => e.index - t.index);
		let l = q.get(a);
		if (!l) {
			const i = $.getPipelineDescriptor(e, t, r, o, a.toString());
			(l = new $("render", e, i)), q.set(a, l);
		}
		return l;
	}
	static getComputePipelineFromCache(e, t, i) {
		const { shaderSource: r } = t,
			n = X(r.uid);
		let s = j.get(n);
		return (
			s ||
				((s = new $("compute", e, {
					layout: H.getPipelineLayoutFromCache(e, n.toString(), i).gpuPipelineLayout,
					compute: { module: r.getShaderModule(e).compute, entryPoint: r?.compute?.computeMain || "main" }
				})),
				j.set(n, s)),
			s
		);
	}
	static getPipelineDescriptor(e, t, i, r, n) {
		const { vertexBuffers: s, shaderSource: a } = t,
			{ vert: o, frag: l } = a.getShaderModule(e),
			c = { layout: H.getPipelineLayoutFromCache(e, n, r).gpuPipelineLayout };
		return (
			o &&
				(c.vertex = {
					module: o,
					entryPoint: a?.render?.vertMain || "main",
					buffers: s.map((e) => e.getBufferDes())
				}),
			i.primitive && (c.primitive = i.primitive.getGPUPrimitiveDec()),
			i.depthStencil && (c.depthStencil = i.depthStencil.getGPUDepthStencilDec()),
			i.multisample && (c.multisample = i.multisample.getMultiSampleDec()),
			l &&
				(c.fragment = {
					module: l,
					entryPoint: a?.render?.fragMain || "main",
					targets: i.targets.map((e) => e.getGPUTargetDec())
				}),
			c
		);
	}
}
function X(e) {
	let t = 0;
	if (0 == e.length) return t;
	for (let i = 0; i < e.length; i++) {
		(t = (t << 5) - t + e.charCodeAt(i)), (t &= t);
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
		const { device: t, passEncoder: i, camera: r, querySet: n, viewPort: s, scissorTest: a } = e || {},
			{
				shaderData: o,
				renderState: l,
				vertexBuffers: c,
				indexBuffer: h,
				lightShaderData: u,
				shaderSource: f,
				renderTarget: d,
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
			M = d?.beginRenderPass?.(t) ?? i,
			U = Object.assign({}, u?.defines ?? {}, r?.shaderData?.defines ?? {});
		o?.bind?.(t, M),
			r?.shaderData?.bind(t, M),
			m && u?.bind?.(t, M),
			l?.bind?.({ passEncoder: M, viewPort: s, scissorTest: a }),
			c?.forEach?.((e) => e?.bind?.(t, M)),
			h?.bind?.(t, M),
			f?.setDefines?.(U);
		const _ = $.getRenderPipelineFromCache(t, this, [o?.groupLayout, u?.groupLayout, r?.shaderData?.groupLayout]);
		null != x && n?.beginQuery(M, x),
			_.bind(M),
			h
				? g
					? M.drawIndexedIndirect(g.gpuBuffer, p || 0)
					: M.drawIndexed(y, b, w, S, T)
				: y && (g ? M.drawIndirect(g.gpuBuffer, p) : M.draw(y, b, E, T)),
			null != x && n?.endQuery(M),
			d?.endRenderPass?.();
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
			(e.UniformStructArray = "StructArray");
	})(Q || (Q = {})),
	(function (e) {
		(e.WGSL = "wgsl"), (e.GLSL = "glsl");
	})(J || (J = {})),
	(function (e) {
		(e.VERT = "vertex"), (e.FRAG = "fragment"), (e.COMPUTE = "compute");
	})(ee || (ee = {}));
const te = /#([^\s]*)(\s*)/gm;
function ie(e, ...t) {
	const i = [];
	let r = { frag: "", elseIsValid: !1, expression: !0 },
		n = 1;
	for (let s = 0; s < e.length; ++s) {
		const a = e[s],
			o = a.matchAll(te);
		let l = 0,
			c = !1;
		for (const e of o) {
			switch (((r.frag += a.substring(l, e.index)), e[1])) {
				case "if":
					if (e.index + e[0].length != a.length)
						throw new Error("#if must be immediately followed by a template expression (ie: ${value})");
					(c = !0), i.push(r), n++, (r = { frag: "", elseIsValid: !0, expression: !!t[s] });
					break;
				case "elif":
					if (e.index + e[0].length != a.length)
						throw new Error("#elif must be immediately followed by a template expression (ie: ${value})");
					if (!r.elseIsValid) throw new Error("#elif not preceeded by an #if or #elif");
					(c = !0),
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
			l = e.index + e[0].length;
		}
		l != a.length && (r.frag += a.substring(l, a.length)), !c && t.length > s && (r.frag += t[s]);
	}
	if (i.length) throw new Error("Mismatched #if/#endif count");
	return r.frag;
}
var re =
	"\n    struct VertexInput {\n         @location(positionLocation) position: vec2<f32>,       \n    }\n    struct VertexOutput {\n         @builtin(position) position: vec4<f32>,\n         @location(0) uv: vec2<f32>,\n     };\n    @vertex\n    fn main(input: VertexInput) -> VertexOutput {\n     var output:VertexOutput;\n     output.uv = input.position * 0.5 + 0.5;\n     output.position = vec4<f32>(input.position, 0.0, 1.0);;\n     return output;\n    }\n    ";
const ne = {
	light: " \n    struct ReflectedLight {\n        ambient: vec3<f32>,\n        directDiffuse:vec3<f32>,\n        directSpecular:vec3<f32>,\n        indirectDiffuse:vec3<f32>,\n        indirectSpecular:vec3<f32>,\n        testColor: vec3<f32>,\n    }; \n    struct IncidentLight {\n        color: vec3<f32>,\n        direction: vec3<f32>,\n        visible: bool,\n    };\n    struct Geometry {\n        position: vec3<f32>,\n        normal: vec3<f32>,\n        viewDir: vec3<f32>,\n        dotNV:f32,\n        #if USE_CLEARCOAT\n            vec3 clearcoatNormal;\n        #endif\n    };\n\n    #if USE_SPOTLIGHT\n        struct SpotLight {\n            position: vec3<f32>,\n            distance: f32,\n            direction: vec3<f32>,\n            coneCos: f32,\n            color: vec3<f32>,\n            penumbraCos: f32,\n            decay: f32,\n        };\n        fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{\n                var direction:vec3<f32> = spotLight.position - worldPos;\n                var lightColor:ReflectedLight;\n                let lightDistance:f32 = length(direction);\n                direction = normalize(direction);\n                let angleCos:f32 = dot( direction, spotLight.direction );\n                let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, spotLight.decay), 0.0, 1.0);\n                let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\n                let decayTotal:f32 = decay * spotEffect;\n                let d:f32 = max( dot( n, direction ), 0.0 )  * decayTotal;\n                lightColor.directDiffuse= spotLight.color * d;\n                let halfDir:vec3<f32> = normalize( v + direction );\n                let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;\n                lightColor.directSpecular= spotLight.color * s;\n                return lightColor;\n        }\n        fn getSpotLightIncidentLight(spotLight:SpotLight, geometry:Geometry)->IncidentLight {\n            var incidentLight:IncidentLight;\n            let lVector:vec3<f32> = spotLight.position - geometry.position;\n            incidentLight.direction = normalize( lVector );\n    \n            let lightDistance:f32 = length( lVector );\n            let angleCos:f32 = dot( incidentLight.direction, spotLight.direction );\n    \n            let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\n            let decayEffect:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);\n    \n            incidentLight.color=spotLight.color*spotEffect * decayEffect; \n            return  incidentLight;\n        }\n\n    #endif \n\n    #if USE_POINTLIGHT\n        struct PointLight {\n            position: vec3<f32>,\n            distance: f32,\n            color: vec3<f32>,\n            decay: f32,\n        };\n        fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{\n            var lightColor:ReflectedLight;\n            var direction:vec3<f32> = worldPos - pointLight.position;\n            let dist:f32 = length( direction );\n            direction = normalize(direction);\n            let decay = clamp(1.0 - pow(dist / pointLight.distance, pointLight.decay), 0.0, 1.0);\n    \n            let d =  max( dot( n, -direction ), 0.0 ) * decay;\n            lightColor.directDiffuse = pointLight.color * d;\n    \n            let halfDir:vec3<f32> = normalize( v - direction );\n            let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess )  * decay;\n            lightColor.directSpecular = pointLight.color * s;\n            return lightColor;\n        }\n        fn getPointLightIncidentLight(pointLight:PointLight, geometry:Geometry)->IncidentLight {\n            var incidentLight:IncidentLight;\n            let lVector:vec3<f32> = pointLight.position-geometry.position;\n            incidentLight.direction= normalize( lVector );\n            let lightDistance:f32 = length( lVector );\n            // let weight:f32=1.0 - pow(lightDistance/pointLight.distance, 4.0);\n            incidentLight.color=pointLight.color*clamp(1.0 - pow(lightDistance/pointLight.distance, 4.0), 0.0, 1.0);\n            return incidentLight;\n        }\n    #endif\n    #if USE_DIRTECTLIGHT\n        struct DirectionalLight {\n            direction: vec3<f32>,\n            color: vec3<f32>,\n        };\n        fn getDirectLightInfo(directionalLight:DirectionalLight,shininess:f32,n:vec3<f32>,v:vec3<f32>)->ReflectedLight{\n            var lightColor:ReflectedLight;\n            let d:f32 = max(dot(n, -directionalLight.direction), 0.0);\n            lightColor.directDiffuse += directionalLight.color * d;\n    \n            let halfDir:vec3<f32> = normalize( v - directionalLight.direction );\n            let s:f32 = pow( clamp( dot( n, halfDir ), 0.0, 1.0 ), shininess );\n            lightColor.directSpecular += directionalLight.color * s;\n            return lightColor;\n        }\n        fn getDirectionalDirectLightIncidentLight(directionalLight:DirectionalLight,geometry:Geometry)->IncidentLight {\n            var incidentLight:IncidentLight;\n            incidentLight.color = directionalLight.color;\n            incidentLight.direction = normalize(directionalLight.direction);\n            return incidentLight;         \n        }\n    #endif\n\n    #if OPEN_SHADOW \n        struct LightInfo {\n            direction: vec3<f32>,\n            viewport: vec4<f32>,\n        };\n        \n        fn linearizeDepth(depth: f32, near: f32, far: f32)->f32 {\n            return 2 * (near * far) / (far + near - depth * (far - near));\n        }\n\n        fn getCubeFace(v : vec3<f32>) -> i32{\n            let vAbs = abs(v);\n        \n            if (vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {\n              if (v.z < 0.0) {\n                return 3;\n              }\n              return 2;\n            }\n        \n            if (vAbs.y >= vAbs.x) {\n              if (v.y < 0.0) {\n                return 5;\n              }\n              return 4;\n            }\n        \n            if (v.x < 0.0) {\n              return 1;\n            }\n            return 0;\n        }\n\n        fn getShadowValue(shadowMapArray:texture_depth_2d_array, shadowSampler:sampler_comparison, lightPos:vec4<f32>, geometry:Geometry, lightInfo:LightInfo, index:u32, isPointLight: bool, near: f32, far: f32)->f32 {\n            var visibility = 0.0;\n            var projectPos: vec3<f32> = lightPos.xyz / lightPos.w;\n            var shadowPos: vec3<f32> = vec3(projectPos.xy * vec2(0.5, -0.5) + vec2(0.5), projectPos.z);\n            var d:f32 = dot(geometry.normal, -lightInfo.direction);\n            var bias = max(0.012 * (1.0 - d), 0.001) / lightPos.w;\n            let oneOverShadowDepthTextureSize = 1.0 / 1024.0;\n            // var depth = select(shadowPos.z, (linearizeDepth(shadowPos.z, near, far) - near) / (far- near), isPerspectiveCamera);\n            var depth = shadowPos.z;\n\n            if (isPointLight) {\n                shadowPos.x = shadowPos.x * lightInfo.viewport.z;\n                shadowPos.y = shadowPos.y * lightInfo.viewport.w;\n                var viewportX = lightInfo.viewport.x * lightInfo.viewport.z;\n                var viewportY = lightInfo.viewport.y * lightInfo.viewport.w;\n                var uvOffset = 1.5 / 1024.0;\n                shadowPos.x = clamp(shadowPos.x + viewportX, viewportX + uvOffset, viewportX + lightInfo.viewport.z - uvOffset);\n                shadowPos.y = clamp(shadowPos.y + viewportY, viewportY + uvOffset, viewportY + lightInfo.viewport.w - uvOffset);\n            }\n\n            for (var y = -1; y <= 1; y++) {\n                for (var x = -1; x <= 1; x++) {\n                    let offset = vec2<f32>(vec2(x, y)) * oneOverShadowDepthTextureSize;\n                \n                    visibility += textureSampleCompare(\n                        shadowMapArray, shadowSampler,\n                        shadowPos.xy + offset, index, depth - bias);\n                }\n            }\n            visibility /= 9.0;\n            var inFrustum = shadowPos.x >= 0.0 && shadowPos.x <= 1.0 && shadowPos.y >= 0.0 && shadowPos.y <= 1.0;\n            if (!inFrustum || depth > 1.0) {\n                visibility = 1.0;\n            }\n            return visibility;\n        }\n    #endif\n\n    #if USE_AMBIENTLIGHT||USE_SPOTLIGHT||USE_POINTLIGHT||USE_DIRTECTLIGHT\n        struct LightUniforms{\n            #if USE_AMBIENTLIGHT\n                ambient:vec4<f32>,\n            #endif\n            #if USE_SPOTLIGHT\n                spotLights:array<SpotLight,spotLightsCount>,\n            #endif\n            #if USE_POINTLIGHT\n                pointLights:array<PointLight,pointLightsCount>,\n            #endif\n            #if USE_DIRTECTLIGHT\n                dirtectLights:array<DirectionalLight,dirtectLightsCount>,\n            #endif\n        }\n        @group(2) @binding(lightBinding) var<storage, read> lightUniforms: LightUniforms;\n\n        #if OPEN_SHADOW\n            #if USE_SPOTLIGHT_SHADOWMAP\n                struct SpotLightShadow {\n                    shadowCameraVPMatrix: mat4x4<f32>,\n                    shadowCameraNear: f32,\n                    shadowCameraFar: f32\n                }\n            #endif\n            #if USE_POINTLIGHT_SHADOWMAP\n                struct PointLightShadow {\n                    shadowCameraVPMatrixArray: array<mat4x4<f32>, 6>,\n                    shadowCameraViewportArray: array<vec4<f32>, 6>,\n                    shadowCameraNear: f32,\n                    shadowCameraFar: f32,\n                    // shadowCameraVPMatrix: mat4x4<f32>,\n                    // shadowCameraVPMatrixArray: array<mat4x4<f32>, 6>,\n                    // shadowCameraViewportArray: array<vec4<f32>, 6>,\n                }\n            #endif\n            #if USE_DIRECTLIGHT_SHADOWMAP\n                struct DirectLightShadow {\n                    shadowCameraVPMatrix: mat4x4<f32>,\n                }\n            #endif\n            struct ShadowUniforms{\n                #if USE_SPOTLIGHT_SHADOWMAP\n                    spotLightShadows:array<SpotLightShadow,spotLightShadowMapsCount>,\n                #endif\n                #if USE_POINTLIGHT_SHADOWMAP\n                    pointLightShadows:array<PointLightShadow,pointLightShadowMapsCount>,\n                #endif\n                #if USE_DIRECTLIGHT_SHADOWMAP\n                    directLightShadows:array<DirectLightShadow,directLightShadowMapsCount>,\n                #endif\n            }\n            @group(2) @binding(shadowBinding) var<storage, read> shadowUniforms: ShadowUniforms;\n\n            #if SPOTLIGHT_SHADOWMAP_TEXTUREARRAY\n                @group(2) @binding(spotLightShadowMapTextureArrayBinding) var spotLightShadowMapTextureArray: texture_depth_2d_array;\n            #endif\n            #if POINTLIGHT_SHADOWMAP_TEXTUREARRAY\n                @group(2) @binding(pointLightShadowMapTextureArrayBinding) var pointLightShadowMapTextureArray: texture_depth_2d_array;\n            #endif\n            #if DIRECTLIGHT_SHADOWMAP_TEXTUREARRAY\n                @group(2) @binding(directLightShadowMapTextureArrayBinding) var directLightShadowMapTextureArray: texture_depth_2d_array;\n            #endif\n            @group(2) @binding(shadowSamplerBinding) var shadowSampler: sampler_comparison;\n        #endif\n\n    #endif\n    #if MATERIAL_PHONG\n        fn parseLights(geometry:Geometry,shininess:f32)->ReflectedLight {\n    #elif MATERIAL_PBR\n        fn parseLights(geometry:Geometry,material:PhysicalMaterial)->ReflectedLight{\n    #endif\n        var reflectedLight:ReflectedLight;\n        var shadowValue:f32 = 1.0;\n        #if USE_AMBIENTLIGHT\n            //处理环境光\n            var ambientColor:vec3<f32> = lightUniforms.ambient.xyz * lightUniforms.ambient.w;\n            reflectedLight.ambient += ambientColor;\n        #endif\n\n        #if USE_SPOTLIGHT\n            //处理聚光灯\n            var spotLight:SpotLight;\n            for (var k = 0u; k < spotLightsCount; k = k + 1u) {\n                spotLight= lightUniforms.spotLights[k];\n                #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_SPOTLIGHT_SHADOWMAP\n                    if k < textureNumLayers(spotLightShadowMapTextureArray) {\n                        var spotLightShadow:SpotLightShadow = shadowUniforms.spotLightShadows[k];\n                        var lightPos: vec4<f32> = spotLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);\n                        var lightInfo:LightInfo;\n                        lightInfo.direction = normalize(geometry.position - spotLight.position);\n\n                        shadowValue = getShadowValue(spotLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, k, false,\n                            spotLightShadow.shadowCameraNear, spotLightShadow.shadowCameraFar);\n                    }\n                    spotLight.color *= shadowValue;\n                #endif\n                #if MATERIAL_PHONG\n                    let spReflectedLight=getSpotLightInfo(spotLight,geometry.position,shininess,geometry.normal,geometry.viewDir);\n                #elif MATERIAL_PBR\n                    let incidentLight=getSpotLightIncidentLight(spotLight,geometry);\n                    let spReflectedLight=direct_Physical(incidentLight, geometry, material);\n                #endif\n\n                reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;\n                reflectedLight.directSpecular+=spReflectedLight.directSpecular;\n            }\n        #endif\n        #if USE_POINTLIGHT\n            //处理点光源\n            var pointLight:PointLight;\n            for (var j = 0u; j < pointLightsCount;j = j + 1u) {\n                pointLight = lightUniforms.pointLights[j];\n                #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_POINTLIGHT_SHADOWMAP\n                    if j < textureNumLayers(pointLightShadowMapTextureArray) {\n                        var pointLightShadow:PointLightShadow = shadowUniforms.pointLightShadows[j];\n                        var lightInfo:LightInfo;\n                        lightInfo.direction = normalize(geometry.position - pointLight.position);\n                        var cubeFace = getCubeFace(lightInfo.direction);\n                        var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrixArray[cubeFace] * vec4<f32>(geometry.position,1.0);\n                        lightInfo.viewport = pointLightShadow.shadowCameraViewportArray[cubeFace];\n\n                        // var lightPos: vec4<f32> = pointLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);\n\n                        shadowValue = getShadowValue(pointLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, j, true,\n                            pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar);\n                        \n                        // reflectedLight.testColor = vec3(pointLightShadow.shadowCameraFar / 1000, \n                        //     pointLightShadow.shadowCameraVPMatrixArray[5][3][2] / 255, pointLightShadow.shadowCameraVPMatrixArray[5][3][3] / 255);\n                        // reflectedLight.testColor = vec3(pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraNear);\n                    }\n                    pointLight.color *= shadowValue;\n                #endif\n                #if MATERIAL_PHONG\n                    let poiReflectedLight=getPointLightInfo(pointLight,geometry.position,shininess,geometry.normal,geometry.viewDir);\n                #elif MATERIAL_PBR\n                   let incidentLight=getPointLightIncidentLight(pointLight,geometry);\n                   let poiReflectedLight=direct_Physical(incidentLight, geometry, material);\n                #endif\n\n                reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;\n                reflectedLight.directSpecular+=poiReflectedLight.directSpecular;\n            }\n        #endif\n        #if USE_DIRTECTLIGHT\n            //处理方向光\n            var directionalLight:DirectionalLight;\n            for (var i= 0u; i <dirtectLightsCount; i = i + 1u) {\n                directionalLight = lightUniforms.dirtectLights[i];\n                #if MATERIAL_PHONG&&OPEN_SHADOW&&USE_DIRECTLIGHT_SHADOWMAP\n                    if i < textureNumLayers(directLightShadowMapTextureArray) {\n                        var directLightShadow:DirectLightShadow = shadowUniforms.directLightShadows[i];\n                        var lightPos: vec4<f32> = directLightShadow.shadowCameraVPMatrix * vec4<f32>(geometry.position,1.0);\n                        var lightInfo:LightInfo;\n                        lightInfo.direction = directionalLight.direction;\n                            \n                        shadowValue = getShadowValue(directLightShadowMapTextureArray, shadowSampler, lightPos, geometry, lightInfo, i, false, 0, 0);\n                    }\n                    directionalLight.color *= shadowValue;\n                #endif\n            \n                #if MATERIAL_PHONG\n                    let dirReflectedLight=getDirectLightInfo(directionalLight,shininess,geometry.normal,geometry.viewDir);\n                #elif MATERIAL_PBR\n                    let incidentLight=getDirectionalDirectLightIncidentLight(directionalLight,geometry);\n                    let dirReflectedLight=direct_Physical(incidentLight, geometry, material);\n                #endif\n\n                reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;\n                reflectedLight.directSpecular+=dirReflectedLight.directSpecular;\n            }\n        #endif\n        return reflectedLight;\n    }",
	brdf: "\n        #if USE_SHEEN\n                fn D_Charlie( roughness:f32,dotNH:f32 )->f32 {\n                    let alpha:f32 = pow2( roughness );\n                    let invAlpha:f32 = 1.0 / alpha;\n                    let cos2h:f32 = dotNH * dotNH;\n                    let sin2h:f32 = max( 1.0 - cos2h, 0.0078125 );\n                    return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * pi );\n                }\n                fn V_Neubelt( dotNV:f32, dotNL:f32 )->f32 {\n                    return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n                }\n                fn BRDF_Sheen(lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>,sheenColor:vec3<f32>,sheenRoughness:f32 )->vec3<f32> {\n                    let halfDir:vec3<f32> = normalize( lightDir + viewDir );\n                    let dotNL:f32 = saturate( dot( normal, lightDir ) );\n                    let dotNV:f32 = saturate( dot( normal, viewDir ) );\n                    let dotNH:f32 = saturate( dot( normal, halfDir ) );\n                    let D:f32 = D_Charlie( sheenRoughness, dotNH );\n                    let V:f32 = V_Neubelt( dotNV, dotNL );\n                    return sheenColor * ( D * V );\n                }\n        #endif\n        fn BRDF_Lambert(diffuseColor:vec3<f32>)->vec3<f32> {\n\n            return reciprocal_pi * diffuseColor;\n\n        } // validated\n\n        fn F_Schlick( f0:vec3<f32>, dotVH:f32 )->vec3<f32> {\n\n            // Original approximation by Christophe Schlick '94\n            // float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n            // Optimized variant (presented by Epic at SIGGRAPH '13)\n            // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n           let fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n           return ( 1.0 - f0 ) * fresnel + f0;\n\n        } // validated\n\n        fn Schlick_to_F0(f:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {\n            let x:f32 = clamp( 1.0 - dotVH, 0.0, 1.0 );\n            let x2:f32 = x * x;\n            let x5:f32 = clamp( x * x2 * x2, 0.0, 0.9999 );\n\n            return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n        }\n        fn V_GGX_SmithCorrelated( alpha:f32, dotNL:f32,dotNV:f32 )->f32 {\n\n            let a2 :f32= pow2( alpha );\n\n            let gv:f32 = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n            let gl:f32 = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n            return 0.5 / max((gv + gl), 0.000000001 );\n\n        }\n        fn D_ggx( alpha:f32, dotNH:f32 )->f32 {\n\n            let a2:f32 = pow2( alpha );\n\n            let denom:f32 = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n            return reciprocal_pi * a2 / pow2( denom );\n\n        }\n        fn BRDF_ggx( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, f0:vec3<f32>,  roughness:f32 )->vec3<f32> {\n\n            let alpha:f32 = pow2( roughness ); // UE4's roughness\n\n            let halfDir = normalize( lightDir + viewDir );\n\n            let dotNL:f32 = saturate( dot( normal, lightDir ) );\n            let dotNV:f32 = saturate( dot( normal, viewDir ) );\n            let dotNH:f32 = saturate( dot( normal, halfDir ) );\n            let dotVH:f32 = saturate( dot( lightDir, halfDir ) );\n\n            let f = F_Schlick( f0,  dotVH );\n\n            let v = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n            let d = D_ggx( alpha, dotNH );\n\n            return f * ( v * d );\n\n        }\n        fn direct_Physical( directLight:IncidentLight, geometry:Geometry,material:PhysicalMaterial)->ReflectedLight {\n            var reflectedLight:ReflectedLight;\n            let dotNL:f32 = saturate(dot( geometry.normal,geometry.viewDir));\n            let irradiance:vec3<f32> = dotNL * directLight.color*3.1415926;\n            reflectedLight.directSpecular = irradiance * BRDF_ggx( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.roughness );\n            reflectedLight.directDiffuse = irradiance * BRDF_Lambert( material.diffuseColor );\n            return reflectedLight;\n        }\n  ",
	phongFunction:
		"\n    fn G_BlinnPhong_Implicit( )->f32 {\n\n        // geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n        return 0.25;\n\n    }\n    fn D_BlinnPhong( shininess:f32, dotNH:f32 )->f32 {\n\n        return reciprocal_pi * ( shininess * 0.5 + 1.0 ) * pow(dotNH, shininess);\n\n    }\n    fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {\n\n        let  halfDir = normalize( lightDir + viewDir );\n\n        let  dotNH:f32 = saturate( dot( normal, halfDir ) );\n        let dotVH:f32 = saturate( dot( viewDir, halfDir ) );\n\n        let F = F_Schlick( specularColor, 1.0, dotVH );\n\n        let G:f32 = G_BlinnPhong_Implicit( );\n\n        let D = D_BlinnPhong( shininess, dotNH );\n\n        return F * ( G * D );\n\n    } \n    fn RE_Direct_BlinnPhong(  directLight:IncidentLight,geometry:GeometricContext, material:BlinnPhongMaterial )->ReflectedLight{\n        var reflectedLight:ReflectedLight; \n        let dotNL:f32 = saturate(dot(geometry.normal, directLight.direction));\n        let irradiance:vec3<f32> = dotNL*directLight.color;\n\n        reflectedLight.directDiffuse= irradiance * BRDF_Lambert( material.diffuseColor );\n\n        reflectedLight.directSpecular= irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n        return reflectedLight;\n    }\n    fn RE_IndirectDiffuse_BlinnPhong( irradiance:vec3<f32>, geometry:GeometricContext, material:BlinnPhongMaterial)->ReflectedLight {\n        var reflectedLight:ReflectedLight; \n        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n        return reflectedLight;\n    }\n    ",
	phongUtils:
		"\n   struct BlinnPhongMaterial {\n        diffuseColor:vec3<f32>,\n        specularColor:vec3<f32>,\n        specularShininess:f32,\n        specularStrength:f32,\n    };\n    const reciprocal_pi:f32= 0.3183098861837907;\n   fn pow2( x:f32 )->f32 { return x*x; }\n   fn pow3( x:f32 )->f32 { return x*x*x; }\n   fn pow4(x:f32 )->f32 { let x2 = x*x; return x2*x2; }\n   fn max3( v:vec3<f32> )->f32 { return max( max( v.x, v.y ), v.z ); }\n   fn average(v:vec3<f32> )->f32 { \n       let result=vec3<f32>( 0.3333333,  0.3333333, 0.3333333);\n       return dot( v,result ); \n   }\n   ",
	lightCommon:
		"\n    struct ReflectedLight {\n        directDiffuse:vec3<f32>,\n        directSpecular:vec3<f32>,\n        indirectDiffuse:vec3<f32>,\n        indirectSpecular:vec3<f32>,\n    };\n    struct Geometry {\n        position: vec3<f32>,\n        normal: vec3<f32>,\n        viewDir: vec3<f32>,\n        #if USE_CLEARCOAT\n            vec3 clearcoatNormal;\n        #endif\n    };\n    fn getAmbientLightIrradiance(ambientLightColor: vec3<f32>) -> vec3<f32> {\n        let irradiance = ambientLightColor;\n        return irradiance;\n    }\n    fn getDistanceAttenuation(lightDistance: f32, cutoffDistance: f32, decayExponent: f32) -> f32 {\n        if (cutoffDistance > 0.0 && decayExponent > 0.0) {\n            let x:f32 = saturate(- lightDistance / cutoffDistance + 1.0);\n            return pow(x, decayExponent);\n        }\n        return 1.0;\n    }\n    fn getSpotAttenuation(coneCosine: f32, penumbraCosine: f32, angleCosine: f32) -> f32 {\n        return smoothstep(coneCosine, penumbraCosine, angleCosine);\n    }\n    fn shGetIrradianceAt( normal:vec3<f32>, shCoefficients:array<vec3<f32>,9>)->vec3<f32> {\n        let x:f32 = normal.x; \n        let y:f32 = normal.y; \n        let z:f32 = normal.z;\n        var result:vec3<f32> = shCoefficients[ 0 ] * 0.886227;\n        result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n        result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n        result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n        result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n        result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n        result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n        result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n        result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n        return result;\n    }\n    fn inverseTransformDirection( dir:vec3<f32>, matrix:mat4x4<f32> )->vec3<f32> {\n        return normalize( ( vec4<f32>( dir, 0.0 ) * matrix ).xyz );\n    }\n ",
	pbrStruct:
		"\n        struct MaterialUniform{\n\n            modelMatrix: mat4x4<f32>,\n    \n            diffuse:vec3<f32>,\n    \n            opacity:f32,\n    \n            normalMatrix: mat3x3<f32>,\n    \n            emissive:vec3<f32>,\n    \n            roughness:f32,\n    \n            metalness:f32,\n    \n            #if TONE_MAPPING\n                toneMappingExposure:f32,\n            #endif\n           \n            #if SPECULAR\n    \n                 specularColor:vec3<f32>,\n    \n                 specularIntensity:f32,\n            #endif\n            \n            #if USE_SHEEN\n    \n                sheenColor:vec3<f32>,\n    \n                sheenRoughness:f32,\n            #endif\n\n            #if USE_TRANSMISSION\n    \n                attenuationColor:vec3<f32>,\n    \n                transmission:f32,\n    \n                transmissionSamplerSize:vec2<f32>,\n    \n                thickness:f32,\n    \n                attenuationDistance:f32,\n                \n            #endif\n\n            #if USE_SKINNING\n    \n                bindMatrix:mat4x4<f32>,\n    \n                bindMatrixInverse:mat4x4<f32>,\n    \n                boneTextureSize:u32,\n            #endif\n\n            #if USE_NORMALTEXTURE\n                 normalScale:vec2<f32>,\n            #endif\n    \n            #if IOR\n                ior:f32,\n            #endif\n    \n            #if USE_CLEARCOAT\n    \n                #if USE_CLEARCOAT_NORMALTEXTURE\n                    clearcoatNormalScale:vec2<f32>,\n                #endif\n    \n                 clearcoat:f32,\n    \n                 clearcoatRoughness:f32,\n            #endif\n    \n            #if USE_IRIDESCENCE\n                iridescence:f32,\n    \n                iridescenceIOR:f32,\n    \n                iridescenceThicknessMinimum:f32,\n    \n                iridescenceThicknessMaximum:f32,\n    \n            #endif\n\n            #if USE_AOTEXTURE\n                 aoTextureIntensity:f32,\n            #endif\n\n            #if USE_LIGHTTEXTURE\n                 lightTextureIntensity:f32,\n            #endif\n    \n            #if USE_ENVTEXTURE\n                envTextureIntensity:f32,\n    \n                flipEnvTexture:f32,\n            #endif\n\n            #if USE_BUMPTEXTURE\n                bumpScale:f32;\n            #endif\n\n            #if USE_DISPLACEMENTTEXTURE\n    \n                displacementScale:f32,\n    \n                displacementBias:f32,\n            #endif\n            \n            #if USE_MORPHTARGETS\n    \n                morphTargetBaseInfluence:f32,\n    \n                #if MORPHTARGETS_TEXTURE\n    \n                    morphTargetsTextureSize:vec2<u32>,\n    \n                    MORPHTARGETS_COUNT:u32,\n    \n                #endif\n    \n                morphTargetInfluences:array<f32>,\n                    \n            #endif\n        }\n\n   ",
	pbrFunction: function (e) {
		return ie`

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
	pbrTexture:
		"        \n            #if USE_BUMPTEXTURE\n                @group(0) @binding(bumpTextureBinding) var bumpTexture: texture_2d<f32>;\n            #endif\n            #if USE_TRANSMISSION\n                #if USE_TRANSMISSIONTEXTURE\n                    @group(0) @binding(transmissionTextureBinding) var transmissionTexture: texture_2d<f32>;\n                #endif\n                #if USE_THICKNESSTEXTURE\n                    @group(0) @binding(thicknessTextureBinding) var thicknessTexture: texture_2d<f32>;\n                #endif\n                @group(0) @binding(transmissionSamplerTextureBinding) var transmissionSamplerTexture: texture_2d<f32>;\n            #endif\n            #if USE_ENVTEXTURE\n                @group(0) @binding(envTextureBinding) var envTexture: texture_cube<f32>;\n            #endif\n            #if USE_NORMALTEXTURE\n                @group(0) @binding(normalTextureBinding) var normalTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_CLEARCOATTEXTURE\n                @group(0) @binding(clearcoatTextureBinding) var clearcoatTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_CLEARCOAT_ROUGHNESSTEXTURE\n                @group(0) @binding(clearcoatRclearcoatRoughnessTextureBinding) var clearcoatRoughnessTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_CLEARCOAT_NORMALTEXTURE\n                @group(0) @binding(clearcoatNormalTextureBinding) var clearcoatNormalTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_IRIDESCENCETEXTURE\n                @group(0) @binding(iridescenceTextureBinding) var iridescenceTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_IRIDESCENCE_THICKNESSTEXTURE\n                @group(0) @binding(iridescenceThicknessTextureBinding) var iridescenceThicknessTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_ROUGHNESSTEXTURE\n                @group(0) @binding(roughnessTextureBinding) var roughnessTexture: texture_2d<f32>;\n            #endif\n            \n            #if USE_METALNESSTEXTURE\n                @group(0) @binding(metalnessTextureBinding) var metalnessTexture: texture_2d<f32>;\n            #endif\n\n            #if SPECULAR\n                #if USE_SPECULARINTENSITYTEXTURE\n                    @group(0) @binding(specularIntensityTextureBinding) var specularIntensityTexture: texture_2d<f32>;\n                #endif\n\n                #if USE_SPECULARCOLORTEXTURE\n                    @group(0) @binding(specularColorTextureBinding) var specularColorTexture: texture_2d<f32>;\n                #endif\n            #endif\n\n            #if USE_SHEEN\n                #if USE_SHEENCOLORTEXTURE\n                    @group(0) @binding(sheenColorTextureBinding) var sheenColorTexture: texture_2d<f32>;\n                #endif\n                #if USE_SHEENROUGHNESSTEXTURE\n                    @group(0) @binding(sheenRoughnessTextureBinding) var sheenRoughnessTexture: texture_2d<f32>;\n                #endif\n            #endif\n\n            #if USE_TEXTURE\n                @group(0) @binding(baseSamplerBinding) var baseSampler: sampler;\n                @group(0) @binding(baseTextureBinding) var baseTexture: texture_2d<f32>;\n            #endif\n\n            #if USE_ALPHATEXTURE\n                @group(0) @binding(alphaTextureBinding) var alphaTexture: texture_2d<f32>;\n            #endif\n\n            #if USE_AOTEXTURE\n                @group(0) @binding(aoTextureBinding) var aoTexture: texture_2d<f32>;\n                \n            #endif\n            #if USE_LIGHTTEXTURE\n                @group(0) @binding(lightTextureBinding) var lightTexture: texture_2d<f32>;\n            #endif\n\n            #if USE_EMISSIVETEXTURE\n                @group(0) @binding(emissiveTextureBinding) var emissiveTexture: texture_2d<f32>;\n            #endif\n     ",
	pbrUtils:
		"\n    const pi:f32= 3.141592653589793;\n    \n    const reciprocal_pi:f32= 0.3183098861837907;\n    fn pow2(x:f32 )->f32 {\n        return x*x;\n    }\n    fn pow2Vector(x:vec3<f32> )->vec3<f32> {\n        return x*x;\n    }\n    fn pow3( x:f32 )->f32 {\n        return x*x*x;\n    }\n    fn pow4( x:f32 )->f32 {\n        let x2:f32 = x*x;\n        return x2*x2;\n    }\n    fn max3( v:vec3<f32> )->f32 {\n        return max( max( v.x, v.y ), v.z );\n    }\n    fn average(v:vec3<f32> )->f32 {\n        return dot( v, vec3<f32>( 0.3333333 ) );\n    }\n    fn rand( uv:vec2<f32> )->f32 {\n        let a:f32 = 12.9898;\n        let b:f32 = 78.233;\n        let c:f32 = 43758.5453;\n        let dt:f32 = dot( uv.xy, vec2<f32>( a, b ) );\n        let sn:f32 = dt % pi;\n        return fract( sin( sn ) * c );\n    }\n    fn transformDirection( dir:vec3<f32>, matrix:mat4x4<f32> )->vec3<f32> {\n        return normalize( ( matrix * vec4<f32>( dir, 0.0 ) ).xyz );\n    }\n\n    fn transposeMat3( m:mat3x3<f32> )->mat3x3<f32> {\n        var tmp:mat3x3<f32>;\n        tmp[ 0 ] = vec3<f32>( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n        tmp[ 1 ] = vec3<f32>( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n        tmp[ 2 ] = vec3<f32>( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n        return tmp;\n    }\n    fn luminance( rgb:vec3<f32> )->f32 {\n        let weights:vec3<f32> = vec3<f32>(0.2126729, 0.7151522, 0.0721750 );\n        return dot( weights, rgb );\n    }\n    fn LinearToneMapping( color:vec3<f32>,toneMappingExposure:f32  )->vec3<f32> {\n        return toneMappingExposure * color;\n    }\n\n    fn ReinhardToneMapping( color:vec3<f32>,toneMappingExposure:f32 )->vec3<f32> {\n        var tempColor:vec3<f32>;\n        tempColor=color;\n        tempColor *= toneMappingExposure;\n        return saturate( tempColor / ( vec3<f32>( 1.0 ) + tempColor ) );\n    }\n    fn CustomToneMapping( color:vec3<f32> )->vec3<f32> {\n        return color;\n    }\n    fn toneMapping( color:vec3<f32>,toneMappingExposure:f32  )->vec3<f32> {\n        return ReinhardToneMapping( color,toneMappingExposure );\n    }\n\n    fn LinearToLinear( value:vec4<f32> )->vec4<f32> {\n        return value;\n    }\n    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{\n       let xValue:f32=select(b.x,a.x,a.x<=b.x);\n       let yValue:f32=select(b.y,a.y,a.y<=b.y);\n       let zValue:f32=select(b.z,a.z,a.z<=b.z);\n       return vec3<f32>(xValue,yValue,zValue);    \n    }\n    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {\n        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );\n    }\n    fn linearToOutputTexel(value:vec4<f32> )->vec4<f32> {\n        return LinearTosRGB( value );\n    }\n    ",
	environment: function (e) {
		return ie`
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
	blinn_phong:
		"\n       fn getPointLightInfo(pointLight:PointLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n        var direction:vec3<f32> = worldPos - pointLight.position;\n        let dist:f32 = length( direction );\n        direction = normalize(direction);\n        let decay = clamp(1.0 - pow(dist / pointLight.distance, 4.0), 0.0, 1.0);\n\n        let d =  max( dot( N, -direction ), 0.0 ) * decay;\n        color += pointLight.color * d;\n\n        let halfDir:vec3<f32> = normalize( V - direction );\n        let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess )  * decay;\n        color += pointLight.color * s;\n        return color;\n       }\n       fn getSpotLightInfo(spotLight:SpotLight,worldPos:vec3<f32>,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n            var direction:vec3<f32> = spotLight.position - worldPos;\n            let lightDistance:f32 = length(direction);\n            direction = normalize(direction);\n            let angleCos:f32 = dot( direction, -spotLight.direction );\n            let decay:f32 = clamp(1.0 - pow(lightDistance/spotLight.distance, 4.0), 0.0, 1.0);\n            let spotEffect:f32 = smoothstep( spotLight.penumbraCos, spotLight.coneCos, angleCos );\n            let decayTotal:f32 = decay * spotEffect;\n            let d:f32 = max( dot( N, direction ), 0.0 )  * decayTotal;\n            color += spotLight.color * d;\n            let halfDir:vec3<f32> = normalize( V + direction );\n            let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess ) * decayTotal;\n            color += spotLight.color * s;\n            return color;\n       }\n    struct DirectionalLight {\n        direction: vec3<f32>,\n        color: vec3<f32>,\n    };\n      fn getDirectLightInfo(directionalLight:DirectionalLight,shininess:f32,N:vec3<f32>,V:vec3<f32>)->vec3<f32>{\n        var color=vec3<f32>(0.0,0.0,0.0);\n        let d:f32 = max(dot(N, -directionalLight.direction), 0.0);\n        color += directionalLight.color * d;\n\n        let halfDir:vec3<f32> = normalize( V - directionalLight.direction );\n        let s:f32 = pow( clamp( dot( N, halfDir ), 0.0, 1.0 ), shininess );\n        color += directionalLight.color * s;\n        return color;\n       }\n    ",
	getNormal:
		"\n      fn getNormal(input:FragInput)->vec3<f32>{\n        var normal:vec3<f32>;\n        #if HAS_NORMAL\n            normal= input.normal;\n        #else\n          let pos_dx = dpdx(input.worldPos);\n          let pos_dy = dpdy(input.worldPos);\n          normal = normalize( cross(pos_dy, pos_dx) );\n        #endif\n        return normal*(f32(input.frontFacing) * 2.0 - 1.0);\n      }\n    ",
	getTBN: "\n        fn getTBN(input:FragInput)->mat3x3<f32>{\n        #if HAS_TANGENT\n            let tbn:mat3x3<f32> = input.tbn;\n        #else\n            let normal:vec3<f32> =normalize(input.normal);\n            let uv:vec2<f32> = select(-input.uv,input.uv,input.frontFacing);\n              // ref: http://www.thetenthplanet.de/archives/1180\n              // get edge vectors of the pixel triangle\n              let dp1:vec3<f32> =  vec3<f32>(dpdx(input.worldPos.x), dpdx(input.worldPos.y), dpdx(input.worldPos.z));\n              let dp2:vec3<f32> =  vec3<f32>(dpdy(input.worldPos.x), dpdy(input.worldPos.y), dpdy(input.worldPos.z));\n              let duv1:vec2<f32> = dpdx(uv);\n              let duv2:vec2<f32> = dpdy(uv);\n\n              // solve the linear system\n              let dp2perp:vec3<f32> = cross(dp2, normal);\n              let dp1perp:vec3<f32> = cross(normal, dp1);\n              let tangent:vec3<f32> = dp2perp * duv1.x + dp1perp * duv2.x;\n              let binormal:vec3<f32> = dp2perp * duv1.y + dp1perp * duv2.y;\n              // construct a scale-invariant frame \n              let result:f32=max(dot(tangent, tangent), dot(binormal, binormal));\n              let invmax:f32 = 1.0/sqrt(result);\n              let tbn:mat3x3<f32> = mat3x3<f32>(tangent * invmax, binormal * invmax, normal);\n        #endif\n        return tbn;\n      }\n  ",
	getNormalByNormalTexture:
		"\n      fn getNormalByNormalTexture(input:FragInput)->vec3<f32>{\n        var n:vec3<f32> = textureSample(normalTexture,normalSampler, input.uv).rgb;\n        let tbn:mat3x3<f32> =getTBN(input);\n        n = normalize(tbn * (2.0 * n - vec3(1.0)));\n        n=n*(f32(input.frontFacing) * 2.0 - 1.0);\n        return n;\n      }\n    ",
	ibl: "\n  fn getLightProbeRadiance( viewDir:vec3<f32>,normal:vec3<f32>, roughness:f32 )->vec3<f32>{\n    var reflectVec:vec3<f32> = reflect( -viewDir, normal );\n    reflectVec.x = -reflectVec.x; // TextureCube is left-hand,so x need inverse\n    let mipCount:f32 = 10.0; // resolution of 256x256\n    let lod:f32 = roughness * mipCount;\n    let specularLight:vec3<f32> = textureSampleLevel(specularEnvTexture,specularEnvSampler, reflectVec, lod).rgb;\n    return specularLight;\n  }\n  fn getLightProbeIrradiance( lightProbe:array<vec3<f32>,9>, normal:vec3<f32>)->vec3<f32> {\n    var worldNormal:vec3<f32> = normal;\n    worldNormal.x = -normal.x;\n    var irradiance:vec3<f32> = lightProbe[0];\n    irradiance+=lightProbe[1] * (normal.y);\n    irradiance+=lightProbe[2] * (normal.z) ;\n    irradiance+=lightProbe[3] * (normal.x) ;\n\n    irradiance+=lightProbe[4] * (normal.y * normal.x) ;\n    irradiance+=lightProbe[5] * (normal.y * normal.z) ;\n    irradiance+=lightProbe[6] * (3.0 * normal.z * normal.z - 1.0);\n    irradiance+=lightProbe[7] * (normal.z * normal.x) ;\n    irradiance+=lightProbe[8] * (normal.x * normal.x - normal.y * normal.y);\n\n    return max(irradiance, vec3<f32>(0.0,0.0,0.0));\n  }\n  fn DFGApprox( specularColor:vec3<f32>, roughness:f32,dotNV:f32 )->vec3<f32> {\n    const c0:vec4<f32> = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );\n    let c1:vec4<f32> = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );\n    let r:vec4<f32> = roughness * c0 + c1;\n    let a004:f32 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n    let fab:vec2<f32> = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;\n    return specularColor * fab.x + fab.y;\n  }\n  //间接光照\n  fn indirectDiffuse_Physical(geometry:Geometry, material:PhysicalMaterial )->ReflectedLight {\n      var reflectedLight:ReflectedLight;\n      var irradiance:vec3<f32> = lightUniforms.ambient.xyz*lightUniforms.ambient.w;\n      irradiance *= pi;\n      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n      return reflectedLight;\n  }\n  //间接高光\n  fn indirectSpecular_Physical(geometry:Geometry, material:PhysicalMaterial)->ReflectedLight {\n      var reflectedLight:ReflectedLight;\n      // IBL specular\n      let radiance:vec3<f32> = getLightProbeRadiance(geometry.viewDir, geometry.normal, material.roughness);\n      let radianceAttenuation:f32 = 1.0;\n      reflectedLight.indirectSpecular += radianceAttenuation * radiance * DFGApprox(material.specularColor, material.roughness, geometry.dotNV );\n      return reflectedLight;\n    }\n  ",
	skinVertMain:
		"\n        #if HAS_SKIN\n            modelMatrix =getSkinMatrix(input.joint0,input.weight0);\n            vNormalView = normalize((materialUniform.normalMatrix * modelMatrix * vec4<f32>(input.normal, 0.0)).xyz);\n        #endif\n  ",
	skinVertHeader:
		"\n   #if HAS_SKIN \n        struct JointsUniform{\n             matrixs:array<mat4x4f>,\n        }\n        struct InverseBindMatricesUniform{\n            matrixs:array<mat4x4f>,\n        }\n        @binding(skinJointsBufferBinding) @group(0) var<storage, read> jointsUniform : JointsUniform;\n        @binding(invsBufferBinding) @group(0) var<storage, read> inverseBindMatricesUniform : InverseBindMatricesUniform;\n        fn getSkinMatrix(joints: vec4f, weights: vec4f) -> mat4x4<f32> {\n            let joint0 = jointsUniform.matrixs[u32(joints.x)] * inverseBindMatricesUniform.matrixs[u32(joints.x)];\n            let joint1 = jointsUniform.matrixs[u32(joints.y)] * inverseBindMatricesUniform.matrixs[u32(joints.y)];\n            let joint2 = jointsUniform.matrixs[u32(joints.z)] * inverseBindMatricesUniform.matrixs[u32(joints.z)];\n            let joint3 = jointsUniform.matrixs[u32(joints.w)] * inverseBindMatricesUniform.matrixs[u32(joints.w)];\n        \n            let skinMatrix = joint0 * weights.x +\n                            joint1 * weights.y +\n                            joint2 * weights.z +\n                            joint3 * weights.w;\n            return skinMatrix;\n        }\n        #endif\n   ",
	FragInput:
		"\n    struct FragInput {\n      @builtin(front_facing) frontFacing: bool,\n      @location(0) worldPos:vec3<f32>,\n      @location(1) normal:vec3<f32>,\n      @location(2) uv:vec2<f32>,\n      @location(3) view: vec3<f32>, // Vector from vertex to camera.\n      @location(4) color: vec4<f32>,\n      @location(5) viewPosition: vec3<f32>,\n  } \n  ",
	VertexInput:
		"\n        struct VertexInput {\n            @location(positionLocation) position: vec3<f32>,   \n            #if HAS_NORMAL  \n                @location(normalLocation) normal: vec3<f32>,\n            #endif\n            #if HAS_COLOR \n                @location(colorLocation) color: vec3<f32>,\n            #endif\n            #if HAS_UV\n                @location(uvLocation) uv: vec2<f32>,\n            #endif\n            #if HAS_SKIN\n                @location(joint0Location) joint0:vec4<f32>,\n                @location(weight0Location) weight0:vec4<f32>,\n            #endif\n            #if USE_INSTANCE\n                @builtin(instance_index) instanceIdx : u32\n            #endif\n        }\n   ",
	VertexOutput:
		"\n    struct VertexOutput {\n        @builtin(position) position:vec4<f32>,\n        @location(0) worldPos:vec3<f32>,\n        @location(1) normal:vec3<f32>,\n        @location(2) uv:vec2<f32>,\n        @location(3) view: vec3<f32>, // Vector from vertex to camera.\n        @location(4) color: vec4<f32>,\n        @location(5) viewPosition: vec3<f32>,\n    } \n    ",
	PbrMaterialStruct:
		"\n    struct MaterialUniform {\n          modelMatrix: mat4x4<f32>,\n          color: vec3<f32>,\n          opacity:f32,\n          normalMatrix: mat4x4<f32>,\n          emissive:vec3<f32>,\n          metallic:f32,\n          roughness:f32,\n          #if USE_NORMALTEXTURE\n              normalTextureScale:vec2<f32>,\n          #endif\n          #if USE_AOTEXTURE\n              occlusionStrength:f32,\n          #endif\n      }\n   ",
	SystemUniform:
		"\n      struct SystemUniform {\n          projectionMatrix: mat4x4<f32>,\n          viewMatrix: mat4x4<f32>,\n          inverseViewMatrix: mat4x4<f32>,\n          cameraPosition: vec3<f32>,\n      }; \n  ",
	instanceVertMain:
		"\n      #if USE_INSTANCE\n         modelMatrix=instancesUniform.instanceMatrixs[input.instanceIdx];\n      #endif\n   ",
	instanceVertHeader:
		"\n   #if USE_INSTANCE\n      struct InstancesUniform {\n         instanceMatrixs:  array<mat4x4<f32>, instanceCount>,\n      };\n      @group(0) @binding(instanceMatrixsBufferBinding) var<storage, read> instancesUniform: InstancesUniform;\n    #endif\n   ",
	TextureAndSamplerDefine:
		"\n    #if USE_IBL\n      @group(0) @binding(specularEnvTextureBinding) var specularEnvTexture: texture_cube<f32>;\n      @group(0) @binding(specularEnvSamplerBinding) var specularEnvSampler: sampler;\n    #endif\n    #if USE_TEXTURE\n      @group(0) @binding(baseColorTextureBinding) var baseColorTexture: texture_2d<f32>;\n      @group(0) @binding(baseColorSamplerBinding) var baseColorSampler: sampler;\n    #endif\n    // normal map\n    #if USE_NORMALTEXTURE\n      @group(0) @binding(normalTextureBinding) var normalTexture: texture_2d<f32>;\n      @group(0) @binding(normalSamplerBinding) var normalSampler: sampler;\n    #endif\n    // emmisve map\n    #if USE_EMISSIVETEXTURE\n      @group(0) @binding(emissiveTextureBinding) var emissiveTexture: texture_2d<f32>;\n      @group(0) @binding(emissiveSamplerBinding) var emissiveSampler: sampler;\n    #endif\n\n    // metal roughness\n    #if USE_METALNESSTEXTURE\n      @group(0) @binding(metalnessRoughnessTextureBinding) var metalnessRoughnessTexture: texture_2d<f32>;\n      @group(0) @binding(metalnessRoughnessSamplerBinding) var metalnessRoughnessSampler: sampler;\n    #endif\n    // occlusion texture\n    #if USE_AOTEXTURE\n      @group(0) @binding(aoTextureBinding) var aoTexture: texture_2d<f32>;\n      @group(0) @binding(aoSamplerBinding) var aoSampler: sampler;\n    #endif\n    #if USE_NORMALTEXTURE\n      #include <getTBN>\n      #include <getNormalByNormalTexture>\n    #else\n      #include <getNormal>\n    #endif\n  ",
	PointVertInput:
		"\n  struct PointVertInput {\n    @location(positionLocation) position: vec3<f32>,       \n    @location(uvLocation) uv: vec2<f32>,\n    #if HAS_COLOR \n        @location(colorLocation) color: vec3<f32>,\n    #endif\n    #if HAS_SIZE\n        @location(sizeLocation) size: f32,\n    #endif\n    #if USE_INSTANCE\n        @builtin(instance_index) instanceIdx : u32\n    #endif\n  }\n  ",
	PointVertOutput:
		"\n    struct PointVertOutput{\n        @builtin(position) position:vec4<f32>,\n        @location(0) uv:vec2<f32>,\n        @location(1) color: vec4<f32>,\n        @location(2) size: f32,\n    }\n   ",
	PointFragInput:
		"\n      struct PointFragInput{\n        @location(0) uv:vec2<f32>,\n        @location(1) color: vec4<f32>,\n        @location(2) size: f32,\n      }\n    "
};
const se = /#([^\s]*)(\s*)/gm,
	ae = /\b[0-9A-Z_&&||]+\b/g;
function oe(e, t) {
	if (!e) return;
	const i = (function (e, t) {
			if (!t) return e;
			let i = e;
			const r = Object.keys(t)?.filter?.((e) => e != e.toUpperCase());
			return (
				r?.forEach?.((e) => {
					i = i.replaceAll(e, t[e]);
				}),
				i
			);
		})(e, t),
		r = i.match(ae)?.filter((e) => !["&&", "||", "_"].includes(e) && !!isNaN(e) && "" != e),
		n = (function (e, t) {
			return e?.map?.((e) => {
				if (e?.includes("&&") || e?.includes("||")) {
					if (e.includes("&&")) {
						return (function (e, t) {
							let i = 0;
							return e?.forEach?.((e) => (i += Number(t[e]) > 1 ? 1 : Number(t[e]))), i === e.length;
						})(e.split("&&"), t);
					}
					return !(function (e, t) {
						let i = 0;
						return e?.forEach?.((e) => (i += Number(t[e]) > 1 ? 1 : Number(t[e]))), 0 === i;
					})(e.split("||"), t);
				}
				return t[e];
			});
		})(r, t),
		s = (function (e, t) {
			let i = e;
			const r =
				t?.map((e) => {
					const t = i.indexOf(e),
						r = i.slice(0, t);
					return (i = i.slice(t + 1 + e.length)), r;
				}) || [];
			r?.length && r.push(i);
			return r;
		})(i, r);
	return s.length > 0
		? (function (e, t) {
				const i = [];
				let r = { frag: "", elseIsValid: !1, expression: !0 },
					n = 1;
				for (let s = 0; s < e.length; ++s) {
					const a = e[s],
						o = a.matchAll(se);
					let l = 0,
						c = !1;
					for (const e of o) {
						switch (((r.frag += a.substring(l, e.index)), e[1])) {
							case "if":
								if (e.index + e[0].length != a.length)
									throw new Error(
										"#if must be immediately followed by a template expression (ie: ${value})"
									);
								(c = !0), i.push(r), n++, (r = { frag: "", elseIsValid: !0, expression: !!t[s] });
								break;
							case "elif":
								if (e.index + e[0].length != a.length)
									throw new Error(
										"#elif must be immediately followed by a template expression (ie: ${value})"
									);
								if (!r.elseIsValid) throw new Error("#elif not preceeded by an #if or #elif");
								(c = !0),
									r.expression && i.length != n && i.push(r),
									(r = { frag: "", elseIsValid: !0, expression: !!t[s] });
								break;
							case "else":
								if (!r.elseIsValid) throw new Error("#else not preceeded by an #if or #elif");
								r.expression && i.length != n && i.push(r),
									(r = { frag: e[2], elseIsValid: !1, expression: !0 });
								break;
							case "endif":
								if (!i.length) throw new Error("#endif not preceeded by an #if");
								const o = i.length == n ? i.pop() : r;
								(r = i.pop()), n--, o.expression && (r.frag += o.frag), (r.frag += e[2]);
								break;
							default:
								r.frag += e[0];
						}
						l = e.index + e[0].length;
					}
					l != a.length && (r.frag += a.substring(l, a.length)), !c && t.length > s && (r.frag += t[s]);
				}
				if (i.length) throw new Error("Mismatched #if/#endif count");
				return r.frag;
		  })(s, n)
		: i;
}
function le(e) {
	return null != e ? fe(e) : void 0;
}
const ce = /^[ \t]*#include +<([\w\d./]+)>/gm;
let he = {};
const ue = {
	phong: {
		frag: "  \n    struct MaterialUniform {\n      modelMatrix: mat4x4<f32>,\n      color: vec3<f32>,\n      opacity:f32,\n      normalMatrix: mat4x4<f32>,\n      emissive:vec3<f32>,\n      shininess:f32,\n      specular:vec3<f32>,      \n   }\n    #include <FragInput>\n    #include <SystemUniform>\n    #include <TextureAndSamplerDefine>\n    #include <light>\n    @binding(phongBinding) @group(0) var<uniform> materialUniform : MaterialUniform;\n    @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;\n        var color:vec4<f32>;\n        #if USE_COLORTEXTURE\n            color= vec4<f32>(textureSample(baseColorTexture, baseColorSampler, input.uv).rgb+materialUniform.color,materialUniform.opacity);\n        #else\n            color=vec4<f32>(materialUniform.color,materialUniform.opacity);\n        #endif     \n        let  v:vec3<f32> =  normalize( systemUniform.cameraPosition - input.worldPos);\n        #if USE_NORMALTEXTURE\n            let n:vec3<f32> = getNormalByNormalTexture(input);  \n        #else\n            let n:vec3<f32> = getNormal(input);\n        #endif\n        var geometry:Geometry;\n        geometry.normal=n;\n        geometry.viewDir=v;\n        geometry.position=input.worldPos;\n        let lightColor:ReflectedLight=parseLights(geometry,materialUniform.shininess);\n        // var finnalColor:vec3<f32>=color.xyz + (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);\n        var finnalColor:vec3<f32>=color.xyz * (lightColor.directDiffuse + lightColor.directSpecular + lightColor.ambient);\n\n        // finnalColor = lightColor.testColor.xyz;\n\n        return vec4<f32>(finnalColor,color.a);\n    }",
		vert: "\n      struct MaterialUniform {\n            modelMatrix: mat4x4<f32>,\n            color: vec3<f32>,\n            opacity:f32,\n            normalMatrix: mat4x4<f32>,\n            emissive:vec3<f32>,\n            specular:vec3<f32>,\n            shininess:f32,\n      }\n      #include <VertexOutput>\n      #include <SystemUniform>\n      #include <VertexInput>\n      @binding(phongBinding) @group(0) var<uniform> selfUniform : MaterialUniform;\n      @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n      @vertex\n      fn main(input: VertexInput) -> VertexOutput {\n            var output: VertexOutput;\n            #if HAS_UV\n               output.uv = input.uv;\n            #endif \n            let modelPos=selfUniform.modelMatrix *vec4<f32>(input.position,1.0);\n            output.worldPos = modelPos.xyz/modelPos.w;\n            let vNormalView = selfUniform.normalMatrix * vec4<f32>(input.normal,0.0);\n            output.normal =  vNormalView.xyz;\n            output.view = systemUniform.cameraPosition.xyz - modelPos.xyz;\n            let viewPosition=systemUniform.viewMatrix * modelPos;\n            output.viewPosition = -viewPosition.xyz;\n            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;\n            return output;\n      }"
	},
	color: {
		frag: "struct VertexOutput {\r\n    @builtin(position) position: vec4<f32>,\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main(input:VertexOutput) -> @location(0) vec4<f32> {\r\n  return input.color;\r\n}",
		vert: "\n   struct VertexInput {\n        @location(positionLocation) position: vec3<f32>,       \n        @location(colorLocation) color: vec4<f32>,\n   }\n   struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) color: vec4<f32>,\n    };\n   struct SelfUniform {\n      modelMatrix: mat4x4<f32>,\n   }\n   struct SystemUniform {\n      projectionMatrix: mat4x4<f32>,\n      viewMatrix: mat4x4<f32>,\n      inverseViewMatrix: mat4x4<f32>,\n      cameraPosition: vec3<f32>,\n   }; \n   @binding(colorBinding) @group(0) var<uniform> selfUniform : SelfUniform;\n   @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n   @vertex\n   fn main(input: VertexInput) -> VertexOutput {\n    var output:VertexOutput;\n    output.color=input.color;\n    output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(input.position,1.0);\n    return output;\n   }\n   "
	},
	pbr: {
		frag: function (e) {
			return ie`
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
			return ie`
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
		frag: "\n    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{\n        let xValue:f32=select(b.x,a.x,a.x<=b.x);\n        let yValue:f32=select(b.y,a.y,a.y<=b.y);\n        let zValue:f32=select(b.z,a.z,a.z<=b.z);\n        return vec3<f32>(xValue,yValue,zValue);    \n     }\n    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {\n        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );\n    }\n  struct FragmentInput {\n    @location(0) texCoord : vec3<f32>\n  };\n  @group(0) @binding(2) var defaultSampler: sampler;\n  @group(0) @binding(1) var skyboxTexture: texture_cube<f32>;\n  @fragment\n  fn main(input : FragmentInput) -> @location(0) vec4<f32> {\n    let color = textureSample(skyboxTexture, defaultSampler, input.texCoord);\n    return LinearTosRGB(color);\n  }\n",
		vert: "\n   struct SystemUniform {\n       projectionMatrix: mat4x4<f32>,\n       viewMatrix: mat4x4<f32>,\n       inverseViewMatrix: mat4x4<f32>,\n       cameraPosition: vec3<f32>,\n   }; \n   struct MaterialUniform {\n    modelMatrix: mat4x4<f32>,\n }\n   @binding(skyboxBinding) @group(0) var<uniform> selfUniform : MaterialUniform;\n   @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n     struct VertexInput {\n       @location(positionLocation) position : vec3<f32>,\n     };\n     struct VertexOutput {\n       @builtin(position) position : vec4<f32>,\n       @location(0) texCoord : vec3<f32>,\n     };\n     @vertex\n     fn main(input : VertexInput) -> VertexOutput {\n       var output : VertexOutput;\n       output.texCoord = input.position.xyz;\n       var modelView = systemUniform.viewMatrix;\n       // Drop the translation portion of the modelView matrix\n       modelView[3] = vec4(0.0, 0.0, 0.0, modelView[3].w);\n       output.position = systemUniform.projectionMatrix * modelView * vec4<f32>(input.position,1.0);\n       output.position = output.position.xyww;\n       return output;\n     }\n   "
	},
	resolve: {
		frag: "\n    @group(0) @binding(1) var baseSampler: sampler;\n    @group(0) @binding(0) var colorTexture: texture_2d<f32>;\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) uv: vec2<f32>,\n    };\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n      return textureSample(colorTexture, baseSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));\n    }\n    ",
		vert: re
	},
	pbr_mat: {
		frag: "\n        // reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl\n        #include <pbrUtils>\n        #include <light>\n        #include <brdf>\n        #include <PbrMaterialStruct>\n        #include <SystemUniform> \n        #include <FragInput>   \n        struct PhysicalMaterial {\n            diffuseColor:vec3<f32>,\n            roughness:f32,\n            specularColor:vec3<f32>,\n           #if USE_CLEARCOAT\n               clearcoat:f32,\n               clearcoatRoughness:f32,\n               clearcoatF0:vec3<f32>,\n               clearcoatF90:f32,\n           #endif\n\n           #if USE_IRIDESCENCE\n               iridescence:f32,\n               iridescenceIOR:f32,\n               iridescenceThickness:f32,\n               iridescenceFresnel:vec3<f32>,\n               iridescenceF0:vec3<f32>,\n           #endif\n\n           #if USE_SHEEN\n               sheenColor:vec3<f32>,\n               sheenRoughness:f32,\n           #endif\n\n           #if IOR\n                ior:f32,\n           #endif\n\n           #if USE_TRANSMISSION\n               transmission:f32,\n               transmissionAlpha:f32,\n               thickness:f32,\n               attenuationDistance:f32,\n               attenuationColor:vec3<f32>,\n           #endif\n       };\n        const M_PI:f32 = 3.141592653589793;\n        const c_MinRoughness:f32 = 0.04;\n        #include <TextureAndSamplerDefine>\n        #if USE_IBL\n            #include <ibl>\n        #endif\n        @binding(pbrBinding) @group(0) var<uniform> materialUniform : MaterialUniform;\n        @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n        @fragment\n        fn main(input:FragInput) -> @location(0) vec4<f32> \n        {\n            var perceptualRoughness:f32 = materialUniform.roughness;\n            var metallic:f32 = materialUniform.metallic;\n\n            #if USE_METALNESSTEXTURE\n                let mrSample:vec4<f32> = textureSample(metalnessRoughnessTexture,metalnessRoughnessSampler, input.uv);\n                perceptualRoughness = mrSample.g * perceptualRoughness;\n                metallic = mrSample.b * metallic;\n            #endif\n            perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);\n            metallic = clamp(metallic, 0.0, 1.0);\n            let alphaRoughness:f32 = perceptualRoughness * perceptualRoughness;\n\n\n            // The albedo may be defined from a base texture or a flat color\n            #if USE_TEXTURE\n                let baseColor:vec4<f32> = textureSample(baseColorTexture,baseColorSampler, input.uv) ;\n            #else\n                let baseColor:vec4<f32> = vec4<f32>(materialUniform.color,1.0);\n            #endif\n\n            #if USE_NORMALTEXTURE\n                let n:vec3<f32> = getNormalByNormalTexture(input);  \n            #else\n                let n:vec3<f32> = getNormal(input);\n            #endif\n            var material:PhysicalMaterial;\n            material.diffuseColor=baseColor.rgb*( 1.0 - metallic );\n            material.roughness=perceptualRoughness;\n            material.specularColor=mix( vec3<f32>( 0.04), baseColor.rgb, metallic );\n            var geometry:Geometry;\n            geometry.normal=n;\n            geometry.viewDir=normalize(systemUniform.cameraPosition - input.worldPos);\n            geometry.position=input.worldPos;\n            geometry.dotNV = saturate(dot(geometry.normal, geometry.viewDir) );\n            //light shading\n            var reflectedLight=parseLights(geometry,material);\n            var color=reflectedLight.directDiffuse+reflectedLight.directSpecular;\n            //ibl\n            #if USE_IBL&&HAS_UV\n                var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);\n                var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);\n                color+=reflectedLightDiffuse.indirectDiffuse;\n                color+=reflectedLightSpecular.indirectSpecular;\n            #endif\n            #if USE_AOTEXTURE\n                let ao:f32 = textureSample(aoTexture,aoSampler, input.uv).r;\n                color = mix(color, color * ao, materialUniform.occlusionStrength);\n            #endif\n\n            #if USE_EMISSIVETEXTURE\n                let emissive:vec3<f32> = textureSample(emissiveTexture, emissiveSampler,input.uv).rgb ;\n                color += emissive;\n            #endif\n       return vec4<f32>(color, baseColor.a);\n    }\n   ",
		vert: "\n    #include <PbrMaterialStruct>\n    #include <SystemUniform>\n    #include <VertexInput>\n    #include <VertexOutput> \n    #include <skinVertHeader>\n    #include <instanceVertHeader>\n    @binding(pbrBinding) @group(0) var<uniform> materialUniform : MaterialUniform;\n    @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n    @vertex\n    fn main(input: VertexInput)-> VertexOutput\n   {\n        var output: VertexOutput;\n        #if HAS_UV\n            output.uv = input.uv;\n        #endif\n        var modelMatrix:mat4x4<f32>;\n        var vNormalView:vec3<f32>;\n        vNormalView = normalize(materialUniform.normalMatrix * vec4<f32>(input.normal,0.0)).xyz;\n        modelMatrix=materialUniform.modelMatrix;   \n        #include <skinVertMain>\n        #include <instanceVertMain>  \n        output.normal = vNormalView.xyz;\n        output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *modelMatrix* vec4<f32>(input.position, 1.0);\n        let modelPos=modelMatrix *vec4<f32>(input.position,1.0);\n        output.worldPos = modelPos.xyz/modelPos.w;\n        return output;   \n   }\n   "
	},
	blur: {
		frag: "\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    }\n    struct BlurUniforms {\n        direction:vec2<f32>,\n    }\n    fn gaussianPdf(x:f32, sigma:f32)->f32 {\n        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n    }\n    @group(0) @binding(0)  var<uniform> blurUniforms : BlurUniforms;\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        let invSize:vec2<f32> = vec2<f32>(1.0,1.0) / vec2<f32>(textureDimensions(tDiffuse));\n        let fSigma:f32 =f32(sigmaConst);\n        var weightSum:f32 = gaussianPdf(0.0, fSigma);\n        let baseColor=textureSample(tDiffuse, tSampler, input.uv);\n        var diffuseSum:vec3<f32> = baseColor.rgb * weightSum;\n        let uvOffset:vec2<f32> = blurUniforms.direction * invSize;\n        for( var i : u32 = 1; i < kernelRadius;i = i + 1 ) {\n            let x:f32 = f32(i);\n            let w:f32 = gaussianPdf(x, fSigma);\n            let sample1:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv+ uvOffset*x).rgb;\n            let sample2:vec3<f32>=textureSample(tDiffuse, tSampler, input.uv- uvOffset*x).rgb;\n            diffuseSum =diffuseSum+ (sample2+sample2)* w;\n            weightSum += 2.0 * w;\n        }\n        diffuseSum/=weightSum;\n      return vec4<f32>(diffuseSum,baseColor.a);\n    }\n  ",
		vert: re
	},
	luminosityHigh: {
		frag: "\n    struct LuminosityUniforms{\n        luminosityThreshold:f32,\n        smoothWidth:f32,\n        defaultColor:vec3<f32>,\n        defaultOpacity:f32,\n    }\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    };\n    @group(0) @binding(0)  var<uniform> luminosityUniforms : LuminosityUniforms;\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput)-> @location(0) vec4<f32> {\n\n        let texel:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);\n\n        let luma:vec3<f32> = vec3<f32>( 0.299,0.587,0.114 );\n\n        let v:f32 = dot( texel.xyz, luma );\n\n        let outputColor:vec4<f32> = vec4<f32>( luminosityUniforms.defaultColor.rgb, luminosityUniforms.defaultOpacity );\n\n        let alpha:f32 = smoothstep( luminosityUniforms.luminosityThreshold, luminosityUniforms.luminosityThreshold + luminosityUniforms.smoothWidth, v );\n\n       return mix( outputColor, texel, alpha );\n    }\n    ",
		vert: re
	},
	blend: {
		frag: "\n    struct FragInput {\n        @location(0) uv: vec2<f32>,\n    };\n    @group(0) @binding({{tDiffuseBinding}}) var tDiffuse: texture_2d<f32>;\n    @group(0) @binding({{baseColorTextureBinding}}) var baseColorTexture: texture_2d<f32>;\n    @group(0) @binding({{tSamplerBinding}}) var tSampler: sampler;\n    @fragment\n    fn main(input:FragInput) -> @location(0) vec4<f32> {\n        let postColor:vec4<f32> = textureSample(tDiffuse, tSampler, input.uv);\n        let baseColor:vec4<f32> = textureSample(baseColorTexture, tSampler, input.uv);\n      return baseColor+postColor;\n    }   \n    ",
		vert: re
	},
	shadowMapDebugger: {
		frag: "\n    @group(0) @binding(1) var shadowSampler: sampler;\n    @group(0) @binding(0) var shadowMap: texture_depth_2d;\n    \n    // @group(0) @binding(0) var shadowMap: texture_depth_2d_array;\n    // @group(0) @binding(0) var shadowMap: texture_2d<f32>;\n\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) uv: vec2<f32>,\n    };\n\n    fn linearizeDepth(depth: f32, near: f32, far: f32)->f32 {\n      return 2 * (near * far) / (far + near - depth * (far - near));\n    }\n\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n\t\t\tlet color: vec4<f32> = textureGather(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));\n      let depth = (linearizeDepth(color.r, 0.1, 500) - 0.1) / (500 - 0.1);\n      return vec4(vec3(depth), 1.0); // PerspectiveCamera\n      // return color;\n\n      // return textureSample(shadowMap, shadowSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));\n\n    }\n    ",
		vert: "\n    struct VertexInput {\n         @location(positionLocation) position: vec2<f32>,       \n    }\n    struct VertexOutput {\n         @builtin(position) position: vec4<f32>,\n         @location(0) uv: vec2<f32>,\n     };\n    @vertex\n    fn main(input: VertexInput) -> VertexOutput {\n     var output:VertexOutput;\n     output.uv = input.position * 0.5 + 0.5;\n     output.position = vec4<f32>(input.position, 0.0, 1.0);;\n     return output;\n    }\n    "
	},
	shadowMap: {
		vert: "\n   struct VertexInput {\n      @location(positionLocation) position: vec3<f32>,       \n   };\n   struct VertexOutput {\n      @builtin(position) position: vec4<f32>,\n    };\n   struct SelfUniform {\n      modelMatrix: mat4x4<f32>,\n   };\n   struct SystemUniform {\n      projectionMatrix: mat4x4<f32>,\n      viewMatrix: mat4x4<f32>,\n      inverseViewMatrix: mat4x4<f32>,\n      cameraPosition: vec3<f32>,\n   };\n\n   #if IS_POINTLIGHT_SHADOWMAP\n      struct PointLightUniform {\n         vpMatrix: mat4x4<f32>,\n         // vpMatrixArray: array<mat4x4<f32>, 6>,\n      };\n      @group(1) @binding(pointLightShadowCameraBinding) var<storage, read> pointLightUniform: PointLightUniform;\n   #endif\n\n   @group(0) @binding(selfBinding) var<uniform> selfUniform : SelfUniform;\n   @group(1) @binding(cameraBinding) var<uniform> systemUniform : SystemUniform;\n\n   @vertex\n   fn main(input: VertexInput) -> VertexOutput {\n      var output:VertexOutput;\n      #if IS_POINTLIGHT_SHADOWMAP\n         output.position = pointLightUniform.vpMatrix * selfUniform.modelMatrix * vec4<f32>(input.position,1.0);\n      #else\n         output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * selfUniform.modelMatrix * vec4<f32>(input.position,1.0);\n      #endif\n      return output;\n   }\n   ",
		frag: "\n    struct VertexOutput {\n        @builtin(position) position: vec4<f32>,\n        @location(0) color: vec4<f32>,\n    };\n    @fragment\n    fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n      return input.color;\n    }\n    "
	},
	sprite: {
		vert: "\n\n  #include <VertexInput>\n  #include <VertexOutput>\n  #include <SystemUniform>\n  struct SelfUniform {\n    modelMatrix: mat4x4<f32>,\n    color:vec3<f32>,\n    rotation:f32,\n    center:vec2<f32>,\n    opacity:f32,\n  }\n  @binding(spriteBinding) @group(0) var<uniform> selfUniform : SelfUniform;\n  @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n  @vertex\n  fn main(input: VertexInput) -> VertexOutput {\n      var output:VertexOutput;\n      var mvPosition:vec4<f32>= systemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(0.0,0.0,0.0,1.0);\n      #if HAS_UV\n        output.uv=input.uv;\n      #endif\n      var scale:vec2<f32>;\n      scale.x = length(vec3<f32>(selfUniform.modelMatrix[0].x, selfUniform.modelMatrix[0].y, selfUniform.modelMatrix[0].z));\n      scale.y = length(vec3<f32>(selfUniform.modelMatrix[1].x, selfUniform.modelMatrix[1].y, selfUniform.modelMatrix[1].z));\n      // scale *= - mvPosition.z;\n      var alignedPosition:vec2<f32> =(input.position.xy- (selfUniform.center - vec2<f32>(0.5,0.5))) * scale;\n      let rotatedPositionX = cos(selfUniform.rotation) * alignedPosition.x - sin( selfUniform.rotation ) * alignedPosition.y;\n      let rotatedPositionY = sin(selfUniform.rotation) * alignedPosition.x + cos( selfUniform.rotation ) * alignedPosition.y;\n      var rotatedPosition=vec2<f32>(rotatedPositionX,rotatedPositionY);\n      let newPoint =mvPosition.xy+ rotatedPosition;\n      output.position = systemUniform.projectionMatrix * vec4<f32>(newPoint.x,newPoint.y,mvPosition.z,mvPosition.w);\n      return output;\n  }\n  ",
		frag: "\n  #include <VertexOutput>\n  struct SelfUniform {\n    modelMatrix: mat4x4<f32>,\n    color:vec3<f32>,\n    rotation:f32,\n    center:vec2<f32>,\n    opacity:f32,\n  }\n  @binding(spriteBinding) @group(0) var<uniform> selfUniform : SelfUniform;\n  #if USE_COLORTEXTURE\n    @group(0) @binding(baseColorSamplerBinding) var baseColorSampler: sampler;\n    @group(0) @binding(baseColorTextureBinding) var baseColorTexture: texture_2d<f32>;\n  #endif\n  @fragment\n  fn main(input:VertexOutput) -> @location(0) vec4<f32> {\n    #if USE_COLORTEXTURE\n      return textureSample(baseColorTexture, baseColorSampler, input.uv);\n    #else\n      return vec4<f32>(selfUniform.color,selfUniform.opacity);\n    #endif\n  }\n  "
	},
	point: {
		vert: "\n    #include <PointVertOutput>\n    #include <SystemUniform>\n    #include <PointVertInput>\n    struct SelfUniform {\n      modelMatrix: mat4x4<f32>,\n      color:vec3<f32>,\n      size:f32,\n      opacity:f32,\n    }\n    @binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;\n    @binding(cameraBinding) @group(1) var<uniform> systemUniform : SystemUniform;\n    @vertex\n      fn main(input: PointVertInput) -> PointVertOutput {\n      var output:PointVertOutput;\n      let mvPosition:vec4<f32>= ystemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(0.0,0.0,0.0, 1.0 );\n      #if HAS_UV\n          output.uv=input.uv;\n      #endif\n      #if HAS_COLOR\n          output.color=input.color;\n      #endif\n      #if HAS_SIZE\n          output.size=input.size;\n      #endif\n      vec2 alignedPosition = input.position.xy* selfUniform.size;\n      mvPosition.xy += alignedPosition;\n      output.position = systemUniform.projectionMatrix * mvPosition;\n      return output;\n      }\n   ",
		frag: "\n  #include <PointFragInput>\n  struct SelfUniform {\n    modelMatrix: mat4x4<f32>,\n    color:vec3<f32>,\n    size:f32,\n    opacity:f32,\n  }\n  @binding(pointBinding) @group(0) var<uniform> selfUniform : SelfUniform;\n  #if USE_COLORTEXTURE\n    @group(0) @binding(baseColorSamplerBinding) var baseColorSampler: sampler;\n    @group(0) @binding(baseColorTextureBinding) var baseColorTexture: texture_2d<f32>;\n  #endif\n  @fragment\n  fn main(input:PointFragInput) -> @location(0) vec4<f32> {\n    var color:vec4<f32>=vec4<f32>(selfUniform.color,selfUniform.opacity);\n    #if USE_COLORTEXTURE\n      color=textureSample(baseColorTexture, baseColorSampler, input.uv);\n    #endif\n    #if HAS_COLOR\n      color=vec4<f32>(input.color,selfUniform.opacity);\n    #endif\n    return color;\n  }\n  "
	}
};
function fe(e) {
	return e.replace(ce, de);
}
function de(e, t) {
	const i = ne[t];
	if (void 0 === i) throw new Error(`Can not resolve #include <${t}>`);
	return fe(oe(i, he));
}
function me(e, t = {}) {
	const i = ue[e];
	return (he = t), { vert: i?.vert ? le(oe(i.vert, he)) : void 0, frag: i?.frag ? le(oe(i.frag, he)) : void 0 };
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
			const { vert: t, frag: i, compute: r } = this.getShaderStr() || {},
				n = this._shaderLanguage == J.GLSL,
				s = t ? e.createShaderModule({ code: n ? pe?.glslang.compileGLSL(t, ee.VERT) : t }) : void 0,
				a = i ? e.createShaderModule({ code: n ? pe?.glslang.compileGLSL(i, ee.FRAG) : i }) : void 0,
				o = r ? e.createShaderModule({ code: n ? pe?.glslang.compileGLSL(r, ee.COMPUTE) : r }) : void 0;
			(this._shaderModule = { vert: s, frag: a, compute: o }), (this.dirty = !1);
		}
		return this._shaderModule;
	}
	destroy() {
		(this.render = null), (this.compute = null), (this._shaderModule = null), (this.defines = null);
	}
	getShaderStr() {
		const { fragShader: e, vertShader: t } = this.render || {},
			{ computeShader: i } = this.compute || {},
			r = me(this.shaderId, this.defines);
		return {
			vert: r?.vert ?? oe(t instanceof Function ? t() : t, this.defines),
			frag: r?.frag ?? oe(e instanceof Function ? e() : e, this.defines),
			compute: oe(i instanceof Function ? i() : i, this.defines)
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
			l = r.getBindGroupLayout(0);
		for (let e = 0; e < s; ++e) {
			let s = t.createView({
					baseMipLevel: 0,
					mipLevelCount: 1,
					dimension: "2d",
					baseArrayLayer: e,
					arrayLayerCount: 1
				}),
				c = a ? 1 : 0;
			for (let t = 1; t < i.mipLevelCount; ++t) {
				const t = n.createView({
						baseMipLevel: c++,
						mipLevelCount: 1,
						dimension: "2d",
						baseArrayLayer: e,
						arrayLayerCount: 1
					}),
					i = o.beginRenderPass({ colorAttachments: [{ view: t, loadOp: "clear", storeOp: "store" }] }),
					a = this.device.createBindGroup({
						layout: l,
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
		const { passEncoder: t, viewPort: i, scissorTest: r } = e,
			n = this.viewport ?? i,
			s = this.scissorTest ?? r;
		if ((this.stencilReference && t.setStencilReference(this.stencilReference), n?.equalsAndUpdateCache(Ue))) {
			const { x: e, y: i, width: r, height: s, minDepth: a, maxDepth: o } = n;
			t.setViewport(e, i, r, s, a, o);
		}
		if ((this.blendConstant && t.setBlendConstant(this.blendConstant), s?.equalsAndUpdateCache(_e))) {
			const { x: e, y: i, width: r, height: n } = s;
			t.setScissorRect(e, i, r, n);
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
	constructor(e, t, i, r) {
		(this.r = e), (this.g = t), (this.b = i), (this.a = r);
	}
}
class Se {
	constructor(e = 1, t = 4294967295, i = !1) {
		(this.count = e), (this.mask = t), (this.alphaToCoverageEnabled = i);
	}
	getMultiSampleDec() {
		return { count: this.count, mask: this.mask, alphaToCoverageEnabled: this.alphaToCoverageEnabled };
	}
}
class be {
	constructor(e = 0, t = 0, i = 0, r = 0, n = !0) {
		(this.x = e), (this.y = t), (this.width = i), (this.height = r), (this.variable = n);
	}
	set(e, t, i, r) {
		(this.x = e), (this.y = t), (this.width = i), (this.height = r);
	}
	static fromScissorTestProps(e) {
		const { x: t = 0, y: i = 0, width: r = 0, height: n = 0, variable: s = !0 } = e;
		return new be(t, i, r, n, s);
	}
	equalsAndUpdateCache(e) {
		const { x: t, y: i, width: r, height: n } = e;
		return (
			(this.x != t || this.y != i || this.width != r || this.height != n) &&
			(e.set(this.x, this.y, this.width, this.height), !0)
		);
	}
}
class we {
	constructor(e = 0, t = 0, i = 0, r = 0, n = 0, s = 1, a = !0) {
		(this.x = e),
			(this.y = t),
			(this.width = i),
			(this.height = r),
			(this.minDepth = n),
			(this.maxDepth = s),
			(this.variable = a);
	}
	set(e, t, i, r, n = 0, s = 1) {
		this.variable &&
			((this.x = e), (this.y = t), (this.width = i), (this.height = r), (this.minDepth = n), (this.maxDepth = s));
	}
	static fromViewPortProps(e) {
		const {
			x: t = 0,
			y: i = 0,
			width: r = 0,
			height: n = 0,
			minDepth: s = 0,
			maxDepth: a = 1,
			variable: o = !0
		} = e;
		return new we(t, i, r, n, s, a, o);
	}
	equalsAndUpdateCache(e) {
		const { x: t, y: i, width: r, height: n, minDepth: s, maxDepth: a } = e;
		return (
			(this.x != t ||
				this.y != i ||
				this.width != r ||
				this.height != n ||
				this.minDepth != s ||
				this.maxDepth != a) &&
			(e.set(this.x, this.y, this.width, this.height, this.minDepth, this.maxDepth), !0)
		);
	}
}
class Te {
	constructor(e, t, i, r) {
		(this.frontFace = xe(i, b.CCW)),
			(this.cullMode = xe(t, w.None)),
			(this.unclippedDepth = xe(r, !1)),
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
		(this.format = xe(e?.format, c.Depth24Plus)),
			(this.depthWriteEnabled = xe(e?.depthWriteEnabled, !0)),
			(this.depthCompare = xe(e?.depthCompare, f.Less)),
			(this.stencilReadMask = xe(e?.stencilReadMask, 4294967295)),
			(this.stencilWriteMask = xe(e?.stencilWriteMask, 4294967295)),
			(this.stencilFrontCompare = xe(e?.stencilFront?.compare, f.Always)),
			(this.stencilFrontFailOp = xe(e?.stencilFront?.failOp, U.Keep)),
			(this.stencilFrontDepthFailOp = xe(e?.stencilFront?.depthFailOp, U.Keep)),
			(this.stencilFrontPassOp = xe(e?.stencilFront?.passOp, U.Keep)),
			(this.stencilBackCompare = xe(e?.stencilBack?.compare, f.Always)),
			(this.stencilBackFailOp = xe(e?.stencilBack?.failOp, U.Keep)),
			(this.stencilBackDepthFailOp = xe(e?.stencilBack?.depthFailOp, U.Keep)),
			(this.stencilBackPassOp = xe(e?.stencilBack?.passOp, U.Keep)),
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
		(this.format = xe(e?.format, c.BGRA8Unorm)),
			(this.blendColorOperation = xe(e?.blend?.color?.operation, M.Add)),
			(this.blendColorSrcFactor = xe(e?.blend?.color?.srcFactor, E?.SrcAlpha)),
			(this.blendColorDstFactor = xe(e?.blend?.color?.dstFactor, E.OneMinusSrcAlpha)),
			(this.blendAlphaOperation = xe(e?.blend?.alpha?.operation, M.Add)),
			(this.blendAlphaSrcFactor = xe(e?.blend?.alpha?.srcFactor, E.One)),
			(this.blendAlphaDstFactor = xe(e?.blend?.alpha?.dstFactor, E.One)),
			(this.writeMask = xe(e?.writeMask, B.All));
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
const Ue = new we(),
	_e = new be();
class Le {
	get viewPort() {
		return this._viewPort;
	}
	get scissorTest() {
		return this._scissorTest;
	}
	constructor({ canvas: e, container: t, context: i, pixelRatio: r, useGLSL: n = !1 }) {
		if (!t.clientWidth || !t.clientHeight) throw new Error("container width or height illegality");
		(this.canvas = e || document.createElement("canvas")), (this.pixelRatio = r || window.devicePixelRatio || 1);
		const s = t.clientWidth * this.pixelRatio,
			a = t.clientHeight * this.pixelRatio;
		(this.canvas.width = s),
			(this.canvas.height = a),
			(this.canvas.style.width = t.clientWidth + "px"),
			(this.canvas.style.height = t.clientHeight + "px"),
			t.appendChild(this.canvas),
			(this.context = i || this.canvas.getContext("webgpu")),
			(this._useGLSL = n),
			(this.device = void 0);
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
					...i
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
	setViewPort(e, t, i, r) {
		this._viewPort.set(e, t, i, r);
	}
	resetViewPortToFullCanvas() {
		this._viewPort.set(0, 0, this.canvas.clientWidth * this.pixelRatio, this.canvas.clientHeight * this.pixelRatio);
	}
	setScissorTest(e, t, i, r) {
		this._scissorTest.set(e, t, i, r);
	}
	resize(e, t, i = {}) {
		const r = e * this.pixelRatio,
			n = t * this.pixelRatio;
		(this.canvas.style.width = r + "px"),
			(this.canvas.style.height = n + "px"),
			(this.canvas.width = r),
			(this.canvas.height = n),
			(this.presentationSize = { width: r, height: n, depth: 1 }),
			this.context.configure({
				device: this.device,
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: a.RenderAttachment,
				alphaMode: W,
				...i
			});
	}
}
class Ae {
	constructor(e) {
		(this.textureProp = Object.assign(
			{
				format: c.RGBA8Unorm,
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
				dataIsTexture: !1
			},
			e
		)),
			(this.dirty = !0),
			(this.fixedSize = e.fixedSize || !1);
	}
	get layoutType() {
		const { viewFormats: e, sampleType: t, sampleCount: i } = this.textureProp;
		return { sampleType: xe(t, "float"), viewDimension: xe(e, "2d"), multisampled: !!(i && i > 1) };
	}
	get storageTextureLayoutType() {
		const { access: e = x.WriteOnly, viewFormats: t, format: i } = this.textureProp;
		return { viewDimension: xe(t, "2d"), access: e, format: i };
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
			width: i = e.source.width,
			height: r = e.source.height,
			depth: n = 1,
			sourceX: s = 0,
			sourceY: a = 0,
			mipLevel: o = 0,
			x: l = 0,
			y: c = 0,
			z: h = 0,
			aspect: u = "all",
			colorSpace: f = "srgb",
			premultipliedAlpha: d = !1
		} = e;
		if (t instanceof Ae) {
			let e = this.device.createCommandEncoder();
			e.copyTextureToTexture(
				{ texture: t.gpuTexture, origin: [s, a] },
				{ texture: this.gpuTexture, origin: { x: 0, y: 0, z: h }, mipLevel: o },
				{ width: i, height: r, depthOrArrayLayers: 1 }
			),
				this.device.queue.submit([e.finish()]),
				(e = null);
		} else
			this.device.queue.copyExternalImageToTexture(
				{ source: t, origin: [s, a] },
				{
					texture: this.gpuTexture,
					origin: [l, c, h],
					mipLevel: o,
					aspect: u,
					colorSpace: f,
					premultipliedAlpha: d
				},
				[i, r, n]
			);
	}
	setSize(e, t, i) {
		this.fixedSize ||
			((this.textureProp.size.width = e),
			(this.textureProp.size.height = t),
			i && (this.textureProp.size.depth = i),
			(this.dirty = !0));
	}
	destroy() {
		this.gpuTexture.destroy();
	}
	createGPUTexture() {
		if ("number" == typeof this.textureProp.format) throw new Error("number format");
		const { width: e, height: t, depth: i } = this.textureProp.size;
		return this.device.createTexture({
			label: this.textureProp?.label || "undefined",
			size: [e, t, i],
			dimension: this.textureProp.dimension || "2d",
			format: this.textureProp.format,
			usage: this.textureProp.usage,
			mipLevelCount: this.textureProp.mipLevelCount || 1,
			sampleCount: this.textureProp.sampleCount || 1
		});
	}
	checkNeedCreateTexture() {
		const { width: e, height: t, depth: i } = this.textureProp.size;
		this.gpuTexture
			? (e == this.gpuTexture.width && t == this.gpuTexture.height) ||
			  ((this._textureView = void 0), this.gpuTexture.destroy(), (this.gpuTexture = this.createGPUTexture()))
			: (this.gpuTexture = this.createGPUTexture());
	}
}
class Re {
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
Re.baseSampler = new Re({ magFilter: "linear", minFilter: "linear" });
class Ce {
	constructor(e, t) {
		(this.value = e), (this.op = "clear"), (this.storeOp = "store"), Object.assign(this, t);
	}
}
function De(e) {
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
	(Ie.prototype.random_int = function () {
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
	static normalize(e, t, i) {
		return 0 === (i = Math.max(i - t, 0)) ? 0 : Pe.clamp((e - t) / i, 0, 1);
	}
	static lerp(e, t, i) {
		return (1 - i) * e + i * t;
	}
	static toRadians(e) {
		if (!De(e)) throw new Error("degrees is required.");
		return e * Pe.RADIANS_PER_DEGREE;
	}
	static toDegrees(e) {
		if (!De(e)) throw new Error("radians is required.");
		return e * Pe.DEGREES_PER_RADIAN;
	}
	static negativePiToPi(e) {
		if (!De(e)) throw new Error("angle is required.");
		return e >= -Pe.PI && e <= Pe.PI ? e : Pe.zeroToTwoPi(e + Pe.PI) - Pe.PI;
	}
	static zeroToTwoPi(e) {
		if (!De(e)) throw new Error("angle is required.");
		if (e >= 0 && e <= Pe.TWO_PI) return e;
		const t = Pe.mod(e, Pe.TWO_PI);
		return Math.abs(t) < Pe.EPSILON14 && Math.abs(e) > Pe.EPSILON14 ? Pe.TWO_PI : t;
	}
	static mod(e, t) {
		if (!De(e)) throw new Error("m is required.");
		if (!De(t)) throw new Error("n is required.");
		if (0 === t) throw new Error("divisor cannot be 0.");
		return Pe.sign(e) === Pe.sign(t) && Math.abs(e) < Math.abs(t) ? e : ((e % t) + t) % t;
	}
	static equalsEpsilon(e, t, i, r = i) {
		if (!De(e)) throw new Error("left is required.");
		if (!De(t)) throw new Error("right is required.");
		(i = xe(i, 0)), (r = xe(r, i));
		const n = Math.abs(e - t);
		return n <= r || n <= i * Math.max(Math.abs(e), Math.abs(t));
	}
	static lessThan(e, t, i = 0) {
		if (!De(e)) throw new Error("first is required.");
		if (!De(t)) throw new Error("second is required.");
		if (!De(i)) throw new Error("absoluteEpsilon is required.");
		return e - t < -i;
	}
	static lessThanOrEquals(e, t, i = 0) {
		if (!De(e)) throw new Error("first is required.");
		if (!De(t)) throw new Error("second is required.");
		if (!De(i)) throw new Error("absoluteEpsilon is required.");
		return e - t < i;
	}
	static greaterThan(e, t, i = 0) {
		if (!De(e)) throw new Error("first is required.");
		if (!De(t)) throw new Error("second is required.");
		if (!De(i)) throw new Error("absoluteEpsilon is required.");
		return e - t > i;
	}
	static greaterThanOrEquals(e, t, i = 0) {
		if (!De(e)) throw new Error("first is required.");
		if (!De(t)) throw new Error("second is required.");
		if (!De(i)) throw new Error("absoluteEpsilon is required.");
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
		return Ne.random();
	}),
	(Pe.randomBetween = function (e, t) {
		return Pe.nextRandomNumber() * (t - e) + e;
	}),
	(Pe.acosClamped = function (e) {
		if (!De(e)) throw new Error("value is required.");
		return Math.acos(Pe.clamp(e, -1, 1));
	}),
	(Pe.asinClamped = function (e) {
		if (!De(e)) throw new Error("value is required.");
		return Math.asin(Pe.clamp(e, -1, 1));
	}),
	(Pe.chordLength = function (e, t) {
		if (!De(e)) throw new Error("angle is required.");
		if (!De(t)) throw new Error("radius is required.");
		return 2 * t * Math.sin(0.5 * e);
	}),
	(Pe.logBase = function (e, t) {
		if (!De(e)) throw new Error("number is required.");
		if (!De(t)) throw new Error("base is required.");
		return Math.log(e) / Math.log(t);
	}),
	(Pe.cbrt = xe(Math.cbrt, function (e) {
		const t = Math.pow(Math.abs(e), 1 / 3);
		return e < 0 ? -t : t;
	})),
	(Pe.log2 = xe(Math.log2, function (e) {
		return Math.log(e) * Math.LOG2E;
	}));
const Ne = new ze();
class Oe {
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
		return Oe.clone(this, e);
	}
	equals(e) {
		return Oe.equals(this, e);
	}
	equalsEpsilon(e, t = 0, i = 0) {
		return Oe.equalsEpsilon(this, e, t, i);
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
		return De(i) ? ((i.x = e), (i.y = t), i) : new Oe(e, t);
	}
	static clone(e, t) {
		if (De(e)) return De(t) ? ((t.x = e.x), (t.y = e.y), t) : new Oe(e.x, e.y);
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
		const n = Pe.clamp(e.x, t.x, i.x),
			s = Pe.clamp(e.y, t.y, i.y);
		return (r.x = n), (r.y = s), r;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y;
	}
	static magnitude(e) {
		return Math.sqrt(Oe.magnitudeSquared(e));
	}
	static distance(e, t) {
		return Oe.subtract(e, t, Be), Oe.magnitude(Be);
	}
	static distanceSquared(e, t) {
		return Oe.subtract(e, t, Be), Oe.magnitudeSquared(Be);
	}
	static normalize(e, t) {
		const i = Oe.magnitude(e);
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
		return Oe.multiplyByScalar(t, i, Ve), (r = Oe.multiplyByScalar(e, 1 - i, r)), Oe.add(Ve, r, r);
	}
	static angleBetween(e, t) {
		return Oe.normalize(e, Fe), Oe.normalize(t, Ge), Pe.acosClamped(Oe.dot(Fe, Ge));
	}
	static mostOrthogonalAxis(e, t) {
		const i = Oe.normalize(e, ke);
		return Oe.abs(i, i), (t = i.x <= i.y ? Oe.clone(Oe.UNIT_X, t) : Oe.clone(Oe.UNIT_Y, t));
	}
	static equals(e, t) {
		return e === t || (De(e) && De(t) && e.x === t.x && e.y === t.y);
	}
	static equalsArray(e, t, i) {
		return e.x === t[i] && e.y === t[i + 1];
	}
	static equalsEpsilon(e, t, i = 0, r = 0) {
		return e === t || (De(e) && De(t) && Pe.equalsEpsilon(e.x, t.x, i, r) && Pe.equalsEpsilon(e.y, t.y, i, r));
	}
}
(Oe.ZERO = Object.freeze(new Oe(0, 0))),
	(Oe.ONE = Object.freeze(new Oe(1, 1))),
	(Oe.UNIT_X = Object.freeze(new Oe(1, 0))),
	(Oe.UNIT_Y = Object.freeze(new Oe(0, 1)));
const Be = new Oe(),
	Ve = new Oe(),
	Fe = new Oe(),
	Ge = new Oe(),
	ke = new Oe();
class He {
	constructor(e = 0, t = 0, i = 0) {
		(this.x = e), (this.y = t), (this.z = i);
	}
	set(e, t, i) {
		return (this.x = e), (this.y = t), (this.z = i), this;
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
			i = this.y,
			r = this.z,
			n = e.x,
			s = e.y,
			a = e.z,
			o = e.w,
			l = o * t + s * r - a * i,
			c = o * i + a * t - n * r,
			h = o * r + n * i - s * t,
			u = -n * t - s * i - a * r;
		return (
			(this.x = l * o + u * -n + c * -a - h * -s),
			(this.y = c * o + u * -s + h * -n - l * -a),
			(this.z = h * o + u * -a + l * -s - c * -n),
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
		const t = this.x,
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
	equalsEpsilon(e, t = 0, i = 0) {
		return He.equalsEpsilon(this, e, t, i);
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
		De(t) || (t = new He());
		const { phi: i, radius: r, theta: n } = e,
			s = Math.sin(i) * r;
		return (t.x = s * Math.sin(n)), (t.y = Math.cos(i) * r), (t.z = s * Math.cos(n)), t;
	}
	static fromElements(e, t, i, r) {
		return De(r) ? ((r.x = e), (r.y = t), (r.z = i), r) : new He(e, t, i);
	}
	static clone(e, t = new He()) {
		if (De(e)) return De(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t) : new He(e.x, e.y, e.z);
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
		const n = Pe.clamp(e.x, t.x, i.x),
			s = Pe.clamp(e.y, t.y, i.y),
			a = Pe.clamp(e.z, t.z, i.z);
		return (r.x = n), (r.y = s), (r.z = a), r;
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
		const i = He.magnitude(e);
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
		return He.multiplyByScalar(t, i, je), (r = He.multiplyByScalar(e, 1 - i, r)), He.add(je, r, r);
	}
	static angleBetween(e, t) {
		He.normalize(e, $e), He.normalize(t, Xe);
		const i = He.dot($e, Xe),
			r = He.magnitude(He.cross($e, Xe, $e));
		return Math.atan2(r, i);
	}
	static mostOrthogonalAxis(e, t) {
		const i = He.normalize(e, Ye);
		return (
			He.abs(i, i),
			(t =
				i.x <= i.y
					? i.x <= i.z
						? He.clone(He.UNIT_X, t)
						: He.clone(He.UNIT_Z, t)
					: i.y <= i.z
					? He.clone(He.UNIT_Y, t)
					: He.clone(He.UNIT_Z, t))
		);
	}
	static projectVector(e, t, i) {
		const r = He.dot(e, t) / He.dot(t, t);
		return He.multiplyByScalar(t, r, i);
	}
	static equals(e, t) {
		return e === t || (De(e) && De(t) && e.x === t.x && e.y === t.y && e.z === t.z);
	}
	static equalsArray(e, t, i) {
		return e.x === t[i] && e.y === t[i + 1] && e.z === t[i + 2];
	}
	static equalsEpsilon(e, t, i = 0, r = 0) {
		return (
			e === t ||
			(De(e) &&
				De(t) &&
				Pe.equalsEpsilon(e.x, t.x, i, r) &&
				Pe.equalsEpsilon(e.y, t.y, i, r) &&
				Pe.equalsEpsilon(e.z, t.z, i, r))
		);
	}
	static cross(e, t, i) {
		const r = e.x,
			n = e.y,
			s = e.z,
			a = t.x,
			o = t.y,
			l = t.z,
			c = n * l - s * o,
			h = s * a - r * l,
			u = r * o - n * a;
		return (i.x = c), (i.y = h), (i.z = u), i;
	}
}
(He.ZERO = Object.freeze(new He(0, 0, 0))),
	(He.ONE = Object.freeze(new He(1, 1, 1))),
	(He.UNIT_X = Object.freeze(new He(1, 0, 0))),
	(He.UNIT_Y = Object.freeze(new He(0, 1, 0))),
	(He.UNIT_Z = Object.freeze(new He(0, 0, 1))),
	(He.midpoint = function (e, t, i) {
		return (i.x = 0.5 * (e.x + t.x)), (i.y = 0.5 * (e.y + t.y)), (i.z = 0.5 * (e.z + t.z)), i;
	});
const qe = new He(),
	je = new He(),
	$e = new He(),
	Xe = new He(),
	Ye = new He();
class We {
	constructor(e, t, i) {
		(this.name = e),
			(this.value = t),
			(this.itemSize = i),
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
			for (let t = 0, i = this.value.length / this.itemSize; t < i; t++)
				We.v2.fromBufferAttribute(this, t), We.v2.applyMatrix3(e), this.setXY(t, We.v2.x, We.v2.y);
		else if (3 === this.itemSize)
			for (let t = 0, i = this.value.length / this.itemSize; t < i; t++)
				We.v3.fromBufferAttribute(this, t), We.v3.applyMatrix3(e), this.setXYZ(t, We.v3.x, We.v3.y, We.v3.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, i = this.value.length / this.itemSize; t < i; t++)
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
(We.v3 = new He()), (We.v2 = new Oe());
class Ze {
	constructor(e, t, i) {
		(this.names = e),
			(this.itemSizes = i),
			(this.value = t),
			(this.attributeType = et.interleavedAttribute),
			(this.dirty = !0);
	}
	getGPUAttribute() {
		const e = [];
		return (
			this.itemSizes.reduce(
				(t, i, r) => (
					e.push({
						shaderLocation: r,
						format: 1 == i ? `${this.format}` : `${this.format}x${i}`,
						offset: t * this.byteSize
					}),
					t + i
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
	constructor(e, t, i) {
		super(e, t, i);
		const { format: r, totalByteSize: n } = (function (e, t) {
			const i = `${e}x${t}`;
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
			}[i];
		})(L.Float32, i);
		(this.format = r), (this.attributeByteSize = n);
	}
}
class Qe extends Ze {
	constructor(e, t, i) {
		super(e, t, i), (this.format = L.Float32), (this.byteSize = Float32Array.BYTES_PER_ELEMENT);
	}
}
class Je extends Qe {
	constructor(e, t, i) {
		super(e, void 0, i), (this.buffer = t);
	}
}
var et;
!(function (e) {
	(e[(e.interleavedAttribute = 0)] = "interleavedAttribute"), (e[(e.attribute = 1)] = "attribute");
})(et || (et = {}));
const tt = new Map();
class it {
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
			const t = new it(e);
			return tt.set(e.label, t), t;
		}
	}
	static removeBindGroupFromCache(e) {
		tt.delete(e);
	}
}
class rt {
	constructor(e) {
		(this.binding = e.binding), (this.resource = e.resource);
	}
	getGPUGroupEntity() {
		return { binding: this.binding, resource: this.resource };
	}
}
class nt {
	constructor(e, t, i, r, n, s) {
		(this.type = e),
			(this.colorAttachments = t),
			(this.depthAttachment = i),
			(this.stencilAttachment = r),
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
	setSize(e, t, i = 1) {
		this.fixedSize ||
			(this?.depthAttachment?.texture?.setSize?.(e, t, i),
			this?.colorAttachments?.forEach?.((r) => r?.texture?.setSize?.(e, t, i)));
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
	constructor(e = 0, t = 0, i = 0, r = 0, n = 0, s = 0, a = 0, o = 0, l = 0) {
		(this[0] = e),
			(this[1] = r),
			(this[2] = a),
			(this[3] = t),
			(this[4] = n),
			(this[5] = o),
			(this[6] = i),
			(this[7] = s),
			(this[8] = l);
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
		if (De(e))
			return De(t)
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
		return De(t) || (t = new st()), st.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return De(t)
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
		const i = e.x * e.x,
			r = e.x * e.y,
			n = e.x * e.z,
			s = e.x * e.w,
			a = e.y * e.y,
			o = e.y * e.z,
			l = e.y * e.w,
			c = e.z * e.z,
			h = e.z * e.w,
			u = e.w * e.w,
			f = i - a - c + u,
			d = 2 * (r - h),
			m = 2 * (n + l),
			p = 2 * (r + h),
			g = -i + a - c + u,
			x = 2 * (o - s),
			v = 2 * (n - l),
			y = 2 * (o + s),
			S = -i - a + c + u;
		return De(t)
			? ((t[0] = f),
			  (t[1] = p),
			  (t[2] = v),
			  (t[3] = d),
			  (t[4] = g),
			  (t[5] = y),
			  (t[6] = m),
			  (t[7] = x),
			  (t[8] = S),
			  t)
			: new st(f, d, m, p, g, x, v, y, S);
	}
	static fromScale(e, t) {
		return De(t)
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
		const i = Math.cos(e),
			r = Math.sin(e);
		return De(t)
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
			: new st(1, 0, 0, 0, i, -r, 0, r, i);
	}
	static fromRotationY(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return De(t)
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
			: new st(i, 0, r, 0, 1, 0, -r, 0, i);
	}
	static fromRotationZstatic(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return De(t)
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
			: new st(i, -r, 0, r, i, 0, 0, 0, 1);
	}
	toArray() {
		const e = [];
		return st.toArray(this, e), e;
	}
	static toArray(e, t) {
		return De(t)
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
		return ((r = st.clone(e, r))[n] = i.x), (r[n + 1] = i.y), (r[n + 2] = i.z), r;
	}
	static getRow(e, t, i) {
		const r = e[t],
			n = e[t + 3],
			s = e[t + 6];
		return (i.x = r), (i.y = n), (i.z = s), i;
	}
	static setRow(e, t, i, r) {
		return ((r = st.clone(e, r))[t] = i.x), (r[t + 3] = i.y), (r[t + 6] = i.z), r;
	}
	static setScale(e, t, i) {
		const r = st.getScale(e, at),
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
			(t.x = He.magnitude(He.fromElements(e[0], e[1], e[2], ot))),
			(t.y = He.magnitude(He.fromElements(e[3], e[4], e[5], ot))),
			(t.z = He.magnitude(He.fromElements(e[6], e[7], e[8], ot))),
			t
		);
	}
	static getMaximumScale(e) {
		return st.getScale(e, lt), He.maximumComponent(lt);
	}
	static setRotation(e, t, i) {
		const r = st.getScale(e, ct);
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
		const i = st.getScale(e, ht);
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
			l = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
			c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
			h = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
			u = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
		return (
			(i[0] = r),
			(i[1] = n),
			(i[2] = s),
			(i[3] = a),
			(i[4] = o),
			(i[5] = l),
			(i[6] = c),
			(i[7] = h),
			(i[8] = u),
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
			l = e[2] * r + e[5] * n + e[8] * s;
		return (i.x = a), (i.y = o), (i.z = l), i;
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
			l = e[2],
			c = e[5],
			h = e[8];
		return (
			(t[0] = i),
			(t[1] = r),
			(t[2] = n),
			(t[3] = s),
			(t[4] = a),
			(t[5] = o),
			(t[6] = l),
			(t[7] = c),
			(t[8] = h),
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
			l = e[5],
			c = e[8];
		return t * (s * c - l * a) + n * (l * r - i * c) + o * (i * a - s * r);
	}
	static inverse(e, t) {
		const i = e[0],
			r = e[1],
			n = e[2],
			s = e[3],
			a = e[4],
			o = e[5],
			l = e[6],
			c = e[7],
			h = e[8],
			u = st.determinant(e);
		if (Math.abs(u) <= Pe.EPSILON15) throw new Error("matrix is not invertible");
		(t[0] = a * h - c * o),
			(t[1] = c * n - r * h),
			(t[2] = r * o - a * n),
			(t[3] = l * o - s * h),
			(t[4] = i * h - l * n),
			(t[5] = s * n - i * o),
			(t[6] = s * c - l * a),
			(t[7] = l * r - i * c),
			(t[8] = i * a - s * r);
		const f = 1 / u;
		return st.multiplyByScalar(t, f, t);
	}
	static inverseTranspose(e, t) {
		return st.inverse(st.transpose(e, ut), t);
	}
	static equals(e, t) {
		return (
			e === t ||
			(De(e) &&
				De(t) &&
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
			(i = xe(i, 0)),
			e === t ||
				(De(e) &&
					De(t) &&
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
		return st.clone(this, e);
	}
	equals(e) {
		return st.equals(this, e);
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
		return st.equalsEpsilon(this, e, t);
	}
	toString() {
		return `(${this[0]}, ${this[3]}, ${this[6]})\n(${this[1]}, ${this[4]}, ${this[7]})\n(${this[2]}, ${this[5]}, ${this[8]})`;
	}
}
(st.IDENTITY = Object.freeze(new st(1, 0, 0, 0, 1, 0, 0, 0, 1))),
	(st.ZERO = Object.freeze(new st(0, 0, 0, 0, 0, 0, 0, 0, 0)));
const at = new He();
new He();
const ot = new He(),
	lt = new He(),
	ct = new He(),
	ht = new He(),
	ut = new st();
class ft {
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
		return ft.clone(this, e);
	}
	equals(e) {
		return ft.equals(this, e);
	}
	equalsEpsilon(e, t = 0, i = 0) {
		return ft.equalsEpsilon(this, e, t, i);
	}
	toString() {
		return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
	}
	static fromElements(e, t, i, r, n) {
		return De(n) ? ((n.x = e), (n.y = t), (n.z = i), (n.w = r), n) : new ft(e, t, i, r);
	}
	static clone(e, t) {
		if (De(e)) return De(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t) : new ft(e.x, e.y, e.z, e.w);
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
		const n = Pe.clamp(e.x, t.x, i.x),
			s = Pe.clamp(e.y, t.y, i.y),
			a = Pe.clamp(e.z, t.z, i.z),
			o = Pe.clamp(e.w, t.w, i.w);
		return (r.x = n), (r.y = s), (r.z = a), (r.w = o), r;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
	}
	static magnitude(e) {
		return Math.sqrt(ft.magnitudeSquared(e));
	}
	static distance(e, t) {
		return ft.subtract(e, t, pt), ft.magnitude(pt);
	}
	static distanceSquared(e, t) {
		return ft.subtract(e, t, pt), ft.magnitudeSquared(pt);
	}
	static normalize(e, t) {
		const i = ft.magnitude(e);
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
		return ft.multiplyByScalar(t, i, gt), (r = ft.multiplyByScalar(e, 1 - i, r)), ft.add(gt, r, r);
	}
	static equals(e, t) {
		return e === t || (De(e) && De(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w);
	}
	static equalsArray(e, t, i) {
		return e.x === t[i] && e.y === t[i + 1] && e.z === t[i + 2] && e.w === t[i + 3];
	}
	static equalsEpsilon(e, t, i = 0, r = 0) {
		return (
			e === t ||
			(De(e) &&
				De(t) &&
				Pe.equalsEpsilon(e.x, t.x, i, r) &&
				Pe.equalsEpsilon(e.y, t.y, i, r) &&
				Pe.equalsEpsilon(e.z, t.z, i, r) &&
				Pe.equalsEpsilon(e.w, t.w, i, r))
		);
	}
}
(ft.ZERO = Object.freeze(new ft(0, 0, 0, 0))),
	(ft.ONE = Object.freeze(new ft(1, 1, 1, 1))),
	(ft.UNIT_X = Object.freeze(new ft(1, 0, 0, 0))),
	(ft.UNIT_Y = Object.freeze(new ft(0, 1, 0, 0))),
	(ft.UNIT_Z = Object.freeze(new ft(0, 0, 1, 0))),
	(ft.UNIT_W = Object.freeze(new ft(0, 0, 0, 1)));
const dt = new Float32Array(1);
new Uint8Array(dt.buffer);
const mt = new Uint32Array([287454020]);
new Uint8Array(mt.buffer)[0];
const pt = new ft(),
	gt = new ft();
new ft();
class xt {
	constructor(
		e = 0,
		t = 0,
		i = 0,
		r = 0,
		n = 0,
		s = 0,
		a = 0,
		o = 0,
		l = 0,
		c = 0,
		h = 0,
		u = 0,
		f = 0,
		d = 0,
		m = 0,
		p = 0
	) {
		(this[0] = e),
			(this[1] = n),
			(this[2] = l),
			(this[3] = f),
			(this[4] = t),
			(this[5] = s),
			(this[6] = c),
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
	clone(e = new xt()) {
		return xt.clone(this, e);
	}
	set(e) {
		return xt.clone(e, this), this;
	}
	equals(e) {
		return xt.equals(this, e);
	}
	compose(e, t, i) {
		const r = this,
			n = t.x,
			s = t.y,
			a = t.z,
			o = t.w,
			l = n + n,
			c = s + s,
			h = a + a,
			u = n * l,
			f = n * c,
			d = n * h,
			m = s * c,
			p = s * h,
			g = a * h,
			x = o * l,
			v = o * c,
			y = o * h,
			S = i.x,
			b = i.y,
			w = i.z;
		return (
			(r[0] = (1 - (m + g)) * S),
			(r[1] = (f + y) * S),
			(r[2] = (d - v) * S),
			(r[3] = 0),
			(r[4] = (f - y) * b),
			(r[5] = (1 - (u + g)) * b),
			(r[6] = (p + x) * b),
			(r[7] = 0),
			(r[8] = (d + v) * w),
			(r[9] = (p - x) * w),
			(r[10] = (1 - (u + m)) * w),
			(r[11] = 0),
			(r[12] = e.x),
			(r[13] = e.y),
			(r[14] = e.z),
			(r[15] = 1),
			this
		);
	}
	equalsEpsilon(e, t = 0) {
		return xt.equalsEpsilon(this, e, t);
	}
	lookAt(e, t, i) {
		const r = this;
		return (
			He.subtract(e, t, Rt),
			0 === Rt.length() && (Rt.z = 1),
			Rt.normalize(),
			He.cross(i, Rt, Lt),
			0 === Lt.length() &&
				(1 === Math.abs(i.z) ? (Rt.x += 1e-4) : (Rt.z += 1e-4), Rt.normalize(), He.cross(i, Rt, Lt)),
			Lt.normalize(),
			He.cross(Rt, Lt, At),
			(r[0] = Lt.x),
			(r[4] = At.x),
			(r[8] = Rt.x),
			(r[1] = Lt.y),
			(r[5] = At.y),
			(r[9] = Rt.y),
			(r[2] = Lt.z),
			(r[6] = At.z),
			(r[10] = Rt.z),
			this
		);
	}
	toString() {
		return `(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`;
	}
	static clone(e, t) {
		if (De(e))
			return De(t)
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
				: new xt(
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
		return xt.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return De(t)
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
			: new xt(
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
			(t = xe(t, He.ZERO)),
			De(i)
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
				: new xt(e[0], e[3], e[6], t.x, e[1], e[4], e[7], t.y, e[2], e[5], e[8], t.z, 0, 0, 0, 1)
		);
	}
	static fromTranslationQuaternionRotationScale(e, t, i, r) {
		De(r) || (r = new xt());
		const n = i.x,
			s = i.y,
			a = i.z,
			o = t.x * t.x,
			l = t.x * t.y,
			c = t.x * t.z,
			h = t.x * t.w,
			u = t.y * t.y,
			f = t.y * t.z,
			d = t.y * t.w,
			m = t.z * t.z,
			p = t.z * t.w,
			g = t.w * t.w,
			x = o - u - m + g,
			v = 2 * (l - p),
			y = 2 * (c + d),
			S = 2 * (l + p),
			b = -o + u - m + g,
			w = 2 * (f - h),
			T = 2 * (c - d),
			E = 2 * (f + h),
			M = -o - u + m + g;
		return (
			(r[0] = x * n),
			(r[1] = S * n),
			(r[2] = T * n),
			(r[3] = 0),
			(r[4] = v * s),
			(r[5] = b * s),
			(r[6] = E * s),
			(r[7] = 0),
			(r[8] = y * a),
			(r[9] = w * a),
			(r[10] = M * a),
			(r[11] = 0),
			(r[12] = e.x),
			(r[13] = e.y),
			(r[14] = e.z),
			(r[15] = 1),
			r
		);
	}
	static fromTranslationRotationScale(e, t) {
		return xt.fromTranslationQuaternionRotationScale(e.translation, e.rotation, e.scale, t);
	}
	static fromTranslation(e, t) {
		return xt.fromRotationTranslation(st.IDENTITY, e, t);
	}
	static fromScale(e, t) {
		return De(t)
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
			: new xt(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1);
	}
	static fromRotation(e, t) {
		return (
			De(t) || (t = new xt()),
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
		const a = new xt(),
			o = (2 * n) / (t - e),
			l = (2 * n) / (i - r),
			c = (t + e) / (t - e),
			h = (i + r) / (i - r),
			u = -s / (s - n),
			f = (-s * n) / (s - n);
		return (
			(a[0] = o),
			(a[4] = 0),
			(a[8] = c),
			(a[12] = 0),
			(a[1] = 0),
			(a[5] = l),
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
	static makeOrthographic(e, t, i, r, n, s) {
		const a = new xt(),
			o = 1 / (t - e),
			l = 1 / (i - r),
			c = 1 / (s - n),
			h = (t + e) * o,
			u = (i + r) * l,
			f = n * c;
		return (
			(a[0] = 2 * o),
			(a[4] = 0),
			(a[8] = 0),
			(a[12] = -h),
			(a[1] = 0),
			(a[5] = 2 * l),
			(a[9] = 0),
			(a[13] = -u),
			(a[2] = 0),
			(a[6] = 0),
			(a[10] = -1 * c),
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
		return xt.toArray(this, e), e;
	}
	static toArray(e, t) {
		return De(t)
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
		return ((r = xt.clone(e, r))[n] = i.x), (r[n + 1] = i.y), (r[n + 2] = i.z), (r[n + 3] = i.w), r;
	}
	static getRow(e, t, i) {
		const r = e[t],
			n = e[t + 4],
			s = e[t + 8],
			a = e[t + 12];
		return (i.x = r), (i.y = n), (i.z = s), (i.w = a), i;
	}
	static setRow(e, t, i, r) {
		return ((r = xt.clone(e, r))[t] = i.x), (r[t + 4] = i.y), (r[t + 8] = i.z), (r[t + 12] = i.w), r;
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
		const r = xt.getScale(e, yt),
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
			(t.x = He.magnitude(He.fromElements(e[0], e[1], e[2], St))),
			(t.y = He.magnitude(He.fromElements(e[4], e[5], e[6], St))),
			(t.z = He.magnitude(He.fromElements(e[8], e[9], e[10], St))),
			t
		);
	}
	static getMaximumScale(e) {
		return xt.getScale(e, bt), He.maximumComponent(bt);
	}
	static setRotation(e, t, i) {
		const r = xt.getScale(e, wt);
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
		const i = xt.getScale(e, Tt),
			r = 1 / i.x,
			n = 1 / i.y,
			s = 1 / i.z,
			a = e[0] * r,
			o = e[1] * n,
			l = e[2] * s,
			c = e[4] * r,
			h = e[5] * n,
			u = e[6] * s,
			f = e[8] * r,
			d = e[9] * n,
			m = e[10] * s,
			p = a + h + m;
		let g = 0;
		return (
			p > 0
				? ((g = 2 * Math.sqrt(p + 1)),
				  (t.w = 0.25 * g),
				  (t.x = (u - d) / g),
				  (t.y = (f - l) / g),
				  (t.z = (o - c) / g))
				: a > h && a > m
				? ((g = 2 * Math.sqrt(1 + a - h - m)),
				  (t.w = (u - d) / g),
				  (t.x = 0.25 * g),
				  (t.y = (o + c) / g),
				  (t.z = (f + l) / g))
				: h > m
				? ((g = 2 * Math.sqrt(1 + h - a - m)),
				  (t.w = (f - l) / g),
				  (t.x = (o + c) / g),
				  (t.y = 0.25 * g),
				  (t.z = (u + d) / g))
				: ((g = 2 * Math.sqrt(1 + m - a - h)),
				  (t.w = (o - c) / g),
				  (t.x = (f + l) / g),
				  (t.y = (u + d) / g),
				  (t.z = 0.25 * g)),
			t
		);
	}
	static multiply(e, t, i) {
		const r = e[0],
			n = e[1],
			s = e[2],
			a = e[3],
			o = e[4],
			l = e[5],
			c = e[6],
			h = e[7],
			u = e[8],
			f = e[9],
			d = e[10],
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
			U = t[7],
			_ = t[8],
			L = t[9],
			A = t[10],
			R = t[11],
			C = t[12],
			D = t[13],
			I = t[14],
			z = t[15],
			P = r * y + o * S + u * b + p * w,
			N = n * y + l * S + f * b + g * w,
			O = s * y + c * S + d * b + x * w,
			B = a * y + h * S + m * b + v * w,
			V = r * T + o * E + u * M + p * U,
			F = n * T + l * E + f * M + g * U,
			G = s * T + c * E + d * M + x * U,
			k = a * T + h * E + m * M + v * U,
			H = r * _ + o * L + u * A + p * R,
			q = n * _ + l * L + f * A + g * R,
			j = s * _ + c * L + d * A + x * R,
			$ = a * _ + h * L + m * A + v * R,
			X = r * C + o * D + u * I + p * z,
			Y = n * C + l * D + f * I + g * z,
			W = s * C + c * D + d * I + x * z,
			Z = a * C + h * D + m * I + v * z;
		return (
			(i[0] = P),
			(i[1] = N),
			(i[2] = O),
			(i[3] = B),
			(i[4] = V),
			(i[5] = F),
			(i[6] = G),
			(i[7] = k),
			(i[8] = H),
			(i[9] = q),
			(i[10] = j),
			(i[11] = $),
			(i[12] = X),
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
			l = e[6],
			c = e[8],
			h = e[9],
			u = e[10],
			f = e[12],
			d = e[13],
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
			U = t[14],
			_ = r * p + a * g + c * x,
			L = n * p + o * g + h * x,
			A = s * p + l * g + u * x,
			R = r * v + a * y + c * S,
			C = n * v + o * y + h * S,
			D = s * v + l * y + u * S,
			I = r * b + a * w + c * T,
			z = n * b + o * w + h * T,
			P = s * b + l * w + u * T,
			N = r * E + a * M + c * U + f,
			O = n * E + o * M + h * U + d,
			B = s * E + l * M + u * U + m;
		return (
			(i[0] = _),
			(i[1] = L),
			(i[2] = A),
			(i[3] = 0),
			(i[4] = R),
			(i[5] = C),
			(i[6] = D),
			(i[7] = 0),
			(i[8] = I),
			(i[9] = z),
			(i[10] = P),
			(i[11] = 0),
			(i[12] = N),
			(i[13] = O),
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
			l = e[6],
			c = e[8],
			h = e[9],
			u = e[10],
			f = t[0],
			d = t[1],
			m = t[2],
			p = t[3],
			g = t[4],
			x = t[5],
			v = t[6],
			y = t[7],
			S = t[8],
			b = r * f + a * d + c * m,
			w = n * f + o * d + h * m,
			T = s * f + l * d + u * m,
			E = r * p + a * g + c * x,
			M = n * p + o * g + h * x,
			U = s * p + l * g + u * x,
			_ = r * v + a * y + c * S,
			L = n * v + o * y + h * S,
			A = s * v + l * y + u * S;
		return (
			(i[0] = b),
			(i[1] = w),
			(i[2] = T),
			(i[3] = 0),
			(i[4] = E),
			(i[5] = M),
			(i[6] = U),
			(i[7] = 0),
			(i[8] = _),
			(i[9] = L),
			(i[10] = A),
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
			l = r * e[2] + n * e[6] + s * e[10] + e[14];
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
			(i[14] = l),
			(i[15] = e[15]),
			i
		);
	}
	static multiplyByScale(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z;
		return 1 === r && 1 === n && 1 === s
			? xt.clone(e, i)
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
			l = e[1] * r + e[5] * n + e[9] * s + e[13] * a,
			c = e[2] * r + e[6] * n + e[10] * s + e[14] * a,
			h = e[3] * r + e[7] * n + e[11] * s + e[15] * a;
		return (i.x = o), (i.y = l), (i.z = c), (i.w = h), i;
	}
	static multiplyByPointAsVector(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * r + e[4] * n + e[8] * s,
			o = e[1] * r + e[5] * n + e[9] * s,
			l = e[2] * r + e[6] * n + e[10] * s;
		return (i.x = a), (i.y = o), (i.z = l), i;
	}
	static multiplyByPoint(e, t, i) {
		const r = t.x,
			n = t.y,
			s = t.z,
			a = e[0] * r + e[4] * n + e[8] * s + e[12],
			o = e[1] * r + e[5] * n + e[9] * s + e[13],
			l = e[2] * r + e[6] * n + e[10] * s + e[14];
		return (i.x = a), (i.y = o), (i.z = l), i;
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
			(De(e) &&
				De(t) &&
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
			(i = xe(i, 0)),
			e === t ||
				(De(e) &&
					De(t) &&
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
			l = e[9],
			c = e[13],
			h = e[2],
			u = e[6],
			f = e[10],
			d = e[14],
			m = e[3],
			p = e[7],
			g = e[11],
			x = e[15];
		let v = f * x,
			y = d * g,
			S = u * x,
			b = d * p,
			w = u * g,
			T = f * p,
			E = h * x,
			M = d * m,
			U = h * g,
			_ = f * m,
			L = h * p,
			A = u * m;
		const R = v * o + b * l + w * c - (y * o + S * l + T * c),
			C = y * a + E * l + _ * c - (v * a + M * l + U * c),
			D = S * a + M * o + L * c - (b * a + E * o + A * c),
			I = T * a + U * o + A * l - (w * a + _ * o + L * l),
			z = y * r + S * n + T * s - (v * r + b * n + w * s),
			P = v * i + M * n + U * s - (y * i + E * n + _ * s),
			N = b * i + E * r + A * s - (S * i + M * r + L * s),
			O = w * i + _ * r + L * n - (T * i + U * r + A * n);
		(v = n * c),
			(y = s * l),
			(S = r * c),
			(b = s * o),
			(w = r * l),
			(T = n * o),
			(E = i * c),
			(M = s * a),
			(U = i * l),
			(_ = n * a),
			(L = i * o),
			(A = r * a);
		const B = v * p + b * g + w * x - (y * p + S * g + T * x),
			V = y * m + E * g + _ * x - (v * m + M * g + U * x),
			F = S * m + M * p + L * x - (b * m + E * p + A * x),
			G = T * m + U * p + A * g - (w * m + _ * p + L * g),
			k = S * f + T * d + y * u - (w * d + v * u + b * f),
			H = U * d + v * h + M * f - (E * f + _ * d + y * h),
			q = E * u + A * d + b * h - (L * d + S * h + M * u),
			j = L * f + w * h + _ * u - (U * u + A * f + T * h);
		let $ = i * R + r * C + n * D + s * I;
		if (Math.abs($) < Pe.EPSILON21) {
			if (st.equalsEpsilon(xt.getMatrix3(e, Et), Mt, Pe.EPSILON7) && ft.equals(xt.getRow(e, 3, Ut), _t))
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
			(t[0] = R * $),
			(t[1] = C * $),
			(t[2] = D * $),
			(t[3] = I * $),
			(t[4] = z * $),
			(t[5] = P * $),
			(t[6] = N * $),
			(t[7] = O * $),
			(t[8] = B * $),
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
		const i = e[0],
			r = e[1],
			n = e[2],
			s = e[4],
			a = e[5],
			o = e[6],
			l = e[8],
			c = e[9],
			h = e[10],
			u = e[12],
			f = e[13],
			d = e[14],
			m = -i * u - r * f - n * d,
			p = -s * u - a * f - o * d,
			g = -l * u - c * f - h * d;
		return (
			(t[0] = i),
			(t[1] = s),
			(t[2] = l),
			(t[3] = 0),
			(t[4] = r),
			(t[5] = a),
			(t[6] = c),
			(t[7] = 0),
			(t[8] = n),
			(t[9] = o),
			(t[10] = h),
			(t[11] = 0),
			(t[12] = m),
			(t[13] = p),
			(t[14] = g),
			(t[15] = 1),
			t
		);
	}
	static inverseTranspose(e, t) {
		return xt.inverse(xt.transpose(e, vt), t);
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
(xt.IDENTITY = Object.freeze(new xt(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1))),
	(xt.ZERO = Object.freeze(new xt(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)));
const vt = new xt();
new He(), new He(), new He();
const yt = new He();
new He();
const St = new He(),
	bt = new He(),
	wt = new He(),
	Tt = new He(),
	Et = new st(),
	Mt = new st(),
	Ut = new ft(),
	_t = new ft(0, 0, 0, 1),
	Lt = new He(),
	At = new He(),
	Rt = new He();
class Ct {
	constructor(e = new He(0, 0, 0), t = 0) {
		(this.center = e), (this.radius = t), (this.originCenter = this.center.clone()), (this.originRadius = t);
	}
	static fromPoints(e) {
		const t = new Ct();
		if (!De(e) || 0 === e.length) return (t.center = He.clone(He.ZERO, t.center)), (t.radius = 0), t;
		const i = He.clone(e[0], Bt),
			r = He.clone(i, Dt),
			n = He.clone(i, It),
			s = He.clone(i, zt),
			a = He.clone(i, Pt),
			o = He.clone(i, Nt),
			l = He.clone(i, Ot),
			c = e.length;
		let h;
		for (h = 1; h < c; h++) {
			He.clone(e[h], i);
			const t = i.x,
				c = i.y,
				u = i.z;
			t < r.x && He.clone(i, r),
				t > a.x && He.clone(i, a),
				c < n.y && He.clone(i, n),
				c > o.y && He.clone(i, o),
				u < s.z && He.clone(i, s),
				u > l.z && He.clone(i, l);
		}
		const u = He.magnitudeSquared(He.subtract(a, r, Vt)),
			f = He.magnitudeSquared(He.subtract(o, n, Vt)),
			d = He.magnitudeSquared(He.subtract(l, s, Vt));
		let m = r,
			p = a,
			g = u;
		f > g && ((g = f), (m = n), (p = o)), d > g && ((g = d), (m = s), (p = l));
		const x = Ft;
		(x.x = 0.5 * (m.x + p.x)), (x.y = 0.5 * (m.y + p.y)), (x.z = 0.5 * (m.z + p.z));
		let v = He.magnitudeSquared(He.subtract(p, x, Vt)),
			y = Math.sqrt(v);
		const S = Gt;
		(S.x = r.x), (S.y = n.y), (S.z = s.z);
		const b = kt;
		(b.x = a.x), (b.y = o.y), (b.z = l.z);
		const w = He.midpoint(S, b, Ht);
		let T = 0;
		for (h = 0; h < c; h++) {
			He.clone(e[h], i);
			const t = He.magnitude(He.subtract(i, w, Vt));
			t > T && (T = t);
			const r = He.magnitudeSquared(He.subtract(i, x, Vt));
			if (r > v) {
				const e = Math.sqrt(r);
				(y = 0.5 * (y + e)), (v = y * y);
				const t = e - y;
				(x.x = (y * x.x + t * i.x) / e), (x.y = (y * x.y + t * i.y) / e), (x.z = (y * x.z + t * i.z) / e);
			}
		}
		return y < T ? (He.clone(x, t.center), (t.radius = y)) : (He.clone(w, t.center), (t.radius = T)), t;
	}
	static fromVertices(e, t = He.ZERO, i = 3) {
		const r = new Ct();
		if (!De(e) || 0 === e.length) return (r.center = He.clone(He.ZERO, r.center)), (r.radius = 0), r;
		(t = xe(t, He.ZERO)), (i = xe(i, 3));
		const n = Bt;
		(n.x = e[0] + t.x), (n.y = e[1] + t.y), (n.z = e[2] + t.z);
		const s = He.clone(n, Dt),
			a = He.clone(n, It),
			o = He.clone(n, zt),
			l = He.clone(n, Pt),
			c = He.clone(n, Nt),
			h = He.clone(n, Ot),
			u = e.length;
		let f;
		for (f = 0; f < u; f += i) {
			const i = e[f] + t.x,
				r = e[f + 1] + t.y,
				u = e[f + 2] + t.z;
			(n.x = i),
				(n.y = r),
				(n.z = u),
				i < s.x && He.clone(n, s),
				i > l.x && He.clone(n, l),
				r < a.y && He.clone(n, a),
				r > c.y && He.clone(n, c),
				u < o.z && He.clone(n, o),
				u > h.z && He.clone(n, h);
		}
		const d = He.magnitudeSquared(He.subtract(l, s, Vt)),
			m = He.magnitudeSquared(He.subtract(c, a, Vt)),
			p = He.magnitudeSquared(He.subtract(h, o, Vt));
		let g = s,
			x = l,
			v = d;
		m > v && ((v = m), (g = a), (x = c)), p > v && ((v = p), (g = o), (x = h));
		const y = Ft;
		(y.x = 0.5 * (g.x + x.x)), (y.y = 0.5 * (g.y + x.y)), (y.z = 0.5 * (g.z + x.z));
		let S = He.magnitudeSquared(He.subtract(x, y, Vt)),
			b = Math.sqrt(S);
		const w = Gt;
		(w.x = s.x), (w.y = a.y), (w.z = o.z);
		const T = kt;
		(T.x = l.x), (T.y = c.y), (T.z = h.z);
		const E = He.midpoint(w, T, Ht);
		let M = 0;
		for (f = 0; f < u; f += i) {
			(n.x = e[f] + t.x), (n.y = e[f + 1] + t.y), (n.z = e[f + 2] + t.z);
			const i = He.magnitude(He.subtract(n, E, Vt));
			i > M && (M = i);
			const r = He.magnitudeSquared(He.subtract(n, y, Vt));
			if (r > S) {
				const e = Math.sqrt(r);
				(b = 0.5 * (b + e)), (S = b * b);
				const t = e - b;
				(y.x = (b * y.x + t * n.x) / e), (y.y = (b * y.y + t * n.y) / e), (y.z = (b * y.z + t * n.z) / e);
			}
		}
		return b < M ? (He.clone(y, r.center), (r.radius = b)) : (He.clone(E, r.center), (r.radius = M)), r;
	}
	intersectPlane(e) {
		const t = this.center,
			i = this.radius,
			r = e.normal,
			n = He.dot(r, t) + e.distance;
		return n < -i ? F.OUTSIDE : n < i ? F.INTERSECTING : F.INSIDE;
	}
	update(e) {
		xt.multiplyByPoint(e, this.originCenter, this.center),
			(this.radius = xt.getMaximumScale(e) * this.originRadius);
	}
	distanceToCamera(e) {
		return Math.max(0, He.distance(this.center, e.position) - this.radius);
	}
}
const Dt = new He(),
	It = new He(),
	zt = new He(),
	Pt = new He(),
	Nt = new He(),
	Ot = new He(),
	Bt = new He(),
	Vt = new He(),
	Ft = new He(),
	Gt = new He(),
	kt = new He(),
	Ht = new He();
class qt {
	constructor(e, t) {
		(this.label = e),
			(this.indices = t),
			(this.indexFormat = t instanceof Uint32Array ? _.Uint32 : _.Uint16),
			(this.dirty = !0);
	}
	setIndices(e) {
		(this.indices = e), (this.indexFormat = e instanceof Uint32Array ? _.Uint32 : _.Uint16), (this.dirty = !0);
	}
	bind(e, t) {
		this.dirty &&
			((this.dirty = !1),
			(this.buffer = G.createIndexBuffer(
				this.label,
				e,
				this.indices instanceof Array
					? _.Uint16
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
class jt {
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
		this._attributes.has(e.names.toString()) || this._attributes.set(e.names.toString(), e);
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
			i = 0,
			r = null;
		const n = [];
		this._attributes.forEach((s) => {
			s.attributeType === et.attribute
				? (e.push(s.itemSize), n.push(s.value), (i += s.itemSize))
				: (this.interleave || (this.interleave = !0),
				  (r = r ?? s.value),
				  (t = s?.buffer),
				  (i = s.itemSizes.reduce((e, t) => e + t, 0)));
		});
		const s = this.interleave ? new Float32Array(r) : this.interleaveTypedArray(Float32Array, e, ...n);
		return { arrayStride: i * s.BYTES_PER_ELEMENT, typeArray: s, buffer: t };
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
class $t {
	constructor(e) {
		const { label: t, index: i, locationIndex: r = 0, stepMode: n = A.Vertex, arrayStride: s } = e;
		(this.index = i || 0),
			(this.attributes = new jt(r)),
			(this.stepMode = n),
			(this.dirty = !0),
			(this.label = t?.concat(`_${i}_VertexBuffer`)),
			(this.arrayStride = s),
			(this.defines = {}),
			(this.locationIndex = r);
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
			const { arrayStride: t, typeArray: i, buffer: r } = this.attributes.getAtrributeValues();
			void 0 === this.arrayStride && (this.arrayStride = t),
				this.buffer
					? i && this.buffer.setSubData(0, i)
					: (this.buffer = r ?? G.createVertexBuffer(this.label, e, i));
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
function Xt(e, t, i) {
	i = xe(i, !1);
	const r = {},
		n = De(e),
		s = De(t);
	let a, o, l;
	if (n)
		for (a in e)
			e.hasOwnProperty(a) &&
				((o = e[a]),
				s && i && "object" == typeof o && t.hasOwnProperty(a)
					? ((l = t[a]), (r[a] = "object" == typeof l ? Xt(o, l, i) : o))
					: (r[a] = o));
	if (s) for (a in t) t.hasOwnProperty(a) && !r.hasOwnProperty(a) && ((l = t[a]), (r[a] = l));
	return r;
}
class Yt {
	get defines() {
		return Object.assign({}, this._defines, ...this.vertexBuffers.map((e) => e.defines));
	}
	set defines(e) {
		(this.definesDirty = !0), (this._defines = Xt(e, this._defines, !1));
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
			(this.defaultVertexBuffer = new $t({ label: this.type, index: 0 })),
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
			this.indexBuffer || (this.indexBuffer = new qt(this.type + "IndexBuffer")),
			this.indexBuffer.setIndices(e);
	}
	update(e) {}
	computeBoundingSphere(e, t = 3) {
		this.boundingSphere = Ct.fromVertices(e, new He(0, 0, 0), t);
	}
	calculateTangents() {
		if (!this.normals || !this.uvs) throw "Set normal and uv before calculation.";
		const { indices: e, positions: t, normals: i, uvs: r } = this,
			n = new He(),
			s = new He(),
			a = new He(),
			o = new Oe(),
			l = new Oe(),
			c = new Oe(),
			h = new He(),
			u = new He(),
			f = new He(),
			d = new He(),
			m = new He(),
			p = this.indices.length,
			g = e ? e.length / 3 : t.length / 3,
			x = new Array(p),
			v = new Array(p);
		this.tangents = [];
		for (let e = 0; e < p; e++) (x[e] = new ft()), (v[e] = new He());
		for (let i = 0; i < g; i++) {
			let p = 3 * i,
				g = 3 * i + 1,
				y = 3 * i + 2;
			e && ((p = e[p]), (g = e[g]), (y = e[y]));
			const S = n.set(t[p], t[p + 1], t[p + 2]),
				b = s.set(t[g], t[g + 1], t[g + 2]),
				w = a.set(t[y], t[y + 1], t[y + 2]),
				T = o.set(r[p], r[p + 1]),
				E = l.set(r[g], r[g + 1]),
				M = c.set(r[y], r[y + 1]);
			He.subtract(b, S, h), He.subtract(w, S, u);
			const U = E.x - T.x,
				_ = M.x - T.x,
				L = E.y - T.y,
				A = M.y - T.y,
				R = 1 / (U * A - _ * L);
			He.multiplyByScalar(h, A * R, f),
				He.multiplyByScalar(u, L * R, m),
				He.subtract(f, m, f),
				He.multiplyByScalar(u, U * R, d),
				He.multiplyByScalar(h, _ * R, m),
				He.subtract(d, m, d);
			let C = x[p];
			C.set(C.x + f.x, C.y + f.y, C.z + f.z, 1),
				(C = x[g]),
				C.set(C.x + f.x, C.y + f.y, C.z + f.z, 1),
				(C = x[y]),
				C.set(C.x + f.x, C.y + f.y, C.z + f.z, 1),
				v[p].add(d),
				v[g].add(d),
				v[y].add(d);
		}
		for (let e = 0; e < p; e++) {
			const t = new He(i[3 * e], i[3 * e + 1], i[3 * e + 2]),
				r = v[e],
				n = x[e];
			f.set(n.x, n.y, n.z), He.cross(f, r, m);
			const s = He.dot(m, t) > 0 ? 1 : -1;
			He.multiplyByScalar(t, He.dot(f, t), m),
				He.subtract(f, m, f),
				He.normalize(f, f),
				n.set(f.x, f.y, f.z, s),
				this.tangents.push(f.x, f.y, f.z, s);
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
class Wt extends Yt {
	constructor(e = 10, t = 10) {
		super({ type: "planeGeometry" }),
			(this.width = e),
			(this.height = t),
			(this.defines = { HAS_NORMAL: !0 }),
			this.init();
	}
	init() {
		const { indices: e, normals: t, uvs: i, vertices: r } = this.createGrid(this.width, this.height);
		this.computeBoundingSphere(r),
			this.setAttribute(new Ke("position", r, 3)),
			this.setAttribute(new Ke("normal", t, 3)),
			this.setAttribute(new Ke("uv", i, 2)),
			this.setIndice(e),
			(this.count = e.length);
	}
	createGrid(e = 1, t = 1, i = 1, r = 1) {
		const n = e / 2,
			s = t / 2,
			a = Math.floor(i),
			o = Math.floor(r),
			l = a + 1,
			c = o + 1,
			h = e / a,
			u = t / o,
			f = [],
			d = [],
			m = [],
			p = [];
		for (let e = 0; e < c; e++) {
			const t = e * u - s;
			for (let i = 0; i < l; i++) {
				const r = i * h - n;
				d.push(r, -t, 0), m.push(0, 0, 1), p.push(i / a), p.push(1 - e / o);
			}
		}
		for (let e = 0; e < o; e++)
			for (let t = 0; t < a; t++) {
				const i = t + l * e,
					r = t + l * (e + 1),
					n = t + 1 + l * (e + 1),
					s = t + 1 + l * e;
				f.push(i, r, s), f.push(r, n, s);
			}
		return { indices: f, normals: m, uvs: p, vertices: d };
	}
}
class Zt {
	constructor(e = 0, t = 0, i = 0, r = 1) {
		(this.x = e), (this.y = t), (this.z = i), (this.w = r);
	}
	set(e, t, i, r) {
		(this.x = e), (this.y = t), (this.z = i), (this.w = r);
	}
	normalize() {
		const e = 1 / Zt.magnitude(this),
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
		let i = He.dot(e, t) + 1;
		return (
			i < Number.EPSILON
				? ((i = 0),
				  Math.abs(e.x) > Math.abs(e.z)
						? ((this.x = -e.y), (this.y = e.x), (this.z = 0), (this.w = i))
						: ((this.x = 0), (this.y = -e.z), (this.z = e.y), (this.w = i)))
				: ((this.x = e.y * t.z - e.z * t.y),
				  (this.y = e.z * t.x - e.x * t.z),
				  (this.z = e.x * t.y - e.y * t.x),
				  (this.w = i)),
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
			l = t[2],
			c = t[6],
			h = t[10],
			u = i + a + h;
		if (u > 0) {
			const e = 0.5 / Math.sqrt(u + 1);
			(this.w = 0.25 / e), (this.x = (c - o) * e), (this.y = (n - l) * e), (this.z = (s - r) * e);
		} else if (i > a && i > h) {
			const e = 2 * Math.sqrt(1 + i - a - h);
			(this.w = (c - o) / e), (this.x = 0.25 * e), (this.y = (r + s) / e), (this.z = (n + l) / e);
		} else if (a > h) {
			const e = 2 * Math.sqrt(1 + a - i - h);
			(this.w = (n - l) / e), (this.x = (r + s) / e), (this.y = 0.25 * e), (this.z = (o + c) / e);
		} else {
			const e = 2 * Math.sqrt(1 + h - i - a);
			(this.w = (s - r) / e), (this.x = (n + l) / e), (this.y = (o + c) / e), (this.z = 0.25 * e);
		}
		return this;
	}
	clone() {
		return Zt.clone(this, this);
	}
	equals(e) {
		return Zt.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return Zt.equalsEpsilon(this, e, t);
	}
	toArray() {
		const { x: e, y: t, z: i, w: r } = this;
		return [e, t, i, r];
	}
	static fromAxisAngle(e, t) {
		const i = t / 2,
			r = Math.sin(i);
		Kt = He.normalize(e, Kt);
		const n = Kt.x * r,
			s = Kt.y * r,
			a = Kt.z * r,
			o = Math.cos(i),
			l = new Zt(n, s, a, o);
		return (l.x = n), (l.y = s), (l.z = a), (l.w = o), l;
	}
	static clone(e, t) {
		if (De(e)) return De(t) ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t) : new Zt(e.x, e.y, e.z, e.w);
	}
	static conjugate(e, t) {
		return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
	}
	static magnitudeSquared(e) {
		return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
	}
	static magnitude(e) {
		return Math.sqrt(Zt.magnitudeSquared(e));
	}
	static normalize(e, t) {
		const i = 1 / Zt.magnitude(e),
			r = e.x * i,
			n = e.y * i,
			s = e.z * i,
			a = e.w * i;
		return (t.x = r), (t.y = n), (t.z = s), (t.w = a), t;
	}
	static inverse(e, t) {
		const i = Zt.magnitudeSquared(e);
		return (t = Zt.conjugate(e, t)), Zt.multiplyByScalar(t, 1 / i, t);
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
			l = t.y,
			c = t.z,
			h = t.w,
			u = a * o + r * h + n * c - s * l,
			f = a * l - r * c + n * h + s * o,
			d = a * c + r * l - n * o + s * h,
			m = a * h - r * o - n * l - s * c;
		return (i.x = u), (i.y = f), (i.z = d), (i.w = m), i;
	}
	static multiplyByScalar(e, t, i) {
		return (i.x = e.x * t), (i.y = e.y * t), (i.z = e.z * t), (i.w = e.w * t), i;
	}
	static divideByScalar(e, t, i) {
		return (i.x = e.x / t), (i.y = e.y / t), (i.z = e.z / t), (i.w = e.w / t), i;
	}
	static computeAxis(e, t) {
		const i = e.w;
		if (Math.abs(i - 1) < Pe.EPSILON6) return (t.x = t.y = t.z = 0), t;
		const r = 1 / Math.sqrt(1 - i * i);
		return (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t;
	}
	static computeAngle(e) {
		return Math.abs(e.w - 1) < Pe.EPSILON6 ? 0 : 2 * Math.acos(e.w);
	}
	static lerp(e, t, i, r) {
		return (Qt = Zt.multiplyByScalar(t, i, Qt)), (r = Zt.multiplyByScalar(e, 1 - i, r)), Zt.add(Qt, r, r);
	}
	static slerp(e, t, i, r) {
		let n = Zt.dot(e, t),
			s = t;
		if ((n < 0 && ((n = -n), (s = Jt = Zt.negate(t, Jt))), 1 - n < Pe.EPSILON6)) return Zt.lerp(e, s, i, r);
		const a = Math.acos(n);
		return (
			(ei = Zt.multiplyByScalar(e, Math.sin((1 - i) * a), ei)),
			(ti = Zt.multiplyByScalar(s, Math.sin(i * a), ti)),
			(r = Zt.add(ei, ti, r)),
			Zt.multiplyByScalar(r, 1 / Math.sin(a), r)
		);
	}
	static squad(e, t, i, r, n, s) {
		const a = Zt.slerp(e, t, n, ii),
			o = Zt.slerp(i, r, n, ri);
		return Zt.slerp(a, o, 2 * n * (1 - n), s);
	}
	static equals(e, t) {
		return e === t || (De(e) && De(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w);
	}
	static equalsEpsilon(e, t, i = 0) {
		return (
			(i = xe(i, 0)),
			e === t ||
				(De(e) &&
					De(t) &&
					Math.abs(e.x - t.x) <= i &&
					Math.abs(e.y - t.y) <= i &&
					Math.abs(e.z - t.z) <= i &&
					Math.abs(e.w - t.w) <= i)
		);
	}
	static exp(e, t) {
		const i = He.magnitude(e);
		let r = 0;
		return (
			0 !== i && (r = Math.sin(i) / i), (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), (t.w = Math.cos(i)), t
		);
	}
}
(Zt.ZERO = Object.freeze(new Zt(0, 0, 0, 0))), (Zt.IDENTITY = Object.freeze(new Zt(0, 0, 0, 1)));
let Kt = new He();
new Array(3);
let Qt = new Zt(),
	Jt = new Zt(),
	ei = new Zt(),
	ti = new Zt();
new He(), new He();
const ii = new Zt(),
	ri = new Zt();
class ni {
	constructor() {
		(this._position = new He()),
			(this._scale = new He(1, 1, 1)),
			(this._quaternion = new Zt()),
			(this.modelMatrix = xt.clone(xt.IDENTITY, new xt())),
			(this._normalMatrix = xt.clone(xt.IDENTITY, new xt())),
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
		xt.inverse(this.modelMatrix, this._normalMatrix), xt.transpose(this._normalMatrix, this._normalMatrix);
	}
	updateMatrix(e) {
		this.modelMatrix.compose(this.position, this.quaternion, this.scale),
			e && xt.multiply(e, this.modelMatrix, this.modelMatrix),
			this.updateNormalMatrix();
	}
	lookAt(e, t, i) {
		this._target.set(e, t, i),
			this.type == Z.Camera || this.type == Z.Light
				? li.lookAt(this.position, this._target, this.up)
				: li.lookAt(this._target, this.position, this.up),
			this.quaternion.setFromRotationMatrix(li);
	}
	rotateOnAxis(e, t) {
		const i = Zt.fromAxisAngle(e, t);
		Zt.multiply(this.quaternion, i, this.quaternion);
	}
	rotateX(e) {
		return this.rotateOnAxis(si, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(ai, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(oi, e);
	}
}
const si = new He(1, 0, 0),
	ai = new He(0, 1, 0),
	oi = new He(0, 0, 1),
	li = new xt();
class ci extends ni {
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
const hi = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
	ui = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
	fi = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
	di = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
function mi(e, t, i) {
	return (
		i < 0 && (i += 1),
		i > 1 && (i -= 1),
		6 * i < 1 ? e + 6 * (t - e) * i : 2 * i < 1 ? t : 3 * i < 2 ? e + (t - e) * (2 / 3 - i) * 6 : e
	);
}
class pi {
	constructor(e = 1, t = 1, i = 1) {
		(this.red = e), (this.green = t), (this.blue = i);
	}
	set(e) {
		return "string" == typeof e && pi.fromCssColorString(e, this), this;
	}
	toArray() {
		return [this.red, this.green, this.blue];
	}
	clone(e) {
		return pi.clone(this, e);
	}
	equals(e) {
		return pi.equals(this, e);
	}
	toCssHexString() {
		let e = pi.floatToByte(this.red).toString(16);
		e.length < 2 && (e = `0${e}`);
		let t = pi.floatToByte(this.green).toString(16);
		t.length < 2 && (t = `0${t}`);
		let i = pi.floatToByte(this.blue).toString(16);
		return i.length < 2 && (i = `0${i}`), `#${e}${t}${i}`;
	}
	toBytes(e) {
		const t = pi.floatToByte(this.red),
			i = pi.floatToByte(this.green),
			r = pi.floatToByte(this.blue);
		return De(e) ? ((e[0] = t), (e[1] = i), (e[2] = r), e) : [t, i, r];
	}
	static fromBytes(e, t, i, r) {
		return (
			(e = pi.byteToFloat(xe(e, 255))),
			(t = pi.byteToFloat(xe(t, 255))),
			(i = pi.byteToFloat(xe(i, 255))),
			De(r) ? ((r.red = e), (r.green = t), (r.blue = i), r) : new pi(e, t, i)
		);
	}
	static fromHsl(e, t, i, r) {
		(e = xe(e, 0) % 1), (t = xe(t, 0));
		let n = (i = xe(i, 0)),
			s = i,
			a = i;
		if (0 !== t) {
			let r;
			r = i < 0.5 ? i * (1 + t) : i + t - i * t;
			const o = 2 * i - r;
			(n = mi(o, r, e + 1 / 3)), (s = mi(o, r, e)), (a = mi(o, r, e - 1 / 3));
		}
		return De(r) ? ((r.red = n), (r.green = s), (r.blue = a), r) : new pi(n, s, a);
	}
	static fromRandom(e, t) {
		let i = (e = xe(e, xe.EMPTY_OBJECT)).red;
		if (!De(i)) {
			const t = xe(e.minimumRed, 0),
				r = xe(e.maximumRed, 1);
			i = t + Pe.nextRandomNumber() * (r - t);
		}
		let r = e.green;
		if (!De(r)) {
			const t = xe(e.minimumGreen, 0),
				i = xe(e.maximumGreen, 1);
			r = t + Pe.nextRandomNumber() * (i - t);
		}
		let n = e.blue;
		if (!De(n)) {
			const t = xe(e.minimumBlue, 0),
				i = xe(e.maximumBlue, 1);
			n = t + Pe.nextRandomNumber() * (i - t);
		}
		return De(t) ? ((t.red = i), (t.green = r), (t.blue = n), t) : new pi(i, r, n);
	}
	static fromCssColorString(e, t = new pi()) {
		e = e.replace(/\s/g, "");
		const i = pi[e.toUpperCase()];
		if (De(i)) return pi.clone(i, t), t;
		let r = hi.exec(e);
		return null !== r
			? ((t.red = parseInt(r[1], 16) / 15),
			  (t.green = parseInt(r[2], 16) / 15),
			  (t.blue = parseInt(r[3], 16) / 15),
			  t)
			: ((r = ui.exec(e)),
			  null !== r
					? ((t.red = parseInt(r[1], 16) / 255),
					  (t.green = parseInt(r[2], 16) / 255),
					  (t.blue = parseInt(r[3], 16) / 255),
					  t)
					: ((r = fi.exec(e)),
					  null !== r
							? ((t.red = parseFloat(r[1]) / ("%" === r[1].substr(-1) ? 100 : 255)),
							  (t.green = parseFloat(r[2]) / ("%" === r[2].substr(-1) ? 100 : 255)),
							  (t.blue = parseFloat(r[3]) / ("%" === r[3].substr(-1) ? 100 : 255)),
							  t)
							: ((r = di.exec(e)),
							  null !== r
									? pi.fromHsl(
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
		if (De(e))
			return De(t)
				? ((t.red = e.red), (t.green = e.green), (t.blue = e.blue), t)
				: new pi(e.red, e.green, e.blue);
	}
	static equals(e, t) {
		return e === t || (De(e) && De(t) && e.red === t.red && e.green === t.green && e.blue === t.blue);
	}
	static equalsArray(e, t, i) {
		return e.red === t[i] && e.green === t[i + 1] && e.blue === t[i + 2];
	}
}
class gi {
	constructor(e = 0, t = 0, i = 0, r = 0) {
		(this[0] = e), (this[1] = i), (this[2] = t), (this[3] = r);
	}
	static clone(e, t) {
		if (De(e))
			return De(t)
				? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t)
				: new gi(e[0], e[2], e[1], e[3]);
	}
	static fromColumnMajorArray(e, t) {
		return gi.clone(e, t);
	}
	static fromRowMajorArray(e, t) {
		return De(t) ? ((t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]), t) : new gi(e[0], e[1], e[2], e[3]);
	}
	static fromScale(e, t) {
		return De(t) ? ((t[0] = e.x), (t[1] = 0), (t[2] = 0), (t[3] = e.y), t) : new gi(e.x, 0, 0, e.y);
	}
	static fromRotation(e, t) {
		const i = Math.cos(e),
			r = Math.sin(e);
		return De(t) ? ((t[0] = i), (t[1] = r), (t[2] = -r), (t[3] = i), t) : new gi(i, -r, r, i);
	}
	toArray() {
		const e = [];
		return gi.toArray(this, e), e;
	}
	static toArray(e, t) {
		return De(t) ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t) : [e[0], e[1], e[2], e[3]];
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
		return ((r = gi.clone(e, r))[n] = i.x), (r[n + 1] = i.y), r;
	}
	static getRow(e, t, i) {
		const r = e[t],
			n = e[t + 2];
		return (i.x = r), (i.y = n), i;
	}
	static setRow(e, t, i, r) {
		return ((r = gi.clone(e, r))[t] = i.x), (r[t + 2] = i.y), r;
	}
	static setScale(e, t, i) {
		const r = gi.getScale(e, xi),
			n = t.x / r.x,
			s = t.y / r.y;
		return (i[0] = e[0] * n), (i[1] = e[1] * n), (i[2] = e[2] * s), (i[3] = e[3] * s), i;
	}
	static getScale(e, t) {
		return (
			(t.x = Oe.magnitude(Oe.fromElements(e[0], e[1], Si))),
			(t.y = Oe.magnitude(Oe.fromElements(e[2], e[3], Si))),
			t
		);
	}
	static getMaximumScale(e) {
		return gi.getScale(e, vi), Oe.maximumComponent(vi);
	}
	static setRotation(e, t, i) {
		const r = gi.getScale(e, yi);
		return (i[0] = t[0] * r.x), (i[1] = t[1] * r.x), (i[2] = t[2] * r.y), (i[3] = t[3] * r.y), i;
	}
	static getRotation(e, t) {
		const i = gi.getScale(e, bi);
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
		return e === t || (De(e) && De(t) && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]);
	}
	static equalsArray(e, t, i) {
		return e[0] === t[i] && e[1] === t[i + 1] && e[2] === t[i + 2] && e[3] === t[i + 3];
	}
	static equalsEpsilon(e, t, i = 0) {
		return (
			(i = xe(i, 0)),
			e === t ||
				(De(e) &&
					De(t) &&
					Math.abs(e[0] - t[0]) <= i &&
					Math.abs(e[1] - t[1]) <= i &&
					Math.abs(e[2] - t[2]) <= i &&
					Math.abs(e[3] - t[3]) <= i)
		);
	}
	clone(e) {
		return gi.clone(this, e);
	}
	equals(e) {
		return gi.equals(this, e);
	}
	equalsEpsilon(e, t = 0) {
		return gi.equalsEpsilon(this, e, t);
	}
	toString() {
		return `(${this[0]}, ${this[2]})\n(${this[1]}, ${this[3]})`;
	}
}
(gi.IDENTITY = Object.freeze(new gi(1, 0, 0, 1))), (gi.ZERO = Object.freeze(new gi(0, 0, 0, 0)));
const xi = new Oe();
new Oe();
const vi = new Oe(),
	yi = new Oe(),
	Si = new Oe(),
	bi = new Oe();
class wi {
	constructor(e, t, i) {
		(this.name = e), (this.cb = t), (this.offset = xe(i, 0)), (this.type = "number");
	}
	setBuffer(e, t = 0) {
		for (let i = 0; i < e.length; i++) this.buffer[i + t] = e[i];
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
class Ti extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = 0),
			(this.byteSize = 4),
			(this.buffer = new Uint32Array(t.buffer, i, 1)),
			(this.type = "uint");
	}
	set() {
		return (
			null != this.cb && (this.value = this.getValue()),
			this.value !== this._value && ((this._value = this.value), (this.buffer[0] = this.value), !0)
		);
	}
}
Ti.align = 4;
class Ei extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
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
Ei.align = 4;
class Mi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new Oe()),
			(this.buffer = new Float32Array(t.buffer, i, 2)),
			(this.byteSize = 8),
			(this.type = "vec2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof Oe
			? !Oe.equals(e, this._value) && (Oe.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
Mi.align = 8;
class Ui extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new He()),
			(this.buffer = new Float32Array(t.buffer, i, 3)),
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
Ui.align = 16;
class _i extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new ft()),
			(this.buffer = new Float32Array(t.buffer, i, 4)),
			(this.byteSize = 16),
			(this.type = "vec4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof ft
			? !ft.equals(e, this._value) && (ft.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
_i.align = 16;
class Li extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new pi()),
			(this.buffer = new Float32Array(t.buffer, i, 3)),
			(this.byteSize = 12),
			(this.type = "vec3");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof pi
			? !pi.equals(e, this._value) && (pi.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
Li.align = 16;
class Ai extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new gi()),
			(this.buffer = new Float32Array(t.buffer, i, 4)),
			(this.byteSize = 16),
			(this.type = "mat2");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof gi
			? !gi.equals(e, this._value) && (gi.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: !this.equals(e) && ((this._value = e), this.setBuffer(e), !0);
	}
}
Ai.align = 8;
class Ri extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new st()),
			(this.buffer = new Float32Array(t.buffer, i, 9)),
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
Ri.align = 16;
class Ci extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.value = void 0),
			(this._value = new xt()),
			(this.buffer = new Float32Array(t.buffer, i, 16)),
			(this.byteSize = 64),
			(this.type = "mat4");
	}
	set() {
		null != this.cb && (this.value = this.getValue());
		const e = this.value;
		return e instanceof xt
			? !xt.equals(e, this._value) && (xt.clone(e, this._value), this.setBuffer(this._value.toArray()), !0)
			: ((this._value = e), this.setBuffer(e), !0);
	}
}
Ci.align = 16;
class Di extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.byteSize = 64 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "mat4-array");
	}
	set() {
		if (((this.value = this.getValue()), !this.value)) return !1;
		for (let e = 0; e < this.value.length; e++) this.setBuffer(this.value[e].toArray(), 16 * e);
		return !0;
	}
}
Di.align = 16;
class Ii extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.buffer = new Float32Array(t.buffer, i, n)),
			(this.byteSize = 4 * n),
			(this.type = "float-array");
	}
	set() {
		this.value = this.getValue();
		for (let e = 0; e < this.value.length; e++) this.buffer[e] = this.value[e];
		return !0;
	}
}
Ii.align = 4;
class zi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.byteSize = 8 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
zi.align = 8;
class Pi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.byteSize = 16 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
Pi.align = 16;
class Ni extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.byteSize = 16 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
Ni.align = 16;
class Oi extends wi {
	constructor(e, t, i, r, n, s) {
		super(e, void 0, 0),
			(this.binding = t),
			(this.visibility = xe(n, d.Vertex | d.Fragment)),
			(this.textureView = s),
			(this.type = r ?? "texture"),
			(this.isTexture = !0),
			(this._texture = i);
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
class Bi extends wi {
	constructor(e, t, i, r) {
		super(e, void 0, 0),
			(this.visibility = xe(r, d.Vertex | d.Fragment)),
			(this.name = e),
			(this.binding = t),
			(this.type = "sampler"),
			(this.isSampler = !0),
			(this._sampler = i);
	}
	get layoutType() {
		return this.sampler?.layoutType || "not yet bind";
	}
	bind(e) {
		(this.sampler = this._sampler instanceof Function ? this._sampler() : this._sampler), this.sampler.update(e);
	}
}
class Vi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, n),
			(this.cb = r),
			(this.type = "struct-array"),
			(this.dirty = !1),
			(this.byteOffset = i),
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
				const i = Array.isArray(e[t]?.value) ? e[t]?.value : e[t]?.value.toArray();
				$i(this.buffer, i, e[t].offset);
			});
		});
	}
	getStructSize() {
		let e = 0;
		return (
			this.structArray.forEach((t) => {
				Object.keys(t).forEach((i) => {
					(e += Xi.checkUniformOffset(e, Vi.aligns[t[i].type])),
						(t[i].offset = e),
						(this.byteOffset += Vi.byteSizes[t[i].type]);
				});
			}),
			e
		);
	}
}
(Vi.align = 16),
	(Vi.aligns = {
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
	(Vi.byteSizes = {
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
class Fi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.cb = r),
			(this.byteSize = 64 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
		const i = 16 * t;
		e.positionDirty && (this.dirty = $i(this.buffer, e.position.toArray(), i + 0)),
			e.distanceDirty && (this.dirty = $i(this.buffer, e.distance, i + 3)),
			e.dirtectDirty && (this.dirty = $i(this.buffer, e.directional.toArray(), i + 4)),
			e.coneCosDirty && (this.dirty = $i(this.buffer, e.coneCos, i + 7)),
			e.colorDirty && (this.dirty = $i(this.buffer, e.color.toArray(), i + 8)),
			e.penumbraCosDirty && (this.dirty = $i(this.buffer, e.penumbraCos, i + 11)),
			e.decayDirty && (this.dirty = $i(this.buffer, e.decay, i + 12)),
			(e.positionDirty = !1),
			(e.distanceDirty = !1),
			(e.dirtectDirty = !1),
			(e.coneCosDirty = !1),
			(e.colorDirty = !1),
			(e.penumbraCosDirty = !1),
			(e.decayDirty = !1);
	}
}
Fi.align = 16;
class Gi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = Gi.uniformSize),
			(this.byteSize = n * this._subDataSize * s),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
		const i = t * this._subDataSize;
		e.shadow.vpMatrixDirty &&
			((e.shadow.vpMatrixDirty = !1), (this.dirty = $i(this.buffer, e.shadow.camera.vpMatrix.toArray(), i + 0)));
		const r = e.shadow.camera.near;
		r != this._nearValue && ((this._nearValue = r), (this.dirty = $i(this.buffer, this._nearValue, i + 16)));
		const n = e.shadow.camera.far;
		n != this._farValue && ((this._farValue = n), (this.dirty = $i(this.buffer, this._farValue, i + 17)));
	}
}
(Gi.align = 16), (Gi.uniformSize = 18);
class ki extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.byteSize = 32 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
		const i = 8 * t;
		e.positionDirty && ((e.positionDirty = !1), (this.dirty = $i(this.buffer, e.position.toArray(), i + 0))),
			e.distanceDirty && ((e.distanceDirty = !1), (this.dirty = $i(this.buffer, e.distance, i + 3))),
			e.colorDirty && ((e.colorDirty = !1), (this.dirty = $i(this.buffer, e.color.toArray(), i + 4))),
			e.decayDirty && ((e.decayDirty = !1), (this.dirty = $i(this.buffer, e.decay, i + 7)));
	}
}
ki.align = 16;
class Hi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = Hi.uniformSize),
			(this.byteSize = n * s * this._subDataSize),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
		const i = t * this._subDataSize;
		if (e.shadow.vpMatrixArrayDirty) {
			e.shadow.vpMatrixArrayDirty = !1;
			const t = e.shadow.camera.vpMatrixArray;
			for (let e = 0; e < t.length; e++) {
				const r = t[e];
				this.dirty = $i(this.buffer, r.toArray(), i + 0 + 16 * e);
			}
		}
		if (e.shadow.viewPortDirty) {
			e.shadow.viewPortDirty = !1;
			for (let t = 0; t < 6; t++) this.dirty = $i(this.buffer, e.shadow.viewports[t].toArray(), i + 96 + 4 * t);
		}
		const r = e.shadow.camera.near;
		r != this._nearValue && ((this._nearValue = r), (this.dirty = $i(this.buffer, this._nearValue, i + 120)));
		const n = e.shadow.camera.far;
		n != this._farValue && ((this._farValue = n), (this.dirty = $i(this.buffer, this._farValue, i + 121)));
	}
}
(Hi.align = 16), (Hi.uniformSize = 122);
class qi extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0),
			(this.cb = r),
			(this.byteSize = 32 * n),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
			(this.type = "dirtectLights");
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
		const i = 8 * t;
		e.dirtectDirty && ((e.dirtectDirty = !1), (this.dirty = $i(this.buffer, e.directional.toArray(), i + 0))),
			e.colorDirty && ((e.colorDirty = !1), (this.dirty = $i(this.buffer, e.color.toArray(), i + 4)));
	}
}
qi.align = 16;
class ji extends wi {
	constructor(e, t, i, r, n) {
		super(e, r, 0);
		const s = Float32Array.BYTES_PER_ELEMENT;
		(this._subDataSize = ji.uniformSize),
			(this.byteSize = n * s * this._subDataSize),
			(this.buffer = new Float32Array(t.buffer, i, this.byteSize / 4)),
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
		const i = t * this._subDataSize;
		e.shadow.vpMatrixDirty &&
			((e.shadow.vpMatrixDirty = !1), (this.dirty = $i(this.buffer, e.shadow.camera.vpMatrix.toArray(), i + 0)));
	}
}
function $i(e, t, i) {
	return (
		Array.isArray(t)
			? t.forEach((t, r) => {
					e[r + i] = t;
			  })
			: (e[i] = t),
		!0
	);
}
(ji.align = 16), (ji.uniformSize = 16);
class Xi {
	constructor(e) {
		(this.type = xe(e.type, "uniform")),
			(this.label = xe(e.label, "")),
			(this.name = xe(e.label, "")),
			(this.hasDynamicOffset = e.hasDynamicOffset ?? !1),
			(this.minBindingSize = e.minBindingSize ?? 0),
			(this.binding = e.binding ?? 0),
			(this.visibility = xe(e.visibility, d.Fragment | d.Vertex)),
			(this.usage = xe(e.usage, r.Uniform | r.CopyDst)),
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
		const i = this._uniformStruct.get(e);
		i && (i.cb = t);
	}
	getUniformByName(e) {
		return this._uniformStruct.get(e);
	}
	setUniform(e, t, i, r) {
		if (this._uniformStruct.get(e)) return;
		const n = Xi.UniformType[i];
		this.byteOffset += Xi.checkUniformOffset(this.byteOffset, n.align);
		const s =
			null != r
				? new n(e, this.dataBuffer, this.byteOffset, t, r)
				: new n(e, this.dataBuffer, this.byteOffset, t);
		this._uniformStruct.set(e, s), (this.byteOffset += s.byteSize);
	}
	setUniformsFromUniformBuffer(e) {
		this._uniformStruct.forEach((t, i) => {
			const r = e.getUniformByName(i);
			r && this._uniformStruct.set(i, r);
		});
	}
	static checkUniformOffset(e, t) {
		return Math.ceil(e / t) * t - e;
	}
	destroy() {
		this?.buffer?.destroy();
	}
}
function Yi(e, t, i, r, n) {
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
					: () => ("modelMatrix" == e ? r?.modelMatrix : "normalMatrix" === e ? r?.normalMatrix : t.value),
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
			i.setTexture(e, s ? t.value : () => t.value, t?.binding, t?.type, t?.visibility, t?.textureView);
			break;
		case "sampler":
			i.setSampler(e, s ? t.value : () => t.value, t?.binding, t?.visibility);
			break;
		default:
			throw new Error("not match unifrom type");
	}
}
Xi.UniformType = {
	[Q.UniformUint]: Ti,
	[Q.Float]: Ei,
	[Q.FloatVec2]: Mi,
	[Q.FloatVec3]: Ui,
	[Q.FloatVec4]: _i,
	[Q.Mat2]: Ai,
	[Q.Mat3]: Ri,
	[Q.Mat4]: Ci,
	[Q.Color]: Li,
	[Q.FloatArray]: Ii,
	[Q.Vec2Array]: zi,
	[Q.Vec3Array]: Pi,
	[Q.Vec4Array]: Ni,
	[Q.Mat4Array]: Di,
	[Q.PointLights]: ki,
	[Q.SpotLights]: Fi,
	[Q.DirtectLights]: qi,
	[Q.PointLightShadows]: Hi,
	[Q.SpotLightShadows]: Gi,
	[Q.DirtectLightShadows]: ji,
	[Q.UniformStructArray]: Vi
};
const Wi = new Map();
class Zi {
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
		if (Wi.has(t)) return Wi.get(t);
		{
			const n = new Zi(e, t, i, r);
			return Wi.set(t, n), n;
		}
	}
	static removeBindGroupLayoutFromCache(e) {
		Wi.delete(e);
	}
}
class Ki {
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
class Qi {
	constructor(e, t, i, r) {
		(this.label = e),
			(this.currentBinding = 0),
			(this.defineDirty = !0),
			(this.defines = {}),
			(this._uniforms = new Map()),
			(this.groupIndex = xe(r, 0)),
			(this.layoutIndex = xe(i, 0));
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
	setUniformBuffer(e, t, i) {
		this._uniforms.get(e) ||
			((t.binding = this.currentBinding),
			this.setDefine(e.concat("Binding"), i ?? this.currentBinding),
			(this.currentBinding += 1),
			this._uniforms.set(e, t));
	}
	setTexture(e, t, i, r, n, s) {
		if (this._uniforms.get(e)) return;
		const a = new Oi(e, i ?? this.currentBinding, t, r, n, s);
		this.setDefine(e.concat("Binding"), i ?? this.currentBinding),
			(this.currentBinding += 1),
			this._uniforms.set(e, a);
	}
	setSampler(e, t, i, r) {
		if (this._uniforms.get(e)) return;
		const n = new Bi(e, i ?? this.currentBinding, t, r);
		this.setDefine(e.concat("Binding"), i ?? this.currentBinding),
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
			this.groupLayout || (this.groupLayout = this.createBindGroupLayout(e, this.label, this.layoutIndex)),
			this.bindGroup || (this.bindGroup = this.createBindGroup(e, this.label, this.groupIndex)),
			this.bindGroup.bind(t);
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
			Zi.removeBindGroupLayoutFromCache(this.groupLayout),
			(this.bindGroup = void 0);
	}
	createBindGroup(e, t, i) {
		const { entities: r, dynamic: n, alignedSize: s, maxOffset: a } = this.createBindGroupEntity();
		return new it({
			label: t,
			entires: r,
			device: e,
			layout: this.groupLayout,
			index: i || 0,
			dynamic: n,
			alignedSize: s,
			maxOffset: a
		});
	}
	createBindGroupLayout(e, t, i) {
		const r = this.createBindGroupLayoutEntry();
		return Zi.getBindGroupLayoutFromCache(e, t + "-" + r.uid, r.layouts, i || 0);
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
			this._uniforms.forEach((i) => {
				t.has(i.name) ||
					((e = "" === e ? e.concat(i.name) : e.concat(", ").concat(i.name)),
					t.set(i.name, this.createOneLayoutEntry(i)));
			}),
			(e = `uniforms[${e}]`),
			{ uid: e, layouts: [...t.values()] }
		);
	}
	createBindGroupEntity() {
		const e = new Map();
		let t = !1,
			i = 0,
			r = 0;
		return (
			this._uniforms.forEach((n) => {
				e.has(n.name) ||
					(n?.hasDynamicOffset && ((t = !0), (r = n.maxOffset), (i = 256 * Math.ceil(n.uniformsSize / 1024))),
					e.set(n.name, this.creayeOneGroupEntity(n)));
			}),
			{ entities: [...e.values()], dynamic: t, alignedSize: i, maxOffset: r }
		);
	}
	createOneLayoutEntry(e) {
		let t;
		return (
			e.isUniformBuffer
				? (t = new Ki({ binding: e.binding, buffer: e.layoutType, visibility: e.visibility }))
				: e.isTexture
				? (t = new Ki({
						binding: e.binding,
						visibility: e.visibility,
						texture: "texture" == e.type ? e.layoutType : void 0,
						storageTexture: "storageTexture" == e.type ? e.storageTextureLayoutType : void 0
				  }))
				: e.isSampler && (t = new Ki({ binding: e.binding, visibility: e.visibility, sampler: e.layoutType })),
			t
		);
	}
	creayeOneGroupEntity(e) {
		let t;
		return (
			e.isUniformBuffer
				? (t = new rt({
						binding: e.binding,
						resource: { buffer: e.buffer.gpuBuffer, offset: e.offset, size: e.bufferSize }
				  }))
				: e.isTexture
				? (t = new rt({ binding: e.binding, resource: e?.textureView ?? e.texture.textureView }))
				: e.isSampler && (t = new rt({ binding: e.binding, resource: e.sampler.gpuSampler })),
			t
		);
	}
}
class Ji {
	constructor() {
		(this.label = void 0),
			(this.type = void 0),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0),
			(this._diffuse = new pi(0, 0, 0)),
			(this._opacity = 1),
			(this.shaderData = void 0),
			(this.shaderSource = void 0),
			(this.dirty = !0),
			(this._emissive = new pi(0, 0, 0)),
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
		this.shaderData && this.shaderData.destroy(), (this.shaderData = new Qi(this.type, 0)), (this.ready = !0);
	}
	init() {
		const e = new Te(),
			t = new Me(),
			i = new Ee();
		(this._renderState = new ve()),
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
class er extends Ji {
	constructor(e) {
		super();
		const { type: t, frag: i, vert: r, defines: n, light: s, shaderId: a } = e;
		(this.type = a ?? t),
			(this.shaderMaterialParms = e),
			(this.shaderSource = new pe({
				shaderId: a ?? t,
				render: { fragShader: i, vertShader: r },
				defines: xe(n, {})
			})),
			(this.uniforms = e.uniforms),
			(this.light = s || !1);
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	clone() {
		return new er(this.shaderMaterialParms);
	}
	createShaderData(e) {
		const { uniformBuffers: t, uniformTextureAndSampler: i } = this.shaderMaterialParms;
		super.createShaderData();
		const r = this.shaderData;
		return t?.forEach?.((t) => this.createUniformBuffer(t, e)), i && this.addUniformToShaderData(i), r;
	}
	createUniformBuffer(e, t) {
		const {
				type: i = "uniform",
				usage: n = r.Uniform | r.CopyDst,
				uniforms: s,
				uid: a,
				binding: o,
				buffer: l,
				bufferSize: c,
				visibility: h
			} = e,
			u = new Xi({ label: a, type: i, usage: n, binding: o, buffer: l, visibility: h, size: l?.size ?? c });
		this.shaderData.setUniformBuffer(a, u), l || this.addUniformToShaderData(s, u, t);
	}
	addUniformToShaderData(e, t, i) {
		if (!e) return;
		Object.getOwnPropertyNames(e).map((r) => {
			Yi(r, e[r], this.shaderData, i, t);
		});
	}
}
function tr() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
		const t = (16 * Math.random()) | 0;
		return ("x" === e ? t : (3 & t) | 8).toString(16);
	});
}
class ir extends ni {
	constructor(e, t) {
		super(),
			(this.geometry = e),
			(this.material = t),
			(this.type = Z.Mesh),
			(this.frustumCull = !0),
			(this.uid = tr()),
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
		e.cullingVolume.computeVisibility(this.geometry.boundingSphere) !== F.OUTSIDE &&
			this.frustumCull &&
			(this.material.transparent ? e.renderQueue.transparent.push(this) : e.renderQueue.opaque.push(this));
	}
	beforeRender() {}
	afterRender() {}
	getDrawCommand(e, t, i) {
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
					lightShaderData: this.material.light ? i?.lightShaderData : void 0,
					useLight: this.material.light
				}))),
			e)
		) {
			if (!this.subCommands[t]) {
				const i = e.clone();
				i.update(void 0, this),
					i.dirty && (i.dirty = !1),
					(this.subCommands[t] = this.drawCommand.shallowClone(i));
			}
			return this.subCommands[t];
		}
		return this.drawCommand;
	}
	destroy() {
		this.geometry.destroy(), this.material.destroy();
	}
}
class rr {
	constructor(e, t) {
		if (!(e && e instanceof ci)) throw new Error("The parameter must be Light instance");
		(this.light = e),
			(this.scene = t),
			(this.debuggerSize = { width: 256, height: 256 }),
			(this.mesh = this._createShadowMapMesh());
		const i = this.light.shadow.getShadowMapTexture();
		(this.material.shaderMaterialParms.uniformTextureAndSampler.texture.value = i),
			(this.mesh.type = Z.Debug),
			this.scene.add(this.mesh);
	}
	_createShadowMapMesh() {
		const e = me("shadowMapDebugger", { positionLocation: 0 });
		return (
			(this.geometry = new Wt(2, 2)),
			(this.material = new er({
				shaderId: "shadowMapDebugger",
				frag: e.frag,
				vert: e.vert,
				uniformTextureAndSampler: {
					texture: { type: "texture", value: void 0 },
					sampler: { type: "sampler", value: new Re({ magFilter: "linear", minFilter: "linear" }) }
				}
			})),
			(this.material.renderState.viewport = new we(0, 0, this.debuggerSize.width, this.debuggerSize.height)),
			new ir(this.geometry, this.material)
		);
	}
	setSize(e, t) {
		e && t && ((this.debuggerSize.width = e), (this.debuggerSize.height = t), this.update());
	}
	update() {
		this.material.renderState.viewport = new we(0, 0, this.debuggerSize.width, this.debuggerSize.height);
	}
}
class nr extends Ji {
	constructor() {
		super(), (this.type = "color"), (this.shaderSource = new pe({ shaderId: this.type, defines: {} }));
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData();
		const i = new Xi({ label: "color" });
		i.setUniform("modelMatrix", () => t.modelMatrix, Q.Mat4), this.shaderData.setUniformBuffer("color", i);
	}
}
class sr extends ir {
	constructor() {
		super(),
			(this.type = Z.Axes),
			(this.distanceToCamera = 10),
			(this.material = new nr()),
			(this.material.wireframe = !0),
			this.init();
	}
	update(e) {
		this.updateMatrix(), this.material.update(e, this), e.renderQueue.opaque.push(this);
	}
	init() {
		const e = [0, 1, 2, 3, 4, 5];
		(this.geometry = new Yt({})),
			this.geometry.setAttribute(new Ke("position", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], 3)),
			this.geometry.setAttribute(
				new Ke("color", [1, 0, 0, 1, 1, 0.5, 0.5, 1, 0, 1, 0, 1, 0.5, 1, 0.5, 1, 0, 0, 1, 1, 0.5, 0.5, 1, 1], 4)
			),
			this.geometry.setIndice(e),
			(this.geometry.count = e.length);
	}
}
class ar extends Yt {
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
function or() {
	return !0;
}
const lr = new (class {
	constructor() {
		(this._numberOfTextures = 0),
			(this._textures = new Map()),
			(this._numberOfTextures = 0),
			(this._texturesToRelease = new Map()),
			(this.defaultSampler = new Re({
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
		if (De(t)) return delete this._texturesToRelease[e], ++t.count, t.texture;
	}
	addTexture(e, t) {
		const i = { texture: t, count: 1 };
		(t.finalDestroy = t.destroy),
			(t.destroy = () => {
				0 == --i.count && this._texturesToRelease.set(e, i);
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
				e.isDestroyed = or;
			})(this)
		);
	}
})();
async function cr(e) {
	const t = e.map((e) => {
			const t = document.createElement("img");
			return (t.src = e), t.decode().then(() => createImageBitmap(t));
		}),
		i = await Promise.all(t);
	await Promise.all(i);
	const r = new Re({ magFilter: "linear", minFilter: "linear" }),
		n = i.map((e, t) => ({ source: e, width: e.width, height: e.height, depth: 1, x: 0, y: 0, z: t }));
	return {
		texture: new Ae({
			size: { width: i[0].width, height: i[0].height, depth: 6 },
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
			data: n,
			viewFormats: "cube",
			mipLevelCount: 6,
			needMipMap: !0
		}),
		sampler: r
	};
}
class hr extends Ji {
	constructor() {
		super(),
			(this.type = "skybox"),
			(this.shaderSource = new pe({ shaderId: this.type, defines: {} })),
			(this.loadFish = !1),
			(this.renderState.depthStencil.depthWriteEnabled = !1),
			(this.renderState.depthStencil.depthCompare = f.LessEqual);
	}
	async loadTexture(e) {
		const t = await cr(e);
		(this.loadFish = !0),
			lr.addTexture("specular", t.texture),
			(this.baseTexture = t.texture),
			(this.baseSampler = t.sampler);
	}
	update(e, t) {
		this.loadFish && (this.shaderData || this.createShaderData(t));
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new Xi({ label: "skybox" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			this.shaderData.setUniformBuffer("skybox", t),
			this.shaderData.setTexture("baseTexture", this.baseTexture),
			this.shaderData.setSampler("baseSampler", this.baseSampler);
	}
}
class ur extends ir {
	constructor(e) {
		super(),
			(this.type = Z.Skybox),
			(this.visibility = !0),
			(this.material = new hr()),
			e && this.material.loadTexture(e),
			(this.geometry = new ar()),
			(this.isSkyBox = !0);
	}
	update(e) {
		this.updateMatrix(),
			this.geometry.update(e),
			this.material.update(e, this),
			this.visibility && e.renderQueue.pre.push(this);
	}
}
class fr extends ni {
	constructor() {
		super(), (this._notUpdateMatrix = !1), (this.visiblity = !1), (this.id = tr());
	}
	setMatrix4(e) {
		this.modelMatrix.set(e), (this._notUpdateMatrix = !0);
	}
	updateMatrix(e) {
		this._notUpdateMatrix || super.updateMatrix(e);
	}
}
class dr extends ir {
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
		const { frameState: t, camera: i } = e,
			r = this.renderInstances.length;
		(this.renderInstances = []),
			this.instances.forEach((e) => {
				e.updateMatrix(this?.parent?.modelMatrix),
					(e.visiblity = this.getInstanceVisiblity({ instance: e, frameState: t, camera: i })),
					e.visiblity && this.renderInstances.push(e);
			}),
			(this.material.dirty = this.renderInstances.length === r),
			this.material.dirty && (this.hasAddInstances = !1);
	}
	getInstanceVisiblity(e) {
		const { instance: t, frameState: i, camera: r } = e;
		this.geometry.boundingSphere.update(t.modelMatrix),
			(this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(r));
		const n = i.cullingVolume.computeVisibility(this.geometry.boundingSphere);
		return n === F.INTERSECTING || n === F.INSIDE;
	}
	addUniformsToMaterial() {
		if (!this.material.shaderData) return;
		this.hasAddInstances = !0;
		const e = new Xi({
			label: "instanceMatrixsBuffer",
			type: m.ReadOnlyStorage,
			usage: r.Storage | r.CopyDst,
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
class mr {
	constructor(e) {
		(this.dispatch = e.dispatch), (this.shaderData = e.shaderData), (this.shaderSource = e.shaderSource);
	}
	render(e) {
		const { device: t, passEncoder: i } = e;
		this.shaderData?.bind?.(t, i);
		$.getComputePipelineFromCache(t, this, [this.shaderData.groupLayout]).bind(i);
		const { x: r, y: n, z: s } = this.dispatch;
		i.dispatchWorkgroups(r, n, s);
	}
}
class pr {
	constructor(e) {
		(this.modelParams = e),
			(this.renderType = null != this.modelParams.compute ? "compute" : "render"),
			(this.vertexBuffers = new Map());
	}
	render(e) {
		const { device: t, passEncoder: i, viewPort: r, scissorTest: n } = e;
		this.command || (this.command = this.createDrawCommand()),
			this.command.render({
				device: t,
				passEncoder: i,
				viewPort: r ? we.fromViewPortProps(r) : void 0,
				scissorTest: n ? be.fromScissorTestProps(n) : void 0
			});
	}
	compute(e) {
		const { device: t, passEncoder: i } = e;
		this.command || (this.command = this.createComputeCommand()),
			this.command.render({ device: t, passEncoder: i });
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
		const i = this.createIndexBuffer(),
			r = this.createShaderSource(),
			n = this.createRenderState();
		return new Y({
			vertexBuffers: t,
			shaderData: this.shaderData,
			indexBuffer: i,
			shaderSource: r,
			renderState: n,
			drawParams: e
		});
	}
	createComputeCommand() {
		const { dispatch: e } = this.modelParams,
			t = this.createShaderData(),
			i = this.createShaderSource();
		return new mr({ dispatch: e, shaderData: t, shaderSource: i });
	}
	createVertexBuffer() {
		const { vertexBuffers: e, shaderId: t } = this.modelParams;
		let i = 0;
		return (
			e?.map((e, r) => {
				const { attributes: n, stepMode: s, uid: a, arrayStride: o } = e,
					l = new $t({ label: t, index: r, locationIndex: i, stepMode: s, arrayStride: o });
				return (
					Object.keys(n).forEach((e) => {
						const { size: t, value: r, names: s, itemSizes: a, buffer: o } = n[e];
						l.setAttribute(s?.length > 0 ? (o ? new Je(s, o, a) : new Qe(s, r, a)) : new Ke(e, r, t));
						i += s?.length > 0 ? s?.length : 1;
					}),
					this.vertexBuffers.set(a, l),
					l
				);
			}) || []
		);
	}
	createShaderSource() {
		const { vert: e, frag: t, compute: i, shaderId: r } = this.modelParams;
		return new pe({ shaderId: r, render: { vertShader: e, fragShader: t }, compute: { computeShader: i } });
	}
	createShaderData() {
		const { shaderId: e, uniformBuffers: t, uniformTextureAndSampler: i } = this.modelParams,
			r = new Qi(e);
		return t.forEach((e) => this.createUniformBuffer(e, r)), this.addUniformToShaderData(i, r, void 0), r;
	}
	createRenderState() {
		const {
			blendConstant: e,
			depthStencil: t,
			viewPort: i,
			scissorTest: r,
			targets: n,
			multiSample: s,
			primitive: a,
			stencilReference: o
		} = this.modelParams.renderState;
		return new ve({
			scissorTest: r ? be.fromScissorTestProps(r) : void 0,
			viewport: i ? we.fromViewPortProps(i) : void 0,
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
		let i;
		return e && ((i = new qt(t + "IndexBuffer")), i.setIndices(e)), i;
	}
	createUniformBuffer(e, t) {
		const {
				type: i = "uniform",
				usage: n = r.Uniform | r.CopyDst,
				uniforms: s,
				uid: a,
				binding: o,
				buffer: l,
				bufferSize: c,
				visibility: h
			} = e,
			u = new Xi({
				label: a + "_UniformBuffer",
				type: i,
				usage: n,
				binding: o,
				buffer: l,
				visibility: h,
				size: l?.size ?? c
			});
		t.setUniformBuffer(a, u), l || this.addUniformToShaderData(s, t, u);
	}
	addUniformToShaderData(e, t, i) {
		if (!e) return;
		Object.getOwnPropertyNames(e).map((r) => {
			Yi(r, e[r], t, void 0, i);
		});
	}
}
class gr extends Yt {
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
class xr extends Ji {
	constructor() {
		super(), (this.type = "sprite"), (this.shaderSource = new pe({ shaderId: this.type, defines: { HAS_UV: !0 } }));
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new Xi({ label: "sprite" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			t.setUniform("color", e, Q.Color),
			t.setUniform("rotation", e, Q.Float),
			t.setUniform("center", e, Q.FloatVec2),
			t.setUniform("opacity", e, Q.Float),
			this.shaderData.setUniformBuffer("sprite", t),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_COLORTEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || lr.defaultSampler));
	}
	destroy() {
		this?.baseTexture?.destroy(), super.destroy();
	}
}
class vr extends ir {
	constructor() {
		super(),
			(this.material = new xr()),
			(this.geometry = new gr()),
			(this.rotation = Math.PI),
			(this.opacity = 1),
			(this.center = new Oe(0, 0)),
			(this.color = new pi(1, 0, 0));
	}
	setTexture(e) {
		this.material.baseTexture = e;
	}
	setSampler(e) {
		this.material.baseSampler = e;
	}
}
class yr extends Yt {
	constructor(e) {
		super({ type: "sphereGeometry" }), (this.defines = { HAS_NORMAL: !0 }), (this.radius = e), this.init();
	}
	init() {
		const {
			positions: e,
			normals: t,
			uvs: i,
			indices: r
		} = (function (e) {
			const t = (e = e || {}).longBands || 32,
				i = e.latBands || 32,
				r = e.radius || 1,
				n = Math.PI / i,
				s = (2 * Math.PI) / t,
				a = t * i * 4,
				o = t * i * 6;
			let l, c;
			const h = new Array(3 * a),
				u = new Array(3 * a),
				f = new Array(2 * a),
				d = new Array(o);
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
				U,
				_,
				L,
				A,
				R,
				C,
				D = 0,
				I = 0;
			for (L = 0; L < i; L++)
				for (l = L * n, v = Math.cos(l), y = Math.cos(l + n), A = 0; A < t; A++)
					(c = A * s),
						(m = Math.sin(l) * Math.cos(c)),
						(p = Math.sin(l) * Math.cos(c + s)),
						(g = Math.sin(l + n) * Math.cos(c)),
						(x = Math.sin(l + n) * Math.cos(c + s)),
						(S = Math.sin(l) * Math.sin(c)),
						(b = Math.sin(l) * Math.sin(c + s)),
						(w = Math.sin(l + n) * Math.sin(c)),
						(T = Math.sin(l + n) * Math.sin(c + s)),
						(E = 1 - A / t),
						(M = 1 - (A + 1) / t),
						(U = 1 - L / i),
						(_ = 1 - (L + 1) / i),
						(R = 3 * D),
						(C = 2 * D),
						(h[R] = m * r),
						(h[R + 1] = v * r),
						(h[R + 2] = S * r),
						(h[R + 3] = p * r),
						(h[R + 4] = v * r),
						(h[R + 5] = b * r),
						(h[R + 6] = g * r),
						(h[R + 7] = y * r),
						(h[R + 8] = w * r),
						(h[R + 9] = x * r),
						(h[R + 10] = y * r),
						(h[R + 11] = T * r),
						(u[R] = m),
						(u[R + 1] = v),
						(u[R + 2] = S),
						(u[R + 3] = p),
						(u[R + 4] = v),
						(u[R + 5] = b),
						(u[R + 6] = g),
						(u[R + 7] = y),
						(u[R + 8] = w),
						(u[R + 9] = x),
						(u[R + 10] = y),
						(u[R + 11] = T),
						(f[C] = E),
						(f[C + 1] = U),
						(f[C + 2] = M),
						(f[C + 3] = U),
						(f[C + 4] = E),
						(f[C + 5] = _),
						(f[C + 6] = M),
						(f[C + 7] = _),
						(d[I] = D),
						(d[I + 1] = D + 1),
						(d[I + 2] = D + 2),
						(d[I + 3] = D + 2),
						(d[I + 4] = D + 1),
						(d[I + 5] = D + 3),
						(D += 4),
						(I += 6);
			return { positions: h, normals: u, uvs: f, indices: d };
		})({ radius: this.radius });
		this.computeBoundingSphere(e),
			this.setAttribute(new Ke("position", e, 3)),
			this.setAttribute(new Ke("normal", t, 3)),
			this.setAttribute(new Ke("uv", i, 2)),
			this.setIndice(r),
			(this.count = r.length);
	}
}
class Sr extends Yt {
	constructor(e = 10, t = 10, i = 10) {
		super({ type: "boxGeometry" }),
			(this.width = e),
			(this.height = t),
			(this.depth = i),
			(this.defines = { HAS_NORMAL: !0 }),
			this.init();
	}
	init() {
		const {
			positions: e,
			normals: t,
			uvs: i
		} = (function (e) {
			const t = (e = e || {}).dimensions || [1, 1, 1],
				i = e.position || [-t[0] / 2, -t[1] / 2, -t[2] / 2],
				r = i[0],
				n = i[1],
				s = i[2],
				a = t[0],
				o = t[1],
				l = t[2],
				c = { x: r, y: n, z: s + l },
				h = { x: r + a, y: n, z: s + l },
				u = { x: r, y: n + o, z: s + l },
				f = { x: r + a, y: n + o, z: s + l },
				d = { x: r, y: n, z: s },
				m = { x: r + a, y: n, z: s },
				p = { x: r, y: n + o, z: s },
				g = { x: r + a, y: n + o, z: s };
			return {
				positions: [
					c.x,
					c.y,
					c.z,
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
					c.x,
					c.y,
					c.z,
					p.x,
					p.y,
					p.z,
					p.x,
					p.y,
					p.z,
					c.x,
					c.y,
					c.z,
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
					c.x,
					c.y,
					c.z,
					c.x,
					c.y,
					c.z,
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
		this.computeBoundingSphere(e),
			this.setAttribute(new Ke("position", e, 3)),
			this.setAttribute(new Ke("normal", t, 3)),
			this.setAttribute(new Ke("uv", i, 2)),
			(this.count = 36);
	}
}
class br extends Yt {
	constructor(e = 1, t = 0.4, i = 64, r = 8, n = 2, s = 3) {
		super({ type: "torusKnotGeometry" }),
			(this.defines = { HAS_NORMAL: !0 }),
			(this.radius = e),
			(this.tube = t),
			(this.tubularSegments = i),
			(this.radialSegments = r),
			(this.p = n),
			(this.q = s),
			this.init();
	}
	init() {
		const { normals: e, uvs: t, positions: i, indices: r } = this.createGeometry();
		this.computeBoundingSphere(i),
			this.setAttribute(new Ke("position", i, 3)),
			this.setAttribute(new Ke("normal", e, 3)),
			this.setAttribute(new Ke("uv", t, 2)),
			this.setIndice(r),
			(this.count = r.length);
	}
	createGeometry() {
		const e = [],
			t = [],
			i = [],
			r = [],
			n = Math.floor(this.tubularSegments),
			s = Math.floor(this.radialSegments),
			a = new He(),
			o = new He(),
			l = new He(),
			c = new He(),
			h = new He(),
			u = new He(),
			f = new He();
		for (let r = 0; r <= n; ++r) {
			const d = (r / n) * this.p * Math.PI * 2;
			wr(d, this.p, this.q, this.radius, l),
				wr(d + 0.01, this.p, this.q, this.radius, c),
				He.subtract(c, l, u),
				He.add(c, l, f),
				He.cross(u, f, h),
				He.cross(h, u, f),
				h.normalize(),
				f.normalize();
			for (let c = 0; c <= s; ++c) {
				const u = (c / s) * Math.PI * 2,
					d = -this.tube * Math.cos(u),
					m = this.tube * Math.sin(u);
				(a.x = l.x + (d * f.x + m * h.x)),
					(a.y = l.y + (d * f.y + m * h.y)),
					(a.z = l.z + (d * f.z + m * h.z)),
					e.push(a.x, a.y, a.z),
					He.subtract(a, l, o),
					o.normalize(),
					t.push(o.x, o.y, o.z),
					i.push(r / n),
					i.push(c / s);
			}
		}
		for (let e = 1; e <= n; e++)
			for (let t = 1; t <= s; t++) {
				const i = (s + 1) * (e - 1) + (t - 1),
					n = (s + 1) * e + (t - 1),
					a = (s + 1) * e + t,
					o = (s + 1) * (e - 1) + t;
				r.push(i, n, o), r.push(n, a, o);
			}
		return { normals: t, uvs: i, positions: e, indices: r };
	}
}
function wr(e, t, i, r, n) {
	const s = Math.cos(e),
		a = Math.sin(e),
		o = (i / t) * e,
		l = Math.cos(o);
	(n.x = r * (2 + l) * 0.5 * s), (n.y = r * (2 + l) * a * 0.5), (n.z = r * Math.sin(o) * 0.5);
}
class Tr extends Ji {
	constructor() {
		super(),
			(this.type = "phong"),
			(this.color = new pi(1, 0, 0)),
			(this.shaderSource = new pe({ shaderId: this.type, defines: { materialPhong: !0, MATERIAL_PHONG: !0 } })),
			(this.light = !0),
			(this.specular = new pi(1, 1, 1)),
			(this.shininess = 30),
			(this.baseTexture = void 0),
			(this.baseSampler = void 0);
	}
	update(e, t) {
		(this.shaderData && !this.dirty) || this.createShaderData(t);
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new Xi({ label: "phong" });
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
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || lr.defaultSampler)),
			this.normalTexture &&
				(this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture),
				this.shaderData.setSampler("normalSampler", this.normalSampler || lr.defaultSampler));
	}
	destroy() {
		this?.baseTexture?.destroy(), super.destroy();
	}
}
class Er extends Ji {
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
			? Oe.negate(this._normalScale, new Oe())
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
			(this._normalScale = new Oe(1, 1)),
			(this._IBLRender = !0),
			(this.shaderSource = new pe({
				shaderId: this.type,
				defines: { materialPbr: !0, USE_IBL: this._IBLRender, MATERIAL_PBR: !0 }
			}));
	}
	update(e, t) {
		lr.getTexture("specular") && ((this.shaderData && !this.dirty) || this.createShaderData(t));
	}
	createShaderData(e) {
		super.createShaderData();
		const t = new Xi({ label: "pbr" });
		t.setUniform("modelMatrix", () => e.modelMatrix, Q.Mat4),
			t.setUniform("color", this, Q.Color),
			t.setUniform("opacity", this, Q.Float),
			t.setUniform("normalMtrix", () => e.normalMatrix, Q.Mat4),
			t.setUniform("emissive", this, Q.Color),
			t.setUniform("metalness", this, Q.Float),
			t.setUniform("roughness", this, Q.Float),
			this.shaderData.setUniformBuffer("pbr", t),
			(this.specularEnvTexture = lr.getTexture("specular")),
			this.baseTexture &&
				(this.shaderData.setDefine("USE_TEXTURE", !0),
				this.shaderData.setTexture("baseColorTexture", this.baseTexture),
				this.shaderData.setSampler("baseColorSampler", this.baseSampler || lr.defaultSampler)),
			this.metalnessRoughnessTexture &&
				(this.shaderData.setDefine("USE_METALNESSTEXTURE", !0),
				this.shaderData.setTexture("metalnessRoughnessTexture", this.metalnessRoughnessTexture),
				this.shaderData.setSampler(
					"metalnessRoughnessSampler",
					this.metalnessRoughnessSampler || lr.defaultSampler
				)),
			this.normalTexture &&
				(t.setUniform("normalScale", this, Q.FloatVec2),
				this.shaderData.setDefine("USE_NORMALTEXTURE", !0),
				this.shaderData.setTexture("normalTexture", this.normalTexture),
				this.shaderData.setSampler("normalSampler", this.normalSampler || lr.defaultSampler)),
			this.aoTexture &&
				(this.shaderData.setDefine("USE_AOTEXTURE", !0),
				this.shaderData.setTexture("aoTexture", this.aoTexture),
				this.shaderData.setSampler("aoSampler", this.aoSampler || lr.defaultSampler),
				t.setUniform("aoTextureIntensity", this, Q.Float)),
			this.emissiveTexture &&
				(this.shaderData.setDefine("USE_EMISSIVETEXTURE", !0),
				this.shaderData.setTexture("emissiveTexture", this.emissiveTexture),
				this.shaderData.setSampler("emissiveSampler", this.emissiveSampler || lr.defaultSampler)),
			this.specularEnvTexture &&
				this._IBLRender &&
				(this.shaderData.setTexture("specularEnvTexture", this.specularEnvTexture),
				this.shaderData.setSampler("specularEnvSampler", this.specularEnvSampler || lr.defaultSampler));
	}
	destroy() {
		this?.aoTexture?.destroy(),
			this?.baseTexture?.destroy(),
			this?.emissiveTexture?.destroy(),
			this?.normalTexture?.destroy(),
			(this.specularEnvTexture = void 0);
	}
}
class Mr {
	constructor() {
		this._listeners = {};
	}
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
class Ur {
	constructor() {
		(this.pre = []), (this.opaque = []), (this.transparent = []), (this.computes = []), (this.debugQueue = []);
	}
	sort() {
		Ur.sort(this.opaque, 0, this.opaque.length, Ur._compareFromNearToFar),
			Ur.sort(this.transparent, 0, this.transparent.length, Ur._compareFromFarToNear);
	}
	opaqueRender(e, t, i, r, n, s) {
		this.opaque.map((a) => {
			a.ready && (a.beforeRender(), Ur.excuteCommand(a.getDrawCommand(r, n, s), t, i, e), a.afterRender());
		});
	}
	transparentRender(e, t, i, r, n, s) {
		this.transparent.map((a) => {
			a.ready && (a.beforeRender(), Ur.excuteCommand(a.getDrawCommand(r, n, s), t, i, e), a.afterRender());
		});
	}
	computeRender(e, t) {
		this.computes.map((i) => {
			Ur.excuteCompute(i.getCommand(), e, t);
		});
	}
	debugQueueRender(e, t, i, r, n) {
		this.debugQueue.map((s) => {
			s.ready && (s.beforeRender(), Ur.excuteCommand(s.getDrawCommand(r, n), t, i, e), s.afterRender());
		});
	}
	preRender(e, t, i, r) {
		this.pre.map((r) => {
			r.ready && (r.beforeRender(), Ur.excuteCommand(r.getDrawCommand(), t, i, e), r.afterRender());
		});
	}
	static excuteCommand(e, t, i, r) {
		e.render({ device: t.device, passEncoder: i, camera: r, viewPort: t?.viewPort, scissorTest: t?.scissorTest });
	}
	static excuteCompute(e, t, i) {
		e.render({ device: t.device, passEncoder: i });
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
	static sort(e, t, i, r) {
		Ur._quickSort(e, t, i, r);
	}
	static _quickSort(e, t, i, r) {
		for (;;) {
			if (i - t <= 10) return void Ur._insertionSort(e, t, i, r);
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
			const l = a;
			let c = t + 1,
				h = i - 1;
			(e[n] = e[c]), (e[c] = l);
			e: for (let t = c + 1; t < h; t++) {
				let i = e[t],
					n = r(i, l);
				if (n < 0) (e[t] = e[c]), (e[c] = i), c++;
				else if (n > 0) {
					do {
						if ((h--, h == t)) break e;
						n = r(e[h], l);
					} while (n > 0);
					(e[t] = e[h]), (e[h] = i), n < 0 && ((i = e[t]), (e[t] = e[c]), (e[c] = i), c++);
				}
			}
			i - h < c - t ? (this._quickSort(e, h, i, r), (i = c)) : (this._quickSort(e, t, c, r), (t = h));
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
class _r {
	constructor(e, t, i = {}) {
		(this.context = e),
			(this.lightManger = t),
			(this.background = i.background),
			(this.renderQueue = new Ur()),
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
		(this.definesDirty = !0), (this._defines = Xt(e, this._defines, !1));
	}
	update(e, t = {}) {
		(this.background = t.background),
			this.renderQueue.reset(),
			this?.lightManger?.update?.(this, e),
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
class Lr extends ci {
	constructor(e, t) {
		super(e, t), (this.lightType = K.AmbientLight), (this._colorAndIntensity = new ft(e.x, e.y, e.z, t));
	}
	get ColorAndIntensity() {
		return (
			this._colorAndIntensity.set(this.color.x, this.color.y, this.color.z, this.intensity),
			this._colorAndIntensity
		);
	}
}
class Ar {
	constructor(e) {
		(this.spotLights = []),
			(this.pointLights = []),
			(this.directLights = []),
			(this.ambientLight = new Lr(new He(1, 1, 1), 0.2)),
			(this.lightCountDirty = !0),
			(this.openShadow = e.openShadow);
	}
	update(e, t) {
		this.checkLightShadowState(), this.updateLight(t);
	}
	add(e) {
		(this.lightCountDirty = !0),
			e.lightType == K.AmbientLight
				? (this.ambientLight = e)
				: e.lightType == K.DirectionalLight
				? this.directLights.push(e)
				: e.lightType == K.PointLight
				? this.pointLights.push(e)
				: e.lightType == K.SpotLight && this.spotLights.push(e);
	}
	remove(e) {
		(this.lightCountDirty = !0),
			e.lightType == K.AmbientLight
				? (this.ambientLight = new Lr(new He(1, 1, 1), 1))
				: e.lightType == K.DirectionalLight
				? this.directLights.splice(this.directLights.indexOf(e), 1)
				: e.lightType == K.PointLight
				? this.pointLights.splice(this.pointLights.indexOf(e), 1)
				: e.lightType == K.SpotLight && this.spotLights.splice(this.spotLights.indexOf(e), 1);
	}
	checkLightShadowState() {
		const e = this.getAllLights();
		for (let t = 0; t < e.length; t++) {
			const i = e[t];
			i.shadowDirty && ((i.shadowDirty = !1), (this.lightCountDirty = !0));
		}
	}
	updateLightShadow() {
		this.spotLightShadowMapTextureArray && (this.spotLightShadowMapTextureArray.dirty = !0),
			this.pointLightShadowMapTextureArray && (this.pointLightShadowMapTextureArray.dirty = !0),
			this.directLightShadowMapTextureArray && (this.directLightShadowMapTextureArray.dirty = !0);
	}
	updateLight(e) {
		this.lightCountDirty &&
			((this.lightCountDirty = !1),
			this.lightShaderData && this.lightShaderData.destroy(),
			this.createLightShaderData());
	}
	createLightShaderData() {
		(this.lightShaderData = new Qi("light", 0, 2, 2)),
			(this.lightUniformBuffer = new Xi({
				label: "light",
				type: m.ReadOnlyStorage,
				usage: r.Storage | r.CopyDst
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
				i = (this.directLightShadowMapTextureArray = this.createShadowMapTextureArray(this.directLights));
			if (!e && !t && !i) break e;
			this.lightShaderData.setDefine("openShadow", this.openShadow),
				this.lightShaderData.setDefine("OPEN_SHADOW", this.openShadow),
				(this.shadowUniformBuffer = new Xi({
					label: "shadow",
					type: m.ReadOnlyStorage,
					usage: r.Storage | r.CopyDst
				}));
			const n = this.setShadowUniform("spotLightShadows", this.spotLights, Q.SpotLightShadows),
				s = this.setShadowUniform("pointLightShadows", this.pointLights, Q.PointLightShadows),
				a = this.setShadowUniform("directLightShadows", this.directLights, Q.DirtectLightShadows);
			this.lightShaderData.setUniformBuffer("shadow", this.shadowUniformBuffer),
				this.lightShaderData.setDefine("spotLightShadowMapsCount", n),
				this.lightShaderData.setDefine("pointLightShadowMapsCount", s),
				this.lightShaderData.setDefine("directLightShadowMapsCount", a),
				this.lightShaderData.setDefine("USE_SPOTLIGHT_SHADOWMAP", n),
				this.lightShaderData.setDefine("USE_POINTLIGHT_SHADOWMAP", s),
				this.lightShaderData.setDefine("USE_DIRECTLIGHT_SHADOWMAP", a),
				void 0 !== e &&
					(e.textureProp.size.depth != n && console.warn("spotLightShadowMap align has problem"),
					this.lightShaderData.setTexture("spotLightShadowMapTextureArray", e),
					this.lightShaderData.setDefine("SPOTLIGHT_SHADOWMAP_TEXTUREARRAY", !0)),
				void 0 !== t &&
					(t.textureProp.size.depth != s && console.warn("pointLightShadowMap align has problem"),
					this.lightShaderData.setTexture("pointLightShadowMapTextureArray", t),
					this.lightShaderData.setDefine("POINTLIGHT_SHADOWMAP_TEXTUREARRAY", !0)),
				void 0 !== i &&
					(i.textureProp.size.depth != a && console.warn("directLightShadowMap align has problem"),
					this.lightShaderData.setTexture("directLightShadowMapTextureArray", i),
					this.lightShaderData.setDefine("DIRECTLIGHT_SHADOWMAP_TEXTUREARRAY", !0)),
				this.lightShaderData.setSampler("shadowSampler", new Re({ compare: f.Less }, { type: p.Comparison }));
		}
		this.lightShaderData.setUniformBuffer("light", this.lightUniformBuffer);
	}
	getAllLights() {
		return [].concat(this.spotLights, this.pointLights, this.directLights);
	}
	destroy() {
		this.lightShaderData.destroy(), this.lightUniformBuffer.destroy();
	}
	createShadowMapTextureArray(e) {
		if (e.length <= 0) return;
		const t = [];
		for (let i = 0; i < e.length; i++) {
			const r = e[i];
			if (r.shadow) {
				const e = r.shadow.getShadowMapTexture(),
					n = {
						source: e,
						width: e.textureProp.size.width,
						height: e.textureProp.size.height,
						depth: 1,
						x: 0,
						y: 0,
						z: i
					};
				t.push(n);
			}
		}
		if (t.length <= 0) return;
		return new Ae({
			size: { width: t[0].width, height: t[0].height, depth: t.length },
			fixedSize: !0,
			sampleType: g.Depth,
			format: c.Depth24Plus,
			usage: a.TextureBinding | a.CopyDst,
			data: t,
			viewFormats: o.E2dArray
		});
	}
	setShadowUniform(e, t, i) {
		if (t.length) {
			const r = [];
			for (let e = 0; e < t.length; e++) {
				const i = t[e];
				i.shadow && r.push(i);
			}
			return this.shadowUniformBuffer.setUniform(e, () => r, i, r.length), r.length;
		}
	}
}
class Rr {
	constructor() {
		this._list = new Map();
	}
	get length() {
		return this._list.size;
	}
	update(e, t) {
		this._list.forEach((i) => {
			i.update(e, t);
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
class Cr {
	constructor() {
		(this.geometry = new Yt({})),
			this.geometry.setAttribute(new Ke("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)),
			(this.geometry.count = 6);
		const e = me("resolve", { positionLocation: 0 });
		(this.material = new er({
			shaderId: "resolve",
			frag: e.frag,
			vert: e.vert,
			uniformTextureAndSampler: {
				texture: { type: "texture", value: void 0 },
				sampler: { type: "sampler", value: new Re({ magFilter: "linear", minFilter: "linear" }) }
			}
		})),
			(this.quadMesh = new ir(this.geometry, this.material));
	}
	setSize(e, t) {
		this.canvasRenderTarget.setSize(e, t), (this.material.dirty = !0);
	}
	render(e, t) {
		this.canvasRenderTarget || this.initRenderTarget(e),
			(this.material.shaderMaterialParms.uniformTextureAndSampler.texture.value = t),
			this.material.update(void 0, this.quadMesh);
		const i = this.quadMesh.getDrawCommand(),
			r = this.canvasRenderTarget.beginRenderPass(e.device);
		i.render({ device: e.device, passEncoder: r }), this.canvasRenderTarget.endRenderPass();
	}
	initRenderTarget(e) {
		const { width: t, height: i, depth: r } = e.presentationSize,
			n = new Ce({ r: 0, g: 0, b: 0, a: 0 }, { textureView: () => e.context.getCurrentTexture().createView() }),
			s = new Ae({
				label: "resolveDepth",
				size: { width: t, height: i, depth: r },
				format: c.Depth24Plus,
				usage: a.RenderAttachment
			}),
			o = new Ce(1, { texture: s });
		this.canvasRenderTarget = new nt("render", [n], o);
	}
}
class Dr {
	constructor() {
		(this._postEffects = new Map()), (this.currentColorTexture = void 0), (this.resolveFrame = new Cr());
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
		this._postEffects.forEach((i) => i.setSize(e, t)), this.resolveFrame.setSize(e, t);
	}
	postEffectsSort() {}
}
class Ir {
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
class zr extends Ir {
	constructor(e) {
		super(e), this.init(e);
	}
	beforeRender(e) {
		this.updateRenderTarget(e), super.beforeRender();
	}
	render(e, t) {
		const { renderQueue: i, lightManger: r } = e;
		i.sort(),
			i.preRender(t, this.context, this.passRenderEncoder),
			i.transparentRender(t, this.context, this.passRenderEncoder, void 0, void 0, r),
			i.opaqueRender(t, this.context, this.passRenderEncoder, void 0, void 0, r),
			i.debugQueueRender(t, this.context, this.passRenderEncoder);
	}
	init(e) {
		this.createRenderTarget(e);
	}
	createRenderTarget(e) {
		const { width: t, height: i, depth: r } = e.presentationSize,
			n = new Ae({
				label: "basicPassColor",
				size: { width: t, height: i, depth: r },
				format: this.context.presentationFormat,
				usage: a.RenderAttachment | a.TextureBinding
			}),
			s = new Ae({
				label: "basicPassDepth",
				size: { width: t, height: i, depth: r },
				format: c.Depth24Plus,
				usage: a.RenderAttachment
			}),
			o = new Ce({ r: 0, g: 0, b: 0, a: 0 }, { texture: n }),
			l = new Ce(1, { texture: s });
		this.renderTarget = new nt("render", [o], l);
	}
	setSize(e, t) {
		this.renderTarget.setSize(e, t, 1);
	}
	updateRenderTarget(e) {
		if (e?.background?.value instanceof pi) {
			const { red: t, green: i, blue: r } = e.background.value,
				n = e.background?.opacity,
				s = { r: t, g: i, b: r, a: n ?? 1 };
			this.renderTarget.colorAttachments[0].value = s;
		}
	}
}
class Pr {
	constructor(e, t) {
		(this.normal = He.clone(e)), (this.distance = t);
	}
	normalize() {
		const e = 1 / this.normal.length();
		return (this.normal = He.multiplyByScalar(this.normal, e, this.normal)), (this.distance *= e), this;
	}
	static fromPointNormal(e, t, i) {
		if (!Pe.equalsEpsilon(He.magnitude(t), 1, Pe.EPSILON6)) throw new Error("normal must be normalized.");
		const r = -He.dot(t, e);
		return De(i) ? (He.clone(t, i.normal), (i.distance = r), i) : new Pr(t, r);
	}
	static fromVector4(e, t) {
		const i = He.fromVector4(e, Nr),
			r = e.w;
		if (!Pe.equalsEpsilon(He.magnitude(i), 1, Pe.EPSILON6)) throw new Error("normal must be normalized.");
		return De(t) ? (He.clone(i, t.normal), (t.distance = r), t) : new Pr(i, r);
	}
	static getPointDistance(e, t) {
		return He.dot(e.normal, t) + e.distance;
	}
	static projectPointOntoPlane(e, t, i) {
		De(i) || (i = new He());
		const r = Pr.getPointDistance(e, t),
			n = He.multiplyByScalar(e.normal, r, Or);
		return He.subtract(t, n, i);
	}
	static transform(e, t, i) {
		const r = e.normal,
			n = e.distance,
			s = xt.inverseTranspose(t, Br);
		let a = ft.fromElements(r.x, r.y, r.z, n, Vr);
		a = xt.multiplyByVector(s, a, a);
		const o = He.fromVector4(a, Fr);
		return (a = ft.divideByScalar(a, He.magnitude(o), a)), Pr.fromVector4(a, i);
	}
	static clone(e, t) {
		return De(t) ? (He.clone(e.normal, t.normal), (t.distance = e.distance), t) : new Pr(e.normal, e.distance);
	}
	static equals(e, t) {
		return e.distance === t.distance && He.equals(e.normal, t.normal);
	}
}
(Pr.ORIGIN_XY_PLANE = Object.freeze(new Pr(He.UNIT_Z, 0))),
	(Pr.ORIGIN_YZ_PLANE = Object.freeze(new Pr(He.UNIT_X, 0))),
	(Pr.ORIGIN_ZX_PLANE = Object.freeze(new Pr(He.UNIT_Y, 0)));
const Nr = new He(),
	Or = new He(),
	Br = new xt(),
	Vr = new ft(),
	Fr = new He();
class Gr {
	constructor(e) {
		this.planes = xe(e, [
			new Pr(He.UNIT_Z, 0),
			new Pr(He.UNIT_Z, 0),
			new Pr(He.UNIT_Z, 0),
			new Pr(He.UNIT_Z, 0),
			new Pr(He.UNIT_Z, 0),
			new Pr(He.UNIT_Z, 0)
		]);
	}
	static fromBoundingSphere(e, t) {
		if (!De(e)) throw new Error("boundingSphere is required.");
		De(t) || (t = new Gr());
		const i = kr.length,
			r = t.planes;
		r.length = 2 * i;
		const n = e.center,
			s = e.radius;
		let a = 0;
		for (let e = 0; e < i; ++e) {
			const t = kr[e];
			let i = r[a],
				o = r[a + 1];
			De(i) || (i = r[a] = new ft()),
				De(o) || (o = r[a + 1] = new ft()),
				He.multiplyByScalar(t, -s, Hr),
				He.add(n, Hr, Hr),
				(i.x = t.x),
				(i.y = t.y),
				(i.z = t.z),
				(i.w = -He.dot(t, Hr)),
				He.multiplyByScalar(t, s, Hr),
				He.add(n, Hr, Hr),
				(o.x = -t.x),
				(o.y = -t.y),
				(o.z = -t.z),
				(o.w = -He.dot(He.negate(t, qr), Hr)),
				(a += 2);
		}
		return t;
	}
	computeVisibility(e) {
		if (!De(e)) throw new Error("boundingVolume is required.");
		const t = this.planes;
		let i = !1;
		for (let r = 0, n = t.length; r < n; ++r) {
			const n = e.intersectPlane(t[r]);
			if (n === F.OUTSIDE) return F.OUTSIDE;
			n === F.INTERSECTING && (i = !0);
		}
		return i ? F.INTERSECTING : F.INSIDE;
	}
}
(Gr.MASK_OUTSIDE = 4294967295), (Gr.MASK_INSIDE = 0), (Gr.MASK_INDETERMINATE = 2147483647);
const kr = [new He(), new He(), new He()];
He.clone(He.UNIT_X, kr[0]), He.clone(He.UNIT_Y, kr[1]), He.clone(He.UNIT_Z, kr[2]);
const Hr = new He(),
	qr = new He();
new ft(), new Pr(new He(1, 0, 0), 0);
class jr extends ni {
	constructor() {
		super(),
			(this._viewMatrix = void 0),
			(this.type = Z.Camera),
			(this.cullingVolume = new Gr()),
			(this._viewMatrix = new xt()),
			(this._vpMatrix = new xt()),
			(this.projectMatrixDirty = !0),
			this.createShaderData();
	}
	get viewMatrix() {
		return this.updateMatrix(), xt.inverse(this.modelMatrix, this._viewMatrix), this._viewMatrix;
	}
	get projectionMatrix() {
		return this.updateProjectionMatrix(), this._projectionMatrix;
	}
	get vpMatrix() {
		return xt.multiply(this.projectionMatrix, this.viewMatrix, this._vpMatrix), this._vpMatrix;
	}
	get inverseViewMatrix() {
		return this.updateMatrix(), this.modelMatrix;
	}
	updateProjectionMatrix() {}
	getCullingVolume() {
		const e = this.viewMatrix.clone(new xt()),
			t = xt.multiply(this.projectionMatrix, e, new xt()),
			i = this.cullingVolume.planes,
			r = t,
			n = r[0],
			s = r[1],
			a = r[2],
			o = r[3],
			l = r[4],
			c = r[5],
			h = r[6],
			u = r[7],
			f = r[8],
			d = r[9],
			m = r[10],
			p = r[11],
			g = r[12],
			x = r[13],
			v = r[14],
			y = r[15];
		return (
			(i[0] = new Pr(new He(o - n, u - l, p - f), y - g)),
			i[0].normalize(),
			(i[1] = new Pr(new He(o + n, u + l, p + f), y + g)),
			i[1].normalize(),
			(i[2] = new Pr(new He(o + s, u + c, p + d), y + x)),
			i[2].normalize(),
			(i[3] = new Pr(new He(o - s, u - c, p - d), y - x)),
			i[3].normalize(),
			(i[4] = new Pr(new He(o - a, u - h, p - m), y - v)),
			i[4].normalize(),
			(i[5] = new Pr(new He(o + a, u + h, p + m), y + v)),
			i[5].normalize(),
			this.cullingVolume
		);
	}
	createShaderData() {
		this.shaderData = new Qi("camera", 0, 1, 1);
		const e = new Xi({ label: "camera" });
		e.setUniform("projectionMatrix", () => this.projectionMatrix, Q.Mat4),
			e.setUniform("viewMatrix", () => this.viewMatrix, Q.Mat4),
			e.setUniform("inverseViewMatrix", () => this.inverseViewMatrix, Q.Mat4),
			e.setUniform("position", () => this.position, Q.FloatVec3),
			this.shaderData.setUniformBuffer("camera", e);
	}
}
class $r extends jr {
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
			(this.cullingVolume = new Gr()),
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
			(this._projectionMatrix = xt.makePerspective(
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
class Xr extends $r {
	constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
		super(e, t, i, r), (this.vpMatrixArray = [new xt(), new xt(), new xt(), new xt(), new xt(), new xt()]);
	}
	createShaderData() {
		this.shaderData = new Qi("camera", 0, 1, 1);
		const e = new Xi({ label: "pointLightShadowCamera", type: "read-only-storage", usage: r.Storage | r.CopyDst });
		e.setUniform("vpMatrix", () => this.vpMatrix, Q.Mat4),
			this.shaderData.setUniformBuffer("pointLightShadowCamera", e),
			this.shaderData.setDefine("isPointLightShadowMap", !0),
			this.shaderData.setDefine("IS_POINTLIGHT_SHADOWMAP", !0);
	}
	updateVpMatrixArrayAndIndex(e) {
		xt.clone(this.vpMatrix, this.vpMatrixArray[e]);
	}
}
class Yr {
	constructor(e, t) {
		(this._shadowMapSize = e),
			(this._camera = t),
			(this.viewPortDirty = !0),
			(this.vpMatrixDirty = !0),
			this._init();
	}
	get camera() {
		return this._camera;
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
	_init() {
		this._initShadowMapTexture();
	}
	_initShadowMapTexture() {
		this._createShadowMapTexture();
	}
	_createShadowMapTexture() {
		this._shadowMap = new Ae({
			size: { width: this._shadowMapSize.x, height: this._shadowMapSize.y, depth: 1 },
			fixedSize: !0,
			sampleType: g.Depth,
			format: c.Depth24Plus,
			usage: a.RenderAttachment | a.TextureBinding | a.CopySrc
		});
	}
	update(e) {}
}
class Wr extends Yr {
	get camera() {
		return this._camera;
	}
	constructor() {
		const e = new Xr(90, 1, 0.1, 500);
		super(new Oe(1536, 1024), e),
			(this.viewportSize = new Oe(512, 512)),
			(this.currentViewportIndex = 0),
			(this.type = "pointLightShadow"),
			(this.vpMatrixArrayDirty = !0),
			(this._viewports = [
				new ft(0, 0, 1 / 3, 0.5),
				new ft(1, 0, 1 / 3, 0.5),
				new ft(2, 0, 1 / 3, 0.5),
				new ft(0, 1, 1 / 3, 0.5),
				new ft(1, 1, 1 / 3, 0.5),
				new ft(2, 1, 1 / 3, 0.5)
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
			]);
	}
	update(e) {
		this.updateMatrices(e);
	}
	updateMatrices(e) {
		if (this.camera instanceof Xr) {
			this.camera.position.copy(e.position);
			const t = He.clone(e.position);
			t.add(this._pointLightShadowLookDirections[this.currentViewportIndex]),
				this.camera.up.copy(this._pointLightShadowUps[this.currentViewportIndex]);
			const { x: i, y: r, z: n } = t;
			this.camera.lookAt(i, r, n),
				this.camera.updateMatrix(),
				this.camera.updateVpMatrixArrayAndIndex(this.currentViewportIndex),
				5 == this.currentViewportIndex && (this.vpMatrixArrayDirty = !0);
		}
	}
}
class Zr extends ci {
	get shadow() {
		return this._shadow;
	}
	set shadow(e) {
		(this.shadowDirty = !0), (this._shadow = e);
	}
	constructor(e, t, i = 0, r = 4, n = !0) {
		super(e, t),
			(this._distance = i),
			(this._decay = r),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.lightType = K.PointLight),
			n && (this.shadow = new Wr());
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
class Kr extends Ir {
	constructor(e) {
		super(e), this.init(e);
	}
	render(e, t) {
		const { renderQueue: i, context: r, lightManger: n } = e,
			s = n.getAllLights();
		if (0 !== s.length) {
			for (let e = 0; e < s.length; e++) {
				const t = s[e],
					a = t.shadow;
				if (a)
					if (a instanceof Wr && t instanceof Zr)
						for (let e = 0; e < a.viewports.length; e++) {
							if (0 === e) this.renderTarget.depthAttachment.op = "clear";
							else this.renderTarget.depthAttachment.op = "load";
							this.beforeRender({ shadow: a });
							const s = a.viewports[e],
								o = a.viewportSize;
							(a.currentViewportIndex = e),
								a.update(t),
								r.setViewPort(s.x * o.x, s.y * o.y, o.x, o.y),
								r.setScissorTest(s.x * o.x, s.y * o.y, o.x, o.y),
								this.subRender(i, a, n),
								super.afterRender();
						}
					else
						(this.renderTarget.depthAttachment.op = "clear"),
							this.beforeRender({ shadow: a }),
							a.update(t),
							r.setViewPort(0, 0, a.shadowMapSize.x, a.shadowMapSize.y),
							r.setScissorTest(0, 0, a.shadowMapSize.x, a.shadowMapSize.y),
							this.subRender(i, a, n),
							super.afterRender();
			}
			n.updateLightShadow(), r.resetViewPortToFullCanvas();
		}
	}
	subRender(e, t, i) {
		e.sort(),
			e.transparentRender(t.camera, this.context, this.passRenderEncoder, this.shadowMaterial, V.Shadow, i),
			e.opaqueRender(t.camera, this.context, this.passRenderEncoder, this.shadowMaterial, V.Shadow, i);
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
		const t = new Ce(1, { texture: void 0 });
		this.renderTarget = new nt("render", [], t);
	}
	createShadowMaterial() {
		this.shadowMaterial = new er({
			shaderId: "shadowMaterial",
			uniformBuffers: [{ uid: "shadow", uniforms: { modelMatrix: { type: "mat4x4<f32>", value: null } } }],
			vert: (e = {}) =>
				me("shadowMap", Object.assign({ selfBinding: 0, cameraBinding: 0, positionLocation: 0 }, e)).vert,
			frag: void 0,
			light: !1
		});
	}
}
class Qr {
	constructor(e) {
		(this.context = e), (this.basicPass = new zr(e)), (this.shadowPass = new Kr(e));
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
class Jr extends Mr {
	constructor(e) {
		super(),
			(this.container =
				e.container instanceof HTMLDivElement ? e.container : document.getElementById(e.container)),
			(this.meshManger = new Rr()),
			(this.postEffectCollection = new Dr()),
			(this.context = new Le({ canvas: null, container: this.container, pixelRatio: 1 })),
			(this.requestAdapter = e.requestAdapter || {}),
			(this.deviceDescriptor = e.deviceDescriptor || {}),
			(this.presentationContextDescriptor = e.presentationContextDescriptor),
			(this.ready = !1),
			(this.inited = !1),
			(this.lightManger = new Ar({ openShadow: !0 })),
			(this.background = e.background);
	}
	async init() {
		await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor),
			(this.currentRenderPipeline = new Qr(this.context)),
			(this.frameState = new _r(this.context, this.lightManger, _r.getFrameStateOptionsByScene(this))),
			(this.viewport = new we(0, 0, this.context.presentationSize.width, this.context.presentationSize.height)),
			(this.ready = !0);
	}
	add(e) {
		[Z.Node, Z.Skybox, Z.Mesh, Z.Debug].includes(e.type)
			? this.meshManger.add(e)
			: e.type == Z.Light
			? this.lightManger.add(e)
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
	setViewPort(e, t, i, r) {
		return !!this.ready && (this.context.setViewPort(e, t, i, r), !0);
	}
	setScissorTest(e, t, i, r) {
		return !!this.ready && (this.context.setScissorTest(e, t, i, r), !0);
	}
	update(e, t) {
		this.ready &&
			(lr.releasedTextures(),
			this.frameState.update(t ?? this.camera, _r.getFrameStateOptionsByScene(this)),
			(e ?? this.meshManger).update(this.frameState, t ?? this.camera),
			this.currentRenderPipeline.render(this.frameState, t ?? this.camera),
			this.postEffectCollection.render(this.context, this.currentRenderPipeline.getOutputTexture()));
	}
}
class en {
	constructor(e, t, i) {
		(this.width = e),
			(this.height = t),
			this.initDefaultParms(),
			(this.id = i),
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
			i = this.currentRenderTarget.beginRenderPass(e.device);
		t.render({ device: e.device, passEncoder: i }), this.currentRenderTarget.endRenderPass();
	}
	initDefaultParms() {
		const e = new Yt({});
		e.setAttribute(new Ke("position", [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], 2)), (e.count = 6);
		const t = new Te(),
			i = new Me(),
			r = new ve();
		(r.primitive = t),
			(r.targets = [i]),
			(this.renderState = r),
			(this.fullScreenQuad = new ir(e)),
			(this.defaultSampler = new Re());
	}
}
class tn extends en {
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
		let i = this.renderTargetBright;
		for (let t = 0; t < this.nMips; t++)
			(this.fullScreenQuad.material = this.separableBlurMaterials[t]),
				(this.separableBlurMaterials[t].uniforms.tDiffuse.value = i.getColorTexture()),
				(this.separableBlurMaterials[t].uniforms.direction.value = tn.BlurDirectionX),
				(this.currentRenderTarget = this.renderTargetsHorizontal[t]),
				this.renderMesh(e),
				(this.fullScreenQuad.material = this.separableBlurYMaterials[t]),
				(this.separableBlurYMaterials[t].uniforms.tDiffuse.value =
					this.renderTargetsHorizontal[t].getColorTexture()),
				(this.separableBlurYMaterials[t].uniforms.direction.value = tn.BlurDirectionY),
				(this.currentRenderTarget = this.renderTargetsVertical[t]),
				this.renderMesh(e),
				(i = this.renderTargetsVertical[t]);
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
		this?.renderTargetsHorizontal?.forEach((i) => i.setSize(e, t, 1)),
			this?.renderTargetsVertical?.forEach((i) => i.setSize(e, t, 1)),
			this?.renderTargetBright?.setSize?.(e, t, 1),
			this?.blendTarget?.setSize?.(e, t, 1);
	}
	init() {
		(this.renderTargetsHorizontal = []), (this.renderTargetsVertical = []), (this.nMips = 5);
		let e = Math.round(this.width / 2),
			t = Math.round(this.height / 2);
		this.renderTargetBright = new nt("render", [this.createColorAttachment(e, t)]);
		for (let i = 0; i < this.nMips; i++) {
			const i = new nt("render", [this.createColorAttachment(e, t)]);
			this.renderTargetsHorizontal.push(i);
			const r = new nt("render", [this.createColorAttachment(e, t)]);
			this.renderTargetsVertical.push(r), (e = Math.round(e / 2)), (t = Math.round(t / 2));
		}
		(this.highPassUniformBuffer = {
			uniforms: {
				luminosityThreshol: { type: "float", value: this.threshold },
				smoothWidth: { type: "float", value: 0.01 },
				defaultColor: { type: "color", value: new pi(0, 0, 0) },
				defaultOpacity: { type: "float", value: 1 }
			}
		}),
			(this.highPassUniformTextureAndSampler = {
				tDiffuse: { type: "texture", value: null },
				tSampler: { type: "sampler", value: this.defaultSampler }
			});
		const i = me("luminosityHigh", { positionLocation: 0 });
		(this.materialHighPassFilter = new er({
			shaderId: "bloom",
			uniformBuffers: [this.highPassUniformBuffer],
			uniformTextureAndSampler: this.highPassUniformTextureAndSampler,
			vert: i.vert,
			frag: i.frag
		})),
			(this.materialHighPassFilter.renderState = this.renderState),
			(this.separableBlurMaterials = []),
			(this.separableBlurYMaterials = []);
		const r = [3, 5, 7, 9, 11];
		(e = Math.round(this.width / 2)), (t = Math.round(this.height / 2));
		for (let i = 0; i < this.nMips; i++)
			this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[i], "BlurMaterial" + i)),
				this.separableBlurYMaterials.push(this.getSeperableBlurMaterial(r[i], "BlurMaterialY" + i)),
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
		(this.blendMaterial = new er({
			shaderId: "postBlend",
			uniformTextureAndSampler: this.blendUniformTextureAndSampler,
			vert: n.vert,
			frag: n.frag
		})),
			(this.blendMaterial.renderState = this.renderState),
			(this.blendTarget = new nt("render", [this.createColorAttachment(this.width, this.height)]));
	}
	createColorAttachment(e, t) {
		const i = new Ae({
			size: { width: e, height: t, depth: 1 },
			format: c.BGRA8Unorm,
			usage: a.RenderAttachment | a.TextureBinding
		});
		return new Ce({ r: 0, g: 0, b: 0, a: 0 }, { texture: i });
	}
	getCompositeMaterial(e, t) {
		return new er({
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
			frag: (e) =>
				"\n                struct FragInput {\n                    @location(0) uv: vec2<f32>,\n                };\n                struct BloomUniforms{\n                    bloomStrength:f32,\n                    bloomRadius:f32,\n                    bloomFactors : array<f32,5>,\n                    bloomTintColors : array<vec3<f32>,5>\n                }  \n                @group(0) @binding(0)  var<storage, read> bloomUniforms : BloomUniforms;\n\n                @group(0) @binding(blurTexture1Binding) var blurTexture1: texture_2d<f32>;\n                @group(0) @binding(blurTexture2Binding) var blurTexture2: texture_2d<f32>;\n                @group(0) @binding(blurTexture3Binding) var blurTexture3: texture_2d<f32>;\n                @group(0) @binding(blurTexture4Binding) var blurTexture4: texture_2d<f32>;\n                @group(0) @binding(blurTexture5Binding) var blurTexture5: texture_2d<f32>;\n                @group(0) @binding(tSamplerBinding) var tSampler: sampler;\n\n\t\t\t\tfn lerpBloomFactor(factor:f32)->f32 {\n\t\t\t\t\tlet mirrorFactor:f32 = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomUniforms.bloomRadius);\n\t\t\t\t}\n                @fragment\n\t\t\t\tfn main(input:FragInput)-> @location(0) vec4<f32>  {\n\t\t\t\t\treturn bloomUniforms.bloomStrength * ( lerpBloomFactor(bloomUniforms.bloomFactors[0]) * vec4(bloomUniforms.bloomTintColors[0], 1.0) * textureSample(blurTexture1, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[1]) * vec4<f32>(bloomUniforms.bloomTintColors[1], 1.0) * textureSample(blurTexture2, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[2]) * vec4<f32>(bloomUniforms.bloomTintColors[2], 1.0) * textureSample(blurTexture3, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[3]) * vec4<f32>(bloomUniforms.bloomTintColors[3], 1.0) * textureSample(blurTexture4, tSampler, input.uv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomUniforms.bloomFactors[4]) * vec4<f32>(bloomUniforms.bloomTintColors[4], 1.0) * textureSample(blurTexture5, tSampler, input.uv) );\n\t\t\t\t}"
		});
	}
	getSeperableBlurMaterial(e, t) {
		const i = me("blur", { kernelRadius: e, sigmaConst: e, positionLocation: 0 }),
			r = new er({
				shaderId: t,
				uniformBuffers: [{ uid: t, uniforms: { direction: { type: "vec2<f32>", value: new Oe(0, 0) } } }],
				uniformTextureAndSampler: {
					tDiffuse: { type: "texture", value: null },
					tSampler: { type: "sampler", value: this.defaultSampler }
				},
				vert: i.vert,
				frag: i.frag
			});
		return (r.renderState = this.renderState), r;
	}
}
(tn.BlurDirectionX = new Oe(1, 0)), (tn.BlurDirectionY = new Oe(0, 1));
class rn extends jr {
	constructor(e = -1, t = 1, i = 1, r = -1, n = 0.1, s = 2e3) {
		super(),
			(this.near = n),
			(this.far = s),
			(this.left = e),
			(this.top = i),
			(this.bottom = r),
			(this.right = t),
			(this.isOrthographicCamera = !0);
	}
	updateCameraParms() {
		const e = (this.right - this.left) / 2,
			t = (this.top - this.bottom) / 2,
			i = (this.right + this.left) / 2,
			r = (this.top + this.bottom) / 2;
		return { left: i - e, right: i + e, top: r + t, bottom: r - t };
	}
	updateProjectionMatrix() {
		if (this.projectMatrixDirty) {
			const { left: e, right: t, top: i, bottom: r } = this.updateCameraParms();
			(this._projectionMatrix = xt.makeOrthographic(e, t, i, r, this.near, this.far)),
				(this.projectMatrixDirty = !1);
		}
	}
}
class nn extends Yr {
	constructor() {
		const e = new $r(60, 1, 0.1, 500);
		super(new Oe(1024, 1024), e), (this.type = "spotLightShadow");
	}
	update(e) {
		this.updateMatrices(e);
	}
	updateMatrices(e) {
		this.camera.position.copy(e.position);
		const { x: t, y: i, z: r } = e.target;
		this.camera.lookAt(t, i, r), this.camera.updateMatrix(), (this.vpMatrixDirty = !0);
	}
}
class sn extends ci {
	constructor(e, t, i = 0, r = 60, n = 60, s = 4, a = !0) {
		super(e, t),
			(this._distance = i),
			(this._angle = (r / 180) * Math.PI),
			(this._penumbra = (n / 180) * Math.PI),
			(this._decay = s),
			(this.lightType = K.SpotLight),
			(this.angleDirty = !0),
			(this.penumbraDirty = !0),
			(this.distanceDirty = !0),
			(this.decayDirty = !0),
			(this.coneCosDirty = !0),
			(this.penumbraCosDirty = !0),
			a && (this.shadow = new nn()),
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
class an extends Yr {
	constructor() {
		const e = new rn(-50, 50, 50, -50, 0, 100);
		super(new Oe(1024, 1024), e), (this.type = "directionalLightShadow");
	}
	update(e) {
		this.updateMatrices(e);
	}
	updateMatrices(e) {
		this.camera.position.copy(e.position);
		const { x: t, y: i, z: r } = e.target;
		this.camera.lookAt(t, i, r), this.camera.updateMatrix(), (this.vpMatrixDirty = !0);
	}
}
class on extends ci {
	constructor(e, t, i = !0) {
		super(e, t), (this.lightType = K.DirectionalLight), i && (this.shadow = new an());
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
}
class ln extends ni {
	constructor() {
		super(), (this.type = Z.Node), (this.children = new Map()), (this.parent = null), (this.uid = tr());
	}
	add(e) {
		(e.parent = this), this.children.set(e.uid, e);
	}
	remove(e) {
		this.children.delete(e.uid);
	}
	update(e, t) {
		this.updateMatrix(this?.parent?.modelMatrix?.clone()),
			this?.children?.forEach?.((i) => {
				i.update(e, t);
			});
	}
	destroy() {
		this.children.forEach((e) => {
			e.destroy();
		}),
			this?.children?.clear();
	}
	traverse(e, t) {
		for (let i = 0, r = this.children.size; i < r; i++)
			this.children.forEach((i) => {
				i.traverse(e, t);
			});
	}
}
class cn extends ir {
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
			const e = new Xi({
					label: "skinJointsBuffer",
					type: m.ReadOnlyStorage,
					usage: r.Storage | r.CopyDst,
					size: 3e3
				}),
				t = new Xi({ label: "invsBuffer", type: m.ReadOnlyStorage, usage: r.Storage | r.CopyDst, size: 3e3 });
			e.setUniform("joints", () => this.uniformMatrixs, Q.Mat4Array, this.uniformMatrixs.length),
				t.setUniform("jointsInv", () => this.inverseBindMatrices, Q.Mat4Array, this.inverseBindMatrices.length),
				this.material.shaderData.setUniformBuffer("skinJointsBuffer", e),
				this.material.shaderData.setUniformBuffer("invsBuffer", t);
		}
	}
}
function hn(e, t, i, r) {
	switch (e) {
		case 5120:
			return new Int8Array(t, i, r);
		case 5121:
			return new Uint8Array(t, i, r);
		case 5122:
			return new Int16Array(t, i, r);
		case 5123:
			return new Uint16Array(t, i, r);
		case 5124:
			return new Int32Array(t, i, r);
		case 5125:
			return new Uint32Array(t, i, r);
		case 5126:
			return new Float32Array(t, i, r);
		default:
			throw new Error("invalid component type");
	}
}
const un = {
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
class fn {
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
			e.push(new ft(this.values[t], this.values[t + 1], this.values[t + 2], this.values[t + 3]));
		return e;
	}
	getMat4Array() {
		const e = [];
		for (let t = 0; t < this.values.length; t += 16) {
			const i = new xt();
			xt.fromColumnMajorArray(this.values.slice(t, t + 16), i), e.push(i);
		}
		return e;
	}
}
class dn {
	constructor(e, t, i) {
		(this.name = e), (this.samplers = t), (this.channels = i);
	}
	play(e) {
		let t, i, r;
		this?.channels?.map((n) => {
			switch (((i = n.sampler), i.getValue(e), (r = n.target), (t = r.node), r.path)) {
				case "rotation":
					Zt.clone(i.currentValue, t.quaternion);
					break;
				case "translation":
					ft.clone(i.currentValue, t.position);
					break;
				case "scale":
					ft.clone(i.currentValue, t.scale);
			}
		});
	}
}
class mn {
	constructor() {}
}
class pn {
	constructor(e, t) {
		(this.node = e), (this.path = t);
	}
}
var gn;
!(function (e) {
	(e[(e.SCALAR = 1)] = "SCALAR"),
		(e[(e.VEC2 = 2)] = "VEC2"),
		(e[(e.VEC3 = 3)] = "VEC3"),
		(e[(e.VEC4 = 4)] = "VEC4"),
		(e[(e.MAT2 = 4)] = "MAT2"),
		(e[(e.MAT3 = 9)] = "MAT3"),
		(e[(e.MAT4 = 16)] = "MAT4");
})(gn || (gn = {}));
class xn {
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
		const i = gn[this.outputType],
			r = 4 === i ? new Zt() : new ft(),
			n = 4 === i ? new Zt() : new ft();
		this.currentValue || (this.currentValue = 4 === i ? new Zt() : new ft());
		const s = this.currentIndex,
			a = s * i,
			o = a + i,
			l = Math.max(0, e - this.input[s]) / (this.input[s + 1] - this.input[s]);
		if (
			(r.set(this.output[a + 0], this.output[a + 1], this.output[a + 2], this.output[a + 3]),
			n.set(this.output[o + 0], this.output[o + 1], this.output[o + 2], this.output[o + 3]),
			"LINEAR" === this.interpolation)
		)
			4 === i ? Zt.slerp(r, n, l, this.currentValue) : ft.lerp(r, n, l, this.currentValue);
	}
}
class vn {
	constructor(e, t, i = 0, r) {
		(this.json = e),
			(this.bufferViews = e.bufferViews),
			(this.glbOffset = i),
			(this.rootUrl = t),
			(this.scenes = e.scenes),
			(this.cameras = e.cameras || []),
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
					const t = new Er(),
						{
							baseColorFactor: i,
							metallicFactor: r,
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
						i && (t.color = new pi(i[0], i[1], i[2])),
						(t.metalness = r ?? 1),
						(t.roughness = a ?? 0),
						(t.baseSampler = new Re({
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
			const i = un[e.type];
			let r;
			if (
				((r =
					void 0 === e.bufferView
						? hn(e.componentType, new ArrayBuffer(i * e.count * un[e.componentType]), 0, e.count * i)
						: this.getBufferView(e, i)),
				e.sparse)
			) {
				(e.sparse.indices.count = e.sparse.count),
					(e.sparse.values.count = e.sparse.count),
					(e.sparse.values.componentType = e.componentType);
				const t = this.getBufferView(e.sparse.indices, 1),
					n = this.getBufferView(e.sparse.values, i);
				for (let s = 0; s < e.sparse.count; s += 1)
					for (let e = 0; e < i; e += 1) r[t[s] * i + e] = n[s * i + e];
			}
			return new fn({
				componentType: un[e.componentType],
				count: e.count,
				type: i,
				values: r,
				id: t,
				min: e?.min,
				max: e?.max
			});
		});
	}
	parseAnimations() {
		this.animations = this?.json?.animations?.map((e, t) => {
			const i = e?.samplers?.map((e) => {
					const t = new xn();
					return t.formGltf(this, e), t;
				}),
				r = e?.channels?.map((e) => {
					const t = new mn();
					return (t.sampler = i[e.sampler]), (t.target = new pn(this.nodes[e.target.node], e.target.path)), t;
				});
			return new dn(t.toString(), i, r);
		});
	}
	parseMeshs() {
		this.meshes = this?.json?.meshes?.map?.((e) => ({
			name: e.name,
			primitives: e?.primitives?.map?.((t) => {
				const i = void 0 !== t.material ? this.materials[t.material] : { pbrMetallicRoughness: {} },
					r = this.createGeometry(t, i),
					n = new ir(r, i);
				return (n.name = e.name), n;
			})
		}));
	}
	getSampler(e) {
		return new Re({
			magFilter: un[e.magFilter || 9729],
			minFilter: un[e.minFilter || 9729],
			addressModeU: un[e.wrapS || 10497],
			addressModeV: un[e.wrapT || 10497]
		});
	}
	getBufferView(e, t) {
		const i = this.bufferViews[e.bufferView],
			r = (i.byteOffset || 0) + (e.byteOffset || 0),
			n = Math.max(i.byteStride / 4 || 0, t);
		let s = hn(
			e.componentType,
			this.buffers[i.buffer],
			0 === i.buffer ? r + this.glbOffset : r,
			(e.count - 1) * n + t
		);
		if (n > t) {
			const i = new (0, s.constructor)(e.count * t);
			for (let e = 0, r = 0; e < i.length; e += t, r += n) for (let n = 0; n < t; n += 1) i[e + n] = s[r + n];
			s = i;
		}
		return s;
	}
	createGeometry(e, t) {
		let i = null,
			r = null;
		const n = { HAS_NORMAL: !0 };
		let s;
		r = this.getAccessor(e.attributes.POSITION);
		const a = r.getArray();
		let o;
		(s = r.count),
			void 0 !== e.indices &&
				((r = this.getAccessor(e.indices)),
				(i = (function (e) {
					if (e instanceof Uint16Array || e instanceof Uint32Array) return e;
					let t;
					if (e instanceof Float32Array) t = new Uint32Array(e.length);
					else {
						let i = 0;
						for (let t = 0; t < e.length; t++) i = i < e[t] ? e[t] : i;
						t = i < 65536 ? new Uint16Array(e.length) : new Uint32Array(e.length);
					}
					return (
						e.forEach((e, i) => {
							t[i] = e;
						}),
						t
					);
				})(r.getArray())),
				(s = r.count)),
			void 0 !== e.attributes.NORMAL
				? ((r = this.getAccessor(e.attributes.NORMAL)), (o = r.getArray()))
				: (o = (function (e, t) {
						const i = new Float32Array(t.length),
							r = e ? e.length : t.length;
						for (let n = 0; n < r; n += 3) {
							const r = [];
							for (let t = 0; t < 3; t += 1) e ? r.push(e[n + t]) : r.push(n + t);
							const s = r.map((e) => {
									const i = 3 * e;
									return new He(t[i], t[i + 1], t[i + 2]);
								}),
								a = new He();
							He.subtract(s[1], s[0], a);
							const o = new He();
							He.subtract(s[2], s[0], o);
							const l = new He();
							He.cross(a.normalize(), o.normalize(), l);
							for (let e = 0; e < 3; e += 1) {
								const t = 3 * (n + e);
								(i[t + 0] += l.x), (i[t + 1] += l.y), (i[t + 2] += l.z);
							}
						}
						return i;
				  })(i, a));
		let l = null;
		void 0 !== e.attributes.TEXCOORD_0 &&
			((r = this.getAccessor(e.attributes.TEXCOORD_0)), (l = r.getArray()), (n.HAS_UV = !0)),
			void 0 !== e.attributes.TEXCOORD_1 &&
				((r = this.getAccessor(e.attributes.TEXCOORD_1)), r.getArray(), (n.HAS_UV1 = !0)),
			void 0 !== e.attributes.TANGENT && void 0 !== e.attributes.NORMAL
				? ((r = this.getAccessor(e.attributes.TANGENT)), r.getArray())
				: t.normalTexture;
		let c = null,
			h = 3;
		void 0 !== e.attributes.COLOR_0 &&
			((r = this.accessors[e.attributes.COLOR_0]), (c = r.getArray()), (h = r.type), (n.HAS_COLOR = !0));
		let u = null;
		void 0 !== e.attributes.JOINTS_0 &&
			((r = this.getAccessor(e.attributes.JOINTS_0)), (u = r.getArray()), (n.HAS_SKIN = !0));
		let f = null;
		void 0 !== e.attributes.WEIGHTS_0 && ((r = this.getAccessor(e.attributes.WEIGHTS_0)), (f = r.getArray()));
		const d = new Yt({ type: "pbrGeomtry" });
		return (
			i && d.setIndice(i),
			a && d.setAttribute(new Ke("position", Array.from(a), 3)),
			o && d.setAttribute(new Ke("normal", Array.from(o), 3)),
			c && d.setAttribute(new Ke("color", Array.from(c), h)),
			l && d.setAttribute(new Ke("uv", Array.from(l), 2)),
			u && d.setAttribute(new Ke("joint0", Array.from(u), 4)),
			f && d.setAttribute(new Ke("weight0", Array.from(f), 4)),
			(d.defines = n),
			d.computeBoundingSphere(Array.from(a)),
			(d.count = s),
			d
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
				this.json.images.map(async (t, i) => {
					if (t.uri) {
						const r = "data:" === t.uri.slice(0, 5) ? t.uri : `${this.rootUrl}/${t.uri}`;
						e[i] = await fetch(r)
							.then((e) => e.blob())
							.then((e) => createImageBitmap(e, { colorSpaceConversion: "none" }));
					}
				})
			));
		let i = Promise.resolve();
		return (
			this.json.images &&
				(i = Promise.all(
					this.json.images.map(async (t, i) => {
						if (void 0 !== t.bufferView) {
							const { buffer: r, byteOffset: n, byteLength: s } = this.json.bufferViews[t.bufferView],
								a = new Uint8Array(this.buffers[r], 0 === r ? n + this.glbOffset : n, s);
							let o;
							o = t.mimeType ? t.mimeType : 255 === a[0] ? "image/jpeg" : "image/png";
							const l = new Blob([a], { type: o });
							e[i] = await createImageBitmap(l, { colorSpaceConversion: "none" });
						}
					})
				)),
			await Promise.all([t, i]),
			e
		);
	}
	async loadBuffes() {
		const e = [];
		return (
			await Promise.all(
				this.json.buffers.map((t, i) => {
					if (!t.uri) {
						if (0 !== i) throw new Error("buffer uri undefined");
						return (e[i] = this.glbBin), Promise.resolve();
					}
					const r = "data:" === t.uri.slice(0, 5) ? t.uri : `${this.rootUrl}/${t.uri}`;
					return fetch(r)
						.then((e) => e.arrayBuffer())
						.then((t) => {
							e[i] = t;
						});
				})
			),
			e
		);
	}
	parseNodes() {
		this.nodes = this?.json?.nodes?.map((e) => {
			const t = new ln();
			if ((this.parseNodeTRS(t, e), e.name && (t.name = e.name), null != e.mesh)) {
				let i,
					r = !1;
				null != e.skin && ((i = this.json.skins[e.skin]), (r = !0)),
					this.meshes[e.mesh].primitives.forEach((e, n, s) => {
						const a = r && e.type == Z.Mesh ? new cn(e.geometry, e.material) : e;
						r &&
							e.type == Z.Mesh &&
							((s[n] = a),
							a.setSkinData({
								inverseBindMatrices: this.getAccessor(i.inverseBindMatrices).getMat4Array(),
								joints: i.joints
							})),
							t.add(a);
					});
			}
			return t;
		});
	}
	parseNodeTRS(e, t) {
		let { matrix: i, rotation: r, translation: n, scale: s } = t;
		if (i) {
			const e = new xt(),
				t = new He(),
				a = new He(),
				o = new Zt();
			xt.fromColumnMajorArray(i, e),
				xt.getScale(e, t),
				xt.getTranslation(e, a),
				xt.getRotation(e, o),
				(r = o.toArray()),
				(n = a.toArray()),
				(s = t.toArray());
		}
		return (
			r && e.quaternion.set(r[0], r[1], r[2], r[3]),
			n && e.position.set(n[0], n[1], n[2]),
			s && e.scale.set(s[0], s[1], s[2]),
			e
		);
	}
	normalizeData() {
		this?.nodes?.map?.((e, t) => {
			this.json?.nodes[t]?.children?.map((t) => {
				const i = this.nodes[t];
				e.add(i);
			});
		}),
			this.meshes.map((e) => {
				e.primitives.map((e) => {
					e.type == Z.SkinMesh && (e.joints = e.joints.map((e) => this.nodes[e]));
				});
			});
	}
}
async function yn(e) {
	let t;
	const i = e.split(".").pop(),
		r = e.substring(0, e.lastIndexOf("/"));
	if ("gltf" === i) {
		const i = await fetch(e).then((e) => e.json());
		t = new vn(i, r, 0);
	} else {
		const i = await fetch(e).then((e) => e.arrayBuffer()),
			n = new Uint32Array(i, 12, 1)[0],
			s = new Uint8Array(i, 20, n),
			a = JSON.parse(new TextDecoder("utf-8").decode(s));
		t = new vn(a, r, 28 + n, i);
	}
	return await t.parseData(), t;
}
async function Sn(e) {
	const t = document.createElement("img");
	(t.src = e), await t.decode();
	const i = await createImageBitmap(t);
	return new Ae({ size: { width: i.width, height: i.height, depth: 1 }, data: { source: i }, format: "rgba8unorm" });
}
class bn {
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
				: ((this.theta = Math.atan2(e, i)), (this.phi = Math.acos(Pe.clamp(t / this.radius, -1, 1)))),
			this
		);
	}
	clone() {
		return new bn(this.radius, this.phi, this.theta);
	}
}
const wn = { type: "change" },
	Tn = { type: "start" },
	En = { type: "end" };
class Mn extends Mr {
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
			(this.mouseButtons = { LEFT: jn.ROTATE, MIDDLE: jn.DOLLY, RIGHT: jn.PAN }),
			(this.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }),
			(this.target0 = this.target.clone()),
			(this.position0 = this.object.position.clone()),
			(this.zoom0 = this.object.zoom),
			(this._domElementKeyEvents = null);
		const i = this;
		(this.update = (function () {
			const e = new He(),
				t = new Zt().setFromUnitVectors(i.object.up, new He(0, 1, 0)),
				r = t.clone().invert(),
				n = new He(),
				s = new Zt(),
				a = 2 * Math.PI;
			return function () {
				const o = i.object.position;
				e.copy(o).subtract(i.target),
					e.applyQuaternion(t),
					An.setFromVector3(e),
					i.autoRotate && _n === Un.NONE && Xn(i.getAutoRotationAngle()),
					i.enableDamping
						? ((An.theta += Rn.theta * i.dampingFactor), (An.phi += Rn.phi * i.dampingFactor))
						: ((An.theta += Rn.theta), (An.phi += Rn.phi));
				let l = i.minAzimuthAngle,
					c = i.maxAzimuthAngle;
				return (
					isFinite(l) &&
						isFinite(c) &&
						(l < -Math.PI ? (l += a) : l > Math.PI && (l -= a),
						c < -Math.PI ? (c += a) : c > Math.PI && (c -= a),
						(An.theta =
							l <= c
								? Math.max(l, Math.min(c, An.theta))
								: An.theta > (l + c) / 2
								? Math.max(l, An.theta)
								: Math.min(c, An.theta))),
					(An.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, An.phi))),
					An.makeSafe(),
					(An.radius *= Cn),
					(An.radius = Math.max(i.minDistance, Math.min(i.maxDistance, An.radius))),
					!0 === i.enableDamping ? i.target.addScaledVector(Dn, i.dampingFactor) : i.target.add(Dn),
					He.fromSpherical(An, e),
					e.applyQuaternion(r),
					o.copy(i.target).add(e),
					i.object.lookAt(i.target.x, i.target.y, i.target.z),
					!0 === i.enableDamping
						? ((Rn.theta *= 1 - i.dampingFactor),
						  (Rn.phi *= 1 - i.dampingFactor),
						  He.multiplyByScalar(Dn, 1 - i.dampingFactor, Dn))
						: (Rn.set(0, 0, 0), Dn.set(0, 0, 0)),
					(Cn = 1),
					!!(
						In ||
						He.distanceSquared(n, i.object.position) > Ln ||
						8 * (1 - s.dot(i.object.quaternion)) > Ln
					) &&
						(i.dispatchEvent(wn),
						He.clone(i.object.position, n),
						Zt.clone(i.object.quaternion, s),
						(In = !1),
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
			this.dispatchEvent(wn),
			this.update(),
			(_n = Un.NONE);
	}
	init() {
		const e = this,
			t = (function () {
				const e = new He();
				return function (t, i) {
					e.setFromMatrixColumn(i, 0), e.multiplyByScalar(-t), Dn.add(e);
				};
			})(),
			i = (function () {
				const t = new He();
				return function (i, r) {
					!0 === e.screenSpacePanning
						? t.setFromMatrixColumn(r, 1)
						: (t.setFromMatrixColumn(r, 0), He.cross(e.object.up, t, t)),
						t.multiplyByScalar(i),
						Dn.add(t);
				};
			})(),
			r = (function () {
				const r = new He();
				return function (n, s) {
					const a = e.domElement;
					if (e.object.isPerspectiveCamera) {
						const o = e.object.position;
						r.copy(o).subtract(e.target);
						let l = r.length();
						(l *= Math.tan(((e.object.fov / 2) * Math.PI) / 180)),
							t((2 * n * l) / a.clientHeight, e.object.modelMatrix),
							i((2 * s * l) / a.clientHeight, e.object.modelMatrix);
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
					? (Cn /= e)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * e))),
					  this.object.updateProjectionMatrix(),
					  (In = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			s = (e) => {
				this.object.isPerspectiveCamera
					? (Cn *= e)
					: this.object.isOrthographicCamera
					? ((this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / e))),
					  this.object.updateProjectionMatrix(),
					  (In = !0))
					: (console.warn(
							"WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
					  ),
					  (this.enableZoom = !1));
			},
			a = (e) => {
				Pn.set(e.clientX, e.clientY), Oe.subtract(Pn, zn, Nn), Oe.multiplyByScalar(Nn, this.rotateSpeed, Nn);
				const t = this.domElement;
				Xn((2 * Math.PI * Nn.x) / t.clientHeight),
					Yn((2 * Math.PI * Nn.y) / t.clientHeight),
					Oe.clone(Pn, zn),
					this.update();
			},
			o = (e) => {
				Gn.set(e.clientX, e.clientY),
					Oe.subtract(Gn, Fn, kn),
					kn.y > 0 ? n(w()) : kn.y < 0 && s(w()),
					Oe.clone(Gn, Fn),
					this.update();
			},
			l = (e) => {
				Bn.set(e.clientX, e.clientY),
					Oe.subtract(Bn, On, Vn),
					Oe.multiplyByScalar(Vn, this.panSpeed, Vn),
					r(Vn.x, Vn.y),
					Oe.clone(Bn, On),
					this.update();
			},
			c = (e) => {
				e.deltaY < 0 ? s(w()) : e.deltaY > 0 && n(w()), this.update();
			},
			h = (e) => {
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
			u = () => {
				this.enableZoom && rs(), this.enablePan && is();
			},
			f = () => {
				this.enableZoom && rs(), this.enableRotate && ts();
			},
			d = (e) => {
				if (1 == Hn.length) Pn.set(e.pageX, e.pageY);
				else {
					const t = Kn(e),
						i = 0.5 * (e.pageX + t.x),
						r = 0.5 * (e.pageY + t.y);
					Pn.set(i, r);
				}
				Oe.subtract(Pn, zn, Nn), Oe.multiplyByScalar(Nn, this.rotateSpeed, Nn);
				const t = this.domElement;
				Xn((2 * Math.PI * Nn.x) / t.clientHeight), Yn((2 * Math.PI * Nn.y) / t.clientHeight), Oe.clone(Pn, zn);
			},
			m = (e) => {
				if (1 === Hn.length) Bn.set(e.pageX, e.pageY);
				else {
					const t = Kn(e),
						i = 0.5 * (e.pageX + t.x),
						r = 0.5 * (e.pageY + t.y);
					Bn.set(i, r);
				}
				Oe.subtract(Bn, On, Vn), Oe.multiplyByScalar(Vn, this.panSpeed, Vn), r(Vn.x, Vn.y), Oe.clone(Bn, On);
			},
			p = (e) => {
				const t = Kn(e),
					i = e.pageX - t.x,
					r = e.pageY - t.y,
					s = Math.sqrt(i * i + r * r);
				Gn.set(0, s), kn.set(0, Math.pow(Gn.y / Fn.y, this.zoomSpeed)), n(kn.y), Oe.clone(Gn, Fn);
			},
			g = (e) => {
				this.enableZoom && p(e), this.enablePan && m(e);
			},
			x = (e) => {
				this.enableZoom && p(e), this.enableRotate && d(e);
			};
		(this.onPointerDown = (e) => {
			!1 !== this.enabled &&
				(0 === Hn.length &&
					(this.domElement.setPointerCapture(e.pointerId),
					this.domElement.addEventListener("pointermove", this.onPointerMove),
					this.domElement.addEventListener("pointerup", this.onPointerUp)),
				(function (e) {
					Hn.push(e);
				})(e),
				"touch" === e.pointerType ? S(e) : v(e));
		}),
			(this.onPointerMove = (e) => {
				!1 !== this.enabled && ("touch" === e.pointerType ? b(e) : y(e));
			}),
			(this.onPointerUp = (e) => {
				Wn(e),
					0 === Hn.length &&
						(this.domElement.releasePointerCapture(e.pointerId),
						this.domElement.removeEventListener("pointermove", this.onPointerMove),
						this.domElement.removeEventListener("pointerup", this.onPointerUp)),
					this.dispatchEvent(En),
					(_n = Un.NONE);
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
					case jn.DOLLY:
						if (!1 === this.enableZoom) return;
						!(function (e) {
							Fn.set(e.clientX, e.clientY);
						})(e),
							(_n = Un.DOLLY);
						break;
					case jn.ROTATE:
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							if (!1 === this.enablePan) return;
							Jn(e), (_n = Un.PAN);
						} else {
							if (!1 === this.enableRotate) return;
							Qn(e), (_n = Un.ROTATE);
						}
						break;
					case jn.PAN:
						if (e.ctrlKey || e.metaKey || e.shiftKey) {
							if (!1 === this.enableRotate) return;
							Qn(e), (_n = Un.ROTATE);
						} else {
							if (!1 === this.enablePan) return;
							Jn(e), (_n = Un.PAN);
						}
						break;
					default:
						_n = Un.NONE;
				}
				_n !== Un.NONE && this.dispatchEvent(Tn);
			},
			y = (e) => {
				switch (_n) {
					case Un.ROTATE:
						if (!1 === this.enableRotate) return;
						a(e);
						break;
					case Un.DOLLY:
						if (!1 === this.enableZoom) return;
						o(e);
						break;
					case Un.PAN:
						if (!1 === this.enablePan) return;
						l(e);
				}
			};
		(this.onMouseWheel = (e) => {
			!1 !== this.enabled &&
				!1 !== this.enableZoom &&
				_n === Un.NONE &&
				(e.preventDefault(), this.dispatchEvent(Tn), c(e), this.dispatchEvent(En));
		}),
			(this.onKeyDown = (e) => {
				!1 !== this.enabled && !1 !== this.enablePan && h(e);
			});
		const S = (e) => {
				switch ((Zn(e), Hn.length)) {
					case 1:
						switch (this.touches.ONE) {
							case $n.ROTATE:
								if (!1 === this.enableRotate) return;
								ts(), (_n = Un.TOUCH_ROTATE);
								break;
							case $n.PAN:
								if (!1 === this.enablePan) return;
								is(), (_n = Un.TOUCH_PAN);
								break;
							default:
								_n = Un.NONE;
						}
						break;
					case 2:
						switch (this.touches.TWO) {
							case $n.DOLLY_PAN:
								if (!1 === this.enableZoom && !1 === this.enablePan) return;
								u(), (_n = Un.TOUCH_DOLLY_PAN);
								break;
							case $n.DOLLY_ROTATE:
								if (!1 === this.enableZoom && !1 === this.enableRotate) return;
								f(), (_n = Un.TOUCH_DOLLY_ROTATE);
								break;
							default:
								_n = Un.NONE;
						}
						break;
					default:
						_n = Un.NONE;
				}
				_n !== Un.NONE && this.dispatchEvent(Tn);
			},
			b = (e) => {
				switch ((Zn(e), _n)) {
					case Un.TOUCH_ROTATE:
						if (!1 === this.enableRotate) return;
						d(e), this.update();
						break;
					case Un.TOUCH_PAN:
						if (!1 === this.enablePan) return;
						m(e), this.update();
						break;
					case Un.TOUCH_DOLLY_PAN:
						if (!1 === this.enableZoom && !1 === this.enablePan) return;
						g(e), this.update();
						break;
					case Un.TOUCH_DOLLY_ROTATE:
						if (!1 === this.enableZoom && !1 === this.enableRotate) return;
						x(e), this.update();
						break;
					default:
						_n = Un.NONE;
				}
			};
		(this.onContextMenu = (e) => {
			!1 !== this.enabled && e.preventDefault();
		}),
			(this.getAutoRotationAngle = () => ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed);
		const w = () => Math.pow(0.95, this.zoomSpeed);
		this.domElement.addEventListener("contextmenu", this.onContextMenu),
			this.domElement.addEventListener("pointerdown", this.onPointerDown),
			this.domElement.addEventListener("pointercancel", es),
			this.domElement.addEventListener("wheel", this.onMouseWheel, { passive: !1 });
	}
	dispose() {
		this.domElement.removeEventListener("contextmenu", this.onContextMenu),
			this.domElement.removeEventListener("pointerdown", this.onPointerDown),
			this.domElement.removeEventListener("pointercancel", es),
			this.domElement.removeEventListener("wheel", this.onMouseWheel),
			this.domElement.removeEventListener("pointermove", this.onPointerMove),
			this.domElement.removeEventListener("pointerup", this.onPointerUp),
			null !== this._domElementKeyEvents &&
				this._domElementKeyEvents.removeEventListener("keydown", this.onKeyDown);
	}
}
const Un = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
};
let _n = Un.NONE;
const Ln = 1e-6,
	An = new bn(),
	Rn = new bn();
let Cn = 1;
const Dn = new He();
let In = !1;
const zn = new Oe(),
	Pn = new Oe(),
	Nn = new Oe(),
	On = new Oe(),
	Bn = new Oe(),
	Vn = new Oe(),
	Fn = new Oe(),
	Gn = new Oe(),
	kn = new Oe(),
	Hn = [],
	qn = {};
var jn, $n;
function Xn(e) {
	Rn.theta -= e;
}
function Yn(e) {
	Rn.phi -= e;
}
function Wn(e) {
	delete qn[e.pointerId];
	for (let t = 0; t < Hn.length; t++) if (Hn[t].pointerId == e.pointerId) return void Hn.splice(t, 1);
}
function Zn(e) {
	let t = qn[e.pointerId];
	void 0 === t && ((t = new Oe()), (qn[e.pointerId] = t)), t.set(e.pageX, e.pageY);
}
function Kn(e) {
	const t = e.pointerId === Hn[0].pointerId ? Hn[1] : Hn[0];
	return qn[t.pointerId];
}
function Qn(e) {
	zn.set(e.clientX, e.clientY);
}
function Jn(e) {
	On.set(e.clientX, e.clientY);
}
function es(e) {
	Wn(e);
}
function ts() {
	if (1 === Hn.length) zn.set(Hn[0].pageX, Hn[0].pageY);
	else {
		const e = 0.5 * (Hn[0].pageX + Hn[1].pageX),
			t = 0.5 * (Hn[0].pageY + Hn[1].pageY);
		zn.set(e, t);
	}
}
function is() {
	if (1 === Hn.length) On.set(Hn[0].pageX, Hn[0].pageY);
	else {
		const e = 0.5 * (Hn[0].pageX + Hn[1].pageX),
			t = 0.5 * (Hn[0].pageY + Hn[1].pageY);
		On.set(e, t);
	}
}
function rs() {
	const e = Hn[0].pageX - Hn[1].pageX,
		t = Hn[0].pageY - Hn[1].pageY,
		i = Math.sqrt(e * e + t * t);
	Fn.set(0, i);
}
!(function (e) {
	(e[(e.LEFT = 0)] = "LEFT"),
		(e[(e.MIDDLE = 1)] = "MIDDLE"),
		(e[(e.RIGHT = 2)] = "RIGHT"),
		(e[(e.ROTATE = 0)] = "ROTATE"),
		(e[(e.DOLLY = 1)] = "DOLLY"),
		(e[(e.PAN = 2)] = "PAN");
})(jn || (jn = {})),
	(function (e) {
		(e[(e.ROTATE = 0)] = "ROTATE"),
			(e[(e.PAN = 1)] = "PAN"),
			(e[(e.DOLLY_PAN = 2)] = "DOLLY_PAN"),
			(e[(e.DOLLY_ROTATE = 3)] = "DOLLY_ROTATE");
	})($n || ($n = {}));
export {
	h as AddressMode,
	Lr as AmbientLight,
	Ce as Attachment,
	We as Attribute,
	sr as Axes,
	it as BindGroup,
	rt as BindGroupEntity,
	E as BlendFactor,
	M as BlendOperation,
	Tr as BlinnPhongMaterial,
	tn as BloomPostEffect,
	Sr as BoxGeometry,
	G as Buffer,
	r as BufferUsage,
	pi as Color,
	T as ColorWriteFlags,
	f as CompareFunction,
	Le as Context,
	cr as CubeTextureLoader,
	w as CullMode,
	on as DirectionalLight,
	Y as DrawCommand,
	u as FilterMode,
	b as FrontFace,
	_ as IndexFormat,
	A as InputStepMode,
	fr as Instance,
	dr as InstanceMesh,
	ir as Mesh,
	pr as Model,
	Mn as OrbitControl,
	rn as OrthographicCamera,
	Er as PbrMaterial,
	$r as PerspectiveCamera,
	Wt as PlaneGeometry,
	Zr as PointLight,
	S as PrimitiveTopology,
	ve as RenderState,
	nt as RenderTarget,
	Re as Sampler,
	Jr as Scene,
	er as ShaderMaterial,
	d as ShaderStage,
	rr as ShadowMapDebugger,
	ur as SkyBox,
	yr as SphereGeometry,
	sn as SpotLight,
	vr as Sprite,
	U as StencilOperation,
	x as StorageTextureAccess,
	Ae as Texture,
	l as TextureAspect,
	s as TextureDimension,
	c as TextureFormat,
	g as TextureSampleType,
	a as TextureUsage,
	o as TextureViewDimension,
	br as TorusKnotGeometry,
	He as Vector3,
	L as VertexFormat,
	yn as loadGLTF,
	Sn as loadTexture
};
