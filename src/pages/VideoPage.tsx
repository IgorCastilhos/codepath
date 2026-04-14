import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  BookOpen, Play, Code, ArrowLeft,
  SkipBack, CheckCircle2, Download, ChevronRight,
} from 'lucide-react';
import { curriculum } from '../data/curriculum';
import type { Resource, ResourceType } from '../domain/milestone';
import { useProgress } from '../hooks/use-progress';
import styles from './VideoPage.module.css';

const TYPE_ICON: Record<ResourceType, ReactNode> = {
  reading: <BookOpen size={14} />,
  video: <Play size={14} />,
  exercise: <Code size={14} />,
};

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0) {
    const mm = m.toString().padStart(2, '0');
    return `${h}:${mm}:00`;
  }
  return `${m.toString().padStart(2, '0')}:00`;
}

interface SidebarItemProps {
  resource: Resource;
  chapterId: string;
  isActive: boolean;
  isDone: boolean;
}

function SidebarItem({ resource, chapterId, isActive, isDone }: SidebarItemProps) {
  const isVideo = resource.type === 'video';
  const className = [
    styles.sideItem,
    isActive ? styles.sideItemActive : '',
    isDone ? styles.sideItemDone : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className={`${styles.sideIcon} ${styles[`type_${resource.type}`]}`}>
        {TYPE_ICON[resource.type]}
      </span>
      <span className={styles.sideTitle}>{resource.title}</span>
      <span className={styles.sideDuration}>{formatDuration(resource.durationMinutes)}</span>
    </>
  );

  if (isVideo) {
    return (
      <Link
        to={`/chapter/${chapterId}/video/${resource.id}`}
        className={className}
        aria-label={`Watch ${resource.title}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      aria-label={`Open ${resource.title}`}
    >
      {content}
    </a>
  );
}

export function VideoPage() {
  const { id, resourceId } = useParams<{ id: string; resourceId: string }>();
  const navigate = useNavigate();
  const { progress, toggleResource } = useProgress();
  const [activeBottomTab, setActiveBottomTab] = useState<'about' | 'materials'>('about');

  const milestone = useMemo(
    () => curriculum.find((m) => m.id === id) ?? null,
    [id],
  );

  const resource = useMemo(
    () => milestone?.resources.find((r) => r.id === resourceId) ?? null,
    [milestone, resourceId],
  );

  const completedSet = new Set(progress.completedResourceIds);
  const isDone = resource ? completedSet.has(resource.id) : false;

  if (!milestone || !resource) {
    return (
      <div className={styles.page}>
        <div className={styles.errorState}>
          <p style={{ color: 'var(--c-text-mute)', marginBottom: 'var(--s-5)' }}>
            Resource not found.
          </p>
          <Link to="/" className={styles.backLink}><ArrowLeft size={14} /> Back to the roadmap</Link>
        </div>
      </div>
    );
  }

  const videoIndex = milestone.resources
    .filter((r) => r.type === 'video')
    .indexOf(resource);
  const videos = milestone.resources.filter((r) => r.type === 'video');
  const nextVideo =
    videoIndex >= 0 && videoIndex < videos.length - 1
      ? videos[videoIndex + 1]
      : null;

  function handleMarkDone() {
    if (!resource) return;
    toggleResource(resource.id);
    if (!isDone && nextVideo) {
      navigate(`/chapter/${milestone!.id}/video/${nextVideo.id}`);
    }
  }

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <header className={styles.topBar}>
        <Link to={`/chapter/${milestone.id}`} className={styles.backLink}>
          <ArrowLeft size={14} /> {milestone.title}
        </Link>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <Link to={`/chapter/${milestone.id}`} className={styles.breadcrumbItem}>
            {milestone.title}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{resource.title}</span>
        </nav>
        <div className={styles.topActions}>
          <button
            className={`${styles.markBtn} ${isDone ? styles.markBtnDone : ''}`}
            onClick={handleMarkDone}
          >
            {isDone ? <><CheckCircle2 size={14} /> Completed</> : 'Mark as done'}
          </button>
        </div>
      </header>

      <div className={styles.layout}>
        {/* Main area: video + bottom tabs */}
        <div className={styles.mainArea}>
          {/* Video player */}
          <div className={styles.playerWrapper}>
            <div className={styles.player}>
              <div className={styles.playerPlaceholder}>
                <div className={styles.playerPlayBtn} aria-label="Play video">
                  <Play size={32} />
                </div>
                <p className={styles.playerTitle}>{resource.title}</p>
                <p className={styles.playerMeta}>
                  {milestone.title} · {formatDuration(resource.durationMinutes)}
                </p>
              </div>
              {/* Player controls bar */}
              <div className={styles.playerControls}>
                <button className={styles.controlBtn} aria-label="Rewind 10 seconds"><SkipBack size={16} /></button>
                <button className={styles.controlBtn} aria-label="Play/Pause"><Play size={16} /></button>
                <div className={styles.progressTrack}>
                  <div className={styles.progressHead} />
                </div>
                <span className={styles.timecode}>0:00 / {formatDuration(resource.durationMinutes)}</span>
              </div>
            </div>
          </div>

          {/* Bottom tabs */}
          <div className={styles.bottomSection}>
            <nav className={styles.bottomTabs} aria-label="Lesson sections">
              <button
                className={`${styles.bottomTab} ${activeBottomTab === 'about' ? styles.bottomTabActive : ''}`}
                onClick={() => setActiveBottomTab('about')}
              >
                About the lesson
              </button>
              <button
                className={`${styles.bottomTab} ${activeBottomTab === 'materials' ? styles.bottomTabActive : ''}`}
                onClick={() => setActiveBottomTab('materials')}
              >
                Materials
              </button>
            </nav>

            <div className={styles.bottomContent}>
              {activeBottomTab === 'about' ? (
                <div className={styles.aboutContent}>
                  <h2 className={styles.lessonTitle}>{resource.title}</h2>
                  <p className={styles.lessonMeta}>
                    Chapter {milestone.order.toString().padStart(2, '0')} — {milestone.title} ·{' '}
                    {formatDuration(resource.durationMinutes)} video
                  </p>
                  <p className={styles.lessonDesc}>{milestone.description}</p>
                  {nextVideo && (
                    <div className={styles.nextLesson}>
                      <span className={styles.nextLabel}>Up next</span>
                      <Link
                        to={`/chapter/${milestone.id}/video/${nextVideo.id}`}
                        className={styles.nextLink}
                      >
                        {nextVideo.title}
                        <span className={styles.nextArrow}><ChevronRight size={16} /></span>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.materialsContent}>
                  <div className={styles.materialsEmpty}>
                    <span className={styles.materialsEmptyIcon}><Download size={32} /></span>
                    <p>No downloadable materials for this lesson.</p>
                    <p className={styles.materialsEmptyHint}>
                      Materials like slides, code files, and exercises will appear here when available.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right sidebar: content list */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarTitle}>Contents</span>
            <span className={styles.sidebarCount}>{milestone.resources.length} items</span>
          </div>
          <div className={styles.sideList}>
            {milestone.resources.map((r) => (
              <SidebarItem
                key={r.id}
                resource={r}
                chapterId={milestone.id}
                isActive={r.id === resource.id}
                isDone={completedSet.has(r.id)}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
