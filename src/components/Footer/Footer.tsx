import styles from './Footer.module.css';
import { useTranslation } from '../../i18n';

interface Props {
  onReset: () => void;
}

export function Footer({ onReset }: Props) {
  const { t } = useTranslation();

  const handleReset = () => {
    const ok = window.confirm(t.footer.resetConfirm);
    if (ok) onReset();
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>{t.footer.copyright}</span>
        <button type="button" className={styles.reset} onClick={handleReset}>
          {t.footer.resetProgress}
        </button>
      </div>
    </footer>
  );
}
