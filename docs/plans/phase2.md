# Phase 2: Product Requirements Document (PRD) - Portfolio Website

**Date:** 2026-09-06
**Project:** Personal Portfolio Website (Next.js + GitHub Pages)
**Owner:** Nosakhare Daniel Ahanor
**Based on:** `plans/phase1.md` (✅ Approved)

> Scope note: this PRD is sized for a one-person static portfolio site, not a full-stack product — sections like multi-persona market research, A/B testing, and competitive analysis from a generic PRD template are intentionally omitted or trimmed. Anything not derivable from `bio/` or Phase 1 is called out under Open Questions.

---

## Product Overview

**Product Vision:** A fast, static, technically credible portfolio that lets a recruiter or engineering peer understand Nosakhare's specialization (production AI + cybersecurity), verify his project track record, and reach him directly — in under two minutes, with zero backend to maintain.

**Target Users:** Technical recruiters/hiring managers and engineering peers (see Personas).

**Business Objectives:**
- Serve as the canonical, always-current source of truth for Nosakhare's work
- Generate interview/collaboration inquiries via direct contact links
- Demonstrate technical craft through the site itself (clean Next.js static build, strong performance/accessibility) as implicit proof-of-skill

**Success Metrics:**
- Site builds and deploys cleanly on every push to `main` via GitHub Actions
- Lighthouse scores ≥ 95 for Performance, Accessibility, Best Practices, SEO on Home and Projects
- Every factual claim traces to a file in `bio/` (zero hallucinated or unverifiable claims — per the verification work already done in Phase 1)

---

## User Personas

### Persona 1: Technical Recruiter / Hiring Manager
- **Goals:** Confirm role fit (AI/cybersecurity/full-stack), verify real production experience, find a resume PDF and a way to contact him
- **Pain Points:** Limited time per candidate; distrust of portfolios with unverifiable or inflated claims
- **Journey:** Home → skim summary + featured projects → download resume and/or go to Contact

### Persona 2: Engineering Peer / Potential Collaborator
- **Goals:** Understand technical depth (RAG/agentic system design, CI/CD design, LoRA fine-tuning approach, MCP server work), find links to real code/demos
- **Pain Points:** Marketing-heavy portfolios with no technical substance; broken or dead demo links (relevant here — the fine-tuned model's HF Space sleeps when idle, see Feature Requirements)
- **Journey:** Lands on a shared Project or Blog link → reads technical detail → follows links to GitHub/Hugging Face/live demos → About page for full background

---

## Site Structure (Information Architecture)

**Update (Phase 2 clarification):** the site is a **single-page** static site, not 5 separate routes. Navigation scrolls to in-page anchor sections. The one exception is the Blog post, which gets its own route so the long-form article has proper SEO and isn't crammed into a one-page scroll — the main page shows a teaser/summary card linking to it.

1. **`/` (single page, anchor sections):**
   - **Hero** — headshot photo, name, title, specialization (Full Stack Developer, AI Engineer), one-line summary, CTA buttons (Projects / Resume / Contact)
   - **Projects** — all projects grouped by category:
     - AI & Agentic Workflows (Intelligent Assessment Service, cyberCoach, DataPro Assistant, sysder AI Assistant, Efficient Domain Adaptation for LLMs, learn_ai/MCP)
     - Cybersecurity Applications (GeigerToolbox, DataPro Games x2, KCNA Practice Exam App)
     - Open Source Contributions (force_update_helper, PasswordChecker)
     - Mobile Applications (Geiger App)
     - Infrastructure & DevOps (Infrastructure as Code)
   - **Blog teaser** — summary card for the LLM domain-adaptation post, linking to its dedicated route
   - **About** — full bio, work experience timeline, education, certifications, skills matrix
   - **Contact** — direct links only: mailto, phone, LinkedIn, GitHub (per Phase 1 decision — no form, no backend)
2. **`/blog/efficient-domain-adaptation`** — the single blog post for v1: "Efficient Domain Adaptation for Real-World LLM Use Cases," written in a **humanized, easy-to-understand tone** (per Phase 1 note — not a dry technical paper), linking out to the full technical resources (HF model, dataset, notebook). Structured (MDX) so future posts are just new routes without a redesign.

Global: persistent anchor nav (scrolls within the page, jumps to `/#section` from the blog page), dark/light theme toggle (default dark), downloadable resume PDF accessible from the Hero.

---

## Feature Requirements

| Feature | Description | Priority | Acceptance Criteria | Source |
|---|---|---|---|---|
| **Hero section** | Name, title, specialization ("Full Stack Developer, AI Engineer"), one-line summary, CTA buttons (Projects / Resume / Contact) | Must | Renders above the fold on mobile and desktop; CTAs work | resume.pdf, phase1.md |
| **Professional summary** | Near-verbatim quote from resume | Must | Matches `resume.pdf` wording | resume.pdf |
| **Project cards (all categories)** | Static cards: title, description, tech stack, role, period, links | Must | All 11 projects from phase1.md's inventory appear (9 work-related + 2 open source); all links resolve | phase1.md project inventory |
| **Project category filtering** | Client-side filter/tabs by category | Should | Works without page reload; all projects visible if JS disabled | Project cards |
| **LLM research project detail** | Full case-study card for "Efficient Domain Adaptation for LLMs" with real metrics (93.4% accuracy, 97.4% precision, 89.1% recall, 93.1% F1), base model, and training config | Must | Numbers match phase1.md's verified figures exactly; live demo link includes a cold-start notice ("Space may take ~30s to wake up") | phase1.md Project #9 |
| **MCP research assistant project** | Card for `learn_ai`/`learn_mcp`: FastMCP server + Claude 3.7 Sonnet + arXiv API | Should | Description matches verified repo content; link resolves | phase1.md Open Source Project #2 |
| **Blog: single post** | Humanized write-up of the LLM domain-adaptation project, with links to HF Space/dataset/adapter/notebook | Must | Reads accessibly to a non-ML-specialist while still being technically accurate; all 4 resource links present | ai_reseach_work.md, phase1.md |
| **Work experience timeline** | Chronological list: cyberGEIGER, IAESTE, IIT (x2), Early Career | Must | Matches resume.pdf dates/roles | resume.pdf |
| **Skills matrix** | Grouped tags (AI/ML, Cloud & DevOps, Backend, Frontend & Mobile, Cybersecurity, Design incl. Adobe XD, Languages) | Must | Matches resume.pdf | resume.pdf |
| **Certifications list** | KCNA, LFS250, edX cert, Lightbend cert | Should | Matches resume.pdf | resume.pdf |
| **Downloadable resume** | Static link to `resume.pdf` | Must | Opens/downloads from Home and About | resume.pdf |
| **Contact links** | mailto:, tel:, LinkedIn, GitHub — direct links only | Must | Correct, current values; no form/backend | resume.pdf, Phase 1 decision |
| **Dark/light theme toggle** | Defaults to dark, persists via localStorage | Should | No flash-of-wrong-theme on load | Phase 1 design direction |
| **Responsive layout** | Mobile, tablet, desktop breakpoints | Must | No horizontal scroll/overlap at 375px, 768px, 1440px | — |
| **SEO metadata** | Title/meta description/OG tags for the single page, plus separate metadata for the blog post route | Should | Home and blog post each have unique title/description; OG image for link previews | — |
| **Headshot in Hero** | Photo from `bio/photo_2026-08-25 15.07.01.jpeg` displayed in the Hero section | Must | Image optimized (WebP/AVIF), has alt text | bio/ photo, this PRD's clarification |
| **Anchor navigation** | Sticky nav that scrolls to in-page sections (Projects/Blog/About/Contact); works from the blog post route via `/#section` links | Must | Nav links scroll smoothly; works with JS disabled via native anchor fallback | Single-page IA decision |
| **Architecture diagram(s)** | Visual diagram for at least one complex project (e.g., Intelligent Assessment Service RAG pipeline, or the learn_mcp architecture) | Could | ≥1 diagram published in v1 | Design time |
| **Project screenshots** | Screenshots for featured projects | Could | Featured projects have at least a screenshot/mockup | Access to project UIs |
| **Contribution provenance links** | Link directly to the specific PR/commit for force_update_helper and PasswordChecker instead of a bare "contributed to" claim | Should | Reduces the unverifiable-claim risk flagged in phase1.md | phase1.md notes on Open Source Contributions |
| **Career timeline visualization** | Graphical (not list) timeline | Won't (v1) | — | Deferred |
| **Testimonials/endorsements** | Quotes from colleagues | Won't (v1) | — | Deferred |
| **Contact form** | In-page message form | Won't (v1) | Explicitly rejected in Phase 1 | — |

---

## Non-Functional Requirements

### Performance
- Static export — all content baked in at build time, no client-side data fetching for content
- Target Lighthouse Performance ≥ 95 on throttled mobile
- Images optimized (WebP/AVIF) and lazy-loaded below the fold

### Accessibility
- WCAG 2.1 AA: color contrast in both themes, semantic HTML, keyboard-navigable nav and theme toggle, alt text on all images/diagrams

### Compatibility
- Latest 2 versions of Chrome, Firefox, Safari, Edge; Mobile Safari and Chrome Android
- Screen widths 360px–2560px

### SEO
- Fully static, crawlable HTML per route via Next.js static export
- `sitemap.xml` and `robots.txt` generated at build time

### Data Integrity
- Every factual claim traces to a file in `bio/`, verified against the live source where a claim references an external artifact (as done for the KCNA stack, the LLM metrics, and the `learn_ai` repo in Phase 1). No invented tech stacks, dates, or metrics.

---

## Technical Specifications

### Frontend
- **Framework:** Next.js with `output: "export"` for a fully static build (required — GitHub Pages serves static files only, no Node runtime)
- **Styling:** Tailwind CSS
- **Content:** Project/blog data as local MDX or JSON/TS content files in-repo (no CMS) — MDX for the blog post so future posts are just new `.mdx` files
- **Theming:** CSS variables + `next-themes` (or equivalent), no flash-of-incorrect-theme

### Backend
- **None.** Fully static; no API routes, no database, no server-side rendering at runtime

### Infrastructure
- **Hosting:** GitHub Pages via the special `nosadaniel.github.io` repo — serves at the root `https://nosadaniel.github.io/`, so **no `basePath`/`assetPrefix` needed** (confirmed in Phase 2)
- **Repo visibility:** Must be **public** — verified against GitHub docs (2026-09-06): on the GitHub Free plan, Pages only publishes from public repositories; private-repo Pages requires GitHub Pro at minimum, and even then the published site remains publicly viewable unless the account is an organization on GitHub Enterprise Cloud (not applicable here). This is a non-issue for a public portfolio — the source being visible is a plus, not a risk (no secrets belong in this repo regardless).
- **Build/Deploy:** GitHub Actions — on push to `main`, run `next build` (static export), deploy via `actions/deploy-pages`
- **Routing:** Two routes total — `/` (single-page site) and `/blog/efficient-domain-adaptation` (the one blog post)

### Content Sourcing Map

| Site content | Source file |
|---|---|
| Hero, summary, contact, work experience, skills, certifications, education | `bio/resume.pdf` |
| Project descriptions (11 projects across work/open-source/mobile) | `bio/bio.md` + `bio/resume.pdf`, cross-verified against live project URLs (GitHub, Hugging Face) per phase1.md |
| Blog post content | `bio/ai_reseach_work.md`, humanized per Phase 1 note |
| Headshot | `bio/photo_2026-08-25 15.07.01.jpeg` |

---

## Release Planning

### MVP (v1.0)
- All "Must" features above; 5 sections live; deployed to default GitHub Pages URL
- **Success criteria:** site is live, all links resolve, all content verified against `bio/`, Lighthouse targets met

### Future Releases
- **v1.1:** Remaining "Should" features (theme polish, SEO pass, category filtering, contribution provenance links)
- **v1.2:** Architecture diagrams + screenshots for featured projects; additional blog posts
- **v2.0:** Custom domain, career timeline visualization, testimonials — only if Phase 1's decisions on these are revisited

---

## Open Questions & Assumptions

- **Resolved (Phase 2):** Repo is `nosadaniel.github.io` → no `basePath` needed, site serves at root.
- **Resolved (Phase 2):** Site is single-page with anchor sections; Blog post gets its own route (this PRD's call — flag if you intended something more literal, e.g. the blog content inline too).
- **Resolved (Phase 2):** Headshot placed in the Hero section (this PRD's call, since there's no separate About page anymore).
- **Resolved (Phase 2):** Public contact email is `nosadaniel02@gmail.com`, used as-is.
- **Q1 (open):** For force_update_helper / PasswordChecker — do you have the specific PR links to cite, or should the copy stay as a general "contributed to" claim?
- **Assumption 1:** No analytics/tracking in v1 (static, no backend); can add a privacy-friendly option later.
- **Assumption 2:** Architecture diagrams and screenshots (Could-have) are stretch goals and won't block launch.

---

## Document Metadata

- **Source:** `plans/phase1.md` (Approved)
- **Status:** ✅ Approved
- **Next Phase:** Phase 3 (Technical Architecture)
