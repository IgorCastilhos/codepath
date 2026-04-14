import type { SupabaseClient } from '@supabase/supabase-js';
import {
  createDefaultProgress,
  type ProgressState,
} from '../domain/progress';
import type { ProgressRepository } from './progress-repository';

export class SupabaseProgressRepository implements ProgressRepository {
  private readonly client: SupabaseClient;
  private readonly userId: string;

  constructor(client: SupabaseClient, userId: string) {
    this.client = client;
    this.userId = userId;
  }

  async load(): Promise<ProgressState> {
    const { data, error } = await this.client
      .from('user_progress')
      .select('completed_resource_ids, last_visited_milestone_id, updated_at')
      .eq('user_id', this.userId)
      .single();

    if (error || !data) {
      return createDefaultProgress();
    }

    return {
      version: 1,
      completedResourceIds: data.completed_resource_ids ?? [],
      lastVisitedMilestoneId: data.last_visited_milestone_id ?? null,
      updatedAt: data.updated_at ?? new Date().toISOString(),
    };
  }

  async save(state: ProgressState): Promise<void> {
    const { error } = await this.client
      .from('user_progress')
      .upsert({
        user_id: this.userId,
        completed_resource_ids: state.completedResourceIds,
        last_visited_milestone_id: state.lastVisitedMilestoneId,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.warn('[codepath] failed to save progress to Supabase:', error.message);
    }
  }

  async reset(): Promise<void> {
    const { error } = await this.client
      .from('user_progress')
      .delete()
      .eq('user_id', this.userId);

    if (error) {
      console.warn('[codepath] failed to reset progress in Supabase:', error.message);
    }
  }
}
