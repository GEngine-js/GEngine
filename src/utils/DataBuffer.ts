export  default class DataBuffer{
    data: number[];
    constructor(){
      this.data=new Array();
    }
    get length(){
        return this.data.length;
    }
    toFloat32Array(){
        return new Float32Array(this.data)
    }
    set(data){
        const preDataLength=this.data.length;
        this.data=this.data.concat(data);
        return preDataLength
    }
    update(offset,data){
     if (Array.isArray(data)) {
        this.data.splice(offset,...data)
     } else {
        this.data.splice(offset,data)
     }
      
    }
    delete(offset,length){
        this.data.splice(offset,length)
    }
    destory(){
        this.data=null;
    }
}