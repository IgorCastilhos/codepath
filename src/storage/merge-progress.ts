import type { SupabaseClient } from '@supabase/supabase-js';
import { STORAGE_KEY } from './local-storage-repository';
import { isValidProgress, type ProgressState } from '../domain/progress';

/**
 * On a user's first login (no existing Supabase row), merge any
 * localStorage progress into their Supabase account, then clear
 * the local copy so it doesn't re-merge later.
 */
export async function mergeLocalProgressOnFirstLogin(
  client: SupabaseClient,
  userId: string,
): Promise<void> {
  // Check if user already has a row in Supabase
  const { data: existing } = await client
    .from('user_progress')
    .select('user_id')
    .eq('user_id', userId)
    .single();

  if (existing) return; // Already has server progress — nothing to merge

  // Read localStorage progress
  let localProgress: ProgressState | null = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (isValidProgress(parsed) && parsed.completedResourceIds.length > 0) {
        localProgress = parsed;
      }
    }
  } catch {
    // No local progress to merge
  }

  if (!localProgress) return;

  // Insert merged progress into Supabase
  const { error } = await client
    .from('user_progress')
    .upsert({
      user_id: userId,
      completed_resource_ids: localProgress.completedResourceIds,
      last_visited_milestone_id: localProgress.lastVisitedMilestoneId,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.warn('[codepath] failed to merge local progress:', error.message);
    return;
  }

  // Clear localStorage copy after successful merge
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Non-critical
  }
}
