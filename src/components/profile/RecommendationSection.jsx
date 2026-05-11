import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { recommendations } from '../../data/profileData';

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" aria-hidden>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21c3 0 7-1 7-8V5c-5 0-7 4-7 7v0M14 21c3 0 7-1 7-8V5c-5 0-7 4-7 7v0"
      />
    </svg>
  );
}

function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function RecommendationCard({ rec }) {
  const initials = initialsFromName(rec.author);

  return (
    <article className="flex flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
      <blockquote className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <span className="text-slate-400">“</span>
        {rec.body}
        <span className="text-slate-400">”</span>
      </blockquote>
      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800 dark:bg-brand-950 dark:text-brand-200"
          aria-hidden
        >
          {initials}
        </div>
        <div className="min-w-0 text-left">
          <p className="text-sm font-bold text-slate-900 dark:text-white">{rec.author}</p>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {rec.role}
            <span className="px-1 text-slate-400">·</span>
            {rec.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function RecommendationSection({ developerMode = false, id = 'recommendations' }) {
  if (!recommendations.length) return null;

  return (
    <section id={id} className="scroll-mt-24">
      <Card hover={false} padding="p-6 sm:p-7">
        <SectionHeader
          id="rec-heading"
          title="Recommendations"
          icon={<QuoteIcon />}
          developerMode={developerMode}
          devName="RecommendationSection"
        />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
          {recommendations.map((r) => (
            <RecommendationCard key={r.id} rec={r} />
          ))}
        </div>
      </Card>
    </section>
  );
}
