import { TextureFormat } from "../core/WebGPUConstant";
import { WebGPUTextureProps,ImageData } from "../core/WebGPUTypes";
import defaultValue from "../utils/defaultValue";
import Context from "./Context";
import Sampler from "./Sampler";

export default class Texture{
    [x: string]: any;
    public gpuTexture?: GPUTexture;
    public mipLevelCount?: number;
    public sampler?:Sampler;
    public context?: Context;
    public textureProp?: WebGPUTextureProps;
    public dirty:boolean;
    constructor(textureProp:WebGPUTextureProps){    
       this.textureProp=Object.assign({
        format: TextureFormat.RGBA8Unorm,
        usage: GPUTextureUsage.TEXTURE_BINDING |
               GPUTextureUsage.COPY_DST |
               GPUTextureUsage.RENDER_ATTACHMENT,
        },textureProp);
       this.sampler=textureProp.sampler;
       this.dirty=true;
    }
    get layoutType(){
      const {viewFormats,sampleType,sampleCount}=this.textureProp;
      // const 
      return {
        sampleType: defaultValue(sampleType,"float"),
        viewDimension: defaultValue(viewFormats,"2d"),
        multisampled: sampleCount&&sampleCount>1?true:false
      }
    }
    get texureView(){
      return this.gpuTexture.createView({
        dimension:<GPUTextureViewDimension>defaultValue(this.textureProp.viewFormats,'2d')
      })
    }
    update(context:Context){
        if(!this.context)this.context=context;
        if(!this.gpuTexture)this.gpuTexture=this.createGPUTexture();
        if (this.dirty) {
            this.dirty=false
            if(this.textureProp.data) {
              if (Array.isArray(this.textureProp.data)) {
                this.textureProp.data.forEach(imageData => {
                  this.setData(imageData);
                });
              } else {
                this.setData(this.textureProp.data);
              }
            }
            if(this.textureProp.needMipMap) {
              this.gpuTexture=context.mipmapTools.generateMipmap(this);
            }
            if(this.sampler)this.sampler.update(context);
        }
    }
    private setData(options:ImageData){
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