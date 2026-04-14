import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { HomePage } from './pages/HomePage';
import { PhasePage } from './pages/PhasePage';
import { ChapterPage } from './pages/ChapterPage';
import { VideoPage } from './pages/VideoPage';
import { MyContentPage } from './pages/MyContentPage';
import { CatalogPage } from './pages/CatalogPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EventsPage } from './pages/EventsPage';
import { ForumPage } from './pages/ForumPage';
import { HelpPage } from './pages/HelpPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/phase/:id" element={<PhasePage />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
          <Route path="/chapter/:id/video/:resourceId" element={<VideoPage />} />
          <Route path="/my-content" element={<MyContentPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
