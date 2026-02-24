import { motion } from 'framer-motion';
import { PLANS, WHATSAPP_NUMBER } from '../constants';
import { FaCheck, FaWhatsapp, FaStar, FaFire, FaClock } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const COUNTDOWN_KEY = 'beymar_portfolio_countdown_end';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

    useEffect(() => {
        let endTime = localStorage.getItem(COUNTDOWN_KEY);

        if (!endTime) {
            // Set end time to 24 hours from now
            const now = new Date().getTime();
            const twentyFourHours = 24 * 60 * 60 * 1000;
            endTime = (now + twentyFourHours).toString();
            localStorage.setItem(COUNTDOWN_KEY, endTime);
        }

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = parseInt(endTime!) - now;

            if (distance < 0) {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-4 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-2xl mb-8"
        >
            <div className="flex items-center gap-2 text-red-500 font-black animate-pulse">
                <FaClock />
                <span className="text-xs uppercase tracking-widest">Oferta termina en:</span>
            </div>
            <div className="flex gap-3 text-red-500 font-mono font-black text-xl">
                <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span className="opacity-50">:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span className="opacity-50">:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
        </motion.div>
    );
};

export default function Plans() {
    const whatsappUrl = (planTitle: string) => {
        const message = `Hola Beymar! Me interesa el plan: ${planTitle}. ¿Podrías darme más información?`;
        return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/, '')}?text=${encodeURIComponent(message)}`;
    };

    const landingPlans = PLANS.filter(plan => plan.category === 'landing');
    const systemPlans = PLANS.filter(plan => plan.category === 'system');

    return (
        <section id="planes" className="py-24 bg-neutral-950 text-white px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-700">
                            PLANES Y<br />PAQUETES
                        </h2>
                        <div className="h-1 w-20 bg-green-500 mt-4 mb-8" />
                        <CountdownTimer />
                    </motion.div>
                </div>

                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-neutral-100"
                    >
                        PAQUETES LANDING PAGE
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {landingPlans.map((plan, index) => (
                            <PlanCard key={plan.title} plan={plan} index={index} onSelect={whatsappUrl} />
                        ))}
                    </div>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-neutral-100"
                    >
                        PAQUETES SITIOS WEB / SISTEMAS
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {systemPlans.map((plan, index) => (
                            <PlanCard key={plan.title} plan={plan} index={index} onSelect={whatsappUrl} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlanCard({ plan, index, onSelect }: { plan: any, index: number, onSelect: (title: string) => string }) {
    const isRecommended = !!plan.recommended;
    const isOffer = plan.recommended?.toLowerCase().includes('oferta');

    // Theme colors based on plan type
    const accentColor = isOffer ? 'red-500' : (isRecommended ? 'green-500' : 'white');
    const accentBg = isOffer ? 'bg-red-500' : (isRecommended ? 'bg-green-500' : 'bg-white');
    const accentBorder = isOffer ? 'border-red-500/50' : (isRecommended ? 'border-green-500/50' : 'border-neutral-800');
    const accentShadow = isOffer ? 'shadow-red-500/10' : (isRecommended ? 'shadow-green-500/10' : 'shadow-white/5');

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-[2.5rem] border ${accentBorder} ${isRecommended || isOffer ? `bg-neutral-900/50` : 'bg-neutral-900/30'} flex flex-col h-full shadow-2xl transition-all duration-300 hover:${accentShadow} group`}
        >
            {plan.recommended && (
                <div className={`absolute -top-4 right-8 ${accentBg} text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg z-10`}>
                    {plan.recommended.toLowerCase().includes('popular') && <FaStar />}
                    {plan.recommended.toLowerCase().includes('solicitado') && <FaFire />}
                    {plan.recommended.toLowerCase().includes('oferta') && <span className="text-xs">%</span>}
                    {plan.recommended}
                </div>
            )}

            <div className="mb-6">
                <h4 className={`text-3xl font-bold mb-3 group-hover:text-${isOffer ? 'red-400' : (isRecommended ? 'green-400' : 'white')} transition-colors uppercase tracking-tight`}>{plan.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{plan.subtitle}</p>
            </div>

            <div className="mb-8 p-6 rounded-3xl bg-neutral-950/50 border border-neutral-800/50">
                <div className="flex flex-col">
                    {plan.originalPriceUsd && (
                        <span className="text-neutral-500 text-lg line-through mb-1 ml-1">$ {plan.originalPriceUsd} USD</span>
                    )}
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-white">${plan.priceUsd}</span>
                        <span className="text-neutral-500 font-medium">USD</span>
                    </div>
                </div>
                <p className={`${isOffer ? 'text-red-500' : 'text-green-500'} font-bold mt-1 text-lg`}>≈ {plan.priceBs} Bs</p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-black mt-2 block italic">Pago único</span>
            </div>

            <div className="flex-grow">
                <h5 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
                    <div className="h-px w-4 bg-neutral-800" />
                    Lo que incluye
                    <div className="h-px w-4 bg-neutral-800" />
                </h5>
                <ul className="space-y-4 mb-10">
                    {plan.includes.map((item: string, i: number) => (
                        <li key={i} className="flex gap-4 text-sm text-neutral-300 leading-tight group/item">
                            <div className={`mt-1 shrink-0 bg-${accentColor}/10 p-1 rounded-md group-hover/item:bg-${accentColor}/20 transition-colors`}>
                                <FaCheck className={`text-${accentColor} text-[10px]`} />
                            </div>
                            <span className="group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                    ))}
                </ul>

                {plan.techSpecs && (
                    <div className="mb-10 p-5 rounded-2xl bg-neutral-800/20 border border-neutral-800/50">
                        <h6 className="text-[10px] font-black uppercase tracking-widest text-neutral-600 mb-3">Detalles Técnicos</h6>
                        <div className="flex flex-wrap gap-2">
                            {plan.techSpecs.map((spec: string, i: number) => (
                                <span key={i} className="text-[10px] px-2 py-1 bg-neutral-900 rounded-md text-neutral-400 border border-neutral-800">
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <a
                href={onSelect(plan.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-black flex items-center justify-center gap-4 transition-all ${accentBg} text-black hover:opacity-90 shadow-xl active:scale-95 text-lg uppercase tracking-wider`}
            >
                <FaWhatsapp className="text-2xl" />
                ADQUIRIR PLAN
            </a>
        </motion.div>
    );
}
