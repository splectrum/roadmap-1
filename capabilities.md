# Capabilities

Status: **preliminary** (2026-10-27)

The capabilities needed, by URI. Any activity that can be scripted is a
capability and goes on this list. Categories (first segment) are not yet
settled; neither is where functionality is stored.

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

## Working practice

| URI | Question it answers |
|---|---|
| `repo/seed` | Create a repository from the seed template |
| `request/pending` | Add a request to `pending/default` |
| `request/execute` | Execute a request on `execute/default`, synced from `main` |
| `request/merge` | Merge into `main` with a reference to the request details |

## State

| URI | Question it answers |
|---|---|
| `state/git` | Keep all node state in git; isomorphic-git or custom? |
| `state/xpath` | Query the git trees with XPath |

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

## Sequence

Prerequisites, then state, units and UI on a single node, then nodes on
devices, then P2P, then private data. Research-only probes — connectivity,
post-quantum — run alongside. Working practice is used throughout and
tested in roadmap-2.
