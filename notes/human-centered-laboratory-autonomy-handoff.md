# Handoff: Human-Centered Laboratory Autonomy

Prepared: 2026-06-06

This note hands off the laboratory autonomy idea package from the Audio2Text working repository into the IDEAS publishing workflow. It is an internal publishing brief, not the final public article.

## Source Material

Primary source folder:

```text
../Audio2Text/latex/human_centered_lab_autonomy_2026
```

Archived predecessor folder:

```text
../Audio2Text/latex/archive_previous_robotic_lab_reports
```

Current report artifacts:

```text
../Audio2Text/latex/human_centered_lab_autonomy_2026/human_centered_lab_autonomy_roadmap.tex
../Audio2Text/latex/human_centered_lab_autonomy_2026/human_centered_lab_autonomy_roadmap.pdf
../Audio2Text/latex/human_centered_lab_autonomy_2026/human_centered_lab_autonomy_roadmap_cn.tex
../Audio2Text/latex/human_centered_lab_autonomy_2026/human_centered_lab_autonomy_roadmap_cn.pdf
```

Current figures:

```text
../Audio2Text/latex/human_centered_lab_autonomy_2026/figures/scene_video_master_apprentice_training.png
../Audio2Text/latex/human_centered_lab_autonomy_2026/figures/ar_guided_experiment_workflow.png
../Audio2Text/latex/human_centered_lab_autonomy_2026/figures/cover_human_centered_lab_autonomy.png
```

Use `scene_video_master_apprentice_training.png` as the preferred public cover/hero image. It explains the complete idea at a glance: senior-junior demonstration, AR glasses, fixed cameras, scene-video data, AI scene model, robot arms, mobile robots, drones, and compute/data infrastructure. The generated `cover_human_centered_lab_autonomy.png` is restored and can remain as an alternative asset, but it should not be the main cover unless redesigned.

Archived predecessor artifacts:

```text
../Audio2Text/latex/archive_previous_robotic_lab_reports/robotic_lab_automation_feasibility_roadmap.tex
../Audio2Text/latex/archive_previous_robotic_lab_reports/robotic_lab_automation_feasibility_roadmap.pdf
../Audio2Text/latex/archive_previous_robotic_lab_reports/robotic_lab_automation_market_research_roadmap.tex
../Audio2Text/latex/archive_previous_robotic_lab_reports/robotic_lab_automation_market_research_roadmap.pdf
../Audio2Text/latex/archive_previous_robotic_lab_reports/robotic_lab_automation_market_research_roadmap_cn.tex
../Audio2Text/latex/archive_previous_robotic_lab_reports/robotic_lab_automation_market_research_roadmap_cn.pdf
```

Research source register:

```text
../Audio2Text/latex/human_centered_lab_autonomy_2026/references/research_sources.md
```

The source register is useful for citations, but verify market numbers and fast-moving model/library claims again before external publication.

## Publication Identity

Recommended slug:

```text
human-centered-laboratory-autonomy
```

Recommended public title:

```text
Human-Centered Laboratory Autonomy
```

Recommended subtitle:

```text
AR-Guided Experiments, Scene-Level Learning, and Embodied Robot Integration
```

Recommended Chinese title:

```text
以人为中心的实验室自主化
```

Recommended Chinese subtitle:

```text
AR 辅助实验、场景级学习与具身机器人集成
```

Author convention for this idea:

```text
AgInTiFlow
https://flow.lazying.art
```

If the IDEAS manifest requires an affiliation field, use:

```text
AgInTiFlow, https://flow.lazying.art
```

Suggested categories:

```text
AI for Science
Robotics
Product & Tools
```

If the site only allows one category, use `AI for Science` because the core idea is not a generic robotics product; it is an AI-for-experimentation platform.

## Editorial Constraint

Publish this as an independent idea, roadmap, and technical/product thesis. Do not describe private working context, source conversations, ad hoc generation steps, or how the idea was originally discussed. The public article should read like a third-person research/product proposal.

Do not include local absolute paths in the public article. Local paths are only for this handoff note.

Do not include the raw source brief in public output. Use only the refined concepts and reports.

## Core Thesis

The strongest path to useful laboratory robotics is not to start by copying the full human body. A complete bionic laboratory worker would need hands, arms, eyes, navigation, safety behavior, tool use, chemical compatibility, cleaning, calibration, protocol reasoning, exception handling, and accountability. That is too broad for a first product.

The better product strategy is human-centered and scene-centered:

1. Treat the human laboratory worker as the current best general-purpose embodiment.
2. Use AR glasses to reduce cognitive load and guide protocol execution.
3. Use fixed cameras, egocentric video, and instrument logs to convert the lab into an observable scene.
4. Build a protocol-state and scene-graph layer that understands objects, steps, evidence, risks, and exceptions.
5. Add robot assistance only for constrained, verified, high-value actions.
6. Use scene-video demonstrations to train models, rather than training only on hands, grippers, or joint trajectories.
7. Connect humans, robot hands, robot arms, mobile bodies, drones, instruments, and AI reasoning through capability contracts.

The public framing should be:

```text
Do not replace the scientist first. Instrument the scientist, the protocol, and the scene first. Then let robots take over only the bounded actions that the scene model can verify.
```

## Why The Idea Matters

Most robotics demos show impressive isolated manipulation. Real laboratories require complete, repeated protocol execution with traceability, safety, contamination control, calibration, exception recovery, operator trust, and economics. The hard part is not only a better robot hand. The hard part is knowing what the current protocol step is, what object matters, what failure looks like, what evidence proves completion, and when human approval is required.

This idea closes the gap between robot demos and real deployment by making the laboratory itself a learning and execution environment.

The differentiated position:

- Human-first: use people where general dexterity and judgement still dominate.
- Camera-first: turn implicit visual checks into structured data.
- AR-first: make protocols playable, visible, and hard to skip.
- Robot-later: automate only bounded actions after evidence exists.
- Scene-video-first: train models on complete situated demonstrations, not only robot trajectories.
- Multi-embodiment: treat human, robot arm, robot hand, drone, mobile base, and instrument as executors of the same protocol-scene graph.

## Merge The Two Source Directions

The archived reports and current report should be synthesized, not treated as separate ideas.

### Archived Direction: Experiment-Centered Robot Workcell

The archived robot laboratory reports argue that the first business should not be a generic humanoid or bare robot arm. The better first product is a workflow-specific robotic laboratory workcell with strong data capture and auditability.

Important archived ideas to preserve:

- Laboratory automation and laboratory robotics are real markets, but they are crowded and integration-heavy.
- The first product should focus on a high-value protocol family, not general lab chores.
- The workcell should combine physical execution, protocol state, QC evidence, provenance, and learning feedback.
- Early customers are likely research labs, core facilities, CROs, process-development teams, and teaching labs.
- Strong wedge workflows include sample preparation, plate handling, imaging preparation, assay setup, and repetitive instrument loading.
- Robot value is highest when the work is repetitive, hazardous, traceable, high-frequency, or physically constrained.

Archived reports contain market sizing, customer segmentation, pilot economics, competitive landscape, safety/regulatory discussion, and workflow scoring. Before publishing externally, refresh any numerical market data and check source dates.

### Current Direction: Human-Centered Laboratory Autonomy

The newer report reframes the product around humans, AR, cameras, scene video, and master-apprentice learning.

Important current ideas to preserve:

- If the goal is to reproduce human hands, arms, eyes, feet, and body, first ask why not use humans directly.
- Humans are still the best general-purpose lab embodiment for flexible judgement and recovery.
- Robots still matter for repeatability, endurance, traceability, hazard separation, and data generation.
- AR glasses can guide experiments like a precise game, while avoiding cognitive overload.
- Cameras should become the first software product layer: object state, PPE state, labware position, liquid state, step progress, anomaly detection, and audit evidence.
- Scene video should be the core training data: fixed cameras, egocentric AR view, voice, instrument logs, object states, decisions, mistakes, corrections, and outcomes.
- Master-apprentice learning is the natural data engine: senior workers teach junior workers, and the system captures explanation, demonstration, correction, and completion evidence.
- Robot policies should be downstream of scene understanding, not the starting point.

## Product Architecture To Publish

Publish the architecture as a staged platform.

### Layer 1: AR Experiment Copilot

The operator sees only the current step, the relevant object, the target location, and the required confirmation. The interface should behave like a cockpit or game objective system: sparse, timely, and action-oriented.

Capabilities:

- Highlight correct reagent, rack, plate, pipette, target wells, or instrument.
- Show safe zones, timers, target regions, and completion checkpoints.
- Confirm PPE and authorization.
- Record hands-free notes and deviations.
- Reduce training time and missing documentation.

Avoid:

- Dense text overlays.
- Long dashboards in the glasses.
- Overlays that block peripheral vision, PPE, or safety awareness.

### Layer 2: Camera-First Laboratory OS

The first durable software product is a scene and protocol state layer.

Inputs:

- Fixed overhead cameras.
- Side cameras at bench/instrument viewpoints.
- AR-glasses egocentric video.
- Voice notes.
- Instrument logs.
- Timers and sensor data.

Outputs:

- Object identity and pose.
- Labware state.
- PPE state.
- Protocol step state.
- Expected evidence.
- Deviation flags.
- Reviewable run record.

This layer turns ordinary human visual checks into structured data.

### Layer 3: Scene-Video Training

Traditional robot learning focuses heavily on hand paths, gripper states, or end-effector trajectories. Laboratory work is a situated decision process. The model should learn the scene, protocol, evidence, and risk.

Capture:

- Senior-to-junior teaching sessions.
- Fixed camera views.
- Egocentric AR view.
- Voice explanation.
- Instrument logs.
- Object and container states.
- Mistakes and corrections.
- Final result data.

Train models to answer:

- What step is happening?
- What object matters now?
- What safety constraint is active?
- What evidence proves completion?
- What anomaly occurred?
- What should happen next?
- Is this step ready for human confirmation or robot execution?

### Layer 4: Bounded Robot Assistance

Robot arms, hands, mobile bases, and drones should not receive open-ended autonomy at first. They should receive bounded actions after a safety/QA gate approves execution.

Example robot actions:

- Move a sealed plate.
- Load a closed sample carrier.
- Transfer a rack between fixed points.
- Scan sealed inventory shelves.
- Transport consumables.
- Load an instrument with a fixture.

Robot actions should require:

- Verified scene preconditions.
- Known object identity and pose.
- Safe human separation or collaboration state.
- Approved hazard class.
- Emergency stop and physical limits.
- Completion evidence.

### Layer 5: Multi-Embodiment Operating System

Long-term, the same protocol-scene graph should coordinate:

- Human operators.
- AR glasses.
- Fixed cameras.
- Robot hands.
- Robot arms.
- Mobile bodies.
- Drones.
- Instruments.
- AI models.

Each executor exposes a capability contract. The system chooses the executor based on cost, safety, reliability, and current step context.

## MVP To Publish

Recommended first public demo:

```text
AR-guided sample intake and 96-well plate preparation using non-hazardous colored liquids or a low-risk training assay.
```

This is the strongest MVP because it is visually understandable, safe, commercially relevant, and technically honest.

Demo story:

1. A junior operator enters the lab wearing AR glasses.
2. The AI identifies the operator, checks PPE, and loads the protocol.
3. AR highlights the correct rack, plate, pipette, reagent bottle, and target wells.
4. Fixed cameras observe the bench.
5. A drone scans sealed shelves or a marked storage lane for the required closed reagent/consumable box.
6. A human or mobile robot brings the item to the work area.
7. The operator follows AR prompts to prepare the plate.
8. The camera model verifies the key checkpoints.
9. A robot arm transfers only a closed, fixtureable plate to a reader, incubator, or imaging station.
10. The system generates a complete run record with timestamps, object evidence, operator confirmation, robot actions, inventory source, deviations, and final result image.

Intentional demo failure:

Include one recoverable mistake, such as wrong tube, wrong rack, or rotated plate. The AR overlay pauses, the camera model explains the evidence, and the robot refuses downstream transfer until correction. This moment communicates product value better than a flawless scripted demo.

Minimum hardware:

- One AR device, or a tablet fallback for early prototype.
- Two fixed cameras.
- One small robot arm with plate fixture.
- One indoor drone restricted to a safe inventory path or cage.
- One workstation running protocol-state service.

Minimum software:

- One protocol.
- One scene graph.
- One run record.
- Five reliable checks: PPE present, correct rack, correct plate orientation, correct target region, and closed-plate transfer allowed.

MVP success metrics:

- Training time reduction.
- Step error reduction.
- Documentation completeness.
- Review time saved.
- Camera QA false-positive/false-negative rates.
- Robot primitive completion rate.
- Human intervention rate.
- Operator preference for guided mode.

## Business And Investor Framing

The idea should be pitched as a platform wedge, not a humanoid robot fantasy.

Recommended one-line pitch:

```text
An AR-and-camera laboratory copilot that trains operators, verifies protocol execution, creates structured experimental records, and identifies the exact steps ready for robot assistance.
```

Investment thesis:

- Labs already spend heavily on automation, CRO services, instrumentation, and data quality.
- Most labs cannot deploy general robots because the environment is too ambiguous.
- A camera/AR scene layer creates immediate value before robotics.
- The same scene layer later makes robot autonomy less speculative.
- Every guided run becomes training data.
- The product can expand from human guidance to bounded robot actions to multi-embodiment lab autonomy.

Customer sequence:

1. Teaching labs and internal training labs.
2. Core facilities with repeated protocols.
3. CROs and assay-development teams.
4. Process-development labs.
5. Regulated environments after stronger validation.

Why customers buy early:

- Faster onboarding.
- Fewer repeated mistakes.
- Better run records.
- Easier supervision.
- More complete audit trail.
- Objective evidence for where robotics should be added.

Why investors should care:

- This avoids the hardest humanoid-first failure mode.
- It creates a software/data wedge before heavy hardware dependency.
- It can sell into existing lab workflows.
- It produces proprietary scene/protocol/run data.
- It can become the coordination layer across robot vendors and lab instruments.

## Recommended Public Article Structure

Create:

```text
ideas/human-centered-laboratory-autonomy.md
```

Suggested outline:

1. Title and author.
2. Short executive summary.
3. Why not build a bionic human first?
4. Why robots still matter.
5. The gap between robot demos and real labs.
6. Product wedge: AR-guided experiment copilot.
7. Camera-first laboratory OS.
8. Scene-video training instead of hand-only training.
9. Master-apprentice learning.
10. Multi-embodiment architecture.
11. MVP demo: AR-guided 96-well plate preparation.
12. Business direction.
13. Feasibility roadmap.
14. Immediate next steps.

Keep the Markdown article shorter than the full report. It should be publishable and readable on the IDEAS site.

## Recommended Publication Package

For the mature PDF package, create:

```text
publications/human-centered-laboratory-autonomy/
```

Recommended English files:

```text
publications/human-centered-laboratory-autonomy/human-centered-laboratory-autonomy.tex
publications/human-centered-laboratory-autonomy/human-centered-laboratory-autonomy.pdf
```

Recommended Chinese files, either in the same folder or separate slug:

```text
publications/human-centered-laboratory-autonomy/human-centered-laboratory-autonomy-cn.tex
publications/human-centered-laboratory-autonomy/human-centered-laboratory-autonomy-cn.pdf
```

Recommended figure folder:

```text
publications/human-centered-laboratory-autonomy/figures/
```

Copy at least:

```text
scene_video_master_apprentice_training.png
ar_guided_experiment_workflow.png
```

Optional:

```text
cover_human_centered_lab_autonomy.png
```

Compilation:

```bash
cd publications/human-centered-laboratory-autonomy
latexmk -pdf -interaction=nonstopmode -halt-on-error human-centered-laboratory-autonomy.tex
latexmk -xelatex -interaction=nonstopmode -halt-on-error human-centered-laboratory-autonomy-cn.tex
```

If reusing the current Audio2Text TeX directly, adjust filenames, `\graphicspath`, and any title-page figure paths to match the IDEAS publication folder.

## Site Manifest Updates

After creating the Markdown and publication files, update:

```text
docs/assets/ideas.json
docs/assets/publications.json
README.md
```

Potential `ideas.json` entry:

```json
{
  "slug": "human-centered-laboratory-autonomy",
  "title": "Human-Centered Laboratory Autonomy",
  "author": "AgInTiFlow",
  "affiliation": "https://flow.lazying.art",
  "excerpt": "A practical path to laboratory autonomy starts with humans, AR guidance, camera QA, scene-video learning, and bounded robot assistance rather than a humanoid-first replacement strategy.",
  "category": "AI for Science",
  "lang": "en",
  "baseId": "human-centered-laboratory-autonomy"
}
```

Potential `publications.json` entry:

```json
{
  "slug": "human-centered-laboratory-autonomy",
  "title": "Human-Centered Laboratory Autonomy",
  "href": "/publications/human-centered-laboratory-autonomy/human-centered-laboratory-autonomy.pdf",
  "category": "AI for Science"
}
```

If publishing the Chinese PDF separately, add a second entry with slug:

```text
human-centered-laboratory-autonomy-cn
```

## Citation And Source Guidance

Use the existing source register as the starting point:

```text
../Audio2Text/latex/human_centered_lab_autonomy_2026/references/research_sources.md
```

Key source clusters:

- Self-driving labs and safety.
- Camera-first laboratory monitoring.
- AR and egocentric/exocentric capture.
- Vision-language-action robotics and data engines.
- OSHA/NIOSH safety and PPE context.

If the public article uses market sizing from the archived market report, verify those market figures before publishing. Market reports and robotics TAM numbers change quickly and need current sourcing.

## What To Avoid In The Public Version

Avoid:

- Claiming the product replaces scientists.
- Claiming general humanoid lab autonomy is near-term.
- Using hype like "AI scientist" without a bounded workflow.
- Presenting robots as the first layer.
- Publishing local paths or working-folder names.
- Publishing raw working context.
- Using generated-image provenance in captions.
- Overloading the article with too many market numbers unless verified.

Prefer:

- "Human-centered laboratory autonomy."
- "Instrumented teaching and execution environment."
- "AR-guided experiment copilot."
- "Camera-first laboratory OS."
- "Protocol-scene graph."
- "Scene-video training."
- "Master-apprentice learning."
- "Bounded robot assistance."
- "Safety-gated actions."
- "Multi-embodiment operating system."

## Suggested Public Abstract

Human-centered laboratory autonomy proposes a practical path from today's manual laboratories to future multi-robot scientific workflows. Instead of beginning with a full humanoid replacement for the scientist, the system treats the human operator as the current general-purpose embodiment and builds autonomy around the operator: AR glasses for step guidance, fixed and egocentric cameras for scene understanding, protocol-state models for evidence and safety checks, and bounded robot actions for repetitive or hazardous work. The key data object is not only a robot trajectory but a synchronized scene-video record of senior-to-junior teaching, mistakes, corrections, instrument logs, and final outcomes. This creates an incremental product ladder: AR experiment copilot first, camera QA second, robot-assist workcell third, and a long-term multi-embodiment operating system connecting humans, robot hands, arms, mobile bases, drones, instruments, and AI reasoning.

## Suggested Public Opening

If the goal is to build a robotic hand, arm, eye, body, and foot so a robot can do laboratory work, the first question should be: why not use a human being directly? This question does not dismiss robotics. It clarifies where robotics is actually valuable. Humans remain better at general dexterity, contextual judgement, and exception recovery. Robots become valuable when the task is repetitive, hazardous, time-consuming, traceable, or constrained enough to verify. The shortest path to useful laboratory autonomy is therefore not a humanoid-first strategy. It is a human-first, camera-first, AR-first, robot-later strategy.

## Immediate Next Task For IDEAS Worker

Use this exact task prompt if delegating to another agent:

```text
Create a publishable IDEAS entry for "Human-Centered Laboratory Autonomy" using the handoff note at notes/human-centered-laboratory-autonomy-handoff.md and the source reports under ../Audio2Text/latex/human_centered_lab_autonomy_2026 plus archived predecessor reports under ../Audio2Text/latex/archive_previous_robotic_lab_reports.

Deliver:
1. A concise public Markdown idea at ideas/human-centered-laboratory-autonomy.md.
2. A publication folder at publications/human-centered-laboratory-autonomy/ containing the English PDF/TeX, optional Chinese PDF/TeX, and copied figures.
3. Updated docs/assets/ideas.json, docs/assets/publications.json, and README catalog entries.
4. Clean compiled PDFs with the scene-video master-apprentice image as the cover.
5. No private working context, source conversation, local paths, or generation provenance in public-facing files.
6. Commit the changes in the IDEAS repo.
```

## Validation Checklist

Before declaring the IDEAS publication done:

- `ideas/human-centered-laboratory-autonomy.md` exists and renders as a public article.
- Publication PDFs exist and open.
- English PDF compiles without fatal errors.
- Chinese PDF, if included, compiles with XeLaTeX.
- Cover image is `scene_video_master_apprentice_training.png`.
- No public file contains local source paths.
- No public file contains raw private working context.
- `docs/assets/ideas.json` is valid JSON.
- `docs/assets/publications.json` is valid JSON.
- README catalog has a row for the new idea.
- `git status --short` only shows intended files before commit.
- Commit message is concise, e.g. `Add human-centered laboratory autonomy idea`.

