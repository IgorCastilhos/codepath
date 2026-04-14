import type { MilestoneStatus } from '../../domain/progress';
import styles from './StatusBadge.module.css';

const LABELS: Record<MilestoneStatus, string> = {
  completed: 'Completed',
  active: 'In progress',
  upcoming: 'Up next',
  locked: 'Locked',
};

const ARIA: Record<MilestoneStatus, string> = {
  completed: 'Chapter completed',
  active: 'Chapter in progress',
  upcoming: 'Chapter up next',
  locked: 'Chapter locked',
};

interface Props {
  status: MilestoneStatus;
}

export function StatusBadge({ status }: Props) {
  return (
    <span
      className={`${styles.badge} ${styles[status]}`}
      aria-label={ARIA[status]}
    >
      {LABELS[status]}
    </span>
  );
}
