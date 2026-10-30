# Reuse candidates

Earlier code that may be reused when it makes sense, pinned by commit.

| Capability | Source |
|---|---|
| `state/git`, `state/xpath` | `pear-full-square/mycelium@9f63cce` — `lib/`: CRUD on git objects over isomorphic-git, XPath with raw/data/metadata modes on the underscore prefix |
| `state/git`, `layer/*` | `pear-full-square/p2p-docker-dev` — spl7 phases 1–3: Hyperdrive-fs adapter for isomorphic-git, instance fork |
| `node/deploy`, `node/run` | `pear-full-square/p2p-docker-dev` — the managed Docker cluster |
| `p2p/*` | `splectrum/spl6` — `poc/p2p-docker-dev`, `plan/p2p-building-blocks.md`: P2P primitives proven under Bare |
| `state/git` | `bare-for-pear/p2p-git` — isomorphic-git stripped to plumbing, no working tree, loose objects, pluggable fs; unfinished: continue it as the embedded engine |
| `state/git` | `bare-for-pear/isomorphic-git` — upstream unmodified plus `hyperdrive-fs.js`; take the adapter for the Hyperdrive backend |
| `state/git`, `repo/host` | `bare-for-pear/git` — git CLI wrapper for Bare; base of the native-git reference adapter, remote and hosted-repo operations |

Assessment (2026-10-27): port selectively, don't copy wholesale. The
mycelium `lib/` was written against p2p-git and is extended into
`mycelium-git` — not as is: it force-updates refs, hard-codes `main`
and filters on the dropped underscore.

Design background: `splectrum/spl7@5389fc1` `plan/`; `splectrum/spl6`
`plan/mycelium-design.md`.

Phase 1 (2026-10-30, `splectrum/dev-env-1-mycelium-git@33634de`): the mycelium `lib/` and
`bare-for-pear/isomorphic-git` are superseded by `mycelium-git`.
`p2p-git` is the embedded engine and passes the backend contract, on
bare-fs and Hyperdrive, Node and Bare. Still to fix in p2p-git itself
(`mycelium-git`'s `hyperdriveFs` works around the first two):
`hyperdrive-fs.js` reports folders as not-folders (`Stats(null)`), and
lacks `readlink` and `symlink`; its pack parser decodes delta offsets
wrongly (`notes/probes/`).
