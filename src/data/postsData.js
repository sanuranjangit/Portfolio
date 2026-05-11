export const posts = [
  {
    id: 'post-1',
    iconType: 'bolt',
    category: 'PERFORMANCE',
    title: 'Improved search performance by 50%',
    summary:
      'Boosted product search speed by 50% using optimized state management, memoization, and reduced re-renders in React.',
    timeAgo: 'Recent',
    impact: '50% faster search',
    tags: ['React', 'Redux', 'Performance'],
    problem:
      'Search experience was sluggish due to unnecessary component re-renders and inefficient state updates.',
    solution:
      'Applied memoization, lazy loading, and optimized Redux state updates to minimize re-renders and improve responsiveness.',
    impactDetail:
      'Users experienced faster product discovery, contributing to improved engagement and smoother UX.',
    codeSnippet:
      'const memoizedResults = useMemo(() => filterProducts(products, query), [products, query]);',
    devNote:
      'Used React DevTools profiler to identify bottlenecks and validate improvements.',
    displayLine:
      '[PERFORMANCE] Improved product search speed by 50% through optimized React rendering and state management.',
  },

  {
    id: 'post-2',
    iconType: 'plug',
    category: 'PRODUCT',
    title: 'Achieved 82% vendor conversion in 3 months',
    summary:
      'Re-engineered My Easy Monogram platform with a real-time 2D design studio, driving massive vendor onboarding success.',
    timeAgo: '1y ago',
    impact: '82% vendor conversion',
    tags: ['React', 'Node.js', 'Canvas'],
    problem:
      'Vendors struggled to visualize custom products, leading to low conversion and drop-offs.',
    solution:
      'Built an interactive 2D canvas-based design studio with real-time previews and seamless backend integration.',
    impactDetail:
      'Onboarded 1000+ vendors in 3 months with significantly higher engagement and satisfaction.',
      codeSnippet:
      'stage.on("dragend transformend", () => {\n  const json = stage.toJSON();\n  updatePreview(json);\n});',
    devNote:
      'Focused heavily on UX responsiveness and real-time feedback loops.',
    displayLine:
      '[PRODUCT] Built real-time customization studio driving 82% vendor conversion in 3 months.',
  },

  {
    id: 'post-3',
    iconType: 'wrench',
    category: 'DX',
    title: 'Led React 19 & Next.js upgrade',
    summary:
      'Migrated legacy codebase to modern React patterns and upgraded Next.js, improving performance and maintainability.',
    timeAgo: 'Recent',
    impact: 'Cleaner architecture',
    tags: ['Next.js', 'React', 'TypeScript'],
    problem:
      'Legacy components and outdated dependencies caused build issues and performance bottlenecks.',
    solution:
      'Refactored components, adopted modern React patterns, and resolved runtime/build issues during upgrade.',
    impactDetail:
      'Improved developer productivity, reduced bugs, and ensured long-term scalability.',
      codeSnippet:
      'const dataPromise = fetch("/api/data").then(res => res.json());\n\nfunction Component() {\n  const data = use(dataPromise);\n\n  return <div>{data.title}</div>;\n}',
    devNote:
      'Handled production migration carefully with staged rollouts and testing.',
    displayLine:
      '[DX] Modernized codebase with React 19 & Next.js upgrade for better performance and scalability.',
  },

  {
    id: 'post-4',
    iconType: 'database',
    category: 'UX',
    title: 'Boosted engagement by 25% with UI improvements',
    summary:
      'Built responsive, pixel-perfect UIs from Figma designs, improving engagement and conversion rates.',
    timeAgo: '2y ago',
    impact: '+25% engagement',
    tags: ['React', 'UI/UX', 'Figma'],
    problem:
      'Inconsistent UI and poor responsiveness were affecting user engagement and conversions.',
    solution:
      'Developed responsive components, improved layout consistency, and optimized rendering performance.',
    impactDetail:
      'Achieved 25% engagement boost, 15% conversion lift, and faster load times.',
    codeSnippet:
      '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">...</div>',
    devNote:
      'Worked closely with designers to ensure pixel-perfect implementation.',
    displayLine:
      '[UX] Delivered responsive UI improvements resulting in 25% engagement growth.',
  },
];
