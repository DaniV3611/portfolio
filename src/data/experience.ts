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
      "Built and deployed full-stack applications using FastAPI, React, TypeScript, Docker, and PostgreSQL.",
      "Designed scalable backend architectures and production APIs.",
      "Developed AI agents and intelligent workflows using LangGraph.",
      "Implemented Model Context Protocol (MCP) servers and integrated AI tools with services like Microsoft Copilot.",
      "Deployed and monitored applications in production environments.",
    ],
  },
  {
    company: "SAM | Automated Meteorological Services",
    position: "Software Developer & Data Architect",
    startDate: "December 2024",
    endDate: "December 2025",
    location: "Bogotá, Colombia",
    responsibilities: [
      "Architected and developed a data-driven climate forecasting platform for solar energy systems.",
      "Built an internal web platform using React, featuring interactive dashboards and real-time metrics.",
      "Designed data pipelines using Python, Pandas, and NumPy for forecasting and analytics.",
      "Integrated Open-Meteo APIs for real-time and historical weather data.",
      "Developed backend services with Django REST Framework and PostgreSQL, and deployed infrastructure on AWS (EC2, RDS, S3, Lambda).",
    ],
  },
  {
    company: "Dataexco",
    position: "Full Stack Developer",
    startDate: "August 2023",
    endDate: "December 2024",
    location: "Duitama, Colombia",
    responsibilities: [
      "Led the migration of a legacy academic system to a modern web platform.",
      "Developed backend services with Django and MySQL.",
      "Built frontend interfaces using HTML, CSS, and JavaScript.",
      "Delivered internal tools improving academic and administrative workflows.",
    ],
  },
];
