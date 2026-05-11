import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { cn } from '../../utils/helpers';

export default function ProjectDetail({ project, developerMode = false }) {
  if (!project) return null;

  const showImage = Boolean(project.thumbnail);

  return (
    <div className="space-y-10">
      <section
        className={cn(
          'overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel dark:border-slate-800 dark:bg-slate-900',
          developerMode && 'dev-outline'
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden',
            showImage ? 'h-52 sm:h-64' : 'min-h-[12rem] bg-gradient-to-br from-brand-700 via-brand-800 to-indigo-950 pt-14 pb-12'
          )}
        >
          {showImage && (
            <>
              <img src={project.thumbnail} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/60 to-transparent" />
            </>
          )}
          {!showImage && (
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(255,255,255,0.2),transparent_55%)]" />
            </div>
          )}
          <div className={cn('relative flex flex-col justify-end px-6 pb-8 sm:px-8', showImage && 'absolute inset-x-0 bottom-0 pb-8')}>
            {developerMode && (
              <Badge tone="warning" className="mb-3 font-mono text-[10px]">
                ProjectDetail
              </Badge>
            )}
            <h1 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h1>
            <p className="mt-2 max-w-2xl text-sm text-white/85">{project.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button as="a" href={project.demoUrl}>
                Live demo
              </Button>
              <Button as="a" href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Overview" developerMode={developerMode} devName="Section · Overview" />
        <Card hover={false}>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.overview}</p>
        </Card>
      </section>

      <section>
        <SectionHeader title="Architecture" developerMode={developerMode} devName="Section · Architecture" />
        <Card hover={false}>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.architecture}</p>
        </Card>
      </section>

      <section>
        <SectionHeader title="Challenges" developerMode={developerMode} devName="Section · Challenges" />
        <Card hover={false}>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.challenges}</p>
        </Card>
      </section>

      <section>
        <SectionHeader title="Key decisions" developerMode={developerMode} devName="Section · Decisions" />
        <Card hover={false}>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.decisions}</p>
        </Card>
      </section>
    </div>
  );
}
