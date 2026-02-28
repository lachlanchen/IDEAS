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

## Überblick

IDEAS ist ein leichtgewichtiges, versioniertes Notizbuch für Forschungsnotizen und Essays.

Dieses Repository folgt einem Content-first-Workflow:
- Ideen als Markdown unter `ideas/` verfassen.
- Ausgereifte Ideen in Publikationsordner unter `publications/<slug>/` überführen.
- Dateinamen in Publikationen am Slug ausrichten (`<slug>.tex`, `<slug>.pdf`).
- Publikations-PDFs mit reproduzierbaren `latexmk`-Befehlen neu generieren.
- Mehrsprachige README-Varianten unter `i18n/` und statische Webseiten unter `docs/` pflegen.

## Schnellzugriffe

| Abschnitt | Sprung |
|---|---|
| Katalog | [Katalog nach Kategorie](#katalog-nach-kategorie) |
| Build-Befehle | [Build](#build) |
| Täglicher Workflow | [Nutzung](#nutzung) |
| Repository-Layout | [Projektstruktur](#projektstruktur) |
| Betriebsdetails | [Konfiguration](#konfiguration) |
| Beitragshinweise | [Mitwirken](#mitwirken) |
| Unterstützung | [Support / Spenden](#support--spenden) |

## Über das Projekt

IDEAS ist ein leichtgewichtiges, versioniertes Notizbuch für Forschungsnotizen und Essays.
- Content-first: Jede Idee ist Markdown in `ideas/` und wird (wenn ausgereift) in LaTeX unter `publications/<slug>/<slug>.tex` mit kompiliertem PDF gespiegelt.
- Konventionen: kebab-case-Dateinamen; Publikationsdateien entsprechen dem Ordner-Slug (`<slug>.tex`, `<slug>.pdf`).
- CJK-Unterstützung: Chinesischsprachige Publikationen werden mit XeLaTeX kompiliert.
- Reproduzierbare Builds: PDFs mit `latexmk` neu erstellen (siehe Abschnitt Build).

## Funktionen

- Versionierte Idea-to-Publication-Pipeline (`ideas/` -> `publications/<slug>/`).
- Forschungskatalog nach Kategorien mit direkten Markdown-/PDF-Links.
- Mehrsprachige README-Sammlung in 9 Sprachen unter `i18n/`.
- Inhalte für statische Website unter `docs/` mit generierten Manifesten in `docs/assets/`.
- Optionales lokales Git-Hook-Setup über `scripts/enable-hooks.sh`.
- Repository enthält Publikationsartefakte (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`), wo dies für Reproduzierbarkeit sinnvoll ist.

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

## Voraussetzungen

- `latexmk` mit einer funktionierenden TeX-Distribution (TeX Live oder gleichwertig).
- XeLaTeX-Unterstützung für CJK-Builds (für chinesische/japanische Publikationen): `xelatex` + CJK-fähige Schriftarten.
- Node.js (empfohlen 18+) für die Generierung von Site-Assets (`scripts/generate_site.mjs`).
- Git für Versionierung und den Beitrags-Workflow.

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
- Alle Papers bauen (PDF-Modus):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- LaTeX-Artefakte bereinigen (innerhalb eines Paper-Verzeichnisses):
  - `latexmk -C`

## Nutzung

Typischer Tagesablauf:

1. Ideen-Notizen in `ideas/*.md` hinzufügen oder aktualisieren (kebab-case-Dateiname).
2. Ausgereifte Notizen nach `publications/<slug>/<slug>.tex` überführen.
3. Das Publikations-PDF mit dem passenden `latexmk`-Modus kompilieren.
4. Falls Website-Daten veröffentlicht werden, statische Assets neu generieren:
   - `node scripts/generate_site.mjs`
5. Gerenderte Ausgaben prüfen (`.pdf` und optional Seiten unter `docs/`).

## Konfiguration

- `mkdocs.yml` ist vorhanden und kann für MkDocs-basierte Dokumentationskonfiguration verwendet werden.
- `.github/workflows/pages.yml` steuert derzeit das GitHub-Pages-Deployment für `docs/`.
- `docs/assets/i18n.js` und `docs/assets/i18n/*.json` steuern das i18n-Verhalten der Website.
- `CNAME` und `docs/CNAME` enthalten Einstellungen für benutzerdefinierte Domains.

Hinweis zur Annahme: Dieses README belässt sowohl Verweise auf MkDocs als auch auf die benutzerdefinierte Static-Site-Pipeline, da beides im Repository vorhanden ist.

## Beispiele

Eine englische Publikation bauen:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Eine chinesische Publikation bauen:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Docs-Daten/Manifeste neu generieren:

```bash
node scripts/generate_site.mjs
```

## Entwicklungshinweise

- Gleichungen in Markdown verwenden `$...$` und `$$...$$`.
- Externe Links mit Leerzeichen sind für zuverlässiges Rendering prozentkodiert.
- Additive Änderungen bevorzugen und bestehende Dateien nur bei Notwendigkeit umbenennen.
- CJK-Inhalte sollten XeLaTeX und ein Unicode-sicheres LaTeX-Setup verwenden (zum Beispiel `ctexart`, wo zutreffend).
- Es ist akzeptabel, LaTeX-Artefakte unter `publications/<slug>/artifacts/` zu committen.

## Fehlerbehebung

- `latexmk`-Befehl nicht gefunden:
  - Eine TeX-Distribution installieren und sicherstellen, dass `latexmk` im `PATH` liegt.
- CJK-Glyph-/Tofu-Probleme in PDFs:
  - XeLaTeX-Modus verwenden und sicherstellen, dass erforderliche CJK-Schriftarten installiert sind.
- Build stoppt bei LaTeX-Fehlern:
  - `<slug>.log` prüfen und mit `-interaction=nonstopmode -halt-on-error` erneut ausführen.
- Website-Metadaten werden nicht aktualisiert:
  - `node scripts/generate_site.mjs` erneut ausführen und Zeitstempel in `docs/assets/*.json` prüfen.

## Roadmap

- README-Katalog mit neuen Ideen/Publikationen synchron halten.
- Mehrsprachige Parität über `i18n/README.*.md` hinweg weiter stärken.
- Abstimmung zwischen MkDocs-Konfiguration und bereitgestellter Static-Pipeline verbessern, während sich der Docs-Workflow weiterentwickelt.
- Leichtgewichtige Validierungschecks für README-/Link-/Katalog-Konsistenz ergänzen.

## Mitwirken

- Imperative, bereichsbezogene Commit-Messages verwenden (Beispiel: `Update README structure and operational docs`).
- Änderungen thematisch/Paper-bezogen fokussiert halten.
- LaTeX-Kompilierung und gerenderte Ausgabe vor dem Pushen validieren.
- Pull Requests sollten enthalten:
  - Zusammenfassung und Begründung,
  - betroffene Pfade,
  - Build-Bestätigung, wenn relevant.

## Hinweise

- Gleichungen in Markdown verwenden `$...$` und `$$...$$`.
- Externe Links mit Leerzeichen sind für zuverlässiges Rendering prozentkodiert.

## Support / Spenden

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

## Lizenz

In diesem Repository ist derzeit keine `LICENSE`-Datei vorhanden.

Hinweis zur Annahme: Bis eine Lizenzdatei hinzugefügt wird, sind Bedingungen für Wiederverwendung/Weiterverteilung nicht definiert und sollten durch den Repository-Eigentümer geklärt werden.
