# env/sense

What a node runs on: runtime, host, container, cloud session, Docker.
Prints one JSON object. Detection is a convenience; instance config wins.

Kept here before implementation, until it has a product repository.

Run with Bare 1.36.0 and `bare-os`, `bare-fs`, `bare-env`,
`bare-subprocess`:

    bare sense.js

npm installs the Bare binary without execute permission; `chmod +x` it.

First run (Claude Code cloud session, 2026-10-27): linux/x64, not a
simulator, cloud session `cloud_default`, Docker daemon 29.9.2 once
`dockerd` was started, no `/.dockerenv`.
