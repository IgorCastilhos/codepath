import type { Milestone } from './milestone';

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

export function isMilestoneCompleted(
  milestone: Milestone,
  completed: ReadonlySet<string>,
): boolean {
  if (milestone.resources.length === 0) return false;
  return milestone.resources.every((r) => completed.has(r.id));
}

export function deriveStatuses(
  milestones: readonly Milestone[],
  progress: ProgressState,
): Record<string, MilestoneStatus> {
  const completed = new Set(progress.completedResourceIds);
  const sorted = [...milestones].sort((a, b) => a.order - b.order);

  const result: Record<string, MilestoneStatus> = {};
  const isDone = sorted.map((m) => isMilestoneCompleted(m, completed));

  let activeAssigned = false;
  for (let i = 0; i < sorted.length; i++) {
    const milestone = sorted[i]!;
    if (isDone[i]) {
      result[milestone.id] = 'completed';
      continue;
    }
    const prevDone = i === 0 ? true : isDone[i - 1]!;
    if (!activeAssigned && prevDone) {
      result[milestone.id] = 'active';
      activeAssigned = true;
    } else if (prevDone) {
      result[milestone.id] = 'upcoming';
    } else {
      result[milestone.id] = 'locked';
    }
  }
  return result;
}

export function computeCompletionPercent(
  milestones: readonly Milestone[],
  progress: ProgressState,
): number {
  const total = milestones.reduce((sum, m) => sum + m.resources.length, 0);
  if (total === 0) return 0;
  const completed = new Set(progress.completedResourceIds);
  let done = 0;
  for (const m of milestones) {
    for (const r of m.resources) if (completed.has(r.id)) done++;
  }
  return Math.round((done / total) * 100);
}
