import Badge from './Badge';
import { cn } from '../../utils/helpers';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  developerMode = false,
  devName,
  id,
  icon,
  trailing,
}) {
  return (
    <div
      id={id}
      className={cn(
        'mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between',
        developerMode && devName && 'relative rounded-xl dev-outline p-3 -m-3'
      )}
    >
      <div className="flex gap-4 items-center">
        {icon && (
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100/80 dark:bg-brand-950 dark:text-brand-400 dark:ring-brand-900">
            {icon}
          </span>
        )}
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            {eyebrow && (
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                {eyebrow}
              </span>
            )}
            {developerMode && devName && (
              <Badge tone="warning" className="font-mono">
                {devName}
              </Badge>
            )}
          </div>
          <p className="text-[16px] font-bold leading-snug tracking-tight text-slate-900 dark:text-white">{title}</p>
          {description && (
            <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-400">{description}</p>
          )}
        </div>
      </div>
      {(trailing || action) && <div className="flex shrink-0 flex-wrap items-center gap-2">{trailing || action}</div>}
    </div>
  );
}
