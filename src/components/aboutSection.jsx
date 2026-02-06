import { FaCode, FaServer, FaLayerGroup, FaMobileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      {/* Subtle top divider with a glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-600 font-bold">
            About Me
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-8 leading-tight">
            How I approach <br className="hidden md:block" />
            <span className="text-blue-600">frontend</span> development
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I enjoy working on real product features where code quality,
            performance, and user experience matter. I bridge the gap between
            complex APIs and intuitive interfaces.
          </p>
        </div>

        {/* RIGHT CARD: Grid of features instead of a simple list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { icon: <FaCode />, text: "Clean & Scalable Code" },
            { icon: <FaServer />, text: "API-Driven Logic" },
            { icon: <FaLayerGroup />, text: "Modular Architecture" },
            { icon: <FaMobileAlt />, text: "Responsive Design" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="text-blue-500 text-2xl mb-4 bg-blue-50 p-3 rounded-xl">
                {item.icon}
              </div>
              <p className="font-semibold text-gray-800 tracking-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
