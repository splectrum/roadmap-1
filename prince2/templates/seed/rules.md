# Rules (draft)

## Branches and pending work

- `main` holds settled state.
- `pending/default` is always there: the record of requests. Pending
  requests are stored in `pending/` on it, with their discussion notes and
  other data. It is an orphan branch, sharing no history with `main`,
  and is never merged into `main` and never deleted.
- `execute/default` is the execution branch, from `main`; the `execute`
  namespace leaves room for parallel execution.
- Sequence: read the request from `pending/default`; sync
  `execute/default` with `main` by merging `main` into it; execute on
  `execute/default`; add the additional data to the request on
  `pending/default`; merge `execute/default` into `main` with a plain
  merge; remove the finished request from `pending/default`.

## Commit messages

- First line: the state change.
- Body: the request it answers and why, briefly.
- References to the full details on `pending/default`, with the commit:
  `<commit>:pending/<path>`. The merge into `main` references the
  `pending/default` commit holding the request details.
- Fetching only `main` gives the repository without the request record;
  fetching `pending/default` adds it.

## Git consequences

- Merges into `main` are plain merges: no squash, no rebase, so execution
  history reaches `main` as it happened.
- No force-push on any branch; history only grows.
- A branch is deleted only after a plain merge: `git branch -d`, never
  `-D`.

## Reserved words

| Word | Meaning |
|---|---|
| `main` | Settled state |
| `pending` | Namespace for pending work: branch prefix and folder |
| `execute` | Namespace for execution branches |
| `default` | The permanent branch under a namespace |

## URIs

- Relative: `/`-separated segments; no scheme, query or fragment.
- Segments: lowercase `a-z`, `0-9`, `-`.
- Reserved words only where defined.
- A name is never both a branch and a prefix.

## Open

- Who decides a request is done (a process, for later).
- Whether history may be rewritten to remove leaked data.
