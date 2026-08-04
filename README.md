# Eda Beyter — Personal Site

A one-page personal site: who she is right now, not just a résumé.

## Why it's built this way

The site leans on a swimming-pool visual language (lane-rope dividers, a
scoreboard strip, stopwatch-style numerals) because competitive swimming is
the one constant behind everything else she does. Current roles — Model UN
logistics, the entrepreneurship club, active investing — are front and
center under "Currently"; finished achievements (swim titles, TEDx, HSBC)
sit in a quieter "Achievements" list below, present but not competing for
attention.

The centerpiece is an interactive "orbit" feature: a center "EB" mark
representing her, with four things running in parallel in her life —
swimming, Model UN, building, investing — orbiting around it. Tapping a
lane opens its details.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui, with
framer-motion for scroll reveals and the orbit interactions. Deploys as a
standard Next.js app on Vercel.

## Local development

```
npm install
npm run dev
```

## Adding shadcn components

```
npx shadcn@latest add <component>
```

Components land in `src/components/ui` (the shadcn convention) — keep new
ones there so the CLI can find and upgrade them later.

## Chatbot

A chat widget in the bottom-right corner lets visitors ask about Eda. It
answers only from `profile.md` (never invents information) via a Next.js
API route (`src/app/api/chat`) that proxies to the academy's Bedrock
endpoint — the API key stays server-side and is never sent to the browser.

Requires these environment variables (set in `.env.local` for local dev,
never committed):

```
BEDROCK_API_KEY=
BEDROCK_API_URL=
BEDROCK_MODEL=
```

## Deployment

Deployed on Vercel, linked via the existing `eda-beyter` project.

Environment variables aren't picked up from `.env.local` automatically —
add `BEDROCK_API_KEY`, `BEDROCK_API_URL`, and `BEDROCK_MODEL` to the
project's Vercel settings (or via `vercel env add`) and trigger a new
deployment after adding them.
