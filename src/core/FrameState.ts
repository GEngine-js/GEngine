/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-19 14:32:11
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-11 18:02:34
 * @FilePath: \GEngine\src\core\FrameState.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PerspectiveCamera from "../camera/PerspectiveCamera";
import Context from "../render/Context";
import Pass from "../pass/Pass";
import combine from "../utils/combine";
import CullingVolume from "./CullingVolume";
import Texture from "../render/Texture";
import RenderQueue from "./RenderQueue";
export class FrameState{
    public pass:Pass;
    public camera:PerspectiveCamera;
    public renderQueue:RenderQueue;
    public drawCallnums:number;
    public geometryMemory:number;
    public textureMemory:number;
    public frameNumber:number;
    public cullingVolume:CullingVolume;
    public definesDirty:boolean;
    public viewport:{ x: number; y: number; width: number; height: number; };
    public environment:Texture;
    private _defines:{};
    constructor(public context:Context){
       this.renderQueue=new RenderQueue();
       this.geometryMemory=0;
       this.textureMemory=0;
       this.frameNumber=0;
       this._defines={};
       this.definesDirty=true;
       this.environment=undefined;
    }
    get defines(){
        return this._defines;
    }
    set defines(value){
        this.definesDirty=true;
        this._defines=combine(value,this._defines,false)
    }
    update(camera:PerspectiveCamera){
        if(this.environment) this.environment.update(this.context)
        this.camera=camera;
        this.renderQueue.reset();
        this.cullingVolume=this.camera.getCullingVolume();
        this.frameNumber+=1
    }
}