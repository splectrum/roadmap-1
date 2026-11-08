# Request: third development phase (in discussion)

From: `splectrum/roadmap-1`, 2026-11-08. **In discussion with the human.**
What is settled is marked so; everything else is open. The seed is
prepared once the discussion settles.

Numbering: the roadmap's phase 2 covers the phase repository's own
"phase 2" and "phase 3"; this is the roadmap's phase 3.

## Settled so far

- **It starts with a review of the code phase 2 produced, and a refactor
  where needed.** The aim (`roadmap.md`): full AI autonomy, served by KISS,
  consistent rules and self-containment.
- **The documentation, with the review:** the stale notes cleaned up;
  what documentation there is split into clear sections, where it is not
  already; never more complete than the implementation: it documents what
  was built, nothing more.
- **The main achievement: mycelium repositories on a swarm**, with initial
  features and functionality.
- **Data structure composition**, by referencing into read-only *data
  hives*. A hive is a data structure. Referencing is fine-grained.
- **Functionality mounted on the repository**, which stays
  self-contained. A crucial requirement.
- **A mycelium repository on the swarm for the logs.**
- **Maybe:** the logs consumed by a Splectral server and reached through a
  browser.

Not in this phase, from the discussion: triggers and internal processing
requests, applications on top (later).

## Open

- The review: by what measure, and what it delivers.
- Hives: what makes a data structure a hive; what a reference names and
  how fine it goes; read-only how (by key, by commit).
- Mounting functionality: what is mounted (code from the package
  repository, by reference?), and how the repository stays
  self-contained.
- The logs repository: which logs (host, swarm, node), in what form
  (records in topics?), who writes it.
- How the phase is done: done criteria; the development environment.

## Background

- `splectrum/dev-env-2-p2p-cluster@c6b73bb`: `steps/phase-3/readme.md`,
  `notes/plan.md`, `docs/`, `rules.md`, `vision.md`.
- In `splectrum/roadmap-1`: `principles.md`, `roadmap.md`, `vision.md`,
  `capabilities.md`.
