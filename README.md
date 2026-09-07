# Nosakhare Daniel Ahanor - Portfolio

Personal portfolio site for Nosakhare Daniel Ahanor, Software Engineer specializing in production AI and cybersecurity applications. Built as a static Next.js site and deployed to GitHub Pages.

Single-page site (Hero, Projects, Blog teaser, About, Contact as anchor sections) plus one dedicated blog post route. No backend, no database, all content is authored in typed TypeScript/MDX files under `src/content/` and baked into static HTML at build time.

Planning documents (brainstorming, PRD, architecture, UI/UX) live in [`docs/plans/`](docs/plans).

## Tech stack

- Next.js (App Router, static export via `output: "export"`)
- TypeScript
- Tailwind CSS v4
- MDX for the blog post (`next-mdx-remote/rsc`)
- Jest + Testing Library for content/component tests
- GitHub Actions for CI/CD to GitHub Pages

## Getting started

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build, static export to `out/` |
| `npm start` | Serve the last `next build` output (not used for GitHub Pages, which serves `out/` directly) |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Run ESLint |
| `npm run check-links` | Ping every external project link in `src/content/projects.ts` and fail if any is unreachable |

## Building for production

```bash
npm run build
```

Static files are output to `out/`. This is exactly what the GitHub Actions workflow in `.github/workflows/deploy.yml` runs on every push to `main`, deploying `out/` to GitHub Pages automatically. There is no manual deploy step.

## Editing content

All site copy lives in `src/content/`, not hardcoded in components:

- `profile.ts` - name, title, summary, contact links, resume/headshot paths
- `experience.ts` - work history
- `education.ts` - degrees and certifications
- `skills.ts` - skill groups
- `projects.ts` - the project inventory (category, description, tech stack, links, role)
- `blog/*.mdx` - blog posts (one per file, one route per post under `src/app/blog/`)

Every fact in these files should trace back to a source in `docs/bio/`; see `docs/plans/phase1.md` for the verification history.

## Project structure

```
src/
  app/            routes (page.tsx, layout.tsx, blog/.../page.tsx)
  components/
    ui/           generic primitives (Button, Card, Tag, ThemeToggle, IconLink)
    sections/     one component per homepage section
    blog/         components embeddable inside MDX
  content/        typed content-as-code (see above)
  lib/            small helpers (MDX loading, class-name merging)
  __tests__/      content validation tests
public/           static assets (resume.pdf, headshot, favicon)
scripts/          check-links.ts (CI link checker)
docs/             planning docs and source bio material
```

## Architecture: how the code actually works

### Rendering model

Everything is a React Server Component by default, rendered to static HTML at `next build` time. Only a handful of files declare `"use client"`, because they need actual browser interactivity, and each is an isolated leaf, not a whole subtree:

- `components/ui/ThemeToggle.tsx` - reads/writes the theme, needs `localStorage` and `next-themes`' `useTheme` hook
- `components/sections/Nav.tsx` - mobile menu open/close state
- `components/sections/ProjectFilter.tsx` - the category filter chips and the grid they control
- `components/ui/IconLink.tsx` - a small exception: it's a client component purely because the Phosphor icon library's default icon components use React Context internally, which Server Components can't use. Server components that need to render an icon inside it (e.g. `Contact.tsx`) import the icon from `@phosphor-icons/react/dist/ssr` (a context-free variant) and pass the rendered `<Icon />` element in as `children`, not as a component reference, since passing raw component references across the server/client boundary isn't valid.
- `components/blog/StatCallout.tsx` - the count-up number animation inside the blog post, driven by `IntersectionObserver` and `requestAnimationFrame`, gated behind `prefers-reduced-motion`

Everything else (`Hero`, `Projects`, `About`, `BlogTeaser`, `Contact`, `Footer`) is a plain Server Component: it imports data straight from `src/content/*.ts` and renders it, no client JS shipped for that piece.

### Content-as-code

There's no CMS and no database. Site copy is just typed TypeScript modules and MDX files under `src/content/`, imported directly by the components that render them. This means:

- Adding/editing a project is a plain object edit in `projects.ts`, fully type-checked
- The Jest suite (`src/__tests__/content/projects.test.ts`) enforces that every project has required fields, a unique slug, and well-formed links
- `scripts/check-links.ts` actually pings every external link at CI time (not just unit-tests the shape) and fails the build if one 404s

### Snapshot ("golden") tests

Every component under `src/components/` has a co-located `*.test.tsx` that renders it and calls `toMatchSnapshot()`. The first run writes a reference (`__snapshots__/*.snap`, committed to git); every run after that fails if the rendered output changes, so an unintended visual regression gets caught instead of shipped silently.

When you *intentionally* change a component's markup, review the diff, then update the reference:

```bash
npm test -- -u
```

Always read the diff before running `-u` — the point of a golden test is to force a human look at the change, not to rubber-stamp it.

### The blog pipeline

The single blog post lives at `src/content/blog/efficient-domain-adaptation.mdx` as frontmatter + Markdown/MDX. `src/lib/mdx.ts` reads the raw file off disk at build time; `src/app/blog/efficient-domain-adaptation/page.tsx` compiles it with `next-mdx-remote/rsc`'s `compileMDX`, which returns both the parsed `frontmatter` (used for the page's `<title>`/meta tags via `generateMetadata`) and the rendered `content`. The MDX file can use the `<StatCallout />` component directly inline, that works because `compileMDX` is called with `blockJS: false` (safe here since the MDX content is authored by the site owner, not user input, so `next-mdx-remote`'s default JS-expression stripping, which is a defense against untrusted MDX, is deliberately relaxed).

### Theming

Colors are CSS custom properties (`--bg`, `--surface`, `--text-primary`, `--accent`, etc.) defined on `:root` for dark (the default) and overridden under `:root.light`. Tailwind v4's `@theme` block in `globals.css` maps those variables to real utility classes (`bg-bg`, `text-accent`, ...), so components use normal Tailwind classes and the variables underneath do the theme switching. `next-themes` (`attribute="class"`) toggles the `light`/`dark` class on `<html>`; `ThemeToggle` is the only place that calls `setTheme`.

### Why the version pins look unusual

`package.json` pins exact dependency versions (no `^`/`~`, enforced by `.npmrc`'s `save-exact=true`). During the initial scaffold, a plain `npm install` pulled in Next.js 16, TypeScript 7, and ESLint 10, all bleeding-edge releases that `typescript-eslint`/`eslint-config-next` didn't support yet at the time. The stack was pinned back to the latest stable line that's actually known to work together (Next 15.5.25, TypeScript 5.9.3, ESLint 9.39.5). Bump these deliberately, not via a loose `npm update`.
