export const projects = [
  {
    id: 'proj-relay',
    slug: 'relay-webhooks',
    title: 'Relay — Webhook Delivery Platform',
    tagline:
      'Hardened delivery engine with backoff, signing, replay, and observable SLIs for product teams integrating at scale.',
    thumbnail: '',
    tech: ['TypeScript', 'Node.js', 'Redis'],
    demoUrl: '#',
    githubUrl: 'https://github.com',
    highlights: ['At-least-once with bounded retries', 'Tenant-scoped quotas & egress guardrails'],
    overview:
      'Relay is an internal/external-facing webhook dispatcher that abstracts destination variance while keeping operators honest about backlog and latency.',
    architecture:
      'Outbox-pattern writers push to partitioned topics; orchestrator workers schedule attempts with jittered backoff; receipts stored in Postgres with correlation IDs bridging support tooling.',
    challenges:
      'Mixed consumer quality (timeouts, flaky SSL) demanded adaptive policies without starving well-behaved destinations.',
    decisions:
      'Chose deterministic replay blobs over naive full payload duplicates; exposed dead-letter rationale to developers via surfaced error classes.',
    relatedSkillSlugs: ['typescript', 'node', 'redis'],
  },
  {
    id: 'proj-ledger-ui',
    slug: 'ledger-console',
    title: 'Ledger Console',
    tagline: 'Operational UI for payouts exceptions, approvals, and manual reconciliations with full audit lineage.',
    thumbnail: '',
    tech: ['React', 'TanStack Router', 'Vite'],
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    highlights: ['Role-based approval flows', 'Diffable reconciliation exports'],
    overview:
      'Dense desk-friendly console for Finance + Support to unblock stuck payouts without hopping across five tools.',
    architecture:
      'Read models fed by event-sourced lineage; mutations go through audited command endpoints with optimistic concurrency.',
    challenges:
      'Balancing completeness vs speed—heavy tables needed virtualization plus column-level masking.',
    decisions:
      'Adopted headless TanStack primitives for resilient data grids versus bespoke grid code.',
    relatedSkillSlugs: ['react', 'typescript'],
  },
  {
    id: 'proj-guardrail',
    slug: 'api-guardrail',
    title: 'API Guardrail',
    tagline: 'Edge-facing rate limits, schema validation telemetry, and contract tests baked into CI.',
    thumbnail: '',
    tech: ['Go', 'OpenAPI', 'K6'],
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    highlights: ['Traffic shadowing harness', 'OpenAPI drift detection'],
    overview:
      'Sidecar-lite gateway policies ensuring partner traffic stays within sane envelopes before hitting monolith hotspots.',
    architecture:
      'Declarative YAML routes compiled to Envoy-compatible filters plus async policy updates via CRDs.',
    challenges:
      'Zero-downtime rollouts while connection pools pin old behavior.',
    decisions:
      'Dual-published OpenAPI snapshots compared in CI blocking merges on unintentional breakage.',
    relatedSkillSlugs: ['go', 'openapi'],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
