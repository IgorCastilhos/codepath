import { MessageSquare, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n';
import styles from './ForumPage.module.css';

export function ForumPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.center}>
          <MessageSquare size={48} strokeWidth={1.5} />
          <span className={styles.badge}>{t.placeholder.comingSoon}</span>
          <h1>{t.nav.forum}</h1>
          <p className={styles.desc}>{t.placeholder.forumDesc}</p>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.link}
          >
            {t.helpPage.joinCommunity}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
