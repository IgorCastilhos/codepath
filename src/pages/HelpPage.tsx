import { Users, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n';
import styles from './HelpPage.module.css';

export function HelpPage() {
  const { t } = useTranslation();

  const steps = [
    { title: t.helpPage.step1Title, desc: t.helpPage.step1Desc },
    { title: t.helpPage.step2Title, desc: t.helpPage.step2Desc },
    { title: t.helpPage.step3Title, desc: t.helpPage.step3Desc },
    { title: t.helpPage.step4Title, desc: t.helpPage.step4Desc },
  ];

  const faqs = [
    { q: t.helpPage.faq1Q, a: t.helpPage.faq1A },
    { q: t.helpPage.faq2Q, a: t.helpPage.faq2A },
    { q: t.helpPage.faq3Q, a: t.helpPage.faq3A },
    { q: t.helpPage.faq4Q, a: t.helpPage.faq4A },
    { q: t.helpPage.faq5Q, a: t.helpPage.faq5A },
    { q: t.helpPage.faq6Q, a: t.helpPage.faq6A },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1>{t.helpPage.title}</h1>
          <p className={styles.desc}>{t.helpPage.description}</p>
        </header>

        {/* Getting started */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.helpPage.gettingStarted}</h2>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.stepCard}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.helpPage.faq}</h2>
          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.q}</summary>
                <p className={styles.faqAnswer}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Community CTA */}
        <section className={styles.communityCta}>
          <Users size={32} strokeWidth={1.5} />
          <h2>{t.helpPage.needHelp}</h2>
          <p>{t.helpPage.needHelpDesc}</p>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.communityLink}
          >
            {t.helpPage.joinCommunity}
            <ExternalLink size={14} />
          </a>
        </section>
      </div>
    </div>
  );
}
