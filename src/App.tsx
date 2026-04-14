import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { HomePage } from './pages/HomePage';
import { ChapterPage } from './pages/ChapterPage';
import { VideoPage } from './pages/VideoPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
          <Route path="/chapter/:id/video/:resourceId" element={<VideoPage />} />
          <Route path="/my-content" element={<PlaceholderPage title="My Content" description="Track your enrolled courses and saved content." />} />
          <Route path="/catalog" element={<PlaceholderPage title="Catalog" description="Browse all available courses and learning paths." />} />
          <Route path="/projects" element={<PlaceholderPage title="Projects" description="Hands-on projects to apply what you've learned." />} />
          <Route path="/events" element={<PlaceholderPage title="Events" description="Upcoming workshops, meetups, and live sessions." />} />
          <Route path="/forum" element={<PlaceholderPage title="Forum" description="Discuss topics and get help from the community." />} />
          <Route path="/help" element={<PlaceholderPage title="Help" description="Guides, FAQ, and support resources." />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
