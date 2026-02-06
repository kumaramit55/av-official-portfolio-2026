import {
  FaExternalLinkAlt,
  FaGithub,
  FaShoppingCart,
  FaLeaf,
  FaBook,
  FaUserAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Library Management System",
    subtitle: "Internship Project",
    description:
      "Built professional UI features including server-side pagination, complex filters, and role-based access control. Integrated REST APIs with a focus on scalable component architecture.",
    tech: ["React", "MUI", "REST API", "Axios"],
    icon: <FaBook className="text-blue-500" />,
    live: "#",
    code: "#",
    hot: true, // Highlight as professional work
  },
  {
    title: "Modern E-Commerce",
    subtitle: "State Management Project",
    description:
      "A full-featured shopping experience. Implemented Redux for global state management (cart logic), responsive product grids, and a seamless checkout flow.",
    tech: ["React", "Redux", "Tailwind CSS"],
    icon: <FaShoppingCart className="text-emerald-500" />,
    live: "#",
    code: "#",
  },
  {
    title: "ZenFlow Yoga",
    subtitle: "Frontend Showcase",
    description:
      "A high-performance landing page focused on aesthetic UI and smooth user experience. Built using semantic HTML and custom CSS for pixel-perfect responsiveness.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    icon: <FaLeaf className="text-green-500" />,
    live: "#",
    code: "#",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Identity Project",
    description:
      "The very site you are viewing. Built with a focus on dark/light harmony, reusable React components, and modern Tailwind layouts.",
    tech: ["React", "Tailwind"],
    icon: <FaUserAlt className="text-purple-500" />,
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <span className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
              Selected Works
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-center md:text-right">
            A mix of professional internship experience and personal passion
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
              {/* Header: Icon & Title */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                {project.hot && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase tracking-tighter">
                    Featured
                  </span>
                )}
              </div>

              <div className="mb-2">
                <p className="text-sm font-bold text-blue-500 uppercase tracking-wide">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-lg">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
                <a
                  href={project.code}
                  className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <FaGithub className="text-sm" /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
