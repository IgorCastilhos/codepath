import { describe, it, expect } from 'vitest';
import {
  createDefaultProgress,
  deriveStatuses,
  derivePhaseStatuses,
  computeCompletionPercent,
  isValidProgress,
} from './progress';
import type { Chapter, Phase } from './milestone';

function res(id: string): Chapter['resources'][number] {
  return { id, type: 'reading', title: id, url: '#', durationMinutes: 5 };
}

const m1: Chapter = {
  id: 'a', phaseId: 'p1', order: 1, title: 'A', description: '', longDescription: '',
  resources: [res('a1'), res('a2')],
};
const m2: Chapter = {
  id: 'b', phaseId: 'p1', order: 2, title: 'B', description: '', longDescription: '',
  resources: [res('b1')],
};
const m3: Chapter = {
  id: 'c', phaseId: 'p2', order: 3, title: 'C', description: '', longDescription: '',
  resources: [res('c1')],
};
const chapters = [m1, m2, m3];

const phases: Phase[] = [
  {
    id: 'p1', order: 1, title: 'P1', description: '', longDescription: '',
    chapters: [m1, m2],
  },
  {
    id: 'p2', order: 2, title: 'P2', description: '', longDescription: '',
    chapters: [m3],
  },
];

describe('deriveStatuses', () => {
  it('first chapter active when progress empty, rest locked', () => {
    const p = createDefaultProgress();
    const s = deriveStatuses(chapters, p);
    expect(s.a).toBe('active');
    expect(s.b).toBe('locked');
    expect(s.c).toBe('locked');
  });

  it('first complete → second active, third locked', () => {
    const p = { ...createDefaultProgress(), completedResourceIds: ['a1', 'a2'] };
    const s = deriveStatuses(chapters, p);
    expect(s.a).toBe('completed');
    expect(s.b).toBe('active');
    expect(s.c).toBe('locked');
  });

  it('partial first chapter stays active not completed', () => {
    const p = { ...createDefaultProgress(), completedResourceIds: ['a1'] };
    const s = deriveStatuses(chapters, p);
    expect(s.a).toBe('active');
    expect(s.b).toBe('locked');
  });

  it('all complete → all completed, no active', () => {
    const p = {
      ...createDefaultProgress(),
      completedResourceIds: ['a1', 'a2', 'b1', 'c1'],
    };
    const s = deriveStatuses(chapters, p);
    expect(s.a).toBe('completed');
    expect(s.b).toBe('completed');
    expect(s.c).toBe('completed');
    expect(Object.values(s)).not.toContain('active');
  });

  it('respects order regardless of input array order', () => {
    const p = { ...createDefaultProgress(), completedResourceIds: ['a1', 'a2'] };
    const s = deriveStatuses([m3, m1, m2], p);
    expect(s.a).toBe('completed');
    expect(s.b).toBe('active');
    expect(s.c).toBe('locked');
  });
});

describe('derivePhaseStatuses', () => {
  it('first phase active when no progress', () => {
    const chapterStatuses = deriveStatuses(chapters, createDefaultProgress());
    const ps = derivePhaseStatuses(phases, chapterStatuses);
    expect(ps.p1).toBe('active');
    expect(ps.p2).toBe('locked');
  });

  it('first phase completed, second active', () => {
    const p = { ...createDefaultProgress(), completedResourceIds: ['a1', 'a2', 'b1'] };
    const chapterStatuses = deriveStatuses(chapters, p);
    const ps = derivePhaseStatuses(phases, chapterStatuses);
    expect(ps.p1).toBe('completed');
    expect(ps.p2).toBe('active');
  });

  it('all phases completed', () => {
    const p = { ...createDefaultProgress(), completedResourceIds: ['a1', 'a2', 'b1', 'c1'] };
    const chapterStatuses = deriveStatuses(chapters, p);
    const ps = derivePhaseStatuses(phases, chapterStatuses);
    expect(ps.p1).toBe('completed');
    expect(ps.p2).toBe('completed');
  });
});

describe('computeCompletionPercent', () => {
  it('0 when empty', () => {
    expect(computeCompletionPercent(chapters, createDefaultProgress())).toBe(0);
  });
  it('100 when all done', () => {
    const p = {
      ...createDefaultProgress(),
      completedResourceIds: ['a1', 'a2', 'b1', 'c1'],
    };
    expect(computeCompletionPercent(chapters, p)).toBe(100);
  });
  it('rounded partial', () => {
    const p = { ...createDefaultProgress(), completedResourceIds: ['a1'] };
    expect(computeCompletionPercent(chapters, p)).toBe(25);
  });
});

describe('isValidProgress', () => {
  it('accepts valid state', () => {
    expect(isValidProgress(createDefaultProgress())).toBe(true);
  });
  it('rejects wrong version', () => {
    expect(isValidProgress({ ...createDefaultProgress(), version: 2 })).toBe(false);
  });
  it('rejects non-object', () => {
    expect(isValidProgress(null)).toBe(false);
    expect(isValidProgress('x')).toBe(false);
  });
  it('rejects bad array', () => {
    expect(isValidProgress({ ...createDefaultProgress(), completedResourceIds: [1] }))
      .toBe(false);
  });
});
