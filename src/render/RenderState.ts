import defaultValue from "../utils/defaultValue";
import defined  from "../utils/defined";
import { BlendOperation, BlendFactor, StencilOperation, CompareFunction, GPUColorWrite, TextureFormat, FrontFace, CullMode, StoreOp, LoadOp } from "../core/WebGPUConstant.js";
const renderStateCache=new WeakMap();
export default class RenderState {
  scissorTest: { x: number, y: number, width: number, height: number};
  viewport: { x: number, y: number, width: number, height: number};
  stencilTest: { depthWriteEnabled: any; stencilReadMask: any; stencilWriteMask: any; stencilFront: { compare: any; failOp: any; depthFailOp: any; passOp: any; }; stencilBack: { compare: any; failOp: any; depthFailOp: any; passOp: any; }; depthBias: any; depthBiasSlopeScale: any; depthBiasClamp: any; };
  targets: {};
  depthStencil: { format: any; depthWriteEnabled: any; depthCompare: any; stencilReadMask: any; stencilWriteMask: any; stencilFront: { compare: any; failOp: any; depthFailOp: any; passOp: any; }; stencilBack: { compare: any; failOp: any; depthFailOp: any; passOp: any; }; depthBias: any; depthBiasSlopeScale: any; depthBiasClamp: any; };
  blendConstant: any;
  stencilReference: any;
  multisample: any;
  primitive: any;
  depthStencilAttachment: any;
  colorAttachment: any;
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
    this.colorAttachment=defaultValue(rs.colorAttachment,{
      clearValue:{r:0,g:0,b:0,a:0},
      loadOp:LoadOp.Clear,
      storeOp:StoreOp.Store,
    })
    //
    this.depthStencilAttachment=defaultValue(rs.depthStencilAttachment,{
        depthClearValue:1.0,
        depthLoadOp:LoadOp.Clear,
        depthStoreOp:StoreOp.Store,
        depthReadOnly :false,
    
        stencilClearValue:0,
        stencilLoadOp:LoadOp.Clear,
        stencilStoreOp:StoreOp.Store,
       stencilReadOnly:false,
    })
    this.scissorTest=defaultValue(rs.scissorRect,{
      x:viewport.x,
      y:viewport.y,
      with:viewport.width,
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
    this.targets =Array.isArray(targets)?targets: {
      format: defaultValue(targets.format, TextureFormat.Depth24UnormStencil8),
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
    }
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
  static getFromRenderStateCache(renderstate){
      if (renderStateCache.has(renderstate)) {
        return renderStateCache.get(renderstate);
      }
      const newRenderState=new RenderState(renderstate)
      renderStateCache.set(renderstate,Object.freeze(newRenderState));
      return newRenderState;
  }
  static applyRenderState(passEncoder:GPURenderPassEncoder,renderState:{}){
    const {blendConstant,stencilReference,viewport,scissorTest}=RenderState.getFromRenderStateCache(renderState);
    passEncoder.setBlendConstant(blendConstant);
    passEncoder.setStencilReference(stencilReference);
    passEncoder.setViewport(viewport.x,viewport.y,viewport.width,viewport.height,0,1);
    passEncoder.setScissorRect(scissorTest.x,scissorTest.y,scissorTest.width,scissorTest.height);
  }
}