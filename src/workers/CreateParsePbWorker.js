import createTaskProcessorWorker from './CreateTaskProcessorWorker.js';
import protobuf  from '../wokerUtils/protobuf.js';
async function createParsePbWorker(parameters, transferableObjects){
        let testURl=CESIUM_BASE_URL+'workers/sim_world_proto_bundle.json';
       const result=await fetch(testURl).then((re)=>{return re.json();});
       const simWorldRoot =protobuf.Root.fromJSON(
         result,
       );
       const SimWorldMessage = simWorldRoot.lookupType('apollo.dreamview.SimulationWorld');
       debugger
       return SimWorldMessage
}
export default createTaskProcessorWorker(createParsePbWorker);