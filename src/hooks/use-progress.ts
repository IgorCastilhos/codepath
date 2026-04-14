import { useCallback, useMemo, useState } from 'react';
import { curriculum } from '../data/curriculum';
import {
  computeCompletionPercent,
  createDefaultProgress,
  deriveStatuses,
  type MilestoneStatus,
  type ProgressState,
} from '../domain/progress';
import { LocalStorageProgressRepository } from '../storage/local-storage-repository';
import type { ProgressRepository } from '../storage/progress-repository';

const repository: ProgressRepository =
  typeof window !== 'undefined'
    ? new LocalStorageProgressRepository(window.localStorage)
    : {
        load: () => createDefaultProgress(),
        save: () => {},
        reset: () => {},
      };

export interface UseProgressResult {
  progress: ProgressState;
  statuses: Record<string, MilestoneStatus>;
  completionPercent: number;
  toggleResource: (resourceId: string) => void;
  resetProgress: () => void;
  setLastVisited: (milestoneId: string) => void;
}

export function useProgress(): UseProgressResult {
  const [progress, setProgress] = useState<ProgressState>(() => repository.load());

  const update = useCallback((next: ProgressState) => {
    setProgress(next);
    repository.save(next);
  }, []);

  const toggleResource = useCallback(
    (resourceId: string) => {
      setProgress((prev) => {
        const set = new Set(prev.completedResourceIds);
        if (set.has(resourceId)) set.delete(resourceId);
        else set.add(resourceId);
        const next: ProgressState = {
          ...prev,
          completedResourceIds: Array.from(set),
          updatedAt: new Date().toISOString(),
        };
        repository.save(next);
        return next;
      });
    },
    [],
  );

  const resetProgress = useCallback(() => {
    repository.reset();
    update(createDefaultProgress());
  }, [update]);

  const setLastVisited = useCallback(
    (milestoneId: string) => {
      setProgress((prev) => {
        if (prev.lastVisitedMilestoneId === milestoneId) return prev;
        const next: ProgressState = {
          ...prev,
          lastVisitedMilestoneId: milestoneId,
          updatedAt: new Date().toISOString(),
        };
        repository.save(next);
        return next;
      });
    },
    [],
  );

  const statuses = useMemo(() => deriveStatuses(curriculum, progress), [progress]);
  const completionPercent = useMemo(
    () => computeCompletionPercent(curriculum, progress),
    [progress],
  );

  return {
    progress,
    statuses,
    completionPercent,
    toggleResource,
    resetProgress,
    setLastVisited,
  };
}
