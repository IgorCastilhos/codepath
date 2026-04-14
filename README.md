# CodePath

A learning platform for software engineering built with React + TypeScript + Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Authentication (GitHub OAuth via Supabase)

Authentication is **optional** — the app works without it (progress stored in localStorage). To enable GitHub login:

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a new project.

### 2. Enable GitHub OAuth provider

In your Supabase dashboard: **Authentication → Providers → GitHub**

- Create a GitHub OAuth App at [github.com/settings/developers](https://github.com/settings/developers)
- Set the callback URL to: `https://YOUR_PROJECT.supabase.co/auth/v1/callback`
- Copy the Client ID and Client Secret into the Supabase GitHub provider settings

### 3. Run the database migration

In the Supabase SQL Editor, run the contents of:

```
supabase/migrations/001_user_progress.sql
```

This creates the `user_progress` table with row-level security.

### 4. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your Supabase project URL and anon key (found in **Settings → API**):

```
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### How it works

- **Anonymous users**: Progress is stored in `localStorage`
- **Logged-in users**: Progress is synced to Supabase (PostgreSQL)
- **First login**: Any existing localStorage progress is merged into the user's Supabase account

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run test` | Run tests |
| `npm run lint` | Lint with ESLint |
