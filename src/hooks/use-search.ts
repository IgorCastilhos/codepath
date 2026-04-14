import { useMemo } from 'react';
import { useCurriculum } from '../data/use-curriculum';

export interface SearchResultItem {
  milestoneId: string;
  milestoneTitle: string;
  milestoneOrder: number;
  resourceId?: string;
  resourceTitle?: string;
  resourceType?: string;
}

export function useSearch(query: string): SearchResultItem[] {
  const curriculum = useCurriculum();
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const results: SearchResultItem[] = [];

    for (const milestone of curriculum) {
      const mTitleMatch = milestone.title.toLowerCase().includes(q);
      const mDescMatch = milestone.description.toLowerCase().includes(q);

      if (mTitleMatch || mDescMatch) {
        results.push({
          milestoneId: milestone.id,
          milestoneTitle: milestone.title,
          milestoneOrder: milestone.order,
        });
      }

      for (const resource of milestone.resources) {
        if (resource.title.toLowerCase().includes(q)) {
          results.push({
            milestoneId: milestone.id,
            milestoneTitle: milestone.title,
            milestoneOrder: milestone.order,
            resourceId: resource.id,
            resourceTitle: resource.title,
            resourceType: resource.type,
          });
        }
      }
    }

    return results.slice(0, 20);
  }, [query, curriculum]);
}
