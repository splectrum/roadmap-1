# CLAUDE.md — SPLectrum roadmap

This repository plans SPLectrum engineering. `principles.md` governs;
pending requests are under `pending/`.

- **Autonomy first.** Collaboration only where required — meaning, missing or
  inaccessible information, any exception that halts the work — and
  collaboration is discussion: discuss first, write what has settled.
- **PRINCE2, as far as needed.** No bureaucracy; commits and repositories
  carry what documents would.
- **KISS.**
- **Natural language; ask in prose.**
- **Every product is a subject, so a repository.** Code is written in
  product repositories, never here.

## Commits

A state change becomes visible through a commit. When a discussion settles
into a change, write it and commit, with the discussion that led to it
distilled into the message.

## Pending work

On a `pending/<uri>` branch, `pending/` holds the requests and what their
execution needs. Merging into `main` removes it; the merge commit message
carries the request and the distilled discussion. Templates are PRINCE2
assets, under `prince2/templates/`.

In Claude Code cloud sessions, execution runs on the session's `claude/…`
branch. The management setup is unchanged; the session branch is just
where the execution happens.
