import styles from './PlaceholderPage.module.css';

interface Props {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: Props) {
  return (
    <div className={styles.page}>
      <div className="container">
        <span className="eyebrow">Coming soon</span>
        <h1>{title}</h1>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
    </div>
  );
}
