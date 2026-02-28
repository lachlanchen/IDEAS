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

## 개요

IDEAS는 연구 노트와 에세이를 담는 가볍고 버전 관리되는 노트북입니다.

이 저장소는 콘텐츠 우선 워크플로를 따릅니다:
- `ideas/` 하위에 Markdown으로 아이디어를 작성합니다.
- 성숙한 아이디어는 `publications/<slug>/` 아래의 발행 폴더로 승격합니다.
- 발행 파일명은 슬러그와 일치하도록 유지합니다 (`<slug>.tex`, `<slug>.pdf`).
- 재현 가능한 `latexmk` 명령으로 발행 PDF를 다시 빌드합니다.
- `i18n/` 아래 다국어 README 변형과 `docs/` 아래 정적 웹 페이지를 유지합니다.

## 빠른 링크

| 섹션 | 이동 |
|---|---|
| 🗂️ 카탈로그 | [카테고리별 목록](#카탈로그별-카테고리) |
| 🧰 빌드 명령 | [빌드](#빌드) |
| 🧪 일상 워크플로 | [사용법](#사용법) |
| 🧱 저장소 구성 | [프로젝트 구조](#프로젝트-구조) |
| ⚙️ 운영 세부사항 | [구성](#구성) |
| 🧩 기여 가이드 | [기여](#기여) |
| ✉️ 연락 | [연락처](#연락처) |
| ❤️ Support | [Support / Donate](#-support) |

## 소개

IDEAS는 연구 노트와 에세이를 담는 가볍고 버전 관리되는 노트북입니다.
- 콘텐츠 우선: 모든 아이디어는 `ideas/`의 Markdown 파일로 시작하며, 성숙한 항목은 `publications/<slug>/<slug>.tex`로 옮겨져 컴파일된 PDF를 가집니다.
- 규칙: 파일명은 kebab-case를 사용하고, 발행물 파일명은 폴더 슬러그와 일치합니다(`<slug>.tex`, `<slug>.pdf`).
- CJK 지원: 중국어 발행물은 XeLaTeX로 컴파일합니다.
- 재현 가능한 빌드: PDF는 `latexmk`(빌드 섹션 참조)로 재생성합니다.

## 기능

- 버전 관리되는 아이디어→발행 파이프라인 (`ideas/` -> `publications/<slug>/`).
- 카테고리별로 정렬된 연구 카탈로그와 Markdown/PDF 직링크.
- `i18n/` 아래 9개 언어의 다국어 README 세트.
- `docs/` 아래 정적 사이트 콘텐츠와 `docs/assets/`에 생성되는 매니페스트.
- 선택적으로 `scripts/enable-hooks.sh`를 통해 로컬 git hook 설정.
- 필요한 경우 재현성 확보용 발행 아티팩트(`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`)를 저장소에 포함.

## 카탈로그별 카테고리

### 메타서페이스

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">제목</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">언어</th>
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

### 이론

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">제목</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">언어</th>
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
      <th align="left">제목</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">언어</th>
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

### 제품 및 도구

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">제목</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">언어</th>
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
      <th align="left">제목</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">언어</th>
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

## 프로젝트 구조

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Markdown 아이디어 노트
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # 선택적 LaTeX aux/log 파일
├── docs/                          # 정적 웹사이트 + 생성된 자산
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # 다국어 README 변형
└── figs/                          # README 및 기부 배너 자산
```

## 선행 조건

- `latexmk`와 동작하는 TeX 배포판 (TeX Live 또는 동등한 환경).
- CJK 빌드(중국어/일본어 발행물)의 XeLaTeX 지원: `xelatex` + CJK 지원 폰트.
- 사이트 자산 생성(`scripts/generate_site.mjs`)을 위한 Node.js(권장 18+).
- 버전 관리 및 기여를 위한 Git.

## 설치

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

선택적 로컬 hook 설정:

```bash
bash scripts/enable-hooks.sh
```

## 빌드

- 영문/ASCII PDF:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 중국어 PDF (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- 모든 논문 빌드 (PDF 모드):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- LaTeX 산출물 정리(논문 폴더 내부):
  - `latexmk -C`

## 사용법

일상적인 작업 흐름:

1. `ideas/*.md`(`kebab-case` 파일명)에 아이디어 노트를 추가/수정합니다.
2. 성숙한 노트를 `publications/<slug>/<slug>.tex`로 승격합니다.
3. 적절한 `latexmk` 모드로 발행 PDF를 컴파일합니다.
4. 웹사이트 데이터를 발행할 때는 정적 자산을 다시 생성합니다.
   - `node scripts/generate_site.mjs`
5. 렌더링 결과물(`.pdf` 및 필요 시 `docs/` 페이지)을 검증합니다.

## 구성

- `mkdocs.yml`이 존재하며 MkDocs 기반 문서 설정에 사용할 수 있습니다.
- `.github/workflows/pages.yml`이 현재 `docs/`의 GitHub Pages 배포를 관리합니다.
- `docs/assets/i18n.js`와 `docs/assets/i18n/*.json`은 웹사이트의 다국어 동작을 제어합니다.
- `CNAME`과 `docs/CNAME`은 커스텀 도메인 설정을 저장합니다.

가정: 이 README는 저장소에 MkDocs와 커스텀 정적 사이트 파이프라인이 모두 존재하므로, 둘 다 반영하여 유지합니다.

## 예시

영문 발행물 하나 빌드:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

중국어 발행물 하나 빌드:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

사이트 데이터/매니페스트 재생성:

```bash
node scripts/generate_site.mjs
```

## 개발 노트

- Markdown의 수식은 `$...$`와 `$$...$$`를 사용합니다.
- 공백이 있는 외부 링크는 안정적인 렌더링을 위해 URL 인코딩됩니다.
- 덧붙임보다 가감은 최소화하고, 필요하지 않은 기존 파일명 변경은 피합니다.
- CJK 콘텐츠는 XeLaTeX와 Unicode 안전 LaTeX 설정을 사용합니다(예: 적용 가능한 경우 `ctexart`).
- `publications/<slug>/artifacts/` 아래 LaTeX 산출물 저장은 허용됩니다.

## 문제 해결

- `latexmk`를 찾을 수 없는 경우:
  - TeX 배포판을 설치하고 `PATH`에 `latexmk`가 포함되어 있는지 확인하세요.
- PDF에서 CJK 글리프가 tofu로 보이는 경우:
  - XeLaTeX 모드를 사용하고 필요한 CJK 폰트가 설치되어 있는지 확인하세요.
- LaTeX 오류로 빌드가 중단될 때:
  - `<slug>.log`를 확인하고 `-interaction=nonstopmode -halt-on-error`로 다시 실행하세요.
- 웹사이트 메타데이터가 갱신되지 않을 때:
  - `node scripts/generate_site.mjs`를 다시 실행하고 `docs/assets/*.json`의 타임스탬프를 확인하세요.

## 로드맵

- README 카탈로그를 새 아이디어/발행물과 동기화 상태로 유지합니다.
- `i18n/README.*.md` 간 다국어 파싱 일치를 계속 강화합니다.
- 문서 워크플로가 진화함에 따라 MkDocs 설정과 실제 정적 배포 파이프라인 정합성을 개선합니다.
- README/링크/카탈로그 일관성 검증을 위한 가벼운 체크를 추가합니다.

## 기여

- 명령형이며 범위가 명확한 커밋 메시지를 사용하세요(예: `README 구조 업데이트 및 운영 문서 정비`).
- 변경은 주제/논문 단위로 집중합니다.
- 푸시 전 LaTeX 컴파일 및 렌더링 결과 확인을 권장합니다.
- PR에는 다음이 포함되어야 합니다.
  - 요약 및 근거,
  - 수정된 경로 목록,
  - 필요 시 빌드 확인 결과.

## 참고

- Markdown 수식은 `$...$`와 `$$...$$`를 사용합니다.
- 공백이 포함된 외부 링크는 신뢰성 있는 렌더링을 위해 percent-encoding 됩니다.

## 연락처

저장소 워크플로, 편집 업데이트, 협업에 대한 질문이 있으시면:
- 저장소 이슈 트래커에 이슈를 등록하세요(활성화되어 있는 경우).
- 긴 형식 리뷰나 편집 검토는 discussion을 시작하세요.
- 후원/프로젝트 지원 옵션은 위의 Support 패널을 참고하세요.

## 라이선스

현재 이 저장소에는 `LICENSE` 파일이 없습니다.

가정: 라이선스 파일이 추가되기 전까지는 재사용/배포 조건이 정의되지 않았으며 저장소 소유자가 명확히 해야 합니다.


## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
