import styles from './Footer.module.css';

interface Props {
  onReset: () => void;
}

export function Footer({ onReset }: Props) {
  const handleReset = () => {
    const ok = window.confirm(
      'Reset all progress? This clears every checked resource from your browser.',
    );
    if (ok) onReset();
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>CodePath © 2026 — local-first</span>
        <button type="button" className={styles.reset} onClick={handleReset}>
          Reset progress
        </button>
      </div>
    </footer>
  );
}
