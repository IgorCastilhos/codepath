import { useMemo } from 'react';
import { useTranslation, type Locale } from '../i18n';
import { curriculum as curriculumEn } from './curriculum';
import { curriculumPtBR } from './curriculum-pt-BR';
import type { Milestone } from '../domain/milestone';

const DATASETS: Record<Locale, readonly Milestone[]> = {
  en: curriculumEn,
  'pt-BR': curriculumPtBR,
};

export function useCurriculum(): readonly Milestone[] {
  const { locale } = useTranslation();
  return useMemo(() => DATASETS[locale], [locale]);
}
