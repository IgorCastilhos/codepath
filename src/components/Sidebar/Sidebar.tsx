import { Link, useLocation } from 'react-router-dom';
import {
  Home, BookMarked, Library, FolderKanban,
  CalendarDays, MessageSquare, Users, HelpCircle,
} from 'lucide-react';
import { useTranslation } from '../../i18n';
import styles from './Sidebar.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface NavItemInternal {
  to: string;
  labelKey: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface NavItemExternal {
  href: string;
  labelKey: string;
  icon: React.ComponentType<{ size?: number }>;
}

type NavItem = NavItemInternal | NavItemExternal;

interface NavSection {
  headingKey?: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    items: [
      { to: '/', labelKey: 'home', icon: Home },
    ],
  },
  {
    headingKey: 'sectionProgress',
    items: [
      { to: '/my-content', labelKey: 'myContent', icon: BookMarked },
    ],
  },
  {
    headingKey: 'sectionLearning',
    items: [
      { to: '/catalog', labelKey: 'catalog', icon: Library },
      { to: '/projects', labelKey: 'projects', icon: FolderKanban },
      { to: '/events', labelKey: 'events', icon: CalendarDays },
      { to: '/forum', labelKey: 'forum', icon: MessageSquare },
    ],
  },
  {
    headingKey: 'sectionLinks',
    items: [
      { href: 'https://discord.gg/', labelKey: 'community', icon: Users },
      { to: '/help', labelKey: 'help', icon: HelpCircle },
    ],
  },
];

function isInternal(item: NavItem): item is NavItemInternal {
  return 'to' in item;
}

export function Sidebar({ open, onClose }: Props) {
  const { pathname } = useLocation();
  const { t } = useTranslation();

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
              {section.headingKey && (
                <span className={styles.sectionHeading}>
                  {t.nav[section.headingKey as keyof typeof t.nav]}
                </span>
              )}
              <ul className={styles.list}>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const label = t.nav[item.labelKey as keyof typeof t.nav];
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
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  }
                  const ext = item as NavItemExternal;
                  return (
                    <li key={ext.labelKey}>
                      <a
                        href={ext.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.link}
                      >
                        <Icon size={18} />
                        <span>{label}</span>
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
