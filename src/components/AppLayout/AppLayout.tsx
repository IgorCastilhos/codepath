import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from '../../i18n';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';
import styles from './AppLayout.module.css';

export function AppLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>
        {t.topbar.skipToContent}
      </a>
      <Sidebar
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <TopBar
        onMenuClick={() => setDrawerOpen((o) => !o)}
        drawerOpen={drawerOpen}
      />
      <main id="main-content" className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
