import { useEffect, useState } from "react";

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
      className={`w-full md:w-3xl lg:w-4xl h-16 fixed top-0 z-50 px-2 mt-2 rounded-full ${
        isScrolled &&
        "bg-cteal/20 backdrop-blur-sm border border-pblue shadow-md"
      } transition-colors duration-300`}
    >
      <div className="flex justify-between items-center h-full px-4">
        <a href="/" className="text-black/80 text-2xl font-bold">
          Daniel Velasco
        </a>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="/#experience">Experience</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
