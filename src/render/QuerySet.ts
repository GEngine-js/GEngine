import Buffer from "./Buffer";
const queryIndex = 0;
export default class QuerySet {
	gpuQuerySet: GPUQuerySet;
	queryBuffer: Buffer;
	nextQueryIndex: Uint32Array;
	readBuffer: Buffer;
	constructor(public device: GPUDevice, public querySetDescriptor: GPUQuerySetDescriptor) {
		this.gpuQuerySet = this.device.createQuerySet(querySetDescriptor);
		this.nextQueryIndex = new Uint32Array(1);
		this.queryBuffer = Buffer.create(
			"querySave",
			this.device,
			GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
			null,
			this.querySetDescriptor.count * 8
		);
		this.readBuffer = Buffer.create(
			"queryRead",
			this.device,
			GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
			null,
			this.querySetDescriptor.count * 8
		);
	}
	private async getReadBuffer() {
		const commandEncoder = this.device.createCommandEncoder();
		// 因为查询结果都是Uint64，需要八个字节，NUM_SPHERES数量必须与查询的数量一致
		commandEncoder.resolveQuerySet(this.gpuQuerySet, 0, this.nextQueryIndex[0], this.queryBuffer.gpuBuffer, 0);
		commandEncoder.copyBufferToBuffer(
			this.queryBuffer.gpuBuffer,
			0,
			this.readBuffer.gpuBuffer,
			0,
			8 * this.nextQueryIndex[0]
		);
		this.device.queue.submit([commandEncoder.finish()]);
	}
	public async getQuerySetResult() {
		this.getReadBuffer();
		await this.readBuffer.gpuBuffer.mapAsync(GPUMapMode.READ);
		const copyArrayBuffer = this.readBuffer.gpuBuffer.getMappedRange();
		const array = new BigUint64Array(copyArrayBuffer).slice();
		this.readBuffer.gpuBuffer.unmap();
		return array;
	}
	beginQuery(renderPass: GPURenderPassEncoder) {
		renderPass.beginOcclusionQuery(queryIndex);
	}
	endQuery(renderPass: GPURenderPassEncoder) {
		renderPass.endOcclusionQuery();
	}
	getQueryIndex() {
		++this.nextQueryIndex[0];
		const key = this.nextQueryIndex[0];
		if (key === 0) {
			// In case of overflow
			throw new Error("Out of QueryIndex.");
		}
		return key;
	}
	destroy() {
		this.gpuQuerySet.destroy();
		this.queryBuffer.destroy();
		this.readBuffer.destroy();
	}
}
