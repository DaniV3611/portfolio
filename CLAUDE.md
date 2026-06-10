# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server (localhost:4321)
pnpm build    # Production build
pnpm preview  # Preview production build
```

This project is **pnpm-only**. `scripts/ensure-pnpm.mjs` runs as a `preinstall` hook and rejects any install attempted with npm/yarn/bun. Hardening in `pnpm-workspace.yaml` (`minimumReleaseAge`, `strictDepBuilds`, `verifyStoreIntegrity`, frozen lockfile, etc.) protects against supply-chain attacks; new packages that need build scripts must be added to `allowBuilds`.

There is no test suite or linter configured.

## Architecture

This is an **Astro + React** personal portfolio site for Daniel Velasco (AI Systems & Full-Stack Developer).

**Framework split:**
- Static sections are `.astro` components (HeroSection, ExperienceSection, EducationSection, ProjectsSection, SkillsSection, ContactSection)
- Interactive/stateful UI is React (`.tsx`): `Header` (lives in its own folder `src/components/Header/`), `CursorGlow`, `TechCarousel`
- React components used in Astro templates require `client:load` directive to hydrate

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

To update portfolio content, edit the relevant file in `src/data/`.

**`useMobile` hook** (`src/hooks/useMobile.ts`) is used by both `Header` and `CursorGlow` to disable desktop-only effects on mobile.
