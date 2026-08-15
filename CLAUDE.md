# CLAUDE.md

Personal website for **Zhifei Li** (ML systems researcher), served at **zhifei.li**.
Astro, no UI framework, hand-written CSS. Everything lives under `src/` and `public/`.

## Commands

```bash
npm run dev       # local dev server (HMR) at localhost:4321
npm run build     # production build to dist/  — run before every commit
npm run preview   # serve the built dist/ (what GitHub Pages will ship)
npm run check     # astro check (type/diagnostics)
```

**Don't upgrade TypeScript past 6** — `@astrojs/check` refuses to start on 7
(`assertCompatibleTypeScript` throws), so `npm run check` dies. Everything else can move freely.

## Architecture

- `src/data/profile.ts` — **single source of truth** for all site content: bio, `publications`,
  `awards`, `news`, `openSource`, `service`, `links`. Exported `as const`. Edit data here, not in pages.
- `src/components/Publication.astro` — one publication entry, shared by `index` and `publications`
  so the two never drift. `src/components/LinkedText.astro` — renders a plain string with known
  entities auto-linked.
- `src/lib/linkify.ts` — the `entityLinks` map (person/lab/venue/project → URL) behind `LinkedText`.
  `src/lib/github.ts` — build-time star counts.
- `src/content/insights/*.md` — blog posts (Astro content collection `insights` via the `glob`
  loader; schema in `src/content.config.ts`: `title`, `date`, `tags`, `draft?`, `permalink?`).
  Entry id is the filename (no extension); use `post.id` for routes, not `post.slug`.
- `src/pages/*.astro` — routes: `index`, `publications`, `about`, `insights/`, `insights/[slug]`.
  `posts/[...segments]` redirects old permalinks to `/insights/...`.
- `src/layouts/BaseLayout.astro` — shell: head, fonts, nav, footer, skip link.
- `src/styles/global.css` — the entire design system (see below).
- `public/` — served at site root: `public/images/`, `public/cv/andylizf_cv.pdf`, `public/CNAME`
  (custom domain). Reference as `/images/...`, `/cv/...`.
- `public/cv/andylizf_cv.pdf` — **a build artifact, not a source.** It is compiled from `CV.typ`
  in the private `andylizf/MyCV` repo (`./build.sh CV` → `out/CV.pdf`, then copy here). Never
  hand-edit the PDF, and **never add Typst CV source to this repo** — the site previously built
  from a stale fork of the CV, which is how a `Raised $300K seed funding` line (funding that
  never happened) stayed published for months after it was removed from the real CV. Updating
  the CV in MyCV does *not* update the site; refreshing this file is a separate, deliberate act,
  and only ever from `CV.typ` — never from an employer-targeted variant.

## His public profiles — this repo is the index

`profile.ts` is the source of truth for the *content*, but the same facts are mirrored on
surfaces this repo does not build. They drift silently and independently, and the drift is only
ever discovered by someone reading a stale claim. **When a fact about him changes, walk this
table** — it is the checklist, kept here because this repo is the one place that already holds
the canonical version of every field.

| Surface | Holds | How to update |
|---|---|---|
| **zhifei.li** (this repo) | Bio, publications, awards, news, open-source, links | Edit `src/data/profile.ts`, push |
| **CV** | Same facts, print form | Private repo `andylizf/MyCV` → `CV.typ`; `./build.sh`; see its `CLAUDE.md`. The published PDF here is a build artifact of it |
| **GitHub profile README** (`andylizf/andylizf`) | Short bio, top 4 papers, top 3 repos, contact | Edit that repo directly |
| **GitHub sidebar** (`andylizf`) | `bio`, `company`, `location`, `blog`, `email`, `twitter_username`, pinned repos | `gh api -X PATCH user -f <field>=...`; pinned repos via GraphQL |
| **Google Scholar** (`user=7MiEsfAAAAAJ`) | Publication venues, affiliation, homepage | Manual, requires Google login. **Venues do not auto-update** — an accepted paper keeps showing `arXiv preprint` until edited by hand |
| **LinkedIn** (`in/andylizf`) | Headline, position, education | Manual |

**Which surfaces a given change touches:**

- **Paper accepted** → `profile.ts` (`venue`, `note`, `honor`) · Scholar venue string · GitHub README paper list · CV. Scholar is the one that gets forgotten and the one academics actually read.
- **New open-source project or a big star milestone** → `profile.ts` `openSource` · GitHub pinned repos · GitHub README · CV.
- **Affiliation / location change** → GitHub `company` + `location` · Scholar affiliation · CV header · LinkedIn.
- **Contact address change** → GitHub `email` field *and* the README's contact line (these are two different places and have drifted apart before) · `profile.ts` links · CV header.

Keep the contact address identical everywhere. The canonical public one is `andylizf@gmail.com`;
`zhifei.li@berkeley.edu` is retired and must not be reintroduced anywhere.

## Editing conventions

- **Add a publication**: append to `publications` in `profile.ts`. Fields: `year`, `title`, `authors`
  (comma-separated string; write `Zhifei Li` exactly — it's auto-highlighted; co-first is `Zhifei Li*`),
  `venue`, `note` (status: `Preprint` / `In submission` / `To appear`), optional `honor`
  (e.g. `Best Paper Award` → renders the reserved brass chip), `paperUrl`, `featured` (shows on home).
  Optional link fields: `venueUrl` (makes the venue chip clickable), `codeUrl`, `projectUrl` — each
  adds a row link (`Paper · Code · Project`). Only add ones that actually exist; never guess a URL.
  Home "Selected work" = `featured` in array order; order the array by impact. Pubs page groups by `year`.
- **Add an open-source project**: append to `openSource` with `name`, `repo` (`owner/name`), `url`,
  `stars` (last known count — the fallback), `metrics`, `summary`. The star chip is fetched at build
  time from the GitHub API and falls back to `stars` when the API is rate-limited or offline, so a
  flaky build never blanks it. Don't put a star count in `metrics` too — the chip already shows it.
- **Link a name in prose**: add it to `entityLinks` in `src/lib/linkify.ts`; every string rendered
  through `<LinkedText>` (bio, news, service, rail rows) picks it up. Longest key wins, and each
  entity links only on its first mention per string. Verify the URL before adding it.
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
- The workflow also runs on a daily `schedule`, which is what refreshes the open-source star counts.
  It passes `GITHUB_TOKEN` to the build so those lookups get the 5000 req/h authenticated limit.
- **Gotcha**: if the deploy job is rejected with "Branch main is not allowed to deploy", the
  `github-pages` environment's deployment-branch-policies is missing `main` — add it there.
- Verify live after deploy: `curl -s https://zhifei.li/ | grep <marker>` and check the Actions run.
