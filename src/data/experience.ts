type TExperience = {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
};

export const experience: TExperience[] = [
  {
    company: "Dantalabs",
    position: "Full Stack Developer and IA Researcher",
    description:
      "I've developed web applications using React, Tailwind CSS, TypeScript, Python, FastAPI, PostgreSQL and Docker. Also, I've been involved in the research of AI models and tools to improve the company development process.",
    startDate: "March 2025",
    endDate: "Present",
    location: "Bogotá, Colombia",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    responsibilities: [
      "Develop web applications using React, Tailwind CSS, TypeScript, Python, FastAPI, PostgreSQL and Docker.",
      "Research AI models and tools to improve the company development process.",
    ],
    achievements: [
      "Developed a web application that integrates with an AI model to analyze and improve the performance of the model.",
      "Developed a web application that integrates with an AI model to analyze and improve the performance of the model.",
    ],
  },
  {
    company: "SAM - Servicios Automáticos en Meteorología",
    position: "Full Stack Developer and DevOps Engineer",
    description:
      "I designed and developed applications and infrastructure for a forecast system for meteorological services.",
    startDate: "December 2024",
    endDate: "Present",
    location: "Bogotá, Colombia",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
      "AWS Services",
    ],
    responsibilities: [
      "Designed and developed applications and infrastructure for a forecast system for meteorological services.",
      "Developed a web application that integrates with an AI model to analyze and improve the performance of the model.",
    ],
    achievements: [
      "Developed a web application that integrates with an AI model to analyze and improve the performance of the model.",
      "Developed a web application that integrates with an AI model to analyze and improve the performance of the model.",
    ],
  },
];
