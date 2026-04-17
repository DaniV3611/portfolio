import "./TechCarousel.css";

const technologies = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "LangGraph",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Next.js",
  "TailwindCSS",
  "Django",
  "RAG Systems",
  "Firebase",
  "Railway",
];

const TechCarousel = () => {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {duplicatedTechs.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="carousel-item px-4 py-2 text-sm bg-surface border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-accent/50 transition-all duration-300 whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
