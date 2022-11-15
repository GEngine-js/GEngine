import defaultValue from "../utils/defaultValue";
import defined  from "../utils/defined";
import { BlendOperation, BlendFactor, StencilOperation, CompareFunction, GPUColorWrite, TextureFormat, FrontFace, CullMode, StoreOp, LoadOp, ColorWriteFlags } from "../core/WebGPUConstant.js";
import { BlendConstant, DepthStencil, MultiSample, PrimitiveState, Target } from "../core/WebGPUTypes";
const renderStateCache=new WeakMap();
export default class RenderState {
  scissorTest: { x: number, y: number, width: number, height: number};
  viewport: { x: number, y: number, width: number, height: number};
  targets: Array<Target>;
  depthStencil: DepthStencil;
  blendConstant: BlendConstant;
  stencilReference: number;
  multisample: MultiSample;
  primitive: PrimitiveState;
  stencilEnabled: boolean;
  scissorTestEnabled: boolean;
  constructor(renderState) {
    const rs = defaultValue(renderState, defaultValue.EMPTY_OBJECT);
    const targets = defaultValue(rs.targets, defaultValue.EMPTY_OBJECT)
    const blend = defaultValue(rs.blend, { color: {}, alpha: {} })
    const depthStencil = defaultValue(rs.depthStencil, defaultValue.EMPTY_OBJECT);
    const depthStencilFront = defaultValue(
      depthStencil.front,
      defaultValue.EMPTY_OBJECT
    );
    const depthStencilBack = defaultValue(
      depthStencil.back,
      defaultValue.EMPTY_OBJECT
    );
    const viewport = rs.viewport;
    this.stencilEnabled=defaultValue(rs.stencilEnabled,false);
    this.scissorTestEnabled=defaultValue(rs.scissorTestEnabled,false);
    this.scissorTest=defaultValue(rs.scissorRect,{
      x:viewport.x,
      y:viewport.y,
      width:viewport.width,
      height:viewport.height
    })
    //
    this.multisample = defaultValue(rs.multisampleState, {
      count: 1,
      mask: 0xFFFFFFFF,
      alphaToCoverageEnabled: false
    })
    //已完善
    this.blendConstant = defaultValue(rs.blendConstant, { r: 1, g: 1, b: 1, a: 1 })
    //已完善
    this.targets =Array.isArray(targets)?targets: [{
      format:TextureFormat.BGRA8Unorm,
      blend: {
        color: {
          operation: defaultValue(
            blend.color.operation,
            BlendOperation.Add
          ),
          srcFactor: defaultValue(
            blend.color.srcFactor,
            BlendFactor.One
          ),
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
          srcFactor: defaultValue(
            blend.alpha.srcFactor,
            BlendFactor.One
          ),
          dstFactor: defaultValue(
            blend.alpha.dstFactor,
            BlendFactor.Zero
          ),
        },
      },
      writeMask: defaultValue(targets.writeMask, GPUColorWrite.All)
    }]
    //
    this.stencilReference = defaultValue(rs.stencilReference, 0)
    //已完善
    this.depthStencil = {
      format: defaultValue(depthStencil.format, TextureFormat.Depth24Plus),
      depthWriteEnabled: defaultValue(depthStencil.depthWriteEnabled, false),
      depthCompare: defaultValue(depthStencil.depthCompare, CompareFunction.Always),
      stencilReadMask: defaultValue(depthStencil.stencilReadMask, 0xFFFFFFFF),
      stencilWriteMask: defaultValue(depthStencil.stencilWriteMask, 0xFFFFFFFF),
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
      depthBiasClamp: defaultValue(depthStencil.depthBiasClamp, 0)
    };
    //
    this.primitive=defaultValue(rs.primitive,{
      frontFace:FrontFace.CCW,
      cullMode:CullMode.None,
      unclippedDepth :false,
    })
    //
    this.viewport = defined(viewport)
      ? viewport
      : undefined;
  }
  static readonly defaultDepthStencil={
      format: TextureFormat.Depth24Plus,
      depthWriteEnabled:true,
      depthCompare:CompareFunction.Less,
      stencilReadMask: 0xFFFFFFFF,
      stencilWriteMask:0xFFFFFFFF,
      stencilFront: {
          compare: CompareFunction.Always,
          failOp: StencilOperation.Keep,
          depthFailOp:StencilOperation.Keep,
          passOp:StencilOperation.Keep,
      },
      stencilBack: {
          compare: CompareFunction.Always,
          failOp: StencilOperation.Keep,
          depthFailOp: StencilOperation.Keep,
          passOp: StencilOperation.Keep,
      },
      depthBias:0,
      depthBiasSlopeScale:  0,
      depthBiasClamp: 0
  }

  static readonly defaultPrimitiveState={
    frontFace:FrontFace.CW,
    cullMode:CullMode.None,
    unclippedDepth :false,
  }

  static readonly defaultMultisample={
    count: 1,
    mask: 0xFFFFFFFF,
    alphaToCoverageEnabled: false
  }

  static readonly defaultTarget={
    format:TextureFormat.BGRA8Unorm,
    blend: {
        color: {
        operation: BlendOperation.Add,
        srcFactor: BlendFactor.One,
        dstFactor: BlendFactor.Zero
        },
        alpha: {
        operation: BlendOperation.Add,
        srcFactor: BlendFactor.One,
        dstFactor:BlendFactor.Zero,
        },
    },
    writeMask: ColorWriteFlags.All
  }
  static readonly defaultBlendConstant={ r: 1, g: 1, b: 1, a: 1 };
  static getFromRenderStateCache(renderstate){
      if (renderStateCache.has(renderstate)) {
        return renderStateCache.get(renderstate);
      }
      const newRenderState=new RenderState(renderstate)
      renderStateCache.set(renderstate,Object.freeze(newRenderState));
      return newRenderState;
  }
 


  static applyRenderState(passEncoder:GPURenderPassEncoder,renderState:{}){
    const {blendConstant,stencilReference,viewport,scissorTest,stencilEnabled,scissorTestEnabled}=RenderState.getFromRenderStateCache(renderState);
    passEncoder.setBlendConstant(blendConstant);
    if(stencilEnabled)passEncoder.setStencilReference(stencilReference);
    passEncoder.setViewport(viewport.x,viewport.y,viewport.width,viewport.height,0,1);
    if(scissorTestEnabled)passEncoder.setScissorRect(scissorTest.x,scissorTest.y,scissorTest.width,scissorTest.height);
  }
}