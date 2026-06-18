# CLAUDE.md

Personal website for **Zhifei Li** (ML systems researcher), served at **zhifei.li**.
Astro 5, no UI framework, hand-written CSS. Everything lives under `src/` and `public/`.

## Commands

```bash
npm run dev       # local dev server (HMR) at localhost:4321
npm run build     # production build to dist/  — run before every commit
npm run preview   # serve the built dist/ (what GitHub Pages will ship)
npm run check     # astro check (type/diagnostics)
```

## Architecture

- `src/data/profile.ts` — **single source of truth** for all site content: bio, `publications`,
  `awards`, `news`, `openSource`, `service`, `links`. Exported `as const`. Edit data here, not in pages.
- `src/content/insights/*.md` — blog posts (Astro content collection `insights`; schema in
  `src/content.config.ts`: `title`, `date`, `tags`, `draft?`, `permalink?`).
- `src/pages/*.astro` — routes: `index`, `publications`, `about`, `insights/`, `insights/[slug]`.
  `posts/[...segments]` redirects old permalinks to `/insights/...`.
- `src/layouts/BaseLayout.astro` — shell: head, fonts, nav, footer, skip link.
- `src/styles/global.css` — the entire design system (see below).
- `public/` — served at site root: `public/images/`, `public/cv/andylizf_cv.pdf`, `public/CNAME`
  (custom domain). Reference as `/images/...`, `/cv/...`.

## Editing conventions

- **Add a publication**: append to `publications` in `profile.ts`. Fields: `year`, `title`, `authors`
  (comma-separated string; write `Zhifei Li` exactly — it's auto-highlighted; co-first is `Zhifei Li*`),
  `venue`, `note` (status: `Preprint` / `In submission` / `To appear`), optional `honor`
  (e.g. `Best Paper Award` → renders the reserved brass chip), `paperUrl`, `featured` (shows on home).
  Home "Selected work" = `featured` in array order; order the array by impact. Pubs page groups by `year`.
- **Add an award**: append to `awards` with `title`, `detail` (English + 中文名 + selectivity small-text),
  `date` as `"MMM YYYY"` or `"YYYY"`. Order doesn't matter — `index.astro` sorts newest-first via `awardRank`.
- **Add news**: prepend to `news` (`date`, `text`); manually ordered (handles non-month dates like `Fall 2026`).
- **Add a post**: new `.md` in `src/content/insights/` with frontmatter matching the schema.

## Design system — "Systems Schematic" (do not regress)

Drawn from the ML-systems + builder identity. Deliberately avoids the cream/terracotta/serif AI default.

- **Type**: `IBM Plex Mono` (`--mono`) is the voice of *data* — venues, dates, metrics, labels, author
  tags, nav. `Hanken Grotesk Variable` (`--sans`) carries prose. Fonts are **self-hosted via
  `@fontsource`** (imported in `BaseLayout.astro`) — do NOT reintroduce the Google Fonts CDN.
- **Color**: one structural accent, blueprint cobalt `--accent`; `--accent-deep` for long eyebrow runs.
  One reserved honor signal, brass `--signal`/`--signal-text`, used ONLY for awards. Keep this discipline.
- **Structure**: hairlines + whitespace, near-zero radius — no shadowed "plastic" cards. Two-column
  pages use a single vertical column rule (`.sidebar-stack`/`.meta-rail` `border-left`) to separate
  panels; collapses to a top border under 900px. There is no background grid (reads busy).
- **Gotcha**: `rem` is relative to `<html>` (16px), but `body` font-size is 17px. So `1rem` = 16px here.
  When sizing text, account for this — e.g. a "1rem" label is *smaller* than body copy.
- A11y floor to preserve: `:focus-visible`, skip link, WCAG-AA contrast, reduced-motion, ≥44px mobile taps.

## Deploy

- Push to `main` → GitHub Actions (`.github/workflows/`) runs `npm run build` → GitHub Pages.
- **Gotcha**: if the deploy job is rejected with "Branch main is not allowed to deploy", the
  `github-pages` environment's deployment-branch-policies is missing `main` — add it there.
- Verify live after deploy: `curl -s https://zhifei.li/ | grep <marker>` and check the Actions run.
