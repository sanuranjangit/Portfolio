export const posts = [
  {
    id: 'post-1',
    iconType: 'bolt',
    category: 'PERFORMANCE',
    title: 'Optimized API response time by 40%',
    summary:
      'Cut p95 latency on the orders endpoint from 820ms → 490ms by batching N+1 queries and adding a Redis layer.',
    timeAgo: '2d ago',
    impact: '−330ms p95 on hot path',
    tags: ['Redis', 'PostgreSQL', 'Node'],
    problem: 'Order reads fanned out into dozens of SQL round-trips per request under peak traffic.',
    solution:
      'Introduced dataloader-style batching, partial materialized aggregates in Redis with TTL coherence, and stricter pagination defaults.',
    impactDetail: 'Median checkout read path dropped materially; infra cost per order plateaus despite 2× traffic skew.',
    codeSnippet:
      'export const loaders = {\n  order: batch(async (ids) => db.orders.in(idList(ids))),\n  lineItemsForOrder: batch(async (oids) =>\n    chunkMap(oids, (batch) => db.lineItems.byOrder(batch))\n  ),\n};',
    devNote: 'Ran load tests via k6; regression guard in CI on p95 thresholds.',
    displayLine:
      '[PERFORMANCE] Cut p95 latency on the orders endpoint from 820ms → 490ms by batching N+1 queries and adding a Redis layer.',
  },
  {
    id: 'post-2',
    iconType: 'plug',
    category: 'INTEGRATION',
    title: 'Unified OAuth for B2B partners',
    summary:
      'RFC-compliant token exchange + scoped webhooks trimmed onboarding from 14 days → 6 while improving audit coverage.',
    timeAgo: '1w ago',
    impact: 'Onboarding SLA −43%',
    tags: ['OAuth2', 'Webhooks', 'Security'],
    problem: 'Each partner demanded bespoke auth flows and callback URLs; rotations were manual and brittle.',
    solution:
      'Added dynamic client registration guarded by tiered approvals, JWKS-backed signing, and HMAC webhook receipts with retries.',
    impactDetail:
      'Support tickets referencing auth dipped 38% QoQ; security review passed without major remediations.',
    codeSnippet:
      'app.post("/token", ratelimit, async (req, res) => {\n  const grant = await tokenService.issue(req.body, { audience: ALLOWED_AUD });\n  res.json({ access_token: grant.token, expires_in: grant.ttl });\n});',
    devNote: 'Partner-facing Postman collections versioned beside OpenAPI artifact.',
    displayLine:
      '[INTEGRATION] RFC-compliant token exchange + scoped webhooks streamlined partner onboarding dramatically.',
  },
  {
    id: 'post-3',
    iconType: 'wrench',
    category: 'DX',
    title: 'Local dev parity for event pipeline',
    summary:
      'Docker Compose stack mirrors prod topics and retries; onboarding doc shrank from 42 steps → 11 with health dashboard.',
    timeAgo: '2w ago',
    impact: 'Mean time-to-first-run 18 min',
    tags: ['Docker', 'Kafka', 'DX'],
    problem: 'New engineers hit divergent payloads and zombie consumers when developing against mocks.',
    solution:
      'Packaged infra as compose profiles plus seed fixtures; added `dev doctor` CLI to surface mismatched schema hashes.',
    impactDetail: 'Median PR cycle for pipeline changes shortened; fewer flaky CI incidents from stale local state.',
    codeSnippet:
      'tasks:\n  up: docker compose --profile streaming up\n  topics: kafka-topics reconcile --manifest topics.yaml',
    devNote: 'Integrated with Tilt optional for larger teams.',
    displayLine:
      '[DX] Docker Compose parity + health dashboard cut local setup friction for the event pipeline squad.',
  },
  {
    id: 'post-4',
    iconType: 'database',
    category: 'ARCHITECTURE',
    title: 'Sharded ingestion for telemetry spikes',
    summary:
      'Partitioned ingest workers per tenant cohort with backlog-aware autoscaled consumers—no noisy-neighbor regressions.',
    timeAgo: '3w ago',
    impact: '0 loss events @ 18× spike',
    tags: ['Kafka', 'SRE', 'AWS'],
    problem: 'Shared consumer group caused backlog oscillation whenever one tenant spiked ingestion volume.',
    solution:
      'Introduced hashed routing to dedicated shards with soft quotas; lag metrics drive autoscale per cohort.',
    impactDetail:
      'Blackout drills showed sustained healthy lag; alerting noise cut by consolidating on SLO-based burn rates.',
    codeSnippet:
      'const shard = hashTenant(event.tenantId) % cohorts;\npublish(`ingest.${shard}`, event);',
    devNote: 'Backpressure signaled via envoy-style retry budgets downstream.',
    displayLine:
      '[ARCHITECTURE] Tenant-aware ingestion shards stabilized queues during telemetry surges.',
  },
];
