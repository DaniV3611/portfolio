# AGENTS.md - AI Agent Guidelines

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

Personal portfolio website built with **Astro 5.x**, **React 19**, **TypeScript**, and **Tailwind CSS 4.x**.

## Build/Lint/Test Commands

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands directly |

### Build Process

```bash
# Development
npm run dev

# Production build
npm run build

# Type checking (via Astro)
npx astro check
```

### Testing

No test framework is currently configured. If tests are added:
- Place test files adjacent to source files or in `__tests__/` directories
- Use `.test.ts` or `.spec.ts` suffix for test files

### Linting/Formatting

No ESLint or Prettier configuration exists. Follow the code style patterns documented below.

## Project Structure

```
src/
├── assets/        # Static assets (SVGs, images)
├── components/    # Reusable UI components
│   └── Header/    # Component folders with co-located CSS
├── data/          # Data/content files (TypeScript)
├── hooks/         # React custom hooks
├── layouts/       # Astro layout components
├── pages/         # Astro pages (file-based routing)
└── styles/        # Global CSS files
public/            # Static files served at root
```

## Code Style Guidelines

### File Naming

- **Components**: PascalCase (e.g., `HeroSection.astro`, `Header.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useMobile.ts`)
- **Data files**: camelCase (e.g., `experience.ts`)
- **CSS files**: Match component name (e.g., `Header.css`)
- **Pages**: lowercase (e.g., `index.astro`)

### Import Conventions

Order imports as follows:
1. External packages (React, libraries)
2. React hooks (grouped)
3. Local imports (hooks, components, data)
4. CSS imports last

```typescript
// External packages
import { useState, useEffect, useRef } from "react";

// Local hooks
import useMobile from "../hooks/useMobile";

// Components/data
import Header from "./Header";

// Styles
import "./Component.css";
```

### TypeScript Guidelines

- **Strict mode is enabled** - always provide proper types
- Prefix custom types with `T` (e.g., `TExperience`, `TProject`)
- Use explicit typing for component props
- Use proper generics for refs: `useRef<HTMLElement>(null)`
- Type event handlers properly: `MouseEvent`, `KeyboardEvent`

```typescript
// Type definitions
type TExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
};

// Component props
interface HeaderProps {
  title: string;
  isSticky?: boolean;
}
```

### React Component Patterns

- Use **functional components** with arrow function syntax
- Use **default exports** at end of file
- Place hooks at top of component body
- Handle cleanup in `useEffect` return functions

```tsx
const MyComponent = ({ title }: MyComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup
    };
  }, []);

  return <div ref={ref}>{title}</div>;
};

export default MyComponent;
```

### Astro Component Patterns

- Use `---` frontmatter delimiters for imports and logic
- Include `.astro` extension in imports
- Use Tailwind classes directly in templates

```astro
---
import Layout from "../layouts/Layout.astro";
import HeroSection from "../components/HeroSection.astro";

const pageTitle = "Portfolio";
---

<Layout title={pageTitle}>
  <HeroSection />
</Layout>
```

### Styling Guidelines

- Use **Tailwind CSS** for styling (utility-first approach)
- Modern dark theme color palette defined in `src/styles/global.css`:
  - **Backgrounds**: `background` (#0a0a0b), `surface` (#121214), `surface-elevated` (#1a1a1d)
  - **Borders**: `border` (#27272a), `border-hover` (#3f3f46)
  - **Text**: `text-primary` (#fafafa), `text-secondary` (#a1a1aa), `text-muted` (#71717a)
  - **Accent**: `accent` (#3b82f6 - blue), `secondary` (#f59e0b - amber), `success` (#10b981 - green)
- Use custom utility classes: `gradient-text`, `glass`, `glass-light`, `glow-accent`
- Use `@midudev/tailwind-animations` classes for animations
- Co-locate component-specific CSS with components

### String Formatting

- Use **double quotes** for strings consistently
- Use template literals for string interpolation

### Error Handling

- Handle potential null refs before accessing
- Use optional chaining (`?.`) for nullable properties
- Provide fallback values with nullish coalescing (`??`)

```typescript
const element = ref.current;
if (!element) return;

const value = data?.property ?? "default";
```

### Comments

- Write comments in English (some legacy Spanish comments exist)
- Document complex logic and non-obvious behavior
- Use JSDoc for exported functions and types

## Framework-Specific Notes

### Astro

- Uses **island architecture** - React components need `client:*` directives for hydration
- File-based routing in `src/pages/`
- Layouts wrap page content

```astro
<!-- For interactive React components -->
<Header client:load />
```

### React Integration

- React components hydrate on client side
- Use `client:load` for components needed immediately
- Use `client:visible` for components that can wait

### Tailwind CSS 4.x

- Configuration via `@theme` directive in CSS (not tailwind.config.js)
- Vite plugin integration in `astro.config.mjs`

## Environment

- **Node.js**: Check `.nvmrc` or use LTS version
- **Package Manager**: npm (package-lock.json present)
- **ES Modules**: Project uses `"type": "module"`

## Common Tasks

### Adding a New Component

1. Create component file in `src/components/`
2. For React components, create `.tsx` file with co-located `.css` if needed
3. For Astro components, create `.astro` file
4. Export and import where needed

### Adding a New Page

1. Create `.astro` file in `src/pages/`
2. Import and use `Layout.astro` wrapper
3. Page route matches filename (e.g., `about.astro` -> `/about`)

### Updating Styles

1. Global styles: Edit `src/styles/global.css`
2. Component styles: Edit co-located CSS or use Tailwind classes
3. Theme colors: Modify `@theme` block in `global.css`
