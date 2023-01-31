
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/** @internal */
// eslint-disable-next-line import/export
var PredefinedColorSpace;
(function (PredefinedColorSpace) {
    PredefinedColorSpace["SRGB"] = "srgb";
})(PredefinedColorSpace || (PredefinedColorSpace = {}));
/** @internal */
// eslint-disable-next-line import/export
var PowerPreference;
(function (PowerPreference) {
    PowerPreference["LowPower"] = "low-power";
    PowerPreference["HighPerformance"] = "high-performance";
})(PowerPreference || (PowerPreference = {}));
/** @internal */
var FeatureName;
(function (FeatureName) {
    FeatureName["DepthClipControl"] = "depth-clip-control";
    FeatureName["Depth24UnormStencil8"] = "depth24unorm-stencil8";
    FeatureName["Depth32FloatStencil8"] = "depth32float-stencil8";
    FeatureName["TextureCompressionBC"] = "texture-compression-bc";
    FeatureName["TextureCompressionETC2"] = "texture-compression-etc2";
    FeatureName["TextureCompressionASTC"] = "texture-compression-astc";
    FeatureName["TimestampQuery"] = "timestamp-query";
    FeatureName["IndirectFirstInstance"] = "indirect-first-instance";
    FeatureName["ShaderF16"] = "shader-f16";
    FeatureName["BGRA8UnormStorage"] = "bgra8unorm-storage";
})(FeatureName || (FeatureName = {}));
/** @internal */
var BufferUsage;
(function (BufferUsage) {
    BufferUsage[BufferUsage["MapRead"] = 1] = "MapRead";
    BufferUsage[BufferUsage["MapWrite"] = 2] = "MapWrite";
    BufferUsage[BufferUsage["CopySrc"] = 4] = "CopySrc";
    BufferUsage[BufferUsage["CopyDst"] = 8] = "CopyDst";
    BufferUsage[BufferUsage["Index"] = 16] = "Index";
    BufferUsage[BufferUsage["Vertex"] = 32] = "Vertex";
    BufferUsage[BufferUsage["Uniform"] = 64] = "Uniform";
    BufferUsage[BufferUsage["Storage"] = 128] = "Storage";
    BufferUsage[BufferUsage["Indirect"] = 256] = "Indirect";
    BufferUsage[BufferUsage["QueryResolve"] = 512] = "QueryResolve";
})(BufferUsage || (BufferUsage = {}));
/** @internal */
var MapMode;
(function (MapMode) {
    MapMode[MapMode["Read"] = 1] = "Read";
    MapMode[MapMode["Write"] = 2] = "Write";
})(MapMode || (MapMode = {}));
/** @internal */
var TextureDimension;
(function (TextureDimension) {
    TextureDimension["E1d"] = "1d";
    TextureDimension["E2d"] = "2d";
    TextureDimension["E3d"] = "3d";
})(TextureDimension || (TextureDimension = {}));
/** @internal */
var TextureUsage;
(function (TextureUsage) {
    TextureUsage[TextureUsage["CopySrc"] = 1] = "CopySrc";
    TextureUsage[TextureUsage["CopyDst"] = 2] = "CopyDst";
    TextureUsage[TextureUsage["TextureBinding"] = 4] = "TextureBinding";
    TextureUsage[TextureUsage["StorageBinding"] = 8] = "StorageBinding";
    TextureUsage[TextureUsage["RenderAttachment"] = 16] = "RenderAttachment";
})(TextureUsage || (TextureUsage = {}));
/** @internal */
var TextureViewDimension;
(function (TextureViewDimension) {
    TextureViewDimension["E1d"] = "1d";
    TextureViewDimension["E2d"] = "2d";
    TextureViewDimension["E2dArray"] = "2d-array";
    TextureViewDimension["Cube"] = "cube";
    TextureViewDimension["CubeArray"] = "cube-array";
    TextureViewDimension["E3d"] = "3d";
})(TextureViewDimension || (TextureViewDimension = {}));
/** @internal */
var TextureAspect;
(function (TextureAspect) {
    TextureAspect["All"] = "all";
    TextureAspect["StencilOnly"] = "stencil-only";
    TextureAspect["DepthOnly"] = "depth-only";
})(TextureAspect || (TextureAspect = {}));
/**
 * Comments taken from https://github.com/gfx-rs/wgpu/blob/master/wgpu-types/src/lib.rs
 * @internal
 */
var TextureFormat;
(function (TextureFormat) {
    // 8-bit formats
    TextureFormat["R8Unorm"] = "r8unorm";
    TextureFormat["R8Snorm"] = "r8snorm";
    TextureFormat["R8Uint"] = "r8uint";
    TextureFormat["R8Sint"] = "r8sint";
    // 16-bit formats
    TextureFormat["R16Uint"] = "r16uint";
    TextureFormat["R16Sint"] = "r16sint";
    TextureFormat["R16Float"] = "r16float";
    TextureFormat["RG8Unorm"] = "rg8unorm";
    TextureFormat["RG8Snorm"] = "rg8snorm";
    TextureFormat["RG8Uint"] = "rg8uint";
    TextureFormat["RG8Sint"] = "rg8sint";
    // 32-bit formats
    TextureFormat["R32Uint"] = "r32uint";
    TextureFormat["R32Sint"] = "r32sint";
    TextureFormat["R32Float"] = "r32float";
    TextureFormat["RG16Uint"] = "rg16uint";
    TextureFormat["RG16Sint"] = "rg16sint";
    TextureFormat["RG16Float"] = "rg16float";
    TextureFormat["RGBA8Unorm"] = "rgba8unorm";
    TextureFormat["RGBA8UnormSRGB"] = "rgba8unorm-srgb";
    TextureFormat["RGBA8Snorm"] = "rgba8snorm";
    TextureFormat["RGBA8Uint"] = "rgba8uint";
    TextureFormat["RGBA8Sint"] = "rgba8sint";
    TextureFormat["BGRA8Unorm"] = "bgra8unorm";
    TextureFormat["BGRA8UnormSRGB"] = "bgra8unorm-srgb";
    // Packed 32-bit formats
    TextureFormat["RGB9E5UFloat"] = "rgb9e5ufloat";
    TextureFormat["RGB10A2Unorm"] = "rgb10a2unorm";
    TextureFormat["RG11B10UFloat"] = "rg11b10ufloat";
    // 64-bit formats
    TextureFormat["RG32Uint"] = "rg32uint";
    TextureFormat["RG32Sint"] = "rg32sint";
    TextureFormat["RG32Float"] = "rg32float";
    TextureFormat["RGBA16Uint"] = "rgba16uint";
    TextureFormat["RGBA16Sint"] = "rgba16sint";
    TextureFormat["RGBA16Float"] = "rgba16float";
    // 128-bit formats
    TextureFormat["RGBA32Uint"] = "rgba32uint";
    TextureFormat["RGBA32Sint"] = "rgba32sint";
    TextureFormat["RGBA32Float"] = "rgba32float";
    // Depth and stencil formats
    TextureFormat["Stencil8"] = "stencil8";
    TextureFormat["Depth16Unorm"] = "depth16unorm";
    TextureFormat["Depth24Plus"] = "depth24plus";
    TextureFormat["Depth24PlusStencil8"] = "depth24plus-stencil8";
    TextureFormat["Depth32Float"] = "depth32float";
    // BC compressed formats usable if "texture-compression-bc" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["BC1RGBAUnorm"] = "bc1-rgba-unorm";
    TextureFormat["BC1RGBAUnormSRGB"] = "bc1-rgba-unorm-srgb";
    TextureFormat["BC2RGBAUnorm"] = "bc2-rgba-unorm";
    TextureFormat["BC2RGBAUnormSRGB"] = "bc2-rgba-unorm-srgb";
    TextureFormat["BC3RGBAUnorm"] = "bc3-rgba-unorm";
    TextureFormat["BC3RGBAUnormSRGB"] = "bc3-rgba-unorm-srgb";
    TextureFormat["BC4RUnorm"] = "bc4-r-unorm";
    TextureFormat["BC4RSnorm"] = "bc4-r-snorm";
    TextureFormat["BC5RGUnorm"] = "bc5-rg-unorm";
    TextureFormat["BC5RGSnorm"] = "bc5-rg-snorm";
    TextureFormat["BC6HRGBUFloat"] = "bc6h-rgb-ufloat";
    TextureFormat["BC6HRGBFloat"] = "bc6h-rgb-float";
    TextureFormat["BC7RGBAUnorm"] = "bc7-rgba-unorm";
    TextureFormat["BC7RGBAUnormSRGB"] = "bc7-rgba-unorm-srgb";
    // ETC2 compressed formats usable if "texture-compression-etc2" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["ETC2RGB8Unorm"] = "etc2-rgb8unorm";
    TextureFormat["ETC2RGB8UnormSRGB"] = "etc2-rgb8unorm-srgb";
    TextureFormat["ETC2RGB8A1Unorm"] = "etc2-rgb8a1unorm";
    TextureFormat["ETC2RGB8A1UnormSRGB"] = "etc2-rgb8a1unorm-srgb";
    TextureFormat["ETC2RGBA8Unorm"] = "etc2-rgba8unorm";
    TextureFormat["ETC2RGBA8UnormSRGB"] = "etc2-rgba8unorm-srgb";
    TextureFormat["EACR11Unorm"] = "eac-r11unorm";
    TextureFormat["EACR11Snorm"] = "eac-r11snorm";
    TextureFormat["EACRG11Unorm"] = "eac-rg11unorm";
    TextureFormat["EACRG11Snorm"] = "eac-rg11snorm";
    // ASTC compressed formats usable if "texture-compression-astc" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["ASTC4x4Unorm"] = "astc-4x4-unorm";
    TextureFormat["ASTC4x4UnormSRGB"] = "astc-4x4-unorm-srgb";
    TextureFormat["ASTC5x4Unorm"] = "astc-5x4-unorm";
    TextureFormat["ASTC5x4UnormSRGB"] = "astc-5x4-unorm-srgb";
    TextureFormat["ASTC5x5Unorm"] = "astc-5x5-unorm";
    TextureFormat["ASTC5x5UnormSRGB"] = "astc-5x5-unorm-srgb";
    TextureFormat["ASTC6x5Unorm"] = "astc-6x5-unorm";
    TextureFormat["ASTC6x5UnormSRGB"] = "astc-6x5-unorm-srgb";
    TextureFormat["ASTC6x6Unorm"] = "astc-6x6-unorm";
    TextureFormat["ASTC6x6UnormSRGB"] = "astc-6x6-unorm-srgb";
    TextureFormat["ASTC8x5Unorm"] = "astc-8x5-unorm";
    TextureFormat["ASTC8x5UnormSRGB"] = "astc-8x5-unorm-srgb";
    TextureFormat["ASTC8x6Unorm"] = "astc-8x6-unorm";
    TextureFormat["ASTC8x6UnormSRGB"] = "astc-8x6-unorm-srgb";
    TextureFormat["ASTC8x8Unorm"] = "astc-8x8-unorm";
    TextureFormat["ASTC8x8UnormSRGB"] = "astc-8x8-unorm-srgb";
    TextureFormat["ASTC10x5Unorm"] = "astc-10x5-unorm";
    TextureFormat["ASTC10x5UnormSRGB"] = "astc-10x5-unorm-srgb";
    TextureFormat["ASTC10x6Unorm"] = "astc-10x6-unorm";
    TextureFormat["ASTC10x6UnormSRGB"] = "astc-10x6-unorm-srgb";
    TextureFormat["ASTC10x8Unorm"] = "astc-10x8-unorm";
    TextureFormat["ASTC10x8UnormSRGB"] = "astc-10x8-unorm-srgb";
    TextureFormat["ASTC10x10Unorm"] = "astc-10x10-unorm";
    TextureFormat["ASTC10x10UnormSRGB"] = "astc-10x10-unorm-srgb";
    TextureFormat["ASTC12x10Unorm"] = "astc-12x10-unorm";
    TextureFormat["ASTC12x10UnormSRGB"] = "astc-12x10-unorm-srgb";
    TextureFormat["ASTC12x12Unorm"] = "astc-12x12-unorm";
    TextureFormat["ASTC12x12UnormSRGB"] = "astc-12x12-unorm-srgb";
    // "depth24unorm-stencil8" feature
    TextureFormat["Depth24UnormStencil8"] = "depth24unorm-stencil8";
    // "depth32float-stencil8" feature
    TextureFormat["Depth32FloatStencil8"] = "depth32float-stencil8";
})(TextureFormat || (TextureFormat = {}));
/** @internal */
var AddressMode;
(function (AddressMode) {
    AddressMode["ClampToEdge"] = "clamp-to-edge";
    AddressMode["Repeat"] = "repeat";
    AddressMode["MirrorRepeat"] = "mirror-repeat";
})(AddressMode || (AddressMode = {}));
/** @internal */
var FilterMode;
(function (FilterMode) {
    FilterMode["Nearest"] = "nearest";
    FilterMode["Linear"] = "linear";
})(FilterMode || (FilterMode = {}));
/** @internal */
var CompareFunction;
(function (CompareFunction) {
    CompareFunction["Never"] = "never";
    CompareFunction["Less"] = "less";
    CompareFunction["Equal"] = "equal";
    CompareFunction["LessEqual"] = "less-equal";
    CompareFunction["Greater"] = "greater";
    CompareFunction["NotEqual"] = "not-equal";
    CompareFunction["GreaterEqual"] = "greater-equal";
    CompareFunction["Always"] = "always";
})(CompareFunction || (CompareFunction = {}));
/** @internal */
var ShaderStage;
(function (ShaderStage) {
    ShaderStage[ShaderStage["Vertex"] = 1] = "Vertex";
    ShaderStage[ShaderStage["Fragment"] = 2] = "Fragment";
    ShaderStage[ShaderStage["Compute"] = 4] = "Compute";
})(ShaderStage || (ShaderStage = {}));
/** @internal */
var BufferBindingType;
(function (BufferBindingType) {
    BufferBindingType["Uniform"] = "uniform";
    BufferBindingType["Storage"] = "storage";
    BufferBindingType["ReadOnlyStorage"] = "read-only-storage";
})(BufferBindingType || (BufferBindingType = {}));
/** @internal */
var SamplerBindingType;
(function (SamplerBindingType) {
    SamplerBindingType["Filtering"] = "filtering";
    SamplerBindingType["NonFiltering"] = "non-filtering";
    SamplerBindingType["Comparison"] = "comparison";
})(SamplerBindingType || (SamplerBindingType = {}));
/** @internal */
var TextureSampleType;
(function (TextureSampleType) {
    TextureSampleType["Float"] = "float";
    TextureSampleType["UnfilterableFloat"] = "unfilterable-float";
    TextureSampleType["Depth"] = "depth";
    TextureSampleType["Sint"] = "sint";
    TextureSampleType["Uint"] = "uint";
})(TextureSampleType || (TextureSampleType = {}));
/** @internal */
var StorageTextureAccess;
(function (StorageTextureAccess) {
    StorageTextureAccess["WriteOnly"] = "write-only";
})(StorageTextureAccess || (StorageTextureAccess = {}));
/** @internal */
var CompilationMessageType;
(function (CompilationMessageType) {
    CompilationMessageType["Error"] = "error";
    CompilationMessageType["Warning"] = "warning";
    CompilationMessageType["Info"] = "info";
})(CompilationMessageType || (CompilationMessageType = {}));
/** @internal */
var AutoLayoutMode;
(function (AutoLayoutMode) {
    AutoLayoutMode["Auto"] = "auto";
})(AutoLayoutMode || (AutoLayoutMode = {}));
/** @internal */
var PrimitiveTopology;
(function (PrimitiveTopology) {
    PrimitiveTopology["PointList"] = "point-list";
    PrimitiveTopology["LineList"] = "line-list";
    PrimitiveTopology["LineStrip"] = "line-strip";
    PrimitiveTopology["TriangleList"] = "triangle-list";
    PrimitiveTopology["TriangleStrip"] = "triangle-strip";
})(PrimitiveTopology || (PrimitiveTopology = {}));
/** @internal */
var FrontFace;
(function (FrontFace) {
    FrontFace["CCW"] = "ccw";
    FrontFace["CW"] = "cw";
})(FrontFace || (FrontFace = {}));
/** @internal */
var CullMode;
(function (CullMode) {
    CullMode["None"] = "none";
    CullMode["Front"] = "front";
    CullMode["Back"] = "back";
})(CullMode || (CullMode = {}));
/** @internal */
var ColorWriteFlags;
(function (ColorWriteFlags) {
    ColorWriteFlags[ColorWriteFlags["Red"] = 1] = "Red";
    ColorWriteFlags[ColorWriteFlags["Green"] = 2] = "Green";
    ColorWriteFlags[ColorWriteFlags["Blue"] = 4] = "Blue";
    ColorWriteFlags[ColorWriteFlags["Alpha"] = 8] = "Alpha";
    ColorWriteFlags[ColorWriteFlags["All"] = 15] = "All";
})(ColorWriteFlags || (ColorWriteFlags = {}));
/** @internal */
var BlendFactor;
(function (BlendFactor) {
    BlendFactor["Zero"] = "zero";
    BlendFactor["One"] = "one";
    BlendFactor["Src"] = "src";
    BlendFactor["OneMinusSrc"] = "one-minus-src";
    BlendFactor["SrcAlpha"] = "src-alpha";
    BlendFactor["OneMinusSrcAlpha"] = "one-minus-src-alpha";
    BlendFactor["Dst"] = "dst";
    BlendFactor["OneMinusDst"] = "one-minus-dst";
    BlendFactor["DstAlpha"] = "dst-alpha";
    BlendFactor["OneMinusDstAlpha"] = "one-minus-dst-alpha";
    BlendFactor["SrcAlphaSaturated"] = "src-alpha-saturated";
    BlendFactor["Constant"] = "constant";
    BlendFactor["OneMinusConstant"] = "one-minus-constant";
})(BlendFactor || (BlendFactor = {}));
/** @internal */
var BlendOperation;
(function (BlendOperation) {
    BlendOperation["Add"] = "add";
    BlendOperation["Subtract"] = "subtract";
    BlendOperation["ReverseSubtract"] = "reverse-subtract";
    BlendOperation["Min"] = "min";
    BlendOperation["Max"] = "max";
})(BlendOperation || (BlendOperation = {}));
/** @internal */
var StencilOperation;
(function (StencilOperation) {
    StencilOperation["Keep"] = "keep";
    StencilOperation["Zero"] = "zero";
    StencilOperation["Replace"] = "replace";
    StencilOperation["Invert"] = "invert";
    StencilOperation["IncrementClamp"] = "increment-clamp";
    StencilOperation["DecrementClamp"] = "decrement-clamp";
    StencilOperation["IncrementWrap"] = "increment-wrap";
    StencilOperation["DecrementWrap"] = "decrement-wrap";
})(StencilOperation || (StencilOperation = {}));
/** @internal */
var IndexFormat;
(function (IndexFormat) {
    IndexFormat["Uint16"] = "uint16";
    IndexFormat["Uint32"] = "uint32";
})(IndexFormat || (IndexFormat = {}));
/** @internal */
var VertexFormat;
(function (VertexFormat) {
    VertexFormat["Uint8x2"] = "uint8x2";
    VertexFormat["Uint8x4"] = "uint8x4";
    VertexFormat["Sint8x2"] = "sint8x2";
    VertexFormat["Sint8x4"] = "sint8x4";
    VertexFormat["Unorm8x2"] = "unorm8x2";
    VertexFormat["Unorm8x4"] = "unorm8x4";
    VertexFormat["Snorm8x2"] = "snorm8x2";
    VertexFormat["Snorm8x4"] = "snorm8x4";
    VertexFormat["Uint16x2"] = "uint16x2";
    VertexFormat["Uint16x4"] = "uint16x4";
    VertexFormat["Sint16x2"] = "sint16x2";
    VertexFormat["Sint16x4"] = "sint16x4";
    VertexFormat["Unorm16x2"] = "unorm16x2";
    VertexFormat["Unorm16x4"] = "unorm16x4";
    VertexFormat["Snorm16x2"] = "snorm16x2";
    VertexFormat["Snorm16x4"] = "snorm16x4";
    VertexFormat["Float16x2"] = "float16x2";
    VertexFormat["Float16x4"] = "float16x4";
    VertexFormat["Float32"] = "float32";
    VertexFormat["Float32x2"] = "float32x2";
    VertexFormat["Float32x3"] = "float32x3";
    VertexFormat["Float32x4"] = "float32x4";
    VertexFormat["Uint32"] = "uint32";
    VertexFormat["Uint32x2"] = "uint32x2";
    VertexFormat["Uint32x3"] = "uint32x3";
    VertexFormat["Uint32x4"] = "uint32x4";
    VertexFormat["Sint32"] = "sint32";
    VertexFormat["Sint32x2"] = "sint32x2";
    VertexFormat["Sint32x3"] = "sint32x3";
    VertexFormat["Sint32x4"] = "sint32x4";
})(VertexFormat || (VertexFormat = {}));
/** @internal */
var InputStepMode;
(function (InputStepMode) {
    InputStepMode["Vertex"] = "vertex";
    InputStepMode["Instance"] = "instance";
})(InputStepMode || (InputStepMode = {}));
/** @internal */
var ComputePassTimestampLocation;
(function (ComputePassTimestampLocation) {
    ComputePassTimestampLocation["Beginning"] = "beginning";
    ComputePassTimestampLocation["End"] = "end";
})(ComputePassTimestampLocation || (ComputePassTimestampLocation = {}));
/** @internal */
var RenderPassTimestampLocation;
(function (RenderPassTimestampLocation) {
    RenderPassTimestampLocation["Beginning"] = "beginning";
    RenderPassTimestampLocation["End"] = "end";
})(RenderPassTimestampLocation || (RenderPassTimestampLocation = {}));
/** @internal */
var LoadOp;
(function (LoadOp) {
    LoadOp["Load"] = "load";
    LoadOp["Clear"] = "clear";
})(LoadOp || (LoadOp = {}));
/** @internal */
var StoreOp;
(function (StoreOp) {
    StoreOp["Store"] = "store";
    StoreOp["Discard"] = "discard";
})(StoreOp || (StoreOp = {}));
/** @internal */
var QueryType;
(function (QueryType) {
    QueryType["Occlusion"] = "occlusion";
    QueryType["Timestamp"] = "timestamp";
})(QueryType || (QueryType = {}));
/** @internal */
var CanvasAlphaMode;
(function (CanvasAlphaMode) {
    CanvasAlphaMode["Opaque"] = "opaque";
    CanvasAlphaMode["Premultiplied"] = "premultiplied";
})(CanvasAlphaMode || (CanvasAlphaMode = {}));
/** @internal */
var DeviceLostReason;
(function (DeviceLostReason) {
    DeviceLostReason["Destroyed"] = "destroyed";
})(DeviceLostReason || (DeviceLostReason = {}));
/** @internal */
var ErrorFilter;
(function (ErrorFilter) {
    ErrorFilter["OutOfMemory"] = "out-of-memory";
    ErrorFilter["Validation"] = "validation";
})(ErrorFilter || (ErrorFilter = {}));
var GPUColorWrite;
(function (GPUColorWrite) {
    GPUColorWrite[GPUColorWrite["Red"] = 1] = "Red";
    GPUColorWrite[GPUColorWrite["Green"] = 2] = "Green";
    GPUColorWrite[GPUColorWrite["Blue"] = 4] = "Blue";
    GPUColorWrite[GPUColorWrite["Alpha"] = 8] = "Alpha";
    GPUColorWrite[GPUColorWrite["All"] = 15] = "All";
})(GPUColorWrite || (GPUColorWrite = {}));

/**
 * Returns the first parameter if not undefined, otherwise the second parameter.
 * Useful for setting a default value for a parameter.
 *
 * @function
 *
 * @param {*} a
 * @param {*} b
 * @returns {*} Returns the first parameter if not undefined, otherwise the second parameter.
 *
 * @example
 * param = Cesium.defaultValue(param, 'default');
 */
function defaultValue(a, b) {
    if (a !== undefined && a !== null) {
        return a;
    }
    return b;
}
/**
 * A frozen empty object that can be used as the default value for options passed as
 * an object literal.
 * @type {Object}
 * @memberof defaultValue
 */
defaultValue.EMPTY_OBJECT = Object.freeze({});

class Buffer {
    constructor(device, usage, data, size, layoutType) {
        this.device = device;
        this.usage = usage;
        this.data = data;
        this.size = size;
        this.gpuBuffer = device.createBuffer({
            size: size != undefined ? size : data.byteLength,
            usage,
        });
        //if(usage===(BufferUsage.Uniform|BufferUsage.CopyDst)){
        this.layoutType = defaultValue(layoutType, {
            type: 'uniform',
            hasDynamicOffset: false,
            minBindingSize: 0
        });
        //}
        if (data)
            this.setSubData(0, data);
    }
    static create(device, usage, data, size) {
        return new Buffer(device, usage, data, size);
    }
    static createVertexBuffer(device, data) {
        return new Buffer(device, BufferUsage.Vertex | BufferUsage.CopyDst, data, data.byteLength);
    }
    static createIndexBuffer(device, data) {
        return new Buffer(device, BufferUsage.Index | BufferUsage.CopyDst, data);
    }
    static createUniformBuffer(device, size, layoutType, bufferUsage) {
        const usage = bufferUsage ? bufferUsage | BufferUsage.CopyDst : BufferUsage.Uniform | BufferUsage.CopyDst;
        return new Buffer(device, usage, null, size, layoutType);
    }
    static getBufferType(usage) {
        switch (usage) {
            case BufferUsage.Uniform:
                break;
            case BufferUsage.Storage:
                break;
        }
    }
    // https://github.com/gpuweb/gpuweb/blob/main/design/BufferOperations.md
    setSubData(offset, data) {
        const srcArrayBuffer = data.buffer;
        const byteCount = srcArrayBuffer.byteLength;
        const srcBuffer = this.device.createBuffer({
            mappedAtCreation: true,
            size: byteCount,
            usage: GPUBufferUsage.COPY_SRC,
        });
        const arrayBuffer = srcBuffer.getMappedRange();
        new Uint8Array(arrayBuffer).set(new Uint8Array(srcArrayBuffer)); // memcpy
        srcBuffer.unmap();
        this.copyToBuffer(srcBuffer, offset, byteCount);
        srcBuffer.destroy();
    }
    copyToBuffer(srcBuffer, offset, byteCount) {
        const commandEncoder = this.device.createCommandEncoder();
        commandEncoder.copyBufferToBuffer(srcBuffer, 0, this.gpuBuffer, offset, byteCount);
        this.device.queue.submit([commandEncoder.finish()]);
    }
    copyToTexture(bytesPerRow, rowsPerImage, destination, extent) {
        const commandEncoder = this.device.createCommandEncoder();
        commandEncoder.copyBufferToTexture({
            buffer: this.gpuBuffer,
            bytesPerRow,
            rowsPerImage,
        }, destination, extent);
        this.device.queue.submit([commandEncoder.finish()]);
    }
    destroy() {
        this.gpuBuffer.destroy();
    }
}

class DrawCommand {
    constructor(options) {
        Object.assign(this, options);
    }
}

const GPUCanvasCompositingAlphaMode = {
    Opaque: "opaque",
    Premultiplied: "premultiplied",
};

/**
 * @function
 *
 * @param {*} value The object.
 * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
 *
 * @example
 * if (Cesium.defined(positions)) {
 *      doSomething();
 * } else {
 *      doSomethingElse();
 * }
 */
function defined(value) {
    return value !== undefined && value !== null;
}

const renderStateCache = new WeakMap();
class RenderState {
    constructor(renderState) {
        const rs = defaultValue(renderState, {});
        const targets = defaultValue(rs.targets, {});
        const blend = defaultValue(rs.blend, { color: {}, alpha: {} });
        const depthStencil = defaultValue(rs.depthStencil, {});
        const depthStencilFront = defaultValue(depthStencil.front, {});
        const depthStencilBack = defaultValue(depthStencil.back, {});
        const viewport = rs.viewport;
        this.stencilEnabled = defaultValue(rs.stencilEnabled, false);
        this.scissorTestEnabled = defaultValue(rs.scissorTestEnabled, false);
        this.scissorTest = defaultValue(rs.scissorRect, {
            x: viewport.x,
            y: viewport.y,
            width: viewport.width,
            height: viewport.height,
        });
        //
        this.multisample = defaultValue(rs.multisampleState, {
            count: 1,
            mask: 0xffffffff,
            alphaToCoverageEnabled: false,
        });
        //已完善
        this.blendConstant = defaultValue(rs.blendConstant, {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
        });
        //已完善
        this.targets = Array.isArray(targets)
            ? targets
            : [
                {
                    format: TextureFormat.BGRA8Unorm,
                    blend: {
                        color: {
                            operation: defaultValue(blend.color.operation, BlendOperation.Add),
                            srcFactor: defaultValue(blend.color.srcFactor, BlendFactor.One),
                            dstFactor: defaultValue(blend.color.dstFactor, BlendFactor.Zero),
                        },
                        alpha: {
                            operation: defaultValue(blend.alpha.operation, BlendOperation.Add),
                            srcFactor: defaultValue(blend.alpha.srcFactor, BlendFactor.One),
                            dstFactor: defaultValue(blend.alpha.dstFactor, BlendFactor.Zero),
                        },
                    },
                    writeMask: defaultValue(targets.writeMask, GPUColorWrite.All),
                },
            ];
        //
        this.stencilReference = defaultValue(rs.stencilReference, 0);
        //已完善
        this.depthStencil = {
            format: defaultValue(depthStencil.format, TextureFormat.Depth24Plus),
            depthWriteEnabled: defaultValue(depthStencil.depthWriteEnabled, true),
            depthCompare: defaultValue(depthStencil.depthCompare, CompareFunction.Less),
            stencilReadMask: defaultValue(depthStencil.stencilReadMask, 0xffffffff),
            stencilWriteMask: defaultValue(depthStencil.stencilWriteMask, 0xffffffff),
            stencilFront: {
                compare: defaultValue(depthStencilFront.compare, CompareFunction.Always),
                failOp: defaultValue(depthStencilFront.failOp, StencilOperation.Keep),
                depthFailOp: defaultValue(depthStencilFront.depthFailOp, StencilOperation.Keep),
                passOp: defaultValue(depthStencilFront.passOp, StencilOperation.Keep),
            },
            stencilBack: {
                compare: defaultValue(depthStencilBack.compare, CompareFunction.Always),
                failOp: defaultValue(depthStencilBack.failOp, StencilOperation.Keep),
                depthFailOp: defaultValue(depthStencilBack.depthFailOp, StencilOperation.Keep),
                passOp: defaultValue(depthStencilBack.passOp, StencilOperation.Keep),
            },
            depthBias: defaultValue(depthStencil.depthBias, 0),
            depthBiasSlopeScale: defaultValue(depthStencil.depthBiasSlopeScale, 0),
            depthBiasClamp: defaultValue(depthStencil.depthBiasClamp, 0),
        };
        //
        this.primitive = defaultValue(rs.primitive, {
            frontFace: FrontFace.CCW,
            cullMode: CullMode.None,
            unclippedDepth: false,
        });
        //
        this.viewport = defined(viewport) ? viewport : undefined;
    }
    static getFromRenderStateCache(renderstate) {
        if (renderStateCache.has(renderstate)) {
            return renderStateCache.get(renderstate);
        }
        const newRenderState = new RenderState(renderstate);
        renderStateCache.set(renderstate, Object.freeze(newRenderState));
        return newRenderState;
    }
    static checkRenderStateStatus(type, value) {
        let result = false;
        switch (type) {
            case "blendConstant":
                const blendConstant = RenderState.preRenderState.blendConstant;
                if (blendConstant?.r == value.r &&
                    blendConstant?.g == value.g &&
                    blendConstant?.b == value.b &&
                    blendConstant?.a == value.a) {
                    RenderState.preRenderState.blendConstant = value;
                    result = true;
                }
                break;
            case "viewport":
                const viewport = RenderState.preRenderState.viewport;
                if (viewport?.x == value.x &&
                    viewport?.y == value.y &&
                    viewport?.width == value.width &&
                    viewport?.height == value.height) {
                    RenderState.preRenderState.viewport = value;
                    result = true;
                }
                break;
            case "stencilReference":
                const stencilReference = RenderState.preRenderState.stencilReference;
                if (stencilReference != value) {
                    RenderState.preRenderState.stencilReference = value;
                    result = true;
                }
                break;
            default:
                const scissorTest = RenderState.preRenderState.scissorTest;
                if (scissorTest?.x == value.x &&
                    scissorTest?.y == value.y &&
                    scissorTest?.width == value.width &&
                    scissorTest?.height == value.height) {
                    RenderState.preRenderState.scissorTest = value;
                    result = true;
                }
                break;
        }
        return result;
    }
    static applyRenderState(passEncoder, renderState) {
        const { blendConstant, stencilReference, viewport, scissorTest, stencilEnabled, scissorTestEnabled, } = RenderState.getFromRenderStateCache(renderState);
        if (RenderState.checkRenderStateStatus("blendConstant", blendConstant))
            passEncoder.setBlendConstant(blendConstant);
        if (stencilEnabled &&
            RenderState.checkRenderStateStatus("stencilReference", stencilReference))
            passEncoder.setStencilReference(stencilReference);
        if (RenderState.checkRenderStateStatus("viewport", viewport))
            passEncoder.setViewport(viewport.x, viewport.y, viewport.width, viewport.height, 0, 1);
        if (scissorTestEnabled &&
            RenderState.checkRenderStateStatus("scissorTest", scissorTest))
            passEncoder.setScissorRect(scissorTest.x, scissorTest.y, scissorTest.width, scissorTest.height);
    }
}
RenderState.defaultDepthStencil = {
    format: TextureFormat.Depth24Plus,
    depthWriteEnabled: true,
    depthCompare: CompareFunction.Less,
    stencilReadMask: 0xffffffff,
    stencilWriteMask: 0xffffffff,
    stencilFront: {
        compare: CompareFunction.Always,
        failOp: StencilOperation.Keep,
        depthFailOp: StencilOperation.Keep,
        passOp: StencilOperation.Keep,
    },
    stencilBack: {
        compare: CompareFunction.Always,
        failOp: StencilOperation.Keep,
        depthFailOp: StencilOperation.Keep,
        passOp: StencilOperation.Keep,
    },
    depthBias: 0,
    depthBiasSlopeScale: 0,
    depthBiasClamp: 0,
};
RenderState.defaultPrimitiveState = {
    frontFace: FrontFace.CCW,
    cullMode: CullMode.None,
    unclippedDepth: false,
};
RenderState.defaultMultisample = {
    count: 1,
    mask: 0xffffffff,
    alphaToCoverageEnabled: false,
};
RenderState.defaultTarget = {
    format: TextureFormat.BGRA8Unorm,
    blend: {
        color: {
            operation: BlendOperation.Add,
            srcFactor: BlendFactor.SrcAlpha,
            dstFactor: BlendFactor.OneMinusSrcAlpha,
        },
        alpha: {
            operation: BlendOperation.Add,
            srcFactor: BlendFactor.One,
            dstFactor: BlendFactor.One,
        },
    },
    writeMask: ColorWriteFlags.All,
};
RenderState.defaultBlendConstant = { r: 1, g: 1, b: 1, a: 1 };
RenderState.preRenderState = {
    blendConstant: undefined,
    stencilReference: 0,
    viewport: undefined,
    scissorTest: undefined,
};

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/

var MersenneTwister = function(seed) {
	if (seed == undefined) {
		seed = new Date().getTime();
	}

	/* Period parameters */
	this.N = 624;
	this.M = 397;
	this.MATRIX_A = 0x9908b0df;   /* constant vector a */
	this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
	this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

	this.mt = new Array(this.N); /* the array for the state vector */
	this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

	if (seed.constructor == Array) {
		this.init_by_array(seed, seed.length);
	}
	else {
		this.init_seed(seed);
	}
};

/* initializes mt[N] with a seed */
/* origin name init_genrand */
MersenneTwister.prototype.init_seed = function(s) {
	this.mt[0] = s >>> 0;
	for (this.mti=1; this.mti<this.N; this.mti++) {
		var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
		this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
		+ this.mti;
		/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
		/* In the previous versions, MSBs of the seed affect   */
		/* only MSBs of the array mt[].                        */
		/* 2002/01/09 modified by Makoto Matsumoto             */
		this.mt[this.mti] >>>= 0;
		/* for >32 bit machines */
	}
};

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
	var i, j, k;
	this.init_seed(19650218);
	i=1; j=0;
	k = (this.N>key_length ? this.N : key_length);
	for (; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
		+ init_key[j] + j; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++; j++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
		if (j>=key_length) j=0;
	}
	for (k=this.N-1; k; k--) {
		var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
		this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
		- i; /* non linear */
		this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
		i++;
		if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
	}

	this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
};

/* generates a random number on [0,0xffffffff]-interval */
/* origin name genrand_int32 */
MersenneTwister.prototype.random_int = function() {
	var y;
	var mag01 = new Array(0x0, this.MATRIX_A);
	/* mag01[x] = x * MATRIX_A  for x=0,1 */

	if (this.mti >= this.N) { /* generate N words at one time */
		var kk;

		if (this.mti == this.N+1)  /* if init_seed() has not been called, */
			this.init_seed(5489);  /* a default initial seed is used */

		for (kk=0;kk<this.N-this.M;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		for (;kk<this.N-1;kk++) {
			y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
			this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
		}
		y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
		this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

		this.mti = 0;
	}

	y = this.mt[this.mti++];

	/* Tempering */
	y ^= (y >>> 11);
	y ^= (y << 7) & 0x9d2c5680;
	y ^= (y << 15) & 0xefc60000;
	y ^= (y >>> 18);

	return y >>> 0;
};

/* generates a random number on [0,0x7fffffff]-interval */
/* origin name genrand_int31 */
MersenneTwister.prototype.random_int31 = function() {
	return (this.random_int()>>>1);
};

/* generates a random number on [0,1]-real-interval */
/* origin name genrand_real1 */
MersenneTwister.prototype.random_incl = function() {
	return this.random_int()*(1.0/4294967295.0);
	/* divided by 2^32-1 */
};

/* generates a random number on [0,1)-real-interval */
MersenneTwister.prototype.random = function() {
	return this.random_int()*(1.0/4294967296.0);
	/* divided by 2^32 */
};

/* generates a random number on (0,1)-real-interval */
/* origin name genrand_real3 */
MersenneTwister.prototype.random_excl = function() {
	return (this.random_int() + 0.5)*(1.0/4294967296.0);
	/* divided by 2^32 */
};

/* generates a random number on [0,1) with 53-bit resolution*/
/* origin name genrand_res53 */
MersenneTwister.prototype.random_long = function() {
	var a=this.random_int()>>>5, b=this.random_int()>>>6;
	return (a*67108864.0+b)*(1.0/9007199254740992.0);
};

/* These real versions are due to Isaku Wada, 2002/01/09 added */

var mersenneTwister = MersenneTwister;

/**
 * Math functions.
 *
 * @exports GMath
 * @alias Math
 */
class GMath {
    /**
     * Returns 1.0 if the given value is positive or zero, and -1.0 if it is negative.
     * This is similar to {@link GMath#sign} except that returns 1.0 instead of
     * 0.0 when the input value is 0.0.
     * @param {Number} value The value to return the sign of.
     * @returns {Number} The sign of value.
     */
    static signNotZero(value) {
        return value < 0.0 ? -1.0 : 1.0;
    }
    ;
    /**
     * Converts a scalar value in the range [-1.0, 1.0] to a SNORM in the range [0, rangeMaximum]
     * @param {Number} value The scalar value in the range [-1.0, 1.0]
     * @param {Number} [rangeMaximum=255] The maximum value in the mapped range, 255 by default.
     * @returns {Number} A SNORM value, where 0 maps to -1.0 and rangeMaximum maps to 1.0.
     *
     * @see GMath.fromSNorm
     */
    static toSNorm(value, rangeMaximum) {
        rangeMaximum = defaultValue(rangeMaximum, 255);
        return Math.round((GMath.clamp(value, -1.0, 1.0) * 0.5 + 0.5) * rangeMaximum);
    }
    ;
    /**
     * Converts a SNORM value in the range [0, rangeMaximum] to a scalar in the range [-1.0, 1.0].
     * @param {Number} value SNORM value in the range [0, rangeMaximum]
     * @param {Number} [rangeMaximum=255] The maximum value in the SNORM range, 255 by default.
     * @returns {Number} Scalar in the range [-1.0, 1.0].
     *
     * @see GMath.toSNorm
     */
    static fromSNorm(value, rangeMaximum) {
        rangeMaximum = defaultValue(rangeMaximum, 255);
        return ((GMath.clamp(value, 0.0, rangeMaximum) / rangeMaximum) * 2.0 - 1.0);
    }
    ;
    /**
     * Converts a scalar value in the range [rangeMinimum, rangeMaximum] to a scalar in the range [0.0, 1.0]
     * @param {Number} value The scalar value in the range [rangeMinimum, rangeMaximum]
     * @param {Number} rangeMinimum The minimum value in the mapped range.
     * @param {Number} rangeMaximum The maximum value in the mapped range.
     * @returns {Number} A scalar value, where rangeMinimum maps to 0.0 and rangeMaximum maps to 1.0.
     */
    static normalize(value, rangeMinimum, rangeMaximum) {
        rangeMaximum = Math.max(rangeMaximum - rangeMinimum, 0.0);
        return rangeMaximum === 0.0
            ? 0.0
            : GMath.clamp((value - rangeMinimum) / rangeMaximum, 0.0, 1.0);
    }
    ;
    /**
     * Computes the linear interpolation of two values.
     *
     * @param {Number} p The start value to interpolate.
     * @param {Number} q The end value to interpolate.
     * @param {Number} time The time of interpolation generally in the range <code>[0.0, 1.0]</code>.
     * @returns {Number} The linearly interpolated value.
     *
     * @example
     * const n = Cesium.Math.lerp(0.0, 2.0, 0.5); // returns 1.0
     */
    static lerp(p, q, time) {
        return (1.0 - time) * p + time * q;
    }
    ;
    /**
     * Converts degrees to radians.
     * @param {Number} degrees The angle to convert in degrees.
     * @returns {Number} The corresponding angle in radians.
     */
    static toRadians(degrees) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(degrees)) {
            throw new Error("degrees is required.");
        }
        //>>includeEnd('debug');
        return degrees * GMath.RADIANS_PER_DEGREE;
    }
    ;
    /**
     * Converts radians to degrees.
     * @param {Number} radians The angle to convert in radians.
     * @returns {Number} The corresponding angle in degrees.
     */
    static toDegrees(radians) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(radians)) {
            throw new Error("radians is required.");
        }
        //>>includeEnd('debug');
        return radians * GMath.DEGREES_PER_RADIAN;
    }
    ;
    /**
     * Converts a longitude value, in radians, to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
     *
     * @param {Number} angle The longitude value, in radians, to convert to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
     * @returns {Number} The equivalent longitude value in the range [<code>-Math.PI</code>, <code>Math.PI</code>).
     *
     * @example
     * // Convert 270 degrees to -90 degrees longitude
     * const longitude = Cesium.Math.convertLongitudeRange(Cesium.Math.toRadians(270.0));
     */
    static convertLongitudeRange(angle) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(angle)) {
            throw new Error("angle is required.");
        }
        //>>includeEnd('debug');
        const twoPi = GMath.TWO_PI;
        const simplified = angle - Math.floor(angle / twoPi) * twoPi;
        if (simplified < -Math.PI) {
            return simplified + twoPi;
        }
        if (simplified >= Math.PI) {
            return simplified - twoPi;
        }
        return simplified;
    }
    ;
    /**
     * Convenience function that clamps a latitude value, in radians, to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
     * Useful for sanitizing data before use in objects requiring correct range.
     *
     * @param {Number} angle The latitude value, in radians, to clamp to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
     * @returns {Number} The latitude value clamped to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
     *
     * @example
     * // Clamp 108 degrees latitude to 90 degrees latitude
     * const latitude = Cesium.Math.clampToLatitudeRange(Cesium.Math.toRadians(108.0));
     */
    static clampToLatitudeRange(angle) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(angle)) {
            throw new Error("angle is required.");
        }
        //>>includeEnd('debug');
        return GMath.clamp(angle, -1 * GMath.PI_OVER_TWO, GMath.PI_OVER_TWO);
    }
    ;
    /**
     * Produces an angle in the range -Pi <= angle <= Pi which is equivalent to the provided angle.
     *
     * @param {Number} angle in radians
     * @returns {Number} The angle in the range [<code>-GMath.PI</code>, <code>GMath.PI</code>].
     */
    static negativePiToPi(angle) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(angle)) {
            throw new Error("angle is required.");
        }
        //>>includeEnd('debug');
        if (angle >= -GMath.PI && angle <= GMath.PI) {
            // Early exit if the input is already inside the range. This avoids
            // unnecessary math which could introduce floating point error.
            return angle;
        }
        return GMath.zeroToTwoPi(angle + GMath.PI) - GMath.PI;
    }
    ;
    /**
     * Produces an angle in the range 0 <= angle <= 2Pi which is equivalent to the provided angle.
     *
     * @param {Number} angle in radians
     * @returns {Number} The angle in the range [0, <code>GMath.TWO_PI</code>].
     */
    static zeroToTwoPi(angle) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(angle)) {
            throw new Error("angle is required.");
        }
        //>>includeEnd('debug');
        if (angle >= 0 && angle <= GMath.TWO_PI) {
            // Early exit if the input is already inside the range. This avoids
            // unnecessary math which could introduce floating point error.
            return angle;
        }
        const mod = GMath.mod(angle, GMath.TWO_PI);
        if (Math.abs(mod) < GMath.EPSILON14 &&
            Math.abs(angle) > GMath.EPSILON14) {
            return GMath.TWO_PI;
        }
        return mod;
    }
    ;
    /**
     * The modulo operation that also works for negative dividends.
     *
     * @param {Number} m The dividend.
     * @param {Number} n The divisor.
     * @returns {Number} The remainder.
     */
    static mod(m, n) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(m)) {
            throw new Error("m is required.");
        }
        if (!defined(n)) {
            throw new Error("n is required.");
        }
        if (n === 0.0) {
            throw new Error("divisor cannot be 0.");
        }
        //>>includeEnd('debug');
        if (GMath.sign(m) === GMath.sign(n) && Math.abs(m) < Math.abs(n)) {
            // Early exit if the input does not need to be modded. This avoids
            // unnecessary math which could introduce floating point error.
            return m;
        }
        return ((m % n) + n) % n;
    }
    ;
    /**
     * Determines if two values are equal using an absolute or relative tolerance test. This is useful
     * to avoid problems due to roundoff error when comparing floating-point values directly. The values are
     * first compared using an absolute tolerance test. If that fails, a relative tolerance test is performed.
     * Use this test if you are unsure of the magnitudes of left and right.
     *
     * @param {Number} left The first value to compare.
     * @param {Number} right The other value to compare.
     * @param {Number} [relativeEpsilon=0] The maximum inclusive delta between <code>left</code> and <code>right</code> for the relative tolerance test.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The maximum inclusive delta between <code>left</code> and <code>right</code> for the absolute tolerance test.
     * @returns {Boolean} <code>true</code> if the values are equal within the epsilon; otherwise, <code>false</code>.
     *
     * @example
     * const a = Cesium.Math.equalsEpsilon(0.0, 0.01, Cesium.Math.EPSILON2); // true
     * const b = Cesium.Math.equalsEpsilon(0.0, 0.1, Cesium.Math.EPSILON2);  // false
     * const c = Cesium.Math.equalsEpsilon(3699175.1634344, 3699175.2, Cesium.Math.EPSILON7); // true
     * const d = Cesium.Math.equalsEpsilon(3699175.1634344, 3699175.2, Cesium.Math.EPSILON9); // false
     */
    static equalsEpsilon(left, right, relativeEpsilon, absoluteEpsilon = relativeEpsilon) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(left)) {
            throw new Error("left is required.");
        }
        if (!defined(right)) {
            throw new Error("right is required.");
        }
        //>>includeEnd('debug');
        relativeEpsilon = defaultValue(relativeEpsilon, 0.0);
        absoluteEpsilon = defaultValue(absoluteEpsilon, relativeEpsilon);
        const absDiff = Math.abs(left - right);
        return (absDiff <= absoluteEpsilon ||
            absDiff <= relativeEpsilon * Math.max(Math.abs(left), Math.abs(right)));
    }
    ;
    /**
     * Determines if the left value is less than the right value. If the two values are within
     * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns false.
     *
     * @param {Number} left The first number to compare.
     * @param {Number} right The second number to compare.
     * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
     * @returns {Boolean} <code>true</code> if <code>left</code> is less than <code>right</code> by more than
     *          <code>absoluteEpsilon<code>. <code>false</code> if <code>left</code> is greater or if the two
     *          values are nearly equal.
     */
    static lessThan(left, right, absoluteEpsilon) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(left)) {
            throw new Error("first is required.");
        }
        if (!defined(right)) {
            throw new Error("second is required.");
        }
        if (!defined(absoluteEpsilon)) {
            throw new Error("absoluteEpsilon is required.");
        }
        //>>includeEnd('debug');
        return left - right < -absoluteEpsilon;
    }
    ;
    /**
     * Determines if the left value is less than or equal to the right value. If the two values are within
     * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns true.
     *
     * @param {Number} left The first number to compare.
     * @param {Number} right The second number to compare.
     * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
     * @returns {Boolean} <code>true</code> if <code>left</code> is less than <code>right</code> or if the
     *          the values are nearly equal.
     */
    static lessThanOrEquals(left, right, absoluteEpsilon) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(left)) {
            throw new Error("first is required.");
        }
        if (!defined(right)) {
            throw new Error("second is required.");
        }
        if (!defined(absoluteEpsilon)) {
            throw new Error("absoluteEpsilon is required.");
        }
        //>>includeEnd('debug');
        return left - right < absoluteEpsilon;
    }
    ;
    /**
     * Determines if the left value is greater the right value. If the two values are within
     * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns false.
     *
     * @param {Number} left The first number to compare.
     * @param {Number} right The second number to compare.
     * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
     * @returns {Boolean} <code>true</code> if <code>left</code> is greater than <code>right</code> by more than
     *          <code>absoluteEpsilon<code>. <code>false</code> if <code>left</code> is less or if the two
     *          values are nearly equal.
     */
    static greaterThan(left, right, absoluteEpsilon) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(left)) {
            throw new Error("first is required.");
        }
        if (!defined(right)) {
            throw new Error("second is required.");
        }
        if (!defined(absoluteEpsilon)) {
            throw new Error("absoluteEpsilon is required.");
        }
        //>>includeEnd('debug');
        return left - right > absoluteEpsilon;
    }
    ;
    /**
     * Determines if the left value is greater than or equal to the right value. If the two values are within
     * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns true.
     *
     * @param {Number} left The first number to compare.
     * @param {Number} right The second number to compare.
     * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
     * @returns {Boolean} <code>true</code> if <code>left</code> is greater than <code>right</code> or if the
     *          the values are nearly equal.
     */
    static greaterThanOrEquals(left, right, absoluteEpsilon) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(left)) {
            throw new Error("first is required.");
        }
        if (!defined(right)) {
            throw new Error("second is required.");
        }
        if (!defined(absoluteEpsilon)) {
            throw new Error("absoluteEpsilon is required.");
        }
        //>>includeEnd('debug');
        return left - right > -absoluteEpsilon;
    }
    ;
    /**
     * Computes the factorial of the provided number.
     *
     * @param {Number} n The number whose factorial is to be computed.
     * @returns {Number} The factorial of the provided number or undefined if the number is less than 0.
     *
     * @exception {Error} A number greater than or equal to 0 is required.
     *
     *
     * @example
     * //Compute 7!, which is equal to 5040
     * const computedFactorial = Cesium.Math.factorial(7);
     *
     * @see {@link http://en.wikipedia.org/wiki/Factorial|Factorial on Wikipedia}
     */
    static factorial(n) {
        //>>includeStart('debug', pragmas.debug);
        if (typeof n !== "number" || n < 0) {
            throw new Error("A number greater than or equal to 0 is required.");
        }
        //>>includeEnd('debug');
        const length = factorials.length;
        if (n >= length) {
            let sum = factorials[length - 1];
            for (let i = length; i <= n; i++) {
                const next = sum * i;
                factorials.push(next);
                sum = next;
            }
        }
        return factorials[n];
    }
    ;
    /**
     * Increments a number with a wrapping to a minimum value if the number exceeds the maximum value.
     *
     * @param {Number} [n] The number to be incremented.
     * @param {Number} [maximumValue] The maximum incremented value before rolling over to the minimum value.
     * @param {Number} [minimumValue=0.0] The number reset to after the maximum value has been exceeded.
     * @returns {Number} The incremented number.
     *
     * @exception {Error} Maximum value must be greater than minimum value.
     *
     * @example
     * const n = Cesium.Math.incrementWrap(5, 10, 0); // returns 6
     * const m = Cesium.Math.incrementWrap(10, 10, 0); // returns 0
     */
    static incrementWrap(n, maximumValue, minimumValue) {
        minimumValue = defaultValue(minimumValue, 0.0);
        //>>includeStart('debug', pragmas.debug);
        if (!defined(n)) {
            throw new Error("n is required.");
        }
        if (maximumValue <= minimumValue) {
            throw new Error("maximumValue must be greater than minimumValue.");
        }
        //>>includeEnd('debug');
        ++n;
        if (n > maximumValue) {
            n = minimumValue;
        }
        return n;
    }
    ;
    /**
     * Determines if a non-negative integer is a power of two.
     * The maximum allowed input is (2^32)-1 due to 32-bit bitwise operator limitation in Javascript.
     *
     * @param {Number} n The integer to test in the range [0, (2^32)-1].
     * @returns {Boolean} <code>true</code> if the number if a power of two; otherwise, <code>false</code>.
     *
     * @exception {Error} A number between 0 and (2^32)-1 is required.
     *
     * @example
     * const t = Cesium.Math.isPowerOfTwo(16); // true
     * const f = Cesium.Math.isPowerOfTwo(20); // false
     */
    static isPowerOfTwo(n) {
        //>>includeStart('debug', pragmas.debug);
        if (typeof n !== "number" || n < 0 || n > 4294967295) {
            throw new Error("A number between 0 and (2^32)-1 is required.");
        }
        //>>includeEnd('debug');
        return n !== 0 && (n & (n - 1)) === 0;
    }
    ;
    /**
     * Computes the next power-of-two integer greater than or equal to the provided non-negative integer.
     * The maximum allowed input is 2^31 due to 32-bit bitwise operator limitation in Javascript.
     *
     * @param {Number} n The integer to test in the range [0, 2^31].
     * @returns {Number} The next power-of-two integer.
     *
     * @exception {Error} A number between 0 and 2^31 is required.
     *
     * @example
     * const n = Cesium.Math.nextPowerOfTwo(29); // 32
     * const m = Cesium.Math.nextPowerOfTwo(32); // 32
     */
    static nextPowerOfTwo(n) {
        //>>includeStart('debug', pragmas.debug);
        if (typeof n !== "number" || n < 0 || n > 2147483648) {
            throw new Error("A number between 0 and 2^31 is required.");
        }
        //>>includeEnd('debug');
        // From http://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
        --n;
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        ++n;
        return n;
    }
    ;
    /**
     * Computes the previous power-of-two integer less than or equal to the provided non-negative integer.
     * The maximum allowed input is (2^32)-1 due to 32-bit bitwise operator limitation in Javascript.
     *
     * @param {Number} n The integer to test in the range [0, (2^32)-1].
     * @returns {Number} The previous power-of-two integer.
     *
     * @exception {Error} A number between 0 and (2^32)-1 is required.
     *
     * @example
     * const n = Cesium.Math.previousPowerOfTwo(29); // 16
     * const m = Cesium.Math.previousPowerOfTwo(32); // 32
     */
    static previousPowerOfTwo(n) {
        //>>includeStart('debug', pragmas.debug);
        if (typeof n !== "number" || n < 0 || n > 4294967295) {
            throw new Error("A number between 0 and (2^32)-1 is required.");
        }
        //>>includeEnd('debug');
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        n |= n >> 32;
        // The previous bitwise operations implicitly convert to signed 32-bit. Use `>>>` to convert to unsigned
        n = (n >>> 0) - (n >>> 1);
        return n;
    }
    ;
    /**
     * Constraint a value to lie between two values.
     *
     * @param {Number} value The value to clamp.
     * @param {Number} min The minimum value.
     * @param {Number} max The maximum value.
     * @returns {Number} The clamped value such that min <= result <= max.
     */
    static clamp(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }
    ;
    /**
     * @private
     */
    static fog(distanceToCamera, density) {
        const scalar = distanceToCamera * density;
        return 1.0 - Math.exp(-(scalar * scalar));
    }
    ;
    /**
     * Computes a fast approximation of Atan for input in the range [-1, 1].
     *
     * Based on Michal Drobot's approximation from ShaderFastLibs,
     * which in turn is based on "Efficient approximations for the arctangent function,"
     * Rajan, S. Sichun Wang Inkol, R. Joyal, A., May 2006.
     * Adapted from ShaderFastLibs under MIT License.
     *
     * @param {Number} x An input number in the range [-1, 1]
     * @returns {Number} An approximation of atan(x)
     */
    static fastApproximateAtan(x) {
        return x * (-0.1784 * Math.abs(x) - 0.0663 * x * x + 1.0301);
    }
    ;
    /**
     * Computes a fast approximation of Atan2(x, y) for arbitrary input scalars.
     *
     * Range reduction math based on nvidia's cg reference implementation: http://developer.download.nvidia.com/cg/atan2.html
     *
     * @param {Number} x An input number that isn't zero if y is zero.
     * @param {Number} y An input number that isn't zero if x is zero.
     * @returns {Number} An approximation of atan2(x, y)
     */
    static fastApproximateAtan2(x, y) {
        // atan approximations are usually only reliable over [-1, 1]
        // So reduce the range by flipping whether x or y is on top based on which is bigger.
        let opposite;
        let t = Math.abs(x); // t used as swap and atan result.
        opposite = Math.abs(y);
        const adjacent = Math.max(t, opposite);
        opposite = Math.min(t, opposite);
        const oppositeOverAdjacent = opposite / adjacent;
        //>>includeStart('debug', pragmas.debug);
        if (isNaN(oppositeOverAdjacent)) {
            throw new Error("either x or y must be nonzero");
        }
        //>>includeEnd('debug');
        t = GMath.fastApproximateAtan(oppositeOverAdjacent);
        // Undo range reduction
        t = Math.abs(y) > Math.abs(x) ? GMath.PI_OVER_TWO - t : t;
        t = x < 0.0 ? GMath.PI - t : t;
        t = y < 0.0 ? -t : t;
        return t;
    }
    ;
}
/**
 * 0.1
 * @type {Number}
 * @constant
 */
GMath.EPSILON1 = 0.1;
/**
 * 0.01
 * @type {Number}
 * @constant
 */
GMath.EPSILON2 = 0.01;
/**
 * 0.001
 * @type {Number}
 * @constant
 */
GMath.EPSILON3 = 0.001;
/**
 * 0.0001
 * @type {Number}
 * @constant
 */
GMath.EPSILON4 = 0.0001;
/**
 * 0.00001
 * @type {Number}
 * @constant
 */
GMath.EPSILON5 = 0.00001;
/**
 * 0.000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON6 = 0.000001;
/**
 * 0.0000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON7 = 0.0000001;
/**
 * 0.00000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON8 = 0.00000001;
/**
 * 0.000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON9 = 0.000000001;
/**
 * 0.0000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON10 = 0.0000000001;
/**
 * 0.00000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON11 = 0.00000000001;
/**
 * 0.000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON12 = 0.000000000001;
/**
 * 0.0000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON13 = 0.0000000000001;
/**
 * 0.00000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON14 = 0.00000000000001;
/**
 * 0.000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON15 = 0.000000000000001;
/**
 * 0.0000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON16 = 0.0000000000000001;
/**
 * 0.00000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON17 = 0.00000000000000001;
/**
 * 0.000000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON18 = 0.000000000000000001;
/**
 * 0.0000000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON19 = 0.0000000000000000001;
/**
 * 0.00000000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON20 = 0.00000000000000000001;
/**
 * 0.000000000000000000001
 * @type {Number}
 * @constant
 */
GMath.EPSILON21 = 0.000000000000000000001;
/**
 * The gravitational parameter of the Earth in meters cubed
 * per second squared as defined by the WGS84 model: 3.986004418e14
 * @type {Number}
 * @constant
 */
GMath.GRAVITATIONALPARAMETER = 3.986004418e14;
/**
 * Radius of the sun in meters: 6.955e8
 * @type {Number}
 * @constant
 */
GMath.SOLAR_RADIUS = 6.955e8;
/**
 * The mean radius of the moon, according to the "Report of the IAU/IAG Working Group on
 * Cartographic Coordinates and Rotational Elements of the Planets and satellites: 2000",
 * Celestial Mechanics 82: 83-110, 2002.
 * @type {Number}
 * @constant
 */
GMath.LUNAR_RADIUS = 1737400.0;
/**
 * 64 * 1024
 * @type {Number}
 * @constant
 */
GMath.SIXTY_FOUR_KILOBYTES = 64 * 1024;
/**
 * 4 * 1024 * 1024 * 1024
 * @type {Number}
 * @constant
 */
GMath.FOUR_GIGABYTES = 4 * 1024 * 1024 * 1024;
/**
 * Returns the sign of the value; 1 if the value is positive, -1 if the value is
 * negative, or 0 if the value is 0.
 *
 * @function
 * @param {Number} value The value to return the sign of.
 * @returns {Number} The sign of value.
 */
// eslint-disable-next-line es/no-math-sign
GMath.sign = defaultValue(Math.sign, function sign(value) {
    value = +value; // coerce to number
    if (value === 0 || value !== value) {
        // zero or NaN
        return value;
    }
    return value > 0 ? 1 : -1;
});
/**
 * Returns the hyperbolic sine of a number.
 * The hyperbolic sine of <em>value</em> is defined to be
 * (<em>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></em>)/2.0
 * where <i>e</i> is Euler's number, approximately 2.71828183.
 *
 * <p>Special cases:
 *   <ul>
 *     <li>If the argument is NaN, then the result is NaN.</li>
 *
 *     <li>If the argument is infinite, then the result is an infinity
 *     with the same sign as the argument.</li>
 *
 *     <li>If the argument is zero, then the result is a zero with the
 *     same sign as the argument.</li>
 *   </ul>
 *</p>
 *
 * @function
 * @param {Number} value The number whose hyperbolic sine is to be returned.
 * @returns {Number} The hyperbolic sine of <code>value</code>.
 */
// eslint-disable-next-line es/no-math-sinh
GMath.sinh = defaultValue(Math.sinh, function sinh(value) {
    return (Math.exp(value) - Math.exp(-value)) / 2.0;
});
/**
 * Returns the hyperbolic cosine of a number.
 * The hyperbolic cosine of <strong>value</strong> is defined to be
 * (<em>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></em>)/2.0
 * where <i>e</i> is Euler's number, approximately 2.71828183.
 *
 * <p>Special cases:
 *   <ul>
 *     <li>If the argument is NaN, then the result is NaN.</li>
 *
 *     <li>If the argument is infinite, then the result is positive infinity.</li>
 *
 *     <li>If the argument is zero, then the result is 1.0.</li>
 *   </ul>
 *</p>
 *
 * @function
 * @param {Number} value The number whose hyperbolic cosine is to be returned.
 * @returns {Number} The hyperbolic cosine of <code>value</code>.
 */
// eslint-disable-next-line es/no-math-cosh
GMath.cosh = defaultValue(Math.cosh, function cosh(value) {
    return (Math.exp(value) + Math.exp(-value)) / 2.0;
});
/**
 * pi
 *
 * @type {Number}
 * @constant
 */
GMath.PI = Math.PI;
/**
 * 1/pi
 *
 * @type {Number}
 * @constant
 */
GMath.ONE_OVER_PI = 1.0 / Math.PI;
/**
 * pi/2
 *
 * @type {Number}
 * @constant
 */
GMath.PI_OVER_TWO = Math.PI / 2.0;
/**
 * pi/3
 *
 * @type {Number}
 * @constant
 */
GMath.PI_OVER_THREE = Math.PI / 3.0;
/**
 * pi/4
 *
 * @type {Number}
 * @constant
 */
GMath.PI_OVER_FOUR = Math.PI / 4.0;
/**
 * pi/6
 *
 * @type {Number}
 * @constant
 */
GMath.PI_OVER_SIX = Math.PI / 6.0;
/**
 * 3pi/2
 *
 * @type {Number}
 * @constant
 */
GMath.THREE_PI_OVER_TWO = (3.0 * Math.PI) / 2.0;
/**
 * 2pi
 *
 * @type {Number}
 * @constant
 */
GMath.TWO_PI = 2.0 * Math.PI;
/**
 * 1/2pi
 *
 * @type {Number}
 * @constant
 */
GMath.ONE_OVER_TWO_PI = 1.0 / (2.0 * Math.PI);
/**
 * The number of radians in a degree.
 *
 * @type {Number}
 * @constant
 */
GMath.RADIANS_PER_DEGREE = Math.PI / 180.0;
/**
 * The number of degrees in a radian.
 *
 * @type {Number}
 * @constant
 */
GMath.DEGREES_PER_RADIAN = 180.0 / Math.PI;
/**
 * The number of radians in an arc second.
 *
 * @type {Number}
 * @constant
 */
GMath.RADIANS_PER_ARCSECOND = GMath.RADIANS_PER_DEGREE / 3600.0;
/**
 * Sets the seed used by the random number generator
 * in {@link GMath#nextRandomNumber}.
 *
 * @param {Number} seed An integer used as the seed.
 */
GMath.setRandomNumberSeed = function (seed) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(seed)) {
        throw new Error("seed is required.");
    }
    //>>includeEnd('debug');
    randomNumberGenerator = new mersenneTwister(seed);
};
/**
 * Generates a random floating point number in the range of [0.0, 1.0)
 * using a Mersenne twister.
 *
 * @returns {Number} A random number in the range of [0.0, 1.0).
 *
 * @see GMath.setRandomNumberSeed
 * @see {@link http://en.wikipedia.org/wiki/Mersenne_twister|Mersenne twister on Wikipedia}
 */
GMath.nextRandomNumber = function () {
    return randomNumberGenerator.random();
};
/**
 * Generates a random number between two numbers.
 *
 * @param {Number} min The minimum value.
 * @param {Number} max The maximum value.
 * @returns {Number} A random number between the min and max.
 */
GMath.randomBetween = function (min, max) {
    return GMath.nextRandomNumber() * (max - min) + min;
};
/**
 * Computes <code>Math.acos(value)</code>, but first clamps <code>value</code> to the range [-1.0, 1.0]
 * so that the function will never return NaN.
 *
 * @param {Number} value The value for which to compute acos.
 * @returns {Number} The acos of the value if the value is in the range [-1.0, 1.0], or the acos of -1.0 or 1.0,
 *          whichever is closer, if the value is outside the range.
 */
GMath.acosClamped = function (value) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(value)) {
        throw new Error("value is required.");
    }
    //>>includeEnd('debug');
    return Math.acos(GMath.clamp(value, -1.0, 1.0));
};
/**
 * Computes <code>Math.asin(value)</code>, but first clamps <code>value</code> to the range [-1.0, 1.0]
 * so that the function will never return NaN.
 *
 * @param {Number} value The value for which to compute asin.
 * @returns {Number} The asin of the value if the value is in the range [-1.0, 1.0], or the asin of -1.0 or 1.0,
 *          whichever is closer, if the value is outside the range.
 */
GMath.asinClamped = function (value) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(value)) {
        throw new Error("value is required.");
    }
    //>>includeEnd('debug');
    return Math.asin(GMath.clamp(value, -1.0, 1.0));
};
/**
 * Finds the chord length between two points given the circle's radius and the angle between the points.
 *
 * @param {Number} angle The angle between the two points.
 * @param {Number} radius The radius of the circle.
 * @returns {Number} The chord length.
 */
GMath.chordLength = function (angle, radius) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(angle)) {
        throw new Error("angle is required.");
    }
    if (!defined(radius)) {
        throw new Error("radius is required.");
    }
    //>>includeEnd('debug');
    return 2.0 * radius * Math.sin(angle * 0.5);
};
/**
 * Finds the logarithm of a number to a base.
 *
 * @param {Number} number The number.
 * @param {Number} base The base.
 * @returns {Number} The result.
 */
GMath.logBase = function (number, base) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(number)) {
        throw new Error("number is required.");
    }
    if (!defined(base)) {
        throw new Error("base is required.");
    }
    //>>includeEnd('debug');
    return Math.log(number) / Math.log(base);
};
/**
 * Finds the cube root of a number.
 * Returns NaN if <code>number</code> is not provided.
 *
 * @function
 * @param {Number} [number] The number.
 * @returns {Number} The result.
 */
// eslint-disable-next-line es/no-math-cbrt
GMath.cbrt = defaultValue(Math.cbrt, function cbrt(number) {
    const result = Math.pow(Math.abs(number), 1.0 / 3.0);
    return number < 0.0 ? -result : result;
});
/**
 * Finds the base 2 logarithm of a number.
 *
 * @function
 * @param {Number} number The number.
 * @returns {Number} The result.
 */
// eslint-disable-next-line es/no-math-log2
GMath.log2 = defaultValue(Math.log2, function log2(number) {
    return Math.log(number) * Math.LOG2E;
});
let randomNumberGenerator = new mersenneTwister();
const factorials = [1];

let scratchArrayBuffer = new ArrayBuffer(4);
let scratchUint32Array = new Uint32Array(scratchArrayBuffer);
let scratchUint8Array = new Uint8Array(scratchArrayBuffer);
//#rgba
const rgbaMatcher = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i;
//#rrggbbaa
const rrggbbaaMatcher = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
//rgb(), rgba(), or rgb%()
const rgbParenthesesMatcher = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
//hsl() or hsla()
const hslParenthesesMatcher = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
function hue2rgb(m1, m2, h) {
    if (h < 0) {
        h += 1;
    }
    if (h > 1) {
        h -= 1;
    }
    if (h * 6 < 1) {
        return m1 + (m2 - m1) * 6 * h;
    }
    if (h * 2 < 1) {
        return m2;
    }
    if (h * 3 < 2) {
        return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    }
    return m1;
}
/**
 * A color, specified using red, green, blue, and alpha values,
 * which range from <code>0</code> (no intensity) to <code>1.0</code> (full intensity).
 * @param {Number} [red=1.0] The red component.
 * @param {Number} [green=1.0] The green component.
 * @param {Number} [blue=1.0] The blue component.
 * @param {Number} [alpha=1.0] The alpha component.
 *
 * @constructor
 * @alias Color
 *
 * @see Packable
 */
class Color {
    constructor(red = 1.0, green = 1.0, blue = 1.0, alpha = 1.0) {
        /**
         * The red component.
         * @type {Number}
         * @default 1.0
         */
        this.red = red;
        /**
         * The green component.
         * @type {Number}
         * @default 1.0
         */
        this.green = green;
        /**
         * The blue component.
         * @type {Number}
         * @default 1.0
         */
        this.blue = blue;
        /**
         * The alpha component.
         * @type {Number}
         * @default 1.0
         */
        this.alpha = 1.0;
    }
    set(value) {
        if (typeof value === 'string') {
            Color.fromCssColorString(value, this);
        }
        return this;
    }
    toArray() {
        return [this.red, this.green, this.blue];
    }
    /**
   * Returns a duplicate of a Color instance.
   *
   * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
   * @returns {Color} The modified result parameter or a new instance if result was undefined.
   */
    clone(result) {
        return Color.clone(this, result);
    }
    ;
    /**
     * Returns true if this Color equals other.
     *
     * @param {Color} other The Color to compare for equality.
     * @returns {Boolean} <code>true</code> if the Colors are equal; otherwise, <code>false</code>.
     */
    equals(other) {
        return Color.equals(this, other);
    }
    ;
    /**
     * Creates a string containing CSS hex string color value for this color.
     *
     * @returns {String} The CSS hex string equivalent of this color.
     */
    toCssHexString() {
        let r = Color.floatToByte(this.red).toString(16);
        if (r.length < 2) {
            r = `0${r}`;
        }
        let g = Color.floatToByte(this.green).toString(16);
        if (g.length < 2) {
            g = `0${g}`;
        }
        let b = Color.floatToByte(this.blue).toString(16);
        if (b.length < 2) {
            b = `0${b}`;
        }
        return `#${r}${g}${b}`;
    }
    ;
    /**
     * Converts this color to an array of red, green, blue, and alpha values
     * that are in the range of 0 to 255.
     *
     * @param {Number[]} [result] The array to store the result in, if undefined a new instance will be created.
     * @returns {Number[]} The modified result parameter or a new instance if result was undefined.
     */
    toBytes(result) {
        const red = Color.floatToByte(this.red);
        const green = Color.floatToByte(this.green);
        const blue = Color.floatToByte(this.blue);
        const alpha = Color.floatToByte(this.alpha);
        if (!defined(result)) {
            return [red, green, blue, alpha];
        }
        result[0] = red;
        result[1] = green;
        result[2] = blue;
        result[3] = alpha;
        return result;
    }
    ;
    /**
     * Converts this color to a single numeric unsigned 32-bit RGBA value, using the endianness
     * of the system.
     *
     * @returns {Number} A single numeric unsigned 32-bit RGBA value.
     *
     *
     * @example
     * const rgba = Cesium.Color.BLUE.toRgba();
     *
     * @see Color.fromRgba
     */
    toRgba() {
        // scratchUint32Array and scratchUint8Array share an underlying array buffer
        scratchUint8Array[0] = Color.floatToByte(this.red);
        scratchUint8Array[1] = Color.floatToByte(this.green);
        scratchUint8Array[2] = Color.floatToByte(this.blue);
        scratchUint8Array[3] = Color.floatToByte(this.alpha);
        return scratchUint32Array[0];
    }
    ;
    /**
     * Brightens this color by the provided magnitude.
     *
     * @param {Number} magnitude A positive number indicating the amount to brighten.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     *
     * @example
     * const brightBlue = Cesium.Color.BLUE.brighten(0.5, new Cesium.Color());
     */
    brighten(magnitude, result) {
        magnitude = 1.0 - magnitude;
        result.red = 1.0 - (1.0 - this.red) * magnitude;
        result.green = 1.0 - (1.0 - this.green) * magnitude;
        result.blue = 1.0 - (1.0 - this.blue) * magnitude;
        result.alpha = this.alpha;
        return result;
    }
    ;
    /**
     * Darkens this color by the provided magnitude.
     *
     * @param {Number} magnitude A positive number indicating the amount to darken.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     *
     * @example
     * const darkBlue = Cesium.Color.BLUE.darken(0.5, new Cesium.Color());
     */
    darken(magnitude, result) {
        magnitude = 1.0 - magnitude;
        result.red = this.red * magnitude;
        result.green = this.green * magnitude;
        result.blue = this.blue * magnitude;
        result.alpha = this.alpha;
        return result;
    }
    ;
    /**
     * Creates a new Color that has the same red, green, and blue components
     * as this Color, but with the specified alpha value.
     *
     * @param {Number} alpha The new alpha component.
     * @param {Color} [result] The object onto which to store the result.
     * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
     *
     * @example const translucentRed = Cesium.Color.RED.withAlpha(0.9);
     */
    withAlpha(alpha, result) {
        return Color.fromAlpha(this, alpha, result);
    }
    ;
    /**
     * Creates a Color instance from a {@link Cartesian4}. <code>x</code>, <code>y</code>, <code>z</code>,
     * and <code>w</code> map to <code>red</code>, <code>green</code>, <code>blue</code>, and <code>alpha</code>, respectively.
     *
     * @param {Cartesian4} cartesian The source cartesian.
     * @param {Color} [result] The object onto which to store the result.
     * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
     */
    static fromCartesian4(cartesian, result) {
        if (!defined(result)) {
            return new Color(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
        }
        result.red = cartesian.x;
        result.green = cartesian.y;
        result.blue = cartesian.z;
        result.alpha = cartesian.w;
        return result;
    }
    ;
    /**
     * Creates a new Color specified using red, green, blue, and alpha values
     * that are in the range of 0 to 255, converting them internally to a range of 0.0 to 1.0.
     *
     * @param {Number} [red=255] The red component.
     * @param {Number} [green=255] The green component.
     * @param {Number} [blue=255] The blue component.
     * @param {Number} [alpha=255] The alpha component.
     * @param {Color} [result] The object onto which to store the result.
     * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
     */
    static fromBytes(red, green, blue, alpha, result) {
        red = Color.byteToFloat(defaultValue(red, 255.0));
        green = Color.byteToFloat(defaultValue(green, 255.0));
        blue = Color.byteToFloat(defaultValue(blue, 255.0));
        alpha = Color.byteToFloat(defaultValue(alpha, 255.0));
        if (!defined(result)) {
            return new Color(red, green, blue, alpha);
        }
        result.red = red;
        result.green = green;
        result.blue = blue;
        result.alpha = alpha;
        return result;
    }
    ;
    /**
     * Creates a new Color that has the same red, green, and blue components
     * of the specified color, but with the specified alpha value.
     *
     * @param {Color} color The base color
     * @param {Number} alpha The new alpha component.
     * @param {Color} [result] The object onto which to store the result.
     * @returns {Color} The modified result parameter or a new Color instance if one was not provided.
     *
     * @example const translucentRed = Cesium.Color.fromAlpha(Cesium.Color.RED, 0.9);
     */
    static fromAlpha(color, alpha, result) {
        if (!defined(result)) {
            return new Color(color.red, color.green, color.blue, alpha);
        }
        result.red = color.red;
        result.green = color.green;
        result.blue = color.blue;
        result.alpha = alpha;
        return result;
    }
    ;
    /**
     * Creates a Color instance from hue, saturation, and lightness.
     *
     * @param {Number} [hue=0] The hue angle 0...1
     * @param {Number} [saturation=0] The saturation value 0...1
     * @param {Number} [lightness=0] The lightness value 0...1
     * @param {Number} [alpha=1.0] The alpha component 0...1
     * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
     * @returns {Color} The color object.
     *
     * @see {@link http://www.w3.org/TR/css3-color/#hsl-color|CSS color values}
     */
    static fromHsl(hue, saturation, lightness, alpha, result) {
        hue = defaultValue(hue, 0.0) % 1.0;
        saturation = defaultValue(saturation, 0.0);
        lightness = defaultValue(lightness, 0.0);
        alpha = defaultValue(alpha, 1.0);
        let red = lightness;
        let green = lightness;
        let blue = lightness;
        if (saturation !== 0) {
            let m2;
            if (lightness < 0.5) {
                m2 = lightness * (1 + saturation);
            }
            else {
                m2 = lightness + saturation - lightness * saturation;
            }
            const m1 = 2.0 * lightness - m2;
            red = hue2rgb(m1, m2, hue + 1 / 3);
            green = hue2rgb(m1, m2, hue);
            blue = hue2rgb(m1, m2, hue - 1 / 3);
        }
        if (!defined(result)) {
            return new Color(red, green, blue, alpha);
        }
        result.red = red;
        result.green = green;
        result.blue = blue;
        result.alpha = alpha;
        return result;
    }
    ;
    /**
     * Creates a random color using the provided options. For reproducible random colors, you should
     * call {@link GMath#setRandomNumberSeed} once at the beginning of your application.
     *
     * @param {Object} [options] Object with the following properties:
     * @param {Number} [options.red] If specified, the red component to use instead of a randomized value.
     * @param {Number} [options.minimumRed=0.0] The maximum red value to generate if none was specified.
     * @param {Number} [options.maximumRed=1.0] The minimum red value to generate if none was specified.
     * @param {Number} [options.green] If specified, the green component to use instead of a randomized value.
     * @param {Number} [options.minimumGreen=0.0] The maximum green value to generate if none was specified.
     * @param {Number} [options.maximumGreen=1.0] The minimum green value to generate if none was specified.
     * @param {Number} [options.blue] If specified, the blue component to use instead of a randomized value.
     * @param {Number} [options.minimumBlue=0.0] The maximum blue value to generate if none was specified.
     * @param {Number} [options.maximumBlue=1.0] The minimum blue value to generate if none was specified.
     * @param {Number} [options.alpha] If specified, the alpha component to use instead of a randomized value.
     * @param {Number} [options.minimumAlpha=0.0] The maximum alpha value to generate if none was specified.
     * @param {Number} [options.maximumAlpha=1.0] The minimum alpha value to generate if none was specified.
     * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
     * @returns {Color} The modified result parameter or a new instance if result was undefined.
     *
     * @exception {DeveloperError} minimumRed must be less than or equal to maximumRed.
     * @exception {DeveloperError} minimumGreen must be less than or equal to maximumGreen.
     * @exception {DeveloperError} minimumBlue must be less than or equal to maximumBlue.
     * @exception {DeveloperError} minimumAlpha must be less than or equal to maximumAlpha.
     *
     * @example
     * //Create a completely random color
     * const color = Color.fromRandom();
     *
     * //Create a random shade of yellow.
     * const color1 = Color.fromRandom({
     *     red : 1.0,
     *     green : 1.0,
     *     alpha : 1.0
     * });
     *
     * //Create a random bright color.
     * const color2 = Color.fromRandom({
     *     minimumRed : 0.75,
     *     minimumGreen : 0.75,
     *     minimumBlue : 0.75,
     *     alpha : 1.0
     * });
     */
    static fromRandom(options, result) {
        options = defaultValue(options, defaultValue.EMPTY_OBJECT);
        let red = options.red;
        if (!defined(red)) {
            const minimumRed = defaultValue(options.minimumRed, 0);
            const maximumRed = defaultValue(options.maximumRed, 1.0);
            red =
                minimumRed + GMath.nextRandomNumber() * (maximumRed - minimumRed);
        }
        let green = options.green;
        if (!defined(green)) {
            const minimumGreen = defaultValue(options.minimumGreen, 0);
            const maximumGreen = defaultValue(options.maximumGreen, 1.0);
            green =
                minimumGreen +
                    GMath.nextRandomNumber() * (maximumGreen - minimumGreen);
        }
        let blue = options.blue;
        if (!defined(blue)) {
            const minimumBlue = defaultValue(options.minimumBlue, 0);
            const maximumBlue = defaultValue(options.maximumBlue, 1.0);
            blue =
                minimumBlue + GMath.nextRandomNumber() * (maximumBlue - minimumBlue);
        }
        let alpha = options.alpha;
        if (!defined(alpha)) {
            const minimumAlpha = defaultValue(options.minimumAlpha, 0);
            const maximumAlpha = defaultValue(options.maximumAlpha, 1.0);
            alpha =
                minimumAlpha +
                    GMath.nextRandomNumber() * (maximumAlpha - minimumAlpha);
        }
        if (!defined(result)) {
            return new Color(red, green, blue, alpha);
        }
        result.red = red;
        result.green = green;
        result.blue = blue;
        result.alpha = alpha;
        return result;
    }
    ;
    /**
     * Creates a Color instance from a CSS color value.
     *
     * @param {String} color The CSS color value in #rgb, #rgba, #rrggbb, #rrggbbaa, rgb(), rgba(), hsl(), or hsla() format.
     * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
     * @returns {Color} The color object, or undefined if the string was not a valid CSS color.
     *
     *
     * @example
     * const cesiumBlue = Cesium.Color.fromCssColorString('#67ADDF');
     * const green = Cesium.Color.fromCssColorString('green');
     *
     * @see {@link http://www.w3.org/TR/css3-color|CSS color values}
     */
    static fromCssColorString(color, result = new Color()) {
        // Remove all whitespaces from the color string
        color = color.replace(/\s/g, "");
        const namedColor = Color[color.toUpperCase()];
        if (defined(namedColor)) {
            Color.clone(namedColor, result);
            return result;
        }
        let matches = rgbaMatcher.exec(color);
        if (matches !== null) {
            result.red = parseInt(matches[1], 16) / 15;
            result.green = parseInt(matches[2], 16) / 15.0;
            result.blue = parseInt(matches[3], 16) / 15.0;
            return result;
        }
        matches = rrggbbaaMatcher.exec(color);
        if (matches !== null) {
            result.red = parseInt(matches[1], 16) / 255.0;
            result.green = parseInt(matches[2], 16) / 255.0;
            result.blue = parseInt(matches[3], 16) / 255.0;
            return result;
        }
        matches = rgbParenthesesMatcher.exec(color);
        if (matches !== null) {
            result.red =
                parseFloat(matches[1]) / ("%" === matches[1].substr(-1) ? 100.0 : 255.0);
            result.green =
                parseFloat(matches[2]) / ("%" === matches[2].substr(-1) ? 100.0 : 255.0);
            result.blue =
                parseFloat(matches[3]) / ("%" === matches[3].substr(-1) ? 100.0 : 255.0);
            return result;
        }
        matches = hslParenthesesMatcher.exec(color);
        if (matches !== null) {
            return Color.fromHsl(parseFloat(matches[1]) / 360.0, parseFloat(matches[2]) / 100.0, parseFloat(matches[3]) / 100.0, parseFloat(defaultValue(matches[4], "1.0")), result);
        }
        result = undefined;
        return result;
    }
    ;
    /**
     * Converts a 'byte' color component in the range of 0 to 255 into
     * a 'float' color component in the range of 0 to 1.0.
     *
     * @param {Number} number The number to be converted.
     * @returns {Number} The converted number.
     */
    static byteToFloat(number) {
        return number / 255.0;
    }
    ;
    /**
     * Converts a 'float' color component in the range of 0 to 1.0 into
     * a 'byte' color component in the range of 0 to 255.
     *
     * @param {Number} number The number to be converted.
     * @returns {Number} The converted number.
     */
    static floatToByte(number) {
        return number === 1.0 ? 255.0 : (number * 256.0) | 0;
    }
    ;
    /**
     * Duplicates a Color.
     *
     * @param {Color} color The Color to duplicate.
     * @param {Color} [result] The object to store the result in, if undefined a new instance will be created.
     * @returns {Color} The modified result parameter or a new instance if result was undefined. (Returns undefined if color is undefined)
     */
    static clone(color, result) {
        if (!defined(color)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Color(color.red, color.green, color.blue, color.alpha);
        }
        result.red = color.red;
        result.green = color.green;
        result.blue = color.blue;
        result.alpha = color.alpha;
        return result;
    }
    ;
    /**
     * Returns true if the first Color equals the second color.
     *
     * @param {Color} left The first Color to compare for equality.
     * @param {Color} right The second Color to compare for equality.
     * @returns {Boolean} <code>true</code> if the Colors are equal; otherwise, <code>false</code>.
     */
    static equals(left, right) {
        return (left === right || //
            (defined(left) && //
                defined(right) && //
                left.red === right.red && //
                left.green === right.green && //
                left.blue === right.blue && //
                left.alpha === right.alpha));
    }
    ;
    /**
     * @private
     */
    static equalsArray(color, array, offset) {
        return (color.red === array[offset] &&
            color.green === array[offset + 1] &&
            color.blue === array[offset + 2] &&
            color.alpha === array[offset + 3]);
    }
    ;
    /**
     * Computes the componentwise sum of two Colors.
     *
     * @param {Color} left The first Color.
     * @param {Color} right The second Color.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static add(left, right, result) {
        result.red = left.red + right.red;
        result.green = left.green + right.green;
        result.blue = left.blue + right.blue;
        result.alpha = left.alpha + right.alpha;
        return result;
    }
    ;
    /**
     * Computes the componentwise difference of two Colors.
     *
     * @param {Color} left The first Color.
     * @param {Color} right The second Color.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static subtract(left, right, result) {
        result.red = left.red - right.red;
        result.green = left.green - right.green;
        result.blue = left.blue - right.blue;
        result.alpha = left.alpha - right.alpha;
        return result;
    }
    ;
    /**
     * Computes the componentwise product of two Colors.
     *
     * @param {Color} left The first Color.
     * @param {Color} right The second Color.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static multiply(left, right, result) {
        result.red = left.red * right.red;
        result.green = left.green * right.green;
        result.blue = left.blue * right.blue;
        result.alpha = left.alpha * right.alpha;
        return result;
    }
    ;
    /**
     * Computes the componentwise quotient of two Colors.
     *
     * @param {Color} left The first Color.
     * @param {Color} right The second Color.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static divide(left, right, result) {
        result.red = left.red / right.red;
        result.green = left.green / right.green;
        result.blue = left.blue / right.blue;
        result.alpha = left.alpha / right.alpha;
        return result;
    }
    ;
    /**
     * Computes the componentwise modulus of two Colors.
     *
     * @param {Color} left The first Color.
     * @param {Color} right The second Color.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static mod(left, right, result) {
        result.red = left.red % right.red;
        result.green = left.green % right.green;
        result.blue = left.blue % right.blue;
        result.alpha = left.alpha % right.alpha;
        return result;
    }
    ;
    /**
     * Computes the linear interpolation or extrapolation at t between the provided colors.
     *
     * @param {Color} start The color corresponding to t at 0.0.
     * @param {Color} end The color corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static lerp(start, end, t, result) {
        result.red = GMath.lerp(start.red, end.red, t);
        result.green = GMath.lerp(start.green, end.green, t);
        result.blue = GMath.lerp(start.blue, end.blue, t);
        result.alpha = GMath.lerp(start.alpha, end.alpha, t);
        return result;
    }
    ;
    /**
     * Multiplies the provided Color componentwise by the provided scalar.
     *
     * @param {Color} color The Color to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static multiplyByScalar(color, scalar, result) {
        result.red = color.red * scalar;
        result.green = color.green * scalar;
        result.blue = color.blue * scalar;
        result.alpha = color.alpha * scalar;
        return result;
    }
    ;
    /**
     * Divides the provided Color componentwise by the provided scalar.
     *
     * @param {Color} color The Color to be divided.
     * @param {Number} scalar The scalar to divide with.
     * @param {Color} result The object onto which to store the result.
     * @returns {Color} The modified result parameter.
     */
    static divideByScalar(color, scalar, result) {
        result.red = color.red / scalar;
        result.green = color.green / scalar;
        result.blue = color.blue / scalar;
        result.alpha = color.alpha / scalar;
        return result;
    }
    ;
}
/**
* The number of elements used to pack the object into an array.
* @type {Number}
*/
Color.packedLength = 4;

/**
 * A 2D Cartesian point.
 * @alias Vector2
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 *
 * @see Cartesian3
 * @see Cartesian4
 * @see Packable
 */
class Vector2 {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    toArray() {
        return [this.x, this.y];
    }
    /**
   * Duplicates this Vector2 instance.
   *
   * @param {Vector2} [result] The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new Vector2 instance if one was not provided.
   */
    clone(result) {
        return Vector2.clone(this, result);
    }
    ;
    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Vector2} [right] The right hand side Cartesian.
     * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Vector2.equals(this, right);
    }
    ;
    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they pass an absolute or relative tolerance test,
     * <code>false</code> otherwise.
     *
     * @param {Vector2} [right] The right hand side Cartesian.
     * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
     * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, relativeEpsilon, absoluteEpsilon) {
        return Vector2.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon);
    }
    ;
    /**
     * Creates a string representing this Cartesian in the format '(x, y)'.
     *
     * @returns {String} A string representing the provided Cartesian in the format '(x, y)'.
     */
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    ;
    fromBufferAttribute(attribute, index) {
        this.x = attribute.getX(index);
        this.y = attribute.getY(index);
        return this;
    }
    applyMatrix3(matrix3) {
        const x = this.x, y = this.y;
        this.x = matrix3[0] * x + matrix3[3] * y + matrix3[6];
        this.y = matrix3[1] * x + matrix3[4] * y + matrix3[7];
        return this;
    }
    /**
   * Creates a Vector2 instance from x and y coordinates.
   *
   * @param {Number} x The x coordinate.
   * @param {Number} y The y coordinate.
   * @param {Vector2} [result] The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new Vector2 instance if one was not provided.
   */
    static fromElements(x, y, result) {
        if (!defined(result)) {
            return new Vector2(x, y);
        }
        result.x = x;
        result.y = y;
        return result;
    }
    ;
    /**
     * Duplicates a Vector2 instance.
     *
     * @param {Vector2} cartesian The Cartesian to duplicate.
     * @param {Vector2} [result] The object onto which to store the result.
     * @returns {Vector2} The modified result parameter or a new Vector2 instance if one was not provided. (Returns undefined if cartesian is undefined)
     */
    static clone(cartesian, result) {
        if (!defined(cartesian)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Vector2(cartesian.x, cartesian.y);
        }
        result.x = cartesian.x;
        result.y = cartesian.y;
        return result;
    }
    ;
    /**
     * Computes the value of the maximum component for the supplied Cartesian.
     *
     * @param {Vector2} cartesian The cartesian to use.
     * @returns {Number} The value of the maximum component.
     */
    static maximumComponent(cartesian) {
        return Math.max(cartesian.x, cartesian.y);
    }
    ;
    /**
     * Computes the value of the minimum component for the supplied Cartesian.
     *
     * @param {Vector2} cartesian The cartesian to use.
     * @returns {Number} The value of the minimum component.
     */
    static minimumComponent(cartesian) {
        return Math.min(cartesian.x, cartesian.y);
    }
    ;
    /**
     * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
     *
     * @param {Vector2} first A cartesian to compare.
     * @param {Vector2} second A cartesian to compare.
     * @param {Vector2} result The object into which to store the result.
     * @returns {Vector2} A cartesian with the minimum components.
     */
    static minimumByComponent(first, second, result) {
        result.x = Math.min(first.x, second.x);
        result.y = Math.min(first.y, second.y);
        return result;
    }
    ;
    /**
     * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
     *
     * @param {Vector2} first A cartesian to compare.
     * @param {Vector2} second A cartesian to compare.
     * @param {Vector2} result The object into which to store the result.
     * @returns {Vector2} A cartesian with the maximum components.
     */
    static maximumByComponent(first, second, result) {
        result.x = Math.max(first.x, second.x);
        result.y = Math.max(first.y, second.y);
        return result;
    }
    ;
    /**
     * Constrain a value to lie between two values.
     *
     * @param {Vector2} value The value to clamp.
     * @param {Vector2} min The minimum bound.
     * @param {Vector2} max The maximum bound.
     * @param {Vector2} result The object into which to store the result.
     * @returns {Vector2} The clamped value such that min <= result <= max.
     */
    static clamp(value, min, max, result) {
        const x = GMath.clamp(value.x, min.x, max.x);
        const y = GMath.clamp(value.y, min.y, max.y);
        result.x = x;
        result.y = y;
        return result;
    }
    ;
    /**
     * Computes the provided Cartesian's squared magnitude.
     *
     * @param {Vector2} cartesian The Cartesian instance whose squared magnitude is to be computed.
     * @returns {Number} The squared magnitude.
     */
    static magnitudeSquared(cartesian) {
        return cartesian.x * cartesian.x + cartesian.y * cartesian.y;
    }
    ;
    /**
     * Computes the Cartesian's magnitude (length).
     *
     * @param {Vector2} cartesian The Cartesian instance whose magnitude is to be computed.
     * @returns {Number} The magnitude.
     */
    static magnitude(cartesian) {
        return Math.sqrt(Vector2.magnitudeSquared(cartesian));
    }
    ;
    /**
     * Computes the distance between two points.
     *
     * @param {Vector2} left The first point to compute the distance from.
     * @param {Vector2} right The second point to compute the distance to.
     * @returns {Number} The distance between two points.
     *
     * @example
     * // Returns 1.0
     * const d = Cesium.Vector2.distance(new Cesium.Vector2(1.0, 0.0), new Cesium.Vector2(2.0, 0.0));
     */
    static distance(left, right) {
        Vector2.subtract(left, right, distanceScratch$2);
        return Vector2.magnitude(distanceScratch$2);
    }
    ;
    /**
     * Computes the squared distance between two points.  Comparing squared distances
     * using this function is more efficient than comparing distances using {@link Vector2#distance}.
     *
     * @param {Vector2} left The first point to compute the distance from.
     * @param {Vector2} right The second point to compute the distance to.
     * @returns {Number} The distance between two points.
     *
     * @example
     * // Returns 4.0, not 2.0
     * const d = Cesium.Vector2.distance(new Cesium.Vector2(1.0, 0.0), new Cesium.Vector2(3.0, 0.0));
     */
    static distanceSquared(left, right) {
        Vector2.subtract(left, right, distanceScratch$2);
        return Vector2.magnitudeSquared(distanceScratch$2);
    }
    ;
    /**
     * Computes the normalized form of the supplied Cartesian.
     *
     * @param {Vector2} cartesian The Cartesian to be normalized.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static normalize(cartesian, result) {
        const magnitude = Vector2.magnitude(cartesian);
        result.x = cartesian.x / magnitude;
        result.y = cartesian.y / magnitude;
        //>>includeStart('debug', pragmas.debug);
        if (isNaN(result.x) || isNaN(result.y)) {
            throw new Error("normalized result is not a number");
        }
        //>>includeEnd('debug');
        return result;
    }
    ;
    /**
     * Computes the dot (scalar) product of two Cartesians.
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @returns {Number} The dot product.
     */
    static dot(left, right) {
        return left.x * right.x + left.y * right.y;
    }
    ;
    /**
     * Computes the magnitude of the cross product that would result from implicitly setting the Z coordinate of the input vectors to 0
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @returns {Number} The cross product.
     */
    static cross(left, right) {
        return left.x * right.y - left.y * right.x;
    }
    ;
    /**
     * Computes the componentwise product of two Cartesians.
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static multiplyComponents(left, right, result) {
        result.x = left.x * right.x;
        result.y = left.y * right.y;
        return result;
    }
    ;
    /**
     * Computes the componentwise quotient of two Cartesians.
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static divideComponents(left, right, result) {
        result.x = left.x / right.x;
        result.y = left.y / right.y;
        return result;
    }
    ;
    /**
     * Computes the componentwise sum of two Cartesians.
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static add(left, right, result) {
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        return result;
    }
    ;
    /**
     * Computes the componentwise difference of two Cartesians.
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static subtract(left, right, result) {
        result.x = left.x - right.x;
        result.y = left.y - right.y;
        return result;
    }
    ;
    /**
     * Multiplies the provided Cartesian componentwise by the provided scalar.
     *
     * @param {Vector2} cartesian The Cartesian to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static multiplyByScalar(cartesian, scalar, result) {
        result.x = cartesian.x * scalar;
        result.y = cartesian.y * scalar;
        return result;
    }
    ;
    /**
     * Divides the provided Cartesian componentwise by the provided scalar.
     *
     * @param {Vector2} cartesian The Cartesian to be divided.
     * @param {Number} scalar The scalar to divide by.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static divideByScalar(cartesian, scalar, result) {
        result.x = cartesian.x / scalar;
        result.y = cartesian.y / scalar;
        return result;
    }
    ;
    /**
     * Negates the provided Cartesian.
     *
     * @param {Vector2} cartesian The Cartesian to be negated.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static negate(cartesian, result) {
        result.x = -cartesian.x;
        result.y = -cartesian.y;
        return result;
    }
    ;
    /**
     * Computes the absolute value of the provided Cartesian.
     *
     * @param {Vector2} cartesian The Cartesian whose absolute value is to be computed.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static abs(cartesian, result) {
        result.x = Math.abs(cartesian.x);
        result.y = Math.abs(cartesian.y);
        return result;
    }
    ;
    /**
     * Computes the linear interpolation or extrapolation at t using the provided cartesians.
     *
     * @param {Vector2} start The value corresponding to t at 0.0.
     * @param {Vector2} end The value corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static lerp(start, end, t, result) {
        Vector2.multiplyByScalar(end, t, lerpScratch$3);
        result = Vector2.multiplyByScalar(start, 1.0 - t, result);
        return Vector2.add(lerpScratch$3, result, result);
    }
    ;
    /**
     * Returns the angle, in radians, between the provided Cartesians.
     *
     * @param {Vector2} left The first Cartesian.
     * @param {Vector2} right The second Cartesian.
     * @returns {Number} The angle between the Cartesians.
     */
    static angleBetween(left, right) {
        Vector2.normalize(left, angleBetweenScratch$1);
        Vector2.normalize(right, angleBetweenScratch2$1);
        return GMath.acosClamped(Vector2.dot(angleBetweenScratch$1, angleBetweenScratch2$1));
    }
    ;
    /**
     * Returns the axis that is most orthogonal to the provided Cartesian.
     *
     * @param {Vector2} cartesian The Cartesian on which to find the most orthogonal axis.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The most orthogonal axis.
     */
    static mostOrthogonalAxis(cartesian, result) {
        const f = Vector2.normalize(cartesian, mostOrthogonalAxisScratch$2);
        Vector2.abs(f, f);
        if (f.x <= f.y) {
            result = Vector2.clone(Vector2.UNIT_X, result);
        }
        else {
            result = Vector2.clone(Vector2.UNIT_Y, result);
        }
        return result;
    }
    ;
    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Vector2} [left] The first Cartesian.
     * @param {Vector2} [right] The second Cartesian.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                left.x === right.x &&
                left.y === right.y));
    }
    ;
    /**
     * @private
     */
    static equalsArray(cartesian, array, offset) {
        return cartesian.x === array[offset] && cartesian.y === array[offset + 1];
    }
    ;
    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they pass an absolute or relative tolerance test,
     * <code>false</code> otherwise.
     *
     * @param {Vector2} [left] The first Cartesian.
     * @param {Vector2} [right] The second Cartesian.
     * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    static equalsEpsilon(left, right, relativeEpsilon, absoluteEpsilon) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                GMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
                GMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon)));
    }
    ;
}
/**
* An immutable Vector2 instance initialized to (0.0, 0.0).
*
* @type {Vector2}
* @constant
*/
Vector2.ZERO = Object.freeze(new Vector2(0.0, 0.0));
/**
 * An immutable Vector2 instance initialized to (1.0, 1.0).
 *
 * @type {Vector2}
 * @constant
 */
Vector2.ONE = Object.freeze(new Vector2(1.0, 1.0));
/**
 * An immutable Vector2 instance initialized to (1.0, 0.0).
 *
 * @type {Vector2}
 * @constant
 */
Vector2.UNIT_X = Object.freeze(new Vector2(1.0, 0.0));
/**
 * An immutable Vector2 instance initialized to (0.0, 1.0).
 *
 * @type {Vector2}
 * @constant
 */
Vector2.UNIT_Y = Object.freeze(new Vector2(0.0, 1.0));
/**
* The number of elements used to pack the object into an array.
* @type {Number}
*/
Vector2.packedLength = 2;
const distanceScratch$2 = new Vector2();
const lerpScratch$3 = new Vector2();
const angleBetweenScratch$1 = new Vector2();
const angleBetweenScratch2$1 = new Vector2();
const mostOrthogonalAxisScratch$2 = new Vector2();

/**
 * A 2x2 matrix, indexable as a column-major order array.
 * Constructor parameters are in row-major order for code readability.
 * @alias Matrix2
 * @constructor
 * @implements {ArrayLike<number>}
 *
 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
 *
 * @see Matrix2.fromArray
 * @see Matrix2.fromColumnMajorArray
 * @see Matrix2.fromRowMajorArray
 * @see Matrix2.fromScale
 * @see Matrix2.fromUniformScale
 * @see Matrix2.fromRotation
 * @see Matrix3
 * @see Matrix4
 */
class Matrix2 {
    constructor(column0Row0 = 0, column1Row0 = 0, column0Row1 = 0, column1Row1 = 0) {
        this[0] = column0Row0;
        this[1] = column0Row1;
        this[2] = column1Row0;
        this[3] = column1Row1;
    }
    /**
     * Duplicates a Matrix2 instance.
     *
     * @param {Matrix2} matrix The matrix to duplicate.
     * @param {Matrix2} [result] The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided. (Returns undefined if matrix is undefined)
     */
    static clone(matrix, result) {
        if (!defined(matrix)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Matrix2(matrix[0], matrix[2], matrix[1], matrix[3]);
        }
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        return result;
    }
    ;
    /**
     * Creates a Matrix2 instance from a column-major order array.
     *
     * @param {Number[]} values The column-major order array.
     * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
     */
    static fromColumnMajorArray(values, result) {
        return Matrix2.clone(values, result);
    }
    ;
    /**
     * Creates a Matrix2 instance from a row-major order array.
     * The resulting matrix will be in column-major order.
     *
     * @param {Number[]} values The row-major order array.
     * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
     */
    static fromRowMajorArray(values, result) {
        if (!defined(result)) {
            return new Matrix2(values[0], values[1], values[2], values[3]);
        }
        result[0] = values[0];
        result[1] = values[2];
        result[2] = values[1];
        result[3] = values[3];
        return result;
    }
    ;
    /**
     * Computes a Matrix2 instance representing a non-uniform scale.
     *
     * @param {Vector2} scale The x and y scale factors.
     * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [7.0, 0.0]
     * //   [0.0, 8.0]
     * const m = Cesium.Matrix2.fromScale(new Cesium.Vector2(7.0, 8.0));
     */
    static fromScale(scale, result) {
        if (!defined(result)) {
            return new Matrix2(scale.x, 0.0, 0.0, scale.y);
        }
        result[0] = scale.x;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = scale.y;
        return result;
    }
    ;
    /**
     * Computes a Matrix2 instance representing a uniform scale.
     *
     * @param {Number} scale The uniform scale factor.
     * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [2.0, 0.0]
     * //   [0.0, 2.0]
     * const m = Cesium.Matrix2.fromUniformScale(2.0);
     */
    static fromUniformScale(scale, result) {
        if (!defined(result)) {
            return new Matrix2(scale, 0.0, 0.0, scale);
        }
        result[0] = scale;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = scale;
        return result;
    }
    ;
    /**
     * Creates a rotation matrix.
     *
     * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
     * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
     *
     * @example
     * // Rotate a point 45 degrees counterclockwise.
     * const p = new Cesium.Vector2(5, 6);
     * const m = Cesium.Matrix2.fromRotation(Cesium.Math.toRadians(45.0));
     * const rotated = Cesium.Matrix2.multiplyByVector(m, p, new Cesium.Vector2());
     */
    static fromRotation(angle, result) {
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        if (!defined(result)) {
            return new Matrix2(cosAngle, -sinAngle, sinAngle, cosAngle);
        }
        result[0] = cosAngle;
        result[1] = sinAngle;
        result[2] = -sinAngle;
        result[3] = cosAngle;
        return result;
    }
    ;
    toArray() {
        const result = [];
        Matrix2.toArray(this, result);
        return result;
    }
    /**
     * Creates an Array from the provided Matrix2 instance.
     * The array will be in column-major order.
     *
     * @param {Matrix2} matrix The matrix to use..
     * @param {Number[]} [result] The Array onto which to store the result.
     * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
     */
    static toArray(matrix, result) {
        if (!defined(result)) {
            return [matrix[0], matrix[1], matrix[2], matrix[3]];
        }
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        return result;
    }
    ;
    /**
     * Computes the array index of the element at the provided row and column.
     *
     * @param {Number} row The zero-based index of the row.
     * @param {Number} column The zero-based index of the column.
     * @returns {Number} The index of the element at the provided row and column.
     *
     * @exception {Error} row must be 0 or 1.
     * @exception {Error} column must be 0 or 1.
     *
     * @example
     * const myMatrix = new Cesium.Matrix2();
     * const column1Row0Index = Cesium.Matrix2.getElementIndex(1, 0);
     * const column1Row0 = myMatrix[column1Row0Index]
     * myMatrix[column1Row0Index] = 10.0;
     */
    static getElementIndex(column, row) {
        return column * 2 + row;
    }
    ;
    /**
     * Retrieves a copy of the matrix column at the provided index as a Vector2 instance.
     *
     * @param {Matrix2} matrix The matrix to use.
     * @param {Number} index The zero-based index of the column to retrieve.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     *
     * @exception {Error} index must be 0 or 1.
     */
    static getColumn(matrix, index, result) {
        const startIndex = index * 2;
        const x = matrix[startIndex];
        const y = matrix[startIndex + 1];
        result.x = x;
        result.y = y;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the specified column in the provided matrix with the provided Vector2 instance.
     *
     * @param {Matrix2} matrix The matrix to use.
     * @param {Number} index The zero-based index of the column to set.
     * @param {Vector2} cartesian The Cartesian whose values will be assigned to the specified column.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     * @exception {Error} index must be 0 or 1.
     */
    static setColumn(matrix, index, cartesian, result) {
        result = Matrix2.clone(matrix, result);
        const startIndex = index * 2;
        result[startIndex] = cartesian.x;
        result[startIndex + 1] = cartesian.y;
        return result;
    }
    ;
    /**
     * Retrieves a copy of the matrix row at the provided index as a Vector2 instance.
     *
     * @param {Matrix2} matrix The matrix to use.
     * @param {Number} index The zero-based index of the row to retrieve.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     *
     * @exception {Error} index must be 0 or 1.
     */
    static getRow(matrix, index, result) {
        const x = matrix[index];
        const y = matrix[index + 2];
        result.x = x;
        result.y = y;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the specified row in the provided matrix with the provided Vector2 instance.
     *
     * @param {Matrix2} matrix The matrix to use.
     * @param {Number} index The zero-based index of the row to set.
     * @param {Vector2} cartesian The Cartesian whose values will be assigned to the specified row.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     * @exception {Error} index must be 0 or 1.
     */
    static setRow(matrix, index, cartesian, result) {
        result = Matrix2.clone(matrix, result);
        result[index] = cartesian.x;
        result[index + 2] = cartesian.y;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the scale with the provided scale.
     * This assumes the matrix is an affine transformation.
     *
     * @param {Matrix2} matrix The matrix to use.
     * @param {Vector2} scale The scale that replaces the scale of the provided matrix.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     * @see Matrix2.setUniformScale
     * @see Matrix2.fromScale
     * @see Matrix2.fromUniformScale
     * @see Matrix2.multiplyByScale
     * @see Matrix2.multiplyByUniformScale
     * @see Matrix2.getScale
     */
    static setScale(matrix, scale, result) {
        const existingScale = Matrix2.getScale(matrix, scaleScratch1$2);
        const scaleRatioX = scale.x / existingScale.x;
        const scaleRatioY = scale.y / existingScale.y;
        result[0] = matrix[0] * scaleRatioX;
        result[1] = matrix[1] * scaleRatioX;
        result[2] = matrix[2] * scaleRatioY;
        result[3] = matrix[3] * scaleRatioY;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the scale with the provided uniform scale.
     * This assumes the matrix is an affine transformation.
     *
     * @param {Matrix2} matrix The matrix to use.
     * @param {Number} scale The uniform scale that replaces the scale of the provided matrix.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     * @see Matrix2.setScale
     * @see Matrix2.fromScale
     * @see Matrix2.fromUniformScale
     * @see Matrix2.multiplyByScale
     * @see Matrix2.multiplyByUniformScale
     * @see Matrix2.getScale
     */
    static setUniformScale(matrix, scale, result) {
        const existingScale = Matrix2.getScale(matrix, scaleScratch2$2);
        const scaleRatioX = scale / existingScale.x;
        const scaleRatioY = scale / existingScale.y;
        result[0] = matrix[0] * scaleRatioX;
        result[1] = matrix[1] * scaleRatioX;
        result[2] = matrix[2] * scaleRatioY;
        result[3] = matrix[3] * scaleRatioY;
        return result;
    }
    ;
    /**
     * Extracts the non-uniform scale assuming the matrix is an affine transformation.
     *
     * @param {Matrix2} matrix The matrix.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     *
     * @see Matrix2.multiplyByScale
     * @see Matrix2.multiplyByUniformScale
     * @see Matrix2.fromScale
     * @see Matrix2.fromUniformScale
     * @see Matrix2.setScale
     * @see Matrix2.setUniformScale
     */
    static getScale(matrix, result) {
        result.x = Vector2.magnitude(Vector2.fromElements(matrix[0], matrix[1], scratchColumn$2));
        result.y = Vector2.magnitude(Vector2.fromElements(matrix[2], matrix[3], scratchColumn$2));
        return result;
    }
    ;
    /**
     * Computes the maximum scale assuming the matrix is an affine transformation.
     * The maximum scale is the maximum length of the column vectors.
     *
     * @param {Matrix2} matrix The matrix.
     * @returns {Number} The maximum scale.
     */
    static getMaximumScale(matrix) {
        Matrix2.getScale(matrix, scaleScratch3$2);
        return Vector2.maximumComponent(scaleScratch3$2);
    }
    ;
    /**
     * Sets the rotation assuming the matrix is an affine transformation.
     *
     * @param {Matrix2} matrix The matrix.
     * @param {Matrix2} rotation The rotation matrix.
     * @returns {Matrix2} The modified result parameter.
     *
     * @see Matrix2.fromRotation
     * @see Matrix2.getRotation
     */
    static setRotation(matrix, rotation, result) {
        const scale = Matrix2.getScale(matrix, scaleScratch4$2);
        result[0] = rotation[0] * scale.x;
        result[1] = rotation[1] * scale.x;
        result[2] = rotation[2] * scale.y;
        result[3] = rotation[3] * scale.y;
        return result;
    }
    ;
    /**
     * Extracts the rotation matrix assuming the matrix is an affine transformation.
     *
     * @param {Matrix2} matrix The matrix.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     * @see Matrix2.setRotation
     * @see Matrix2.fromRotation
     */
    static getRotation(matrix, result) {
        const scale = Matrix2.getScale(matrix, scaleScratch5$2);
        result[0] = matrix[0] / scale.x;
        result[1] = matrix[1] / scale.x;
        result[2] = matrix[2] / scale.y;
        result[3] = matrix[3] / scale.y;
        return result;
    }
    ;
    /**
     * Computes the product of two matrices.
     *
     * @param {Matrix2} left The first matrix.
     * @param {Matrix2} right The second matrix.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static multiply(left, right, result) {
        const column0Row0 = left[0] * right[0] + left[2] * right[1];
        const column1Row0 = left[0] * right[2] + left[2] * right[3];
        const column0Row1 = left[1] * right[0] + left[3] * right[1];
        const column1Row1 = left[1] * right[2] + left[3] * right[3];
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column1Row0;
        result[3] = column1Row1;
        return result;
    }
    ;
    /**
     * Computes the sum of two matrices.
     *
     * @param {Matrix2} left The first matrix.
     * @param {Matrix2} right The second matrix.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static add(left, right, result) {
        result[0] = left[0] + right[0];
        result[1] = left[1] + right[1];
        result[2] = left[2] + right[2];
        result[3] = left[3] + right[3];
        return result;
    }
    ;
    /**
     * Computes the difference of two matrices.
     *
     * @param {Matrix2} left The first matrix.
     * @param {Matrix2} right The second matrix.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static subtract(left, right, result) {
        result[0] = left[0] - right[0];
        result[1] = left[1] - right[1];
        result[2] = left[2] - right[2];
        result[3] = left[3] - right[3];
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a column vector.
     *
     * @param {Matrix2} matrix The matrix.
     * @param {Vector2} cartesian The column.
     * @param {Vector2} result The object onto which to store the result.
     * @returns {Vector2} The modified result parameter.
     */
    static multiplyByVector(matrix, cartesian, result) {
        const x = matrix[0] * cartesian.x + matrix[2] * cartesian.y;
        const y = matrix[1] * cartesian.x + matrix[3] * cartesian.y;
        result.x = x;
        result.y = y;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a scalar.
     *
     * @param {Matrix2} matrix The matrix.
     * @param {Number} scalar The number to multiply by.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static multiplyByScalar(matrix, scalar, result) {
        result[0] = matrix[0] * scalar;
        result[1] = matrix[1] * scalar;
        result[2] = matrix[2] * scalar;
        result[3] = matrix[3] * scalar;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix times a (non-uniform) scale, as if the scale were a scale matrix.
     *
     * @param {Matrix2} matrix The matrix on the left-hand side.
     * @param {Number} scale The non-uniform scale on the right-hand side.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     *
     * @example
     * // Instead of Cesium.Matrix2.multiply(m, Cesium.Matrix2.fromScale(scale), m);
     * Cesium.Matrix2.multiplyByScale(m, scale, m);
     *
     * @see Matrix2.multiplyByUniformScale
     * @see Matrix2.fromScale
     * @see Matrix2.fromUniformScale
     * @see Matrix2.setScale
     * @see Matrix2.setUniformScale
     * @see Matrix2.getScale
     */
    static multiplyByScale(matrix, scale, result) {
        result[0] = matrix[0] * scale.x;
        result[1] = matrix[1] * scale.x;
        result[2] = matrix[2] * scale.y;
        result[3] = matrix[3] * scale.y;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix times a uniform scale, as if the scale were a scale matrix.
     *
     * @param {Matrix2} matrix The matrix on the left-hand side.
     * @param {Number} scale The uniform scale on the right-hand side.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     *
     * @example
     * // Instead of Cesium.Matrix2.multiply(m, Cesium.Matrix2.fromUniformScale(scale), m);
     * Cesium.Matrix2.multiplyByUniformScale(m, scale, m);
     *
     * @see Matrix2.multiplyByScale
     * @see Matrix2.fromScale
     * @see Matrix2.fromUniformScale
     * @see Matrix2.setScale
     * @see Matrix2.setUniformScale
     * @see Matrix2.getScale
     */
    static multiplyByUniformScale(matrix, scale, result) {
        result[0] = matrix[0] * scale;
        result[1] = matrix[1] * scale;
        result[2] = matrix[2] * scale;
        result[3] = matrix[3] * scale;
        return result;
    }
    ;
    /**
     * Creates a negated copy of the provided matrix.
     *
     * @param {Matrix2} matrix The matrix to negate.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static negate(matrix, result) {
        result[0] = -matrix[0];
        result[1] = -matrix[1];
        result[2] = -matrix[2];
        result[3] = -matrix[3];
        return result;
    }
    ;
    /**
     * Computes the transpose of the provided matrix.
     *
     * @param {Matrix2} matrix The matrix to transpose.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static transpose(matrix, result) {
        const column0Row0 = matrix[0];
        const column0Row1 = matrix[2];
        const column1Row0 = matrix[1];
        const column1Row1 = matrix[3];
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column1Row0;
        result[3] = column1Row1;
        return result;
    }
    ;
    /**
     * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
     *
     * @param {Matrix2} matrix The matrix with signed elements.
     * @param {Matrix2} result The object onto which to store the result.
     * @returns {Matrix2} The modified result parameter.
     */
    static abs(matrix, result) {
        result[0] = Math.abs(matrix[0]);
        result[1] = Math.abs(matrix[1]);
        result[2] = Math.abs(matrix[2]);
        result[3] = Math.abs(matrix[3]);
        return result;
    }
    ;
    /**
     * Compares the provided matrices componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Matrix2} [left] The first matrix.
     * @param {Matrix2} [right] The second matrix.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                left[0] === right[0] &&
                left[1] === right[1] &&
                left[2] === right[2] &&
                left[3] === right[3]));
    }
    ;
    /**
     * @private
     */
    static equalsArray(matrix, array, offset) {
        return (matrix[0] === array[offset] &&
            matrix[1] === array[offset + 1] &&
            matrix[2] === array[offset + 2] &&
            matrix[3] === array[offset + 3]);
    }
    ;
    /**
     * Compares the provided matrices componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Matrix2} [left] The first matrix.
     * @param {Matrix2} [right] The second matrix.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    static equalsEpsilon(left, right, epsilon) {
        epsilon = defaultValue(epsilon, 0);
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                Math.abs(left[0] - right[0]) <= epsilon &&
                Math.abs(left[1] - right[1]) <= epsilon &&
                Math.abs(left[2] - right[2]) <= epsilon &&
                Math.abs(left[3] - right[3]) <= epsilon));
    }
    ;
    clone(result) {
        return Matrix2.clone(this, result);
    }
    ;
    /**
     * Compares this matrix to the provided matrix componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Matrix2} [right] The right hand side matrix.
     * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Matrix2.equals(this, right);
    }
    ;
    /**
     * Compares this matrix to the provided matrix componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Matrix2} [right] The right hand side matrix.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, epsilon) {
        return Matrix2.equalsEpsilon(this, right, epsilon);
    }
    ;
    /**
     * Creates a string representing this Matrix with each row being
     * on a separate line and in the format '(column0, column1)'.
     *
     * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1)'.
     */
    toString() {
        return `(${this[0]}, ${this[2]})\n` + `(${this[1]}, ${this[3]})`;
    }
    ;
}
/**
* The number of elements used to pack the object into an array.
* @type {Number}
*/
Matrix2.packedLength = 4;
/**
 * An immutable Matrix2 instance initialized to the identity matrix.
 *
 * @type {Matrix2}
 * @constant
 */
Matrix2.IDENTITY = Object.freeze(new Matrix2(1.0, 0.0, 0.0, 1.0));
/**
 * An immutable Matrix2 instance initialized to the zero matrix.
 *
 * @type {Matrix2}
 * @constant
 */
Matrix2.ZERO = Object.freeze(new Matrix2(0.0, 0.0, 0.0, 0.0));
const scaleScratch1$2 = new Vector2();
const scaleScratch2$2 = new Vector2();
const scaleScratch3$2 = new Vector2();
const scaleScratch4$2 = new Vector2();
const scratchColumn$2 = new Vector2();
const scaleScratch5$2 = new Vector2();

/**
 * A 3D Cartesian point.
 * @alias Vector3
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 * @param {Number} [z=0.0] The Z component.
 *
 * @see Cartesian2
 * @see Cartesian4
 * @see Packable
 */
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    sub(target) {
        throw new Error("Method not implemented.");
    }
    applyQuaternion(quat) {
        throw new Error("Method not implemented.");
    }
    setFromSpherical(spherical) {
        throw new Error("Method not implemented.");
    }
    distanceToSquared(position) {
        throw new Error("Method not implemented.");
    }
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    toArray() {
        return [this.x, this.y, this.z];
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    lerp(end, t) {
        Vector3.lerp(this, end, t, this);
        return this;
    }
    add(v) {
        Vector3.add(this, v, this);
        return this;
    }
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;
        return this;
    }
    subtract(v) {
        Vector3.subtract(this, v, this);
        return this;
    }
    multiplyByScalar(scale) {
        Vector3.multiplyByScalar(this, scale, this);
        return this;
    }
    /**
   * Duplicates this Vector3 instance.
   *
   * @param {Vector3} [result] The object onto which to store the result.
   * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
   */
    clone() {
        return Vector3.clone(this, new Vector3());
    }
    ;
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    applyMatrix4(matrix) {
        const x = this.x, y = this.y, z = this.z;
        const e = matrix;
        const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
        this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
        this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
        this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
        return this;
    }
    applyMatrix3(matrix) {
        let x = this.x, y = this.y, z = this.z;
        this.x = x * matrix[0] + y * matrix[3] + z * matrix[6];
        this.y = x * matrix[1] + y * matrix[4] + z * matrix[7];
        this.z = x * matrix[2] + y * matrix[5] + z * matrix[8];
        return this;
    }
    transformDirection(matrix) {
        const x = this.x, y = this.y, z = this.z;
        const e = matrix;
        this.x = e[0] * x + e[4] * y + e[8] * z;
        this.y = e[1] * x + e[5] * y + e[9] * z;
        this.z = e[2] * x + e[6] * y + e[10] * z;
        return this.normalize();
    }
    normalize() {
        Vector3.normalize(this, this);
        return this;
    }
    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Vector3} [right] The right hand side Cartesian.
     * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Vector3.equals(this, right);
    }
    ;
    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they pass an absolute or relative tolerance test,
     * <code>false</code> otherwise.
     *
     * @param {Vector3} [right] The right hand side Cartesian.
     * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
     * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, relativeEpsilon, absoluteEpsilon) {
        return Vector3.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon);
    }
    ;
    /**
     * Creates a string representing this Cartesian in the format '(x, y, z)'.
     *
     * @returns {String} A string representing this Cartesian in the format '(x, y, z)'.
     */
    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
    ;
    fromBufferAttribute(attribute, index) {
        this.x = attribute.getX(index);
        this.y = attribute.getY(index);
        this.z = attribute.getZ(index);
        return this;
    }
    static fromVector4(vec4, result) {
        result.x = vec4.x;
        result.y = vec4.y;
        result.z = vec4.z;
        return result;
    }
    /**
   * Converts the provided Spherical into Vector3 coordinates.
   *
   * @param {Spherical} spherical The Spherical to be converted to Vector3.
   * @param {Vector3} [result] The object onto which to store the result.
   * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
   */
    static fromSpherical(spherical, result) {
        if (!defined(result)) {
            result = new Vector3();
        }
        const clock = spherical.clock;
        const cone = spherical.cone;
        const magnitude = defaultValue(spherical.magnitude, 1.0);
        const radial = magnitude * Math.sin(cone);
        result.x = radial * Math.cos(clock);
        result.y = radial * Math.sin(clock);
        result.z = magnitude * Math.cos(cone);
        return result;
    }
    ;
    /**
     * Creates a Vector3 instance from x, y and z coordinates.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     * @param {Number} z The z coordinate.
     * @param {Vector3} [result] The object onto which to store the result.
     * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
     */
    static fromElements(x, y, z, result) {
        if (!defined(result)) {
            return new Vector3(x, y, z);
        }
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Duplicates a Vector3 instance.
     *
     * @param {Vector3} cartesian The Cartesian to duplicate.
     * @param {Vector3} [result] The object onto which to store the result.
     * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided. (Returns undefined if cartesian is undefined)
     */
    static clone(cartesian, result = new Vector3()) {
        if (!defined(cartesian)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Vector3(cartesian.x, cartesian.y, cartesian.z);
        }
        result.x = cartesian.x;
        result.y = cartesian.y;
        result.z = cartesian.z;
        return result;
    }
    ;
    /**
     * Computes the value of the maximum component for the supplied Cartesian.
     *
     * @param {Vector3} cartesian The cartesian to use.
     * @returns {Number} The value of the maximum component.
     */
    static maximumComponent(cartesian) {
        return Math.max(cartesian.x, cartesian.y, cartesian.z);
    }
    ;
    /**
     * Computes the value of the minimum component for the supplied Cartesian.
     *
     * @param {Vector3} cartesian The cartesian to use.
     * @returns {Number} The value of the minimum component.
     */
    static minimumComponent(cartesian) {
        return Math.min(cartesian.x, cartesian.y, cartesian.z);
    }
    ;
    /**
     * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
     *
     * @param {Vector3} first A cartesian to compare.
     * @param {Vector3} second A cartesian to compare.
     * @param {Vector3} result The object into which to store the result.
     * @returns {Vector3} A cartesian with the minimum components.
     */
    static minimumByComponent(first, second, result) {
        result.x = Math.min(first.x, second.x);
        result.y = Math.min(first.y, second.y);
        result.z = Math.min(first.z, second.z);
        return result;
    }
    ;
    /**
     * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
     *
     * @param {Vector3} first A cartesian to compare.
     * @param {Vector3} second A cartesian to compare.
     * @param {Vector3} result The object into which to store the result.
     * @returns {Vector3} A cartesian with the maximum components.
     */
    static maximumByComponent(first, second, result) {
        result.x = Math.max(first.x, second.x);
        result.y = Math.max(first.y, second.y);
        result.z = Math.max(first.z, second.z);
        return result;
    }
    ;
    /**
     * Constrain a value to lie between two values.
     *
     * @param {Vector3} cartesian The value to clamp.
     * @param {Vector3} min The minimum bound.
     * @param {Vector3} max The maximum bound.
     * @param {Vector3} result The object into which to store the result.
     * @returns {Vector3} The clamped value such that min <= value <= max.
     */
    static clamp(value, min, max, result) {
        const x = GMath.clamp(value.x, min.x, max.x);
        const y = GMath.clamp(value.y, min.y, max.y);
        const z = GMath.clamp(value.z, min.z, max.z);
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Computes the provided Cartesian's squared magnitude.
     *
     * @param {Vector3} cartesian The Cartesian instance whose squared magnitude is to be computed.
     * @returns {Number} The squared magnitude.
     */
    static magnitudeSquared(cartesian) {
        return (cartesian.x * cartesian.x +
            cartesian.y * cartesian.y +
            cartesian.z * cartesian.z);
    }
    ;
    /**
     * Computes the Cartesian's magnitude (length).
     *
     * @param {Vector3} cartesian The Cartesian instance whose magnitude is to be computed.
     * @returns {Number} The magnitude.
     */
    static magnitude(cartesian) {
        return Math.sqrt(Vector3.magnitudeSquared(cartesian));
    }
    ;
    /**
     * Computes the distance between two points.
     *
     * @param {Vector3} left The first point to compute the distance from.
     * @param {Vector3} right The second point to compute the distance to.
     * @returns {Number} The distance between two points.
     *
     * @example
     * // Returns 1.0
     * const d = Cesium.Vector3.distance(new Cesium.Vector3(1.0, 0.0, 0.0), new Cesium.Vector3(2.0, 0.0, 0.0));
     */
    static distance(left, right) {
        Vector3.subtract(left, right, distanceScratch$1);
        return Vector3.magnitude(distanceScratch$1);
    }
    ;
    /**
     * Computes the squared distance between two points.  Comparing squared distances
     * using this function is more efficient than comparing distances using {@link Vector3#distance}.
     *
     * @param {Vector3} left The first point to compute the distance from.
     * @param {Vector3} right The second point to compute the distance to.
     * @returns {Number} The distance between two points.
     *
     * @example
     * // Returns 4.0, not 2.0
     * const d = Cesium.Vector3.distanceSquared(new Cesium.Vector3(1.0, 0.0, 0.0), new Cesium.Vector3(3.0, 0.0, 0.0));
     */
    static distanceSquared(left, right) {
        Vector3.subtract(left, right, distanceScratch$1);
        return Vector3.magnitudeSquared(distanceScratch$1);
    }
    ;
    /**
     * Computes the normalized form of the supplied Cartesian.
     *
     * @param {Vector3} cartesian The Cartesian to be normalized.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static normalize(cartesian, result) {
        const magnitude = Vector3.magnitude(cartesian);
        result.x = cartesian.x / magnitude;
        result.y = cartesian.y / magnitude;
        result.z = cartesian.z / magnitude;
        if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z)) {
            throw new Error("normalized result is not a number");
        }
        return result;
    }
    ;
    /**
     * Computes the dot (scalar) product of two Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @returns {Number} The dot product.
     */
    static dot(left, right) {
        return left.x * right.x + left.y * right.y + left.z * right.z;
    }
    ;
    /**
     * Computes the componentwise product of two Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static multiplyComponents(left, right, result) {
        result.x = left.x * right.x;
        result.y = left.y * right.y;
        result.z = left.z * right.z;
        return result;
    }
    ;
    /**
     * Computes the componentwise quotient of two Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static divideComponents(left, right, result) {
        result.x = left.x / right.x;
        result.y = left.y / right.y;
        result.z = left.z / right.z;
        return result;
    }
    ;
    /**
     * Computes the componentwise sum of two Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static add(left, right, result) {
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        result.z = left.z + right.z;
        return result;
    }
    ;
    /**
     * Computes the componentwise difference of two Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static subtract(left, right, result) {
        result.x = left.x - right.x;
        result.y = left.y - right.y;
        result.z = left.z - right.z;
        return result;
    }
    ;
    /**
     * Multiplies the provided Cartesian componentwise by the provided scalar.
     *
     * @param {Vector3} cartesian The Cartesian to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static multiplyByScalar(cartesian, scalar, result) {
        result.x = cartesian.x * scalar;
        result.y = cartesian.y * scalar;
        result.z = cartesian.z * scalar;
        return result;
    }
    ;
    /**
     * Divides the provided Cartesian componentwise by the provided scalar.
     *
     * @param {Vector3} cartesian The Cartesian to be divided.
     * @param {Number} scalar The scalar to divide by.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static divideByScalar(cartesian, scalar, result) {
        result.x = cartesian.x / scalar;
        result.y = cartesian.y / scalar;
        result.z = cartesian.z / scalar;
        return result;
    }
    ;
    /**
     * Negates the provided Cartesian.
     *
     * @param {Vector3} cartesian The Cartesian to be negated.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static negate(cartesian, result) {
        result.x = -cartesian.x;
        result.y = -cartesian.y;
        result.z = -cartesian.z;
        return result;
    }
    ;
    /**
     * Computes the absolute value of the provided Cartesian.
     *
     * @param {Vector3} cartesian The Cartesian whose absolute value is to be computed.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static abs(cartesian, result) {
        result.x = Math.abs(cartesian.x);
        result.y = Math.abs(cartesian.y);
        result.z = Math.abs(cartesian.z);
        return result;
    }
    ;
    /**
     * Computes the linear interpolation or extrapolation at t using the provided cartesians.
     *
     * @param {Vector3} start The value corresponding to t at 0.0.
     * @param {Vector3} end The value corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static lerp(start, end, t, result) {
        Vector3.multiplyByScalar(end, t, lerpScratch$2);
        result = Vector3.multiplyByScalar(start, 1.0 - t, result);
        return Vector3.add(lerpScratch$2, result, result);
    }
    ;
    /**
     * Returns the angle, in radians, between the provided Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @returns {Number} The angle between the Cartesians.
     */
    static angleBetween(left, right) {
        Vector3.normalize(left, angleBetweenScratch);
        Vector3.normalize(right, angleBetweenScratch2);
        const cosine = Vector3.dot(angleBetweenScratch, angleBetweenScratch2);
        const sine = Vector3.magnitude(Vector3.cross(angleBetweenScratch, angleBetweenScratch2, angleBetweenScratch));
        return Math.atan2(sine, cosine);
    }
    ;
    /**
     * Returns the axis that is most orthogonal to the provided Cartesian.
     *
     * @param {Vector3} cartesian The Cartesian on which to find the most orthogonal axis.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The most orthogonal axis.
     */
    static mostOrthogonalAxis(cartesian, result) {
        const f = Vector3.normalize(cartesian, mostOrthogonalAxisScratch$1);
        Vector3.abs(f, f);
        if (f.x <= f.y) {
            if (f.x <= f.z) {
                result = Vector3.clone(Vector3.UNIT_X, result);
            }
            else {
                result = Vector3.clone(Vector3.UNIT_Z, result);
            }
        }
        else if (f.y <= f.z) {
            result = Vector3.clone(Vector3.UNIT_Y, result);
        }
        else {
            result = Vector3.clone(Vector3.UNIT_Z, result);
        }
        return result;
    }
    ;
    /**
     * Projects vector a onto vector b
     * @param {Vector3} a The vector that needs projecting
     * @param {Vector3} b The vector to project onto
     * @param {Vector3} result The result cartesian
     * @returns {Vector3} The modified result parameter
     */
    static projectVector(a, b, result) {
        const scalar = Vector3.dot(a, b) / Vector3.dot(b, b);
        return Vector3.multiplyByScalar(b, scalar, result);
    }
    ;
    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Vector3} [left] The first Cartesian.
     * @param {Vector3} [right] The second Cartesian.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                left.x === right.x &&
                left.y === right.y &&
                left.z === right.z));
    }
    ;
    /**
     * @private
     */
    static equalsArray(cartesian, array, offset) {
        return (cartesian.x === array[offset] &&
            cartesian.y === array[offset + 1] &&
            cartesian.z === array[offset + 2]);
    }
    ;
    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they pass an absolute or relative tolerance test,
     * <code>false</code> otherwise.
     *
     * @param {Vector3} [left] The first Cartesian.
     * @param {Vector3} [right] The second Cartesian.
     * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    static equalsEpsilon(left, right, relativeEpsilon, absoluteEpsilon) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                GMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
                GMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon) &&
                GMath.equalsEpsilon(left.z, right.z, relativeEpsilon, absoluteEpsilon)));
    }
    ;
    /**
     * Computes the cross (outer) product of two Cartesians.
     *
     * @param {Vector3} left The first Cartesian.
     * @param {Vector3} right The second Cartesian.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The cross product.
     */
    static cross(left, right, result) {
        const leftX = left.x;
        const leftY = left.y;
        const leftZ = left.z;
        const rightX = right.x;
        const rightY = right.y;
        const rightZ = right.z;
        const x = leftY * rightZ - leftZ * rightY;
        const y = leftZ * rightX - leftX * rightZ;
        const z = leftX * rightY - leftY * rightX;
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
}
/**
* An immutable Vector3 instance initialized to (0.0, 0.0, 0.0).
*
* @type {Vector3}
* @constant
*/
Vector3.ZERO = Object.freeze(new Vector3(0.0, 0.0, 0.0));
/**
 * An immutable Vector3 instance initialized to (1.0, 1.0, 1.0).
 *
 * @type {Vector3}
 * @constant
 */
Vector3.ONE = Object.freeze(new Vector3(1.0, 1.0, 1.0));
/**
 * An immutable Vector3 instance initialized to (1.0, 0.0, 0.0).
 *
 * @type {Vector3}
 * @constant
 */
Vector3.UNIT_X = Object.freeze(new Vector3(1.0, 0.0, 0.0));
/**
 * An immutable Vector3 instance initialized to (0.0, 1.0, 0.0).
 *
 * @type {Vector3}
 * @constant
 */
Vector3.UNIT_Y = Object.freeze(new Vector3(0.0, 1.0, 0.0));
/**
 * An immutable Vector3 instance initialized to (0.0, 0.0, 1.0).
 *
 * @type {Vector3}
 * @constant
 */
Vector3.UNIT_Z = Object.freeze(new Vector3(0.0, 0.0, 1.0));
/**
 * Computes the midpoint between the right and left Cartesian.
 * @param {Vector3} left The first Cartesian.
 * @param {Vector3} right The second Cartesian.
 * @param {Vector3} result The object onto which to store the result.
 * @returns {Vector3} The midpoint.
 */
Vector3.midpoint = function (left, right, result) {
    result.x = (left.x + right.x) * 0.5;
    result.y = (left.y + right.y) * 0.5;
    result.z = (left.z + right.z) * 0.5;
    return result;
};
const distanceScratch$1 = new Vector3();
const lerpScratch$2 = new Vector3();
const angleBetweenScratch = new Vector3();
const angleBetweenScratch2 = new Vector3();
const mostOrthogonalAxisScratch$1 = new Vector3();

/**
 * A 3x3 matrix, indexable as a column-major order array.
 * Constructor parameters are in row-major order for code readability.
 * @alias Matrix3
 * @constructor
 * @implements {ArrayLike<number>}
 *
 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
 * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
 * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
 * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
 * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
 * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
 *
 * @see Matrix3.fromArray
 * @see Matrix3.fromColumnMajorArray
 * @see Matrix3.fromRowMajorArray
 * @see Matrix3.fromQuaternion
 * @see Matrix3.fromHeadingPitchRoll
 * @see Matrix3.fromScale
 * @see Matrix3.fromUniformScale
 * @see Matrix3.fromCrossProduct
 * @see Matrix3.fromRotationX
 * @see Matrix3.fromRotationY
 * @see Matrix3.fromRotationZ
 * @see Matrix2
 * @see Matrix4
 */
class Matrix3 {
    constructor(column0Row0 = 0, column1Row0 = 0, column2Row0 = 0, column0Row1 = 0, column1Row1 = 0, column2Row1 = 0, column0Row2 = 0, column1Row2 = 0, column2Row2 = 0) {
        this[0] = column0Row0;
        this[1] = column0Row1;
        this[2] = column0Row2;
        this[3] = column1Row0;
        this[4] = column1Row1;
        this[5] = column1Row2;
        this[6] = column2Row0;
        this[7] = column2Row1;
        this[8] = column2Row2;
    }
    /**
     * Duplicates a Matrix3 instance.
     *
     * @param {Matrix3} matrix The matrix to duplicate.
     * @param {Matrix3} [result] The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter or a new Matrix3 instance if one was not provided. (Returns undefined if matrix is undefined)
     */
    static clone(matrix, result) {
        if (!defined(matrix)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Matrix3(matrix[0], matrix[3], matrix[6], matrix[1], matrix[4], matrix[7], matrix[2], matrix[5], matrix[8]);
        }
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        result[4] = matrix[4];
        result[5] = matrix[5];
        result[6] = matrix[6];
        result[7] = matrix[7];
        result[8] = matrix[8];
        return result;
    }
    ;
    /**
     * Creates a Matrix3 instance from a column-major order array.
     *
     * @param {Number[]} values The column-major order array.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     */
    static fromColumnMajorArray(values, result) {
        if (!defined(result)) {
            result = new Matrix3;
        }
        return Matrix3.clone(values, result);
    }
    ;
    /**
     * Creates a Matrix3 instance from a row-major order array.
     * The resulting matrix will be in column-major order.
     *
     * @param {Number[]} values The row-major order array.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     */
    static fromRowMajorArray(values, result) {
        if (!defined(result)) {
            return new Matrix3(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8]);
        }
        result[0] = values[0];
        result[1] = values[3];
        result[2] = values[6];
        result[3] = values[1];
        result[4] = values[4];
        result[5] = values[7];
        result[6] = values[2];
        result[7] = values[5];
        result[8] = values[8];
        return result;
    }
    ;
    /**
     * Computes a 3x3 rotation matrix from the provided quaternion.
     *
     * @param {Quaternion} quaternion the quaternion to use.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The 3x3 rotation matrix from this quaternion.
     */
    static fromQuaternion(quaternion, result) {
        const x2 = quaternion.x * quaternion.x;
        const xy = quaternion.x * quaternion.y;
        const xz = quaternion.x * quaternion.z;
        const xw = quaternion.x * quaternion.w;
        const y2 = quaternion.y * quaternion.y;
        const yz = quaternion.y * quaternion.z;
        const yw = quaternion.y * quaternion.w;
        const z2 = quaternion.z * quaternion.z;
        const zw = quaternion.z * quaternion.w;
        const w2 = quaternion.w * quaternion.w;
        const m00 = x2 - y2 - z2 + w2;
        const m01 = 2.0 * (xy - zw);
        const m02 = 2.0 * (xz + yw);
        const m10 = 2.0 * (xy + zw);
        const m11 = -x2 + y2 - z2 + w2;
        const m12 = 2.0 * (yz - xw);
        const m20 = 2.0 * (xz - yw);
        const m21 = 2.0 * (yz + xw);
        const m22 = -x2 - y2 + z2 + w2;
        if (!defined(result)) {
            return new Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        }
        result[0] = m00;
        result[1] = m10;
        result[2] = m20;
        result[3] = m01;
        result[4] = m11;
        result[5] = m21;
        result[6] = m02;
        result[7] = m12;
        result[8] = m22;
        return result;
    }
    ;
    /**
     * Computes a 3x3 rotation matrix from the provided headingPitchRoll. (see http://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles )
     *
     * @param {HeadingPitchRoll} headingPitchRoll the headingPitchRoll to use.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The 3x3 rotation matrix from this headingPitchRoll.
     */
    static fromHeadingPitchRoll(headingPitchRoll, result) {
        const cosTheta = Math.cos(-headingPitchRoll.pitch);
        const cosPsi = Math.cos(-headingPitchRoll.heading);
        const cosPhi = Math.cos(headingPitchRoll.roll);
        const sinTheta = Math.sin(-headingPitchRoll.pitch);
        const sinPsi = Math.sin(-headingPitchRoll.heading);
        const sinPhi = Math.sin(headingPitchRoll.roll);
        const m00 = cosTheta * cosPsi;
        const m01 = -cosPhi * sinPsi + sinPhi * sinTheta * cosPsi;
        const m02 = sinPhi * sinPsi + cosPhi * sinTheta * cosPsi;
        const m10 = cosTheta * sinPsi;
        const m11 = cosPhi * cosPsi + sinPhi * sinTheta * sinPsi;
        const m12 = -sinPhi * cosPsi + cosPhi * sinTheta * sinPsi;
        const m20 = -sinTheta;
        const m21 = sinPhi * cosTheta;
        const m22 = cosPhi * cosTheta;
        if (!defined(result)) {
            return new Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        }
        result[0] = m00;
        result[1] = m10;
        result[2] = m20;
        result[3] = m01;
        result[4] = m11;
        result[5] = m21;
        result[6] = m02;
        result[7] = m12;
        result[8] = m22;
        return result;
    }
    ;
    /**
     * Computes a Matrix3 instance representing a non-uniform scale.
     *
     * @param {Vector3} scale The x, y, and z scale factors.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [7.0, 0.0, 0.0]
     * //   [0.0, 8.0, 0.0]
     * //   [0.0, 0.0, 9.0]
     * const m = Cesium.Matrix3.fromScale(new Cesium.Vector3(7.0, 8.0, 9.0));
     */
    static fromScale(scale, result) {
        if (!defined(result)) {
            return new Matrix3(scale.x, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, scale.z);
        }
        result[0] = scale.x;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = 0.0;
        result[4] = scale.y;
        result[5] = 0.0;
        result[6] = 0.0;
        result[7] = 0.0;
        result[8] = scale.z;
        return result;
    }
    ;
    /**
     * Computes a Matrix3 instance representing a uniform scale.
     *
     * @param {Number} scale The uniform scale factor.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [2.0, 0.0, 0.0]
     * //   [0.0, 2.0, 0.0]
     * //   [0.0, 0.0, 2.0]
     * const m = Cesium.Matrix3.fromUniformScale(2.0);
     */
    static fromUniformScale(scale, result) {
        if (!defined(result)) {
            return new Matrix3(scale, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, scale);
        }
        result[0] = scale;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = 0.0;
        result[4] = scale;
        result[5] = 0.0;
        result[6] = 0.0;
        result[7] = 0.0;
        result[8] = scale;
        return result;
    }
    ;
    /**
     * Computes a Matrix3 instance representing the cross product equivalent matrix of a Vector3 vector.
     *
     * @param {Vector3} vector the vector on the left hand side of the cross product operation.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [0.0, -9.0,  8.0]
     * //   [9.0,  0.0, -7.0]
     * //   [-8.0, 7.0,  0.0]
     * const m = Cesium.Matrix3.fromCrossProduct(new Cesium.Vector3(7.0, 8.0, 9.0));
     */
    static fromCrossProduct(vector, result) {
        if (!defined(result)) {
            return new Matrix3(0.0, -vector.z, vector.y, vector.z, 0.0, -vector.x, -vector.y, vector.x, 0.0);
        }
        result[0] = 0.0;
        result[1] = vector.z;
        result[2] = -vector.y;
        result[3] = -vector.z;
        result[4] = 0.0;
        result[5] = vector.x;
        result[6] = vector.y;
        result[7] = -vector.x;
        result[8] = 0.0;
        return result;
    }
    ;
    /**
     * Creates a rotation matrix around the x-axis.
     *
     * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     *
     * @example
     * // Rotate a point 45 degrees counterclockwise around the x-axis.
     * const p = new Cesium.Vector3(5, 6, 7);
     * const m = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(45.0));
     * const rotated = Cesium.Matrix3.multiplyByVector(m, p, new Cesium.Vector3());
     */
    static fromRotationX(angle, result) {
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        if (!defined(result)) {
            return new Matrix3(1.0, 0.0, 0.0, 0.0, cosAngle, -sinAngle, 0.0, sinAngle, cosAngle);
        }
        result[0] = 1.0;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = 0.0;
        result[4] = cosAngle;
        result[5] = sinAngle;
        result[6] = 0.0;
        result[7] = -sinAngle;
        result[8] = cosAngle;
        return result;
    }
    ;
    /**
     * Creates a rotation matrix around the y-axis.
     *
     * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     *
     * @example
     * // Rotate a point 45 degrees counterclockwise around the y-axis.
     * const p = new Cesium.Vector3(5, 6, 7);
     * const m = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(45.0));
     * const rotated = Cesium.Matrix3.multiplyByVector(m, p, new Cesium.Vector3());
     */
    static fromRotationY(angle, result) {
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        if (!defined(result)) {
            return new Matrix3(cosAngle, 0.0, sinAngle, 0.0, 1.0, 0.0, -sinAngle, 0.0, cosAngle);
        }
        result[0] = cosAngle;
        result[1] = 0.0;
        result[2] = -sinAngle;
        result[3] = 0.0;
        result[4] = 1.0;
        result[5] = 0.0;
        result[6] = sinAngle;
        result[7] = 0.0;
        result[8] = cosAngle;
        return result;
    }
    ;
    /**
     * Creates a rotation matrix around the z-axis.
     *
     * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
     * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
     *
     * @example
     * // Rotate a point 45 degrees counterclockwise around the z-axis.
     * const p = new Cesium.Vector3(5, 6, 7);
     * const m = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(45.0));
     * const rotated = Cesium.Matrix3.multiplyByVector(m, p, new Cesium.Vector3());
     */
    static fromRotationZstatic(angle, result) {
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        if (!defined(result)) {
            return new Matrix3(cosAngle, -sinAngle, 0.0, sinAngle, cosAngle, 0.0, 0.0, 0.0, 1.0);
        }
        result[0] = cosAngle;
        result[1] = sinAngle;
        result[2] = 0.0;
        result[3] = -sinAngle;
        result[4] = cosAngle;
        result[5] = 0.0;
        result[6] = 0.0;
        result[7] = 0.0;
        result[8] = 1.0;
        return result;
    }
    ;
    toArray() {
        const result = [];
        Matrix3.toArray(this, result);
        return result;
    }
    /**
     * Creates an Array from the provided Matrix3 instance.
     * The array will be in column-major order.
     *
     * @param {Matrix3} matrix The matrix to use..
     * @param {Number[]} [result] The Array onto which to store the result.
     * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
     */
    static toArray(matrix, result) {
        if (!defined(result)) {
            return [
                matrix[0],
                matrix[1],
                matrix[2],
                matrix[3],
                matrix[4],
                matrix[5],
                matrix[6],
                matrix[7],
                matrix[8],
            ];
        }
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        result[4] = matrix[4];
        result[5] = matrix[5];
        result[6] = matrix[6];
        result[7] = matrix[7];
        result[8] = matrix[8];
        return result;
    }
    ;
    /**
     * Computes the array index of the element at the provided row and column.
     *
     * @param {Number} column The zero-based index of the column.
     * @param {Number} row The zero-based index of the row.
     * @returns {Number} The index of the element at the provided row and column.
     *
     * @exception {Error} row must be 0, 1, or 2.
     * @exception {Error} column must be 0, 1, or 2.
     *
     * @example
     * const myMatrix = new Cesium.Matrix3();
     * const column1Row0Index = Cesium.Matrix3.getElementIndex(1, 0);
     * const column1Row0 = myMatrix[column1Row0Index]
     * myMatrix[column1Row0Index] = 10.0;
     */
    static getElementIndex(column, row) {
        return column * 3 + row;
    }
    ;
    /**
     * Retrieves a copy of the matrix column at the provided index as a Vector3 instance.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @param {Number} index The zero-based index of the column to retrieve.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, or 2.
     */
    static getColumn(matrix, index, result) {
        const startIndex = index * 3;
        const x = matrix[startIndex];
        const y = matrix[startIndex + 1];
        const z = matrix[startIndex + 2];
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the specified column in the provided matrix with the provided Vector3 instance.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @param {Number} index The zero-based index of the column to set.
     * @param {Vector3} cartesian The Cartesian whose values will be assigned to the specified column.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, or 2.
     */
    static setColumn(matrix, index, cartesian, result) {
        result = Matrix3.clone(matrix, result);
        const startIndex = index * 3;
        result[startIndex] = cartesian.x;
        result[startIndex + 1] = cartesian.y;
        result[startIndex + 2] = cartesian.z;
        return result;
    }
    ;
    /**
     * Retrieves a copy of the matrix row at the provided index as a Vector3 instance.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @param {Number} index The zero-based index of the row to retrieve.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, or 2.
     */
    static getRow(matrix, index, result) {
        const x = matrix[index];
        const y = matrix[index + 3];
        const z = matrix[index + 6];
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the specified row in the provided matrix with the provided Vector3 instance.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @param {Number} index The zero-based index of the row to set.
     * @param {Vector3} cartesian The Cartesian whose values will be assigned to the specified row.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, or 2.
     */
    static setRow(matrix, index, cartesian, result) {
        result = Matrix3.clone(matrix, result);
        result[index] = cartesian.x;
        result[index + 3] = cartesian.y;
        result[index + 6] = cartesian.z;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the scale with the provided scale.
     * This assumes the matrix is an affine transformation.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @param {Vector3} scale The scale that replaces the scale of the provided matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @see Matrix3.setUniformScale
     * @see Matrix3.fromScale
     * @see Matrix3.fromUniformScale
     * @see Matrix3.multiplyByScale
     * @see Matrix3.multiplyByUniformScale
     * @see Matrix3.getScale
     */
    static setScale(matrix, scale, result) {
        const existingScale = Matrix3.getScale(matrix, scaleScratch1$1);
        const scaleRatioX = scale.x / existingScale.x;
        const scaleRatioY = scale.y / existingScale.y;
        const scaleRatioZ = scale.z / existingScale.z;
        result[0] = matrix[0] * scaleRatioX;
        result[1] = matrix[1] * scaleRatioX;
        result[2] = matrix[2] * scaleRatioX;
        result[3] = matrix[3] * scaleRatioY;
        result[4] = matrix[4] * scaleRatioY;
        result[5] = matrix[5] * scaleRatioY;
        result[6] = matrix[6] * scaleRatioZ;
        result[7] = matrix[7] * scaleRatioZ;
        result[8] = matrix[8] * scaleRatioZ;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the scale with the provided uniform scale.
     * This assumes the matrix is an affine transformation.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @param {Number} scale The uniform scale that replaces the scale of the provided matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @see Matrix3.setScale
     * @see Matrix3.fromScale
     * @see Matrix3.fromUniformScale
     * @see Matrix3.multiplyByScale
     * @see Matrix3.multiplyByUniformScale
     * @see Matrix3.getScale
     */
    static setUniformScale(matrix, scale, result) {
        const existingScale = Matrix3.getScale(matrix, scaleScratch2$1);
        const scaleRatioX = scale / existingScale.x;
        const scaleRatioY = scale / existingScale.y;
        const scaleRatioZ = scale / existingScale.z;
        result[0] = matrix[0] * scaleRatioX;
        result[1] = matrix[1] * scaleRatioX;
        result[2] = matrix[2] * scaleRatioX;
        result[3] = matrix[3] * scaleRatioY;
        result[4] = matrix[4] * scaleRatioY;
        result[5] = matrix[5] * scaleRatioY;
        result[6] = matrix[6] * scaleRatioZ;
        result[7] = matrix[7] * scaleRatioZ;
        result[8] = matrix[8] * scaleRatioZ;
        return result;
    }
    ;
    /**
     * Extracts the non-uniform scale assuming the matrix is an affine transformation.
     *
     * @param {Matrix3} matrix The matrix.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     *
     * @see Matrix3.multiplyByScale
     * @see Matrix3.multiplyByUniformScale
     * @see Matrix3.fromScale
     * @see Matrix3.fromUniformScale
     * @see Matrix3.setScale
     * @see Matrix3.setUniformScale
     */
    static getScale(matrix, result) {
        result.x = Vector3.magnitude(Vector3.fromElements(matrix[0], matrix[1], matrix[2], scratchColumn$1));
        result.y = Vector3.magnitude(Vector3.fromElements(matrix[3], matrix[4], matrix[5], scratchColumn$1));
        result.z = Vector3.magnitude(Vector3.fromElements(matrix[6], matrix[7], matrix[8], scratchColumn$1));
        return result;
    }
    ;
    /**
     * Computes the maximum scale assuming the matrix is an affine transformation.
     * The maximum scale is the maximum length of the column vectors.
     *
     * @param {Matrix3} matrix The matrix.
     * @returns {Number} The maximum scale.
     */
    static getMaximumScale(matrix) {
        Matrix3.getScale(matrix, scaleScratch3$1);
        return Vector3.maximumComponent(scaleScratch3$1);
    }
    ;
    /**
     * Sets the rotation assuming the matrix is an affine transformation.
     *
     * @param {Matrix3} matrix The matrix.
     * @param {Matrix3} rotation The rotation matrix.
     * @returns {Matrix3} The modified result parameter.
     *
     * @see Matrix3.getRotation
     */
    static setRotation(matrix, rotation, result) {
        const scale = Matrix3.getScale(matrix, scaleScratch4$1);
        result[0] = rotation[0] * scale.x;
        result[1] = rotation[1] * scale.x;
        result[2] = rotation[2] * scale.x;
        result[3] = rotation[3] * scale.y;
        result[4] = rotation[4] * scale.y;
        result[5] = rotation[5] * scale.y;
        result[6] = rotation[6] * scale.z;
        result[7] = rotation[7] * scale.z;
        result[8] = rotation[8] * scale.z;
        return result;
    }
    ;
    /**
     * Extracts the rotation matrix assuming the matrix is an affine transformation.
     *
     * @param {Matrix3} matrix The matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @see Matrix3.setRotation
     */
    static getRotation(matrix, result) {
        const scale = Matrix3.getScale(matrix, scaleScratch5$1);
        result[0] = matrix[0] / scale.x;
        result[1] = matrix[1] / scale.x;
        result[2] = matrix[2] / scale.x;
        result[3] = matrix[3] / scale.y;
        result[4] = matrix[4] / scale.y;
        result[5] = matrix[5] / scale.y;
        result[6] = matrix[6] / scale.z;
        result[7] = matrix[7] / scale.z;
        result[8] = matrix[8] / scale.z;
        return result;
    }
    ;
    /**
     * Computes the product of two matrices.
     *
     * @param {Matrix3} left The first matrix.
     * @param {Matrix3} right The second matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static multiply(left, right, result) {
        const column0Row0 = left[0] * right[0] + left[3] * right[1] + left[6] * right[2];
        const column0Row1 = left[1] * right[0] + left[4] * right[1] + left[7] * right[2];
        const column0Row2 = left[2] * right[0] + left[5] * right[1] + left[8] * right[2];
        const column1Row0 = left[0] * right[3] + left[3] * right[4] + left[6] * right[5];
        const column1Row1 = left[1] * right[3] + left[4] * right[4] + left[7] * right[5];
        const column1Row2 = left[2] * right[3] + left[5] * right[4] + left[8] * right[5];
        const column2Row0 = left[0] * right[6] + left[3] * right[7] + left[6] * right[8];
        const column2Row1 = left[1] * right[6] + left[4] * right[7] + left[7] * right[8];
        const column2Row2 = left[2] * right[6] + left[5] * right[7] + left[8] * right[8];
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column0Row2;
        result[3] = column1Row0;
        result[4] = column1Row1;
        result[5] = column1Row2;
        result[6] = column2Row0;
        result[7] = column2Row1;
        result[8] = column2Row2;
        return result;
    }
    ;
    /**
     * Computes the sum of two matrices.
     *
     * @param {Matrix3} left The first matrix.
     * @param {Matrix3} right The second matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static add(left, right, result) {
        result[0] = left[0] + right[0];
        result[1] = left[1] + right[1];
        result[2] = left[2] + right[2];
        result[3] = left[3] + right[3];
        result[4] = left[4] + right[4];
        result[5] = left[5] + right[5];
        result[6] = left[6] + right[6];
        result[7] = left[7] + right[7];
        result[8] = left[8] + right[8];
        return result;
    }
    ;
    /**
     * Computes the difference of two matrices.
     *
     * @param {Matrix3} left The first matrix.
     * @param {Matrix3} right The second matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static subtract(left, right, result) {
        result[0] = left[0] - right[0];
        result[1] = left[1] - right[1];
        result[2] = left[2] - right[2];
        result[3] = left[3] - right[3];
        result[4] = left[4] - right[4];
        result[5] = left[5] - right[5];
        result[6] = left[6] - right[6];
        result[7] = left[7] - right[7];
        result[8] = left[8] - right[8];
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a column vector.
     *
     * @param {Matrix3} matrix The matrix.
     * @param {Vector3} cartesian The column.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static multiplyByVector(matrix, cartesian, result) {
        const vX = cartesian.x;
        const vY = cartesian.y;
        const vZ = cartesian.z;
        const x = matrix[0] * vX + matrix[3] * vY + matrix[6] * vZ;
        const y = matrix[1] * vX + matrix[4] * vY + matrix[7] * vZ;
        const z = matrix[2] * vX + matrix[5] * vY + matrix[8] * vZ;
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a scalar.
     *
     * @param {Matrix3} matrix The matrix.
     * @param {Number} scalar The number to multiply by.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static multiplyByScalar(matrix, scalar, result) {
        result[0] = matrix[0] * scalar;
        result[1] = matrix[1] * scalar;
        result[2] = matrix[2] * scalar;
        result[3] = matrix[3] * scalar;
        result[4] = matrix[4] * scalar;
        result[5] = matrix[5] * scalar;
        result[6] = matrix[6] * scalar;
        result[7] = matrix[7] * scalar;
        result[8] = matrix[8] * scalar;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix times a (non-uniform) scale, as if the scale were a scale matrix.
     *
     * @param {Matrix3} matrix The matrix on the left-hand side.
     * @param {Number} scale The non-uniform scale on the right-hand side.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     *
     * @example
     * // Instead of Cesium.Matrix3.multiply(m, Cesium.Matrix3.fromScale(scale), m);
     * Cesium.Matrix3.multiplyByScale(m, scale, m);
     *
     * @see Matrix3.multiplyByUniformScale
     * @see Matrix3.fromScale
     * @see Matrix3.fromUniformScale
     * @see Matrix3.setScale
     * @see Matrix3.setUniformScale
     * @see Matrix3.getScale
     */
    static multiplyByScale(matrix, scale, result) {
        result[0] = matrix[0] * scale.x;
        result[1] = matrix[1] * scale.x;
        result[2] = matrix[2] * scale.x;
        result[3] = matrix[3] * scale.y;
        result[4] = matrix[4] * scale.y;
        result[5] = matrix[5] * scale.y;
        result[6] = matrix[6] * scale.z;
        result[7] = matrix[7] * scale.z;
        result[8] = matrix[8] * scale.z;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix times a uniform scale, as if the scale were a scale matrix.
     *
     * @param {Matrix3} matrix The matrix on the left-hand side.
     * @param {Number} scale The uniform scale on the right-hand side.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @example
     * // Instead of Cesium.Matrix3.multiply(m, Cesium.Matrix3.fromUniformScale(scale), m);
     * Cesium.Matrix3.multiplyByUniformScale(m, scale, m);
     *
     * @see Matrix3.multiplyByScale
     * @see Matrix3.fromScale
     * @see Matrix3.fromUniformScale
     * @see Matrix3.setScale
     * @see Matrix3.setUniformScale
     * @see Matrix3.getScale
     */
    static multiplyByUniformScale(matrix, scale, result) {
        result[0] = matrix[0] * scale;
        result[1] = matrix[1] * scale;
        result[2] = matrix[2] * scale;
        result[3] = matrix[3] * scale;
        result[4] = matrix[4] * scale;
        result[5] = matrix[5] * scale;
        result[6] = matrix[6] * scale;
        result[7] = matrix[7] * scale;
        result[8] = matrix[8] * scale;
        return result;
    }
    ;
    /**
     * Creates a negated copy of the provided matrix.
     *
     * @param {Matrix3} matrix The matrix to negate.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static negate(matrix, result) {
        result[0] = -matrix[0];
        result[1] = -matrix[1];
        result[2] = -matrix[2];
        result[3] = -matrix[3];
        result[4] = -matrix[4];
        result[5] = -matrix[5];
        result[6] = -matrix[6];
        result[7] = -matrix[7];
        result[8] = -matrix[8];
        return result;
    }
    ;
    /**
     * Computes the transpose of the provided matrix.
     *
     * @param {Matrix3} matrix The matrix to transpose.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static transpose(matrix, result) {
        const column0Row0 = matrix[0];
        const column0Row1 = matrix[3];
        const column0Row2 = matrix[6];
        const column1Row0 = matrix[1];
        const column1Row1 = matrix[4];
        const column1Row2 = matrix[7];
        const column2Row0 = matrix[2];
        const column2Row1 = matrix[5];
        const column2Row2 = matrix[8];
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column0Row2;
        result[3] = column1Row0;
        result[4] = column1Row1;
        result[5] = column1Row2;
        result[6] = column2Row0;
        result[7] = column2Row1;
        result[8] = column2Row2;
        return result;
    }
    ;
    /**
     * Computes the eigenvectors and eigenvalues of a symmetric matrix.
     * <p>
     * Returns a diagonal matrix and unitary matrix such that:
     * <code>matrix = unitary matrix * diagonal matrix * transpose(unitary matrix)</code>
     * </p>
     * <p>
     * The values along the diagonal of the diagonal matrix are the eigenvalues. The columns
     * of the unitary matrix are the corresponding eigenvectors.
     * </p>
     *
     * @param {Matrix3} matrix The matrix to decompose into diagonal and unitary matrix. Expected to be symmetric.
     * @param {Object} [result] An object with unitary and diagonal properties which are matrices onto which to store the result.
     * @returns {Object} An object with unitary and diagonal properties which are the unitary and diagonal matrices, respectively.
     *
     * @example
     * const a = //... symetric matrix
     * const result = {
     *     unitary : new Cesium.Matrix3(),
     *     diagonal : new Cesium.Matrix3()
     * };
     * Cesium.Matrix3.computeEigenDecomposition(a, result);
     *
     * const unitaryTranspose = Cesium.Matrix3.transpose(result.unitary, new Cesium.Matrix3());
     * const b = Cesium.Matrix3.multiply(result.unitary, result.diagonal, new Cesium.Matrix3());
     * Cesium.Matrix3.multiply(b, unitaryTranspose, b); // b is now equal to a
     *
     * const lambda = Cesium.Matrix3.getColumn(result.diagonal, 0, new Cesium.Vector3()).x;  // first eigenvalue
     * const v = Cesium.Matrix3.getColumn(result.unitary, 0, new Cesium.Vector3());          // first eigenvector
     * const c = Cesium.Vector3.multiplyByScalar(v, lambda, new Cesium.Vector3());        // equal to Cesium.Matrix3.multiplyByVector(a, v)
     */
    static computeEigenDecomposition(matrix, result) {
        // This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
        // section 8.4.3 The Classical Jacobi Algorithm
        const tolerance = GMath.EPSILON20;
        const maxSweeps = 10;
        let count = 0;
        let sweep = 0;
        if (!defined(result)) {
            result = {};
        }
        const unitaryMatrix = (result.unitary = Matrix3.clone(Matrix3.IDENTITY, result.unitary));
        const diagMatrix = (result.diagonal = Matrix3.clone(matrix, result.diagonal));
        const epsilon = tolerance * computeFrobeniusNorm(diagMatrix);
        while (sweep < maxSweeps && offDiagonalFrobeniusNorm(diagMatrix) > epsilon) {
            shurDecomposition(diagMatrix, jMatrix);
            Matrix3.transpose(jMatrix, jMatrixTranspose);
            Matrix3.multiply(diagMatrix, jMatrix, diagMatrix);
            Matrix3.multiply(jMatrixTranspose, diagMatrix, diagMatrix);
            Matrix3.multiply(unitaryMatrix, jMatrix, unitaryMatrix);
            if (++count > 2) {
                ++sweep;
                count = 0;
            }
        }
        return result;
    }
    ;
    /**
     * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
     *
     * @param {Matrix3} matrix The matrix with signed elements.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static abs(matrix, result) {
        result[0] = Math.abs(matrix[0]);
        result[1] = Math.abs(matrix[1]);
        result[2] = Math.abs(matrix[2]);
        result[3] = Math.abs(matrix[3]);
        result[4] = Math.abs(matrix[4]);
        result[5] = Math.abs(matrix[5]);
        result[6] = Math.abs(matrix[6]);
        result[7] = Math.abs(matrix[7]);
        result[8] = Math.abs(matrix[8]);
        return result;
    }
    ;
    /**
     * Computes the determinant of the provided matrix.
     *
     * @param {Matrix3} matrix The matrix to use.
     * @returns {Number} The value of the determinant of the matrix.
     */
    static determinant(matrix) {
        const m11 = matrix[0];
        const m21 = matrix[3];
        const m31 = matrix[6];
        const m12 = matrix[1];
        const m22 = matrix[4];
        const m32 = matrix[7];
        const m13 = matrix[2];
        const m23 = matrix[5];
        const m33 = matrix[8];
        return (m11 * (m22 * m33 - m23 * m32) +
            m12 * (m23 * m31 - m21 * m33) +
            m13 * (m21 * m32 - m22 * m31));
    }
    ;
    /**
     * Computes the inverse of the provided matrix.
     *
     * @param {Matrix3} matrix The matrix to invert.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @exception {Error} matrix is not invertible.
     */
    static inverse(matrix, result) {
        const m11 = matrix[0];
        const m21 = matrix[1];
        const m31 = matrix[2];
        const m12 = matrix[3];
        const m22 = matrix[4];
        const m32 = matrix[5];
        const m13 = matrix[6];
        const m23 = matrix[7];
        const m33 = matrix[8];
        const determinant = Matrix3.determinant(matrix);
        //>>includeStart('debug', pragmas.debug);
        if (Math.abs(determinant) <= GMath.EPSILON15) {
            throw new Error("matrix is not invertible");
        }
        //>>includeEnd('debug');
        result[0] = m22 * m33 - m23 * m32;
        result[1] = m23 * m31 - m21 * m33;
        result[2] = m21 * m32 - m22 * m31;
        result[3] = m13 * m32 - m12 * m33;
        result[4] = m11 * m33 - m13 * m31;
        result[5] = m12 * m31 - m11 * m32;
        result[6] = m12 * m23 - m13 * m22;
        result[7] = m13 * m21 - m11 * m23;
        result[8] = m11 * m22 - m12 * m21;
        const scale = 1.0 / determinant;
        return Matrix3.multiplyByScalar(result, scale, result);
    }
    ;
    /**
     * Computes the inverse transpose of a matrix.
     *
     * @param {Matrix3} matrix The matrix to transpose and invert.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     */
    static inverseTranspose(matrix, result) {
        return Matrix3.inverse(Matrix3.transpose(matrix, scratchTransposeMatrix$1), result);
    }
    ;
    /**
     * Compares the provided matrices componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Matrix3} [left] The first matrix.
     * @param {Matrix3} [right] The second matrix.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                left[0] === right[0] &&
                left[1] === right[1] &&
                left[2] === right[2] &&
                left[3] === right[3] &&
                left[4] === right[4] &&
                left[5] === right[5] &&
                left[6] === right[6] &&
                left[7] === right[7] &&
                left[8] === right[8]));
    }
    ;
    /**
     * Compares the provided matrices componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Matrix3} [left] The first matrix.
     * @param {Matrix3} [right] The second matrix.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    static equalsEpsilon(left, right, epsilon) {
        epsilon = defaultValue(epsilon, 0);
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                Math.abs(left[0] - right[0]) <= epsilon &&
                Math.abs(left[1] - right[1]) <= epsilon &&
                Math.abs(left[2] - right[2]) <= epsilon &&
                Math.abs(left[3] - right[3]) <= epsilon &&
                Math.abs(left[4] - right[4]) <= epsilon &&
                Math.abs(left[5] - right[5]) <= epsilon &&
                Math.abs(left[6] - right[6]) <= epsilon &&
                Math.abs(left[7] - right[7]) <= epsilon &&
                Math.abs(left[8] - right[8]) <= epsilon));
    }
    ;
    clone(result) {
        return Matrix3.clone(this, result);
    }
    ;
    /**
     * Compares this matrix to the provided matrix componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Matrix3} [right] The right hand side matrix.
     * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Matrix3.equals(this, right);
    }
    ;
    /**
     * @private
     */
    equalsArray(matrix, array, offset) {
        return (matrix[0] === array[offset] &&
            matrix[1] === array[offset + 1] &&
            matrix[2] === array[offset + 2] &&
            matrix[3] === array[offset + 3] &&
            matrix[4] === array[offset + 4] &&
            matrix[5] === array[offset + 5] &&
            matrix[6] === array[offset + 6] &&
            matrix[7] === array[offset + 7] &&
            matrix[8] === array[offset + 8]);
    }
    ;
    /**
     * Compares this matrix to the provided matrix componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Matrix3} [right] The right hand side matrix.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, epsilon) {
        return Matrix3.equalsEpsilon(this, right, epsilon);
    }
    ;
    /**
     * Creates a string representing this Matrix with each row being
     * on a separate line and in the format '(column0, column1, column2)'.
     *
     * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1, column2)'.
     */
    toString() {
        return (`(${this[0]}, ${this[3]}, ${this[6]})\n` +
            `(${this[1]}, ${this[4]}, ${this[7]})\n` +
            `(${this[2]}, ${this[5]}, ${this[8]})`);
    }
    ;
}
/**
 * An immutable Matrix3 instance initialized to the identity matrix.
 *
 * @type {Matrix3}
 * @constant
 */
Matrix3.IDENTITY = Object.freeze(new Matrix3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0));
/**
 * An immutable Matrix3 instance initialized to the zero matrix.
 *
 * @type {Matrix3}
 * @constant
 */
Matrix3.ZERO = Object.freeze(new Matrix3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
const scaleScratch1$1 = new Vector3();
const scaleScratch2$1 = new Vector3();
const scratchColumn$1 = new Vector3();
const scaleScratch3$1 = new Vector3();
const scaleScratch4$1 = new Vector3();
const scaleScratch5$1 = new Vector3();
function computeFrobeniusNorm(matrix) {
    let norm = 0.0;
    for (let i = 0; i < 9; ++i) {
        const temp = matrix[i];
        norm += temp * temp;
    }
    return Math.sqrt(norm);
}
const rowVal = [1, 0, 0];
const colVal = [2, 2, 1];
function offDiagonalFrobeniusNorm(matrix) {
    // Computes the "off-diagonal" Frobenius norm.
    // Assumes matrix is symmetric.
    let norm = 0.0;
    for (let i = 0; i < 3; ++i) {
        const temp = matrix[Matrix3.getElementIndex(colVal[i], rowVal[i])];
        norm += 2.0 * temp * temp;
    }
    return Math.sqrt(norm);
}
function shurDecomposition(matrix, result) {
    // This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
    // section 8.4.2 The 2by2 Symmetric Schur Decomposition.
    //
    // The routine takes a matrix, which is assumed to be symmetric, and
    // finds the largest off-diagonal term, and then creates
    // a matrix (result) which can be used to help reduce it
    const tolerance = GMath.EPSILON15;
    let maxDiagonal = 0.0;
    let rotAxis = 1;
    // find pivot (rotAxis) based on max diagonal of matrix
    for (let i = 0; i < 3; ++i) {
        const temp = Math.abs(matrix[Matrix3.getElementIndex(colVal[i], rowVal[i])]);
        if (temp > maxDiagonal) {
            rotAxis = i;
            maxDiagonal = temp;
        }
    }
    let c = 1.0;
    let s = 0.0;
    const p = rowVal[rotAxis];
    const q = colVal[rotAxis];
    if (Math.abs(matrix[Matrix3.getElementIndex(q, p)]) > tolerance) {
        const qq = matrix[Matrix3.getElementIndex(q, q)];
        const pp = matrix[Matrix3.getElementIndex(p, p)];
        const qp = matrix[Matrix3.getElementIndex(q, p)];
        const tau = (qq - pp) / 2.0 / qp;
        let t;
        if (tau < 0.0) {
            t = -1.0 / (-tau + Math.sqrt(1.0 + tau * tau));
        }
        else {
            t = 1.0 / (tau + Math.sqrt(1.0 + tau * tau));
        }
        c = 1.0 / Math.sqrt(1.0 + t * t);
        s = t * c;
    }
    result = Matrix3.clone(Matrix3.IDENTITY, result);
    result[Matrix3.getElementIndex(p, p)] = result[Matrix3.getElementIndex(q, q)] = c;
    result[Matrix3.getElementIndex(q, p)] = s;
    result[Matrix3.getElementIndex(p, q)] = -s;
    return result;
}
const jMatrix = new Matrix3();
const jMatrixTranspose = new Matrix3();
const scratchTransposeMatrix$1 = new Matrix3();

/**
 * A 4D Cartesian point.
 * @alias Vector4
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 * @param {Number} [z=0.0] The Z component.
 * @param {Number} [w=0.0] The W component.
 *
 * @see Vector2
 * @see Vector3
 * @see Packable
 */
class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    toArray() {
        return [this.x, this.y, this.z, this.w];
    }
    /**
     * Duplicates this Vector4 instance.
     *
     * @param {Vector4} [result] The object onto which to store the result.
     * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided.
     */
    clone(result) {
        return Vector4.clone(this, result);
    }
    ;
    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Vector4} [right] The right hand side Cartesian.
     * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Vector4.equals(this, right);
    }
    ;
    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they pass an absolute or relative tolerance test,
     * <code>false</code> otherwise.
     *
     * @param {Vector4} [right] The right hand side Cartesian.
     * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
     * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, relativeEpsilon, absoluteEpsilon) {
        return Vector4.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon);
    }
    ;
    /**
     * Creates a string representing this Cartesian in the format '(x, y, z, w)'.
     *
     * @returns {String} A string representing the provided Cartesian in the format '(x, y, z, w)'.
     */
    toString() {
        return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
    }
    ;
    fromBufferAttribute(attribute, index) {
        this.x = attribute.getX(index);
        this.y = attribute.getY(index);
        this.z = attribute.getZ(index);
        this.w = attribute.getW(index);
        return this;
    }
    /**
     * Creates a Vector4 instance from x, y, z and w coordinates.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     * @param {Number} z The z coordinate.
     * @param {Number} w The w coordinate.
     * @param {Vector4} [result] The object onto which to store the result.
     * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided.
     */
    static fromElements(x, y, z, w, result) {
        if (!defined(result)) {
            return new Vector4(x, y, z, w);
        }
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    ;
    /**
     * Creates a Vector4 instance from a {@link Color}. <code>red</code>, <code>green</code>, <code>blue</code>,
     * and <code>alpha</code> map to <code>x</code>, <code>y</code>, <code>z</code>, and <code>w</code>, respectively.
     *
     * @param {Color} color The source color.
     * @param {Vector4} [result] The object onto which to store the result.
     * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided.
     */
    static fromColor(color, result) {
        if (!defined(result)) {
            return new Vector4(color.red, color.green, color.blue, color.alpha);
        }
        result.x = color.red;
        result.y = color.green;
        result.z = color.blue;
        result.w = color.alpha;
        return result;
    }
    ;
    /**
     * Duplicates a Vector4 instance.
     *
     * @param {Vector4} cartesian The Cartesian to duplicate.
     * @param {Vector4} [result] The object onto which to store the result.
     * @returns {Vector4} The modified result parameter or a new Vector4 instance if one was not provided. (Returns undefined if cartesian is undefined)
     */
    static clone(cartesian, result) {
        if (!defined(cartesian)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Vector4(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
        }
        result.x = cartesian.x;
        result.y = cartesian.y;
        result.z = cartesian.z;
        result.w = cartesian.w;
        return result;
    }
    ;
    /**
     * Computes the value of the maximum component for the supplied Cartesian.
     *
     * @param {Vector4} cartesian The cartesian to use.
     * @returns {Number} The value of the maximum component.
     */
    static maximumComponent(cartesian) {
        return Math.max(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
    }
    ;
    /**
     * Computes the value of the minimum component for the supplied Cartesian.
     *
     * @param {Vector4} cartesian The cartesian to use.
     * @returns {Number} The value of the minimum component.
     */
    static minimumComponent(cartesian) {
        return Math.min(cartesian.x, cartesian.y, cartesian.z, cartesian.w);
    }
    ;
    /**
     * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
     *
     * @param {Vector4} first A cartesian to compare.
     * @param {Vector4} second A cartesian to compare.
     * @param {Vector4} result The object into which to store the result.
     * @returns {Vector4} A cartesian with the minimum components.
     */
    static minimumByComponent(first, second, result) {
        result.x = Math.min(first.x, second.x);
        result.y = Math.min(first.y, second.y);
        result.z = Math.min(first.z, second.z);
        result.w = Math.min(first.w, second.w);
        return result;
    }
    ;
    /**
     * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
     *
     * @param {Vector4} first A cartesian to compare.
     * @param {Vector4} second A cartesian to compare.
     * @param {Vector4} result The object into which to store the result.
     * @returns {Vector4} A cartesian with the maximum components.
     */
    static maximumByComponent(first, second, result) {
        result.x = Math.max(first.x, second.x);
        result.y = Math.max(first.y, second.y);
        result.z = Math.max(first.z, second.z);
        result.w = Math.max(first.w, second.w);
        return result;
    }
    ;
    /**
     * Constrain a value to lie between two values.
     *
     * @param {Vector4} value The value to clamp.
     * @param {Vector4} min The minimum bound.
     * @param {Vector4} max The maximum bound.
     * @param {Vector4} result The object into which to store the result.
     * @returns {Vector4} The clamped value such that min <= result <= max.
     */
    static clamp(value, min, max, result) {
        const x = GMath.clamp(value.x, min.x, max.x);
        const y = GMath.clamp(value.y, min.y, max.y);
        const z = GMath.clamp(value.z, min.z, max.z);
        const w = GMath.clamp(value.w, min.w, max.w);
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    ;
    /**
     * Computes the provided Cartesian's squared magnitude.
     *
     * @param {Vector4} cartesian The Cartesian instance whose squared magnitude is to be computed.
     * @returns {Number} The squared magnitude.
     */
    static magnitudeSquared(cartesian) {
        return (cartesian.x * cartesian.x +
            cartesian.y * cartesian.y +
            cartesian.z * cartesian.z +
            cartesian.w * cartesian.w);
    }
    ;
    /**
     * Computes the Cartesian's magnitude (length).
     *
     * @param {Vector4} cartesian The Cartesian instance whose magnitude is to be computed.
     * @returns {Number} The magnitude.
     */
    static magnitude(cartesian) {
        return Math.sqrt(Vector4.magnitudeSquared(cartesian));
    }
    ;
    /**
     * Computes the 4-space distance between two points.
     *
     * @param {Vector4} left The first point to compute the distance from.
     * @param {Vector4} right The second point to compute the distance to.
     * @returns {Number} The distance between two points.
     *
     * @example
     * // Returns 1.0
     * const d = Cesium.Vector4.distance(
     *   new Cesium.Vector4(1.0, 0.0, 0.0, 0.0),
     *   new Cesium.Vector4(2.0, 0.0, 0.0, 0.0));
     */
    static distance(left, right) {
        Vector4.subtract(left, right, distanceScratch);
        return Vector4.magnitude(distanceScratch);
    }
    ;
    /**
     * Computes the squared distance between two points.  Comparing squared distances
     * using this function is more efficient than comparing distances using {@link Vector4#distance}.
     *
     * @param {Vector4} left The first point to compute the distance from.
     * @param {Vector4} right The second point to compute the distance to.
     * @returns {Number} The distance between two points.
     *
     * @example
     * // Returns 4.0, not 2.0
     * const d = Cesium.Vector4.distance(
     *   new Cesium.Vector4(1.0, 0.0, 0.0, 0.0),
     *   new Cesium.Vector4(3.0, 0.0, 0.0, 0.0));
     */
    static distanceSquared(left, right) {
        Vector4.subtract(left, right, distanceScratch);
        return Vector4.magnitudeSquared(distanceScratch);
    }
    ;
    /**
     * Computes the normalized form of the supplied Cartesian.
     *
     * @param {Vector4} cartesian The Cartesian to be normalized.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static normalize(cartesian, result) {
        const magnitude = Vector4.magnitude(cartesian);
        result.x = cartesian.x / magnitude;
        result.y = cartesian.y / magnitude;
        result.z = cartesian.z / magnitude;
        result.w = cartesian.w / magnitude;
        //>>includeStart('debug', pragmas.debug);
        if (isNaN(result.x) ||
            isNaN(result.y) ||
            isNaN(result.z) ||
            isNaN(result.w)) {
            throw new Error("normalized result is not a number");
        }
        //>>includeEnd('debug');
        return result;
    }
    ;
    /**
     * Computes the dot (scalar) product of two Cartesians.
     *
     * @param {Vector4} left The first Cartesian.
     * @param {Vector4} right The second Cartesian.
     * @returns {Number} The dot product.
     */
    static dot(left, right) {
        return (left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w);
    }
    ;
    /**
     * Computes the componentwise product of two Cartesians.
     *
     * @param {Vector4} left The first Cartesian.
     * @param {Vector4} right The second Cartesian.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static multiplyComponents(left, right, result) {
        result.x = left.x * right.x;
        result.y = left.y * right.y;
        result.z = left.z * right.z;
        result.w = left.w * right.w;
        return result;
    }
    ;
    /**
     * Computes the componentwise quotient of two Cartesians.
     *
     * @param {Vector4} left The first Cartesian.
     * @param {Vector4} right The second Cartesian.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static divideComponents(left, right, result) {
        result.x = left.x / right.x;
        result.y = left.y / right.y;
        result.z = left.z / right.z;
        result.w = left.w / right.w;
        return result;
    }
    ;
    /**
     * Computes the componentwise sum of two Cartesians.
     *
     * @param {Vector4} left The first Cartesian.
     * @param {Vector4} right The second Cartesian.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static add(left, right, result) {
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        result.z = left.z + right.z;
        result.w = left.w + right.w;
        return result;
    }
    ;
    /**
     * Computes the componentwise difference of two Cartesians.
     *
     * @param {Vector4} left The first Cartesian.
     * @param {Vector4} right The second Cartesian.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static subtract(left, right, result) {
        result.x = left.x - right.x;
        result.y = left.y - right.y;
        result.z = left.z - right.z;
        result.w = left.w - right.w;
        return result;
    }
    ;
    /**
     * Multiplies the provided Cartesian componentwise by the provided scalar.
     *
     * @param {Vector4} cartesian The Cartesian to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static multiplyByScalar(cartesian, scalar, result) {
        result.x = cartesian.x * scalar;
        result.y = cartesian.y * scalar;
        result.z = cartesian.z * scalar;
        result.w = cartesian.w * scalar;
        return result;
    }
    ;
    /**
     * Divides the provided Cartesian componentwise by the provided scalar.
     *
     * @param {Vector4} cartesian The Cartesian to be divided.
     * @param {Number} scalar The scalar to divide by.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static divideByScalar(cartesian, scalar, result) {
        result.x = cartesian.x / scalar;
        result.y = cartesian.y / scalar;
        result.z = cartesian.z / scalar;
        result.w = cartesian.w / scalar;
        return result;
    }
    ;
    /**
     * Negates the provided Cartesian.
     *
     * @param {Vector4} cartesian The Cartesian to be negated.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static negate(cartesian, result) {
        result.x = -cartesian.x;
        result.y = -cartesian.y;
        result.z = -cartesian.z;
        result.w = -cartesian.w;
        return result;
    }
    ;
    /**
     * Computes the absolute value of the provided Cartesian.
     *
     * @param {Vector4} cartesian The Cartesian whose absolute value is to be computed.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static abs(cartesian, result) {
        result.x = Math.abs(cartesian.x);
        result.y = Math.abs(cartesian.y);
        result.z = Math.abs(cartesian.z);
        result.w = Math.abs(cartesian.w);
        return result;
    }
    ;
    /**
     * Computes the linear interpolation or extrapolation at t using the provided cartesians.
     *
     * @param {Vector4} start The value corresponding to t at 0.0.
     * @param {Vector4}end The value corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static lerp(start, end, t, result) {
        Vector4.multiplyByScalar(end, t, lerpScratch$1);
        result = Vector4.multiplyByScalar(start, 1.0 - t, result);
        return Vector4.add(lerpScratch$1, result, result);
    }
    ;
    /**
     * Returns the axis that is most orthogonal to the provided Cartesian.
     *
     * @param {Vector4} cartesian The Cartesian on which to find the most orthogonal axis.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The most orthogonal axis.
     */
    static mostOrthogonalAxis(cartesian, result) {
        const f = Vector4.normalize(cartesian, mostOrthogonalAxisScratch);
        Vector4.abs(f, f);
        if (f.x <= f.y) {
            if (f.x <= f.z) {
                if (f.x <= f.w) {
                    result = Vector4.clone(Vector4.UNIT_X, result);
                }
                else {
                    result = Vector4.clone(Vector4.UNIT_W, result);
                }
            }
            else if (f.z <= f.w) {
                result = Vector4.clone(Vector4.UNIT_Z, result);
            }
            else {
                result = Vector4.clone(Vector4.UNIT_W, result);
            }
        }
        else if (f.y <= f.z) {
            if (f.y <= f.w) {
                result = Vector4.clone(Vector4.UNIT_Y, result);
            }
            else {
                result = Vector4.clone(Vector4.UNIT_W, result);
            }
        }
        else if (f.z <= f.w) {
            result = Vector4.clone(Vector4.UNIT_Z, result);
        }
        else {
            result = Vector4.clone(Vector4.UNIT_W, result);
        }
        return result;
    }
    ;
    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Vector4} [left] The first Cartesian.
     * @param {Vector4} [right] The second Cartesian.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                left.x === right.x &&
                left.y === right.y &&
                left.z === right.z &&
                left.w === right.w));
    }
    ;
    /**
     * @private
     */
    static equalsArray(cartesian, array, offset) {
        return (cartesian.x === array[offset] &&
            cartesian.y === array[offset + 1] &&
            cartesian.z === array[offset + 2] &&
            cartesian.w === array[offset + 3]);
    }
    ;
    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they pass an absolute or relative tolerance test,
     * <code>false</code> otherwise.
     *
     * @param {Vector4} [left] The first Cartesian.
     * @param {Vector4} [right] The second Cartesian.
     * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
     * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    static equalsEpsilon(left, right, relativeEpsilon, absoluteEpsilon) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                GMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
                GMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon) &&
                GMath.equalsEpsilon(left.z, right.z, relativeEpsilon, absoluteEpsilon) &&
                GMath.equalsEpsilon(left.w, right.w, relativeEpsilon, absoluteEpsilon)));
    }
    ;
    /**
     * Packs an arbitrary floating point value to 4 values representable using uint8.
     *
     * @param {Number} value A floating point number.
     * @param {Vector4} [result] The Vector4 that will contain the packed float.
     * @returns {Vector4} A Vector4 representing the float packed to values in x, y, z, and w.
     */
    static packFloat(value, result) {
        if (!defined(result)) {
            result = new Vector4();
        }
        // scratchU8Array and scratchF32Array are views into the same buffer
        scratchF32Array[0] = value;
        if (littleEndian) {
            result.x = scratchU8Array[0];
            result.y = scratchU8Array[1];
            result.z = scratchU8Array[2];
            result.w = scratchU8Array[3];
        }
        else {
            // convert from big-endian to little-endian
            result.x = scratchU8Array[3];
            result.y = scratchU8Array[2];
            result.z = scratchU8Array[1];
            result.w = scratchU8Array[0];
        }
        return result;
    }
    ;
    /**
     * Unpacks a float packed using Vector4.packFloat.
     *
     * @param {Vector4} packedFloat A Vector4 containing a float packed to 4 values representable using uint8.
     * @returns {Number} The unpacked float.
     * @private
     */
    static unpackFloat(packedFloat) {
        // scratchU8Array and scratchF32Array are views into the same buffer
        if (littleEndian) {
            scratchU8Array[0] = packedFloat.x;
            scratchU8Array[1] = packedFloat.y;
            scratchU8Array[2] = packedFloat.z;
            scratchU8Array[3] = packedFloat.w;
        }
        else {
            // convert from little-endian to big-endian
            scratchU8Array[0] = packedFloat.w;
            scratchU8Array[1] = packedFloat.z;
            scratchU8Array[2] = packedFloat.y;
            scratchU8Array[3] = packedFloat.x;
        }
        return scratchF32Array[0];
    }
    ;
}
/**
* An immutable Vector4 instance initialized to (0.0, 0.0, 0.0, 0.0).
*
* @type {Vector4}
* @constant
*/
Vector4.ZERO = Object.freeze(new Vector4(0.0, 0.0, 0.0, 0.0));
/**
 * An immutable Vector4 instance initialized to (1.0, 1.0, 1.0, 1.0).
 *
 * @type {Vector4}
 * @constant
 */
Vector4.ONE = Object.freeze(new Vector4(1.0, 1.0, 1.0, 1.0));
/**
 * An immutable Vector4 instance initialized to (1.0, 0.0, 0.0, 0.0).
 *
 * @type {Vector4}
 * @constant
 */
Vector4.UNIT_X = Object.freeze(new Vector4(1.0, 0.0, 0.0, 0.0));
/**
 * An immutable Vector4 instance initialized to (0.0, 1.0, 0.0, 0.0).
 *
 * @type {Vector4}
 * @constant
 */
Vector4.UNIT_Y = Object.freeze(new Vector4(0.0, 1.0, 0.0, 0.0));
/**
 * An immutable Vector4 instance initialized to (0.0, 0.0, 1.0, 0.0).
 *
 * @type {Vector4}
 * @constant
 */
Vector4.UNIT_Z = Object.freeze(new Vector4(0.0, 0.0, 1.0, 0.0));
/**
 * An immutable Vector4 instance initialized to (0.0, 0.0, 0.0, 1.0).
 *
 * @type {Vector4}
 * @constant
 */
/**
 * The number of elements used to pack the object into an array.
 * @type {Number}
 */
Vector4.packedLength = 4;
Vector4.UNIT_W = Object.freeze(new Vector4(0.0, 0.0, 0.0, 1.0));
// scratchU8Array and scratchF32Array are views into the same buffer
const scratchF32Array = new Float32Array(1);
const scratchU8Array = new Uint8Array(scratchF32Array.buffer);
const testU32 = new Uint32Array([0x11223344]);
const testU8 = new Uint8Array(testU32.buffer);
const littleEndian = testU8[0] === 0x44;
const distanceScratch = new Vector4();
const lerpScratch$1 = new Vector4();
const mostOrthogonalAxisScratch = new Vector4();

class Matrix4 {
    /**
   * A 4x4 matrix, indexable as a column-major order array.
   * Constructor parameters are in row-major order for code readability.
   * @alias Matrix4
   * @constructor
   * @implements {ArrayLike<number>}
   *
   * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
   * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
   * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
   * @param {Number} [column3Row0=0.0] The value for column 3, row 0.
   * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
   * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
   * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
   * @param {Number} [column3Row1=0.0] The value for column 3, row 1.
   * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
   * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
   * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
   * @param {Number} [column3Row2=0.0] The value for column 3, row 2.
   * @param {Number} [column0Row3=0.0] The value for column 0, row 3.
   * @param {Number} [column1Row3=0.0] The value for column 1, row 3.
   * @param {Number} [column2Row3=0.0] The value for column 2, row 3.
   * @param {Number} [column3Row3=0.0] The value for column 3, row 3.
   *
   * @see Matrix4.fromArray
   * @see Matrix4.fromColumnMajorArray
   * @see Matrix4.fromRowMajorArray
   * @see Matrix4.fromRotationTranslation
   * @see Matrix4.fromTranslationQuaternionRotationScale
   * @see Matrix4.fromTranslationRotationScale
   * @see Matrix4.fromTranslation
   * @see Matrix4.fromScale
   * @see Matrix4.fromUniformScale
   * @see Matrix4.fromRotation
   * @see Matrix4.fromCamera
   * @see Matrix4.computePerspectiveFieldOfView
   * @see Matrix4.computeOrthographicOffCenter
   * @see Matrix4.computePerspectiveOffCenter
   * @see Matrix4.computeInfinitePerspectiveOffCenter
   * @see Matrix4.computeViewportTransformation
   * @see Matrix4.computeView
   * @see Matrix2
   * @see Matrix3
   * @see Packable
   */
    constructor(column0Row0 = 0, column1Row0 = 0, column2Row0 = 0, column3Row0 = 0, column0Row1 = 0, column1Row1 = 0, column2Row1 = 0, column3Row1 = 0, column0Row2 = 0, column1Row2 = 0, column2Row2 = 0, column3Row2 = 0, column0Row3 = 0, column1Row3 = 0, column2Row3 = 0, column3Row3 = 0) {
        this[0] = column0Row0;
        this[1] = column0Row1;
        this[2] = column0Row2;
        this[3] = column0Row3;
        this[4] = column1Row0;
        this[5] = column1Row1;
        this[6] = column1Row2;
        this[7] = column1Row3;
        this[8] = column2Row0;
        this[9] = column2Row1;
        this[10] = column2Row2;
        this[11] = column2Row3;
        this[12] = column3Row0;
        this[13] = column3Row1;
        this[14] = column3Row2;
        this[15] = column3Row3;
    }
    get length() {
        return Matrix4.packedLength;
    }
    /**
   * Duplicates the provided Matrix4 instance.
   *
   * @param {Matrix4} [result] The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided.
   */
    clone(result) {
        return Matrix4.clone(this, result);
    }
    ;
    /**
     * Compares this matrix to the provided matrix componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Matrix4} [right] The right hand side matrix.
     * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Matrix4.equals(this, right);
    }
    ;
    /**
     * Compares this matrix to the provided matrix componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Matrix4} [right] The right hand side matrix.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, epsilon) {
        return Matrix4.equalsEpsilon(this, right, epsilon);
    }
    ;
    /**
     * Computes a string representing this Matrix with each row being
     * on a separate line and in the format '(column0, column1, column2, column3)'.
     *
     * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1, column2, column3)'.
     */
    toString() {
        return (`(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n` +
            `(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n` +
            `(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n` +
            `(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`);
    }
    ;
    /**
     * Stores the provided instance into the provided array.
     *
     * @param {Matrix4} value The value to pack.
     * @param {Number[]} array The array to pack into.
     * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
     *
     * @returns {Number[]} The array that was packed into
     */
    static pack(value, array, startingIndex) {
        startingIndex = defaultValue(startingIndex, 0);
        array[startingIndex++] = value[0];
        array[startingIndex++] = value[1];
        array[startingIndex++] = value[2];
        array[startingIndex++] = value[3];
        array[startingIndex++] = value[4];
        array[startingIndex++] = value[5];
        array[startingIndex++] = value[6];
        array[startingIndex++] = value[7];
        array[startingIndex++] = value[8];
        array[startingIndex++] = value[9];
        array[startingIndex++] = value[10];
        array[startingIndex++] = value[11];
        array[startingIndex++] = value[12];
        array[startingIndex++] = value[13];
        array[startingIndex++] = value[14];
        array[startingIndex] = value[15];
        return array;
    }
    ;
    /**
     * Duplicates a Matrix4 instance.
     *
     * @param {Matrix4} matrix The matrix to duplicate.
     * @param {Matrix4} [result] The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided. (Returns undefined if matrix is undefined)
     */
    static clone(matrix, result) {
        if (!defined(matrix)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Matrix4(matrix[0], matrix[4], matrix[8], matrix[12], matrix[1], matrix[5], matrix[9], matrix[13], matrix[2], matrix[6], matrix[10], matrix[14], matrix[3], matrix[7], matrix[11], matrix[15]);
        }
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        result[4] = matrix[4];
        result[5] = matrix[5];
        result[6] = matrix[6];
        result[7] = matrix[7];
        result[8] = matrix[8];
        result[9] = matrix[9];
        result[10] = matrix[10];
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Creates a Matrix4 from 16 consecutive elements in an array.
     * @function
     *
     * @param {Number[]} array The array whose 16 consecutive elements correspond to the positions of the matrix.  Assumes column-major order.
     * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to first column first row position in the matrix.
     * @param {Matrix4} [result] The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided.
     *
     * @example
     * // Create the Matrix4:
     * // [1.0, 2.0, 3.0, 4.0]
     * // [1.0, 2.0, 3.0, 4.0]
     * // [1.0, 2.0, 3.0, 4.0]
     * // [1.0, 2.0, 3.0, 4.0]
     *
     * const v = [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0, 4.0];
     * const m = Cesium.Matrix4.fromArray(v);
     *
     * // Create same Matrix4 with using an offset into an array
     * const v2 = [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0, 4.0];
     * const m2 = Cesium.Matrix4.fromArray(v2, 2);
     */
    /**
     * Computes a Matrix4 instance from a column-major order array.
     *
     * @param {Number[]} values The column-major order array.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     */
    static fromColumnMajorArray(values, result) {
        return Matrix4.clone(values, result);
    }
    ;
    /**
     * Computes a Matrix4 instance from a row-major order array.
     * The resulting matrix will be in column-major order.
     *
     * @param {Number[]} values The row-major order array.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     */
    static fromRowMajorArray(values, result) {
        if (!defined(result)) {
            return new Matrix4(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15]);
        }
        result[0] = values[0];
        result[1] = values[4];
        result[2] = values[8];
        result[3] = values[12];
        result[4] = values[1];
        result[5] = values[5];
        result[6] = values[9];
        result[7] = values[13];
        result[8] = values[2];
        result[9] = values[6];
        result[10] = values[10];
        result[11] = values[14];
        result[12] = values[3];
        result[13] = values[7];
        result[14] = values[11];
        result[15] = values[15];
        return result;
    }
    ;
    /**
     * Computes a Matrix4 instance from a Matrix3 representing the rotation
     * and a Vector3 representing the translation.
     *
     * @param {Matrix3} rotation The upper left portion of the matrix representing the rotation.
     * @param {Vector3} [translation=Vector3.ZERO] The upper right portion of the matrix representing the translation.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     */
    static fromRotationTranslation(rotation, translation, result) {
        translation = defaultValue(translation, Vector3.ZERO);
        if (!defined(result)) {
            return new Matrix4(rotation[0], rotation[3], rotation[6], translation.x, rotation[1], rotation[4], rotation[7], translation.y, rotation[2], rotation[5], rotation[8], translation.z, 0.0, 0.0, 0.0, 1.0);
        }
        result[0] = rotation[0];
        result[1] = rotation[1];
        result[2] = rotation[2];
        result[3] = 0.0;
        result[4] = rotation[3];
        result[5] = rotation[4];
        result[6] = rotation[5];
        result[7] = 0.0;
        result[8] = rotation[6];
        result[9] = rotation[7];
        result[10] = rotation[8];
        result[11] = 0.0;
        result[12] = translation.x;
        result[13] = translation.y;
        result[14] = translation.z;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Computes a Matrix4 instance from a translation, rotation, and scale (TRS)
     * representation with the rotation represented as a quaternion.
     *
     * @param {Vector3} translation The translation transformation.
     * @param {Quaternion} rotation The rotation transformation.
     * @param {Vector3} scale The non-uniform scale transformation.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     *
     * @example
     * const result = Cesium.Matrix4.fromTranslationQuaternionRotationScale(
     *   new Cesium.Vector3(1.0, 2.0, 3.0), // translation
     *   Cesium.Quaternion.IDENTITY,           // rotation
     *   new Cesium.Vector3(7.0, 8.0, 9.0), // scale
     *   result);
     */
    static fromTranslationQuaternionRotationScale(translation, rotation, scale, result) {
        if (!defined(result)) {
            result = new Matrix4();
        }
        const scaleX = scale.x;
        const scaleY = scale.y;
        const scaleZ = scale.z;
        const x2 = rotation.x * rotation.x;
        const xy = rotation.x * rotation.y;
        const xz = rotation.x * rotation.z;
        const xw = rotation.x * rotation.w;
        const y2 = rotation.y * rotation.y;
        const yz = rotation.y * rotation.z;
        const yw = rotation.y * rotation.w;
        const z2 = rotation.z * rotation.z;
        const zw = rotation.z * rotation.w;
        const w2 = rotation.w * rotation.w;
        const m00 = x2 - y2 - z2 + w2;
        const m01 = 2.0 * (xy - zw);
        const m02 = 2.0 * (xz + yw);
        const m10 = 2.0 * (xy + zw);
        const m11 = -x2 + y2 - z2 + w2;
        const m12 = 2.0 * (yz - xw);
        const m20 = 2.0 * (xz - yw);
        const m21 = 2.0 * (yz + xw);
        const m22 = -x2 - y2 + z2 + w2;
        result[0] = m00 * scaleX;
        result[1] = m10 * scaleX;
        result[2] = m20 * scaleX;
        result[3] = 0.0;
        result[4] = m01 * scaleY;
        result[5] = m11 * scaleY;
        result[6] = m21 * scaleY;
        result[7] = 0.0;
        result[8] = m02 * scaleZ;
        result[9] = m12 * scaleZ;
        result[10] = m22 * scaleZ;
        result[11] = 0.0;
        result[12] = translation.x;
        result[13] = translation.y;
        result[14] = translation.z;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Creates a Matrix4 instance from a {@link TranslationRotationScale} instance.
     *
     * @param {TranslationRotationScale} translationRotationScale The instance.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     */
    static fromTranslationRotationScale(translationRotationScale, result) {
        return Matrix4.fromTranslationQuaternionRotationScale(translationRotationScale.translation, translationRotationScale.rotation, translationRotationScale.scale, result);
    }
    ;
    /**
     * Creates a Matrix4 instance from a Vector3 representing the translation.
     *
     * @param {Vector3} translation The upper right portion of the matrix representing the translation.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     *
     * @see Matrix4.multiplyByTranslation
     */
    static fromTranslation(translation, result) {
        return Matrix4.fromRotationTranslation(Matrix3.IDENTITY, translation, result);
    }
    ;
    /**
     * Computes a Matrix4 instance representing a non-uniform scale.
     *
     * @param {Vector3} scale The x, y, and z scale factors.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [7.0, 0.0, 0.0, 0.0]
     * //   [0.0, 8.0, 0.0, 0.0]
     * //   [0.0, 0.0, 9.0, 0.0]
     * //   [0.0, 0.0, 0.0, 1.0]
     * const m = Cesium.Matrix4.fromScale(new Cesium.Vector3(7.0, 8.0, 9.0));
     */
    static fromScale(scale, result) {
        if (!defined(result)) {
            return new Matrix4(scale.x, 0.0, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, 0.0, scale.z, 0.0, 0.0, 0.0, 0.0, 1.0);
        }
        result[0] = scale.x;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = 0.0;
        result[4] = 0.0;
        result[5] = scale.y;
        result[6] = 0.0;
        result[7] = 0.0;
        result[8] = 0.0;
        result[9] = 0.0;
        result[10] = scale.z;
        result[11] = 0.0;
        result[12] = 0.0;
        result[13] = 0.0;
        result[14] = 0.0;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Computes a Matrix4 instance representing a uniform scale.
     *
     * @param {Number} scale The uniform scale factor.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     *
     * @example
     * // Creates
     * //   [2.0, 0.0, 0.0, 0.0]
     * //   [0.0, 2.0, 0.0, 0.0]
     * //   [0.0, 0.0, 2.0, 0.0]
     * //   [0.0, 0.0, 0.0, 1.0]
     * const m = Cesium.Matrix4.fromUniformScale(2.0);
     */
    static fromUniformScale(scale, result) {
        if (!defined(result)) {
            return new Matrix4(scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, 1.0);
        }
        result[0] = scale;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = 0.0;
        result[4] = 0.0;
        result[5] = scale;
        result[6] = 0.0;
        result[7] = 0.0;
        result[8] = 0.0;
        result[9] = 0.0;
        result[10] = scale;
        result[11] = 0.0;
        result[12] = 0.0;
        result[13] = 0.0;
        result[14] = 0.0;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Creates a rotation matrix.
     *
     * @param {Matrix3} rotation The rotation matrix.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     */
    static fromRotation(rotation, result) {
        if (!defined(result)) {
            result = new Matrix4();
        }
        result[0] = rotation[0];
        result[1] = rotation[1];
        result[2] = rotation[2];
        result[3] = 0.0;
        result[4] = rotation[3];
        result[5] = rotation[4];
        result[6] = rotation[5];
        result[7] = 0.0;
        result[8] = rotation[6];
        result[9] = rotation[7];
        result[10] = rotation[8];
        result[11] = 0.0;
        result[12] = 0.0;
        result[13] = 0.0;
        result[14] = 0.0;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Computes a Matrix4 instance from a Camera.
     *
     * @param {Camera} camera The camera to use.
     * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
     * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
     */
    static fromCamera(camera, result) {
        const position = camera.position;
        const direction = camera.direction;
        const up = camera.up;
        Vector3.normalize(direction, fromCameraF);
        Vector3.normalize(Vector3.cross(fromCameraF, up, fromCameraR), fromCameraR);
        Vector3.normalize(Vector3.cross(fromCameraR, fromCameraF, fromCameraU), fromCameraU);
        const sX = fromCameraR.x;
        const sY = fromCameraR.y;
        const sZ = fromCameraR.z;
        const fX = fromCameraF.x;
        const fY = fromCameraF.y;
        const fZ = fromCameraF.z;
        const uX = fromCameraU.x;
        const uY = fromCameraU.y;
        const uZ = fromCameraU.z;
        const positionX = position.x;
        const positionY = position.y;
        const positionZ = position.z;
        const t0 = sX * -positionX + sY * -positionY + sZ * -positionZ;
        const t1 = uX * -positionX + uY * -positionY + uZ * -positionZ;
        const t2 = fX * positionX + fY * positionY + fZ * positionZ;
        // The code below this comment is an optimized
        // version of the commented lines.
        // Rather that create two matrices and then multiply,
        // we just bake in the multiplcation as part of creation.
        // const rotation = new Matrix4(
        //                 sX,  sY,  sZ, 0.0,
        //                 uX,  uY,  uZ, 0.0,
        //                -fX, -fY, -fZ, 0.0,
        //                 0.0,  0.0,  0.0, 1.0);
        // const translation = new Matrix4(
        //                 1.0, 0.0, 0.0, -position.x,
        //                 0.0, 1.0, 0.0, -position.y,
        //                 0.0, 0.0, 1.0, -position.z,
        //                 0.0, 0.0, 0.0, 1.0);
        // return rotation.multiply(translation);
        if (!defined(result)) {
            return new Matrix4(sX, sY, sZ, t0, uX, uY, uZ, t1, -fX, -fY, -fZ, t2, 0.0, 0.0, 0.0, 1.0);
        }
        result[0] = sX;
        result[1] = uX;
        result[2] = -fX;
        result[3] = 0.0;
        result[4] = sY;
        result[5] = uY;
        result[6] = -fY;
        result[7] = 0.0;
        result[8] = sZ;
        result[9] = uZ;
        result[10] = -fZ;
        result[11] = 0.0;
        result[12] = t0;
        result[13] = t1;
        result[14] = t2;
        result[15] = 1.0;
        return result;
    }
    ;
    static makePerspective(left, right, top, bottom, near, far) {
        // from three.js
        const matrix = new Matrix4();
        const x = 2 * near / (right - left);
        const y = 2 * near / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = -(far + near) / (far - near);
        const d = -2 * far * near / (far - near);
        matrix[0] = x;
        matrix[4] = 0;
        matrix[8] = a;
        matrix[12] = 0;
        matrix[1] = 0;
        matrix[5] = y;
        matrix[9] = b;
        matrix[13] = 0;
        matrix[2] = 0;
        matrix[6] = 0;
        matrix[10] = c;
        matrix[14] = d;
        matrix[3] = 0;
        matrix[7] = 0;
        matrix[11] = -1;
        matrix[15] = 0;
        return matrix;
    }
    static makeOrthographic(left, right, top, bottom, near, far) {
        const matrix = new Matrix4();
        const w = 1.0 / (right - left);
        const h = 1.0 / (top - bottom);
        const p = 1.0 / (far - near);
        const x = (right + left) * w;
        const y = (top + bottom) * h;
        const z = (far + near) * p;
        matrix[0] = 2 * w;
        matrix[4] = 0;
        matrix[8] = 0;
        matrix[12] = -x;
        matrix[1] = 0;
        matrix[5] = 2 * h;
        matrix[9] = 0;
        matrix[13] = -y;
        matrix[2] = 0;
        matrix[6] = 0;
        matrix[10] = -2 * p;
        matrix[14] = -z;
        matrix[3] = 0;
        matrix[7] = 0;
        matrix[11] = 0;
        matrix[15] = 1;
        return matrix;
    }
    /**
     * Computes a Matrix4 instance that transforms from normalized device coordinates to window coordinates.
     *
     * @param {Object} [viewport = { x : 0.0, y : 0.0, width : 0.0, height : 0.0 }] The viewport's corners as shown in Example 1.
     * @param {Number} [nearDepthRange=0.0] The near plane distance in window coordinates.
     * @param {Number} [farDepthRange=1.0] The far plane distance in window coordinates.
     * @param {Matrix4} [result] The object in which the result will be stored.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * // Create viewport transformation using an explicit viewport and depth range.
     * const m = Cesium.Matrix4.computeViewportTransformation({
     *     x : 0.0,
     *     y : 0.0,
     *     width : 1024.0,
     *     height : 768.0
     * }, 0.0, 1.0, new Cesium.Matrix4());
     */
    static computeViewportTransformation(viewport, nearDepthRange, farDepthRange, result) {
        if (!defined(result)) {
            result = new Matrix4();
        }
        viewport = defaultValue(viewport, defaultValue.EMPTY_OBJECT);
        const x = defaultValue(viewport.x, 0.0);
        const y = defaultValue(viewport.y, 0.0);
        const width = defaultValue(viewport.width, 0.0);
        const height = defaultValue(viewport.height, 0.0);
        nearDepthRange = defaultValue(nearDepthRange, 0.0);
        farDepthRange = defaultValue(farDepthRange, 1.0);
        const halfWidth = width * 0.5;
        const halfHeight = height * 0.5;
        const halfDepth = (farDepthRange - nearDepthRange) * 0.5;
        const column0Row0 = halfWidth;
        const column1Row1 = halfHeight;
        const column2Row2 = halfDepth;
        const column3Row0 = x + halfWidth;
        const column3Row1 = y + halfHeight;
        const column3Row2 = nearDepthRange + halfDepth;
        const column3Row3 = 1.0;
        result[0] = column0Row0;
        result[1] = 0.0;
        result[2] = 0.0;
        result[3] = 0.0;
        result[4] = 0.0;
        result[5] = column1Row1;
        result[6] = 0.0;
        result[7] = 0.0;
        result[8] = 0.0;
        result[9] = 0.0;
        result[10] = column2Row2;
        result[11] = 0.0;
        result[12] = column3Row0;
        result[13] = column3Row1;
        result[14] = column3Row2;
        result[15] = column3Row3;
        return result;
    }
    ;
    /**
     * Computes a Matrix4 instance that transforms from world space to view space.
     *
     * @param {Vector3} position The position of the camera.
     * @param {Vector3} direction The forward direction.
     * @param {Vector3} up The up direction.
     * @param {Vector3} right The right direction.
     * @param {Matrix4} result The object in which the result will be stored.
     * @returns {Matrix4} The modified result parameter.
     */
    static computeView(position, direction, up, right, result) {
        result[0] = right.x;
        result[1] = up.x;
        result[2] = direction.x;
        result[3] = 0.0;
        result[4] = right.y;
        result[5] = up.y;
        result[6] = direction.y;
        result[7] = 0.0;
        result[8] = right.z;
        result[9] = up.z;
        result[10] = direction.z;
        result[11] = 0.0;
        result[12] = -Vector3.dot(right, position);
        result[13] = -Vector3.dot(up, position);
        result[14] = -Vector3.dot(direction, position);
        result[15] = 1.0;
        return result;
    }
    ;
    toArray() {
        const result = [];
        Matrix4.toArray(this, result);
        return result;
    }
    /**
     * Computes an Array from the provided Matrix4 instance.
     * The array will be in column-major order.
     *
     * @param {Matrix4} matrix The matrix to use..
     * @param {Number[]} [result] The Array onto which to store the result.
     * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
     *
     * @example
     * //create an array from an instance of Matrix4
     * // m = [10.0, 14.0, 18.0, 22.0]
     * //     [11.0, 15.0, 19.0, 23.0]
     * //     [12.0, 16.0, 20.0, 24.0]
     * //     [13.0, 17.0, 21.0, 25.0]
     * const a = Cesium.Matrix4.toArray(m);
     *
     * // m remains the same
     * //creates a = [10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0]
     */
    static toArray(matrix, result) {
        if (!defined(result)) {
            return [
                matrix[0],
                matrix[1],
                matrix[2],
                matrix[3],
                matrix[4],
                matrix[5],
                matrix[6],
                matrix[7],
                matrix[8],
                matrix[9],
                matrix[10],
                matrix[11],
                matrix[12],
                matrix[13],
                matrix[14],
                matrix[15],
            ];
        }
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        result[4] = matrix[4];
        result[5] = matrix[5];
        result[6] = matrix[6];
        result[7] = matrix[7];
        result[8] = matrix[8];
        result[9] = matrix[9];
        result[10] = matrix[10];
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Computes the array index of the element at the provided row and column.
     *
     * @param {Number} row The zero-based index of the row.
     * @param {Number} column The zero-based index of the column.
     * @returns {Number} The index of the element at the provided row and column.
     *
     * @exception {Error} row must be 0, 1, 2, or 3.
     * @exception {Error} column must be 0, 1, 2, or 3.
     *
     * @example
     * const myMatrix = new Cesium.Matrix4();
     * const column1Row0Index = Cesium.Matrix4.getElementIndex(1, 0);
     * const column1Row0 = myMatrix[column1Row0Index];
     * myMatrix[column1Row0Index] = 10.0;
     */
    static getElementIndex(column, row) {
        return column * 4 + row;
    }
    ;
    /**
     * Retrieves a copy of the matrix column at the provided index as a Vector4 instance.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Number} index The zero-based index of the column to retrieve.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, 2, or 3.
     *
     * @example
     * //returns a Vector4 instance with values from the specified column
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * //Example 1: Creates an instance of Cartesian
     * const a = Cesium.Matrix4.getColumn(m, 2, new Cesium.Vector4());
     *
     * @example
     * //Example 2: Sets values for Cartesian instance
     * const a = new Cesium.Vector4();
     * Cesium.Matrix4.getColumn(m, 2, a);
     *
     * // a.x = 12.0; a.y = 16.0; a.z = 20.0; a.w = 24.0;
     */
    static getColumn(matrix, index, result) {
        const startIndex = index * 4;
        const x = matrix[startIndex];
        const y = matrix[startIndex + 1];
        const z = matrix[startIndex + 2];
        const w = matrix[startIndex + 3];
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the specified column in the provided matrix with the provided Vector4 instance.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Number} index The zero-based index of the column to set.
     * @param {Vector4} cartesian The Cartesian whose values will be assigned to the specified column.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, 2, or 3.
     *
     * @example
     * //creates a new Matrix4 instance with new column values from the Vector4 instance
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * const a = Cesium.Matrix4.setColumn(m, 2, new Cesium.Vector4(99.0, 98.0, 97.0, 96.0), new Cesium.Matrix4());
     *
     * // m remains the same
     * // a = [10.0, 11.0, 99.0, 13.0]
     * //     [14.0, 15.0, 98.0, 17.0]
     * //     [18.0, 19.0, 97.0, 21.0]
     * //     [22.0, 23.0, 96.0, 25.0]
     */
    static setColumn(matrix, index, cartesian, result) {
        result = Matrix4.clone(matrix, result);
        const startIndex = index * 4;
        result[startIndex] = cartesian.x;
        result[startIndex + 1] = cartesian.y;
        result[startIndex + 2] = cartesian.z;
        result[startIndex + 3] = cartesian.w;
        return result;
    }
    ;
    /**
     * Retrieves a copy of the matrix row at the provided index as a Vector4 instance.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Number} index The zero-based index of the row to retrieve.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, 2, or 3.
     *
     * @example
     * //returns a Vector4 instance with values from the specified column
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * //Example 1: Returns an instance of Cartesian
     * const a = Cesium.Matrix4.getRow(m, 2, new Cesium.Vector4());
     *
     * @example
     * //Example 2: Sets values for a Cartesian instance
     * const a = new Cesium.Vector4();
     * Cesium.Matrix4.getRow(m, 2, a);
     *
     * // a.x = 18.0; a.y = 19.0; a.z = 20.0; a.w = 21.0;
     */
    static getRow(matrix, index, result) {
        const x = matrix[index];
        const y = matrix[index + 4];
        const z = matrix[index + 8];
        const w = matrix[index + 12];
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the specified row in the provided matrix with the provided Vector4 instance.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Number} index The zero-based index of the row to set.
     * @param {Vector4} cartesian The Cartesian whose values will be assigned to the specified row.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @exception {Error} index must be 0, 1, 2, or 3.
     *
     * @example
     * //create a new Matrix4 instance with new row values from the Vector4 instance
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * const a = Cesium.Matrix4.setRow(m, 2, new Cesium.Vector4(99.0, 98.0, 97.0, 96.0), new Cesium.Matrix4());
     *
     * // m remains the same
     * // a = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [99.0, 98.0, 97.0, 96.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     */
    static setRow(matrix, index, cartesian, result) {
        result = Matrix4.clone(matrix, result);
        result[index] = cartesian.x;
        result[index + 4] = cartesian.y;
        result[index + 8] = cartesian.z;
        result[index + 12] = cartesian.w;
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the translation in the rightmost column of the provided
     * matrix with the provided translation. This assumes the matrix is an affine transformation.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Vector3} translation The translation that replaces the translation of the provided matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static setTranslation(matrix, translation, result) {
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        result[4] = matrix[4];
        result[5] = matrix[5];
        result[6] = matrix[6];
        result[7] = matrix[7];
        result[8] = matrix[8];
        result[9] = matrix[9];
        result[10] = matrix[10];
        result[11] = matrix[11];
        result[12] = translation.x;
        result[13] = translation.y;
        result[14] = translation.z;
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the scale with the provided scale.
     * This assumes the matrix is an affine transformation.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Vector3} scale The scale that replaces the scale of the provided matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @see Matrix4.setUniformScale
     * @see Matrix4.fromScale
     * @see Matrix4.fromUniformScale
     * @see Matrix4.multiplyByScale
     * @see Matrix4.multiplyByUniformScale
     * @see Matrix4.getScale
     */
    static setScale(matrix, scale, result) {
        const existingScale = Matrix4.getScale(matrix, scaleScratch1);
        const scaleRatioX = scale.x / existingScale.x;
        const scaleRatioY = scale.y / existingScale.y;
        const scaleRatioZ = scale.z / existingScale.z;
        result[0] = matrix[0] * scaleRatioX;
        result[1] = matrix[1] * scaleRatioX;
        result[2] = matrix[2] * scaleRatioX;
        result[3] = matrix[3];
        result[4] = matrix[4] * scaleRatioY;
        result[5] = matrix[5] * scaleRatioY;
        result[6] = matrix[6] * scaleRatioY;
        result[7] = matrix[7];
        result[8] = matrix[8] * scaleRatioZ;
        result[9] = matrix[9] * scaleRatioZ;
        result[10] = matrix[10] * scaleRatioZ;
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Computes a new matrix that replaces the scale with the provided uniform scale.
     * This assumes the matrix is an affine transformation.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Number} scale The uniform scale that replaces the scale of the provided matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @see Matrix4.setScale
     * @see Matrix4.fromScale
     * @see Matrix4.fromUniformScale
     * @see Matrix4.multiplyByScale
     * @see Matrix4.multiplyByUniformScale
     * @see Matrix4.getScale
     */
    static setUniformScale(matrix, scale, result) {
        const existingScale = Matrix4.getScale(matrix, scaleScratch2);
        const scaleRatioX = scale / existingScale.x;
        const scaleRatioY = scale / existingScale.y;
        const scaleRatioZ = scale / existingScale.z;
        result[0] = matrix[0] * scaleRatioX;
        result[1] = matrix[1] * scaleRatioX;
        result[2] = matrix[2] * scaleRatioX;
        result[3] = matrix[3];
        result[4] = matrix[4] * scaleRatioY;
        result[5] = matrix[5] * scaleRatioY;
        result[6] = matrix[6] * scaleRatioY;
        result[7] = matrix[7];
        result[8] = matrix[8] * scaleRatioZ;
        result[9] = matrix[9] * scaleRatioZ;
        result[10] = matrix[10] * scaleRatioZ;
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Extracts the non-uniform scale assuming the matrix is an affine transformation.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter
     *
     * @see Matrix4.multiplyByScale
     * @see Matrix4.multiplyByUniformScale
     * @see Matrix4.fromScale
     * @see Matrix4.fromUniformScale
     * @see Matrix4.setScale
     * @see Matrix4.setUniformScale
     */
    static getScale(matrix, result) {
        result.x = Vector3.magnitude(Vector3.fromElements(matrix[0], matrix[1], matrix[2], scratchColumn));
        result.y = Vector3.magnitude(Vector3.fromElements(matrix[4], matrix[5], matrix[6], scratchColumn));
        result.z = Vector3.magnitude(Vector3.fromElements(matrix[8], matrix[9], matrix[10], scratchColumn));
        return result;
    }
    ;
    /**
     * Computes the maximum scale assuming the matrix is an affine transformation.
     * The maximum scale is the maximum length of the column vectors in the upper-left
     * 3x3 matrix.
     *
     * @param {Matrix4} matrix The matrix.
     * @returns {Number} The maximum scale.
     */
    static getMaximumScale(matrix) {
        Matrix4.getScale(matrix, scaleScratch3);
        return Vector3.maximumComponent(scaleScratch3);
    }
    ;
    /**
     * Sets the rotation assuming the matrix is an affine transformation.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Matrix3} rotation The rotation matrix.
     * @returns {Matrix4} The modified result parameter.
     *
     * @see Matrix4.fromRotation
     * @see Matrix4.getRotation
     */
    static setRotation(matrix, rotation, result) {
        const scale = Matrix4.getScale(matrix, scaleScratch4);
        result[0] = rotation[0] * scale.x;
        result[1] = rotation[1] * scale.x;
        result[2] = rotation[2] * scale.x;
        result[3] = matrix[3];
        result[4] = rotation[3] * scale.y;
        result[5] = rotation[4] * scale.y;
        result[6] = rotation[5] * scale.y;
        result[7] = matrix[7];
        result[8] = rotation[6] * scale.z;
        result[9] = rotation[7] * scale.z;
        result[10] = rotation[8] * scale.z;
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Extracts the rotation matrix assuming the matrix is an affine transformation.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @see Matrix4.setRotation
     * @see Matrix4.fromRotation
     */
    static getRotation(matrix, result) {
        const scale = Matrix4.getScale(matrix, scaleScratch5);
        result[0] = matrix[0] / scale.x;
        result[1] = matrix[1] / scale.x;
        result[2] = matrix[2] / scale.x;
        result[3] = matrix[4] / scale.y;
        result[4] = matrix[5] / scale.y;
        result[5] = matrix[6] / scale.y;
        result[6] = matrix[8] / scale.z;
        result[7] = matrix[9] / scale.z;
        result[8] = matrix[10] / scale.z;
        return result;
    }
    ;
    /**
     * Computes the product of two matrices.
     *
     * @param {Matrix4} left The first matrix.
     * @param {Matrix4} right The second matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static multiply(left, right, result) {
        const left0 = left[0];
        const left1 = left[1];
        const left2 = left[2];
        const left3 = left[3];
        const left4 = left[4];
        const left5 = left[5];
        const left6 = left[6];
        const left7 = left[7];
        const left8 = left[8];
        const left9 = left[9];
        const left10 = left[10];
        const left11 = left[11];
        const left12 = left[12];
        const left13 = left[13];
        const left14 = left[14];
        const left15 = left[15];
        const right0 = right[0];
        const right1 = right[1];
        const right2 = right[2];
        const right3 = right[3];
        const right4 = right[4];
        const right5 = right[5];
        const right6 = right[6];
        const right7 = right[7];
        const right8 = right[8];
        const right9 = right[9];
        const right10 = right[10];
        const right11 = right[11];
        const right12 = right[12];
        const right13 = right[13];
        const right14 = right[14];
        const right15 = right[15];
        const column0Row0 = left0 * right0 + left4 * right1 + left8 * right2 + left12 * right3;
        const column0Row1 = left1 * right0 + left5 * right1 + left9 * right2 + left13 * right3;
        const column0Row2 = left2 * right0 + left6 * right1 + left10 * right2 + left14 * right3;
        const column0Row3 = left3 * right0 + left7 * right1 + left11 * right2 + left15 * right3;
        const column1Row0 = left0 * right4 + left4 * right5 + left8 * right6 + left12 * right7;
        const column1Row1 = left1 * right4 + left5 * right5 + left9 * right6 + left13 * right7;
        const column1Row2 = left2 * right4 + left6 * right5 + left10 * right6 + left14 * right7;
        const column1Row3 = left3 * right4 + left7 * right5 + left11 * right6 + left15 * right7;
        const column2Row0 = left0 * right8 + left4 * right9 + left8 * right10 + left12 * right11;
        const column2Row1 = left1 * right8 + left5 * right9 + left9 * right10 + left13 * right11;
        const column2Row2 = left2 * right8 + left6 * right9 + left10 * right10 + left14 * right11;
        const column2Row3 = left3 * right8 + left7 * right9 + left11 * right10 + left15 * right11;
        const column3Row0 = left0 * right12 + left4 * right13 + left8 * right14 + left12 * right15;
        const column3Row1 = left1 * right12 + left5 * right13 + left9 * right14 + left13 * right15;
        const column3Row2 = left2 * right12 + left6 * right13 + left10 * right14 + left14 * right15;
        const column3Row3 = left3 * right12 + left7 * right13 + left11 * right14 + left15 * right15;
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column0Row2;
        result[3] = column0Row3;
        result[4] = column1Row0;
        result[5] = column1Row1;
        result[6] = column1Row2;
        result[7] = column1Row3;
        result[8] = column2Row0;
        result[9] = column2Row1;
        result[10] = column2Row2;
        result[11] = column2Row3;
        result[12] = column3Row0;
        result[13] = column3Row1;
        result[14] = column3Row2;
        result[15] = column3Row3;
        return result;
    }
    ;
    /**
     * Computes the sum of two matrices.
     *
     * @param {Matrix4} left The first matrix.
     * @param {Matrix4} right The second matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static add(left, right, result) {
        result[0] = left[0] + right[0];
        result[1] = left[1] + right[1];
        result[2] = left[2] + right[2];
        result[3] = left[3] + right[3];
        result[4] = left[4] + right[4];
        result[5] = left[5] + right[5];
        result[6] = left[6] + right[6];
        result[7] = left[7] + right[7];
        result[8] = left[8] + right[8];
        result[9] = left[9] + right[9];
        result[10] = left[10] + right[10];
        result[11] = left[11] + right[11];
        result[12] = left[12] + right[12];
        result[13] = left[13] + right[13];
        result[14] = left[14] + right[14];
        result[15] = left[15] + right[15];
        return result;
    }
    ;
    /**
     * Computes the difference of two matrices.
     *
     * @param {Matrix4} left The first matrix.
     * @param {Matrix4} right The second matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static subtract(left, right, result) {
        result[0] = left[0] - right[0];
        result[1] = left[1] - right[1];
        result[2] = left[2] - right[2];
        result[3] = left[3] - right[3];
        result[4] = left[4] - right[4];
        result[5] = left[5] - right[5];
        result[6] = left[6] - right[6];
        result[7] = left[7] - right[7];
        result[8] = left[8] - right[8];
        result[9] = left[9] - right[9];
        result[10] = left[10] - right[10];
        result[11] = left[11] - right[11];
        result[12] = left[12] - right[12];
        result[13] = left[13] - right[13];
        result[14] = left[14] - right[14];
        result[15] = left[15] - right[15];
        return result;
    }
    ;
    /**
     * Computes the product of two matrices assuming the matrices are affine transformation matrices,
     * where the upper left 3x3 elements are any matrix, and
     * the upper three elements in the fourth column are the translation.
     * The bottom row is assumed to be [0, 0, 0, 1].
     * The matrix is not verified to be in the proper form.
     * This method is faster than computing the product for general 4x4
     * matrices using {@link Matrix4.multiply}.
     *
     * @param {Matrix4} left The first matrix.
     * @param {Matrix4} right The second matrix.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * const m1 = new Cesium.Matrix4(1.0, 6.0, 7.0, 0.0, 2.0, 5.0, 8.0, 0.0, 3.0, 4.0, 9.0, 0.0, 0.0, 0.0, 0.0, 1.0);
     * const m2 = Cesium.Transforms.eastNorthUpToFixedFrame(new Cesium.Vector3(1.0, 1.0, 1.0));
     * const m3 = Cesium.Matrix4.multiplyTransformation(m1, m2, new Cesium.Matrix4());
     */
    static multiplyTransformation(left, right, result) {
        const left0 = left[0];
        const left1 = left[1];
        const left2 = left[2];
        const left4 = left[4];
        const left5 = left[5];
        const left6 = left[6];
        const left8 = left[8];
        const left9 = left[9];
        const left10 = left[10];
        const left12 = left[12];
        const left13 = left[13];
        const left14 = left[14];
        const right0 = right[0];
        const right1 = right[1];
        const right2 = right[2];
        const right4 = right[4];
        const right5 = right[5];
        const right6 = right[6];
        const right8 = right[8];
        const right9 = right[9];
        const right10 = right[10];
        const right12 = right[12];
        const right13 = right[13];
        const right14 = right[14];
        const column0Row0 = left0 * right0 + left4 * right1 + left8 * right2;
        const column0Row1 = left1 * right0 + left5 * right1 + left9 * right2;
        const column0Row2 = left2 * right0 + left6 * right1 + left10 * right2;
        const column1Row0 = left0 * right4 + left4 * right5 + left8 * right6;
        const column1Row1 = left1 * right4 + left5 * right5 + left9 * right6;
        const column1Row2 = left2 * right4 + left6 * right5 + left10 * right6;
        const column2Row0 = left0 * right8 + left4 * right9 + left8 * right10;
        const column2Row1 = left1 * right8 + left5 * right9 + left9 * right10;
        const column2Row2 = left2 * right8 + left6 * right9 + left10 * right10;
        const column3Row0 = left0 * right12 + left4 * right13 + left8 * right14 + left12;
        const column3Row1 = left1 * right12 + left5 * right13 + left9 * right14 + left13;
        const column3Row2 = left2 * right12 + left6 * right13 + left10 * right14 + left14;
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column0Row2;
        result[3] = 0.0;
        result[4] = column1Row0;
        result[5] = column1Row1;
        result[6] = column1Row2;
        result[7] = 0.0;
        result[8] = column2Row0;
        result[9] = column2Row1;
        result[10] = column2Row2;
        result[11] = 0.0;
        result[12] = column3Row0;
        result[13] = column3Row1;
        result[14] = column3Row2;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Multiplies a transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
     * by a 3x3 rotation matrix.  This is an optimization
     * for <code>Matrix4.multiply(m, Matrix4.fromRotationTranslation(rotation), m);</code> with less allocations and arithmetic operations.
     *
     * @param {Matrix4} matrix The matrix on the left-hand side.
     * @param {Matrix3} rotation The 3x3 rotation matrix on the right-hand side.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromRotationTranslation(rotation), m);
     * Cesium.Matrix4.multiplyByMatrix3(m, rotation, m);
     */
    static multiplyByMatrix3(matrix, rotation, result) {
        const left0 = matrix[0];
        const left1 = matrix[1];
        const left2 = matrix[2];
        const left4 = matrix[4];
        const left5 = matrix[5];
        const left6 = matrix[6];
        const left8 = matrix[8];
        const left9 = matrix[9];
        const left10 = matrix[10];
        const right0 = rotation[0];
        const right1 = rotation[1];
        const right2 = rotation[2];
        const right4 = rotation[3];
        const right5 = rotation[4];
        const right6 = rotation[5];
        const right8 = rotation[6];
        const right9 = rotation[7];
        const right10 = rotation[8];
        const column0Row0 = left0 * right0 + left4 * right1 + left8 * right2;
        const column0Row1 = left1 * right0 + left5 * right1 + left9 * right2;
        const column0Row2 = left2 * right0 + left6 * right1 + left10 * right2;
        const column1Row0 = left0 * right4 + left4 * right5 + left8 * right6;
        const column1Row1 = left1 * right4 + left5 * right5 + left9 * right6;
        const column1Row2 = left2 * right4 + left6 * right5 + left10 * right6;
        const column2Row0 = left0 * right8 + left4 * right9 + left8 * right10;
        const column2Row1 = left1 * right8 + left5 * right9 + left9 * right10;
        const column2Row2 = left2 * right8 + left6 * right9 + left10 * right10;
        result[0] = column0Row0;
        result[1] = column0Row1;
        result[2] = column0Row2;
        result[3] = 0.0;
        result[4] = column1Row0;
        result[5] = column1Row1;
        result[6] = column1Row2;
        result[7] = 0.0;
        result[8] = column2Row0;
        result[9] = column2Row1;
        result[10] = column2Row2;
        result[11] = 0.0;
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Multiplies a transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
     * by an implicit translation matrix defined by a {@link Vector3}.  This is an optimization
     * for <code>Matrix4.multiply(m, Matrix4.fromTranslation(position), m);</code> with less allocations and arithmetic operations.
     *
     * @param {Matrix4} matrix The matrix on the left-hand side.
     * @param {Vector3} translation The translation on the right-hand side.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromTranslation(position), m);
     * Cesium.Matrix4.multiplyByTranslation(m, position, m);
     */
    static multiplyByTranslation(matrix, translation, result) {
        const x = translation.x;
        const y = translation.y;
        const z = translation.z;
        const tx = x * matrix[0] + y * matrix[4] + z * matrix[8] + matrix[12];
        const ty = x * matrix[1] + y * matrix[5] + z * matrix[9] + matrix[13];
        const tz = x * matrix[2] + y * matrix[6] + z * matrix[10] + matrix[14];
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[3];
        result[4] = matrix[4];
        result[5] = matrix[5];
        result[6] = matrix[6];
        result[7] = matrix[7];
        result[8] = matrix[8];
        result[9] = matrix[9];
        result[10] = matrix[10];
        result[11] = matrix[11];
        result[12] = tx;
        result[13] = ty;
        result[14] = tz;
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Multiplies an affine transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
     * by an implicit non-uniform scale matrix. This is an optimization
     * for <code>Matrix4.multiply(m, Matrix4.fromUniformScale(scale), m);</code>, where
     * <code>m</code> must be an affine matrix.
     * This function performs fewer allocations and arithmetic operations.
     *
     * @param {Matrix4} matrix The affine matrix on the left-hand side.
     * @param {Vector3} scale The non-uniform scale on the right-hand side.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     *
     * @example
     * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromScale(scale), m);
     * Cesium.Matrix4.multiplyByScale(m, scale, m);
     *
     * @see Matrix4.multiplyByUniformScale
     * @see Matrix4.fromScale
     * @see Matrix4.fromUniformScale
     * @see Matrix4.setScale
     * @see Matrix4.setUniformScale
     * @see Matrix4.getScale
     */
    static multiplyByScale(matrix, scale, result) {
        const scaleX = scale.x;
        const scaleY = scale.y;
        const scaleZ = scale.z;
        // Faster than Vector3.equals
        if (scaleX === 1.0 && scaleY === 1.0 && scaleZ === 1.0) {
            return Matrix4.clone(matrix, result);
        }
        result[0] = scaleX * matrix[0];
        result[1] = scaleX * matrix[1];
        result[2] = scaleX * matrix[2];
        result[3] = matrix[3];
        result[4] = scaleY * matrix[4];
        result[5] = scaleY * matrix[5];
        result[6] = scaleY * matrix[6];
        result[7] = matrix[7];
        result[8] = scaleZ * matrix[8];
        result[9] = scaleZ * matrix[9];
        result[10] = scaleZ * matrix[10];
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Computes the product of a matrix times a uniform scale, as if the scale were a scale matrix.
     *
     * @param {Matrix4} matrix The matrix on the left-hand side.
     * @param {Number} scale The uniform scale on the right-hand side.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromUniformScale(scale), m);
     * Cesium.Matrix4.multiplyByUniformScale(m, scale, m);
     *
     * @see Matrix4.multiplyByScale
     * @see Matrix4.fromScale
     * @see Matrix4.fromUniformScale
     * @see Matrix4.setScale
     * @see Matrix4.setUniformScale
     * @see Matrix4.getScale
     */
    static multiplyByUniformScale(matrix, scale, result) {
        result[0] = matrix[0] * scale;
        result[1] = matrix[1] * scale;
        result[2] = matrix[2] * scale;
        result[3] = matrix[3];
        result[4] = matrix[4] * scale;
        result[5] = matrix[5] * scale;
        result[6] = matrix[6] * scale;
        result[7] = matrix[7];
        result[8] = matrix[8] * scale;
        result[9] = matrix[9] * scale;
        result[10] = matrix[10] * scale;
        result[11] = matrix[11];
        result[12] = matrix[12];
        result[13] = matrix[13];
        result[14] = matrix[14];
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a column vector.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Vector4} cartesian The vector.
     * @param {Vector4} result The object onto which to store the result.
     * @returns {Vector4} The modified result parameter.
     */
    static multiplyByVector(matrix, cartesian, result) {
        const vX = cartesian.x;
        const vY = cartesian.y;
        const vZ = cartesian.z;
        const vW = cartesian.w;
        const x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12] * vW;
        const y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13] * vW;
        const z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14] * vW;
        const w = matrix[3] * vX + matrix[7] * vY + matrix[11] * vZ + matrix[15] * vW;
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a {@link Vector3}.  This is equivalent to calling {@link Matrix4.multiplyByVector}
     * with a {@link Vector4} with a <code>w</code> component of zero.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Vector3} cartesian The point.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     *
     * @example
     * const p = new Cesium.Vector3(1.0, 2.0, 3.0);
     * const result = Cesium.Matrix4.multiplyByPointAsVector(matrix, p, new Cesium.Vector3());
     * // A shortcut for
     * //   Vector3 p = ...
     * //   Cesium.Matrix4.multiplyByVector(matrix, new Cesium.Vector4(p.x, p.y, p.z, 0.0), result);
     */
    static multiplyByPointAsVector(matrix, cartesian, result) {
        const vX = cartesian.x;
        const vY = cartesian.y;
        const vZ = cartesian.z;
        const x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ;
        const y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ;
        const z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ;
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a {@link Vector3}. This is equivalent to calling {@link Matrix4.multiplyByVector}
     * with a {@link Vector4} with a <code>w</code> component of 1, but returns a {@link Vector3} instead of a {@link Vector4}.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Vector3} cartesian The point.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     *
     * @example
     * const p = new Cesium.Vector3(1.0, 2.0, 3.0);
     * const result = Cesium.Matrix4.multiplyByPoint(matrix, p, new Cesium.Vector3());
     */
    static multiplyByPoint(matrix, cartesian, result) {
        const vX = cartesian.x;
        const vY = cartesian.y;
        const vZ = cartesian.z;
        const x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12];
        const y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13];
        const z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14];
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    }
    ;
    /**
     * Computes the product of a matrix and a scalar.
     *
     * @param {Matrix4} matrix The matrix.
     * @param {Number} scalar The number to multiply by.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * //create a Matrix4 instance which is a scaled version of the supplied Matrix4
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * const a = Cesium.Matrix4.multiplyByScalar(m, -2, new Cesium.Matrix4());
     *
     * // m remains the same
     * // a = [-20.0, -22.0, -24.0, -26.0]
     * //     [-28.0, -30.0, -32.0, -34.0]
     * //     [-36.0, -38.0, -40.0, -42.0]
     * //     [-44.0, -46.0, -48.0, -50.0]
     */
    static multiplyByScalar(matrix, scalar, result) {
        result[0] = matrix[0] * scalar;
        result[1] = matrix[1] * scalar;
        result[2] = matrix[2] * scalar;
        result[3] = matrix[3] * scalar;
        result[4] = matrix[4] * scalar;
        result[5] = matrix[5] * scalar;
        result[6] = matrix[6] * scalar;
        result[7] = matrix[7] * scalar;
        result[8] = matrix[8] * scalar;
        result[9] = matrix[9] * scalar;
        result[10] = matrix[10] * scalar;
        result[11] = matrix[11] * scalar;
        result[12] = matrix[12] * scalar;
        result[13] = matrix[13] * scalar;
        result[14] = matrix[14] * scalar;
        result[15] = matrix[15] * scalar;
        return result;
    }
    ;
    /**
     * Computes a negated copy of the provided matrix.
     *
     * @param {Matrix4} matrix The matrix to negate.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * //create a new Matrix4 instance which is a negation of a Matrix4
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * const a = Cesium.Matrix4.negate(m, new Cesium.Matrix4());
     *
     * // m remains the same
     * // a = [-10.0, -11.0, -12.0, -13.0]
     * //     [-14.0, -15.0, -16.0, -17.0]
     * //     [-18.0, -19.0, -20.0, -21.0]
     * //     [-22.0, -23.0, -24.0, -25.0]
     */
    static negate(matrix, result) {
        result[0] = -matrix[0];
        result[1] = -matrix[1];
        result[2] = -matrix[2];
        result[3] = -matrix[3];
        result[4] = -matrix[4];
        result[5] = -matrix[5];
        result[6] = -matrix[6];
        result[7] = -matrix[7];
        result[8] = -matrix[8];
        result[9] = -matrix[9];
        result[10] = -matrix[10];
        result[11] = -matrix[11];
        result[12] = -matrix[12];
        result[13] = -matrix[13];
        result[14] = -matrix[14];
        result[15] = -matrix[15];
        return result;
    }
    ;
    /**
     * Computes the transpose of the provided matrix.
     *
     * @param {Matrix4} matrix The matrix to transpose.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @example
     * //returns transpose of a Matrix4
     * // m = [10.0, 11.0, 12.0, 13.0]
     * //     [14.0, 15.0, 16.0, 17.0]
     * //     [18.0, 19.0, 20.0, 21.0]
     * //     [22.0, 23.0, 24.0, 25.0]
     *
     * const a = Cesium.Matrix4.transpose(m, new Cesium.Matrix4());
     *
     * // m remains the same
     * // a = [10.0, 14.0, 18.0, 22.0]
     * //     [11.0, 15.0, 19.0, 23.0]
     * //     [12.0, 16.0, 20.0, 24.0]
     * //     [13.0, 17.0, 21.0, 25.0]
     */
    static transpose(matrix, result) {
        const matrix1 = matrix[1];
        const matrix2 = matrix[2];
        const matrix3 = matrix[3];
        const matrix6 = matrix[6];
        const matrix7 = matrix[7];
        const matrix11 = matrix[11];
        result[0] = matrix[0];
        result[1] = matrix[4];
        result[2] = matrix[8];
        result[3] = matrix[12];
        result[4] = matrix1;
        result[5] = matrix[5];
        result[6] = matrix[9];
        result[7] = matrix[13];
        result[8] = matrix2;
        result[9] = matrix6;
        result[10] = matrix[10];
        result[11] = matrix[14];
        result[12] = matrix3;
        result[13] = matrix7;
        result[14] = matrix11;
        result[15] = matrix[15];
        return result;
    }
    ;
    /**
     * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
     *
     * @param {Matrix4} matrix The matrix with signed elements.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static abs(matrix, result) {
        result[0] = Math.abs(matrix[0]);
        result[1] = Math.abs(matrix[1]);
        result[2] = Math.abs(matrix[2]);
        result[3] = Math.abs(matrix[3]);
        result[4] = Math.abs(matrix[4]);
        result[5] = Math.abs(matrix[5]);
        result[6] = Math.abs(matrix[6]);
        result[7] = Math.abs(matrix[7]);
        result[8] = Math.abs(matrix[8]);
        result[9] = Math.abs(matrix[9]);
        result[10] = Math.abs(matrix[10]);
        result[11] = Math.abs(matrix[11]);
        result[12] = Math.abs(matrix[12]);
        result[13] = Math.abs(matrix[13]);
        result[14] = Math.abs(matrix[14]);
        result[15] = Math.abs(matrix[15]);
        return result;
    }
    ;
    /**
     * Compares the provided matrices componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Matrix4} [left] The first matrix.
     * @param {Matrix4} [right] The second matrix.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     *
     * @example
     * //compares two Matrix4 instances
     *
     * // a = [10.0, 14.0, 18.0, 22.0]
     * //     [11.0, 15.0, 19.0, 23.0]
     * //     [12.0, 16.0, 20.0, 24.0]
     * //     [13.0, 17.0, 21.0, 25.0]
     *
     * // b = [10.0, 14.0, 18.0, 22.0]
     * //     [11.0, 15.0, 19.0, 23.0]
     * //     [12.0, 16.0, 20.0, 24.0]
     * //     [13.0, 17.0, 21.0, 25.0]
     *
     * if(Cesium.Matrix4.equals(a,b)) {
     *      console.log("Both matrices are equal");
     * } else {
     *      console.log("They are not equal");
     * }
     *
     * //Prints "Both matrices are equal" on the console
     */
    static equals(left, right) {
        // Given that most matrices will be transformation matrices, the elements
        // are tested in order such that the test is likely to fail as early
        // as possible.  I _think_ this is just as friendly to the L1 cache
        // as testing in index order.  It is certainty faster in practice.
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                // Translation
                left[12] === right[12] &&
                left[13] === right[13] &&
                left[14] === right[14] &&
                // Rotation/scale
                left[0] === right[0] &&
                left[1] === right[1] &&
                left[2] === right[2] &&
                left[4] === right[4] &&
                left[5] === right[5] &&
                left[6] === right[6] &&
                left[8] === right[8] &&
                left[9] === right[9] &&
                left[10] === right[10] &&
                // Bottom row
                left[3] === right[3] &&
                left[7] === right[7] &&
                left[11] === right[11] &&
                left[15] === right[15]));
    }
    ;
    /**
     * Compares the provided matrices componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Matrix4} [left] The first matrix.
     * @param {Matrix4} [right] The second matrix.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     *
     * @example
     * //compares two Matrix4 instances
     *
     * // a = [10.5, 14.5, 18.5, 22.5]
     * //     [11.5, 15.5, 19.5, 23.5]
     * //     [12.5, 16.5, 20.5, 24.5]
     * //     [13.5, 17.5, 21.5, 25.5]
     *
     * // b = [10.0, 14.0, 18.0, 22.0]
     * //     [11.0, 15.0, 19.0, 23.0]
     * //     [12.0, 16.0, 20.0, 24.0]
     * //     [13.0, 17.0, 21.0, 25.0]
     *
     * if(Cesium.Matrix4.equalsEpsilon(a,b,0.1)){
     *      console.log("Difference between both the matrices is less than 0.1");
     * } else {
     *      console.log("Difference between both the matrices is not less than 0.1");
     * }
     *
     * //Prints "Difference between both the matrices is not less than 0.1" on the console
     */
    static equalsEpsilon(left, right, epsilon) {
        epsilon = defaultValue(epsilon, 0);
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                Math.abs(left[0] - right[0]) <= epsilon &&
                Math.abs(left[1] - right[1]) <= epsilon &&
                Math.abs(left[2] - right[2]) <= epsilon &&
                Math.abs(left[3] - right[3]) <= epsilon &&
                Math.abs(left[4] - right[4]) <= epsilon &&
                Math.abs(left[5] - right[5]) <= epsilon &&
                Math.abs(left[6] - right[6]) <= epsilon &&
                Math.abs(left[7] - right[7]) <= epsilon &&
                Math.abs(left[8] - right[8]) <= epsilon &&
                Math.abs(left[9] - right[9]) <= epsilon &&
                Math.abs(left[10] - right[10]) <= epsilon &&
                Math.abs(left[11] - right[11]) <= epsilon &&
                Math.abs(left[12] - right[12]) <= epsilon &&
                Math.abs(left[13] - right[13]) <= epsilon &&
                Math.abs(left[14] - right[14]) <= epsilon &&
                Math.abs(left[15] - right[15]) <= epsilon));
    }
    ;
    /**
     * Gets the translation portion of the provided matrix, assuming the matrix is an affine transformation matrix.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static getTranslation(matrix, result) {
        result.x = matrix[12];
        result.y = matrix[13];
        result.z = matrix[14];
        return result;
    }
    ;
    /**
     * Gets the upper left 3x3 matrix of the provided matrix.
     *
     * @param {Matrix4} matrix The matrix to use.
     * @param {Matrix3} result The object onto which to store the result.
     * @returns {Matrix3} The modified result parameter.
     *
     * @example
     * // returns a Matrix3 instance from a Matrix4 instance
     *
     * // m = [10.0, 14.0, 18.0, 22.0]
     * //     [11.0, 15.0, 19.0, 23.0]
     * //     [12.0, 16.0, 20.0, 24.0]
     * //     [13.0, 17.0, 21.0, 25.0]
     *
     * const b = new Cesium.Matrix3();
     * Cesium.Matrix4.getMatrix3(m,b);
     *
     * // b = [10.0, 14.0, 18.0]
     * //     [11.0, 15.0, 19.0]
     * //     [12.0, 16.0, 20.0]
     */
    static getMatrix3(matrix, result) {
        result[0] = matrix[0];
        result[1] = matrix[1];
        result[2] = matrix[2];
        result[3] = matrix[4];
        result[4] = matrix[5];
        result[5] = matrix[6];
        result[6] = matrix[8];
        result[7] = matrix[9];
        result[8] = matrix[10];
        return result;
    }
    ;
    /**
     * Computes the inverse of the provided matrix using Cramers Rule.
     * If the determinant is zero, the matrix can not be inverted, and an exception is thrown.
     * If the matrix is a proper rigid transformation, it is more efficient
     * to invert it with {@link Matrix4.inverseTransformation}.
     *
     * @param {Matrix4} matrix The matrix to invert.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     *
     * @exception {Error} matrix is not invertible because its determinate is zero.
     */
    static inverse(matrix, result) {
        //
        // Ported from:
        //   ftp://download.intel.com/design/PentiumIII/sml/24504301.pdf
        //
        const src0 = matrix[0];
        const src1 = matrix[4];
        const src2 = matrix[8];
        const src3 = matrix[12];
        const src4 = matrix[1];
        const src5 = matrix[5];
        const src6 = matrix[9];
        const src7 = matrix[13];
        const src8 = matrix[2];
        const src9 = matrix[6];
        const src10 = matrix[10];
        const src11 = matrix[14];
        const src12 = matrix[3];
        const src13 = matrix[7];
        const src14 = matrix[11];
        const src15 = matrix[15];
        // calculate pairs for first 8 elements (cofactors)
        let tmp0 = src10 * src15;
        let tmp1 = src11 * src14;
        let tmp2 = src9 * src15;
        let tmp3 = src11 * src13;
        let tmp4 = src9 * src14;
        let tmp5 = src10 * src13;
        let tmp6 = src8 * src15;
        let tmp7 = src11 * src12;
        let tmp8 = src8 * src14;
        let tmp9 = src10 * src12;
        let tmp10 = src8 * src13;
        let tmp11 = src9 * src12;
        // calculate first 8 elements (cofactors)
        const dst0 = tmp0 * src5 +
            tmp3 * src6 +
            tmp4 * src7 -
            (tmp1 * src5 + tmp2 * src6 + tmp5 * src7);
        const dst1 = tmp1 * src4 +
            tmp6 * src6 +
            tmp9 * src7 -
            (tmp0 * src4 + tmp7 * src6 + tmp8 * src7);
        const dst2 = tmp2 * src4 +
            tmp7 * src5 +
            tmp10 * src7 -
            (tmp3 * src4 + tmp6 * src5 + tmp11 * src7);
        const dst3 = tmp5 * src4 +
            tmp8 * src5 +
            tmp11 * src6 -
            (tmp4 * src4 + tmp9 * src5 + tmp10 * src6);
        const dst4 = tmp1 * src1 +
            tmp2 * src2 +
            tmp5 * src3 -
            (tmp0 * src1 + tmp3 * src2 + tmp4 * src3);
        const dst5 = tmp0 * src0 +
            tmp7 * src2 +
            tmp8 * src3 -
            (tmp1 * src0 + tmp6 * src2 + tmp9 * src3);
        const dst6 = tmp3 * src0 +
            tmp6 * src1 +
            tmp11 * src3 -
            (tmp2 * src0 + tmp7 * src1 + tmp10 * src3);
        const dst7 = tmp4 * src0 +
            tmp9 * src1 +
            tmp10 * src2 -
            (tmp5 * src0 + tmp8 * src1 + tmp11 * src2);
        // calculate pairs for second 8 elements (cofactors)
        tmp0 = src2 * src7;
        tmp1 = src3 * src6;
        tmp2 = src1 * src7;
        tmp3 = src3 * src5;
        tmp4 = src1 * src6;
        tmp5 = src2 * src5;
        tmp6 = src0 * src7;
        tmp7 = src3 * src4;
        tmp8 = src0 * src6;
        tmp9 = src2 * src4;
        tmp10 = src0 * src5;
        tmp11 = src1 * src4;
        // calculate second 8 elements (cofactors)
        const dst8 = tmp0 * src13 +
            tmp3 * src14 +
            tmp4 * src15 -
            (tmp1 * src13 + tmp2 * src14 + tmp5 * src15);
        const dst9 = tmp1 * src12 +
            tmp6 * src14 +
            tmp9 * src15 -
            (tmp0 * src12 + tmp7 * src14 + tmp8 * src15);
        const dst10 = tmp2 * src12 +
            tmp7 * src13 +
            tmp10 * src15 -
            (tmp3 * src12 + tmp6 * src13 + tmp11 * src15);
        const dst11 = tmp5 * src12 +
            tmp8 * src13 +
            tmp11 * src14 -
            (tmp4 * src12 + tmp9 * src13 + tmp10 * src14);
        const dst12 = tmp2 * src10 +
            tmp5 * src11 +
            tmp1 * src9 -
            (tmp4 * src11 + tmp0 * src9 + tmp3 * src10);
        const dst13 = tmp8 * src11 +
            tmp0 * src8 +
            tmp7 * src10 -
            (tmp6 * src10 + tmp9 * src11 + tmp1 * src8);
        const dst14 = tmp6 * src9 +
            tmp11 * src11 +
            tmp3 * src8 -
            (tmp10 * src11 + tmp2 * src8 + tmp7 * src9);
        const dst15 = tmp10 * src10 +
            tmp4 * src8 +
            tmp9 * src9 -
            (tmp8 * src9 + tmp11 * src10 + tmp5 * src8);
        // calculate determinant
        let det = src0 * dst0 + src1 * dst1 + src2 * dst2 + src3 * dst3;
        if (Math.abs(det) < GMath.EPSILON21) {
            // Special case for a zero scale matrix that can occur, for example,
            // when a model's node has a [0, 0, 0] scale.
            if (Matrix3.equalsEpsilon(Matrix4.getMatrix3(matrix, scratchInverseRotation), scratchMatrix3Zero, GMath.EPSILON7) &&
                Vector4.equals(Matrix4.getRow(matrix, 3, scratchBottomRow), scratchExpectedBottomRow)) {
                result[0] = 0.0;
                result[1] = 0.0;
                result[2] = 0.0;
                result[3] = 0.0;
                result[4] = 0.0;
                result[5] = 0.0;
                result[6] = 0.0;
                result[7] = 0.0;
                result[8] = 0.0;
                result[9] = 0.0;
                result[10] = 0.0;
                result[11] = 0.0;
                result[12] = -matrix[12];
                result[13] = -matrix[13];
                result[14] = -matrix[14];
                result[15] = 1.0;
                return result;
            }
            throw new Error("matrix is not invertible because its determinate is zero.");
        }
        // calculate matrix inverse
        det = 1.0 / det;
        result[0] = dst0 * det;
        result[1] = dst1 * det;
        result[2] = dst2 * det;
        result[3] = dst3 * det;
        result[4] = dst4 * det;
        result[5] = dst5 * det;
        result[6] = dst6 * det;
        result[7] = dst7 * det;
        result[8] = dst8 * det;
        result[9] = dst9 * det;
        result[10] = dst10 * det;
        result[11] = dst11 * det;
        result[12] = dst12 * det;
        result[13] = dst13 * det;
        result[14] = dst14 * det;
        result[15] = dst15 * det;
        return result;
    }
    ;
    /**
     * Computes the inverse of the provided matrix assuming it is a proper rigid matrix,
     * where the upper left 3x3 elements are a rotation matrix,
     * and the upper three elements in the fourth column are the translation.
     * The bottom row is assumed to be [0, 0, 0, 1].
     * The matrix is not verified to be in the proper form.
     * This method is faster than computing the inverse for a general 4x4
     * matrix using {@link Matrix4.inverse}.
     *
     * @param {Matrix4} matrix The matrix to invert.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static inverseTransformation(matrix, result) {
        //This function is an optimized version of the below 4 lines.
        //const rT = Matrix3.transpose(Matrix4.getMatrix3(matrix));
        //const rTN = Matrix3.negate(rT);
        //const rTT = Matrix3.multiplyByVector(rTN, Matrix4.getTranslation(matrix));
        //return Matrix4.fromRotationTranslation(rT, rTT, result);
        const matrix0 = matrix[0];
        const matrix1 = matrix[1];
        const matrix2 = matrix[2];
        const matrix4 = matrix[4];
        const matrix5 = matrix[5];
        const matrix6 = matrix[6];
        const matrix8 = matrix[8];
        const matrix9 = matrix[9];
        const matrix10 = matrix[10];
        const vX = matrix[12];
        const vY = matrix[13];
        const vZ = matrix[14];
        const x = -matrix0 * vX - matrix1 * vY - matrix2 * vZ;
        const y = -matrix4 * vX - matrix5 * vY - matrix6 * vZ;
        const z = -matrix8 * vX - matrix9 * vY - matrix10 * vZ;
        result[0] = matrix0;
        result[1] = matrix4;
        result[2] = matrix8;
        result[3] = 0.0;
        result[4] = matrix1;
        result[5] = matrix5;
        result[6] = matrix9;
        result[7] = 0.0;
        result[8] = matrix2;
        result[9] = matrix6;
        result[10] = matrix10;
        result[11] = 0.0;
        result[12] = x;
        result[13] = y;
        result[14] = z;
        result[15] = 1.0;
        return result;
    }
    ;
    /**
     * Computes the inverse transpose of a matrix.
     *
     * @param {Matrix4} matrix The matrix to transpose and invert.
     * @param {Matrix4} result The object onto which to store the result.
     * @returns {Matrix4} The modified result parameter.
     */
    static inverseTranspose(matrix, result) {
        return Matrix4.inverse(Matrix4.transpose(matrix, scratchTransposeMatrix), result);
    }
    ;
    /**
   * @private
   */
    static equalsArray(matrix, array, offset) {
        return (matrix[0] === array[offset] &&
            matrix[1] === array[offset + 1] &&
            matrix[2] === array[offset + 2] &&
            matrix[3] === array[offset + 3] &&
            matrix[4] === array[offset + 4] &&
            matrix[5] === array[offset + 5] &&
            matrix[6] === array[offset + 6] &&
            matrix[7] === array[offset + 7] &&
            matrix[8] === array[offset + 8] &&
            matrix[9] === array[offset + 9] &&
            matrix[10] === array[offset + 10] &&
            matrix[11] === array[offset + 11] &&
            matrix[12] === array[offset + 12] &&
            matrix[13] === array[offset + 13] &&
            matrix[14] === array[offset + 14] &&
            matrix[15] === array[offset + 15]);
    }
    ;
}
/**
 * The number of elements used to pack the object into an array.
 * @type {Number}
 */
Matrix4.packedLength = 16;
/**
 * An immutable Matrix4 instance initialized to the identity matrix.
 *
 * @type {Matrix4}
 * @constant
 */
Matrix4.IDENTITY = Object.freeze(new Matrix4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0));
/**
 * An immutable Matrix4 instance initialized to the zero matrix.
 *
 * @type {Matrix4}
 * @constant
 */
Matrix4.ZERO = Object.freeze(new Matrix4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0));
const scratchTransposeMatrix = new Matrix4();
const fromCameraF = new Vector3();
const fromCameraR = new Vector3();
const fromCameraU = new Vector3();
const scaleScratch1 = new Vector3();
const scaleScratch2 = new Vector3();
const scratchColumn = new Vector3();
const scaleScratch3 = new Vector3();
const scaleScratch4 = new Vector3();
const scaleScratch5 = new Vector3();
const scratchInverseRotation = new Matrix3();
const scratchMatrix3Zero = new Matrix3();
const scratchBottomRow = new Vector4();
const scratchExpectedBottomRow = new Vector4(0.0, 0.0, 0.0, 1.0);

class Uniform {
    constructor(uniformName, cb, binding) {
        this.name = uniformName;
        this.cb = cb;
        this.binding = binding || 0;
        this.visibility = ShaderStage.Vertex | ShaderStage.Fragment;
        this.type = 'number';
    }
    setBuffer(array) {
        for (let i = 0; i < array.length; i++) {
            this.buffer[i] = array[i];
        }
    }
    set() { }
    getValue() {
        let result;
        const cbType = typeof this.cb;
        switch (cbType) {
            case "object":
                result = this.cb[this.name];
                break;
            case "function":
                //@ts-ignore
                result = this.cb();
                break;
            case "number":
                result = this.cb;
                break;
            default:
                throw new Error('type is error');
        }
        return result;
    }
}
class UniformFloat extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = 0;
        this.size = 4;
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 1);
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        if (this.value !== this._value) {
            this._value = this.value;
            this.buffer[0] = this.value;
            return true;
        }
        return false;
    }
    ;
}
UniformFloat.align = 4;
class UniformFloatVec2 extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Vector2();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 2);
        this.size = 8;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Vector2.equals(v, this._value)) {
            Vector2.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
UniformFloatVec2.align = 8;
class UniformFloatVec3 extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Vector3();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 3);
        this.size = 12;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Vector3.equals(v, this._value)) {
            Vector3.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
UniformFloatVec3.align = 16;
class UniformFloatVec4 extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Vector4();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 4);
        this.size = 16;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Vector4.equals(v, this._value)) {
            Vector4.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
    ;
}
UniformFloatVec4.align = 16;
class UniformColor extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Color();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 3);
        this.size = 12;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Color.equals(v, this._value)) {
            Color.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
UniformColor.align = 16;
class UniformMat2 extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Matrix2();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 4);
        this.size = 12;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Matrix2.equals(v, this._value)) {
            Matrix2.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
UniformMat2.align = 8;
class UniformMat3 extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Matrix3();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 9);
        this.size = 48;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Matrix3.equals(v, this._value)) {
            Matrix3.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
UniformMat3.align = 16;
class UniformMat4 extends Uniform {
    constructor(uniformName, buffer, byteOffset, cb, binding) {
        super(uniformName, cb);
        this.value = undefined;
        this._value = new Matrix4();
        this.buffer = new Float32Array(buffer.buffer, byteOffset, 16);
        this.size = 64;
    }
    set() {
        if (this.cb != undefined)
            this.value = this.getValue();
        const v = this.value;
        if (!Matrix4.equals(v, this._value)) {
            Matrix4.clone(v, this._value);
            this.setBuffer(this._value.toArray());
            return true;
        }
        return false;
    }
}
UniformMat4.align = 16;
class UniformTexture extends Uniform {
    constructor(uniformName, binding, cb) {
        super(uniformName, cb);
        this.value = this.getValue();
        this.binding = binding;
        this.type = 'texture';
        this.visibility = ShaderStage.Fragment;
    }
    update(context) {
        this.value.update(context);
    }
    set() {
        return undefined;
    }
}
class UniformSampler extends Uniform {
    constructor(uniformName, binding, cb) {
        super(uniformName, cb);
        this.value = this.getValue();
        this.binding = binding;
        this.type = 'sampler';
        this.visibility = ShaderStage.Fragment;
    }
    update(context) {
        this.value.update(context);
    }
    set() {
        return undefined;
    }
}
class UniformLight extends Uniform {
    constructor(uniformName, binding, buffer, size) {
        super(uniformName);
        this.cb = buffer;
        //this.lightBuffer =buffer;
        this.binding = binding;
        this.visibility = ShaderStage.Fragment;
        this.bufferSize = size;
    }
    set() {
        this.lightBuffer = this.getValue();
    }
}

class BindGroupEntity {
    constructor(options) {
        this.binding = options.binding;
        this.resource = options.resource;
    }
    getGPUGroupEntity() {
        return {
            binding: this.binding,
            resource: this.resource,
        };
    }
}

class BindGroupLayoutEntry {
    constructor(options) {
        this.binding = options.binding;
        this.visibility = options.visibility;
        this.buffer = options.buffer;
        this.sampler = options.sampler;
        this.texture = options.texture;
        this.storageTexture = options.storageTexture;
        this.externalTexture = options.storageTexture;
    }
    getGPULayoutEntity() {
        return {
            binding: this.binding,
            visibility: this.visibility,
            buffer: this.buffer,
            sampler: this.sampler,
            texture: this.texture,
            storageTexture: this.storageTexture,
        };
    }
}

const layoutCache = new Map();
class BindGroupLayout {
    constructor(device, label, entries = [], index = 0) {
        this.entries = entries;
        this.index = index || 0;
        this.gpuBindGroupLayout = device.createBindGroupLayout({
            label: label,
            entries: entries.map(({ visibility, buffer, sampler, texture, storageTexture, binding }) => ({
                binding,
                visibility,
                buffer,
                sampler,
                texture,
                storageTexture,
            }))
        });
    }
    static getBindGroupLayoutFromCache(device, label, entires, index) {
        if (layoutCache.has(label)) {
            return layoutCache.get(label);
        }
        else {
            const bindGroupLayout = new BindGroupLayout(device, label, entires, index);
            layoutCache.set(label, bindGroupLayout);
            return bindGroupLayout;
        }
    }
}

const bindGroupCache = new Map;
class BindGroup {
    constructor(options) {
        this.index = options.index || 0;
        this.gpuBindGroup = options.device.createBindGroup({
            label: options.label,
            layout: options.layout.gpuBindGroupLayout,
            entries: options.entires.map((entity) => ({ binding: entity.binding, resource: entity.resource })),
        });
    }
    bind(passEncoder) {
        passEncoder.setBindGroup(this.index, this.gpuBindGroup);
    }
    static getBindGroupFromCache(options) {
        if (bindGroupCache.has(options.label)) {
            return bindGroupCache.get(options.label);
        }
        else {
            //@ts-ignore
            const bindGroup = new BindGroup(options);
            bindGroupCache.set(options.label, bindGroup);
            return bindGroup;
        }
    }
}

class ShaderData {
    constructor(label, size, layoutIndex, groupIndex, buffer, data) {
        this.byteOffset = 0;
        this.defaultUnifromTotalSize = size > 0 ? size : 400;
        this.data = defaultValue(data, new Float32Array(this.defaultUnifromTotalSize));
        this.buffer = defaultValue(buffer, undefined);
        this.label = label;
        this.textureBinding = 1;
        this.defineDirty = true;
        this.uniformDirty = true;
        this.uniformTotalSize = 0;
        this.defines = {};
        this._uniforms = new Map();
        this.groupIndex = defaultValue(groupIndex, 0);
        this.layoutIndex = defaultValue(layoutIndex, 0);
    }
    get uniformsSize() {
        //https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
        return Math.ceil(this.byteOffset / 16) * 16;
    }
    setFloat(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        const uniform = new UniformFloat(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 1;
    }
    setFloatVec2(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatVec2.align);
        const uniform = new UniformFloatVec2(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 2;
    }
    setFloatVec3(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatVec3.align);
        const uniform = new UniformFloatVec3(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 3;
    }
    setColor(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformColor.align);
        const uniform = new UniformColor(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 3;
    }
    setFloatVec4(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformFloatVec4.align);
        const uniform = new UniformFloatVec4(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 4;
    }
    setMatrix2(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMat2.align);
        const uniform = new UniformMat2(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 4;
    }
    setMatrix3(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMat3.align);
        const uniform = new UniformMat3(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 12;
    }
    setMatrix4(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        this.byteOffset += this.checkUniformOffset(this.byteOffset, UniformMat4.align);
        const uniform = new UniformMat4(name, this.data, this.byteOffset, value, binding);
        this._uniforms.set(name, uniform);
        this.byteOffset += uniform.size;
        this.uniformTotalSize += 16;
    }
    setTexture(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        const uniform = new UniformTexture(name, this.textureBinding, value);
        this.setDefine(name.concat('Binding'), this.textureBinding);
        this.textureBinding += 1;
        this._uniforms.set(name, uniform);
    }
    setSampler(name, value, binding) {
        if (this._uniforms.get(name))
            return;
        const uniform = new UniformSampler(name, this.textureBinding, value);
        this.setDefine(name.concat('Binding'), this.textureBinding);
        this.textureBinding += 1;
        this._uniforms.set(name, uniform);
    }
    setDefine(name, value) {
        if (this.defines[name] === undefined) {
            this.defineDirty = true;
            this.defines[name] = value;
        }
        else {
            if (this.defines[name] === value) {
                return;
            }
            else {
                this.defineDirty = true;
                this.defines[name] = value;
            }
        }
    }
    update(device, other) {
        this._uniforms.forEach((uniform) => {
            if (uniform.type == 'texture' || uniform.type == 'sampler') ;
            else {
                const result = uniform.set();
                if (result != undefined && this.uniformDirty == false)
                    this.uniformDirty = result;
            }
        });
        if (!this.buffer)
            this.buffer = Buffer.createUniformBuffer(device, this.uniformsSize);
        if (this.uniformDirty) {
            this.uniformDirty = false;
            this.buffer.setSubData(0, this.data);
        }
    }
    bind(context, passEncoder) {
        this.uploadUniform(context);
        const { groupLayout, bindGroup } = this.createBindGroupAndLayout(context.device, this.label, this.layoutIndex, this.groupIndex);
        bindGroup.bind(passEncoder);
        this.bindGroup = bindGroup;
        this.groupLayout = groupLayout;
    }
    destroy() {
        this.byteOffset = 0;
        this.uniformTotalSize = 0;
        this.data = undefined;
        this.buffer.destroy();
        this._uniforms = new Map();
    }
    uploadUniform(context) {
        this._uniforms.forEach((uniform) => {
            if (uniform.type == 'texture' || uniform.type == 'sampler') {
                uniform.update(context);
            }
            else {
                const result = uniform.set();
                if (result != undefined && this.uniformDirty == false)
                    this.uniformDirty = result;
            }
        });
        if (!this.buffer)
            this.buffer = Buffer.createUniformBuffer(context.device, this.uniformsSize * 4);
        if (this.uniformDirty) {
            this.uniformDirty = false;
            this.buffer.setSubData(0, this.data.slice(0, this.uniformsSize));
        }
    }
    checkUniformOffset(byteSize, Align) {
        //from https://gpuweb.github.io/gpuweb/wgsl/#address-space-layout-constraints
        return Math.ceil(byteSize / Align) * Align - byteSize;
    }
    getBindGroupAndLayout(device, label, index) {
        const layoutEntities = this.createBindGroupLayoutEntry();
        const groupLayout = BindGroupLayout.getBindGroupLayoutFromCache(device, label, layoutEntities, index);
        const groupEntities = this.createBindGroupEntity();
        const bindGroup = BindGroup.getBindGroupFromCache({
            label: label,
            entires: groupEntities,
            device: device,
            layout: groupLayout,
            index: index
        });
        return { groupLayout, bindGroup };
    }
    createBindGroupAndLayout(device, label, layoutIndex, groupIndex) {
        const layoutEntities = this.createBindGroupLayoutEntry();
        const groupLayout = BindGroupLayout.getBindGroupLayoutFromCache(device, label, layoutEntities, layoutIndex || 0);
        const groupEntities = this.createBindGroupEntity();
        const bindGroup = BindGroup.getBindGroupFromCache({
            label: label,
            entires: groupEntities,
            device: device,
            layout: groupLayout,
            index: groupIndex || 0 //后续改成groupIndex
        });
        return { groupLayout, bindGroup };
    }
    createBindGroupLayoutEntry() {
        const result = new Map();
        this._uniforms.forEach((uniform) => {
            if (!result.has(uniform.binding)) {
                result.set(uniform.binding, this.createOneLayoutEntry(uniform));
            }
        });
        const lauoutEntityArray = [];
        result.forEach((value) => {
            lauoutEntityArray.push(value);
        });
        return lauoutEntityArray;
    }
    createBindGroupEntity() {
        const result = new Map();
        this._uniforms.forEach((uniform) => {
            if (!result.has(uniform.binding)) {
                result.set(uniform.binding, this.creayeOneGroupEntity(uniform));
            }
        });
        const groupEntityArray = [];
        result.forEach((value) => {
            groupEntityArray.push(value);
        });
        return groupEntityArray;
    }
    createOneLayoutEntry(uniform) {
        let layoutEntity;
        if (uniform.type === 'number') {
            layoutEntity = new BindGroupLayoutEntry({
                binding: uniform.binding,
                buffer: uniform?.lightBuffer?.layoutType || this.buffer.layoutType,
                visibility: uniform.visibility,
                // uniforms: this.uniforms,
            });
        }
        else if (uniform.type === 'texture') {
            layoutEntity = new BindGroupLayoutEntry({
                binding: uniform.binding,
                visibility: uniform.visibility,
                texture: uniform.value.layoutType
            });
        }
        else if (uniform.type === 'sampler') {
            layoutEntity = new BindGroupLayoutEntry({
                binding: uniform.binding,
                visibility: uniform.visibility,
                sampler: {
                    type: uniform.value.layoutType,
                }
            });
        }
        return layoutEntity;
    }
    creayeOneGroupEntity(uniform) {
        let groupEntity;
        if (uniform.type === 'number') {
            groupEntity = new BindGroupEntity({
                binding: uniform.binding,
                resource: {
                    buffer: uniform?.lightBuffer?.gpuBuffer || this.buffer.gpuBuffer,
                    offset: 0,
                    //兼容灯光
                    //size:uniform.bufferSize!=undefined?uniform.bufferSize:Material.getBindingSize(uniforms)
                    size: uniform.bufferSize != undefined ? uniform.bufferSize : this.uniformsSize * 4
                }
            });
        }
        else if (uniform.type === 'texture') {
            groupEntity = new BindGroupEntity({
                binding: uniform.binding,
                resource: uniform.value.texureView
            });
        }
        else if (uniform.type === 'sampler') {
            groupEntity = new BindGroupEntity({
                binding: uniform.binding,
                resource: uniform.value.gpuSampler
            });
        }
        return groupEntity;
    }
}

class LightShaderData extends ShaderData {
    constructor(lightManger, layoutIndex, groupIndex) {
        super('light', 0, layoutIndex, groupIndex);
        this.lightManger = lightManger;
        this.dirty = true;
    }
    update(device, lightManger) {
        if (this.dirty) {
            this.destroy();
            this.dirty = false;
            this.createLightUniformBuffer(device, lightManger);
        }
        this.setLightData(lightManger);
    }
    uploadUniform(context, lightManger) {
        if (this.dirty) {
            this.destroy();
            this.dirty = false;
            this.createLightUniformBuffer(context.device, lightManger);
            this._uniforms.forEach((uniform) => uniform.set());
        }
        this.setLightData(lightManger);
    }
    bind(context, passEncoder) {
        this.uploadUniform(context, this.lightManger);
        const { groupLayout, bindGroup } = this.createBindGroupAndLayout(context.device, this.label, this.layoutIndex, this.groupIndex);
        bindGroup.bind(passEncoder);
        this.bindGroup = bindGroup;
        this.groupLayout = groupLayout;
    }
    createLightUniformBuffer(device, lightManger) {
        this.commonBuffer = Buffer.createUniformBuffer(device, lightManger.commonTatalByte, { type: 'read-only-storage' }, BufferUsage.Storage);
        if (lightManger.lightDefines.spotLight)
            this.spotLightsBuffer = Buffer.createUniformBuffer(device, lightManger.spotLightsByte, { type: 'read-only-storage' }, BufferUsage.Storage);
        if (lightManger.lightDefines.pointLight)
            this.pointLightsBuffer = Buffer.createUniformBuffer(device, lightManger.pointLightsByte, { type: 'read-only-storage' }, BufferUsage.Storage);
        if (lightManger.lightDefines.dirtectLight)
            this.dirtectLightsBuffer = Buffer.createUniformBuffer(device, lightManger.dirtectLightsByte, { type: 'read-only-storage' }, BufferUsage.Storage);
    }
    setLightData(lightManger) {
        this.commonBuffer.setSubData(0, lightManger.commonLightBuffer);
        if (this.pointLightsBuffer)
            this.pointLightsBuffer.setSubData(0, lightManger.pointLightsBuffer);
        if (this.spotLightsBuffer)
            this.spotLightsBuffer.setSubData(0, lightManger.spotLightsBuffer);
        if (this.dirtectLightsBuffer)
            this.dirtectLightsBuffer.setSubData(0, lightManger.dirtectLightsBuffer);
    }
    setLight(name, binding, size) {
        if (this._uniforms.get(name))
            return;
        const uniform = new UniformLight(name, binding, this, size);
        this._uniforms.set(name, uniform);
    }
    destroy() {
        if (this.commonBuffer)
            this.commonBuffer.destroy();
        if (this.spotLightsBuffer)
            this.spotLightsBuffer.destroy();
        if (this.pointLightsBuffer)
            this.pointLightsBuffer.destroy();
        if (this.dirtectLightsBuffer)
            this.dirtectLightsBuffer.destroy();
    }
}

class SystemRenderResource {
    constructor() {
    }
    get layouts() {
        return [this.cameraShaderData.groupLayout, this.lightShaderData.groupLayout];
    }
    update(frameState, scene) {
        const { lightManger } = scene;
        this.updateLight(lightManger);
        this.updateCamera(frameState);
    }
    bind(context, passEncoder) {
        this.lightShaderData.bind(context, passEncoder);
        this.cameraShaderData.bind(context, passEncoder);
    }
    // camera
    updateCamera(frameState) {
        if (!this.cameraShaderData) {
            this.createCameraShaderData(frameState);
        }
    }
    // light
    updateLight(lightManger) {
        if (lightManger.lightCountDirty) {
            lightManger.lightCountDirty = false;
            this.createLightShaderData(lightManger);
        }
    }
    createCameraShaderData(frameState) {
        this.cameraShaderData = new ShaderData('system', 0, 1, 1);
        this.cameraShaderData.setMatrix4('projectionMatrix', () => {
            return frameState.camera.projectionMatrix;
        });
        this.cameraShaderData.setMatrix4('viewMatrix', () => {
            return frameState.camera.viewMatrix;
        });
        this.cameraShaderData.setMatrix4('inverseViewMatrix', () => {
            return frameState.camera.inverseViewMatrix;
        });
        this.cameraShaderData.setFloatVec3('position', () => {
            return frameState.camera.position;
        });
    }
    createLightShaderData(lightManger) {
        if (!this.lightShaderData)
            this.lightShaderData = new LightShaderData(lightManger, 2, 2);
        this.lightShaderData.setLight('commonBuffer', 0, lightManger.commonTatalByte);
        if (lightManger.lightDefines.spotLight) {
            this.lightShaderData.setLight('spotLightsBuffer', lightManger.lightDefines.spotLightBinding, lightManger.spotLightsByte);
        }
        if (lightManger.lightDefines.pointLight) {
            this.lightShaderData.setLight('pointLightsBuffer', lightManger.lightDefines.pointLightBinding, lightManger.pointLightsByte);
        }
        if (lightManger.lightDefines.dirtectLight) {
            this.lightShaderData.setLight('dirtectLightsBuffer', lightManger.lightDefines.dirtectLightBinding, lightManger.dirtectLightsByte);
        }
    }
    destroy() {
    }
}

class MipmapGenerator {
    constructor(device) {
        this.device = device;
        this.sampler = device.createSampler({ minFilter: 'linear' });
        // We'll need a new pipeline for every texture format used.
        this.pipelines = {};
    }
    getMipmapPipeline(format) {
        let pipeline = this.pipelines[format];
        if (!pipeline) {
            // Shader modules is shared between all pipelines, so only create once.
            if (!this.mipmapShaderModule) {
                this.mipmapShaderModule = this.device.createShaderModule({
                    code: `
              var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
              struct VertexOutput {
                @builtin(position) position : vec4<f32>,
                @location(0) texCoord : vec2<f32>,
              };
              @vertex
              fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                var output : VertexOutput;
                output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                return output;
              }
              @group(0) @binding(0) var imgSampler : sampler;
              @group(0) @binding(1) var img : texture_2d<f32>;
              @fragment
              fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                return textureSample(img, imgSampler, texCoord);
              }
            `,
                });
            }
            pipeline = this.device.createRenderPipeline({
                layout: 'auto',
                vertex: {
                    module: this.mipmapShaderModule,
                    entryPoint: 'vertexMain',
                },
                fragment: {
                    module: this.mipmapShaderModule,
                    entryPoint: 'fragmentMain',
                    targets: [{ format }],
                }
            });
            this.pipelines[format] = pipeline;
        }
        return pipeline;
    }
    /**
     * Generates mipmaps for the given GPUTexture from the data in level 0.
     *
     * @param {module:External.GPUTexture} texture - Texture to generate mipmaps for.
     * @param {object} textureDescriptor - GPUTextureDescriptor the texture was created with.
     * @returns {module:External.GPUTexture} - The originally passed texture
     */
    generateMipmap(sourceTexture) {
        const texture = sourceTexture.gpuTexture;
        const textureDescriptor = sourceTexture.textureProp;
        // TODO: Does this need to handle sRGB formats differently?
        const pipeline = this.getMipmapPipeline(textureDescriptor.format);
        if (textureDescriptor.dimension == '3d' || textureDescriptor.dimension == '1d') {
            throw new Error('Generating mipmaps for non-2d textures is currently unsupported!');
        }
        let mipTexture = texture;
        const arrayLayerCount = textureDescriptor.size.depth || 1; // Only valid for 2D textures.
        // If the texture was created with RENDER_ATTACHMENT usage we can render directly between mip levels.
        const renderToSource = textureDescriptor.usage & GPUTextureUsage.RENDER_ATTACHMENT;
        if (!renderToSource) {
            // Otherwise we have to use a separate texture to render into. It can be one mip level smaller than the source
            // texture, since we already have the top level.
            const mipTextureDescriptor = {
                size: {
                    width: Math.ceil(textureDescriptor.size.width / 2),
                    height: Math.ceil(textureDescriptor.size.height / 2),
                    depthOrArrayLayers: arrayLayerCount,
                },
                format: textureDescriptor.format,
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
                mipLevelCount: textureDescriptor.mipLevelCount - 1,
            };
            mipTexture = this.device.createTexture(mipTextureDescriptor);
        }
        const commandEncoder = this.device.createCommandEncoder({});
        // TODO: Consider making this static.
        const bindGroupLayout = pipeline.getBindGroupLayout(0);
        for (let arrayLayer = 0; arrayLayer < arrayLayerCount; ++arrayLayer) {
            let srcView = texture.createView({
                baseMipLevel: 0,
                mipLevelCount: 1,
                dimension: '2d',
                baseArrayLayer: arrayLayer,
                arrayLayerCount: 1,
            });
            let dstMipLevel = renderToSource ? 1 : 0;
            for (let i = 1; i < textureDescriptor.mipLevelCount; ++i) {
                const dstView = mipTexture.createView({
                    baseMipLevel: dstMipLevel++,
                    mipLevelCount: 1,
                    dimension: '2d',
                    baseArrayLayer: arrayLayer,
                    arrayLayerCount: 1,
                });
                const passEncoder = commandEncoder.beginRenderPass({
                    colorAttachments: [{
                            view: dstView,
                            loadOp: 'clear',
                            storeOp: 'store'
                        }],
                });
                const bindGroup = this.device.createBindGroup({
                    layout: bindGroupLayout,
                    entries: [{
                            binding: 0,
                            resource: this.sampler,
                        }, {
                            binding: 1,
                            resource: srcView,
                        }],
                });
                passEncoder.setPipeline(pipeline);
                passEncoder.setBindGroup(0, bindGroup);
                passEncoder.draw(3, 1, 0, 0);
                passEncoder.end();
                srcView = dstView;
            }
        }
        // If we didn't render to the source texture, finish by copying the mip results from the temporary mipmap texture
        // to the source.
        if (!renderToSource) {
            const mipLevelSize = {
                width: Math.ceil(textureDescriptor.size.width / 2),
                height: Math.ceil(textureDescriptor.size.height / 2),
                depthOrArrayLayers: arrayLayerCount,
            };
            for (let i = 1; i < textureDescriptor.mipLevelCount; ++i) {
                commandEncoder.copyTextureToTexture({
                    texture: mipTexture,
                    mipLevel: i - 1,
                }, {
                    texture: texture,
                    mipLevel: i,
                }, mipLevelSize);
                mipLevelSize.width = Math.ceil(mipLevelSize.width / 2);
                mipLevelSize.height = Math.ceil(mipLevelSize.height / 2);
            }
        }
        this.device.queue.submit([commandEncoder.finish()]);
        if (!renderToSource) {
            mipTexture.destroy();
        }
        return texture;
    }
}

const pipelineLayoutCache = new Map();
class PipelineLayout {
    constructor(device, label, groupLayouts = [], index) {
        this.groupLayouts = groupLayouts;
        this.index = index || 0;
        this.gpuPipelineLayout = device.createPipelineLayout({
            label: label,
            bindGroupLayouts: groupLayouts.map((layout) => {
                return layout.gpuBindGroupLayout;
            })
        });
    }
    static getPipelineLayoutFromCache(device, label, groupLayouts) {
        if (pipelineLayoutCache.has(label)) {
            return pipelineLayoutCache.get(label);
        }
        else {
            const bindGroupLayout = new PipelineLayout(device, label, groupLayouts);
            pipelineLayoutCache.set(label, bindGroupLayout);
            return bindGroupLayout;
        }
    }
}

const renderPipelines = new Map();
const computePipelines = new Map();
class Pipeline {
    constructor(type, device, descriptor) {
        this.type = type;
        this.descriptor = descriptor;
        this.device = device;
        this.createPipeline();
    }
    createPipeline() {
        if (this.type == 'render') {
            this.gpuPipeline = this.device.createRenderPipeline(this.descriptor);
        }
        else {
            this.gpuPipeline = this.device.createComputePipeline(this.descriptor);
        }
    }
    bind(passEncoder) {
        if (this.type == 'render') {
            passEncoder.setPipeline(this.gpuPipeline);
        }
        else {
            passEncoder.setPipeline(this.gpuPipeline);
        }
    }
    static getRenderPipelineFromCache(device, drawComand, groupLayouts) {
        const { renderState, shaderSource, materialType } = drawComand;
        const rs = RenderState.getFromRenderStateCache(renderState);
        const rsStr = JSON.stringify(rs);
        const combineStr = materialType.concat(shaderSource.uid).concat(rsStr);
        const hashId = stringToHash(combineStr);
        const combineLayouts = groupLayouts.sort((layout1, layout2) => layout1.index - layout2.index);
        let pipeline = renderPipelines.get(hashId);
        if (!pipeline) {
            const descriptor = Pipeline.getPipelineDescriptor(device, drawComand, rs, combineLayouts, hashId.toString());
            pipeline = new Pipeline('render', device, descriptor);
            renderPipelines.set(hashId, pipeline);
        }
        return pipeline;
    }
    static getComputePipelineFromCache(device, drawComand, groupLayouts) {
        const { shaderSource, materialType } = drawComand;
        const hashId = stringToHash(materialType.concat(shaderSource.uid));
        let pipeline = computePipelines.get(hashId);
        if (!pipeline) {
            const { shaderSource } = drawComand;
            pipeline = device.createComputePipeline({
                layout: PipelineLayout.getPipelineLayoutFromCache(device, hashId.toString(), groupLayouts).gpuPipelineLayout,
                compute: {
                    module: shaderSource.createShaderModule(device),
                    entryPoint: shaderSource.computeMain,
                },
            });
            computePipelines.set(hashId, pipeline);
        }
        return pipeline;
    }
    static getPipelineDescriptor(device, drawComand, renderState, groupLayouts, hashId) {
        const { vertexBuffer, shaderSource } = drawComand;
        const { vert, frag } = shaderSource.createShaderModule(device);
        return {
            //需要改动
            layout: PipelineLayout.getPipelineLayoutFromCache(device, hashId, groupLayouts).gpuPipelineLayout,
            vertex: {
                module: vert,
                entryPoint: shaderSource.vertEntryPoint,
                buffers: vertexBuffer.getBufferDes(),
            },
            primitive: renderState.primitive,
            depthStencil: renderState.depthStencil,
            multisample: renderState.multisample,
            fragment: {
                module: frag,
                entryPoint: shaderSource.fragEntryPoint,
                targets: renderState.targets
            },
        };
    }
}
// Borrowed from https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function stringToHash(str) {
    let hash = 0;
    if (str.length == 0)
        return hash;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

class Context {
    constructor({ canvas, container, context, pixelRatio } = {}) {
        this.canvas = canvas || document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        container.appendChild(this.canvas);
        this.context =
            context || this.canvas.getContext("webgpu");
        this.pixelRatio = pixelRatio || window.devicePixelRatio || 1;
        this.device = undefined;
    }
    async init(requestAdapter = {}, deviceDescriptor = {}, presentationContextDescriptor = {}
    // glslangPath: string
    ) {
        try {
            if (!this.context) {
                throw new Error(`Failed to instantiate "webgpu" context.`);
            }
            if (!navigator.gpu) {
                throw new Error(`Missing "navigator.gpu".`);
            }
            this.adapter = await navigator.gpu.requestAdapter();
            this.device = await this.adapter.requestDevice();
            this.presentationSize = {
                width: this.canvas.clientWidth * this.pixelRatio,
                height: this.canvas.clientHeight * this.pixelRatio,
                depth: 1,
            };
            this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();
            this.device.addEventListener("uncapturederror", (error) => {
                console.log(error);
                //State.error = true;
            });
            this.mipmapTools = new MipmapGenerator(this.device);
            this.context.configure({
                device: this.device,
                // format: navigator.gpu.getPreferredCanvasFormat(),
                format: this.presentationFormat,
                usage: TextureUsage.RenderAttachment,
                alphaMode: 'opaque',
                ...presentationContextDescriptor,
            });
            this._viewPort = {
                x: 0,
                y: 0,
                width: this.canvas.clientWidth * this.pixelRatio,
                height: this.canvas.clientHeight * this.pixelRatio,
            };
            this._scissorTestEnabled = false;
            this.systemRenderResource = new SystemRenderResource();
        }
        catch (error) {
            console.error(error);
            return false;
        }
        return true;
    }
    setViewPort(x, y, width, height) {
        this._viewPort = { x, y, width, height };
    }
    setScissorTest(x, y, width, height) {
        this._scissorTestEnabled = true;
        this._scissorTest = { x, y, width, height };
    }
    resize(width, height, presentationContextDescriptor = {}) {
        const w = width * this.pixelRatio;
        const h = height * this.pixelRatio;
        this.canvas.width = w;
        this.canvas.height = h;
        Object.assign(this.canvas.style, { width, height });
        this.context.configure({
            device: this.device,
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: TextureUsage.RenderAttachment,
            alphaMode: GPUCanvasCompositingAlphaMode.Premultiplied,
            ...presentationContextDescriptor,
        });
    }
    render(command, passEncoder) {
        if (command.shaderData)
            command.shaderData.bind(this, passEncoder);
        //设置系统
        this.systemRenderResource.bind(this, passEncoder);
        if (command.renderState) {
            command.renderState.viewport = this._viewPort;
            command.renderState.scissorTestEnabled = this._scissorTestEnabled;
            RenderState.applyRenderState(passEncoder, command.renderState);
        }
        if (command.vertexBuffer)
            command.vertexBuffer.bind(this.device, passEncoder);
        if (command.indexBuffer)
            command.indexBuffer.bind(this.device, passEncoder);
        const pipeline = Pipeline.getRenderPipelineFromCache(this.device, command, this.systemRenderResource.layouts.concat(command.shaderData.groupLayout));
        pipeline.bind(passEncoder);
        if (command.indexBuffer) {
            passEncoder.drawIndexed(command.count || 0, command.instances || 1, 0, 0, 0);
        }
        else if (command.count) {
            passEncoder.draw(command.count, command.instances || 1, 0, 0);
        }
        else if (command.dispatch) {
            passEncoder.dispatch(...(Array.isArray(command.dispatch)
                ? command.dispatch
                : [command.dispatch]));
        }
    }
}

class Texture {
    constructor(textureProp) {
        this.textureProp = Object.assign({
            format: TextureFormat.RGBA8Unorm,
            usage: GPUTextureUsage.TEXTURE_BINDING |
                GPUTextureUsage.COPY_DST |
                GPUTextureUsage.RENDER_ATTACHMENT,
        }, textureProp);
        this.sampler = textureProp.sampler;
        this.dirty = true;
    }
    get layoutType() {
        const { viewFormats, sampleType, sampleCount } = this.textureProp;
        // const 
        return {
            sampleType: defaultValue(sampleType, "float"),
            viewDimension: defaultValue(viewFormats, "2d"),
            multisampled: sampleCount && sampleCount > 1 ? true : false
        };
    }
    get texureView() {
        return this.gpuTexture.createView({
            dimension: defaultValue(this.textureProp.viewFormats, '2d')
        });
    }
    update(context) {
        if (!this.context)
            this.context = context;
        if (!this.gpuTexture)
            this.gpuTexture = this.createGPUTexture();
        if (this.dirty) {
            this.dirty = false;
            if (this.textureProp.data) {
                if (Array.isArray(this.textureProp.data)) {
                    this.textureProp.data.forEach(imageData => {
                        this.setData(imageData);
                    });
                }
                else {
                    this.setData(this.textureProp.data);
                }
            }
            if (this.textureProp.needMipMap) {
                this.gpuTexture = context.mipmapTools.generateMipmap(this);
            }
            if (this.sampler)
                this.sampler.update(context);
        }
    }
    setData(options) {
        const { source, width = options.source.width, height = options.source.height, depth = 1, sourceX = 0, sourceY = 0, mipLevel = 0, x = 0, y = 0, z = 0, aspect = 'all', colorSpace = 'srgb', premultipliedAlpha = false } = options;
        this.context.device.queue.copyExternalImageToTexture({
            source,
            origin: [sourceX, sourceY]
        }, {
            texture: this.gpuTexture,
            origin: [x, y, z],
            mipLevel,
            aspect,
            colorSpace,
            premultipliedAlpha
        }, [
            width,
            height,
            depth
        ]);
    }
    destroy() {
        this.gpuTexture.destroy();
    }
    createGPUTexture() {
        if (typeof this.textureProp.format === 'number') {
            throw new Error('number format');
        }
        const { width, height, depth } = this.textureProp.size;
        return this.context.device.createTexture({
            size: [width, height, depth],
            dimension: this.textureProp.dimension || '2d',
            format: this.textureProp.format,
            usage: this.textureProp.usage,
            mipLevelCount: this.textureProp.mipLevelCount || 1,
            sampleCount: this.textureProp.sampleCount || 1
        });
    }
}

class Sampler {
    constructor(descriptor = {
        magFilter: "linear",
        minFilter: "linear",
        mipmapFilter: "linear",
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge",
        addressModeW: "clamp-to-edge",
    }) {
        this.descriptor = descriptor;
        this.layoutType = "filtering";
    }
    update(context) {
        if (!this.gpuSampler)
            this.gpuSampler = context.device.createSampler(this.descriptor);
    }
}

class Attachment {
    constructor(value, options) {
        this.value = value;
        this.op = "clear";
        this.storeOp = "store";
        Object.assign(this, options);
    }
}

class Attribute {
    constructor(name, value, itemSize) {
        this.name = name;
        this.value = value;
        this.itemSize = itemSize;
        this.name = name;
        this.offset = 0;
        this.shaderLocation = 0;
    }
    getGPUAttribute() {
        return {
            shaderLocation: this.shaderLocation,
            format: this.format,
            offset: this.offset,
        };
    }
    destroy() {
        this.value = [];
    }
    applyMatrix3(matrix3) {
        if (this.itemSize === 2) {
            for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
                Attribute.v2.fromBufferAttribute(this, i);
                Attribute.v2.applyMatrix3(matrix3);
                this.setXY(i, Attribute.v2.x, Attribute.v2.y);
            }
        }
        else if (this.itemSize === 3) {
            for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
                Attribute.v3.fromBufferAttribute(this, i);
                Attribute.v3.applyMatrix3(matrix3);
                this.setXYZ(i, Attribute.v3.x, Attribute.v3.y, Attribute.v3.z);
            }
        }
        return this;
    }
    applyMatrix4(matrix4) {
        for (let i = 0, l = this.value.length / this.itemSize; i < l; i++) {
            Attribute.v3.fromBufferAttribute(this, i);
            Attribute.v3.applyMatrix4(matrix4);
            this.setXYZ(i, Attribute.v3.x, Attribute.v3.y, Attribute.v3.z);
        }
        return this;
    }
    setX(index, x) {
        this.value[index * this.itemSize] = x;
        return this;
    }
    getX(index) {
        let x = this.value[index * this.itemSize];
        return x;
    }
    setY(index, y) {
        this.value[index * this.itemSize + 1] = y;
        return this;
    }
    getY(index) {
        let y = this.value[index * this.itemSize + 1];
        return y;
    }
    setZ(index, z) {
        this.value[index * this.itemSize + 2] = z;
        return this;
    }
    getZ(index) {
        let z = this.value[index * this.itemSize + 2];
        return z;
    }
    getW(index) {
        let w = this.value[index * this.itemSize + 3];
        return w;
    }
    setXY(index, x, y) {
        index *= this.itemSize;
        this.value[index + 0] = x;
        this.value[index + 1] = y;
        return this;
    }
    setXYZ(index, x, y, z) {
        index *= this.itemSize;
        this.value[index + 0] = x;
        this.value[index + 1] = y;
        this.value[index + 2] = z;
        return this;
    }
    setXYZW(index, x, y, z, w) {
        index *= this.itemSize;
        this.value[index + 0] = x;
        this.value[index + 1] = y;
        this.value[index + 2] = z;
        this.value[index + 3] = w;
        return this;
    }
}
Attribute.v3 = new Vector3();
Attribute.v2 = new Vector2();
class Float32Attribute extends Attribute {
    constructor(name, value, itemSize) {
        super(name, value, itemSize);
        this.format = getAttributeFormat('float32', itemSize);
        this.attributeByteSize = Float32Array.BYTES_PER_ELEMENT * itemSize;
    }
}
function getAttributeFormat(type, itemSize) {
    const key = `${type}x${itemSize}`;
    let format;
    switch (key) {
        case "float32":
            format = VertexFormat.Float32;
            break;
        case "float32x2":
            format = VertexFormat.Float32x2;
            break;
        case "float32x3":
            format = VertexFormat.Float32x3;
            break;
        case "float32x4":
            format = VertexFormat.Float32x4;
            break;
    }
    return format;
}

/**
 * This enumerated type is used in determining where, relative to the frustum, an
 * object is located. The object can either be fully contained within the frustum (INSIDE),
 * partially inside the frustum and partially outside (INTERSECTING), or somewhere entirely
 * outside of the frustum's 6 planes (OUTSIDE).
 *
 * @enum {Number}
 */
const Intersect = {
    /**
     * Represents that an object is not contained within the frustum.
     *
     * @type {Number}
     * @constant
     */
    OUTSIDE: -1,
    /**
     * Represents that an object intersects one of the frustum's planes.
     *
     * @type {Number}
     * @constant
     */
    INTERSECTING: 0,
    /**
     * Represents that an object is fully within the frustum.
     *
     * @type {Number}
     * @constant
     */
    INSIDE: 1,
};
var Intersect$1 = Object.freeze(Intersect);

// @ts-nocheck
/**
 * A set of 4-dimensional coordinates used to represent rotation in 3-dimensional space.
 * @alias Quaternion
 * @constructor
 *
 * @param {Number} [x=0.0] The X component.
 * @param {Number} [y=0.0] The Y component.
 * @param {Number} [z=0.0] The Z component.
 * @param {Number} [w=0.0] The W component.
 *
 * @see PackableForInterpolation
 */
class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /**
   * Computes the normalized form of the provided quaternion.
   */
    normalize() {
        const inverseMagnitude = 1.0 / Quaternion.magnitude(this);
        const x = this.x * inverseMagnitude;
        const y = this.y * inverseMagnitude;
        const z = this.z * inverseMagnitude;
        const w = this.w * inverseMagnitude;
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    invert() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        this._onChangeCallback();
        return this;
    }
    setFromUnitVectors(vFrom, vTo) {
        // assumes direction vectors vFrom and vTo are normalized
        let r = Vector3.dot(vFrom, vTo) + 1;
        if (r < Number.EPSILON) {
            // vFrom and vTo point in opposite directions
            r = 0;
            if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                this.x = -vFrom.y;
                this.y = vFrom.x;
                this.z = 0;
                this.w = r;
            }
            else {
                this.x = 0;
                this.y = -vFrom.z;
                this.z = vFrom.y;
                this.w = r;
            }
        }
        else {
            // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
            this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
            this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
            this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
            this._w = r;
        }
        return this.normalize();
    }
    /**
   * Duplicates this Quaternion instance.
   */
    clone() {
        return Quaternion.clone(this, this);
    }
    ;
    /**
     * Compares this and the provided quaternion componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Quaternion} [right] The right hand side quaternion.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    equals(right) {
        return Quaternion.equals(this, right);
    }
    ;
    /**
     * Compares this and the provided quaternion componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Quaternion} [right] The right hand side quaternion.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    equalsEpsilon(right, epsilon) {
        return Quaternion.equalsEpsilon(this, right, epsilon);
    }
    ;
    /**
     * Computes a quaternion representing a rotation around an axis.
     *
     * @param {Vector3} axis The axis of rotation.
     * @param {Number} angle The angle in radians to rotate around the axis.
     * @param {Quaternion} [result] The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter or a new Quaternion instance if one was not provided.
     */
    static fromAxisAngle(axis, angle) {
        const halfAngle = angle / 2.0;
        const s = Math.sin(halfAngle);
        fromAxisAngleScratch = Vector3.normalize(axis, fromAxisAngleScratch);
        const x = fromAxisAngleScratch.x * s;
        const y = fromAxisAngleScratch.y * s;
        const z = fromAxisAngleScratch.z * s;
        const w = Math.cos(halfAngle);
        // if (!defined(result)) {
        //   return 
        // }
        let result = new Quaternion(x, y, z, w);
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    /**
     * Computes a Quaternion from the provided Matrix3 instance.
     *
     * @param {Matrix3} matrix The rotation matrix.
     * @param {Quaternion} [result] The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter or a new Quaternion instance if one was not provided.
     *
     * @see Matrix3.fromQuaternion
     */
    static fromRotationMatrix(matrix, result) {
        let root;
        let x;
        let y;
        let z;
        let w;
        const m00 = matrix[Matrix3.COLUMN0ROW0];
        const m11 = matrix[Matrix3.COLUMN1ROW1];
        const m22 = matrix[Matrix3.COLUMN2ROW2];
        const trace = m00 + m11 + m22;
        if (trace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            root = Math.sqrt(trace + 1.0); // 2w
            w = 0.5 * root;
            root = 0.5 / root; // 1/(4w)
            x = (matrix[Matrix3.COLUMN1ROW2] - matrix[Matrix3.COLUMN2ROW1]) * root;
            y = (matrix[Matrix3.COLUMN2ROW0] - matrix[Matrix3.COLUMN0ROW2]) * root;
            z = (matrix[Matrix3.COLUMN0ROW1] - matrix[Matrix3.COLUMN1ROW0]) * root;
        }
        else {
            // |w| <= 1/2
            const next = fromRotationMatrixNext;
            let i = 0;
            if (m11 > m00) {
                i = 1;
            }
            if (m22 > m00 && m22 > m11) {
                i = 2;
            }
            const j = next[i];
            const k = next[j];
            root = Math.sqrt(matrix[Matrix3.getElementIndex(i, i)] -
                matrix[Matrix3.getElementIndex(j, j)] -
                matrix[Matrix3.getElementIndex(k, k)] +
                1.0);
            const quat = fromRotationMatrixQuat;
            quat[i] = 0.5 * root;
            root = 0.5 / root;
            w =
                (matrix[Matrix3.getElementIndex(k, j)] -
                    matrix[Matrix3.getElementIndex(j, k)]) *
                    root;
            quat[j] =
                (matrix[Matrix3.getElementIndex(j, i)] +
                    matrix[Matrix3.getElementIndex(i, j)]) *
                    root;
            quat[k] =
                (matrix[Matrix3.getElementIndex(k, i)] +
                    matrix[Matrix3.getElementIndex(i, k)]) *
                    root;
            x = -quat[0];
            y = -quat[1];
            z = -quat[2];
        }
        if (!defined(result)) {
            return new Quaternion(x, y, z, w);
        }
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    /**
   * Computes a rotation from the given heading, pitch and roll angles. Heading is the rotation about the
   * negative z axis. Pitch is the rotation about the negative y axis. Roll is the rotation about
   * the positive x axis.
   *
   * @param {HeadingPitchRoll} headingPitchRoll The rotation expressed as a heading, pitch and roll.
   * @param {Quaternion} [result] The object onto which to store the result.
   * @returns {Quaternion} The modified result parameter or a new Quaternion instance if none was provided.
   */
    static fromHeadingPitchRoll(headingPitchRoll, result) {
        scratchRollQuaternion = Quaternion.fromAxisAngle(Vector3.UNIT_X, headingPitchRoll.roll, scratchHPRQuaternion);
        scratchPitchQuaternion = Quaternion.fromAxisAngle(Vector3.UNIT_Y, -headingPitchRoll.pitch, result);
        result = Quaternion.multiply(scratchPitchQuaternion, scratchRollQuaternion, scratchPitchQuaternion);
        scratchHeadingQuaternion = Quaternion.fromAxisAngle(Vector3.UNIT_Z, -headingPitchRoll.heading, scratchHPRQuaternion);
        return Quaternion.multiply(scratchHeadingQuaternion, result, result);
    }
    /**
     * Stores the provided instance into the provided array.
     *
     * @param {Quaternion} value The value to pack.
     * @param {Number[]} array The array to pack into.
     * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
     *
     * @returns {Number[]} The array that was packed into
     */
    static pack(value, array, startingIndex) {
        startingIndex = defaultValue(startingIndex, 0);
        array[startingIndex++] = value.x;
        array[startingIndex++] = value.y;
        array[startingIndex++] = value.z;
        array[startingIndex] = value.w;
        return array;
    }
    /**
     * Retrieves an instance from a packed array.
     *
     * @param {Number[]} array The packed array.
     * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
     * @param {Quaternion} [result] The object into which to store the result.
     * @returns {Quaternion} The modified result parameter or a new Quaternion instance if one was not provided.
     */
    static unpack(array, startingIndex, result) {
        startingIndex = defaultValue(startingIndex, 0);
        if (!defined(result)) {
            result = new Quaternion();
        }
        result.x = array[startingIndex];
        result.y = array[startingIndex + 1];
        result.z = array[startingIndex + 2];
        result.w = array[startingIndex + 3];
        return result;
    }
    /**
   * Converts a packed array into a form suitable for interpolation.
   *
   * @param {Number[]} packedArray The packed array.
   * @param {Number} [startingIndex=0] The index of the first element to be converted.
   * @param {Number} [lastIndex=packedArray.length] The index of the last element to be converted.
   * @param {Number[]} [result] The object into which to store the result.
   */
    static convertPackedArrayForInterpolation(packedArray, startingIndex, lastIndex, result) {
        Quaternion.unpack(packedArray, lastIndex * 4, sampledQuaternionQuaternion0Conjugate);
        Quaternion.conjugate(sampledQuaternionQuaternion0Conjugate, sampledQuaternionQuaternion0Conjugate);
        for (let i = 0, len = lastIndex - startingIndex + 1; i < len; i++) {
            const offset = i * 3;
            Quaternion.unpack(packedArray, (startingIndex + i) * 4, sampledQuaternionTempQuaternion);
            Quaternion.multiply(sampledQuaternionTempQuaternion, sampledQuaternionQuaternion0Conjugate, sampledQuaternionTempQuaternion);
            if (sampledQuaternionTempQuaternion.w < 0) {
                Quaternion.negate(sampledQuaternionTempQuaternion, sampledQuaternionTempQuaternion);
            }
            Quaternion.computeAxis(sampledQuaternionTempQuaternion, sampledQuaternionAxis);
            const angle = Quaternion.computeAngle(sampledQuaternionTempQuaternion);
            if (!defined(result)) {
                result = [];
            }
            result[offset] = sampledQuaternionAxis.x * angle;
            result[offset + 1] = sampledQuaternionAxis.y * angle;
            result[offset + 2] = sampledQuaternionAxis.z * angle;
        }
    }
    /**
   * Retrieves an instance from a packed array converted with {@link convertPackedArrayForInterpolation}.
   *
   * @param {Number[]} array The array previously packed for interpolation.
   * @param {Number[]} sourceArray The original packed array.
   * @param {Number} [firstIndex=0] The firstIndex used to convert the array.
   * @param {Number} [lastIndex=packedArray.length] The lastIndex used to convert the array.
   * @param {Quaternion} [result] The object into which to store the result.
   * @returns {Quaternion} The modified result parameter or a new Quaternion instance if one was not provided.
   */
    static unpackInterpolationResult(array, sourceArray, firstIndex, lastIndex, result) {
        if (!defined(result)) {
            result = new Quaternion();
        }
        Vector3.fromArray(array, 0, sampledQuaternionRotation);
        const magnitude = Vector3.magnitude(sampledQuaternionRotation);
        Quaternion.unpack(sourceArray, lastIndex * 4, sampledQuaternionQuaternion0);
        if (magnitude === 0) {
            Quaternion.clone(Quaternion.IDENTITY, sampledQuaternionTempQuaternion);
        }
        else {
            Quaternion.fromAxisAngle(sampledQuaternionRotation, magnitude, sampledQuaternionTempQuaternion);
        }
        return Quaternion.multiply(sampledQuaternionTempQuaternion, sampledQuaternionQuaternion0, result);
    }
    /**
   * Duplicates a Quaternion instance.
   *
   * @param {Quaternion} quaternion The quaternion to duplicate.
   * @param {Quaternion} [result] The object onto which to store the result.
   * @returns {Quaternion} The modified result parameter or a new Quaternion instance if one was not provided. (Returns undefined if quaternion is undefined)
   */
    static clone(quaternion, result) {
        if (!defined(quaternion)) {
            return undefined;
        }
        if (!defined(result)) {
            return new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
        }
        result.x = quaternion.x;
        result.y = quaternion.y;
        result.z = quaternion.z;
        result.w = quaternion.w;
        return result;
    }
    /**
     * Computes the conjugate of the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to conjugate.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static conjugate(quaternion, result) {
        result.x = -quaternion.x;
        result.y = -quaternion.y;
        result.z = -quaternion.z;
        result.w = quaternion.w;
        return result;
    }
    /**
     * Computes magnitude squared for the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to conjugate.
     * @returns {Number} The magnitude squared.
     */
    static magnitudeSquared(quaternion) {
        return (quaternion.x * quaternion.x +
            quaternion.y * quaternion.y +
            quaternion.z * quaternion.z +
            quaternion.w * quaternion.w);
    }
    /**
     * Computes magnitude for the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to conjugate.
     * @returns {Number} The magnitude.
     */
    static magnitude(quaternion) {
        return Math.sqrt(Quaternion.magnitudeSquared(quaternion));
    }
    /**
   * Computes the normalized form of the provided quaternion.
   *
   * @param {Quaternion} quaternion The quaternion to normalize.
   * @param {Quaternion} result The object onto which to store the result.
   * @returns {Quaternion} The modified result parameter.
   */
    static normalize(quaternion, result) {
        const inverseMagnitude = 1.0 / Quaternion.magnitude(quaternion);
        const x = quaternion.x * inverseMagnitude;
        const y = quaternion.y * inverseMagnitude;
        const z = quaternion.z * inverseMagnitude;
        const w = quaternion.w * inverseMagnitude;
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    /**
     * Computes the inverse of the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to normalize.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static inverse(quaternion, result) {
        const magnitudeSquared = Quaternion.magnitudeSquared(quaternion);
        result = Quaternion.conjugate(quaternion, result);
        return Quaternion.multiplyByScalar(result, 1.0 / magnitudeSquared, result);
    }
    /**
     * Computes the componentwise sum of two quaternions.
     *
     * @param {Quaternion} left The first quaternion.
     * @param {Quaternion} right The second quaternion.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static add(left, right, result) {
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        result.z = left.z + right.z;
        result.w = left.w + right.w;
        return result;
    }
    ;
    /**
     * Computes the componentwise difference of two quaternions.
     *
     * @param {Quaternion} left The first quaternion.
     * @param {Quaternion} right The second quaternion.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static subtract(left, right, result) {
        result.x = left.x - right.x;
        result.y = left.y - right.y;
        result.z = left.z - right.z;
        result.w = left.w - right.w;
        return result;
    }
    ;
    /**
     * Negates the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to be negated.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static negate(quaternion, result) {
        result.x = -quaternion.x;
        result.y = -quaternion.y;
        result.z = -quaternion.z;
        result.w = -quaternion.w;
        return result;
    }
    ;
    /**
     * Computes the dot (scalar) product of two quaternions.
     *
     * @param {Quaternion} left The first quaternion.
     * @param {Quaternion} right The second quaternion.
     * @returns {Number} The dot product.
     */
    static dot(left, right) {
        return (left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w);
    }
    ;
    /**
     * Computes the product of two quaternions.
     *
     * @param {Quaternion} left The first quaternion.
     * @param {Quaternion} right The second quaternion.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static multiply(left, right, result) {
        const leftX = left.x;
        const leftY = left.y;
        const leftZ = left.z;
        const leftW = left.w;
        const rightX = right.x;
        const rightY = right.y;
        const rightZ = right.z;
        const rightW = right.w;
        const x = leftW * rightX + leftX * rightW + leftY * rightZ - leftZ * rightY;
        const y = leftW * rightY - leftX * rightZ + leftY * rightW + leftZ * rightX;
        const z = leftW * rightZ + leftX * rightY - leftY * rightX + leftZ * rightW;
        const w = leftW * rightW - leftX * rightX - leftY * rightY - leftZ * rightZ;
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    ;
    /**
     * Multiplies the provided quaternion componentwise by the provided scalar.
     *
     * @param {Quaternion} quaternion The quaternion to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static multiplyByScalar(quaternion, scalar, result) {
        result.x = quaternion.x * scalar;
        result.y = quaternion.y * scalar;
        result.z = quaternion.z * scalar;
        result.w = quaternion.w * scalar;
        return result;
    }
    ;
    /**
     * Divides the provided quaternion componentwise by the provided scalar.
     *
     * @param {Quaternion} quaternion The quaternion to be divided.
     * @param {Number} scalar The scalar to divide by.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static divideByScalar(quaternion, scalar, result) {
        result.x = quaternion.x / scalar;
        result.y = quaternion.y / scalar;
        result.z = quaternion.z / scalar;
        result.w = quaternion.w / scalar;
        return result;
    }
    ;
    /**
     * Computes the axis of rotation of the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to use.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static computeAxis(quaternion, result) {
        const w = quaternion.w;
        if (Math.abs(w - 1.0) < GMath.EPSILON6) {
            result.x = result.y = result.z = 0;
            return result;
        }
        const scalar = 1.0 / Math.sqrt(1.0 - w * w);
        result.x = quaternion.x * scalar;
        result.y = quaternion.y * scalar;
        result.z = quaternion.z * scalar;
        return result;
    }
    ;
    /**
     * Computes the angle of rotation of the provided quaternion.
     *
     * @param {Quaternion} quaternion The quaternion to use.
     * @returns {Number} The angle of rotation.
     */
    static computeAngle(quaternion) {
        if (Math.abs(quaternion.w - 1.0) < GMath.EPSILON6) {
            return 0.0;
        }
        return 2.0 * Math.acos(quaternion.w);
    }
    ;
    /**
     * Computes the linear interpolation or extrapolation at t using the provided quaternions.
     *
     * @param {Quaternion} start The value corresponding to t at 0.0.
     * @param {Quaternion} end The value corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static lerp(start, end, t, result) {
        lerpScratch = Quaternion.multiplyByScalar(end, t, lerpScratch);
        result = Quaternion.multiplyByScalar(start, 1.0 - t, result);
        return Quaternion.add(lerpScratch, result, result);
    }
    ;
    /**
     * Computes the spherical linear interpolation or extrapolation at t using the provided quaternions.
     *
     * @param {Quaternion} start The value corresponding to t at 0.0.
     * @param {Quaternion} end The value corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     *
     * @see Quaternion#fastSlerp
     */
    static slerp(start, end, t, result) {
        let dot = Quaternion.dot(start, end);
        // The angle between start must be acute. Since q and -q represent
        // the same rotation, negate q to get the acute angle.
        let r = end;
        if (dot < 0.0) {
            dot = -dot;
            r = slerpEndNegated = Quaternion.negate(end, slerpEndNegated);
        }
        // dot > 0, as the dot product approaches 1, the angle between the
        // quaternions vanishes. use linear interpolation.
        if (1.0 - dot < GMath.EPSILON6) {
            return Quaternion.lerp(start, r, t, result);
        }
        const theta = Math.acos(dot);
        slerpScaledP = Quaternion.multiplyByScalar(start, Math.sin((1 - t) * theta), slerpScaledP);
        slerpScaledR = Quaternion.multiplyByScalar(r, Math.sin(t * theta), slerpScaledR);
        result = Quaternion.add(slerpScaledP, slerpScaledR, result);
        return Quaternion.multiplyByScalar(result, 1.0 / Math.sin(theta), result);
    }
    ;
    /**
     * Computes an inner quadrangle point.
     * <p>This will compute quaternions that ensure a squad curve is C<sup>1</sup>.</p>
     *
     * @param {Quaternion} q0 The first quaternion.
     * @param {Quaternion} q1 The second quaternion.
     * @param {Quaternion} q2 The third quaternion.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     *
     * @see Quaternion#squad
     */
    static computeInnerQuadrangle(q0, q1, q2, result) {
        const qInv = Quaternion.conjugate(q1, squadScratchQuaternion0);
        Quaternion.multiply(qInv, q2, squadScratchQuaternion1);
        const cart0 = Quaternion.log(squadScratchQuaternion1, squadScratchCartesian0);
        Quaternion.multiply(qInv, q0, squadScratchQuaternion1);
        const cart1 = Quaternion.log(squadScratchQuaternion1, squadScratchCartesian1);
        Vector3.add(cart0, cart1, cart0);
        Vector3.multiplyByScalar(cart0, 0.25, cart0);
        Vector3.negate(cart0, cart0);
        Quaternion.exp(cart0, squadScratchQuaternion0);
        return Quaternion.multiply(q1, squadScratchQuaternion0, result);
    }
    ;
    /**
     * Computes the spherical quadrangle interpolation between quaternions.
     *
     * @param {Quaternion} q0 The first quaternion.
     * @param {Quaternion} q1 The second quaternion.
     * @param {Quaternion} s0 The first inner quadrangle.
     * @param {Quaternion} s1 The second inner quadrangle.
     * @param {Number} t The time in [0,1] used to interpolate.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     *
     *
     * @example
     * // 1. compute the squad interpolation between two quaternions on a curve
     * const s0 = Cesium.Quaternion.computeInnerQuadrangle(quaternions[i - 1], quaternions[i], quaternions[i + 1], new Cesium.Quaternion());
     * const s1 = Cesium.Quaternion.computeInnerQuadrangle(quaternions[i], quaternions[i + 1], quaternions[i + 2], new Cesium.Quaternion());
     * const q = Cesium.Quaternion.squad(quaternions[i], quaternions[i + 1], s0, s1, t, new Cesium.Quaternion());
     *
     * // 2. compute the squad interpolation as above but where the first quaternion is a end point.
     * const s1 = Cesium.Quaternion.computeInnerQuadrangle(quaternions[0], quaternions[1], quaternions[2], new Cesium.Quaternion());
     * const q = Cesium.Quaternion.squad(quaternions[0], quaternions[1], quaternions[0], s1, t, new Cesium.Quaternion());
     *
     * @see Quaternion#computeInnerQuadrangle
     */
    static squad(q0, q1, s0, s1, t, result) {
        const slerp0 = Quaternion.slerp(q0, q1, t, squadScratchQuaternion0);
        const slerp1 = Quaternion.slerp(s0, s1, t, squadScratchQuaternion1);
        return Quaternion.slerp(slerp0, slerp1, 2.0 * t * (1.0 - t), result);
    }
    ;
    /**
     * Computes the spherical linear interpolation or extrapolation at t using the provided quaternions.
     * This implementation is faster than {@link Quaternion#slerp}, but is only accurate up to 10<sup>-6</sup>.
     *
     * @param {Quaternion} start The value corresponding to t at 0.0.
     * @param {Quaternion} end The value corresponding to t at 1.0.
     * @param {Number} t The point along t at which to interpolate.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     *
     * @see Quaternion#slerp
     */
    static fastSlerp(start, end, t, result) {
        let x = Quaternion.dot(start, end);
        let sign;
        if (x >= 0) {
            sign = 1.0;
        }
        else {
            sign = -1.0;
            x = -x;
        }
        const xm1 = x - 1.0;
        const d = 1.0 - t;
        const sqrT = t * t;
        const sqrD = d * d;
        for (let i = 7; i >= 0; --i) {
            bT[i] = (u[i] * sqrT - v[i]) * xm1;
            bD[i] = (u[i] * sqrD - v[i]) * xm1;
        }
        const cT = sign *
            t *
            (1.0 +
                bT[0] *
                    (1.0 +
                        bT[1] *
                            (1.0 +
                                bT[2] *
                                    (1.0 +
                                        bT[3] *
                                            (1.0 +
                                                bT[4] *
                                                    (1.0 + bT[5] * (1.0 + bT[6] * (1.0 + bT[7]))))))));
        const cD = d *
            (1.0 +
                bD[0] *
                    (1.0 +
                        bD[1] *
                            (1.0 +
                                bD[2] *
                                    (1.0 +
                                        bD[3] *
                                            (1.0 +
                                                bD[4] *
                                                    (1.0 + bD[5] * (1.0 + bD[6] * (1.0 + bD[7]))))))));
        const temp = Quaternion.multiplyByScalar(start, cD, fastSlerpScratchQuaternion);
        Quaternion.multiplyByScalar(end, cT, result);
        return Quaternion.add(temp, result, result);
    }
    ;
    /**
     * Computes the spherical quadrangle interpolation between quaternions.
     * An implementation that is faster than {@link Quaternion#squad}, but less accurate.
     *
     * @param {Quaternion} q0 The first quaternion.
     * @param {Quaternion} q1 The second quaternion.
     * @param {Quaternion} s0 The first inner quadrangle.
     * @param {Quaternion} s1 The second inner quadrangle.
     * @param {Number} t The time in [0,1] used to interpolate.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter or a new instance if none was provided.
     *
     * @see Quaternion#squad
     */
    static fastSquad(q0, q1, s0, s1, t, result) {
        const slerp0 = Quaternion.fastSlerp(q0, q1, t, squadScratchQuaternion0);
        const slerp1 = Quaternion.fastSlerp(s0, s1, t, squadScratchQuaternion1);
        return Quaternion.fastSlerp(slerp0, slerp1, 2.0 * t * (1.0 - t), result);
    }
    ;
    /**
     * Compares the provided quaternions componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Quaternion} [left] The first quaternion.
     * @param {Quaternion} [right] The second quaternion.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                left.x === right.x &&
                left.y === right.y &&
                left.z === right.z &&
                left.w === right.w));
    }
    ;
    /**
     * Compares the provided quaternions componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     *
     * @param {Quaternion} [left] The first quaternion.
     * @param {Quaternion} [right] The second quaternion.
     * @param {Number} [epsilon=0] The epsilon to use for equality testing.
     * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     */
    static equalsEpsilon(left, right, epsilon) {
        epsilon = defaultValue(epsilon, 0);
        return (left === right ||
            (defined(left) &&
                defined(right) &&
                Math.abs(left.x - right.x) <= epsilon &&
                Math.abs(left.y - right.y) <= epsilon &&
                Math.abs(left.z - right.z) <= epsilon &&
                Math.abs(left.w - right.w) <= epsilon));
    }
    ;
    /**
     * The logarithmic quaternion function.
     *
     * @param {Quaternion} quaternion The unit quaternion.
     * @param {Vector3} result The object onto which to store the result.
     * @returns {Vector3} The modified result parameter.
     */
    static log(quaternion, result) {
        const theta = GMath.acosClamped(quaternion.w);
        let thetaOverSinTheta = 0.0;
        if (theta !== 0.0) {
            thetaOverSinTheta = theta / Math.sin(theta);
        }
        return Vector3.multiplyByScalar(quaternion, thetaOverSinTheta, result);
    }
    ;
    /**
     * The exponential quaternion function.
     *
     * @param {Vector3} cartesian The cartesian.
     * @param {Quaternion} result The object onto which to store the result.
     * @returns {Quaternion} The modified result parameter.
     */
    static exp(cartesian, result) {
        const theta = Vector3.magnitude(cartesian);
        let sinThetaOverTheta = 0.0;
        if (theta !== 0.0) {
            sinThetaOverTheta = Math.sin(theta) / theta;
        }
        result.x = cartesian.x * sinThetaOverTheta;
        result.y = cartesian.y * sinThetaOverTheta;
        result.z = cartesian.z * sinThetaOverTheta;
        result.w = Math.cos(theta);
        return result;
    }
    ;
}
/**
* The number of elements used to pack the object into an array.
* @type {Number}
*/
Quaternion.packedLength = 4;
/**
* The number of elements used to store the object into an array in its interpolatable form.
* @type {Number}
*/
Quaternion.packedInterpolationLength = 3;
/**
* An immutable Quaternion instance initialized to (0.0, 0.0, 0.0, 0.0).
*
* @type {Quaternion}
* @constant
*/
Quaternion.ZERO = Object.freeze(new Quaternion(0.0, 0.0, 0.0, 0.0));
/**
 * An immutable Quaternion instance initialized to (0.0, 0.0, 0.0, 1.0).
 *
 * @type {Quaternion}
 * @constant
 */
Quaternion.IDENTITY = Object.freeze(new Quaternion(0.0, 0.0, 0.0, 1.0));
let fromAxisAngleScratch = new Vector3();
const fromRotationMatrixNext = [1, 2, 0];
const fromRotationMatrixQuat = new Array(3);
const scratchHPRQuaternion = new Quaternion();
let scratchHeadingQuaternion = new Quaternion();
let scratchPitchQuaternion = new Quaternion();
let scratchRollQuaternion = new Quaternion();
const sampledQuaternionAxis = new Vector3();
const sampledQuaternionRotation = new Vector3();
const sampledQuaternionTempQuaternion = new Quaternion();
const sampledQuaternionQuaternion0 = new Quaternion();
const sampledQuaternionQuaternion0Conjugate = new Quaternion();
let lerpScratch = new Quaternion();
let slerpEndNegated = new Quaternion();
let slerpScaledP = new Quaternion();
let slerpScaledR = new Quaternion();
const fastSlerpScratchQuaternion = new Quaternion();
// eslint-disable-next-line no-loss-of-precision
const opmu = 1.90110745351730037;
const u = new Float32Array(8);
const v = new Float32Array(8);
const bT = new Float32Array(8);
const bD = new Float32Array(8);
for (let i = 0; i < 7; ++i) {
    const s = i + 1.0;
    const t = 2.0 * s + 1.0;
    u[i] = 1.0 / (s * t);
    v[i] = s / t;
}
u[7] = opmu / (8.0 * 17.0);
v[7] = (opmu * 8.0) / 17.0;
const squadScratchCartesian0 = new Vector3();
const squadScratchCartesian1 = new Vector3();
const squadScratchQuaternion0 = new Quaternion();
const squadScratchQuaternion1 = new Quaternion();

class RenderObject {
    constructor() {
        this._position = new Vector3();
        this._scale = new Vector3(1, 1, 1);
        this._quaternion = new Quaternion();
        this.modelMatrix = Matrix4.clone(Matrix4.IDENTITY, new Matrix4());
        this._normalMatrix = Matrix3.clone(Matrix3.IDENTITY, new Matrix3());
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
    updateNormalMatrix(camera) {
        Matrix4.multiply(camera.viewMatrix, this.modelMatrix, this._normalMatrix);
        Matrix4.inverse(this._normalMatrix, this._normalMatrix);
        Matrix4.transpose(this._normalMatrix, this._normalMatrix);
    }
    updateMatrix() {
        this.modelMatrix = Matrix4.fromTranslationQuaternionRotationScale(this.position, this.quaternion, this.scale, this.modelMatrix);
    }
    rotateOnAxis(axis, angle) {
        const quat = Quaternion.fromAxisAngle(axis, angle);
        Quaternion.multiply(this.quaternion, quat, this.quaternion);
    }
    rotateX(angle) {
        return this.rotateOnAxis(_xAxis, angle);
    }
    rotateY(angle) {
        return this.rotateOnAxis(_yAxis, angle);
    }
    rotateZ(angle) {
        return this.rotateOnAxis(_zAxis, angle);
    }
}
const _xAxis = new Vector3(1, 0, 0);
const _yAxis = new Vector3(0, 1, 0);
const _zAxis = new Vector3(0, 0, 1);

class Mesh extends RenderObject {
    constructor(geometry, material) {
        super();
        this.geometry = geometry;
        this.material = material;
        this.type = 'primitive';
    }
    update(frameState) {
        //update matrix
        this.updateMatrix();
        this.updateNormalMatrix(frameState.camera);
        //create 
        this.geometry.update(frameState);
        this.material.update(frameState, this);
        // update boundingSphere
        this.geometry.boundingSphere.update(this.modelMatrix);
        this.material.shaderSource.setDefines(frameState.defines);
        this.distanceToCamera = this.geometry.boundingSphere.distanceToCamera(frameState);
        const visibility = frameState.cullingVolume.computeVisibility(this.geometry.boundingSphere);
        //视锥剔除
        if (visibility === Intersect$1.INTERSECTING || visibility === Intersect$1.INSIDE) {
            if (this.material.transparent) {
                frameState.renderQueue.transparent.push(this);
            }
            else {
                frameState.renderQueue.opaque.push(this);
            }
        }
    }
    beforeRender() {
        // console.log('before');
    }
    afterRender() {
        // console.log('after');
    }
    getDrawCommand() {
        if (!this.drawCommand || this.material.dirty) {
            if (this.material.dirty)
                this.material.dirty = false;
            this.drawCommand = new DrawCommand({
                vertexBuffer: this.geometry.vertBuffer,
                indexBuffer: this.geometry.indexBuffer,
                shaderData: this.material.shaderData,
                instances: this.instances,
                count: this.geometry.count,
                renderState: this.material.renderState,
                shaderSource: this.material.shaderSource,
                type: 'render',
                materialType: this.material.type,
            });
        }
        this.material.shaderSource.setDefines(Object.assign(this.material.shaderData.defines, this.geometry.defines));
        return this.drawCommand;
    }
    destroy() {
        this.geometry.destroy();
        this.material.destroy();
    }
}

class BoundingSphere {
    constructor(center = new Vector3(0, 0, 0), radius = 0) {
        this.center = center;
        this.radius = radius;
    } /**
      * @param {Vector3[]} [positions] An array of points that the bounding sphere will enclose.  Each point must have <code>x</code>, <code>y</code>, and <code>z</code> properties.
      * @returns {BoundingSphere} The modified result parameter or a new BoundingSphere instance if one was not provided.
      */
    static fromPoints(positions) {
        let result = new BoundingSphere();
        if (!defined(positions) || positions.length === 0) {
            result.center = Vector3.clone(Vector3.ZERO, result.center);
            result.radius = 0.0;
            return result;
        }
        const currentPos = Vector3.clone(positions[0], fromPointsCurrentPos);
        const xMin = Vector3.clone(currentPos, fromPointsXMin);
        const yMin = Vector3.clone(currentPos, fromPointsYMin);
        const zMin = Vector3.clone(currentPos, fromPointsZMin);
        const xMax = Vector3.clone(currentPos, fromPointsXMax);
        const yMax = Vector3.clone(currentPos, fromPointsYMax);
        const zMax = Vector3.clone(currentPos, fromPointsZMax);
        const numPositions = positions.length;
        let i;
        for (i = 1; i < numPositions; i++) {
            Vector3.clone(positions[i], currentPos);
            const x = currentPos.x;
            const y = currentPos.y;
            const z = currentPos.z;
            // Store points containing the the smallest and largest components
            if (x < xMin.x) {
                Vector3.clone(currentPos, xMin);
            }
            if (x > xMax.x) {
                Vector3.clone(currentPos, xMax);
            }
            if (y < yMin.y) {
                Vector3.clone(currentPos, yMin);
            }
            if (y > yMax.y) {
                Vector3.clone(currentPos, yMax);
            }
            if (z < zMin.z) {
                Vector3.clone(currentPos, zMin);
            }
            if (z > zMax.z) {
                Vector3.clone(currentPos, zMax);
            }
        }
        // Compute x-, y-, and z-spans (Squared distances b/n each component's min. and max.).
        const xSpan = Vector3.magnitudeSquared(Vector3.subtract(xMax, xMin, fromPointsScratch));
        const ySpan = Vector3.magnitudeSquared(Vector3.subtract(yMax, yMin, fromPointsScratch));
        const zSpan = Vector3.magnitudeSquared(Vector3.subtract(zMax, zMin, fromPointsScratch));
        // Set the diameter endpoints to the largest span.
        let diameter1 = xMin;
        let diameter2 = xMax;
        let maxSpan = xSpan;
        if (ySpan > maxSpan) {
            maxSpan = ySpan;
            diameter1 = yMin;
            diameter2 = yMax;
        }
        if (zSpan > maxSpan) {
            maxSpan = zSpan;
            diameter1 = zMin;
            diameter2 = zMax;
        }
        // Calculate the center of the initial sphere found by Ritter's algorithm
        const ritterCenter = fromPointsRitterCenter;
        ritterCenter.x = (diameter1.x + diameter2.x) * 0.5;
        ritterCenter.y = (diameter1.y + diameter2.y) * 0.5;
        ritterCenter.z = (diameter1.z + diameter2.z) * 0.5;
        // Calculate the radius of the initial sphere found by Ritter's algorithm
        let radiusSquared = Vector3.magnitudeSquared(Vector3.subtract(diameter2, ritterCenter, fromPointsScratch));
        let ritterRadius = Math.sqrt(radiusSquared);
        // Find the center of the sphere found using the Naive method.
        const minBoxPt = fromPointsMinBoxPt;
        minBoxPt.x = xMin.x;
        minBoxPt.y = yMin.y;
        minBoxPt.z = zMin.z;
        const maxBoxPt = fromPointsMaxBoxPt;
        maxBoxPt.x = xMax.x;
        maxBoxPt.y = yMax.y;
        maxBoxPt.z = zMax.z;
        const naiveCenter = Vector3.midpoint(minBoxPt, maxBoxPt, fromPointsNaiveCenterScratch);
        // Begin 2nd pass to find naive radius and modify the ritter sphere.
        let naiveRadius = 0;
        for (i = 0; i < numPositions; i++) {
            Vector3.clone(positions[i], currentPos);
            // Find the furthest point from the naive center to calculate the naive radius.
            const r = Vector3.magnitude(Vector3.subtract(currentPos, naiveCenter, fromPointsScratch));
            if (r > naiveRadius) {
                naiveRadius = r;
            }
            // Make adjustments to the Ritter Sphere to include all points.
            const oldCenterToPointSquared = Vector3.magnitudeSquared(Vector3.subtract(currentPos, ritterCenter, fromPointsScratch));
            if (oldCenterToPointSquared > radiusSquared) {
                const oldCenterToPoint = Math.sqrt(oldCenterToPointSquared);
                // Calculate new radius to include the point that lies outside
                ritterRadius = (ritterRadius + oldCenterToPoint) * 0.5;
                radiusSquared = ritterRadius * ritterRadius;
                // Calculate center of new Ritter sphere
                const oldToNew = oldCenterToPoint - ritterRadius;
                ritterCenter.x =
                    (ritterRadius * ritterCenter.x + oldToNew * currentPos.x) /
                        oldCenterToPoint;
                ritterCenter.y =
                    (ritterRadius * ritterCenter.y + oldToNew * currentPos.y) /
                        oldCenterToPoint;
                ritterCenter.z =
                    (ritterRadius * ritterCenter.z + oldToNew * currentPos.z) /
                        oldCenterToPoint;
            }
        }
        if (ritterRadius < naiveRadius) {
            Vector3.clone(ritterCenter, result.center);
            result.radius = ritterRadius;
        }
        else {
            Vector3.clone(naiveCenter, result.center);
            result.radius = naiveRadius;
        }
        return result;
    }
    /**
     * Computes a tight-fitting bounding sphere enclosing a list of 3D points, where the points are
     * stored in a flat array in X, Y, Z, order.  The bounding sphere is computed by running two
     * algorithms, a naive algorithm and Ritter's algorithm. The smaller of the two spheres is used to
     * ensure a tight fit.
     *
     * @param {Number[]} [positions] An array of points that the bounding sphere will enclose.  Each point
     *        is formed from three elements in the array in the order X, Y, Z.
     * @param {Vector3} [center=Vector3.ZERO] The position to which the positions are relative, which need not be the
     *        origin of the coordinate system.  This is useful when the positions are to be used for
     *        relative-to-center (RTC) rendering.
     * @param {Number} [stride=3] The number of array elements per vertex.  It must be at least 3, but it may
     *        be higher.  Regardless of the value of this parameter, the X coordinate of the first position
     *        is at array index 0, the Y coordinate is at array index 1, and the Z coordinate is at array index
     *        2.  When stride is 3, the X coordinate of the next position then begins at array index 3.  If
     *        the stride is 5, however, two array elements are skipped and the next position begins at array
     *        index 5.
     * @param {BoundingSphere} [result] The object onto which to store the result.
     * @returns {BoundingSphere} The modified result parameter or a new BoundingSphere instance if one was not provided.
     *
     * @example
     * // Compute the bounding sphere from 3 positions, each specified relative to a center.
     * // In addition to the X, Y, and Z coordinates, the points array contains two additional
     * // elements per point which are ignored for the purpose of computing the bounding sphere.
     * const center = new Vector3(1.0, 2.0, 3.0);
     * const points = [1.0, 2.0, 3.0, 0.1, 0.2,
     *               4.0, 5.0, 6.0, 0.1, 0.2,
     *               7.0, 8.0, 9.0, 0.1, 0.2];
     * const sphere = BoundingSphere.fromVertices(points, center, 5);
     *
     */
    static fromVertices(positions, center = Vector3.ZERO, stride = 3) {
        const result = new BoundingSphere();
        if (!defined(positions) || positions.length === 0) {
            result.center = Vector3.clone(Vector3.ZERO, result.center);
            result.radius = 0.0;
            return result;
        }
        center = defaultValue(center, Vector3.ZERO);
        stride = defaultValue(stride, 3);
        const currentPos = fromPointsCurrentPos;
        currentPos.x = positions[0] + center.x;
        currentPos.y = positions[1] + center.y;
        currentPos.z = positions[2] + center.z;
        const xMin = Vector3.clone(currentPos, fromPointsXMin);
        const yMin = Vector3.clone(currentPos, fromPointsYMin);
        const zMin = Vector3.clone(currentPos, fromPointsZMin);
        const xMax = Vector3.clone(currentPos, fromPointsXMax);
        const yMax = Vector3.clone(currentPos, fromPointsYMax);
        const zMax = Vector3.clone(currentPos, fromPointsZMax);
        const numElements = positions.length;
        let i;
        for (i = 0; i < numElements; i += stride) {
            const x = positions[i] + center.x;
            const y = positions[i + 1] + center.y;
            const z = positions[i + 2] + center.z;
            currentPos.x = x;
            currentPos.y = y;
            currentPos.z = z;
            // Store points containing the the smallest and largest components
            if (x < xMin.x) {
                Vector3.clone(currentPos, xMin);
            }
            if (x > xMax.x) {
                Vector3.clone(currentPos, xMax);
            }
            if (y < yMin.y) {
                Vector3.clone(currentPos, yMin);
            }
            if (y > yMax.y) {
                Vector3.clone(currentPos, yMax);
            }
            if (z < zMin.z) {
                Vector3.clone(currentPos, zMin);
            }
            if (z > zMax.z) {
                Vector3.clone(currentPos, zMax);
            }
        }
        // Compute x-, y-, and z-spans (Squared distances b/n each component's min. and max.).
        const xSpan = Vector3.magnitudeSquared(Vector3.subtract(xMax, xMin, fromPointsScratch));
        const ySpan = Vector3.magnitudeSquared(Vector3.subtract(yMax, yMin, fromPointsScratch));
        const zSpan = Vector3.magnitudeSquared(Vector3.subtract(zMax, zMin, fromPointsScratch));
        // Set the diameter endpoints to the largest span.
        let diameter1 = xMin;
        let diameter2 = xMax;
        let maxSpan = xSpan;
        if (ySpan > maxSpan) {
            maxSpan = ySpan;
            diameter1 = yMin;
            diameter2 = yMax;
        }
        if (zSpan > maxSpan) {
            maxSpan = zSpan;
            diameter1 = zMin;
            diameter2 = zMax;
        }
        // Calculate the center of the initial sphere found by Ritter's algorithm
        const ritterCenter = fromPointsRitterCenter;
        ritterCenter.x = (diameter1.x + diameter2.x) * 0.5;
        ritterCenter.y = (diameter1.y + diameter2.y) * 0.5;
        ritterCenter.z = (diameter1.z + diameter2.z) * 0.5;
        // Calculate the radius of the initial sphere found by Ritter's algorithm
        let radiusSquared = Vector3.magnitudeSquared(Vector3.subtract(diameter2, ritterCenter, fromPointsScratch));
        let ritterRadius = Math.sqrt(radiusSquared);
        // Find the center of the sphere found using the Naive method.
        const minBoxPt = fromPointsMinBoxPt;
        minBoxPt.x = xMin.x;
        minBoxPt.y = yMin.y;
        minBoxPt.z = zMin.z;
        const maxBoxPt = fromPointsMaxBoxPt;
        maxBoxPt.x = xMax.x;
        maxBoxPt.y = yMax.y;
        maxBoxPt.z = zMax.z;
        const naiveCenter = Vector3.midpoint(minBoxPt, maxBoxPt, fromPointsNaiveCenterScratch);
        // Begin 2nd pass to find naive radius and modify the ritter sphere.
        let naiveRadius = 0;
        for (i = 0; i < numElements; i += stride) {
            currentPos.x = positions[i] + center.x;
            currentPos.y = positions[i + 1] + center.y;
            currentPos.z = positions[i + 2] + center.z;
            // Find the furthest point from the naive center to calculate the naive radius.
            const r = Vector3.magnitude(Vector3.subtract(currentPos, naiveCenter, fromPointsScratch));
            if (r > naiveRadius) {
                naiveRadius = r;
            }
            // Make adjustments to the Ritter Sphere to include all points.
            const oldCenterToPointSquared = Vector3.magnitudeSquared(Vector3.subtract(currentPos, ritterCenter, fromPointsScratch));
            if (oldCenterToPointSquared > radiusSquared) {
                const oldCenterToPoint = Math.sqrt(oldCenterToPointSquared);
                // Calculate new radius to include the point that lies outside
                ritterRadius = (ritterRadius + oldCenterToPoint) * 0.5;
                radiusSquared = ritterRadius * ritterRadius;
                // Calculate center of new Ritter sphere
                const oldToNew = oldCenterToPoint - ritterRadius;
                ritterCenter.x =
                    (ritterRadius * ritterCenter.x + oldToNew * currentPos.x) /
                        oldCenterToPoint;
                ritterCenter.y =
                    (ritterRadius * ritterCenter.y + oldToNew * currentPos.y) /
                        oldCenterToPoint;
                ritterCenter.z =
                    (ritterRadius * ritterCenter.z + oldToNew * currentPos.z) /
                        oldCenterToPoint;
            }
        }
        if (ritterRadius < naiveRadius) {
            Vector3.clone(ritterCenter, result.center);
            result.radius = ritterRadius;
        }
        else {
            Vector3.clone(naiveCenter, result.center);
            result.radius = naiveRadius;
        }
        return result;
    }
    ;
    intersectPlane(plane) {
        const center = this.center;
        const radius = this.radius;
        const normal = plane.normal;
        const distanceToPlane = Vector3.dot(normal, center) + plane.distance;
        if (distanceToPlane < -radius) {
            // The center point is negative side of the plane normal
            return Intersect$1.OUTSIDE;
        }
        else if (distanceToPlane < radius) {
            // The center point is positive side of the plane, but radius extends beyond it; partial overlap
            return Intersect$1.INTERSECTING;
        }
        return Intersect$1.INSIDE;
    }
    update(transform) {
        this.center = Matrix4.multiplyByPoint(transform, this.center, this.center);
        this.radius = Matrix4.getMaximumScale(transform) * this.radius;
    }
    distanceToCamera(frameState) {
        return Math.max(0.0, Vector3.distance(this.center, frameState.camera.position) -
            this.radius);
    }
    ;
}
const fromPointsXMin = new Vector3();
const fromPointsYMin = new Vector3();
const fromPointsZMin = new Vector3();
const fromPointsXMax = new Vector3();
const fromPointsYMax = new Vector3();
const fromPointsZMax = new Vector3();
const fromPointsCurrentPos = new Vector3();
const fromPointsScratch = new Vector3();
const fromPointsRitterCenter = new Vector3();
const fromPointsMinBoxPt = new Vector3();
const fromPointsMaxBoxPt = new Vector3();
const fromPointsNaiveCenterScratch = new Vector3();

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-12 10:07:57
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-29 17:45:53
 * @FilePath: \GEngine\src\render\VertextBuffer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class VertextBuffer {
    constructor(attributes, index, stepMode) {
        this.index = index || 0;
        this.attributes = attributes || undefined;
        this.stepMode = InputStepMode.Vertex;
        this.dirty = true;
    }
    getBufferDes() {
        return [{
                arrayStride: this.arrayStride,
                stepMode: this.stepMode,
                attributes: this.attributes.getGPUAttributes()
            }];
    }
    setAttributes(attributes) {
        this.attributes = attributes;
        this.dirty = true;
    }
    bind(device, passEncoder) {
        if (this.dirty) {
            this.dirty = false;
            const { arrayStride, typeArray } = this.attributes.getMeregeAtrributeValues();
            this.arrayStride = arrayStride.reduce(function (sum, item, index, arr) {
                return sum += item;
            }, 0) * 4;
            this.buffer = Buffer.createVertexBuffer(device, typeArray);
        }
        passEncoder.setVertexBuffer(this.index, this.buffer.gpuBuffer);
    }
    destroy() {
        this.buffer.destroy();
    }
}

class Attributes {
    constructor() {
        this._attributes = new Map();
        this.shaderLocation = 0;
        this.offset = 0;
    }
    getAttribute(name) {
        return this._attributes.get(name);
    }
    setAttribute(attribute) {
        if (this._attributes.has(attribute.name))
            return;
        attribute.shaderLocation = this.shaderLocation;
        this.shaderLocation += 1;
        attribute.offset = this.offset;
        this.offset += attribute.attributeByteSize;
        this._attributes.set(attribute.name, attribute);
    }
    getGPUAttributes() {
        const result = [];
        this._attributes.forEach((attribute) => {
            result.push(attribute.getGPUAttribute());
        });
        return result;
    }
    getMeregeAtrributeValues() {
        const arrayStride = [];
        const arrays = [];
        this._attributes.forEach((attribute) => {
            arrayStride.push(attribute.itemSize);
            arrays.push(attribute.value);
        });
        return {
            arrayStride,
            typeArray: this.interleaveTypedArray(Float32Array, arrayStride, ...arrays),
        };
    }
    destroy() {
        this._attributes.forEach((attribute) => {
            attribute.destroy();
        });
    }
    /**
    * Interleave n typed arrays
    * @alias module:interleaveTypedArray
    * @param {TypedArray} ResultConstructor Returned typed array constructor
    * @param {Array} elements Number of elements to group for each typed array
    * @param {...TypedArray} arrays Arrays to interleave
    * @returns {TypedArray}
    */
    interleaveTypedArray(ResultConstructor, elements, ...arrays) {
        const totalLength = arrays.reduce((total, arr) => total + arr.length, 0);
        const result = new ResultConstructor(totalLength);
        const stride = elements.reduce((a, b) => a + b);
        for (let i = 0; i < totalLength; i++) {
            let offset = 0;
            for (let j = 0; j < elements.length; j++) {
                for (let k = 0; k < elements[j]; k++) {
                    result[i * stride + offset] = arrays[j][elements[j] * i + k];
                    offset++;
                }
            }
        }
        return result;
    }
}

class IndexBuffer {
    constructor(indices) {
        this.indices = indices;
        this.indexFormat = IndexFormat.Uint16;
        this.dirty = true;
    }
    setIndices(indices) {
        this.indices = indices;
        this.dirty = true;
    }
    bind(device, passEncoder) {
        if (this.dirty) {
            this.dirty = false;
            this.buffer = Buffer.createIndexBuffer(device, this.indexFormat == IndexFormat.Uint16 ? new Uint16Array(this.indices) : new Uint32Array(this.indices));
        }
        passEncoder.setIndexBuffer(this.buffer.gpuBuffer, this.indexFormat);
    }
    destroy() {
        this.buffer.destroy();
    }
}

/**
 * Merges two objects, copying their properties onto a new combined object. When two objects have the same
 * property, the value of the property on the first object is used.  If either object is undefined,
 * it will be treated as an empty object.
 *
 * @example
 * const object1 = {
 *     propOne : 1,
 *     propTwo : {
 *         value1 : 10
 *     }
 * }
 * const object2 = {
 *     propTwo : 2
 * }
 * const final = Cesium.combine(object1, object2);
 *
 * // final === {
 * //     propOne : 1,
 * //     propTwo : {
 * //         value1 : 10
 * //     }
 * // }
 *
 * @param {Object} [object1] The first object to merge.
 * @param {Object} [object2] The second object to merge.
 * @param {Boolean} [deep=false] Perform a recursive merge.
 * @returns {Object} The combined object containing all properties from both objects.
 *
 * @function
 */
function combine(object1, object2, deep) {
    deep = defaultValue(deep, false);
    const result = {};
    const object1Defined = defined(object1);
    const object2Defined = defined(object2);
    let property;
    let object1Value;
    let object2Value;
    if (object1Defined) {
        for (property in object1) {
            if (object1.hasOwnProperty(property)) {
                object1Value = object1[property];
                if (object2Defined &&
                    deep &&
                    typeof object1Value === "object" &&
                    object2.hasOwnProperty(property)) {
                    object2Value = object2[property];
                    if (typeof object2Value === "object") {
                        result[property] = combine(object1Value, object2Value, deep);
                    }
                    else {
                        result[property] = object1Value;
                    }
                }
                else {
                    result[property] = object1Value;
                }
            }
        }
    }
    if (object2Defined) {
        for (property in object2) {
            if (object2.hasOwnProperty(property) &&
                !result.hasOwnProperty(property)) {
                object2Value = object2[property];
                result[property] = object2Value;
            }
        }
    }
    return result;
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-17 16:04:17
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-29 17:26:20
 * @FilePath: \GEngine\src\geometry\Geometry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Geometry {
    constructor(options) {
        this.type = options.type || undefined;
        this.boundingSphere = undefined;
        this.dirty = false;
        this.definesDirty = true;
        this.attributes = new Attributes();
        this.vertBuffer = new VertextBuffer(this.attributes, 0);
        // this.topology=PrimitiveTopology.TriangleList;
        this._defines = {};
    }
    get defines() {
        return this._defines;
    }
    set defines(value) {
        this.definesDirty = true;
        this._defines = combine(value, this._defines, false);
    }
    getAttribute(name) {
        return this.attributes.getAttribute(name);
    }
    setAttribute(attribute) {
        this.attributes.setAttribute(attribute);
    }
    setIndice(indice) {
        if (!this.indexBuffer)
            this.indexBuffer = new IndexBuffer();
        this.indexBuffer.setIndices(indice);
    }
    update(frameState) { }
    computeBoundingSphere(positions) {
        this.boundingSphere = BoundingSphere.fromVertices(positions, new Vector3(0, 0, 0), 3);
    }
    destroy() {
        this?.indexBuffer.destroy();
        this.vertBuffer.destroy();
        this.attributes.destroy();
    }
}

const preprocessorSymbols = /#([^\s]*)(\s*)/gm;
// Template literal tag that handles simple preprocessor symbols for WGSL
// shaders. Supports #if/elif/else/endif statements.
function wgslParseDefines(strings, ...values) {
    const stateStack = [];
    let state = { frag: '', elseIsValid: false, expression: true };
    let depth = 1;
    for (let i = 0; i < strings.length; ++i) {
        const frag = strings[i];
        const matchedSymbols = frag.matchAll(preprocessorSymbols);
        let lastIndex = 0;
        let valueConsumed = false;
        for (const match of matchedSymbols) {
            state.frag += frag.substring(lastIndex, match.index);
            switch (match[1]) {
                case 'if':
                    if (match.index + match[0].length != frag.length) {
                        throw new Error('#if must be immediately followed by a template expression (ie: ${value})');
                    }
                    valueConsumed = true;
                    stateStack.push(state);
                    depth++;
                    state = { frag: '', elseIsValid: true, expression: !!values[i] };
                    break;
                case 'elif':
                    if (match.index + match[0].length != frag.length) {
                        throw new Error('#elif must be immediately followed by a template expression (ie: ${value})');
                    }
                    else if (!state.elseIsValid) {
                        throw new Error('#elif not preceeded by an #if or #elif');
                    }
                    valueConsumed = true;
                    if (state.expression && stateStack.length != depth) {
                        stateStack.push(state);
                    }
                    state = { frag: '', elseIsValid: true, expression: !!values[i] };
                    break;
                case 'else':
                    if (!state.elseIsValid) {
                        throw new Error('#else not preceeded by an #if or #elif');
                    }
                    if (state.expression && stateStack.length != depth) {
                        stateStack.push(state);
                    }
                    state = { frag: match[2], elseIsValid: false, expression: true };
                    break;
                case 'endif':
                    if (!stateStack.length) {
                        throw new Error('#endif not preceeded by an #if');
                    }
                    const branchState = stateStack.length == depth ? stateStack.pop() : state;
                    state = stateStack.pop();
                    depth--;
                    if (branchState.expression) {
                        state.frag += branchState.frag;
                    }
                    state.frag += match[2];
                    break;
                default:
                    // Unknown preprocessor symbol. Emit it back into the output frag unchanged.
                    state.frag += match[0];
                    break;
            }
            lastIndex = match.index + match[0].length;
        }
        // If the frag didn't end on one of the preprocessor symbols append the rest of it here.
        if (lastIndex != frag.length) {
            state.frag += frag.substring(lastIndex, frag.length);
        }
        // If the next value wasn't consumed by the preprocessor symbol, append it here.
        if (!valueConsumed && values.length > i) {
            state.frag += values[i];
        }
    }
    if (stateStack.length) {
        throw new Error('Mismatched #if/#endif count');
    }
    return state.frag;
}

function light(defines) {
    return wgslParseDefines `   
    #if ${defines.spotLight}
        struct SpotLight {
            position: vec3<f32>,
            distance: f32,
            direction: vec3<f32>,
            coneCos: f32,
            color: vec3<f32>,
            penumbraCos: f32,
            decay: f32,
        };
        @group(2) @binding(${defines.spotLightBinding}) var<storage, read> spotLights: array<SpotLight>;

        fn getSpotLightInfo(spotLight: SpotLight, geometry: GeometricContext) -> IncidentLight {
            var light:IncidentLight;
            let lVector = spotLight.position - geometry.position;
    
            light.direction = normalize(lVector);
    
            let angleCos = dot(light.direction, spotLight.direction);
    
            let spotAttenuation = getSpotAttenuation(spotLight.coneCos, spotLight.penumbraCos, angleCos);
    
            if (spotAttenuation > 0.0) {
    
                let lightDistance = length(lVector);
    
                light.color = spotLight.color * spotAttenuation;
                light.color *= getDistanceAttenuation(lightDistance, spotLight.distance, spotLight.decay);
                light.visible = (length(light.color)>0);
            } else {
    
                light.color = vec3(0.0);
                light.visible = false;
            }
            return light;
        }
    #endif 

    #if ${defines.pointLight}
        struct PointLight {
            position: vec3<f32>,
            distance: f32,
            color: vec3<f32>,
            decay: f32,
        };
        @group(2) @binding(${defines.pointLightBinding}) var<storage, read> pointLights: array<PointLight>;
        fn getPointLightInfo(pointLight: PointLight, geometry: GeometricContext) -> IncidentLight {
            var light:IncidentLight;
            let lVector:vec3<f32> = pointLight.position - geometry.position;
            light.direction = normalize(lVector);
            let lightDistance = length(lVector); 
            light.color = pointLight.color;
            light.color *= getDistanceAttenuation(lightDistance, pointLight.distance, pointLight.decay);
            light.visible =(length(light.color)>0);
            return light;
        }
    #endif
    #if ${defines.dirtectLight}
        struct DirtectLight {
            color: vec3<f32>,
            direction: vec3<f32>,
        };
        @group(2) @binding(${defines.dirtectLightBinding}) var<storage, read> dirtectLights: array<DirtectLight>;
        fn getDirtectLightInfo(directionalLight: DirtectLight, geometry: GeometricContext) -> IncidentLight {
            var light:IncidentLight;
            light.color = directionalLight.color;
            light.direction = directionalLight.direction;
            light.visible = true;
            return light;
        }
    #endif
    #if ${defines.ambientLight}
        struct CommonLightBuffer{
            lightCount:vec4<u32>, 
            ambient:vec3<f32>,
        }
    #else
        struct CommonLightBuffer{
            lightCount:vec4<u32>, 
        }
    #endif
    @group(2) @binding(0) var<storage, read> commonLightsParms: CommonLightBuffer;
    #if ${defines.materialPhong}
        fn parseLights(geometry:GeometricContext,material:BlinnPhongMaterial)->ReflectedLight{
    #elif ${defines.materialPbr}
        fn parseLights(geometry:GeometricContext,material:PhysicalMaterial)->ReflectedLight{
    #endif

        var  incidentLight:IncidentLight;
        var reflectedLight:ReflectedLight;
        #if ${defines.dirtectLight}
            //处理方向光
            var dirtectLight:DirtectLight;
            for (var i : u32 = 0u; i < commonLightsParms.lightCount.z; i = i + 1u) {
                dirtectLight = dirtectLights[i];
                incidentLight=getDirtectLightInfo(dirtectLight, geometry);
                #if ${defines.materialPhong}
                    let dirReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let dirReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
                #endif
                
                reflectedLight.directDiffuse+=dirReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=dirReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.pointLight}
            //处理点光源
            var pointLight:PointLight;
            for (var i : u32 = 0u; i < commonLightsParms.lightCount.y;i = i + 1u) {
                pointLight = pointLights[i];
                incidentLight =getPointLightInfo( pointLight, geometry);
                #if ${defines.materialPhong}
                    let poiReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let poiReflectedLight=RE_Direct_Physical(incidentLight, geometry, material);
                #endif
                reflectedLight.directDiffuse+=poiReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=poiReflectedLight.directSpecular;
            }
        #endif
        #if ${defines.spotLight}
            //处理聚光灯
            var spotLight:SpotLight;
            for (var i : u32 = 0u; i < commonLightsParms.lightCount.x; i = i + 1u) {
                spotLight = spotLights[i];
                incidentLight =getSpotLightInfo( spotLight, geometry);
                #if ${defines.materialPhong}
                    let spReflectedLight= RE_Direct_BlinnPhong(incidentLight, geometry, material);
                #elif ${defines.materialPbr}
                    let spReflectedLight=RE_Direct_Physical(incidentLight, geometry, material)
                #endif
                reflectedLight.directDiffuse+=spReflectedLight.directDiffuse;
                reflectedLight.directSpecular+=spReflectedLight.directSpecular;
            }
        #endif
        return reflectedLight;
    }`;
}

function lightCommon(defines) {
    return wgslParseDefines `
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
        #if ${defines.USE_CLEARCOAT}
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
}

function brdf(defines) {
    return `
        fn BRDF_Lambert(diffuseColor:vec3<f32>)->vec3<f32> {

            return RECIPROCAL_PI * diffuseColor;

        } // validated

        fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {

            // Original approximation by Christophe Schlick '94
            // float fresnel = pow( 1.0 - dotVH, 5.0 );

            // Optimized variant (presented by Epic at SIGGRAPH '13)
            // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
            let fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

            return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

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
        fn BRDF_GGX( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, f0:vec3<f32>, f90:f32, roughness:f32 )->vec3<f32> {

            let alpha:f32 = pow2( roughness ); // UE4's roughness

            let halfDir = normalize( lightDir + viewDir );

            let dotNL:f32 = saturate( dot( normal, lightDir ) );
            let dotNV:f32 = saturate( dot( normal, viewDir ) );
            let dotNH:f32 = saturate( dot( normal, halfDir ) );
            let dotVH:f32 = saturate( dot( viewDir, halfDir ) );

            let F = F_Schlick( f0, f90, dotVH );

            let V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

            let D = D_GGX( alpha, dotNH );

            return F * ( V * D );

        }

  `;
}

function pbrFunction(defines) {
    return wgslParseDefines `

    #if ${defines.DITHERING}
        fn dithering(color:vec3<f32> )->vec3<f32> {
            let grid_position:f32 = rand( gl_FragCoord.xy );
            let dither_shift_RGB:vec3<f32> = vec3<f32>( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
            dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
            return color + dither_shift_RGB;
        }
    #endif

    #if ${defines.USE_IRIDESCENCE}
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

    #if ${defines.USE_SHEEN}
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

    #if ${defines.USE_IRIDESCENCE}
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
    #if ${defines.USE_TRANSMISSION}

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

    #if ${defines.USE_BUMPTEXTURE}
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
    #if ${!defines.USE_TANGENT && defines.TANGENTSPACE_NORMALTEXTURE || defines.USE_CLEARCOAT_NORMALTEXTURE}
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
   #if ${defines.USE_IRIDESCENCE}
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscatteringIridescence( normal:vec3<f32>, viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, iridescence:f32,iridescenceF0:vec3<f32>, roughness:f32 )->MultiAndSingleScatter {
   #else
   ////////inout vec3 singleScatter, inout vec3 multiScatter
       fn computeMultiscattering( normal:vec3<f32>,viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32, roughness:f32)->MultiAndSingleScatter {
   #endif
   let fab:vec2<f32> = DFGApprox( normal, viewDir, roughness );

   var multiAndSingleScatter:MultiAndSingleScatter;

   #if ${defines.USE_IRIDESCENCE}
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
       #if ${defines.USE_CLEARCOAT}
           let dotNLcc:f32 = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
           let ccIrradiance:vec3<f32> = dotNLcc * directLight.color;
           clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif

       #if ${defines.USE_SHEEN}
           sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
       #endif

       #if ${defines.USE_IRIDESCENCE}
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
       #if ${defines.USE_CLEARCOAT}
           clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
       #endif
       #if ${defines.USE_SHEEN}
           sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
       #endif
       var singleScattering:vec3<f32>;
       var multiScattering:vec3<f32>;
       let cosineWeightedIrradiance:vec3<f32> = irradiance * RECIPROCAL_PI;
       var tempMultiAndSingleScatter:MultiAndSingleScatter;
       #if ${defines.USE_IRIDESCENCE}
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
}

function pbrStruct(defines) {
    return wgslParseDefines `
        struct MaterialUniform{

            modelMatrix: mat4x4<f32>,
    
            diffuse:vec3<f32>,
    
            opacity:f32,
    
            normalMatrix: mat3x3<f32>,
    
            emissive:vec3<f32>,
    
            roughness:f32,
    
            metalness:f32,
    
            #if ${defines.TONE_MAPPING}
                toneMappingExposure:f32,
            #endif
           
            #if ${defines.SPECULAR}
    
                 specularColor:vec3<f32>,
    
                 specularIntensity:f32,
            #endif
            
            #if ${defines.USE_SHEEN}
    
                sheenColor:vec3<f32>,
    
                sheenRoughness:f32,
            #endif

            #if ${defines.USE_TRANSMISSION}
    
                attenuationColor:vec3<f32>,
    
                transmission:f32,
    
                transmissionSamplerSize:vec2<f32>,
    
                thickness:f32,
    
                attenuationDistance:f32,
                
            #endif

            #if ${defines.USE_SKINNING}
    
                bindMatrix:mat4x4<f32>,
    
                bindMatrixInverse:mat4x4<f32>,
    
                boneTextureSize:u32,
            #endif

            #if ${defines.USE_NORMALTEXTURE}
                 normalScale:vec2<f32>,
            #endif
    
            #if ${defines.IOR}
                ior:f32,
            #endif
    
            #if ${defines.USE_CLEARCOAT}
    
                #if ${defines.USE_CLEARCOAT_NORMALTEXTURE}
                    clearcoatNormalScale:vec2<f32>,
                #endif
    
                 clearcoat:f32,
    
                 clearcoatRoughness:f32,
            #endif
    
            #if ${defines.USE_IRIDESCENCE}
                iridescence:f32,
    
                iridescenceIOR:f32,
    
                iridescenceThicknessMinimum:f32,
    
                iridescenceThicknessMaximum:f32,
    
            #endif

            #if ${defines.USE_AOTEXTURE}
                 aoTextureIntensity:f32,
            #endif

            #if ${defines.USE_LIGHTTEXTURE}
                 lightTextureIntensity:f32,
            #endif
    
            #if ${defines.USE_ENVTEXTURE}
                envTextureIntensity:f32,
    
                flipEnvTexture:f32,
            #endif

            #if ${defines.USE_BUMPTEXTURE}
                bumpScale:f32;
            #endif

            #if ${defines.USE_DISPLACEMENTTEXTURE}
    
                displacementScale:f32,
    
                displacementBias:f32,
            #endif
            
            #if ${defines.USE_MORPHTARGETS}
    
                morphTargetBaseInfluence:f32,
    
                #if ${defines.MORPHTARGETS_TEXTURE} 
    
                    morphTargetsTextureSize:vec2<u32>,
    
                    MORPHTARGETS_COUNT:u32,
    
                #endif
    
                morphTargetInfluences:array<f32>,
                    
            #endif
        }

   `;
}

function pbrTexture(defines) {
    return wgslParseDefines `        
            #if ${defines.USE_BUMPTEXTURE}
                @group(0) @binding(${defines.bumpTextureBinding}) var bumpTexture: texture_2d<f32>;
            #endif
            #if ${defines.USE_TRANSMISSION}
                #if ${defines.USE_TRANSMISSIONTEXTURE}
                    @group(0) @binding(${defines.transmissionTextureBinding}) var transmissionTexture: texture_2d<f32>;
                #endif
                #if ${defines.USE_THICKNESSTEXTURE}
                    @group(0) @binding(${defines.thicknessTextureBinding}) var thicknessTexture: texture_2d<f32>;
                #endif
                @group(0) @binding(${defines.transmissionSamplerTextureBinding}) var transmissionSamplerTexture: texture_2d<f32>;
            #endif
            #if ${defines.USE_ENVTEXTURE}
                @group(0) @binding(${defines.envTextureBinding}) var envTexture: texture_cube<f32>;
            #endif
            #if ${defines.USE_NORMALTEXTURE}
                @group(0) @binding(${defines.normalTextureBinding}) var normalTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOATTEXTURE}
                @group(0) @binding(${defines.clearcoatTextureBinding}) var clearcoatTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                @group(0) @binding(${defines.clearcoatRclearcoatRoughnessTextureBinding}) var clearcoatRoughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_CLEARCOAT_NORMALTEXTURE}
                @group(0) @binding(${defines.clearcoatNormalTextureBinding}) var clearcoatNormalTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_IRIDESCENCETEXTURE}
                @group(0) @binding(${defines.iridescenceTextureBinding}) var iridescenceTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_IRIDESCENCE_THICKNESSTEXTURE}
                @group(0) @binding(${defines.iridescenceThicknessTextureBinding}) var iridescenceThicknessTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_ROUGHNESSTEXTURE}
                @group(0) @binding(${defines.roughnessTextureBinding}) var roughnessTexture: texture_2d<f32>;
            #endif
            
            #if ${defines.USE_METALNESSTEXTURE}
                @group(0) @binding(${defines.metalnessTextureBinding}) var metalnessTexture: texture_2d<f32>;
            #endif

            #if ${defines.SPECULAR}
                #if ${defines.USE_SPECULARINTENSITYTEXTURE}
                    @group(0) @binding(${defines.specularIntensityTextureBinding}) var specularIntensityTexture: texture_2d<f32>;
                #endif

                #if ${defines.USE_SPECULARCOLORTEXTURE}
                    @group(0) @binding(${defines.specularColorTextureBinding}) var specularColorTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${defines.USE_SHEEN}
                #if ${defines.USE_SHEENCOLORTEXTURE}
                    @group(0) @binding(${defines.sheenColorTextureBinding}) var sheenColorTexture: texture_2d<f32>;
                #endif
                #if ${defines.USE_SHEENROUGHNESSTEXTURE}
                    @group(0) @binding(${defines.sheenRoughnessTextureBinding}) var sheenRoughnessTexture: texture_2d<f32>;
                #endif
            #endif

            #if ${defines.USE_TEXTURE}
                @group(0) @binding(${defines.baseSamplerBinding}) var baseSampler: sampler;
                @group(0) @binding(${defines.baseTextureBinding}) var baseTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_ALPHATEXTURE}
                @group(0) @binding(${defines.alphaTextureBinding}) var alphaTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_AOTEXTURE}
                @group(0) @binding(${defines.aoTextureBinding}) var aoTexture: texture_2d<f32>;
                
            #endif
            #if ${defines.USE_LIGHTTEXTURE}
                @group(0) @binding(${defines.lightTextureBinding}) var lightTexture: texture_2d<f32>;
            #endif

            #if ${defines.USE_EMISSIVETEXTURE}
                @group(0) @binding(${defines.emissiveTextureBinding}) var emissiveTexture: texture_2d<f32>;
            #endif
     `;
}

function pbrUtils(defines) {
    return wgslParseDefines `
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
}

function phongFunction(defines) {
    return `
    fn G_BlinnPhong_Implicit( )->f32 {

        // geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
        return 0.25;

    }
    fn D_BlinnPhong( shininess:f32, dotNH:f32 )->f32 {

        return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow(dotNH, shininess);

    }
    fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {

        let  halfDir = normalize( lightDir + viewDir );

        let  dotNH:f32 = saturate( dot( normal, halfDir ) );
        let dotVH:f32 = saturate( dot( viewDir, halfDir ) );

        let F = F_Schlick( specularColor, 1.0, dotVH );

        let G:f32 = G_BlinnPhong_Implicit( );

        let D = D_BlinnPhong( shininess, dotNH );

        return F * ( G * D );

    } 
    fn RE_Direct_BlinnPhong(  directLight:IncidentLight,geometry:GeometricContext, material:BlinnPhongMaterial )->ReflectedLight{
        var reflectedLight:ReflectedLight; 
        let dotNL:f32 = saturate(dot(geometry.normal, directLight.direction));
        let irradiance:vec3<f32> = dotNL*directLight.color;

        reflectedLight.directDiffuse= irradiance * BRDF_Lambert( material.diffuseColor );

        reflectedLight.directSpecular= irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
        return reflectedLight;
    }
    fn RE_IndirectDiffuse_BlinnPhong( irradiance:vec3<f32>, geometry:GeometricContext, material:BlinnPhongMaterial)->ReflectedLight {
        var reflectedLight:ReflectedLight; 
        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
        return reflectedLight;
    }
    `;
}

function phongUtils(defines) {
    return `
   struct BlinnPhongMaterial {
        diffuseColor:vec3<f32>,
        specularColor:vec3<f32>,
        specularShininess:f32,
        specularStrength:f32,
    };
    const RECIPROCAL_PI:f32= 0.3183098861837907;
   fn pow2( x:f32 )->f32 { return x*x; }
   fn pow3( x:f32 )->f32 { return x*x*x; }
   fn pow4(x:f32 )->f32 { let x2 = x*x; return x2*x2; }
   fn max3( v:vec3<f32> )->f32 { return max( max( v.x, v.y ), v.z ); }
   fn average(v:vec3<f32> )->f32 { 
       let result=vec3<f32>( 0.3333333,  0.3333333, 0.3333333);
       return dot( v,result ); 
   }
   `;
}

function environment(defines) {
    return wgslParseDefines `
   #if ${defines.ENVTEXTURE_TYPE_CUBE_UV}
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
   #if ${defines.USE_ENVTEXTURE}
        fn getIBLIrradiance( normal:vec3<f32>,baseSampler:sampler,viewMatrix:mat4x4<f32>)->vec3<f32> {
            #if ${defines.ENVTEXTURE_TYPE_CUBE_UV}
                let worldNormal:vec3<f32> = inverseTransformDirection( normal, viewMatrix );
                let envTextureColor:vec4<f32> = textureCubeUV( envTexture,baseSampler, worldNormal, 1.0 );
                return PI * envTextureColor.rgb * materialUniform.envTextureIntensity;
            #else
                return vec3<f32>( 0.0 );
            #endif
        }
        fn getIBLRadiance( viewDir:vec3<f32>,baseSampler:sampler,viewMatrix:mat4x4<f32>,normal:vec3<f32>, roughness:f32 )->vec3<f32> {
            #if ${defines.ENVTEXTURE_TYPE_CUBE_UV}
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
}

const ShaderChunk = {
    light: light,
    brdf: brdf,
    phongFunction: phongFunction,
    phongUtils: phongUtils,
    lightCommon: lightCommon,
    pbrStruct: pbrStruct,
    pbrFunction: pbrFunction,
    pbrTexture: pbrTexture,
    pbrUtils: pbrUtils,
    environment: environment
};

function phongVert(defines) {
    return `
      struct VertexOutput {
            @builtin(position) position: vec4<f32>,
            @location(0) vUv: vec2<f32>,
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
            normalMatrix: mat3x3<f32>,
            emissive:vec3<f32>,
            specular:vec3<f32>,
            shininess:f32,
      }
      struct SystemUniform {
            projectionMatrix: mat4x4<f32>,
            viewMatrix: mat4x4<f32>,
            inverseViewMatrix: mat4x4<f32>,
            cameraPosition: vec3<f32>,
      }; 

      @binding(0) @group(0) var<uniform> selfUniform : MaterialUniform;
      @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;

      struct VertexInput {
            @location(0) position: vec3<f32>,       
            @location(1) normal: vec3<f32>,
            @location(2) uv: vec2<f32>,
      }
      @vertex
      fn main(input: VertexInput) -> VertexOutput {
            var output: VertexOutput;
            output.vUv = input.uv;
            let modelPos=selfUniform.modelMatrix *vec4<f32>(input.position,1.0);
            output.worldPos = modelPos.xyz;
            let vNormalView = selfUniform.normalMatrix * input.normal;
            output.normal = vNormalView;
            output.view = systemUniform.cameraPosition.xyz - modelPos.xyz;
            let viewPosition=systemUniform.viewMatrix * modelPos;
            output.viewPosition = -viewPosition.xyz;
            output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix * modelPos;
            return output;
      }`;
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-23 10:06:23
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-17 15:55:23
 * @FilePath: \GEngine\src\shader\material\phongFrag.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function phongFrag(defines) {
    return wgslParseDefines `    
  struct VertexOutput {
      @builtin(position) position: vec4<f32>,
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
      normalMatrix: mat3x3<f32>,
      emissive:vec3<f32>,
      shininess:f32,
      specular:vec3<f32>,      
   }
    #if${defines.baseTexture}
      @group(0) @binding(2) var mySampler: sampler;
      @group(0) @binding(1) var myTexture: texture_2d<f32>;
    #endif
    @binding(0) @group(0) var<uniform> materialUniform : MaterialUniform;
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
        var totalEmissiveRadiance:vec3<f32> = materialUniform.emissive;
        var color:vec4<f32>;
        #if${defines.baseTexture}
            color=textureSample(myTexture, mySampler, input.vUv);
        #else
            color=vec4<f32>(materialUniform.color,1.0);
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

        let reflectedLight:ReflectedLight= parseLights(geometry,material);

        let finnalColor=reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular+totalEmissiveRadiance;

        return vec4<f32>(finnalColor,1.0);
    }`;
}

// import Color from "../../math/Color";
function colorFrag(defines) {
    return `
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) color: vec4<f32>,
    };
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
      return input.color;
    }
    `;
}

function colorVert(defines) {
    return `
   struct VertexInput {
        @location(0) position: vec3<f32>,       
        @location(1) color: vec4<f32>,
   }
   struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) color: vec4<f32>,
    };
   struct SelfUniform {
      modelMatrix: mat4x4<f32>,
      color: vec3<f32>,
      opacity:f32,
      normalMatrix: mat3x3<f32>,
   }
   struct SystemUniform {
      projectionMatrix: mat4x4<f32>,
      viewMatrix: mat4x4<f32>,
      inverseViewMatrix: mat4x4<f32>,
      cameraPosition: vec3<f32>,
   }; 
   @binding(0) @group(0) var<uniform> selfUniform : SelfUniform;
   @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
   @vertex
   fn main(input: VertexInput) -> VertexOutput {
    var output:VertexOutput;
    output.color=input.color;
    output.position = systemUniform.projectionMatrix * systemUniform.viewMatrix *selfUniform.modelMatrix*vec4<f32>(input.position,1.0);
    return output;
   }
   `;
}

function pbrFrag(defines) {
    return wgslParseDefines `
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
    #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
        @location(${defines.vUv2OutLocation}) vUv2: vec2<f32>,
    #endif

    #if ${defines.USE_COLOR_ALPHA}
        @location(${defines.vColorOutLocation}) vColor: vec4<f32>,
    #elif ${defines.USE_COLOR || defines.USE_INSTANCING_COLOR}
        @location(${defines.vColorOutLocation}) vColor: vec3<f32>,
    #endif

    #if ${defines.USE_TANGENT}
        @location(${defines.vTangentOutLocation}) vTangent: vec3<f32>,
        @location(${defines.vBitangentOutLocation}) vBitangent: vec3<f32>,
    #endif
};
        struct PhysicalMaterial {
             diffuseColor:vec3<f32>,
             roughness:f32,
             specularColor:vec3<f32>,
             specularF90:f32,
            #if ${defines.USE_CLEARCOAT}
                clearcoat:f32,
                clearcoatRoughness:f32,
                clearcoatF0:vec3<f32>,
                clearcoatF90:f32,
            #endif

            #if ${defines.USE_IRIDESCENCE}
                iridescence:f32,
                iridescenceIOR:f32,
                iridescenceThickness:f32,
                iridescenceFresnel:vec3<f32>,
                iridescenceF0:vec3<f32>,
            #endif

            #if ${defines.USE_SHEEN}
                sheenColor:vec3<f32>,
                sheenRoughness:f32,
            #endif

            #if ${defines.IOR}
                 ior:f32,
            #endif

            #if ${defines.USE_TRANSMISSION}
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
        #if ${defines.USE_TEXTURE}
            var sampledDiffuseColor:vec4<f32> =textureSample(baseTexture, baseSampler, input.vUv);
            #if ${defines.DECODE_VIDEO_TEXTURE}
                sampledDiffuseColor = vec4<f32>( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3<f32>( 0.0521327014 ), vec3<f32>( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3<f32>( lessThanEqual( sampledDiffuseColor.rgb, vec3<f32>( 0.04045 ) ) ) ), sampledDiffuseColor.w );
            #endif

            diffuseColor *= sampledDiffuseColor;
        #endif

        var roughnessFactor:f32 = materialUniform.roughness;
    
        #if ${defines.USE_ROUGHNESSTEXTURE}
            let texelRoughness:vec4<f32>=textureSample(roughnessTexture, baseSampler, input.vUv);
            roughnessFactor *= texelRoughness.g;
        #endif

        var metalnessFactor:f32 = materialUniform.metalness;
    
        #if ${defines.USE_METALNESSTEXTURE}
            let texelMetalness:vec4<f32> =textureSample(metalnessTexture, baseSampler, input.vUv);
            metalnessFactor *= texelMetalness.b;
        #endif

        let faceDirection:f32 =select(-1.0,1.0,input.is_front);
        #if ${defines.FLAT_SHADED}
            let fdx:vec3<f32> = dpdx( input.vViewPosition );
            let fdy:vec3<f32> = dpdy( input.vViewPosition );
            let normal:vec3<f32> = normalize( cross( fdx, fdy ) );
        #else
            let normal:vec3<f32> = normalize( input.vNormal );
            #if ${defines.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif
            #if ${defines.USE_TANGENT}
                let tangent:vec3<f32> = normalize( input.vTangent );
                let bitangent:vec3<f32> = normalize( input.vBitangent );
                #if ${defines.DOUBLE_SIDED}
                    tangent = tangent * faceDirection;
                    bitangent = bitangent * faceDirection;
                #endif
                #if ${defines.TANGENTSPACE_NORMALTEXTURE || defines.USE_CLEARCOAT_NORMALTEXTURE}
                    let vTBN:mat3x3<f32> = mat3x3<f32>( tangent, bitangent, normal );
                #endif
            #endif
        #endif
    
        let geometryNormal:vec3<f32> = normal;

        #if ${defines.OBJECTSPACE_NORMALTEXTURE}
            normal =textureSample(normalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            #if ${defines.FLIP_SIDED}
                normal = - normal;
            #endif
            #if ${defines.DOUBLE_SIDED}
                normal = normal * faceDirection;
            #endif

            normal = normalize(materialUniform.normalMatrix * normal );

            #elif ${defines.TANGENTSPACE_NORMALTEXTURE}
            let tempMapN:vec3<f32> =textureSample(normalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            let mapN:vec3<f32> =tempMapN.xy *= materialUniform.normalScale;
            #if ${defines.USE_TANGENT}
                normal = normalize( vTBN * mapN );
            #else
                normal = perturbNormal2Arb( - input.vViewPosition, normal, mapN, faceDirection );
            #endif

            #elif ${defines.USE_BUMPTEXTURE}

                normal = perturbNormalArb( - input.vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif

        #if ${defines.USE_CLEARCOAT}
            var clearcoatNormal:vec3<f32> = geometryNormal;
        #endif
        #if ${defines.USE_CLEARCOAT_NORMALTEXTURE}
            var clearcoatMapN:vec3<f32> =textureSample(clearcoatNormalTexture, baseSampler, input.vUv).xyz * 2.0 - 1.0;
            clearcoatMapN.xy *= materialUniform.clearcoatNormalScale;
            #if ${defines.USE_TANGENT}
                clearcoatNormal = normalize( vTBN * clearcoatMapN );
            #else
                clearcoatNormal = perturbNormal2Arb( - input.vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
            #endif
        #endif
        #if ${defines.USE_EMISSIVETEXTURE}
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

        #if ${defines.IOR}
            material.ior = materialUniform.ior;
            #if ${defines.SPECULAR}
                let specularIntensityFactor:f32 = materialUniform.specularIntensity;
                let specularColorFactor:vec3<f32> = materialUniform.specularColor;
                #if ${defines.USE_SPECULARINTENSITYTEXTURE}
                    specularIntensityFactor *=textureSample(specularIntensityTexture, baseSampler, input.vUv).a;
                #endif

                #if ${defines.USE_SPECULARCOLORTEXTURE}
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
        #if ${defines.USE_CLEARCOAT}
            material.clearcoat = materialUniform.clearcoat;
            material.clearcoatRoughness = materialUniform.clearcoatRoughness;
            material.clearcoatF0 = vec3<f32>( 0.04 );
            material.clearcoatF90 = 1.0;
            #if ${defines.USE_CLEARCOATTEXTURE}
                material.clearcoat *=textureSample(clearcoatTexture, baseSampler, input.vUv).x;
            #endif
            #if ${defines.USE_CLEARCOAT_ROUGHNESSTEXTURE}
                material.clearcoatRoughness *=textureSample(clearcoatRoughnessTexture, baseSampler, input.vUv).y;
            #endif
            material.clearcoat = saturate( material.clearcoat );
            material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
            material.clearcoatRoughness += geometryRoughness;
            material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
        #endif
        #if ${defines.USE_IRIDESCENCE}
            material.iridescence = materialUniform.iridescence;
            material.iridescenceIOR = materialUniform.iridescenceIOR;
            #if ${defines.USE_IRIDESCENCETEXTURE}
                material.iridescence *=textureSample(iridescenceTexture, baseSampler, input.vUv).r;
            #endif
            #if ${defines.USE_IRIDESCENCE_THICKNESSTEXTURE}
                material.iridescenceThickness = (materialUniform.iridescenceThicknessMaximum - materialUniform.iridescenceThicknessMinimum) * textureSample(iridescenceThicknessTexture, baseSampler, input.vUv).g + materialUniform.iridescenceThicknessMinimum;
            #else
                material.iridescenceThickness = materialUniform.iridescenceThicknessMaximum;
            #endif
        #endif
        #if ${defines.USE_SHEEN}
            material.sheenColor = materialUniform.sheenColor;
            #if ${defines.USE_SHEENCOLORTEXTURE}
                material.sheenColor *=textureSample(sheenColorTexture, baseSampler, input.vUv).rgb;
            #endif
            material.sheenRoughness = clamp( materialUniform.sheenRoughness, 0.07, 1.0 );
            #if ${defines.USE_SHEENROUGHNESSTEXTURE}
                material.sheenRoughness *=textureSample(sheenRoughnessTexture, baseSampler, input.vUv).a;
            #endif
        #endif
        
        var geometry:GeometricContext;
        geometry.position = - input.vViewPosition;
        geometry.normal = normal;
       // geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( input.vViewPosition );
        geometry.viewDir = normalize( input.vViewPosition); 

        #if ${defines.USE_CLEARCOAT}
            geometry.clearcoatNormal = clearcoatNormal;
        #endif

        #if ${defines.USE_IRIDESCENCE}
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

        #if ${defines.USE_LIGHTTEXTURE}
            let lightMapTexel:vec4<f32> =textureSample(lightTexture, baseSampler, input.vUv2);
            let lightMapIrradiance:vec3<f32> = lightMapTexel.rgb * materialUniform.lightTextureIntensity;
            irradiance += lightMapIrradiance;
        #endif
        //&& defines.STANDARD&&defines.ENVTEXTURE_TYPE_CUBE_UV
        #if ${defines.USE_ENVTEXTURE} 
            iblIrradiance += getIBLIrradiance( geometry.normal,baseSampler,systemUniform.viewMatrix );
        #endif
        #if ${defines.USE_ENVTEXTURE}
            radiance += getIBLRadiance( geometry.viewDir,baseSampler,systemUniform.viewMatrix, geometry.normal, materialUniform.roughness );
            #if ${defines.USE_CLEARCOAT}
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
        #if ${defines.USE_AOTEXTURE}
            let ambientOcclusion:f32 = (textureSample(aoTexture, baseSampler, input.vUv2).r - 1.0 ) * materialUniform.aoTextureIntensity + 1.0;

            reflectedLight.indirectDiffuse *= ambientOcclusion;
            //&&defines.STANDARD
            #if ${defines.USE_ENVTEXTURE} 
                let dotNV:f32 = saturate( dot( geometry.normal, geometry.viewDir ) );
                reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
            #endif
        #endif

        var totalDiffuse:vec3<f32> = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        var totalSpecular:vec3<f32> = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        //透射
        #if ${defines.USE_TRANSMISSION}
            material.transmission = materialUniform.transmission;
            material.transmissionAlpha = 1.0;
            material.thickness = materialUniform.thickness;
            material.attenuationDistance = materialUniform.attenuationDistance;
            material.attenuationColor = materialUniform.attenuationColor;
            #if ${defines.USE_TRANSMISSIONTEXTURE}
                material.transmission *=textureSample(transmissionTexture, baseSampler, input.vUv).r;
            #endif
            #if ${defines.USE_THICKNESSTEXTURE}
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

        #if ${defines.USE_SHEEN}
            let sheenEnergyComp:f32 = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
        #endif

        #if ${defines.USE_CLEARCOAT}
            let dotNVcc:f32 = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            let Fcc:vec3<f32> = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
            outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
        #endif

        #if ${defines.USE_TRANSMISSION}
            diffuseColor.a *= material.transmissionAlpha + 0.1;
        #endif

        var finnalColor:vec4<f32>;
        finnalColor = vec4<f32>( outgoingLight, diffuseColor.a );
        #if ${defines.TONE_MAPPING}
           finnalColor.rgb = toneMapping( finnalColor.rgb,materialUniform.toneMappingExposure );
        #endif

          finnalColor = linearToOutputTexel( finnalColor);

        #if ${defines.PREMULTIPLIED_ALPHA}
            finnalColor.rgb *= finnalColor.a;
        #endif
        #if ${defines.DITHERING}
            finnalColor.rgb = dithering( finnalColor.rgb );
        #endif
        return finnalColor;
    }`;
}

function pbrVert(defines) {
    return wgslParseDefines `
    #include <pbrStruct>
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) vUv: vec2<f32>,
        @location(1) vViewPosition: vec3<f32>, // Vector from vertex to camera.
        @location(2) vWorldPosition: vec3<f32>,
        @location(3) vNormal: vec3<f32>,
        // 可选
        #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
            @location(${defines.vUv2OutLocation}) vUv2: vec2<f32>,
        #endif

        #if ${defines.USE_COLOR_ALPHA}
            @location(${defines.vColorOutLocation}) vColor: vec4<f32>,
        #elif ${defines.USE_COLOR || defines.USE_INSTANCING_COLOR}
            @location(${defines.vColorOutLocation}) vColor: vec3<f32>,
        #endif

        #if ${defines.USE_TANGENT}
            @location(${defines.vTangentOutLocation}) vTangent: vec3<f32>,
            @location(${defines.vBitangentOutLocation}) vBitangent: vec3<f32>,
        #endif
    };
    struct GlobalUniform {
        projectionMatrix: mat4x4<f32>,
        viewMatrix: mat4x4<f32>,
        inverseViewMatrix: mat4x4<f32>,
        cameraPosition: vec3<f32>,
    };

    //texture and sampler
    // @group(0) @binding(${defines.samplerBinding}) var baseSampler: sampler;
    #if ${defines.USE_SKINNING}
        //uniform highp sampler2D boneTexture;
        @group(0) @binding(${defines.boneTextureBinding}) var boneTexture: texture_2d<f32>;
    #endif

    #if ${defines.USE_DISPLACEMENTTEXTURE}
        //uniform sampler2D displacementMap;
        @group(0) @binding(${defines.displacementTextureBinding}) var displacementMap: texture_2d<f32>;
    #endif

    #if ${defines.MORPHTARGETS_TEXTURE}
        //uniform sampler2DArray morphTargetsTexture;
        @group(0) @binding(${defines.morphTargetsTextureBinding}) var morphTargetsTexture: texture_2d_array<f32>;
    #endif

    struct VertexInput {
        @location(0) position: vec3<f32>,  

        @location(1) normal: vec3<f32>,

        @location(2) uv: vec2<f32>,
        #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
            @location(${defines.uv2Location}) uv2:vec2<f32>,
        #endif
        #if ${defines.USE_INSTANCING}
            @location(${defines.instanceMatrixLocation}) instanceMatrix:mat4x4<f32>,
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            @location(${defines.instanceColorLocation}) instanceColor:vec3<f32>,
        #endif
        
        #if ${defines.USE_TANGENT}
            @location(${defines.tangentLocation}) tangent:vec4<f32>,
        #endif
        #if ${defines.USE_COLOR_ALPHA}
            @location(${defines.colorLocation}) color:vec4<f32>,
        #elif ${defines.USE_COLOR}
            @location(${defines.colorLocation}) color:vec3<f32>,
        #endif

        #if ${defines.USE_MORPHTARGETS && !defines.MORPHTARGETS_TEXTURE}
            @location(${defines.morphTarget0Location}) morphTarget0:vec3<f32>,

            @location(${defines.morphTarget1Location}) morphTarget1:vec3<f32>,

            @location(${defines.morphTarget2Location}) morphTarget2:vec3<f32>,

            @location(${defines.morphTarget3Location}) morphTarget3:vec3<f32>,
            #if ${defines.USE_MORPHNORMALS}
                @location(${defines.morphNormal0Location}) morphNormal0:vec3<f32>,

                @location(${defines.morphNormal1Location}) morphNormal1:vec3<f32>,

                @location(${defines.morphNormal2Location}) morphNormal2:vec3<f32>,

                @location(${defines.morphNormal3Location}) morphNormal3:vec3<f32>,
            #else
                @location(${defines.morphTarget4Location}) morphTarget4:vec3<f32>,

                @location(${defines.morphTarget5Location}) morphTarget5:vec3<f32>,

                @location(${defines.morphTarget6Location}) morphTarget6:vec3<f32>,

                @location(${defines.morphTarget7Location}) morphTarget7:vec3<f32>,
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            @location(${defines.skinIndexLocation}) skinIndex:vec4<f32>,
            @location(${defines.skinWeightLocation}) skinWeight:vec4<f32>,
        #endif
  }

    #if ${defines.MORPHTARGETS_TEXTURE}
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
    #if ${defines.USE_SKINNING}
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
        #if ${defines.USE_TEXTURE}
            vertexOutput.vUv = input.uv;
        #endif
        #if ${defines.USE_LIGHTTEXTURE || defines.USE_AOTEXTURE}
            vertexOutput.vUv2 input.uv2;
        #endif
        #if ${defines.USE_COLOR_ALPHA}
            vertexOutput.vColor = vec4( 1.0 );
            #elif ${defines.USE_COLOR || defines.USE_INSTANCING_COLOR}
            vertexOutput.vColor = vec3( 1.0 );
        #endif
        #if ${defines.USE_COLOR}
            vertexOutput.vColor *= input.color;
        #endif
        #if ${defines.USE_INSTANCING_COLOR}
            vertexOutput.vColor.xyz *= input.instanceColor.xyz;
        #endif
        #if ${defines.USE_MORPHCOLORS && defines.MORPHTARGETS_TEXTURE}
            vertexOutput.vColor *= materialUniform.morphTargetBaseInfluence;
            for (let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                #if ${defines.USE_COLOR_ALPHA}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ) * materialUniform.morphTargetInfluences[ i ];
                    #elif ${defines.USE_COLOR}
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) vertexOutput.vColor += getMorph( gl_VertexID, i, 2 ).rgb * materialUniform.morphTargetInfluences[ i ];
                #endif
            }
        #endif
        var objectNormal:vec3<f32> = vec3<f32>(input.normal);
        #if ${defines.USE_TANGENT}
            let objectTangent:vec3<f32> = vec3<f32>( input.tangent.xyz );
        #endif
        #if ${defines.USE_MORPHNORMALS}
            objectNormal *= materialUniform.morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
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
        #if ${defines.USE_SKINNING}
            let boneMatX:mat4x4<f32> = getBoneMatrix( input.skinIndex.x );
            let boneMatY:mat4x4<f32> = getBoneMatrix( input.skinIndex.y );
            let boneMatZ:mat4x4<f32> = getBoneMatrix( input.skinIndex.z );
            let boneMatW:mat4x4<f32> = getBoneMatrix( input.skinIndex.w );
        #endif
        #if ${defines.USE_SKINNING}
            let skinMatrix:mat4x4<f32> = mat4x4<f32>( 0.0 );
            skinMatrix += input.skinWeight.x * boneMatX;
            skinMatrix += input.skinWeight.y * boneMatY;
            skinMatrix += input.skinWeight.z * boneMatZ;
            skinMatrix += input.skinWeight.w * boneMatW;
            skinMatrix = materialUniform.bindMatrixInverse * skinMatrix * materialUniform.bindMatrix;
            objectNormal = vec4<f32>( skinMatrix * vec4<f32>( objectNormal, 0.0 ) ).xyz;
            #if ${defines.USE_TANGENT}
                objectTangent = vec4<f32>( skinMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #endif
        #endif
        var transformedNormal:vec3<f32> = objectNormal;
        // transformedNormal+=vec3<f32>(0.0);
        #if ${defines.USE_INSTANCING}
            let m:mat3x3<f32> = mat3x3<f32>( input.instanceMatrix );
            transformedNormal /= vec3<f32>( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
        #endif
        transformedNormal = materialUniform.normalMatrix * transformedNormal;
        #if ${defines.FLIP_SIDED}
            transformedNormal = - transformedNormal;
        #endif
        #if ${defines.USE_TANGENT}
            let transformedTangent:vec3<f32> = (globalUniform.viewMatrix*materialUniform.modelMatrix * vec4<f32>( objectTangent, 0.0 ) ).xyz;
            #if ${defines.FLIP_SIDED}
                transformedTangent = - transformedTangent;
            #endif
        #endif
        vertexOutput.vNormal = normalize( transformedNormal );
        #if ${defines.FLAT_SHADED}
            #if ${defines.USE_TANGENT}
                vTangent = normalize( transformedTangent );
                vBitangent = normalize( cross( vNormal, vTangent ) * input.tangent.w );
            #endif
        #endif
        let transformed:vec3<f32> = vec3<f32>( input.position );
        #if ${defines.USE_MORPHTARGETS}
            transformed *= materialUniform.morphTargetBaseInfluence;
            #if ${defines.MORPHTARGETS_TEXTURE}
                for ( let i : u32 = 0u; i < materialUniform.MORPHTARGETS_COUNT; i = i + 1u ) {
                    if ( materialUniform.morphTargetInfluences[ i ] ! = 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
                }
            #else
                transformed += input.morphTarget0 * materialUniform.morphTargetInfluences[ 0 ];
                transformed += input.morphTarget1 * materialUniform.morphTargetInfluences[ 1 ];
                transformed += input.morphTarget2 * materialUniform.morphTargetInfluences[ 2 ];
                transformed += input.morphTarget3 * materialUniform.morphTargetInfluences[ 3 ];
                #if ${defines.USE_MORPHNORMALS}
                    transformed += input.morphTarget4 * materialUniform.morphTargetInfluences[ 4 ];
                    transformed += input.morphTarget5 * materialUniform.morphTargetInfluences[ 5 ];
                    transformed += input.morphTarget6 * materialUniform.morphTargetInfluences[ 6 ];
                    transformed += input.morphTarget7 * materialUniform.morphTargetInfluences[ 7 ];
                #endif
            #endif
        #endif
        #if ${defines.USE_SKINNING}
            let skinVertex:vec4<f32> = materialUniform.bindMatrix * vec4<f32>( transformed, 1.0 );
            let skinned:vec4<f32> = vec4<f32>( 0.0 );
            skinned += boneMatX * skinVertex * input.skinWeight.x;
            skinned += boneMatY * skinVertex * input.skinWeight.y;
            skinned += boneMatZ * skinVertex * input.skinWeight.z;
            skinned += boneMatW * skinVertex * input.skinWeight.w;
            transformed = ( materialUniform.bindMatrixInverse * skinned ).xyz;
        #endif
        #if ${defines.USE_DISPLACEMENTTEXTURE} 
            transformed += normalize( objectNormal ) * (textureSample(displacementMap, baseSampler, vUv).x * materialUniform.displacementScale + materialUniform.displacementBias );
        #endif
        var mvPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
        #if ${defines.USE_INSTANCING}
            mvPosition = input.instanceMatrix * mvPosition;
        #endif
        mvPosition = globalUniform.viewMatrix*materialUniform.modelMatrix * mvPosition;
        vertexOutput.position = globalUniform.projectionMatrix * mvPosition;
        vertexOutput.vViewPosition = - mvPosition.xyz/mvPosition.w;
        #if ${defines.USE_ENVTEXTURE || defines.DISTANCE || defines.USE_TRANSMISSION} 
            var worldPosition:vec4<f32> = vec4<f32>( transformed, 1.0 );
            #if ${defines.USE_INSTANCING}
                worldPosition = input.instanceMatrix * worldPosition;
            #endif
            worldPosition = materialUniform.modelMatrix * worldPosition;
        #endif
        #if ${defines.USE_TRANSMISSION}
            vertexOutput.vWorldPosition = worldPosition.xyz;
        #endif
        return vertexOutput;
    }
    `;
}

function skyBoxFrag(defines) {
    return `
    fn lessThanEqual(a:vec3<f32>,b:vec3<f32>)->vec3<f32>{
        let xValue:f32=select(b.x,a.x,a.x<=b.x);
        let yValue:f32=select(b.y,a.y,a.y<=b.y);
        let zValue:f32=select(b.z,a.z,a.z<=b.z);
        return vec3<f32>(xValue,yValue,zValue);    
     }
    fn LinearTosRGB( value:vec4<f32> )->vec4<f32> {
        return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( lessThanEqual( value.rgb, vec3<f32>( 0.0031308 ) ) ) ), value.a );
    }
  struct FragmentInput {
    @location(0) texCoord : vec3<f32>
  };
  @group(0) @binding(2) var defaultSampler: sampler;
  @group(0) @binding(1) var skyboxTexture: texture_cube<f32>;
  @fragment
  fn main(input : FragmentInput) -> @location(0) vec4<f32> {
    let color = textureSample(skyboxTexture, defaultSampler, input.texCoord);
    return LinearTosRGB(color);
  }
`;
}

function skyBoxVert(defines) {
    return `
   struct SystemUniform {
       projectionMatrix: mat4x4<f32>,
       viewMatrix: mat4x4<f32>,
       inverseViewMatrix: mat4x4<f32>,
       cameraPosition: vec3<f32>,
   }; 
   struct MaterialUniform {
    modelMatrix: mat4x4<f32>,
    color: vec3<f32>,
    opacity:f32,
    normalMatrix: mat3x3<f32>,
 }
   @binding(0) @group(0) var<uniform> selfUniform : MaterialUniform;
   @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
     struct VertexInput {
       @location(0) position : vec3<f32>,
     };
     struct VertexOutput {
       @builtin(position) position : vec4<f32>,
       @location(0) texCoord : vec3<f32>,
     };
     @vertex
     fn main(input : VertexInput) -> VertexOutput {
       var output : VertexOutput;
       output.texCoord = input.position.xyz;
       var modelView = systemUniform.viewMatrix;
       // Drop the translation portion of the modelView matrix
       modelView[3] = vec4(0.0, 0.0, 0.0, modelView[3].w);
       output.position = systemUniform.projectionMatrix * modelView * vec4<f32>(input.position,1.0);
       // Returning the W component for both Z and W forces the geometry depth to
       // the far plane. When combined with a depth func of "less-equal" this makes
       // the sky write to any depth fragment that has not been written to yet.
       output.position = output.position.xyww;
       return output;
     }
   `;
}

function quadFrag(defines) {
    return `
    @group(0) @binding(2) var baseSampler: sampler;
    @group(0) @binding(1) var colorTexture: texture_2d<f32>;
    struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
    };
    @fragment
    fn main(input:VertexOutput) -> @location(0) vec4<f32> {
      return textureSample(colorTexture, baseSampler, vec2<f32>(input.uv.x,1.0-input.uv.y));
    }
    `;
}

function quadVert(defines) {
    return `
    struct VertexInput {
         @location(0) position: vec2<f32>,       
    }
    struct VertexOutput {
         @builtin(position) position: vec4<f32>,
         @location(0) uv: vec2<f32>,
     };
    struct SelfUniform {
          modelMatrix: mat4x4<f32>,
          color: vec3<f32>,
          opacity:f32,
          normalMatrix: mat3x3<f32>,
     }
     struct SystemUniform {
          projectionMatrix: mat4x4<f32>,
          viewMatrix: mat4x4<f32>,
          inverseViewMatrix: mat4x4<f32>,
          cameraPosition: vec3<f32>,
     };
     @binding(0) @group(0) var<uniform> selfUniform : SelfUniform;
     @binding(0) @group(1) var<uniform> systemUniform : SystemUniform;
    @vertex
    fn main(input: VertexInput) -> VertexOutput {
     var output:VertexOutput;
     output.uv = input.position * 0.5 + 0.5;
     output.position = vec4<f32>(input.position, 0.0, 1.0);;
     return output;
    }
    `;
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-18 10:53:08
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 14:32:22
 * @FilePath: \GEngine\src\shader\material\pbr_vs.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function pbr_vs(defines) {
    return wgslParseDefines `
   struct MaterialUniform {
        modelMatrix: mat4x4<f32>,
        color: vec3<f32>,
        opacity:f32,
        normalMatrix: mat3x3<f32>,
        emissive:vec3<f32>,
        metallic:f32,
        roughness:f32,
        #if ${defines.USE_NORMALTEXTURE}
            normalTextureScale:vec2<f32>,
        #endif
        #if ${defines.USE_AOTEXTURE}
            occlusionStrength:f32,
        #endif
        // #if ${defines.HAS_SKIN} 
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
       #if ${defines.HAS_SKIN} 
            mat4 skinMatrix = 
                   weight0.x * u_jointMatrix.matrix[int(joint0.x)] +
                   weight0.y * u_jointMatrix.matrix[int(joint0.y)] +
                   weight0.z * u_jointMatrix.matrix[int(joint0.z)] +
                   weight0.w * u_jointMatrix.matrix[int(joint0.w)];
           #if ${defines.SKIN_VEC8} 
               skinMatrix +=
                   weight1.x * u_jointMatrix.matrix[int(joint1.x)] +
                   weight1.y * u_jointMatrix.matrix[int(joint1.y)] +
                   weight1.z * u_jointMatrix.matrix[int(joint1.z)] +
                   weight1.w * u_jointMatrix.matrix[int(joint1.w)];
           #endif
        #endif
        var output: VertexOutput;
        output.uv = input.uv;
   
        #if ${defines.HAS_SKIN} 
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

function pbr_fs(defines) {
    return wgslParseDefines `
        // reference: https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/master/shaders/pbr-frag.glsl
        struct MaterialUniform {
            modelMatrix: mat4x4<f32>,
            color: vec3<f32>,
            opacity:f32,
            normalMatrix: mat3x3<f32>,
            emissive:vec3<f32>,
            metallic:f32,
            roughness:f32,
            #if ${defines.USE_NORMALTEXTURE}
                normalTextureScale:vec2<f32>,
            #endif
            #if ${defines.USE_AOTEXTURE}
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
        @group(0) @binding(${defines.diffuseEnvTextureBinding}) var diffuseEnvSampler: texture_cube<f32>;
        @group(0) @binding(${defines.specularEnvTextureBinding}) var specularEnvSampler: texture_cube<f32>;
        @group(0) @binding(${defines.brdfTextureBinding}) var brdfLUT: texture_2d<f32>;
        #if ${defines.USE_TEXTURE}
           @group(0) @binding(${defines.baseTextureBinding}) var baseColorTexture: texture_2d<f32>;
           @group(0) @binding(${defines.baseSamplerBinding}) var defaultSampler: sampler;
        #endif
        // normal map
        #if ${defines.USE_NORMALTEXTURE}
          @group(0) @binding(${defines.normalTextureBinding}) var normalTexture: texture_2d<f32>;
        #endif

        // emmisve map
        #if ${defines.USE_EMISSIVETEXTURE}
            @group(0) @binding(${defines.emissiveTextureBinding}) var u_emissiveTexture: texture_2d<f32>;
        #endif

        // metal roughness
        #if ${defines.USE_METALNESSTEXTURE}
             @group(0) @binding(${defines.metalnessRoughnessTextureBinding}) var metalnessRoughnessTexture: texture_2d<f32>;
        #endif
        // occlusion texture
        #if ${defines.USE_AOTEXTURE}
             @group(0) @binding(${defines.aoTextureBinding}) var aoTexture: texture_2d<f32>;
        #endif

        // Find the normal for this fragment, pulling either from a predefined normal map
        // or from the interpolated mesh normal and tangent attributes.
        fn getNormal(input:VertInput
            #if ${defines.USE_NORMALTEXTURE}
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
            #if ${defines.USE_NORMALTEXTURE}
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

        #if ${defines.USE_METALNESSTEXTURE}
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
        #if ${defines.USE_TEXTURE}
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
     
                #if ${defines.USE_NORMALTEXTURE}
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
        #if ${defines.USE_AOTEXTURE}
            let ao:f32 = textureSample(aoTexture,defaultSampler, input.uv).r;
            color = mix(color, color * ao, materialUniform.occlusionStrength);
        #endif

        #if ${defines.USE_EMISSIVETEXTURE}
            let emissive:vec3<f32> = textureSample(u_emissiveTexture, defaultSampler,input.uv).rgb ;
            color += emissive;
        #endif
       return vec4<f32>(color.xyz, baseColor.a);
    }
   `;
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-18 16:30:53
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-18 18:19:45
 * @FilePath: \GEngine\src\shader\Shaders.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function reduceComma(shader) {
    //对所有的include处理
    const str = resolveIncludes(shader);
    return str;
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
let currentDefines = {};
const shaders = {
    phong: {
        frag: phongFrag,
        vert: phongVert,
    },
    color: {
        frag: colorFrag,
        vert: colorVert
    },
    pbr: {
        frag: pbrFrag,
        vert: pbrVert,
    },
    skybox: {
        frag: skyBoxFrag,
        vert: skyBoxVert
    },
    resolve: {
        frag: quadFrag,
        vert: quadVert
    },
    pbr_mat: {
        frag: pbr_fs,
        vert: pbr_vs
    }
};
function resolveIncludes(string) {
    return string.replace(includePattern, includeReplacer);
}
function includeReplacer(match, include) {
    const excute = ShaderChunk[include];
    if (excute === undefined) {
        throw new Error(`Can not resolve #include <${include}>`);
    }
    const result = excute(currentDefines);
    return resolveIncludes(result);
}
function getVertFrag(type, defines = {}) {
    const excuteFunc = shaders[type];
    currentDefines = defines;
    return {
        vert: reduceComma(excuteFunc.vert(currentDefines)),
        frag: reduceComma(excuteFunc.frag(currentDefines))
    };
}

class ShaderSource {
    constructor(options) {
        this.type = options.type;
        this.defines = options.defines;
        this.customShader = defaultValue(options.customShader, false);
        this.dirty = true;
        if (options.render) {
            this.render = true;
            this.vertEntryPoint = options.vertMain || "main";
            this.fragEntryPoint = options.fragMain || "main";
            this.vert = options.vert || undefined;
            this.frag = options.frag || undefined;
        }
        else {
            this.compute = options.compute || undefined;
            this.computeMain = options.computeMain || "main";
        }
    }
    get uid() {
        this._uid == JSON.stringify(this.defines);
        return this._uid;
    }
    update(globalDefines, materialDefines, geometryDefines) {
    }
    updateShaderStr() {
        if (this.render) {
            const source = getVertFrag(this.type, this.defines);
            this.vert = source.vert;
            this.frag = source.frag;
        }
        else if (this.customShader) ;
    }
    setDefines(defines) {
        this.dirty = true;
        this.defines = Object.assign(this.defines, defines);
    }
    createShaderModule(device) {
        if (this.dirty) {
            this.updateShaderStr();
            this.dirty = false;
        }
        if (this.vert) {
            const vert = device.createShaderModule({
                code: this.vert,
            });
            const frag = device.createShaderModule({
                code: this.frag,
            });
            return { vert, frag };
        }
        else {
            const compute = device.createShaderModule({
                code: this.compute,
            });
            return compute;
        }
    }
    static replaceMain(source, renamedMain) {
        renamedMain = `void ${renamedMain}()`;
        return source.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, renamedMain);
    }
}

class Material {
    constructor() {
        this.label = undefined;
        this.type = undefined;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
        this._diffuse = new Color(1.0, 1.0, 1, 0);
        this._opacity = 1.0;
        //Buffer
        this.shaderData = undefined;
        this.shaderSource = undefined;
        this.dirty = true;
        this._emissive = new Color(0, 0.0, 0, 1.0);
        this._emissiveIntensity = 1.0;
        this._renderState = {
            primitive: {
                frontFace: FrontFace.CCW,
                cullMode: CullMode.None,
                unclippedDepth: false,
                topology: PrimitiveTopology.TriangleList
            }
        };
        this._doubleSided = true;
    }
    set wireframe(value) {
        this._renderState.primitive.topology = value ? PrimitiveTopology.LineList : PrimitiveTopology.TriangleList;
    }
    get doubleSided() {
        return this._doubleSided;
    }
    set doubleSided(value) {
        this._renderState.primitive.cullMode = value ? CullMode.None : CullMode.Back;
        this._doubleSided = value;
    }
    get renderState() {
        return this._renderState;
    }
    get diffuse() {
        return this._diffuse;
    }
    set diffuse(v) {
        this._diffuse = v;
    }
    get emissive() {
        return this._emissive;
    }
    set emissive(v) {
        this._emissive = v;
    }
    get emissiveIntensity() {
        return this._emissiveIntensity;
    }
    set emissiveIntensity(v) {
        this._emissiveIntensity = v;
    }
    get opacity() {
        return this._opacity;
    }
    set opacity(v) {
        this._opacity = v;
    }
    get blendConstant() {
        return this._renderState.blendConstant;
    }
    set blendConstant(value) {
        this._renderState.blendConstant = value;
    }
    get targets() {
        return this._renderState.targets;
    }
    set targets(value) {
        this._renderState.targets = value;
    }
    get multisample() {
        return this._renderState.multisample;
    }
    set multisample(value) {
        this._renderState.multisample = value;
    }
    get primitive() {
        return this._renderState.primitive;
    }
    set primitive(value) {
        this._renderState.primitive = value;
    }
    get stencilReference() {
        return this._renderState.stencilReference;
    }
    set stencilReference(value) {
        this._renderState.stencilReference = value;
    }
    get depthStencil() {
        return this._renderState.depthStencil;
    }
    set depthStencil(value) {
        this._renderState.depthStencil = value;
    }
    onBeforeRender() { }
    onBeforeCompile() { }
    update(frameState, mesh) {
    }
    createShaderData(mesh, frameState) {
        this.shaderData = new ShaderData(this.type, 0);
        this.shaderData.setMatrix4('modelMatrix', () => {
            return mesh.modelMatrix;
        });
        this.shaderData.setColor("diffuse", this);
        this.shaderData.setFloat("opacity", this);
        this.shaderData.setMatrix3("normalMtrix", () => {
            return mesh.normalMatrix;
        });
        this.shaderData.setColor('emissive', this);
    }
    destroy() {
        this.label = undefined;
        this.type = undefined;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
        this.color = undefined;
    }
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-11-15 15:29:51
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-16 16:02:27
 * @FilePath: \GEngine\src\material\ColorMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class ColorMaterial extends Material {
    constructor() {
        super();
        this.type = 'color';
        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {}
        });
    }
    update(frameState, mesh) {
        if (!this.shaderData)
            this.createShaderData(mesh);
    }
}

class Axes extends Mesh {
    constructor() {
        super();
        this.distanceToCamera = 10;
        this.material = new ColorMaterial();
        this.material.wireframe = true;
        this.init();
    }
    update(frameState) {
        this.updateMatrix();
        this.material.update(frameState, this);
        frameState.renderQueue.opaque.push(this);
    }
    init() {
        const position = [
            0, 0, 0,
            1, 0, 0,
            0, 0, 0,
            0, 1, 0,
            0, 0, 0,
            0, 0, 1,
        ];
        const colors = [
            1, 0, 0, 1,
            1, 0.5, 0.5, 1,
            0, 1, 0, 1,
            0.5, 1, 0.5, 1,
            0, 0, 1, 1,
            0.5, 0.5, 1, 1,
        ];
        const indices = [0, 1, 2, 3, 4, 5];
        this.geometry = new Geometry({});
        this.geometry.setAttribute(new Float32Attribute('position', position, 3));
        this.geometry.setAttribute(new Float32Attribute('color', colors, 4));
        this.geometry.setIndice(indices);
        this.geometry.count = indices.length;
    }
}

class SkyBoxGeometry extends Geometry {
    constructor() {
        super({});
        this.init();
    }
    update(frameState) {
        frameState.context;
    }
    init() {
        this.position = [
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, 1.0,
            1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0, -1.0, // 7
        ];
        this.indices = [
            // PosX (Right)
            0, 2, 4,
            6, 4, 2,
            // NegX (Left)
            5, 3, 1,
            3, 5, 7,
            // PosY (Top)
            4, 1, 0,
            1, 4, 5,
            // NegY (Bottom)
            2, 3, 6,
            7, 6, 3,
            // PosZ (Front)
            0, 1, 2,
            3, 2, 1,
            // NegZ (Back)
            6, 5, 4,
            5, 6, 7,
        ];
        this.setAttribute(new Float32Attribute('position', this.position, 3));
        this.setIndice(this.indices);
        this.count = this.indices.length;
    }
}

async function CubeTextureLoader(urls) {
    const promises = urls.map((src) => {
        const img = document.createElement('img');
        img.src = src;
        return img.decode().then(() => createImageBitmap(img));
    });
    const images = await Promise.all(promises);
    await Promise.all(images);
    const baseSampler = new Sampler({
        magFilter: 'linear',
        minFilter: 'linear',
    });
    const data = images.map((image, i) => {
        return {
            source: image,
            width: image.width,
            height: image.height,
            depth: 1,
            x: 0,
            y: 0,
            z: i,
        };
    });
    const baseTexture = new Texture({
        size: {
            width: images[0].width,
            height: images[0].height,
            depth: 6
        },
        format: 'rgba8unorm',
        usage: GPUTextureUsage.TEXTURE_BINDING |
            GPUTextureUsage.COPY_DST |
            GPUTextureUsage.RENDER_ATTACHMENT,
        sampler: baseSampler,
        data,
        viewFormats: 'cube',
        mipLevelCount: 6,
        needMipMap: true
    });
    return {
        texture: baseTexture,
        sampler: baseSampler,
    };
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-12-10 20:24:50
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-29 18:14:46
 * @FilePath: \GEngine\src\material\SkyBoxMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class SkyBoxMaterial extends Material {
    constructor() {
        super();
        this.type = 'skybox';
        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {}
        });
        this.images = [];
        this.depthStencil = {
            depthWriteEnabled: false,
            depthCompare: CompareFunction.LessEqual,
            format: TextureFormat.Depth24Plus
        };
    }
    async loadTexture(urls) {
        const result = await CubeTextureLoader(urls);
        this.baseTexture = result.texture;
        this.baseSampler = result.sampler;
    }
    update(frameState, mesh) {
        if (!this.shaderData) {
            this.createShaderData(mesh);
        }
    }
    createShaderData(mesh) {
        super.createShaderData(mesh);
        this.shaderData.setTexture('baseTexture', this);
        this.shaderData.setSampler('baseSampler', this);
    }
}

class SkyBox extends Mesh {
    constructor(urls) {
        super();
        this.distanceToCamera = 10;
        this.material = new SkyBoxMaterial();
        if (urls)
            this.material.loadTexture(urls);
        this.geometry = new SkyBoxGeometry();
        this.isSkyBox = true;
    }
    update(frameState) {
        this.updateMatrix();
        this.geometry.update(frameState);
        this.material.update(frameState, this);
        frameState.renderQueue.preRender.push(this);
    }
}

/**
 * Two times PI.
 * @constant {number}
 */
function createBox(options) {
    options = options || {};
    let dimensions = options.dimensions || [1, 1, 1];
    let position = options.position || [-dimensions[0] / 2, -dimensions[1] / 2, -dimensions[2] / 2];
    let x = position[0];
    let y = position[1];
    let z = position[2];
    let width = dimensions[0];
    let height = dimensions[1];
    let depth = dimensions[2];
    let fbl = { x: x, y: y, z: z + depth };
    let fbr = { x: x + width, y: y, z: z + depth };
    let ftl = { x: x, y: y + height, z: z + depth };
    let ftr = { x: x + width, y: y + height, z: z + depth };
    let bbl = { x: x, y: y, z: z };
    let bbr = { x: x + width, y: y, z: z };
    let btl = { x: x, y: y + height, z: z };
    let btr = { x: x + width, y: y + height, z: z };
    let positions = [
        //front
        fbl.x, fbl.y, fbl.z,
        fbr.x, fbr.y, fbr.z,
        ftl.x, ftl.y, ftl.z,
        ftl.x, ftl.y, ftl.z,
        fbr.x, fbr.y, fbr.z,
        ftr.x, ftr.y, ftr.z,
        //right
        fbr.x, fbr.y, fbr.z,
        bbr.x, bbr.y, bbr.z,
        ftr.x, ftr.y, ftr.z,
        ftr.x, ftr.y, ftr.z,
        bbr.x, bbr.y, bbr.z,
        btr.x, btr.y, btr.z,
        //back
        fbr.x, bbr.y, bbr.z,
        bbl.x, bbl.y, bbl.z,
        btr.x, btr.y, btr.z,
        btr.x, btr.y, btr.z,
        bbl.x, bbl.y, bbl.z,
        btl.x, btl.y, btl.z,
        //left
        bbl.x, bbl.y, bbl.z,
        fbl.x, fbl.y, fbl.z,
        btl.x, btl.y, btl.z,
        btl.x, btl.y, btl.z,
        fbl.x, fbl.y, fbl.z,
        ftl.x, ftl.y, ftl.z,
        //top
        ftl.x, ftl.y, ftl.z,
        ftr.x, ftr.y, ftr.z,
        btl.x, btl.y, btl.z,
        btl.x, btl.y, btl.z,
        ftr.x, ftr.y, ftr.z,
        btr.x, btr.y, btr.z,
        //bottom
        bbl.x, bbl.y, bbl.z,
        bbr.x, bbr.y, bbr.z,
        fbl.x, fbl.y, fbl.z,
        fbl.x, fbl.y, fbl.z,
        bbr.x, bbr.y, bbr.z,
        fbr.x, fbr.y, fbr.z
    ];
    let uvs = [
        //front
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1,
        //right
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1,
        //back
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1,
        //left
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1,
        //top
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1,
        //bottom
        0, 0,
        1, 0,
        0, 1,
        0, 1,
        1, 0,
        1, 1
    ];
    let normals = [
        // front
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        // right
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        // back
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        // left
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        // top
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        // bottom
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0
    ];
    return {
        positions: positions,
        normals: normals,
        uvs: uvs
    };
}
function createSphere(options) {
    options = options || {};
    let longBands = options.longBands || 32;
    let latBands = options.latBands || 32;
    let radius = options.radius || 1;
    let lat_step = Math.PI / latBands;
    let long_step = 2 * Math.PI / longBands;
    let num_positions = longBands * latBands * 4;
    let num_indices = longBands * latBands * 6;
    let lat_angle, long_angle;
    let positions = new Array(num_positions * 3);
    let normals = new Array(num_positions * 3);
    let uvs = new Array(num_positions * 2);
    let indices = new Array(num_indices);
    let x1, x2, x3, x4, y1, y2, z1, z2, z3, z4, u1, u2, v1, v2;
    let i, j;
    let k = 0, l = 0;
    let vi, ti;
    for (i = 0; i < latBands; i++) {
        lat_angle = i * lat_step;
        y1 = Math.cos(lat_angle);
        y2 = Math.cos(lat_angle + lat_step);
        for (j = 0; j < longBands; j++) {
            long_angle = j * long_step;
            x1 = Math.sin(lat_angle) * Math.cos(long_angle);
            x2 = Math.sin(lat_angle) * Math.cos(long_angle + long_step);
            x3 = Math.sin(lat_angle + lat_step) * Math.cos(long_angle);
            x4 = Math.sin(lat_angle + lat_step) * Math.cos(long_angle + long_step);
            z1 = Math.sin(lat_angle) * Math.sin(long_angle);
            z2 = Math.sin(lat_angle) * Math.sin(long_angle + long_step);
            z3 = Math.sin(lat_angle + lat_step) * Math.sin(long_angle);
            z4 = Math.sin(lat_angle + lat_step) * Math.sin(long_angle + long_step);
            u1 = 1 - j / longBands;
            u2 = 1 - (j + 1) / longBands;
            v1 = 1 - i / latBands;
            v2 = 1 - (i + 1) / latBands;
            vi = k * 3;
            ti = k * 2;
            positions[vi] = x1 * radius;
            positions[vi + 1] = y1 * radius;
            positions[vi + 2] = z1 * radius; //v0
            positions[vi + 3] = x2 * radius;
            positions[vi + 4] = y1 * radius;
            positions[vi + 5] = z2 * radius; //v1
            positions[vi + 6] = x3 * radius;
            positions[vi + 7] = y2 * radius;
            positions[vi + 8] = z3 * radius; // v2
            positions[vi + 9] = x4 * radius;
            positions[vi + 10] = y2 * radius;
            positions[vi + 11] = z4 * radius; // v3
            normals[vi] = x1;
            normals[vi + 1] = y1;
            normals[vi + 2] = z1;
            normals[vi + 3] = x2;
            normals[vi + 4] = y1;
            normals[vi + 5] = z2;
            normals[vi + 6] = x3;
            normals[vi + 7] = y2;
            normals[vi + 8] = z3;
            normals[vi + 9] = x4;
            normals[vi + 10] = y2;
            normals[vi + 11] = z4;
            uvs[ti] = u1;
            uvs[ti + 1] = v1;
            uvs[ti + 2] = u2;
            uvs[ti + 3] = v1;
            uvs[ti + 4] = u1;
            uvs[ti + 5] = v2;
            uvs[ti + 6] = u2;
            uvs[ti + 7] = v2;
            indices[l] = k;
            indices[l + 1] = k + 1;
            indices[l + 2] = k + 2;
            indices[l + 3] = k + 2;
            indices[l + 4] = k + 1;
            indices[l + 5] = k + 3;
            k += 4;
            l += 6;
        }
    }
    return {
        positions: positions,
        normals: normals,
        uvs: uvs,
        indices: indices
    };
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-24 19:41:12
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-30 16:56:45
 * @FilePath: \GEngine\src\geometry\SphereGeometry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class SphereGeometry extends Geometry {
    constructor() {
        super({});
        this.type = 'sphere';
        this.init();
    }
    init() {
        const { positions, normals, uvs, indices } = createSphere({});
        this.positions = positions;
        this.normals = normals;
        this.uvs = uvs;
        this.indices = indices;
        this.computeBoundingSphere(this.positions);
        this.setAttribute(new Float32Attribute('position', this.positions, 3));
        this.setAttribute(new Float32Attribute('normal', this.normals, 3));
        this.setAttribute(new Float32Attribute('uv', this.uvs, 2));
        this.setIndice(this.indices);
        this.count = this.indices.length;
    }
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 13:17:05
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-19 11:47:05
 * @FilePath: \GEngine\src\geometry\BoxGeometry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class BoxGeometry extends Geometry {
    constructor(width = 10, height = 10, depth = 10) {
        super({});
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.type = 'box';
        this.init();
    }
    init() {
        const { positions, normals, uvs } = createBox({ dimensions: [10, 10, 10] });
        this.position = positions;
        this.normal = normals;
        this.uv = uvs;
        this.computeBoundingSphere(this.position);
        this.setAttribute(new Float32Attribute('position', this.position, 3));
        this.setAttribute(new Float32Attribute('normal', this.normal, 3));
        this.setAttribute(new Float32Attribute('uv', this.uv, 2));
        // this.setIndice(this.indices);
        // this.indexBuffer.topology=PrimitiveTopology.LineList;
        this.count = 36;
    }
    update(frameState) {
    }
    destroy() { }
}

class TorusKnotGeometry extends Geometry {
    constructor(radius = 1, tube = 0.4, tubularSegments = 64, radialSegments = 8, p = 2, q = 3) {
        super({});
        this.radius = radius;
        this.tube = tube;
        this.tubularSegments = tubularSegments;
        this.radialSegments = radialSegments;
        this.p = p;
        this.q = q;
        this.indices = [];
        this.vertices = [];
        this.normals = [];
        this.uvs = [];
        this.createGeometry();
        this.computeBoundingSphere(this.vertices);
        this.init();
    }
    update(frameState) {
        frameState.context;
    }
    init() {
        this.setAttribute(new Float32Attribute('position', this.vertices, 3));
        this.setAttribute(new Float32Attribute('normal', this.normals, 3));
        this.setAttribute(new Float32Attribute('uv', this.uvs, 2));
        this.setIndice(this.indices);
        this.count = this.indices.length;
    }
    createGeometry() {
        const tubularSegments = Math.floor(this.tubularSegments);
        const radialSegments = Math.floor(this.radialSegments);
        // helper variables
        const vertex = new Vector3();
        const normal = new Vector3();
        const P1 = new Vector3();
        const P2 = new Vector3();
        const B = new Vector3();
        const T = new Vector3();
        const N = new Vector3();
        // generate vertices, normals and uvs
        for (let i = 0; i <= tubularSegments; ++i) {
            // the radian "u" is used to calculate the position on the torus curve of the current tubular segment
            const u = i / tubularSegments * this.p * Math.PI * 2;
            // now we calculate two points. P1 is our current position on the curve, P2 is a little farther ahead.
            // these points are used to create a special "coordinate space", which is necessary to calculate the correct vertex positions
            calculatePositionOnCurve(u, this.p, this.q, this.radius, P1);
            calculatePositionOnCurve(u + 0.01, this.p, this.q, this.radius, P2);
            // calculate orthonormal basis
            Vector3.subtract(P2, P1, T);
            // T.subVectors( P2, P1 );
            Vector3.add(P2, P1, N);
            // N.addVectors( P2, P1 );
            Vector3.cross(T, N, B);
            //B.crossVectors( T, N );
            Vector3.cross(B, T, N);
            // N.crossVectors( B, T );
            // normalize B, N. T can be ignored, we don't use it
            B.normalize();
            N.normalize();
            for (let j = 0; j <= radialSegments; ++j) {
                // now calculate the vertices. they are nothing more than an extrusion of the torus curve.
                // because we extrude a shape in the xy-plane, there is no need to calculate a z-value.
                const v = j / radialSegments * Math.PI * 2;
                const cx = -this.tube * Math.cos(v);
                const cy = this.tube * Math.sin(v);
                // now calculate the final vertex position.
                // first we orient the extrusion with our basis vectors, then we add it to the current position on the curve
                vertex.x = P1.x + (cx * N.x + cy * B.x);
                vertex.y = P1.y + (cx * N.y + cy * B.y);
                vertex.z = P1.z + (cx * N.z + cy * B.z);
                this.vertices.push(vertex.x, vertex.y, vertex.z);
                // normal (P1 is always the center/origin of the extrusion, thus we can use it to calculate the normal)
                Vector3.subtract(vertex, P1, normal);
                normal.normalize();
                this.normals.push(normal.x, normal.y, normal.z);
                // uv
                this.uvs.push(i / tubularSegments);
                this.uvs.push(j / radialSegments);
            }
        }
        // generate indices
        for (let j = 1; j <= tubularSegments; j++) {
            for (let i = 1; i <= radialSegments; i++) {
                // indices
                const a = (radialSegments + 1) * (j - 1) + (i - 1);
                const b = (radialSegments + 1) * j + (i - 1);
                const c = (radialSegments + 1) * j + i;
                const d = (radialSegments + 1) * (j - 1) + i;
                // faces
                this.indices.push(a, b, d);
                this.indices.push(b, c, d);
            }
        }
    }
}
function calculatePositionOnCurve(u, p, q, radius, position) {
    const cu = Math.cos(u);
    const su = Math.sin(u);
    const quOverP = q / p * u;
    const cs = Math.cos(quOverP);
    position.x = radius * (2 + cs) * 0.5 * cu;
    position.y = radius * (2 + cs) * su * 0.5;
    position.z = radius * Math.sin(quOverP) * 0.5;
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 16:03:28
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-17 15:45:25
 * @FilePath: \GEngine\src\material\PhongMaterial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class PhongMaterial extends Material {
    constructor() {
        super();
        this.type = 'phong';
        this.color = new Color(1.0, 0.0, 0.0, 1.0);
        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {
                materialPhong: true
            }
        });
        this.specular = new Color(1.0, 1.0, 1.0, 0.0);
        this.shininess = 30.0;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState, mesh) {
        if (!this.shaderData)
            this.createShaderData(mesh);
    }
    createShaderData(mesh) {
        super.createShaderData(mesh);
        this.shaderData.setFloat('shininess', this);
        this.shaderData.setColor('specular', this);
        if (this.baseTexture) {
            this.shaderData.setDefine('baseTexture', true);
            this.shaderData.setTexture('baseTexture', this);
        }
        if (this.baseSampler)
            this.shaderData.setSampler('sampler', this.baseTexture);
    }
    destroy() {
    }
}

class PbrMat extends Material {
    constructor() {
        super();
        this.type = 'pbr_mat';
        this._roughness = 0.1;
        this._metalness = 0.1;
        this._aoTextureIntensity = 1.0;
        this._normalScale = new Vector2(1, 1);
        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {
                materialPbr: true
            }
        });
    }
    get roughness() {
        return this._roughness;
    }
    set roughness(value) {
        this._roughness = value;
    }
    get metalness() {
        return this._metalness;
    }
    set metalness(v) {
        this._metalness = v;
    }
    get aoTextureIntensity() {
        return this._aoTextureIntensity;
    }
    set aoTextureIntensity(v) {
        this._aoTextureIntensity = v;
    }
    get normalScale() {
        if (this.renderState && this.renderState.primitive) {
            if (this.renderState.primitive.cullMode == CullMode.Back) {
                return Vector2.negate(this._normalScale, new Vector2());
            }
        }
        return this._normalScale;
    }
    set normalScale(v) {
        this._normalScale = v;
    }
    update(frameState, mesh) {
        if (!this.shaderData) {
            this.createShaderData(mesh, frameState);
        }
    }
    createShaderData(mesh, frameState) {
        super.createShaderData(mesh);
        this.shaderData.setFloat("metalness", this);
        this.shaderData.setFloat("roughness", this);
        if (this.baseTexture) {
            this.shaderData.setDefine('USE_TEXTURE', true);
            this.shaderData.setTexture('baseTexture', this);
            this.shaderData.setSampler('baseSampler', this);
        }
        if (this.metalnessRoughnessTexture) {
            this.shaderData.setDefine('USE_METALNESSTEXTURE', true);
            this.shaderData.setTexture('metalnessRoughnessTexture', this);
        }
        if (this.normalTexture) {
            this.shaderData.setFloatVec2("normalScale", this);
            this.shaderData.setDefine('USE_NORMALTEXTURE', true);
            this.shaderData.setTexture('normalTexture', this);
        }
        if (this.aoTexture) {
            this.shaderData.setDefine('USE_AOTEXTURE', true);
            this.shaderData.setTexture('aoTexture', this);
            this.shaderData.setFloat('aoTextureIntensity', this);
        }
        if (this.emissiveTexture) {
            this.shaderData.setDefine('USE_EMISSIVETEXTURE', true);
            this.shaderData.setTexture('emissiveTexture', this);
        }
        if (this.specularEnvTexture) {
            this.shaderData.setTexture('specularEnvTexture', this);
        }
        if (this.diffuseEnvTexture) {
            this.shaderData.setTexture('diffuseEnvTexture', this);
        }
        if (this.brdfTexture) {
            this.shaderData.setTexture('brdfTexture', this);
        }
        debugger;
    }
    destroy() {
    }
}

class PbrBaseMaterial extends Material {
    constructor() {
        super();
        this.type = 'pbr';
        this._roughness = 0.1;
        this._metalness = 0.1;
        this._lightTextureIntensity = 1.0;
        this._aoTextureIntensity = 1.0;
        this._bumpScale = 1;
        this._normalScale = new Vector2(1, 1);
        this._displacementScale = 1;
        this._displacementBias = 0;
        this._envTextureIntensity = 1.0;
        this._flatShading = false;
        this._ior = 1.5;
        // uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
        this._flipEnvTexture = -1;
        this.shaderSource = new ShaderSource({
            type: this.type,
            render: true,
            defines: {
                materialPbr: true
            }
        });
        //this.shaderData.setDefine('materialPbr',true);
        // uniforms.reflectivity.value = material.reflectivity;
        // uniforms.ior.value = material.ior;
        // uniforms.refractionRatio.value = material.refractionRatio;
    }
    get roughness() {
        return this._roughness;
    }
    set roughness(value) {
        this._roughness = value;
    }
    get metalness() {
        return this._metalness;
    }
    set metalness(v) {
        this._metalness = v;
    }
    get lightTextureIntensity() {
        return this._lightTextureIntensity;
    }
    set lightTextureIntensity(v) {
        this._lightTextureIntensity = v;
    }
    get aoTextureIntensity() {
        return this._aoTextureIntensity;
    }
    set aoTextureIntensity(v) {
        this._aoTextureIntensity = v;
    }
    get bumpScale() {
        if (this.renderState && this.renderState.primitive) {
            if (this.renderState.primitive.cullMode == CullMode.Back)
                return this._bumpScale * -1;
        }
        return this._bumpScale;
    }
    set bumpScale(v) {
        this._bumpScale = v;
    }
    get normalScale() {
        if (this.renderState && this.renderState.primitive) {
            if (this.renderState.primitive.cullMode == CullMode.Back) {
                return Vector2.negate(this._normalScale, new Vector2());
            }
        }
        return this._normalScale;
    }
    set normalScale(v) {
        this._normalScale = v;
    }
    get displacementScale() {
        return this._displacementScale;
    }
    set displacementScale(v) {
        this._displacementScale = v;
    }
    get displacementBias() {
        return this._displacementBias;
    }
    set displacementBias(v) {
        this._displacementBias = v;
    }
    get envTextureIntensity() {
        return this._envTextureIntensity;
    }
    set envTextureIntensity(v) {
        this._envTextureIntensity = v;
    }
    get flatShading() {
        return this._flatShading;
    }
    set flatShading(v) {
        this._flatShading = v;
    }
    get ior() {
        return this._ior;
    }
    set ior(v) {
        this._ior = v;
    }
    get reflectivity() {
        return (GMath.clamp(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1));
    }
    set reflectivity(v) {
        this.ior = (1 + 0.4 * v) / (1 - 0.4 * v);
    }
    get flipEnvTexture() {
        return this._flipEnvTexture;
    }
    set flipEnvTexture(v) {
        this._flipEnvTexture = v;
    }
    update(frameState, mesh) {
        if (!this.shaderData) {
            this.createShaderData(mesh, frameState);
        }
    }
    createShaderData(mesh, frameState) {
        super.createShaderData(mesh);
        this.shaderData.setFloat("roughness", this);
        this.shaderData.setFloat("metalness", this);
        if (this.baseTexture) {
            this.shaderData.setDefine('USE_TEXTURE', true);
            this.shaderData.setTexture('baseTexture', this);
            this.shaderData.setSampler('baseSampler', this);
        }
        if (this.metalnessTexture) {
            this.shaderData.setDefine('USE_METALNESSTEXTURE', true);
            this.shaderData.setTexture('metalnessTexture', this);
        }
        if (this.roughnessTexture) {
            this.shaderData.setDefine('USE_ROUGHNESSTEXTURE', true);
            this.shaderData.setTexture('roughnessTexture', this);
        }
        if (this.bumpTexture) {
            //if ( material.side === BackSide ) uniforms.bumpScale.value *= - 1;
            this.shaderData.setFloat("bumpScale", this);
            this.shaderData.setDefine('USE_BUMPTEXTURE', true);
            this.shaderData.setTexture('bumpTexture', this);
        }
        if (this.aoTexture) {
            this.shaderData.setDefine('USE_AOTEXTURE', true);
            this.shaderData.setDefine('vUv2OutLocation', 4);
            this.shaderData.setFloat("aoMapIntensity", this);
            this.shaderData.setTexture('aoTexture', this);
        }
        if (this.lightTexture) {
            // artist-friendly light intensity scaling factor
            //const scaleFactor = ( renderer.physicallyCorrectLights !== true ) ? Math.PI : 1;
            //uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
            this.shaderData.setFloat("lightMapIntensity", this);
            this.shaderData.setDefine('USE_LIGHTTEXTURE', true);
            this.shaderData.setDefine('vUv2OutLocation', 4);
            this.shaderData.setTexture('lightTexture', this);
        }
        if (this.displacementTexture) {
            this.shaderData.setFloat("displacementBias", this);
            this.shaderData.setFloat("displacementScale", this);
            this.shaderData.setDefine('USE_DISPLACEMENTTEXTURE', true);
            this.shaderData.setTexture('displacementTexture', this);
        }
        if (this.normalTexture) {
            // uniforms.normalScale.value.copy( material.normalScale );
            // if ( material.side === BackSide ) uniforms.normalScale.value.negate();
            this.shaderData.setFloatVec2("normalScale", this);
            this.shaderData.setDefine('USE_NORMALTEXTURE', true);
            this.shaderData.setTexture('normalTexture', this);
        }
        if (frameState.environment) {
            // uniforms.flipEnvMap.value = ( envMap.isCubeTexture && envMap.isRenderTargetTexture === false ) ? - 1 : 1;
            // uniforms.refractionRatio.value = material.refractionRatio;
            this.shaderData.setFloat("flipEnvTexture", this);
            this.shaderData.setDefine('USE_ENVTEXTURE', true);
            this.shaderData.setDefine('ENVTEXTURE_TYPE_CUBE_UV', true);
            this.shaderData.setFloat("ior", this);
            this.shaderData.setFloat("reflectivity", this);
            this.shaderData.setTexture('envTexture', () => {
                return frameState.environment;
            });
        }
        if (this.emissiveTexture) {
            this.shaderData.setDefine('USE_EMISSIVETEXTURE', true);
            this.shaderData.setTexture('emissiveTexture', this);
        }
    }
    destory() {
    }
}
// const defines={
//     USE_COLOR_ALPHA:false,
//     USE_COLOR:false,
//     USE_INSTANCING_COLOR:false,
//     USE_SKINNING:false,
//     USE_DISPLACEMENTMAP:false,
//     USE_MORPHTARGETS:false,
//     MORPHTARGETS_TEXTURE:false,
//     USE_INSTANCING:false,
//     USE_TANGENT:false,
//     USE_MORPHNORMALS:false,
//     USE_UV:false,
//     USE_MORPHCOLORS:false,
//     FLIP_SIDED:false,
//     FLAT_SHADED:false,
//     USE_ENVMAP:false,
//     DISTANCE:false,
//     USE_TRANSMISSION:false,
//     SPECULAR:false,////////
//     USE_SHEEN:false,
//     USE_CLEARCOAT_NORMALMAP:false,
//     USE_NORMALMAP:false,
//     IOR:false,
//     USE_CLEARCOAT:false,
//     USE_IRIDESCENCE:false,
//     OBJECTSPACE_NORMALMAP:false,
//     USE_ALPHATEST:false,
//     STANDARD:false,
//     DITHERING:false,
//     ENVMAP_TYPE_CUBE_UV:false,
//     ENVMAP_TYPE_CUBE:false,
//     USE_BUMPMAP:false,
//     TANGENTSPACE_NORMALMAP:false,
//     USE_MAP:false,
//     DECODE_VIDEO_TEXTURE:false,
//     USE_ROUGHNESSMAP:false,
//     USE_METALNESSMAP:false,
//     DOUBLE_SIDED:false,
//     USE_EMISSIVEMAP:false,
//     USE_SPECULARINTENSITYMAP:false,
//     USE_SPECULARCOLORMAP:false,
//     USE_CLEARCOATMAP:false,
//     USE_CLEARCOAT_ROUGHNESSMAP:false,
//     USE_IRIDESCENCEMAP:false,
//     USE_IRIDESCENCE_THICKNESSMAP:false,
//     USE_SHEENCOLORMAP:false,
//     USE_SHEENROUGHNESSMAP:false,
//     USE_TRANSMISSIONMAP:false,
//     USE_THICKNESSMAP:false,
//     TONE_MAPPING:false,
//     PREMULTIPLIED_ALPHA:false,
//     USE_LIGHTMAP:false,
//     USE_AOMAP:false,
//     uv2Location:0,
//     instanceMatrixLocation:1,
//     instanceColorLocation:2,
//     tangentLocation:3,
//     colorLocation:4,
//     morphTarget0Location:5,
//     morphTarget1Location:6,
//     morphTarget2Location:7,
//     morphTarget3Location:8,
//     morphNormal0Location:9,
//     morphNormal1Location:10,
//     morphNormal2Location:11,
//     morphNormal3Location:12,
//     morphTarget4Location:13,
//     morphTarget5Location:14,
//     morphTarget6Location:15,
//     morphTarget7Location:16,
//     skinIndexLocation:17,
//     skinWeightLocation:18,
//     //vert
//     samplerBinding:0,
//     boneTextureBinding:1,
//     displacementMapBinding:2,
//     morphTargetsTextureBinding:3,
//     //frag
//     transmissionMapBinding:0,
//     thicknessMapBinding:1,
//     transmissionSamplerMapBinding:2,
//     envMapBinding:3,
//     normalMapBinding:4,
//     clearcoatMapBinding:5,
//     clearcoatRoughnessMapBinding:6,
//     clearcoatNormalMapBinding:7,
//     iridescenceMapBinding:8,
//     iridescenceThicknessMapBinding:9,
//     roughnessMapBinding:10,
//     metalnessMapBinding:11,
//     specularIntensityMapBinding:12,
//     specularColorMapBinding:13,
//     sheenColorMapBinding:14,
//     sheenRoughnessMapBinding:15,
//     baseTextureBinding:16,
//     alphaMapBinding:17,
//     aoMapBinding:18,
//     lightMapBinding:19,
//     emissiveMapBinding:20,
// }

class EventDispatcher {
    constructor() { }
    addEventListener(type, listener) {
        if (this._listeners === undefined)
            this._listeners = {};
        const listeners = this._listeners;
        if (listeners[type] === undefined) {
            listeners[type] = [];
        }
        if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
        }
    }
    hasEventListener(type, listener) {
        if (this._listeners === undefined)
            return false;
        const listeners = this._listeners;
        return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
    }
    removeEventListener(type, listener) {
        if (this._listeners === undefined)
            return;
        const listeners = this._listeners;
        const listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            const index = listenerArray.indexOf(listener);
            if (index !== -1) {
                listenerArray.splice(index, 1);
            }
        }
    }
    dispatchEvent(event) {
        if (this._listeners === undefined)
            return;
        const listeners = this._listeners;
        const listenerArray = listeners[event.type];
        if (listenerArray !== undefined) {
            event.target = this;
            const array = listenerArray.slice(0);
            for (let i = 0, l = array.length; i < l; i++) {
                array[i].call(this, event);
            }
            event.target = null;
        }
    }
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-10 10:22:04
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-17 11:51:45
 * @FilePath: \GEngine\src\core\RenderList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEcon
 */
class RenderQueue {
    constructor() {
        this.preRender = [];
        this.opaque = [];
        this.transparent = [];
        this.compute = [];
    }
    sort() {
        RenderQueue.sort(this.opaque, 0, this.opaque.length, RenderQueue._compareFromNearToFar);
        RenderQueue.sort(this.transparent, 0, this.transparent.length, RenderQueue._compareFromFarToNear);
    }
    reset() {
        this.preRender = [];
        this.opaque = [];
        this.transparent = [];
        this.compute = [];
    }
    static _compareFromNearToFar(a, b) {
        return a.priority - b.priority || a.distanceToCamera - b.distanceToCamera;
    }
    static _compareFromFarToNear(a, b) {
        return a.priority - b.priority || b.distanceToCamera - a.distanceToCamera;
    }
    //according to camera distance
    static sort(insatnce, from, to, compareFunc) {
        RenderQueue._quickSort(insatnce, from, to, compareFunc);
    }
    //from https://github.com/oasis-engine/engine/blob/main/packages/core/src/RenderPipeline/RenderQueue.ts
    static _quickSort(a, from, to, compareFunc) {
        while (true) {
            // Insertion sort is faster for short arrays.
            if (to - from <= 10) {
                RenderQueue._insertionSort(a, from, to, compareFunc);
                return;
            }
            const third_index = (from + to) >> 1;
            // Find a pivot as the median of first, last and middle element.
            let v0 = a[from];
            let v1 = a[to - 1];
            let v2 = a[third_index];
            const c01 = compareFunc(v0, v1);
            if (c01 > 0) {
                // v1 < v0, so swap them.
                const tmp = v0;
                v0 = v1;
                v1 = tmp;
            } // v0 <= v1.
            const c02 = compareFunc(v0, v2);
            if (c02 >= 0) {
                // v2 <= v0 <= v1.
                const tmp = v0;
                v0 = v2;
                v2 = v1;
                v1 = tmp;
            }
            else {
                // v0 <= v1 && v0 < v2
                const c12 = compareFunc(v1, v2);
                if (c12 > 0) {
                    // v0 <= v2 < v1
                    const tmp = v1;
                    v1 = v2;
                    v2 = tmp;
                }
            }
            // v0 <= v1 <= v2
            a[from] = v0;
            a[to - 1] = v2;
            const pivot = v1;
            let low_end = from + 1; // Upper bound of elements lower than pivot.
            let high_start = to - 1; // Lower bound of elements greater than pivot.
            a[third_index] = a[low_end];
            a[low_end] = pivot;
            // From low_end to i are elements equal to pivot.
            // From i to high_start are elements that haven't been compared yet.
            partition: for (let i = low_end + 1; i < high_start; i++) {
                let element = a[i];
                let order = compareFunc(element, pivot);
                if (order < 0) {
                    a[i] = a[low_end];
                    a[low_end] = element;
                    low_end++;
                }
                else if (order > 0) {
                    do {
                        high_start--;
                        if (high_start == i)
                            break partition;
                        const top_elem = a[high_start];
                        order = compareFunc(top_elem, pivot);
                    } while (order > 0);
                    a[i] = a[high_start];
                    a[high_start] = element;
                    if (order < 0) {
                        element = a[i];
                        a[i] = a[low_end];
                        a[low_end] = element;
                        low_end++;
                    }
                }
            }
            if (to - high_start < low_end - from) {
                this._quickSort(a, high_start, to, compareFunc);
                to = low_end;
            }
            else {
                this._quickSort(a, from, low_end, compareFunc);
                from = high_start;
            }
        }
    }
    static _insertionSort(a, from, to, compareFunc) {
        for (let i = from + 1; i < to; i++) {
            let j;
            const element = a[i];
            for (j = i - 1; j >= from; j--) {
                const tmp = a[j];
                const order = compareFunc(tmp, element);
                if (order > 0) {
                    a[j + 1] = tmp;
                }
                else {
                    break;
                }
            }
            a[j + 1] = element;
        }
    }
}

class FrameState {
    constructor(context) {
        this.context = context;
        this.renderQueue = new RenderQueue();
        this.geometryMemory = 0;
        this.textureMemory = 0;
        this.frameNumber = 0;
        this._defines = {};
        this.definesDirty = true;
        this.environment = undefined;
    }
    get defines() {
        return this._defines;
    }
    set defines(value) {
        this.definesDirty = true;
        this._defines = combine(value, this._defines, false);
    }
    update(camera) {
        if (this.environment)
            this.environment.update(this.context);
        this.camera = camera;
        this.renderQueue.reset();
        this.cullingVolume = this.camera.getCullingVolume();
        this.frameNumber += 1;
    }
}

class Light {
    constructor(color, intensity) {
        this._color = Vector3.multiplyByScalar(color, intensity, new Vector3());
        this._intensity = intensity;
        this._position = new Vector3(0, 0, 0);
        this.positionDirty = true;
        this.colorDirty = true;
        this.intensityDirty = true;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this.positionDirty = true;
        this._position = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this.colorDirty = true;
        this._color = value;
    }
    set intensity(value) {
        this.color = Vector3.multiplyByScalar(this.color, value, new Vector3());
        this.intensityDirty = true;
        this._intensity = value;
    }
    get intensity() {
        return this._intensity;
    }
}

class AmbientLight extends Light {
    constructor(color, intensity) {
        super(color, intensity);
        this.type = 'ambient';
    }
}
//light.color ).multiplyScalar( light.intensity * scaleFactor );

class SpotData {
    constructor(buffer, byteOffset, spotLight) {
        this.spotLight = spotLight;
        this.position = new Float32Array(buffer.buffer, byteOffset, 3); //3
        this.distance = new Float32Array(buffer.buffer, byteOffset + 12, 1); //1
        this.dirtect = new Float32Array(buffer.buffer, byteOffset + 16, 3); //3
        this.coneCos = new Float32Array(buffer.buffer, byteOffset + 28, 1); //1
        this.color = new Float32Array(buffer.buffer, byteOffset + 32, 3); //3
        this.penumbraCos = new Float32Array(buffer.buffer, byteOffset + 44, 1); //1
        this.decay = new Float32Array(buffer.buffer, byteOffset + 48, 1); //1
    }
    update(frameState) {
        const viewMatrix = frameState.camera.viewMatrix;
        if (this.spotLight.colorDirty) {
            this.spotLight.colorDirty = false;
            copyData(this.spotLight.color.toArray(), this.color);
        }
        if (this.spotLight.positionDirty) {
            this.spotLight.positionDirty = false;
            let position = this.spotLight.position.clone();
            position = position.applyMatrix4(viewMatrix);
            copyData(position.toArray(), this.position);
        }
        if (this.spotLight.dirtectDirty) {
            this.spotLight.dirtectDirty = false;
            let dirtect = this.spotLight.dirtect.clone();
            dirtect = dirtect.transformDirection(viewMatrix);
            copyData(dirtect.toArray(), this.dirtect);
        }
        if (this.spotLight.distanceDirty) {
            this.spotLight.distanceDirty = false;
            this.distance[0] = this.spotLight.distance; //1
        }
        if (this.spotLight.coneCosDirty) {
            this.spotLight.coneCosDirty = false;
            this.coneCos[0] = this.spotLight.coneCos; //1
        }
        if (this.spotLight.penumbraCosDirty) {
            this.spotLight.penumbraCosDirty = false;
            this.penumbraCos[0] = this.spotLight.penumbraCos; //1
        }
        if (this.spotLight.decayDirty) {
            this.spotLight.decayDirty = false;
            this.decay[0] = this.spotLight.decay; //1
        }
    }
    destroy() {
        this.spotLight = undefined;
        this.color = undefined;
        this.position = undefined;
        this.dirtect = undefined;
        this.distance = undefined;
        this.coneCos = undefined;
        this.penumbraCos = undefined;
        this.decay = undefined;
    }
}
//array<light> light of byteSize must be k*16 
SpotData.byteSize = 64;
SpotData.size = 16;
class PointData {
    constructor(buffer, byteOffset, pointLight) {
        this.pointLight = pointLight;
        this.position = new Float32Array(buffer.buffer, byteOffset, 3); //3
        this.distance = new Float32Array(buffer.buffer, byteOffset + 12, 1); //1
        this.color = new Float32Array(buffer.buffer, byteOffset + 16, 3); //3
        this.decay = new Float32Array(buffer.buffer, byteOffset + 28, 1); //1
    }
    update(frameState) {
        const viewMatrix = frameState.camera.viewMatrix;
        if (this.pointLight.colorDirty) {
            this.pointLight.colorDirty = false;
            copyData(this.pointLight.color.toArray(), this.color);
        }
        if (this.pointLight.positionDirty) {
            this.pointLight.positionDirty = false;
            let position = this.pointLight.position.clone();
            position = position.applyMatrix4(viewMatrix);
            copyData(position.toArray(), this.position);
        }
        if (this.pointLight.decayDirty) {
            this.pointLight.decayDirty = false;
            this.decay[0] = this.pointLight.decay;
        }
        if (this.pointLight.distanceDirty) {
            this.pointLight.distanceDirty = false;
            this.distance[0] = this.pointLight.distance;
        }
    }
    destroy() {
        this.pointLight = undefined;
        this.color = undefined;
        this.position = undefined;
        this.decay = undefined;
        this.distance = undefined;
    }
}
PointData.byteSize = 32;
PointData.size = 8;
class DirtectData {
    constructor(buffer, byteOffset, dirtectLight) {
        this.dirtectLight = dirtectLight;
        this.color = new Float32Array(buffer.buffer, byteOffset, 3); //3
        this.dirtect = new Float32Array(buffer.buffer, byteOffset + 16, 3); //3
    }
    update(frameState) {
        const viewMatrix = frameState.camera.viewMatrix;
        if (this.dirtectLight.colorDirty) {
            this.dirtectLight.colorDirty = false;
            copyData(this.dirtectLight.color.toArray(), this.color);
        }
        if (this.dirtectLight.dirtectDirty) {
            this.dirtectLight.dirtectDirty = false;
            let dirtect = this.dirtectLight.dirtect.clone();
            dirtect = dirtect.transformDirection(viewMatrix);
            copyData(dirtect.toArray(), this.dirtect);
        }
    }
    destroy() {
        this.dirtectLight = undefined;
        this.color = undefined;
        this.dirtect = undefined;
    }
}
DirtectData.byteSize = 32;
DirtectData.size = 8;
function copyData(src, dis) {
    src.forEach((element, index) => {
        dis[index] = element;
    });
}

class LightManger {
    constructor() {
        this.spotLights = [];
        this.pointLights = [];
        this.dirtectLights = [];
        this.spotDatas = new WeakMap();
        this.pointDatas = new WeakMap();
        this.dirtectDatas = new WeakMap();
        this.ambientLight = new AmbientLight(new Vector3(1, 1, 1), 0.1);
        this.lightDefines = {
            ambientLight: false,
            spotLight: false,
            pointLight: false,
            dirtectLight: false,
            spotLightBinding: 1,
            pointLightBinding: 2,
            dirtectLightBinding: 3,
        };
        this.totalByte = 0;
        this.lightCountDirty = true;
    }
    update(frameState) {
        this.updateLight(frameState);
        frameState.defines = this.lightDefines;
    }
    add(light) {
        this.lightCountDirty = true;
        if (light.type == 'ambient') {
            this.ambientLight = light;
        }
        else if (light.type == 'dirtect') {
            this.dirtectLights.push(light);
        }
        else if (light.type == 'point') {
            this.pointLights.push(light);
        }
        else if (light.type == 'spot') {
            this.spotLights.push(light);
        }
    }
    remove() { }
    updateLight(frameState) {
        if (this.lightCountDirty) {
            this.initBuffer();
        }
        this.updateLightData(frameState);
    }
    updateLightData(frameState) {
        this.updateSpotLight(frameState);
        this.updatePointLight(frameState);
        this.updateDirtectLight(frameState);
        this.updateAmbientLight(frameState);
        this.updateLightCount();
    }
    updateSpotLight(frameState) {
        this.spotLights.forEach((light) => {
            const lightData = this.spotDatas.get(light);
            if (lightData)
                lightData.update(frameState);
        });
    }
    updatePointLight(frameState) {
        this.pointLights.forEach((light) => {
            const lightData = this.pointDatas.get(light);
            if (lightData)
                lightData.update(frameState);
        });
    }
    updateAmbientLight(frameState) {
        if (this.ambientLight) {
            this.ambient[0] = this.ambientLight.color.x;
            this.ambient[1] = this.ambientLight.color.y;
            this.ambient[2] = this.ambientLight.color.z;
        }
    }
    updateDirtectLight(frameState) {
        this.dirtectLights.forEach((light) => {
            const lightData = this.dirtectDatas.get(light);
            if (lightData)
                lightData.update(frameState);
        });
    }
    updateLightCount() {
        if (this.lightCountDirty) {
            this.lightCount[0] = this.spotLights.length;
            this.lightCount[1] = this.pointLights.length;
            this.lightCount[2] = this.dirtectLights.length;
            this.lightCount[3] = this.ambient != undefined ? 1 : 0;
        }
    }
    initBuffer() {
        const ambientSize = this.ambientLight != undefined ? 3 : 0;
        const lightCount = 4;
        const pointLightCount = this.pointLights.length;
        const spotLightCount = this.spotLights.length;
        const dirtectLightCount = this.dirtectLights.length;
        const pointLightCountSize = pointLightCount * PointData.size;
        const spotLightCountSize = spotLightCount * SpotData.size;
        const dirtectLightCountSize = dirtectLightCount * DirtectData.size;
        let currentBinding = 1;
        //common
        if (ambientSize > 0) {
            this.commonLightBuffer = new Float32Array(ambientSize + lightCount);
            this.commonTatalByte = 0;
            this.lightCount = new Uint32Array(this.commonLightBuffer.buffer, this.commonTatalByte, 4);
            this.commonTatalByte += 16;
            this.ambient = new Float32Array(this.commonLightBuffer.buffer, this.commonTatalByte, 3);
            this.commonTatalByte += 16;
            this.lightDefines.ambientLight = true;
        }
        else {
            this.commonLightBuffer = new Float32Array(lightCount);
            this.commonTatalByte = 0;
            this.lightCount = new Uint32Array(this.commonLightBuffer.buffer, this.commonTatalByte, 4);
            this.commonTatalByte += 16;
        }
        if (spotLightCountSize > 0) {
            //初始化聚光灯
            this.spotLightsBuffer = new Float32Array(spotLightCountSize);
            this.spotLights.forEach((spotLight, i) => {
                this.spotDatas.set(spotLight, new SpotData(this.spotLightsBuffer, SpotData.byteSize * i, spotLight));
            });
            this.spotLightsByte = spotLightCount * SpotData.byteSize;
            this.lightDefines.spotLight = true;
            this.lightDefines.spotLightBinding = currentBinding;
            currentBinding += 1;
        }
        if (pointLightCountSize > 0) {
            //点光源
            this.pointLightsBuffer = new Float32Array(pointLightCountSize);
            this.pointLights.forEach((pointLight, i) => {
                this.pointDatas.set(pointLight, new PointData(this.pointLightsBuffer, PointData.byteSize * i, pointLight));
            });
            this.pointLightsByte = pointLightCount * PointData.byteSize;
            this.lightDefines.pointLight = true;
            this.lightDefines.pointLightBinding = currentBinding;
            currentBinding += 1;
        }
        if (dirtectLightCountSize) {
            //方向光
            this.dirtectLightsBuffer = new Float32Array(dirtectLightCountSize);
            this.dirtectLights.forEach((dirtect, i) => {
                this.dirtectDatas.set(dirtect, new DirtectData(this.dirtectLightsBuffer, DirtectData.byteSize * i, dirtect));
            });
            this.dirtectLightsByte = dirtectLightCount * DirtectData.byteSize;
            this.lightDefines.dirtectLight = true;
            this.lightDefines.dirtectLightBinding = currentBinding;
        }
    }
}

function createGuid() {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

class PrimitiveManger {
    constructor() {
        this._list = [];
        this._guid = createGuid();
    }
    get length() {
        return this._list.length;
    }
    update(frameState) {
        this._list.forEach((primitive) => {
            primitive.update(frameState);
        });
    }
    add(instance, index) {
        const hasIndex = defined(index);
        if (!defined(instance)) {
            throw new Error("instance is required.");
        }
        if (hasIndex) {
            if (index < 0) {
                throw new Error("index must be greater than or equal to zero.");
            }
            else if (index > this._list.length) {
                throw new Error("index must be less than or equal to the number of primitives.");
            }
        }
        const external = (instance._external = instance._external || {});
        const composites = (external._composites = external._composites || {});
        composites[this._guid] = {
            collection: this,
        };
        if (!hasIndex) {
            this._list.push(instance);
        }
        else {
            this._list.splice(index, 0, instance);
        }
        return instance;
    }
    remove(instance) {
        if (this.contains(instance)) {
            const index = this._list.indexOf(instance);
            if (index !== -1) {
                this._list.splice(index, 1);
                delete instance._external._composites[this._guid];
                instance.destroy();
                return true;
            }
        }
        return false;
    }
    contains(instance) {
        return !!(defined(instance) &&
            instance._external &&
            instance._external._composites &&
            instance._external._composites[this._guid]);
    }
    ;
}

class Pass {
    constructor(context) {
        this.context = context;
    }
    render(renderQueue) { }
    ;
    beforRender() {
        this.passRenderEncoder = this.renderTarget.getRenderPassEncoder(this.context);
    }
    getColorTexture(index = 0) {
        return this.renderTarget.getColorTexture(index);
    }
    getDepthTexture() {
        return this.renderTarget.getDepthTexture();
    }
    afterRender() {
        this.renderTarget.endRenderPassEncoder();
    }
    excuteCommands(commands) {
        commands.forEach((command) => {
            this.excuteCommand(command);
        });
    }
    excuteCommand(command) {
        if (command.renderTarget) {
            const currentRenderPassEncoder = command.renderTarget.getRenderPassEncoder(this.context);
            this.context.render(command, currentRenderPassEncoder);
            command.renderTarget.endRenderPassEncoder();
        }
        else {
            if (this.colorTargets)
                command.renderState.targets = this.colorTargets;
            this.context.render(command, this.passRenderEncoder);
        }
    }
}

class RenderTarget {
    constructor(type, 
    // public context: Context,
    colorAttachments, depthAttachment, stencilAttachment, querySet) {
        this.type = type;
        this.colorAttachments = colorAttachments;
        this.depthAttachment = depthAttachment;
        this.stencilAttachment = stencilAttachment;
        this.querySet = querySet;
        // this.init();
        this.renderEncoder = undefined;
        this._renderPassDescriptor = undefined;
        this.commandEncoder = undefined;
        this.context = undefined;
    }
    get renderPassDescriptor() {
        //if (!this._renderPassDescriptor)
        this._renderPassDescriptor = this.getRenderPassDescriptor();
        return this._renderPassDescriptor;
    }
    preParse() {
        if (this?.colorAttachments[0]?.texture == undefined) {
            const colorTexture = new Texture({
                size: this.context.presentationSize,
                format: this.context.presentationFormat,
                usage: TextureUsage.RenderAttachment | TextureUsage.TextureBinding,
            });
            colorTexture.update(this.context);
            this.colorAttachments[0].texture = colorTexture;
        }
        if (this.depthAttachment && this.depthAttachment?.texture == undefined) {
            const depthTexture = new Texture({
                size: this.context.presentationSize,
                format: TextureFormat.Depth24Plus,
                usage: TextureUsage.RenderAttachment,
            });
            depthTexture.update(this.context);
            this.depthAttachment.texture = depthTexture;
        }
    }
    getColorTexture(index = 0) {
        const colAtt = this.colorAttachments[index];
        if (colAtt) {
            return colAtt.texture;
        }
        else {
            return null;
        }
    }
    getDepthTexture() {
        if (this.depthAttachment) {
            return this.depthAttachment.texture;
        }
    }
    getRenderPassDescriptor() {
        if (this.type === "render") {
            this.preParse();
            return {
                ...(this.colorAttachments && {
                    colorAttachments: this.colorAttachments.map((colorAttachment) => {
                        return {
                            view: 
                            //暂时这么写
                            colorAttachment.texture.gpuTexture.createView() || undefined,
                            resolveTarget: colorAttachment.resolveTarget != undefined
                                ? colorAttachment.resolveTarget.gpuTexture.createView()
                                : undefined,
                            clearValue: colorAttachment.value,
                            loadOp: colorAttachment.op,
                            storeOp: colorAttachment.storeOp,
                        };
                    }),
                }),
                ...((this.depthAttachment || this.stencilAttachment) && {
                    depthStencilAttachment: {
                        view: this.depthAttachment?.texture?.gpuTexture?.createView() ||
                            undefined,
                        depthLoadOp: this.depthAttachment?.op || "clear",
                        depthClearValue: this.depthAttachment?.value || 1.0,
                        depthStoreOp: this.depthAttachment?.storeOp || "store",
                        // stencilLoadOp: this.stencilAttachment?.op || "clear",
                        // stencilClearValue: this.stencilAttachment?.value || 0,
                        // stencilStoreOp: this.stencilAttachment?.storeOp || "store",
                    },
                }),
            };
        }
        return null;
    }
    getRenderPassEncoder(context) {
        if (!this.context)
            this.context = context;
        const { device } = this.context;
        this.commandEncoder = device.createCommandEncoder();
        this.renderEncoder = this.commandEncoder.beginRenderPass(this.renderPassDescriptor);
        return this.renderEncoder;
    }
    endRenderPassEncoder() {
        this.renderEncoder?.end();
        this.context.device.queue.submit([this.commandEncoder.finish()]);
        this.commandEncoder = null;
        this.renderEncoder = null;
    }
    resize() {
        const { width, height } = this.context.canvas;
        const size = {
            width,
            height,
            depth: this.colorAttachments[0]?.texture?.textureProp?.size.depth || 0,
        };
        for (let i = 0; i < this.colorAttachments.length; ++i) {
            if (this.colorAttachments[i]) {
                const resizedTexture = new Texture({
                    ...this.colorAttachments[i].texture.textureProp,
                    size,
                });
                resizedTexture.update(this.context);
                this.colorAttachments[i].texture.destroy();
                this.colorAttachments[i].texture = resizedTexture;
                this.renderPassDescriptor.colorAttachments[i].view =
                    resizedTexture.gpuTexture.createView();
            }
        }
        if (this.depthAttachment) {
            const resizedTexture = new Texture({
                ...this.depthAttachment.texture.textureProp,
                size,
            });
            resizedTexture.update(this.context);
            this.depthAttachment.texture.destroy();
            this.depthAttachment.texture = resizedTexture;
            this.renderPassDescriptor.depthStencilAttachment.view =
                resizedTexture.gpuTexture.createView();
        }
    }
}

class BasicPass extends Pass {
    constructor(context) {
        super(context);
        this.init(context);
    }
    render(renderQueue) {
        renderQueue.sort();
        const { preRender, opaque, transparent, compute } = renderQueue;
        compute.map((mesh) => {
            mesh.beforeRender();
            this.excuteCommand(mesh.getDrawCommand());
            mesh.afterRender();
        });
        preRender.map((mesh) => {
            mesh.beforeRender();
            this.excuteCommand(mesh.getDrawCommand());
            mesh.afterRender();
        });
        opaque.map((mesh) => {
            mesh.beforeRender();
            this.excuteCommand(mesh.getDrawCommand());
            mesh.afterRender();
        });
        transparent.map((mesh) => {
            mesh.beforeRender();
            this.excuteCommand(mesh.getDrawCommand());
            mesh.afterRender();
        });
    }
    init(context) {
        this.createRenderTarget(context);
    }
    createRenderTarget(context) {
        const colorAttachment = new Attachment({ r: 0.5, g: 0.5, b: 0.5, a: 1.0 });
        const depthAttachment = new Attachment(1.0);
        this.renderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
    }
}

class ShaderMaterial extends Material {
    constructor(options) {
        super();
        const { type, frag, vert, uniforms } = options;
        this.type = type;
        this.shaderSource = new ShaderSource({
            type,
            frag,
            vert,
            customShader: true,
            defines: {},
            render: true
        });
        this.uniforms = uniforms;
    }
    update(frameState, mesh) {
        if (!this.shaderData)
            this.createShaderData(mesh);
    }
    createShaderData(mesh) {
        super.createShaderData(mesh);
        const uniformsNames = Object.getOwnPropertyNames(this.uniforms);
        uniformsNames.map((uniformsName) => {
            this.addUniformToShaderData(uniformsName, this.uniforms[uniformsName]);
        });
    }
    addUniformToShaderData(name, uniform) {
        switch (uniform.type) {
            case "vec2":
                this.shaderData.setFloatVec2(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            case "vec3":
                this.shaderData.setFloatVec3(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            case "color":
                this.shaderData.setColor(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            case "vec4":
                this.shaderData.setFloatVec4(name, () => {
                    return this.uniforms[name].value;
                });
            case "mat2":
                this.shaderData.setMatrix2(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            case "mat3":
                this.shaderData.setMatrix3(name, () => {
                    return this.uniforms[name].value;
                });
            case "mat4":
                this.shaderData.setMatrix4(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            case "texture":
                this.shaderData.setTexture(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            case "sampler":
                this.shaderData.setSampler(name, () => {
                    return this.uniforms[name].value;
                });
                break;
            default:
                throw new Error("not match unifrom type");
        }
    }
}

class ResolveFrame {
    constructor() {
        this.geometry = new Geometry({});
        this.geometry.setAttribute(new Float32Attribute('position', [-1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0], 2));
        this.geometry.count = 6;
        const shader = getVertFrag('resolve', {});
        this.material = new ShaderMaterial({
            type: 'resolve',
            frag: shader.frag,
            vert: shader.vert,
            uniforms: {
                texture: {
                    type: 'texture',
                    value: undefined,
                },
                sampler: {
                    type: 'sampler',
                    value: new Sampler({
                        magFilter: 'linear',
                        minFilter: 'linear',
                    }),
                }
            }
        });
        this.quadMesh = new Mesh(this.geometry, this.material);
    }
    render(context, colorTexture) {
        if (!this.canvasRenderTarget)
            this.initRenderTarget(context);
        // this.material
        this.material.uniforms.texture.value = colorTexture;
        this.canvasRenderTarget.colorAttachments[0].texture = {
            gpuTexture: context.context.getCurrentTexture(),
        };
        this.material.update(undefined, this.quadMesh);
        this.quadMesh.beforeRender();
        const drawComand = this.quadMesh.getDrawCommand();
        const currentRenderPassEncoder = this.canvasRenderTarget.getRenderPassEncoder(context);
        context.render(drawComand, currentRenderPassEncoder);
        this.canvasRenderTarget.endRenderPassEncoder();
        this.quadMesh.afterRender();
    }
    initRenderTarget(context) {
        const colorAttachment = new Attachment({ r: 0.14, g: 0.14, b: 0.14, a: 1 }, {
            texture: {
                gpuTexture: context.context.getCurrentTexture(),
            },
        });
        const depthAttachment = new Attachment(1.0);
        this.canvasRenderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);
    }
}

class ForwardRenderLine {
    constructor(context) {
        this.context = context;
        this.basicPass = new BasicPass(context);
        this.resolveFrame = new ResolveFrame();
    }
    render(frameState) {
        this.basicPass.beforRender();
        this.basicPass.render(frameState.renderQueue);
        this.basicPass.afterRender();
        this.resolveFrame.render(frameState.context, this.basicPass.getColorTexture(0));
    }
    destroy() {
        this.basicPass = undefined;
    }
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-18 17:36:06
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-19 14:36:05
 * @FilePath: \GEngine\src\utils\utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
async function loadPbrTexture(brdf, diffuse, specular) {
    if (!brdf)
        return;
    const brdfTexture = await loadTexture(brdf);
    const diffuseTexture = await loadCubeTexture(diffuse);
    const specularTexture = await loadCubeTexture(specular);
    return {
        brdfTexture,
        diffuseTexture,
        specularTexture,
    };
}
async function loadCubeTexture(urls) {
    const promises = urls.map((src) => {
        const img = document.createElement("img");
        img.src = src;
        return img.decode().then(() => createImageBitmap(img));
    });
    const images = await Promise.all(promises);
    await Promise.all(images);
    const data = images.map((image, i) => {
        return {
            source: image,
            width: image.width,
            height: image.height,
            depth: 1,
            x: 0,
            y: 0,
            z: i,
        };
    });
    return new Texture({
        size: {
            width: images[0].width,
            height: images[0].height,
            depth: 6,
        },
        format: "rgba8unorm",
        usage: GPUTextureUsage.TEXTURE_BINDING |
            GPUTextureUsage.COPY_DST |
            GPUTextureUsage.RENDER_ATTACHMENT,
        data,
        viewFormats: "cube",
        mipLevelCount: 6,
        needMipMap: true,
    });
}
async function loadTexture(url) {
    const img = document.createElement("img");
    img.src = url;
    await img.decode();
    const imageBitmap = await createImageBitmap(img);
    const baseTexture = new Texture({
        size: { width: imageBitmap.width, height: imageBitmap.height, depth: 1 },
        data: {
            source: imageBitmap,
        },
        format: "rgba8unorm",
    });
    return baseTexture;
}

class Scene extends EventDispatcher {
    constructor(options) {
        super();
        this.container =
            options.container instanceof HTMLDivElement
                ? options.container
                : document.getElementById(options.container);
        this.lightManger = new LightManger();
        this.primitiveManger = new PrimitiveManger();
        this.context = new Context({
            canvas: null,
            container: this.container,
            pixelRatio: 1,
        });
        this.brdfUrl = defaultValue(options.brdfUrl, undefined);
        this.specularEnvUrls = defaultValue(options.specularEnvUrls, []);
        this.diffuseEnvUrls = defaultValue(options.diffuseEnvUrls, []);
        this.requestAdapter = options.requestAdapter || {};
        this.deviceDescriptor = options.deviceDescriptor || {};
        this.presentationContextDescriptor = options.presentationContextDescriptor;
        this.ready = false;
        this.skybox = defaultValue(options.skybox, undefined);
        //this.init();
    }
    set environment(value) {
        this.frameState.environment = value;
    }
    get environment() {
        return this.frameState.environment;
    }
    async init() {
        if (!(await this.context.init(this.requestAdapter, this.deviceDescriptor, this.presentationContextDescriptor))) {
            throw new Error("Your browser doesn't support WebGPU.");
        }
        else {
            this.currentRenderPipeline = new ForwardRenderLine(this.context);
            this.frameState = new FrameState(this.context);
            this.ready = true;
            this.viewport = {
                x: 0,
                y: 0,
                width: this.context.presentationSize.width,
                height: this.context.presentationSize.height,
            };
            if (this.brdfUrl) {
                const { brdfTexture, diffuseTexture, specularTexture, } = await loadPbrTexture(this.brdfUrl, this.diffuseEnvUrls, this.specularEnvUrls);
                this.brdfTexture = brdfTexture;
                this.diffuseEnvTexture = diffuseTexture;
                this.specularEnvTexture = specularTexture;
            }
        }
    }
    add(instance) {
        if (instance.type === "primitive" &&
            !this.primitiveManger.contains(instance)) {
            this.primitiveManger.add(instance);
        }
    }
    addLight(light) {
        this.lightManger.add(light);
    }
    setCamera(camera) {
        this.camera = camera;
    }
    remove(instance) {
        if (instance.type === "primitive" &&
            !this.primitiveManger.contains(instance)) {
            this.primitiveManger.remove(instance);
        }
    }
    getPrimitiveById() { }
    render() {
        this.update();
    }
    update() {
        if (!this.ready)
            return;
        //更新相机
        this.frameState.viewport = this.viewport;
        this.frameState.update(this.camera);
        //更新灯光
        this.lightManger.update(this.frameState);
        this.context.systemRenderResource.update(this.frameState, this);
        //update primitive and select
        this.primitiveManger.update(this.frameState);
        //selct renderPipeline
        this.currentRenderPipeline.render(this.frameState);
    }
}

/**
 * A plane in Hessian Normal Form defined by
 * <pre>
 * ax + by + cz + d = 0
 * </pre>
 * where (a, b, c) is the plane's <code>normal</code>, d is the signed
 * <code>distance</code> to the plane, and (x, y, z) is any point on
 * the plane.
 *
 * @alias Plane
 * @constructor
 *
 * @param {Vector3} normal The plane's normal (normalized).
 * @param {Number} distance The shortest distance from the origin to the plane.  The sign of
 * <code>distance</code> determines which side of the plane the origin
 * is on.  If <code>distance</code> is positive, the origin is in the half-space
 * in the direction of the normal; if negative, the origin is in the half-space
 * opposite to the normal; if zero, the plane passes through the origin.
 *
 * @example
 * // The plane x=0
 * const plane = new Cesium.Plane(Cesium.Vector3.UNIT_X, 0.0);
 *
 * @exception {DeveloperError} Normal must be normalized
 */
class Plane {
    constructor(normal, distance) {
        // if (
        //     !GMath.equalsEpsilon(
        //         Vector3.magnitude(normal),
        //         1.0,
        //         GMath.EPSILON6
        //     )
        // ) {
        //     throw new Error("normal must be normalized.");
        // }
        /**
         * The plane's normal.
         *
         * @type {Vector3}
         */
        this.normal = Vector3.clone(normal);
        /**
         * The shortest distance from the origin to the plane.  The sign of
         * <code>distance</code> determines which side of the plane the origin
         * is on.  If <code>distance</code> is positive, the origin is in the half-space
         * in the direction of the normal; if negative, the origin is in the half-space
         * opposite to the normal; if zero, the plane passes through the origin.
         *
         * @type {Number}
         */
        this.distance = distance;
    }
    normalize() {
        const inverseNormalLength = 1.0 / this.normal.length();
        this.normal = Vector3.multiplyByScalar(this.normal, inverseNormalLength, this.normal);
        // this.normal.multiplyScalar( inverseNormalLength );
        this.distance *= inverseNormalLength;
        return this;
    }
    /**
 * Creates a plane from a normal and a point on the plane.
 *
 * @param {Vector3} point The point on the plane.
 * @param {Vector3} normal The plane's normal (normalized).
 * @param {Plane} [result] The object onto which to store the result.
 * @returns {Plane} A new plane instance or the modified result parameter.
 *
 * @example
 * const point = Cesium.Vector3.fromDegrees(-72.0, 40.0);
 * const normal = ellipsoid.geodeticSurfaceNormal(point);
 * const tangentPlane = Cesium.Plane.fromPointNormal(point, normal);
 *
 * @exception {Error} Normal must be normalized
 */
    static fromPointNormal(point, normal, result) {
        if (!GMath.equalsEpsilon(Vector3.magnitude(normal), 1.0, GMath.EPSILON6)) {
            throw new Error("normal must be normalized.");
        }
        //>>includeEnd('debug');
        const distance = -Vector3.dot(normal, point);
        if (!defined(result)) {
            return new Plane(normal, distance);
        }
        Vector3.clone(normal, result.normal);
        result.distance = distance;
        return result;
    }
    ;
    /**
     * Creates a plane from the general equation
     *
     * @param {Vector4} coefficients The plane's normal (normalized).
     * @param {Plane} [result] The object onto which to store the result.
     * @returns {Plane} A new plane instance or the modified result parameter.
     *
     * @exception {Error} Normal must be normalized
     */
    static fromVector4(coefficients, result) {
        const normal = Vector3.fromVector4(coefficients, scratchNormal);
        const distance = coefficients.w;
        //>>includeStart('debug', pragmas.debug);
        if (!GMath.equalsEpsilon(Vector3.magnitude(normal), 1.0, GMath.EPSILON6)) {
            throw new Error("normal must be normalized.");
        }
        //>>includeEnd('debug');
        if (!defined(result)) {
            return new Plane(normal, distance);
        }
        Vector3.clone(normal, result.normal);
        result.distance = distance;
        return result;
    }
    ;
    /**
     * Computes the signed shortest distance of a point to a plane.
     * The sign of the distance determines which side of the plane the point
     * is on.  If the distance is positive, the point is in the half-space
     * in the direction of the normal; if negative, the point is in the half-space
     * opposite to the normal; if zero, the plane passes through the point.
     *
     * @param {Plane} plane The plane.
     * @param {Vector3} point The point.
     * @returns {Number} The signed shortest distance of the point to the plane.
     */
    static getPointDistance(plane, point) {
        return Vector3.dot(plane.normal, point) + plane.distance;
    }
    ;
    /**
     * Projects a point onto the plane.
     * @param {Plane} plane The plane to project the point onto
     * @param {Vector3} point The point to project onto the plane
     * @param {Vector3} [result] The result point.  If undefined, a new Vector3 will be created.
     * @returns {Vector3} The modified result parameter or a new Vector3 instance if one was not provided.
     */
    static projectPointOntoPlane(plane, point, result) {
        if (!defined(result)) {
            result = new Vector3();
        }
        // projectedPoint = point - (normal.point + scale) * normal
        const pointDistance = Plane.getPointDistance(plane, point);
        const scaledNormal = Vector3.multiplyByScalar(plane.normal, pointDistance, scratchCartesian);
        return Vector3.subtract(point, scaledNormal, result);
    }
    ;
    /**
     * Transforms the plane by the given transformation matrix.
     *
     * @param {Plane} plane The plane.
     * @param {Matrix4} transform The transformation matrix.
     * @param {Plane} [result] The object into which to store the result.
     * @returns {Plane} The plane transformed by the given transformation matrix.
     */
    static transform(plane, transform, result) {
        const normal = plane.normal;
        const distance = plane.distance;
        const inverseTranspose = Matrix4.inverseTranspose(transform, scratchInverseTranspose);
        let planeAsCartesian4 = Vector4.fromElements(normal.x, normal.y, normal.z, distance, scratchPlaneCartesian4);
        planeAsCartesian4 = Matrix4.multiplyByVector(inverseTranspose, planeAsCartesian4, planeAsCartesian4);
        // Convert the transformed plane to Hessian Normal Form
        const transformedNormal = Vector3.fromVector4(planeAsCartesian4, scratchTransformNormal);
        planeAsCartesian4 = Vector4.divideByScalar(planeAsCartesian4, Vector3.magnitude(transformedNormal), planeAsCartesian4);
        return Plane.fromVector4(planeAsCartesian4, result);
    }
    ;
    /**
     * Duplicates a Plane instance.
     *
     * @param {Plane} plane The plane to duplicate.
     * @param {Plane} [result] The object onto which to store the result.
     * @returns {Plane} The modified result parameter or a new Plane instance if one was not provided.
     */
    static clone(plane, result) {
        if (!defined(result)) {
            return new Plane(plane.normal, plane.distance);
        }
        Vector3.clone(plane.normal, result.normal);
        result.distance = plane.distance;
        return result;
    }
    ;
    /**
     * Compares the provided Planes by normal and distance and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Plane} left The first plane.
     * @param {Plane} right The second plane.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    static equals(left, right) {
        return (left.distance === right.distance &&
            Vector3.equals(left.normal, right.normal));
    }
    ;
}
Plane.ORIGIN_XY_PLANE = Object.freeze(new Plane(Vector3.UNIT_Z, 0.0));
Plane.ORIGIN_YZ_PLANE = Object.freeze(new Plane(Vector3.UNIT_X, 0.0));
Plane.ORIGIN_ZX_PLANE = Object.freeze(new Plane(Vector3.UNIT_Y, 0.0));
const scratchNormal = new Vector3();
const scratchCartesian = new Vector3();
const scratchInverseTranspose = new Matrix4();
const scratchPlaneCartesian4 = new Vector4();
const scratchTransformNormal = new Vector3();

/**
 * The culling volume defined by planes.
 *
 * @alias CullingVolume
 * @constructor
 *
 * @param {Vector[]} [planes] An array of clipping planes.
 */
class CullingVolume {
    constructor(planes) {
        this.planes = defaultValue(planes, [new Plane(Vector3.UNIT_Z, 0.0), new Plane(Vector3.UNIT_Z, 0.0), new Plane(Vector3.UNIT_Z, 0.0), new Plane(Vector3.UNIT_Z, 0.0), new Plane(Vector3.UNIT_Z, 0.0), new Plane(Vector3.UNIT_Z, 0.0)]);
    }
    /**
 * Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
 * The planes are aligned to the x, y, and z axes in world coordinates.
 *
 * @param {BoundingSphere} boundingSphere The bounding sphere used to create the culling volume.
 * @param {CullingVolume} [result] The object onto which to store the result.
 * @returns {CullingVolume} The culling volume created from the bounding sphere.
 */
    static fromBoundingSphere(boundingSphere, result) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(boundingSphere)) {
            throw new Error("boundingSphere is required.");
        }
        //>>includeEnd('debug');
        if (!defined(result)) {
            result = new CullingVolume();
        }
        const length = faces.length;
        const planes = result.planes;
        planes.length = 2 * length;
        const center = boundingSphere.center;
        const radius = boundingSphere.radius;
        let planeIndex = 0;
        for (let i = 0; i < length; ++i) {
            const faceNormal = faces[i];
            let plane0 = planes[planeIndex];
            let plane1 = planes[planeIndex + 1];
            if (!defined(plane0)) {
                plane0 = planes[planeIndex] = new Vector4();
            }
            if (!defined(plane1)) {
                plane1 = planes[planeIndex + 1] = new Vector4();
            }
            Vector3.multiplyByScalar(faceNormal, -radius, scratchPlaneCenter);
            Vector3.add(center, scratchPlaneCenter, scratchPlaneCenter);
            plane0.x = faceNormal.x;
            plane0.y = faceNormal.y;
            plane0.z = faceNormal.z;
            plane0.w = -Vector3.dot(faceNormal, scratchPlaneCenter);
            Vector3.multiplyByScalar(faceNormal, radius, scratchPlaneCenter);
            Vector3.add(center, scratchPlaneCenter, scratchPlaneCenter);
            plane1.x = -faceNormal.x;
            plane1.y = -faceNormal.y;
            plane1.z = -faceNormal.z;
            plane1.w = -Vector3.dot(Vector3.negate(faceNormal, scratchPlaneNormal), scratchPlaneCenter);
            planeIndex += 2;
        }
        return result;
    }
    ;
    /**
     * Determines whether a bounding volume intersects the culling volume.
     *
     * @param {Object} boundingVolume The bounding volume whose intersection with the culling volume is to be tested.
     * @returns {Intersect}  Intersect.OUTSIDE, Intersect.INTERSECTING, or Intersect.INSIDE.
     */
    computeVisibility(boundingVolume) {
        if (!defined(boundingVolume)) {
            throw new Error("boundingVolume is required.");
        }
        const planes = this.planes;
        let intersecting = false;
        for (let k = 0, len = planes.length; k < len; ++k) {
            const result = boundingVolume.intersectPlane(planes[k]);
            if (result === Intersect$1.OUTSIDE) {
                return Intersect$1.OUTSIDE;
            }
            else if (result === Intersect$1.INTERSECTING) {
                intersecting = true;
            }
        }
        return intersecting ? Intersect$1.INTERSECTING : Intersect$1.INSIDE;
    }
    ;
    /**
     * Determines whether a bounding volume intersects the culling volume.
     *
     * @param {Object} boundingVolume The bounding volume whose intersection with the culling volume is to be tested.
     * @param {Number} parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
     *                                 volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
     *                                 the parent (and therefore this) volume is completely inside plane[planeIndex]
     *                                 and that plane check can be skipped.
     * @returns {Number} A plane mask as described above (which can be applied to this boundingVolume's children).
     *
     * @private
     */
    computeVisibilityWithPlaneMask(boundingVolume, parentPlaneMask) {
        //>>includeStart('debug', pragmas.debug);
        if (!defined(boundingVolume)) {
            throw new Error("boundingVolume is required.");
        }
        if (!defined(parentPlaneMask)) {
            throw new Error("parentPlaneMask is required.");
        }
        //>>includeEnd('debug');
        if (parentPlaneMask === CullingVolume.MASK_OUTSIDE ||
            parentPlaneMask === CullingVolume.MASK_INSIDE) {
            // parent is completely outside or completely inside, so this child is as well.
            return parentPlaneMask;
        }
        // Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
        // (Because if there are fewer than 31 planes, the upper bits wont be changed.)
        let mask = CullingVolume.MASK_INSIDE;
        const planes = this.planes;
        for (let k = 0, len = planes.length; k < len; ++k) {
            // For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
            const flag = k < 31 ? 1 << k : 0;
            if (k < 31 && (parentPlaneMask & flag) === 0) {
                // boundingVolume is known to be INSIDE this plane.
                continue;
            }
            const result = boundingVolume.intersectPlane(Plane.fromVector4(planes[k], scratchPlane));
            if (result === Intersect$1.OUTSIDE) {
                return CullingVolume.MASK_OUTSIDE;
            }
            else if (result === Intersect$1.INTERSECTING) {
                mask |= flag;
            }
        }
        return mask;
    }
    ;
}
CullingVolume.MASK_OUTSIDE = 0xffffffff;
CullingVolume.MASK_INSIDE = 0x00000000;
CullingVolume.MASK_INDETERMINATE = 0x7fffffff;
const faces = [new Vector3(), new Vector3(), new Vector3()];
Vector3.clone(Vector3.UNIT_X, faces[0]);
Vector3.clone(Vector3.UNIT_Y, faces[1]);
Vector3.clone(Vector3.UNIT_Z, faces[2]);
const scratchPlaneCenter = new Vector3();
const scratchPlaneNormal = new Vector3();
const scratchPlane = new Plane(new Vector3(1.0, 0.0, 0.0), 0.0);

class Camera {
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.position = new Vector3(0, 0, 0);
        this._up = new Vector3(0, 1, 0);
        this._direction = new Vector3(0, 0, 1);
        this._right = new Vector3(1, 0, 0);
        this.dirUpRightDirty = false;
        this.projectMatrixDirty = false;
        this.targetDirty = false;
        this._target = new Vector3();
        this._projectionMatrix = new Matrix4();
        this._inverseViewMatrix = new Matrix4();
        this._viewMatrix = new Matrix4();
        this.cullingVolume = new CullingVolume();
    }
    get projectionMatrix() {
        this.updateProjectionMatrix();
        return this._projectionMatrix;
    }
    set projectionMatrix(v) {
        this._projectionMatrix = v;
    }
    get inverseViewMatrix() {
        this.updateInverseViewMatrix();
        return this._inverseViewMatrix;
    }
    get viewMatrix() {
        this.updateViewMatrix();
        return this._viewMatrix;
    }
    set viewMatrix(v) {
        this._viewMatrix = v;
    }
    get target() {
        return this._target;
    }
    set target(value) {
        this.targetDirty = true;
        this._target = value;
    }
    get near() {
        return this._near;
    }
    set near(v) {
        this.projectMatrixDirty = true;
        this._near = v;
    }
    get far() {
        return this._far;
    }
    set far(v) {
        this.projectMatrixDirty = true;
        this._far = v;
    }
    get up() {
        return this._up;
    }
    set up(value) {
        this._up = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
    updateDirUpRight() {
        //暂时这么写
        Vector3.subtract(this.position, this.target, this.direction);
        Vector3.normalize(this.direction, this.direction);
        Vector3.cross(this.up, this.direction, this.right);
        if (this.right.length() === 0) {
            // up and z are parallel
            if (Math.abs(this.up.z) === 1) {
                this.direction.x += 0.0001;
            }
            else {
                this.direction.z += 0.0001;
            }
            this.direction = Vector3.normalize(this.direction, new Vector3());
            Vector3.cross(this.up, this.direction, this.right);
            // _x.crossVectors( up, _z );
        }
        Vector3.normalize(this.right, this.right);
        Vector3.cross(this.direction, this.right, this.up);
    }
    updateInverseViewMatrix() {
        this.updateViewMatrix();
        Matrix4.inverseTransformation(this._viewMatrix, this._inverseViewMatrix);
    }
    updateViewMatrix() {
        // if (this.targetDirty){
        this.targetDirty = false;
        this.updateDirUpRight();
        Matrix4.computeView(this.position, this.direction, this.up, this.right, this._viewMatrix);
        //}
    }
    updateProjectionMatrix() { }
    /**
   * get a culling volume for this frustum.
   */
    getCullingVolume() {
        const cloneViewMatrix = this.viewMatrix.clone(new Matrix4());
        const vpMatrix = Matrix4.multiply(this.projectionMatrix, cloneViewMatrix, new Matrix4());
        const planes = this.cullingVolume.planes;
        const me = vpMatrix;
        const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
        const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
        const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
        const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];
        planes[0] = new Plane(new Vector3(me3 - me0, me7 - me4, me11 - me8), me15 - me12);
        planes[0].normalize();
        planes[1] = new Plane(new Vector3(me3 + me0, me7 + me4, me11 + me8), me15 + me12);
        planes[1].normalize();
        planes[2] = new Plane(new Vector3(me3 + me1, me7 + me5, me11 + me9), me15 + me13);
        planes[2].normalize();
        planes[3] = new Plane(new Vector3(me3 - me1, me7 - me5, me11 - me9), me15 - me13);
        planes[3].normalize();
        planes[4] = new Plane(new Vector3(me3 - me2, me7 - me6, me11 - me10), me15 - me14);
        planes[4].normalize();
        planes[5] = new Plane(new Vector3(me3 + me2, me7 + me6, me11 + me10), me15 + me14);
        planes[5].normalize();
        return this.cullingVolume;
    }
}

/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-23 11:14:15
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-11 17:40:05
 * @FilePath: \GEngine\src\camera\PerspectiveCamera.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class PerspectiveCamera extends Camera {
    constructor(fov = 50, aspect = 1, near = 0.1, far = 2000) {
        super();
        this._aspect = aspect;
        this.fov = fov;
        this.near = near;
        this.far = far;
        this.xOffset = 0;
        this.yOffset = 0;
        this.projectMatrixDirty = true;
        this.updateCameraParms();
        this.cullingVolume = new CullingVolume();
    }
    get aspect() {
        return this._aspect;
    }
    set aspect(v) {
        this.projectMatrixDirty = true;
        this._aspect = v;
    }
    get fov() {
        return this._fov;
    }
    set fov(v) {
        this.projectMatrixDirty = true;
        this._fov = v;
    }
    updateCameraParms() {
        this.top = this.near * Math.tan(0.5 * this.fov);
        this.height = 2 * this.top;
        this.width = this.aspect * this.height;
        this.left = -0.5 * this.width;
    }
    updateProjectionMatrix() {
        if (this.projectMatrixDirty) {
            this.updateCameraParms();
            this.projectionMatrix = Matrix4.makePerspective(this.left, this.left + this.width, this.top, this.top - this.height, this.near, this.far);
            this.projectMatrixDirty = false;
        }
    }
}

class SpotLight extends Light {
    constructor(color, intensity, distance = 0, angle = Math.PI / 3, penumbra = 1, decay = 1) {
        super(color, intensity);
        this._distance = distance;
        this._angle = angle;
        this._penumbra = penumbra;
        this._decay = decay;
        this.type = 'spot';
        this._target = new Vector3(0, 0, 0);
        this.dirtectDirty = true;
        this.angleDirty = true;
        this.penumbraDirty = true;
        this.distanceDirty = true;
        this.decayDirty = true;
        this.coneCosDirty = true;
        this.penumbraCosDirty = true;
        this.updateConeCosOrPenumbraCos();
    }
    set target(value) {
        this.dirtectDirty = true;
        this._target = value;
    }
    get dirtect() {
        const result = new Vector3();
        Vector3.subtract(this.position, this._target, result);
        return Vector3.normalize(result, new Vector3());
    }
    get angle() {
        return this._angle;
    }
    set angle(value) {
        this.angleDirty = true;
        this._angle = value;
        this.updateConeCosOrPenumbraCos();
    }
    get penumbra() {
        return this._penumbra;
    }
    set penumbra(value) {
        this.penumbraDirty = true;
        this._penumbra = value;
        this.updateConeCosOrPenumbraCos();
    }
    set distance(value) {
        this.distanceDirty = true;
        this._distance = value;
    }
    get distance() {
        return this._distance;
    }
    set decay(value) {
        this.decayDirty = true;
        this._decay = value;
    }
    get decay() {
        return this._decay;
    }
    set coneCos(value) {
        this.coneCosDirty = true;
        this._coneCos = value;
    }
    get coneCos() {
        return this._coneCos;
    }
    set penumbraCos(value) {
        this.penumbraCosDirty = true;
        this._penumbraCos = value;
    }
    get penumbraCos() {
        return this._penumbraCos;
    }
    updateConeCosOrPenumbraCos() {
        this._coneCos = Math.cos(this.angle);
        this._penumbraCos = Math.cos(this.angle * (1 - this.penumbra));
    }
}
//uniform
// color: {},
// position: {},
// direction: {},
// distance: {},
// coneCos: {},
// penumbraCos: {},
// decay: {}

class PointLight extends Light {
    constructor(color, intensity, distance = 0, decay = 1) {
        super(color, intensity);
        this._distance = distance;
        this._decay = decay;
        this.distanceDirty = true;
        this.decayDirty = true;
        this.type = 'point';
    }
    set distance(value) {
        this.distanceDirty = true;
        this._distance = value;
    }
    get distance() {
        return this._distance;
    }
    set decay(value) {
        this.decayDirty = true;
        this._decay = value;
    }
    get decay() {
        return this._decay;
    }
}
//uniform
// color: {},
// position: {},
// decay: {},
// distance: {}

class DirtectLight extends Light {
    constructor(color, intensity, dirtect = new Vector3(1, 1, 0)) {
        super(color, intensity);
        this.type = 'dirtect';
        this._dirtect = dirtect;
        this.dirtectDirty = true;
    }
    set dirtect(value) {
        this.dirtectDirty = true;
        this._dirtect = value;
    }
    get dirtect() {
        return Vector3.normalize(this._dirtect, new Vector3());
    }
}
//uniform
// direction: {},
// color: {}

function newTypedArray(type, buffer, byteOffset, length) {
    switch (type) {
        case 5120:
            return new Int8Array(buffer, byteOffset, length);
        case 5121:
            return new Uint8Array(buffer, byteOffset, length);
        case 5122:
            return new Int16Array(buffer, byteOffset, length);
        case 5123:
            return new Uint16Array(buffer, byteOffset, length);
        case 5125:
            return new Uint32Array(buffer, byteOffset, length);
        case 5126:
            return new Float32Array(buffer, byteOffset, length);
        default:
            throw new Error("invalid component type");
    }
}
function toIndices(array) {
    if (array instanceof Uint16Array || array instanceof Uint32Array) {
        return array;
    }
    let toArray;
    if (array instanceof Float32Array) {
        toArray = new Uint32Array(array.length);
    }
    else {
        toArray = new Uint16Array(array.length);
    }
    array.forEach((element, index) => {
        toArray[index] = element;
    });
    return toArray;
}
function generateNormals(indices, positions) {
    const normals = new Float32Array(positions.length);
    const vertexCount = indices ? indices.length : positions.length;
    for (let i = 0; i < vertexCount; i += 3) {
        const triIndices = [];
        for (let n = 0; n < 3; n += 1) {
            if (indices) {
                triIndices.push(indices[i + n]);
            }
            else {
                triIndices.push(i + n);
            }
        }
        const triangle = triIndices.map((vertexIndex) => {
            const index = vertexIndex * 3;
            return new Vector3(positions[index], positions[index + 1], positions[index + 2]);
        });
        const dv1 = new Vector3();
        Vector3.subtract(triangle[1], triangle[0], dv1);
        const dv2 = new Vector3();
        Vector3.subtract(triangle[2], triangle[0], dv2);
        const normal = new Vector3();
        Vector3.cross(dv1.normalize(), dv2.normalize(), normal);
        for (let n = 0; n < 3; n += 1) {
            const index = (i + n) * 3;
            normals[index + 0] += normal.x;
            normals[index + 1] += normal.y;
            normals[index + 2] += normal.z;
        }
    }
    return normals;
}
function getTextures(material) {
    const { baseColorTexture, metallicRoughnessTexture } = material.pbrMetallicRoughness;
    const { normalTexture, occlusionTexture, emissiveTexture } = material;
    return [
        baseColorTexture,
        metallicRoughnessTexture,
        normalTexture,
        occlusionTexture,
        emissiveTexture,
    ];
}
const gltfEnum = {
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
    10497: "repeat",
};

class GLTF {
    constructor(json, buffers, images, glbOffset = 0, scene) {
        this.scenes = json.scenes;
        this.defaultScene = json.scene || 0;
        this.nodes = json.nodes;
        this.cameras = json.cameras || [];
        this.images = images;
        function getSampler(samplerJson) {
            return {
                magFilter: gltfEnum[samplerJson.magFilter || 9729],
                minFilter: gltfEnum[samplerJson.minFilter || 9729],
                addressModeU: gltfEnum[samplerJson.wrapS || 10497],
                addressModeV: gltfEnum[samplerJson.wrapT || 10497],
            };
        }
        const samplers = json.samplers
            ? json.samplers.map((sampler) => getSampler(sampler))
            : [];
        const defaultSampler = getSampler({});
        const textures = json.textures
            ? json.textures.map((texture) => {
                texture.sampler =
                    texture.sampler !== undefined
                        ? samplers[texture.sampler]
                        : defaultSampler;
                return texture;
            })
            : [];
        const materials = json.materials
            ? json.materials.map((material) => {
                if (!material.pbrMetallicRoughness) {
                    material.pbrMetallicRoughness = {};
                }
                getTextures(material).forEach((texture) => {
                    if (texture) {
                        texture.source = textures[texture.index].source;
                        texture.sampler = textures[texture.index].sampler;
                    }
                });
                return material;
            })
            : [];
        const defaultMaterial = { pbrMetallicRoughness: {} };
        function getBufferView(accessor, n) {
            const bufferView = json.bufferViews[accessor.bufferView];
            const offset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
            const stride = Math.max(bufferView.byteStride / 4 || 0, n);
            let array = newTypedArray(accessor.componentType, buffers[bufferView.buffer], bufferView.buffer === 0 ? offset + glbOffset : offset, (accessor.count - 1) * stride + n);
            if (stride > n) {
                const TypedArrayConstructor = array.constructor;
                const strided = new TypedArrayConstructor(accessor.count * n);
                for (let i = 0, j = 0; i < strided.length; i += n, j += stride) {
                    for (let k = 0; k < n; k += 1) {
                        strided[i + k] = array[j + k];
                    }
                }
                array = strided;
            }
            return array;
        }
        const accessors = json.accessors.map((accessor) => {
            const n = gltfEnum[accessor.type];
            let array;
            if (accessor.bufferView === undefined) {
                array = newTypedArray(accessor.componentType, new ArrayBuffer(n * accessor.count * gltfEnum[accessor.componentType]), 0, accessor.count * n);
            }
            else {
                array = getBufferView(accessor, n);
            }
            if (accessor.sparse) {
                accessor.sparse.indices.count = accessor.sparse.count;
                accessor.sparse.values.count = accessor.sparse.count;
                accessor.sparse.values.componentType = accessor.componentType;
                const indices = getBufferView(accessor.sparse.indices, 1);
                const values = getBufferView(accessor.sparse.values, n);
                for (let i = 0; i < accessor.sparse.count; i += 1) {
                    for (let j = 0; j < n; j += 1) {
                        array[indices[i] * n + j] = values[i * n + j];
                    }
                }
            }
            return array;
        });
        this.meshes = json.meshes.map((mesh) => mesh.primitives.map((primitive) => {
            const material = primitive.material !== undefined
                ? materials[primitive.material]
                : defaultMaterial;
            let indices = null;
            let vertexCount;
            if (primitive.indices !== undefined) {
                indices = toIndices(accessors[primitive.indices]);
                vertexCount = json.accessors[primitive.indices].count;
            }
            else {
                vertexCount = json.accessors[primitive.attributes.POSITION].count;
            }
            const positions = accessors[primitive.attributes.POSITION];
            const { max, min } = json.accessors[primitive.attributes.POSITION];
            const boundingBox = { max, min };
            let normals;
            if (primitive.attributes.NORMAL !== undefined) {
                normals = accessors[primitive.attributes.NORMAL];
            }
            else {
                normals = generateNormals(indices, positions);
            }
            let uvs = null;
            if (primitive.attributes.TEXCOORD_0 !== undefined) {
                uvs = accessors[primitive.attributes.TEXCOORD_0];
            }
            let uv1s = null;
            if (primitive.attributes.TEXCOORD_1 !== undefined) {
                uv1s = accessors[primitive.attributes.TEXCOORD_1];
            }
            let tangents = null;
            if (primitive.attributes.TANGENT !== undefined &&
                primitive.attributes.NORMAL !== undefined) {
                tangents = accessors[primitive.attributes.TANGENT];
            }
            else if (material.normalTexture) ;
            let colors = null;
            if (primitive.attributes.COLOR_0 !== undefined) {
                colors = accessors[primitive.attributes.COLOR_0];
            }
            return generateMesh({
                vertexCount,
                indices,
                positions,
                normals,
                uvs,
                uv1s,
                tangents,
                colors,
                material,
                boundingBox,
            }, this.images, scene);
            // return {
            //   vertexCount,
            //   indices,
            //   positions,
            //   normals,
            //   uvs,
            //   uv1s,
            //   tangents,
            //   colors,
            //   material,
            //   boundingBox,
            // };
        }));
        this.animations =
            json.animations?.map((animation) => {
                const channels = animation.channels.map(({ sampler, target }) => ({
                    input: accessors[animation.samplers[sampler].input],
                    output: accessors[animation.samplers[sampler].output],
                    interpolation: animation.samplers[sampler].interpolation || "LINEAR",
                    node: target.node,
                    path: target.path,
                }));
                const length = channels.reduce((acc, { input }) => Math.max(acc, input[input.length - 1]), 0);
                return { channels, length };
            }) || [];
    }
}
async function loadGLTFObject(json, url, scene, glbOffset = 0, bin) {
    const dir = url.substring(0, url.lastIndexOf("/"));
    debugger;
    const images = [];
    let loadExternalImages = Promise.resolve();
    if (json.images) {
        loadExternalImages = Promise.all(json.images.map(async (image, index) => {
            if (image.uri) {
                const imageUrl = image.uri.slice(0, 5) === "data:"
                    ? image.uri
                    : `${dir}/${image.uri}`;
                images[index] = await fetch(imageUrl)
                    .then((response) => response.blob())
                    .then((blob) => createImageBitmap(blob, {
                    colorSpaceConversion: "none",
                }));
            }
        }));
    }
    const buffers = [];
    await Promise.all(json.buffers.map((buffer, index) => {
        if (!buffer.uri) {
            if (index !== 0) {
                throw new Error("buffer uri undefined");
            }
            buffers[index] = bin;
            return Promise.resolve();
        }
        const bufferUrl = buffer.uri.slice(0, 5) === "data:"
            ? buffer.uri
            : `${dir}/${buffer.uri}`;
        return fetch(bufferUrl)
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => {
            buffers[index] = arrayBuffer;
        });
    }));
    let loadInternalImages = Promise.resolve();
    if (json.images) {
        loadInternalImages = Promise.all(json.images.map(async (image, index) => {
            if (image.bufferView !== undefined) {
                const { buffer, byteOffset, byteLength } = json.bufferViews[image.bufferView];
                const array = new Uint8Array(buffers[buffer], buffer === 0 ? byteOffset + glbOffset : byteOffset, byteLength);
                let type;
                if (image.mimeType) {
                    type = image.mimeType;
                }
                else {
                    type = array[0] === 0xff ? "image/jpeg" : "image/png";
                }
                const blob = new Blob([array], { type });
                images[index] = await createImageBitmap(blob, {
                    colorSpaceConversion: "none",
                });
            }
        }));
    }
    await Promise.all([loadExternalImages, loadInternalImages]);
    return new GLTF(json, buffers, images, glbOffset, scene);
}
async function loadGLTF(url, scene) {
    const ext = url.split(".").pop();
    if (ext === "gltf") {
        const json = await fetch(url).then((response) => response.json());
        return loadGLTFObject(json, url, scene);
    }
    const glb = await fetch(url).then((response) => response.arrayBuffer());
    const jsonLength = new Uint32Array(glb, 12, 1)[0];
    const jsonChunk = new Uint8Array(glb, 20, jsonLength);
    const json = JSON.parse(new TextDecoder("utf-8").decode(jsonChunk));
    return loadGLTFObject(json, url, scene, 28 + jsonLength, glb);
}
function generateMesh(options, images, scene) {
    const { vertexCount, indices, positions, normals, uvs, uv1s, tangents, colors, material, boundingBox, } = options;
    const { emissiveFactor, emissiveTexture, name, normalTexture, occlusionTexture, pbrMetallicRoughness, } = material;
    debugger;
    const geo = new Geometry({});
    geo.setIndice(Array.from(indices));
    geo.setAttribute(new Float32Attribute("position", Array.from(positions), 3));
    geo.setAttribute(new Float32Attribute("normal", Array.from(normals), 3));
    geo.setAttribute(new Float32Attribute("uv", Array.from(uvs), 2));
    geo.computeBoundingSphere(Array.from(positions));
    geo.count = vertexCount;
    const mat = new PbrMat();
    mat.diffuseEnvTexture = scene.diffuseEnvTexture;
    mat.specularEnvTexture = scene.specularEnvTexture;
    mat.brdfTexture = scene.brdfTexture;
    mat.normalTexture = generateTexture(normalTexture, images);
    mat.aoTexture = generateTexture(occlusionTexture, images);
    mat.emissiveTexture = generateTexture(emissiveTexture, images);
    mat.baseTexture = generateTexture(pbrMetallicRoughness.baseColorTexture, images);
    mat.metalnessRoughnessTexture = generateTexture(pbrMetallicRoughness.metallicRoughnessTexture, images);
    mat.baseSampler = new Sampler({
        magFilter: 'linear',
        minFilter: 'linear',
        addressModeU: "repeat",
        addressModeV: "repeat",
    });
    mat.roughness = 0.0;
    mat.metalness = 1.0;
    const mesh = new Mesh(geo, mat);
    // mesh.scale.set(3,3,3)
    return mesh;
}
function generateTexture(texture, images) {
    const { sampler, index } = texture;
    return new Texture({
        size: { width: images[index].width, height: images[index].height, depth: 1 },
        data: {
            source: images[index]
        },
        format: 'rgba8unorm',
        usage: GPUTextureUsage.TEXTURE_BINDING |
            GPUTextureUsage.COPY_DST |
            GPUTextureUsage.RENDER_ATTACHMENT,
    });
}

export { AddressMode, Attachment, Attribute, Axes, BindGroup, BindGroupEntity, BlendFactor, BlendOperation, BoxGeometry, Buffer, BufferUsage, Color, ColorWriteFlags, CompareFunction, Context, CubeTextureLoader, CullMode, DirtectLight, DrawCommand, FilterMode, FrontFace, IndexFormat, InputStepMode, Mesh, PbrBaseMaterial, PbrMat, PerspectiveCamera, PhongMaterial, PointLight, PrimitiveTopology, RenderState, Sampler, Scene, ShaderStage, SkyBox, SphereGeometry, SpotLight, StencilOperation, StorageTextureAccess, Texture, TextureAspect, TextureDimension, TextureFormat, TextureSampleType, TextureUsage, TextureViewDimension, TorusKnotGeometry, Vector3, VertexFormat, loadGLTF, loadTexture };
