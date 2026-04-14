import type { ReactNode } from 'react';
import { BookOpen, Play, Code, ExternalLink, CheckCircle2, Circle } from 'lucide-react';
import type { Resource, ResourceType } from '../../domain/milestone';
import styles from './ResourceItem.module.css';

interface Props {
  resource: Resource;
  checked: boolean;
  onToggle: (id: string) => void;
  onTitleClick?: () => void;
}

const ICON: Record<ResourceType, ReactNode> = {
  reading: <BookOpen size={16} />,
  video: <Play size={16} />,
  exercise: <Code size={16} />,
};

const ICON_CLASS: Record<ResourceType, string> = {
  reading: 'typeReading',
  video: 'typeVideo',
  exercise: 'typeExercise',
};

const TYPE_LABEL: Record<ResourceType, string> = {
  reading: 'Reading',
  video: 'Video',
  exercise: 'Exercise',
};

export function ResourceItem({ resource, checked, onToggle, onTitleClick }: Props) {
  return (
    <div className={`${styles.item} ${checked ? styles.done : ''}`}>
      <button
        className={`${styles.markBtn} ${checked ? styles.markBtnDone : ''}`}
        onClick={() => onToggle(resource.id)}
        aria-label={`Mark ${resource.title} as ${checked ? 'incomplete' : 'complete'}`}
        title={checked ? 'Mark incomplete' : 'Mark complete'}
      >
        {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
      </button>
      <span
        className={`${styles.icon} ${styles[ICON_CLASS[resource.type]]}`}
        aria-label={TYPE_LABEL[resource.type]}
        title={TYPE_LABEL[resource.type]}
      >
        {ICON[resource.type]}
      </span>
      <span
        className={styles.title}
        role="button"
        tabIndex={0}
        onClick={onTitleClick}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onTitleClick?.(); }}
      >
        {resource.title}
      </span>
      <span className={styles.duration}>{resource.durationMinutes} min</span>
      <a
        className={styles.external}
        href={resource.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open ${resource.title} in a new tab`}
      >
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
