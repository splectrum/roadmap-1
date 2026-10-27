// Environment sensing: what is this node running on?
// Prints one JSON object. Detection is a convenience; instance config wins.
const os = require('bare-os')
const fs = require('bare-fs')
const env = require('bare-env')
const { spawnSync } = require('bare-subprocess')

function exists (path) {
  try { fs.statSync(path); return true } catch { return false }
}

function run (cmd, args) {
  try {
    const r = spawnSync(cmd, args)
    return { ok: r.status === 0, out: (r.stdout || '').toString().trim() }
  } catch { return { ok: false, out: '' } }
}

const docker = run('docker', ['version', '--format', '{{.Server.Version}}'])

const sense = {
  runtime: {
    platform: Bare.platform,
    arch: Bare.arch,
    simulator: Bare.simulator,
    bare: Bare.version
  },
  host: {
    hostname: os.hostname(),
    cpus: os.cpus().length,
    memory: os.totalmem()
  },
  container: {
    dockerenv: exists('/.dockerenv'),
    told: env.SPL_CONTAINER === '1'
  },
  cloud: {
    claudeCode: env.CLAUDE_CODE_REMOTE === 'true',
    environment: env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE || null
  },
  docker: {
    cli: run('docker', ['--version']).ok,
    daemon: docker.ok ? docker.out : null
  }
}

console.log(JSON.stringify(sense, null, 2))
