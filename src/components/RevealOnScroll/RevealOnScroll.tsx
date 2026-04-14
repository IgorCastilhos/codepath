import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './RevealOnScroll.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function RevealOnScroll({ children, className, as = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [styles.reveal, visible ? styles.in : '', className]
    .filter(Boolean)
    .join(' ');

  if (as === 'section') {
    return <section ref={ref as React.RefObject<HTMLElement>} className={classes}>{children}</section>;
  }
  if (as === 'article') {
    return <article ref={ref as React.RefObject<HTMLElement>} className={classes}>{children}</article>;
  }
  return <div ref={ref as React.RefObject<HTMLDivElement>} className={classes}>{children}</div>;
}
