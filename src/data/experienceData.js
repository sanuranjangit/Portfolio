export const experiences = [
  {
    id: 'exp-1',
    company: 'Streamline Payments',
    role: 'Senior Software Engineer',
    location: '',
    start: '2023',
    end: 'Present',
    impactMetric: 'Lead engineer for outbound delivery primitives',
    systemContext:
      'System: Payments & integrations platform serving 4M+ MAU; owns webhook fan-out & signature verification surfaces.',
    achievements: [
      'Shipped deterministic replay tooling with idempotent sink adapters—recovery time halved vs manual redrives.',
      'Partitioned ingestion workers per tenant cohort; backlog-aware autoscale eliminated noisy-neighbor regressions.',
      'Introduced SLO dashboards on webhook success + signing latency tied to paging policy.',
    ],
    metrics: [
      'Webhook delivery: 99.6% → 99.98%',
      'Deploy frequency: 2/wk → 12/wk',
      'Incident MTTR: −47%',
    ],
  },
  {
    id: 'exp-2',
    company: 'Northwind SaaS',
    role: 'Software Engineer II',
    location: '',
    start: '2020',
    end: '2023',
    impactMetric: 'Core billing & usage metering services',
    systemContext:
      'System: Multi-tenant revenue platform with Postgres + CDC into analytics lake; Stripe + custom gateways.',
    achievements: [
      'Re-architected usage aggregation with rollup tables + watermarking—reporting SLA met under 50GB/day ingest.',
      'Built contract-aware proration simulator used by Solutions before deals close.',
      'Authored playbook for degraded-mode payouts during PSP incidents.',
    ],
    metrics: [
      'Monthly close automated: ~4 hrs → ~35 min review',
      'PSP failover drills: predictable <5 min cutoff',
    ],
  },
];
