/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-12-10 20:02:44
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-07 14:58:08
 * @FilePath: \GEngine\src\mesh\SkyBox.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FrameState } from "../core/FrameState";
import { PrimitiveTopology} from "../core/WebGPUConstant";
import SkyBoxGeometry from "../geometry/SkyBoxGeometry";
import SkyBoxMaterial from "../material/SkyBoxMaterial";
import DrawCommand from "../render/DrawCommand";
import Pipeline from "../render/Pipeline";
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
        if(!this.drawCommand) this.createDrawComand(frameState);
        frameState.commandList.opaque.push(this.drawCommand);
    }
    private createDrawComand(frameState: FrameState) {
        this.drawCommand = new DrawCommand({
            vertexBuffers: this.geometry.vertexBuffers,
            indexBuffer: this.geometry.indexBuffer,
            indexFormat: this.geometry.stripIndexFormat,
            shaderData:this.material.shaderData,
            instances: 1,
            count: this.geometry.count,
            renderState:this.material.renderState,
            topology:PrimitiveTopology.TriangleList,
            shaderSource:this.material.shaderSource,
            type:'render',
            materialType:this.material.type  ,
            onwer:this      
        });
    };
}