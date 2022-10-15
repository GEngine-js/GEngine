import {defined} from "../utils/ObjectUtils.js";
import createTaskProcessorWorker from './CreateTaskProcessorWorker.js'
function createTestWorker(parameters, transferableObjects){
   if(defined(parameters)){
      return {name:'wangwu',age:21};
   }
   return {name:'lisi',age:23};
}
export default createTaskProcessorWorker(createTestWorker);