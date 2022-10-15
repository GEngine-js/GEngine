import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
  // base: "./",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    chunkSizeWarningLimit: 999999,
  },
});