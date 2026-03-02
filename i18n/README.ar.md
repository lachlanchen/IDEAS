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

## نظرة عامة

<a id="overview"></a>

IDEAS هو مفكرة بحثية خفيفة ومرجعية للإصدارات الخاصة بملاحظات ومقالات بحثية.

يتبع هذا المستودع أسلوب عمل يقوم على أن تكون الفكرة أولًا:

- تدوين الأفكار بصيغة `Markdown` داخل `ideas/`.
- ترحيل الأفكار الناضجة إلى مجلدات النشر داخل `publications/<slug>/`.
- الحفاظ على تطابق أسماء ملفات النشر مع الـ `slug` (`<slug>.tex`, `<slug>.pdf`).
- إعادة بناء ملفات PDF للنشر باستخدام أوامر `latexmk` القابلة لإعادة التشغيل.
- الحفاظ على نسخ README متعددة اللغات تحت `i18n/` وصفحات ويب ثابتة تحت `docs/`.

## روابط سريعة

<a id="quick-links"></a>

| القسم               | الانتقال                                  |
| ------------------- | ----------------------------------------- |
| 🗂️ الفهرس           | [التصنيف حسب الفئة](#catalog-by-category) |
| 🧰 أوامر البناء     | [البناء](#build)                          |
| 🧪 سير العمل اليومي | [الاستخدام](#usage)                       |
| 🧱 بنية المستودع    | [بنية المشروع](#project-structure)        |
| ⚙️ تفاصيل الإعداد   | [الإعدادات](#configuration)               |
| 🧩 دليل المساهمة    | [المساهمة](#contribution)                 |
| ✉️ التواصل          | [التواصل](#contact)                       |
| ❤️ الدعم            | [الدعم/التبرع](#-support)                 |

## نبذة

<a id="about"></a>

IDEAS هو مفكرة بحثية خفيفة ومرجعية للإصدارات لمذكرات وأفكار بحثية.

- المحتوى أولًا: كل فكرة تبدأ في `ideas/` بصيغة Markdown، ثم تُترجم عند نضجها إلى LaTeX داخل `publications/<slug>/<slug>.tex` مع ملف PDF مُترجم.
- المعايير: أسماء الملفات بصيغة kebab-case؛ وتطابق ملفات النشر اسم المجلد (`<slug>.tex`, `<slug>.pdf`).
- دعم CJK: تُبنى منشورات اللغات الصينية باستخدام XeLaTeX.
- بناء قابل لإعادة الإنتاج: استخدم `latexmk` (انظر قسم البناء) لإعادة توليد ملفات PDF.

## المزايا

<a id="features"></a>

- سير عمل للأفكار إلى النشر مع تتبع الإصدارات (`ideas/` -> `publications/<slug>/`).
- دليل أبحاث منظم حسب الفئة مع روابط مباشرة إلى Markdown وPDF.
- مجموعة README متعددة اللغات (9 لغات) داخل `i18n/`.
- محتوى الموقع الثابت في `docs/` مع ملفات manifest مخلقة في `docs/assets/`.
- إعداد اختياري لخطافات Git المحلية عبر `scripts/enable-hooks.sh`.
- يتضمن المستودع ملفات artifacts للنشر (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) عند الحاجة لدعم القابلية لإعادة الإنتاج.

<a id="catalog-by-category"></a>

## التصنيف حسب الفئة

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

<a id="project-structure"></a>

## هيكل المشروع

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # ملاحظات الأفكار
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # ملفات LaTeX المساعدة/السجلات (اختياري)
├── docs/                          # موقع ثابت + الأصول المولدة
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # نسخ README متعددة اللغات
└── figs/                          # أصول README والتبرع
```

<a id="prerequisites"></a>

## المتطلبات السابقة

- `latexmk` مع توزيع TeX صالح (TeX Live أو ما يعادل).
- دعم XeLaTeX لبناءات CJK (للمنشورات الصينية/اليابانية): `xelatex` + خطوط داعمة لـ CJK.
- Node.js (موصى به 18+) لتوليد أصول الموقع (`scripts/generate_site.mjs`).
- Git لإدارة الإصدارات وسير مساهمات المشروع.

<a id="installation"></a>

## التثبيت

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

إعداد hooks محلي اختياري:

```bash
bash scripts/enable-hooks.sh
```

<a id="build"></a>

## البناء

- ملفات PDF الإنجليزية/ASCII:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- ملفات PDF الصينية (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- بناء جميع الأوراق (وضع PDF):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- تنظيف ملفات LaTeX المؤقتة (داخل مجلد الورقة):
  - `latexmk -C`

<a id="usage"></a>

## الاستخدام

تدفق العمل اليومي الشائع:

1. أضف أو حدّث ملاحظات الأفكار في `ideas/*.md` (اسم ملف بصيغة kebab-case).
2. ترقيـة الملاحظات الناضجة إلى `publications/<slug>/<slug>.tex`.
3. أعد تجميع PDF النشر باستخدام وضع `latexmk` المناسب.
4. إذا كنت تنشر بيانات الموقع، أعد توليد الأصول الثابتة:
   - `node scripts/generate_site.mjs`
5. تحقق من المخرجات المعروضة (`.pdf` وصفحات `docs/` إن رغبت).

<a id="configuration"></a>

## الإعدادات

- يوجد `mkdocs.yml` ويُستخدم لإعداد توثيق قائم على MkDocs.
- الملف `.github/workflows/pages.yml` يدير حالياً نشر GitHub Pages لمجلد `docs/`.
- يتحكم `docs/assets/i18n.js` و `docs/assets/i18n/*.json` في سلوك تعدد اللغات في الموقع.
- يحمل كل من `CNAME` و`docs/CNAME` إعدادات النطاق المخصص.

ملاحظة افتراضية: هذا README يحافظ على مراجع MkDocs وخط أنابيب الموقع الثابت معًا لأن كليهما موجود حاليًا في المستودع.

<a id="examples"></a>

## أمثلة

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

إعادة إنشاء بيانات/ملفات الإشهار للموقع:

```bash
node scripts/generate_site.mjs
```

<a id="development-notes"></a>

## ملاحظات التطوير

- المعادلات في Markdown تُكتب بصيغة `$...$` و `$$...$$`.
- تُشفَّر المسافات في الروابط الخارجية بنسق URL-encoding لعرض أكثر استقرارًا.
- يفضّل إجراء تعديلات إضافية وتجنب إعادة تسمية الملفات الموجودة إلا عند الضرورة.
- يجب أن يستخدم محتوى CJK XeLaTeX وإعداد LaTeX آمنًا مع Unicode (مثال `ctexart` حيث يلزم).
- مقبول حفظ ملفات LaTeX artifacts ضمن `publications/<slug>/artifacts/`.

<a id="troubleshooting"></a>

## استكشاف الأخطاء وإصلاحها

- عدم وجود أمر `latexmk`:
  - ثبّت توزيع TeX وتأكد من وجود `latexmk` ضمن `PATH`.
- مشاكل محارف CJK/ظهور “tofu” في ملفات PDF:
  - استخدم وضع XeLaTeX وتأكد من تثبيت خطوط CJK المطلوبة.
- توقف البناء بسبب أخطاء LaTeX:
  - افحص `<slug>.log` ثم أعد التشغيل باستخدام `-interaction=nonstopmode -halt-on-error`.
- بيانات الموقع لا تُحدث:
  - أعد تشغيل `node scripts/generate_site.mjs` وتأكد من طوابع `docs/assets/*.json`.

<a id="roadmap"></a>

## خارطة الطريق

- إبقاء كتالوج README متزامنًا مع الأفكار والمنشورات الجديدة.
- تعزيز التكافؤ متعدد اللغات في ملفات `i18n/README.*.md` بشكل مستمر.
- تحسين التوافق بين إعداد MkDocs وخط أنابيب الموقع الثابت مع تطور سير العمل.
- إضافة تحقق خفيف لضمان اتساق README والروابط والفهرسة.

<a id="contribution"></a>

## المساهمة

- استخدم رسائل commit بصيغة الأمر وتحديد النطاق (مثل: `Update README structure and operational docs`).
- أبقِ التغييرات مركزة بحسب الموضوع/الورقة.
- تحقق من نجاح تجميع LaTeX والمخرجات المعروضة قبل الدفع.
- يجب أن تتضمن طلبات السحب (Pull Requests):
  - ملخصًا وتبريرًا.
  - المسارات المتأثرة.
  - تأكيد البناء إن كان ذا صلة.

## الملاحظات

- المعادلات في Markdown تُكتب بصيغة `$...$` و `$$...$$`.
- تُشفّر المسافات في الروابط الخارجية بنسق URL-encoding لعرض أكثر موثوقية.

## التواصل

للاستفسارات المتعلقة بسير عمل المستودع أو تحديثات التحرير أو التعاون:

- افتح issue في متتبع مشكلات المستودع (إذا كان مفعّلًا).
- ابدأ نقاشًا في حال كانت المراجعات مطولة (تصميم/تحرير).
- لخيارات الرعاية ودعم المشروع، راجع لوحة الدعم أعلاه.

<a id="license"></a>

## الرخصة

لا يوجد ملف `LICENSE` حاليًا في هذا المستودع.

ملاحظة افتراضية: حتى تُضاف رخصة، تبقى شروط الإعادة/إعادة الاستخدام غير محددة ويجب توضيحها من قبل مالك المستودع.

## ❤️ Support

| Donate                                                                                                                                                                                                                                                                                                                                                     | PayPal                                                                                                                                                                                                                                                                                                                                                          | Stripe                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
