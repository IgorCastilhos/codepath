export type ResourceType = 'reading' | 'video' | 'exercise';

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  url: string;
  durationMinutes: number;
}

export interface Chapter {
  id: string;
  phaseId: string;
  order: number;
  title: string;
  description: string;
  longDescription: string;
  resources: Resource[];
}

export interface Phase {
  id: string;
  order: number;
  title: string;
  description: string;
  longDescription: string;
  chapters: Chapter[];
}

/** @deprecated Use Chapter instead */
export type Milestone = Chapter;

/* ── helpers ── */

export function getAllChapters(phases: readonly Phase[]): Chapter[] {
  return phases.flatMap((p) => [...p.chapters]);
}

export function findChapter(
  phases: readonly Phase[],
  chapterId: string,
): Chapter | undefined {
  for (const phase of phases) {
    const ch = phase.chapters.find((c) => c.id === chapterId);
    if (ch) return ch;
  }
  return undefined;
}

export function findPhaseForChapter(
  phases: readonly Phase[],
  chapterId: string,
): Phase | undefined {
  return phases.find((p) => p.chapters.some((c) => c.id === chapterId));
}
