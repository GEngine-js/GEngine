export  default class DataBuffer{
    data: any[];
    constructor(){
      this.data=new Array();
    }
    setData(uniform){
        const preDataLength=this.data.length;
        this.data=this.data.concat(uniform.data);
        return preDataLength
    }
    deleteData(uniform){
        this.data.splice(uniform.offset,uniform.length)
    }
    destory(){
        this.data=null;
    }
}