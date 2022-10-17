import defined from "../utils/defined";
import createTaskProcessorWorker from './CreateTaskProcessorWorker'
function createTestWorker1(parameters, transferableObjects){
   if(defined(parameters)){
      return {name:'lisi',age:23};
   }
   return {name:'lisi',age:23};
}
export default createTaskProcessorWorker(createTestWorker1);