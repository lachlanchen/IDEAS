[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

<div align="center">

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

## Überblick

IDEAS ist ein leichtgewichtiges, versioniertes Notizbuch für Forschungsnotizen und Essays.

Dieses Repository folgt einem In-Content-First-Workflow:

- Verfasse Ideen in Markdown unter `ideas/`.
- Reife Ideen werden in den Veröffentlichungs-Ordnern unter `publications/<slug>/` publiziert.
- Halte Dateinamen konsistent im Slug-Format (`<slug>.tex`, `<slug>.pdf`).
- Regeneriere die Publikations-PDFs mit reproduzierbaren `latexmk`-Befehlen.
- Pflege mehrsprachige README-Varianten unter `i18n/` und statische Webseiten unter `docs/`.

## Schnellzugriffe

| Abschnitt              | Sprung                                            |
| ---------------------- | ------------------------------------------------- |
| 🗂️ Katalog             | [Katalog nach Kategorie](#katalog-nach-kategorie) |
| 🧰 Build-Befehle       | [Build](#build)                                   |
| 🧪 Alltäglicher Ablauf | [Nutzung](#nutzung)                               |
| 🧱 Projektstruktur     | [Projektstruktur](#projektstruktur)               |
| ⚙️ Einstellungen       | [Konfiguration](#konfiguration)                   |
| 🧩 Beitrag             | [Mitwirken](#mitwirken)                           |
| ✉️ Kontakt             | [Kontakt](#kontakt)                               |
| ❤️ Support             | [Support](#-support)                              |

## Über das Projekt

IDEAS ist ein leichtgewichtiges, versioniertes Notizbuch für Forschungsnotizen und Essays.

- Content-First: Jede Idee liegt als Markdown in `ideas/` vor und wird (wenn ausgereift) als LaTeX in `publications/<slug>/<slug>.tex` mit einem kompilierten PDF gespiegelt.
- Konventionen: Dateinamen im kebab-case; Publikationsdateien müssen dem Ordner-Slug entsprechen (`<slug>.tex`, `<slug>.pdf`).
- CJK-Unterstützung: Chinesischsprachige Publikationen werden mit XeLaTeX kompiliert.
- Reproduzierbare Builds: Nutze `latexmk` (siehe Abschnitt Build), um PDFs neu zu erzeugen.

## Funktionen

- Versionierte Idea-to-Publication-Pipeline (`ideas/` -> `publications/<slug>/`).
- Forschungskatalog kategorisiert mit direkten Markdown-/PDF-Links.
- Mehrsprachiger README-Satz in 9 Sprachen unter `i18n/`.
- Statische Site-Inhalte unter `docs/` mit generierten Manifesten in `docs/assets/`.
- Optionales lokales Git-Hook-Setup über `scripts/enable-hooks.sh`.
- Das Repository enthält Publikations-Artefakte (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) sofern sinnvoll für die Reproduzierbarkeit.

## Katalog nach Kategorie

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
      <th align="left">Titel</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Sprache</th>
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
      <th align="left">Titel</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Sprache</th>
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
      <th align="left">Titel</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Sprache</th>
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
      <th align="left">Titel</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Sprache</th>
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
      <th align="left">Titel</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Sprache</th>
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

## Projektstruktur

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Markdown-Ideen-Notizen
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # optionale LaTeX-Zwischendateien/Logs
├── docs/                          # statische Webseite + generierte Assets
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # multilingual README-Varianten
└── figs/                          # README- und Spendenassets
```

## Voraussetzungen

- `latexmk` mit einer funktionierenden TeX-Distribution (TeX Live oder gleichwertig).
- XeLaTeX-Unterstützung für CJK-Builds (für chinesische/japanische Publikationen): `xelatex` + CJK-fähige Schriften.
- Node.js (empfohlen 18+) für die Generierung von Website-Assets (`scripts/generate_site.mjs`).
- Git für Versionierung und den Mitwirkungs-Workflow.

## Installation

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Optionales lokales Hook-Setup:

```bash
bash scripts/enable-hooks.sh
```

## Build

- Englische/ASCII-PDFs:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Chinesische PDFs (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Alle Paper im PDF-Modus bauen:
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- LaTeX-Artefakte bereinigen (im Paper-Verzeichnis):
  - `latexmk -C`

## Nutzung

Typischer Tagesablauf:

1. Füge neue Ideen in `ideas/*.md` hinzu oder aktualisiere sie (Dateiname im kebab-case).
2. Fördere reife Notizen nach `publications/<slug>/<slug>.tex`.
3. Kompiliere die Publikations-PDFs mit dem passenden `latexmk`-Modus.
4. Wenn Websitedaten veröffentlicht werden, generiere statische Assets neu:
   - `node scripts/generate_site.mjs`
5. Prüfe die gerenderten Ausgaben (`.pdf`) und optional die `docs/`-Seiten.

## Konfiguration

- `mkdocs.yml` ist vorhanden und kann für eine MkDocs-basierte Dokumentationskonfiguration verwendet werden.
- `.github/workflows/pages.yml` steuert aktuell den GitHub-Pages-Deployment-Pfad für `docs/`.
- `docs/assets/i18n.js` und `docs/assets/i18n/*.json` steuern das i18n-Verhalten der Website.
- `CNAME` und `docs/CNAME` enthalten benutzerdefinierte Domain-Einstellungen.

Annahmehinweis: Dieses README hält sowohl MkDocs- als auch statische Site-Pipeline-Referenzen vor, weil beide im Repository vorhanden sind.

## Beispiele

Baue eine englische Publikation:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Baue eine chinesische Publikation:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Regeneriere Doc-Daten/Manifeste:

```bash
node scripts/generate_site.mjs
```

## Entwicklungshinweise

- Gleichungen in Markdown verwenden `$...$` und `$$...$$`.
- Externe Links mit Leerzeichen sind zur robusten Darstellung prozentkodiert.
- Bevorzuge additive Änderungen und vermeide das Umbenennen bestehender Dateien, sofern nicht erforderlich.
- CJK-Inhalte sollten XeLaTeX und ein Unicode-sicheres LaTeX-Setup nutzen (zum Beispiel `ctexart`, sofern zutreffend).
- Es ist zulässig, LaTeX-Artefakte in `publications/<slug>/artifacts/` zu committen.

## Fehlerbehebung

- `latexmk`-Befehl nicht gefunden:
  - Installiere eine TeX-Distribution und stelle sicher, dass `latexmk` im `PATH` liegt.
- CJK-Glyph-/Tofu-Probleme in PDFs:
  - Nutze den XeLaTeX-Modus und stelle sicher, dass die nötigen CJK-Schriftarten installiert sind.
- Build stoppt bei LaTeX-Fehlern:
  - Prüfe `<slug>.log` und führe mit `-interaction=nonstopmode -halt-on-error` erneut aus.
- Website-Metadaten werden nicht aktualisiert:
  - `node scripts/generate_site.mjs` erneut ausführen und Zeitstempel in `docs/assets/*.json` prüfen.

## Roadmap

- README-Katalog mit neuen Ideen/Publikationen synchron halten.
- Mehrsprachige Parität über `i18n/README.*.md` weiter ausbauen.
- Die Abstimmung zwischen MkDocs-Konfiguration und bereitgestellter statischer Pipeline verbessern, während sich der Dokumentations-Workflow weiterentwickelt.
- Leichtgewichtige Validierungsprüfungen für Konsistenz von README/Links/Katalog ergänzen.

## Mitwirken

- Verwende imperative, bereichsbezogene Commit-Messages (Beispiel: `Update README structure and operational docs`).
- Halte Änderungen thematisch fokussiert nach Themen/Paper.
- Validiere LaTeX-Kompilierung und gerenderte Ausgabe vor dem Push.
- Pull Requests sollten enthalten:
  - Zusammenfassung und Begründung,
  - berührte Pfade,
  - bei Relevanz den Build-Nachweis.

## Hinweise

- Gleichungen in Markdown verwenden `$...$` und `$$...$$`.
- Externe Links mit Leerzeichen sind für robustes Rendering prozentkodiert.

## Kontakt

Für Fragen zum Repository-Workflow, redaktionellen Updates oder Zusammenarbeit:

- Öffne ein Issue im Repository-Issue-Tracker (falls aktiviert).
- Starte eine Diskussion für ausführlichere Design- oder Redaktionseinblicke.
- Für Sponsoring- und Unterstützungsoptionen siehe das Support-Panel oben.

## Lizenz

Aktuell ist keine `LICENSE`-Datei in diesem Repository vorhanden.

Annahmehinweis: Bis eine Lizenzdatei hinzugefügt wird, sind Wiederverwendungs- und Weiterverteilungsbedingungen nicht definiert und sollten vom Repository-Betreiber geklärt werden.

## ❤️ Support

| Donate                                                                                                                                                                                                                                                                                                                                                     | PayPal                                                                                                                                                                                                                                                                                                                                                          | Stripe                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
