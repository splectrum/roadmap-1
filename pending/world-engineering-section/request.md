# Request: the Engineering section after phase 2

For `splectrum/the-world-of-splectrum`, from `splectrum/roadmap-1`,
2026-11-07. A plan for the agent that manages that repository: it does the
work under the site's own process (`process/page-done.md`, reviews, Jules
decides on first-person text, `process/check-before-commit.md`). This
request says what has to change and why; the wording and the order of work
are the site's.

It is the rework `plan/engineering/engineering.md` § 5 put on hold "until
the click-and-run demos are available". They are: both demos run from a
published release since 2026-11-07.

## Why

The section describes a design from before anything ran (2026-06): an "SPL
Platform" of a P2P swarm with platform nodes, a Docker "bridgehead" per
peer, a FUSE drive, three "fabrics" (Mycelium, SPLectrum, HAICC), components
and solutions as seed nodes. Phase 2 built something else, and it runs. The
pages call the platform SPLectrum (or SPL); it is now **HAICC**. The top
navigation pages say engineering progress is slow and P2P is a wish list;
both no longer hold.

## Sources

Authoritative, by commit (read these, not this summary, for the facts):

- `splectrum/roadmap-1` at the head of this request's commit: `roadmap.md`
  (the aim; phase 2's outcome; the next stage), `vision.md` (the layers and
  organisations), `capabilities.md`.
- `splectrum/dev-env-2-p2p-cluster@c6b73bb`:
  - `steps/phase-3/readme.md`: what the platform achieved, in one page;
  - `docs/README.md`, `docs/design/` (platform, packages, work-folder,
    bare, releases, pipeline), `docs/rules.md` (the thirty consistency
    rules), `docs/guides/install.md`;
  - `rules.md` § "Single concern, first", § "Records and topics", § "Data
    names";
  - `notes/plan.md` (the layered design; "Proposed next phase"),
    `notes/node-pattern.md`, `notes/splectral.md`, `notes/topics.md`;
  - `vision.md` § "Organisations: infrastructure and language".
- The organisations on GitHub: `pear-full-square` (engines),
  `splectral` (Splectral components), `haiccing` (packages and projects;
  the release is on `haiccing/base-package-haicc`), `bare-for-pear`.

## What is true now (to be written as fact)

- **The aim:** full AI autonomy, from identifying or being made aware of a
  need up to having satisfied it with running software. KISS, consistent
  rules and self-containment make it possible. Where the work's
  requirements changed, it was to deliver better on these.
- **The HAICC platform:** one downloaded setup file (about 39 MB, Bare's
  runtime in it, no Node.js) boots a work folder on a Linux host. Three
  levels, host, swarm and node, each a folder with its own HAICC working on
  its own config; every boot is cold (copy in) and warm (run and check
  itself). Swarms are made from self-contained packages, each carrying its
  own tests, checked intact by hash, published in `haiccing`. Nodes run in
  Docker containers, on Bare. Ten releases, each checked on a local machine.
- **The swarm, inside:** a master node (the first, from genesis) and nodes
  joining, also from another host by invitation; a private DHT;
  repositories on Hypercore replicated lazily; a resource name service with
  liveness (a node going quiet is seen and refused); the swarm's
  deployment kept as a repository on the master. Managing happens only at
  the top, in the node and swarm managers; everything below is mechanism.
- **Mycelium as built:** `mycelium-uri`, `-xpath`, `-git` (over a backend
  contract; p2p-git on Hyperdrive is one engine), `-layer`, `-repo`,
  `-topic` (data in topics, a Kafka record as the elementary container,
  JSON first), and mycelium on the p2p layer (`p2p-mrepo`). Mycelium knows
  nothing of p2p.
- **Splectral:** a platform for seeing and working with running systems,
  in the browser; first use: a swarm's activity live, scenarios recorded
  and replayed. Its components are agnostic of p2p.
- **The demos** (`haiccing`): a node going quiet (liveness); a node joining
  from another host by invitation. Each runs with one command and is
  watched in Splectral.
- **The design and the rules:** single concern first (one concern per part,
  one place per concern, validation only at the boundary, knowledge stays
  with its concern); thirty short, checkable consistency rules, many
  checked by a named test; each design decision written once, marked built
  or agreed, with its reason. This is what lets an AI work with high
  autonomy.
- **Organisations:** engines (all code) in `pear-full-square`; what is
  made with an engine in its layer's organisation: `splectral` components,
  `haiccing` projects and packages, later `splectrum` language modules.
  The layers: the p2p and language substrate; mycelium, the repository
  layer; splectrum, the language layer; haicc, the project layer;
  Splectral for interaction alongside.

## Still directions (to be marked as such)

- SPLectrum as the language layer: URI-expressed capabilities with AVRO
  becoming a DSL platform. AVRO is not built yet; Kafka only as topics.
- HAICC as the tool for the whole cycle (ideas, design, request,
  implementation, validation, release, deployment); the platform is its
  first part.
- The next stage, proposed, not decided: applications on mycelium
  repositories (visible state composed of own layers and read-only mounts
  of other repositories; a synced change triggering internal processing
  requests in the node's container).
- Not reached yet: a second physical host (simulated), the public DHT,
  packages and the name service as repositories (in code first), node keys
  kept securely, phones, private data, Pear.

## The section: what changes

A proposed structure; settle it with Jules before the pages (the
section's plan asks for the structure first).

1. **Engineering landing** (`docs/engineering/index.md`): opens with the
   aim and the platform that runs; links the new structure. "SPL Platform /
   Software / Components / Solutions" go.
2. **Engineering Commitments**: kept; add KISS, consistent rules and
   self-containment as commitments, tied to autonomy. Check the existing
   ones against what was built (data first, no hidden state: the platform's
   "no hidden files", "every state change said"); keep them where they
   hold.
3. **The HAICC platform** (replaces `spl/platform/`): what runs, as above.
   Subpages, or sections if KISS says so:
   - *Swarm* (replaces "P2P Swarm and Bridgehead"): master and joining
     nodes, managers, invitation, liveness, private DHT. The bridgehead,
     FUSE drive and HTTP API are not what was built: drop them, or keep
     them as a resting idea.
   - *Packages*: self-contained, tested, sealed, published in `haiccing`.
   - *Splectral*.
   - *Design and rules*: single concern and the consistency rules, briefly,
     as the ground of autonomy; links to the platform's `docs/`.
   - "Circles and actors": kept as a direction (the vision's multi-swarm).
4. **The layers** (replaces the three fabrics): p2p, Mycelium, SPLectrum,
   HAICC, Splectral, each with what is built and what is direction.
   - *Mycelium* (`spl/platform/mycelium/`, "content in progress"): written
     from what is built.
   - *Language Substrate*: kept; each language marked built (git, URI,
     XPath), begun (Kafka, as topics) or direction (AVRO).
   - *SPLectrum, the language fabric* and the logical design pages
     (`docs/engineering/splectrum/`, `spl/platform/splectrum/`): kept as
     design ideas for the language layer, marked as directions; the
     platform is no longer called SPLectrum or SPL.
   - *HAICC* (`spl/platform/haicc/`): HAICC as the collaboration and as its
     tool; the process models stay as directions.
   - *SPL Component Setup*, *SPL Components*, *SPL Solutions* ("content in
     progress"): folded in. A solution is a `haiccing` project (the demos);
     components are Splectral components or packages.
5. **Software** (replaces `spl/software/`): by organisation, linking the
   GitHub organisations; the module families (p2p series, mycelium,
   managers and node, haicc, pkgm, splectral). `hyperdrive-fuse` and the
   old `mycelium` module and `p2p-docker-dev`: marked superseded or
   resting.
6. **Third Party Software** (`infrastructure/`): kept; it says "the
   SPLectrum Platform" is built on it: the HAICC platform. `p2p-git` moved
   from `bare-for-pear` to `pear-full-square`: its page follows.
7. **What's next**: a short part, marked as directions: the next stage as
   proposed, and the pipeline towards full autonomy.

Old URLs that go: redirects (`docs/_redirects`), and incoming links fixed
(`grep -r "engineering/spl/"`, `engineering/splectrum/`).

## The top navigation pages

First-person, Jules's voice: drafts for Jules to decide.

- **About** (`docs/about.md`): "the engineering ideas still hold, although
  progress is slow due to time constraints" no longer holds; the
  engineering triangle (SPLectrum, Mycelium, HAICC) becomes the layers
  that now run, with HAICC as the platform as well as the collaboration;
  the Mycelium link follows the new structure.
- **HAICC** (`docs/haicc.md`): the collaboration as practised now: aiming
  at full AI autonomy, from need to running software, within simple,
  consistent rules and self-contained units; the platform named HAICC
  after it; the last line's link (`/engineering/spl/platform/haicc/`)
  follows the new structure.
- **P2P** (`docs/p2p.md`): "What I would like to build ... on my wish list"
  becomes what runs: swarms on Bare and the Holepunch stack, nodes
  replicating, joining by invitation; what is still wanted (phones, Pear,
  real networks, private data) stays as wanted. Midnight and Cardano stay.

## Elsewhere, to check

- `docs/vocabulary/a-z/h/haicc/` and `s/spl-engineering/`: HAICC gains its
  platform sense; "SPLectrum — the language fabric" read against the
  language layer; Splectral perhaps an entry.
- `docs/seed/engineering/`: the applied seed stays; check its links.
- `plan/engineering/engineering.md`: § 1 and § 5 brought up to date (no
  longer on hold); this request referenced.
- `tone-of-voice/` (engineering register, vocabulary shift), and
  `scheduled-tasks.md`: the rework scheduled.

## Done

- The section's structure agreed with Jules and built; no page calls the
  platform SPLectrum or SPL; every claim is either fact from the sources
  above or marked as a direction.
- About, HAICC and P2P updated as Jules decides.
- No broken internal links; old URLs redirected.
- Each page through the site's page-done process; the result checked in
  the browser before commit.
- Reported back here: the site's commit, recorded under this request.
