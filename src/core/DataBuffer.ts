export  default class DataBuffer{
    data: any[];
    constructor(){
      this.data=new Array();
    }
    set(data){
        const preDataLength=this.data.length;
        this.data=this.data.concat(data);
        return preDataLength
    }
    update(offset,data){
      this.data.splice(offset,...data)
    }
    delete(offset,length){
        this.data.splice(offset,length)
    }
    destory(){
        this.data=null;
    }
}