🌐 言語: [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

概要（GitHub 用）
- 光学・メタサーフェス・計算物理・無線給電に関するノート。各アイデアは `ideas/` の Markdown と、`publications/<slug>/` の LaTeX/PDF を提供。CJK は XeLaTeX でビルド。

## About / 概要

IDEAS は軽量でバージョン管理された研究ノートです。
- コンテンツ優先：`ideas/` に Markdown、成熟後 `publications/<slug>/<slug>.tex` と PDF を用意。
- 規約：kebab-case ファイル名。出版物のファイル名はスラッグに一致（`<slug>.tex`/`<slug>.pdf`）。
- CJK サポート：中文等は XeLaTeX でビルド。
- 再現性：`latexmk` で PDF を再生成。

## 目次 / Contents

- 非線形クラーマース–クローニッヒ — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- 量子カーペット — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- 光学メタサーフェスとバイオファブ — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 光学メタサーフェスとバイオファブ（草稿）— [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis-draft.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 分子プログラムド・メタサーフェス：Gaussian + Multiwfn + S4 — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- Gaussian・Multiwfn・S4 による設計 — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- 有機色素メタサーフェス（中文）— [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON（英語）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON（日本語）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- DORAEMON（中文解説）— [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## Build

- 英文/ASCII：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- CJK：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

