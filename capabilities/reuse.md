# Reuse candidates

Earlier code that may be reused when it makes sense, pinned by commit.

| Capability | Source |
|---|---|
| `state/git`, `state/xpath` | `pear-full-square/mycelium@9f63cce` — `lib/`: CRUD on git objects over isomorphic-git, XPath with raw/data/metadata modes on the underscore prefix |
| `state/git`, `layer/*` | `pear-full-square/p2p-docker-dev` — spl7 phases 1–3: Hyperdrive-fs adapter for isomorphic-git, instance fork |
| `node/deploy`, `node/run` | `pear-full-square/p2p-docker-dev` — the managed Docker cluster |
| `p2p/*` | `splectrum/spl6` — `poc/p2p-docker-dev`, `plan/p2p-building-blocks.md`: P2P primitives proven under Bare |
| `state/git` | `bare-for-pear/isomorphic-git`, `bare-for-pear/git` |

Design background: `splectrum/spl7@5389fc1` `plan/`; `splectrum/spl6`
`plan/mycelium-design.md`.
