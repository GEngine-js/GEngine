import { AmbientLight } from "../light/AmbientLight";
import { DirtectLight } from "../light/DirtectLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import DataBuffer from "../utils/DataBuffer";
import Manger from "./Manger";
import BindGroup from "../render/BindGroup";
import BindGroupLayout from "../render/BindGroupLayout";
import { DirtectData, PointData, SpotData } from "../light/DataHelper";

export default class LightManger extends Manger{

    pointLights:PointLight[];

    spotLights:SpotLight[];

    dirtectLights:DirtectLight[];

    ambientLight:AmbientLight;

    ambientDirty:boolean;

    lightCountDirty:boolean;

    globalLightsBuffer:Float32Array;

    ambient: Float32Array;

    lightCount: Uint32Array;

    pointDatas:WeakMap<PointLight,PointData>;

    spotDatas:WeakMap<SpotLight,SpotData>;

    dirtectDatas:WeakMap<DirtectLight,DirtectData>;

    constructor(){
        super();
        this.spotLights=[];
        this.pointLights=[];
        this.dirtectLights=[];
        this.spotDatas=new WeakMap();
        this.pointDatas=new WeakMap();
        this.dirtectDatas=new WeakMap();
        this.ambientLight=undefined;
        this.globalLightsBuffer=undefined;
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
        if(this.lightCountDirty||!this.globalLightsBuffer){
            this.initBuffer();
        }
        this.updateLightData();
  
    }
    private updateLightData(){
        this.updateSpotLight();
        this.updatePointLight();
        this.updateDirtectLight(); 
        this.updateAmbientLight();
        this.updateLightCount();  
    }
    private updateSpotLight(){
        this.spotLights.forEach((light)=>{
           const lightData=this.spotDatas.get(light);
           if(lightData)lightData.update();
        })
    }
    private updatePointLight(){
        this.pointLights.forEach((light)=>{
            const lightData=this.pointDatas.get(light);
            if(lightData)lightData.update();
         })
    }
    private updateAmbientLight(){
        if(this.ambientLight){
            this.ambient[0]=this.ambientLight.color.x;
            this.ambient[1]=this.ambientLight.color.y;
            this.ambient[2]=this.ambientLight.color.z;
        }
         
    }
    private updateDirtectLight(){
        this.dirtectLights.forEach((light)=>{
            const lightData=this.dirtectDatas.get(light);
            if(lightData)lightData.update();
         })     
    }
    private updateLightCount(){
        if (this.lightCountDirty) {
            this.lightCount[0]=this.spotLights.length;
            this.lightCount[1]=this.pointLights.length;
            this.lightCount[2]=this.dirtectLights.length;
            this.lightCount[3]=this.ambient!=undefined?1:0; 
        }
    }
    private initBuffer(){
        const ambientSize=this.ambientLight!=undefined?3:0;
        const lightCount=4;
        const pointLightCount=this.pointLights.length;
        const spotLightCount=this.spotLights.length;
        const dirtectLightCount=this.dirtectLights.length;
        this.globalLightsBuffer=new Float32Array(ambientSize+lightCount+pointLightCount+spotLightCount+dirtectLightCount);
        this.ambient=new Float32Array(this.globalLightsBuffer.buffer,0,3);
        this.lightCount=new Uint32Array(this.globalLightsBuffer.buffer,12,4);
        let currentByteSize=28
        //初始化聚光灯
        this.spotLights.forEach((spotLight,i)=>{
            this.spotDatas.set(spotLight,new SpotData(this.globalLightsBuffer,currentByteSize+SpotData.byteSize*i,spotLight))
        });
        currentByteSize+=this.spotLights.length*SpotData.byteSize;

        this.pointLights.forEach((pointLight,i)=>{
           this.pointDatas.set(pointLight,new PointData(this.globalLightsBuffer,currentByteSize+PointData.byteSize*i,pointLight))
        });
        currentByteSize+=this.pointLights.length*PointData.byteSize;

        this.dirtectLights.forEach((dirtect,i)=>{
            this.dirtectDatas.set(dirtect,new DirtectData(this.globalLightsBuffer,currentByteSize+DirtectData.byteSize*i,dirtect))
        })
        
    }
    
}