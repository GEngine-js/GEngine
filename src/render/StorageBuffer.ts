import Buffer from './Buffer';
import Context from './Context';
export default class StorageBuffer extends Buffer{
    constructor(device: GPUDevice, usage: GPUBufferUsageFlags, size?: number,){
        super(device,usage,undefined,size)
    }
    readBuffer(){
        // size = size || storageBuffer.capacity;

        // const gpuBuffer = this._bufferManager.createRawBuffer(size, WebGPUConstants.BufferUsage.MapRead | WebGPUConstants.BufferUsage.CopyDst);
    
        // this._renderTargetEncoder.copyBufferToBuffer(storageBuffer.underlyingResource, offset ?? 0, gpuBuffer, 0, size);
    
        // return new Promise((resolve, reject) => {
        //     // we are using onEndFrameObservable because we need to map the gpuBuffer AFTER the command buffers
        //     // have been submitted, else we get the error: "Buffer used in a submit while mapped"
        //     this.onEndFrameObservable.addOnce(() => {
        //         gpuBuffer.mapAsync(WebGPUConstants.MapMode.Read, 0, size).then(
        //             () => {
        //                 const copyArrayBuffer = gpuBuffer.getMappedRange(0, size);
        //                 let data: ArrayBufferView | undefined = buffer;
        //                 if (data === undefined) {
        //                     data = new Uint8Array(size!);
        //                     (data as Uint8Array).set(new Uint8Array(copyArrayBuffer));
        //                 } else {
        //                     const ctor = data.constructor as any; // we want to create result data with the same type as buffer (Uint8Array, Float32Array, ...)
        //                     data = new ctor(data.buffer);
        //                     (data as any).set(new ctor(copyArrayBuffer));
        //                 }
        //                 gpuBuffer.unmap();
        //                 this._bufferManager.releaseBuffer(gpuBuffer);
        //                 resolve(data!);
        //             },
        //             (reason) => reject(reason)
        //         );
        //     });
        // });
    }
}