import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* 🔥 Reusable NavItem */
const NavItem = ({ href, children, scrolled, isOpen }) => {
  const active = scrolled || isOpen;

  return (
    <motion.a
      href={href}
      className={`relative text-sm font-medium ${
        active ? "text-gray-700" : "text-white/80"
      }`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}

      {/* Smooth underline */}
      <motion.span
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`absolute left-0 -bottom-1 h-[2px] ${
          active ? "bg-black" : "bg-white"
        }`}
      />
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = scrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-[14px]
      transition-all duration-500 ease-in-out
      ${
        active
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-[#2596be]"
      }`}
    >
      {/* Logo */}
      <a
        href="/"
        className={` font-bold text-xl tracking-tight transition-colors duration-300 ${
          active ? "text-black" : "text-white"
        }`}
      >
        Byteloft
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">

        <NavItem href="#about" scrolled={scrolled} isOpen={isOpen}>
          About
        </NavItem>

        <NavItem href="#services" scrolled={scrolled} isOpen={isOpen}>
          Services
        </NavItem>

        <NavItem href="#work" scrolled={scrolled} isOpen={isOpen}>
          Work
        </NavItem>

        <NavItem href="#whyus" scrolled={scrolled} isOpen={isOpen}>
          WhyUs
        </NavItem>

        <NavItem href="#testimonials" scrolled={scrolled} isOpen={isOpen}>
          Testimonials
        </NavItem>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
            active
              ? "bg-black text-white"
              : "bg-white text-[#2596be]"
          }`}
        >
          Let's talk
        </motion.a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden transition-colors duration-300 ${
          active ? "text-black" : "text-white"
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[60px] right-0 w-full h-[calc(100vh-60px)] bg-white flex flex-col items-center pt-24 gap-8 md:hidden shadow-lg z-40"
          >
            <a onClick={handleClose} href="#about" className="text-xl text-gray-800">
              About
            </a>

            <a onClick={handleClose} href="#services" className="text-xl text-gray-800">
              Services
            </a>

            <a onClick={handleClose} href="#work" className="text-xl text-gray-800">
              Work
            </a>

            <a onClick={handleClose} href="#whyus" className="text-xl text-gray-800">
              WhyUs
            </a>

            <a onClick={handleClose} href="#testimonials" className="text-xl text-gray-800">
              Testimonials
            </a>

            <a
              onClick={handleClose}
              href="#contact"
              className="bg-black text-white rounded-full px-8 py-3 text-lg"
            >
              Let's talk
            </a>
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;