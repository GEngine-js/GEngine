/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-12-10 20:02:44
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-11 16:35:01
 * @FilePath: \GEngine\src\mesh\SkyBox.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FrameState } from "../core/FrameState";
import SkyBoxGeometry from "../geometry/SkyBoxGeometry";
import SkyBoxMaterial from "../material/SkyBoxMaterial";
import { Mesh } from "./Mesh";
export default class SkyBox extends Mesh {
    type:string;
    material: SkyBoxMaterial;
    isSkyBox:boolean
    constructor(urls?:Array<string>) {
        super();
        this.distanceToCamera=10;
        this.material=new SkyBoxMaterial();
        if(urls) this.material.loadTexture(urls);
        this.geometry=new SkyBoxGeometry();
        this.isSkyBox=true;
    }

    update(frameState: FrameState){
        this.updateMatrix();
        this.geometry.update(frameState);
        this.material.update(frameState,this);
        frameState.renderQueue.preRender.push(this);
    }
}