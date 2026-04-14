import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, Code, ArrowRight } from 'lucide-react';
import type { SearchResultItem } from '../../hooks/use-search';
import styles from './SearchResults.module.css';

interface Props {
  results: SearchResultItem[];
  onClose: () => void;
}

const TYPE_ICON: Record<string, React.ReactNode> = {
  reading: <BookOpen size={14} />,
  video: <Play size={14} />,
  exercise: <Code size={14} />,
};

export function SearchResults({ results, onClose }: Props) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => setActiveIndex(0), [results]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === 'Enter' && results[activeIndex]) {
        e.preventDefault();
        goTo(results[activeIndex]);
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [results, activeIndex, onClose]);

  function goTo(item: SearchResultItem) {
    if (item.resourceId && item.resourceType === 'video') {
      navigate(`/chapter/${item.milestoneId}/video/${item.resourceId}`);
    } else {
      navigate(`/chapter/${item.milestoneId}`);
    }
    onClose();
  }

  if (results.length === 0) return null;

  return (
    <div ref={ref} className={styles.dropdown}>
      {results.map((item, i) => (
        <button
          key={`${item.milestoneId}-${item.resourceId ?? 'ms'}`}
          className={`${styles.item} ${i === activeIndex ? styles.itemActive : ''}`}
          onClick={() => goTo(item)}
          onMouseEnter={() => setActiveIndex(i)}
        >
          <span className={styles.icon}>
            {item.resourceType ? TYPE_ICON[item.resourceType] : <ArrowRight size={14} />}
          </span>
          <span className={styles.text}>
            <span className={styles.title}>
              {item.resourceTitle ?? item.milestoneTitle}
            </span>
            {item.resourceTitle && (
              <span className={styles.meta}>Phase {item.milestoneOrder} — {item.milestoneTitle}</span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
