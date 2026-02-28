[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)


<p align="center">
  <img src="https://raw.githubusercontent.com/lachlanchen/lachlanchen/main/logos/banner.png" alt="LazyingArt banner" />
</p>

# IDEAS

![Status](https://img.shields.io/badge/status-active-0a7f5a)
![Content](https://img.shields.io/badge/content-Markdown%20%2B%20LaTeX-blue)
![Languages](https://img.shields.io/badge/i18n-9%20README%20languages-orange)
![Build](https://img.shields.io/badge/build-latexmk-1f6feb)
![CJK](https://img.shields.io/badge/CJK-XeLaTeX-22863a)
![Site](https://img.shields.io/badge/docs-static%20assets-6f42c1)

## 概览

IDEAS 是一个轻量、可版本化的研究笔记与论文随笔仓库。

本仓库采用内容优先（content-first）工作流：
- 在 `ideas/` 下以 Markdown 撰写想法。
- 将成熟内容提升到 `publications/<slug>/` 下的出版目录。
- 保持出版文件名与 slug 一致（`<slug>.tex`、`<slug>.pdf`）。
- 通过可复现的 `latexmk` 命令重新生成 PDF。
- 在 `i18n/` 维护多语言 README，并在 `docs/` 维护静态网页。

<a id="quick-links"></a>
## 快速链接

| 区块 | 跳转 |
|---|---|
| 目录 | [按类别目录](#catalog-by-category) |
| 构建命令 | [构建](#build) |
| 日常流程 | [使用](#usage) |
| 仓库结构 | [项目结构](#project-structure) |
| 运维细节 | [配置](#configuration) |
| 贡献指南 | [贡献](#contribution) |
| 支持 | [支持 / 捐赠](#support--donate) |

## 关于

IDEAS 是一个轻量、可版本化的研究笔记与论文随笔仓库。
- 内容优先：每个想法都以 `ideas/` 中的 Markdown 管理；成熟后同步到 `publications/<slug>/<slug>.tex` 并编译 PDF。
- 约定：文件名使用 kebab-case；出版文件名与目录 slug 保持一致（`<slug>.tex`、`<slug>.pdf`）。
- CJK 支持：中文出版内容使用 XeLaTeX 编译。
- 可复现构建：使用 `latexmk`（见 Build 章节）重建 PDF。

## 特性

- 版本化的 idea-to-publication 流程（`ideas/` -> `publications/<slug>/`）。
- 按类别组织的研究目录，并提供 Markdown/PDF 直链。
- 在 `i18n/` 下提供 9 种语言的 README。
- 在 `docs/` 下维护静态站点内容，并在 `docs/assets/` 下生成清单文件。
- 支持通过 `scripts/enable-hooks.sh` 可选启用本地 git hook。
- 在有助于复现的场景下，仓库可包含出版构建产物（`.aux`、`.log`、`.fls`、`.fdb_latexmk`、`.out`）。

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
│       └── artifacts/             # optional LaTeX aux/log files
├── docs/                          # static website + generated assets
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # multilingual README variants
└── figs/                          # README and donation assets
```

## 先决条件

- `latexmk`，以及可用的 TeX 发行版（TeX Live 或同类方案）。
- CJK 构建所需 XeLaTeX 支持（用于中文/日文出版）：`xelatex` + 支持 CJK 的字体。
- 用于站点资源生成的 Node.js（建议 18+，对应 `scripts/generate_site.mjs`）。
- 用于版本管理与协作流程的 Git。

## 安装

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

可选：启用本地 hook：

```bash
bash scripts/enable-hooks.sh
```

<a id="build"></a>
## 构建

- 英文/ASCII PDF：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中文 PDF（CJK）：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- 构建全部论文（PDF 模式）：
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- 清理 LaTeX 构建产物（在论文目录内）：
  - `latexmk -C`

<a id="usage"></a>
## 使用

日常工作流：

1. 在 `ideas/*.md` 中新增或更新想法笔记（kebab-case 文件名）。
2. 将成熟笔记提升到 `publications/<slug>/<slug>.tex`。
3. 使用对应的 `latexmk` 模式编译出版 PDF。
4. 如需发布网站数据，重新生成静态资源：
   - `node scripts/generate_site.mjs`
5. 校验渲染结果（`.pdf`，以及可选的 `docs/` 页面）。

<a id="configuration"></a>
## 配置

- 存在 `mkdocs.yml`，可用于基于 MkDocs 的文档配置。
- `.github/workflows/pages.yml` 当前用于 `docs/` 的 GitHub Pages 部署。
- `docs/assets/i18n.js` 与 `docs/assets/i18n/*.json` 控制网站 i18n 行为。
- `CNAME` 与 `docs/CNAME` 保存自定义域名设置。

假设说明：本 README 同时保留 MkDocs 与自定义静态站点流水线的描述，因为两者都在仓库中存在。

## 示例

构建一篇英文出版内容：

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

构建一篇中文出版内容：

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
- 带空格的外部链接使用百分号编码，以保证渲染稳定。
- 优先采用增量修改；除非必要，避免重命名现有文件。
- CJK 内容应使用 XeLaTeX 与 Unicode 安全的 LaTeX 配置（例如适用时使用 `ctexart`）。
- 允许在 `publications/<slug>/artifacts/` 下提交 LaTeX 构建产物。

## 故障排查

- `latexmk` command not found：
  - 安装 TeX 发行版，并确认 `latexmk` 在 `PATH` 中。
- PDF 出现 CJK 字形/豆腐块问题：
  - 使用 XeLaTeX 模式，并确保已安装所需 CJK 字体。
- LaTeX 错误导致构建中断：
  - 检查 `<slug>.log`，并使用 `-interaction=nonstopmode -halt-on-error` 重试。
- 网站元数据未更新：
  - 重新执行 `node scripts/generate_site.mjs`，并检查 `docs/assets/*.json` 时间戳。

## 路线图

- 让 README 目录与新增 ideas/publications 保持同步。
- 继续增强 `i18n/README.*.md` 的多语言一致性。
- 随 docs 工作流演进，持续改进 MkDocs 配置与已部署静态流水线的一致性。
- 增加轻量校验，检查 README/链接/目录的一致性。

<a id="contribution"></a>
## 贡献

- 使用祈使语气且有范围的提交信息（示例：`Update README structure and operational docs`）。
- 变更应按主题/论文聚焦。
- 推送前请验证 LaTeX 编译与渲染结果。
- Pull Request 应包含：
  - 变更摘要与理由，
  - 涉及路径，
  - 如有必要，附构建确认。

## 备注

- Markdown 中公式使用 `$...$` 与 `$$...$$`。
- 带空格的外部链接使用百分号编码，以保证渲染稳定。

<a id="support--donate"></a>
## 支持 / 捐赠

<div align="center">
<table width="100%" style="width:100%; table-layout:fixed; margin:0 auto; text-align:center; border-collapse:collapse; word-break:break-word; overflow-wrap:anywhere;">
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://chat.lazying.art/donate">https://chat.lazying.art/donate</a>
    </td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://chat.lazying.art/donate"><img src="figs/donate_button.svg" alt="Donate" height="44"></a>
    </td>
  </tr>
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://paypal.me/RongzhouChen">
        <img src="https://img.shields.io/badge/PayPal-Donate-003087?logo=paypal&logoColor=white" alt="Donate with PayPal">
      </a>
    </td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;">
      <a href="https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400">
        <img src="https://img.shields.io/badge/Stripe-Donate-635bff?logo=stripe&logoColor=white" alt="Donate with Stripe">
      </a>
    </td>
  </tr>
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><strong>WeChat</strong></td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><strong>Alipay</strong></td>
  </tr>
  <tr>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><img alt="WeChat QR" src="figs/donate_wechat.png" width="240"/></td>
    <td style="text-align:center; vertical-align:middle; padding:6px 12px;"><img alt="Alipay QR" src="figs/donate_alipay.png" width="240"/></td>
  </tr>
</table>
 </div>

## 许可证

本仓库当前不存在 `LICENSE` 文件。

假设说明：在添加许可证文件前，复用/再分发条款尚未定义，应由仓库所有者进一步明确。
