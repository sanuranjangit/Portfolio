import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import Card from '../common/Card';
import ShowAllButton from '../common/ShowAllButton';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { projects } from '../../data/projectsData';

const MOBILE_VISIBLE = 2;

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export default function ProjectsSection({ developerMode = false, id = 'projects' }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [expanded, setExpanded] = useState(false);
  const collapse = isMobile && !expanded;
  const hasMore = isMobile && projects.length > MOBILE_VISIBLE;
  const visibleProjects = collapse ? projects.slice(0, MOBILE_VISIBLE) : projects;

  return (
    <section id={id} className="scroll-mt-24">
      <Card hover={false} padding="p-6 sm:p-7">
        <SectionHeader
          id="projects-heading"
          title="Featured projects"
          icon={<StackIcon />}
          developerMode={developerMode}
          devName="ProjectsSection"
          trailing={
            hasMore && (
              <ShowAllButton
                expanded={expanded}
                onToggle={() => setExpanded((v) => !v)}
                total={projects.length}
                controls="projects-grid"
              />
            )
          }
        />
        <div id="projects-grid" className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))]">
          {visibleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} developerMode={developerMode} />
          ))}
        </div>
      </Card>
    </section>
  );
}
