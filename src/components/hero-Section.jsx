import { FaGithub, FaLinkedin } from "react-icons/fa";
import myResume from "../../public/Amit Kumar.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading: Using "dvh" for mobile prevents the address bar jump */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Building <span className="text-blue-400">clean</span> &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            scalable
          </span>{" "}
          <br className="hidden md:block" />
          React interfaces
        </h1>

        {/* Description: Controlled width for better readability */}
        <p className="mt-8 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto">
          Frontend Developer focused on building clean, scalable user interfaces
          using React and modern frontend tools.
        </p>

        {/* Social Icons: Larger tap targets for mobile */}
        <div className="mt-10 flex justify-center gap-8 text-3xl text-gray-400">
          <a
            className="hover:text-blue-400 transition-colors duration-300"
            href="https://github.com/kumaramit55"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            className="hover:text-blue-400 transition-colors duration-300"
            href="https://linkedin.com/in/amit-kumar555"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* CTA Buttons: Full width on mobile, inline on desktop */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all font-semibold shadow-lg shadow-blue-500/20 active:scale-95">
            View Work
          </a>

          <a
            href={myResume} // The slash starts at the 'public' folder
            download="Amit_Verma_Resume" // This renames the file for the user when they download it
            target="_blank" // Fallback to open in new tab if download fails
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 border border-gray-700 hover:border-blue-400 text-white rounded-full transition-all font-semibold active:scale-95 text-center">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
