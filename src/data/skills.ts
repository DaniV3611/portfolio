type TSkillCategory = {
  category: string;
  skills: string[];
};

export const skills: TSkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C#", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: ["React", "TailwindCSS", "TanStack", "ShadCN"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Django", "Flask", ".NET", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Google Cloud Platform"],
  },
  {
    category: "Data & AI",
    skills: ["LangGraph", "Pandas", "NumPy", "Matplotlib"],
  },
];
