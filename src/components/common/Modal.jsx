import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import { cn } from '../../utils/helpers';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  developerMode = false,
  devLabel = 'Modal',
}) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] transition-opacity dark:bg-slate-950/70"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div
        className={cn(
          'relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-lift dark:border-slate-700 dark:bg-slate-900',
          developerMode && 'dev-outline'
        )}
      >
        {developerMode && (
          <span className="absolute right-3 top-3 rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-amber-200 dark:bg-slate-800">
            {devLabel}
          </span>
        )}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <h2 id="modal-title" className="pr-8 text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h2>
          <Button type="button" variant="ghost" className="shrink-0 px-2 py-1" onClick={onClose}>
            Close
          </Button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>,
    document.body
  );
}
