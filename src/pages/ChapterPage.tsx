import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  BookOpen, Play, Code, ArrowLeft, ArrowRight, Clock,
  ListVideo, LayoutGrid, CheckCircle2, Circle,
} from 'lucide-react';
import { useCurriculum } from '../data/use-curriculum';
import type { Resource, ResourceType } from '../domain/milestone';
import { useProgress } from '../hooks/use-progress';
import { useTranslation } from '../i18n';
import { Footer } from '../components/Footer/Footer';
import { StatusBadge } from '../components/StatusBadge/StatusBadge';
import { ResourceItem } from '../components/ResourceItem/ResourceItem';
import { ButtonLink } from '../components/Button/Button';
import styles from './ChapterPage.module.css';

const TYPE_ICON: Record<ResourceType, ReactNode> = {
  reading: <BookOpen size={14} />,
  video: <Play size={14} />,
  exercise: <Code size={14} />,
};

const GROUP_ORDER: ResourceType[] = ['reading', 'video', 'exercise'];

function padOrder(n: number): string {
  return n.toString().padStart(2, '0');
}

function groupByType(resources: readonly Resource[]): Record<ResourceType, Resource[]> {
  const groups: Record<ResourceType, Resource[]> = {
    reading: [],
    video: [],
    exercise: [],
  };
  for (const r of resources) groups[r.type].push(r);
  return groups;
}

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0) return `${h}h ${m > 0 ? m + 'min' : ''}`.trim();
  return `${m}min`;
}

export function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const curriculum = useCurriculum();
  const { t } = useTranslation();
  const { statuses, progress, toggleResource, setLastVisited, resetProgress } =
    useProgress();
  const [activeTab, setActiveTab] = useState<'overview' | 'contents'>('overview');

  const milestone = useMemo(
    () => curriculum.find((m) => m.id === id) ?? null,
    [id, curriculum],
  );

  useEffect(() => {
    if (milestone) setLastVisited(milestone.id);
  }, [milestone, setLastVisited]);

  const groupLabel: Record<ResourceType, string> = {
    reading: t.resourceType.readingPlural,
    video: t.resourceType.videoPlural,
    exercise: t.resourceType.exercisePlural,
  };

  const typeLabel: Record<ResourceType, string> = {
    reading: t.resourceType.reading,
    video: t.resourceType.video,
    exercise: t.resourceType.exercise,
  };

  if (!milestone) {
    return (
      <>
        <main className={styles.notFound}>
          <div className="container">
            <h1>{t.chapter.notFoundTitle}</h1>
            <p style={{ color: 'var(--c-text-mute)', marginBottom: 'var(--s-7)' }}>
              {t.chapter.notFoundDesc}
            </p>
            <ButtonLink to="/" variant="primary">
              {t.chapter.backToRoadmap}
              <ArrowRight size={14} />
            </ButtonLink>
          </div>
        </main>
        <Footer onReset={resetProgress} />
      </>
    );
  }

  const status = statuses[milestone.id] ?? 'locked';
  const completedSet = new Set(progress.completedResourceIds);
  const groups = groupByType(milestone.resources);
  const totalMinutes = milestone.resources.reduce((n, r) => n + r.durationMinutes, 0);
  const completedCount = milestone.resources.filter((r) =>
    completedSet.has(r.id),
  ).length;
  const progressPercent =
    milestone.resources.length > 0
      ? Math.round((completedCount / milestone.resources.length) * 100)
      : 0;

  return (
    <>
      <main className={styles.page}>
        <div className="container">
          <Link to="/" className={styles.back}>
            <ArrowLeft size={14} /> {t.chapter.backToPath}
          </Link>

          <header className={styles.header}>
            <div className={styles.num}>{padOrder(milestone.order)}</div>
            <div>
              <h1 className={styles.title}>{milestone.title}</h1>
              <p className={styles.lede}>{milestone.description}</p>
            </div>
            <StatusBadge status={status} />
          </header>

          {/* Tabs */}
          <nav className={styles.tabs} aria-label="Chapter sections">
            <button
              className={`${styles.tab} ${activeTab === 'overview' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <LayoutGrid size={14} />
              {t.chapter.overview}
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'contents' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('contents')}
            >
              <ListVideo size={14} />
              {t.chapter.contents}
            </button>
          </nav>

          {activeTab === 'overview' ? (
            <div className={styles.overviewLayout}>
              <div className={styles.overviewMain}>
                <div className={styles.body}>
                  <ReactMarkdown>{milestone.longDescription}</ReactMarkdown>
                </div>

                <section className={styles.resourcesSection} aria-label={t.chapter.resources}>
                  <span className="eyebrow">{t.chapter.resources}</span>
                  {GROUP_ORDER.map((type) => {
                    const items = groups[type];
                    if (items.length === 0) return null;
                    return (
                      <div key={type}>
                        <div className={styles.groupHeading}>
                          <span>{groupLabel[type]}</span>
                          <span className={styles.line} />
                          <span>{items.length}</span>
                        </div>
                        <div className={styles.groupList}>
                          {items.map((resource) => (
                            <ResourceItem
                              key={resource.id}
                              resource={resource}
                              checked={completedSet.has(resource.id)}
                              onToggle={toggleResource}
                              onTitleClick={() => setActiveTab('contents')}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </section>
              </div>

              <aside className={styles.overviewSidebar}>
                <div className={styles.sideCard}>
                  <div className={styles.sideProgress}>
                    <span className={styles.sideProgressLabel}>{t.progress.overallProgress}</span>
                    <span className={styles.sideProgressPct}>{progressPercent}%</span>
                  </div>
                  <div className={styles.sideProgressBar}>
                    <div
                      className={styles.sideProgressFill}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <button
                    className={styles.startBtn}
                    onClick={() => setActiveTab('contents')}
                  >
                    {completedCount === 0 ? t.chapter.start : t.chapter.continue} <ArrowRight size={14} />
                  </button>
                  <button
                    className={styles.contentsBtn}
                    onClick={() => setActiveTab('contents')}
                  >
                    {t.chapter.viewContents} <ArrowRight size={14} />
                  </button>
                </div>

                <div className={styles.sideCard}>
                  <h4 className={styles.sideCardTitle}>{t.chapter.details}</h4>
                  <dl className={styles.detailList}>
                    <dt><Clock size={12} /> {t.chapter.studyTime}</dt>
                    <dd>{formatDuration(totalMinutes)}</dd>
                    <dt><ListVideo size={12} /> {t.chapter.resources}</dt>
                    <dd>{milestone.resources.length} {t.chapter.items}</dd>
                    <dt><Play size={12} /> {t.chapter.videos}</dt>
                    <dd>{groups.video.length}</dd>
                    <dt><Code size={12} /> {t.chapter.exercises}</dt>
                    <dd>{groups.exercise.length}</dd>
                  </dl>
                </div>
              </aside>
            </div>
          ) : (
            <div className={styles.contentsList}>
              <div className={styles.contentsHeader}>
                <span className={styles.contentsCount}>
                  {milestone.resources.length} {t.chapter.items} · {formatDuration(totalMinutes)}
                </span>
              </div>
              {milestone.resources.map((resource, index) => {
                const done = completedSet.has(resource.id);
                const isVideo = resource.type === 'video';
                return (
                  <div key={resource.id} className={`${styles.contentsItem} ${done ? styles.contentsItemDone : ''}`}>
                    <span className={styles.contentsIndex}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={`${styles.contentsTypeIcon} ${styles[`type_${resource.type}`]}`}>
                      {TYPE_ICON[resource.type]}
                    </span>
                    {isVideo ? (
                      <Link
                        to={`/chapter/${milestone.id}/video/${resource.id}`}
                        className={styles.contentsTitle}
                      >
                        {resource.title}
                      </Link>
                    ) : (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.contentsTitle}
                      >
                        {resource.title}
                      </a>
                    )}
                    <span className={styles.contentsType}>{typeLabel[resource.type]}</span>
                    <span className={styles.contentsDuration}>
                      {formatDuration(resource.durationMinutes)}
                    </span>
                    <button
                      className={`${styles.contentsMark} ${done ? styles.contentsMarkDone : ''}`}
                      onClick={() => toggleResource(resource.id)}
                      aria-label={t.resource.markAs(resource.title, done)}
                      title={done ? t.resource.markIncomplete : t.resource.markComplete}
                    >
                      {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer onReset={resetProgress} />
    </>
  );
}
