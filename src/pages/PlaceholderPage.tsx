import { useTranslation } from '../i18n';
import styles from './PlaceholderPage.module.css';

interface Props {
  titleKey: string;
  descKey: string;
}

export function PlaceholderPage({ titleKey, descKey }: Props) {
  const { t } = useTranslation();
  const title = t.nav[titleKey as keyof typeof t.nav] ?? titleKey;
  const desc = t.placeholder[descKey as keyof typeof t.placeholder] ?? descKey;

  return (
    <div className={styles.page}>
      <div className="container">
        <span className="eyebrow">{t.placeholder.comingSoon}</span>
        <h1>{title}</h1>
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
    </div>
  );
}
