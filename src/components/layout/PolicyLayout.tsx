import type { ReactNode } from "react";
import ParticleSwarm from "../ParticleSwarm";
import Footer from "./Footer";

interface PolicyLayoutProps {
    title: string;
    children: ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans">
            {/* Sciame di particelle interattivo */}
            <ParticleSwarm />
            {/* Contenuto principale */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 pb-8">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 gradient-text tracking-wide">
                    {title}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none mb-12">
                    {children}
                </div>

                <div className="flex justify-start mt-8">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-md hover:bg-white/20 transition-all cursor-pointer"
                    >
                        Ritorna alla home
                    </a>
                </div>
            </div>

            {/* Footer sempre uguale */}
            <Footer />
        </div>
    );
}

