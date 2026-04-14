import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';
import { useSidebarCollapsed } from '../../hooks/use-sidebar-collapsed';
import styles from './AppLayout.module.css';

export function AppLayout() {
  const { collapsed, toggle } = useSidebarCollapsed();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={`${styles.layout} ${collapsed ? styles.sidebarCollapsed : ''}`}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggle={toggle}
        onMobileClose={() => setMobileOpen(false)}
      />
      <TopBar onMenuClick={() => setMobileOpen((o) => !o)} />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
