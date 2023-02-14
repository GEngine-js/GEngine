import path from "path";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";
import { fileURLToPath } from "url";

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

	plugins: [
		ts(),
		commonjs(),
		livereload(),
		production ? terser() : null,
		production ? null : sourcemaps()
		// serve({
		//   open: true,
		//   port: 8080,
		//   openPage: "/public/index.html"
		// }),
	]
};
