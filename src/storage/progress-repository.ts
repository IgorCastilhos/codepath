import type { ProgressState } from '../domain/progress';

export interface ProgressRepository {
  load(): ProgressState | Promise<ProgressState>;
  save(state: ProgressState): void | Promise<void>;
  reset(): void | Promise<void>;
}
