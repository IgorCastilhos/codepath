import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Menu } from 'lucide-react';
import { useSearch } from '../../hooks/use-search';
import { SearchResults } from '../SearchResults/SearchResults';
import styles from './TopBar.module.css';

interface Props {
  onMenuClick: () => void;
  hideSidebar?: boolean;
}

export function TopBar({ onMenuClick, hideSidebar }: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useSearch(query);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery('');
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header className={`${styles.topbar} ${hideSidebar ? styles.noSidebar : ''}`}>
      {!hideSidebar && (
        <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Toggle menu">
          <Menu size={20} />
        </button>
      )}

      <div className={styles.searchWrapper}>
        <Search size={16} className={styles.searchIcon} />
        <input
          ref={inputRef}
          type="text"
          className={styles.searchInput}
          placeholder="Search content..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (query.length >= 2) setOpen(true); }}
        />
        <kbd className={styles.kbd}>⌘K</kbd>
        {open && results.length > 0 && (
          <SearchResults results={results} onClose={handleClose} />
        )}
      </div>
    </header>
  );
}
