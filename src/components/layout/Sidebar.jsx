import { useId, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../common/Button';
import Badge from '../common/Badge';
import Modal from '../common/Modal';
import { profile } from '../../data/profileData';
import { cn } from '../../utils/helpers';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.11 2.06 2.06 0 010 4.11zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" aria-hidden>
      <rect x="9" y="9" width="11" height="11" rx="2" strokeWidth="2" />
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 15V5a2 2 0 012-2h10" />
    </svg>
  );
}

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

export default function Sidebar({ developerMode = false }) {
  const patternId = useId().replace(/:/g, '');
  const location = useLocation();
  const hideOnMobile = location.pathname.startsWith('/projects/');
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable; fail silently
    }
  };

  return (
    <aside
      className={cn(
        'w-full md:mx-0 md:max-w-[286px]',
        'md:sticky md:top-20 md:self-start',
        hideOnMobile && 'hidden md:block',
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

        <div className="relative -mt-[52px] flex flex-col px-4 pb-5 pt-0 sm:px-6 md:px-4">
          <div className="flex flex-col items-baseline md:items-stretch">
            <img
              src={profile.avatarUrl}
              alt=""
              className="h-[88px] w-[88px] shrink-0 rounded-full border-[5px] border-white object-cover shadow-md ring-1 ring-slate-200/80 dark:border-slate-900 dark:ring-slate-700"
            />
            <div className="min-w-0 mt-4 md:w-full">
              <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                {profile.name}
              </h1>
              <p className="mt-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">{profile.title}</p>
            </div>
          </div>
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
          <div className="mt-5 grid w-full grid-cols-3 gap-2 md:gap-1.5">
            <Button
              type="button"
              onClick={() => setContactOpen(true)}
              className="min-h-[40px] w-full justify-center gap-1 px-2 py-2 text-xs font-semibold leading-tight md:min-h-[38px] md:px-1.5 md:text-[11px]"
            >
              Contact
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open résumé in a new tab (PDF)"
              className="min-h-[40px] w-full justify-center gap-1 border-slate-300 bg-white px-2 py-2 text-xs font-semibold leading-tight text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:min-h-[38px] md:px-1.5 md:text-[11px]"
              variant="secondary"
            >
              Résumé
            </Button>
            <Button
              as="a"
              href={profile.githubUrl}
              variant="secondary"
              className="min-h-[40px] w-full justify-center gap-1 border-slate-300 bg-white px-2 py-2 text-xs font-semibold leading-tight text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:min-h-[38px] md:px-1.5 md:text-[11px]"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        title="Get in touch"
        developerMode={developerMode}
        devLabel="ContactModal"
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Reach out via email or connect with me on LinkedIn — happy to chat about roles, collaboration, or anything web.
        </p>
        <ul className="mt-5 space-y-3">
          <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 dark:bg-brand-950/60 dark:text-brand-300 dark:ring-brand-900">
              <MailIcon />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="block truncate text-sm font-medium text-slate-900 hover:text-brand-700 dark:text-white dark:hover:text-brand-300"
              >
                {profile.email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Copy email address"
            >
              <CopyIcon />
              {copied ? 'Copied' : 'Copy'}
            </button>
          </li>
          <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] ring-1 ring-[#0a66c2]/20 dark:bg-[#0a66c2]/20 dark:text-[#5fa9ff] dark:ring-[#0a66c2]/40">
              <LinkedInIcon />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                LinkedIn
              </p>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="block truncate text-sm font-medium text-slate-900 hover:text-brand-700 dark:text-white dark:hover:text-brand-300"
              >
                linkedin.com/in/anuranjan-shrivastava
              </a>
            </div>
            <Button
              as="a"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="shrink-0 px-2.5 py-1.5 text-xs"
            >
              Open
            </Button>
          </li>
        </ul>
      </Modal>
    </aside>
  );
}
