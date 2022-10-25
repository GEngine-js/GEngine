import { AmbientLight } from "../light/AmbientLight";
import { DirtectLight } from "../light/DirtectLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import { UniformFloatVec3, UniformLight } from "../render/Uniforms";
import DataBuffer from "../utils/DataBuffer";
import Manger from "./Manger";
import Buffer from '../render/Buffer';
import { Material } from "../material/Material";
import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";

export default class LightManger extends Manger{

    pointLights:PointLight[];

    spotLights:SpotLight[];

    dirtectLight:DirtectLight;

    ambientLight:AmbientLight;

    pointLightDataBuffer:DataBuffer;

    spotLightDataBuffer:DataBuffer;

    dirAndambLightDataBuffer:DataBuffer;

    lightCountDataBuffer:DataBuffer;

    uniforms: any[];

    spotLightBuffer:Buffer;

    pointLightBuffer:Buffer;

    dirAndambLightBuffer:Buffer;

    lightCountBuffer:Buffer;

    bindGroup:BindGroup;

    groupLayout:BindGroupLayout;

    spotDirty:boolean;

    pointDirty:boolean;

    ambAndDirDirty:boolean;

    lightCountDirty:boolean;

    constructor(){
        super();
        this.spotLightDataBuffer=new DataBuffer();
        this.pointLightDataBuffer=new DataBuffer();
        this.dirAndambLightDataBuffer=new DataBuffer();
        this.lightCountDataBuffer=new DataBuffer();
        this.spotDirty=true;
        this.pointDirty=true;
        this.ambAndDirDirty=true;
    }
    update(frameState){
        this.updateLight()
        //重新创建？
        if(!this.groupLayout||this.lightCountDirty) this.createBindGroupAndLayout(frameState.context.device);
    }
    add(light){
        this.lightCountDirty=true;
        if (light.type='ambient') {
            this.ambientLight=light;
        }else if(light.type='dirtect'){
            this.dirtectLight=light;
        } else if(light.type='point'){
            this.spotLights.push(light);
        }else if(light.type='spot'){
            this.spotLights.push(light);
        }
    }
    remove(){}
    private updateLight(){
        if(this.spotDirty||this.pointDirty||this.pointDirty) this.updateLightCount()
        if(this.spotDirty)this.updateSpotLight();
        if(this.pointDirty)this.updatePointLight();
        if(this.ambAndDirDirty) this.updateDirAndAmbLight();       
    }
    private createBindGroupAndLayout(device:GPUDevice){
        this.lightCountDirty=false;
        this.createUniforms();
        this.createUniformBuffer(device);
        const {groupLayout,bindGroup}= Material.createBindGroupAndLayout(device,this.uniforms,null,'light',1);
        this.groupLayout=groupLayout;
        this.bindGroup=bindGroup;
    }
    private createUniforms(){
       this.uniforms=[
         new UniformLight('spotLightBuffer',0,this,this.spotLights.length*52),
         new UniformLight('pointLightBuffer',1,this,this.pointLights.length*32),
         new UniformLight('dirAndambLightBuffer',2,this,36),
         new UniformLight('lightCountBuffer',3,this,16)
       ]
    }
    private createUniformBuffer(device:GPUDevice){
        this.spotLightBuffer=Buffer.createUniformBuffer(device,this.spotLights.length*52);
        this.pointLightBuffer=Buffer.createUniformBuffer(device,this.pointLights.length*32);
        this.dirAndambLightBuffer=Buffer.createUniformBuffer(device,36);
    }
    private updateSpotLight(){
        //uniform
        // color: {},
        // position: {},
        // direction: {},
        // distance: {},
        // coneCos: {},
        // penumbraCos: {},
        // decay: {}
         let data;
         this.spotLights.forEach((light)=>{
             data= light.lightColor.toArray()
            .concat(light.position.toArray())
            .concat(light.dirtect.toArray())
            .push(light.distance,light.coneCos,light.penumbraCos,light.decay)
         });
         this.spotLightDataBuffer.update(0,data);
         this.spotLightBuffer.setSubData(0,this.spotLightDataBuffer.toFloat32Array());
         this.spotDirty=false;
    }
    private updatePointLight(){
        //uniform
        // color: {},
        // position: {},
        // decay: {},
        // distance: {}
        let data;
        this.pointLights.forEach((light)=>{
            data= light.lightColor.toArray()
           .concat(light.position.toArray())
           .push(light.decay,light.distance)     
        });
        this.pointLightDataBuffer.update(0,data);
        this.pointLightBuffer.setSubData(0,this.pointLightDataBuffer.toFloat32Array())
        this.pointDirty=false;
    }
    private updateDirAndAmbLight(){
        let data=this.ambientLight.lightColor.toArray()
         .concat(this.dirtectLight.lightColor.toArray())
         .concat(this.dirtectLight.dirtect.toArray());
        this.dirAndambLightDataBuffer.update(0,data);
        this.dirAndambLightBuffer.setSubData(0,this.dirAndambLightDataBuffer.toFloat32Array());
        this.ambAndDirDirty=false;
    }
    private updateLightCount(){
        this.lightCountDataBuffer.update(0,this.spotLights.length);
        this.lightCountDataBuffer.update(1,this.pointLights.length);
        this.lightCountDataBuffer.update(2,(this.dirtectLight!=undefined?1:0));
        this.lightCountDataBuffer.update(3,(this.ambientLight!=undefined?1:0));
        this.lightCountBuffer.setSubData(0,this.lightCountDataBuffer.toFloat32Array());
    }
    
}