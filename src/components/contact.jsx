import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="bg-gray-900/50 border border-gray-800 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 text-center">
          {/* Section Label */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.2em] bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full font-bold">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Ready to build <br className="hidden sm:block" />
            something <span className="text-blue-500">extraordinary?</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you have a question about a frontend role, a project, or
            just want to say hi, my inbox is always open.
          </p>

          {/* Action Buttons: Vertical on mobile, Horizontal on Tablet+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="mailto:amitkverma551@email.com"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full font-bold transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95">
              <FaEnvelope className="text-lg" />
              Email Me
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar555/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 border border-gray-700 text-white rounded-full font-bold transition-all hover:bg-white hover:text-black active:scale-95">
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Amit Kumar Verma. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/kumaramit55"
                className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
