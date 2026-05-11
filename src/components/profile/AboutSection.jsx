import Card from '../common/Card';
import SectionHeader from '../common/SectionHeader';
import { profile } from '../../data/profileData';

export default function AboutSection({ developerMode = false }) {
  return (
    <section aria-labelledby="about-heading">
      <SectionHeader
        eyebrow="Narrative"
        title="How I think about engineering"
        description="Systems, interfaces, and the glue between—documented clearly enough for the next teammate to move fast."
        developerMode={developerMode}
        devName="AboutSection"
      />
      <Card>
        <h3 id="about-heading" className="sr-only">
          About narrative
        </h3>
        <p className="text-sm leading-relaxed text-slate-700">
          {profile.bio} I gravitate toward problems where trimming milliseconds and clarifying contracts changes how the whole
          squad ships.
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <li className="rounded-xl bg-brand-50/60 px-3 py-2 ring-1 ring-brand-100">
            Prefer incremental migrations with rollback levers—not big-bang rewrites.
          </li>
          <li className="rounded-xl bg-slate-50 px-3 py-2 ring-1 ring-slate-100">
            Measure in production-grade signals (Core Web Vitals, error budgets), not vibes.
          </li>
        </ul>
      </Card>
    </section>
  );
}
