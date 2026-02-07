import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Reveal
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      });

      // Text Reveal
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '+1', label: 'Años de Experiencia' },
    { value: '+12', label: 'Proyectos Realizados' },
    { value: '+10', label: 'Tecnologías Dominadas' },
  ];

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-neutral-900 text-white py-20 px-4 md:px-20 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition duration-500"></div>
          <img
            ref={imageRef}
            src="images/fotodeperfil.jpg"
            alt="Beymar Villca Rhu"
            className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] max-h-[600px] grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Text Section */}
        <div ref={textRef} className="space-y-8">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">
            Introducción
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Un Poco Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mí</span>
          </h3>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
            <p>
              ¡Hola! Soy <strong className="text-white font-semibold">Beymar Jesus Villca Rhu</strong>, Ingeniero en Sistemas fascinado por la tecnología y su capacidad de transformar ideas en realidad.
            </p>
            <p>
              Mi enfoque combina la lógica técnica con un diseño creativo, asegurando que cada proyecto no solo funcione perfectamente, sino que también se vea increíble.
            </p>
            <p>
              Fuera del código, me apasiona el deporte (Voleibol y Basket) y mantener un estilo de vida activo mediante calistenia. Creo que el equilibrio entre mente y cuerpo es clave para la vida en general.
            </p>
          </div>

          {/* Wrapper for Stats to separate them nicely */}
          <div className="pt-8 border-t border-neutral-800">
            <div className="grid grid-cols-3 gap-6">
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
