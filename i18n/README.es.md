🌐 Idiomas: [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

Resumen
- Cuaderno de ideas sobre óptica, metasuperficies, física computacional y energía inalámbrica. Cada idea en `ideas/` (Markdown) y su LaTeX/PDF en `publications/<slug>/`. CJK con XeLaTeX.

## Acerca de / About

IDEAS es un cuaderno ligero con control de versiones.
- Contenido primero: Markdown en `ideas/`, luego LaTeX `publications/<slug>/<slug>.tex` + PDF.
- Convenciones: nombres kebab‑case; archivos de publicación = slug.
- Soporte CJK: XeLaTeX.
- Builds reproducibles: `latexmk`.

## Contenidos

- Kramers–Kronig no lineal — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- Alfombras cuánticas — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- Metasuperficies ópticas y biofabricación — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- Flujo de trabajo de metasuperficies programadas — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- Diseño de metasuperficies programadas — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- Metasuperficies de colorantes orgánicos (中文) — [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON (EN) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON (日本語) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- DORAEMON (explicación en chino) — [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## Build

- English/ASCII: `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- CJK: `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

