import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { skillsGrid } from '../../data/skillsGridData';

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 4h12v17.5l-4.5-3.25L12 19l-1.5-1.25L6 21.5V4z"
      />
    </svg>
  );
}

function SkillGridCard({ skill }) {
  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm font-bold text-slate-900 dark:text-white">{skill.name}</span>
        <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">{skill.levelLabel}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-brand-700 transition-[width] dark:bg-brand-600"
          style={{ width: `${skill.progress}%` }}
        />
      </div>
      {skill.projectTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {skill.projectTags.map((tag) => (
            <span
              key={tag}
              className="inline-block max-w-full rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-medium leading-snug text-brand-800 ring-1 ring-brand-100/90 dark:bg-brand-950/60 dark:text-brand-200 dark:ring-brand-900"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillsGridSection({ developerMode = false, id = 'skills' }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Card hover={false} padding="p-6 sm:p-7">
        <SectionHeader
          id="skills-heading"
          title="Skills"
          icon={<BookmarkIcon />}
          developerMode={developerMode}
          devName="SkillsGridSection"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillsGrid.map((skill) => (
            <SkillGridCard key={skill.id} skill={skill} />
          ))}
        </div>
      </Card>
    </section>
  );
}
