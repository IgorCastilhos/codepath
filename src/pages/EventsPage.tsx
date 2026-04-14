import { CalendarDays, Bell } from 'lucide-react';
import { useTranslation } from '../i18n';
import styles from './EventsPage.module.css';

export function EventsPage() {
  const { t } = useTranslation();

  const events = [
    { title: t.eventsPage.sampleEvent1Title, date: t.eventsPage.sampleEvent1Date, tag: t.eventsPage.sampleEvent1Tag },
    { title: t.eventsPage.sampleEvent2Title, date: t.eventsPage.sampleEvent2Date, tag: t.eventsPage.sampleEvent2Tag },
    { title: t.eventsPage.sampleEvent3Title, date: t.eventsPage.sampleEvent3Date, tag: t.eventsPage.sampleEvent3Tag },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1>{t.eventsPage.title}</h1>
          <p className={styles.desc}>{t.eventsPage.description}</p>
        </header>

        {/* Coming soon banner */}
        <div className={styles.banner}>
          <CalendarDays size={40} strokeWidth={1.5} />
          <span className={styles.badge}>{t.eventsPage.comingSoon}</span>
          <p className={styles.bannerText}>{t.eventsPage.comingSoonDesc}</p>

          <div className={styles.notifyForm}>
            <input
              type="email"
              placeholder={t.eventsPage.emailPlaceholder}
              className={styles.emailInput}
              disabled
            />
            <button className={styles.notifyBtn} disabled>
              <Bell size={16} />
              {t.eventsPage.notifyMe}
            </button>
          </div>
        </div>

        {/* Preview events */}
        <h2 className={styles.previewTitle}>{t.eventsPage.tba}</h2>
        <div className={styles.eventGrid}>
          {events.map((ev, i) => (
            <div key={i} className={styles.eventCard}>
              <div className={styles.eventTag}>{ev.tag}</div>
              <h3 className={styles.eventTitle}>{ev.title}</h3>
              <div className={styles.eventDate}>
                <CalendarDays size={14} />
                {ev.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
