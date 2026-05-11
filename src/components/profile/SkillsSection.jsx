import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { skillCategories } from '../../data/skillsData';
import { cn } from '../../utils/helpers';

export default function SkillsSection({ developerMode = false, id = 'skills' }) {
  return (
    <section id={id} aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow="Capabilities"
        id="skills-heading"
        title="Skills"
        description="Grouped the way hiring managers scan—paired with breadth signals from shipped work."
        developerMode={developerMode}
        devName="SkillsSection"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {skillCategories.map((cat) => (
          <Card key={cat.id} className="border-slate-200/80">
            <h3 className="text-sm font-bold text-slate-900">{cat.label}</h3>
            <ul className="mt-4 space-y-4">
              {cat.skills.map((s) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="font-medium text-slate-800">{s.name}</span>
                    <Badge tone="brand" className="text-[10px] font-mono normal-case tracking-normal">
                      used in {s.usedInProjects} projects
                    </Badge>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={cn(
                        'h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-[width]',
                        developerMode ? 'opacity-95' : 'opacity-90'
                      )}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <p className="mt-1 text-right text-[11px] text-slate-500">{s.level}% depth</p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
