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

## 概覽

IDEAS 是一個輕量、可版本化管理的研究筆記與隨筆倉庫。

此儲存庫採用內容優先（content-first）工作流程：
- 在 `ideas/` 下以 Markdown 撰寫想法。
- 將成熟想法提升為 `publications/<slug>/` 下的出版資料夾。
- 保持出版檔名與 slug 一致（`<slug>.tex`、`<slug>.pdf`）。
- 以可重現的 `latexmk` 指令重新產生出版 PDF。
- 在 `i18n/` 維護多語 README，並在 `docs/` 維護靜態網站頁面。

## 快速連結

| 區段 | 跳轉 |
|---|---|
| 目錄 | [按分類目錄](#按分類目錄) |
| 建置指令 | [建置](#建置) |
| 日常工作流程 | [使用方式](#使用方式) |
| 儲存庫結構 | [專案結構](#專案結構) |
| 運維細節 | [設定](#設定) |
| 貢獻指南 | [貢獻](#貢獻) |
| 支援 | [支援 / 贊助](#支援--贊助) |

## 關於

IDEAS 是一個輕量、可版本化管理的研究筆記與隨筆倉庫。
- 內容優先：每個想法先以 `ideas/` 中的 Markdown 存放，成熟後對應到 `publications/<slug>/<slug>.tex` 的 LaTeX，並編譯成 PDF。
- 慣例：檔名使用 kebab-case；出版檔名需與資料夾 slug 對齊（`<slug>.tex`、`<slug>.pdf`）。
- 可重現建置：使用 `latexmk`（見「建置」章節）重新產生 PDF。

## 功能特色

- 版本化的 idea-to-publication 流水線（`ideas/` -> `publications/<slug>/`）。
- 依分類整理的研究目錄，附直接 Markdown/PDF 連結。
- 在 `i18n/` 下維護 9 種語言的 README。
- `docs/` 下提供靜態網站內容，並在 `docs/assets/` 產生 manifest。
- 可選擇透過 `scripts/enable-hooks.sh` 啟用本地 git hooks。
- 儲存庫在有助於可重現性時包含出版 artifacts（`.aux`、`.log`、`.fls`、`.fdb_latexmk`、`.out`）。

## 按分類目錄

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
      <td>用通俗中文讲清楚：DORAEMON「一碰即充」完整说明</td>
      <td><a href="ideas/doraemon-tap-and-charge-explainer-zh.md">Markdown</a></td>
      <td><a href="publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf">PDF</a></td>
      <td>ZH</td>
    </tr>
  </tbody>
  </table>

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

## 先決條件

- `latexmk` 與可用的 TeX 發行版（TeX Live 或同等方案）。
- 站點資產生成所需 Node.js（建議 18+，使用 `scripts/generate_site.mjs`）。
- 版本管理與協作流程所需 Git。

## 安裝

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

可選的本機 hook 設定：

```bash
bash scripts/enable-hooks.sh
```

## 建置

- 英文/ASCII PDF：
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中文 PDF（CJK）：
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- 建置所有論文（PDF 模式）：
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- 清理 LaTeX artifacts（在論文目錄內）：
  - `latexmk -C`

## 使用方式

常見日常流程：

1. 在 `ideas/*.md` 新增或更新想法筆記（檔名採 kebab-case）。
2. 將成熟筆記提升為 `publications/<slug>/<slug>.tex`。
3. 以合適的 `latexmk` 模式編譯出版 PDF。
4. 若要發布網站資料，重新生成靜態資產：
   - `node scripts/generate_site.mjs`
5. 驗證輸出渲染結果（`.pdf`，以及可選的 `docs/` 頁面）。

## 設定

- `mkdocs.yml` 已存在，可用於 MkDocs 文件設定。
- `.github/workflows/pages.yml` 目前負責 `docs/` 的 GitHub Pages 部署。
- `docs/assets/i18n.js` 與 `docs/assets/i18n/*.json` 控制網站 i18n 行為。
- `CNAME` 與 `docs/CNAME` 儲存自訂網域設定。

假設說明：此 README 同時保留 MkDocs 與自訂靜態站點流程的描述，因為兩者都存在於此儲存庫中。

## 範例

建置一篇英文出版：

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

建置一篇中文出版：

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

重新生成 docs 資料/manifest：

```bash
node scripts/generate_site.mjs
```

## 開發備註

- Markdown 公式使用 `$...$` 與 `$$...$$`。
- 含空白字元的外部連結會使用 percent-encoding 以確保穩定渲染。
- 優先採用增量修改，除非必要避免重新命名既有檔案。
- CJK 內容應使用 XeLaTeX 與 Unicode-safe 的 LaTeX 設定（例如適用時使用 `ctexart`）。
- 允許提交 `publications/<slug>/artifacts/` 下的 LaTeX artifacts。

## 疑難排解

- 找不到 `latexmk` 指令：
  - 安裝 TeX 發行版，並確認 `latexmk` 已加入 `PATH`。
- PDF 出現 CJK 字形/豆腐字問題：
  - 使用 XeLaTeX 模式，並確認已安裝所需 CJK 字型。
- 建置因 LaTeX 錯誤中止：
  - 檢查 `<slug>.log`，並以 `-interaction=nonstopmode -halt-on-error` 重新執行。
- 網站中繼資料未更新：
  - 重新執行 `node scripts/generate_site.mjs`，並確認 `docs/assets/*.json` 時間戳。

## 路線圖

- 讓 README 目錄持續與新增 idea/publication 同步。
- 持續強化 `i18n/README.*.md` 之間的多語一致性。
- 隨著文件流程演進，改善 MkDocs 設定與實際部署的靜態流程一致性。
- 新增輕量檢查，驗證 README/連結/目錄一致性。

## 貢獻

- 使用祈使語氣且具範圍的 commit 訊息（例如：`Update README structure and operational docs`）。
- 以主題/論文維持變更聚焦。
- 推送前請先驗證 LaTeX 編譯與渲染輸出。
- Pull Request 應包含：
  - 變更摘要與理由，
  - 變更路徑，
  - 適用時的建置確認。

## 備註

- Markdown 公式使用 `$...$` 與 `$$...$$`。
- 含空白字元的外部連結會使用 percent-encoding 以確保穩定渲染。

## 支援 / 贊助

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

## 授權

此儲存庫目前尚未提供 `LICENSE` 檔案。

假設說明：在新增授權檔前，重用/再散布條款尚未明確，應由儲存庫擁有者補充說明。
