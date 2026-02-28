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

## 概要

IDEAS は、研究ノートとエッセイを軽量かつバージョン管理で蓄積するノートブックです。

このリポジトリはコンテンツ優先のワークフローを採用しています。
- `ideas/` に Markdown でアイデアを執筆する。
- 成熟したアイデアを `publications/<slug>/` の公開フォルダへ昇格する。
- 公開物のファイル名をスラッグと一致させる（`<slug>.tex`, `<slug>.pdf`）。
- 再現可能な `latexmk` コマンドで公開 PDF を再生成する。
- `i18n/` の多言語 README と `docs/` の静的 Web ページを維持する。

## クイックリンク

| セクション | ジャンプ |
|---|---|
| カタログ | [カテゴリ別カタログ](#カテゴリ別カタログ) |
| ビルドコマンド | [ビルド](#ビルド) |
| 日常ワークフロー | [使い方](#使い方) |
| リポジトリ構成 | [プロジェクト構成](#プロジェクト構成) |
| 運用詳細 | [設定](#設定) |
| コントリビューションガイド | [コントリビューション](#コントリビューション) |
| サポート | [サポート / 寄付](#サポート--寄付) |

## このプロジェクトについて

IDEAS は、研究ノートとエッセイを軽量かつバージョン管理で蓄積するノートブックです。
- コンテンツ優先: すべてのアイデアは `ideas/` の Markdown として管理され、成熟後は `publications/<slug>/<slug>.tex`（およびコンパイル済み PDF）に反映されます。
- 命名規約: ファイル名は kebab-case。公開物ファイル名はフォルダのスラッグに一致（`<slug>.tex`, `<slug>.pdf`）。
- CJK サポート: 中国語の公開物は XeLaTeX でコンパイルします。
- 再現可能ビルド: `latexmk`（Build セクション参照）で PDF を再生成します。

## 特徴

- アイデアから公開までのバージョン管理パイプライン（`ideas/` -> `publications/<slug>/`）。
- カテゴリ別に整理された研究カタログと Markdown/PDF への直接リンク。
- `i18n/` に 9 言語の多言語 README を収録。
- `docs/` に静的サイトコンテンツ、`docs/assets/` に生成マニフェストを配置。
- `scripts/enable-hooks.sh` による任意のローカル Git フック設定。
- 再現性確保のため、有用な場合は公開物アーティファクト（`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`）を含めます。

## カテゴリ別カタログ

### メタサーフェス

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">タイトル</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">言語</th>
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

### 理論

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">タイトル</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">言語</th>
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

### 科学のための AI

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">タイトル</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">言語</th>
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
      <th align="left">タイトル</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">言語</th>
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
      <th align="left">タイトル</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">言語</th>
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

## プロジェクト構成

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

## 前提条件

- `latexmk` が利用可能な TeX 配布（TeX Live など）。
- CJK ビルド向け XeLaTeX サポート（中国語/日本語公開物用）: `xelatex` + CJK 対応フォント。
- サイト資産生成用の Node.js（推奨 18+、`scripts/generate_site.mjs`）。
- バージョン管理およびコントリビューション運用用の Git。

## インストール

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

任意のローカルフック設定:

```bash
bash scripts/enable-hooks.sh
```

## ビルド

- 英語/ASCII PDF:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 中国語 PDF（CJK）:
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- すべての論文をビルド（PDF モード）:
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- LaTeX アーティファクトをクリーン（論文ディレクトリ内）:
  - `latexmk -C`

## 使い方

日常的な基本フロー:

1. `ideas/*.md`（kebab-case ファイル名）にアイデアノートを追加または更新する。
2. 成熟したノートを `publications/<slug>/<slug>.tex` に昇格する。
3. 適切な `latexmk` モードで公開 PDF をコンパイルする。
4. Web サイト用データを公開する場合は静的アセットを再生成する:
   - `node scripts/generate_site.mjs`
5. 出力結果（`.pdf` および必要に応じて `docs/` ページ）を確認する。

## 設定

- `mkdocs.yml` が存在し、MkDocs ベースのドキュメント設定に利用できます。
- `.github/workflows/pages.yml` が現在 `docs/` 向け GitHub Pages デプロイを担っています。
- `docs/assets/i18n.js` と `docs/assets/i18n/*.json` が Web サイトの i18n 動作を制御します。
- `CNAME` と `docs/CNAME` にカスタムドメイン設定が含まれます。

前提メモ: この README は、リポジトリ内に両方存在しているため MkDocs と独自静的サイトパイプラインの参照を保持しています。

## 例

英語公開物を 1 件ビルド:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

中国語公開物を 1 件ビルド:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

docs データ/マニフェストを再生成:

```bash
node scripts/generate_site.mjs
```

## 開発メモ

- Markdown の数式は `$...$` と `$$...$$` を使用します。
- スペースを含む外部リンクは、安定した描画のため percent‑encode しています。
- 加筆中心の編集を優先し、必要がない限り既存ファイル名の変更は避けます。
- CJK コンテンツは XeLaTeX と Unicode 安全な LaTeX 設定（例: 必要に応じた `ctexart`）を使用してください。
- `publications/<slug>/artifacts/` 配下に LaTeX アーティファクトをコミットしても問題ありません。

## トラブルシューティング

- `latexmk` command not found:
  - TeX 配布をインストールし、`latexmk` が `PATH` 上にあることを確認してください。
- PDF に CJK グリフ欠け/豆腐文字が出る:
  - XeLaTeX モードを使用し、必要な CJK フォントがインストールされていることを確認してください。
- LaTeX エラーでビルドが停止する:
  - `<slug>.log` を確認し、`-interaction=nonstopmode -halt-on-error` で再実行してください。
- Web サイトのメタデータが更新されない:
  - `node scripts/generate_site.mjs` を再実行し、`docs/assets/*.json` のタイムスタンプを確認してください。

## ロードマップ

- 新しいアイデア/公開物に合わせて README カタログを同期し続ける。
- `i18n/README.*.md` 全体で多言語間の整合性を強化し続ける。
- docs ワークフローの進化に合わせて、MkDocs 設定とデプロイ済み静的パイプラインの整合性を改善する。
- README/リンク/カタログ整合性の軽量バリデーションチェックを追加する。

## コントリビューション

- 命令形かつスコープ付きのコミットメッセージを使用してください（例: `Update README structure and operational docs`）。
- 変更はトピック/論文ごとに焦点を絞ってください。
- Push 前に LaTeX コンパイルとレンダリング結果を確認してください。
- Pull Request には以下を含めてください:
  - 変更概要と理由
  - 変更したパス
  - 該当する場合はビルド確認

## 注記

- Markdown の数式は `$...$` と `$$...$$` を使用します。
- スペースを含む外部リンクは、安定した描画のため percent‑encode しています。

## サポート / 寄付

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

## ライセンス

このリポジトリには現在 `LICENSE` ファイルが存在しません。

前提メモ: ライセンスファイルが追加されるまでは、再利用・再配布条件は未定義のため、リポジトリ所有者への確認が必要です。
