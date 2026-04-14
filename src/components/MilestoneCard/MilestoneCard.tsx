import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import type { Phase } from '../../domain/milestone';
import type { MilestoneStatus } from '../../domain/progress';
import { useTranslation } from '../../i18n';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import styles from './MilestoneCard.module.css';

interface Props {
  phase: Phase;
  status: MilestoneStatus;
  className?: string;
}

function formatOrder(n: number): string {
  return n.toString().padStart(2, '0');
}

export function MilestoneCard({ phase, status, className }: Props) {
  const { t } = useTranslation();
  const locked = status === 'locked';
  const rootClass = [styles.card, styles[status], className].filter(Boolean).join(' ');

  const totalResources = phase.chapters.reduce((n, ch) => n + ch.resources.length, 0);

  const content = (
    <>
      <div className={styles.header}>
        <div className={styles.num}>{formatOrder(phase.order)}</div>
        <StatusBadge status={status} />
      </div>
      <h3 className={styles.title}>{phase.title}</h3>
      <p className={styles.desc}>{phase.description}</p>
      <div className={styles.resources}>
        <div className={styles.resource}>
          <span className={styles.icon} aria-hidden="true">
            <BookOpen size={12} />
          </span>
          {t.phase.chapters}
          <span className={styles.count}>{phase.chapters.length}</span>
        </div>
        <div className={styles.resource}>
          <span className={styles.icon} aria-hidden="true">
            <BookOpen size={12} />
          </span>
          {t.home.statResources}
          <span className={styles.count}>{totalResources}</span>
        </div>
      </div>
    </>
  );

  if (locked) {
    return (
      <div
        className={rootClass}
        aria-disabled="true"
        aria-label={t.milestone.locked(phase.title)}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/phase/${phase.id}`}
      className={rootClass}
      aria-label={t.milestone.openChapter(phase.title)}
    >
      {content}
    </Link>
  );
}
