import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Rocket } from 'lucide-react';
import { useTranslation } from '../i18n';
import { useCurriculum } from '../data/use-curriculum';
import { useProgress } from '../hooks/use-progress';
import { getAllChapters, findPhaseForChapter } from '../domain/milestone';
import { ButtonLink } from '../components/Button/Button';
import styles from './MyContentPage.module.css';

export function MyContentPage() {
  const { t } = useTranslation();
  const phases = useCurriculum();
  const { progress, statuses, phaseStatuses, completionPercent } = useProgress();

  const allChapters = useMemo(() => getAllChapters(phases), [phases]);
  const totalResources = useMemo(
    () => allChapters.reduce((s, c) => s + c.resources.length, 0),
    [allChapters],
  );

  const completedResources = progress.completedResourceIds.length;
  const completedPhases = Object.values(phaseStatuses).filter((s) => s === 'completed').length;

  const hoursStudied = useMemo(() => {
    const set = new Set(progress.completedResourceIds);
    let mins = 0;
    for (const ch of allChapters) {
      for (const r of ch.resources) {
        if (set.has(r.id)) mins += r.durationMinutes;
      }
    }
    return Math.round(mins / 60);
  }, [allChapters, progress]);

  const activeChapters = useMemo(
    () => allChapters.filter((c) => statuses[c.id] === 'active'),
    [allChapters, statuses],
  );
  const completedChapters = useMemo(
    () => allChapters.filter((c) => statuses[c.id] === 'completed'),
    [allChapters, statuses],
  );

  const chapterDone = (chId: string) => {
    const ch = allChapters.find((c) => c.id === chId);
    if (!ch) return 0;
    const set = new Set(progress.completedResourceIds);
    return ch.resources.filter((r) => set.has(r.id)).length;
  };

  const hasProgress = completedResources > 0;

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1>{t.myContent.title}</h1>
          <p className={styles.desc}>{t.myContent.description}</p>
        </header>

        {!hasProgress ? (
          <div className={styles.empty}>
            <Rocket size={48} strokeWidth={1.5} />
            <h2>{t.myContent.noProgress}</h2>
            <p>{t.myContent.noProgressDesc}</p>
            <ButtonLink to="/" variant="primary">
              {t.myContent.startLearning}
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        ) : (
          <>
            {/* Stats row */}
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <div className={styles.progressRing}>
                  <svg viewBox="0 0 36 36" className={styles.ring}>
                    <circle
                      cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke="var(--c-line)"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke="var(--c-g)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${completionPercent} ${100 - completionPercent}`}
                      strokeDashoffset="25"
                    />
                  </svg>
                  <span className={styles.ringValue}>{completionPercent}%</span>
                </div>
                <span className={styles.statLabel}>{t.myContent.overallProgress}</span>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statValue}>{completedResources}</span>
                <span className={styles.statSub}>{t.myContent.ofTotal(totalResources)}</span>
                <span className={styles.statLabel}>{t.myContent.resourcesDone}</span>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statValue}>{completedPhases}</span>
                <span className={styles.statSub}>{t.myContent.ofTotal(phases.length)}</span>
                <span className={styles.statLabel}>{t.myContent.phasesCompleted}</span>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statValue}>{hoursStudied}h</span>
                <span className={styles.statLabel}>{t.myContent.hoursStudied}</span>
              </div>
            </div>

            {/* In Progress */}
            {activeChapters.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t.myContent.inProgress}</h2>
                <div className={styles.chapterList}>
                  {activeChapters.map((ch) => {
                    const phase = findPhaseForChapter(phases, ch.id);
                    const done = chapterDone(ch.id);
                    const total = ch.resources.length;
                    const pct = Math.round((done / total) * 100);
                    return (
                      <Link key={ch.id} to={`/chapter/${ch.id}`} className={styles.chapterCard}>
                        <div className={styles.chapterIcon}>
                          <BookOpen size={20} />
                        </div>
                        <div className={styles.chapterInfo}>
                          <span className={styles.chapterPhase}>
                            {phase ? `Fase ${String(phase.order).padStart(2, '0')}` : ''}
                          </span>
                          <span className={styles.chapterTitle}>{ch.title}</span>
                          <span className={styles.chapterMeta}>
                            {t.myContent.chapterProgress(done, total)}
                          </span>
                        </div>
                        <div className={styles.miniBar}>
                          <div className={styles.miniBarFill} style={{ width: `${pct}%` }} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Completed */}
            {completedChapters.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t.myContent.completed}</h2>
                <div className={styles.chapterList}>
                  {completedChapters.map((ch) => {
                    const phase = findPhaseForChapter(phases, ch.id);
                    return (
                      <Link key={ch.id} to={`/chapter/${ch.id}`} className={styles.chapterCard}>
                        <div className={`${styles.chapterIcon} ${styles.done}`}>
                          <BookOpen size={20} />
                        </div>
                        <div className={styles.chapterInfo}>
                          <span className={styles.chapterPhase}>
                            {phase ? `Fase ${String(phase.order).padStart(2, '0')}` : ''}
                          </span>
                          <span className={styles.chapterTitle}>{ch.title}</span>
                          <span className={styles.chapterMeta}>
                            {t.myContent.chapterProgress(ch.resources.length, ch.resources.length)}
                          </span>
                        </div>
                        <div className={styles.miniBar}>
                          <div className={`${styles.miniBarFill} ${styles.complete}`} style={{ width: '100%' }} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}
