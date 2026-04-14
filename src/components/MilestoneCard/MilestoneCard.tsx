import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Code } from 'lucide-react';
import type { Milestone, ResourceType } from '../../domain/milestone';
import type { MilestoneStatus } from '../../domain/progress';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import styles from './MilestoneCard.module.css';

interface Props {
  milestone: Milestone;
  status: MilestoneStatus;
  className?: string;
}

const TYPE_ICON: Record<ResourceType, ReactNode> = {
  reading: <BookOpen size={12} />,
  video: <Play size={12} />,
  exercise: <Code size={12} />,
};

const TYPE_LABEL: Record<ResourceType, string> = {
  reading: 'Reading',
  video: 'Videos',
  exercise: 'Exercises',
};

function groupCounts(milestone: Milestone): Array<[ResourceType, number]> {
  const counts: Record<ResourceType, number> = { reading: 0, video: 0, exercise: 0 };
  for (const r of milestone.resources) counts[r.type]++;
  return (Object.entries(counts) as Array<[ResourceType, number]>).filter(
    ([, n]) => n > 0,
  );
}

function formatOrder(n: number): string {
  return n.toString().padStart(2, '0');
}

export function MilestoneCard({ milestone, status, className }: Props) {
  const locked = status === 'locked';
  const rootClass = [styles.card, styles[status], className].filter(Boolean).join(' ');
  const content = (
    <>
      <div className={styles.header}>
        <div className={styles.num}>{formatOrder(milestone.order)}</div>
        <StatusBadge status={status} />
      </div>
      <h3 className={styles.title}>{milestone.title}</h3>
      <p className={styles.desc}>{milestone.description}</p>
      <div className={styles.resources}>
        {groupCounts(milestone).map(([type, count]) => (
          <div className={styles.resource} key={type}>
            <span className={styles.icon} aria-hidden="true">
              {TYPE_ICON[type]}
            </span>
            {TYPE_LABEL[type]}
            <span className={styles.count}>{count}</span>
          </div>
        ))}
      </div>
    </>
  );

  if (locked) {
    return (
      <div
        className={rootClass}
        aria-disabled="true"
        aria-label={`${milestone.title} — locked`}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/chapter/${milestone.id}`}
      className={rootClass}
      aria-label={`${milestone.title} — open chapter`}
    >
      {content}
    </Link>
  );
}
