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
    startDate: "Feb. 2022",
    endDate: "Present",
    location: "Bogotá DC, Colombia",
    highlights: [
      "Honors Program 'Rodrigo Noguera Laborde' - First and Second Distinction.",
    ],
  },
];
