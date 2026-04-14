import {
  createDefaultProgress,
  isValidProgress,
  type ProgressState,
} from '../domain/progress';
import type { ProgressRepository } from './progress-repository';

export const STORAGE_KEY = 'codepath:progress:v1';

export class LocalStorageProgressRepository implements ProgressRepository {
  private readonly storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  load(): ProgressState {
    try {
      const raw = this.storage.getItem(STORAGE_KEY);
      if (raw === null) return this.seedDefault();
      const parsed: unknown = JSON.parse(raw);
      if (!isValidProgress(parsed)) return this.seedDefault();
      return parsed;
    } catch {
      return this.seedDefault();
    }
  }

  save(state: ProgressState): void {
    const stamped: ProgressState = { ...state, updatedAt: new Date().toISOString() };
    try {
      this.storage.setItem(STORAGE_KEY, JSON.stringify(stamped));
    } catch (err) {
      console.warn('[codepath] failed to persist progress', err);
    }
  }

  reset(): void {
    try {
      this.storage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn('[codepath] failed to reset progress', err);
    }
  }

  private seedDefault(): ProgressState {
    const fresh = createDefaultProgress();
    try {
      this.storage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch {
      // swallow — load() must never throw
    }
    return fresh;
  }
}
