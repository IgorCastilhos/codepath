import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { HomePage } from './pages/HomePage';
import { PhasePage } from './pages/PhasePage';
import { ChapterPage } from './pages/ChapterPage';
import { VideoPage } from './pages/VideoPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/phase/:id" element={<PhasePage />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
          <Route path="/chapter/:id/video/:resourceId" element={<VideoPage />} />
          <Route path="/my-content" element={<PlaceholderPage titleKey="myContent" descKey="myContentDesc" />} />
          <Route path="/catalog" element={<PlaceholderPage titleKey="catalog" descKey="catalogDesc" />} />
          <Route path="/projects" element={<PlaceholderPage titleKey="projects" descKey="projectsDesc" />} />
          <Route path="/events" element={<PlaceholderPage titleKey="events" descKey="eventsDesc" />} />
          <Route path="/forum" element={<PlaceholderPage titleKey="forum" descKey="forumDesc" />} />
          <Route path="/help" element={<PlaceholderPage titleKey="help" descKey="helpDesc" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
