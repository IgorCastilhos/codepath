import type { Chapter, Phase } from './milestone';

export type MilestoneStatus = 'locked' | 'upcoming' | 'active' | 'completed';

export interface ProgressState {
  version: 1;
  completedResourceIds: string[];
  lastVisitedMilestoneId: string | null;
  updatedAt: string;
}

export function createDefaultProgress(now: () => Date = () => new Date()): ProgressState {
  return {
    version: 1,
    completedResourceIds: [],
    lastVisitedMilestoneId: null,
    updatedAt: now().toISOString(),
  };
}

export function isValidProgress(value: unknown): value is ProgressState {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    v.version === 1 &&
    Array.isArray(v.completedResourceIds) &&
    v.completedResourceIds.every((id) => typeof id === 'string') &&
    (v.lastVisitedMilestoneId === null || typeof v.lastVisitedMilestoneId === 'string') &&
    typeof v.updatedAt === 'string'
  );
}

export function isChapterCompleted(
  chapter: Chapter,
  completed: ReadonlySet<string>,
): boolean {
  if (chapter.resources.length === 0) return false;
  return chapter.resources.every((r) => completed.has(r.id));
}

/** @deprecated Use isChapterCompleted */
export const isMilestoneCompleted = isChapterCompleted;

/**
 * Derive sequential status for chapters (globally ordered 1..N).
 * Works exactly as before — first incomplete = active, rest locked.
 */
export function deriveStatuses(
  chapters: readonly Chapter[],
  progress: ProgressState,
): Record<string, MilestoneStatus> {
  const completed = new Set(progress.completedResourceIds);
  const sorted = [...chapters].sort((a, b) => a.order - b.order);

  const result: Record<string, MilestoneStatus> = {};
  const isDone = sorted.map((ch) => isChapterCompleted(ch, completed));

  let activeAssigned = false;
  for (let i = 0; i < sorted.length; i++) {
    const chapter = sorted[i]!;
    if (isDone[i]) {
      result[chapter.id] = 'completed';
      continue;
    }
    const prevDone = i === 0 ? true : isDone[i - 1]!;
    if (!activeAssigned && prevDone) {
      result[chapter.id] = 'active';
      activeAssigned = true;
    } else if (prevDone) {
      result[chapter.id] = 'upcoming';
    } else {
      result[chapter.id] = 'locked';
    }
  }
  return result;
}

/**
 * Derive phase-level status from its chapters' statuses.
 */
export function derivePhaseStatuses(
  phases: readonly Phase[],
  chapterStatuses: Record<string, MilestoneStatus>,
): Record<string, MilestoneStatus> {
  const result: Record<string, MilestoneStatus> = {};
  for (const phase of phases) {
    const statuses = phase.chapters.map((ch) => chapterStatuses[ch.id] ?? 'locked');
    if (statuses.every((s) => s === 'completed')) {
      result[phase.id] = 'completed';
    } else if (statuses.some((s) => s === 'active' || s === 'upcoming')) {
      result[phase.id] = 'active';
    } else {
      result[phase.id] = 'locked';
    }
  }
  return result;
}

export function computeCompletionPercent(
  chapters: readonly Chapter[],
  progress: ProgressState,
): number {
  const total = chapters.reduce((sum, ch) => sum + ch.resources.length, 0);
  if (total === 0) return 0;
  const completed = new Set(progress.completedResourceIds);
  let done = 0;
  for (const ch of chapters) {
    for (const r of ch.resources) if (completed.has(r.id)) done++;
  }
  return Math.round((done / total) * 100);
}
