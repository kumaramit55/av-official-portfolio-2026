import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand/Name Area */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold text-xl tracking-tighter">
              AMIT<span className="text-blue-500">.</span>VERMA
            </h2>
            <p className="text-sm mt-2 max-w-[250px]">
              Building digital experiences with React and modern frontend tools.
            </p>
          </div>

          {/* Quick Links - Responsive Grid */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-5 text-xl">
            <a
              href="#"
              className="hover:text-white transition-colors text-gray-500"
              aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors text-gray-500"
              aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors text-gray-500"
              aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-gray-600">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <p>Designed & Built by Amit Verma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
