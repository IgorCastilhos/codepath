-- user_progress: stores per-user learning progress
create table if not exists user_progress (
  user_id uuid references auth.users(id) on delete cascade primary key,
  completed_resource_ids text[] not null default '{}',
  last_visited_milestone_id text,
  updated_at timestamptz not null default now()
);

-- Row-level security: users can only access their own row
alter table user_progress enable row level security;

create policy "Users manage own progress"
  on user_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
