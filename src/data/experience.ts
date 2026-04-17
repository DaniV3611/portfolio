type TExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
};

export const experience: TExperience[] = [
  {
    company: "Dantalabs",
    position: "Software Developer & AI Tools Developer",
    startDate: "March 2025",
    endDate: "Present",
    location: "Bogotá, Colombia",
    responsibilities: [
      "Built production full-stack applications using FastAPI, React, TypeScript, Docker, and PostgreSQL.",
      "Developed AI agents and multi-step workflows using LangGraph; designed scalable backend APIs.",
      "Implemented MCP servers and integrated AI tools with Microsoft Copilot; deployed and monitored services in production.",
    ],
  },
  {
    company: "SAM | Automated Meteorological Services",
    position: "Software Developer & Data Architect",
    startDate: "December 2024",
    endDate: "December 2025",
    location: "Bogotá, Colombia",
    responsibilities: [
      "Architected a climate forecasting platform for solar energy systems using Python, Pandas, and Open-Meteo APIs.",
      "Built React dashboards with real-time metrics; deployed Django REST backend on AWS (EC2, RDS, S3, Lambda).",
    ],
  },
  {
    company: "Dataexco",
    position: "Full Stack Developer",
    startDate: "August 2023",
    endDate: "December 2024",
    location: "Duitama, Colombia",
    responsibilities: [
      "Led the migration of a legacy academic system to a modern web platform using Django and MySQL.",
      "Delivered frontend interfaces and internal tooling that improved academic and administrative workflows.",
    ],
  },
];
