[English](README.md) · [العربية](i18n/README.ar.md) · [Español](i18n/README.es.md) · [Français](i18n/README.fr.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Tiếng Việt](i18n/README.vi.md) · [中文 (简体)](i18n/README.zh-Hans.md) · [中文（繁體）](i18n/README.zh-Hant.md) · [Deutsch](i18n/README.de.md) · [Русский](i18n/README.ru.md)

<div align="center">

[![LazyingArt banner — apps and four buddies](https://lazying.art/media/brand/lazyingart-intro.gif)](https://lazying.art)

# IDEAS

![Status](https://img.shields.io/badge/status-active-0a7f5a)
![Content](https://img.shields.io/badge/content-Markdown%20%2B%20LaTeX-blue)
![Languages](https://img.shields.io/badge/i18n-9%20README%20languages-orange)
![Build](https://img.shields.io/badge/build-latexmk-1f6feb)
![CJK](https://img.shields.io/badge/CJK-XeLaTeX-22863a)
![Site](https://img.shields.io/badge/docs-static%20assets-6f42c1)
![Pipeline](https://img.shields.io/badge/pipeline-idea%20%E2%86%92%20publication-1f6feb)
![Ops](https://img.shields.io/badge/ops-locales%20%2F%20catalog-0b7285)

</div>

---

## Overview

IDEAS is a lightweight, versioned notebook of research notes and essays.

This repository follows a content-first workflow:

- Author ideas in Markdown under `ideas/`.
- Promote mature ideas into publication folders under `publications/<slug>/`.
- Keep publication filenames slug-matching (`<slug>.tex`, `<slug>.pdf`).
- Regenerate publication PDFs with reproducible `latexmk` commands.
- Maintain multilingual README variants under `i18n/` and static web pages under `docs/`.

## Quick Links

| Section                | Jump                                        |
| ---------------------- | ------------------------------------------- |
| 🗂️ Catalog             | [Catalog by Category](#catalog-by-category) |
| 🧰 Build commands      | [Build](#build)                             |
| 🧪 Day-to-day workflow | [Usage](#usage)                             |
| 🧱 Repository layout   | [Project Structure](#project-structure)     |
| ⚙️ Ops details         | [Configuration](#configuration)             |
| 🔗 Source repositories | [Source Repositories](#source-repositories) |
| 🧩 Contribution guide  | [Contribution](#contribution)               |
| ✉️ Contact             | [Contact](#contact)                         |
| ❤️ Support             | [Support / Donate](#-support)               |

## About

IDEAS is a lightweight, versioned notebook of research notes and essays.

- Content-first: every idea is Markdown in `ideas/`, mirrored (when mature) to LaTeX under `publications/<slug>/<slug>.tex` with a compiled PDF.
- Conventions: kebab-case filenames; publication filenames match their folder slug (`<slug>.tex`, `<slug>.pdf`).
- CJK support: Chinese-language publications compile with XeLaTeX.
- Reproducible builds: use `latexmk` (see Build section) to regenerate PDFs.

## Features

- Versioned idea-to-publication pipeline (`ideas/` -> `publications/<slug>/`).
- Research catalog organized by category with direct Markdown/PDF links.
- Multilingual README set in 9 languages under `i18n/`.
- Static site content under `docs/` with generated manifests in `docs/assets/`.
- Optional local git hook setup via `scripts/enable-hooks.sh`.
- Repository includes publication artifacts (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) where useful for reproducibility.

## Source Repositories

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="30%" />
    <col width="45%" />
    <col width="25%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">Project</th>
      <th align="left">Role in IDEAS</th>
      <th align="left">GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OrganoidVision</td>
      <td>Retinal organoid imaging sensors and bio-hybrid vision stack.</td>
      <td><a href="https://github.com/lachlanchen/OrganoidVision">Repository</a></td>
    </tr>
    <tr>
      <td>OrganoidIntelligence</td>
      <td>Brain-on-chip, wetware computing, MEA loop, and organoid intelligence roadmap.</td>
      <td><a href="https://github.com/lachlanchen/OrganoidIntelligence">Repository</a></td>
    </tr>
    <tr>
      <td>ImagizedLanguageModel</td>
      <td>Glyph-image language modeling, product codes, and diffusion-style language generation.</td>
      <td><a href="https://github.com/lachlanchen/ImagizedLanguageModel">Repository</a></td>
    </tr>
  </tbody>
</table>

## Catalog by Category

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
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
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
    <tr>
      <td>Feasible Biomolecular Imaging Metasurfaces with AlphaFold</td>
      <td><a href="ideas/feasible-biomolecular-imaging-metasurfaces-alphafold.md">Markdown</a></td>
      <td><a href="publications/feasible-biomolecular-imaging-metasurfaces-alphafold/reference-pack/biomolecular-metasurface-feasibility-roadmap.pdf">Roadmap</a> · <a href="publications/feasible-biomolecular-imaging-metasurfaces-alphafold/reference-pack/biomolecular-metasurface-feasibility-roadmap-cn.pdf">路线图</a> · <a href="publications/feasible-biomolecular-imaging-metasurfaces-alphafold/reference-pack/biomolecular-imaging-metasurface-collaborator-cn.pdf">Collaborator</a> · <a href="publications/feasible-biomolecular-imaging-metasurfaces-alphafold/reference-pack/biomolecular-imaging-metasurface-proposal.pdf">Proposal</a> · <a href="publications/feasible-biomolecular-imaging-metasurfaces-alphafold/reference-pack/imaging-metasurface-report.pdf">Report</a></td>
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
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
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
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
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
    <tr>
      <td>Human-Centered Laboratory Autonomy</td>
      <td><a href="ideas/human-centered-laboratory-autonomy.md">Markdown</a></td>
      <td><a href="publications/human-centered-laboratory-autonomy/human-centered-laboratory-autonomy.pdf">PDF</a> · <a href="publications/human-centered-laboratory-autonomy-zh/human-centered-laboratory-autonomy-zh.pdf">中文 PDF</a> · <a href="publications/human-centered-laboratory-autonomy/reference-pack/robotic-lab-automation-feasibility-roadmap.pdf">Archive</a></td>
      <td>EN/ZH</td>
    </tr>
  </tbody>
  </table>

### Biomedicine

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OrganoidVision: Engineering Retinal Organoids as Advanced Imaging Sensors</td>
      <td><a href="ideas/organoidvision-bio-hybrid-vision-systems.md">Markdown</a></td>
      <td><a href="publications/organoidvision-bio-hybrid-vision-systems/organoidvision-bio-hybrid-vision-systems.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>OrganoidIntelligence: Resource Map, Bioelectronic Interface Strategy and First-Demo Roadmap</td>
      <td><a href="ideas/organoidintelligence-brain-on-chip-resource-map.md">Markdown</a></td>
      <td><a href="publications/organoidintelligence-feasibility-roadmap/organoidintelligence-feasibility-roadmap.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>OrganoidIntelligence: Resource Map for Wetware Computing, Disease Models and Neural Interfaces</td>
      <td><a href="ideas/organoidintelligence-brain-on-chip-resource-map.md">Markdown</a></td>
      <td><a href="publications/organoidintelligence-resource-map/organoidintelligence-resource-map.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
  </tbody>
  </table>

### Language Models

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Imagized Language Model: Comprehensive Technical Documentation</td>
      <td><a href="ideas/imagized-language-model.md">Markdown</a></td>
      <td><a href="publications/imagized-language-model/imagized-language-model.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Imagized Language Model: Structured Technical Documentation</td>
      <td><a href="ideas/imagized-language-model.md">Markdown</a></td>
      <td><a href="publications/imagized-language-model-structured-technical-documentation/imagized-language-model-structured-technical-documentation.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Imagized Language Modeling with Factorized Glyph Embeddings and Diffusion-Based Generation</td>
      <td><a href="ideas/imagized-language-model.md">Markdown</a></td>
      <td><a href="publications/imagized-language-model-deep-dive/imagized-language-model-deep-dive.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Mathematical Foundations of the Imagized Language Model</td>
      <td><a href="ideas/imagized-language-model.md">Markdown</a></td>
      <td><a href="publications/imagized-language-model-math-validation/imagized-language-model-math-validation.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>Cross-Lingual Imagized Language Model: A Mathematical Derivation</td>
      <td><a href="ideas/imagized-language-model.md">Markdown</a></td>
      <td><a href="publications/cross-lingual-imagized-language-model/cross-lingual-imagized-language-model.pdf">PDF</a></td>
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
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LLM‑Powered File Management: Feasibility, Market, and Design</td>
      <td><a href="ideas/llm-powered-file-management-feasibility-market-design.md">Markdown</a></td>
      <td><a href="publications/llm-powered-file-management-feasibility-market-design/llm-powered-file-management-feasibility-market-design.pdf">PDF</a></td>
      <td>EN</td>
    </tr>
    <tr>
      <td>GaugeHand: A Lockable Contour‑Field Robotic Hand</td>
      <td><a href="ideas/gaugehand-contour-field-robotic-hand.md">Markdown</a></td>
      <td><a href="publications/gaugehand-contour-field-robotic-hand/gaugehand-contour-field-robotic-hand.pdf">PDF</a></td>
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
      <th align="left">Title</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Lang</th>
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

## Project Structure

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

## Prerequisites

- `latexmk` with a working TeX distribution (TeX Live or equivalent).
- XeLaTeX support for CJK builds (for Chinese/Japanese publications): `xelatex` + CJK-capable fonts.
- Node.js (recommended 18+) for site asset generation (`scripts/generate_site.mjs`).
- Git for versioning and contribution workflow.

## Installation

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Optional local hook setup:

```bash
bash scripts/enable-hooks.sh
```

## Build

- English/ASCII PDFs:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Chinese PDFs (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Build all papers (PDF mode):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Clean LaTeX artifacts (inside a paper directory):
  - `latexmk -C`

## Usage

Common day-to-day flow:

1. Add or update idea notes in `ideas/*.md` (kebab-case filename).
2. Promote mature notes into `publications/<slug>/<slug>.tex`.
3. Compile the publication PDF with the appropriate `latexmk` mode.
4. If publishing website data, regenerate static assets:
   - `node scripts/generate_site.mjs`
5. Validate rendered outputs (`.pdf` and optionally `docs/` pages).

## Configuration

- `mkdocs.yml` exists and can be used for MkDocs-based documentation configuration.
- `.github/workflows/pages.yml` currently drives GitHub Pages deployment for `docs/`.
- `docs/assets/i18n.js` and `docs/assets/i18n/*.json` control website i18n behavior.
- `CNAME` and `docs/CNAME` hold custom-domain settings.

Assumption note: this README preserves both MkDocs and custom static-site pipeline references because both are present in the repository.

## Examples

Build one English publication:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Build one Chinese publication:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Regenerate docs data/manifests:

```bash
node scripts/generate_site.mjs
```

## Development Notes

- Equations in Markdown use `$...$` and `$$...$$`.
- External links with spaces are percent‑encoded for reliable rendering.
- Prefer additive edits and avoid renaming existing files unless necessary.
- CJK content should use XeLaTeX and Unicode-safe LaTeX setup (for example `ctexart` where applicable).
- It is acceptable to commit LaTeX artifacts under `publications/<slug>/artifacts/`.

## Troubleshooting

- `latexmk` command not found:
  - Install a TeX distribution and ensure `latexmk` is on `PATH`.
- CJK glyph/tofu issues in PDFs:
  - Use XeLaTeX mode and ensure required CJK fonts are installed.
- Build stops on LaTeX errors:
  - Inspect `<slug>.log` and rerun with `-interaction=nonstopmode -halt-on-error`.
- Website metadata not updating:
  - Re-run `node scripts/generate_site.mjs` and verify `docs/assets/*.json` timestamps.

## Roadmap

- Keep README catalog synchronized with new ideas/publications.
- Continue strengthening multilingual parity across `i18n/README.*.md` files.
- Improve alignment between MkDocs config and deployed static pipeline as the docs workflow evolves.
- Add lightweight validation checks for README/link/catalog consistency.

## Contribution

- Use imperative, scoped commit messages (example: `Update README structure and operational docs`).
- Keep changes focused by topic/paper.
- Validate LaTeX compilation and rendered output before pushing.
- Pull requests should include:
  - summary and rationale,
  - paths touched,
  - build confirmation when relevant.

## Notes

- Equations in Markdown use `$...$` and `$$...$$`.
- External links with spaces are percent‑encoded for reliable rendering.

## ❤️ Support

<!-- support:start -->
[![GitHub Sponsors](https://img.shields.io/badge/GitHub-Sponsors-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)
[![LazyingArt Support](https://img.shields.io/badge/LazyingArt-Support-0EA5E9?style=for-the-badge)](https://chat.lazying.art/donate)
[![PayPal Support](https://img.shields.io/badge/PayPal-Support-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen)
[![Stripe Support](https://img.shields.io/badge/Stripe-Support-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400)
<!-- support:end -->

## Contact

For questions about the repository workflow, editorial updates, or collaboration:

- Open an issue on the repository issue tracker (if enabled).
- Start a discussion for longer design or editorial reviews.
- For sponsorship options and project support, see the support panel above.

## License

No `LICENSE` file is currently present in this repository.

Assumption note: until a license file is added, reuse/redistribution terms are undefined and should be clarified by the repository owner.
