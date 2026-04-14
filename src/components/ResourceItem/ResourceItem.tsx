import type { ReactNode } from 'react';
import { BookOpen, Play, Code, ExternalLink, CheckCircle2, Circle } from 'lucide-react';
import type { Resource, ResourceType } from '../../domain/milestone';
import { useTranslation } from '../../i18n';
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

export function ResourceItem({ resource, checked, onToggle, onTitleClick }: Props) {
  const { t } = useTranslation();

  const typeLabel = t.resourceType[resource.type];

  return (
    <div className={`${styles.item} ${checked ? styles.done : ''}`}>
      <button
        className={`${styles.markBtn} ${checked ? styles.markBtnDone : ''}`}
        onClick={() => onToggle(resource.id)}
        aria-label={t.resource.markAs(resource.title, checked)}
        title={checked ? t.resource.markIncomplete : t.resource.markComplete}
      >
        {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
      </button>
      <span
        className={`${styles.icon} ${styles[ICON_CLASS[resource.type]]}`}
        aria-label={typeLabel}
        title={typeLabel}
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
      <span className={styles.duration}>{resource.durationMinutes} {t.resource.min}</span>
      <a
        className={styles.external}
        href={resource.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={t.resource.openInNewTab(resource.title)}
      >
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
