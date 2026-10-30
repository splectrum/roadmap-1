# Roadmap

Status: **draft** — revised in spl8, 2026-10-26

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

**Second development phase** (next; seed prepared in
`seeds/dev-env-2-p2p-cluster/`, which holds its requirements and done): **the creation of a P2P cluster**, starting with p2p-git on
Hyperdrive. Its own development repository, with `mycelium-layer` and
`mycelium-repo` as folders in it (no repositories of their own), on the
base modules `mycelium-uri`, `mycelium-xpath`, `mycelium-git`. Publishing
to product repositories stays ad hoc, done by hand. Directions to take
into account are in `vision.md`.

What follows depends on its outcome. The research below stays as input,
not as a sequence.

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

**Then:** capabilities 1–6 built, each as one or more stages; home
automation assembled from them, as the check that none is missing.

## Later

- The mycelium base layer: Hypercore, mycelium-git, AVRO (typed data),
  Kafka (streaming, high-volume data); `vision.md`.
- Translation between natural language and a unit's internals.
- The working practice moves onto node components.

## Horizon

Multi-paradigm Mycelium · AVRO · Hypercore streams · one owner on several
devices · real networks and relays · circles · interop at the edges.

## Always discussed

Anything touching meaning, the philosophy or a settled commitment; changes to
the principles or working practices; anything irreversible or outward-facing.
