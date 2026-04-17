type TSkillCategory = {
  category: string;
  skills: string[];
};

export const skills: TSkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C#", "HTML/CSS", "Golang"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "TanStack", "ShadCN"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Django", "Flask", ".NET", "Node.js"],
  },
  {
    category: "AI & Data",
    skills: ["LangGraph", "RAG Systems", "MCP", "Chroma", "Ollama", "Pandas", "NumPy"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Railway", "Google Cloud Platform"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Oracle SQL"],
  },
];
