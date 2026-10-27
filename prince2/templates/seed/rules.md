# Rules (draft)

## Branches and pending work

- `main` holds settled state. It changes only by plain merges from
  `_execute/*`, never by direct commits.
- `_pending/default` is always there: an orphan branch, sharing no history
  with `main`, never merged and never deleted. Its tree holds the pending
  requests in `_pending/`, with their discussion notes and other data; its
  history is the record of all requests.
- `_execute/default` is the execution branch, from `main`, synced with `main`
  by merging `main` into it before each execution. The `_execute`
  namespace leaves room for parallel execution.
- `_overlay/<name>` branches are overlays on `main`: orphan branches
  mirroring `main`'s paths, holding underscore folders (the Mycelium
  model) that sit with the data they belong to in a composed view.
  Underscore folders live only in these branches, never on `main`.
- Request data goes to `_pending/default`, the response to `_execute/*`.
  Request data includes the execution data of the request: metrics, audit,
  verdicts. Data from a unit in operation belongs to its instance; nothing
  private goes into `_pending/default`.

## Commit messages

- First line: the state change.
- Body: the request it answers and why, briefly.
- References to the full details on `_pending/default`, with the commit:
  `<commit>:_pending/<path>`. The merge into `main` references the
  `_pending/default` commit holding the request details.

## Git consequences

- Merges into `main` are plain merges: no squash, no rebase, so execution
  history reaches `main` as it happened.
- No force-push on any branch; history only grows.
- A branch is deleted only after a plain merge: `git branch -d`, never
  `-D`.

## Underscore namespace

The underscore is reserved for the repository's internal namespace. Free
names never start with `_`, so internal names never clash with them.
`main` is the one plain name with a fixed meaning: the data.

Current namespaces; revised as needed.

| Namespace | Meaning |
|---|---|
| `_pending` | Pending work: branch prefix, and top folder on `_pending/default` |
| `_execute` | Execution branches |
| `_overlay` | Overlay branches on `main` |
| `default` | The permanent branch within a namespace |

## URIs

Scope: branch names and repository folders, wherever XPath is used.

- Relative: `/`-separated segments; no scheme, query or fragment.
- Segments: lowercase `a-z`, `0-9`, `-`; a leading `_` marks the internal
  namespace.
- A name is never both a branch and a prefix.

## Open

- Whether history may be rewritten to remove leaked data.
