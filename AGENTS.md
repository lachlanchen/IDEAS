# Repository Guidelines

## Project Structure & Module Organization
- `ideas/`: Markdown essays and concept notes (kebab-case filenames).
- `publications/<slug>/`: LaTeX manuscripts (`paper.tex`) and compiled artifacts (`paper.pdf`, `.aux`, `.log`, etc.).
- `markdown/`: Scratch or draft Markdown (optional staging area).
- `README.md`, `.gitignore`: repo metadata.

## Build, Test, and Development Commands
- Build a single paper:
  - `cd publications/<slug> && latexmk -pdf -interaction=nonstopmode -halt-on-error paper.tex`
- Build all papers:
  - `find publications -maxdepth 2 -name paper.tex -execdir latexmk -pdf -interaction=nonstopmode -halt-on-error {} \;`
- Clean LaTeX artifacts (in a paper folder):
  - `latexmk -C`

## Coding Style & Naming Conventions
- Filenames: use kebab-case (e.g., `optical-metasurfaces-feasibility.md`, `molecularly-programmed-workflow.md`).
- Markdown: start with a `# Title`, use `##` for sections, concise paragraphs, and fenced code blocks for scripts.
- LaTeX: minimal preamble (article class), main file named `paper.tex`, output `paper.pdf`. Avoid Unicode in code blocks; prefer ASCII (e.g., `lambda`).

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
- Pull Requests should include:
  - Summary of changes and rationale
  - Paths touched (e.g., `ideas/...`, `publications/<slug>/...`)
  - If applicable, build output confirmation (e.g., “compiled `paper.pdf`”).

## Agent-Specific Instructions
- Place new concept notes in `ideas/`; promote mature work to `publications/<slug>/` with `paper.tex` and `paper.pdf`.
- Prefer additive edits; avoid renaming existing files unless necessary.
- Keep LaTeX Unicode-safe (escape `&`, avoid `λ` in verbatim).
- It’s acceptable to commit LaTeX build artifacts kept elsewhere in this repo (`.aux`, `.fdb_latexmk`, `.fls`).
- Do not add licenses or headers unless requested.
