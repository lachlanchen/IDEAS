🌐 语言： [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

简述（用于 GitHub）
- 光学、超表面、计算物理、无线供能等研究随笔。每个想法存为 `ideas/` 下的 Markdown，并在 `publications/<slug>/` 提供 LaTeX/PDF。中文文档使用 XeLaTeX 编译。下方为索引与构建命令。

## About / 关于

IDEAS 是一个轻量、版本化的研究笔记。
- 内容优先：每条目在 `ideas/` 中为 Markdown，成熟后镜像到 `publications/<slug>/<slug>.tex` 并编译 PDF。
- 约定：文件名用 kebab-case；出版物文件名与目录 slug 匹配（`<slug>.tex`/`<slug>.pdf`）。
- CJK 支持：中文文档用 XeLaTeX 编译。
- 可复现实验：用 `latexmk`（见 Build）重建 PDF。

## 目录 / Contents

- 非线性 Kramers–Kronig 关系：超越线性的因果性 — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- 量子地毯：波函数复现的分形图样 — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- 光学超表面与生物制造：可行性分析 — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 光学超表面与生物制造（草案）— [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis-draft.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 分子编程超表面：Gaussian + Multiwfn + S4 工作流 — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- 借助 Gaussian、Multiwfn 与 S4 设计分子编程超表面 — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- 有机染料调控的纳米超表面：让超薄结构把光吃干抹净 — [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON: 即贴即充（深研稿，英文）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON（日本語）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- 用通俗中文讲清楚：DORAEMON「一碰即充」完整说明 — [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## 构建 / Build

- 英文/ASCII PDF：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中文（CJK）PDF：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

## 说明 / Notes

- Markdown 公式用 `$...$` 与 `$$...$$`。
- 外链包含空格时建议进行 URL 编码以避免渲染问题。

