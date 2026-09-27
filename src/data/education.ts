type TEducation = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
};

export const education: TEducation[] = [
  {
    institution: "Sergio Arboleda University",
    degree: "Computer Science and Artificial Intelligence Engineering",
    startDate: "Feb 2022",
    endDate: "Sep 2026",
    location: "Bogotá DC, Colombia",
    highlights: [
      "Graduated Cum Laude.",
      "First, Second and Third Distinction in the 'Rodrigo Noguera Laborde' Honors Program.",
      "Member of the 'Software as Innovation' research group (Feb 2025 - Jun 2026).",
    ],
  },
];
