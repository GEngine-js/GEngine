import Buffer from "./Buffer";
const queryIndex=0
export default class QuerySet {
    gpuQuerySet: GPUQuerySet;
    queryBuffer: Buffer;
    nextPickColor: Uint32Array;
    constructor(public device: GPUDevice, public querySetDescriptor: GPUQuerySetDescriptor) {
        this.device.createQuerySet(querySetDescriptor);
        this.nextPickColor = new Uint32Array(1);

    }
    getQuerySetResult() {
        if (!this.queryBuffer) {
            // this.queryBuffer = device.createBuffer({
            //     size: 8*NUM_SPHERES,//因为查询结果都是Uint64，需要八个字节，NUM_SPHERES数量必须与查询的数量一致
            //     usage: GPUBufferUsage.QUERY_RESOLVE| GPUBufferUsage.COPY_SRC,
            // });
            this.queryBuffer = Buffer.create(this.device, GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC, null, this.querySetDescriptor.count * 8)
        }

    }
    beginQuery(){

    }
    endQuery(){

    }
    getQueryIndex(){
        ++this.nextPickColor[0];
        const key = this.nextPickColor[0];
        if (key === 0) {
          // In case of overflow
          throw new Error("Out of QueryIndex.");
        }
        return key;
    }
    //6、获取查询结果
//     commandEncoder.resolveQuerySet(queryset,0, NUM_SPHERES, queryBuffer,0);
//     commandEncoder.copyBufferToBuffer(
//         queryBuffer /* source buffer */,
//       0 /* source offset */,
//         gpuReadBuffer /* destination buffer */,
//       0 /* destination offset */,
//       8*NUM_SPHERES/* size */
//     );
//   // } 
//     // Read buffer.
//    await gpuReadBuffer.mapAsync(GPUMapMode.READ);
//     const copyArrayBuffer = gpuReadBuffer.getMappedRange();
//     var array = new BigUint64Array(copyArrayBuffer).slice();
//     gpuReadBuffer.unmap();
}