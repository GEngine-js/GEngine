# GEngine.js

<p align="center">
  <strong>基于 WebGPU 的现代 3D 渲染引擎</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@gengine-js/gengine">
    <img src="https://img.shields.io/npm/v/@gengine-js/gengine.svg" alt="npm 版本" />
  </a>
  <a href="https://github.com/hpugis/GEngine/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/hpugis/GEngine" alt="开源协议" />
  </a>
  <img src="https://img.shields.io/badge/WebGPU-required-blue" alt="需要 WebGPU" />
  <img src="https://img.shields.io/badge/TypeScript-5+-3178c6?logo=typescript&logoColor=white" alt="TypeScript" />
</p>

<p align="center">
  <a href="./README.md">English</a> | <strong>中文</strong>
</p>

---

## 功能特性

- 🎨 **前向渲染管线** — 阴影通道 + 颜色通道 + 后处理链
- 💡 **四种光源类型** — 环境光、方向光、点光源、聚光灯，均支持阴影
- 🌊 **级联阴影贴图** — 大场景下高质量方向光阴影（CSM）
- 🔮 **三种内置材质** — Blinn-Phong、PBR（含 IBL）、完全自定义 ShaderMaterial
- 🧊 **几何体库** — Box、Plane、Sphere、TorusKnot、点云、天空盒
- 🚀 **实例渲染** — `InstanceMesh` 支持大量同形状物体的高效绘制
- ✨ **Bloom 后处理** — 基于亮度阈值的多级高斯模糊泛光效果
- 📦 **GLTF 加载器** — 网格、材质、贴图、骨骼动画
- ✂️ **视锥剔除** — 基于 BoundingSphere / BoundingBox 的可见性判断
- ⚡ **计算着色器** — WebGPU Compute Pipeline 支持
- 🔧 **WGSL 预处理器** — `#ifdef` / `#if` 条件编译

## 环境要求

| 需求 | 版本 |
|------|------|
| 浏览器 | Chrome ≥ 113 / Edge ≥ 113 |
| Node.js | ≥ 16（仅构建时需要） |

> WebGPU 在 Chrome 113+ 和 Edge 113+ 中已默认启用。Firefox 和 Safari 仍需手动开启实验性标志。

## 安装

```shell
npm install @gengine-js/gengine
# 或
yarn add @gengine-js/gengine
```

## 快速开始

```html
<!DOCTYPE html>
<html>
<body>
  <div id="app" style="width:100vw;height:100vh;"></div>
  <script type="module">
    import {
      Scene, Mesh, PerspectiveCamera,
      BlinnPhongMaterial, SphereGeometry,
      PointLight, AmbientLight,
      Vector3, Color, OrbitControl
    } from "@gengine-js/gengine";

    // 1. 创建场景（自动初始化 WebGPU）
    const scene = new Scene({ container: "app" });

    // 2. 创建相机
    const camera = new PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 0.01, 1000
    );
    camera.position.set(0, 20, 30);
    camera.lookAt(0, 0, 0);
    scene.setCamera(camera);

    // 3. 创建网格
    const geometry = new SphereGeometry(10);
    const material = new BlinnPhongMaterial();
    material.color = new Color(1.0, 0.5, 0.0);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // 4. 添加光源
    const light = new PointLight(new Vector3(1, 1, 1), 1.0, 100, 1.0);
    light.position = new Vector3(0, 30, 0);
    scene.add(light);
    scene.add(new AmbientLight(new Vector3(0.2, 0.2, 0.2), 1.0));

    // 5. 交互控制
    const control = new OrbitControl(camera, document.getElementById("app"));

    // 6. 渲染循环
    function animate() {
      requestAnimationFrame(animate);
      control.update();
      scene.render();
    }
    animate();

    // 7. 响应窗口大小变化
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      scene.resize(window.innerWidth, window.innerHeight);
    });
  </script>
</body>
</html>
```

## 本地开发

```shell
# 克隆仓库
git clone https://github.com/hpugis/GEngine.git
cd GEngine

# 安装依赖
yarn install

# 启动开发模式（watch）
yarn dev

# 生产构建
yarn build

# 代码检查
yarn lint
```

用任意静态文件服务器预览示例：

```shell
npx serve .
# 然后访问 http://localhost:3000/example/mesh/mesh.html
```

## 文档

| 文档 | 说明 |
|------|------|
| [架构设计](./ai-docs/ARCHITECTURE.md) | 渲染管线、数据流、类继承图 |
| [API 参考](./ai-docs/API.md) | 完整公共 API — Scene、Mesh、Material、Light、Camera、Math… |
| [开发指南](./ai-docs/DEVELOPMENT.md) | 环境搭建、添加新功能、调试技巧 |
| [构建与发布](./ai-docs/DEPLOYMENT.md) | 构建产物、npm 发布流程 |
| [贡献指南](./ai-docs/CONTRIBUTING.md) | 分支规范、提交规范、PR 检查清单 |

## 示例

浏览 [`example/`](./example/) 目录查看可运行的演示：

| 分类 | 示例 |
|------|------|
| 几何体 | Box、Plane、Sphere、TorusKnot |
| 材质 | Blinn-Phong、PBR、ShaderMaterial |
| 光源 | 环境光、方向光、点光源、聚光灯 |
| 阴影 | 方向光、级联、点光源、聚光灯阴影 |
| 网格 | 实例渲染、点云、天空盒、精灵 |
| 加载器 | GLTF 模型、GLTF 骨骼动画 |
| 后处理 | Bloom 泛光 |

## 参与贡献

欢迎贡献代码！请在提交 Pull Request 前阅读[贡献指南](./ai-docs/CONTRIBUTING.md)。

1. Fork 本仓库
2. 创建分支：`git checkout -b feat/your-feature`
3. 使用规范提交：`yarn commit`
4. Push 并发起 Pull Request

## 开源协议

[MIT](./LICENSE)

---

## 底层 WebGPU 用法

如需直接操作 WebGPU 原语：

```html
<script type="module">
  import { Model, Context, Texture, RenderTarget, Attachment } from "@gengine-js/gengine";
  const init = async () => {
    // 初始化上下文
    const context = new Context({
      canvas: null,
      container: document.getElementById("app"),
      pixelRatio: 1
    });
    const { canvas, presentationFormat } = context;
    await context.init();
    const { width, height, depth } = context.presentationSize;
    const colorAttachment = new Attachment(
      { r: 0.0, g: 0.0, b: 0.0, a: 0 },
      {
        textureView: () => context.context.getCurrentTexture().createView()
      }
    );
    const depthTexture = new Texture({
      label: "resolveDepth",
      size: { width, height, depth },
      format: "depth24plus",
      usage: GPUTextureUsage.RENDER_ATTACHMENT
    });
    const depthAttachment = new Attachment(1.0, { texture: depthTexture });
    const canvasRenderTarget = new RenderTarget("render", [colorAttachment], depthAttachment);

    // ... 构建管线、执行绘制循环等
  };
  init();
</script>
```
