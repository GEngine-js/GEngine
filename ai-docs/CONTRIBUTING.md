# GEngine — 贡献指南

## 目录

- [GEngine — 贡献指南](#gengine--贡献指南)
  - [目录](#目录)
  - [开发工作流](#开发工作流)
  - [分支命名规范](#分支命名规范)
  - [提交信息规范](#提交信息规范)
  - [代码评审标准](#代码评审标准)
  - [测试要求](#测试要求)
  - [文档更新](#文档更新)

---

## 开发工作流

```
1. Fork 仓库 → 克隆到本地
2. git checkout -b feat/your-feature
3. yarn install
4. yarn dev  （开发 + watch）
5. 编写代码 + 在 example/ 中验证
6. yarn lint  （确保无 lint 错误）
7. yarn commit  （使用 commitizen 规范提交）
8. Push → 创建 Pull Request
```

---

## 分支命名规范

| 前缀 | 用途 | 示例 |
|------|------|------|
| `feat/` | 新功能 | `feat/cylinder-geometry` |
| `fix/` | Bug 修复 | `fix/point-light-shadow-uv` |
| `docs/` | 文档更新 | `docs/api-reference` |
| `refactor/` | 重构 | `refactor/shader-data-bind` |
| `perf/` | 性能优化 | `perf/pipeline-cache-key` |
| `chore/` | 工程配置 | `chore/update-rollup` |

---

## 提交信息规范

使用 **Conventional Commits**，格式为：

```
<type>(<scope>): <subject>

[可选 body]

[可选 footer]
```

**类型（type）**：

| type | 含义 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档 |
| `refactor` | 重构（不修改功能） |
| `perf` | 性能优化 |
| `test` | 测试 |
| `chore` | 构建/配置/依赖 |
| `ci` | CI/CD 流水线 |

**示例**：
```
feat(geometry): 添加 CylinderGeometry
fix(shadow): 修复点光源阴影贴图翻转问题
docs(api): 更新 BloomPostEffect 参数说明
```

提交前 Git hook 会自动执行：
- `check-keyword.sh`：检查敏感词
- `commitlint`：校验提交信息格式
- `pretty-quick`：格式化已暂存文件

---

## 代码评审标准

Pull Request 合并前需满足：

**功能正确性**
- [ ] 在目标浏览器（Chrome / Edge 113+）中验证通过
- [ ] 已在 `example/` 中添加或修改相应示例 HTML
- [ ] 不破坏现有示例的渲染结果

**代码质量**
- [ ] 通过 `yarn lint` 无错误
- [ ] 无 TypeScript `any` 滥用
- [ ] 公共 API 有清晰的类型签名
- [ ] 新增类/方法在 `src/index.ts` 中正确导出

**性能**
- [ ] 无不必要的每帧 GPU 资源创建
- [ ] 大数量渲染使用 InstanceMesh 而不是多个 Mesh
- [ ] Pipeline 通过缓存复用（不重复创建 `GPURenderPipeline`）

**安全**
- [ ] 不在着色器中引入未经校验的用户输入
- [ ] GLTF 加载器对 URL 做基本合法性检查

---

## 测试要求

当前项目以 `example/` 目录下的可视化示例作为集成测试。

对于工具函数和数学库（`src/math/`），建议添加单元测试。测试文件放在 `tests/` 目录，可使用 Vitest 或 Jest：

```shell
# 安装测试工具（尚未在项目中配置，按需添加）
yarn add -D vitest

# 运行测试
npx vitest
```

**测试文件命名**：`tests/math/Vector3.test.ts`

---

## 文档更新

修改以下内容时必须同步更新 `ai-docs/`：

| 修改内容 | 需更新的文档 |
|----------|-------------|
| 新增公共 API | [ai-docs/API.md](./API.md) |
| 架构变更 | [ai-docs/ARCHITECTURE.md](./ARCHITECTURE.md) |
| 构建流程变更 | [ai-docs/DEPLOYMENT.md](./DEPLOYMENT.md) |
| 开发工具变更 | [ai-docs/DEVELOPMENT.md](./DEVELOPMENT.md) |

更新文档与代码应在同一个 Pull Request 中提交。
