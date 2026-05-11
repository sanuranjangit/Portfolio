import SectionHeader from '../common/SectionHeader';
import ActivityItem from './ActivityItem';
import Card from '../common/Card';
import { posts } from '../../data/postsData';


function BoltIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-4 w-4 text-primary" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
  );
}

export default function ActivityFeed({ developerMode = false, onOpenPost, id = 'feed' }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Card hover={false} padding="p-4 sm:p-5" className="overflow-hidden">
        <SectionHeader
          title="Engineering activity"
          trailing={null}
          icon={<BoltIcon />}
          developerMode={developerMode}
          devName="ActivityFeed"
        />
        <ul className="mt-2 space-y-3">
          {posts.map((post, i) => (
            <ActivityItem
              key={post.id}
              post={post}
              onOpen={onOpenPost}
              developerMode={developerMode}
              style={{ animationDelay: `${i * 60}ms` }}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
