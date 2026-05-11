import { useId } from 'react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { profile } from '../../data/profileData';
import { cn } from '../../utils/helpers';

function CircuitPattern({ patternId }) {
  return (
    <svg
      className="absolute inset-y-0 right-0 h-full w-[72%] text-white/30"
      aria-hidden
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20h14M26 20h14M20 0v14M20 26v14" fill="none" stroke="currentColor" strokeWidth="0.55" />
          <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.55" />
          <path
            d="M6 6h6v6H6zM28 6h6v6h-6zM6 28h6v6H6zM28 28h6v6h-6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
            opacity="0.65"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2" strokeWidth="2" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a8 8 0 01-8 8H8l-5 3v-9a8 8 0 018-8h8a8 8 0 018 8z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
      />
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M8 13h8M8 17h6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.55 2.37 1.1 2.95.84.09-.67.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.52 9.52 0 0112 6.82c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export default function Sidebar({ developerMode = false }) {
  const patternId = useId().replace(/:/g, '');

  return (
    <aside
      className={cn(
        'mx-auto w-full max-w-[286px] lg:mx-0',
        'lg:sticky lg:top-20 lg:self-start',
        developerMode && 'rounded-2xl dev-outline p-1'
      )}
    >
      {developerMode && (
        <div className="mb-3 flex justify-center sm:justify-start">
          <Badge tone="warning" className="font-mono text-[10px]">
            ProfileCard
          </Badge>
        </div>
      )}
      <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        {/* Header: solid blue left, circuit pattern on the right */}
        <div className="relative h-[100px] overflow-hidden rounded-t-[11px] bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600 from-35% to-transparent to-100%" />
          <CircuitPattern patternId={`circuit-${patternId}`} />
        </div>

        <div className="relative -mt-[52px] flex flex-col px-4 pb-5 pt-0">
          <img
            src={profile.avatarUrl}
            alt=""
            className="h-[88px] w-[88px] rounded-full border-[5px] border-white object-cover shadow-md ring-1 ring-slate-200/80 dark:border-slate-900 dark:ring-slate-700"
          />
          <h1 className="mt-4 text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">{profile.title}</p>
          <p className="mt-2.5 text-[13px] leading-snug text-slate-500 dark:text-slate-400">{profile.tagline}</p>
          <div className="mt-3 flex gap-1.5 text-[12px] text-slate-500 dark:text-slate-400">
            <PinIcon />
            <span>{profile.locationLabel}</span>
          </div>
          {profile.openToWork && (
            <div className="w-fit mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-200/90 dark:bg-emerald-950/50 dark:text-emerald-200 dark:ring-emerald-800">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
              Open to work
            </div>
          )}
          <div className="mt-5 grid w-full grid-cols-3 gap-1.5">
            <Button
              as="a"
              href={profile.contactHref}
              className="min-h-[38px] w-full justify-center gap-1 px-1.5 py-2 text-[11px] font-semibold leading-tight"
            >
              {/* <MessageIcon /> */}
              Contact
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              variant="secondary"
              className="min-h-[38px] w-full justify-center gap-1 border-slate-300 bg-white px-1.5 py-2 text-[11px] font-semibold leading-tight text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {/* <DocumentIcon /> */}
              Résumé
            </Button>
            <Button
              as="a"
              href={profile.githubUrl}
              variant="secondary"
              className="min-h-[38px] w-full justify-center gap-1 border-slate-300 bg-white px-1.5 py-2 text-[11px] font-semibold leading-tight text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              target="_blank"
              rel="noreferrer"
            >
              {/* <GitHubIcon /> */}
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
