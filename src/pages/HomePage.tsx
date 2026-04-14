import { ArrowRight } from 'lucide-react';
import { useCurriculum } from '../data/use-curriculum';
import { getAllChapters, findChapter, findPhaseForChapter } from '../domain/milestone';
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
  const phases = useCurriculum();
  const { t } = useTranslation();
  const { statuses, phaseStatuses, completionPercent, progress, resetProgress } = useProgress();

  const allChapters = getAllChapters(phases);

  // Find the active chapter (first with 'active' status)
  const activeChapter = allChapters.find((ch) => statuses[ch.id] === 'active');
  const lastVisitedChapter = progress.lastVisitedMilestoneId
    ? findChapter(phases, progress.lastVisitedMilestoneId)
    : null;
  const resumeChapter = lastVisitedChapter ?? activeChapter ?? allChapters[0]!;
  const resumePhase = findPhaseForChapter(phases, resumeChapter.id);

  const resumeLabel = progress.lastVisitedMilestoneId
    ? t.home.continuePhase(padOrder(resumePhase?.order ?? 1))
    : t.home.startPhase(padOrder(resumePhase?.order ?? 1));

  const totalResources = allChapters.reduce((n, ch) => n + ch.resources.length, 0);
  const totalMinutes = allChapters.reduce(
    (n, ch) => n + ch.resources.reduce((s, r) => s + r.durationMinutes, 0),
    0,
  );
  const totalHours = Math.round(totalMinutes / 60);
  const completedResources = progress.completedResourceIds.filter((id) =>
    allChapters.some((ch) => ch.resources.some((r) => r.id === id)),
  ).length;

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.gridDots} aria-hidden="true" />
        <div className={styles.heroDivider} aria-hidden="true" />

        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{t.home.meta}</span>
        </div>

        <h1 className={styles.headline}>{t.home.headline1}</h1>
        <p className={styles.tagline}>{t.home.lede}</p>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{phases.length}</span>
            <span className={styles.statLabel}>{t.home.statPhases}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{totalResources}+</span>
            <span className={styles.statLabel}>{t.home.statResources}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{totalHours}h+</span>
            <span className={styles.statLabel}>{t.home.statHours}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <ButtonLink to={`/chapter/${resumeChapter.id}`} variant="primary">
            {resumeLabel}
            <ArrowRight size={16} />
          </ButtonLink>
          <ButtonAnchor href="#roadmap" variant="ghost">
            {t.home.seeRoadmap}
          </ButtonAnchor>
        </div>
      </header>

      <section id="roadmap">
        <div className="container">
          <RevealOnScroll>
            <span className="eyebrow">{t.home.eyebrow1}</span>
            <h2>{t.home.sectionTitle1a}<br /><span className="italic">{t.home.sectionTitle1b}</span></h2>
          </RevealOnScroll>
          <RoadmapStage phases={phases} phaseStatuses={phaseStatuses} />
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
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className="container">
          <h2 className={styles.ctaHeadline}>
            {t.home.ctaTitle} <span className={styles.ctaHighlight}>{t.home.ctaHighlight}</span>
          </h2>
          <div className={styles.ctaActions}>
            <ButtonLink to={`/chapter/${resumeChapter.id}`} variant="primary">
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
