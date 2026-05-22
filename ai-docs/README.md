# GEngine.js — 开发者文档

> 基于 WebGPU 的现代 3D 渲染引擎

## 目录

- [项目概述](#项目概述)
- [快速开始](#快速开始)
- [核心概念](#核心概念)
- [文档导航](#文档导航)

---

## 项目概述

GEngine.js 是一款基于 **WebGPU API** 构建的高性能 3D 渲染引擎，使用 TypeScript 编写，通过 Rollup 打包为 ES 模块发布。

| 属性 | 详情 |
|------|------|
| 包名 | `@gengine-js/gengine` |
| 版本 | 1.0.0 |
| 语言 | TypeScript (目标 ES2020) |
| 渲染 API | WebGPU |
| 着色器语言 | WGSL |
| 模块格式 | ES Module |
| 仓库 | https://github.com/hpugis/GEngine |

### 主要特性

- **前向渲染管线**：包含阴影渲染 Pass 和颜色渲染 Pass
- **三种内置材质**：Blinn-Phong、PBR（基于物理渲染）、自定义 Shader
- **四种光源类型**：环境光、方向光、点光源、聚光灯，均支持阴影
- **级联阴影贴图**：DirectionalLight 支持 CSM 技术
- **后处理系统**：Bloom 效果，可链式组合多种后处理
- **几何体库**：Box、Plane、Sphere、TorusKnot、Point、SkyBox
- **GLTF 加载器**：支持网格、材质、贴图、骨骼动画
- **视锥剔除**：基于 BoundingSphere/BoundingBox
- **实例渲染**：通过 InstanceMesh 支持大量重复物体
- **计算管线**：支持 WebGPU Compute Shader

---

## 安装

```shell
# yarn
yarn add @gengine-js/gengine

# npm
npm install @gengine-js/gengine
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
      60,                               // fov
      window.innerWidth / window.innerHeight,
      0.01, 1000                        // near, far
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
    const pointLight = new PointLight(
      new Vector3(1, 1, 1), 1.0, 100, 1.0
    );
    pointLight.position = new Vector3(0, 30, 0);
    scene.add(pointLight);

    const ambientLight = new AmbientLight(
      new Vector3(0.2, 0.2, 0.2), 1.0
    );
    scene.add(ambientLight);

    // 5. 交互控制
    const control = new OrbitControl(
      camera, document.getElementById("app")
    );

    // 6. 渲染循环
    function animate() {
      requestAnimationFrame(animate);
      control.update();
      scene.render();
    }
    animate();
  </script>
</body>
</html>
```

---

## 核心概念

| 概念 | 说明 |
|------|------|
| **Scene** | 场景根对象，管理所有 Mesh / Light，驱动渲染循环 |
| **Mesh** | 几何体 + 材质的组合，是可渲染的基本单元 |
| **Geometry** | 顶点数据（位置、法线、UV、切线、索引） |
| **Material** | 着色参数 + ShaderData + RenderState |
| **Light** | 光源，可携带 Shadow 对象 |
| **Camera** | 观察视角，输出 View × Projection 矩阵 |
| **DrawCommand** | 单次 GPU 绘制调用的所有状态封装 |
| **ShaderData** | BindGroup 封装，管理 Uniform / Texture / Sampler |
| **RenderTarget** | 离屏渲染目标（颜色 + 深度附件） |

---

## 文档导航

| 文档 | 内容 |
|------|------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 系统架构、渲染管线、数据流、类继承图 |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | 开发环境搭建、构建、调试、贡献指南 |
| [API.md](./API.md) | 完整公共 API 参考 |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | 构建产物、发布流程 |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | 贡献规范 |
