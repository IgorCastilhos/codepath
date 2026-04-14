import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { curriculum } from '../data/curriculum';
import { getAllChapters } from '../domain/milestone';
import {
  computeCompletionPercent,
  createDefaultProgress,
  deriveStatuses,
  derivePhaseStatuses,
  type MilestoneStatus,
  type ProgressState,
} from '../domain/progress';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { LocalStorageProgressRepository } from '../storage/local-storage-repository';
import { SupabaseProgressRepository } from '../storage/supabase-progress-repository';
import { mergeLocalProgressOnFirstLogin } from '../storage/merge-progress';
import type { ProgressRepository } from '../storage/progress-repository';

const localRepo: ProgressRepository =
  typeof window !== 'undefined'
    ? new LocalStorageProgressRepository(window.localStorage)
    : {
        load: () => createDefaultProgress(),
        save: () => {},
        reset: () => {},
      };

const allChapters = getAllChapters(curriculum);

export interface UseProgressResult {
  progress: ProgressState;
  loading: boolean;
  /** Status per chapter id */
  statuses: Record<string, MilestoneStatus>;
  /** Status per phase id */
  phaseStatuses: Record<string, MilestoneStatus>;
  completionPercent: number;
  toggleResource: (resourceId: string) => void;
  resetProgress: () => void;
  setLastVisited: (milestoneId: string) => void;
}

export function useProgress(): UseProgressResult {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressState>(() => {
    const local = localRepo.load();
    return local instanceof Promise ? createDefaultProgress() : local;
  });
  const [loading, setLoading] = useState(false);

  const repoRef = useRef<ProgressRepository>(localRepo);

  useEffect(() => {
    if (user && supabase) {
      const supaRepo = new SupabaseProgressRepository(supabase, user.id);
      repoRef.current = supaRepo;
      setLoading(true);

      (async () => {
        await mergeLocalProgressOnFirstLogin(supabase, user.id);
        const loaded = await supaRepo.load();
        setProgress(loaded);
        setLoading(false);
      })();
    } else {
      repoRef.current = localRepo;
      const loaded = localRepo.load();
      if (loaded instanceof Promise) {
        loaded.then(setProgress);
      } else {
        setProgress(loaded);
      }
    }
  }, [user]);

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
        repoRef.current.save(next);
        return next;
      });
    },
    [],
  );

  const resetProgress = useCallback(() => {
    repoRef.current.reset();
    setProgress(createDefaultProgress());
  }, []);

  const setLastVisited = useCallback(
    (milestoneId: string) => {
      setProgress((prev) => {
        if (prev.lastVisitedMilestoneId === milestoneId) return prev;
        const next: ProgressState = {
          ...prev,
          lastVisitedMilestoneId: milestoneId,
          updatedAt: new Date().toISOString(),
        };
        repoRef.current.save(next);
        return next;
      });
    },
    [],
  );

  const statuses = useMemo(() => deriveStatuses(allChapters, progress), [progress]);
  const phaseStatuses = useMemo(() => derivePhaseStatuses(curriculum, statuses), [statuses]);
  const completionPercent = useMemo(
    () => computeCompletionPercent(allChapters, progress),
    [progress],
  );

  return {
    progress,
    loading,
    statuses,
    phaseStatuses,
    completionPercent,
    toggleResource,
    resetProgress,
    setLastVisited,
  };
}
