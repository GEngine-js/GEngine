import defined from "../utils/defined";
import createTaskProcessorWorker from './CreateTaskProcessorWorker'
function createTestWorker(parameters, transferableObjects){
   if(defined(parameters)){
      return {name:'wangwu',age:21};
   }
   return {name:'lisi',age:23};
}
export default createTaskProcessorWorker(createTestWorker);