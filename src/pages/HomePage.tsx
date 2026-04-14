import { ArrowRight } from 'lucide-react';
import { curriculum } from '../data/curriculum';
import { useProgress } from '../hooks/use-progress';
import { RoadmapStage } from '../components/RoadmapStage/RoadmapStage';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { RevealOnScroll } from '../components/RevealOnScroll/RevealOnScroll';
import { ButtonLink, ButtonAnchor } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import styles from './HomePage.module.css';

function padOrder(n: number): string {
  return n.toString().padStart(2, '0');
}

export function HomePage() {
  const { statuses, completionPercent, progress, resetProgress } = useProgress();

  const activeMilestone = curriculum.find((m) => statuses[m.id] === 'active');
  const lastVisited = progress.lastVisitedMilestoneId
    ? curriculum.find((m) => m.id === progress.lastVisitedMilestoneId)
    : null;
  const resumeTarget = lastVisited ?? activeMilestone ?? curriculum[0]!;
  const resumeLabel = progress.lastVisitedMilestoneId
    ? `Continue phase ${padOrder(resumeTarget.order)}`
    : `Start phase ${padOrder(resumeTarget.order)}`;

  const totalResources = curriculum.reduce((n, m) => n + m.resources.length, 0);
  const completedResources = progress.completedResourceIds.filter((id) =>
    curriculum.some((m) => m.resources.some((r) => r.id === id)),
  ).length;

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.spotMid} />
        <div className="container">
          <div className={styles.heroMeta}>
            <span>Roadmap System / V 1.0 — 2026</span>
            <span className={styles.live}>System live — 4 phases</span>
          </div>
          <h1 className={styles.heroHeadline}>
            <span className={styles.row}><span>Formação</span></span>
            <span className={styles.row}>
              <span className="italic gradient-text">Engenheiro.</span>
            </span>
          </h1>
          <p className={styles.lede}>
            A complete roadmap from Computer Science fundamentals to Clean Architecture and DDD.
            Four phases — Java & Node.js, PostgreSQL, TDD, Docker — every step toward production-grade engineering.
          </p>
          <div className={styles.actions}>
            <ButtonLink to={`/chapter/${resumeTarget.id}`} variant="primary">
              {resumeLabel}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonAnchor href="#roadmap" variant="ghost">
              See the roadmap
            </ButtonAnchor>
          </div>
        </div>
      </header>

      <section id="roadmap">
        <div className="container">
          <RevealOnScroll>
            <span className="eyebrow">01 / The path</span>
            <h2>Four phases,<br /><span className="italic">one living line.</span></h2>
          </RevealOnScroll>
          <RoadmapStage milestones={curriculum} statuses={statuses} />
        </div>
      </section>

      <section>
        <div className="container">
          <RevealOnScroll>
            <span className="eyebrow">02 / Progress</span>
            <h2>Your progress,<br /><span className="italic">captured locally.</span></h2>
            <p
              style={{
                maxWidth: '56ch',
                marginTop: 'var(--s-5)',
                color: 'var(--c-text-mute)',
                fontSize: '1.0625rem',
                lineHeight: 1.55,
              }}
            >
              Every checkbox you tick lives in your browser. No account, no sign-in,
              no cloud — close the tab, come back tomorrow, and pick up exactly where
              you left off.
            </p>
            <ProgressBar
              percent={completionPercent}
              completedCount={completedResources}
              totalCount={totalResources}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section id="cta" className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaHeadline}>
            Ready to <span className={styles.grad}>follow the path?</span>
          </h2>
          <div className={styles.ctaActions}>
            <ButtonLink to={`/chapter/${resumeTarget.id}`} variant="primary">
              {resumeLabel}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonAnchor href="#roadmap" variant="ghost">
              Browse chapters
            </ButtonAnchor>
          </div>
        </div>
      </section>

      <Footer onReset={resetProgress} />
    </>
  );
}
