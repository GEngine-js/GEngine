import CommandList from "../core/CommandList"
import DrawCommand from "../render/DrawCommand"

export default interface IBaseRenderLine{
   render():void
   setRenderList(commandList:CommandList):void
}