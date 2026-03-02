# LRE Research Ideas

Summary: These directions prioritize your strongest repeatable loop (build fast, integrate across domains) while correcting the current bottleneck (weak/noisy evidence). Because artifact quality is currently low, the highest-value near-term work is to ship small validation systems that improve data reliability, force focus across projects, and produce measurable proof artifacts in 7 days.

## Ideas
- Anchor-First Identity and Evidence Router (LRE Core) [high]
  - Hypothesis: If the pipeline resolves identity from high-confidence anchors first (GitHub + Scholar + personal site) and treats empty/invalid artifacts as hard failures, then downstream idea quality and prioritization accuracy will improve within one run. Assumption: anchor sources are consistently reachable at least 80% of runs.
  - Why fit: Directly targets your stated bottleneck (artifact failures, identity noise) and fits your automation/system-design strengths; it also compounds value for every future research cycle.
  - 7d experiment: Implement a v1 router that (1) scores source confidence, (2) blocks promotion of zero-byte/invalid JSON, (3) auto-falls back to text-log extraction, and (4) emits a reliability report. Run it on 10 historical profile/ideas jobs and track: usable-artifact rate, identity-confidence score, and number of ideas requiring manual correction.
- Flagship Focus Engine for 30-90 Day Portfolio Selection [high]
  - Hypothesis: A lightweight scoring model that ranks initiatives by evidence-backed traction + strategic coherence will reduce context switching and increase measurable outcomes versus parallel shipping. Assumption: you can define at least 3 comparable metrics per project (usage, retention, citations, or revenue proxy).
  - Why fit: Addresses portfolio fragmentation risk while preserving your builder cadence; aligns with growth priority to select 1-2 flagships with explicit success metrics.
  - 7d experiment: Create a scorecard for 8-12 active projects with weighted criteria (traction signal quality, build leverage, narrative fit with 'The Art of Lazying', 30-day win probability). Run weekly scoring twice in 7 days, pick top 2 projects, freeze new project starts, and measure hours reallocated + milestone completion delta.
- Proof Artifact Factory (Benchmark + Case Study Generator) [high]
  - Hypothesis: Publishing standardized before/after workflow benchmarks for one automation product (e.g., LazyEdit or AISecretary) will produce stronger trust and adoption than shipping additional features this week. Assumption: at least 5 representative workflows can be scripted or replayed.
  - Why fit: You already ship quickly; this converts output into externally legible proof, addressing uneven traction signals and narrative clarity.
  - 7d experiment: Define 5 creator/research workflows, capture baseline time/error, run product-assisted versions, and auto-generate a one-page report + demo clips. Publish one public case study with reproducible test setup and track 7-day outcomes: page visits, signups, and inbound collaboration interest.
- Conversation-to-Knowledge Ledger with Reliability Tags [medium]
  - Hypothesis: Adding evidence confidence tags and decision lineage to your memory/idea system will reduce evidence-blind strategic choices and improve recall quality for long-running research threads. Assumption: existing IdeasGlass/conversational memory components can ingest metadata without major refactor.
  - Why fit: Matches your knowledge-systems interest and directly mitigates the risk of decisions made on incomplete signals.
  - 7d experiment: Implement metadata fields (`source_type`, `confidence_score`, `last_verified_at`, `decision_links`) and backfill 30 recent notes/ideas. Run a 1-week personal trial comparing retrieval quality against previous notes, with metrics: time-to-find, contradiction count, and percentage of decisions linked to evidence.
- Embodied Imaging Sprint: Simulation-to-Hardware Handoff [medium]
  - Hypothesis: A tight simulation-first pipeline for one embodied imaging task (e.g., active viewpoint planning or multispectral capture routine) can deliver publishable prototype evidence faster than broad robotics exploration. Assumption: current hardware access is intermittent, so simulation coverage must be primary in week 1.
  - Why fit: Preserves your embodied AI/imaging edge while keeping feasibility high through a constrained, testable micro-problem.
  - 7d experiment: Pick one task and build a minimal loop: simulator scene, policy/controller stub, and evaluation metric (coverage, signal quality, or task completion). Produce one hardware handoff checklist and run at least one real-device validation session; report sim-to-real gap and next constraints.
- Self-Evolving Research Query Optimizer (Ideas Toolchain) [high]
  - Hypothesis: A small evaluator that mutates keyword sets, routing choices, and click-depth policies based on artifact yield will improve websearch evidence density across runs. Assumption: prior run logs are available for offline replay.
  - Why fit: Directly supports your tool-evolution intent and turns current search failures into training signal for better future idea generation.
  - 7d experiment: Build a replay harness over recent ideas/profile runs, define fitness metrics (non-empty artifact rate, source diversity, relevance score), and test 3 mutation strategies: keyword expansion, domain-constrained routing, and adaptive click depth. Keep the best policy and re-run one live ideas job for A/B comparison.
