# Open questions

Remove a question once it is answered and the answer is written where it
belongs.

- Translation between natural language and a unit's internals: how it is
  provided and versioned, and whether the SPLectrum DSL engine is revisited
  as that layer.
- The mobile node runtime: Bare's mobile runtime in an app, or Termux on
  Android first.
- Where a device's primary key is kept: the OS keystore, reachable from Bare?
- isomorphic-git underneath, or a custom git implementation.
- Whether to bring in code from earlier workspaces (spl6, spl7,
  `pear-full-square/mycelium`) or start fresh and port what is needed.
- How a cloud session gets private data it needs (environment secrets as a
  stopgap?), and whether an AI session can act as an operator.
