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

## 개요

IDEAS는 연구 노트와 에세이를 위한 가볍고 버전 관리되는 노트북입니다.

이 저장소는 콘텐츠 우선 워크플로를 따릅니다.
- `ideas/` 아래 Markdown으로 아이디어를 작성합니다.
- 성숙한 아이디어는 `publications/<slug>/` 아래 출판 폴더로 승격합니다.
- 출판 파일명은 슬러그와 일치하도록 유지합니다(````, ````).
- 재현 가능한 `latexmk` 명령으로 출판 PDF를 다시 생성합니다.
- `i18n/` 아래 다국어 README 변형과 `docs/` 아래 정적 웹 페이지를 유지합니다.

## 빠른 링크

| 섹션 | 이동 |
|---|---|
| 카탈로그 | [카테고리별 카탈로그](#카테고리별-카탈로그) |
| 빌드 명령 | [빌드](#빌드) |
| 일상 워크플로 | [사용법](#사용법) |
| 저장소 구조 | [프로젝트 구조](#프로젝트-구조) |
| 운영 세부사항 | [구성](#구성) |
| 기여 가이드 | [기여](#기여) |
| 후원 | [지원 / 후원](#지원--후원) |

## 소개

IDEAS는 연구 노트와 에세이를 위한 가볍고 버전 관리되는 노트북입니다.
- 콘텐츠 우선: 모든 아이디어는 `ideas/`의 Markdown이며, 성숙 시 LaTeX(`publications/<slug>/`)으로 미러링되고 컴파일된 PDF를 가집니다.
- 규칙: 파일명은 kebab-case를 사용하며, 출판 파일명은 폴더 슬러그와 일치합니다(`<slug>.tex`, `<slug>.pdf`).
- CJK 지원: 중국어 출판물은 XeLaTeX로 컴파일합니다.
- 재현 가능한 빌드: `latexmk`로 PDF를 재생성합니다(빌드 섹션 참고).

## 특징

- 버전 관리되는 아이디어→출판 파이프라인(`ideas/` -> `publications/<slug>/`).
- 카테고리별로 정리된 연구 카탈로그와 Markdown/PDF 직링크.
- `i18n/` 아래 9개 언어의 다국어 README 세트.
- `docs/` 아래 정적 사이트 콘텐츠와 `docs/assets/` 아래 생성된 매니페스트.
- `scripts/enable-hooks.sh`를 통한 선택적 로컬 git hook 설정.
- 재현성 확보에 유용한 경우 출판 아티팩트(`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`)를 저장소에 포함.

## 카테고리별 카탈로그

### 메타표면

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

### 과학을 위한 AI

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
│       ├── 
│       ├── 
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
└── figs/                          # README 및 후원 자산
```

## 사전 요구사항

- 동작 가능한 TeX 배포판(TeX Live 등)과 `latexmk`.
- CJK 빌드를 위한 XeLaTeX 지원(중국어/일본어 출판물): `xelatex` + CJK 지원 폰트.
- 사이트 자산 생성용 Node.js(권장 18+) (`scripts/generate_site.mjs`).
- 버전 관리 및 기여 워크플로를 위한 Git.

## 설치

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

선택적 로컬 훅 설정:

```bash
bash scripts/enable-hooks.sh
```

## 빌드

- 영어/ASCII PDF:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- 중국어 PDF(CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- 모든 논문 빌드(PDF 모드):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- LaTeX 아티팩트 정리(논문 디렉터리 내부):
  - `latexmk -C`

## 사용법

일상적인 작업 흐름:

1. `ideas/*.md`에 아이디어 노트를 추가하거나 업데이트합니다(파일명은 kebab-case).
2. 성숙한 노트를 `publications/<slug>/`로 승격합니다.
3. 적절한 `latexmk` 모드로 출판 PDF를 컴파일합니다.
4. 웹사이트 데이터를 게시하는 경우 정적 자산을 재생성합니다.
   - `node scripts/generate_site.mjs`
5. 렌더링 결과(`.pdf`, 선택적으로 `docs/` 페이지)를 검증합니다.

## 구성

- `mkdocs.yml`이 존재하며 MkDocs 기반 문서 설정에 사용할 수 있습니다.
- `.github/workflows/pages.yml`이 현재 `docs/`용 GitHub Pages 배포를 담당합니다.
- `docs/assets/i18n.js` 및 `docs/assets/i18n/*.json`이 웹사이트 i18n 동작을 제어합니다.
- `CNAME`과 `docs/CNAME`에 커스텀 도메인 설정이 들어 있습니다.

가정 메모: 이 README는 저장소에 둘 다 존재하므로 MkDocs와 커스텀 정적 사이트 파이프라인 참조를 모두 유지합니다.

## 예시

영문 출판물 하나 빌드:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

중문 출판물 하나 빌드:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

docs 데이터/매니페스트 재생성:

```bash
node scripts/generate_site.mjs
```

## 개발 노트

- Markdown 수식은 `$...$`와 `$$...$$`를 사용합니다.
- 공백이 있는 외부 링크는 안정적인 렌더링을 위해 퍼센트 인코딩합니다.
- 가급적 덧붙이는 방식으로 수정하고, 필요하지 않으면 기존 파일명을 바꾸지 않습니다.
- CJK 콘텐츠는 XeLaTeX와 유니코드 안전 LaTeX 설정(예: 필요 시 `ctexart`)을 사용해야 합니다.
- `publications/<slug>/artifacts/` 아래 LaTeX 아티팩트를 커밋해도 됩니다.

## 문제 해결

- `latexmk` 명령을 찾을 수 없음:
  - TeX 배포판을 설치하고 `latexmk`가 `PATH`에 있는지 확인하세요.
- PDF에서 CJK 글리프/두부(□) 문제가 발생함:
  - XeLaTeX 모드를 사용하고 필요한 CJK 폰트가 설치되어 있는지 확인하세요.
- LaTeX 오류로 빌드가 중단됨:
  - `<slug>.log`를 확인하고 `-interaction=nonstopmode -halt-on-error`로 다시 실행하세요.
- 웹사이트 메타데이터가 갱신되지 않음:
  - `node scripts/generate_site.mjs`를 다시 실행하고 `docs/assets/*.json` 타임스탬프를 확인하세요.

## 로드맵

- README 카탈로그를 새로운 아이디어/출판물과 동기화 상태로 유지.
- `i18n/README.*.md` 전반의 다국어 동등성을 지속 강화.
- 문서 워크플로 발전에 맞춰 MkDocs 설정과 배포된 정적 파이프라인 간 정합성 개선.
- README/링크/카탈로그 일관성을 위한 경량 검증 체크 추가.

## 기여

- 명령형의 범위 있는 커밋 메시지를 사용하세요(예: `Update README structure and operational docs`).
- 주제/논문 단위로 변경 범위를 집중하세요.
- 푸시 전에 LaTeX 컴파일과 렌더링 결과를 검증하세요.
- Pull Request에는 다음이 포함되어야 합니다.
  - 요약 및 변경 이유,
  - 변경된 경로,
  - 필요한 경우 빌드 확인 결과.

## 참고

- Markdown 수식은 `$...$`와 `$$...$$`를 사용합니다.
- 공백이 있는 외부 링크는 안정적인 렌더링을 위해 퍼센트 인코딩합니다.

## 지원 / 후원

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

## 라이선스

이 저장소에는 현재 `LICENSE` 파일이 없습니다.

가정 메모: 라이선스 파일이 추가되기 전까지는 재사용/재배포 조건이 정의되지 않았으므로 저장소 소유자가 명확히 해야 합니다.
