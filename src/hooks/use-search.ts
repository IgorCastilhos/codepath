import { useMemo } from 'react';
import { useCurriculum } from '../data/use-curriculum';

export interface SearchResultItem {
  /** chapter id (was milestoneId) */
  milestoneId: string;
  milestoneTitle: string;
  milestoneOrder: number;
  phaseTitle?: string;
  resourceId?: string;
  resourceTitle?: string;
  resourceType?: string;
}

export function useSearch(query: string): SearchResultItem[] {
  const phases = useCurriculum();
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const results: SearchResultItem[] = [];

    for (const phase of phases) {
      for (const chapter of phase.chapters) {
        const cTitleMatch = chapter.title.toLowerCase().includes(q);
        const cDescMatch = chapter.description.toLowerCase().includes(q);

        if (cTitleMatch || cDescMatch) {
          results.push({
            milestoneId: chapter.id,
            milestoneTitle: chapter.title,
            milestoneOrder: chapter.order,
            phaseTitle: phase.title,
          });
        }

        for (const resource of chapter.resources) {
          if (resource.title.toLowerCase().includes(q)) {
            results.push({
              milestoneId: chapter.id,
              milestoneTitle: chapter.title,
              milestoneOrder: chapter.order,
              phaseTitle: phase.title,
              resourceId: resource.id,
              resourceTitle: resource.title,
              resourceType: resource.type,
            });
          }
        }
      }
    }

    return results.slice(0, 20);
  }, [query, phases]);
}
