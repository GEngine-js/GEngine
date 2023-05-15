import { BindGroupEntityOptions } from "../core/WebGPUTypes";
export default class BindGroupEntity {
	binding: number;
	resource: GPUBindingResource;
	constructor(options: BindGroupEntityOptions) {
		this.binding = options.binding;
		this.resource = options.resource;
	}
	public getGPUGroupEntity() {
		return {
			binding: this.binding,
			resource: this.resource
		};
	}
}
