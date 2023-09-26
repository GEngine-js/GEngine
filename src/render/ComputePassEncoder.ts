export class ComputePassEncoder {
	public device: GPUDevice;
	public commandEncoder: GPUCommandEncoder | null;
	private computeEncoder: GPUComputePassEncoder;
	constructor() {
		this.device = null;
		this.computeEncoder = null;
	}
	public beginComputePassEncoder(device: GPUDevice) {
		if (!this.device) this.device = device;
		this.commandEncoder = this.device.createCommandEncoder();
		this.computeEncoder = this.commandEncoder.beginComputePass();
		return this.computeEncoder;
	}
	public endComputePassEncoder() {
		this.computeEncoder?.end();
		this.device.queue.submit([this.commandEncoder.finish()]);
		this.commandEncoder = null;
	}
	public destroy() {
		this.device = null;
		this.computeEncoder = null;
		this.commandEncoder = null;
	}
}
