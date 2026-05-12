export const projects = [
  {
    id: 'proj-monogram',
    slug: 'my-easy-monogram',
    title: 'My Easy Monogram — Customized Product Platform',
    tagline:
      'Interactive product customization platform with real-time previews driving massive vendor onboarding.',
    thumbnail: '',
    tech: ['React', 'Node.js', 'Canvas', 'Redux' , 'Konva'],
    demoUrl: 'https://myeasymonogram.com/',
    githubUrl: null,
    highlights: [
      '82% vendor conversion in 3 months',
      'Real-time 2D customization studio',
    ],
    overview:
      'A scalable product customization platform enabling vendors to design and preview personalized products in real time.',
    architecture:
      'React frontend with canvas-based rendering, backed by Node.js APIs handling product configurations and persistence.',
    challenges:
      'Ensuring smooth real-time rendering and state synchronization for complex product configurations.',
    decisions:
      'Used optimized state management and canvas rendering techniques to deliver instant feedback without performance lag.',
    relatedSkillSlugs: ['react', 'node', 'redux'],
  },

  {
    id: 'proj-breathing-ai',
    slug: 'breathing-ai-ux',
    title: 'Breathing AI — UX Redesign',
    tagline:
      'End-to-end UX revamp improving usability, engagement, and overall user satisfaction.',
    thumbnail: '',
    tech: ['React', 'UX', 'TypeScript'],
    demoUrl: 'https://www.breathing.ai/',
    githubUrl: null,
    highlights: [
      '60% improvement in user feedback',
      'Mentored 3 junior developers',
    ],
    overview:
      'Redesigned the product experience focusing on usability, accessibility, and visual consistency.',
    architecture:
      'Component-driven React architecture with reusable UI patterns and improved state handling.',
    challenges:
      'Aligning business requirements with user expectations while maintaining design consistency. Additionally, handled timing-sensitive interactions within a browser extension environment using browser APIs like setTimeout, ensuring accurate and smooth user experience despite background execution constraints.',
    decisions:
      'Introduced reusable design components and improved UX flows based on user feedback and testing.',
    relatedSkillSlugs: ['react', 'ux'],
  },

  {
    id: 'proj-inventory',
    slug: 'shopify-inventory-alert',
    title: 'Shopify Inventory Alert System',
    tagline:
      'Real-time inventory alert system improving conversions and user retention for e-commerce.',
    thumbnail: '',
    tech: ['React', 'Redux', 'Shopify Polaris'],
    demoUrl: 'https://www.discocrate.com/',
    githubUrl: null,
    highlights: [
      '25% conversion uplift',
      '30% retention increase',
    ],
    overview:
      'Built an inventory alert system enabling users to track product availability and receive updates.',
    architecture:
      'React + Redux frontend integrated with Shopify Polaris for consistent UI and scalable state management.',
    challenges:
      'Handling real-time updates and ensuring UI consistency across different product states.',
    decisions:
      'Used Redux for predictable state updates and optimized rendering to ensure smooth UX.',
    relatedSkillSlugs: ['react', 'redux'],
  },

  {
    id: 'proj-next-upgrade',
    slug: 'pandadoc-netsuite-integration',
    title: 'PandaDoc & NetSuite Integration Platform',
    tagline: 'Built a scalable integration platform connecting PandaDoc and NetSuite with a modern React 19 and Next.js frontend.',
    thumbnail: '',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Zustand'],
    demoUrl: null,
    githubUrl: null,
    highlights: [
      'Led Next.js upgrade and React 19 migration with zero downtime',
      'Resolved build/runtime issues from breaking changes across the stack',
      'Refactored legacy components adopting modern React 19 patterns',
      'Managed production releases, hotfixes, and branch synchronization',
      'Improved performance and code quality through clean architecture and reusable component design',
    ],
    overview:
      'Developed and maintained a full-stack integration platform connecting PandaDoc and NetSuite, built with React 19, Next.js, TypeScript, and Zustand. Focused on scalable frontend architecture, performance optimization, and seamless cross-system data flow.',
    architecture:
      'Frontend built with Next.js (App Router) and React 19, using Zustand for lightweight global state management. Component structure follows a modular, reusable design pattern. Integration layer communicates with PandaDoc and NetSuite APIs via REST, coordinated through Node.js/Express backend services.',
    challenges:
      'Handling breaking changes introduced by React 19 and Next.js upgrades while maintaining production stability. Ensuring reliable bi-directional data sync between PandaDoc and NetSuite with differing data models.',
    decisions:
      'Chose Zustand over Redux for simpler, boilerplate-free state management suited to integration workflows. Adopted an incremental migration strategy — upgrading and testing module by module — to avoid regressions and ensure zero downtime in production.',
    relatedSkillSlugs: ['react', 'nextjs', 'typescript', 'zustand', 'nodejs'],
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

