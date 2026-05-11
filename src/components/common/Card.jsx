import { cn } from '../../utils/helpers';

export default function Card({ children, className, padding = 'p-5', hover = true }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200/90 bg-white shadow-panel transition-colors duration-500 ease-in-out dark:border-slate-700/90 dark:bg-slate-900',
        hover &&
          'transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-lift dark:hover:shadow-brand-900/30',
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}
