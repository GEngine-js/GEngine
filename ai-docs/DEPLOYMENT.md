# GEngine — 构建与发布

## 目录

1. [构建产物](#构建产物)
2. [构建命令](#构建命令)
3. [Rollup 配置说明](#rollup-配置说明)
4. [发布到 npm](#发布到-npm)
5. [在项目中引用](#在项目中引用)

---

## 构建产物

```
dist/
└── index.js    ← 单文件 ES Module，压缩后约 xxx KB
```

| 属性 | 值 |
|------|---|
| 格式 | ES Module (`type: "module"`) |
| 目标 | ES2020 |
| 外部依赖 | 无（WGSL 着色器内联） |
| Source Map | 开发模式输出，生产模式不输出 |

---

## 构建命令

```shell
# 生产构建（压缩 + Tree-shaking）
yarn build

# 开发构建（带 watch，不压缩）
yarn dev
```

构建前会自动执行 `hooks/checkDependency.js`，校验必要依赖是否已安装。

---

## Rollup 配置说明

**文件**：[rollup.config.js](../rollup.config.js)

| 配置项 | 值 | 说明 |
|--------|----|------|
| `input` | `src/index.ts` | 入口文件 |
| `output.file` | `dist/index.js` | 输出文件 |
| `output.format` | `es` | ES Module 格式 |
| TypeScript | `@rollup/plugin-typescript` | TS 编译 |
| WGSL | 自定义 WGSL 插件 | `.wgsl` → JS 字符串 |
| CommonJS | `@rollup/plugin-commonjs` | CJS 依赖兼容 |
| Terser | `@rollup/plugin-terser` | 仅生产环境压缩 |

**WGSL 着色器插件**：位于 `build/@rollup/plugin-wgsl/`，将 `.wgsl` 文件作为字符串导入，并在构建时内联到 `dist/index.js` 中，无需运行时加载。

---

## 发布到 npm

```shell
# 1. 确认版本号（package.json）
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0

# 2. 构建
yarn build

# 3. 发布（需要 npm 登录且有包权限）
npm publish --access public
```

`package.json` 中 `files` 字段控制发布内容：
```json
{
  "files": ["dist", "package.json", "README.md"]
}
```

---

## 在项目中引用

### CDN（无构建工具）

```html
<script type="module">
  // 从 dist/ 目录本地引用
  import { Scene, Mesh } from "./dist/index.js";
</script>
```

### npm 安装

```shell
npm install @gengine-js/gengine
```

```javascript
import { Scene, Mesh, PerspectiveCamera } from "@gengine-js/gengine";
```

### Vite / Webpack 项目

直接 import，构建工具会自动处理 ES Module：

```typescript
import {
  Scene,
  Mesh,
  PerspectiveCamera,
  BlinnPhongMaterial,
  BoxGeometry
} from "@gengine-js/gengine";
```
