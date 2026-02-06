import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        scrolled ?
          "bg-gray-900/80 backdrop-blur-md py-3 border-b border-gray-800 shadow-lg"
        : "bg-transparent py-5"
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-black tracking-tighter text-white overflow-hidden group cursor-pointer">
          AMIT
          <span className="max-w-0 inline-block opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out text-gray-500">
            KUMAR
          </span>
          <span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="mailto:amitkverma551@email.com?subject=Project Inquiry - [Your Name]"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full 
             hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] 
             transition-all duration-300 active:scale-95">
            Hire Me
          </a>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            <HiX />
          : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 min-h-screen w-full bg-gray-900 z-[150] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ?
            "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
        }`}>
        {/* Close button inside the menu for better UX */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-4xl text-white">
          <HiX />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white hover:text-blue-500 transition-colors">
            {link.name}
          </a>
        ))}

        <a
          href="mailto:amitkverma551@email.com?subject=Project Inquiry - [Your Name]"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full 
             hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] 
             transition-all duration-300 active:scale-95"
          onClick={() => setIsOpen(false)}>
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
