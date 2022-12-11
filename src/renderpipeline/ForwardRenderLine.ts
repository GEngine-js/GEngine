import CommandList from "../core/CommandList";
import Context from "../render/Context";
import DrawCommand from "../render/DrawCommand";
import Pass from "../pass/Pass";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";
import SkyBox from "../mesh/SkyBox";

export default class ForwardRenderLine implements IBaseRenderLine{
    private basicPass:BasicPass;
    private commandList:CommandList;
       constructor(public context:Context){
        this.basicPass=new BasicPass(context)
    }
    setSkyBox(skybox: SkyBox): void {
       this.basicPass.skyboxDrawComand=skybox.drawCommand;
    }
    setRenderList(commandList:CommandList){
        this.commandList=commandList
    }
    render() {
        this.basicPass.beforRender();
        this.basicPass.render(this.commandList);
        this.basicPass.afterRender();       
    }
    destroy(){
        this.basicPass=undefined;
    }
    
}