[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

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

---

## Vision General

IDEAS es un cuaderno ligero y versionado de notas de investigación y ensayos.

Este repositorio sigue un flujo de trabajo centrado en el contenido:

- Escribir ideas en Markdown bajo `ideas/`.
- Promover ideas maduras en carpetas de publicación bajo `publications/<slug>/`.
- Mantener nombres de archivo de publicación con coincidencia por slug (`<slug>.tex`, `<slug>.pdf`).
- Regenerar los PDFs de publicación con comandos reproducibles de `latexmk`.
- Mantener variantes multilingües de README en `i18n/` y páginas web estáticas en `docs/`.

## Enlaces Rapidos

| Seccion                       | Ir a                                                |
| ----------------------------- | --------------------------------------------------- |
| 🗂️ Catalogo                   | [Catalogo por Categoria](#catalogo-por-categoria)   |
| 🧰 Comandos de compilacion    | [Compilacion](#compilacion)                         |
| 🧪 Flujo diario               | [Uso](#uso)                                         |
| 🧱 Estructura del repositorio | [Estructura del Proyecto](#estructura-del-proyecto) |
| ⚙️ Detalles operativos        | [Configuracion](#configuracion)                     |
| 🧩 Guia de contribucion       | [Contribucion](#contribucion)                       |
| ✉️ Contacto                   | [Contacto](#contacto)                               |
| ❤️ Support                    | [Support / Donate](#-support)                       |

## Acerca De

IDEAS es un cuaderno ligero y versionado de notas de investigación y ensayos.

- Prioridad al contenido: cada idea es Markdown en `ideas/`, y al madurar se refleja a LaTeX en `publications/<slug>/<slug>.tex` con un PDF compilado.
- Convenciones: nombres de archivo en kebab-case; los nombres de publicación coinciden con el slug de su carpeta (`<slug>.tex`, `<slug>.pdf`).
- Soporte CJK: las publicaciones en chino compilan con XeLaTeX.
- Compilaciones reproducibles: use `latexmk` (consulte la seccion Compilacion) para regenerar PDFs.

## Caracteristicas

- Flujo de idea a publicación versionado (`ideas/` -> `publications/<slug>/`).
- Catálogo de investigación organizado por categoria con enlaces directos a Markdown/PDF.
- README multilingüe en 9 idiomas bajo `i18n/`.
- Contenido de sitio estático en `docs/` con manifiestos generados en `docs/assets/`.
- Configuracion opcional de hooks locales de Git via `scripts/enable-hooks.sh`.
- El repositorio incluye artefactos de publicación (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) cuando son útiles para reproducibilidad.

## Catalogo por Categoria

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
      <th align="left">Titulo</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Idioma</th>
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

### Teoria

<table width="100%" style="width:100%; table-layout:fixed; word-break:break-word; overflow-wrap:anywhere;">
  <colgroup>
    <col width="52%" />
    <col width="28%" />
    <col width="15%" />
    <col width="5%" />
  </colgroup>
  <thead>
    <tr>
      <th align="left">Titulo</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Idioma</th>
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
      <th align="left">Titulo</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Idioma</th>
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
      <th align="left">Titulo</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Idioma</th>
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
      <th align="left">Titulo</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Idioma</th>
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

## Estructura del Proyecto

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Notas de ideas en Markdown
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # archivos auxiliares/log de LaTeX opcionales
├── docs/                          # Sitio web estático + recursos generados
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # Variantes multilingues del README
└── figs/                          # recursos del README y donaciones
```

## Requisitos Previos

- `latexmk` con una distribución TeX funcional (TeX Live u otra equivalente).
- Soporte XeLaTeX para compilaciones CJK (para publicaciones en chino/japonés): `xelatex` + fuentes compatibles con CJK.
- Node.js (recomendado 18+) para la generación de recursos del sitio (`scripts/generate_site.mjs`).
- Git para versionado y flujo de contribucion.

## Instalacion

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Configuración opcional de hook local:

```bash
bash scripts/enable-hooks.sh
```

## Compilacion

- PDFs en inglés/ASCII:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- PDFs en chino (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Compilar todos los artículos (modo PDF):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Limpiar artefactos de LaTeX (dentro del directorio de un paper):
  - `latexmk -C`

## Uso

Flujo diario habitual:

1. Agregar o actualizar notas de ideas en `ideas/*.md` (nombre de archivo en kebab-case).
2. Promover notas maduras a `publications/<slug>/<slug>.tex`.
3. Compilar el PDF de la publicación con el modo `latexmk` apropiado.
4. Si se publican datos del sitio web, regenerar activos estáticos:
   - `node scripts/generate_site.mjs`
5. Validar los resultados renderizados (`.pdf`) y, opcionalmente, las páginas en `docs/`.

## Configuracion

- Existe `mkdocs.yml` y puede usarse para configuracion de documentación basada en MkDocs.
- `.github/workflows/pages.yml` actualmente controla el despliegue de GitHub Pages para `docs/`.
- `docs/assets/i18n.js` y `docs/assets/i18n/*.json` controlan el comportamiento de i18n del sitio web.
- `CNAME` y `docs/CNAME` contienen la configuracion de dominio personalizado.

Nota de supuestos: este README conserva referencias tanto a MkDocs como al pipeline de sitio estático porque ambos existen en el repositorio.

## Ejemplos

Compilar una publicación en inglés:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Compilar una publicación en chino:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Regenerar datos/manifests de docs:

```bash
node scripts/generate_site.mjs
```

## Notas de Desarrollo

- Las ecuaciones en Markdown usan `$...$` y `$$...$$`.
- Los enlaces externos con espacios se codifican con percent-encoded para mejorar la renderización.
- Prefiera ediciones aditivas y evitar renombrar archivos existentes salvo que sea necesario.
- El contenido CJK debe usar XeLaTeX y configuración LaTeX segura para Unicode (por ejemplo `ctexart` donde aplique).
- Es aceptable commitear artefactos LaTeX en `publications/<slug>/artifacts/`.

## Resolucion de Problemas

- `latexmk` no encontrado:
  - Instale una distribución TeX y asegúrese de que `latexmk` esté en `PATH`.
- Problemas de glifos/tofu CJK en PDFs:
  - Use modo XeLaTeX y asegúrese de tener fuentes CJK instaladas.
- La compilación se detiene por errores de LaTeX:
  - Revise `<slug>.log` y vuelva a ejecutar con `-interaction=nonstopmode -halt-on-error`.
- Metadatos del sitio web sin actualizar:
  - Vuelva a ejecutar `node scripts/generate_site.mjs` y verifique los timestamps en `docs/assets/*.json`.

## Hoja de Ruta

- Mantener el catalogo del README sincronizado con nuevas ideas/publicaciones.
- Reforzar la paridad multilingue entre archivos `i18n/README.*.md`.
- Mejorar la alineacion entre la configuración de MkDocs y el pipeline estático de despliegue conforme evoluciona el flujo docs.
- Añadir validaciones livianas para consistencia de README/enlaces/catálogo.

## Contribucion

- Use mensajes de commit imperativos y con alcance (por ejemplo: `Update README structure and operational docs`).
- Mantenga cambios enfocados por tema/artículo.
- Valide la compilación LaTeX y la salida renderizada antes de hacer push.
- Los pull requests deben incluir:
  - resumen y razonamiento,
  - rutas modificadas,
  - confirmación de compilación cuando aplique.

## Notas

- Las ecuaciones en Markdown usan `$...$` y `$$...$$`.
- Los enlaces externos con espacios usan percent-encoded para una renderización fiable.

## ❤️ Support

<!-- support:start -->
[![GitHub Sponsors](https://img.shields.io/badge/GitHub-Sponsors-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)
[![LazyingArt Support](https://img.shields.io/badge/LazyingArt-Support-0EA5E9?style=for-the-badge)](https://chat.lazying.art/donate)
[![PayPal Support](https://img.shields.io/badge/PayPal-Support-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen)
[![Stripe Support](https://img.shields.io/badge/Stripe-Support-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400)
<!-- support:end -->

## Contacto

Para preguntas sobre el flujo del repositorio, actualizaciones editoriales o colaboración:

- Abra un issue en el tracker del repositorio (si está habilitado).
- Inicie una discusión para revisiones de diseño o edición más extensas.
- Para opciones de patrocinio y apoyo al proyecto, consulte el panel de soporte arriba.

## Licencia

Actualmente no existe un archivo `LICENSE` en este repositorio.

Nota de suposicion: hasta que se agregue un archivo de licencia, los terminos de reutilización y redistribucion no están definidos y deberian ser aclarados por el propietario del repositorio.
