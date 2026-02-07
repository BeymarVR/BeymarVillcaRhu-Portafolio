import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5,
      });

      // Scroll Parallax
      gsap.to(textRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />

      {/* Background Element */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/FotoBey.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-900/80"></div>
      </div>

      <div className="relative z-20 text-center px-4">
        <h1
          ref={textRef}
          className="text-5xl md:text-8xl font-bold tracking-tighter mix-blend-difference"
        >
          BEYMAR VILLCA RHU<br />
          <span className="text-xl md:text-3xl font-light tracking-widest block mt-6 text-gray-400">
            INGENIERO DE SISTEMAS / SOFTWARE / DESARROLLADOR WEB
          </span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl font-light text-green-500 animate-bounce">
          Scrollear para explorar
        </p>
      </div>
    </section>
  );
}
