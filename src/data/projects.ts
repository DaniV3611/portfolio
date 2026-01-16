type TProject = {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export const projects: TProject[] = [
  {
    title: "Tech Craft Solutions",
    role: "Founder & CTO",
    startDate: "June 2025",
    endDate: "Present",
    description: [
      "Founded and led a software development company delivering custom solutions.",
      "Defined system architectures and led development of AI-driven and full-stack applications.",
    ],
  },
  {
    title: "Software as Innovation",
    role: "Research Group Member",
    startDate: "February 2025",
    endDate: "Present",
    description: [
      "Active member of a university research group focused on software-driven innovation.",
      "Contributed to research-driven software projects from prototyping to implementation.",
    ],
  },
];
