import type { Milestone } from '../../domain/milestone';
import type { MilestoneStatus } from '../../domain/progress';
import { useTranslation } from '../../i18n';
import { MilestoneCard } from '../MilestoneCard/MilestoneCard';
import styles from './RoadmapStage.module.css';

interface Props {
  milestones: readonly Milestone[];
  statuses: Record<string, MilestoneStatus>;
}

const PATH_D = `M 180 180
   C 600 180, 600 340, 1020 380
   C 1440 420, -240 560, 180 620
   C 600 680, 600 900, 600 940`;

interface Waypoint {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

const WAYPOINTS: Waypoint[] = [
  { cx: 180,  cy: 180, r: 9,  fill: '#9dff3c' },
  { cx: 1020, cy: 380, r: 9,  fill: '#ff2e63' },
  { cx: 180,  cy: 620, r: 11, fill: '#3c9dff' },
  { cx: 600,  cy: 940, r: 13, fill: '#9dff3c' },
];

const POSITIONS = [
  styles.m1, styles.m2, styles.m3, styles.m4,
];

export function RoadmapStage({ milestones, statuses }: Props) {
  const { t } = useTranslation();
  const ordered = [...milestones].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.stage}>
      <svg
        className={styles.svg}
        viewBox="0 0 1200 1060"
        preserveAspectRatio="none"
        role="img"
        aria-labelledby="roadmap-title"
      >
        <title id="roadmap-title">
          {t.roadmap.svgTitle}
        </title>
        <defs>
          <linearGradient id="codepath-rgb-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff2e63" />
            <stop offset="50%" stopColor="#9dff3c" />
            <stop offset="100%" stopColor="#3c9dff" />
          </linearGradient>
          <filter id="codepath-path-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path className={styles.pathBase} d={PATH_D} />
        <path className={styles.pathRgb} d={PATH_D} />

        {WAYPOINTS.map((w, i) => (
          <circle
            key={i}
            className={styles.nodeDot}
            cx={w.cx}
            cy={w.cy}
            r={w.r}
            fill={w.fill}
          />
        ))}
      </svg>

      {ordered.map((milestone, i) => {
        const status = statuses[milestone.id] ?? 'locked';
        return (
          <MilestoneCard
            key={milestone.id}
            milestone={milestone}
            status={status}
            className={`${styles.milestone} ${POSITIONS[i] ?? ''}`}
          />
        );
      })}
    </div>
  );
}
