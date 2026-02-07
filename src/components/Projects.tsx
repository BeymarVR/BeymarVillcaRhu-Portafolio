import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = sliderRef.current?.scrollWidth || 0;
      const windowWidth = window.innerWidth;

      if (totalWidth > windowWidth) {
        gsap.to(sliderRef.current, {
          x: () => -(totalWidth - windowWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-neutral-950 text-white overflow-hidden flex items-center relative">
      <div className="absolute top-10 left-10 z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
          PROYECTOS DESTACADOS
        </h2>
      </div>

      <div ref={sliderRef} className="flex gap-10 px-10 items-center h-full pt-28">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col group relative"
          >
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg text-gray-300 mb-6 line-clamp-3 md:line-clamp-none max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
              >
                Ver Código en GitHub
              </a>
            </div>
          </div>
        ))}
        {/* Padding right */}
        <div className="w-20 flex-shrink-0" />
      </div>
    </section>
  );
}
