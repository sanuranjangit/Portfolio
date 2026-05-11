import { useOutletContext } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import ActivityFeed from '../components/feed/ActivityFeed';
import PostDetailModal from '../components/feed/PostDetailModal';
import ProjectsSection from '../components/projects/ProjectsSection';
import SkillsGridSection from '../components/profile/SkillsGridSection';
import ExperienceSection from '../components/experience/ExperienceSection';
import RecommendationSection from '../components/profile/RecommendationSection';

export default function Home() {
  const layout = useOutletContext();
  const developerMode = Boolean(layout?.developerMode);
  const { isOpen, open, close, data } = useModal();

  return (
    <>
      <ActivityFeed developerMode={developerMode} onOpenPost={open} />
      <PostDetailModal isOpen={isOpen} onClose={close} post={data} developerMode={developerMode} />
      <ProjectsSection developerMode={developerMode} />
      <SkillsGridSection developerMode={developerMode} />
      <ExperienceSection developerMode={developerMode} />
      <RecommendationSection developerMode={developerMode} />
    </>
  );
}
