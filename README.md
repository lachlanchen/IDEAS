🌐 Languages: [English](i18n/README.en.md) | [中文 (简体)](i18n/README.zh-CN.md) | [中文（繁體）](i18n/README.zh-TW.md) | [日本語](i18n/README.ja.md) | [한국어](i18n/README.ko.md) | [Tiếng Việt](i18n/README.vi.md) | [العربية](i18n/README.ar.md) | [Français](i18n/README.fr.md) | [Español](i18n/README.es.md)

# IDEAS



## About

IDEAS is a lightweight, versioned notebook of research notes and essays.
- Content-first: every idea is Markdown in `ideas/`, mirrored (when mature) to LaTeX under `publications/<slug>/<slug>.tex` with a compiled PDF.
- Conventions: kebab-case filenames; publication filenames match their folder slug (`<slug>.tex`, `<slug>.pdf`).
- CJK support: Chinese-language publications compile with XeLaTeX.
- Reproducible builds: use `latexmk` (see Build section) to regenerate PDFs.

## Contents

- The Nonlinear Kramers–Kronig Relations: Causality Beyond Linearity — [Markdown](ideas/nonlinear-kramers-kronig-kerr-media.md) | [PDF](publications/nonlinear-kramers-kronig-kerr-media/nonlinear-kramers-kronig-kerr-media.pdf)
- The Quantum Carpets: Fractal Patterns in Wavefunction Revival — [Markdown](ideas/quantum-carpets-fractal-wavefunction-revival.md) | [PDF](publications/quantum-carpets-fractal-wavefunction-revival/quantum-carpets-fractal-wavefunction-revival.pdf)
- Optical Metasurfaces and Biofabrication: A Feasibility Analysis — [Markdown](ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis.md) | [PDF](publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- Optical Metasurfaces and Biofabrication (Draft) — [Markdown](ideas/optical-metasurfaces-and-biofabrication-feasibility-analysis-draft.md) | [PDF](publications/optical-metasurfaces-and-biofabrication-feasibility-analysis/optical-metasurfaces-and-biofabrication-feasibility-analysis.pdf)
- Molecularly Programmed Metasurfaces: Gaussian + Multiwfn + S4 Workflow — [Markdown](ideas/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.md) | [PDF](publications/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow/molecularly-programmed-metasurfaces-gaussian-multiwfn-s4-workflow.pdf)
- Designing Molecularly Programmed Metasurfaces with Gaussian, Multiwfn, and S4 — [Markdown](ideas/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.md) | [PDF](publications/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4/designing-molecularly-programmed-metasurfaces-gaussian-multiwfn-s4.pdf)
- 有机染料调控的纳米超表面：让超薄结构把光吃干抹净 — [Markdown](ideas/organic-dye-programmed-metasurface-zh.md) | [PDF](publications/organic-dye-programmed-metasurface-zh/organic-dye-programmed-metasurface-zh.pdf)
- DORAEMON: Detached On-demand Rapid Absorption Energy Mechanism for Optimized Networks — [Markdown](ideas/doraemon-tap-and-charge-deep-research.md) | [PDF](publications/doraemon-tap-and-charge-deep-research/doraemon-tap-and-charge-deep-research.pdf)
- DORAEMON（日本語）— [Markdown](ideas/doraemon-tap-and-charge-deep-research-ja.md) | [PDF](publications/doraemon-tap-and-charge-deep-research-ja/doraemon-tap-and-charge-deep-research-ja.pdf)
- 用通俗中文讲清楚：DORAEMON「一碰即充」完整说明 — [Markdown](ideas/doraemon-tap-and-charge-explainer-zh.md) | [PDF](publications/doraemon-tap-and-charge-explainer-zh/doraemon-tap-and-charge-explainer-zh.pdf)
- Proposal: Integrating Quantum Chemistry, Molecular Dynamics, and AI for Small Molecule Simulation — [Markdown](ideas/proposal-integrating-quantum-chemistry-md-ai-small-molecule-simulation.md) | [PDF](publications/proposal-integrating-quantum-chemistry-md-ai-small-molecule-simulation/proposal-integrating-quantum-chemistry-md-ai-small-molecule-simulation.pdf)
- Proposal for AI-Assisted Simulation of a Metasurface Imaging System — [Markdown](ideas/proposal-ai-assisted-metasurface-imaging-system.md) | [PDF](publications/proposal-ai-assisted-metasurface-imaging-system/proposal-ai-assisted-metasurface-imaging-system.pdf)
 - Investigating the "Mpempba Effect" in Deep Learning and Imaging — [Markdown](ideas/investigating-mpempba-effect-deep-learning-imaging.md) | [PDF](publications/investigating-mpempba-effect-deep-learning-imaging/investigating-mpempba-effect-deep-learning-imaging.pdf)

## Build

- English/ASCII PDFs:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Chinese PDFs (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`

## Notes

- Equations in Markdown use `$...$` and `$$...$$`.
- External links with spaces are percent‑encoded for reliable rendering.

## Support / Donate

<div align="center">
<table style="margin:0 auto; text-align:center; border-collapse:collapse;">
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
