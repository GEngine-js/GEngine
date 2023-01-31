import { AmbientLight } from "../light/AmbientLight";
import { DirtectLight } from "../light/DirtectLight";
import { PointLight } from "../light/PointLight";
import { SpotLight } from "../light/SpotLight";
import { DirtectData, PointData, SpotData } from "../light/DataHelper";
import { FrameState } from "./FrameState";
import Vector3 from "../math/Vector3";

export default class LightManger {

    pointLights:PointLight[];

    spotLights:SpotLight[];

    dirtectLights:DirtectLight[];

    ambientLight:AmbientLight;

    ambientDirty:boolean;

    lightCountDirty:boolean;
    //ambient+lightCount
    commonLightBuffer:Float32Array;
    //pointLight
    pointLightsBuffer:Float32Array;

    spotLightsBuffer:Float32Array;

    dirtectLightsBuffer:Float32Array;
 
    ambient: Float32Array;

    lightCount: Uint32Array;

    pointDatas:WeakMap<PointLight,PointData>;

    spotDatas:WeakMap<SpotLight,SpotData>;

    dirtectDatas:WeakMap<DirtectLight,DirtectData>;

    totalByte:number;

    commonTatalByte:number;

    spotLightsByte:number;

    pointLightsByte:number;

    dirtectLightsByte:number;

    lightDefines:{
        ambientLight:boolean
        spotLight:boolean,
        pointLight:boolean,
        dirtectLight:boolean,
        spotLightBinding:number,
        pointLightBinding:number,
        dirtectLightBinding:number
    }


    constructor(){
        this.spotLights=[];
        this.pointLights=[];
        this.dirtectLights=[];
        this.spotDatas=new WeakMap();
        this.pointDatas=new WeakMap();
        this.dirtectDatas=new WeakMap();
        this.ambientLight=new AmbientLight(new Vector3(1,1,1),0.1);
        this.lightDefines={
            ambientLight:false,
            spotLight:false,
            pointLight:false,
            dirtectLight:false,
            spotLightBinding:1,
            pointLightBinding:2,
            dirtectLightBinding:3,
        }
        this.totalByte=0;
        this.lightCountDirty=true;

    }
    update(frameState:FrameState){
        this.updateLight(frameState);
        frameState.defines=this.lightDefines;
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
    private updateLight(frameState:FrameState){
        if(this.lightCountDirty){
            this.initBuffer();
        }
        this.updateLightData(frameState);
  
    }
    private updateLightData(frameState:FrameState){
        this.updateSpotLight(frameState);
        this.updatePointLight(frameState);
        this.updateDirtectLight(frameState); 
        this.updateAmbientLight(frameState);
        this.updateLightCount();  
    }
    private updateSpotLight(frameState:FrameState){
        this.spotLights.forEach((light)=>{
           const lightData=this.spotDatas.get(light);
           if(lightData)lightData.update(frameState);
        })
    }
    private updatePointLight(frameState:FrameState){
        this.pointLights.forEach((light)=>{
            const lightData=this.pointDatas.get(light);
            if(lightData)lightData.update(frameState);
         })
    }
    private updateAmbientLight(frameState:FrameState){
        if(this.ambientLight){
            this.ambient[0]=this.ambientLight.color.x;
            this.ambient[1]=this.ambientLight.color.y;
            this.ambient[2]=this.ambientLight.color.z;
        }      
    }
    private updateDirtectLight(frameState:FrameState){
        this.dirtectLights.forEach((light)=>{
            const lightData=this.dirtectDatas.get(light);
            if(lightData)lightData.update(frameState);
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
        const pointLightCountSize=pointLightCount*PointData.size;
        const spotLightCountSize=spotLightCount*SpotData.size;
        const dirtectLightCountSize=dirtectLightCount*DirtectData.size;
        let currentBinding=1;
                          
        //common
        if (ambientSize>0) {
            this.commonLightBuffer=new Float32Array(ambientSize+lightCount);
            this.commonTatalByte=0; 
            this.lightCount=new Uint32Array(this.commonLightBuffer.buffer,this.commonTatalByte,4);
            this.commonTatalByte+=16;    
            this.ambient=new Float32Array(this.commonLightBuffer.buffer,this.commonTatalByte,3);
            this.commonTatalByte+=16;  
            this.lightDefines.ambientLight=true;
        }else{
            this.commonLightBuffer=new Float32Array(lightCount);
            this.commonTatalByte=0;
            this.lightCount=new Uint32Array(this.commonLightBuffer.buffer,this.commonTatalByte,4);
            this.commonTatalByte+=16;
        }
        if (spotLightCountSize>0) {
            //初始化聚光灯
            this.spotLightsBuffer=new Float32Array(spotLightCountSize);
            this.spotLights.forEach((spotLight,i)=>{
                this.spotDatas.set(spotLight,new SpotData(this.spotLightsBuffer,SpotData.byteSize*i,spotLight))
            });
            this.spotLightsByte=spotLightCount*SpotData.byteSize;
            this.lightDefines.spotLight=true;
            this.lightDefines.spotLightBinding=currentBinding;
            currentBinding+=1;
        }
        if (pointLightCountSize>0) {
            //点光源
            this.pointLightsBuffer=new Float32Array(pointLightCountSize);
            this.pointLights.forEach((pointLight,i)=>{
            this.pointDatas.set(pointLight,new PointData(this.pointLightsBuffer,PointData.byteSize*i,pointLight))
            });      
            this.pointLightsByte=pointLightCount*PointData.byteSize; 
            this.lightDefines.pointLight=true;
            this.lightDefines.pointLightBinding=currentBinding;
            currentBinding+=1; 
        }
        if (dirtectLightCountSize) {
            //方向光
            this.dirtectLightsBuffer=new Float32Array(dirtectLightCountSize);
            this.dirtectLights.forEach((dirtect,i)=>{
                this.dirtectDatas.set(dirtect,new DirtectData(this.dirtectLightsBuffer,DirtectData.byteSize*i,dirtect))
            });
            this.dirtectLightsByte=dirtectLightCount*DirtectData.byteSize;
            this.lightDefines.dirtectLight=true;
            this.lightDefines.dirtectLightBinding=currentBinding;
        }       
    }
    
}