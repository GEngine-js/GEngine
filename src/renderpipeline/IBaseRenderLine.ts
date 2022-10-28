import DrawCommand from "../render/DrawCommand"

export default interface IBaseRenderLine{
   render():void
   setRenderList(options:{opaque: DrawCommand[],transparent: DrawCommand[]):void
}