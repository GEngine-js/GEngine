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

    dirtectLight:DirtectLight;

    ambientLight:AmbientLight;

    pointLightDataBuffer:DataBuffer;

    spotLightDataBuffer:DataBuffer;

    dirAndambLightDataBuffer:DataBuffer;

    lightCountDataBuffer:DataBuffer;

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
    update(){
        this.updateLight()
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
    private updateDirAndAmbLight(){
        let data=this.ambientLight.lightColor.toArray()
         .concat(this.dirtectLight.lightColor.toArray())
         .concat(this.dirtectLight.dirtect.toArray());
        this.dirAndambLightDataBuffer.update(0,data);
    }
    private updateLightCount(){
        this.lightCountDataBuffer.update(0,this.spotLights.length);
        this.lightCountDataBuffer.update(1,this.pointLights.length);
        this.lightCountDataBuffer.update(2,(this.dirtectLight!=undefined?1:0));
        this.lightCountDataBuffer.update(3,(this.ambientLight!=undefined?1:0));
    }
    
}