type TProject = {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  tech: string[];
  url?: string;
  featured?: boolean;
};

export const projects: TProject[] = [
  {
    title: "OrbitEngine",
    role: "Full-Stack Developer & Architect",
    startDate: "Nov. 2025",
    endDate: "Apr. 2026",
    featured: true,
    url: "https://orbitengine.lat",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Railway"],
    description: [
      "Built and deployed a multi-tenant SaaS platform centralizing inventory, client, and sales operations for SMEs.",
      "Implemented real-time low-stock alerts and daily sales analytics dashboards.",
      "Owned the full development lifecycle from system design to production maintenance.",
    ],
  },
  {
    title: "Coastal Jurisprudence AI Agent",
    role: "AI Systems Developer",
    startDate: "Mar. 2026",
    endDate: "Present",
    tech: [
      "RAG",
      "LangGraph",
      "FastAPI",
      "Next.js",
      "Chroma",
      "Ollama",
      "Firebase",
    ],
    description: [
      "Production RAG system for Colombian coastal jurisprudence, used by lawyers for AI-assisted case research.",
      "Built PDF ingestion pipeline with Docling and Chroma vector DB; orchestrated with LangGraph and Ollama embeddings.",
    ],
  },
  {
    title: "Tech Craft Solutions",
    role: "Co-Founder & CTO",
    startDate: "June 2025",
    endDate: "Present",
    tech: ["FastAPI", "React", "TypeScript", "LangGraph", "PostgreSQL"],
    description: [
      "Co-founded a software company delivering custom AI-driven and full-stack solutions.",
      "Defined system architectures and led end-to-end development across multiple client projects.",
    ],
  },
  {
    title: "Software as Innovation",
    role: "Research Group Member",
    startDate: "February 2025",
    endDate: "Present",
    tech: [],
    description: [
      "Active member of a university research group focused on software-driven innovation.",
      "Contributed to research-driven software projects from prototyping to implementation.",
    ],
  },
];
