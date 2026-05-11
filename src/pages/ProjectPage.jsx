import { useParams, Link, useOutletContext } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import ProjectDetail from '../components/projects/ProjectDetail';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function ProjectPage() {
  const { slug } = useParams();
  const layout = useOutletContext();
  const developerMode = Boolean(layout?.developerMode);
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <Card hover={false}>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Project not found</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">No case study matches this slug.</p>
        <Button as={Link} to="/" variant="secondary" className="mt-4">
          ← Back home
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button as={Link} to="/#projects" variant="ghost" className="px-2 text-sm">
          ← Projects
        </Button>
        {developerMode && (
          <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-amber-200">ProjectPage · lazy</span>
        )}
      </div>
      <ProjectDetail project={project} developerMode={developerMode} />
    </div>
  );
}
