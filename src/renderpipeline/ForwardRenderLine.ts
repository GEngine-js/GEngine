/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2022-10-26 19:08:43
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-10 18:37:11
 * @FilePath: \GEngine\src\renderpipeline\ForwardRenderLine.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Context from "../render/Context";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import { FrameState } from "../core/FrameState";

export default class ForwardRenderLine implements IBaseRenderLine{
    private basicPass:BasicPass;
       constructor(public context:Context){
        this.basicPass=new BasicPass(context)
    }
    render(frameState:FrameState) {
        this.basicPass.beforRender();
        this.basicPass.render(frameState.renderQueue);
        this.basicPass.afterRender();       
    }
    destroy(){
        this.basicPass=undefined;
    }
    
}