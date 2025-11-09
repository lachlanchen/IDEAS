🌐 語言： [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

簡述（GitHub）
- 光學、超表面、計算物理、無線供能等研究筆記。每個想法為 `ideas/` 下的 Markdown，並在 `publications/<slug>/` 提供 LaTeX/PDF。中文以 XeLaTeX 編譯。下列為索引與建置方式。

## 關於 / About

IDEAS 是輕量、版本化的研究筆記。
- 內容優先：每項在 `ideas/` 為 Markdown，成熟後鏡像至 `publications/<slug>/<slug>.tex` 並編譯 PDF。
- 規範：檔名採 kebab-case；出版物檔名與資料夾 slug 對應（`<slug>.tex`/`<slug>.pdf`）。
- CJK 支援：中文以 XeLaTeX 編譯。
- 可重製：使用 `latexmk`（見 Build）重建 PDF。

## 內容 / Contents

- 非線性 Kramers–Kronig 關係 — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- 量子地毯：波函復現的分形圖樣 — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- 光學超表面與生物製造：可行性分析 — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 光學超表面與生物製造（草案）— [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis-draft.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 分子編程超表面：Gaussian + Multiwfn + S4 — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- 設計分子編程超表面 — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- 有機染料調控之奈米超表面 — [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON：即貼即充（英文深研）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON（日本語）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- 通俗中文：DORAEMON「一碰即充」說明 — [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## 建置 / Build

- 英文/ASCII：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中文（CJK）：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

## 備註 / Notes

- Markdown 公式：`$...$`、`$$...$$`。
- 含空白的外部連結建議進行 URL 編碼以確保渲染。

