
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../services/emailService';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    try {
      await sendEmail(form.current);
      setStatus('success');
      form.current.reset();
    } catch (error) {
      setStatus('error');
    } finally {
        setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          Ponte En <span className="text-primary">Contacto</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">¡Conozcanomos!</h3>
            <p className="text-gray-400 mb-6">
              Actualmente estoy disponible para trabajos freelance y abierta a nuevas oportunidades. Si tienes algún proyecto en mente o simplemente quieres saludar, ¡no dudes en contactarme!
            </p>
            <div className="flex space-x-6">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <link.icon size={32} />
                    </a>
                ))}
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <input type="text" name="user_name" placeholder="Tu Nombre" required className="w-full bg-background-light p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"/>
            <input type="email" name="user_email" placeholder="Tu Correo" required className="w-full bg-background-light p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"/>
            <textarea name="message" placeholder="Tu Mensaje" rows={5} required className="w-full bg-background-light p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            <button 
              type="submit" 
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg disabled:bg-gray-500"
              disabled={status === 'sending'}
              >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {status === 'success' && <p className="text-green-500 text-center">¡Mensaje enviado Correctamente!</p>}
            {status === 'error' && <p className="text-red-500 text-center">No se pudo enviar tu mensaje. Intentalo mas tarde porfavor.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
