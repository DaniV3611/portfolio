import {
  Briefcase,
  Code,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import useMobile from "../../hooks/useMobile";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const asideRef = useRef<HTMLElement>(null);

  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "q") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (isMobile) {
    if (!isOpen) {
      return (
        <header className="fixed top-4 left-4">
          <div
            className={`flex justify-center items-center rounded ${
              isScrolled &&
              "bg-jet/10 backdrop-blur-sm border border-jet shadow-md"
            } transition-colors duration-300`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="stroke-2 size-8" />
          </div>
        </header>
      );
    }
    return (
      <aside
        ref={asideRef}
        className={`fixed top-0 left-0 z-50 h-dvh w-xs bg-jet/10 backdrop-blur-sm border border-jet shadow-md ${
          isClosing ? "animate-slide-out-left" : "animate-slide-in-left"
        } flex flex-col justify-between`}
      >
        {/** Menu */}
        <div className="flex flex-col gap-4 mt-4 ml-4">
          <a
            href="/#"
            className="flex items-center gap-2 text-2xl font-semibold hover:underline"
          >
            <Home className="stroke-3" />
            Home
          </a>
          <a
            href="/#experience"
            className="flex items-center gap-2 text-2xl font-semibold hover:underline"
          >
            <Briefcase className="stroke-3" />
            Experience
          </a>
          <a
            href="/#projects"
            className="flex items-center gap-2 text-2xl font-semibold hover:underline"
          >
            <Code className="stroke-3" />
            Projects
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-2 text-2xl font-semibold hover:underline"
          >
            <Mail className="stroke-3" />
            Contact
          </a>
        </div>

        {/** Socials */}
        <div className="flex flex-row gap-4 ml-4 mb-4">
          <a
            href="https://github.com/daniv3611"
            className="rounded-md p-1 text-ivory bg-jet/90"
          >
            <Github className="stroke-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-velasco-gonzalez-1831a12b5/"
            className="rounded-md p-1 text-ivory bg-jet/90"
          >
            <Linkedin className="stroke-2" />
          </a>
        </div>

        {/** Close Button */}
        <div
          className="fixed top-4 right-4 cursor-pointer"
          onClick={handleClose}
        >
          <X className="stroke-2 size-8" />
        </div>
      </aside>
    );
  }

  /** Desktop */
  return (
    <header
      className={`w-auto h-10 fixed top-0 z-50 px-2 mt-2 rounded-full ${
        isScrolled && "bg-jet/10 backdrop-blur-sm border border-jet shadow-md"
      } transition-all duration-300 contain-content`}
    >
      <div className="flex justify-center items-center h-full px-4 text-sm">
        {/* <a href="/#" className="text-2xl font-bold">
          Daniel Velasco
        </a> */}
        <div className="flex gap-4">
          <a
            href="/#"
            className="flex items-center gap-2 hover:underline animate-fade-in-down animate-delay-700"
          >
            <Home size={20} />
            Home
          </a>
          <a
            href="/#experience"
            className="flex items-center gap-2 hover:underline animate-fade-in-down animate-delay-800"
          >
            <Briefcase size={20} />
            Experience
          </a>
          <a
            href="/#projects"
            className="flex items-center gap-2 hover:underline animate-fade-in-down animate-delay-900"
          >
            <Code size={20} />
            Projects
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-2 hover:underline animate-fade-in-down animate-delay-1000"
          >
            <Mail size={20} />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
