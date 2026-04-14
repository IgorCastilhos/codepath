import type { MilestoneStatus } from '../../domain/progress';
import { useTranslation } from '../../i18n';
import styles from './StatusBadge.module.css';

interface Props {
  status: MilestoneStatus;
}

export function StatusBadge({ status }: Props) {
  const { t } = useTranslation();

  const labels: Record<MilestoneStatus, string> = {
    completed: t.status.completed,
    active: t.status.active,
    upcoming: t.status.upcoming,
    locked: t.status.locked,
  };

  const aria: Record<MilestoneStatus, string> = {
    completed: t.status.chapterCompleted,
    active: t.status.chapterActive,
    upcoming: t.status.chapterUpcoming,
    locked: t.status.chapterLocked,
  };

  return (
    <span
      className={`${styles.badge} ${styles[status]}`}
      aria-label={aria[status]}
    >
      {labels[status]}
    </span>
  );
}
