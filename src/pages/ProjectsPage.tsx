import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Code2, CheckCircle2, Circle, Rocket } from 'lucide-react';
import { useTranslation } from '../i18n';
import { useCurriculum } from '../data/use-curriculum';
import { useProgress } from '../hooks/use-progress';
import type { Resource, Chapter } from '../domain/milestone';
import styles from './ProjectsPage.module.css';

interface ExerciseItem {
  resource: Resource;
  chapter: Chapter;
  phaseOrder: number;
}

export function ProjectsPage() {
  const { t } = useTranslation();
  const phases = useCurriculum();
  const { progress, toggleResource } = useProgress();

  const completedSet = useMemo(
    () => new Set(progress.completedResourceIds),
    [progress],
  );

  const exercises = useMemo<ExerciseItem[]>(() => {
    const result: ExerciseItem[] = [];
    for (const phase of phases) {
      for (const ch of phase.chapters) {
        for (const r of ch.resources) {
          if (r.type === 'exercise') {
            result.push({ resource: r, chapter: ch, phaseOrder: phase.order });
          }
        }
      }
    }
    return result;
  }, [phases]);

  const completedCount = exercises.filter((e) => completedSet.has(e.resource.id)).length;

  // Group by phase
  const grouped = useMemo(() => {
    const map = new Map<number, { phaseTitle: string; items: ExerciseItem[] }>();
    for (const phase of phases) {
      const items = exercises.filter((e) => e.phaseOrder === phase.order);
      if (items.length > 0) {
        map.set(phase.order, { phaseTitle: phase.title, items });
      }
    }
    return map;
  }, [phases, exercises]);

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1>{t.projectsPage.title}</h1>
          <p className={styles.desc}>{t.projectsPage.description}</p>
        </header>

        {/* Stats */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <Code2 size={18} />
            <span className={styles.statValue}>{exercises.length}</span>
            <span className={styles.statLabel}>{t.projectsPage.totalExercises}</span>
          </div>
          <div className={styles.stat}>
            <CheckCircle2 size={18} />
            <span className={styles.statValue}>{completedCount}</span>
            <span className={styles.statLabel}>{t.projectsPage.completedCount}</span>
          </div>
        </div>

        {exercises.length === 0 ? (
          <div className={styles.empty}>
            <Rocket size={48} strokeWidth={1.5} />
            <h2>{t.projectsPage.noExercises}</h2>
            <p>{t.projectsPage.noExercisesDesc}</p>
          </div>
        ) : (
          <div className={styles.groups}>
            {Array.from(grouped.entries()).map(([order, group]) => (
              <section key={order} className={styles.group}>
                <h2 className={styles.groupTitle}>
                  <span className={styles.groupOrder}>
                    {String(order).padStart(2, '0')}
                  </span>
                  {group.phaseTitle}
                </h2>
                <div className={styles.exerciseList}>
                  {group.items.map((ex) => {
                    const done = completedSet.has(ex.resource.id);
                    return (
                      <div key={ex.resource.id} className={`${styles.exerciseCard} ${done ? styles.done : ''}`}>
                        <button
                          className={styles.checkBtn}
                          onClick={() => toggleResource(ex.resource.id)}
                          aria-label={t.resource.markAs(ex.resource.title, done)}
                        >
                          {done ? (
                            <CheckCircle2 size={20} />
                          ) : (
                            <Circle size={20} />
                          )}
                        </button>
                        <div className={styles.exerciseInfo}>
                          <span className={styles.exerciseTitle}>{ex.resource.title}</span>
                          <span className={styles.exerciseMeta}>
                            <Link to={`/chapter/${ex.chapter.id}`} className={styles.chapterLink}>
                              {t.projectsPage.fromChapter(ex.chapter.title)}
                            </Link>
                            <span className={styles.dot}>·</span>
                            {t.projectsPage.duration(ex.resource.durationMinutes)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
