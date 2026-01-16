
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const stats = [
        { value: '+1', label: 'Año de Experiencia' },
        { value: '+10', label: 'Proyectos Web/Android' },
        { value: '+10', label: 'Tecnologias Aprendidas' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

  return (
    <section id="about" className="py-20">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-12">
          Un Poquito Sobre <span className="text-primary">Mi</span>
        </motion.h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                    src="src\assets\images\FotoBey.png"
                    alt="About me"
                    className="relative rounded-lg w-full object-cover"
                />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-3">
            <p className="text-gray-300 mb-6 leading-relaxed">
              ¡Hola! Soy Beymar Jesus Villca Rhu un Ing. en Sistemas/Software que se quedo facinado con la programación por su capacidad para dar vida a las ideas. Mi trayectoria comenzó con un simple "¡Hola, mundo!" y desde entonces ha evolucionado hasta la creación de landing page, aplicaciones web simples o complejas, centradas en el usuario.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Cuando no estoy programando, me encontrarás jugando Voleibol o Bascket, si no es eso estare creando contenido variado en mis redes o entrenando en el gym o 
              calistenia en casita, o talvez sumergido en una buena serie/anime degustando de una buena comida. 
              Creo que una vida equilibrada fomenta la creatividad y la innovación en mi trabajo.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map(stat => (
                    <div key={stat.label} className="bg-background-light p-4 rounded-lg">
                        <p className="text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
