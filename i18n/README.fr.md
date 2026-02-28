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

---

## Vue d'ensemble

IDEAS est un carnet léger et versionné de notes de recherche et d'essais.

Ce dépôt suit un flux de travail orienté contenu :
- Rédigez les idées en Markdown sous `ideas/`.
- Faites monter en maturité les idées vers les dossiers de publication dans `publications/<slug>/`.
- Conservez des noms de fichiers alignés sur le slug (`<slug>.tex`, `<slug>.pdf`).
- Régénérez les PDF des publications avec des commandes `latexmk` reproductibles.
- Maintenez des variantes multilingues du README dans `i18n/` et des pages web statiques dans `docs/`.

## Liens Rapides

| Section | Aller à |
|---|---|
| 🗂️ Catalogue | [Catalogue par catégorie](#catalogue-par-catégorie) |
| 🧰 Commandes de build | [Build](#build) |
| 🧪 Utilisation quotidienne | [Utilisation](#utilisation) |
| 🧱 Structure du dépôt | [Structure du projet](#structure-du-projet) |
| ⚙️ Détails opérationnels | [Configuration](#configuration) |
| 🧩 Guide de contribution | [Contribution](#contribution) |
| ✉️ Contact | [Contact](#contact) |
| ❤️ Support | [Support / Donation](#-support) |

## À propos

IDEAS est un carnet léger et versionné de notes de recherche et d'essais.
- Contenu d'abord : chaque idée est un Markdown dans `ideas/`, répliquée (lorsqu'elle est mature) en LaTeX sous `publications/<slug>/<slug>.tex` avec un PDF compilé.
- Conventions : noms de fichiers en kebab-case ; les noms de fichiers de publication correspondent à ceux du dossier (`<slug>.tex`, `<slug>.pdf`).
- Support CJK : les publications en chinois se compilent avec XeLaTeX.
- Builds reproductibles : utilisez `latexmk` (voir la section Build) pour régénérer les PDF.

## Fonctionnalités

- Pipeline versionné de l'idée à la publication (`ideas/` -> `publications/<slug>/`).
- Catalogue de recherche organisé par catégorie avec des liens directs Markdown/PDF.
- Ensemble de fichiers README multilingues (9 langues) dans `i18n/`.
- Contenu web statique dans `docs/` avec des manifestes générés dans `docs/assets/`.
- Configuration optionnelle des hooks git locaux via `scripts/enable-hooks.sh`.
- Le dépôt inclut des artefacts de publication (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) lorsque utiles à la reproductibilité.

## Catalogue par catégorie

### Métasurfaces

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

### Théorie

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

### IA pour la science

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

### Produit \& Outils

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
│       └── artifacts/             # fichiers auxiliaires LaTeX optionnels
├── docs/                          # site statique + assets générés
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # variantes README multilingues
└── figs/                          # bannières et assets README
```

## Prérequis

- `latexmk` avec une distribution TeX opérationnelle (TeX Live ou équivalent).
- Prise en charge XeLaTeX pour les builds CJK (pour publications chinoises/japonaises) : `xelatex` + polices compatibles CJK.
- Node.js (recommandé 18+) pour la génération des assets du site (`scripts/generate_site.mjs`).
- Git pour le versionnement et le flux de contribution.

## Installation

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Configuration locale des hooks (facultatif) :

```bash
bash scripts/enable-hooks.sh
```

## Build

- PDF anglais/ASCII :
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- PDF chinois (CJK) :
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Construire tous les papiers (mode PDF) :
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Nettoyer les artefacts LaTeX (dans un dossier de publication) :
  - `latexmk -C`

## Utilisation

Flux de travail courant :

1. Ajouter ou mettre à jour des notes d'idées dans `ideas/*.md` (nom de fichier en kebab-case).
2. Promouvoir les notes matures dans `publications/<slug>/<slug>.tex`.
3. Compiler le PDF de publication avec le mode `latexmk` approprié.
4. Si vous publiez les données du site, régénérez les assets statiques :
   - `node scripts/generate_site.mjs`
5. Valider les rendus (`.pdf` et éventuellement les pages `docs/`).

## Configuration

- `mkdocs.yml` est présent et peut servir à configurer MkDocs pour la documentation.
- `.github/workflows/pages.yml` pilote actuellement le déploiement GitHub Pages pour `docs/`.
- `docs/assets/i18n.js` et `docs/assets/i18n/*.json` contrôlent le comportement i18n du site web.
- `CNAME` et `docs/CNAME` contiennent les paramètres de domaine personnalisé.

Note : ce README conserve les références MkDocs et pipeline site statique personnalisé car les deux sont présentes dans le dépôt.

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

Régénérer les données/manifestes docs :

```bash
node scripts/generate_site.mjs
```

## Notes de développement

- Les équations en Markdown utilisent `$...$` et `$$...$$`.
- Les liens externes contenant des espaces sont codés en pourcentage pour un rendu fiable.
- Privilégiez les modifications additives et évitez de renommer les fichiers existants sauf nécessité.
- Les contenus CJK doivent utiliser XeLaTeX et une configuration LaTeX sûre côté Unicode (par exemple `ctexart` si pertinent).
- Il est acceptable de committer des artefacts LaTeX dans `publications/<slug>/artifacts/`.

## Dépannage

- `latexmk` introuvable :
  - Installez une distribution TeX et vérifiez que `latexmk` est sur le `PATH`.
- Problèmes de glyphes/tofu CJK dans les PDF :
  - Utilisez XeLaTeX et assurez-vous que les polices CJK requises sont installées.
- Les builds s'arrêtent sur des erreurs LaTeX :
  - Consultez `<slug>.log` et relancez avec `-interaction=nonstopmode -halt-on-error`.
- Les métadonnées du site web ne se mettent pas à jour :
  - Relancez `node scripts/generate_site.mjs` et vérifiez les horodatages de `docs/assets/*.json`.

## Feuille de route

- Garder le catalogue README synchronisé avec les nouvelles idées/publications.
- Renforcer la parité multilingue entre les fichiers `i18n/README.*.md`.
- Améliorer l'alignement entre la configuration MkDocs et le pipeline statique déployé à mesure que l'automatisation évolue.
- Ajouter des contrôles de validation légers pour la cohérence README/liens/catalogue.

## Contribution

- Utilisez des messages de commit impératifs et ciblés (ex. : `Mettre à jour la structure du README et la doc opérationnelle`).
- Gardez les changements concentrés par sujet/article.
- Validez la compilation LaTeX et le rendu final avant de publier.
- Les pull requests doivent inclure :
  - un résumé et une motivation,
  - les chemins modifiés,
  - une confirmation de build quand pertinent.

## Notes

- Les équations en Markdown utilisent `$...$` et `$$...$$`.
- Les liens externes avec espaces sont encodés en pourcentage pour un rendu fiable.

## ❤️ Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Contact

Pour toute question sur le flux de travail du dépôt, les mises à jour éditoriales ou la collaboration :
- Ouvrez une issue dans le suivi des tickets du dépôt (si activé).
- Lancez une discussion pour des revues de design ou éditoriales plus longues.
- Pour les options de sponsoring et le soutien du projet, consultez le panneau de support ci-dessus.

## Licence

Le fichier `LICENSE` n'est actuellement pas présent dans ce dépôt.

Note d'hypothèse : tant qu'un fichier de licence n'est pas ajouté, les conditions de réutilisation/redistribution restent indéterminées et doivent être précisées par le propriétaire du dépôt.
