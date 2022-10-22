import DrawCommand from "../render/DrawCommand";

export default class CommandList{
   public opaque:Array<DrawCommand>;
   public transparent:Array<DrawCommand>;
   constructor(){
      this.opaque=[];
      this.transparent=[];
   }
   get opaqueLength(){
     return this.opaque.length;
   }
   get transparentLenght(){
    return this.transparent.length;
   }
   reset(){
    this.opaque=[];
    this.transparent=[];
   }
   //according to camera distance
   sort(){}
}