import Context from "../render/Context";
import DrawCommand from "../render/DrawCommand";
import Pass from "../render/Pass";
import { BasicPass } from "./BasicPass";
import IBaseRenderLine from "./IBaseRenderLine";

export default class ForwardRenderLine implements IBaseRenderLine{
    private passList:Pass[];
    private opaque: DrawCommand[];
    private transparent: DrawCommand[];
       constructor(public context:Context){
       this.passList.push(new BasicPass(context))
    }
    setRenderList(options:{opaque: DrawCommand[],transparent: DrawCommand[]}){
      this.opaque=options.opaque;
      this.transparent=options.transparent;
      //.......

    }
    addPass(){}
    render() {
        this.passList.forEach((pass)=>{
             pass.render(this.opaque,this.transparent);
        });       
    }
    destory(){}
    
}