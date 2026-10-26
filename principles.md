# Principles

Status: **settled in discussion** (2026-10-26)

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

Below the principles, a seed's internals have two further layers, both
choices rather than principles:

- **Stack:** git with XPath over the trees for now. Mycelium and its layers
  above git come later.
- **Prerequisites:** the framework seeds run on — P2P nodes, Docker, and for
  now Claude cloud sessions.
