import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers';

function LogoMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm ring-2 ring-brand-500/40 dark:bg-brand-500">
      <span className="font-mono text-sm font-bold leading-none tracking-tighter">&lt;/&gt;</span>
    </span>
  );
}

export default function Navbar({
  developerMode = false,
  onToggleDev,
  darkMode = false,
  onToggleDark,
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-colors duration-500 ease-in-out dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-[1248px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
          <LogoMark />
          <span className="text-lg tracking-tight">AS</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Commented out for now as I don't need developer mode for first release */}
          {/* <div className="flex items-center gap-3">
            <span className="hidden text-sm font-medium text-slate-600 dark:text-slate-300 sm:inline">Dev mode</span>
            <button
              type="button"
              role="switch"
              aria-checked={developerMode}
              aria-label="Toggle developer mode"
              onClick={onToggleDev}
              className={cn(
                'relative h-8 w-[3.25rem] shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:focus-visible:outline-brand-500',
                developerMode ? 'bg-brand-600 dark:bg-brand-500' : 'bg-slate-200 dark:bg-slate-700'
              )}
            >
              <span
                className={cn(
                  'absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200',
                  developerMode ? 'left-[calc(100%-1.625rem)]' : 'left-1'
                )}
              />
            </button>
          </div> */}
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            {darkMode ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
