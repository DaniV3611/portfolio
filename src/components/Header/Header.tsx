import {
  Briefcase,
  Code,
  GraduationCap,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  User,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import useMobile from "../../hooks/useMobile";
import ThemeToggle from "../ThemeToggle";
import "./Header.css";

const navItems = [
  { id: "home", href: "/#home", label: "Home", icon: Home },
  { id: "about", href: "/#about", label: "About", icon: User },
  {
    id: "experience",
    href: "/#experience",
    label: "Experience",
    icon: Briefcase,
  },
  { id: "projects", href: "/#projects", label: "Projects", icon: Code },
  { id: "skills", href: "/#skills", label: "Skills", icon: Wrench },
  {
    id: "education",
    href: "/#education",
    label: "Education",
    icon: GraduationCap,
  },
  { id: "contact", href: "/#contact", label: "Contact", icon: Mail },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const asideRef = useRef<HTMLElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleNavClick = () => {
    if (isMobile) {
      handleClose();
    }
  };

  // Mobile Header
  if (isMobile) {
    if (!isOpen) {
      return (
        <>
          <header className="fixed top-4 left-4 z-50">
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "glass border border-border" : "bg-transparent"
              }`}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-text-primary" />
            </button>
          </header>
          <div
            className={`fixed top-4 right-4 z-50 rounded-full transition-all duration-300 ${
              isScrolled ? "glass border border-border" : "bg-transparent"
            }`}
          >
            <ThemeToggle align="right" />
          </div>
        </>
      );
    }

    return (
      <>
        {/* Backdrop */}
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />

        {/* Mobile Menu */}
        <aside
          ref={asideRef}
          className={`fixed top-0 left-0 z-50 h-dvh w-72 glass border-r border-border ${
            isClosing ? "animate-slide-out-left" : "animate-slide-in-left"
          } flex flex-col`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-lg font-semibold gradient-text font-display">
              Menu
            </span>
            <button
              className="p-2 rounded-lg hover:bg-surface-elevated transition-colors"
              onClick={handleClose}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1.5">
              {navItems.map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                        active
                          ? "bg-accent/10 text-accent"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 transition-colors ${
                          active ? "text-accent" : "group-hover:text-accent"
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Theme control */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
              Theme
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Appearance</span>
              <ThemeToggle align="right" />
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-3">
              Connect
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/daniv3611"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-surface-elevated border border-border hover:border-accent/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-text-secondary" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-velasco-gonzalez-1831a12b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-surface-elevated border border-border hover:border-accent/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-text-secondary" />
              </a>
            </div>
          </div>
        </aside>
      </>
    );
  }

  // Desktop Header
  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 border border-border transition-all duration-300 ${
        isScrolled
          ? "glass border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      } rounded-full px-2`}
    >
      <nav className="flex items-center h-12">
        <ul className="flex items-center gap-1">
          {navItems.map((item, index) => {
            const active = activeId === item.id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 animate-fade-in-down ${
                    active
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50"
                  }`}
                  style={{ animationDelay: `${(index + 1) * 80}ms` }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social icons for desktop */}
        <div className="hidden md:flex items-center gap-1 ml-4 pl-4 border-l border-border">
          <a
            href="https://github.com/daniv3611"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-velasco-gonzalez-1831a12b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Theme toggle */}
        <div className="flex items-center ml-2 pl-2 border-l border-border">
          <ThemeToggle align="right" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
