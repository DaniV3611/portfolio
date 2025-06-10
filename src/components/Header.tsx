import { Briefcase, Code, Home, Mail } from "lucide-react";
import { useEffect, useState } from "react";

// TODO: Work on mobile version

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full md:w-3xl lg:w-4xl h-12 fixed top-0 z-50 px-2 mt-2 rounded-full ${
        isScrolled && "bg-jet/10 backdrop-blur-sm border border-jet shadow-md"
      } transition-all duration-300 contain-content`}
    >
      <div className="flex justify-between items-center h-full px-4">
        <a href="/#" className="text-2xl font-bold">
          Daniel Velasco
        </a>
        <div className="flex gap-4">
          <a href="/#" className="flex items-center gap-2 hover:underline">
            <Home />
            Home
          </a>
          <a
            href="/#experience"
            className="flex items-center gap-2 hover:underline"
          >
            <Briefcase />
            Experience
          </a>
          <a
            href="/#projects"
            className="flex items-center gap-2 hover:underline"
          >
            <Code />
            Projects
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
