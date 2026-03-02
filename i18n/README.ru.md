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

## Обзор

IDEAS — это лёгкий, версионируемый блокнот исследовательских заметок и эссе.

Этот репозиторий использует подход content-first:

- Формируйте идеи в Markdown в каталоге `ideas/`.
- Переносите зрелые идеи в папки публикаций `publications/<slug>/`.
- Соблюдайте соответствие имён файлов публикаций slug-у (`<slug>.tex`, `<slug>.pdf`).
- Пересобирайте PDF-публикации с помощью воспроизводимых команд `latexmk`.
- Поддерживайте многоязычные версии README в `i18n/` и статические страницы в `docs/`.

## Быстрые ссылки

| Раздел                        | Переход                                         |
| ----------------------------- | ----------------------------------------------- |
| 🗂️ Каталог                    | [Каталог по категориям](#каталог-по-категориям) |
| 🧰 Команды сборки             | [Сборка](#сборка)                               |
| 🧪 Ежедневный рабочий процесс | [Использование](#использование)                 |
| 🧱 Структура репозитория      | [Структура проекта](#структура-проекта)         |
| ⚙️ Операционные детали        | [Конфигурация](#конфигурация)                   |
| 🧩 Руководство по участию     | [Участие](#участие)                             |
| ✉️ Контакты                   | [Контакт](#контакт)                             |
| ❤️ Поддержка                  | [Поддержка / Donate](#-support)                 |

## О проекте

IDEAS — это лёгкий, версионируемый блокнот исследовательских заметок и эссе.

- Content-first: каждая идея пишется в `ideas/` в Markdown и при достижении зрелости дублируется в LaTeX как `publications/<slug>/<slug>.tex` с собранным PDF.
- Принципы: имена файлов в kebab-case; имена публикаций соответствуют slug каталога (`<slug>.tex`, `<slug>.pdf`).
- Поддержка CJK: публикации на китайском языке компилируются с XeLaTeX.
- Воспроизводимые сборки: используйте `latexmk` (см. раздел Build) для пересборки PDF.

## Возможности

- Версионируемый конвейер «идея → публикация» (`ideas/` -> `publications/<slug>/`).
- Каталог исследований по категориям с прямыми ссылками на Markdown/PDF.
- Набор README на 9 языках в каталоге `i18n/`.
- Контент статического сайта в `docs/` и сгенерированные манифесты в `docs/assets/`.
- Опциональная локальная настройка git hooks через `scripts/enable-hooks.sh`.
- Репозиторий хранит публикационные артефакты (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) там, где это полезно для воспроизводимости.

## Каталог по категориям

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
      <th align="left">Название</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Язык</th>
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
      <th align="left">Название</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Язык</th>
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
      <th align="left">Название</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Язык</th>
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
      <th align="left">Название</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Язык</th>
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
      <th align="left">Название</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Язык</th>
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

## Структура проекта

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Markdown-заметки с идеями
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # optional LaTeX aux/log файлы
├── docs/                          # статический сайт + сгенерированные ресурсы
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # многоязычные версии README
└── figs/                          # ассеты README и донатов
```

## Требования

- `latexmk` с рабочим TeX-дистрибутивом (TeX Live или эквивалент).
- Поддержка XeLaTeX для сборок с CJK (для китайских публикаций): `xelatex` + CJK-совместимые шрифты.
- Node.js (рекомендуется 18+) для генерации ассетов сайта (`scripts/generate_site.mjs`).
- Git для версионирования и процесса внесения изменений.

## Установка

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Опциональная настройка локальных хуков:

```bash
bash scripts/enable-hooks.sh
```

## Сборка

- Английские/ASCII PDF:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Китайские PDF (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Собрать все публикации (режим PDF):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Очистить LaTeX-артефакты (в каталоге конкретной публикации):
  - `latexmk -C`

## Использование

Типовой ежедневный поток:

1. Добавьте или обновите заметки идей в `ideas/*.md` (имена файлов в kebab-case).
2. Переносите зрелые заметки в `publications/<slug>/<slug>.tex`.
3. Соберите PDF публикации подходящим режимом `latexmk`.
4. Если обновляете веб-данные сайта, пересоберите статические ассеты:
   - `node scripts/generate_site.mjs`
5. Проверьте отрендеренные результаты (`.pdf` и, при необходимости, страницы `docs/`).

## Конфигурация

- Файл `mkdocs.yml` есть и может использоваться для настройки документации на основе MkDocs.
- `.github/workflows/pages.yml` сейчас управляет деплоем GitHub Pages для `docs/`.
- `docs/assets/i18n.js` и `docs/assets/i18n/*.json` управляют поведением i18n сайта.
- `CNAME` и `docs/CNAME` содержат настройки пользовательского домена.

Примечание: этот README сохраняет ссылки и на MkDocs, и на настраиваемый конвейер статического сайта, так как оба присутствуют в репозитории.

## Примеры

Собрать одну английскую публикацию:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Собрать одну китайскую публикацию:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Перегенерировать данные/манифесты сайта:

```bash
node scripts/generate_site.mjs
```

## Заметки по разработке

- Уравнения в Markdown пишутся с помощью `$...$` и `$$...$$`.
- Внешние ссылки с пробелами кодируются через percent-encoding для надёжного рендеринга.
- Отдавайте приоритет инкрементальным правкам и избегайте переименования существующих файлов без необходимости.
- Для CJK-контента используйте XeLaTeX и Unicode-safe конфигурацию LaTeX (например, `ctexart`, где применимо).
- Допускается коммитить артефакты LaTeX в `publications/<slug>/artifacts/`.

## Устранение неполадок

- Команда `latexmk` не найдена:
  - Установите TeX-дистрибутив и убедитесь, что `latexmk` доступна в `PATH`.
- Проблемы с глифами/tofu в PDF для CJK:
  - Используйте режим XeLaTeX и убедитесь, что установлены необходимые CJK-шрифты.
- Сборка останавливается на ошибках LaTeX:
  - Посмотрите `<slug>.log` и повторите команду с `-interaction=nonstopmode -halt-on-error`.
- Метаданные сайта не обновляются:
  - Перезапустите `node scripts/generate_site.mjs` и проверьте временные метки файлов `docs/assets/*.json`.

## Дорожная карта

- Поддерживать каталог README в актуальном состоянии по мере появления новых идей/публикаций.
- Продолжать выравнивать мультиязычную полноту между файлами `i18n/README.*.md`.
- Улучшать согласованность между конфигурацией MkDocs и развернутым статическим конвейером по мере развития workflow документации.
- Добавить лёгкие проверки корректности README/ссылок/каталога.

## Участие

- Используйте повелительные, предметные сообщения коммитов (например: `Update README structure and operational docs`).
- Держите изменения сфокусированными по теме или статье.
- Проверяйте сборку LaTeX и результат рендеринга перед push.
- Pull request должен включать:
  - краткое резюме и обоснование,
  - затронутые пути,
  - подтверждение сборки, если это уместно.

## Примечания

- Уравнения в Markdown пишутся с помощью `$...$` и `$$...$$`.
- Внешние ссылки с пробелами кодируются через percent-encoding для надёжного рендеринга.

## Контакт

По вопросам рабочего процесса репозитория, редакторских обновлений или сотрудничества:

- Откройте issue в трекере репозитория (если он включён).
- Начните discussion для более детального дизайна или редакторской проверки.
- Для вариантов спонсорской поддержки см. панель поддержки выше.

## Лицензия

В этом репозитории пока отсутствует файл `LICENSE`.

Примечание: пока файл лицензии не добавлен, условия использования и распространения остаются неуточнёнными и должны быть согласованы владельцем репозитория.

## ❤️ Support

| Donate                                                                                                                                                                                                                                                                                                                                                     | PayPal                                                                                                                                                                                                                                                                                                                                                          | Stripe                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
