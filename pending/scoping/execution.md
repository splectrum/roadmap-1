# Execution process (draft, seed template)

A general pattern: the same for planning, probes and components.

1. **Pending:** requests are put in `pending/` on the branch
   `pending/default`, which is always there.
2. **Execute:** the executor works on `pending/default` and commits each
   settled state change, with the request and its discussion in the
   message.
3. **Close:** the requester decides done from the execution data; the work
   goes to `main` by pull request, and the finished request is removed
   from `pending/`.

Further `pending/<uri>` branches can come later; nothing here prevents
them.
