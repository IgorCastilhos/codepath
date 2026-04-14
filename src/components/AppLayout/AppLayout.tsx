import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';
import { useSidebarCollapsed } from '../../hooks/use-sidebar-collapsed';
import styles from './AppLayout.module.css';

export function AppLayout() {
  const { collapsed, toggle } = useSidebarCollapsed();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const overlayMode = pathname.startsWith('/chapter/');

  return (
    <div className={`${styles.layout} ${collapsed ? styles.sidebarCollapsed : ''} ${overlayMode ? styles.overlayMode : ''}`}>
      <Sidebar
        collapsed={overlayMode ? false : collapsed}
        mobileOpen={overlayMode ? mobileOpen : mobileOpen}
        onToggle={overlayMode ? () => setMobileOpen(false) : toggle}
        onMobileClose={() => setMobileOpen(false)}
        overlay={overlayMode}
      />
      <TopBar
        onMenuClick={() => setMobileOpen((o) => !o)}
        overlayMode={overlayMode}
        drawerOpen={mobileOpen}
      />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
