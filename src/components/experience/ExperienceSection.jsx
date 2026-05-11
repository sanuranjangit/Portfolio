import SectionHeader from '../common/SectionHeader';
import ExperienceCard from './ExperienceCard';
import Card from '../common/Card';
import { experiences } from '../../data/experienceData';

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 13V8a2 2 0 00-2-2h-3V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2H5a2 2 0 00-2 2v5m18 0v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m18 0H3" />
    </svg>
  );
}

export default function ExperienceSection({ developerMode = false, id = 'experience' }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Card hover={false} padding="p-6 sm:p-7">
        <SectionHeader
          id="exp-heading"
          title="Experience"
          icon={<BriefcaseIcon />}
          developerMode={developerMode}
          devName="ExperienceSection"
        />
        <div className="mt-2">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} isLast={idx === experiences.length - 1} />
          ))}
        </div>
      </Card>
    </section>
  );
}
