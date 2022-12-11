import CommandList from "../core/CommandList"
import SkyBox from "../mesh/SkyBox";
import DrawCommand from "../render/DrawCommand"

export default interface IBaseRenderLine{
   render():void
   setRenderList(commandList:CommandList):void
   setSkyBox(skybox:SkyBox):void;
}