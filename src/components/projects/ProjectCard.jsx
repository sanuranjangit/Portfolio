import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { cn } from '../../utils/helpers';

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
    </svg>
  );
}

function ProjectCard({ project, developerMode = false }) {
  return (
    <Card hover={false} className="relative flex flex-col overflow-hidden p-0 shadow-panel" padding="p-0">
      {developerMode && (
        <Badge tone="warning" className="absolute right-3 top-3 z-10 font-mono text-[10px]">
          ProjectCard
        </Badge>
      )}
      <div className="h-1 bg-gradient-to-r from-brand-500 via-brand-600 to-indigo-600" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200/80 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
          <Button as="a" href={project.demoUrl} className="px-3 py-1.5 text-xs">
            Live demo
            <ExternalIcon />
          </Button>
          <Button as="a" href={project.githubUrl} variant="secondary" className="px-3 py-1.5 text-xs" target="_blank" rel="noreferrer">
            GitHub
          </Button>
          <Button as={Link} to={`/projects/${project.slug}`} variant="secondary" className="px-3 py-1.5 text-xs">
            Deep dive
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default memo(ProjectCard);
