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

## 概覽

IDEAS 是一個輕量、可版本化的研究筆記與隨筆專案。

本庫採用內容優先的工作流程：
- 在 `ideas/` 下以 Markdown 撰寫想法。
- 將成熟的想法轉為 `publications/<slug>/` 下的出版內容。
- 保持出版檔名與資料夾 slug 對應（`<slug>.tex`、`<slug>.pdf`）。
- 使用可重現的 `latexmk` 指令重新生成 PDF。
- 在 `i18n/` 下維護多語言 README，並在 `docs/` 下維護靜態網頁。

## 快速連結

| 區段 | 跳轉 |
|---|---|
| 🗂️ 目錄 | [依類別目錄](#catalog-by-category) |
| 🧰 建置指令 | [建置](#build) |
| 🧪 日常流程 | [用法](#usage) |
| 🧱 專案架構 | [專案結構](#project-structure) |
| ⚙️ 運維明細 | [設定](#configuration) |
| 🧩 貢獻指引 | [貢獻](#contribution) |
| ✉️ 聯絡 | [聯絡](#contact) |
| ❤️ Support | [Support / Donate](#-support) |

## 關於

IDEAS 是一個輕量、可版本化的研究筆記與隨筆專案。
- 內容優先：每個想法都先以 `ideas/` 中的 Markdown 存放；成熟後同步到 `publications/<slug>/<slug>.tex` 並編譯為 PDF。
- 慣例：檔名採用 kebab-case；出版檔名與資料夾 slug 保持一致（`<slug>.tex`、`<slug>.pdf`）。
- 可重現建置：使用 `latexmk`（見建置章節）重建 PDF。

## 功能

- 版本化的 idea-to-publication 流程（`ideas/` -> `publications/<slug>/`）。
- 依類別組織研究目錄，提供 Markdown/PDF 直接連結。
- 在 `i18n/` 下維護 9 種語言的 README。
- `docs/` 中維護靜態網站內容，並在 `docs/assets/` 生成目錄清單。
- 可選透過 `scripts/enable-hooks.sh` 設定本機 Git hook。
- 倘若有助於可重現性，儲存 LaTeX 建置產物（`.aux`、`.log`、`.fls`、`.fdb_latexmk`、`.out`）。

<a id="catalog-by-category"></a>
## 按類別目錄

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
      <th align="left">標題</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">語言</th>
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
      <td>有機染料調控的奈米超表面（中文）</td>
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
      <th align="left">標題</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">語言</th>
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
      <th align="left">標題</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">語言</th>
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
      <th align="left">標題</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">語言</th>
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
      <th align="left">標題</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">語言</th>
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
      <td>用通俗中文講清楚：DORAEMON「一碰即充」完整說明</td>
      <td><a href="ideas/doraemon-tap-and-charge-explainer-zh.md">Markdown</a></td>
      <td><a href="publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf">PDF</a></td>
      <td>ZH</td>
    </tr>
  </tbody>
  </table>

<a id="project-structure"></a>
## 專案結構

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
│       └── artifacts/             # 可選的 LaTeX 中繼檔案
├── docs/                          # 靜態網站與生成資源
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # 多語言 README 變體
└── figs/                          # README 與捐贈素材
```

## 先決條件

- `latexmk` 與可用的 TeX 發行版（TeX Live 或同等版本）。
- 中文論文使用 XeLaTeX（中日文出版）：`xelatex` + 支援 CJK 的字型。
- Node.js（建議 18+）用於網站資源生成（`scripts/generate_site.mjs`）。
- 用於版本管理與協作流程的 Git。

## 安裝

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

可選本機 hook 設定：

```bash
bash scripts/enable-hooks.sh
```

<a id="build"></a>
## 建置

- 英文 / ASCII PDF：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中文 PDF（CJK）：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- 一次建置全部論文（PDF 模式）：
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- 清理 LaTeX 產生檔案（在論文資料夾內）：
  - `latexmk -C`

<a id="usage"></a>
## 使用

常見日常流程：

1. 在 `ideas/*.md` 新增或更新想法筆記（kebab-case 檔名）。
2. 將成熟筆記升級至 `publications/<slug>/<slug>.tex`。
3. 使用適當的 `latexmk` 模式編譯出版 PDF。
4. 如要發佈網站資料，請重新生成靜態資源：
   - `node scripts/generate_site.mjs`
5. 驗證渲染結果（`.pdf` 與可選的 `docs/` 頁面）。

<a id="configuration"></a>
## 組態

- `mkdocs.yml` 存在，可作為 MkDocs 文件設定使用。
- `.github/workflows/pages.yml` 目前用於為 `docs/` 推動 GitHub Pages 部署。
- `docs/assets/i18n.js` 與 `docs/assets/i18n/*.json` 負責網站 i18n 行為。
- `CNAME` 與 `docs/CNAME` 儲存自訂網域設定。

假設說明：本 README 同時保留 MkDocs 與自訂靜態網站流水線說明，因為兩者都在庫內存在。

## 範例

建置一篇英文出版品：

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

建置一篇中文出版品：

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

更新 docs 資料／目錄：

```bash
node scripts/generate_site.mjs
```

## 開發說明

- Markdown 公式使用 `$...$` 與 `$$...$$`。
- 含空格的外部連結請用 URL 編碼以提升渲染穩定性。
- 優先採用增量式修改；除非必要，避免重新命名既有檔案。
- CJK 內容應使用 XeLaTeX，並採用 Unicode 相容的 LaTeX 設定（例如必要時使用 `ctexart`）。
- 可在 `publications/<slug>/artifacts/` 下提交 LaTeX 建置產物。

## 疑難排解

- 找不到 `latexmk` 指令：
  - 安裝 TeX 發行版並確認 `latexmk` 在 `PATH`。
- PDF 出現 CJK 字形或豆腐方塊問題：
  - 改用 XeLaTeX 並確認已安裝所需 CJK 字型。
- LaTeX 發生錯誤導致建置中止：
  - 檢查 `<slug>.log`，再以 `-interaction=nonstopmode -halt-on-error` 重試。
- 網站中繼資料未更新：
  - 重新執行 `node scripts/generate_site.mjs` 並檢查 `docs/assets/*.json` 時間戳。

## 路線圖

- 維持 README 分類目錄與新 ideas/publications 同步。
- 持續強化 `i18n/README.*.md` 的多語言對齊。
- 讓 MkDocs 設定與已部署靜態網站流水線隨流程進展更一致。
- 加入輕量化驗證，檢查 README/連結/目錄一致性。

<a id="contribution"></a>
## 貢獻

- 使用祈使式且具範圍的提交訊息（例如：`Update README structure and operational docs`）。
- 以題目或論文為主，保持變更集中。
- 推送前驗證 LaTeX 編譯與輸出渲染。
- Pull Request 應包含：
  - 變更摘要與理由，
  - 涉及路徑，
  - 有關建置驗證（如適用）。

## 備註

- Markdown 公式使用 `$...$` 與 `$$...$$`。
- 含空格的外部連結建議以 URL 編碼。

## 聯絡

關於本庫的工作流程、編修更新或協作合作有任何問題：
- 在本庫 issue tracker 開啟 issue（若已啟用）。
- 若是較長的設計或編修 review，可開啟 discussion。
- 關於贊助與專案支援方案，請見上方 Support 面板。

## 授權

目前本庫尚未包含 `LICENSE` 檔案。

假設說明：在新增授權檔案前，重複使用與再分發條款未被定義，需由本庫擁有者進一步明確。


## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
