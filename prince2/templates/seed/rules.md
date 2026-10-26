# Rules (draft)

## Branches and pending work

- `main` holds settled state. It changes only by plain merges from
  `execute/*`, never by direct commits.
- `pending/default` is always there: an orphan branch, sharing no history
  with `main`, never merged and never deleted. Its tree holds the pending
  requests in `pending/`, with their discussion notes and other data; its
  history is the record of all requests.
- `execute/default` is the execution branch, from `main`, synced with `main`
  by merging `main` into it before each execution. The `execute`
  namespace leaves room for parallel execution.
- Request data goes to `pending/default`, the response to `execute/*`.

## Commit messages

- First line: the state change.
- Body: the request it answers and why, briefly.
- References to the full details on `pending/default`, with the commit:
  `<commit>:pending/<path>`. The merge into `main` references the
  `pending/default` commit holding the request details.

## Git consequences

- Merges into `main` are plain merges: no squash, no rebase, so execution
  history reaches `main` as it happened.
- No force-push on any branch; history only grows.
- A branch is deleted only after a plain merge: `git branch -d`, never
  `-D`.

## Reserved words

Current scope; revised as needed.

| Word | Meaning | Reserved as |
|---|---|---|
| `main` | Settled state | Branch name |
| `pending` | Namespace for pending work | First segment of a branch name; top folder on `pending/default` |
| `execute` | Namespace for execution branches | First segment of a branch name |
| `default` | The permanent branch under a namespace | Last segment of a branch name under a namespace |

## URIs

Scope: branch names and repository folders, wherever XPath is used.

- Relative: `/`-separated segments; no scheme, query or fragment.
- Segments: lowercase `a-z`, `0-9`, `-`.
- Reserved words only where defined.
- A name is never both a branch and a prefix.

## Open

- Whether history may be rewritten to remove leaked data.
