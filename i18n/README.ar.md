🌐 اللغات: [English](README.en.md) | [中文 (简体)](README.zh-CN.md) | [中文（繁體）](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md)

# IDEAS

ملخص
- ملاحظات بحثية حول البصريات والميتا‑سطوح والفيزياء الحاسوبية والطاقة اللاسلكية. كل فكرة في `ideas/` (Markdown) ومعها LaTeX/PDF في `publications/<slug>/`. مستندات CJK تُبنى بـ XeLaTeX.

## حول / About

IDEAS دفتر خفيف بإدارة إصدارات.
- المحتوى أولاً: Markdown في `ideas/` ثم LaTeX + PDF تحت `publications/<slug>/`.
- اصطلاحات: أسماء ملفات kebab-case؛ أسماء ملفات النشر تطابق الـ slug.
- دعم CJK: البناء بـ XeLaTeX.
- بناء قابل لإعادة الإنتاج: `latexmk`.

## المحتوى / Contents

- علاقات كرامرز–كرونيغ اللاخطية — [Markdown](../ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](../publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- سجاد الكم — [Markdown](../ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](../publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- الميتا‑سطوح البصرية والتصنيع الحيوي — [Markdown](../ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](../publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- سير عمل الميتا‑سطوح المبرمجة جزيئياً — [Markdown](../ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](../publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- تصميم الميتا‑سطوح المبرمجة — [Markdown](../ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](../publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- ميتا‑سطوح أصباغ عضوية (中文) — [Markdown](../ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](../publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON (إنجليزي) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON (日本語) — [Markdown](../ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](../publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- DORAEMON (شرح صيني) — [Markdown](../ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](../publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)

## Build

- English/ASCII: `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- CJK: `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

