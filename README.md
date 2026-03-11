# andylizf.github.io (Astro)

Personal website rebuilt with Astro for a content-first "researcher + entrepreneur" publishing workflow.

## What changed

- Migrated from Jekyll/academicpages to Astro.
- Added an insight-focused structure:
  - `/` for thesis-driven homepage
  - `/insights` for all posts
  - `/insights/[slug]` for post detail pages
- Existing `_posts/*.md` were copied into `src/content/insights/` for Astro content collections.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Content workflow

Add a new markdown file under `src/content/insights/`:

```md
---
title: "Your title"
date: 2026-03-07
tags:
  - thesis
  - systems
---

Your memo content.
```

## Deploy

GitHub Actions builds Astro and publishes `dist/` to GitHub Pages via `.github/workflows/pages.yml`.
