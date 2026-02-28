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

## Обзор

IDEAS — это легковесный версионируемый блокнот исследовательских заметок и эссе.

Этот репозиторий следует подходу content-first:
- Пишите идеи в Markdown в `ideas/`.
- Переносите зрелые идеи в папки публикаций в `publications/<slug>/`.
- Сохраняйте соответствие имён файлов публикаций slug-у (`<slug>.tex`, `<slug>.pdf`).
- Пересобирайте PDF публикаций воспроизводимыми командами `latexmk`.
- Поддерживайте многоязычные варианты README в `i18n/` и статические веб-страницы в `docs/`.

## Быстрые ссылки

| Раздел | Переход |
|---|---|
| Каталог | [Каталог по категориям](#каталог-по-категориям) |
| Команды сборки | [Сборка](#сборка) |
| Ежедневный рабочий процесс | [Использование](#использование) |
| Структура репозитория | [Структура проекта](#структура-проекта) |
| Операционные детали | [Конфигурация](#конфигурация) |
| Руководство по вкладу | [Участие](#участие) |
| Поддержка | [Поддержка / Донат](#поддержка--донат) |

## О проекте

IDEAS — это легковесный версионируемый блокнот исследовательских заметок и эссе.
- Content-first: каждая идея хранится в Markdown в `ideas/`, а при зрелости переносится в LaTeX в `publications/<slug>/<slug>.tex` с собранным PDF.
- Соглашения: имена файлов в kebab-case; имена файлов публикации соответствуют slug папки (`<slug>.tex`, `<slug>.pdf`).
- Поддержка CJK: публикации на китайском языке компилируются через XeLaTeX.
- Воспроизводимые сборки: используйте `latexmk` (см. раздел Build) для пересоздания PDF.

## Возможности

- Версионируемый конвейер от идеи к публикации (`ideas/` -> `publications/<slug>/`).
- Исследовательский каталог, организованный по категориям, с прямыми ссылками на Markdown/PDF.
- Набор многоязычных README на 9 языках в `i18n/`.
- Контент статического сайта в `docs/` с сгенерированными манифестами в `docs/assets/`.
- Опциональная локальная настройка git hooks через `scripts/enable-hooks.sh`.
- Репозиторий включает артефакты публикаций (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) там, где это полезно для воспроизводимости.

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
│       └── artifacts/             # необязательные LaTeX aux/log файлы
├── docs/                          # статический сайт + сгенерированные ассеты
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # многоязычные варианты README
└── figs/                          # ассеты README и донатов
```

## Требования

- `latexmk` с рабочим TeX-дистрибутивом (TeX Live или эквивалент).
- Поддержка XeLaTeX для CJK-сборок (для китайских/японских публикаций): `xelatex` + CJK-совместимые шрифты.
- Node.js (рекомендуется 18+) для генерации ассетов сайта (`scripts/generate_site.mjs`).
- Git для версионирования и процесса вклада.

## Установка

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Опциональная настройка локальных hooks:

```bash
bash scripts/enable-hooks.sh
```

## Сборка

- Английские/ASCII PDF:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Китайские PDF (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Собрать все статьи (режим PDF):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Очистить LaTeX-артефакты (внутри директории статьи):
  - `latexmk -C`

## Использование

Типовой ежедневный поток:

1. Добавляйте или обновляйте заметки-идеи в `ideas/*.md` (имя файла в kebab-case).
2. Переносите зрелые заметки в `publications/<slug>/<slug>.tex`.
3. Компилируйте PDF публикации с подходящим режимом `latexmk`.
4. Если публикуете данные сайта, пересоздайте статические ассеты:
   - `node scripts/generate_site.mjs`
5. Проверьте результаты рендеринга (`.pdf` и при необходимости страницы `docs/`).

## Конфигурация

- `mkdocs.yml` присутствует и может использоваться для настройки документации на базе MkDocs.
- `.github/workflows/pages.yml` сейчас управляет деплоем GitHub Pages для `docs/`.
- `docs/assets/i18n.js` и `docs/assets/i18n/*.json` управляют i18n-поведением сайта.
- `CNAME` и `docs/CNAME` содержат настройки пользовательского домена.

Примечание о допущении: этот README сохраняет ссылки и на MkDocs, и на кастомный пайплайн статического сайта, поскольку в репозитории присутствуют оба.

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

Пересоздать данные/манифесты docs:

```bash
node scripts/generate_site.mjs
```

## Заметки по разработке

- Уравнения в Markdown используют `$...$` и `$$...$$`.
- Внешние ссылки с пробелами кодируются через percent-encoding для надежного рендеринга.
- Предпочитайте аддитивные правки и избегайте переименования существующих файлов без необходимости.
- Для CJK-контента используйте XeLaTeX и Unicode-safe настройку LaTeX (например, `ctexart`, где применимо).
- Допустимо коммитить LaTeX-артефакты в `publications/<slug>/artifacts/`.

## Устранение неполадок

- Команда `latexmk` не найдена:
  - Установите TeX-дистрибутив и убедитесь, что `latexmk` находится в `PATH`.
- Проблемы с CJK-глифами/tofu в PDF:
  - Используйте режим XeLaTeX и убедитесь, что установлены необходимые CJK-шрифты.
- Сборка останавливается на ошибках LaTeX:
  - Проверьте `<slug>.log` и перезапустите с `-interaction=nonstopmode -halt-on-error`.
- Метаданные сайта не обновляются:
  - Повторно запустите `node scripts/generate_site.mjs` и проверьте таймстемпы `docs/assets/*.json`.

## Дорожная карта

- Поддерживать синхронизацию каталога README с новыми идеями/публикациями.
- Продолжать усиливать многоязычный паритет между файлами `i18n/README.*.md`.
- Улучшать согласованность между конфигом MkDocs и развёрнутым статическим пайплайном по мере развития workflow документации.
- Добавить легковесные проверки согласованности README/ссылок/каталога.

## Участие

- Используйте императивные, scoped-сообщения коммитов (пример: `Update README structure and operational docs`).
- Сохраняйте изменения сфокусированными по теме/статье.
- Проверяйте компиляцию LaTeX и результат рендеринга перед push.
- Pull request должен включать:
  - summary и rationale,
  - затронутые пути,
  - подтверждение сборки, если применимо.

## Примечания

- Уравнения в Markdown используют `$...$` и `$$...$$`.
- Внешние ссылки с пробелами кодируются через percent-encoding для надежного рендеринга.

## Поддержка / Донат

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

## Лицензия

В этом репозитории сейчас отсутствует файл `LICENSE`.

Примечание о допущении: до добавления файла лицензии условия повторного использования/распространения не определены и должны быть уточнены у владельца репозитория.
