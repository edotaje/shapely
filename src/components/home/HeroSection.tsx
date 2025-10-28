import { Linkedin, MessageCircleHeart, Mail } from "lucide-react";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
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

            {/* Navbar */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 px-3 py-1 text-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Studio su invito | 2 slot disponibili</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold gradient-text mb-6 leading-tight">
                    We are Shapely.
                </h1>
                <p className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-2xl">
                    Nati per dare forma alle tue idee.
                </p>
            </div>

            {/* Footer buttons - LinkedIn e Made with love */}
            <div className="relative z-20 flex justify-between items-end px-8 pb-6">
                {/* Floated buttons - sinistra */}
                <div className="flex gap-2 flex-col items-start">
                    <a
                        href="https://linkedin.com/company/shapely-bt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 transition-all"
                    >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://wa.me/393273792270"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 transition-all"
                    >
                        <MessageCircleHeart className="h-4 w-4" />
                        <span>WhatsApp</span>
                    </a>
                    <a
                        href="mailto:info@shapely.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 transition-all"
                    >
                        <Mail className="h-4 w-4" />
                        <span>info@shapely.it</span>
                    </a>

                </div>




            </div>

            {/* Gradiente di transizione verso la sezione successiva */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-5 translate-y-12"></div>
        </section>
    );
}

