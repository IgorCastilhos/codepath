import { ArrowRight } from 'lucide-react';
import { useCurriculum } from '../data/use-curriculum';
import { useProgress } from '../hooks/use-progress';
import { useTranslation } from '../i18n';
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
  const curriculum = useCurriculum();
  const { t } = useTranslation();
  const { statuses, completionPercent, progress, resetProgress } = useProgress();

  const activeMilestone = curriculum.find((m) => statuses[m.id] === 'active');
  const lastVisited = progress.lastVisitedMilestoneId
    ? curriculum.find((m) => m.id === progress.lastVisitedMilestoneId)
    : null;
  const resumeTarget = lastVisited ?? activeMilestone ?? curriculum[0]!;
  const resumeLabel = progress.lastVisitedMilestoneId
    ? t.home.continuePhase(padOrder(resumeTarget.order))
    : t.home.startPhase(padOrder(resumeTarget.order));

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
            <span>{t.home.meta}</span>
            <span className={styles.live}>{t.home.live}</span>
          </div>
          <h1 className={styles.heroHeadline}>
            <span className={styles.row}><span>{t.home.headline1}</span></span>
            <span className={styles.row}>
              <span className="italic gradient-text">{t.home.headline2}</span>
            </span>
          </h1>
          <p className={styles.lede}>{t.home.lede}</p>
          <div className={styles.actions}>
            <ButtonLink to={`/chapter/${resumeTarget.id}`} variant="primary">
              {resumeLabel}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonAnchor href="#roadmap" variant="ghost">
              {t.home.seeRoadmap}
            </ButtonAnchor>
          </div>
        </div>
      </header>

      <section id="roadmap">
        <div className="container">
          <RevealOnScroll>
            <span className="eyebrow">{t.home.eyebrow1}</span>
            <h2>{t.home.sectionTitle1a}<br /><span className="italic">{t.home.sectionTitle1b}</span></h2>
          </RevealOnScroll>
          <RoadmapStage milestones={curriculum} statuses={statuses} />
        </div>
      </section>

      <section>
        <div className="container">
          <RevealOnScroll>
            <span className="eyebrow">{t.home.eyebrow2}</span>
            <h2>{t.home.sectionTitle2a}<br /><span className="italic">{t.home.sectionTitle2b}</span></h2>
            <p
              style={{
                maxWidth: '56ch',
                marginTop: 'var(--s-5)',
                color: 'var(--c-text-mute)',
                fontSize: '1.0625rem',
                lineHeight: 1.55,
              }}
            >
              {t.home.progressDescription}
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
            {t.home.ctaTitle} <span className={styles.grad}>{t.home.ctaHighlight}</span>
          </h2>
          <div className={styles.ctaActions}>
            <ButtonLink to={`/chapter/${resumeTarget.id}`} variant="primary">
              {resumeLabel}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonAnchor href="#roadmap" variant="ghost">
              {t.home.browseChapters}
            </ButtonAnchor>
          </div>
        </div>
      </section>

      <Footer onReset={resetProgress} />
    </>
  );
}
