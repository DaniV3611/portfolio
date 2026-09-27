type TExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  url?: string;
};

export const experience: TExperience[] = [
  {
    company: "Nimble Gravity",
    position: "AI Engineer",
    startDate: "Jul 2026",
    endDate: "Present",
    location: "Bogotá, Colombia (Remote)",
    url: "https://nimblegravity.com",
    responsibilities: [
      "Build generative AI solutions for clients on the Data & AI team, mostly RAG and semantic search over company documents.",
      "Develop agents with LangGraph and MCP that process documents and automate parts of business workflows.",
      "Extract structured data from PDFs, emails, spreadsheets and images, running on Azure and AWS.",
    ],
  },
  {
    company: "Tech Craft Solutions",
    position: "Co-Founder & CTO",
    startDate: "Jun 2025",
    endDate: "Jun 2026",
    location: "Bogotá, Colombia",
    responsibilities: [
      "Co-founded a small software company building custom AI and web solutions for clients.",
      "As CTO, chose the architecture and led development on each client project (FastAPI, React, TypeScript, LangGraph, PostgreSQL).",
    ],
  },
  {
    company: "Dantalabs (now Vadian)",
    position: "Software Developer & AI Tools Developer",
    startDate: "Mar 2025",
    endDate: "Jul 2026",
    location: "Bogotá, Colombia (Remote)",
    url: "https://vadian.dev",
    responsibilities: [
      "Built full-stack applications with FastAPI, React, TypeScript, Docker and PostgreSQL.",
      "Developed AI agents and multi-step workflows in LangGraph, plus the backend APIs behind them.",
      "Built MCP servers that connect AI tools to Microsoft Copilot, and deployed and monitored them in production.",
    ],
  },
  {
    company: "SAM | Automated Meteorological Services",
    position: "Software Developer & Data Architect",
    startDate: "Dec 2024",
    endDate: "Dec 2025",
    location: "Bogotá, Colombia",
    responsibilities: [
      "Co-designed a weather forecasting platform for solar energy systems using Python, Pandas and the Open-Meteo API.",
      "Built the React dashboards and the Django REST backend, deployed on AWS (EC2, RDS, S3, Lambda).",
    ],
  },
  {
    company: "Dataexco",
    position: "Full Stack Developer",
    startDate: "Aug 2023",
    endDate: "Dec 2024",
    location: "Duitama, Colombia",
    responsibilities: [
      "Led the migration of a legacy academic system to a new web platform built with Django and MySQL.",
      "Built the frontend and internal tools used by academic and administrative staff.",
    ],
  },
];
