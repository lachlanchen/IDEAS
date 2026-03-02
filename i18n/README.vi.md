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

<a id="overview"></a>

## Tổng quan

IDEAS là một sổ tay nghiên cứu nhẹ, có kiểm soát phiên bản, gồm các ghi chú và tiểu luận.

Kho này theo quy trình ưu tiên nội dung:

- Viết ý tưởng bằng Markdown trong `ideas/`.
- Nâng cấp các ý tưởng đã trưởng thành thành thư mục xuất bản dưới `publications/<slug>/`.
- Duy trì tên tệp đầu ra khớp slug (`<slug>.tex`, `<slug>.pdf`).
- Tái tạo PDF xuất bản bằng các lệnh `latexmk` có thể lặp lại.
- Duy trì các phiên bản README đa ngôn ngữ trong `i18n/` và các trang tĩnh trong `docs/`.

<a id="quick-links"></a>

## Liên kết nhanh

| Mục                    | Chuyển đến                                   |
| ---------------------- | -------------------------------------------- |
| 📘 Tổng quan           | [Tổng quan](#overview)                       |
| 🗂️ Danh mục            | [Danh mục theo chủ đề](#catalog-by-category) |
| 📘 Giới thiệu          | [Giới thiệu](#about)                         |
| 🧰 Build               | [Build](#build)                              |
| 🧪 Quy trình hằng ngày | [Sử dụng](#usage)                            |
| 🧱 Cấu trúc dự án      | [Cấu trúc dự án](#project-structure)         |
| ⚙️ Cấu hình            | [Cấu hình](#configuration)                   |
| 🧩 Đóng góp            | [Đóng góp](#contribution)                    |
| ✉️ Liên hệ             | [Liên hệ](#contact)                          |
| ❤️ Ủng hộ              | [Hỗ trợ / Quyên góp](#support)               |

<a id="about"></a>

## Giới thiệu

IDEAS là một sổ tay nghiên cứu nhẹ, có kiểm soát phiên bản, gồm các ghi chú và tiểu luận.

- Ưu tiên nội dung: mỗi ý tưởng là một tệp Markdown trong `ideas/`, sau khi đủ chín sẽ phản chiếu sang LaTeX tại `publications/<slug>/<slug>.tex` cùng PDF đã biên dịch.
- Quy ước: tên tệp theo dạng kebab-case; tên tệp xuất bản khớp với slug của thư mục (`<slug>.tex`, `<slug>.pdf`).
- Hỗ trợ CJK: các ấn phẩm tiếng Trung/Nhật biên dịch bằng XeLaTeX.
- Build tái lập: dùng `latexmk` (xem phần Build) để tái tạo PDF.

<a id="features"></a>

## Tính năng

- Pipeline ý tưởng đến xuất bản có phiên bản (`ideas/` -> `publications/<slug>/`).
- Danh mục nghiên cứu theo chủ đề kèm liên kết Markdown/PDF trực tiếp.
- Bộ README đa ngôn ngữ gồm 9 ngôn ngữ trong `i18n/`.
- Nội dung website tĩnh trong `docs/` với manifest sinh tự động trong `docs/assets/`.
- Tùy chọn thiết lập git hook cục bộ qua `scripts/enable-hooks.sh`.
- Kho có thể chứa artifact xuất bản (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) khi cần cho tái lập.

<a id="catalog-by-category"></a>

## Danh mục theo chủ đề

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
      <th align="left">Tiêu đề</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Ngôn ngữ</th>
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
      <th align="left">Tiêu đề</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Ngôn ngữ</th>
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
      <th align="left">Tiêu đề</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Ngôn ngữ</th>
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
      <th align="left">Tiêu đề</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Ngôn ngữ</th>
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
      <th align="left">Tiêu đề</th>
      <th align="left">Markdown</th>
      <th align="left">PDF</th>
      <th align="left">Ngôn ngữ</th>
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

## Cấu trúc dự án

```text
IDEAS/
├── README.md
├── AGENTS.md
├── mkdocs.yml
├── CNAME
├── scripts/
│   ├── generate_site.mjs
│   └── enable-hooks.sh
├── ideas/                         # Ghi chú ý tưởng dạng Markdown
├── publications/
│   └── <slug>/
│       ├── <slug>.tex
│       ├── <slug>.pdf
│       └── artifacts/             # tệp phụ trợ LaTeX tùy chọn
├── docs/                          # website tĩnh + tài nguyên sinh tự động
│   ├── index.html
│   ├── ideas/
│   ├── publications/
│   └── assets/
│       ├── ideas.json
│       ├── publications.json
│       ├── categories.json
│       └── i18n/
├── i18n/                          # các biến thể README đa ngôn ngữ
└── figs/                          # tài nguyên README và donate
```

<a id="prerequisites"></a>

## Yêu cầu trước khi chạy

- `latexmk` cùng bản phân phối TeX hoạt động bình thường (TeX Live hoặc tương đương).
- Hỗ trợ XeLaTeX cho build CJK (bản in tiếng Trung/Nhật): `xelatex` + font có hỗ trợ CJK.
- Node.js (khuyến nghị 18+) để sinh tài nguyên website (`scripts/generate_site.mjs`).
- Git cho quản lý phiên bản và quy trình đóng góp.

<a id="installation"></a>

## Cài đặt

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Thiết lập hook cục bộ (tùy chọn):

```bash
bash scripts/enable-hooks.sh
```

<a id="build"></a>

## Build

- English/ASCII PDFs:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- PDF tiếng Trung (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Build tất cả bài viết (PDF mode):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Xóa artifacts trong thư mục bài viết:
  - `latexmk -C`

<a id="usage"></a>

## Sử dụng

Quy trình làm việc hằng ngày:

1. Thêm hoặc cập nhật ghi chú ý tưởng trong `ideas/*.md` (tên tệp kebab-case).
2. Chuyển các ý tưởng đã trưởng thành vào `publications/<slug>/<slug>.tex`.
3. Biên dịch PDF xuất bản bằng chế độ `latexmk` phù hợp.
4. Nếu xuất bản dữ liệu website, tái tạo tài nguyên tĩnh:
   - `node scripts/generate_site.mjs`
5. Kiểm tra đầu ra đã render (`.pdf` và, nếu có, các trang trong `docs/`).

<a id="configuration"></a>

## Cấu hình

- `mkdocs.yml` tồn tại và có thể dùng cho cấu hình tài liệu dựa trên MkDocs.
- `.github/workflows/pages.yml` hiện điều khiển triển khai GitHub Pages cho `docs/`.
- `docs/assets/i18n.js` và `docs/assets/i18n/*.json` kiểm soát hành vi i18n của website.
- `CNAME` và `docs/CNAME` chứa thiết lập tên miền tùy chỉnh.

Ghi chú giả định: README này giữ cả tham chiếu MkDocs lẫn pipeline tĩnh vì cả hai đều có trong kho.

<a id="examples"></a>

## Ví dụ

Build một bài tiếng Anh:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Build một bài tiếng Trung:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Tái sinh dữ liệu/manifest cho docs:

```bash
node scripts/generate_site.mjs
```

<a id="development-notes"></a>

## Ghi chú phát triển

- Phương trình trong Markdown dùng cú pháp `$...$` và `$$...$$`.
- Liên kết ngoài có khoảng trắng cần mã hóa percent-encoding để render ổn định.
- Ưu tiên thay đổi theo hướng cộng dồn và tránh đổi tên tệp hiện có nếu không cần.
- Nội dung CJK nên dùng XeLaTeX và thiết lập LaTeX Unicode-safe (ví dụ `ctexart` nếu phù hợp).
- Việc commit artifact LaTeX dưới `publications/<slug>/artifacts/` là chấp nhận được.

<a id="troubleshooting"></a>

## Khắc phục sự cố

- `latexmk` không tìm thấy:
  - Cài bản phân phối TeX và đảm bảo `latexmk` có trong `PATH`.
- Lỗi glyph/tofu CJK trong PDF:
  - Dùng XeLaTeX và đảm bảo các font CJK cần thiết đã được cài.
- Build dừng do lỗi LaTeX:
  - Kiểm tra `<slug>.log` rồi chạy lại với `-interaction=nonstopmode -halt-on-error`.
- Metadata website không cập nhật:
  - Chạy lại `node scripts/generate_site.mjs` và kiểm tra thời điểm cập nhật của `docs/assets/*.json`.

<a id="roadmap"></a>

## Lộ trình

- Giữ danh mục README đồng bộ với ý tưởng/ấn phẩm mới.
- Tiếp tục tăng cường mức độ nhất quán đa ngôn ngữ giữa các `i18n/README.*.md`.
- Cải thiện sự liên thông giữa cấu hình MkDocs và pipeline tĩnh khi workflow docs tiến hóa.
- Thêm kiểm tra nhẹ để bảo đảm nhất quán giữa README, liên kết và danh mục.

<a id="contribution"></a>

## Đóng góp

- Dùng commit message theo lối mệnh lệnh và có phạm vi (ví dụ: `Update README structure and operational docs`).
- Giữ thay đổi theo từng chủ đề/bài viết.
- Xác nhận biên dịch LaTeX và đầu ra render trước khi push.
- Pull request nên bao gồm:
  - bản tóm tắt và lý do,
  - các đường dẫn đã chỉnh sửa,
  - xác nhận build khi phù hợp.

<a id="notes"></a>

## Ghi chú

- Phương trình trong Markdown dùng cú pháp `$...$` và `$$...$$`.
- Liên kết ngoài có khoảng trắng cần mã hóa phần trăm để render ổn định.

<a id="support"></a>

## Liên hệ

Đối với câu hỏi về quy trình repository, cập nhật biên tập hoặc cộng tác:

- Mở issue trong tracker của repository (nếu đã bật).
- Tạo một discussion cho các bài review thiết kế hoặc biên tập chi tiết hơn.
- Về tài trợ và hỗ trợ dự án, xem bảng hỗ trợ ở trên.

<a id="license"></a>

## Giấy phép

Hiện chưa có tệp `LICENSE` trong repository này.

Ghi chú giả định: cho đến khi có tệp giấy phép, các điều khoản tái sử dụng/phân phối vẫn chưa được xác định và cần được chủ sở hữu repository làm rõ.

## ❤️ Support

| Donate                                                                                                                                                                                                                                                                                                                                                     | PayPal                                                                                                                                                                                                                                                                                                                                                          | Stripe                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Donate](https://camo.githubusercontent.com/24a4914f0b42c6f435f9e101621f1e52535b02c225764b2f6cc99416926004b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d4c617a79696e674172742d3045413545393f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f2d6669266c6f676f436f6c6f723d7768697465)](https://chat.lazying.art/donate) | [![PayPal](https://camo.githubusercontent.com/d0f57e8b016517a4b06961b24d0ca87d62fdba16e18bbdb6aba28e978dc0ea21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617950616c2d526f6e677a686f754368656e2d3030343537433f7374796c653d666f722d7468652d6261646765266c6f676f3d70617970616c266c6f676f436f6c6f723d7768697465)](https://paypal.me/RongzhouChen) | [![Stripe](https://camo.githubusercontent.com/1152dfe04b6943afe3a8d2953676749603fb9f95e24088c92c97a01a897b4942/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726970652d446f6e6174652d3633354246463f7374796c653d666f722d7468652d6261646765266c6f676f3d737472697065266c6f676f436f6c6f723d7768697465)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |
