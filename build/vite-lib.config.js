import { defineConfig } from "vite";
import { resolve } from "path";
const engineName=`calculate.js`
export default defineConfig({
  // 配置选项
  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/calculate.js"),
      name: "calculate",
      // the proper extensions will be added
      fileName: () => engineName,
      formats: ["umd"],
    },
    rollupOptions: {
        input:"src/calculate.js"
    },
  },
});