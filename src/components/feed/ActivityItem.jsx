import { memo } from 'react';
import Badge from '../common/Badge';
import { cn } from '../../utils/helpers';

const ICONS = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 21h8m-8-9h8M9 11V6a4 4 0 019 0v5M5 21h14"
      />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a5.5 5.5 0 10-8.48 8.47l-.57.56L3 21l6.64-3.04.57-.57a5.5 5.5 0 008.46-8.46l-4.5 4.5"
      />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" strokeWidth="2" />
      <path strokeWidth="2" d="M4 5.5v5c0 1.66 4 3 8 3s8-1.34 8-3v-5M4 10.5v5c0 1.66 4 3 8 3s8-1.34 8-3v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function ActivityItem({ post, onOpen, developerMode = false, style }) {
  const icon = ICONS[post.iconType] || ICONS.bolt;

  return (
    <li style={style} className="animate-fade-slide list-none">
      <button
        type="button"
        onClick={() => onOpen(post)}
        className={cn(
          'flex w-full items-start gap-4 rounded-xl border border-slate-200/90 bg-white p-4 text-left transition-all hover:border-brand-200 hover:shadow-soft dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-brand-900',
          developerMode && 'dark:hover:border-brand-800'
        )}
      >
        <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100/80 dark:bg-brand-950 dark:text-brand-400 dark:ring-brand-900">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{post.title}</h3>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {post.category}
            </span>
            {developerMode && (
              <Badge tone="warning" className="font-mono text-[9px]">
                ITEM
              </Badge>
            )}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{post.displayLine}</p>
          {developerMode && post.devNote && (
            <p className="mt-2 rounded-lg border border-dashed border-amber-400/50 bg-amber-50 px-2 py-1 font-mono text-[10px] text-amber-950 dark:bg-amber-950/40 dark:text-amber-100">
              {post.devNote}
            </p>
          )}
          <p className="mt-2 text-[11px] font-medium text-slate-400 dark:text-slate-500">{post.timeAgo}</p>
        </div>
        <span className="shrink-0 text-slate-400 dark:text-slate-600" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
    </li>
  );
}

export default memo(ActivityItem);
