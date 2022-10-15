import {defined} from "../utils/ObjectUtils.js";
import createTaskProcessorWorker from './CreateTaskProcessorWorker.js'
function createTestWorker1(parameters, transferableObjects){
   if(defined(parameters)){
      return {name:'lisi',age:23};
   }
   return {name:'lisi',age:23};
}
export default createTaskProcessorWorker(createTestWorker1);