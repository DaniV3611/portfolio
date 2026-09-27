# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server (localhost:4321)
pnpm build    # Production build
pnpm preview  # Preview production build
pnpm cv       # Compile cv.tex / cv_spanish.tex to public/cv/*.pdf (needs local pdflatex)
```

This project is **pnpm-only**. `scripts/ensure-pnpm.mjs` runs as a `preinstall` hook and rejects any install attempted with npm/yarn/bun. Hardening in `pnpm-workspace.yaml` (`minimumReleaseAge`, `strictDepBuilds`, `verifyStoreIntegrity`, frozen lockfile, etc.) protects against supply-chain attacks; new packages that need build scripts must be added to `allowBuilds`.

There is no test suite or linter configured.

## Architecture

This is an **Astro + React** personal portfolio site for Daniel Velasco (AI Engineer).

**Framework split:**
- Static sections are `.astro` components (HeroSection, ExperienceSection, EducationSection, ProjectsSection, SkillsSection, ContactSection)
- Interactive/stateful UI is React (`.tsx`): `Header` (lives in its own folder `src/components/Header/`), `CursorGlow`, `TechCarousel`
- React components used in Astro templates require `client:load` directive to hydrate
- Lucide v1 has no brand icons; GitHub/LinkedIn marks live in `src/components/BrandIcons.tsx` (usable from React and, statically, from Astro)

**Routing:** Single-page with anchor links (`/#experience`, `/#education`, etc.). All content lives in `src/pages/index.astro`.

**Styling:**
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, not postcss)
- Theme tokens defined in `src/styles/global.css` under `@theme` — custom colors (`background`, `surface`, `accent`, `text-primary`, etc.) and the `Plus Jakarta Sans` variable font
- Reusable CSS utilities in `global.css`: `.glass`, `.glass-card`, `.glass-light`, `.gradient-text`, `.gradient-border`, `.glow-accent`, `.glow-accent-hover`, `.bg-grid`, `.animate-delay-*`
- Component-scoped CSS files: `src/components/Header/Header.css`, `src/components/TechCarousel.css`

**Content data** lives in `src/data/` as typed TypeScript files:
- `experience.ts` — work history
- `education.ts` — academic background
- `projects.ts` — project entries
- `skills.ts` — skills list
- `certifications.ts` — certifications (rendered below Education)
- `techIcons.ts` — maps each skill name to an Iconify icon id; add an entry when adding a skill

To update portfolio content, edit the relevant file in `src/data/`.

**CV:** `cv.tex` (English) and `cv_spanish.tex` (Spanish) in the repo root use Jake's Resume template and must stay one page. They are not generated from `src/data/`, so update them alongside it, then run `pnpm cv` and commit the PDFs in `public/cv/` (Vercel has no LaTeX).

**`useMobile` hook** (`src/hooks/useMobile.ts`) is used by both `Header` and `CursorGlow` to disable desktop-only effects on mobile.
