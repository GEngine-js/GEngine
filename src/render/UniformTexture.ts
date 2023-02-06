import { ShaderStage } from "../core/WebGPUConstant";
import Context from "./Context";
import Sampler from "./Sampler";
import Texture from "./Texture";

export class UniformTexture{
    public binding:number;
    public type:string;
    public visibility:ShaderStage;
    public name:string;
    public texture:Texture;
    constructor(uniformName:string, binding:number,texture:Function|Texture){
        this.name=uniformName;
        this.binding=binding;
        this.type='texture';
        this.visibility=ShaderStage.Fragment;
        this.texture=texture instanceof Function?texture():texture;
    }
    bind(context:Context){
        this.texture.update(context);
    }

}
export class UniformSampler{
    public binding:number;
    public type:string;
    public visibility:ShaderStage;
    public name:string;
    public sampler:Texture;
    constructor(uniformName:string, binding:number,sampler:Function|Sampler){
        this.name=uniformName;
        this.binding=binding;
        this.type='sampler';
        this.visibility=ShaderStage.Fragment;
        this.sampler=sampler instanceof Function?sampler():sampler;
    }
    bind(context:Context){
        this.sampler.update(context);
    }
}