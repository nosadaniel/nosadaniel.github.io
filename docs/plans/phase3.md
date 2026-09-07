# Phase 3: Technical Architecture - Portfolio Website

**Date:** 2026-09-06
**Project:** Personal Portfolio Website (Next.js + GitHub Pages)
**Owner:** Nosakhare Daniel Ahanor
**Based on:** `plans/phase2.md` (✅ Approved)

> Scope note: sized for a solo, static, no-backend, no-database portfolio site. Sections about database schema, auth, scaling, and vendor cost trade-offs from a generic architecture template are trimmed or replaced — there's no server to scale and nothing to authenticate.

---

## System Overview

- **Purpose:** A statically-generated Next.js site with no backend, deployed to GitHub Pages, presenting Nosakhare's projects, background, and one research write-up.
- **Scope:** One HTML page (`/`) with anchor-scrolled sections, one blog post route, a build pipeline that publishes to GitHub Pages on every push to `main`.
- **Alignment with PRD:** Delivers all "Must" features from phase2.md (Hero, Projects, Blog teaser, About, Contact, resume download) with zero runtime infrastructure, matching the "no backend needed" decision from Phase 1/2.

---

## Architecture Diagram (textual)

```
Developer machine
      │  git push (main)
      ▼
GitHub Repository (public: nosadaniel.github.io)
      │  triggers
      ▼
GitHub Actions workflow
      │  1. checkout
      │  2. install deps (npm/pnpm)
      │  3. next build  → static export in /out
      │  4. upload artifact
      ▼
GitHub Pages (actions/deploy-pages)
      │  serves static files
      ▼
Browser (visitor)
      │  requests /  or  /blog/efficient-domain-adaptation
      ▼
Static HTML/CSS/JS (no server round-trips beyond static assets)
```

**Key interactions:**
- Build time: Next.js reads local content files (MDX/TS/JSON under `content/`) and `public/` assets (resume PDF, headshot, project images) and bakes them into static HTML/JSON at build time.
- Runtime: the browser gets fully rendered HTML per route; the only "dynamic" behavior is client-side JS for the theme toggle, smooth-scroll anchor nav, and (if built) the project category filter — all client-state only, no network calls.
- There is no API layer, no database, and no server-side rendering at request time — GitHub Pages cannot run a Node server, so `output: "export"` is mandatory, not optional.

---

## Technology Stack

- **Framework:** Next.js (App Router), `output: "export"` for static HTML export
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX for the blog post (`content/blog/efficient-domain-adaptation.mdx`); TypeScript/JSON data modules for project entries, skills, experience (`content/projects.ts`, etc.) so data is typed and reusable across Hero/Projects sections
- **Theming:** `next-themes` (or a small custom hook) + CSS variables for dark/light mode
- **Icons/UI primitives:** `@phosphor-icons/react` — lightweight, tree-shakeable, and (per phase4.md's design-skill alignment) preferred over `lucide-react`, which reads as the generic default in most AI-assisted builds. Avoid heavy component libraries given this is a static, performance-sensitive site.
- **CI/CD:** GitHub Actions, official `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`
- **Package manager:** npm (default, zero extra setup) — pnpm is a fine alternative if preferred, no strong requirement either way

---

## Code Architecture & Folder Structure

**Architectural style:** a **component-based static architecture** using Next.js App Router's Server Components by default, with **Client Component "islands"** only at the specific leaves that need browser interactivity (theme toggle, project filter, scroll-spy nav). Everything else renders to static HTML at build time and ships zero JS for that piece. This isn't a generic MVC/layered backend pattern — there's no backend — it's the standard modern Next.js static-site pattern, chosen deliberately here because it directly serves the Performance principle from phase4.md: the less that's marked `'use client'`, the smaller the JS bundle shipped to the browser, the higher the Lighthouse score.

**Organizing principle for `components/`:** split by *reusability*, not by page —
- `components/ui/` — small, generic, content-agnostic primitives (a `Button` has no idea what a "project" is)
- `components/sections/` — one component per homepage section; each section owns its layout and pulls its own data from `content/`
- `components/blog/` — components meant to be embedded inside MDX content specifically

```
nosadaniel.github.io/
├── app/
│   ├── layout.tsx                 # root layout: <html>, ThemeProvider, fonts, global Nav + Footer
│   ├── page.tsx                    # "/" — composes section components in order
│   ├── globals.css                 # Tailwind directives + CSS variable tokens (phase4.md color system)
│   └── blog/
│       └── efficient-domain-adaptation/
│           └── page.tsx            # renders the MDX post, back-link to /#blog
│
├── components/
│   ├── ui/                         # generic primitives, no content/business knowledge
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── Card.tsx
│   │   ├── IconLink.tsx
│   │   └── ThemeToggle.tsx         # 'use client' — localStorage + interactivity
│   │
│   ├── sections/                    # one per homepage section
│   │   ├── Nav.tsx                   # 'use client' — smooth scroll + active-link highlight
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx              # server component
│   │   │   └── ProjectFilter.tsx     # 'use client' — category filter state only
│   │   ├── BlogTeaser.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   └── blog/
│       └── StatCallout.tsx          # MDX-embeddable animated stat row (phase4.md interaction design)
│
├── content/                         # typed "content-as-code" — see Content Architecture below
│   ├── profile.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── blog/
│       └── efficient-domain-adaptation.mdx
│
├── lib/
│   ├── utils.ts                     # cn() class-merge helper, small formatters
│   └── mdx.ts                       # MDX loading/parsing for the blog route
│
├── public/
│   ├── resume.pdf
│   ├── headshot.jpg
│   └── favicon.ico
│
├── __tests__/
│   └── content/
│       └── projects.test.ts         # validates every project has required fields + resolvable links
│   # component tests are co-located instead, e.g. components/ui/Button.test.tsx
│
├── scripts/
│   └── check-links.ts               # standalone version of the same check, run in CI (see Risks)
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── next.config.js                    # output: "export"
├── tailwind.config.ts
├── jest.config.js                    # next/jest preset
├── tsconfig.json
└── package.json
```

**Component conventions:**
- Default to Server Components; add `'use client'` only to the specific file that needs it (not to a whole parent tree) — e.g. `Projects.tsx` stays a server component even though its child `ProjectFilter.tsx` is a client component.
- Tests: co-located `Component.test.tsx` next to each component (easy to find); content-validation tests (which don't belong to a single component) live in top-level `__tests__/content/`.
- No `pages/` directory — this is App Router only, no legacy Pages Router mixing.

---

## System Components

| Component | Description | Responsibilities | Dependencies |
|---|---|---|---|
| **Hero section** | Top of `/`, headshot + identity + CTAs | Render name/title/summary from `content/profile.ts`; link to Projects/Resume/Contact anchors | `content/profile.ts`, `public/resume.pdf`, `public/headshot.*` |
| **Projects section** | Categorized project cards | Render all 11 projects from `content/projects.ts`; optional client-side category filter | `content/projects.ts` |
| **Blog teaser** | Summary card on `/` | Link to `/blog/efficient-domain-adaptation` | `content/blog/*.mdx` frontmatter |
| **Blog post route** | `/blog/efficient-domain-adaptation` | Render MDX content; back-link to `/#blog` | MDX loader (e.g. `next-mdx-remote` or Next's built-in MDX support) |
| **About section** | Experience/education/skills/certs | Render from `content/experience.ts`, `content/skills.ts` | resume.pdf-derived data |
| **Contact section** | Direct links | Render mailto/tel/LinkedIn/GitHub from `content/profile.ts` | `content/profile.ts` |
| **Theme toggle** | Dark/light switch | Persist choice in `localStorage`; apply CSS class on `<html>` before paint (avoid flash) | `next-themes` |
| **Nav** | Sticky anchor nav | Smooth-scroll to sections on `/`; on the blog route, links navigate to `/#section` | — |
| **GitHub Actions workflow** | `.github/workflows/deploy.yml` | Build + deploy on push to `main` | GitHub Pages settings (Actions as source) |

---

## Content Architecture (replaces "Data Architecture" — no database)

Since there's no database, "data" here means the typed content files that feed the static build:

```
content/
  profile.ts        # name, title, summary, contact links, headshot path
  experience.ts      # work history array (company, period, bullets)
  education.ts        # degrees, thesis, certifications
  skills.ts            # skill groups (AI/ML, Cloud, Backend, Frontend, Cybersecurity, Design, Languages)
  projects.ts          # array of 11 project objects: category, title, description, techStack[], links[], role, period, verifiedDetails?
  blog/
    efficient-domain-adaptation.mdx   # frontmatter (title, date, summary) + humanized body content
```

- **Source of truth:** every field in these files must trace back to `bio/` per phase1.md's verification work — when populating `projects.ts`, copy the verified tech stacks/metrics/links directly from phase1.md rather than re-deriving them.
- **Data flow:** content files → imported at build time by page/section components → statically rendered → no runtime fetch.
- **Storage:** none beyond the git repo itself; `public/` holds static binary assets (resume.pdf, headshot image, any project screenshots/diagrams added later).
- **Privacy:** the only personal data published is what's already public on the resume/LinkedIn (name, email, phone) — no user data is ever collected, so there's no GDPR/data-handling surface to design for.

---

## Infrastructure

- **Hosting:** GitHub Pages, repo `nosadaniel.github.io` (must be **public** — confirmed in Phase 2), serves at `https://nosadaniel.github.io/`
- **CI/CD:** GitHub Actions workflow, triggered on push to `main`:
  1. `actions/checkout`
  2. `actions/setup-node`
  3. install deps, `next build`
  4. `actions/configure-pages`
  5. `actions/upload-pages-artifact` (path: `./out`)
  6. `actions/deploy-pages`
- **Pages source setting:** repo Settings → Pages → Source = "GitHub Actions" (not the legacy branch-based `gh-pages` deploy)
- **Monitoring:** none needed beyond GitHub Actions' own build status; no uptime monitoring required for a static site on GitHub's infrastructure

---

## Security Considerations

Minimal by design — static site, no backend, no user accounts, no data collection:
- **No authentication/authorization** — nothing to log into
- **No secrets in the repo** — since the repo must be public, double-check no `.env` or API keys ever get committed (not applicable currently, since there's no API integration in v1)
- **Dependency hygiene:** keep `npm audit`/Dependabot on for the Next.js/npm dependency tree
- **Content trust:** since all content is static and build-time only, there's no XSS surface from user input (no comments, no forms)

---

## Performance & Accessibility

(Targets already set in phase2.md — restated here as architecture constraints)
- Lighthouse ≥ 95 on Performance/Accessibility/Best Practices/SEO
- Static export means no server response time to worry about — performance work is entirely about JS bundle size, image optimization, and font loading
- Use `next/image`-equivalent static optimization or pre-optimized images (Next's built-in image optimizer doesn't run at request-time under static export, so images should be pre-sized/compressed at build time or served as-is with manual `srcset`)
- WCAG 2.1 AA: semantic landmarks per section (`<header>`, `<nav>`, `<main>`, `<section aria-label="...">`, `<footer>`), keyboard-reachable nav and theme toggle, alt text on headshot/diagrams

---

## Development & Deployment

- **Repo structure:** see "Code Architecture & Folder Structure" above
- **Local dev:** `npm run dev` for local preview; `npm run build` to verify the static export builds cleanly before pushing
- **Testing:** given the scope, no automated test suite is required for v1 — manual verification via Lighthouse + a link-checker script (or a simple CI step that greps `content/projects.ts` links and curls them) is enough. Could add this link-checker as a CI step in `.github/workflows/deploy.yml` to fail the build if a project link 404s.
- **Branching:** direct commits to `main` are fine for a solo project; feature branches optional for larger content changes
- **Deployment cadence:** every push to `main` auto-deploys — no manual release process needed

---

## Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Hugging Face Space (live demo) sleeps when idle | Visitor clicks the demo link and sees a "sleeping" message, looks broken | Add a small UI note ("demo may take ~30s to wake up") next to the link, per phase2.md's feature requirement |
| Project links go stale/404 over time (esp. cyberGEIGER internal-facing demo URLs) | Broken links hurt credibility with the recruiter persona | Add a link-checker CI step (see above); revisit `content/projects.ts` links periodically |
| Repo must be public, so all commit history is visible | Low risk here since there are no secrets, but worth being deliberate about commit messages/content | Keep commits professional; never commit `.env` or credentials (none needed anyway) |
| Static export limits (`output: "export"`) disable some Next.js features (Image Optimization API, middleware, ISR) | Could tempt using a feature that silently breaks the static build | Stick to static-compatible patterns from day one; run `next build` locally before every push to catch incompatibilities early |
| Single dependency on GitHub Pages uptime | If GitHub Pages has an outage, the site is down | Acceptable risk for a portfolio — GitHub Pages has strong uptime; no mitigation needed beyond what GitHub provides |

---

## Resolved Decisions (Phase 3)

- **Testing framework: Jest.** Jest remains the most widely adopted JS testing framework overall and has first-class Next.js support via the built-in `next/jest` preset (zero-config transform for TS/JSX). Vitest is the faster-growing alternative for Vite-native projects, but Jest's setup is simpler here and the testing scope is light (component smoke tests + a content/link-validation test), so raw speed isn't a deciding factor. Add `jest` + `@testing-library/react` + `next/jest`.
- **MDX:** confirmed for the blog post.
- **Package manager:** npm, confirmed.

---

## Document Metadata

- **Source:** `plans/phase2.md` (Approved)
- **Status:** ✅ Approved
- **Revised:** 2026-09-07 — added the missing "Code Architecture & Folder Structure" section (Server/Client Component split, concrete folder tree, testing convention)
- **Next Phase:** Phase 4 (UI/UX Design)
