import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';
import styles from './AppLayout.module.css';

export function AppLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <TopBar
        onMenuClick={() => setDrawerOpen((o) => !o)}
        drawerOpen={drawerOpen}
      />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
