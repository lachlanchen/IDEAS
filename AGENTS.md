# Repository Guidelines

## Project Structure & Module Organization
- `ideas/`: Markdown essays and concept notes (kebab-case filenames).
- `publications/<slug>/`: LaTeX source and PDF where filenames match the slug:
  - `<slug>.tex` (source), `<slug>.pdf` (compiled)
  - Optional: `artifacts/` subfolder for LaTeX aux files (`.aux`, `.log`, `.fls`, `.fdb_latexmk`, `.out`).
- `README.md`, `.gitignore`: repo metadata.

## Build, Test, and Development Commands
- Build a single paper (English/ASCII):
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error <slug>.tex`
- Build a Chinese paper (CJK):
  - `cd publications/<slug> && latexmk -xelatex -interaction=nonstopmode -halt-on-error <slug>.tex`
- Build all papers:
  - `find publications -maxdepth 2 -name '*.tex' -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Clean LaTeX artifacts (in a paper folder):
  - `latexmk -C`

## Coding Style & Naming Conventions
- Filenames: use kebab-case (e.g., `optical-metasurfaces-feasibility.md`, `molecularly-programmed-workflow.md`).
- Markdown: start with a `# Title`, use `##` for sections, concise paragraphs, and fenced code blocks for scripts.
- LaTeX: minimal preamble; main file uses slug-matching names: `<slug>.tex` and `<slug>.pdf`. Avoid Unicode in verbatim/code unless using XeLaTeX.

## Testing Guidelines
- No automated tests. Validate by:
  - Compiling LaTeX without errors/warnings.
  - Opening `paper.pdf` to spot-check figures, equations, links.
  - For Markdown, preview rendering and check external links.

## Commit & Pull Request Guidelines
- Commits: use imperative, scoped messages. Examples:
  - `Add optical metasurfaces feasibility analysis (ideas)`
  - `Update LaTeX manuscript; fix Unicode in code block`
- Group related changes; keep diffs focused per topic/paper.
- Always commit and push after any change; keep commits small and focused.
- Pull Requests should include:
  - Summary of changes and rationale
  - Paths touched (e.g., `ideas/...`, `publications/<slug>/...`)
  - If applicable, build output confirmation (e.g., “compiled `paper.pdf`”).

## Agent-Specific Instructions
- Place new concept notes in `ideas/`; promote mature work to `publications/<slug>/` with `<slug>.tex` and `<slug>.pdf`.
- Prefer additive edits; avoid renaming existing files unless necessary.
- Use XeLaTeX for CJK content; otherwise `latexmk -pdf` is sufficient.
- Keep LaTeX Unicode-safe (escape `&`, avoid `λ` in verbatim unless XeLaTeX).
- It’s acceptable to commit LaTeX build artifacts under `publications/<slug>/artifacts/`.
- Do not add licenses or headers unless requested.
- Always commit and push immediately after making a change; include a concise, descriptive message.

### Markdown → LaTeX Conversion Policy (1:1, no verbatim)
- When asked to “include everything” from a Markdown idea in a TeX publication, perform a true 1:1 conversion:
  - Preserve all knowledge and content from the Markdown (no reductions/omissions).
  - Convert headings, lists, emphasis, and equations to proper LaTeX (e.g., `\section`, `\subsection`, `\itemize`, `\textbf{}`, `\emph{}`, display/inline math).
  - Convert links to `\href{...}{...}` or `\url{...}`.
  - Do not embed the Markdown itself inside the TeX (no `verbatim`/raw Markdown blocks in the PDF).
  - For CJK content, use `ctex` + XeLaTeX and ensure fonts avoid tofu (e.g., Noto CJK families as needed).
  - Keep publication filenames slug‑matching and compile with `latexmk`.
