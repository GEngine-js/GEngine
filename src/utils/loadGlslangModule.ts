export async function loadGlslangModule(): Promise<any> {
	// @ts-ignore
	const glslangModule = await import("https://unpkg.com/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js");
	const glslang = await glslangModule.default();
	return glslang;
}
