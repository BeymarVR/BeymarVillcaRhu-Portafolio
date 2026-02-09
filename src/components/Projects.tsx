import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa';
import ProjectImageCarousel from './ProjectImageCarousel';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-950 text-white px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-700"
          >
            PROYECTOS<br />DESTACADOS
          </motion.h2>
          <div className="h-1 w-20 bg-white mt-4" />
        </div>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Carousel Section */}
              <div className="w-full lg:w-3/5 aspect-video bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-neutral-800 shadow-2xl relative group">
                <ProjectImageCarousel images={project.images} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <motion.span
                  className="text-neutral-500 font-mono text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  0{index + 1} // PROYECTO
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed font-light max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-neutral-900 rounded-full text-xs font-medium border border-neutral-800 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_5px_15px_rgba(255,255,255,0.1)]"
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-400 font-bold transition-colors underline underline-offset-8"
                    >
                      Demo en Vivo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
