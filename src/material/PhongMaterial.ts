
import { Material } from "./Material";
import { ShaderSource } from "../shader/ShaderSource";
import { Mesh } from "../mesh/Mesh";
import { FrameState } from "../core/FrameState";
import Color from "../math/Color";
export default class PhongMaterial extends Material {
    specular:Color;
    shininess:number;
    constructor() {
        super();
        this.type = 'phong';
        this.color = new Color(1.0,0.0,0.0);
        this.shaderSource=new ShaderSource({
            type:this.type,
            render:true,
            defines:{
              materialPhong:true
            }
        });
        this.specular=new Color(1.0,1.0,1.0);
        this.shininess=30.0;
        this.baseTexture = undefined;
        this.baseSampler = undefined;
    }
    update(frameState:FrameState,mesh:Mesh) { 
        if(!this.shaderData) this.createShaderData(mesh);
    }
    protected createShaderData(mesh?:Mesh){
        super.createShaderData(mesh);
        this.shaderData.setMatrix4('modelMatrix',()=>{
            return mesh.modelMatrix;
        });
        this.shaderData.setColor("diffuse",this);
        this.shaderData.setFloat("opacity",this);
        this.shaderData.setMatrix3("normalMtrix",()=>{
            return mesh.normalMatrix;
        });
        this.shaderData.setColor('emissive',this);
        this.shaderData.setFloat('shininess',this);
        this.shaderData.setColor('specular',this);
        if(this.baseTexture){
            this.shaderData.setDefine('baseTexture',true)
            this.shaderData.setTexture('baseTexture',this);
        }
        if(this.baseSampler)this.shaderData.setSampler('sampler',this.baseTexture)
     }
    destroy() {

    }
}