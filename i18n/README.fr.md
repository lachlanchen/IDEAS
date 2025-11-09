🌐 Langues : [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

Résumé
- Carnet d’idées sur l’optique, les métasurfaces, la physique numérique et l’alimentation sans fil. Chaque idée : Markdown dans `ideas/` et LaTeX/PDF dans `publications/<slug>/`. Les docs CJK se compilent avec XeLaTeX.

## À propos / About

IDEAS est un carnet de recherche léger et versionné.
- Contenu d’abord : Markdown dans `ideas/`, puis LaTeX `publications/<slug>/<slug>.tex` + PDF.
- Conventions : kebab‑case ; fichiers de publication = slug.
- Support CJK : XeLaTeX.
- Reproductible : `latexmk`.

## Contenus

- Kramers–Kronig non linéaire — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- Tapis quantiques — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- Métasurfaces optiques et biofabrication — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- Flux de travail métasurfaces programmées — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- Conception métasurfaces programmées — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- Métasurfaces à colorants organiques (中文) — [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON (EN) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON (日本語) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- DORAEMON (explicateur chinois) — [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## Build

- English/ASCII : `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- CJK : `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

