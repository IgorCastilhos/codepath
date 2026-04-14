import { useTranslation, type Locale } from '../../i18n';
import styles from './LanguageSwitcher.module.css';

const LOCALES: Locale[] = ['pt-BR', 'en'];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length]!;

  return (
    <button
      className={styles.btn}
      onClick={() => setLocale(next)}
      aria-label={t.language.label}
      title={t.language.label}
    >
      {t.language.label}
    </button>
  );
}
