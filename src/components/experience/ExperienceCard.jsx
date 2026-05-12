import { useState } from 'react';
import ShowAllButton from '../common/ShowAllButton';
import { cn, formatDuration } from '../../utils/helpers';

function ArrowBullet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 dark:text-brand-400" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M16 7v6m0-6H10" />
    </svg>
  );
}

export default function ExperienceCard({ exp, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const hasAchievements = Array.isArray(exp.achievements) && exp.achievements.length > 0;
  const hasMetrics = Array.isArray(exp.metrics) && exp.metrics.length > 0;
  const hasDetails = hasAchievements || hasMetrics;
  const detailsId = `exp-details-${exp.id}`;

  return (
    <div className={cn(!isLast && 'mb-8 border-b border-slate-100 pb-8 dark:border-slate-800')}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{exp.company}</p>
        </div>
        <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          {formatDuration(exp.start, exp.end)}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{exp.systemContext}</p>

      {hasDetails && expanded && (
        <div id={detailsId}>
          {hasAchievements && (
            <ul className="mt-4 space-y-2.5">
              {exp.achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <ArrowBullet />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          )}
          {hasMetrics && (
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 ring-1 ring-brand-100 dark:bg-brand-950/60 dark:text-brand-200 dark:ring-brand-900"
                >
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {hasDetails && (
        <div className="mt-5">
          <ShowAllButton
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            controls={detailsId}
            label="Show detailed experience"
            expandedLabel="Hide details"
          />
        </div>
      )}
    </div>
  );
}
