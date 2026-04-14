import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  BookOpen, Play, Code, ArrowLeft,
  SkipBack, CheckCircle2, Download, ChevronRight,
} from 'lucide-react';
import { useCurriculum } from '../data/use-curriculum';
import { findChapter } from '../domain/milestone';
import type { Resource, ResourceType } from '../domain/milestone';
import { useProgress } from '../hooks/use-progress';
import { useTranslation } from '../i18n';
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
    >
      {content}
    </a>
  );
}

export function VideoPage() {
  const { id, resourceId } = useParams<{ id: string; resourceId: string }>();
  const navigate = useNavigate();
  const phases = useCurriculum();
  const { t } = useTranslation();
  const { progress, toggleResource } = useProgress();
  const [activeBottomTab, setActiveBottomTab] = useState<'about' | 'materials'>('about');

  const milestone = useMemo(
    () => findChapter(phases, id ?? '') ?? null,
    [id, phases],
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
            {t.video.resourceNotFound}
          </p>
          <Link to="/" className={styles.backLink}><ArrowLeft size={14} /> {t.chapter.backToRoadmap}</Link>
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
            {isDone ? <><CheckCircle2 size={14} /> {t.video.completed}</> : t.video.markAsDone}
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
                <div className={styles.playerPlayBtn} aria-label={t.video.playVideo}>
                  <Play size={32} />
                </div>
                <p className={styles.playerTitle}>{resource.title}</p>
                <p className={styles.playerMeta}>
                  {milestone.title} · {formatDuration(resource.durationMinutes)}
                </p>
              </div>
              {/* Player controls bar */}
              <div className={styles.playerControls}>
                <button className={styles.controlBtn} aria-label={t.video.rewind}><SkipBack size={16} /></button>
                <button className={styles.controlBtn} aria-label={t.video.playPause}><Play size={16} /></button>
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
                {t.video.aboutLesson}
              </button>
              <button
                className={`${styles.bottomTab} ${activeBottomTab === 'materials' ? styles.bottomTabActive : ''}`}
                onClick={() => setActiveBottomTab('materials')}
              >
                {t.video.materials}
              </button>
            </nav>

            <div className={styles.bottomContent}>
              {activeBottomTab === 'about' ? (
                <div className={styles.aboutContent}>
                  <h2 className={styles.lessonTitle}>{resource.title}</h2>
                  <p className={styles.lessonMeta}>
                    {milestone.order.toString().padStart(2, '0')} — {milestone.title} ·{' '}
                    {formatDuration(resource.durationMinutes)} {t.resourceType.video.toLowerCase()}
                  </p>
                  <p className={styles.lessonDesc}>{milestone.description}</p>
                  {nextVideo && (
                    <div className={styles.nextLesson}>
                      <span className={styles.nextLabel}>{t.video.upNext}</span>
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
                    <p>{t.video.noMaterials}</p>
                    <p className={styles.materialsEmptyHint}>
                      {t.video.materialsHint}
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
            <span className={styles.sidebarTitle}>{t.chapter.contents}</span>
            <span className={styles.sidebarCount}>{milestone.resources.length} {t.chapter.items}</span>
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
