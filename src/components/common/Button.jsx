import { cn } from '../../utils/helpers';

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-700 active:scale-[0.98]',
  ghost:
    'text-brand-700 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-950/80 active:scale-[0.98]',
};

export default function Button({
  children,
  variant = 'primary',
  className,
  as: Comp = 'button',
  ...props
}) {
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:focus-visible:outline-brand-500',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
