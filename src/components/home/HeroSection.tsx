import { Linkedin, MessageCircleHeart, Mail, MessageSquare, X } from "lucide-react";
// import Navbar from "../layout/Navbar";
import { useState } from "react";

interface HeroSectionProps {
    onOpenMore: () => void;
}

export default function HeroSection({ onOpenMore }: HeroSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="h-screen relative flex flex-col overflow-hidden">
            {/* Animated Aurora Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-950 to-black">
                <div className="absolute inset-0 opacity-60">
                    <div className="aurora-blob aurora-blob-1"></div>
                    <div className="aurora-blob aurora-blob-2"></div>
                    <div className="aurora-blob aurora-blob-3"></div>
                </div>
            </div>

            {/* Overlay per migliorare la leggibilità */}
            <div className="absolute inset-0 bg-black/25 z-5"></div>

            {/* Navbar 
            <Navbar />
            */}

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 px-3 py-1 text-xs availability-badge">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 availability-dot" />
                    <span>Open to work | 2 slot disponibili</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold gradient-text mb-6 leading-tight">
                    We are Shapely.
                </h1>
                <p className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-2xl">
                    Trasformiamo le tue idee in esperienze digitali straordinarie.
                </p>
                <button
                    onClick={onOpenMore}
                    className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-md hover:bg-white/20 transition-all cursor-pointer"
                >
                    Voglio sapere di più
                </button>
            </div>

            {/* Floating Action Button - sinistra basso */}
            <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-3">
                {/* Bottoni secondari che appaiono sopra */}
                <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <a
                        href="https://linkedin.com/company/shapely-bt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-200"
                        style={{
                            transitionDelay: isOpen ? '0ms' : '0ms'
                        }}
                    >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://wa.me/393273792270"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-200"
                        style={{
                            transitionDelay: isOpen ? '50ms' : '0ms'
                        }}
                    >
                        <MessageCircleHeart className="h-4 w-4" />
                        <span>WhatsApp</span>
                    </a>
                    <a
                        href="mailto:info@shapely.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-200"
                        style={{
                            transitionDelay: isOpen ? '100ms' : '0ms'
                        }}
                    >
                        <Mail className="h-4 w-4" />
                        <span>info@shapely.it</span>
                    </a>
                </div>

                {/* Bottone principale */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all duration-200"
                    aria-label="Toggle contact menu"
                >
                    <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        {isOpen ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                    </div>
                </button>
            </div>

            {/* Gradiente di transizione verso la sezione successiva */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-5 translate-y-12"></div>
        </section>
    );
}

