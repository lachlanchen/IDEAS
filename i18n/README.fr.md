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

## Vue d'ensemble

IDEAS est un carnet léger et versionné de notes de recherche et d'essais.

Ce dépôt suit un flux de travail orienté contenu :
- Rédiger les idées en Markdown dans `ideas/`.
- Promouvoir les idées mûres vers des dossiers de publication dans `publications/<slug>/`.
- Conserver des noms de fichiers de publication alignés sur le slug (`<slug>.tex`, `<slug>.pdf`).
- Régénérer les PDF des publications avec des commandes `latexmk` reproductibles.
- Maintenir des variantes multilingues du README dans `i18n/` et des pages web statiques dans `docs/`.

## Liens Rapides

| Section | Aller à |
|---|---|
| Catalogue | [Catalogue par catégorie](#catalogue-par-catégorie) |
| Commandes de build | [Build](#build) |
| Flux de travail quotidien | [Usage](#usage) |
| Structure du dépôt | [Structure du projet](#structure-du-projet) |
| Détails opérationnels | [Configuration](#configuration) |
| Guide de contribution | [Contribution](#contribution) |
| Support | [Support / Dons](#support--dons) |

## À Propos

IDEAS est un carnet léger et versionné de notes de recherche et d'essais.
- Contenu d'abord : chaque idée est un Markdown dans `ideas/`, reflété (lorsqu'elle est mature) en LaTeX dans `publications/<slug>/<slug>.tex` avec un PDF compilé.
- Conventions : noms de fichiers en kebab-case ; les noms de fichiers de publication correspondent au slug de leur dossier (`<slug>.tex`, `<slug>.pdf`).
- Support CJK : les publications en chinois se compilent avec XeLaTeX.
- Builds reproductibles : utilisez `latexmk` (voir la section Build) pour régénérer les PDF.

## Fonctionnalités

- Pipeline versionné de l'idée à la publication (`ideas/` -> `publications/<slug>/`).
- Catalogue de recherche organisé par catégorie avec des liens directs Markdown/PDF.
- Ensemble README multilingue en 9 langues dans `i18n/`.
- Contenu de site statique dans `docs/` avec des manifestes générés dans `docs/assets/`.
- Configuration optionnelle de hooks git locaux via `scripts/enable-hooks.sh`.
- Le dépôt inclut des artefacts de publication (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) quand ils sont utiles à la reproductibilité.

## Catalogue par catégorie

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
      <th align="left">Titre</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Langue</th>
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
      <th align="left">Titre</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Langue</th>
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
      <th align="left">Titre</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Langue</th>
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
      <th align="left">Titre</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Langue</th>
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
      <th align="left">Titre</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Langue</th>
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

## Structure du projet

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Notes d'idées en Markdown
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # fichiers auxiliaires/logs LaTeX optionnels
├── docs/                          # site web statique + ressources générées
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # variantes README multilingues
└── figs/                          # ressources README et dons
```

## Prérequis

- `latexmk` avec une distribution TeX fonctionnelle (TeX Live ou équivalent).
- Support XeLaTeX pour les builds CJK (publications chinoises/japonaises) : `xelatex` + polices compatibles CJK.
- Node.js (18+ recommandé) pour la génération des ressources du site (`scripts/generate_site.mjs`).
- Git pour le versionnement et le flux de contribution.

## Installation

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Configuration optionnelle des hooks locaux :

```bash
bash scripts/enable-hooks.sh
```

## Build

- PDF anglais/ASCII :
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- PDF chinois (CJK) :
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Builder tous les articles (mode PDF) :
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Nettoyer les artefacts LaTeX (dans un dossier d'article) :
  - `latexmk -C`

## Usage

Flux de travail quotidien courant :

1. Ajouter ou mettre à jour des notes d'idées dans `ideas/*.md` (nom de fichier en kebab-case).
2. Promouvoir les notes mûres vers `publications/<slug>/<slug>.tex`.
3. Compiler le PDF de publication avec le mode `latexmk` approprié.
4. En cas de publication des données du site, régénérer les ressources statiques :
   - `node scripts/generate_site.mjs`
5. Valider les sorties rendues (`.pdf` et éventuellement les pages `docs/`).

## Configuration

- `mkdocs.yml` existe et peut être utilisé pour la configuration d'une documentation basée sur MkDocs.
- `.github/workflows/pages.yml` pilote actuellement le déploiement GitHub Pages pour `docs/`.
- `docs/assets/i18n.js` et `docs/assets/i18n/*.json` contrôlent le comportement i18n du site web.
- `CNAME` et `docs/CNAME` contiennent les paramètres de domaine personnalisé.

Note d'hypothèse : ce README conserve les références au pipeline MkDocs et au pipeline de site statique personnalisé, car les deux sont présents dans le dépôt.

## Exemples

Compiler une publication anglaise :

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Compiler une publication chinoise :

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Régénérer les données/manifestes de la documentation :

```bash
node scripts/generate_site.mjs
```

## Notes de développement

- Les équations en Markdown utilisent `$...$` et `$$...$$`.
- Les liens externes avec des espaces sont encodés en pourcentage pour un rendu fiable.
- Préférer des modifications additives et éviter de renommer des fichiers existants sauf nécessité.
- Le contenu CJK doit utiliser XeLaTeX et une configuration LaTeX sûre vis-à-vis de l'Unicode (par exemple `ctexart` quand applicable).
- Il est acceptable de versionner les artefacts LaTeX sous `publications/<slug>/artifacts/`.

## Dépannage

- Commande `latexmk` introuvable :
  - Installer une distribution TeX et s'assurer que `latexmk` est dans le `PATH`.
- Problèmes de glyphes CJK/tofu dans les PDF :
  - Utiliser le mode XeLaTeX et s'assurer que les polices CJK requises sont installées.
- Le build s'arrête sur des erreurs LaTeX :
  - Examiner `<slug>.log` puis relancer avec `-interaction=nonstopmode -halt-on-error`.
- Les métadonnées du site ne se mettent pas à jour :
  - Re-exécuter `node scripts/generate_site.mjs` et vérifier les horodatages de `docs/assets/*.json`.

## Feuille de route

- Maintenir le catalogue README synchronisé avec les nouvelles idées/publications.
- Continuer à renforcer la parité multilingue entre les fichiers `i18n/README.*.md`.
- Améliorer l'alignement entre la config MkDocs et le pipeline statique déployé à mesure que le flux docs évolue.
- Ajouter des vérifications légères de cohérence README/liens/catalogue.

## Contribution

- Utiliser des messages de commit impératifs et cadrés (exemple : `Update README structure and operational docs`).
- Garder des changements ciblés par sujet/article.
- Valider la compilation LaTeX et la sortie rendue avant de pousser.
- Les pull requests doivent inclure :
  - résumé et justification,
  - chemins touchés,
  - confirmation de build si pertinent.

## Notes

- Les équations en Markdown utilisent `$...$` et `$$...$$`.
- Les liens externes avec des espaces sont encodés en pourcentage pour un rendu fiable.

## Support / Dons

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

## Licence

Aucun fichier `LICENSE` n'est actuellement présent dans ce dépôt.

Note d'hypothèse : tant qu'un fichier de licence n'est pas ajouté, les conditions de réutilisation/de redistribution ne sont pas définies et doivent être clarifiées par le propriétaire du dépôt.
