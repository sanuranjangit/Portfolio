/**
 * @param {...(string | false | undefined | null)} classes
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/** @type {Record<string, string>} */
const TAG_COLORS = {
  React: 'bg-sky-100 text-sky-800 ring-sky-200',
  JavaScript: 'bg-amber-100 text-amber-900 ring-amber-200',
  Performance: 'bg-violet-100 text-violet-800 ring-violet-200',
  Node: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
  TypeScript: 'bg-blue-100 text-blue-800 ring-blue-200',
  CSS: 'bg-pink-100 text-pink-800 ring-pink-200',
  Webpack: 'bg-cyan-100 text-cyan-800 ring-cyan-200',
  GraphQL: 'bg-fuchsia-100 text-fuchsia-800 ring-fuchsia-200',
  AWS: 'bg-orange-100 text-orange-900 ring-orange-200',
  Docker: 'bg-slate-200 text-slate-800 ring-slate-300',
};

const DEFAULT_TAG = 'bg-slate-100 text-slate-700 ring-slate-200';

export function tagChipClass(tag) {
  return TAG_COLORS[tag] || DEFAULT_TAG;
}

export function formatDuration(start, end) {
  return `${start} — ${end}`;
}
