# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview production build
```

There is no test suite or linter configured.

## Architecture

This is an **Astro + React** personal portfolio site for Daniel Velasco (Software Developer & AI Engineer).

**Framework split:**
- Static sections are `.astro` components (HeroSection, ExperienceSection, EducationSection, ProjectsSection, SkillsSection, ContactSection)
- Interactive/stateful UI is React (`.tsx`): `Header`, `CursorGlow`, `TechCarousel`
- React components used in Astro templates require `client:load` directive to hydrate

**Routing:** Single-page with anchor links (`/#experience`, `/#education`, etc.). All content lives in `src/pages/index.astro`.

**Styling:**
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, not postcss)
- Theme tokens defined in `src/styles/global.css` under `@theme` — custom colors (`background`, `surface`, `accent`, `text-primary`, etc.) and the `Plus Jakarta Sans` variable font
- Reusable CSS utilities in `global.css`: `.glass`, `.glass-card`, `.glass-light`, `.gradient-text`, `.gradient-border`, `.glow-accent`, `.bg-grid`, `.animate-delay-*`
- Component-scoped CSS files: `Header.css`, `TechCarousel.css`

**Content data** lives in `src/data/` as typed TypeScript files:
- `experience.ts` — work history
- `education.ts` — academic background
- `projects.ts` — project entries
- `skills.ts` — skills list

To update portfolio content, edit the relevant file in `src/data/`.

**`useMobile` hook** (`src/hooks/useMobile.ts`) is used by both `Header` and `CursorGlow` to disable desktop-only effects on mobile.
