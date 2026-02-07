import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SKILL_CATEGORIES } from '../constants';

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const softSkills = [
    'Trabajo en Equipo', 'Comunicación Efectiva', 'Resolución de Problemas',
    'Adaptabilidad', 'Liderazgo', 'Creatividad'
  ];

  return (
    <section ref={containerRef} className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/20 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">MIS HABILIDADES</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stack tecnológico actualizado y habilidades blandas en constante evolución.
          </p>
        </div>

        {/* Tech Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="skill-card bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-bold mb-8 text-blue-400 flex items-center gap-2 border-b border-neutral-800 pb-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center text-4xl text-gray-400 group-hover:text-white group-hover:bg-neutral-700 transition-all duration-300 shadow-lg group-hover:scale-110">
                      {/* Render the icon component if it exists */}
                      {skill.icon && <skill.icon />}
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-blue-400 transition-colors text-center w-full truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="skill-card text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-white">Habilidades Blandas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-neutral-800 rounded-full text-gray-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 cursor-default border border-neutral-700 hover:border-blue-500/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
