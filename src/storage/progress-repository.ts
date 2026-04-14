import type { ProgressState } from '../domain/progress';

export interface ProgressRepository {
  load(): ProgressState;
  save(state: ProgressState): void;
  reset(): void;
}
