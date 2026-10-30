# Principles

Status: **settled in discussion** (2026-10-26; amended after phase 1,
2026-10-30)

Two levels. The outside principles hold between beings, human and AI: a
being is seen from outside as a functional process with execution
historicity. The inside principles hold within a single self-contained seed.

## Outside: between beings, human and AI

### Foundation

1. **A request is a seed that grows into its result by execution.** It is a
   P0 being: a context with a difference relative to its environment. The
   context is the repository; the difference is the data within. A subject
   (P3) carries historicity, which the repository's history provides.
   Wherever there is a subject, there is a repository, and that is the level
   where natural language is the default. Nothing is imposed on what is
   inside, and the external medium only has to be natural language.
2. **Self-contained encapsulation of data and functionality.** A unit
   carries what it needs to be understood, run and verified, including its
   own instrumentation and audit, and meets its environment through its
   interface. Done is decided mechanically from normal execution data.

### HAICC

3. **Autonomy first.** Collaboration only where required: meaning, missing or
   inaccessible information, or any exception that halts the AI.
   Collaboration is discussion: discuss first, write what has settled.
4. **PRINCE2-style planning.** The brain function we choose to reach a goal:
   product-based planning, management by stages, and management by exception
   within tolerances. A choice of how we operate, not a foundation.

### Attitude

5. **KISS.** Across everything above. Don't reimplement what the substrate
   provides; defer what is optional.

## Inside: within a seed

1. **A state change becomes visible through a commit.** Data changed between
   commits is dirty: a transaction in progress, not yet visible state. The
   commit history is the seed's historicity.
2. **A test is a way of processing execution data.** Execution data can be
   read for a verdict, a narrative or a diagnosis; a test is the reading that
   gives a verdict.
3. **Private instance data is its own subject, in its own repository.** A
   unit's repository describes the private data it needs — config schema,
   meaning, examples — and holds none. A running instance is a different
   being, owned by its operator: its config, instance data and secrets live
   in a private instance repository, committed with history like any state.
   Visible means visible to the owning subject, not public. Secrets are
   encrypted within that repository, never kept as hidden state outside it.

4. **A request is the only means to trigger change in a repository.** A
   repository is a process: seeded, executing its requests, kept, and
   asked again. Nobody writes into another repository. Reading and use go
   through APIs, an external one and most probably internal ones, built
   later.
5. **Outcomes are data, in the visible state on `main`.** Results, notes,
   designs, decisions, kept runs. `pending/default` holds the requests and
   the metadata around producing the visible state, nothing more.
6. **Execution is repeatable exactly.** A unit records its invocation,
   every state it ran on by commit, its environment and its
   nondeterministic inputs: enough to rerun it. So metrics and audit are
   needed only at the boundary; further detail comes from rerunning.
   Execution records; a separate reading judges.
7. **Validation and mapping happen at the boundary.** What comes in is
   validated into its canonical form and mapped onto what is stored (URIs:
   case-insensitive outside, exact inside). Inside, nothing is checked
   again.
8. **Cascading links.** A process occurs within a context. The link from
   the context down to the process is authoritative; the link from the
   process back up is informative. A repository holding a run, or a
   roadmap linking a phase repository by commit, is the authority.
9. **Ids, not versions.** A validated instance of a module gets an id;
   the commit that records it is its place in the module's evolution. The
   history is the authoritative record.

Outcome of phase 1: `splectrum/dev-env-1-mycelium-git@33634de:notes/api.md`, `rules.md`.

Below the principles, a seed's internals have two further layers, both
choices rather than principles:

- **Stack:** git with XPath over the trees, through the mycelium modules
  (`mycelium-uri`, `mycelium-xpath`, `mycelium-git` over native git,
  isomorphic-git and p2p-git). Towards the mycelium base layer:
  Hypercore, mycelium-git, AVRO, Kafka (`vision.md`).
- **Prerequisites:** the framework seeds run on — P2P nodes, Docker, Bare,
  and for now Claude cloud sessions.
