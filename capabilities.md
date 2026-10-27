# Capabilities

Status: **preliminary** (2026-10-27)

The capabilities needed, by URI. Any activity that can be scripted is a
capability and goes on this list. Categories (first segment) are not yet
settled; neither is where functionality is stored. Code kept before
implementation sits in `capabilities/<uri>/`; reuse candidates are in
`capabilities/reuse.md`.

## Prerequisites — first

| URI | Question it answers |
|---|---|
| `env/sense` | What does a node run on: runtime, host, container, cloud session, Docker? (probe ran 2026-10-27) |
| `env/udp` | Is outbound UDP available here? |
| `env/docker` | Is Docker usable, and how is its daemon started where needed? |
| `node/deploy` | Bring up one or more nodes, adapted to where it runs |
| `node/run` | Run nodes and collect their execution data |
| `node/teardown` | Remove what was deployed, leaving nothing behind |
| `phone/loop` | Get a real phone into the test loop and read its execution data |

## Repository

| URI | Question it answers |
|---|---|
| `repo/seed` | Create a repository from the seed template |
| `repo/host` | Manage the repository on its host (GitHub): default branch, protection of `main` and the layer branches |
| `repo/integrity` | Check the repository keeps its rules: disjoint layers, plain merges, history only grows |
| `repo/sync` | Sync all layers to other remotes (e.g. Codeberg): plain pushes, report divergence |
| `repo/publish` | Split a folder package into `publish/<package>` and push it to its product repository's `execute/main` |

## State

| URI | Question it answers |
|---|---|
| `state/git` | Keep all node state in git; isomorphic-git or custom? |
| `state/uri` | Our URIs: parse, validate, split at known prefixes (`mycelium-uri`) |
| `state/xpath` | Navigate a tree by path, generic (`mycelium-xpath`) |

## Layers

A layer on top of git (native or isomorphic) that gives the required
behaviour; everything above uses it, never git directly.

| URI | Question it answers |
|---|---|
| `layer/create` | Create a layer branch, orphan, under a reserved first segment |
| `layer/deploy` | Deploy a folder package into a layer, as a commit referencing its source |
| `layer/extract` | Extract a layer into a folder package, recording its provenance |
| `layer/compose` | Build a composed view: `main` with its layers, local, imported or virtual |
| `layer/import` | Pull a layer in from another repository, with its history |
| `layer/export` | Push a layer out to another repository |
| `layer/request` | The request flow: `pending/default`, `execute/main`, merge into `main` with references |

## Units

| URI | Question it answers |
|---|---|
| `unit/run` | Run a self-contained unit on a node: start, stop, audit |
| `unit/iot` | Manage IoT devices from a unit |

## UI

| URI | Question it answers |
|---|---|
| `ui/serve` | Serve a browser UI locally from every node, with no dependency on another |

## Nodes on devices

| URI | Question it answers |
|---|---|
| `node/mobile` | Run a full peer on a phone: Bare in an app, or Termux? |

## P2P

| URI | Question it answers |
|---|---|
| `p2p/discover` | Find the owner's other nodes |
| `p2p/connect` | Connect nodes, with a phone on mobile data as the hard case: holepunching, home node, VPS, Cloudflare at the edges |
| `p2p/replicate` | Replicate state between nodes |

## Private data

| URI | Question it answers |
|---|---|
| `data/instance` | Keep a unit's private instance data in its own repository |
| `data/encrypt` | Encrypt instance repositories (Holepunch, or age/sops on git meanwhile) |
| `data/pair` | Pair the owner's devices, keys moved out of band |
| `data/keystore` | Where a device's primary key is kept |
| `data/blind` | An always-on blind peer for availability |
| `data/pq` | Post-quantum readiness of key exchange |
| `data/session` | How a cloud session gets the private data it needs, and whether an AI session can act as operator |

## Sequence

Prerequisites, then state (git, then layers, then XPath), units and UI
on a single node, then nodes on
devices, then P2P, then private data. Research-only probes — connectivity,
post-quantum — run alongside. Repository and layer capabilities carry the
working practice, tested in roadmap-2.
