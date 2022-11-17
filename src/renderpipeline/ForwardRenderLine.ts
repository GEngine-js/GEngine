import CommandList from "../core/CommandList";
import Context from "../render/Context";
import DrawCommand from "../render/DrawCommand";
import Pass from "../pass/Pass";
import { BasicPass } from "../pass/BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";

export default class ForwardRenderLine implements IBaseRenderLine{
    private passList:Pass[];;
    private commandList:CommandList;
       constructor(public context:Context){
       this.passList=[];
       this.passList.push(new BasicPass(context))
    }
    setRenderList(commandList:CommandList){
        this.commandList=commandList
    }
    addPass(){}
    render() {
        this.passList.forEach((pass)=>{
             pass.beforRender();
             pass.render(this.commandList);
             pass.afterRender();
        });       
    }
    destroy(){
        this.passList=[];
    }
    
}