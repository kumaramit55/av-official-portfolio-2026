import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiReactquery,
} from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      category: "Core Foundation",
      description: "The bedrock of my web development.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <FaJsSquare className="text-yellow-400" />,
        },
      ],
    },
    {
      category: "Frontend Logic",
      description: "Building dynamic, stateful apps.",
      skills: [
        { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "API Integration",
          icon: <SiReactquery className="text-red-500" />,
        },
        {
          name: "Formik",
          icon: <span className="text-blue-600 font-bold">F</span>,
        },
      ],
    },
    {
      category: "UI & Styling",
      description: "Crafting beautiful interfaces.",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        { name: "MUI", icon: <SiMui className="text-blue-500" /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600" />,
        },
      ],
    },
    {
      category: "Workflow & Tools",
      description: "Version control and deployment.",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaDatabase className="text-gray-700" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Technical <span className="text-blue-600">Arsenal</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg md:text-xl max-w-2xl">
            My expertise ranges from fundamental web languages to advanced React
            patterns and UI frameworks.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 
                         hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 
                         transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {group.category}
              </h3>
              <p className="text-sm text-gray-400 mb-8">{group.description}</p>

              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4">
                    <div className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-700 tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
