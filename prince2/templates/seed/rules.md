# Rules (draft)

## Branches and pending work

- `main` holds settled state.
- `pending/default` is always there: the record of requests. Pending
  requests are stored in `pending/` on it, with their discussion notes and
  other data. It is never merged into `main` and never deleted.
- `execute/default` is the execution branch, from `main`; the `execute`
  namespace leaves room for parallel execution.
- Sequence: read the request from `pending/default`; execute on
  `execute/default`; add the additional data to the request on
  `pending/default`; merge `execute/default` into `main` with a plain
  merge; remove the finished request from `pending/default`.
- The requester decides done from the execution data; the requester is not
  necessarily the executor.

## Commit messages

- First line: the state change.
- Body: the request it answers and why, briefly.
- References to the full details on `pending/default`, with the commit:
  `<commit>:pending/<path>`.

## Git consequences

- Merges into `main` are plain merges: no squash, no rebase, so referenced
  commits stay reachable.
- No force-push on `pending/default`; its history only grows.
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
