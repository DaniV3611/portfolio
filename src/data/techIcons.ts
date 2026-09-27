/**
 * Maps a technology name to an Iconify icon id.
 *
 * - `logos:*`        → brand-colored multicolor logos (keep their own colors)
 * - `simple-icons:*` → monochrome brand marks (inherit `currentColor`)
 * - `lucide:*`       → concept icons for tools without a brand mark
 *
 * Verified against the installed @iconify-json/{logos,simple-icons,lucide} sets.
 */
export const techIcons: Record<string, string> = {
  // Languages
  "Python": "logos:python",
  "TypeScript": "logos:typescript-icon",
  "JavaScript": "logos:javascript",
  "SQL": "lucide:database",
  "HTML/CSS": "logos:html-5",
  "Golang": "logos:go",

  // Frontend
  "React": "logos:react",
  "Next.js": "simple-icons:nextdotjs",
  "TailwindCSS": "logos:tailwindcss-icon",
  "TanStack": "logos:react-query-icon",
  "ShadCN": "simple-icons:shadcnui",

  // Backend
  "FastAPI": "logos:fastapi-icon",
  "Django": "logos:django-icon",
  "Node.js": "logos:nodejs-icon",

  // AI & Data
  "LangGraph": "lucide:workflow",
  "RAG Systems": "lucide:database-zap",
  "MCP": "lucide:plug",
  "Claude API": "logos:claude-icon",
  "Embeddings": "lucide:chart-scatter",
  "LLM Evaluation": "lucide:gauge",
  "Chroma": "lucide:layers",
  "Ollama": "simple-icons:ollama",
  "Pandas": "logos:pandas-icon",
  "NumPy": "logos:numpy",

  // Cloud & DevOps
  "Docker": "logos:docker-icon",
  "AWS": "logos:aws",
  "Azure": "logos:microsoft-azure",
  "Railway": "simple-icons:railway",
  "Google Cloud Platform": "logos:google-cloud",

  // Databases
  "PostgreSQL": "logos:postgresql",
  "MySQL": "logos:mysql-icon",
  "MongoDB": "logos:mongodb-icon",
  "Firebase": "logos:firebase",
};

/** Fallback glyph for any tech not present in the map. */
export const fallbackTechIcon = "lucide:code-xml";

export function getTechIcon(name: string): string {
  return techIcons[name] ?? fallbackTechIcon;
}
