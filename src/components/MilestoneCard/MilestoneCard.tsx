import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Code } from 'lucide-react';
import type { Milestone, ResourceType } from '../../domain/milestone';
import type { MilestoneStatus } from '../../domain/progress';
import { useTranslation } from '../../i18n';
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
  const { t } = useTranslation();
  const locked = status === 'locked';
  const rootClass = [styles.card, styles[status], className].filter(Boolean).join(' ');

  const typeLabelMap: Record<ResourceType, string> = {
    reading: t.resourceType.readingPlural,
    video: t.resourceType.videoPlural,
    exercise: t.resourceType.exercisePlural,
  };

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
            {typeLabelMap[type]}
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
        aria-label={t.milestone.locked(milestone.title)}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/chapter/${milestone.id}`}
      className={rootClass}
      aria-label={t.milestone.openChapter(milestone.title)}
    >
      {content}
    </Link>
  );
}
