// https://github.com/c8n1ao/rollup-plugin-wgsl
import { readFile } from "node:fs/promises";

export default function wgsl(options) {
	options = {
		...{ fileTypes: ["wgsl", "glsl"] }, //["frag", "vert", "wgsl", "glsl"]
		...options
	};

	return {
		name: "wgsl",

		async load(id) {
			const isTargetSuffix = options.fileTypes.some((type) => id.endsWith(`.${type}`));

			if (isTargetSuffix) {
				const code = await readFile(id, "utf-8");
				return `export default ${JSON.stringify(code)};`;
			}
		}
	};
}
