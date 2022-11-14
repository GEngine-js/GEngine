import CommandList from "../core/CommandList"
import DrawCommand from "./DrawCommand"

export default interface IPass{
    render?(opaque:CommandList,transparent:CommandList):void;
    render?(commands:DrawCommand[]):void;
}