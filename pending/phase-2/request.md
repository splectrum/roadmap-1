# Request (draft): second development phase

From: `splectrum/roadmap-1`, 2026-10-30. A draft, rewritten from the first
phase's (`splectrum/dev-env-1-mycelium-git@33634de:notes/next-phase-request.md`)
after its evaluation. To be prepared as a seed in `seeds/`; the name is
decided then. The seed's requirements define done.

## The phase

**Second development phase:** the creation of a P2P cluster, starting with
p2p-git on Hyperdrive. Hypercore is the foundation from the start, not a
later step: replication carries the data between nodes, and links over
copies follow from it.

1. **p2p-git on Hyperdrive as a node's store.** mycelium-git's contract
   suite and the test-run model on a persisted, Corestore-backed Hyperdrive,
   under Bare. p2p-git is fixed in itself: folders reported as folders
   (`Stats(null)` reports not-a-folder), `readlink` and `symlink` added
   (`mycelium-git`'s `hyperdriveFs` works around both now), and the delta
   offsets its pack parser decodes wrongly. Hyperbee for refs is evaluated,
   not assumed.
2. **Two nodes replicating.** Two Bare nodes in containers; discovery over
   Hyperswarm; a repository replicated from one to the other. Probe the
   environment first: `env/docker` (the daemon, starting it, limits in a
   cloud session) and `env/udp` (needed for Hyperswarm). Run Bare in a
   plain container before anything depends on it.
3. **The package repository on Hyperdrive.** Each package instance stored
   once; a deployment holds links (a core key and a commit), and a node
   loads only what it reads. Our modules arrive by hand for now;
   third-party packages are brought in once, at the boundary.
4. **The seed node.** A node starts from a plain base with the runtime
   (Bare) only. A self-contained bootstrap repository sets it up: obtain
   the package repository, materialise what the node needs, start the node.
   The very first repository comes in from the outside world once; a later
   node needs only the bootstrap repository and the seed node's key.
5. **The deployment repository.** What the cluster is: its nodes, their
   state and a minimum of monitoring, kept and reached through requests
   like everything else. Every step is a request whose execution is
   recorded and can be rerun.

Capabilities, as in `capabilities.md`: `state/hyperdrive`; `env/docker`,
`env/udp`; `p2p/discover`, `p2p/replicate`; `pkg/store`, `pkg/import`,
`pkg/materialise`; `cluster/bootstrap`, `cluster/seed`, `cluster/join`,
`cluster/deployment`. First observations on `p2p/boundary`.

## Modules

- `mycelium-uri`, `mycelium-xpath` and `mycelium-git` are the base.
- `mycelium-layer` and `mycelium-repo` come in as folders on `main`, with
  no repositories of their own.
- The test-run machinery comes along; its practice stays: expectations in
  the requests, reports as requests, kept runs as data on `main`, machinery
  pinned by id and validated before the pin moves.
- Publishing to product repositories is ad hoc, done by hand, not
  prescribed.

## Practice

- Execution can be repeated exactly, so metrics and audit only at the
  boundary: object counts, sizes, times and replication volume, per step.
  The Hypercore decisions (per-package cores or groups, batching) need the
  numbers.
- One thin path end to end before generalising: one node on Hyperdrive,
  then two replicating, then the seed node and a joining node.
- A multistep process may run as a chain of single-concern repositories
  (operators) where that proves natural; the test-run instance is the
  pattern.

## Not in this phase

AVRO and Kafka (a p2p-Kafka probe only as a stretch), the full evaluation
of the P2P boundary, devices and phones, private data. Directions:
`vision.md`, carried in the seed for information.

## Open

- The base modules as folders in the new repository (development goes on
  there, product repositories updated by hand), or as dependencies from
  their product repositories. Proposal: folders, since mycelium-git will
  change on Hyperdrive.
- Operators: a requirement of the phase, or a way of working where natural
  (proposal: the latter).
- The cluster's platform: Docker in a cloud session first, a PC or VPS
  later?
- Kept runs: bundles on `main` grew to 280 MB in phase 1. Keep them on
  Hyperdrive in this phase, or as bundles for now?
- How branches beyond a session's own are pushed (open since phase 1).

## Background

- `splectrum/dev-env-1-mycelium-git@33634de`: `notes/status.md` (the
  outcome and the boundary question), `notes/api.md`, `notes/vision.md`,
  `rules.md`, the modules' READMEs, `test-runs/README.md`.
- In `splectrum/roadmap-1`: `principles.md`, `roadmap.md`, `vision.md`,
  `capabilities.md`, `capabilities/reuse.md`.
