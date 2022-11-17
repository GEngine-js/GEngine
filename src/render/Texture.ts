import { TextureFormat } from "../core/WebGPUConstant";
import { WebGPUTextureProps } from "../core/WebGPUTypes";
import defaultValue from "../utils/defaultValue";
import Context from "./Context";
import Sampler from "./Sampler";

export default class Texture{
    public gpuTexture: GPUTexture;
    public mipLevelCount: number;
    public sampler:Sampler;
    context: Context;
    textureProp: WebGPUTextureProps;
    constructor(textureProp:WebGPUTextureProps){    
       this.textureProp=Object.assign({
        format: TextureFormat.RGBA8Unorm,
        usage: GPUTextureUsage.TEXTURE_BINDING |
               GPUTextureUsage.COPY_DST |
               GPUTextureUsage.RENDER_ATTACHMENT,
        },textureProp);
       this.sampler=textureProp.sampler;
    }
    get layoutType(){
      const {dimension,sampleType,sampleCount}=this.textureProp;
      return {
        sampleType: defaultValue(sampleType,"float"),
        viewDimension: defaultValue(dimension,"2d"),
        multisampled: sampleCount&&sampleCount>1?true:false
      }
    }
    update(context:Context){
        if (!this.gpuTexture) {
          this.context=context;
          this.gpuTexture=this.createGPUTexture();
          if(this.textureProp.data) this.setData({source:this.textureProp.data});
          if(this.sampler)this.sampler.update(context);
        }
    }
    setData(options: {
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
            mipLevelCount: this.textureProp.mipLevelCount||1,
            sampleCount: this.textureProp.sampleCount||1
          });
    }
}