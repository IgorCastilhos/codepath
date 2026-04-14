import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Play, Code2 } from 'lucide-react';
import { useTranslation } from '../i18n';
import { useCurriculum } from '../data/use-curriculum';
import { useProgress } from '../hooks/use-progress';
import { getAllChapters } from '../domain/milestone';
import styles from './CatalogPage.module.css';

export function CatalogPage() {
  const { t } = useTranslation();
  const phases = useCurriculum();
  const { statuses, phaseStatuses, progress } = useProgress();

  const allChapters = useMemo(() => getAllChapters(phases), [phases]);
  const totalResources = useMemo(
    () => allChapters.reduce((s, c) => s + c.resources.length, 0),
    [allChapters],
  );

  const completedSet = useMemo(
    () => new Set(progress.completedResourceIds),
    [progress],
  );

  const statusLabel = (s: string) => t.status[s as keyof typeof t.status] ?? s;

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1>{t.catalogPage.title}</h1>
          <p className={styles.desc}>{t.catalogPage.description}</p>
        </header>

        {/* Summary bar */}
        <div className={styles.summary}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryValue}>{phases.length}</span>
            <span className={styles.summaryLabel}>{t.catalogPage.totalPhases}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryValue}>{allChapters.length}</span>
            <span className={styles.summaryLabel}>{t.catalogPage.totalChapters}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryValue}>{totalResources}</span>
            <span className={styles.summaryLabel}>{t.catalogPage.totalResources}</span>
          </div>
        </div>

        {/* Phases */}
        <div className={styles.phases}>
          {phases.map((phase) => {
            const pStatus = phaseStatuses[phase.id] ?? 'locked';
            const phaseResources = phase.chapters.reduce((s, c) => s + c.resources.length, 0);
            const phaseDone = phase.chapters.reduce(
              (s, c) => s + c.resources.filter((r) => completedSet.has(r.id)).length,
              0,
            );
            const phasePct = phaseResources > 0 ? Math.round((phaseDone / phaseResources) * 100) : 0;

            return (
              <details key={phase.id} className={styles.phaseCard} open={pStatus === 'active'}>
                <summary className={styles.phaseSummary}>
                  <div className={styles.phaseLeft}>
                    <span className={styles.phaseOrder}>
                      {String(phase.order).padStart(2, '0')}
                    </span>
                    <div className={styles.phaseInfo}>
                      <span className={styles.phaseTitle}>{phase.title}</span>
                      <span className={styles.phaseMeta}>
                        {phase.chapters.length} {t.catalogPage.totalChapters.toLowerCase()} · {phaseResources} {t.catalogPage.totalResources.toLowerCase()}
                      </span>
                    </div>
                  </div>
                  <div className={styles.phaseRight}>
                    <span className={`${styles.statusBadge} ${styles[pStatus]}`}>
                      {statusLabel(pStatus)}
                    </span>
                    <div className={styles.phasePct}>
                      <div className={styles.phaseBar}>
                        <div className={styles.phaseBarFill} style={{ width: `${phasePct}%` }} />
                      </div>
                      <span className={styles.phasePctText}>{phasePct}%</span>
                    </div>
                  </div>
                </summary>

                <div className={styles.chapterGrid}>
                  {phase.chapters.map((ch) => {
                    const cStatus = statuses[ch.id] ?? 'locked';
                    const readings = ch.resources.filter((r) => r.type === 'reading').length;
                    const videos = ch.resources.filter((r) => r.type === 'video').length;
                    const exercises = ch.resources.filter((r) => r.type === 'exercise').length;

                    return (
                      <Link
                        key={ch.id}
                        to={`/chapter/${ch.id}`}
                        className={`${styles.chapterRow} ${styles[cStatus]}`}
                      >
                        <span className={styles.chapterOrder}>
                          {String(ch.order).padStart(2, '0')}
                        </span>
                        <div className={styles.chapterInfo}>
                          <span className={styles.chapterTitle}>{ch.title}</span>
                          <div className={styles.chapterTags}>
                            {readings > 0 && (
                              <span className={styles.tag}>
                                <FileText size={12} /> {readings}
                              </span>
                            )}
                            {videos > 0 && (
                              <span className={styles.tag}>
                                <Play size={12} /> {videos}
                              </span>
                            )}
                            {exercises > 0 && (
                              <span className={styles.tag}>
                                <Code2 size={12} /> {exercises}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className={`${styles.chapterBadge} ${styles[cStatus]}`}>
                          {statusLabel(
                            `chapter${cStatus.charAt(0).toUpperCase() + cStatus.slice(1)}` as keyof typeof t.status,
                          )}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
}
