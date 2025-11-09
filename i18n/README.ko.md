🌐 언어: [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

요약 (GitHub)
- 광학, 메타표면, 계산 물리, 무선 전력 아이디어. 각 아이디어는 `ideas/`의 Markdown과 `publications/<slug>/`의 LaTeX/PDF로 제공. CJK는 XeLaTeX.

## About / 소개

IDEAS는 경량 버전 관리 연구 노트입니다.
- 콘텐츠 우선: `ideas/`의 Markdown → 성숙 시 `publications/<slug>/<slug>.tex` + PDF.
- 규칙: 케밥 표기 파일명; 출판 파일명은 슬러그와 일치.
- CJK 지원: 중국어 PDF는 XeLaTeX로 빌드.
- 재현 빌드: `latexmk` 사용.

## 목록 / Contents

- 비선형 크라머스–크로닉 — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- 양자 카펫 — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- 광학 메타표면과 바이오팩 — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- 분자 프로그래밍 메타표면 워크플로 — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- Gaussian/Multiwfn/S4 설계 — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- 유기 염료 메타표면 (중문) — [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON (영문) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON（日本語）— [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- DORAEMON (중문 설명) — [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## Build

- 영어/ASCII:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- CJK:
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

