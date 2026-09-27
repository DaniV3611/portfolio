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
    startDate: "Nov 2025",
    endDate: "Apr 2026",
    featured: true,
    url: "https://orbitengine.lat",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Railway"],
    description: [
      "Built and launched a multi-tenant SaaS that 10+ small businesses use to manage inventory, clients and sales.",
      "Added real-time low-stock alerts and daily sales dashboards.",
      "Handled design, development, deployment and ongoing maintenance.",
    ],
  },
  {
    title: "Coastal Jurisprudence AI Agent",
    role: "AI Systems Developer",
    startDate: "Mar 2026",
    endDate: "Jun 2026",
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
      "RAG assistant that lawyers use to search and ask questions about Colombian coastal jurisprudence.",
      "Built the PDF ingestion pipeline (Docling, Ollama embeddings, Chroma) and the LangGraph flow that answers questions.",
    ],
  },
];
