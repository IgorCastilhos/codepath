import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme, type ThemeMode } from '../../contexts/ThemeContext';
import { useTranslation } from '../../i18n';
import styles from './ThemeSwitcher.module.css';

const ORDER: ThemeMode[] = ['dark', 'light', 'system'];

const ICON: Record<ThemeMode, React.ReactNode> = {
  dark: <Moon size={16} />,
  light: <Sun size={16} />,
  system: <Monitor size={16} />,
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]!;
  const label = t.theme[theme];

  return (
    <button
      className={styles.btn}
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
    >
      {ICON[theme]}
    </button>
  );
}
