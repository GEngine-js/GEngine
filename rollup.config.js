/*
 * @Author: junwei.gu junwei.gu@jiduauto.com
 * @Date: 2023-01-17 17:11:31
 * @LastEditors: junwei.gu junwei.gu@jiduauto.com
 * @LastEditTime: 2023-01-17 17:12:16
 * @FilePath: \GEngine\rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from "path"
import livereload from "rollup-plugin-livereload"
import serve from "rollup-plugin-serve"
import { terser } from "rollup-plugin-terser"
import ts from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';
import { fileURLToPath } from 'url'
 
export default {
  input: "./src/index.ts", 
  output: {
    file: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./dist/index.js"),
    sourcemap: false,
    format: "es",
    name:'index' 
  },
 
  plugins: [
    ts(),
    livereload(),
    commonjs()
    // terser(),
    // serve({
    //   open: true,
    //   port: 8080,
    //   openPage: "/public/index.html"
    // }),
    
  ]
}