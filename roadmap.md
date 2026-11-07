# Roadmap

Status: **draft** — revised in spl8, 2026-10-26; phase 2's outcome recorded
2026-11-07, the next stage in discussion

Planned PRINCE2-style (`principles.md`): products first, the next stage in
detail and later ones in outline, work managed by exception within
tolerances. A stage is entered when the previous one has proved itself, not
by date.

## The product: capabilities for applications

The near-term product is a set of capabilities on which applications can be
built. Home automation is the first application: it is used to find the
required capabilities, not as the goal itself. Keep it simple.

1. **Nodes on several devices**, including the phone. Each device runs a
   full peer.
2. **P2P between the nodes:** discovery, connection, replication. The spl6
   primitives re-established on current Bare, without `pear run`.
3. **State in git, queried with XPath**, on every node.
4. **Software units:** self-contained components running on a node. Managing
   IoT devices is one thing units do.
5. **Minimal UI capabilities:** every node serves a browser UI locally — on
   the phone from local IP or in-app, on the PC in a browser. The UI never
   depends on reaching another node; P2P carries the rest.
6. **Private data:** private instance repositories replicated only between
   the owner's paired devices, encrypted, with an always-on blind peer for
   availability. Every application needs it.

**Prerequisites** are capabilities like any other, implemented in Bare where
possible, and come first:

- **Environment sensing:** a node knows what it runs on — runtime, host,
  container, cloud session, Docker — from what the runtime reports, what it
  finds itself, and its instance config, which wins. A first Bare probe
  ran in a Claude Code cloud session (2026-10-27): Bare 1.36.0 on linux/x64,
  the session seen through its environment, Docker usable once `dockerd` is
  started. Outbound UDP not yet tested.
- **Deploy / run / teardown:** a script that launches several nodes and
  adapts to where it runs — Docker in a cloud session or on a PC, Bare
  directly on a phone.
- **A real phone in the test loop.**

## Next

**Scoping stage**, worked in this repository. A unit of work is a request,
done, and committed: the commit is the response, its message carries the
request and the discussion that settled it. Four products:

- **Seed template:** the initial repository for a self-contained seed and
  the execution of its request, distilled from this repository as its
  first instance.
- **Capability list and sequence:** the capabilities to explore, each with
  the question it answers, and the order they are taken in
  (`capabilities.md`). Any activity that can be scripted is a capability.
- **Capability categories:** capabilities categorised by URI.
- **Storing functionality:** how functionality is kept in the repository
  — branches, folders, repositories; a Mycelium discussion.

**First development phase: done** (2026-10-30), in
`splectrum/dev-env-1-mycelium-git`. Outcome: `splectrum/dev-env-1-mycelium-git@33634de:notes/status.md`.
The mycelium modules (uri, xpath, git with native, isomorphic-git and
p2p-git engines on Node and Bare; layer; repo), the test-run model, and
the first settled rules. The base modules are in their product
repositories, single concern each: `pear-full-square/mycelium-uri@de8cdb7`,
`pear-full-square/mycelium-xpath@81bd4f9`, `pear-full-square/mycelium-git@3a0dbe4`
(their histories split from the phase repository). `pear-full-square` holds
our application modules, `bare-for-pear` Bare versions of third-party or
general-purpose modules (`p2p-git`). What was left out was overtaken by a changed
landscape, not left unfinished; that landscape is being worked into this
roadmap.

**Second development phase: done** (2026-11-07), in
`splectrum/dev-env-2-p2p-cluster`. Outcome:
`splectrum/dev-env-2-p2p-cluster@c6b73bb:notes/status.md` and
`steps/phase-3/readme.md`; its own roadmap as it went, `notes/plan.md`.

- **The request was met** by 2026-11-02 (steps 0–10), on a design reworked
  after a first thin build that stands as probes (`notes/node-pattern.md`):
  the p2p series (`p2p-store`, `-dht`, `-connect`, `-replicate`,
  `-channel`), `p2p-git` (moved to `pear-full-square`), mycelium on the p2p
  layer (`p2p-mrepo`, test runs on Hypercore under Bare identical to
  native), the node and its two managers, a resource name service in code
  (`p2p-rns`) with liveness, data in topics (`mycelium-topic`), Splectral
  (a browser platform showing a swarm live, recorded and replayed), and
  the swarm's deployment as a repository on its master.
- **Then HAICC**, under the phase repository's own "phase 3" (2026-11-05
  to 11-07): one downloaded setup (39 MB, Bare only, no Node.js) boots a
  work folder; swarms are made from self-contained packages published in
  `haiccing`, nodes run in Docker containers, each level (host, swarm,
  node) has its own HAICC and validates itself. Both demos (a node going
  quiet; a node joining from another host by invitation) run again from
  the tenth release, checked on a local machine. Design, rules and guides:
  `docs/`.
- **A settled design and a small set of simple rules**, the phase's main
  result besides the code; with them, the work runs within simple rules,
  with high autonomy:
  - *The layered design* (`notes/node-pattern.md`, `notes/plan.md`):
    Holepunch, the p2p series (mechanism only, no git, no management),
    p2p-git, mycelium (knows no p2p), resources (`p2p-rns`), the node,
    and managing only at the top, in the two managers. Every resource in
    code first, behind the contract its repository form keeps later.
  - *The platform's design* (`docs/design/`, each decision once, marked
    built or agreed, with its reason): three levels (host, swarm, node),
    each a folder with its own HAICC working on its own config; cold boot
    (copy in) and warm boot (run and validate itself); self-contained
    packages checked intact by hash; Bare only; the setup carrying its
    runtime; the airgap's two sides.
  - *Single concern, first* (root `rules.md`): every part one concern, one
    concern in one place, validation only at the boundary, knowledge
    staying with its concern. With it, the rules for records and topics
    (a Kafka record as the elementary container, Kafka's names) and for
    data names (lowerCamelCase, exact to and from URIs, `_` reserved).
  - *Thirty consistency rules* (`docs/rules.md`), short and checkable,
    many checked by a named test: names are URI parts, nothing hidden, the
    folder is the context, every command says itself and logs every line
    it prints, every state change said, exit codes 0/1/2, asked first
    before touching the host or removing; packages self-contained, written
    only by the package writer, never edited where used; tests carried by
    their package, cleaning up after themselves, skipped and said rather
    than passed; nothing merged or released untested; nothing
    force-pushed; a decision lives once.
- **Organisations:** engines in `pear-full-square`, Splectral components in
  `splectral`, packages and projects in `haiccing` (`vision.md`).
- **Not reached:** a second physical host (simulated on one machine); the
  public DHT (unreachable from a cloud session; swarms run a private one);
  packages, the lookup and requests as repositories (in code first); node
  keys kept securely; a phone.
- **Practice learnt:** the local run is the real test (each release found
  there what the sandbox did not); where the implementer settled structure
  alone, the human corrected it, and rules for autonomy are being written;
  planning moved into the phase repository as the phase grew. Agreed there
  for the pipeline (`docs/design/pipeline.md`): the modules are the source
  of truth (changes committed in them, no split from copies), cloud and
  local meet through GitHub, candidates rebuilt and compared; tailored
  development environments, one per piece of work, from a template,
  discarded when done (in direction; details open).

**Next stage: in discussion.** Proposed by the human at the end of the
phase, nothing decided: **applications on mycelium repositories**. A
repository's visible state composed of its own layers and read-only mounts
of other repositories' data (links, not copies); a mounted source's
change, synced, triggers an internal processing request, executed by the
existing flow in the node's container, rerunnable, its result the
repository's own state. Agreed in the phase for later: the p2p version
(one code repository per swarm), pinning once the system works, Android (a
Termux probe); the capability store, the lookup and the inbox as
repositories; teardown with checkpointing; the documentation as a swarm
app; the development environment as the whole pipeline.

The research below stays as input, not as a sequence.

**Research the capabilities.** For each of the six, establish
what exists, what we build, and the risks — by research and by probes.

**Connectivity is tested as part of it.** The options, each a probe with a
phone on mobile data as the hard case:

- Direct holepunching between nodes over the public HyperDHT.
- A home node reachable from outside (public IP, forwarded UDP port,
  dynamic DNS) acting as private bootstrap and blind relay. Fails under
  CGNAT.
- A cheap VPS in the same role, when the home connection is not reachable.
- Cloudflare at the edges only: Tunnel and Access for remote reach of a
  node's UI, Durable Objects as a WebSocket rendezvous, R2 for backups,
  Artifacts (closed beta) for git. Cloudflare cannot host a peer: no UDP in
  Workers, no inbound UDP in Containers, Spectrum UDP is Enterprise only.

**Private data is researched as part of it.** Check the Holepunch building
blocks against current docs — keys and discovery keys, `encryptionKey`,
Corestore primary key, Hyperswarm firewall, Autobase, blind pairing, blind
peers — and where a device's primary key is kept (OS keystore from Bare?).
Probe: a phone and a home node paired into one encrypted instance
repository, with a blind peer. Until node storage is Holepunch-based, git
with encryption (age or sops) fills the gap.

**Post-quantum readiness** is part of private data. Holepunch's stack is
classical (Ed25519, X25519) and no post-quantum plan was found
(2026-10-26); symmetric encryption and hashing hold. The realistic risk is
harvest-now-decrypt-later on key exchange. Default: keys move out of band
(pairing by QR or locally). To check: whether sodium-native exposes
libsodium 1.0.22's ML-KEM768 / X-Wing; the third-party
`lukeburns/post-quantum-core` approach (PQ handshake inside a Hyperswarm
connection); WireGuard with an out-of-band preshared key, or Rosenpass, as
a post-quantum tunnel between own devices; SSH (hybrid ML-KEM by default)
for git; whether Bare's TLS negotiates X25519MLKEM768 for the node UI.

Also in this stage: a Bare node with its git store and local HTTP server
running on a phone.

Settled by phase 2 for connectivity: nodes on one network connect
directly; a private DHT needs two persistent nodes; a cloud session cannot
reach the public DHT, so the phone and the home node are tested from a
local machine.

**Then:** capabilities 1–6 built, each as one or more stages; home
automation assembled from them, as the check that none is missing.

## Later

- The mycelium base layer: Hypercore, mycelium-git, AVRO (typed data),
  Kafka (streaming, high-volume data; topics begun in phase 2,
  `mycelium-topic`); `vision.md`.
- Translation between natural language and a unit's internals.
- The working practice moves onto node components.

## Horizon

Multi-paradigm Mycelium · AVRO · Hypercore streams · one owner on several
devices · real networks and relays · circles · interop at the edges.

## Always discussed

Anything touching meaning, the philosophy or a settled commitment; changes to
the principles or working practices; anything irreversible or outward-facing.
