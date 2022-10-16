export default class UniformBuffer {
    gpuUniformBuffer: GPUBuffer;
    constructor() {
        this.gpuUniformBuffer=undefined;

    }
    private createBuffer(){}

    setSubData(uniformBuffer: DataBuffer, elements: FloatArray, offset?: number, count?: number): void {
        const buffer = dataBuffer.underlyingResource as GPUBuffer;

        byteLength = byteLength || src.byteLength;
        byteLength = Math.min(byteLength, dataBuffer.capacity - dstByteOffset);

        // After Migration to Canary
        let chunkStart = src.byteOffset + srcByteOffset;
        let chunkEnd = chunkStart + byteLength;

        // 4 bytes alignments for upload
        const alignedLength = (byteLength + 3) & ~3;
        if (alignedLength !== byteLength) {
            const tempView = new Uint8Array(src.buffer.slice(chunkStart, chunkEnd));
            src = new Uint8Array(alignedLength);
            (src as Uint8Array).set(tempView);
            srcByteOffset = 0;
            chunkStart = 0;
            chunkEnd = alignedLength;
            byteLength = alignedLength;
        }

        // Chunk
        const maxChunk = 1024 * 1024 * 15;
        let offset = 0;
        while (chunkEnd - (chunkStart + offset) > maxChunk) {
            this._device.queue.writeBuffer(buffer, dstByteOffset + offset, src.buffer, chunkStart + offset, maxChunk);
            offset += maxChunk;
        }

        this._device.queue.writeBuffer(buffer, dstByteOffset + offset, src.buffer, chunkStart + offset, byteLength - offset);
    };
    readDataFromBuffer(){}

}