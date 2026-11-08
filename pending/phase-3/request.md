# Request: third development phase (draft)

From: `splectrum/roadmap-1`, 2026-11-08. **Draft for discussion**: the
implementer's proposals, nothing in it settled. The phase's scope, its
done and the open questions are discussed with the human; what settles
replaces this draft before the seed is prepared. The proposal is the human's, made at the end of phase 2
(`splectrum/dev-env-2-p2p-cluster@c6b73bb:notes/plan.md`, "Proposed next
phase").

Numbering: the roadmap's phase 2 covers the phase repository's own
"phase 2" and "phase 3"; this is the roadmap's phase 3.

## The aim, for this phase

Full AI autonomy, from a need to running software that satisfies it
(`roadmap.md`). This phase moves it inside the system: a repository
notices a change it depends on and satisfies what follows from it by
itself, through a request it writes and executes. KISS, consistent rules
and self-containment, as in phase 2.

## The phase

**Applications on mycelium repositories**: mycelium repositories as the
context applications run in, and execution in the node's container, on the
HAICC platform as built.

1. **The development environment.** The first tailored environment
   (`docs/design/pipeline.md` there): created from a template, the modules
   the requirements name brought in at given commits, every change
   committed in the module's own repository; packages written from the
   modules; the local check through GitHub. Discarded, or archived, when
   done.
2. **Composed visible state.** A repository's visible state is its own
   layers and read-only mounts of data structures from other repositories:
   links, not copies (`layer/compose`, a mount as a virtual layer).
3. **Sync changes visible state.** A mounted source's change, replicated,
   changes the visible state of the repositories mounting it.
4. **Changes trigger internal requests.** The repository's node writes a
   request into its own `pending/default` as a consequence of the change
   (nothing is sent between nodes); the existing flow executes it in the
   node's container, on fixed states, as a unit that can be rerun; its
   result is the repository's own state, which others may mount in turn
   (`repo/trigger`).
5. **The first application.** Two or more repositories chained by mounts
   and triggers on a swarm, deployed as a `haiccing` package with its own
   tests, shown in Splectral.

One thin path end to end before generalising: one mount, one trigger, one
request executed, then the chain.

## Done

The phase is done when:

1. A repository's visible state composes its own layers and at least one
   read-only mount of another repository, on the p2p layer, under Bare.
2. A change in a mounted source, synced, changes the visible state and
   triggers an internal request, executed in the node's container,
   recorded and rerunnable, its result the repository's own state.
3. The first application runs from a `haiccing` package on the HAICC
   platform; its tests pass from a published release on a local machine;
   it is shown in Splectral.
4. The work was done in a tailored development environment: changes
   committed in the modules, packages written from them, nothing kept in
   the environment that has to outlive it.
5. **Autonomy is measured.** Every point where the human was needed is
   recorded with its reason (meaning, missing information, an exception
   that halted the work), so the phase's report says what still stands
   between a need and running software.

## Practice

- Phase 2's rules come along and govern: single concern first; the
  consistency rules (`docs/rules.md` there); records, topics and data
  names; each design decision written once, built or agreed, with its
  reason. The seed template takes them.
- Each step is a request; its execution recorded, metrics at the boundary,
  repeatable exactly.
- In code first where it proves the pattern; behind the contract its
  repository form keeps.
- The local run is the real test: a release is checked on a local machine
  before a step counts as done.
- Structure decided with the human, not alone: the design points below,
  and any new one, are discussed before they are built.

## Not in this phase

AVRO (JSON first), Kafka beyond topics, private data, phones (but see the
Termux probe below), a second physical host, the public DHT, Pear, the
multi-swarm vision.

## Open, with proposals

1. **Where a mount is declared and what it names.** Proposed: in the
   mounting repository's own config, one file of one concern, each mount
   naming a repository by URI and a path in it.
2. **Following the source or a pinned commit.** Proposed: a mount follows
   its source (that is what triggers); every execution records the source
   commit it ran on, so it can be rerun exactly.
3. **The trigger rules.** Proposed: declared with the mount, as a path on
   the mounted data; any change under it writes one request.
4. **What executes a request.** Proposed: the swarm's codebase, the
   function named by capability URI in the request.
5. **The data's form at the start.** Proposed: files in layers; records in
   topics when the application needs them.
6. **The first application.** Proposed: the documentation as a swarm app
   (on the roadmap from phase 2): the packages' documentation mounted from
   the master's package repository, an index built by trigger, read in
   Splectral at the version deployed. Small, real, and it puts the
   platform's docs where the code runs.
7. **The development environment's details** (`pipeline.md`'s open list):
   who creates and discards it (proposed: the implementer through GitHub's
   tools, the human creating the repositories where only the human can);
   discarded means archived; modules held as git submodules at commits;
   `dev-env-2-p2p-cluster` the template's source, retired once its
   contents have their lasting places.
8. **Where planning lives.** Proposed: here, in `splectrum/roadmap-1`; a
   phase repository keeps its steps and records, and links back.
9. **Agreed in phase 2 for later:** the p2p version (one code repository
   per swarm), pinning, an Android Termux probe. Proposed: the Termux probe
   alongside, by the local agent (small, independent); the other two not in
   this phase unless mounts need them.
10. **The repository's name.** Proposed: `dev-env-3-mycelium-apps`.

## Background

- `splectrum/dev-env-2-p2p-cluster@c6b73bb`: `steps/phase-3/readme.md`,
  `notes/plan.md`, `docs/`, `rules.md`, `vision.md`.
- In `splectrum/roadmap-1`: `principles.md`, `roadmap.md`, `vision.md`,
  `capabilities.md`.
