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
        {/* Aurora animated background */}
        <div className={styles.aurora} aria-hidden="true">
          <div className={styles.auroraCenter} />
        </div>
        <div className={styles.gridDots} aria-hidden="true" />
        <div className={styles.floatingSymbols} aria-hidden="true">
          <span className={styles.symbol}>{'</>'}</span>
          <span className={styles.symbol}>{'{ }'}</span>
          <span className={styles.symbol}>{'( )'}</span>
          <span className={styles.symbol}>{'=>'}</span>
          <span className={styles.symbol}>{'[ ]'}</span>
          <span className={styles.symbol}>{'/**/'}</span>
        </div>
        <div className={styles.heroLine} aria-hidden="true" />

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

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{phases.length}</span>
              <span className={styles.statLabel}>{t.home.statPhases}</span>
            </div>
            <span className={styles.statDot} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>{totalResources}+</span>
              <span className={styles.statLabel}>{t.home.statResources}</span>
            </div>
            <span className={styles.statDot} aria-hidden="true" />
            <div className={styles.stat}>
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
        <div className={styles.ctaAurora} aria-hidden="true" />
        <div className="container">
          <h2 className={styles.ctaHeadline}>
            {t.home.ctaTitle} <span className={styles.grad}>{t.home.ctaHighlight}</span>
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
