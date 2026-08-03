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

The personal feature is a set of orbiting rings around a center "EB" mark,
each node representing one of the four things running in parallel in her
life right now (swimming, Model UN, building, investing) — built with plain
CSS animations, no external dependencies.

## Stack

Plain HTML/CSS/JS, no build step. Deploys as a static site.

## Local development

Open `index.html` directly, or serve it:

```
npx serve .
```

## Deployment

Deployed on Vercel as a static site (no framework preset needed).
