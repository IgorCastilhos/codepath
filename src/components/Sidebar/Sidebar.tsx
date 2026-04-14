import { Link, useLocation } from 'react-router-dom';
import {
  Home, BookMarked, Library, FolderKanban,
  CalendarDays, MessageSquare, Users, HelpCircle,
} from 'lucide-react';
import styles from './Sidebar.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

const NAV_SECTIONS = [
  {
    heading: undefined as string | undefined,
    items: [
      { to: '/', label: 'Home', icon: Home },
    ],
  },
  {
    heading: 'Progress',
    items: [
      { to: '/my-content', label: 'My Content', icon: BookMarked },
    ],
  },
  {
    heading: 'Learning',
    items: [
      { to: '/catalog', label: 'Catalog', icon: Library },
      { to: '/projects', label: 'Projects', icon: FolderKanban },
      { to: '/events', label: 'Events', icon: CalendarDays },
      { to: '/forum', label: 'Forum', icon: MessageSquare },
    ],
  },
  {
    heading: 'Links',
    items: [
      { href: 'https://discord.gg/', label: 'Community', icon: Users },
      { to: '/help', label: 'Help', icon: HelpCircle },
    ],
  },
];

interface NavItemInternal {
  to: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface NavItemExternal {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

type NavItem = NavItemInternal | NavItemExternal;

function isInternal(item: NavItem): item is NavItemInternal {
  return 'to' in item;
}

export function Sidebar({ open, onClose }: Props) {
  const { pathname } = useLocation();

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <>
      {open && (
        <div className={styles.backdrop} onClick={onClose} aria-hidden />
      )}
      <aside
        className={`${styles.sidebar} ${open ? styles.open : ''}`}
      >
        <div className={styles.header}>
          <Link to="/" className={styles.brand} onClick={onClose}>
            <span className={styles.brandIcon} aria-hidden="true">
              <span /><span /><span />
            </span>
            <span>CODEPATH</span>
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_SECTIONS.map((section, si) => (
            <div key={si} className={styles.section}>
              {section.heading && (
                <span className={styles.sectionHeading}>{section.heading}</span>
              )}
              <ul className={styles.list}>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  if (isInternal(item)) {
                    const active = isActive(item.to);
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className={`${styles.link} ${active ? styles.active : ''}`}
                          onClick={onClose}
                        >
                          <Icon size={18} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  }
                  const ext = item as NavItemExternal;
                  return (
                    <li key={ext.label}>
                      <a
                        href={ext.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.link}
                      >
                        <Icon size={18} />
                        <span>{ext.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
