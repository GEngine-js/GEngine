import { AmbientLight } from "../light/AmbientLight";
import { DirtectLight } from "../light/DirtectLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import DataBuffer from "../utils/DataBuffer";
import Manger from "./Manger";
import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";

export default class LightManger extends Manger{

    pointLights:PointLight[];

    spotLights:SpotLight[];

    dirtectLights:DirtectLight[];

    ambientLight:AmbientLight;

    pointLightDataBuffer:DataBuffer;

    spotLightDataBuffer:DataBuffer;

    dirtectLightDataBuffer:DataBuffer;

    ambientLightDataBuffer:DataBuffer;

    lightCountDataBuffer:DataBuffer;

    bindGroup:BindGroup;

    groupLayout:BindGroupLayout;

    spotDirty:boolean;

    pointDirty:boolean;

    dirtectDirty:boolean;

    ambientDirty:boolean;

    lightCountDirty:boolean;

    constructor(){
        super();
        this.spotLightDataBuffer=new DataBuffer();
        this.pointLightDataBuffer=new DataBuffer();
        this.dirtectLightDataBuffer=new DataBuffer();
        this.ambientLightDataBuffer=new DataBuffer()
        this.lightCountDataBuffer=new DataBuffer();
        this.spotLights=[];
        this.pointLights=[];
        this.dirtectLights=[];
        this.ambientLight=undefined;
        this.spotDirty=true;
        this.pointDirty=true;
        this.ambientDirty=true;
        this.dirtectDirty=true;
    }
    update(){
        this.updateLight()
    }
    add(light){
        this.lightCountDirty=true;
        if (light.type=='ambient') {
            this.ambientLight=light;
        }else if(light.type=='dirtect'){
            this.dirtectLights.push(light);
        } else if(light.type=='point'){
            this.pointLights.push(light);
        }else if(light.type=='spot'){
            this.spotLights.push(light);
        }
    }
    remove(){}
    private updateLight(){
        if(this.spotDirty||this.pointDirty||this.pointDirty||this.dirtectDirty||this.ambientDirty) this.updateLightCount()
        if(this.spotDirty)this.updateSpotLight();
        if(this.pointDirty)this.updatePointLight();
        if(this.dirtectDirty) this.updateDirtectLight(); 
        if(this.ambientDirty)  this.updateAmbientLight();    
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
    }
    private updateAmbientLight(){
        if(this.ambientLight){
            let data=this.ambientLight.lightColor.toArray();
            this.ambientLightDataBuffer.update(0,data);
        }
    }
    private updateDirtectLight(){
        let data;
        this.dirtectLights.forEach((light)=>{
            data=light.lightColor.toArray().concat(light.dirtect.toArray());
        });
        this.dirtectLightDataBuffer.update(0,data);
        
    }
    private updateLightCount(){
        this.lightCountDataBuffer.update(0,this.spotLights.length);
        this.lightCountDataBuffer.update(1,this.pointLights.length);
        this.lightCountDataBuffer.update(2,(this.dirtectLights.length));
        this.lightCountDataBuffer.update(3,(this.ambientLight!=undefined?1:0));
    }
    
}