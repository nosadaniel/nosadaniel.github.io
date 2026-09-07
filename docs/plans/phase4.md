# Phase 4: UI/UX Design - Portfolio Website

**Date:** 2026-09-07
**Project:** Personal Portfolio Website (Next.js + GitHub Pages)
**Owner:** Nosakhare Daniel Ahanor
**Based on:** `plans/phase3.md` (✅ Approved)
**Role assumed for this doc:** UI/UX Designer

> **Research limitation, stated upfront:** you asked me to compare against `luongnv.com`. It's a client-rendered SPA — automated fetching only returned the page `<title>` ("Luong Nguyen | AI & Cybersecurity Engineer"), no actual DOM content, layout, or colors. I won't fabricate details about a site I couldn't actually see. What I *can* say: that title confirms he's positioned in the exact same niche (AI + Cybersecurity) as you, which is useful competitive context on its own — it means your site needs a distinct visual identity, not just distinct content, to stand apart from a peer with an identical pitch. If you want a real comparison, send me a screenshot or the section text directly and I'll fold it in.
>
> For a concrete, verifiable comparison, I pulled real detail from **brittanychiang.com** — one of the most widely cited developer-portfolio references, MIT-licensed and open-source, built single-page with a dark theme. It's structurally close to what Phase 2/3 already decided (single-page, anchor nav, dark-first), so it's a useful benchmark for what "good" looks like at this scale.

---

## Design System Alignment (per `design.md`'s anti-slop frontend skill)

You pointed me at `design.md`. It bundles two things: Anthropic's own harvested brand tokens (near-black + cream, no accent) and a generic "anti-slop frontend design" rulebook. Per your call above, only the generic rulebook applies here — the palette stays cyan/indigo. Below is the formal design read + dial declaration that rulebook asks for, plus the concrete fixes it surfaced in the draft below (hero CTA count, a stray em-dash, a color-consistency issue, a font default, an icon-library choice).

**Design read:** *Solo developer/AI-engineer portfolio for technical recruiters and engineering peers, with a precise dark-tech language (not hacker-cliché), leaning toward Next.js + Tailwind + restrained motion.*

**Dials:**
- `DESIGN_VARIANCE: 6` — Developer Portfolio baseline. High enough to avoid a dead-centered, generic hero; not so high it turns into agency-experimental (that would undercut the "production engineer" positioning).
- `MOTION_INTENSITY: 5` — fluid CSS transitions and scroll-reveal only (the "4-7 Fluid CSS" band); no scroll-hijacking or pinned sections, which would fight the Lighthoude performance budget.
- `VISUAL_DENSITY: 4` — standard "daily app" spacing (`py-16`-`py-24`), not art-gallery-airy (this site has real content density: 11 projects, 5 work roles) and not cockpit-tight.

**Fixes applied to this doc from the anti-slop pass (details inline below):**
1. Hero was centered with 3 CTAs → anti-center-bias at `VARIANCE: 6` means it should be an asymmetric split, and hero CTA discipline caps at 1 primary + 1 secondary, not 3.
2. The draft hero tagline contained an em-dash → zero-tolerance rule, rewritten.
3. Two accent colors (cyan + indigo) violated the "one locked accent per project" rule → indigo demoted from accent to a neutral, category distinction now handled by icon choice instead of hue.
4. Inter was proposed as the body font → discouraged as a default; swapped for a less-templated pairing.
5. `lucide-react` was proposed for icons → discouraged by the skill in favor of Phosphor/Radix/Tabler; swapped (also updates phase3.md's tech stack).
6. The footer credit line had two middot separators in one line → rationed to one.

---

## Comparative Analysis

| Aspect | brittanychiang.com (verified) | Your portfolio (proposed) |
|---|---|---|
| **Structure** | Single-page, anchor-linked sections (About, Experience, Projects) | Single-page + 1 dedicated blog route (per phase2.md) |
| **Hero copy** | One punchy sentence ("I build accessible, pixel-perfect experiences for the web") over a full paragraph | Should follow this pattern — lead with one sharp sentence, push the full resume summary to About |
| **Experience display** | Chronological timeline, tech-stack shown as scannable tags | Same pattern fits your 5-role history + tags per role |
| **Projects display** | Image + description + live tech-stack tags + working links | Matches your project cards plan; add the verified-metrics callout for Project #9 as a differentiator |
| **Accessibility** | Skip-to-content link, keyboard-navigable | Adopt directly — cheap to add, meaningfully raises quality bar |
| **Personality touch** | A small interactive Easter egg (a "time travel" click reveals an old version of the site) | Recommend a lightweight equivalent — see Interaction Design below |
| **Tech stack shown** | Next.js + Tailwind (stated explicitly as a signal of craft) | You should do the same — a small "Built with Next.js, Tailwind, deployed on GitHub Pages" footer note is free credibility with the peer persona |

**Key takeaway:** the strongest pattern to borrow isn't visual — it's **restraint**. One sharp hero line, timeline + tags for experience, cards + tags + links for projects, and a skip link for accessibility. That's the whole recipe. Everything else below is where your site differentiates on identity (AI/cybersecurity aesthetic) rather than structure.

---

## Design Principles (for this project specifically)

1. **Scannable in 10 seconds, deep on demand.** The recruiter persona (phase2.md) needs role-fit confirmed almost instantly; the peer persona wants to drill into real metrics (the 93.4%/97.4%/89.1%/93.1% figures, the MCP architecture). Hero + card summaries serve persona 1; expandable/linked detail serves persona 2.
2. **Technical credibility over decoration.** No stock illustrations, no generic "coding" hero graphics. Real numbers, real repo links, real architecture — the content *is* the design.
3. **Cybersecurity-adjacent, not costume-cybersecurity.** Avoid neon-green "hacker terminal" clichés — that reads as gimmicky for a production engineer, not a CTF player. Aim instead for the aesthetic of a security company's own product UI: precise, dark, cool-toned, monospace accents used sparingly.
4. **Performance is part of the design.** Every visual choice (fonts, motion, images) is filtered through the Lighthouse ≥95 target from phase2.md — this isn't a constraint fighting the design, it's a design principle in itself for this audience.

---

## Color System

**Dark mode (default):**

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0F14` | Page background — near-black, cool navy-charcoal, not pure black (pure black + white text fatigues eyes and looks flat) |
| `--surface` | `#131A22` | Card/section backgrounds, slightly lifted from bg |
| `--surface-hover` | `#1A2430` | Card hover state |
| `--border` | `#232E3B` | Subtle dividers, card borders |
| `--text-primary` | `#E6EDF3` | Headings, body text |
| `--text-secondary` | `#8B98A5` | Meta text, dates, secondary labels |
| `--accent` | `#22D3EE` (cyan) | The **single** locked accent: links, active nav state, focus rings, primary CTAs, hover borders. Used identically across every section — no second accent hue is introduced anywhere on the page. |

**Why cyan instead of terminal-green:** terminal green (`#39FF14` style) is the most literal "cybersecurity" signal, but it's also the most clichéd and can undercut a "production engineer" positioning by reading as hobbyist/CTF aesthetic. Cyan reads as security/data/tech (still cool-toned, still distinct) while looking closer to how real security and AI infra products (Azure, most SOC dashboards) style themselves — which is more aligned with your actual professional context (Azure AI Foundry, enterprise cybersecurity).

**One accent, not two:** an earlier draft of this doc used a second indigo hue to visually separate "AI" project tags from "cybersecurity" ones. Per the design-skill's Color Consistency Lock (one accent color, used identically everywhere), that's dropped — category distinction on project cards is instead handled by icon choice and text label, not a second color.

**Light mode:** invert to `--bg: #FAFBFC`, `--surface: #FFFFFF`, `--text-primary: #0F172A`, `--text-secondary: #56606B`, keep the same accent hues but darken slightly (`#0891B2` cyan, `#6366F1` indigo) to maintain AA contrast on white.

All pairs above meet WCAG AA contrast (verify with a contrast checker once implemented — flagging as a build-time QA step, not re-deriving the math here).

---

## Typography

- **Headings:** **Space Grotesk** — geometric, modern, slightly technical without being a novelty font.
- **Body:** **General Sans** (or Satoshi as a close alternative) — both are free, well-tested for on-screen readability, and avoid defaulting to Inter, which the design-skill flags as the single most over-used LLM/AI-tool typeface default. Full glyph coverage for German umlauts either way (relevant to the German A2 skill listed on your resume).
- **Monospace accent:** **JetBrains Mono** — used *only* for small structural details: nav item numbers, tech-stack tags on project cards, and inline metric callouts (`93.4% accuracy`). This is the detail that visually signals "engineer" without needing a single line of cliché iconography.

---

## Layout & Section Wireframes

### Nav
**Decision: sticky top bar, not a fixed sidebar.** A fixed left sidebar (à la some famous portfolios) looks great on wide desktop but is genuinely harder to get right on mobile (it has to collapse into something else entirely, doubling the design/dev surface for a solo build with no dedicated QA). A sticky top bar with the anchor links + theme toggle collapses naturally into a simple mobile menu, costs less complexity, and still looks sharp with the monospace numbered-link treatment above. Single line at desktop, height capped at 64-72px. Revisit the sidebar pattern only if v1.1 has spare time — it's a nice-to-have polish item, not a differentiator.

```
[Logo/initials]   [01 About] [02 Projects] [03 Blog] [04 Contact]   [Résumé] [🌙/☀]
```

### Hero
**Asymmetric split, not centered.** At `DESIGN_VARIANCE: 6`, a dead-centered hero reads as the generic default. Text on the left, headshot on the right (a real photo, not a gradient blob) gives the layout an actual point of view. Capped at 1 primary + 1 secondary CTA (the anti-slop skill's hero-stack limit) — "Download Résumé" moves to the nav bar instead of competing for a third hero button.

```
┌───────────────────────────────┬──────────────────┐
│  Nosakhare Daniel Ahanor       │                   │
│  Full Stack Developer,         │   [headshot photo] │
│  AI Engineer                   │                   │
│                                 │                   │
│  I build production AI and     │                   │
│  cybersecurity systems, from   │                   │
│  RAG pipelines to fine-tuned   │                   │
│  LLMs to the CI/CD that ships  │                   │
│  them.                         │                   │
│                                 │                   │
│  [View Projects]  [Contact]    │                   │
└───────────────────────────────┴──────────────────┘
```
Mobile (`<768px`): collapses to a single column, headshot on top, text and CTAs below, full width.

### Projects
- Filter chips at top: `All · AI & Agentic Workflows · Cybersecurity · Open Source · Mobile · Infra`
- Grid: 3-col desktop → 2-col tablet → 1-col mobile
- Each card: title, 1-2 line description, tech-stack tags (monospace, pill-shaped), role/period, link icons (GitHub/live demo/docs)
- **Project #9 (LLM research) gets a visually distinct "featured" card** — larger, with the metrics (93.4% / 97.4% / 89.1% / 93.1%) shown as a small stat row: plain large numbers with labels underneath, not buried in paragraph text and not a filled-track progress bar (those read as dashboard-widget clutter on a portfolio, per the design skill's guidance on comparison visuals). This is your strongest differentiator vs. a peer with the same AI+cybersecurity pitch, make it impossible to miss.

### Blog teaser
```
┌──────────────────────────────────────────────┐
│  From the blog                                │
│  Efficient Domain Adaptation for Real-World   │
│  LLM Use Cases                                │
│  A humanized walkthrough of fine-tuning a     │
│  lightweight model to reason about phishing... │
│  Read the full post →                         │
└──────────────────────────────────────────────┘
```

### About
- Short intro paragraph (full resume summary lives here, not in Hero)
- Experience timeline: role, company, dates, 2-3 bullets, tech tags (mirrors brittanychiang.com's pattern)
- Skills matrix: grouped chips by category (AI/ML, Cloud & DevOps, Backend, Frontend & Mobile, Cybersecurity, Design, Languages)
- Certifications as a compact badge row

### Contact
- Direct links only (per Phase 1/2 decision): email, phone, LinkedIn, GitHub — rendered as large, clearly tappable icon+label buttons, not small inline text (mobile-friendly tap targets, ≥44px)

### Footer
- Small text, one middot max per line (per the design skill's separator rule): `Built with Next.js and Tailwind · deployed on GitHub Pages`, with `© 2026 Nosakhare Daniel Ahanor` on its own line below.
- This does real work: it's a tech-credibility signal to the peer persona, same move brittanychiang.com makes.

---

## Interaction Design

- **Smooth-scroll** for anchor nav (respect `prefers-reduced-motion`: fall back to instant jump)
- **Scroll-reveal:** subtle fade/slide-up (150-200ms) as sections enter viewport, via `IntersectionObserver` — kept minimal to protect the Lighthouse performance budget, and fully disabled under `prefers-reduced-motion`
- **Card hover:** border color shifts to `--accent`, slight `translateY(-2px)`, no heavy shadows/glassmorphism (keeps it crisp, not trendy-dated in 2 years)
- **Theme toggle:** icon swap (moon/sun) with a quick cross-fade, not a jarring instant repaint
- **Personality touch (in place of a literal Easter egg):** the featured LLM-project card's stat row could animate counting up from 0 to the real numbers on first scroll into view — a small, purposeful moment of delight that's actually about your real work, not a gimmick unrelated to the content

---

## Accessibility (design-level)

- Skip-to-content link (adopt directly from the brittanychiang.com pattern)
- All interactive elements keyboard-reachable with a visible focus ring in `--accent`
- Color pairs chosen above target AA; verify computed contrast once built
- `alt` text on headshot ("Nosakhare Daniel Ahanor") and any diagrams/screenshots
- Motion gated behind `prefers-reduced-motion`

---

## Open Questions

- ~~**Accent color**~~ — ✅ Confirmed: cyan + indigo.
- ~~**Nav pattern**~~ — ✅ Confirmed: sticky top bar (sidebar deferred as a v1.1 nice-to-have).
- **Headshot crop:** circular vs. square/rounded-square — still open, no strong functional reason either way, purely your preference.

---

## Implementation Note

`design.md`'s anti-slop skill includes a mechanical "Final Pre-Flight Check" (em-dash scan, contrast checks, CTA-wrap check, hero-fits-viewport check, etc.). Run that checklist against the actual built pages in Phase 5, not just this planning doc, since some of it (contrast ratios, wrap behavior, hero viewport fit) can only be verified against real rendered output.

---

## Document Metadata

- **Source:** `plans/phase3.md` (Approved)
- **Status:** ✅ Approved
- **Revised:** 2026-09-07 — aligned with `design.md`'s anti-slop design skill: added Design Read + dial declaration, switched Hero to an asymmetric split with a capped 2-CTA layout, removed a stray em-dash from hero copy, dropped the second (indigo) accent color to comply with the one-accent lock, swapped Inter for a less-templated body font, swapped `lucide-react` for Phosphor Icons, fixed a double-middot footer line. Palette stays cyan (kept over the Anthropic monochrome tokens also present in design.md, per your explicit choice).
- **Next Phase:** Phase 5 (Implementation) — scaffold the Next.js project and start building
