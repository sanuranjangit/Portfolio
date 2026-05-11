import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import Card from '../common/Card';
import { projects } from '../../data/projectsData';

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export default function ProjectsSection({ developerMode = false, id = 'projects' }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Card hover={false} padding="p-6 sm:p-7">
        <SectionHeader
          id="projects-heading"
          title="Featured projects"
          icon={<StackIcon />}
          developerMode={developerMode}
          devName="ProjectsSection"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} developerMode={developerMode} />
          ))}
        </div>
      </Card>
    </section>
  );
}
