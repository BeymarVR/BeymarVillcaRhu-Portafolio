import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {

  // WhatsApp Number
  const whatsappNumber = "+59175254640";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

  return (
    <section id="contact" className="py-32 bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>

      <div className="container mx-auto px-4 md:px-20 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            HABLEMOS
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
            ¿Tienes una idea increíble en mente? ¿Necesitas un desarrollador freelance?
            ¡Escríbeme directamente a WhatsApp y hagámoslo realidad!
          </p>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-[#25D366] text-black px-10 py-6 rounded-full text-2xl font-bold hover:bg-[#1EBE57] transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transform hover:-translate-y-1"
          >
            <FaWhatsapp className="text-4xl" />
            <span>Chatear en WhatsApp</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:scale-105 transition-transform duration-300"></div>
          </a>

          <p className="mt-6 text-gray-500 font-mono text-sm">
            +591 75254640
          </p>

          {/* Social Links Divider */}
          <div className="my-16 flex items-center justify-center gap-4 opacity-30">
            <div className="h-px w-20 bg-white"></div>
            <span className="text-sm">O ENCUÉNTRAME EN</span>
            <div className="h-px w-20 bg-white"></div>
          </div>

          {/* Other Socials */}
          <div className="flex justify-center gap-8">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              >
                <link.icon size={32} />
              </a>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
