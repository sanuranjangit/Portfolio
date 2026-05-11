import Modal from '../common/Modal';
import { tagChipClass, cn } from '../../utils/helpers';

export default function PostDetailModal({
  isOpen,
  onClose,
  post,
  developerMode = false,
}) {
  if (!post) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={post.title}
      developerMode={developerMode}
      devLabel="PostDetailModal"
    >
      <div className="space-y-6">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Problem</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{post.problem}</p>
        </section>
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Solution</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{post.solution}</p>
        </section>
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Impact</h3>
          <p className="mt-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">{post.impactDetail}</p>
        </section>
        {developerMode && post.devNote && (
          <section className="rounded-xl border border-amber-300/80 bg-amber-50/90 p-4 dark:border-amber-700 dark:bg-amber-950/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">Developer addendum</h3>
            <p className="mt-2 font-mono text-xs text-amber-950 dark:text-amber-100">{post.devNote}</p>
          </section>
        )}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Code snippet</h3>
          <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs leading-relaxed text-slate-100 shadow-inner dark:ring-1 dark:ring-slate-700">
            <code>{post.codeSnippet}</code>
          </pre>
        </section>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className={cn('rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset', tagChipClass(t))}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
}
