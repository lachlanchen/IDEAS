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

## 概要

IDEAS は、研究ノートやエッセイのための軽量なバージョン管理付きノートブックです。

このリポジトリはコンテンツ優先のワークフローを採用しています。
- `ideas/` 配下に Markdown でアイデアを作成します。
- 成熟したアイデアを `publications/<slug>/` 内の出版フォルダへ昇格します。
- 出版物のファイル名をスラッグと一致させます（`<slug>.tex`, `<slug>.pdf`）。
- 再現可能な `latexmk` コマンドで出版用 PDF を再生成します。
- `i18n/` で多言語 README を維持し、`docs/` で静的 Web ページを維持します。

## クイックリンク

| セクション | ジャンプ |
|---|---|
| 🗂️ カタログ | [カテゴリ別カタログ](#カテゴリ別カタログ) |
| 🧰 ビルドコマンド | [ビルド](#ビルド) |
| 🧪 日常ワークフロー | [使い方](#使い方) |
| 🧱 リポジトリ構成 | [プロジェクト構成](#プロジェクト構成) |
| ⚙️ 運用詳細 | [設定](#設定) |
| 🧩 貢献ガイド | [貢献](#貢献) |
| ✉️ お問い合わせ | [お問い合わせ](#お問い合わせ) |
| ❤️ サポート | [サポート / 寄付](#-support) |

## このプロジェクトについて

IDEAS は研究ノートやエッセイのための軽量なバージョン管理付きノートブックです。
- コンテンツ優先: 全てのアイデアは `ideas/` に Markdown として保存され、成熟後に `publications/<slug>/<slug>.tex` へ（コンパイル済み PDF と共に）ミラーされます。
- 命名規約: ファイル名は kebab-case を使用し、出版物ファイル名はフォルダのスラッグと一致させます（`<slug>.tex`, `<slug>.pdf`）。
- CJK 対応: 中国語の出版物は XeLaTeX でコンパイルします。
- 再現可能なビルド: `latexmk`（ビルド節参照）で PDF を再生成します。

## 特徴

- バージョン管理されたアイデア→出版パイプライン（`ideas/` -> `publications/<slug>/`）。
- カテゴリ別に整理された研究カタログと直接 Markdown/PDF リンク。
- `i18n/` 配下の 9 言語対応 README セット。
- `docs/` 配下に静的サイト用コンテンツを置き、`docs/assets/` に生成済みマニフェストを保持。
- `scripts/enable-hooks.sh` を使った任意のローカル Git hook 設定。
- 再現性向上のため、必要に応じて出版物の成果物（`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`）を保存。

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

### 科学における AI

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
├── ideas/                         # Markdown アイデアノート
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # 任意の LaTeX aux/log ファイル
├── docs/                          # 静的サイト + 生成済みアセット
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # 多言語 README
└── figs/                          # README と寄付アセット
```

## 前提条件

- `latexmk` と動作する TeX 配布環境（TeX Live など）。
- CJK 向けビルドのための XeLaTeX 対応（中国語/日本語出版物）: `xelatex` + CJK 対応フォント。
- サイト資産生成用 Node.js（推奨 18+）: `scripts/generate_site.mjs`。
- バージョン管理とコラボレーションのための Git。

## インストール

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

必要に応じたローカル hook 設定:

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
- LaTeX アーティファクトをクリーンアップ（論文ディレクトリ内）:
  - `latexmk -C`

## 使い方

日常的な運用フロー:

1. `ideas/*.md` へアイデアノートを追加・更新する（ファイル名は kebab-case）。
2. 成熟したノートを `publications/<slug>/<slug>.tex` へ昇格する。
3. 適切な `latexmk` モードで出版 PDF をコンパイルする。
4. ウェブサイトデータを公開する場合は静的アセットを再生成する:
   - `node scripts/generate_site.mjs`
5. レンダリング結果（`.pdf` と必要なら `docs/` ページ）を検証する。

## 設定

- `mkdocs.yml` が存在し、MkDocs ベースのドキュメント設定に利用できます。
- `.github/workflows/pages.yml` は現在 `docs/` への GitHub Pages 配信を担当しています。
- `docs/assets/i18n.js` と `docs/assets/i18n/*.json` がウェブサイトの i18n 動作を制御します。
- `CNAME` と `docs/CNAME` はカスタムドメイン設定を保持します。

前提メモ: この README は両方のパイプラインがリポジトリに存在するため、MkDocs とカスタム静的サイトの両方の参照を維持しています。

## 例

英語論文を 1 件ビルド:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

中国語論文を 1 件ビルド:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

docs データ/マニフェストを再生成:

```bash
node scripts/generate_site.mjs
```

## 開発ノート

- Markdown の数式は `$...$` と `$$...$$` を使用します。
- スペースを含む外部リンクは表示の安定性のためにパーセントエンコードします。
- 追加編集を優先し、必要がない限り既存ファイル名の変更は避けます。
- CJK コンテンツは XeLaTeX と Unicode 安全な LaTeX 設定を使用します（例えば該当時に `ctexart` を利用）。
- 必要に応じて `publications/<slug>/artifacts/` に LaTeX の成果物をコミットしても問題ありません。

## トラブルシューティング

- `latexmk` コマンドが見つからない:
  - TeX 配布をインストールし、`latexmk` が `PATH` にあることを確認します。
- PDF の CJK グリフ/豆腐文字問題:
  - XeLaTeX モードを使用し、必要な CJK フォントがインストールされていることを確認します。
- LaTeX エラーでビルドが停止する:
  - `<slug>.log` を確認し、`-interaction=nonstopmode -halt-on-error` で再実行します。
- ウェブサイトメタデータが更新されない:
  - `node scripts/generate_site.mjs` を再実行し、`docs/assets/*.json` のタイムスタンプを確認します。

## ロードマップ

- README カタログを新規アイデア/出版物と同期状態に保つ。
- `i18n/README.*.md` 全体で多言語の整合を強化し続ける。
- ドキュメントワークフローの進化に合わせて MkDocs 設定とデプロイ済み静的パイプラインの整合を改善する。
- README/リンク/カタログの整合性チェックを軽量化する。

## 貢献

- 命令形で範囲を絞ったコミットメッセージを使う（例: `Update README structure and operational docs`）。
- 変更は論点／論文ごとに集中する。
- プッシュ前に LaTeX コンパイルとレンダリング結果を確認する。
- プルリクエストには以下を含めること。
  - 変更の要約と根拠
  - 変更したパス
  - 必要に応じてビルド確認

## 注記

- Markdown の数式は `$...$` と `$$...$$` を使用します。
- スペースを含む外部リンクは表示の安定性のためにパーセントエンコードします。

## お問い合わせ

このリポジトリのワークフロー、編集更新、共同編集についての質問:
- リポジトリの Issue トラッカー（有効な場合）で Issue を開いてください。
- より長い設計レビューや編集レビューは Discussion を開始してください。
- 協賛・支援の方法については、上記サポートパネルをご確認ください。

## ライセンス

現在このリポジトリには `LICENSE` ファイルがありません。

前提メモ: ライセンスファイルが追加されるまで、再利用・再配布条件は未定義であり、リポジトリ所有者により明確化されるべきです。


## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
