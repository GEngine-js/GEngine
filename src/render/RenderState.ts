import defaultValue from "../utils/defaultValue";
import defined from "../utils/defined";
import {
  BlendOperation,
  BlendFactor,
  StencilOperation,
  CompareFunction,
  GPUColorWrite,
  TextureFormat,
  FrontFace,
  CullMode,
  StoreOp,
  LoadOp,
  ColorWriteFlags,
} from "../core/WebGPUConstant.js";
import {
  BlendConstant,
  DepthStencil,
  MultiSample,
  PrimitiveState,
  Target,
} from "../core/WebGPUTypes";
const renderStateCache = new WeakMap();
export default class RenderState {
  scissorTest: { x: number; y: number; width: number; height: number };
  viewport: { x: number; y: number; width: number; height: number };
  targets: Array<Target>;
  depthStencil: DepthStencil;
  blendConstant: BlendConstant;
  stencilReference: number;
  multisample: MultiSample;
  primitive: PrimitiveState;
  stencilEnabled: boolean;
  scissorTestEnabled: boolean;
  constructor(renderState) {
    const rs = defaultValue(renderState, {});
    const targets = defaultValue(rs.targets, {});
    const blend = defaultValue(rs.blend, { color: {}, alpha: {} });
    const depthStencil = defaultValue(
      rs.depthStencil,
      {}
    );
    const depthStencilFront = defaultValue(
      depthStencil.front,
     {}
    );
    const depthStencilBack = defaultValue(
      depthStencil.back,
      {}
    );
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
                operation: defaultValue(
                  blend.color.operation,
                  BlendOperation.Add
                ),
                srcFactor: defaultValue(blend.color.srcFactor, BlendFactor.One),
                dstFactor: defaultValue(
                  blend.color.dstFactor,
                  BlendFactor.Zero
                ),
              },
              alpha: {
                operation: defaultValue(
                  blend.alpha.operation,
                  BlendOperation.Add
                ),
                srcFactor: defaultValue(blend.alpha.srcFactor, BlendFactor.One),
                dstFactor: defaultValue(
                  blend.alpha.dstFactor,
                  BlendFactor.Zero
                ),
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
      depthCompare: defaultValue(
        depthStencil.depthCompare,
        CompareFunction.Less
      ),
      stencilReadMask: defaultValue(depthStencil.stencilReadMask, 0xffffffff),
      stencilWriteMask: defaultValue(depthStencil.stencilWriteMask, 0xffffffff),
      stencilFront: {
        compare: defaultValue(
          depthStencilFront.compare,
          CompareFunction.Always
        ),
        failOp: defaultValue(depthStencilFront.failOp, StencilOperation.Keep),
        depthFailOp: defaultValue(
          depthStencilFront.depthFailOp,
          StencilOperation.Keep
        ),
        passOp: defaultValue(depthStencilFront.passOp, StencilOperation.Keep),
      },
      stencilBack: {
        compare: defaultValue(depthStencilBack.compare, CompareFunction.Always),
        failOp: defaultValue(depthStencilBack.failOp, StencilOperation.Keep),
        depthFailOp: defaultValue(
          depthStencilBack.depthFailOp,
          StencilOperation.Keep
        ),
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
  static readonly defaultDepthStencil = {
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

  static readonly defaultPrimitiveState = {
    frontFace: FrontFace.CCW,
    cullMode: CullMode.None,
    unclippedDepth: false,
  };

  static readonly defaultMultisample = {
    count: 1,
    mask: 0xffffffff,
    alphaToCoverageEnabled: false,
  };

  static readonly defaultTarget = {
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
  static readonly defaultBlendConstant = { r: 1, g: 1, b: 1, a: 1 };
  static getFromRenderStateCache(renderstate) {
    if (renderStateCache.has(renderstate)) {
      return renderStateCache.get(renderstate);
    }
    const newRenderState = new RenderState(renderstate);
    renderStateCache.set(renderstate, Object.freeze(newRenderState));
    return newRenderState;
  }
  static preRenderState = {
    blendConstant: undefined,
    stencilReference: 0,
    viewport: undefined,
    scissorTest: undefined,
  };
  static checkRenderStateStatus(type: string, value: any): boolean {
    let result = false;
    switch (type) {
      case "blendConstant":
        const blendConstant = RenderState.preRenderState.blendConstant;
        if (
          blendConstant?.r == value.r &&
          blendConstant?.g == value.g &&
          blendConstant?.b == value.b &&
          blendConstant?.a == value.a
        ) {
          RenderState.preRenderState.blendConstant = value;
          result = true;
        }
        break;
      case "viewport":
        const viewport = RenderState.preRenderState.viewport;
        if (
          viewport?.x == value.x &&
          viewport?.y == value.y &&
          viewport?.width == value.width &&
          viewport?.height == value.height
        ) {
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
        if (
          scissorTest?.x == value.x &&
          scissorTest?.y == value.y &&
          scissorTest?.width == value.width &&
          scissorTest?.height == value.height
        ) {
          RenderState.preRenderState.scissorTest = value;
          result = true;
        }
        break;
    }
    return result;
  }
  static applyRenderState(passEncoder: GPURenderPassEncoder, renderState: {}) {
    const {
      blendConstant,
      stencilReference,
      viewport,
      scissorTest,
      stencilEnabled,
      scissorTestEnabled,
    } = RenderState.getFromRenderStateCache(renderState);
    if (RenderState.checkRenderStateStatus("blendConstant", blendConstant))
      passEncoder.setBlendConstant(blendConstant);
    if (
      stencilEnabled &&
      RenderState.checkRenderStateStatus("stencilReference", stencilReference)
    )
      passEncoder.setStencilReference(stencilReference);
    if (RenderState.checkRenderStateStatus("viewport", viewport))
      passEncoder.setViewport(
        viewport.x,
        viewport.y,
        viewport.width,
        viewport.height,
        0,
        1
      );
    if (
      scissorTestEnabled &&
      RenderState.checkRenderStateStatus("scissorTest", scissorTest)
    )
      passEncoder.setScissorRect(
        scissorTest.x,
        scissorTest.y,
        scissorTest.width,
        scissorTest.height
      );
  }
}
