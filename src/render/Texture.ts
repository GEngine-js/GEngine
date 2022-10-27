import { WebGPUTextureProps } from "../core/WebGPUTypes";
import Context from "./Context";

export default class Texture{
    public gpuTexture: GPUTexture;
    public mipLevelCount: number;
    layoutType:{
      sampleType: string,
      viewDimension: string,
      multisampled: boolean
    }
    context: Context;
    textureProp: WebGPUTextureProps;

    constructor(context:Context,textureProp:WebGPUTextureProps){
       this.context=context;
       this.textureProp=textureProp;
       this.layoutType={
        sampleType: "float",
        viewDimension: "2d",
        multisampled: false
      }  
       this.gpuTexture=this.createGPUTexture()
       if(textureProp.data) this.update({source:textureProp.data})
    }
    update(options: {
        source: ImageBitmap | HTMLCanvasElement;
        width?: number;
        height?: number;
        depth?: number;
        sourceX?: number;
        sourceY?: number;
        mipLevel?: number;
        x?: number;
        y?: number;
        z?: number;
        aspect?: 'all' | 'stencil-only' | 'depth-only';
        colorSpace?: 'srgb';
        premultipliedAlpha?: boolean;
      }){
        const {
            source,
            width = options.source.width,
            height = options.source.height,
            depth = 1,
            sourceX = 0,
            sourceY = 0,
            mipLevel = 0,
            x = 0,
            y = 0,
            z = 0,
            aspect = 'all',
            colorSpace = 'srgb',
            premultipliedAlpha = false
          } = options;
        
          this.context.device.queue.copyExternalImageToTexture(
            {
              source,
              origin: [sourceX, sourceY]
            },
            {
              texture: this.gpuTexture,
              origin: [x, y, z],
              mipLevel,
              aspect,
              colorSpace,
              premultipliedAlpha
            },
            [
              width,
              height,
              depth
            ]
          );
    }
    destroy(): void {
        this.gpuTexture.destroy();
      }
    private createGPUTexture(){
        if (typeof this.textureProp.format === 'number') {
            throw new Error('number format');
          }       
          const {width,height,depth}=this.textureProp.size   
          return this.context.device.createTexture({
            size:[width,height,depth],
            dimension: this.textureProp.dimension||'2d',
            format: (this.textureProp.format as  GPUTextureFormat),
            usage: this.textureProp.usage,
            mipLevelCount: this.textureProp.mipLevelCount,
            sampleCount: this.textureProp.sampleCount
          });
    }
}