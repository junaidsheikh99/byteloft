import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-[14px]
      transition-all duration-500 ease-in-out
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-[#2596be]"
      }`}
    >
      <a
        href="/"
        className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
          scrolled ? "text-black" : "text-hero-foreground"
        }`}
      >
        Byteloft
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#about"
          className={`text-sm transition-colors duration-300 ${
            scrolled
              ? "text-gray-700 hover:text-black"
              : "text-hero-foreground/70 hover:text-hero-foreground"
          }`}
        >
          Aboutttt
        </a>

        <a
          href="#services"
          className={`text-sm transition-colors duration-300 ${
            scrolled
              ? "text-gray-700 hover:text-black"
              : "text-hero-foreground/70 hover:text-hero-foreground"
          }`}
        >
          Services
        </a>

        <a
          href="#work"
          className={`text-sm transition-colors duration-300 ${
            scrolled
              ? "text-gray-700 hover:text-black"
              : "text-hero-foreground/70 hover:text-hero-foreground"
          }`}
        >
          Work
        </a>

        <a
          href="#testimonials"
          className={`text-sm transition-colors duration-300 ${
            scrolled
              ? "text-gray-700 hover:text-black"
              : "text-hero-foreground/70 hover:text-hero-foreground"
          }`}
        >
          Testimonials
        </a>

        <a
          href="#contact"
          className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-black/90"
              : "bg-hero-foreground text-hero hover:bg-hero-foreground/90"
          }`}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden transition-colors duration-300 ${
          scrolled ? "text-black" : "text-hero-foreground"
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md p-6 flex flex-col gap-4 md:hidden border-t">
          <a href="#about" className="text-gray-700 hover:text-black text-sm">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-black text-sm">
            Services
          </a>
          <a href="#work" className="text-gray-700 hover:text-black text-sm">
            Work
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-black text-sm">
            Testimonials
          </a>
          <a className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium w-fit">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;