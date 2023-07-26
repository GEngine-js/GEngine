import path from "path";
import terser from "@rollup/plugin-terser";
import ts from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { fileURLToPath } from "url";
import wgsl from "./build/@rollup/plugin-wgsl/index.js";

const { BUILD, BABEL } = process.env;
const production = BUILD === "production";
const useBabel = BABEL === "true";

export default {
	input: "./src/index.ts",
	output: {
		file: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./dist/index.js"),
		sourcemap: production ? false : "inline",
		format: "es",
		name: "index"
	},
	watch: production
		? false
		: {
				exclude: "node_modules/**"
		  },
	plugins: [ts(), wgsl(), commonjs({ ignoreGlobal: true }), production ? terser() : null]
};
