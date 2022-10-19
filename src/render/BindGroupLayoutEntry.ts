import {BindGroupLayoutEntryType} from '../core/WebGPUTypes';
export default class BindGroupLayoutEntry{    
     BindGroupLayoutEntry: BindGroupLayoutEntryType;
     constructor(options:BindGroupLayoutEntryType){
         this.BindGroupLayoutEntry=options
     }
     updateUniform(){}
}