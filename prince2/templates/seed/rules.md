# Rules (draft)

## Branches and pending work

- `main` holds settled state.
- `pending/default` is always there. Pending requests are stored in
  `pending/` on it, with their discussion notes and other transient data,
  executed and committed there, and brought to `main` by a plain merge.
  Finished requests are removed from `pending/`.
- The requester decides done from the execution data; the requester is not
  necessarily the executor.

## Commit messages

- First line: the state change.
- Body: the request it answers and why, briefly.
- References to the full details under `pending/`; where the path may have
  gone, with the commit: `<commit>:<path>`.

## Git consequences

- Merges into `main` are plain merges: no squash, no rebase, so referenced
  commits stay reachable.
- No force-push on `pending/default`; its history only grows.

## Reserved words

| Word | Meaning |
|---|---|
| `main` | Settled state |
| `pending` | Namespace for pending work: branch prefix and folder |
| `default` | The permanent branch under a namespace |

## URIs

- Relative: `/`-separated segments; no scheme, query or fragment.
- Segments: lowercase `a-z`, `0-9`, `-`.
- Reserved words only where defined.
- A name is never both a branch and a prefix.

## Open

- Whether `pending/` appears on `main`.
