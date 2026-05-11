export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React & ecosystem', level: 92, usedInProjects: 6 },
      { name: 'Web performance', level: 88, usedInProjects: 5 },
      { name: 'Accessible UI', level: 85, usedInProjects: 4 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js services', level: 78, usedInProjects: 4 },
      { name: 'GraphQL BFFs', level: 72, usedInProjects: 2 },
      { name: 'API design & contracts', level: 80, usedInProjects: 5 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platform',
    skills: [
      { name: 'CI/CD & release safety', level: 82, usedInProjects: 5 },
      { name: 'Observability (OTel)', level: 76, usedInProjects: 3 },
      { name: 'Design systems', level: 84, usedInProjects: 4 },
    ],
  },
];

/** Map canonical skill keys to project usage counts for sidebar preview */
export const topSkillsPreview = [
  { name: 'React', count: 6 },
  { name: 'Performance', count: 5 },
  { name: 'Node', count: 4 },
  { name: 'TypeScript', count: 3 },
];
