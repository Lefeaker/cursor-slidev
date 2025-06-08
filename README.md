# Cursor Slidev 工具包

这个仓库为 Cursor 大使和团队成员提供了一个使用 Slidev 创建演示文稿的模板，由 Cursor 提供支持。

它包含一个自定义组件 `GlowBackground.vue`，位于 `components/` 目录中，为您的幻灯片添加动画发光背景效果。您可以在 `slides.md` 中看到其使用示例。

## 快速开始

要在本地启动幻灯片演示：

- `pnpm install` - 安装依赖
- `pnpm dev` - 启动开发服务器
- 访问 <http://localhost:3030>

编辑 [slides.md](./slides.md) 文件即可看到更改。

在 [文档](https://sli.dev/) 中了解更多关于 Slidev 的信息。

## 部署到 GitHub Pages

要将您的幻灯片部署到 GitHub Pages：

1.  **提交并推送所有更改** 到 `main` 分支（或您想要发布的分支）。这包括位于 `.github/workflows/deploy.yml` 的工作流文件。
2.  **配置 GitHub Pages**：
    *   转到您仓库的 **Settings**（设置）选项卡。
    *   在侧边栏中导航到 **Pages**（页面）部分。
    *   在"Build and deployment"（构建和部署）下，选择 **GitHub Actions** 作为 **Source**（源）。
    *   GitHub Actions 将自动检测 `deploy.yml` 工作流并构建/部署您的幻灯片。
    *   部署完成后，您的幻灯片将在 `https://<your-username>.github.io/<your-repository-name>/` 可用。

## 自定义组件

### `GlowBackground.vue`

此组件提供带有微妙发光和缩放效果的动画圆锥渐变背景。

**使用方法：**

用 `<GlowBackground>` 标签包装您的幻灯片内容：

```html
<GlowBackground>
  <h1>您的幻灯片标题</h1>
  <p>更多内容...</p>
</GlowBackground>
```

参考 `slides.md` 获取实际示例，参考 `components/GlowBackground.vue` 获取组件源代码。

## Cursor 规则

此项目包含有用的 Cursor 规则，用于指导您创建和编辑幻灯片：

-   **`create-slidev-slides.mdc`**：提供关于如何使用 Slidev 创建幻灯片的全面指南，涵盖语法、前置内容、组件和各种功能。在使用 `slides.md` 时，请参考此规则获取最佳实践。
-   **`cursor-brand-guidelines.mdc`**：概述了 Cursor 的单色品牌指南，包括调色板、排版、标志使用和组件样式。确保您的幻灯片遵循这些指南以保持品牌一致性。

您可以在此仓库的 `.cursor/rules/` 目录中找到这些规则。它们旨在帮助 AI 理解项目结构和约定。
