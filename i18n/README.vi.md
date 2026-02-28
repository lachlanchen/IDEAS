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

## Tổng quan

IDEAS là một sổ tay nhẹ, có quản lý phiên bản, dành cho ghi chú và tiểu luận nghiên cứu.

Kho này theo quy trình ưu tiên nội dung:
- Viết ý tưởng ở dạng Markdown trong `ideas/`.
- Nâng cấp các ý tưởng đã chín muồi thành thư mục xuất bản trong `publications/<slug>/`.
- Giữ tên tệp xuất bản khớp với slug (`<slug>.tex`, `<slug>.pdf`).
- Tái tạo PDF xuất bản bằng các lệnh `latexmk` có thể tái lập.
- Duy trì các README đa ngôn ngữ trong `i18n/` và các trang web tĩnh trong `docs/`.

## Liên kết nhanh

| Mục | Chuyển đến |
|---|---|
| Danh mục | [Danh mục theo chủ đề](#danh-mục-theo-chủ-đề) |
| Lệnh build | [Build](#build) |
| Quy trình hằng ngày | [Usage](#usage) |
| Bố cục kho | [Cấu trúc dự án](#cấu-trúc-dự-án) |
| Chi tiết vận hành | [Configuration](#configuration) |
| Hướng dẫn đóng góp | [Contribution](#contribution) |
| Hỗ trợ | [Support / Donate](#support--donate) |

## Giới thiệu

IDEAS là một sổ tay nhẹ, có quản lý phiên bản, dành cho ghi chú và tiểu luận nghiên cứu.
- Ưu tiên nội dung: mỗi ý tưởng là một tệp Markdown trong `ideas/`, và khi đủ chín sẽ được phản chiếu sang LaTeX tại `publications/<slug>/<slug>.tex` cùng PDF đã biên dịch.
- Quy ước: tên tệp dạng kebab-case; tên tệp xuất bản khớp với slug của thư mục (`<slug>.tex`, `<slug>.pdf`).
- Hỗ trợ CJK: các ấn phẩm tiếng Trung được biên dịch bằng XeLaTeX.
- Build tái lập: dùng `latexmk` (xem phần Build) để tái tạo PDF.

## Tính năng

- Pipeline có phiên bản từ ý tưởng đến xuất bản (`ideas/` -> `publications/<slug>/`).
- Danh mục nghiên cứu theo chủ đề với liên kết trực tiếp tới Markdown/PDF.
- Bộ README đa ngôn ngữ gồm 9 ngôn ngữ trong `i18n/`.
- Nội dung website tĩnh trong `docs/` với manifest sinh tự động trong `docs/assets/`.
- Thiết lập git hook cục bộ tùy chọn qua `scripts/enable-hooks.sh`.
- Kho bao gồm các artifact xuất bản (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`) khi hữu ích cho tính tái lập.

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
│       └── artifacts/             # tệp aux/log LaTeX tùy chọn
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

## Yêu cầu trước khi chạy

- `latexmk` cùng bản phân phối TeX hoạt động bình thường (TeX Live hoặc tương đương).
- Hỗ trợ XeLaTeX cho build CJK (ấn phẩm tiếng Trung/Nhật): `xelatex` + font hỗ trợ CJK.
- Node.js (khuyến nghị 18+) để sinh tài nguyên website (`scripts/generate_site.mjs`).
- Git cho quản lý phiên bản và quy trình đóng góp.

## Cài đặt

```bash
git clone <your-fork-or-origin-url>
cd IDEAS
```

Thiết lập hook cục bộ (tùy chọn):

```bash
bash scripts/enable-hooks.sh
```

## Build

- English/ASCII PDFs:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Chinese PDFs (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Build all papers (PDF mode):
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Clean LaTeX artifacts (inside a paper directory):
  - `latexmk -C`

## Usage

Quy trình làm việc hằng ngày phổ biến:

1. Thêm hoặc cập nhật ghi chú ý tưởng trong `ideas/*.md` (tên tệp kebab-case).
2. Nâng cấp ghi chú đã chín muồi thành `publications/<slug>/<slug>.tex`.
3. Biên dịch PDF xuất bản bằng chế độ `latexmk` phù hợp.
4. Nếu xuất bản dữ liệu website, tái tạo tài nguyên tĩnh:
   - `node scripts/generate_site.mjs`
5. Kiểm tra đầu ra đã render (`.pdf` và tùy chọn các trang trong `docs/`).

## Configuration

- `mkdocs.yml` tồn tại và có thể dùng cho cấu hình tài liệu dựa trên MkDocs.
- `.github/workflows/pages.yml` hiện điều khiển triển khai GitHub Pages cho `docs/`.
- `docs/assets/i18n.js` và `docs/assets/i18n/*.json` điều khiển hành vi i18n của website.
- `CNAME` và `docs/CNAME` chứa thiết lập tên miền tùy chỉnh.

Ghi chú giả định: README này giữ cả tham chiếu MkDocs lẫn pipeline website tĩnh tùy chỉnh vì cả hai đều có trong kho.

## Ví dụ

Build one English publication:

```bash
cd publications/quantum-carpets-fractal-wavefunction-revival
latexmk -pdf -interaction=nonstopmode -halt-on-error quantum-carpets-fractal-wavefunction-revival.tex
```

Build one Chinese publication:

```bash
cd publications/organic-dye-programmed-metasurface-zh
latexmk -xelatex -interaction=nonstopmode -halt-on-error organic-dye-programmed-metasurface-zh.tex
```

Regenerate docs data/manifests:

```bash
node scripts/generate_site.mjs
```

## Ghi chú phát triển

- Phương trình trong Markdown dùng `$...$` và `$$...$$`.
- Liên kết ngoài có khoảng trắng được mã hóa percent‑encoding để render ổn định.
- Ưu tiên chỉnh sửa theo hướng bổ sung và tránh đổi tên tệp hiện có nếu không cần thiết.
- Nội dung CJK nên dùng XeLaTeX và thiết lập LaTeX an toàn Unicode (ví dụ `ctexart` khi phù hợp).
- Có thể commit artifact LaTeX trong `publications/<slug>/artifacts/`.

## Khắc phục sự cố

- `latexmk` command not found:
  - Cài bản phân phối TeX và đảm bảo `latexmk` có trên `PATH`.
- CJK glyph/tofu issues in PDFs:
  - Dùng chế độ XeLaTeX và đảm bảo các font CJK cần thiết đã được cài đặt.
- Build stops on LaTeX errors:
  - Kiểm tra `<slug>.log` rồi chạy lại với `-interaction=nonstopmode -halt-on-error`.
- Website metadata not updating:
  - Chạy lại `node scripts/generate_site.mjs` và kiểm tra timestamp của `docs/assets/*.json`.

## Lộ trình

- Giữ danh mục README đồng bộ với các ý tưởng/ấn phẩm mới.
- Tiếp tục tăng cường mức độ tương đương đa ngôn ngữ giữa các tệp `i18n/README.*.md`.
- Cải thiện sự nhất quán giữa cấu hình MkDocs và pipeline tĩnh đã triển khai khi quy trình docs phát triển.
- Thêm các kiểm tra xác thực nhẹ cho tính nhất quán giữa README/liên kết/danh mục.

## Contribution

- Dùng commit message dạng mệnh lệnh, có phạm vi (ví dụ: `Update README structure and operational docs`).
- Giữ thay đổi tập trung theo từng chủ đề/bài viết.
- Xác nhận biên dịch LaTeX và kết quả render trước khi push.
- Pull request nên bao gồm:
  - tóm tắt và lý do,
  - các đường dẫn đã chạm,
  - xác nhận build khi phù hợp.

## Ghi chú

- Phương trình trong Markdown dùng `$...$` và `$$...$$`.
- Liên kết ngoài có khoảng trắng được mã hóa percent‑encoding để render ổn định.

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

Hiện chưa có tệp `LICENSE` trong kho này.

Ghi chú giả định: cho đến khi có tệp license, các điều khoản tái sử dụng/phân phối lại vẫn chưa được xác định và cần được chủ kho làm rõ.
