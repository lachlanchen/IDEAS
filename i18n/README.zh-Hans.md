[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# IDEAS

![Status](https://img.shields.io/badge/status-active-0a7f5a)
![Content](https://img.shields.io/badge/content-Markdown%20%2B%20LaTeX-blue)
![Languages](https://img.shields.io/badge/i18n-9%20README%20languages-orange)
![Build](https://img.shields.io/badge/build-latexmk-1f6feb)
![CJK](https://img.shields.io/badge/CJK-XeLaTeX-22863a)
![Site](https://img.shields.io/badge/docs-static%20assets-6f42c1)
![Pipeline](https://img.shields.io/badge/pipeline-idea%20%E2%86%92%20publication-1f6feb)
![Ops](https://img.shields.io/badge/ops-locales%20%2F%20catalog-0b7285)

---

## 概览

IDEAS 是一个轻量级、可版本化的研究笔记与论文随笔仓库。

本仓库遵循内容优先工作流：

- 在 `ideas/` 下用 Markdown 撰写想法。
- 将成熟想法提升为 `publications/<slug>/` 下的出版内容。
- 保持出版文件名与目录 slug 一致（`<slug>.tex`、`<slug>.pdf`）。
- 使用可复现的 `latexmk` 命令重新生成 PDF。
- 在 `i18n/` 下维护多语言 README，并在 `docs/` 下维护静态页面。

## 快速链接

| 区块        | 跳转                               |
| ----------- | ---------------------------------- |
| 🗂️ 目录     | [按类别目录](#catalog-by-category) |
| 🧰 构建命令 | [构建](#build)                     |
| 🧪 日常流程 | [使用](#usage)                     |
| 🧱 仓库结构 | [项目结构](#project-structure)     |
| ⚙️ 运维细节 | [配置](#configuration)             |
| 🧩 贡献指南 | [贡献](#contribution)              |
| ✉️ 联系     | [联系方式](#contact)               |
| ❤️ 支持     | [支持 / 捐赠](#-support)           |

## 关于

IDEAS 是一个轻量级、可版本化的研究笔记与论文随笔仓库。

- 内容优先：每个想法都以 `ideas/` 中的 Markdown 存放；成熟后镜像到 `publications/<slug>/<slug>.tex` 并编译为 PDF。
- 约定：文件名使用 kebab-case；出版文件名与目录 slug 保持一致（`<slug>.tex`、`<slug>.pdf`）。
- CJK 支持：中文出版内容使用 XeLaTeX 编译。
- 可复现构建：使用 `latexmk`（见构建章节）重建 PDF。

## 特性

- 版本化的 idea-to-publication 流程（`ideas/` -> `publications/<slug>/`）。
- 按类别组织的研究目录，并提供 Markdown/PDF 直达链接。
- 在 `i18n/` 下维护 9 种语言的 README。
- 在 `docs/` 下维护静态站点内容，并在 `docs/assets/` 生成清单文件。
- 通过 `scripts/enable-hooks.sh` 可选配置本地 Git hook。
- 仓库在有助于可复现性时保留 LaTeX 构建产物（`.aux`、`.log`、`.fls`、`.fdb_latexmk`、`.out`）。

<a id="catalog-by-category"></a>

## 按类别目录

### Metasurfaces

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">标题</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">语言</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Optical Metasurfaces and Biofabrication: A Feasibility Analysis</td>
      <td><a href="ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md">Markdown</a></td>
      <td><a href="publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Molecularly Programmed Metasurfaces: Gaussian + Multiwfn + S4 Workflow</td>
      <td><a href="ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md">Markdown</a></td>
      <td><a href="publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Designing Molecularly Programmed Metasurfaces</td>
      <td><a href="ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md">Markdown</a></td>
      <td><a href="publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>有机染料调控的纳米超表面（中文）</td>
      <td><a href="ideas/organic-dye-programmed-metasurface-zh.md">Markdown</a></td>
      <td><a href="publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf">PDF</a></td>
      <td>ZH</td>
    </tr>
    <tr>
      <td>Proposal: AI‑Assisted Metasurface Imaging System</td>
      <td><a href="ideas/proposal-ai-assisted-metasurface-imaging-system.md">Markdown</a></td>
      <td><a href="publications/proposal-ai-assisted-metasurface-imaging-system/proposal-ai-assisted-metasurface-imaging-system.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Optical Metasurfaces and Biofabrication: A Feasibility Analysis (Draft)</td>
      <td><a href="ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis-draft.md">Markdown</a></td>
      <td>—</td>
      <td>EN</td>
    </tr>
  </tbody>
  </table>

### Theory

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">标题</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">语言</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Nonlinear Kramers–Kronig Relations: Causality Beyond Linearity</td>
      <td><a href="ideas/nonlinear-kramers-kronig-kerr-media.md">Markdown</a></td>
      <td><a href="publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>The Quantum Carpets: Fractal Patterns in Wavefunction Revival</td>
      <td><a href="ideas/quantum-carpets-fractal-wavefunction-revival.md">Markdown</a></td>
      <td><a href="publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
  </tbody>
  </table>

### AI for Science

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">标题</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">语言</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Proposal: Integrating Quantum Chemistry, MD, and AI (Small Molecule)</td>
      <td><a href="ideas/proposal-integrating-quantum-chemistry-md-ai-small-molecule-simulation.md">Markdown</a></td>
      <td><a href="publications/proposal-integrating-quantum-chemistry-md-ai-small-molecule-simulation/proposal-integrating-quantum-chemistry-md-ai-small-molecule-simulation.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Investigating the “Mpempba Effect” in Deep Learning and Imaging</td>
      <td><a href="ideas/investigating-mpempba-effect-deep-learning-imaging.md">Markdown</a></td>
      <td><a href="publications/investigating-mpempba-effect-deep-learning-imaging/investigating-mpempba-effect-deep-learning-imaging.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
  </tbody>
  </table>

### Product \& Tools

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">标题</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">语言</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LLM‑Powered File Management: Feasibility, Market, and Design</td>
      <td><a href="ideas/llm-powered-file-management-feasibility-market-design.md">Markdown</a></td>
      <td><a href="publications/llm-powered-file-management-feasibility-market-design/llm-powered-file-management-feasibility-market-design.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
  </tbody>
  </table>

### DORAEMON

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">标题</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">语言</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DORAEMON: Detached On‑demand Rapid Absorption Energy Mechanism</td>
      <td><a href="ideas/doraemon-tap-and-charge-deep-research.md">Markdown</a></td>
      <td><a href="publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>DORAEMON（日本語）</td>
      <td><a href="ideas/doraemon-tap-and-charge-deep-research-ja.md">Markdown</a></td>
      <td><a href="publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf">PDF</a></td>
      <td>JA</td>
    </tr>
    <tr>
      <td>用通俗中文讲清楚：DORAEMON「一碰即充」完整说明</td>
      <td><a href="ideas/doraemon-tap-and-charge-explainer-zh.md">Markdown</a></td>
      <td><a href="publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf">PDF</a></td>
      <td>ZH</td>
    </tr>
  </tbody>
  </table>

<a id="project-structure"></a>

## 项目结构

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Markdown idea notes
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # 可选的 LaTeX 中间文件
├── docs/                          # 静态网站与生成资源
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # 多语言 README 变体
└── figs/                          # README 与捐赠素材
```

## 先决条件

- `latexmk` 与可用的 TeX 发行版（TeX Live 或等价）。
- 中文论文的 XeLaTeX 支持（中文/日文出版）：`xelatex` + 支持 CJK 的字体。
- Node.js（建议 18+）用于站点资源生成（`scripts/generate_site.mjs`）。
- 用于版本管理和协作流程的 Git。

## 安装

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

可选本地 hook 设置：

```bash
bash scripts/enable-hooks.sh
```

<a id="build"></a>

## 构建

- 英文/ASCII PDF：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中文 PDF（CJK）：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- 一次性构建全部论文（PDF 模式）：
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- 清理 LaTeX 构建产物（论文目录内）：
  - `latexmk -C`

<a id="usage"></a>

## 使用

常见日常流程：

1. 在 `ideas/*.md` 中新增或更新想法笔记（kebab-case 文件名）。
2. 将成熟笔记升级为 `publications/<slug>/<slug>.tex`。
3. 使用合适的 `latexmk` 模式编译出版 PDF。
4. 如发布网站数据，重新生成静态资源：
   - `node scripts/generate_site.mjs`
5. 校验渲染结果（`.pdf` 与可选的 `docs/` 页面）。

<a id="configuration"></a>

## 配置

- `mkdocs.yml` 存在，可用于基于 MkDocs 的文档配置。
- `.github/workflows/pages.yml` 当前用于为 `docs/` 进行 GitHub Pages 部署。
- `docs/assets/i18n.js` 与 `docs/assets/i18n/*.json` 控制网站 i18n 行为。
- `CNAME` 与 `docs/CNAME` 存放自定义域名设置。

假设说明：本 README 同时保留 MkDocs 与自定义静态站点流水线说明，因为仓库中两套都在使用或保留。

## 示例

构建一篇英文论文：

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

构建一篇中文论文：

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

重新生成 docs 数据/清单：

```bash
node scripts/generate_site.mjs
```

## 开发说明

- Markdown 中公式使用 `$...$` 与 `$$...$$`。
- 带空格的外部链接请使用百分号编码，以提升渲染可靠性。
- 优先采用增量修改；除非必要，避免重命名现有文件。
- CJK 内容应使用 XeLaTeX 并采用 Unicode-safe 的 LaTeX 配置（例如必要时使用 `ctexart`）。
- 可以在 `publications/<slug>/artifacts/` 下提交 LaTeX 构建产物。

## 故障排查

- `latexmk` 命令未找到：
  - 安装 TeX 发行版并确认 `latexmk` 在 `PATH` 中。
- PDF 中出现 CJK 字形/豆腐块问题：
  - 使用 XeLaTeX 模式，并确保已安装所需 CJK 字体。
- LaTeX 错误导致构建中断：
  - 检查 `<slug>.log`，并使用 `-interaction=nonstopmode -halt-on-error` 重试。
- 网站元数据未更新：
  - 重新执行 `node scripts/generate_site.mjs` 并检查 `docs/assets/*.json` 时间戳。

## 路线图

- 保持 README 分类目录与新 ideas/publications 同步。
- 持续提升 `i18n/README.*.md` 的多语言一致性。
- 随文档流程变化优化 MkDocs 配置与已部署静态流水线的对齐。
- 增加轻量级校验规则，检查 README/链接/目录一致性。

<a id="contribution"></a>

## 贡献

- 使用祈使式、范围明确的提交信息（例如：`Update README structure and operational docs`）。
- 按主题/论文集中处理变更。
- 推送前验证 LaTeX 编译与渲染输出。
- Pull Request 应包含：
  - 变更摘要与依据，
  - 涉及路径，
  - 有关构建确认（如适用）。

## 备注

- Markdown 中公式使用 `$...$` 与 `$$...$$`。
- 外部链接中的空格应使用百分号编码，以确保稳定渲染。

## 联系

关于仓库工作流、编辑更新或协作合作有疑问时：

- 在仓库问题追踪器提 issue（若已启用）。
- 对于较长的设计或编辑评审，建议发起 discussion。
- 有关赞助与项目支持选项，请见上方支持面板。

## 许可证

仓库当前尚未包含 `LICENSE` 文件。

假设说明：在添加许可证文件之前，复用与再分发条款尚未定义，需由仓库所有者进一步明确。

## ❤️ Support

| Donate                                                                                                                                                                                                                                                                                                                                                     | PayPal                                                                                                                                                                                                                                                                                                                                                          | Stripe                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
