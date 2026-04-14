import { describe, it, expect, beforeEach } from 'vitest';
import { LocalStorageProgressRepository, STORAGE_KEY } from './local-storage-repository';

class MockStorage implements Storage {
  private map = new Map<string, string>();
  get length(): number { return this.map.size; }
  clear(): void { this.map.clear(); }
  getItem(key: string): string | null { return this.map.get(key) ?? null; }
  key(index: number): string | null {
    return Array.from(this.map.keys())[index] ?? null;
  }
  removeItem(key: string): void { this.map.delete(key); }
  setItem(key: string, value: string): void { this.map.set(key, value); }
}

class ThrowingStorage extends MockStorage {
  override setItem(): void { throw new Error('QuotaExceeded'); }
}

describe('LocalStorageProgressRepository', () => {
  let storage: MockStorage;
  let repo: LocalStorageProgressRepository;

  beforeEach(() => {
    storage = new MockStorage();
    repo = new LocalStorageProgressRepository(storage);
  });

  it('load() returns a default state when storage is empty', () => {
    const state = repo.load();
    expect(state.version).toBe(1);
    expect(state.completedResourceIds).toEqual([]);
    expect(state.lastVisitedMilestoneId).toBeNull();
    expect(storage.getItem(STORAGE_KEY)).not.toBeNull();
  });

  it('load() returns a default state and overwrites on malformed JSON', () => {
    storage.setItem(STORAGE_KEY, '{not json');
    const state = repo.load();
    expect(state.version).toBe(1);
    const raw = storage.getItem(STORAGE_KEY);
    expect(raw).not.toBe('{not json');
  });

  it('load() returns default on wrong schema version', () => {
    storage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 99, completedResourceIds: [], lastVisitedMilestoneId: null, updatedAt: 'x' }),
    );
    const state = repo.load();
    expect(state.version).toBe(1);
  });

  it('save() stamps updatedAt and persists', () => {
    const initial = repo.load();
    const next = { ...initial, completedResourceIds: ['x'] };
    repo.save(next);
    const loaded = repo.load();
    expect(loaded.completedResourceIds).toEqual(['x']);
    expect(loaded.updatedAt).not.toBe('');
  });

  it('reset() clears the key', () => {
    repo.save({ ...repo.load(), completedResourceIds: ['y'] });
    repo.reset();
    expect(storage.getItem(STORAGE_KEY)).toBeNull();
  });

  it('save() never throws on quota errors', () => {
    const throwing = new ThrowingStorage();
    const r = new LocalStorageProgressRepository(throwing);
    expect(() => r.save({ version: 1, completedResourceIds: [], lastVisitedMilestoneId: null, updatedAt: '' }))
      .not.toThrow();
  });

  it('load() never throws when getItem throws', () => {
    const hostile: Storage = {
      length: 0,
      clear() {},
      getItem() { throw new Error('boom'); },
      key() { return null; },
      removeItem() {},
      setItem() {},
    };
    const r = new LocalStorageProgressRepository(hostile);
    expect(() => r.load()).not.toThrow();
  });
});
