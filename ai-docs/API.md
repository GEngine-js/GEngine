# GEngine — 完整 API 参考

## 目录

- [Scene（场景）](#scene)
- [Camera（相机）](#camera)
- [Mesh 与场景对象](#mesh-与场景对象)
- [Geometry（几何体）](#geometry)
- [Material（材质）](#material)
- [Light（光源）](#light)
- [Math（数学库）](#math)
- [Loader（加载器）](#loader)
- [Control（控制器）](#control)
- [PostEffect（后处理）](#posteffect)
- [渲染基础设施](#渲染基础设施)
- [常量与枚举](#常量与枚举)

---

## Scene

**文件**：[src/Scene.ts](../src/Scene.ts)

```typescript
class Scene extends EventDispatcher
```

### 构造参数

```typescript
new Scene(options: {
  container: string | HTMLElement; // canvas 容器 ID 或元素
})
```

### 方法

| 方法 | 说明 |
|------|------|
| `add(object: RenderObject)` | 添加 Mesh / Light / Node 到场景 |
| `remove(object: RenderObject)` | 从场景移除对象 |
| `setCamera(camera: Camera)` | 设置主渲染相机 |
| `render(node?, camera?)` | 执行一帧渲染（通常在 `requestAnimationFrame` 中调用） |
| `resize(width, height)` | 响应容器尺寸变化 |
| `addPostEffect(effect: PostEffect)` | 添加后处理效果 |
| `removePostEffect(effect: PostEffect)` | 移除后处理效果 |
| `destroy()` | 释放所有 GPU 资源 |

### 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `camera` | `PerspectiveCamera` | 当前主相机 |
| `context` | `Context` | WebGPU 上下文 |
| `frameState` | `FrameState` | 当前帧状态 |
| `background` | `Color \| Texture` | 背景颜色或天空盒纹理 |

---

## Camera

### PerspectiveCamera

**文件**：[src/camera/PerspectiveCamera.ts](../src/camera/PerspectiveCamera.ts)

```typescript
new PerspectiveCamera(
  fov: number,    // 垂直视野角（度），如 60
  aspect: number, // 宽高比 width/height
  near: number,   // 近裁剪面
  far: number     // 远裁剪面
)
```

| 属性 | 类型 | 说明 |
|------|------|------|
| `position` | `Vector3` | 相机位置 |
| `fov` | `number` | 视野角（修改后需调用 `updateProjectionMatrix()`） |
| `aspect` | `number` | 宽高比 |
| `near` / `far` | `number` | 近 / 远裁剪面 |
| `viewMatrix` | `Matrix4` | 视图矩阵（只读） |
| `projectionMatrix` | `Matrix4` | 投影矩阵（只读） |

| 方法 | 说明 |
|------|------|
| `lookAt(x, y, z)` | 朝向目标点 |
| `updateProjectionMatrix()` | 更新投影矩阵（修改 fov/aspect 后调用） |

### OrthographicCamera

**文件**：[src/camera/OrthographicCamera.ts](../src/camera/OrthographicCamera.ts)

```typescript
new OrthographicCamera(
  left, right, top, bottom, near, far
)
```

---

## Mesh 与场景对象

### RenderObject（基类）

**文件**：[src/core/RenderObject.ts](../src/core/RenderObject.ts)

所有可放入场景的对象的基类。

| 属性 | 类型 | 说明 |
|------|------|------|
| `position` | `Vector3` | 本地坐标位置 |
| `scale` | `Vector3` | 缩放 |
| `quaternion` | `Quaternion` | 旋转四元数 |
| `modelMatrix` | `Matrix4` | 世界变换矩阵 |
| `castShadow` | `boolean` | 是否投射阴影 |
| `receiveShadow` | `boolean` | 是否接收阴影 |
| `visible` | `boolean` | 是否可见 |
| `parent` | `RenderObject` | 父节点 |

| 方法 | 说明 |
|------|------|
| `lookAt(x, y, z)` | 朝向目标 |
| `rotateX/Y/Z(angle)` | 绕轴旋转（弧度） |
| `updateMatrix(parentMatrix?)` | 更新变换矩阵 |

---

### Mesh

**文件**：[src/mesh/Mesh.ts](../src/mesh/Mesh.ts)

```typescript
new Mesh(geometry: Geometry, material: Material)
```

| 属性 | 类型 | 说明 |
|------|------|------|
| `geometry` | `Geometry` | 绑定的几何体 |
| `material` | `Material` | 绑定的材质 |
| `frustumCull` | `boolean` | 是否启用视锥剔除（默认 `true`） |
| `ready` | `boolean` | 材质和几何体是否均已准备好（只读） |

---

### Node

**文件**：[src/mesh/Node.ts](../src/mesh/Node.ts)

场景层级容器，继承 `Mesh`。

```typescript
const parent = new Node();
const child = new Mesh(geometry, material);
parent.add(child);
scene.add(parent);
```

| 方法 | 说明 |
|------|------|
| `add(child: RenderObject)` | 添加子节点 |
| `remove(child: RenderObject)` | 移除子节点 |

---

### InstanceMesh

**文件**：[src/mesh/InstanceMesh.ts](../src/mesh/InstanceMesh.ts)

使用 GPU 实例渲染，一次 drawCall 渲染大量相同形状。

```typescript
const count = 1000;
const mesh = new InstanceMesh(geometry, material, count);

// 设置每个实例的变换矩阵
for (let i = 0; i < count; i++) {
  const matrix = new Matrix4();
  matrix.compose(position, rotation, scale);
  mesh.setMatrixAt(i, matrix);
}
scene.add(mesh);
```

---

### SkyBox

**文件**：[src/mesh/SkyBox.ts](../src/mesh/SkyBox.ts)

```typescript
const cubeTexture = await new CubeTextureLoader().loadCubeTexture([
  px, nx, py, ny, pz, nz  // 6 张图片 URL
]);
const skybox = new SkyBox(cubeTexture);
scene.add(skybox);
```

---

### Sprite

**文件**：[src/mesh/Sprite.ts](../src/mesh/Sprite.ts)

始终朝向相机的 2D 图片精灵，常用于粒子或图标。

```typescript
const sprite = new Sprite(texture);
sprite.position.set(0, 10, 0);
scene.add(sprite);
```

---

### Points

**文件**：[src/mesh/Points.ts](../src/mesh/Points.ts)

```typescript
const geometry = new PointGeometry(positionsArray);
const points = new Points(geometry, material);
scene.add(points);
```

---

## Geometry

### Geometry（基类）

**文件**：[src/geometry/Geometry.ts](../src/geometry/Geometry.ts)

| 属性 | 类型 | 说明 |
|------|------|------|
| `positions` | `number[]` | 顶点位置数组 |
| `normals` | `number[]` | 法线数组 |
| `uvs` | `number[]` | 纹理坐标 |
| `tangents` | `number[]` | 切线（法线贴图） |
| `indices` | `number[]` | 索引数组 |
| `boundingSphere` | `BoundingSphere` | 包围球（用于视锥剔除） |
| `boundingBox` | `BoundingBox` | AABB |

| 方法 | 说明 |
|------|------|
| `setAttribute(attribute)` | 添加顶点属性 |
| `setIndice(indices)` | 设置索引数据 |
| `calculateTangents()` | 自动计算切线向量 |

---

### 预置几何体

#### BoxGeometry
```typescript
new BoxGeometry(
  width?: number,    // 默认 1
  height?: number,   // 默认 1
  depth?: number     // 默认 1
)
```

#### PlaneGeometry
```typescript
new PlaneGeometry(
  width?: number,   // 默认 1
  height?: number   // 默认 1
)
```

#### SphereGeometry
```typescript
new SphereGeometry(
  radius?: number,          // 默认 1
  widthSegments?: number,   // 默认 32
  heightSegments?: number   // 默认 16
)
```

#### TorusKnotGeometry
```typescript
new TorusKnotGeometry(
  radius?: number,          // 默认 1
  tube?: number,            // 默认 0.4
  tubularSegments?: number, // 默认 64
  radialSegments?: number,  // 默认 8
  p?: number,               // 默认 2
  q?: number                // 默认 3
)
```

#### PointGeometry
```typescript
new PointGeometry(positions: number[])  // 平铺的 XYZ 数组
```

---

## Material

### Material（基类）

**文件**：[src/material/Material.ts](../src/material/Material.ts)

| 属性 | 类型 | 说明 |
|------|------|------|
| `color` | `Color` | 基础颜色 |
| `baseTexture` | `Texture` | 基础贴图 |
| `baseSampler` | `Sampler` | 贴图采样器 |
| `transparent` | `boolean` | 是否为透明材质 |
| `opacity` | `number` | 透明度 0~1 |
| `light` | `boolean` | 是否参与光照计算 |
| `emissive` | `Color` | 自发光颜色 |
| `renderState` | `RenderState` | GPU 管线状态 |
| `shaderSource` | `ShaderSource` | 着色器源码 |
| `shaderData` | `ShaderData` | GPU Uniform / Texture 绑定 |

---

### BlinnPhongMaterial

**文件**：[src/material/BlinnPhongMaterial.ts](../src/material/BlinnPhongMaterial.ts)

```typescript
const mat = new BlinnPhongMaterial();
mat.color = new Color(1, 0.5, 0);     // RGB 0~1
mat.specular = new Color(1, 1, 1);
mat.shininess = 64;                    // 高光强度
mat.normalTexture = normalTex;         // 法线贴图（可选）
mat.light = true;                      // 默认 true
```

---

### PbrMaterial

**文件**：[src/material/PbrMaterial.ts](../src/material/PbrMaterial.ts)

```typescript
const mat = new PbrMaterial();
mat.baseTexture = albedoTex;
mat.normalTexture = normalTex;
mat.roughness = 0.5;                   // 0=光滑 1=粗糙
mat.metalness = 0.0;                   // 0=非金属 1=金属
mat.aoTexture = aoTex;                 // 环境遮蔽
mat.metalnessRoughnessTexture = mrTex;

// IBL（图像照明）
mat.specularEnvTexture = specEnvTex;
```

---

### ShaderMaterial

**文件**：[src/material/ShaderMaterial.ts](../src/material/ShaderMaterial.ts)

```typescript
const mat = new ShaderMaterial({
  // 自定义 WGSL 着色器
  shaderId: "myShader",
  vertexShader: `...wgsl...`,
  fragmentShader: `...wgsl...`,

  // 自定义 Uniform
  uniforms: {
    time: { value: 0.0 },
    color: { value: new Color(1, 0, 0) }
  }
});

// 每帧更新
mat.setUniform("time", performance.now() / 1000);
```

---

## Light

### AmbientLight

**文件**：[src/light/AmbientLight.ts](../src/light/AmbientLight.ts)

```typescript
new AmbientLight(
  color: Vector3,    // RGB 颜色
  intensity: number  // 强度
)
```

### DirectionalLight

**文件**：[src/light/DirectionalLight.ts](../src/light/DirectionalLight.ts)

```typescript
const light = new DirectionalLight(
  new Vector3(1, 1, 1),  // 颜色
  1.0                     // 强度
);
light.position = new Vector3(100, 100, 0);
light.target = new Vector3(0, 0, 0);

// 启用阴影
light.shadow = new DirectionalLightShadow();
// 或级联阴影
light.shadow = new DirectionalLightCascadedShadow();
```

### PointLight

**文件**：[src/light/PointLight.ts](../src/light/PointLight.ts)

```typescript
const light = new PointLight(
  new Vector3(1, 1, 1),  // 颜色
  1.0,                    // 强度
  60,                     // 衰减距离
  1.0                     // 衰减指数
);
light.position = new Vector3(0, 30, 0);

// 启用阴影（立方体贴图）
light.shadow = new PointLightShadow();
```

### SpotLight

**文件**：[src/light/SpotLight.ts](../src/light/SpotLight.ts)

```typescript
const light = new SpotLight(
  new Vector3(1, 1, 1),  // 颜色
  1.0,                    // 强度
  100,                    // 距离
  15,                     // 内锥角（度）
  1.0                     // 衰减
);
light.position = new Vector3(0, 50, 0);
light.target = new Vector3(0, 0, 0);
```

---

## Math

### Vector3

```typescript
const v = new Vector3(x, y, z);

// 静态工具
Vector3.UNIT_X   // (1, 0, 0)
Vector3.UNIT_Y   // (0, 1, 0)
Vector3.UNIT_Z   // (0, 0, 1)
Vector3.ZERO     // (0, 0, 0)

// 方法
v.set(x, y, z)
v.add(other)
v.sub(other)
v.multiplyScalar(s)
v.normalize()
v.dot(other)
v.cross(other)
v.length()
v.distanceTo(other)
v.clone()
v.copy(other)
```

### Matrix4

```typescript
const m = new Matrix4();

m.compose(position, quaternion, scale)  // TRS 合成
m.decompose(position, quaternion, scale)
m.multiply(other)
m.invert()
m.transpose()
m.makeTranslation(x, y, z)
m.makeRotationFromQuaternion(q)
m.makeScale(x, y, z)
Matrix4.makePerspective(left, right, top, bottom, near, far)
Matrix4.makeOrthographic(left, right, top, bottom, near, far)
```

### Quaternion

```typescript
const q = new Quaternion();

Quaternion.fromAxisAngle(axis: Vector3, angle: number)
Quaternion.fromRotationMatrix(m: Matrix4)
q.slerp(other, t)
q.multiply(other)
q.normalize()
```

### Color

```typescript
const c = new Color(r, g, b);  // 0~1 浮点

// 解析 hex
Color.fromHex("#ff8800")

// 输出
c.toHex()
c.toArray()  // [r, g, b]
```

### Euler

```typescript
const e = new Euler(x, y, z, order);
// order: "XYZ" | "YXZ" | "ZXY" 等
```

---

## Loader

### loadGLTF

**文件**：[src/loader/GLTFLoader.ts](../src/loader/GLTFLoader.ts)

```typescript
import { loadGLTF } from "@gengine-js/gengine";

const model = await loadGLTF("path/to/model.gltf");
scene.add(model);

// 访问子节点
model.children.forEach(child => {
  if (child instanceof Mesh) {
    child.material.color = new Color(1, 0, 0);
  }
});
```

### CubeTextureLoader

**文件**：[src/loader/CubeTextureLoader.ts](../src/loader/CubeTextureLoader.ts)

```typescript
const loader = new CubeTextureLoader();
const cubeTexture = await loader.loadCubeTexture([
  "px.jpg", "nx.jpg",  // +X, -X
  "py.jpg", "ny.jpg",  // +Y, -Y
  "pz.jpg", "nz.jpg"   // +Z, -Z
]);
```

### loadTexture

**文件**：[src/utils/utils.ts](../src/utils/utils.ts)

```typescript
import { loadTexture } from "@gengine-js/gengine";

const texture = await loadTexture("path/to/image.png");
material.baseTexture = texture;
```

---

## Control

### OrbitControl

**文件**：[src/control/OrbitControl.ts](../src/control/OrbitControl.ts)

```typescript
const control = new OrbitControl(
  camera: Camera,
  domElement: HTMLElement
);

// 约束
control.minDistance = 5;
control.maxDistance = 500;
control.minPolarAngle = 0;               // 0 = 正上方
control.maxPolarAngle = Math.PI / 2;     // 最低俯角
control.minAzimuthAngle = -Infinity;
control.maxAzimuthAngle = Infinity;

// 功能开关
control.enableDamping = true;   // 阻尼（惯性）
control.enableZoom = true;
control.enableRotate = true;
control.enablePan = true;

// 速度
control.rotateSpeed = 1.0;
control.zoomSpeed = 1.0;
control.panSpeed = 1.0;

// 在动画循环中调用
function animate() {
  requestAnimationFrame(animate);
  control.update();   // 必须每帧调用
  scene.render();
}
```

---

## PostEffect

### BloomPostEffect

**文件**：[src/post-process/BloomPostEffect.ts](../src/post-process/BloomPostEffect.ts)

```typescript
import { BloomPostEffect } from "@gengine-js/gengine";

const bloom = new BloomPostEffect(width, height);
bloom.strength = 1.5;    // 强度
bloom.radius = 0.4;      // 扩散半径
bloom.threshold = 0.85;  // 亮度阈值（超过才发光）

scene.addPostEffect(bloom);
```

---

## 渲染基础设施

这些类用于高级自定义场景，一般不需要直接操作。

### Context

**文件**：[src/render/Context.ts](../src/render/Context.ts)

WebGPU `GPUDevice` 和 Canvas 的初始化封装。通过 `scene.context` 访问。

### Buffer

**文件**：[src/render/Buffer.ts](../src/render/Buffer.ts)

```typescript
// 工厂方法
Buffer.createVertexBuffer(label, device, data)
Buffer.createIndexBuffer(label, device, data)
Buffer.createUniformBuffer(label, device, byteSize)
Buffer.createStorageBuffer(label, device, byteSize)

// 更新
buffer.setSubData(offsetBytes, data)
```

### Texture

**文件**：[src/render/Texture.ts](../src/render/Texture.ts)

```typescript
const tex = new Texture();
tex.data = imageData;             // HTMLImageElement 或 ImageData
tex.generateMipmap = true;
tex.flipY = true;
tex.sampleType = "float";         // "float" | "depth" | "uint"
```

### RenderTarget

**文件**：[src/render/RenderTarget.ts](../src/render/RenderTarget.ts)

```typescript
const rt = new RenderTarget(width, height);
rt.getColorTexture(0)   // 颜色附件纹理
rt.getDepthTexture()    // 深度附件纹理
rt.setSize(w, h)        // 响应 resize
```

### ShaderData

**文件**：[src/render/ShaderData.ts](../src/render/ShaderData.ts)

```typescript
const sd = new ShaderData(bindGroupLayoutDescriptor);

sd.setUniformBuffer("model", buffer, binding);
sd.setTexture("baseTexture", texture, binding);
sd.setSampler("baseSampler", sampler, binding);
sd.setDefine("HAS_NORMAL", true);
sd.setDefine("USE_IBL", 1);

// 在 passEncoder 中绑定
sd.bind(device, passEncoder);
```

---

## 常量与枚举

**文件**：[src/core/WebGPUConstant.ts](../src/core/WebGPUConstant.ts)

| 枚举 | 值（示例） |
|------|-----------|
| `TextureFormat` | `rgba8unorm`, `depth24plus`, `bc1-rgba-unorm` ... |
| `FilterMode` | `linear`, `nearest` |
| `AddressMode` | `repeat`, `clamp-to-edge`, `mirror-repeat` |
| `BlendFactor` | `one`, `zero`, `src-alpha`, `one-minus-src-alpha` ... |
| `CullMode` | `none`, `front`, `back` |
| `PrimitiveTopology` | `triangle-list`, `point-list`, `line-list` |
| `CompareFunction` | `less`, `less-equal`, `always`, `never` ... |
| `ShaderStage` | `VERTEX = 1`, `FRAGMENT = 2`, `COMPUTE = 4` |
| `BufferUsage` | `VERTEX`, `INDEX`, `UNIFORM`, `STORAGE`, `COPY_SRC` ... |

```typescript
import {
  TextureFormat,
  FilterMode,
  CullMode,
  PrimitiveTopology
} from "@gengine-js/gengine";

// 示例：自定义渲染状态
mesh.material.renderState.primitive = {
  topology: PrimitiveTopology.TriangleList,
  cullMode: CullMode.Back,
  frontFace: "ccw"
};
```
