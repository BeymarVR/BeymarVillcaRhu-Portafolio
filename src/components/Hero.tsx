
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-background z-0">
             {/* Optional: Animated background particles can be added here */}
        </div>
      <div className="container mx-auto px-4 text-center md:text-left z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hola! Yo Soy <span className="text-primary">Beymar Villca Rhu</span>
            </h1>
            <div className="text-2xl md:text-4xl font-semibold mb-6 text-accent h-16 md:h-12">
              <TypeAnimation
                sequence={[
                  'Desarrollador Web',
                  2000,
                  'Desarrollador en Apps Móviles Android',
                  2000,
                  'Marketing Digital',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Desarrollo aplicaciones web modernas y responsivas con especial atención a la experiencia del usuario y gestion del negocio.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="#projects"
                className="bg-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(16,185,129)' }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos <FaArrowRight />
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-transparent border-2 border-accent text-accent font-semibold py-3 px-6 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: '#F59E0B', color: '#111827' }}
                whileTap={{ scale: 0.95 }}
              >
                Contactame
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50"></div>
                <img
                src="src\assets\images\FotoBey.png"
                alt="Beymar Villca Rhu"
                className="relative rounded-full w-full h-full object-cover border-4 border-primary"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
