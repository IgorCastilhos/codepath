import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Translations } from './types';
import { ptBR } from './pt-BR';
import { en } from './en';

export type Locale = 'pt-BR' | 'en';

const STORAGE_KEY = 'codepath:locale';
const DICTIONARIES: Record<Locale, Translations> = { 'pt-BR': ptBR, en };

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'pt-BR',
  setLocale: () => {},
  t: ptBR,
});

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'pt-BR') return stored;
  } catch { /* ignore */ }
  return 'pt-BR';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: DICTIONARIES[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
