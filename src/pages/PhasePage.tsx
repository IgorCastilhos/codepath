import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { useCurriculum } from '../data/use-curriculum';
import type { Chapter } from '../domain/milestone';
import { useProgress } from '../hooks/use-progress';
import { useTranslation } from '../i18n';
import { StatusBadge } from '../components/StatusBadge/StatusBadge';
import { ButtonLink } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import styles from './PhasePage.module.css';

function padOrder(n: number): string {
  return n.toString().padStart(2, '0');
}

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0) return `${h}h ${m > 0 ? m + 'min' : ''}`.trim();
  return `${m}min`;
}

function chapterProgress(chapter: Chapter, completedSet: ReadonlySet<string>) {
  const total = chapter.resources.length;
  if (total === 0) return { done: 0, total: 0, percent: 0 };
  const done = chapter.resources.filter((r) => completedSet.has(r.id)).length;
  return { done, total, percent: Math.round((done / total) * 100) };
}

export function PhasePage() {
  const { id } = useParams<{ id: string }>();
  const phases = useCurriculum();
  const { t } = useTranslation();
  const { statuses, progress, resetProgress } = useProgress();

  const phase = useMemo(
    () => phases.find((p) => p.id === id) ?? null,
    [id, phases],
  );

  if (!phase) {
    return (
      <>
        <main className={styles.page}>
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

  const completedSet = new Set(progress.completedResourceIds);
  const totalResources = phase.chapters.reduce((n, ch) => n + ch.resources.length, 0);
  const totalMinutes = phase.chapters.reduce(
    (n, ch) => n + ch.resources.reduce((s, r) => s + r.durationMinutes, 0),
    0,
  );

  return (
    <>
      <main className={styles.page}>
        <div className="container">
          <Link to="/" className={styles.back}>
            <ArrowLeft size={14} /> {t.phase.backToRoadmap}
          </Link>

          <header className={styles.header}>
            <div className={styles.num}>{padOrder(phase.order)}</div>
            <div>
              <h1 className={styles.title}>{phase.title}</h1>
              <p className={styles.lede}>{phase.description}</p>
            </div>
          </header>

          <div className={styles.body}>
            <ReactMarkdown>{phase.longDescription}</ReactMarkdown>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{phase.chapters.length}</span>
              <span className={styles.statLabel}>{t.phase.chapters}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{totalResources}</span>
              <span className={styles.statLabel}>{t.home.statResources}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>{formatDuration(totalMinutes)}</span>
              <span className={styles.statLabel}>{t.chapter.studyTime}</span>
            </div>
          </div>

          <span className={styles.chaptersHeading}>{t.phase.chapters}</span>
          <div className={styles.chapterList}>
            {phase.chapters.map((chapter) => {
              const status = statuses[chapter.id] ?? 'locked';
              const locked = status === 'locked';
              const prog = chapterProgress(chapter, completedSet);
              const chapterMinutes = chapter.resources.reduce((s, r) => s + r.durationMinutes, 0);

              const inner = (
                <>
                  <span className={styles.chapterNum}>{padOrder(chapter.order)}</span>
                  <div className={styles.chapterInfo}>
                    <span className={styles.chapterTitle}>{chapter.title}</span>
                    <span className={styles.chapterDesc}>{chapter.description}</span>
                    <div className={styles.chapterMeta}>
                      <span><BookOpen size={11} /> {chapter.resources.length} {t.chapter.items}</span>
                      <span><Clock size={11} /> {formatDuration(chapterMinutes)}</span>
                    </div>
                    {prog.total > 0 && (
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${prog.percent}%` }} />
                      </div>
                    )}
                  </div>
                  <div className={styles.chapterStatus}>
                    <StatusBadge status={status} />
                  </div>
                </>
              );

              if (locked) {
                return (
                  <div key={chapter.id} className={styles.chapterCard} aria-disabled="true">
                    {inner}
                  </div>
                );
              }

              return (
                <Link key={chapter.id} to={`/chapter/${chapter.id}`} className={styles.chapterCard}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer onReset={resetProgress} />
    </>
  );
}
