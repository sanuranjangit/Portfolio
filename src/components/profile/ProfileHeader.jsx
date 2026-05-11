import Button from '../common/Button';
import Badge from '../common/Badge';
import { profile } from '../../data/profileData';
import { cn } from '../../utils/helpers';

export default function ProfileHeader({ developerMode = false }) {
  return (
    <section
      className={cn(
        'relative',
        developerMode && 'rounded-3xl dev-outline p-3 -m-3'
      )}
    >
      {developerMode && (
        <Badge tone="warning" className="absolute right-4 top-4 z-10 font-mono text-[10px] sm:right-8 sm:top-8">
          ProfileHeader
        </Badge>
      )}
      <div className="rounded-3xl bg-gradient-to-br from-brand-500/25 via-brand-400/15 to-slate-200/40 p-[1px] shadow-soft transition-shadow hover:shadow-lift">
        <div className="rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="relative mx-auto shrink-0 sm:mx-0">
              <img
                src={profile.avatarUrl}
                alt=""
                className="h-28 w-28 rounded-2xl object-cover shadow-md ring-4 ring-white"
              />
              <span
                className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200"
                title="Availability"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                online
              </span>
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{profile.name}</h1>
                {profile.openToWork && <Badge tone="success">Open to work</Badge>}
              </div>
              <p className="mt-1 text-sm font-medium text-brand-700">{profile.title}</p>
              <p className="mt-3 text-base text-slate-600">{profile.tagline}</p>
              <p className="mt-4 text-sm text-slate-500">{profile.location}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <Button as="a" href={profile.contactHref}>
                  Contact
                </Button>
                <Button as="a" href={profile.resumeUrl} variant="secondary">
                  Résumé
                </Button>
                <Button as="a" href={profile.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
