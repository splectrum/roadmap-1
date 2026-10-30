# Request: p2p-git fixes

For `bare-for-pear/p2p-git`, on top of `1fbe919`. Apply
`0001-hyperdrive-fs-and-listpack.patch` with `git am` and push to `main`.

- `hyperdrive-fs.js`: folders reported as folders (`Stats(null)` reported
  not-a-folder); `readlink` and `symlink` added.
- `src/utils/git-list-pack.js`: OFS_DELTA offsets decoded as git encodes
  them (big-endian, plus one per continuation byte).

Checked here: mycelium-git's Hyperdrive contract suite on the plain
adapter, without its `hyperdriveFs` workaround, 18 of 18 (0 before); a
native bundle with 30 ofs-deltas, every base on an object offset (29
missed before). The patch's commit message carries the details.

Once pushed, the workaround in mycelium-git can go (next phase).

Done: pushed as `bare-for-pear/p2p-git@d7d154d`, 2026-10-30.
