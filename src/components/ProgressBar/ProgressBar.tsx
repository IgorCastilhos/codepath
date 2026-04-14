import styles from './ProgressBar.module.css';

interface Props {
  percent: number;
  completedCount: number;
  totalCount: number;
}

export function ProgressBar({ percent, completedCount, totalCount }: Props) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className={styles.block} id="progress">
      <div className={styles.header}>
        <span className={styles.label}>Overall progress</span>
        <span className={styles.value}>
          <span className={styles.accent}>{clamped}</span>%
        </span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Overall curriculum progress"
      >
        <div className={styles.fill} style={{ width: `${clamped}%` }} />
      </div>
      <div className={styles.meta}>
        <span>{completedCount} / {totalCount} resources complete</span>
        <span>{clamped === 100 ? 'Path complete' : 'Keep going'}</span>
      </div>
    </div>
  );
}
