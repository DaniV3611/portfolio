# Personal Portfolio

A modern, responsive personal portfolio website showcasing my experience, projects, skills, and education.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) with React 19 integration
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom dark theme
- **Animations**: [@midudev/tailwind-animations](https://github.com/midudev/tailwind-animations)
- **Icons**: [Lucide](https://lucide.dev/)
- **Language**: TypeScript

## Project Structure

```
src/
├── assets/        # Static assets (SVGs, images)
├── components/    # UI components (Astro & React)
├── data/          # Content data files
├── hooks/         # React custom hooks
├── layouts/       # Astro layout components
├── pages/         # File-based routing
└── styles/        # Global CSS
public/
└── fonts/         # Custom fonts
```

## Features

- Responsive design optimized for all devices
- Dark theme with custom color palette
- Interactive UI components with React islands
- Smooth animations and transitions
- Sections: Hero, Experience, Projects, Skills, Education, Contact

## Development

This project is **pnpm-only**. npm, yarn, and bun are rejected by a `preinstall` hook (`scripts/ensure-pnpm.mjs`) — use the pinned pnpm version declared in `package.json`.

```bash
pnpm install   # install dependencies
pnpm dev       # start dev server at http://localhost:4321
pnpm build     # build production site to ./dist/
pnpm preview   # preview the production build locally
```

### Supply-chain hardening

Package management is locked down in `pnpm-workspace.yaml` to reduce exposure to npm supply-chain attacks:

- **`minimumReleaseAge: 1440`** — a published version must be at least 24 hours old before it can be installed, giving time for malicious releases to be flagged and yanked.
- **`strictDepBuilds: true`** — postinstall/build scripts are blocked by default. Only packages explicitly listed in `allowBuilds` (currently `@tailwindcss/oxide`, `esbuild`, `sharp`) may run install scripts.
- **`blockExoticSubdeps: true`** — rejects tarball URLs, git deps, and other non-registry sources transitively.
- **`verifyStoreIntegrity` + `strictStorePkgContentCheck`** — every install verifies the local store hasn't been tampered with.
- **`verifyDepsBeforeRun: error` + `preferFrozenLockfile: true`** — every command checks the lockfile matches `package.json` before running.
- **`packageManagerStrict` + `packageManagerStrictVersion`** — only the exact pnpm version declared in `package.json` is allowed.

When adding a dependency that ships build scripts, add it to `allowBuilds` in `pnpm-workspace.yaml`; otherwise the install will fail with `ERR_PNPM_IGNORED_BUILDS`.
