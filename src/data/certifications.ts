type TCertification = {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  url?: string;
};

export const certifications: TCertification[] = [
  {
    name: "Claude Certified Developer - Foundations",
    issuer: "Anthropic",
    date: "Aug 2026",
    icon: "logos:claude-icon",
  },
];
