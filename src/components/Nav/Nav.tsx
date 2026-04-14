import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link to="/" className={styles.brand}>
        <span className={styles.brandIcon} aria-hidden="true">
          <span /><span /><span />
        </span>
        <span>CODEPATH</span>
      </Link>
      <ul className={styles.list}>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#progress">Progress</a></li>
        <li><a href="#cta">Begin</a></li>
      </ul>
    </nav>
  );
}
