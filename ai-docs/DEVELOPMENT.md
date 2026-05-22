# GEngine — 开发指南

## 目录

1. [环境要求](#环境要求)
2. [本地开发搭建](#本地开发搭建)
3. [项目脚本](#项目脚本)
4. [开发服务器](#开发服务器)
5. [项目结构约定](#项目结构约定)
6. [添加新功能的典型流程](#添加新功能的典型流程)
   - [添加新几何体](#添加新几何体)
   - [添加新材质](#添加新材质)
   - [添加自定义着色器](#添加自定义着色器)
   - [添加新的后处理效果](#添加新的后处理效果)
7. [代码规范](#代码规范)
8. [调试技巧](#调试技巧)
9. [常见问题](#常见问题)

---

## 环境要求

| 依赖 | 版本要求 | 说明 |
|------|---------|------|
| Node.js | ≥ 16 | 构建工具运行环境 |
| 浏览器 | Chrome 113+ / Edge 113+ | 需支持 WebGPU |
| 操作系统 | 任意 | 无特殊限制 |

> **注意**：WebGPU 目前需要在支持的浏览器中开启，Chrome/Edge 113+ 已默认启用。Firefox 和 Safari 仍需手动开启实验性标志。

---

## 本地开发搭建

```shell
# 1. 克隆仓库
git clone https://github.com/hpugis/GEngine.git
cd GEngine

# 2. 安装依赖（推荐使用国内镜像）
yarn install --registry=https://registry.npmmirror.com
# 或
npm run install:yarn

# 3. 启动开发服务器（带 watch）
yarn dev

# 4. 在浏览器打开示例
# 直接用 VS Code Live Server 或 http-server 打开 example/ 目录下的 HTML 文件
```

---

## 项目脚本

| 命令 | 说明 |
|------|------|
| `yarn dev` | 开发模式：TypeScript 增量编译 + 文件监听，输出到 `dist/index.js` |
| `yarn build` | 生产构建：压缩 + Tree-shaking，输出到 `dist/index.js` |
| `yarn lint` | ESLint 检查 `src/` 下的 TS/JS 文件 |
| `yarn commit` | 使用 commitizen 规范化 Git 提交 |
| `yarn pretty-quick` | 格式化已暂存文件（Prettier） |

### 构建流程

```
yarn build
  ├── npm run pre-build       ← 检查依赖（hooks/checkDependency.js）
  └── rollup -c               ← rollup.config.js
       ├── 读取 src/index.ts
       ├── TypeScript 编译（tsconfig.json）
       ├── 加载 .wgsl 着色器文件（自定义 rollup 插件）
       ├── CommonJS 兼容处理
       └── Terser 压缩（仅 production）
       → 输出 dist/index.js（ES Module）
```

---

## 开发服务器

Rollup watch 模式只负责编译，不提供 HTTP 服务器。可用以下方式预览示例：

```shell
# 方案一：VS Code Live Server 插件（推荐）
# 在 example/ 目录右键 → Open with Live Server

# 方案二：npx
npx serve .

# 方案三：http-server
npm install -g http-server
http-server . -p 8080
```

然后访问 `http://localhost:8080/example/mesh/mesh.html` 等示例页面。

---

## 项目结构约定

### 文件命名

| 类型 | 规范 | 示例 |
|------|------|------|
| 类文件 | PascalCase | `BlinnPhongMaterial.ts` |
| 工具文件 | camelCase | `utils.ts` |
| WGSL 着色器 | camelCase | `phongFrag.wgsl` |
| 示例文件 | camelCase | `pointLight.html` |

### 模块边界

- `src/render/` — 仅处理 WebGPU 原语（Buffer、Texture、Pipeline…），不包含业务逻辑
- `src/core/` — 引擎框架基础设施（FrameState、RenderQueue、DerivedCommands…）
- `src/material/`、`src/geometry/`、`src/mesh/` — 业务层对象
- `src/shader/` — WGSL 着色器源码与编译
- `src/math/` — 纯数学，无 WebGPU 依赖
- `src/index.ts` — 唯一公共出口，按需 `export`

---

## 添加新功能的典型流程

### 添加新几何体

1. 在 `src/geometry/` 新建 `XxxGeometry.ts`
2. 继承 `Geometry` 基类，在构造函数中调用 `setAttribute()` 和 `setIndice()`
3. 根据需要调用 `calculateTangents()`
4. 在 `src/index.ts` 追加导出

```typescript
// src/geometry/CylinderGeometry.ts
import Geometry from "./Geometry";
import { Float32Attribute } from "../core/WebGPUTypes";

export default class CylinderGeometry extends Geometry {
  constructor(
    radiusTop = 1,
    radiusBottom = 1,
    height = 1,
    radialSegments = 32
  ) {
    super();
    const { positions, normals, uvs, indices } = buildCylinder(
      radiusTop, radiusBottom, height, radialSegments
    );
    this.setAttribute(new Float32Attribute("position", positions, 3));
    this.setAttribute(new Float32Attribute("normal", normals, 3));
    this.setAttribute(new Float32Attribute("uv", uvs, 2));
    this.setIndice(indices);
    this.calculateTangents();
  }
}
```

---

### 添加新材质

1. 在 `src/material/` 新建 `XxxMaterial.ts`
2. 继承 `Material` 基类
3. 在 `src/shader/Shaders.ts` 注册对应 WGSL 着色器
4. 在 `update()` 方法中同步 GPU Uniform

```typescript
// src/material/XxxMaterial.ts
import Material from "./Material";

export default class XxxMaterial extends Material {
  private _customParam: number = 1.0;

  constructor() {
    super();
    this.shaderSource.shaderId = "xxx";  // 映射到 Shaders.ts 中的键
    this.light = true;
  }

  set customParam(v: number) {
    this._customParam = v;
    this.shaderData.setFloat("customParam", v);
  }

  update(frameState, mesh) {
    super.update(frameState, mesh);
    // 更新动态 Uniform
  }
}
```

---

### 添加自定义着色器

使用 `ShaderMaterial` 直接注入自定义 WGSL：

```typescript
import { ShaderMaterial, Mesh, BoxGeometry } from "@gengine-js/gengine";

const mat = new ShaderMaterial({
  shaderId: "myEffect",
  vertexShader: `
    struct VertexInput {
      @location(0) position: vec3f,
      @location(1) uv: vec2f,
    };
    struct VertexOutput {
      @builtin(position) pos: vec4f,
      @location(0) uv: vec2f,
    };
    @group(0) @binding(0) var<uniform> model: mat4x4f;
    @group(1) @binding(0) var<uniform> view: mat4x4f;
    @group(1) @binding(1) var<uniform> projection: mat4x4f;

    @vertex
    fn main(input: VertexInput) -> VertexOutput {
      var out: VertexOutput;
      out.pos = projection * view * model * vec4f(input.position, 1.0);
      out.uv = input.uv;
      return out;
    }
  `,
  fragmentShader: `
    @group(0) @binding(1) var baseTexture: texture_2d<f32>;
    @group(0) @binding(2) var baseSampler: sampler;
    @group(0) @binding(3) var<uniform> time: f32;

    @fragment
    fn main(@location(0) uv: vec2f) -> @location(0) vec4f {
      let color = textureSample(baseTexture, baseSampler, uv);
      return color * abs(sin(time));
    }
  `,
  uniforms: {
    time: { value: 0.0 }
  }
});

// 每帧更新
function animate() {
  mat.setUniform("time", performance.now() / 1000);
  scene.render();
  requestAnimationFrame(animate);
}
```

---

### 添加新的后处理效果

1. 在 `src/post-process/` 新建 `XxxPostEffect.ts`
2. 继承 `PostEffect`，实现 `render()` 方法
3. 在 `src/index.ts` 导出

```typescript
// src/post-process/GrayscalePostEffect.ts
import PostEffect from "./PostEffect";
import { Texture } from "../render/Texture";

export default class GrayscalePostEffect extends PostEffect {
  render(context, inputTexture: Texture): Texture {
    // 1. 在 fullScreenQuad 上绘制灰度着色器
    // 2. 返回输出纹理
    return this.currentRenderTarget.getColorTexture(0);
  }
}

// 使用
const grayscale = new GrayscalePostEffect(width, height);
scene.addPostEffect(grayscale);
```

---

## 代码规范

### TypeScript

- 使用 `strict: true` 模式（已在 `tsconfig.json` 配置）
- 公共 API 必须有明确的类型声明，避免 `any`
- 枚举值统一定义在 `src/core/WebGPUConstant.ts`

### 提交信息

使用 Conventional Commits 规范（由 `commitlint` 强制检查）：

```
feat: 添加 CylinderGeometry 几何体
fix: 修复点光源阴影贴图 UV 偏移
docs: 更新 API 文档
refactor: 重构 ShaderData 绑定逻辑
perf: 优化 Pipeline 缓存 Key 生成
test: 添加 Matrix4.compose 单元测试
```

### WGSL 着色器

- 着色器文件放在 `src/shader/` 或 `src/shader/shaderChunk/`
- 公共片段通过 `#include <shaderChunk/xxx.wgsl>` 引入
- 条件编译使用 `#ifdef` / `#if` / `#endif`（不使用 `#else`）

---

## 调试技巧

### 查看渲染统计

```typescript
// 当帧绘制调用次数
console.log(scene.frameState.drawCallnums);

// 当前帧号
console.log(scene.frameState.frameNumber);
```

### 关闭视锥剔除

```typescript
mesh.frustumCull = false;
```

### 使用 RenderDoc 捕获 WebGPU 帧

Chrome 支持 RenderDoc 集成，在 `chrome://flags` 中启用 `WebGPU Developer Features` 后可使用。

### 打印 WGSL 编译结果

在 `ShaderSource.ts` 中临时添加：
```typescript
console.log("WGSL vert:", processedVertSource);
console.log("WGSL frag:", processedFragSource);
```

### 自定义错误边界

监听 WebGPU 设备丢失事件：
```typescript
scene.context.device.lost.then((info) => {
  console.error("WebGPU device lost:", info.message, info.reason);
});
```

---

## 常见问题

### Q: 页面空白，没有渲染输出

1. 检查浏览器是否支持 WebGPU（打开 `chrome://gpu`）
2. 确认已调用 `scene.setCamera(camera)`
3. 确认材质和几何体均已就绪（`mesh.ready === true`）
4. 检查浏览器控制台的 WebGPU 验证错误

### Q: 模型加载后不显示

1. 确认 GLTF 文件路径正确
2. 检查网络请求是否有 CORS 错误
3. 尝试设置 `model.position.set(0, 0, 0)` 确认模型不在视野外

### Q: 阴影不显示

1. 确认光源设置了 `shadow` 属性：`light.shadow = new DirectionalLightShadow()`
2. 确认 Mesh 开启了 `castShadow = true` 和 `receiveShadow = true`

### Q: 透明物体渲染顺序错误

1. 确认材质设置了 `transparent = true`
2. GEngine 自动将透明物体按从远到近排序，但多个透明物体相交时仍可能出现问题

### Q: 窗口 resize 后画面拉伸

监听 resize 事件并更新相机和场景：
```javascript
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  scene.resize(window.innerWidth, window.innerHeight);
});
```
