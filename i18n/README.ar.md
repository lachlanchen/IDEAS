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

## Overview

IDEAS هو دفتر ملاحظات خفيف ومُدار بالإصدارات لملاحظات وأفكار بحثية.

يتبع هذا المستودع سير عمل يعتمد على المحتوى أولًا:
- كتابة الأفكار بصيغة Markdown داخل `ideas/`.
- ترقية الأفكار الناضجة إلى مجلدات نشر داخل `publications/<slug>/`.
- الحفاظ على تطابق أسماء ملفات النشر مع الـ slug (`<slug>.tex`, `<slug>.pdf`).
- إعادة توليد ملفات PDF الخاصة بالنشر عبر أوامر `latexmk` قابلة لإعادة الإنتاج.
- الحفاظ على نسخ README متعددة اللغات داخل `i18n/` وصفحات ويب ثابتة داخل `docs/`.

## Quick Links

| القسم | الانتقال |
|---|---|
| الفهرس | [Catalog by Category](#catalog-by-category) |
| أوامر البناء | [Build](#build) |
| سير العمل اليومي | [Usage](#usage) |
| بنية المستودع | [Project Structure](#project-structure) |
| تفاصيل التشغيل | [Configuration](#configuration) |
| دليل المساهمة | [Contribution](#contribution) |
| الدعم | [Support / Donate](#support--donate) |

## About

IDEAS هو دفتر ملاحظات خفيف ومُدار بالإصدارات لملاحظات وأفكار بحثية.
- يعتمد على المحتوى أولًا: كل فكرة تكون بصيغة Markdown داخل `ideas/`، وتُعكس (عند نضجها) إلى LaTeX داخل `publications/<slug>/<slug>.tex` مع ملف PDF مُجمّع.
- الاصطلاحات: أسماء ملفات بنمط kebab-case؛ وأسماء ملفات النشر تطابق slug المجلد (`<slug>.tex`, `<slug>.pdf`).
- دعم CJK: المنشورات باللغة الصينية تُبنى باستخدام XeLaTeX.
- بنية قابلة لإعادة الإنتاج: استخدم `latexmk` (راجع قسم Build) لإعادة توليد ملفات PDF.

## Features

- خط أنابيب مُدار بالإصدارات من الفكرة إلى النشر (`ideas/` -> `publications/<slug>/`).
- فهرس بحثي منظّم حسب الفئة مع روابط مباشرة إلى Markdown/PDF.
- مجموعة README متعددة اللغات بـ 9 لغات داخل `i18n/`.
- محتوى موقع ثابت داخل `docs/` مع ملفات manifests مولّدة داخل `docs/assets/`.
- إعداد اختياري لخطافات git محليًا عبر `scripts/enable-hooks.sh`.
- يتضمن المستودع ملفات artifacts للنشر (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) عند الحاجة لضمان قابلية إعادة الإنتاج.

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
      <th align="left">العنوان</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">اللغة</th>
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
      <th align="left">العنوان</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">اللغة</th>
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
      <th align="left">العنوان</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">اللغة</th>
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
      <th align="left">العنوان</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">اللغة</th>
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
      <th align="left">العنوان</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">اللغة</th>
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
├── ideas/                         # ملاحظات أفكار بصيغة Markdown
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # ملفات LaTeX المساعدة/السجل (اختياري)
├── docs/                          # موقع ثابت + ملفات مولدة
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # نسخ README متعددة اللغات
└── figs/                          # أصول README وأصول التبرع
```

## Prerequisites

- `latexmk` مع توزيعة TeX تعمل (TeX Live أو ما يعادلها).
- دعم XeLaTeX لبناءات CJK (للمنشورات الصينية/اليابانية): `xelatex` + خطوط تدعم CJK.
- Node.js (يوصى بالإصدار 18+) لتوليد أصول الموقع (`scripts/generate_site.mjs`).
- Git لإدارة الإصدارات وسير عمل المساهمة.

## Installation

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

إعداد اختياري للـ hooks المحلية:

```bash
bash scripts/enable-hooks.sh
```

## Build

- ملفات PDF الإنجليزية/ASCII:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- ملفات PDF الصينية (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- بناء جميع الأوراق (وضع PDF):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- تنظيف ملفات LaTeX المؤقتة (داخل مجلد الورقة):
  - `latexmk -C`

## Usage

سير العمل اليومي المعتاد:

1. أضف أو حدّث ملاحظات الأفكار في `ideas/*.md` (اسم ملف بصيغة kebab-case).
2. رقِّ الملاحظات الناضجة إلى `publications/<slug>/<slug>.tex`.
3. جمّع ملف PDF الخاص بالنشر باستخدام وضع `latexmk` المناسب.
4. عند نشر بيانات الموقع، أعد توليد الأصول الثابتة:
   - `node scripts/generate_site.mjs`
5. تحقّق من المخرجات المعروضة (`.pdf` واختياريًا صفحات `docs/`).

## Configuration

- يوجد `mkdocs.yml` ويمكن استخدامه لإعداد توثيق مبني على MkDocs.
- الملف `.github/workflows/pages.yml` يدير حاليًا نشر GitHub Pages لمجلد `docs/`.
- الملف `docs/assets/i18n.js` والملفات `docs/assets/i18n/*.json` تتحكم في سلوك تعدد اللغات بالموقع.
- الملفان `CNAME` و `docs/CNAME` يحتويان إعدادات النطاق المخصص.

ملاحظة افتراضية: يحافظ هذا README على الإشارة إلى كل من MkDocs وخط أنابيب الموقع الثابت المخصص لأن كليهما موجود في المستودع.

## Examples

بناء منشور إنجليزي واحد:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

بناء منشور صيني واحد:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

إعادة توليد بيانات/manifest الموقع:

```bash
node scripts/generate_site.mjs
```

## Development Notes

- المعادلات في Markdown تستخدم `$...$` و `$$...$$`.
- الروابط الخارجية التي تحتوي مسافات تُشفّر بنسبة مئوية لضمان عرض موثوق.
- فضّل التعديلات الإضافية وتجنّب إعادة تسمية الملفات الموجودة إلا عند الضرورة.
- محتوى CJK يجب أن يستخدم XeLaTeX وإعداد LaTeX آمنًا مع Unicode (مثل `ctexart` عند الاقتضاء).
- من المقبول حفظ ملفات LaTeX artifacts داخل `publications/<slug>/artifacts/`.

## Troubleshooting

- تعذّر العثور على أمر `latexmk`:
  - ثبّت توزيعة TeX وتأكد أن `latexmk` موجود في `PATH`.
- مشاكل محارف CJK/ظهور مربعات (tofu) في ملفات PDF:
  - استخدم وضع XeLaTeX وتأكد من تثبيت خطوط CJK المطلوبة.
- توقف البناء بسبب أخطاء LaTeX:
  - راجع `<slug>.log` وأعد التشغيل مع `-interaction=nonstopmode -halt-on-error`.
- عدم تحديث بيانات الموقع:
  - أعد تشغيل `node scripts/generate_site.mjs` وتحقق من الطوابع الزمنية لملفات `docs/assets/*.json`.

## Roadmap

- إبقاء فهرس README متزامنًا مع الأفكار/المنشورات الجديدة.
- الاستمرار في تعزيز تكافؤ المحتوى بين جميع ملفات `i18n/README.*.md`.
- تحسين المواءمة بين إعداد MkDocs وخط الأنابيب الثابت المنشور مع تطور سير عمل التوثيق.
- إضافة فحوصات تحقق خفيفة لتناسق README والروابط والفهرس.

## Contribution

- استخدم رسائل commit بصيغة الأمر ومحددة النطاق (مثال: `Update README structure and operational docs`).
- اجعل التعديلات مركزة حسب الموضوع/الورقة.
- تحقق من تجميع LaTeX ومن الإخراج النهائي قبل الدفع.
- يجب أن تتضمن طلبات السحب:
  - ملخصًا وسبب التغيير،
  - المسارات التي تم تعديلها،
  - تأكيد البناء عند الحاجة.

## Notes

- المعادلات في Markdown تستخدم `$...$` و `$$...$$`.
- الروابط الخارجية التي تحتوي مسافات تُشفّر بنسبة مئوية لضمان عرض موثوق.

## Support / Donate

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

## License

لا يوجد ملف `LICENSE` حاليًا في هذا المستودع.

ملاحظة افتراضية: إلى أن تتم إضافة ملف ترخيص، تبقى شروط إعادة الاستخدام/إعادة التوزيع غير محددة ويجب توضيحها من قبل مالك المستودع.
