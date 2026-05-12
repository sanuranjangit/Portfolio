function ChevronIcon({ expanded }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ShowAllButton({
  expanded,
  onToggle,
  total,
  controls,
  label,
  expandedLabel,
  className = '',
}) {
  const collapsedText = label ?? 'Show all';
  const expandedText = expandedLabel ?? 'Show less';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controls}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 ${className}`}
    >
      {expanded ? expandedText : `${collapsedText}${typeof total === 'number' ? ` (${total})` : ''}`}
      <ChevronIcon expanded={expanded} />
    </button>
  );
}
