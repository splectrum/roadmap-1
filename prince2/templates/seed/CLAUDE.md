# CLAUDE.md — <name>

How to work in this repository.

- **Pending work** is a branch `pending/<uri>` with a `pending/` folder that
  holds the request and whatever its execution needs.
- **Execution** is commits on that branch. A unit of work is a request, done
  and committed: the commit is the response, its message carries the
  request and the discussion that settled it.
- **Settled state** is `main`. Merging answers the pending work: remove
  `pending/` in the merge and carry its request and distilled discussion in
  the merge commit message.
